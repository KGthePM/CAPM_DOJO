# LEC-08 — The Framework Field Guide: Scrum, XP, Kanban & SAFe

*CAPM Training Dojo · Professor's Lecture Series · Session Eight*

Sit, Mr. Gomez. The manifesto was the creed; today I hand you the machinery: the four frameworks the CAPM Exam Content Outline names outright — **Scrum, Extreme Programming, Kanban, and the Scaled Agile Framework**. Learn their anatomy — roles, events, artifacts, practices — and Domain III's scenario questions become matching exercises.

A framing device before we wade in. Ask of each framework a single question: *what problem does it solve?* Scrum structures a small team's delivery rhythm. XP disciplines the quality of the engineering itself. Kanban manages continuous *flow*. SAFe carries agile across dozens of teams. Every exam scenario is secretly asking you which problem is on the table.

## Scrum: The Container and Its Ceremonies

Scrum is the most heavily tested framework, so we go deep. Its anatomy is **3 roles, 5 events, 3 artifacts** — numbers worth tattooing on your mental forearm.

**The roles.** The **Product Owner** owns the product backlog — its content and, crucially, its *ordering*. One person accountable for maximizing value, the single voice of the customer. The **Scrum Master** is a **servant leader**: facilitator, coach, impediment remover. The exam's favorite trap is casting the Scrum Master as a project manager who assigns tasks. No. Scrum teams are **self-organizing** — the developers decide *how* to build what the Product Owner prioritizes. The Scrum Master clears the road; the team drives. **The Developers** are the cross-functional professionals who create the increment.

**The events.** All five are timeboxed, and the first contains the rest:

- **The Sprint** — the container, a fixed 1–4 week timebox producing a usable increment. During a sprint, no changes may endanger the sprint goal; scope may be clarified and renegotiated with the Product Owner, but the sprint does not lengthen.
- **Sprint Planning** — the team selects backlog items for the sprint and crafts a **sprint goal**. This is iteration planning in its purest form: capacity and history govern how much is taken; the team commits to the goal, not to a Gantt chart.
- **Daily Scrum** — a 15-minute synchronization *by and for the developers*: what I did, what I'll do, what blocks me. It is not a status report to management, another beloved exam distractor.
- **Sprint Review** — the team inspects the *increment* with stakeholders at sprint's end: working product demonstrated, feedback harvested, backlog adjusted.
- **Sprint Retrospective** — the team inspects *itself*: what worked, what didn't, what to change. The manifesto's twelfth principle, given a meeting.

**The artifacts.** The **Product Backlog** (single ordered list of all known work — the adaptive scope baseline), the **Sprint Backlog** (the selected items plus the plan to deliver them), and the **Increment** (the accumulated "done" work). Modern Scrum attaches a commitment to each: **Product Goal**, **Sprint Goal**, and **Definition of Done**. The **Definition of Done** — a shared quality checklist every increment must satisfy — is your adaptive *success criterion* at the story level.

- *Bar Exam:* burn this dispatch table in: impediments and servant leadership → Scrum Master. Backlog ordering and value → Product Owner. "How the work gets built" → Developers. "15 minutes, daily" → Daily Scrum. "Stakeholders see working product" → Sprint Review. "Team improves its process" → Retrospective.

One Book-grounded footnote before we leave Scrum: the Agile Practice Guide's Annex A3 (Table A3-1) lists exactly these five events and three artifacts, and describes Scrum as a **single-team process framework** delivering a **potentially releasable increment** in sprints of **one month or less** with consistent durations. If an option on your exam inflates Scrum into a multi-team scaling framework, that option is bait — scaling is SAFe, LeSS, or Scrum of Scrums territory, not Scrum itself.

## XP: Engineering Discipline Wearing an Agile Badge

**Extreme Programming** shares Scrum's iterative bones but aims at a different organ: the *quality of the code*. Where Scrum says little about how software gets written, XP is prescriptive about exactly that. Its signature practices: the **planning game** (business people decide *scope and priority*, developers decide *estimates and consequences* — release and iteration loops that steer the project continuously rather than predicting it once); **pair programming** (two developers, one workstation — driver and navigator, rotated; quality through permanent peer review); **test-driven development (TDD)** (write the failing test *first*, then the code that passes it); **continuous integration** (code merged and tested constantly, so integration is never a late-project apocalypse); **simple design and refactoring** (build the simplest thing that works; improve structure without changing behavior); **small releases** and an **on-site customer** (a real customer representative embedded with the team); **collective code ownership**, coding standards, and — a personal favorite — **sustainable pace**: XP explicitly rejects chronic overtime as a planning tool. Quality is not a dial you turn down to go faster.

Annex A3 (Table A3-2) organizes XP's practices into four areas, worth knowing because the exam can quote any cell: **Organizational** (sit together, whole team, informative workspace; secondarily real customer involvement, team continuity, sustainable pace); **Technical** (pair programming, test-first programming, incremental design; secondarily shared code/collective ownership, refactoring); **Planning** (user stories, weekly cycle, quarterly cycle, slack; secondarily root cause analysis, negotiated scope contract); **Integration** (10-minute build, continuous integration; secondarily single code base, incremental deployment). Underneath sit five **core values — communication, simplicity, feedback, courage, respect**. If a scenario mentions "sit together" or "slack" or a "10-minute build," that is XP's vocabulary even when the team runs sprints.

- *Bar Exam:* when a scenario dwells on testing discipline, code quality, pairing, continuous integration, or a resident customer — the answer is XP, even if the team also runs sprints. XP is the *engineering* answer.

## Kanban: Flow Without Timeboxes

Kanban descends from Lean and the Toyota Production System, and it makes a radical simplification: *no prescribed roles, no sprints, no mandated ceremonies*. It starts from what you do now and improves it evolutionarily. The core practices: **visualize the workflow** (every work item is a card on a board whose columns mirror the real process); **limit work in progress (WIP limits)** — Kanban's defining move. Each column carries a maximum; you may not start new work until capacity frees. Why? Because *multitasking is theft*: ten items half-done deliver nothing, three items finished deliver value, and a perpetually full column is a bottleneck demanding a fix. Then **manage flow** (measure **lead time**, **cycle time**, **throughput**; watch the **cumulative flow diagram** for widening bands), **make process policies explicit**, and **improve collaboratively** — evolution over revolution.

Kanban is a **pull system**: work enters when capacity frees. It suits operations-flavored work and teams that cannot honestly timebox. And frameworks combine: **Scrumban** layers Scrum's cadence over Kanban's flow; XP practices live happily inside Scrum sprints.

The book's own distinctions (Annex A3, Table A3-3) sharpen your matching reflexes. Kanban's **defining principles**: start with the current state; agree to pursue incremental, evolutionary change; respect the current process, roles, responsibilities, and titles; encourage acts of leadership at all levels. Its **core properties**: visualize the workflow, limit WIP, manage flow, make process policies explicit, implement feedback loops, improve collaboratively. That is why the guide calls Kanban the original **"start where you are"** method — the least disruptive agile approach to begin, which is precisely what a scenario means when it says the organization "cannot pause work to transform." Kanban does not prescribe timeboxed iterations (they are permitted, but continuous pull and WIP limits must survive), and it was born in Lean manufacturing — Taiichi Ohno's 1950s Toyota just-in-time inventory system, the word *kanban* literally meaning "visual sign" or "card."

- *Bar Exam:* WIP limits, bottlenecks, cycle time, continuous flow, release-on-demand → Kanban. If the scenario says "no iterations, work flows continuously," it is Kanban even if the board looks Scrum-ish.

## SAFe: Agile at Enterprise Scale

One agile team is a laboratory; fifty teams is air traffic control. The **Scaled Agile Framework** coordinates many teams onto a shared cadence. The classic structure has four **levels**: **Team** (ordinary agile teams running Scrum or Kanban); **Program**, the star of the show — the **Agile Release Train (ART)**, a long-lived "team of agile teams," typically 50–125 people, facilitated by the **Release Train Engineer**; **Large Solution** (optional — multiple ARTs synchronized in a **Solution Train** for enormous cyber-physical systems); and **Portfolio** (strategy, lean portfolio management, epics, funding of value streams).

The heartbeat is the **PI — Program Increment**: a fixed timebox, typically 8–12 weeks of iterations plus a dedicated **Innovation and Planning iteration**. It opens with **PI Planning**, the two-day alignment event where all teams on the train plan together against shared objectives — the closest thing scaling agile has to a kickoff baseline — and closes with **Inspect & Adapt**. Configurations stack: Essential (Team + Program), Large Solution, Portfolio, Full.

- *Bar Exam:* multiple teams struggling to align on cadence, ART or PI vocabulary, a Release Train Engineer → SAFe. A single team in the same scenario → Scrum.

## The Supporting Cast: Scaling and Framework Distinctions the Exam May Name

Annex A3 surveys more frameworks than the ECO names, and one scenario can be decided by recognizing them. **Scrum of Scrums (SoS)**: when two or more Scrum teams (3–9 members each) must coordinate, a representative from each attends a scaled standup — typically two to three times a week — reporting completed work, upcoming work, and impediments that might block the *other* teams. **LeSS (Large Scale Scrum)**: deliberately retains single-team Scrum — one product backlog, one Product Owner, one sprint, one Definition of Done across all teams — adding only overall retrospectives and cross-team refinement. **Crystal**: a family of methodologies that scales rigor by **team size and criticality** — smaller, less critical projects get lighter controls; life-critical ones get more rigor (this idea also underlies the X3 suitability filter). **FDD (Feature-Driven Development)**: organized around five iterative processes — develop an overall model, build a features list, plan/design/build by feature — with six named roles including chief architect and chief programmer. **DSDM**: the constraint-driven framework — fix **cost, quality, and time** up front, then prioritize **scope** formally (often MoSCoW) to fit those constraints. **Disciplined Agile (DA)**: a process-decision framework, people-first and goal-driven, blending techniques rather than prescribing one life cycle.

The matching logic, compressed: *many teams, one cadence, economic vocabulary* → SAFe. *Many teams, keep Scrum pure* → LeSS or SoS. *Engineering practices* → XP. *Flow, no timeboxes, start where you are* → Kanban. *Fixed constraints, flex scope* → DSDM. *Scale rigor by size and criticality* → Crystal.

## Iteration Planning and Tracking Across the Board

The ECO asks you to *plan iterations* — translate the predictive world into the adaptive one. A predictive **work package** from the WBS becomes a backlog item or **user story**; oversized work is split until it fits inside one iteration. The **product roadmap** shows direction, the **release plan** groups iterations, and the sprint backlog is rebuilt fresh every cycle.

The book (Section 5.2) fills in the mechanics the ECO assumes. You do **not** write every story before starting — only enough to sketch the first release in broad brushstrokes plus refined items for the next iteration (**backlog preparation**, 5.2.2). Mid-iteration, the Product Owner works with the team in **backlog refinement** sessions (5.2.3) — commonly a timeboxed hour midway through a two-week iteration — so stories are understood, sized relative to each other, and small enough for a steady flow of completion; the guide's rule of thumb is **no more than one hour per week** spent refining, and if the team needs more, either the PO is overpreparing or the team lacks a critical skill. Stories that hide unknowns get a **spike**. Refinement also feeds **Definition of Ready** — the working agreement for what "ready to take in" means, the counterpart of Definition of Done.

**Iteration planning** itself (5.2.6) is a capacity negotiation: the team plans only what fits its *actual* capacity — holidays, vacations, and part-time availability reduce it, and the honest response is to plan less work, not to hope harder. Agile teams plan in small repeated cycles — *plan a little, deliver, learn, replan* — never once in a single chunk. And before any of it, a project needs a **charter** (5.1): the project vision (why), who benefits and how, what "done" means for the release, and how the team will work together — plus the **team charter**, the social contract of working agreements, ground rules, and group norms. A servant leader facilitates chartering; it is how a team coalesces.

Tracking swaps baselines for empirical measures. **Velocity** is the average of completed story points per iteration — used to forecast capacity and release dates, and *never* to compare teams, which corrupts the metric faster than a nor'easter corrupts a roof. **Burndown charts** plot remaining work against time; **burn-up charts** show completed work against total scope, making scope *change* visible — the total line rises when work is added, which a burndown conceals. Kanban adds **cumulative flow diagrams**. All of these answer the question earned value answers in predictive projects — *where are we, honestly?* — with evidence instead of percent-complete fiction.

The book's own indictment of predictive tracking (Section 5.4) is quotable: teams report "90% done" for months because percent-complete is a **surrogate measurement**, while finished features are an **empirical** one. The guide's poster child is the **watermelon project** — *green on the outside, red on the inside* — status stays green until a month before release, then turns red with no warning, because no empirical data existed until integration. Agile measurement inverts this: teams measure **what they delivered, not what they predict they will deliver**, and the running record of finished value makes forecasts honest. Velocity needs **four to eight iterations to stabilize** — expect that question. Flow-based teams measure **lead time** (request added to board → delivered to customer; captures external dependency waits), **cycle time** (time to process an item; exposes internal bottlenecks), and **response time** (how long an item waits before work starts). EVM even translates: planned 30 points, completed 25 → SPI = 25/30 = 0.83. And story points without finished stories measure capacity, not progress — a direct violation of "working software is the primary measure of progress."

- *Bar Exam:* "scope was added mid-release; which chart shows it?" → burn-up, not burndown. "Forecast next sprint's capacity" → velocity.

## Prioritization and Success

Backlog ordering belongs to the Product Owner, and the ordering logic is **value first**, refined by risk and effort: high-value and high-uncertainty work goes early because it buys information while it is cheap. Named techniques: **MoSCoW** (Must/Should/Could/Won't), **WSJF** — SAFe's cost-of-delay-over-duration calculus — and the **Kano model** of delighters and must-bes. Prioritization is a continuous act, refreshed at refinement.

And success itself is redefined. Predictive success means on time, on budget, in scope. Adaptive success means **value delivered**: working increments, satisfied customers, sustainable pace, improving flow, demonstrable quality. The acceptance criteria on each story and the Definition of Done on each increment are the micro-successes that compound into the macro one.

## Key Terms

- **Scrum** — lightweight framework of 3 roles, 5 events, 3 artifacts delivering iterations in fixed sprints
- **Product Owner** — accountable for backlog content and ordering; maximizes product value
- **Scrum Master** — servant leader who facilitates events and removes impediments; not a task-assigning PM
- **Sprint** — fixed 1–4 week timebox producing a usable increment; scope flexes, time does not
- **Definition of Done** — shared quality checklist an increment must satisfy; story-level success criterion
- **Extreme Programming (XP)** — agile approach centered on engineering quality: pairing, TDD, continuous integration, sustainable pace
- **WIP limit** — Kanban cap on work allowed in a workflow state; exposes bottlenecks, enforces finish-before-start
- **Pull system** — work enters the process only when capacity frees (Kanban), versus timebox-push (Scrum)
- **Agile Release Train (ART)** — SAFe's long-lived team of agile teams (50–125 people) on a shared cadence
- **Program Increment (PI)** — SAFe timebox (8–12 weeks) of iterations, opened by PI Planning
- **Velocity** — average story points completed per iteration; capacity and release forecasting
- **Burn-up chart** — completed vs. total work; makes scope change visible

## Self-Check Questions

1. A team's board shows the "In Review" column perpetually full while others sit empty. Which framework's defining practice would surface this, and what specific mechanism causes the signal?
2. During a sprint, a stakeholder demands an urgent feature be added immediately. Walk through which Scrum roles and events are involved in the correct response — and what does *not* happen.
3. Your program has forty developers across five teams whose releases keep colliding. Which framework and construct apply, what is the cadence's name and length, and who facilitates it?

There it is, Mr. Gomez: the field guide. Four frameworks, one disposition — deliver value early, inspect honestly, improve relentlessly. Next session: business analysis, twenty-seven percent of your exam. Bring coffee. I certainly will.

## Addendum — The Logical Units of an Iteration, and Where Scope Comes From

Two loose threads from iteration planning deserve their own thread count.

**The logical units, largest to smallest.** An adaptive plan is not one flat list — it nests, along two axes the exam likes to blur into one. The **release** is the largest unit, a milestone that bundles several iterations into something the customer can actually use. An **epic** is the next size down — a large body of work too big to finish inside a single iteration, which is exactly why it is bigger than one: an epic needs *several* iterations' worth of stories before it is done. Only below the epic do you reach the **iteration** (sprint) itself — the fixed timebox the ECO means when it asks you to "distinguish the logical units." Inside each iteration the team completes **user stories** sliced out of whichever epic they belong to (the standard "as a \_\_\_, I want \_\_\_, so that \_\_\_" slice of value, sized to fit inside a single iteration), and a story splits further into **tasks** (the technical to-do items the Developers actually check off day to day). Release → epic → iteration → story → task: the release answers "when do customers get value," the epic answers "what large capability are we building," the iteration answers "what will we finish next," the story answers "what does done look like," and the task answers "what do I do this afternoon."

- *Bar Exam:* if a scenario says a work item is "too large to fit in one sprint," the fix is to split the epic into smaller stories — *not* to lengthen the sprint. The timebox is fixed; the unit of work bends to it, never the reverse.

**Where scope inputs come from.** Predictive planning pulls scope from a signed-off requirements document. Adaptive planning has no such single artifact — scope is assembled continuously from several living inputs: the **project charter and vision** (the why, from Section 5.1 — what "done" means for the release); the **product roadmap** (the direction of travel across releases); **personas and the voice of the customer** (who the work is for, gathered through direct collaboration rather than a signed requirements binder); existing **backlog items** carried from prior refinement; and technical constraints or dependencies surfaced by the team itself. Backlog refinement (5.2.3) is where these inputs get continuously converted into sized, ready stories — scope in an adaptive project is never "input once," it is re-derived every cycle from the same handful of living sources.

- *Bar Exam:* a distractor claiming adaptive projects "have no scope inputs, only a backlog" is wrong — the backlog is the *output* of continuous refinement, not the *input*. The inputs are the charter, roadmap, personas, and prior backlog items that refinement acts upon.
