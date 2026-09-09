# NOTES — Agile Frameworks/Methodologies (ECO Domain III, 20% of exam)

> Research notes for the CAPM Training Dojo, Phase 2. Grounded in the CAPM Exam Content
> Outline (2023 update) Domain III task list and public summaries of the PMI *Agile Practice
> Guide* (2017) and primary framework sources (scrum.org, Scaled Agile, Agile Alliance).
> All content paraphrased for personal study use. Sources at bottom.

---

## ECO Domain III — the verified task list

The Exam Content Outline lists five task clusters under "Agile Frameworks/Methodologies":

1. **When adaptive fits** — recognize the pros and cons of adaptive vs predictive approaches and choose per context.
2. **Planning iterations** — organize work into logical units of iteration; translate predictive artifacts (WBS, work packages) into iteration-based structures; track progress adaptively.
3. **Adaptive artifacts** — know the artifacts adaptive projects produce (backlogs, boards, charts, roadmaps) and what each is for.
4. **Components of adaptive plans** — know how Scrum, XP, SAFe, and Kanban each structure a plan (roles, events, cadence, practices).
5. **Task prioritization & success criteria** — prioritize backlogs by value/risk/effort; define what "done" and "success" mean in adaptive projects.

Note from EXAM_INTEL.md: agile concepts bleed into all four domains, not just Domain III.

## Life cycles: the predictive-to-adaptive continuum (Agile Practice Guide §3)

The Agile Practice Guide frames agile as a *combination of iterative and incremental* approaches:

- **Predictive (plan-driven)** — scope, schedule, and cost determined early; change controlled formally. Fits stable, well-understood requirements (construction, regulated work).
- **Iterative** — repeats cycles to *refine* the product toward correctness (prototyping; successive versions). Risk: complexity/fit uncertainty.
- **Incremental** — delivers the product in *pieces*, each a usable slice of functionality. Risk: schedule/pace uncertainty (can't deliver pieces fast enough).
- **Agile (iterative + incremental)** — short timeboxed iterations that each produce a usable increment; both refines and delivers every cycle. Risk: cost/safety-critical uncertainty (hard when fixed-price or life-critical).
- **Hybrid** — a deliberate combination: predictive backbone with adaptive components, or vice versa.

**Agile suitability factors** (the "suitability filter" idea): culture, team size, criticality of the product, how quickly the org can respond to change, whether requirements are stable/known, regulatory constraints, colocation vs distribution, incremental delivery feasibility. High suitability = fluid requirements, accessible customer, empowered collocated small team, incremental value possible. Low suitability = safety-critical, fixed regulatory scope, rigid culture, contract-frozen requirements.

**Pros of adaptive:** early and continuous value delivery; fast feedback; embraces changing requirements; risk reduced by early proof; customer involvement raises satisfaction; surfaces the real requirements.
**Cons of adaptive:** harder to price/contract fixed-scope; requires customer availability and disciplined teams; less predictable documentation/governance; can scale poorly without a scaling framework; deliverable uncertainty late in schedule.
**Pros of predictive:** clear baselines for cost/schedule control; strong change control and documentation; fits regulated procurement.
**Cons of predictive:** late feedback; change is expensive; risk surfaces late; assumes requirements can be known up front.

## Planning iterations (ECO task: logical units, WBS→iteration translation, tracking)

- **Logical units of iteration** — an iteration (sprint) is a fixed-length timebox, commonly 1–4 weeks, that ends with a demonstrable, tested increment. Work is selected so each iteration delivers a coherent unit of value, not just "40 hours of tasks."
- **WBS → iteration translation** — predictive work packages become **user stories** (or backlog items) in the product backlog; stories too large to finish in one iteration are split (epics/features decomposed into story-sized pieces). The backlog is the adaptive replacement for the scope baseline: ordered, continuously refined, re-estimated. Release planning aggregates iterations into a release; roadmap shows direction.
- **Adaptive tracking** — replace earned value baselines with:
  - **Velocity** — average story points completed per iteration; used for capacity and release forecasting (a *team-local* metric, not a cross-team comparison tool).
  - **Burndown chart** — remaining work vs time within an iteration or release.
  - **Burn-up chart** — completed work vs total scope; shows scope change (total line moves), which burndowns hide.
  - **Task boards / Kanban boards** — real-time state of work (To Do / In Progress / Done columns).
  - **Cumulative flow diagram** (Kanban) — distribution of work by state over time; widening bands signal bottlenecks.

## Adaptive artifacts (per framework, condensed)

- **Product backlog** — single ordered list of all known work (features, fixes, enablers), owned by the product owner, continuously refined.
- **Iteration/sprint backlog** — the stories + tasks the team commits to this timebox, owned by the team.
- **Increment** — the sum of completed, "done"-definition-meeting work at iteration end.
- **Definition of Done** — shared quality checklist a story must satisfy; the adaptive success criterion at story level.
- **User story + acceptance criteria** — requirement form ("As a <role> I need <capability> so that <benefit>") plus the conditions that confirm it works.
- **Task/Kanban board, WIP limits, burndown/burn-up charts** — flow artifacts.
- **Product roadmap, release plan** — higher-level adaptive artifacts connecting iterations to strategy.
- **Impediment backlog / improvement actions** — from retrospectives.

## Components of adaptive plans — the four named frameworks

### Scrum (the exam's centerpiece)
- **Roles (3):** Product Owner (value & backlog ordering), Scrum Master (servant leader, facilitator, impediment remover — NOT a traditional PM), Developers (self-managing cross-functional team, ~10 or fewer).
- **Events (5, all timeboxed):** The Sprint itself (container, 1–4 weeks); Sprint Planning (select & commit); Daily Scrum (15-min developer sync); Sprint Review (inspect increment with stakeholders); Sprint Retrospective (inspect & improve the team's process).
- **Artifacts (3) + commitments:** Product Backlog → commitment: Product Goal; Sprint Backlog → Sprint Goal; Increment → Definition of Done.
- Team is self-organizing; scope may flex within a sprint but the sprint goal/length is fixed; no changes mid-sprint that endanger the sprint goal.

### XP (Extreme Programming) — engineering-discipline agile
- Focus: technical/quality practices layered on short iterations.
- Key practices: **planning game** (business sets scope/priority, devs set estimates/cost), small/frequent releases, **on-site customer**, **pair programming**, **test-driven development** (write tests first), **continuous integration**, **refactoring**, simple design, collective code ownership, coding standards, **sustainable pace** (no chronic overtime).
- Exam angle: when a scenario emphasizes code quality, testing discipline, pairing, or an on-site customer, the answer is XP.

### Kanban — flow-based, no iterations required
- Origin: Lean/Toyota Production System pull systems.
- Principles: **visualize the workflow** (board with columns mirroring the process), **limit work in progress (WIP limits)** — the defining practice; finishing work before starting new, **manage flow** (measure lead time, cycle time, throughput), **make policies explicit**, **improve collaboratively** (evolutionary, kaizen-style).
- Pull system: work is "pulled" when capacity frees, versus Scrum's push-at-planning cadence.
- No prescribed roles, events, or timeboxes; change can be adopted any time — the "start with what you do now" method.
- Exam angle: continuous flow, WIP limits, bottleneck reduction, release-on-demand → Kanban.

### SAFe (Scaled Agile Framework) — agile beyond one team
- Four **levels**: **Team** (agile teams run Scrum/Kanban), **Program** (the **Agile Release Train** — a "team of agile teams," 50–125 people, on a common cadence; PI Planning event; Release Train Engineer as chief scrum master), **Large Solution** (optional; Solution Trains coordinating multiple ARTs for large cyber-physical systems), **Portfolio** (strategy, lean portfolio management, epics, funding value streams).
- Configurations: Essential (Team+Program), Large Solution, Portfolio, Full.
- Key constructs: **PI (Program Increment)** — a planning timebox (typically 8–12 weeks) of iterations plus an Innovation & Planning iteration; PI Planning is the big-baseline event; System Demo; Inspect & Adapt.
- Exam angle: scaling scenario, multiple teams needing alignment, ART/PI terminology → SAFe.

## Task prioritization in adaptive projects

- **Product Owner accountability** (Scrum); whole-team in some methods.
- Ordered by **value** (customer/business benefit) primarily; risk and effort refine the order — do high-value or high-risk-uncertainty work early ("buy information cheaply").
- Techniques the exam may name: **MoSCoW** (Must/Should/Could/Won't), **WSJF** (weighted shortest job first — SAFe's cost-of-delay-over-duration prioritization), **Kano model** (delighters vs must-bes), simple value-vs-effort scoring, **story mapping** (user-activity spine, release slices).
- Prioritization is continuous: backlog refinement/grooming reorders as learning arrives.

## Success criteria in adaptive projects

- Predictive success = on-time, on-budget, in-scope vs baseline. Adaptive success = **value delivered**, working increments, customer satisfaction, sustainable pace, quality (defect rates), cycle time/flow improvement.
- Story level: **acceptance criteria** verified at review; iteration level: **sprint goal** met; release level: roadmap outcomes/benefits realized.
- **Definition of Done** as the quality gate; demonstrable increments at every review.

## Hybrid approaches (APG §3 + tailoring)

- Common patterns: predictive overall plan with agile development iterations inside; agile delivery with predictive governance/reporting wrapper (exec stakeholders want milestone baselines); phased — predictive discovery/up-front architecture, then agile delivery; largely agile with a predictive procurement or regulatory compliance layer.
- Tailoring is the PMBOK 7 principle that licenses hybrid: fit the approach to context. Exam answers favor "the team tailored a hybrid approach" over "converted the whole project to Scrum" or "refused to change."

## The Agile Manifesto (2001) — memorize verbatim

**4 values** ("we have come to value X over Y" — note: *over*, not *instead of*):
1. **Individuals and interactions** over processes and tools
2. **Working software** over comprehensive documentation
3. **Customer collaboration** over contract negotiation
4. **Responding to change** over following a plan

**12 principles (condensed for recall):** customer satisfaction via early & continuous delivery of valuable software; welcome changing requirements even late (harness change for competitive advantage); deliver working software frequently (weeks not months, shorter is better); business people + developers work together daily; build projects around motivated individuals, support & trust them; face-to-face conversation is the best form of information flow; working software is the primary measure of progress; sustainable development pace (sponsors/devs/users maintain indefinitely); continuous attention to technical excellence and good design enhances agility; simplicity — the art of maximizing work not done; self-organizing teams produce the best architectures/requirements/designs; at regular intervals the team reflects and adjusts (retrospective).

## Agile Practice Guide structure (for orientation)

§1 Introduction (why agile, when it fits) · §2 Life cycle selection factors & suitability filters · §3 (per O'Reilly ToC: life cycle selection detail) · §4 Implementing agile: creating the agile environment (servant leadership, team composition, organizational factors) · §5 Implementing agile: delivering in an agile environment (backlogs, retrospectives, daily standups, iteration/review mechanics) · §6 Organizational considerations for project agility · §7 A call to action. Key APG vocabulary: servant leadership as the agile leadership mode; colocation vs distribution; Osmotic communications (Crystal/Alistair Cockburn term APG references).

---

## Sources

1. PMI — CAPM Exam Content Outline (2023 Exam Update): https://www.pmi.org/-/media/pmi/documents/public/pdf/certifications/capm20ecofinal.pdf (Domain III task list)
2. Agile Practice Guide (2017) summary/structure — OnlinePMCourses review: https://onlinepmcourses.com/pmi-agile-practice-guide/ (life cycle continuum, iterative vs incremental)
3. Agile Practice Guide ch.3 Life Cycle Selection ToC (suitability filters, tailoring factors): https://www.oreilly.com/library/view/agile-practice-guide/9781628253993/chapter03.xhtml
4. Scaled Agile Framework — Essential SAFe (ART, PI, RTE, roles/events/artifacts): https://framework.scaledagile.com/essential-safe
5. Scaled Agile Framework — Large Solution SAFe (Solution Train, solution intent): https://framework.scaledagile.com/large-solution
6. SAFe levels explained (4 levels, configurations): https://echometerapp.com/en/what-are-the-levels-of-the-scaled-agile-framework
7. Scaled Agile Framework — Iteration Planning (commitment, velocity, capacity): https://www.scaledagileframework.com/iteration-planning
8. Scrum.org — Agile Metrics: Velocity: https://www.scrum.org/resources/blog/agile-metrics-velocity
9. MITRE AiDA — Agile Metrics (velocity, burndown/burn-up, tracking): https://aida.mitre.org/agile/agile-metrics
10. PMI — Practice: Iteration Planning Meeting (inputs/outputs, iteration backlog): https://www.pmi.org/disciplined-agile/product-owner/practice-iteration-planning-meeting
11. Wikipedia — Extreme programming practices (planning game, pair programming, TDD): https://en.wikipedia.org/wiki/Extreme_programming_practices
12. Asana — Extreme Programming guide (12 practices, XP vs Scrum vs Kanban): https://asana.com/resources/extreme-programming-xp
13. Agile Alliance — Agile Practice Guide 2nd Ed. page (framework-neutral scope, life cycles): https://agilealliance.org/agile-practice-guide-2nd-edition/
