# CAPM Training Dojo

Kyle's personal CAPM exam-prep academy: hand-authored lecture notes and quiz questions, injected
into one self-contained offline web app. Taught throughout by **Professor Ainsworth** — a
stern-but-warm New England professor persona who addresses Kyle as "Mr. Gomez."

Reference texts: PMBOK® Guide 7th Ed and its companion Agile/Business Analysis/Process Groups
guides, plus the official ECO — all PMI member copies licensed to Kyle for personal use only.

## Quick start

```bash
./start.sh [port]     # rebuild web/index.html, then serve it on the LAN (default port 8090)
```

`start.sh` prints the LAN URL to open on your phone or laptop, plus the build's per-lesson
block/term counts and total question count — check that printout against what you changed; it's
the project's only verification step (no test suite). Press Ctrl+C to stop the server.

The two steps are also available separately:

```bash
python3 session/build_inject.py     # rebuild web/index.html after editing lessons/ or quiz_bank/
bin/serve_dojo.sh [port]             # serve web/ on 0.0.0.0:<port> without rebuilding
```

`web/index.html` is fully self-contained (no server-side logic needed beyond serving the static
file).

## Layout

- `lessons/` — 13 lecture files, `LEC-01.md` … `LEC-13.md`, one per module
- `quiz_bank/` — 8 JSON files, 98 practice questions total (source of truth for the quiz engine)
- `session/` — the build script (`build_inject.py`), extracted PMI source texts and research notes
  used to write lessons/quizzes (personal-use-only — never publish these), and `state.json`
- `web/index.html` — the single built app file. CSS, screens, state/localStorage, and the quiz
  engine are hand-edited here directly and survive rebuilds; only the injected `LESSONS` and `QUIZ`
  arrays get regenerated. Never regenerate the whole file.
- `bin/serve_dojo.sh` — LAN server wrapper
- `start.sh` — convenience wrapper: build then serve, in one command

## More detail

- `CLAUDE.md` — the authoritative build contract: lecture/quiz file formats, how the injector works,
  lesson ID rules, things to avoid.
- `EXAM_INTEL.md` — verified exam structure and ECO domain weightings.
- `session/ECO_OBJECTIVES.md` — the 60-objective spine every lecture/quiz item should map to.
- `COVERAGE_MAP.md` — coverage ledger and progress log.
- `PHASE3_PLAN.md` — next planned content work.
