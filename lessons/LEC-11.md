# LEC-11 — Business Analysis I: Roles, Requirements & the Voice of the Customer

*CAPM Training Dojo · Professor's Lecture Series · Session Eleven*

Sit, Mr. Gomez. Today we begin the domain your fellow candidates fear most, which is precisely why we shall master it. Business Analysis is **27% of your exam** — the largest single slice — and it is the material PMI added in 2023 that most prep courses still haven't digestfully absorbed. Roughly thirty-six scored questions, dear boy. Treat today's lecture as tuition well spent.

Business analysis, in PMI's own words, is the application of knowledge, skills, tools, and techniques to **determine problems and identify business needs, recommend viable solutions, and elicit, document, and manage stakeholder requirements** so the project actually delivers value. Notice what it is not: it is not "writing tickets." It is the discipline that keeps the solution tethered to the voice of the customer.

## The Cast of Characters: BA Roles

The exam adores asking who does what, and it builds its traps from pairs of roles that sound alike. Learn the pairs cold.

**Process owner versus process manager.** The **process owner** is accountable for the overall *design, performance, and continuous improvement* of a specific business process — objectives, metrics, alignment with strategy. The **process manager** is accountable for the *day-to-day execution and monitoring* of that same process — making sure people actually follow it and fixing operational snags as they arise. Owner designs and improves; manager runs and monitors. A favorite exam trick: "who defines the process's performance objectives?" — owner. "Who ensures staff adhere to the procedure?" — manager.

**Product manager versus product owner.** The **product manager** owns product *strategy, roadmap, and lifecycle* — market, customers, competitive positioning, the business case. The **product owner** is the Agile incarnation: a *single person* — not a committee, Mr. Gomez — accountable for **maximizing product value** and for **managing the product backlog**. The product owner speaks for the customer, orders the backlog, and holds the final say on what gets built next. Strategy and lifecycle: product manager. Backlog and value ordering on a Scrum team: product owner.

**Internal versus external business analysts.** An **internal BA** works inside the delivering organization — deep cultural knowledge, continuous availability, but vulnerable to bias toward the way things have always been done. An **external BA** — consultant, contractor, vendor — arrives with impartiality and specialized expertise, but must learn the culture and works within a bounded engagement. When an exam scenario wants fresh eyes and neutrality, it wants the external BA; when it wants institutional memory, the internal one.

**And why identify stakeholders at all?** Because the Guide is blunt about the price of skipping it: maintaining an accurate stakeholder register is critical because *the oversight of any one stakeholder could result in the loss of critical product requirements*. Miss a regulator, miss a downstream user group, and their requirements simply never make it into the product — you discover the omission at acceptance, which is the expensive place to discover anything. This is also why stakeholder analysis is never one-and-done: the register is refined as elicitation surfaces new stakeholders and as influence shifts across the life cycle.

**Internal versus external stakeholders** is a separate axis from internal/external BA, and the exam tests it too. *Internal* stakeholders — executives, functional managers, developers, operations — share the organization's norms and repositories. *External* stakeholders — customers, regulators, suppliers, partners — do not, so communication with them demands more care: the Guide recommends routing external communications through **single points of contact at both ends** to keep messaging consistent. An onion diagram can even map the distance: layers nearest the center are the end users and development stakeholders closest to the solution; the outermost layer is the external world.

- *Bar Exam:* when two role-based answers both look plausible, ask *what accountability* the scenario describes — designing versus executing, strategy versus backlog — and match the role to the accountability, not the title that sounds most senior.

## Talking So People Listen: Stakeholder Communication

A requirement no one understood is a defect waiting for a calendar date. BA communication planning means choosing the right **channel** for the audience and the moment.

**Interactive communication** — face-to-face, video calls, workshops, phone — supports immediate, multidirectional exchange. Use it for complex, sensitive, or ambiguous matters: conflicting requirements, bad news, negotiation. **Push communication** — email, memos, reports — sends specific content to specific recipients but cannot confirm it was understood. Fine for status and formal sign-offs. **Pull communication** — intranets, repositories, dashboards — lets large audiences retrieve information when they need it. The exam's pattern: match channel to need. Delivering an unwelcome scope message? Interactive. Distributing the approved requirements document to forty stakeholders? Push. Publishing a backlog dashboard for a global organization? Pull. And remember from Lecture One: engagement is deeper than communication — it *assimilates stakeholder perspectives and shapes shared solutions*.

The Guide's own frame for this is **Determine Stakeholder Engagement and Communication Approach** (Section 5.3), and it names five components a BA's communication plan addresses — worth knowing because scenario questions quote them back at you:

- **Level of involvement** for each stakeholder or group, often drawn from a **RACI** matrix and the stakeholder register;
- **How decisions get made** — consensus, decision by sponsor, or weighted analysis;
- **How approvals are obtained** — who can approve or reject requirements, and how formal the sign-off must be (electronic signature versus email versus ceremony);
- **How product and project information is structured, stored, and maintained** — repositories, requirements management tools, record retention; and
- **How stakeholders stay informed** — who needs what level of detail, at what frequency, in which time zones, over which authorized media.

The common thread: *stakeholder preferences are considered wherever the organizational options allow*. And when the audience is very large or very distributed, the Guide acknowledges communication can become so time-consuming that a tailored simplification — fewer channels, coarser granularity — is the professional answer, not a failure.

- *Bar Exam:* "why does BA communication matter across teams?" has a one-word root cause in the Guide: requirements cross team boundaries, and *there is rarely a one-size-fits-all way to communicate product information to all stakeholders*. If a scenario shows developers building from requirements the testers never saw, the failure is in the communication approach — the structured, maintained information component above.

## Drawing Out the Truth: Elicitation Techniques

Now the heart of the matter — **gathering requirements**. The exam rarely asks you to define a technique; it hands you a scenario and asks *which technique fits*. So learn each one's signature.

**Interviews** are one-on-one, in-depth conversations. They suit complex or sensitive topics and key individuals whose knowledge must be probed carefully. Expensive per participant, but there is no substitute for depth.

**Surveys and questionnaires** reach a *large, often geographically distributed* audience quickly and cheaply. The trade-off: limited depth and no live clarification. A scenario mentioning two thousand stakeholders across four continents is not subtle, Mr. Gomez — it is a survey.

**Workshops** — the Guide calls them *facilitated workshops*: structured sessions led by a skilled, neutral facilitator with a carefully selected group of stakeholders working toward a stated objective. Their superpower is *rapid consensus and conflict resolution*: when Marketing and Finance hold genuinely competing requirements, a workshop surfaces and settles the collision live — the Guide credits them with "interactivity, collaboration, and improved communications among participants," which is why roadmap development itself leans on them. They demand skilled facilitation, which is why they appear in the Fundamentals domain as a problem-solving tool too.

**Observation** — watching people do the actual work in its actual habitat. The Guide's reasoning is precise: stakeholders may be *unable to articulate* what they do because it is second nature, so the observer experiences the current state firsthand to uncover the actual sequence and duration of tasks. This is the antidote to the gap between the documented process and the real one. The acknowledged drawback — people behave differently when watched — is itself a fair exam distractor. When a scenario says "the documented process doesn't match what workers actually do," observation is your answer.

**Document analysis** — mining existing procedures, regulations, system documentation, and lessons from past projects for current-state requirements. Ideal early, ideal for compliance-heavy domains, and it honors the past before you reinvent it.

**Brainstorming** — rapid generation of many ideas from a group, best in the *needs assessment* phase (identifying stakeholders, problems, opportunities) before converging on any technique. And **benchmarking** — comparing practices against other organizations — appears in the Guide as a way to surface improvement opportunities when the current state disappoints.

- *Bar Exam:* the exam's favorite wrong answer is the candidate's *favorite* technique used everywhere. Read the constraint — audience size, distribution, conflict, idealization, existing documents — and let the constraint choose.

## Sorting the Harvest: Requirement Classifications

Once elicited, requirements are classified in a hierarchy PMI tests relentlessly. Learn the chain: **business → stakeholder → solution → transition**, each level derived from the one above, and only requirements traceable to business value deserving to be built.

**Business requirements** state why the project exists at all — the higher-level needs of *the organization as a whole*: business problems, opportunities, goals, expected value. Not a department's wish list — the organization's.

**Stakeholder requirements** describe the needs of *a stakeholder — and the Guide defines stakeholder broadly: an individual, a group, or an organization* that may affect, be affected by, or perceive itself to be affected by the initiative. Customers, users, regulators, suppliers, and partners all qualify, as do internal business roles. Derived from business requirements.

**Solution requirements** specify the characteristics the solution must have to satisfy both levels above, and they split into two subtypes the exam swaps like a card sharp. **Functional requirements** describe the *behaviors of the product* — what it does: actions, processes, and interactions such as calculating the tax, exporting the report, or routing the approval. **Nonfunctional requirements** describe the *environmental conditions or qualities* required for the product to be effective — *how well* it does it. The Guide's own example list is worth memorizing verbatim: **reliability, security, performance, safety, level of service, and supportability** — and it notes these are also called *product quality requirements* or *quality of service requirements*. "The page must load in under two seconds" is nonfunctional, however dynamic it sounds.

**Transition requirements** are the temporary capabilities needed *only to move from current state to future state*: data conversion, training, interim interfaces, cutover support. Their signature is disposability — once the transition completes, these requirements cease to exist. That is the exam tell; no other category evaporates.

- *Bar Exam:* classify by scope and lifespan. Whole organization → business. A stakeholder group → stakeholder. What the product does → functional. How well it must do it → nonfunctional. Needed only until cutover ends → transition.

## Key Terms

- **Business analysis** — determining needs, recommending solutions, eliciting and managing requirements to deliver value
- **Process owner** — accountable for a process's design, performance, and continuous improvement
- **Process manager** — accountable for a process's day-to-day execution and monitoring
- **Product manager** — responsible for achieving customer and market success for a product
- **Product owner** — individual with decision-making authority for prioritizing what is included or excluded from one or more products
- **Elicitation** — actively drawing requirements from stakeholders and sources via interviews, surveys, workshops, observation, document analysis
- **Interactive/push/pull communication** — two-way exchange / targeted sending / on-demand retrieval
- **Stakeholder register** — the record of stakeholder names and characteristics; an oversight in it can mean lost product requirements
- **Business requirements** — organization-wide needs and goals justifying the project
- **Stakeholder requirements** — needs of a stakeholder (individual, group, or organization) affected by the initiative
- **Functional requirements** — behaviors of the product; what it does
- **Nonfunctional requirements** — qualities and conditions for effectiveness (reliability, security, performance, safety, level of service, supportability); also called product quality or quality-of-service requirements
- **Transition requirements** — temporary capabilities (conversion, training) needed only until the future state is reached

## Self-Check Questions

1. A scenario describes a claims process whose documented steps bear little resemblance to what claims adjusters actually do all day. Which elicitation technique do you deploy, and why is document analysis the wrong first instinct?
2. Marketing wants one-click ordering; Compliance insists on a two-step verification. Which technique resolves this, and which role ultimately orders the resulting backlog items in an adaptive environment?
3. Classify each: (a) "Reduce order-processing cost by 15%," (b) "The system shall support 5,000 concurrent users," (c) "Warehouse staff need mobile scanning," (d) "Convert legacy customer records before go-live."

Bring written answers, Mr. Gomez. Thirty-six questions ride on this domain — I intend for you to greet each one like an old acquaintance rather than a stranger at the door. Dismissed.
