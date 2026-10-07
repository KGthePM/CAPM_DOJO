// CAPM Training Dojo — Electron main process.
// Loads the single self-contained web/app/index.html (no server, no node integration).
const { app, BrowserWindow, Menu, dialog, shell, net } = require('electron');
const path = require('path');
const fs = require('fs');

const isSmokeTest = !!process.env.DOJO_SMOKE_TEST;

// ------------------------------------------------------------------
// CONTENT UPDATER — GitHub Releases
// Content (app/index.html) is versioned independently of this wrapper:
// releases tagged content-vX.Y.Z carry index.html as an asset. This
// checks, downloads, verifies, and atomically swaps that file. Progress
// (localStorage) lives in userData, so updates never touch the ledger.
// ------------------------------------------------------------------
const UPDATE_REPO = 'KGthePM/CAPM_DOJO';
const CONTENT_MARKER = 'CAPM Training Dojo'; // sanity string the download must contain
let autoUpdateEnabled = true;

function apiGet(pathStr, cb) {
  const req = net.request({
    method: 'GET',
    host: 'api.github.com',
    path: pathStr,
    headers: { 'User-Agent': 'capm-dojo-updater', Accept: 'application/vnd.github+json' },
  });
  let body = '';
  req.on('response', (res) => {
    res.on('data', (c) => { body += c; });
    res.on('end', () => cb(null, res.statusCode, body));
  });
  req.on('error', (err) => cb(err));
  req.end();
}

function versionFromTag(tag) {
  const m = String(tag).match(/(\d+\.\d+\.\d+)/);
  return m ? m[1] : null;
}

// >0 if a newer, 0 equal, <0 older
function compareVersions(a, b) {
  const pa = String(a).split('.').map(Number);
  const pb = String(b).split('.').map(Number);
  for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
    const d = (pa[i] || 0) - (pb[i] || 0);
    if (d !== 0) return d;
  }
  return 0;
}

function checkForUpdates(currentVersion, cb) {
  apiGet(`/repos/${UPDATE_REPO}/releases/latest`, (err, status, body) => {
    if (err) return cb(err);
    if (status !== 200) return cb(new Error(`GitHub API returned ${status}`));
    let rel;
    try { rel = JSON.parse(body); } catch (e) { return cb(e); }
    const latest = versionFromTag(rel.tag_name);
    if (!latest) return cb(new Error(`unparseable release tag: ${rel.tag_name}`));
    const asset = (rel.assets || []).find((a) => a.name === 'index.html');
    if (!asset) return cb(new Error('latest release is missing the index.html asset'));
    if (compareVersions(latest, currentVersion) <= 0) {
      return cb(null, { status: 'up-to-date', version: currentVersion });
    }
    cb(null, { status: 'available', version: latest, notes: rel.body || '', asset });
  });
}

function applyUpdate(win, info, onProgress, cb) {
  const target = path.join(__dirname, 'app', 'index.html');
  const tmp = target + '.update-tmp';
  const prev = target + '.prev';
  const req = net.request({
    method: 'GET',
    host: 'github.com',
    path: info.asset.browser_download_url.replace('https://github.com', ''),
    headers: { 'User-Agent': 'capm-dojo-updater' },
  });
  req.on('response', (res) => {
    if (res.statusCode !== 200) return cb(new Error(`asset download HTTP ${res.statusCode}`));
    const total = parseInt(res.headers['content-length'] || '0', 10);
    const chunks = [];
    let received = 0;
    res.on('data', (c) => {
      received += c.length;
      chunks.push(c);
      if (onProgress && total) onProgress(received / total);
    });
    res.on('end', () => {
      const buf = Buffer.concat(chunks);
      if (total && buf.length !== total) {
        return cb(new Error(`truncated download (${buf.length}/${total} bytes) — install untouched`));
      }
      const text = buf.toString('utf8');
      if (!text.includes(CONTENT_MARKER) || text.length < 10000) {
        return cb(new Error('downloaded file failed verification — discarded, install untouched'));
      }
      try {
        if (fs.existsSync(target)) fs.copyFileSync(target, prev); // one-step rollback copy
        fs.writeFileSync(tmp, buf);
        fs.renameSync(tmp, target); // atomic swap on same filesystem
      } catch (e) { return cb(e); }
      win.reload();
      cb(null, info.version);
    });
  });
  req.on('error', (err) => cb(err));
  req.end();
}

function getCurrentVersion(win, cb) {
  win.webContents.executeJavaScript('window.DOJO_VERSION')
    .then((v) => cb(v || app.__dojoVersion))
    .catch(() => cb(app.__dojoVersion));
}

function checkForUpdatesInteractive(win) {
  getCurrentVersion(win, (current) => {
    checkForUpdates(current, (err, result) => {
      if (err) {
        dialog.showMessageBox(win, {
          type: 'warning',
          message: 'Update check failed',
          detail: `${String(err.message || err)}\n\n(No internet, or GitHub is unreachable.)`,
        });
        return;
      }
      if (result.status === 'up-to-date') {
        dialog.showMessageBox(win, {
          type: 'info',
          message: 'You are up to date',
          detail: `The dojo is current at version ${result.version}.`,
        });
        return;
      }
      const { response } = dialog.showMessageBoxSync(win, {
        type: 'question',
        buttons: ['Download & Install', 'Not Now'],
        defaultId: 0,
        cancelId: 1,
        message: `Update available: version ${result.version}`,
        detail: (result.notes || '').slice(0, 1500) || 'Updated dojo content is available.',
      });
      if (response !== 0) return;
      const pbWin = new BrowserWindow({
        width: 360, height: 110, parent: win, modal: false, frame: false,
        resizable: false, show: true, backgroundColor: '#faf4e6', title: 'Updating',
        webPreferences: { sandbox: true },
      });
      let lastPct = -1;
      applyUpdate(win, result, (frac) => {
        const pct = Math.round(frac * 100);
        if (pct !== lastPct) {
          lastPct = pct;
          pbWin.setTitle(`Downloading update… ${pct}%`);
        }
      }, (err2, ver) => {
        pbWin.close();
        if (err2) {
          dialog.showMessageBox(win, {
            type: 'warning',
            message: 'Update failed',
            detail: String(err2.message || err2),
          });
        } else {
          dialog.showMessageBox(win, {
            type: 'info',
            message: 'Updated',
            detail: `Dojo content updated to version ${ver}. Your progress is untouched.`,
          });
        }
      });
    });
  });
}

// silent launch check — only speaks up when an update exists
function autoCheckOnLaunch(win) {
  if (!autoUpdateEnabled) return;
  setTimeout(() => {
    if (win.isDestroyed()) return;
    getCurrentVersion(win, (current) => {
      checkForUpdates(current, (err, result) => {
        if (err || !result || result.status !== 'available') return;
        if (win.isDestroyed()) return;
        dialog.showMessageBox(win, {
          type: 'info',
          message: `Update available: version ${result.version}`,
          detail: 'Open “Check for Updates…” in the File menu to install it.',
        });
      });
    });
  }, 4000);
}

function toggleAutoUpdate(win) {
  const next = !autoUpdateEnabled;
  autoUpdateEnabled = next;
  win.webContents.executeJavaScript(`localStorage.setItem('dojo_auto_update', '${next ? '1' : '0'}')`)
    .catch(() => {});
  dialog.showMessageBox(win, {
    type: 'info',
    message: next ? 'Automatic update checks are ON' : 'Automatic update checks are OFF',
    detail: next
      ? 'The dojo checks GitHub for new content at launch (silent unless an update exists).'
      : 'You can still check manually via “Check for Updates…”.',
  });
}

function restoreAutoSetting(win) {
  win.webContents.executeJavaScript("localStorage.getItem('dojo_auto_update')")
    .then((v) => { autoUpdateEnabled = v !== '0'; })
    .catch(() => {});
}
// ------------------------------------------------------------------

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 860,
    minWidth: 480,
    minHeight: 420,
    backgroundColor: '#431414', // oxblood-deep: no white flash on launch
    title: 'CAPM Training Dojo',
    show: false,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
      spellcheck: false,
    },
  });

  win.once('ready-to-show', () => win.show());
  win.loadFile(path.join(__dirname, 'app', 'index.html'));

  // Any window.open / target=_blank goes to the real browser, never in-app.
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('http')) shell.openExternal(url);
    return { action: 'deny' };
  });

  if (isSmokeTest) {
    win.webContents.once('did-finish-load', async () => {
      try {
        const title = await win.webContents.executeJavaScript('document.title');
        const nLessons = await win.webContents.executeJavaScript(
          'Array.isArray(LESSONS) ? LESSONS.length : -1'
        );
        const nQuiz = await win.webContents.executeJavaScript(
          'Array.isArray(QUIZ) ? QUIZ.length : -1'
        );
        await win.webContents.executeJavaScript('localStorage.setItem("smoke","ok")');
        const ls = await win.webContents.executeJavaScript('localStorage.getItem("smoke")');
        console.log(`SMOKE title=${title}`);
        console.log(`SMOKE lessons=${nLessons} quiz=${nQuiz} localStorage=${ls}`);
        app.exit(ls === 'ok' && nLessons > 0 && nQuiz > 0 ? 0 : 1);
      } catch (err) {
        console.error('SMOKE FAIL', err);
        app.exit(1);
      }
    });
  }
  if (process.env.DOJO_SHOT) {
    win.webContents.once('did-finish-load', async () => {
      await new Promise((r) => setTimeout(r, 2500));
      const img = await win.webContents.capturePage();
      require('fs').writeFileSync('/tmp/dojo_shot.png', img.toPNG());
      app.exit(0);
    });
  }
  return win;
}

// ---- Progress export/import (localStorage snapshot -> JSON file) ----
async function exportProgress(win) {
  try {
    const snapshot = await win.webContents.executeJavaScript(
      'JSON.stringify(Object.fromEntries(Object.entries(localStorage)))'
    );
    const { canceled, filePath } = await dialog.showSaveDialog(win, {
      title: 'Export Dojo Progress',
      defaultPath: 'capm-dojo-progress.json',
      filters: [{ name: 'JSON', extensions: ['json'] }],
    });
    if (canceled || !filePath) return;
    fs.writeFileSync(filePath, snapshot, 'utf8');
    dialog.showMessageBox(win, {
      type: 'info',
      message: 'Progress exported',
      detail: `Saved to ${filePath}`,
    });
  } catch (err) {
    dialog.showErrorBox('Export failed', String(err));
  }
}

async function importProgress(win) {
  try {
    const { canceled, filePaths } = await dialog.showOpenDialog(win, {
      title: 'Import Dojo Progress',
      filters: [{ name: 'JSON', extensions: ['json'] }],
      properties: ['openFile'],
    });
    if (canceled || !filePaths[0]) return;
    const raw = fs.readFileSync(filePaths[0], 'utf8');
    const data = JSON.parse(raw); // throws on garbage -> error box
    const payload = JSON.stringify(data);
    await win.webContents.executeJavaScript(
      `(() => { const d = ${payload}; for (const [k,v] of Object.entries(d)) localStorage.setItem(k, String(v)); return Object.keys(d).length; })()`
    );
    dialog.showMessageBox(win, {
      type: 'info',
      message: 'Progress imported',
      detail: `${Object.keys(data).length} record(s) loaded — reloading…`,
    });
    win.reload();
  } catch (err) {
    dialog.showErrorBox('Import failed', String(err));
  }
}

function buildMenu() {
  const fileMenu = {
    label: 'File',
    submenu: [
      { label: 'Export Progress…', accelerator: 'CmdOrCtrl+Shift+E', click: () => { const w = BrowserWindow.getFocusedWindow(); if (w) exportProgress(w); } },
      { label: 'Import Progress…', accelerator: 'CmdOrCtrl+Shift+I', click: () => { const w = BrowserWindow.getFocusedWindow(); if (w) importProgress(w); } },
      { type: 'separator' },
      { label: 'Check for Updates…', accelerator: 'CmdOrCtrl+U', click: () => { const w = BrowserWindow.getFocusedWindow(); if (w) checkForUpdatesInteractive(w); } },
      { label: 'Check for Updates at Launch', type: 'checkbox', checked: autoUpdateEnabled, click: (item) => { const w = BrowserWindow.getFocusedWindow(); if (w) { toggleAutoUpdate(w); item.checked = autoUpdateEnabled; } } },
      { type: 'separator' },
      { role: 'close' },
    ],
  };
  const template = [
    ...(process.platform === 'darwin'
      ? [{
          label: app.name,
          submenu: [
            { role: 'about' },
            { type: 'separator' },
            { role: 'hide' },
            { role: 'hideOthers' },
            { type: 'separator' },
            { role: 'quit' },
          ],
        }]
      : []),
    fileMenu,
    { role: 'editMenu' },
    {
      label: 'View',
      submenu: [
        { role: 'reload' },
        { role: 'toggleDevTools' },
        { type: 'separator' },
        { role: 'resetZoom' },
        { role: 'zoomIn' },
        { role: 'zoomOut' },
        { type: 'separator' },
        { role: 'togglefullscreen' },
      ],
    },
    { role: 'windowMenu' },
  ];
  return Menu.buildFromTemplate(template);
}

app.whenReady().then(() => {
  Menu.setApplicationMenu(buildMenu());
  const win = createWindow();
  win.webContents.once('did-finish-load', () => {
    restoreAutoSetting(win);
    if (!isSmokeTest && !process.env.DOJO_SHOT) autoCheckOnLaunch(win);
  });
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
