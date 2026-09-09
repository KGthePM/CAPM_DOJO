# LEC-09 — The Predictive Path: Process Groups & the Plan-Driven Way

*CAPM Training Dojo · Professor's Lecture Series · Session Nine*

Sit, Mr. Gomez. Today we cross from philosophy into machinery.

Until now you have studied the PMBOK Guide 7th Edition — principles, value delivery, performance domains. Lovely ideas, all of them. But PMI never burned the old blueprints; it merely moved them to another building. That building is **Process Groups: A Practice Guide (2022)**, and roughly seventeen percent of your exam lives inside it. Seventeen percent, Mr. Gomez, is the difference between "Certified Associate" and "see you in the spring." Pay attention.

## Process Groups Are Not Phases

Let us clear up the confusion that ruins more exam answers than any other. A **phase** is a division of the project's timeline — design, build, test, deploy — each ending with a deliverable handoff. A **process group** is a *cluster of processes* — things a project manager does. They sound interchangeable. They are not.

Here is the crucial mechanic: **process groups repeat within every phase**. Each phase is a small project of its own: it gets initiated, planned, executed, monitored, and closed. And the groups *overlap and iterate* — you do not finish "planning" and never plan again; you re-plan as reality asserts itself. When a question asks which group a charter-for-phase-two belongs to, the answer is Initiating, even though the project began months ago. The exam adores that trap.

The five groups, in order of appearance and eternal recurrence:

**Initiating.** Two processes: develop the project charter and identify stakeholders. The **charter** formally authorizes the project and — mark this — *appoints the project manager*. No charter, no project; you are merely a person with opinions. Initiating happens once per project and once per phase.

**Planning.** The heavyweight: twenty-four of the forty-nine processes. Here you build the **project management plan** — an integrating document comprising subsidiary plans (scope, schedule, cost, quality, resource, communications, risk, procurement, stakeholder) and the three **baselines**: scope, schedule, and cost. Everything the predictive approach is famous for — the up-front rigor, the Gantt charts, the EVM arithmetic we shall do next session — is manufactured here.

**Executing.** Ten processes. The work gets done: deliverables produced, teams developed, procurements conducted, risk responses implemented, stakeholders engaged. This is where the money is spent — typically the bulk of the budget and effort.

**Monitoring & Controlling.** Twelve processes running *concurrently* with executing. Collect performance data, compare against baselines, spot variances, and push changes through **integrated change control**. Earned value analysis lives here, in Control Costs. M&C is the project manager's sentry duty: continuous, unglamorous, indispensable.

**Closing.** One process — Close Project or Phase — and it is the most skipped process in practice and therefore beloved by exam writers. Formal handoff of deliverables, final report, archived documents, released resources, lessons recorded for the next poor soul.

Count them: two, twenty-four, ten, twelve, one. Forty-nine processes across five groups (PG §1.7.4, Table 1-4), cross-referenced against **ten knowledge areas** — Integration, Scope, Schedule, Cost, Quality, Resource, Communications, Risk, Procurement, Stakeholder. Every process belongs to one group *and* one knowledge area, like a seat with both a row and a section. One scholarly footnote: the Practice Guide itself arranges its processes by *group* — Sections 4 through 8 of the guide — not by knowledge area; the ten-area lens is PMBOK Guide Sixth Edition heritage that the exam still expects you to wield. **Integration** is the conductor's knowledge area: charter, plan, change control, closure — the processes that bind the other nine into one coherent endeavor.
- *Bar Exam:* "Which process group has the most processes?" Planning, by a mile. "Which has the fewest?" Closing, with one. "A new phase begins — which group's processes fire?" Initiating. These are free points, Mr. Gomez; take them.

## When Predictive Fits

The predictive approach — plan-driven, sometimes called waterfall — front-loads knowledge: define scope fully, plan fully, then execute against the plan. It fits when the world cooperates, specifically when:

Requirements are **well understood and stable**. The deliverable is clearly describable in advance. The **technology is mature** — no research needed to know it will work. **Regulatory or contractual** demands require documented, auditable rigor. And the **cost of change grows steeply** over time — as in construction, where moving a wall after the concrete pours is expensive in a way moving a div in a web app is not.

When requirements are murky, evolving, or discovered through delivery, adaptive approaches win, and a **hybrid** mixes the two — predictive governance wrapped around iterative development. The exam does not ask which approach is *better*; it asks which fits the situation. PMI is relentlessly neutral, like a good referee.

## The Org Chart Rules the Project Manager

Now the section the Exam Content Outline names explicitly: how organizational structure shapes the project. PMI's spectrum runs by **project manager authority**, laid out in Table 2-1 of the guide (PG §2.5.1), and you must know the order. Two things the table grades besides authority: whether the PM role is *full-time or part-time*, and *who manages the project budget*.

**Functional (hierarchical).** Staff grouped by specialty — engineering, finance, marketing — each silo with its own manager. The project manager has *little or no authority* (PG Table 2-1: "little or none"); the PM role is part-time, the functional manager manages the budget, and at best the PM is a **coordinator or expediter**, politely borrowing resources from functional managers. Deep expertise, clear career ladders, and project control roughly as strong as a tissue in a gale. The guide's table also lists **organic/simple** and **multidivisional** forms in this same low-authority family — the exam rarely visits them, but know they exist.

**Matrix.** People report both to a functional manager and to a project manager — the two-boss arrangement. It comes in three strengths, and PG Table 2-1 grades all three. A **weak matrix** tilts toward functional: the PM's authority is *low*, the role is part-time, and the functional manager still manages the budget. A **balanced matrix** gives the PM *low-to-moderate* authority with budget management *mixed* between the two managers — the throne is shared, sometimes gracefully. A **strong matrix** has *moderate-to-high* authority, a *full-time* designated PM role, the PM managing the budget, and often a dedicated manager of project managers. The matrix buys flexible resource sharing at the price of complexity: competing priorities, divided loyalties, and staff answering to two masters. The exam loves asking you to rank authority across the three.
- *Bar Exam:* authority runs functional < weak < balanced < strong < projectized. If a scenario shows a full-time PM who controls resources but staff still hold functional homes, that is a strong matrix — not projectized.

**Projectized.** The guide calls it **project-oriented** (PG Table 2-1): organization by projects. The PM has **high to almost total authority**, a full-time designated role, and manages the project budget; team members report directly to the PM; administrative staff are project-dedicated. Best project control, and the classic side effects: duplicated resources across projects and team members with nowhere to go when the project ends. Note also the **virtual** row in Table 2-1 — a network structure with nodes at points of contact, where PM authority is *low to moderate* and budget management is *mixed*: geography dilutes authority even when the role is full-time.

**Colocation vs virtual teams** cuts across all of the above. **Colocation** puts team members physically together — the war room — maximizing informal communication, quick problem-solving, and camaraderie. **Virtual teams** span cities, countries, and time zones: broader talent access, lower cost, and the price is distance — weaker informal channels, isolation, and meeting schedules that must respect the clock. Neither is superior; the exam tests whether you match the structure to the project's communication demands and compensate for the weakness each one introduces. A virtual team demands *planned, deliberate* communication that a collocated team gets for free over coffee.

## The Project's Component Parts

The ECO asks you to "distinguish the differences between various project components," so let us name the parts properly, with the guide's own definitions (PG §9, scope baseline; §5.5).

The **work breakdown structure (WBS)** is a hierarchical decomposition of the *total scope of work* the team must carry out to accomplish the objectives and create the deliverables (PG §5.5). Two design rules the exam tests: it is **deliverable-oriented** (the WBS holds work *products*, not activities — "in the context of the WBS, work refers to work products or deliverables that are the result of activity"), and it obeys the **100% rule** — everything in the scope statement appears, nothing outside it does. Each descending level is a more detailed definition of the work.

The **work package** is the lowest level of the WBS, each with a unique identifier from the **code of accounts**. It is the unit that gets estimated, scheduled, assigned, monitored, and controlled; later, work packages are decomposed into the schedule *activities* that Define Activities (PG §5.7) produces. How deep to decompose varies with project size and complexity — the 8/80 heuristic (between 8 and 80 hours of effort) is common practice, though the guide wisely declines to canonize a number.

Between deliverable and work package sits the **control account** (CA): the management control point where scope, budget, and schedule are integrated and compared to earned value for performance measurement. A control account has *two or more work packages*; each work package belongs to *exactly one* control account. A **planning package** is the odd cousin — a WBS component below the control account with known work content but *no detailed schedule activities yet*, the habitat of rolling-wave planning.

The **WBS dictionary** accompanies the structure and describes each component: code of account identifier, description of work, responsible organization, schedule milestones, resources, cost estimates, acceptance criteria (PG §9). A WBS without its dictionary is a map without a legend.

The **scope baseline** — the approved scope statement *plus* the WBS *plus* the WBS dictionary — is one of the three baselines, changed only through formal change control.

## The Paper Trail: Artifacts and Controls

Predictive projects document as they go, and the exam wants you to recognize the paper. The artifacts, roughly in order of appearance:

- **Project charter** (Initiating; PG §4.1) — authorizes the project, links it to strategic objectives, appoints the PM.
- **Stakeholder register** (Initiating; PG §4.2) — who the players are.
- **Project management plan** with its subsidiary plans and **three baselines** (scope, schedule, cost) — Planning's master output.
- **Requirements documentation, scope statement, WBS and WBS dictionary** — the scope chain.
- **Activity list, milestone list, duration estimates, project schedule network diagrams** — the schedule chain (PG §§5.7–5.10).
- **Cost estimates, basis of estimates, project funding requirements** — the cost chain (PG §§5.12–5.13).
- **Risk register, assumptions log, issue log, change log** — the living documents of Monitoring & Controlling.
- **Work performance data → work performance information → work performance reports** — the guide's data-to-information pipeline (PG §1.8): raw measurements collected during execution, analyzed in context, and packaged for stakeholders.

And the **controls**: integrated change control (PG §7.2) is the gate every baseline change passes through; variance analysis and earned value analysis (PG §7.6) are how Control Costs watches the money; the **performance measurement baseline** — scope + schedule + cost baselines fused — is what EVM measures against. When you hear "documenting project controls" on the exam, think: baselines, change control, and the work performance pipeline.

## The Plan as a System

Hold the whole picture. In the predictive way, the **project management plan** is not a binder; it is a *system*: the subsidiary plans say how each domain will be managed, the baselines say what success means numerically, and the monitoring processes spend the project comparing reality to that document and correcting through change control. The plan governs; executing obeys; monitoring referees; closing signs the certificate.

Next session we sharpen the pencils — critical path arithmetic and earned value, the numbers that make the predictive approach honest. Bring a calculator and your nerve.

## Key Terms

- **Process groups** — Initiating, Planning, Executing, Monitoring & Controlling, Closing: clusters of PM work that recur within every phase (49 processes total, PG §1.7.4)
- **Phase** — a timeline division of the project ending in a deliverable handoff; each phase runs its own mini life cycle of all five groups
- **Phase gate** — end-of-phase review comparing performance to business case, charter, plan, and benefits plan; outcomes include continue, modify, end, remain, or repeat (PG §1.7.3)
- **Knowledge areas** — the ten cross-cutting domains (Integration through Stakeholder) that matrix against the process groups
- **Project charter** — the Initiating artifact that authorizes the project and appoints the project manager (PG §4.1)
- **Baselines** — the approved scope, schedule, and cost references against which performance is measured
- **WBS** — hierarchical, deliverable-oriented decomposition of total project scope (PG §5.5)
- **Work package** — lowest level of the WBS; unit of estimating, scheduling, and control; unique identifier from the code of accounts
- **Control account** — management control point integrating scope, budget, and schedule against earned value; contains two or more work packages
- **Planning package** — WBS component below a control account with known content but no detailed schedule activities yet
- **WBS dictionary** — detailed descriptions of each WBS component: work, responsible organization, milestones, resources, estimates, acceptance criteria
- **Work performance data/information/reports** — raw measurements collected during execution, analyzed in context, then packaged for stakeholders (PG §1.8)
- **Functional organization** — hierarchical silos by specialty; low PM authority (coordinator/expediter at best)
- **Matrix organization** — dual reporting to functional and project managers; weak, balanced, or strong by PM authority
- **Projectized (project-oriented) organization** — structure by projects; PM authority high to nearly total; team reports to the PM
- **Colocation** — physically co-locating the team to maximize informal communication
- **Virtual team** — geographically distributed team; wider talent pool, requires deliberate planned communication

## Self-Check Questions

1. A project is halfway through execution when the organization charters its second phase. Which process group's processes are performed, and why does this confuse candidates who equate process groups with phases?
2. Rank functional, weak matrix, balanced matrix, strong matrix, and projectized structures by project manager authority — and name the tell-tale feature of each.
3. Your sponsor wants to cut costs by disbanding the war room and sending everyone home to work remotely. What communication trade-off should you warn about, and what would a predictive project manager add to compensate?

Bring written answers, Mr. Gomez. And do brush up your arithmetic before next session — earned value forgives no one, least of all the unprepared.
