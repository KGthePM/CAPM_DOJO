# Research Notes — Business Analysis Frameworks (CAPM Domain IV, 27%)

> Compiled September 2026 for the CAPM Training Dojo. Grounded in the CAPM Exam Content Outline
> (2023 update) Domain IV task list, the PMI Guide to Business Analysis (2017), and Business
> Analysis for Practitioners: A Practice Guide. All paraphrased; personal use only.
> Web sources listed at bottom.

## 1. Why This Domain Matters

Business Analysis is the largest single CAPM domain at 27% (~36 of 135 scored questions), and it is
the newest (2023 ECO update). Most candidates under-prepare it because PMBOK 7 barely touches it.
The exam draws from the PMI Guide to Business Analysis (2017) and Business Analysis for
Practitioners (2nd Ed., 2024). PMI notes BA concepts appear throughout ALL four domains, not just
Domain IV.

ECO Domain IV tasks (verified):
- Task 1: BA roles and responsibilities (process owner/manager, product manager/owner, internal vs external BA)
- Task 2: Stakeholder communication (select channels/tools)
- Task 3: Gather requirements (user stories vs use cases; interviews/surveys/workshops; RTM / product backlog)
- Task 4: Product roadmaps (components → releases)
- Task 5: How methodology shapes BA work
- Task 6: Validate requirements through delivery (acceptance criteria, RTM/backlog-based readiness)

## 2. BA Roles

Business analysis = applying knowledge, skills, tools, techniques to: determine problems and
business needs; recommend viable solutions; elicit, document, and manage stakeholder requirements;
facilitate successful implementation of the product/service/result. A requirement is a condition or
capability required in a product, service, or result to satisfy a contract or formally imposed
specification.

**Process owner** — accountable for the overall design, performance, and continuous improvement of
a specific business process. Sets process objectives, defines metrics, ensures alignment with
organizational strategy. Strategic, big-picture, long-horizon. Usually senior.

**Process manager** — accountable for day-to-day execution and monitoring of the process; ensures
the process is followed consistently, tracks performance, fixes operational issues. Tactical,
execution-focused. Works under the process owner's direction. Exam cue: owner = design/improve;
manager = run/monitor.

**Product manager** — owns product strategy, roadmap, and full product lifecycle; focuses on the
market, customers, competitive landscape, and business case. Common in traditional/hybrid orgs.

**Product owner** — the Agile-world role: single person (not a committee) accountable for
maximizing product value and for managing the product backlog; represents the voice of the
customer; defines and prioritizes requirements as user stories; final say on ordering. Exam cue:
product manager = strategy/lifecycle/market; product owner = backlog + value ordering on a Scrum
team.

**Internal vs external BA** — internal BA works inside the delivering organization for its
business units (knows the culture, ongoing availability, possible bias toward status quo).
External BA (consultant/contractor/vendor) brings impartiality and specialized expertise but must
learn the culture and has bounded engagement/authority. Exam cue: neutrality vs. organizational
knowledge.

Related: proxy product owner anti-pattern (senior BA doing backlog refinement without decision
authority) — bottleneck risk.

## 3. Stakeholder Communication — Choosing Channels/Tools

BA communication planning considers: audience (role, influence, preference), purpose/status of the
requirement (draft vs approved), urgency, complexity/sensitivity, and delivery approach.
Interactive channels (face-to-face, video, workshops, phone) suit complex, sensitive, ambiguous
topics needing immediate feedback. Push channels (email, memos, reports) send specific content to
known recipients but don't confirm understanding. Pull channels (intranets, repositories, dashboards)
let stakeholders retrieve info on demand — good for large audiences. The exam rewards matching the
channel to the need: bad news or conflict → interactive; status to many → pull or push; formal
requirement sign-off → documented push with confirmation. Tools range from collaborative work
management systems and requirement repositories to visual prototypes and dashboards; pick by
stakeholder location (virtual/colocated), availability, and the delivery methodology.

## 4. Requirements Gathering (Elicitation Techniques)

**Interviews** — one-on-one, in-depth exploration; best for complex/sensitive topics, detailed
probing, key individuals. Expensive per participant.

**Surveys/questionnaires** — reach a large, often geographically distributed audience cheaply and
quickly; limited depth and no live clarification; response quality depends on question design.

**Workshops/facilitated sessions** — multiple stakeholders collaborate live; best for rapid
consensus, resolving conflicting requirements cross-functionally; needs skilled facilitation.

**Observation/job shadowing** — watch actual work in context; exposes the gap between the
documented/ideal process and the real one (undocumented workarounds, exceptions). Passive vs
active modes.

**Document analysis** — mine existing material (procedures, regulations, system docs, past
projects) for current-state requirements; good early technique and for compliance-heavy domains.

Also in the family: focus groups, brainstorming, prototyping, interface analysis, benchmarking.
Exam pattern: scenario names the constraint (distributed audience → survey; conflicting
stakeholders → workshop; idealized answers → observation) — pick the technique that fits, not the
favorite one.

## 5. Requirements Classification (PMI hierarchy)

**Business requirements** — why the project exists: higher-level needs of the organization as a
whole, business problems/opportunities, goals and objectives, value expected.

**Stakeholder requirements** — needs of a specific stakeholder or class of stakeholders; how that
group will interact with the solution; derived from business requirements. ("Class of stakeholders"
is the giveaway phrase.)

**Solution requirements** — characteristics the solution must have to meet business + stakeholder
requirements. Split into:
- **Functional requirements** — behaviors of the product; what it does (calculates tax, exports a
  report).
- **Nonfunctional requirements** — environmental conditions/qualities needed for it to be
  effective: performance, security, usability, reliability, compliance, supportability. How well
  it does it.

**Transition requirements** — temporary capabilities needed ONLY to move from current to future
state: data conversion, training, interim interfaces, cutover support. They don't exist once the
transition completes — that disposability is the exam tell.

The chain: business → stakeholder → solution → transition, each derived from the level above; only
requirements traceable to business value should be built.

## 6. Requirements Traceability Matrix (RTM)

The RTM links each requirement to: its source (business objective/stakeholder need), its design
elements, its build/implementation, and the test/verification that proves it was met. Purposes:
coverage (no orphan requirements or gold-plating), impact analysis when something changes, status
tracking, validation evidence, and basis for delivery readiness. Typical columns: requirement ID,
source, priority, design artifact, code module, test case, status. Predictive-world artifact with a
direct adaptive cousin: the product backlog carries the same trace-on-demand role.

## 7. Product Backlog Management

The backlog is the adaptive-world requirements repository: a single, ordered (prioritized) list of
everything potentially needed in the product. Managed (in Scrum) by the product owner. Ongoing
activities: refinement/grooming (adding detail, estimates, order), decomposition of large items
(epics → features → stories), and continuous re-prioritization as learning arrives. Prioritization
drivers: business value, risk/uncertainty (do risky things early), dependencies, cost of delay,
stakeholder weight. Item format is typically the user story. A well-formed backlog is DEEP:
Detailed appropriately, Estimated, Emergent, Prioritized.

## 8. Product Roadmaps (Components → Releases)

A roadmap is a longer-range, strategic view of how the product is expected to evolve: themes,
major features/components, and expected value progression over time — not a locked schedule. It
sits above release plans (medium-range: what goes in which release window) and the backlog
(near-term ordered work). BA's job on the exam: assign components to releases based on value,
dependencies, and feasibility — high-value/low-effort or risk-reducing components go early; nice-to-haves
later; dependent items sequenced after their prerequisites. Roadmap informs release planning;
release plan informs backlog ordering. Trap: treating a roadmap as a commitment schedule, or
confusing backlog ordering with long-range strategic sequencing.

## 9. How Methodology Shapes BA Work

Predictive: requirements elicited/documented up front in depth, baselined, change-controlled via
formal change requests; heavy documentation (BRD/SRS), RTM as a controlled artifact; BA works via
structured phases and handoffs. Adaptive: requirements emerge iteratively; captured at the last
responsible moment as backlog items/user stories; refinement replaces baselining; collaboration and
feedback loops replace sign-off gates; backlog replaces RTM/BRD as the living artifact. Hybrid:
mix. The BA activities (elicitation, analysis, trace, validate) don't disappear — timing, level of
detail, documentation formality, and collaboration cadence change. Exam cue: adaptive ≠ no
requirements discipline; predictive ≠ no change.

## 10. Validating Requirements — Acceptance Criteria & Delivery Readiness

**Acceptance criteria** — the testable conditions a deliverable/story must satisfy to be accepted
by the product owner/stakeholders. They define "done" for a requirement, guide testing, and enable
objective validation (see: Given/When/Then or checklist-style criteria). Vague criteria cannot be
validated.

**Validation vs verification** — verification: did we build the thing right (meets spec)?
Validation: did we build the right thing (meets the need)?

**Delivery readiness** — not a feeling or a date: readiness is determined from evidence, using the
RTM (every requirement traced, tested, accepted) or the product backlog (all release-scope items
done and meeting acceptance criteria). Weak claim: "team finished the work." Strong claim: "the
requirement was traced, tested, and met against acceptance criteria." Exam rewards
evidence-supported readiness over opinion or schedule pressure.

## Cross-Domain Notes

- Outputs→outcomes→benefits→value chain (LEC-01) is why requirements must trace to business value.
- Stakeholder engagement principle (proactive, early, two-way) underpins BA communication choices.
- Agile domain (Scrum accountabilities) overlaps product owner/backlog content — keep terminology
  consistent.

## Sources

1. PMI — CAPM Exam Content Outline (2023 update), Domain IV:
   https://www.pmi.org/-/media/pmi/documents/public/pdf/certifications/capm20ecofinal.pdf
2. PMI — Business Analysis for Practitioners: A Practice Guide, 2nd Ed. (2024) product page:
   https://www.pmi.org/pmbok-guide-standards/practice-guides/business-analysis-second-edition
3. BrainBOK — CAPM 4.1 Business analysis roles and responsibilities:
   https://www.brainbok.com/guide/capm/business-analysis-frameworks/demonstrate-an-understanding-of-business-analysis-roles-and-responsibilities
4. PMI Learning — Mastering the project requirements (BA requirement schema):
   https://pmi.org/learning/library/mastering-project-requirements-assessing-good-5942
5. Atoha — PMI-PBA knowledge: requirement types (business/stakeholder/functional/nonfunctional/transition):
   https://atoha.com/blogs/knowledge/knowledge-about-pmi-pba
6. MindMesh Academy — CAPM requirements gathering (user stories vs use cases, RTM vs backlog):
   https://mindmeshacademy.com/certifications/pmi/capm-certified-associate-in-project-management/study-guide/3-3-requirements-gathering
7. PM Exams — CAPM traceability, validation, delivery readiness:
   https://pmexams.com/pmi/capm/business-analysis-frameworks/traceability-validation-and-delivery-readiness/
8. PM Exams — CAPM roadmaps, releases, methodology influence:
   https://pmexams.com/pmi/capm/business-analysis-frameworks/roadmaps-releases-and-methodology-influence/
9. KnowledgeMap — CAPM Task 4 product roadmaps / Task 6 validate requirements (ECO enablers):
   https://knowledgemap.pm/certifications/capm/business-analysis-frameworks/4-demonstrate-an-understanding-of-product-roadmaps/
10. IIBA — BA vs Product Owner vs Proxy PO accountabilities:
    https://www.iiba.org/business-analysis-blogs/who-owns-the-decision-business-analyst-vs-product-owner-vs-proxy-po/
11. Trusted Institute — CAPM BA frameworks elicitation techniques overview:
    https://trustedinstitute.com/flashcards/capm/business-analysis-frameworks
12. HEFLO — Elicitation techniques for business analysts (interview/observation practice):
    https://heflo.com/blog/elicitation-techniques
