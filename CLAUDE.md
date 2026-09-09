# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-student CAPM exam-prep "dojo" for Kyle: hand-authored lecture notes and quiz questions
(the real content) plus a small Python build step that injects them into one self-contained
offline web app. There is no framework, no package manager, no test suite, and no git repo.

The teaching persona throughout is **Professor Ainsworth** — stern-but-warm New England professor
who addresses the student as "Mr. Gomez." Match that voice when writing or editing lectures.

## Commands

```bash
python3 session/build_inject.py     # regenerate web/index.html from lessons/ + quiz_bank/
bin/serve_dojo.sh [port]            # serve web/ on 0.0.0.0:8090 for phone/laptop on the LAN
```

`build_inject.py` prints per-lesson block/term counts and the total question count — that printout
**is** the verification step. Always rebuild after touching `lessons/` or `quiz_bank/`, then confirm
the counts match what you added.

`DOJO` in `build_inject.py` is derived from the script's own file location, so the build works
correctly regardless of where the repo is cloned (e.g. across Kyle's desktop and laptop).

## Build pipeline (the one piece of real machinery)

`session/build_inject.py` globs `lessons/LEC-*.md` and `quiz_bank/qb_*.json`, converts markdown to
HTML block arrays, and **surgically replaces only the `const LESSONS = [...]` and `const QUIZ = [...]`
arrays** in `web/index.html` via bracket-depth scanning. Everything else in that 2,900-line file —
CSS, screens, state/localStorage logic, quiz engine — is hand-edited in place and survives rebuilds.
So: edit app behavior directly in `web/index.html`; never regenerate the whole file.

Lesson IDs are **positional** (`lec-01`, `lec-02`, … assigned by sorted filename order), not derived
from the LEC number. Inserting a lecture out of order renumbers everything downstream and orphans
completion records saved under the old IDs in localStorage (`capm_dojo_state`).

### Lecture file contract (the parser depends on this)

- `# LEC-NN — Title` on line 1. The `LEC-NN — ` prefix is stripped for the app title.
- `##` / `###` headings, `-` bullets, `**bold**` / `*italic*` / `` `code` `` inline. Tables and
  numbered lists are **not** parsed — they degrade into paragraphs. Avoid them in lectures.
- A `## Key Terms` section near the end whose bullets are `- **Term** — definition`. Only that exact
  shape is picked up as a flashcard term; everything after the `## Key Terms` heading is scanned.
- House style: each major concept gets a `*Bar Exam:*` bullet naming the trap PMI sets, and the file
  ends with `## Self-Check Questions`.

### Quiz JSON contract

Array of `{id, domain, difficulty, stem, options[4], answer (0-based index), explanation}`.
`build_inject.py` reads exactly those keys; extra keys (e.g. the planned `objective` tag) are ignored
by the injector and exist only for coverage audits. IDs are per-file prefixes (`FND-`, `AG-`, `BA-`,
`P-`, `T-`, `M-`, `MA-`, `QB-`) and must stay globally unique — files are concatenated.

`domain` strings render as chips and drive the per-domain results table. Phase 3 standardizes on the
four ECO domains — `"Fundamentals"`, `"Predictive, Plan-Based"`, `"Agile"`, `"Business Analysis"` —
but the existing bank still uses PMBOK-section domains (`"Principles"`, `"Tailoring"`,
`"Models & Methods"`, `"Sponsor, PMO & Product"`, …). Don't invent new domain values.

## Content authority

Study these before writing content; they are the project's spec, not background reading:

- `EXAM_INTEL.md` — verified exam structure and the ECO domain weightings (**Fundamentals 36% /
  Business Analysis 27% / Agile 20% / Predictive 17%**). Every content decision keys off these.
  Crucially: the CAPM is **not** bound by PMBOK 7 — three companion books carry most of the exam.
- `session/ECO_OBJECTIVES.md` — the authoritative spine: 60 objectives across 19 tasks / 4 domains,
  IDs `DnTm-k`. Rule: every objective needs ≥1 lecture section and ≥2 quiz questions.
- `COVERAGE_MAP.md` — coverage ledger + progress log. Update the log whenever content ships.
- `PHASE3_PLAN.md` — the next planned work (ECO task mastery, book-grounded verification, a 150-Q
  "Grand Examination" mode). Read it before starting anything large; it names file/ID conventions
  chosen to avoid collisions.

### Source texts (`session/`)

`pmbok_full.txt`, `agile_full.txt`, `process_groups_full.txt`, `ba_full.txt`, `eco_full.txt` are
`pdftotext` extracts of licensed PMI books — Kyle's personal member copies. **Paraphrase only; never
copy passages into lectures or quiz explanations, and never publish these files.** Use the
`session/LINEMAP_*.md` files to jump to a section by line number (`sed -n 'START,ENDp'`) rather than
grepping megabyte files blindly. `session/NOTES_*.md` hold the Phase 2 research notes with sources.

## Current state

13 lectures on disk but `web/index.html` still has 12 injected (LEC-13 was written after the last
build) and 98 questions. Rebuild before assuming the app matches the sources.
