// CAPM Training Dojo — Electron main process.
// Loads the single self-contained web/app/index.html (no server, no node integration).
const { app, BrowserWindow, Menu, dialog, shell } = require('electron');
const path = require('path');
const fs = require('fs');

const isSmokeTest = !!process.env.DOJO_SMOKE_TEST;

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
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
