# LEC-12 — Business Analysis II: Traceability, Roadmaps & Delivery Readiness

*CAPM Training Dojo · Professor's Lecture Series · Session Twelve*

Welcome back, Mr. Gomez. Last session we gathered and classified requirements. Today we confront the harder question: how do you keep track of the blasted things, decide what gets built when, and prove — *prove*, not assert — that what shipped is what was needed. This is where business analysis stops being note-taking and becomes evidence.

## User Stories Versus Use Cases

Two formats for writing requirements, and the exam expects you to know which grain each serves.

A **user story** is a short, backlog-sized requirement written from the perspective of a single user: *"As a [role], I want [capability], so that [benefit]."* Stories are deliberately small, conversational, and adaptive-friendly — they invite dialogue rather than document. They live in the backlog, get refined just before an iteration, and carry their testable definition of "done" in **acceptance criteria**.

A **use case** is a fuller narrative of how an **actor** (a person or external system) interacts with the solution to achieve a goal — a step-by-step path including main flows, alternate flows, and exceptions. Use cases suit complex processes with **multiple actors and branching paths**, and they hold up as predictive-world specification artifacts.

The scenario cue: one feature request from one user's viewpoint → user story. A multi-step workflow involving a customer, a staff member, and a backend system with decision branches → use case. Do not let the exam swap them on you.

- *Bar Exam:* both are legitimate requirements formats — the question is always *fit*: single perspective and backlog-sized versus multi-actor process with paths.

## The Requirements Traceability Matrix

The **requirements traceability matrix (RTM)** is the predictive world's answer to a quiet scandal: requirements that vanish between elicitation and delivery, features built that nobody asked for, tests that never tested anything. The RTM links each requirement — row by row — to its **source** (which business objective or stakeholder need birthed it), its **design elements**, its **implementation**, and the **test case or acceptance evidence** that proves it was met.

What does that buy you? **Coverage** — every requirement is carried forward and nothing gold-plated sneaks in. **Impact analysis** — when a requirement changes, you can see everything downstream that trembles. **Status and validation evidence** — a room of green checkmarks tracing business need to passing test. The Guide's own phrasing: the matrix *traces links backward to features and business objectives, or forward to code, other development artifacts, or test cases* — memorize "backward to business objectives, forward to test cases" and you have the whole idea. In the adaptive world the **product backlog** performs the same duty: an ordered, continuously updated ledger of requirements in flow.

- *Bar Exam:* "Where did this requirement come from, and where is it verified?" → RTM. If the scenario is adaptive, the same answer wears a backlog's clothes.

## Managing the Product Backlog

The **product backlog** is the single, ordered list of everything potentially needed in the product — the adaptive-world requirements repository, owned in Scrum by the **product owner**. Note that word *ordered*: a backlog is not a pile, it is a ranking.

Backlog management is a continuous discipline called **refinement** (you may hear veterans say *grooming*): adding detail, estimating, decomposing large items — **epics** into **features** into **stories** — and re-ordering as learning arrives. A healthy backlog is said to be **DEEP**: *Detailed appropriately* (near-term items fine, distant ones coarse), *Estimated*, *Emergent* (it evolves), *Prioritized*.

And what drives that prioritization? The Guide's factors for ranking requirements and other product information are **value, cost, difficulty, regulations, and risk** — value leads, but a shrewd BA also weighs risk early (do the risky, poorly understood things while there is still time to be wrong cheaply), plus dependencies (a thing cannot precede what it needs) and, implicitly, cost of delay. Note the Guide's division of labor: the BA *facilitates and negotiates* prioritization decisions, but **accountable stakeholders with the authority to prioritize must make them**. When the exam asks the basis for ordering, value and risk lead the answer key; "the loudest stakeholder" and "easiest first" are the decoys of the unserious.

## Product Roadmaps: Components to Releases

Zoom out. The **product roadmap** is the long-range, strategic view of how the product will evolve: a high-level outline of *which aspects of a product are planned for delivery over the course of a portfolio, program, or one or more iterations or releases — and the potential sequence for delivering them*. Its key benefit, in the Guide's words, is creating **shared expectations among stakeholders** for the deliverables and their order. It is a direction-setter, *not* a locked schedule — treat it as a commitment calendar and you have misunderstood it.

What actually goes on one? Section 4.5.3.1 of the Guide enumerates the elements, and the exam samples from this list:

- **Strategy information** — how the product supports organizational strategy (better market positioning, improved customer satisfaction);
- **Portfolio and program relationships** — how the product relates to other products;
- **Initiatives** — overview of related projects considered or in development;
- **Product vision** — the product, its intended customers, and how needs are met;
- **Success criteria** — the metrics that will determine solution success;
- **Market forces** — external forces shaping development;
- **Product releases** — the expected releases and the *themes or high-level features each includes*;
- **Features** — capabilities the product will provide, *paired to the releases*, prioritized by how each supports strategy and goals; and
- **Timelines** — the expected delivery window: roughly a *three-to-six-month horizon* for predictive projects, shorter for adaptive.

Development itself is collaborative — the Guide prescribes **facilitated workshops**, **feature models** (a tree of all solution features), **product visioning** (vision statements, collaborative games like the product box), and **story mapping** (sequencing user stories by business value and the order users perform them; roadmap-level stories typically live as *epics*, decomposed later). And roadmaps are audience-tailored documents: internal *product managers* want the most detail; *external customers* get broad time ranges rather than specific dates, and confidential or strategy-internal items are stripped.

Between the roadmap and daily work sits the hierarchy the exam expects you to navigate: **roadmap** (long-range, strategic) → **release plan** (medium-range: which components ship in which release — the Guide ties this to prioritization "allocating requirements to iterations or releases") → **backlog** (near-term, continuously re-ordered work).

The examinable skill is assigning **components to releases**. The logic: sequence for value and feasibility — high-value, low-effort components go early; risk-reducing components go early too, for the reason above; dependent components follow their prerequisites; nice-to-haves wait. A release should ship a coherent increment of value, not merely whatever happened to be finished.

- *Bar Exam:* keep each artifact's purpose intact — roadmap = strategic direction, release plan = component-to-release allocation, backlog = near-term ordering. The wrong answers cross-wire them.

## How Methodology Shapes BA Work

Same discipline, different weather. In a **predictive** approach, the BA elicits and documents requirements *up front and in depth*, baselines them, and guards them behind formal **change control** — change requests, impact analysis, approvals. The heavy artifacts — the business requirements document, the RTM — are controlled and handed off phase to phase.

In an **adaptive** approach, requirements *emerge*. The BA captures them progressively — often as user stories at the last responsible moment — and **refinement replaces baselining**, feedback loops replace sign-off gates, and the backlog replaces the BRD-and-RTM as the living artifact. Hybrid, naturally, mixes the two.

Here is the point the exam tests: the BA's core activities — **elicit, analyze, trace, validate** — never disappear. What changes is *timing* (up front versus continuous), *level of detail* (comprehensive versus just-enough), *documentation formality* (baselined versus lightweight), and *collaboration cadence* (gates versus loops). "Adaptive means no requirements discipline" is a wrong answer wearing a fashionable jacket.

## Proving It: Acceptance Criteria and Delivery Readiness

At last, the verdict. **Acceptance criteria** are the testable conditions a deliverable must satisfy to be accepted — the operational definition of *done* for a requirement. Vague criteria ("user-friendly," "fast") cannot be validated and are, on this campus, worthless. Well-formed criteria are objective and checkable — pass/fail, no philosophical debate at the demo.

Keep two cousins distinct: **verification** asks *did we build the thing right* — does it conform to the specification? **validation** asks *did we build the right thing* — does it satisfy the actual need? Acceptance criteria serve both, but validation is the higher bar.

And **delivery readiness**? Not a feeling. Not a date on a calendar. Readiness is *determined from evidence*: in the predictive world, an RTM showing every release-scope requirement traced, tested, and accepted; in the adaptive world, a backlog whose release-scope items all meet their acceptance criteria. Compare the weak claim — "the team finished the work" — with the strong one: "every requirement was traced, tested, and met against its acceptance criteria." When the exam asks whether a product is ready to ship, the right answer points to acceptance and traceability evidence, never to schedule pressure or stakeholder optimism.

## Key Terms

- **User story** — small, backlog-sized requirement from one user's perspective ("As a… I want… so that…")
- **Use case** — narrative of actor-system interactions with main, alternate, and exception flows
- **Requirements traceability matrix (RTM)** — table linking each requirement to its source, design, implementation, and verification evidence
- **Product backlog** — single ordered list of all potential product work; refined continuously, owned by the product owner
- **DEEP backlog** — Detailed appropriately, Estimated, Emergent, Prioritized
- **Product roadmap** — long-range strategic view of product evolution by components and themes
- **Release plan** — medium-range allocation of components to release windows
- **Acceptance criteria** — testable conditions defining when a requirement is done and acceptable
- **Verification vs. validation** — built the thing right (conforms to spec) vs. built the right thing (meets the need)
- **Delivery readiness** — evidence-based judgment from RTM/backlog that all scope is traced, tested, and accepted

## Self-Check Questions

1. A stakeholder requests a change to an approved requirement on a predictive project. Which artifact tells you everything the change touches, and what process governs whether it is adopted?
2. The roadmap shows components A, B, and C. A unlocks B; C is high-value, low-effort, and independent. Which ships first, and what reasoning assigns components to releases?
3. A release date arrives with all development complete but no acceptance criteria defined for three stories. Is the product ready for delivery? Defend your verdict with the artifacts that should decide it.

Study well, Mr. Gomez. Traceability is simply honesty with a filing system — and your examiners at PMI, like your professor, grade evidence, not enthusiasm. Dismissed.
