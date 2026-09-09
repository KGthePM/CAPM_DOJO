# LEC-05 — Methods & Artifacts: The Craftsperson's Toolbox

*CAPM Training Dojo · Professor's Lecture Series · Session Five*

Sit down, Mr. Gomez. Today we open the cabinet itself. Section 4.4 gives us **methods** — the ways of working — and Section 4.6 gives us **artifacts** — the tangible things those ways produce. Learn the *families*, not just the members: the exam tests whether you know which drawer a tool lives in. A surgeon who reaches for the scalpel when the chart calls for forceps is not helped by knowing both words. The method families: data gathering and analysis, estimating, meetings and events, and a small drawer of "other."

## Data Gathering and Analysis

These methods **collect, assess, and evaluate data to gain a deeper understanding of a situation**, and — paired with the visual artifacts we meet later — inform decisions.

**Alternatives analysis** evaluates options for performing the work. **Assumption and constraint analysis** keeps unproven beliefs and limiting factors consistent with the plans. **Benchmarking** compares products, processes, and practices against comparable organizations to find best practices and a basis for measuring performance. Then the money drawer, **business justification analysis**, whose outputs feed the business case: **payback period** (time to recover the investment), **ROI** (average net benefits over initial cost), **IRR** (projected annual yield), **NPV** (future benefits in today's money), and **cost-benefit analysis**. You need not compute these; recognize them in prose.

The risk-minded set: **decision tree analysis** (a chain of options under uncertainty), **expected monetary value (EMV)** (probability × monetary impact), **sensitivity analysis** (which risks matter most), **simulations** — most famously **Monte Carlo** (an iterated model producing a probability distribution of outcomes), and **reserve analysis** (whether reserve suits remaining risk). Add **root cause**, **variance**, **trend**, **stakeholder**, and **SWOT** analyses, **earned value analysis**, and the **probability and impact matrix**, and you have the working set.

- *Bar Exam:* EMV is one event's probability × impact; a decision tree chains multiple options, with EMVs on its branches; Monte Carlo combines *many* uncertainties into a distribution. Three lookalikes, three jobs — the exam shuffles them shamelessly.

## Estimating Methods

**Estimating develops an approximation of work, time, or cost.** The two heavyweights: **analogous estimating** uses historical data from a *similar* activity or project; **parametric estimating** applies an *algorithm* to historical data and project parameters. Analogous compares wholes; parametric multiplies rates.

Around them: **multipoint estimating** averages optimistic, pessimistic, and most likely values under uncertainty (the antidote to **single-point estimating**, one best-guess number). **Relative estimating** sizes work by comparison, not absolute units — **story points** are its unitless currency, and **story point estimating** assigns those abstract points to signal a story's difficulty, complexity, risk, and effort. **Affinity grouping** classifies items by likeness — T-shirt sizes, Fibonacci numbers. **Wideband Delphi** has experts estimate individually over multiple rounds; the highest and lowest estimators explain their reasoning, everyone re-estimates, and the cycle repeats until convergence — **planning poker** is its friendlier variation. **Function points** measure business functionality in an information system.

- *Bar Exam:* "similar project's actuals" → analogous. "Algorithm, rate, parameter" → parametric. "Story points, no hours" → relative estimating. Converging rounds of expert estimates → Wideband Delphi, not brainstorming.

## Meetings and Events

Meetings are a **primary means of communication** throughout the project. The predictive classics: the **kickoff** (set expectations, commence work), **planning** and **status** meetings, **change control board** meetings (approve, delay, or reject changes), **bidder conferences** (a common understanding for sellers), **steering committee** (senior stakeholders deciding beyond the team's authority), **project reviews** (end of phase), **project closeout** (final acceptance), and **lessons learned** meetings. The adaptive set: **daily standup** (yesterday, today, obstacles), **backlog refinement**, **iteration planning**, **iteration review** (demonstrate the work), the **retrospective** (improve process and product — a *form of lessons learned meeting*), **release planning**, and **risk review**. The "other methods" drawer: **impact mapping**, **modeling** (prototypes, diagrams, storyboards), **Net Promoter Score**, **prioritization schema** (MoSCoW; weighted multicriteria analysis), and the **timebox** — a short, fixed period for work.

## Artifacts: The Paper Trail

An **artifact** is a template, document, output, or project deliverable. Eight families follow. Classify first, name second.

## Strategy Artifacts

These are **created prior to or at the start of the project**, address strategic high-level information, and **do not normally change**. Members: the **business case** — the *value proposition* for a proposed project, financial and nonfinancial benefits included; the **project charter** — issued by the sponsor, *formally authorizes* the project and gives the PM authority over resources; the **project brief** — a high-level overview of goals, deliverables, and processes; the **project vision statement** — concise, meant to *inspire*; the **roadmap** — a high-level timeline of milestones, significant events, and decision points; and the **business model canvas** — a one-page visual summary of value proposition, infrastructure, customers, and finances, favored in lean startups.

- *Bar Exam:* the business case argues *whether and why* to undertake the project; a benefits management plan governs how realized benefits are tracked *after* approval. The charter *authorizes*; the business case *justifies*. Confuse them and PMI collects your points.

## Logs and Registers

These record **continuously evolving aspects of the project** and are **updated throughout** — the strategic drawer stays frozen; this one lives and breathes. PMI concedes *log* and *register* are sometimes interchangeable ("risk register," "risk log" — same thing). Members: the **assumption log** (all assumptions and constraints), the **change log** (changes submitted and their status), the **issue log** (active issues, each assigned for resolution), the **risk register** (owner, probability, impact, score, planned responses), the **stakeholder register** (identification, assessment, classification), the **lessons learned register**, the **backlog** (an *ordered, prioritized* list of work), and the **risk-adjusted backlog**, which builds threat- and opportunity-addressing work into the queue itself.

- *Bar Exam:* the classic is **risk versus issue**. A risk is a *future uncertain* event; an issue is a *current condition* already affecting objectives. Uncertain → register. Happened → log. That distinction funds half a dozen exam questions.

## Plans

A **plan is a proposed means of accomplishing something**; subsidiaries combine into the **project management plan**, describing how the project will be *executed, monitored and controlled, and closed*. The naming convention decodes blind: scope, schedule, cost, quality, resource, communications, risk, procurement, and requirements management plans describe how each aspect is planned and controlled; the **change control plan** establishes the change control board and its authority; the **stakeholder engagement plan** promotes productive involvement. Adaptive additions: the **iteration plan**, the **release plan** (dates, features, outcomes across multiple iterations), and the **test plan**.

## Hierarchy Charts

These **begin with high-level information and progressively decompose into detail**, upper levels encompassing all lower ones. The flagship is the **work breakdown structure (WBS)** — hierarchical decomposition of the *total scope of work*. Its cousins decompose other dimensions: the **organizational breakdown structure (OBS)** maps activities to the organizational units performing them; the **resource breakdown structure** organizes resources by category and type; the **product breakdown structure** reflects a product's components; the **risk breakdown structure** arranges potential *sources* of risk. A close relative, the **responsibility assignment matrix (RAM)**, grids resources against work packages — its most famous form the **RACI chart**: responsible, accountable, consulted, informed.

- *Bar Exam:* WBS decomposes *scope*; OBS decomposes *the organization*. If a stem decomposes anything else, name the structure after that thing — PMI is nothing if not literal.

## Baselines

A **baseline is the approved version of a work product or plan**, compared against actual performance to find variances. The **performance measurement baseline** integrates the scope, schedule, and cost baselines into the yardstick for earned value. The **scope baseline** bundles the approved scope statement, WBS, and WBS dictionary — changeable only through formal change control. Add the **budget**, the **project schedule** (linked activities with dates, durations, milestones, resources), and the **milestone schedule** (milestones with planned dates only).

## Visual Data and Information

These artifacts **present data visually** — produced *after* analysis, aiding decisions and prioritization. The predictive workhorses: the **Gantt chart** (bars on a calendar — activities vertical, dates horizontal), the **project schedule network diagram** (logical relationships among activities), the **histogram**, the **scatter diagram** (two variables' relationship), the **flowchart**, the **cause-and-effect diagram** (traces an effect to root cause), the **S-curve** (cumulative costs over time), and **dashboards** — charts showing progress against important measures. The **requirements traceability matrix** links requirements from origin to satisfying deliverables; the **prioritization matrix** places effort against value in four quadrants; the **stakeholder engagement assessment matrix** compares current and desired engagement; the **affinity diagram** groups ideas; the **information radiator** is a visible physical display for timely knowledge sharing.

The adaptive crew: the **burndown/burnup chart** — a graphical representation of work *remaining* in a timebox or work *completed* toward release; the **cumulative flow diagram** (features completed, in development, in backlog); **cycle time**, **lead time**, and **throughput charts**; the **velocity chart** (rate of production and acceptance per interval); the **story map**; the **use case**; and the **value stream map**, which exposes waste in flows of information or materials.

- *Bar Exam:* burndown tracks work *remaining* and runs downhill toward zero; burnup tracks work *completed* and climbs — and shows *scope increases* as a rising total-work line, which a burndown smears into ambiguity. When the scenario is "show scope changes against progress," the answer is burnup.

## Reports, Agreements, and Contracts

**Reports** are formal summaries communicated to sponsors, business owners, and PMOs: the **status report**, the **quality report** (quality issues and corrective actions), and the **risk report** (individual risks plus the *level of overall project risk*). An **agreement** is any document defining the intentions of the parties; a **contract** is the binding form — obligating the seller to provide and the buyer to pay. **Fixed-price contracts** (FFP, FPIF, FP-EPA) suit well-defined work; **cost-reimbursable contracts** (CPAF, CPFF, CPIF) pay actual costs plus a fee and suit ill-defined or frequently changing scope; **time and materials** fixes a rate but not the work, ideal for staff augmentation; **IDIQ** covers an indefinite quantity within stated limits and a fixed period. Softer agreements include the MOU, MOA, SLA, and basic ordering agreement. A final miscellany — **bid documents** (RFI, RFQ, RFP), the **activity list**, **metrics**, the **project calendar**, **requirements documentation**, the **project team charter**, and the **user story** — rounds out Section 4.6.

- *Bar Exam:* well-defined scope → fixed price; murky, shifting scope → cost-reimbursable; buying hours and expertise → T&M. That triangle is exam bread and butter.

## Key Terms

- **Method** — a defined way of working applied across performance domains
- **Artifact** — a template, document, output, or project deliverable
- **Strategy artifacts** — business case, charter, brief, vision, roadmap; created at start, rarely changed
- **Risk register** — repository of risk outputs: owner, probability, impact, score, responses
- **Issue log** — record of current conditions affecting objectives, assigned for resolution
- **Analogous estimating** — using historical data from a similar activity or project
- **Parametric estimating** — algorithmic calculation from historical data and parameters
- **Work breakdown structure (WBS)** — hierarchical decomposition of total project scope
- **Performance measurement baseline** — integrated scope, schedule, and cost baselines
- **Burndown/burnup chart** — graphical representation of work remaining or completed
- **Business case** — value proposition justifying a project
- **Wideband Delphi** — iterative expert estimating to consensus; planning poker is a variation

## Self-Check Questions

1. A colleague logs "the legacy vendor may withdraw support next quarter" in the issue log. Correct or incorrect — and in which artifact does it belong if wrong? What single word in the entry tips you off?
2. Your sponsor wants one chart showing both the features completed to date and every scope increase approved mid-release. Which visual artifact do you produce, and why does its sibling serve less well?
3. Name the two dominant estimating methods and the defining input of each — then tell me which you would defend to a steering committee when the project resembles nothing the organization has ever built, and why.

Bring written answers next session, Mr. Gomez. Section 4 hides its easiest points behind unfamiliar names — learn the names, and they are yours.

## Addendum — Using the Plans and Registers in Anger

The ECO does not merely want you to *name* these artifacts, Mr. Gomez — it wants you to *use* them in a scenario. Four working skills, one per paragraph.

**Why each subsidiary plan exists.** Every subsidiary plan answers "how will we manage X?" — and the exam likes to test the *purpose*, so learn the intent, not the title page. The **cost management plan** — how costs will be estimated, budgeted, managed, monitored, and controlled. The **quality management plan** — how the policies, procedures, and activities for meeting quality requirements will be implemented. The **risk management plan** — how risk activities will be structured and performed. The **schedule management plan** — how the schedule will be developed, managed, and controlled. The **communications management plan** — who needs what information, when, in what form, and from whom. The moral: when a scenario asks "which plan governs this?", answer with the aspect being *managed*, not the artifact being *produced*. Similarly, **project management plan versus product management plan**: the project management plan describes how the *project* will be executed, monitored and controlled, and closed — the work of delivery. A product management orientation instead shepherds the *product* across its longer life — concept through delivery, growth, maturity, retirement, as in Session Six's Appendix X4. The project plan ends at closure; the product outlook continues well past it. The exam's telltale: if the scenario concerns post-project evolution and benefits over years, that is product territory.

**Critiquing scope.** Reviewing project scope means testing the *quality of the scope definition itself* — an examinable skill, not a rubber stamp. A well-formed scope statement is **complete** (all deliverables present, none discovered later in a panic), **unambiguous** (a requirement two engineers read two ways is two requirements wearing one number), **traceable** (every element traces to a business need or requirement — nothing gold-plated, nothing orphaned), and **feasible** (achievable within the known constraints). Scope creep shows up as *uncontrolled expansion without* change-control; the anecdotal "while we're in there" additions. Gold-plating is the team *deliberately* exceeding the specification unbidden — generosity with someone else's money, and still a defect of scope discipline. When a scenario asks what the PM should *check* when reviewing scope, the answer is completeness, clarity, traceability to requirements, and consistency with constraints — in that family.

**Milestones versus task durations.** A **milestone** is a significant point or event in a project — a *zero-duration marker* that punctuates the schedule. A **task duration** is the number of work periods required to *perform* the activity itself. "Obtain building permit — 15 days" has a duration; "Permit granted" is the milestone that ends it. Milestones serve as **control points** — approval gates, phase completions, deliverable hand-offs — which is why the milestone schedule presents *only* milestones with their planned dates, no durations at all. When an exam stem says "significant event with zero duration," the answer is milestone, not summary task — a summary task *rolls up* durations beneath it; a milestone has none to roll.

**Registers in action.** To **use** the risk register in a given situation: it stores each risk with its **owner, probability, impact, score, and planned response** — so when a *new uncertain* event is identified, the correct action is to add it to the register (or update its entry), assign an owner, and let the planned response govern; you do not act on an unassessed risk out of sheer enthusiasm. To **use** the stakeholder register: it holds each stakeholder's **identification, assessment, and classification** — so when a new stakeholder appears, or an existing one's power or interest shifts mid-project, the correct action is to update the register and re-plan engagement accordingly. Both registers are *living* artifacts, updated throughout — recall from the logs-and-registers drawer that this is precisely what separates them from the frozen strategy artifacts.

**Determining resources.** Resources — people, equipment, materials, facilities — are determined from the **scope of work itself**: decompose the scope (the WBS), identify the skills and quantities each work package demands, and check them against **availability** (who exists, when, where) and **constraints** (budget, calendars, procurement lead times). The RACI chart and the resource breakdown structure are the working instruments: the RACI maps *who* to *what work*; the RBS organizes resources *by category and type* so gaps and surpluses show themselves. The exam scenario is usually a team that either lacks a skill nobody enumerated, or is staffed beyond any reasonable need — both are failures of mapping work packages to resources, which is what "determine the number and type of resources" actually means.
