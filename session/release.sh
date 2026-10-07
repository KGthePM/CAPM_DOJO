#!/usr/bin/env bash
# Publish a dojo content release to GitHub Releases.
# Usage: session/release.sh 1.1.1 "Release notes"
# Requires: curl + a GITHUB_TOKEN (env var) with repo scope for KGthePM/CAPM_DOJO.
set -euo pipefail

VER="${1:?Usage: release.sh VERSION \"NOTES\"}"
NOTES="${2:-Dojo content update v$VER}"
REPO="KGthePM/CAPM_DOJO"
TAG="content-v$VER"
DOJO="$(cd "$(dirname "$0")/.." && pwd)"
cd "$DOJO"

# 1. bump desktop/package.json version (source of truth for the stamp)
python3 - "$VER" << 'PYEOF'
import json, sys
ver = sys.argv[1]
p = "desktop/package.json"
d = json.load(open(p))
d["version"] = ver
json.dump(d, open(p, "w"), indent=2)
open(p, "a").write("\n")
print(f"version bumped to {ver}")
PYEOF

python3 session/build_inject.py | tail -4

# sanity: stamp present and matches
STAMPED=$(grep -o 'window.DOJO_VERSION = "[^"]*";' web/index.html | grep -o '[0-9.]*' | head -1)
[ "$STAMPED" = "$VER" ] || { echo "FATAL: stamped version $STAMPED != $VER"; exit 1; }

# 2. commit + push to main so the repo and the release agree
git add -A
git commit -m "Release content v$VER

$NOTES" || echo "(nothing to commit — content already at v$VER)"
git push origin main

# 3. create the GitHub release with index.html as the asset
ASSET="$DOJO/web/index.html"
SIZE=$(wc -c < "$ASSET")

echo "Creating release $TAG…"
JSON_PAYLOAD=$(python3 - "$TAG" "$NOTES" << 'PYEOF'
import json, sys
print(json.dumps({
    "tag_name": sys.argv[1],
    "target_commitish": "main",
    "name": f"Dojo Content {sys.argv[1]}",
    "body": sys.argv[2],
    "draft": False,
    "prerelease": False,
}))
PYEOF
)

RESP=$(curl -sS -X POST \
  -H "Authorization: Bearer ${GITHUB_TOKEN:?GITHUB_TOKEN env var required}" \
  -H "Accept: application/vnd.github+json" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  "https://api.github.com/repos/$REPO/releases" \
  -d "$JSON_PAYLOAD")

UPLOAD_URL=$(echo "$RESP" | python3 -c "import json,sys; d=json.load(sys.stdin); print(d.get('upload_url','').split('{')[0]) or ''" 2>/dev/null || true)
if [ -z "$UPLOAD_URL" ]; then
  echo "FATAL: release creation failed:"
  echo "$RESP" | head -20
  exit 1
fi

echo "Uploading index.html ($SIZE bytes)…"
UP=$(curl -sS -X POST \
  -H "Authorization: Bearer $GITHUB_TOKEN" \
  -H "Content-Type: text/html" \
  --data-binary "@$ASSET" \
  "$UPLOAD_URL?name=index.html")

STATE=$(echo "$UP" | python3 -c "import json,sys; print(json.load(sys.stdin).get('state',''))" 2>/dev/null || true)
[ "$STATE" = "uploaded" ] || { echo "FATAL: asset upload failed:"; echo "$UP" | head -20; exit 1; }

echo ""
echo "✅ Released $TAG — devices will pick it up via Check for Updates."
echo "   https://github.com/$REPO/releases/tag/$TAG"
