# Research Notes — Predictive, Plan-Based Methodologies (CAPM Domain II, 17%)

> Professor's source notes for LEC-09, LEC-10, and qb_predictive.json. Grounded in the
> CAPM ECO Domain II task list (EXAM_INTEL.md), PMI's Process Groups: A Practice Guide (2022),
> and standard EVM references. Paraphrased throughout; personal use only.

## 1. The Five Process Groups (Process Groups: A Practice Guide, 2022)

PMBOK 7 went principles-based and dropped the process catalog; the Process Groups Practice Guide
(2022) restores it — 49 processes across 5 process groups, cross-referenced by 10 knowledge areas.
This is the exam's predictive backbone. Process groups are NOT phases: they are sets of processes
that recur/overlap throughout every phase of a project (a phase has its own initiating → closing
mini-loop).

- **Initiating** — define a new project or phase; obtain authorization. Key artifacts: project
  charter, stakeholder identification, benefits management groundwork. Processes (2):
  Develop Project Charter, Identify Stakeholders. The charter authorizes the PM.
- **Planning** — establish scope, refine objectives, define the course of action. ~24 of the 49
  processes live here (the heaviest group): scope/WBS, schedule, cost, quality, resource,
  communications, risk, procurement, stakeholder plans, plus Develop Project Management Plan
  and its subsidiary integrations. Outputs: PM plan + subsidiary plans + baselines
  (scope, schedule, cost).
- **Executing** — do the planned work; deliver deliverables. ~10 processes: Direct and Manage
  Project Work, Manage Project Knowledge, plus Manage Quality, Acquire/Develop/Manage Team,
  Manage Communications, Implement Risk Responses, Conduct Procurements, Manage Stakeholder
  Engagement. Where the budget is actually spent.
- **Monitoring & Controlling** — track, review, regulate performance; initiate changes.
  ~12 processes: Monitor and Control Project Work, Integrated Change Control, Validate/
  Control Scope, Control Schedule/Costs/Quality/Resources, Control Procurements, Monitor
  Stakeholder Engagement, plus Identify Risks / risk audit-style work. Variances detected
  here (EVM lives here — Control Costs).
- **Closing** — formally complete the project/phase/contract. 1 process: Close Project or Phase.
  Deliverable handoff, final report, archive, release resources, update lessons learned.

Pattern for exam: Initiating (2) + Planning (24) + Executing (10) + M&C (12) + Closing (1) = 49.
Planning is the largest group. Closing is the smallest (a classic trivia Q).

## 2. Ten Knowledge Areas (cross-cutting matrix vs process groups)

Integration, Scope, Schedule, Cost, Quality, Resource, Communications, Risk, Procurement,
Stakeholder. Every process belongs to one group AND one knowledge area. Integration knits the
rest together (the PM plan, change control, charter, closure are all Integration).

## 3. When Predictive Fits

Predictive (plan-driven, waterfall) fits when: requirements are well-understood and stable;
scope is clearly definable early; deliverables are concrete; regulatory/contractual rigor
demands up-front documentation; technology is mature; cost of late change is high. Adaptive
fits high uncertainty, evolving requirements, frequent deliverable cadence. Hybrid mixes both
(e.g., predictive construction + iterative software).

## 4. Organizational Structures (ECO explicitly names these)

- **Functional (hierarchical)** — staff grouped by specialty (engineering, finance, marketing);
  PM authority low/none; PM may be a coordinator/expediter; communication goes up-down the
  silo. Clear career paths, weak project control.
- **Matrix (weak / balanced / strong)** — shared reporting: functional manager and PM both
  hold authority. Weak matrix ≈ functional (PM is coordinator/expediter); balanced splits it;
  strong matrix has full-time PMs with moderate-high authority. Classic pain point: resource
  competition, two bosses, more complexity — but flexible resource use.
- **Projectized** — PM has high to almost total authority; team members report to the PM;
  full-time project admin staff; team colocation common; "project office" culture. Downside:
  duplicated resources, uncertain career home at project end.
- **Virtual teams vs colocation** — colocation puts team members physically together
  (war room) to improve communication and esprit; virtual teams span geography/time zones —
  cheaper talent access but demand planned communication, clear norms, and timezone-aware
  meeting hygiene. ECO lists "virtual, colocation, matrix, hierarchical" as the Domain II org
  structures to know.

## 5. WBS & Work Packages

**Work Breakdown Structure** — hierarchical decomposition of total project scope into
deliverable-oriented elements. 100% rule: WBS includes all — and only — the project scope.
**Work package** = lowest level of the WBS; the unit estimated (cost, duration), scheduled,
assigned, and tracked; further decomposed into activities/schedule tasks. Work packages
connect to the Control Account level for EVM (control account = management control point
with one or more work packages). WBS dictionary documents each element. Scope baseline =
WBS + WBS dictionary + scope statement.

## 6. Critical Path Method (CPM)

Precedence Diagramming Method (PDM) draws activities as nodes with FS, SS, FF, SF dependencies
(FS dominant). CPM then computes:

- **Forward pass** — Early Start (ES) / Early Finish (EF). EF = ES + duration − 1 (calendar-day
  convention) or ES + duration (duration convention; be consistent). Successor ES = max of
  predecessor EFs (+ lag). Forward pass gives project duration = max EF.
- **Backward pass** — Late Finish (LF) / Late Start (LS). Start from project end; LS = LF −
  duration. Predecessor LF = min of successor LSs (− lag).
- **Total float (slack)** = LS − ES = LF − EF. Free float = delay without delaying ANY
  successor's ES. **Critical path = longest path through the network = zero total float.**
  Critical path determines project duration; delay on a critical activity delays the project.
- Near-critical paths warn of risk. A network can have multiple critical paths (more risk).
- **Crashing** — shorten duration by adding resources to critical activities; increases cost;
  choose lowest cost-per-day-saved; stop when cost exceeds benefit or no more compression
  possible. **Fast-tracking** — perform sequential activities in parallel; increases risk/
  rework; does not necessarily add cost. Exam: crash = cost, fast-track = risk.

## 7. Earned Value Management (full formula set)

Core inputs: **BAC** Budget at Completion (total approved budget); **PV** Planned Value
(budgeted cost of work scheduled to date); **EV** Earned Value (budgeted cost of work actually
performed; EV = %complete × BAC at activity level); **AC** Actual Cost (spent to date).

Variances & indices (EV leads every formula):
- **SV = EV − PV** — schedule variance in $. Positive = ahead; negative = behind; zero = on plan.
  (Caveat: SV → 0 at end of project regardless of lateness — SV/SPI get unreliable late.)
- **CV = EV − AC** — cost variance in $. Positive = under budget; negative = over.
- **SPI = EV / PV** — schedule performance index. >1.0 ahead; <1.0 behind; =1.0 on schedule.
- **CPI = EV / AC** — cost efficiency; dollars of value per dollar spent. >1.0 good, <1.0 over
  budget. Cumulative CPI stabilizes ~20% completion and rarely improves (Christensen).

Forecasting:
- **EAC variants** (wording selects the assumption):
  - EAC = BAC / CPI — variance is typical, current cost efficiency continues (PMI default).
  - EAC = AC + (BAC − EV) — atypical one-time variance; future work per plan.
  - EAC = AC + (BAC − EV)/(CPI × SPI) — both cost and schedule performance affect remaining work.
  - EAC = AC + bottom-up ETC — original estimate invalid, remaining work re-estimated.
- **ETC = EAC − AC** — money still needed to finish (or a fresh bottom-up estimate).
- **VAC = BAC − EAC** — projected final variance; negative = expected overrun.
- **TCPI = (BAC − EV)/(BAC − AC)** — efficiency required on remaining work to hit BAC;
  **TCPI = (BAC − EV)/(EAC − AC)** to hit the new EAC instead. TCPI > 1.0 = must beat current
  CPI = unlikely recovery; TCPI < 1.0 = slack remaining. If EAC = BAC/CPI, then TCPI(EAC)
  collapses to current CPI — elegant exam fact.

Worked micro-example (for lecture reuse): BAC 100,000; at status date PV 50,000, EV 40,000,
AC 60,000 → SV −10,000 (behind), CV −20,000 (over), SPI 0.80, CPI ≈ 0.67,
EAC typical = BAC/CPI = 150,000, ETC = 90,000, VAC = −50,000,
TCPI = 60,000/40,000 = 1.50. Clean integer-friendly numbers.

## 8. Quality & Integration Management Plans

- **Quality management plan** (subsidiary of PM plan, from Plan Quality Management): how the
  project will demonstrate compliance — quality standards to use, quality objectives, quality
  assurance (process-focused, audit-like) vs quality control (deliverable-focused, inspection/
  testing) activities, tools (control charts, Pareto, fishbone/Ishikawa). Quality = degree to
  which requirements are met; "grade" ≠ "quality". Prevention over inspection (principle 8).
- **Integration management plan(s)** — Integration is the glue knowledge area: project charter,
  PM plan development (integrating all subsidiary plans and baselines), Direct and Manage work,
  Manage Project Knowledge, Integrated Change Control (all changes flow through it; evaluates
  impact on ALL baselines), Close Project or Phase. Change requests that bypass ICC are the
  classic wrong answer.

## 9. Project Controls & Artifacts (Domain II ECO task)

Project controls = the data, metrics, meetings, and artifacts used to monitor & govern:
work performance data → work performance information → work performance reports (raw →
analyzed → communicated). Key artifacts: project charter, PM plan + subsidiary plans,
baselines (scope/schedule/cost), issue log, change log, change requests, risk register,
stakeholder register, milestone list, WBS + dictionary, earned value reports, status/
progress reports, lessons learned register. Milestones: zero-duration significant events.

## Sources

1. PMI — Process Groups: A Practice Guide product page (5 groups, 49 processes, ITTOs):
   https://www.pmi.org/standards/process-groups
2. BrainBOK — PMBOK 7th vs 8th Edition comparison (confirms Process Groups Practice Guide 2022
   carries 49 processes / 5 groups / 10 KAs as the CAPM predictive reference):
   https://brainbok.com/blog/pmp/pmbok-guide-7th-vs-8th-edition-what-has-changed
3. PMI Learning Library — "How to Make Earned Value Work on Your Project" (EAC variants, TCPI,
   CPI stability research): https://www.pmi.org/learning/library/make-earned-value-work-project-6001
4. PMI Learning Library — "Practical Calculation of Delays and Cost Overruns" (EVM/TCPI
   mechanics): https://www.pmi.org/learning/library/practical-calculation-evm-6774
5. ProjectEngineer — The Earned Value Formulas (formula reference + interpretation table):
   https://www.projectengineer.net/the-earned-value-formulas/
6. ProjectEngineer — Earned Value Forecasting (EAC/ETC/VAC/TCPI worked examples):
   https://www.projectengineer.net/tutorials/earned-value-tutorial/earned-value-forecasting/
7. Local: /home/kg/capm-dojo/EXAM_INTEL.md (verified ECO Domain II task list) and
   /home/kg/capm-dojo/session/pmbok_full.txt (PMBOK 7 principles/domains cross-check).
