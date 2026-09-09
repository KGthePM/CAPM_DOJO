# LEC-10 — Numbers That Rule: Critical Path & Earned Value Mastery

*CAPM Training Dojo · Professor's Lecture Series · Session Ten*

Pencils out, Mr. Gomez. No personalities today, no principles — nothing but arithmetic that decides fates. The predictive domain is the smallest on the exam by weight, but it is the most *calculable*, and calculation is where the careful candidate banks certain points. An earned-value question has exactly one right answer; you need only know the recipe. By the end of this session, the recipe will be reflex.

## Critical Path Method: The Longest Road Wins

First, the map. In **precedence diagramming method**, activities become nodes on a diagram, joined by dependencies: finish-to-start (most common — B waits for A to finish), start-to-start, finish-to-finish, and start-to-finish. The guide sorts those dependencies four ways (PG §10, "Dependencies"): **mandatory** (legally or contractually required, or inherent in the nature of the work — the foundation before the superstructure; "hard logic"), **discretionary** (preferred based on best practice — plumbing before electrical; "soft logic," and the first place a fast-tracker looks), **external** (links to non-project work outside the team's control, like government hearings), and **internal** (between project activities, inside the team's control). The **critical path method (CPM)** then calculates dates along that network (PG §10, "Critical path method"; applied in Develop Schedule, PG §5.10).

The definition confuses everyone at first: the critical path is the **longest path** through the network — the guide's phrasing is worth memorizing: *the longest path, which determines the shortest possible project duration* — yet it is called *critical* because it determines the project's total duration, and it has the **least total float, usually zero**. Float (also called slack) is the amount an activity can be delayed or extended from its early start date without delaying the project finish date or violating a schedule constraint (PG §10, "Total float"). Critical activities have none; slip a day on the critical path and the project finishes a day late. A network may hold **more than one critical path** — a warning sign, for that doubles the ways to be late. And under imposed-date constraints the critical path can even carry *negative* float: the late dates are already violated, and negative float analysis is how you find where to accelerate.

Now the machinery. Every activity gets four dates, computed in two sweeps:

**Forward pass** — left to right, computing **Early Start (ES)** and **Early Finish (EF)**. An activity's EF is its ES plus its duration; an activity's ES is the *latest* EF among its predecessors (the diagram can only move as fast as its slowest feeder). When you reach the end, the largest EF is the project duration.

**Backward pass** — right to left, computing **Late Finish (LF)** and **Late Start (LS)**. Start from the project end date; an activity's LS is its LF minus its duration; an activity's LF is the *earliest* LS among its successors. Then: **total float = LS − ES = LF − EF**. Zero on every critical activity.

One bookkeeping caution: the guide's own worked example (Figure 10-6) counts the project as *starting on day 1* — its ES/EF figures are one higher than the day-0 convention used below. Both conventions are "accepted," the guide says; be consistent and read the question's convention before answering.

### A Worked Example

Four activities, all finish-to-start, durations in days: A = 5, B = 3, C = 7, D = 2. Dependencies: A starts the project; B and C both follow A; D follows B *and* C.

Forward pass. A: ES 0, EF 5. B: ES 5, EF 8. C: ES 5, EF 12. D: cannot start until *both* B and C finish, so ES = the later of 8 and 12 = 12; EF = 14. Project duration: **14 days**.

Backward pass. D: LF 14, LS 12. B: LF = D's LS = 12, LS = 9. C: LF = 12, LS = 5. A: LF = earliest successor LS = min(9, 5) = 5, LS = 0.

Float. A: 0. B: LS 9 − ES 5 = 4 days. C: LS 5 − ES 5 = 0. D: 0. The critical path is **A → C → D**, totaling 5 + 7 + 2 = 14 days — the longest road, zero float, the project's spine. B may dawdle up to four days without consequence; C may not dawdle at all.

A finer distinction the guide draws and the exam occasionally tests: **free float** is the time an activity can slip *without delaying the early start of its immediate successor*. B finishes at day 8, but D cannot start until day 12 — so B enjoys 4 days of total float and, since its only successor D starts at 12, all 4 of those days are free float. Total float protects the *project* end date; free float protects the *neighbor*. (In the guide's Figure 10-6 example, Activity B similarly shows 5 days of free float.)
- *Bar Exam:* the classic trap is letting D start after B finishes on day 8. D starts when the *last* predecessor finishes. Read dependencies like a lawyer, Mr. Gomez.

## Compressing the Schedule

The sponsor wants fourteen days in twelve. You have exactly two levers, and the exam will test whether you know which is which.

**Crashing** — add resources to critical activities to shorten them: extra crew, overtime, a second machine. It costs *money*, and you crash the activities that buy the most time per dollar, in ascending order of cost-per-day-saved, stopping when further crashing exceeds its benefit or becomes impossible. Crashing always adds cost.

**Fast-tracking** — perform activities in parallel that were planned in sequence: start writing the manual while the design is still settling, or pour the foundation before all the drawings are finished (the guide's own example, PG §10, "Schedule compression"). It usually trades schedule for **risk** rather than dollars — but mark this carefully, because older textbooks get it wrong: the guide states plainly that fast tracking *may also increase project costs* and increases coordination effort. The clean contrast is that crashing **always** aims at bought time via added resources, while fast tracking buys time via overlap and *may* cost you in rework, coordination, and quality risk. Fast-tracking trades schedule for risk; crashing trades schedule for cost. Write that couplet on your hand.

Both compressions apply only to the **critical path** — the guide is explicit that crashing "works only for activities on the critical path," and shortening an activity with four days of float buys you nothing and looks desperate.

## Earned Value: Three Numbers, Then Everything

Earned value management (EVM) answers two questions — *where are we versus schedule, and where versus budget?* — with three inputs:

**Planned Value (PV)**: the authorized budget assigned to scheduled work — not including management reserve (PG §10, "Earned value analysis"). Summed over the whole project, PV equals the **performance measurement baseline (PMB)**; its total is the **BAC**. **Earned Value (EV)**: the budgeted cost of the work actually performed — your progress expressed in budget dollars (EV = percent complete × budget), and it can never exceed the authorized PV for a component. **Actual Cost (AC)**: what you have truly spent — and unlike EV, it has *no upper limit*. **BAC**, budget at completion, presides over all: the sum of all budgets, the total planned work. Note the elegance: schedule and cost are measured in the *same currency*, so they may be compared without lying.

### Variances and Indices

**SV = EV − PV** (schedule variance, in dollars). Positive: ahead of schedule. Negative: behind. Zero: on plan.

**CV = EV − AC** (cost variance, in dollars). Positive: under budget. Negative: over. Zero: on plan.

**SPI = EV / PV** (schedule performance index). Above 1.0: ahead — 1.10 means you earn $1.10 of planned work per period. Below 1.0: behind. Exactly 1.0: on schedule.

**CPI = EV / AC** (cost performance index). Above 1.0: getting more than a dollar of value per dollar spent — under budget. Below 1.0: over budget. Exactly 1.0: on budget.

Interpretation discipline, verbatim for the exam: **positive variances and indices above 1.0 are favorable; negative variances and indices below 1.0 are unfavorable; EV leads every formula.** A favorite distractor reverses a sign (SV = PV − EV) or asks "is 0.80 good?" — no, never; below one is woe.

One scholarly caveat: SV and SPI drift toward zero and 1.0 respectively as a project nears its end — work is eventually all earned — so late-project schedule indices flatter. Cost indices do not suffer this; the cumulative CPI, research shows, stabilizes early and rarely improves.

### A Worked Example

BAC = $100,000. At today's status date: PV = $50,000, EV = $40,000, AC = $60,000. The patient's chart, Mr. Gomez:

SV = 40,000 − 50,000 = **−$10,000** → behind schedule. CV = 40,000 − 60,000 = **−$20,000** → over budget. SPI = 40,000 / 50,000 = **0.80** → earning work at 80% of the planned pace. CPI = 40,000 / 60,000 = **0.67** → sixty-seven cents of value per dollar spent. Behind *and* over — the double insult.

### Forecasting: EAC and Its Variants

**Estimate at Completion (EAC)** forecasts total final cost. The question's *wording* chooses the formula — this is the most-tested judgment in predictive EVM:

**EAC = BAC / CPI** when current cost performance will *continue* — the default when the exam gives no special story. Our example: 100,000 / 0.67... but carry it honestly: 100,000 × 60,000 / 40,000 = **$150,000**.

**EAC = AC + (BAC − EV)** when the variance was a *one-time event* and future work proceeds to plan: 60,000 + 60,000 = **$120,000**.

**EAC = AC + (BAC − EV) / (CPI × SPI)** when *both* cost and schedule performance will influence the remainder — the pessimist's formula, for slipping and overspending feed each other.

**EAC = AC + bottom-up ETC** when the original estimate is deemed invalid and the team re-estimates the remaining work from scratch.

Then the satellites follow mechanically:

**ETC = EAC − AC**, the estimate to complete — money still needed. Using the typical EAC: 150,000 − 60,000 = **$90,000**.

**VAC = BAC − EAC**, variance at completion — the projected final overrun (negative) or underrun (positive). Here: 100,000 − 150,000 = **−$50,000**. Start drafting the sponsor conversation now, not later.

**TCPI = (BAC − EV) / (BAC − AC)** — the to-complete performance index: work remaining over money remaining if you must still hit the original BAC. Here: (100,000 − 40,000) / (100,000 − 60,000) = 60,000 / 40,000 = **1.50** — you must perform at 150% efficiency to keep the original budget, against a current CPI of 0.67. Not going to happen, and TCPI exists precisely to make you say so honestly. If the target is instead the new EAC, the denominator becomes (EAC − AC). TCPI above 1.0 means you must *beat* your current performance; below 1.0, you have room to coast.

That is the entire formula sheet, Mr. Gomez: SV, CV, SPI, CPI, four EACs, ETC, VAC, two TCPIs. Twenty minutes of drill makes them permanent. The exam will hand you PV, EV, AC, and BAC and ask one question each — free points for the prepared, Greek tragedy for the rest.

## Key Terms

- **Critical path** — the longest path through the network; zero float; determines project duration
- **Forward pass** — computes Early Start and Early Finish; project duration is the maximum EF
- **Backward pass** — computes Late Finish and Late Start from the project end backward
- **Total float** — LS − ES or LF − EF; permissible slip without delaying the project
- **Crashing** — adding resources to critical activities; buys time at added cost
- **Fast-tracking** — running sequential activities in parallel; buys time at added risk
- **PV** — planned value: budgeted cost of work scheduled to date
- **EV** — earned value: budgeted cost of work actually performed
- **AC** — actual cost: dollars truly spent to date
- **SV = EV − PV / SPI = EV / PV** — schedule variance (dollars) and index (ratio); positive / >1.0 = ahead
- **CV = EV − AC / CPI = EV / AC** — cost variance and index; positive / >1.0 = under budget
- **EAC** — forecast final cost; BAC/CPI (typical), AC+(BAC−EV) (one-time variance), AC+(BAC−EV)/(CPI×SPI) (both), AC+ETC (re-estimate)
- **ETC = EAC − AC** — money needed to finish
- **VAC = BAC − EAC** — projected final variance; negative = overrun
- **TCPI = (BAC − EV)/(BAC − AC)** — efficiency required on remaining work to hit budget

## Self-Check Questions

1. Redo the worked network with C = 9 days. What is the new critical path, the new duration, and B's new float? (Answers: A→C→D, 16 days, 6 days.)
2. With BAC 200,000, EV 90,000, PV 120,000, AC 100,000: compute SV, CV, SPI, CPI, and EAC under both the typical and one-time-variance assumptions. Interpret each in one clause.
3. Your sponsor demands the finish date move two weeks earlier without spending another dollar. Which compression technique is she implicitly requesting, and what must you warn her it costs instead?

Bring the answers and your calculator next session, Mr. Gomez. Numbers do not care how confident you feel — a lesson the exam is delighted to teach twice.
