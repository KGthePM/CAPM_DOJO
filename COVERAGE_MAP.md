# CAPM Dojo — PMBOK 7 Coverage Map

Legend: ✅ covered by existing lecture | 🟡 partially covered | ❌ not covered
Curriculum rule: exam = Fundamentals 36% / BA 27% / Agile 20% / Predictive 17%. PMBOK covers the
Fundamentals core + tailoring/models/methods/artifacts (heavily exam-relevant). Appendices X2–X4 add
sponsor, PMO, and product management — all fair game in Fundamentals scenarios.

| # | PMBOK section | Dojo coverage | Planned lecture |
|---|---------------|---------------|-----------------|
| 1 | Std §2 A System for Value Delivery | ✅ LEC-01 | — |
| 2 | Std §3 12 Principles | ✅ LEC-01 | — |
| 3 | PMBOK §2 Performance Domains (8) | ✅ LEC-02 | — |
| 4 | PMBOK §3 Tailoring (3.1–3.5, incl. domains + diagnostics) | ✅ LEC-03 | — |
| 5 | PMBOK §4.2 Models: situational leadership, communication, motivation (Maslow etc.), change, complexity, team development | ✅ LEC-04 | — |
| 6 | PMBOK §4.4 Methods: data gathering & analysis, estimating, meetings & events | ✅ LEC-05 | — |
| 7 | PMBOK §4.6 Artifacts: strategy, logs & registers, plans, hierarchy charts, baselines, visual data, reports, contracts | ✅ LEC-05 | — |
| 8 | Appendix X2 The Sponsor | ✅ LEC-06 | — |
| 9 | Appendix X3 The PMO | ✅ LEC-06 | — |
| 10 | Appendix X4 Product Management | ✅ LEC-06 | — |
| 11 | Glossary (terms drill) | ❌ | Flashcard deck (app feature later) |

Exam-critical companions beyond the book (not in PMBOK; from ECO references):
- PHASE 2 COMPLETE (2026-09-09): Agile LEC-07/08 + qb_agile · Predictive LEC-09/10 + qb_predictive
  (incl. EVM/CPM math) · Business Analysis LEC-11/12 + qb_ba. Research notes with sources in
  session/NOTES_{agile,predictive,ba}.md. Dojo totals: 12 lectures, 98-question bank.

## Progress log
- 2026-09-09: LEC-01, LEC-02 + qb_foundation (12 Qs) complete. Map created.
- 2026-09-09: LEC-03 (Tailoring), LEC-04 (Models, 23 frameworks), LEC-05 (Methods & Artifacts),
  LEC-06 (Sponsor/PMO/Product) + 44 new Qs. Book coverage complete: 6 lectures, 56-question bank.
  Build script now auto-globs lessons/LEC-*.md and quiz_bank/qb_*.json.
- 2026-09-09: PHASE 2 complete — LEC-07/08 Agile, LEC-09/10 Predictive (EVM/CPM worked math),
  LEC-11/12 Business Analysis + 42 Qs with sources. Totals: 12 lectures, 98 Qs, app verified in browser.
- 2026-09-09: **PHASE 3 complete.** All 60 official ECO objectives
  (`session/ECO_OBJECTIVES.md`) audited against the lecture/quiz bank by 4 parallel per-domain
  passes; every objective now has ≥1 lecture section and ≥2 quiz questions
  (`session/COVERAGE_AUDIT.md` is the full ledger). Gap-fill added lecture addenda to LEC-01, 06,
  07, 08, 09 and 107 new quiz questions across `quiz_bank/qb_eco_d1..d4.json` (D1 Fundamentals 42,
  D2 Predictive 17, D3 Agile 18, D4 Business Analysis 30). Book-grounded verification pass against
  the three companion PDFs (Agile Practice Guide, Process Groups: A Practice Guide, PMI Guide to
  Business Analysis) found LEC-09/10 (Predictive) and LEC-11/12 (BA) fully accurate with no
  corrections; found and fixed one real error in LEC-08's new "logical units of an iteration"
  addendum (self-contradictory epic/iteration size ordering) plus the matching quiz question
  D3-007. Quiz bank grown from 98 to 205 questions, all four ECO domain buckets now deep enough
  for a no-repeat 150-question weighted draw (Fundamentals 98 ≥ 54, Predictive 31 ≥ 26, Agile
  32 ≥ 30, Business Analysis 44 ≥ 40). Dojo totals: 13 lectures, 205-question bank.
  Shipped two new app features in `web/index.html` (no rebuild needed for these — pure hand-edited
  JS/HTML, verified separately from the LESSONS/QUIZ rebuild):
  - **Grand Examination mode** — a realistic 150-question, 3-hour, domain-weighted (36/17/20/27)
    mock exam with a hard break-lockout after Question 75 (no return to Q1–75), no per-question
    feedback during the run, and a finish screen scoring each of the 4 ECO domains against PMI's
    Below Target/Target/Above Target bands plus an overall ~70% pass benchmark.
  - **Weak-area drill mode** — per-question answer history now persists across sessions
    (`state.history`), a home-dashboard "Weak-Area Watch" callout surfaces the historically
    weakest ECO domain once ≥10 answers are recorded, and a "🎯 Drill My Misses" button on the
    Practice Exam screen re-quizzes only net-missed questions.
  Both features browser-verified end-to-end with Playwright (readiness check, timer, break/resume,
  domain scoring, drill-my-misses pool, localStorage `history`/`grandExam` keys all confirmed
  working). Also fixed a pre-existing UX issue the larger bank exposed: the practice-exam
  "number of questions" picker rendered one button per integer (204 buttons at 205 Qs) — replaced
  with a curated set (5/10/15/20/25/30/40/50/75/100/150/All).
