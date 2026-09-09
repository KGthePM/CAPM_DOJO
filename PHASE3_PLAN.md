# CAPM Dojo — Phase 3 Plan (ECO Task Mastery)
Status: PLANNED · Created 2026-09-09 · Run in a future session (say "run phase 3")
Skill: `capm-training-dojo` (read it first — layout, build pipeline, verification drill)

## Premise
Kyle added the 3 companion books to the Sync Book Library (recent editions, not 2026):
- `Agile_Practice_Guide_-_Project_Management_Institute.pdf`
- `Process_groups_A_practice_Guide_-_Pmi.pdf`
- `The_PMI_Guide_To_Business_Analysis_2017_Edition_-_PMI.pdf`
Phase 2 lectures were built from web research of these guides' scopes. Phase 3 = ground everything
in the actual texts AND build the ECO task list into the dojo's spine.

## Step 0 — Extract & recon (Hermie, ~5 min)
- pdftotext all 3 PDFs → `session/agile_full.txt`, `session/process_groups_full.txt`, `session/ba_full.txt`
- Probe TOCs, locate section line numbers (grep), record in this file's Recon notes below.
- Diff check: anything major in the books that Phase 2 web-research lectures missed?

## Step 1 — ECO task-list conversion (parallel bots, 1 per domain)
The ECO lists ~100 tasks across 4 domains (in EXAM_INTEL.md §2). For each domain:
- Bot converts every ECO task into a dojo "proficiency objective" (short imperative, e.g.
  "Distinguish issues from risks from assumptions from constraints in a scenario").
- Bot gap-checks existing LEC-01..12 + quiz bank against those objectives; flags uncovered ones.
- Bot writes LECTURE ADDENDA (append to existing lectures or new LEC-13+) only where gaps exist.
- Bot writes quiz questions until EVERY objective has ≥2 questions, scenario-style where the ECO
  implies scenario testing (Code of Ethics applied to scenarios is explicit in Domain I).

## Step 2 — Book-grounded deep dive (parallel bots)
- One bot per book: verify the corresponding lectures against the actual text (like the Phase 1
  gap-verify drill), correct errors, deepen Bar Exam corners with real page-grounded examples.
- LEC-10 (EVM/CPM) gets extra scrutiny: re-derive every worked example against Process Groups guide.

## Step 3 — Mock exam engine (Forge)
- Add "Grand Examination" mode to web app: 150 Q / 3 hr timer / 10-min break after Q75 with the
  no-return-locked rule, domain-weighted draw (36/17/20/27), scored like the real thing
  (5 domain ratings, ~70% benchmark), one 10-min break, review-after only.
- Requires quiz bank ≥ 200 Qs; target ~300 after Steps 1–2.

## Step 4 — Verify & ship (Hermie)
- Rebuild via `python3 session/build_inject.py`, node stub check, browser exercise of Grand Exam
  mode (auto-answer partial run + verify timer/break/scoring), reset ledger, update COVERAGE_MAP
  progress log + skill.

## Dispatch template (Step 1+2 combined: 3 bots, one per domain book)
Each bot context: book text path + line map, EXAM_INTEL.md path, lesson/quiz paths, lecture format
contract (LEC-01 style, Key Terms parser format), paraphrase-only rule, JSON schema, "report files +
objective coverage counts". Hermie verifies JSON + rebuilds + browser-tests.

## Recon notes (filled Step 0, 2026-09-09)
- Extracted: session/{agile,process_groups,ba}_full.txt (4.7k/16.5k/18.2k lines) + session/eco_full.txt (official ECO PDF from pmi.org)
- Line maps: session/LINEMAP_{agile,process_groups,ba}.md (section → line number)
- **session/ECO_OBJECTIVES.md = authoritative spine**: 60 objectives / 19 tasks / 4 domains (D1:23, D2:12, D3:12, D4:13). Every objective needs ≥1 lecture section + ≥2 tagged questions.
- Quiz schema: {id, domain, difficulty, stem, options[4], answer(idx), explanation} + extra "objective" tag (ignored by injector, used for coverage audit)
- Canonical domain values (reuse existing): "Fundamentals", "Predictive, Plan-Based", "Agile", "Business Analysis"
- build_inject.py only rewrites LESSONS/QUIZ JS arrays — all other app code (incl. Forge's Grand Exam additions) survives rebuilds
- New-lecture numbering to avoid collisions: D1→LEC-13, D2→LEC-14, D3→LEC-15, D4→LEC-16 (prefer addenda to existing lectures)
- New quiz files: quiz_bank/qb_eco_d{1,2,3,4}.json (one per bot, no collisions)

## Success criteria
- Every ECO task mapped to ≥1 lecture section + ≥2 quiz questions (coverage spreadsheet in session/)
- Quiz bank ≥ 200 (stretch 300) with per-objective tagging
- Grand Exam mode live and browser-verified
- COVERAGE_MAP.md shows Phase 3 ✅
