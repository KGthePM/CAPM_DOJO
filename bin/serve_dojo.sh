#!/usr/bin/env bash
# CAPM Dojo LAN server — serves ~/capm-dojo/web on all interfaces so
# Kyle's phone/laptop (same WiFi) can use the dojo while it runs on the desktop.
# Usage: serve_dojo.sh [port]   (default 8090)
set -euo pipefail
PORT="${1:-8090}"
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)/web"
IP="$(hostname -I | awk '{print $1}')"
echo "CAPM Dojo serving on http://${IP}:${PORT}  (Ctrl+C to stop)"
exec python3 -m http.server "$PORT" --bind 0.0.0.0 --directory "$DIR"
