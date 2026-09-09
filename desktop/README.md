# CAPM Training Dojo — Desktop (Electron)

Wraps the single-file dojo (`web/index.html`) in a native macOS/Windows/Linux app.
No server, no network — the whole dojo ships inside the app.

## Layout

- `main.js` — Electron main process (hardened: contextIsolation on, nodeIntegration off, sandbox on)
- `app/index.html` — copy of `web/index.html` (refreshed automatically before every build)
- `icon.png` + `icons/` — dojo-themed app icon (forest/gold/parchment palette)
- `entitlements.mac.plist` — minimal hardened-runtime entitlements

## Everyday use (on the MacBook)

```bash
git pull
cd desktop
npm install        # first time only
npm run refresh    # pull latest web/index.html into the app bundle
npm start          # launch the dojo as an app
```

## Building the macOS app (.app + .dmg)

**Must be run on the Mac** — Apple's codesign/notarytool don't exist on Linux.

### One-time setup

1. Install Node (brew install node) and Xcode command line tools.
2. Certificates: in [developer.apple.com → Certificates](https://developer.apple.com/account/resources/certificates/list)
   create a **Developer ID Application** certificate; download and open it so it
   lands in your keychain.
3. App-specific password for notarization:
   [appleid.apple.com → Sign-In and Security → App-Specific Passwords](https://appleid.apple.com/account/manage).
   Then store it once:
   ```bash
   xcrun notarytool store-credentials capm-dojo-notary \
     --apple-id YOUR_APPLE_ID --team-id YOUR_TEAM_ID \
     --password APP_SPECIFIC_PASSWORD
   ```

### Build (signed + notarized, no Gatekeeper warnings)

```bash
cd desktop
CSC_NAME="YOUR NAME (TEAM_ID)" \
APPLE_ID="your@apple.id" \
APPLE_TEAM_ID="TEAM_ID" \
APPLE_APP_SPECIFIC_PASSWORD="app-specific-password" \
npm run dist
```

Note: `CSC_NAME` must be just the certificate's common name — omit the
`Developer ID Application:` prefix, or electron-builder errors out.

Output lands in `desktop/dist/`: `CAPM Training Dojo-1.0.0-arm64.dmg` (Apple Silicon),
`-x64.dmg` (Intel), plus zips. Drag to /Applications — it opens with no warnings
once notarized.

Shortcut (preferred — no Apple ID/password sitting in shell env or history):
after `notarytool store-credentials` (step 3 above), just set the keychain profile
name and `CSC_NAME`:

```bash
cd desktop
CSC_NAME="YOUR NAME (TEAM_ID)" \
APPLE_KEYCHAIN_PROFILE="capm-dojo-notary" \
npm run dist
```

### Build (unsigned — fine for personal use, right-click→Open on first launch)

```bash
npm run dist:unsigned
```

### Linux build (run on the Linux PC — fully verified there)

```bash
cd desktop
npm run dist:linux
```

Outputs `dist/CAPM Training Dojo-1.0.0.AppImage` (single file, no install needed —
just `chmod +x` and run) and `dist/capm-dojo_1.0.0_amd64.deb`. Current install on
this PC: AppImage at `~/Applications/`, launcher in the Cinnamon menu + desktop
shortcut, icon in `~/.local/share/icons/hicolor/512x512/apps/capm-dojo.png`.

## Progress data

Completion history lives in localStorage inside the app (`capm_dojo_state`), separate
from any browser copy of the dojo. **File → Export Progress…** writes a JSON snapshot;
**File → Import Progress…** restores it — use this to carry progress from the browser
version or between machines.

## Verification

`npm run smoke` (headless) loads the app, checks title, LESSONS/QUIZ counts, and
localStorage — exit code 0 = healthy. Run it after any content refresh.
