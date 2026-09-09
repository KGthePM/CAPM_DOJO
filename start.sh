#!/usr/bin/env bash
# One-command dojo launch: rebuild web/index.html from lessons/ + quiz_bank/, then serve on the LAN.
# Usage: ./start.sh [port]   (default 8090)
set -euo pipefail
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

python3 "$DIR/session/build_inject.py"
exec "$DIR/bin/serve_dojo.sh" "$@"
