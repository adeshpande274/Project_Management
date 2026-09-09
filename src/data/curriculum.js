// Full 16-week (4-month) PMP roadmap. Weeks 1-2 are fully built out as the starter;
// remaining weeks carry roadmap metadata and are filled in incrementally.

export const DOMAINS = {
  FOUNDATIONS: { label: 'Foundations', color: '#64748b' },
  PEOPLE: { label: 'People (42%)', color: '#16a34a' },
  PROCESS: { label: 'Process (50%)', color: '#2563eb' },
  BUSINESS: { label: 'Business Environment (8%)', color: '#d97706' },
  AGILE: { label: 'Agile / Hybrid', color: '#9333ea' },
  EXAM: { label: 'Exam Prep', color: '#dc2626' },
};

// ---------- WEEK 1 ----------
const week1 = {
  week: 1,
  month: 1,
  title: 'Foundations of Project Management',
  blurb: 'What a project really is, the PM role, org structures, and life cycles.',
  days: [
    {
      day: 1,
      title: 'What Is a Project?',
      domain: 'FOUNDATIONS',
      minutes: 90,
      objectives: [
        'Define "project" and distinguish it from operations',
        'Explain program and portfolio in relation to projects',
        'Identify the temporary and unique nature of project work',
      ],
      intro: 'Let\'s begin at the very beginning. Before we memorize a single formula or vocabulary term, you need to build a mental model for the word "project" the way an experienced program manager sees it — not as a buzzword, but as a very specific type of work with predictable economics and risks. Think of your own life: renovating your kitchen is a project; doing your laundry every week is not. By the end of today\'s session you should be able to look at any activity — at work or at home — and correctly label it as a project, ongoing operations, part of a program, or part of a portfolio, and explain WHY in one sentence.',
      sections: [
        { type: 'p', text: 'A **project** is a temporary endeavor undertaken to create a unique product, service, or result. Two words matter most here: *temporary* (it has a defined start and end) and *unique* (the deliverable has never existed in exactly this form before).' },
        { type: 'callout', tone: 'info', text: 'Real-life anchor: building a new mobile app feature is a project. Running the app\'s customer support desk every day is operations.' },
        { type: 'table', headers: ['Aspect', 'Project', 'Operations'], rows: [
          ['Duration', 'Temporary (has an end)', 'Ongoing / repetitive'],
          ['Output', 'Unique product/service/result', 'Repeated, standardized output'],
          ['Goal', 'Achieve objective, then close', 'Sustain the business'],
          ['Example', 'Launching a new PMO dashboard', 'Daily database maintenance'],
        ]},
        { type: 'p', text: 'Projects rarely exist in isolation. PMI defines three related containers:' },
        { type: 'list', items: [
          '**Project** — delivers a single unique output.',
          '**Program** — a group of related projects managed together for benefits not available from managing them individually (e.g., a "Digital Transformation Program" containing 5 related projects).',
          '**Portfolio** — a collection of projects, programs, and operations managed as a group to achieve strategic business objectives (not necessarily related to each other, just aligned to strategy).',
        ]},
        { type: 'diagram', mermaid: `flowchart TD\n  A[Organizational Strategy] --> B[Portfolio]\n  B --> C[Program 1]\n  B --> D[Program 2]\n  B --> E[Standalone Project]\n  C --> F[Project 1.1]\n  C --> G[Project 1.2]\n  D --> H[Project 2.1]` },
        { type: 'p', text: 'PMP exam tip: questions often describe a scenario and ask "is this a project, program, or portfolio?" — the trigger words are *temporary/unique* (project), *related projects, shared benefit* (program), and *strategic alignment, unrelated initiatives* (portfolio).' },
      ],
      keyTerms: [
        { term: 'Project', def: 'Temporary endeavor to create a unique product, service, or result.' },
        { term: 'Operations', def: 'Ongoing, repetitive work that sustains the business.' },
        { term: 'Program', def: 'Related projects managed together for combined benefits.' },
        { term: 'Portfolio', def: 'Projects/programs/operations grouped to achieve strategic objectives.' },
      ],
      quiz: [
        {
          q: 'A company runs its payroll processing every month using the same steps. This is best classified as:',
          options: ['A project', 'Operations', 'A program', 'A portfolio'],
          answer: 1,
          explain: 'Repetitive, ongoing work with no defined end is operations, not a project.',
        },
        {
          q: 'Which statement BEST describes a program?',
          options: [
            'A single unique deliverable with a start and end date',
            'A group of related projects managed together for benefits not achievable individually',
            'Any collection of unrelated initiatives aligned to strategy',
            'The routine daily operations of a business unit',
          ],
          answer: 1,
          explain: 'Programs group RELATED projects to capture benefits (e.g., shared resources, coordinated timing) beyond managing them separately.',
        },
        {
          q: 'A portfolio differs from a program primarily because portfolio components:',
          options: [
            'Must always be related to each other',
            'Are grouped only for strategic alignment, not necessarily interdependent',
            'Can never include operational work',
            'Always have identical end dates',
          ],
          answer: 1,
          explain: 'Portfolios group work to achieve strategic objectives; components need not be related, unlike a program.',
        },
      ],
      workedExamples: [
        {
          title: 'Classifying Real Work Scenarios',
          problem: "Infineon's HR department is (a) processing monthly payroll, (b) building a new one-time employee onboarding portal, and (c) running five related initiatives — the portal, a new LMS, a policy rewrite, a benefits redesign, and a recruiting revamp — together as 'HR Transformation 2026' to capture shared efficiency gains. Classify each.",
          steps: [
            '(a) Payroll processing repeats every month with no defined end and no unique deliverable → this is **Operations**.',
            '(b) The onboarding portal has a start, an end, and a one-of-a-kind deliverable → this is a **Project**.',
            "(c) The five initiatives are related and managed together specifically to capture a combined benefit (shared efficiency) → this is a **Program**, not just a portfolio, because the components are interdependent and coordinated for a shared benefit.",
          ],
          answer: 'Payroll = Operations; Onboarding portal = Project; HR Transformation 2026 = Program.',
        },
        {
          title: 'Portfolio vs Program — the Strategic View',
          problem: "A company's leadership wants to track ALL of its major investments this year: the HR Transformation Program (5 projects), a totally unrelated 'Factory Automation' project, and the ongoing 'Customer Support' operations budget — all grouped together so executives can see where strategic money is going. What is this top-level grouping called?",
          steps: [
            "The components (a program, a standalone project, and operations) are NOT interdependent — they don't need each other to succeed.",
            'They are grouped purely so leadership can align spending and effort to overall business strategy.',
            "This 'grouped for strategic visibility, not interdependency' pattern is the signature of a portfolio.",
          ],
          answer: 'This is a Portfolio.',
        },
      ],
      practiceQuestions: {
        easy: [
          { q: 'A city repaves its roads every single year as part of routine maintenance. Is this a project or operations? Justify.', answer: 'Operations', solution: 'It repeats indefinitely with no unique end deliverable — routine, ongoing maintenance work.' },
          { q: 'True or False: A project must always result in a physical product.', answer: 'False', solution: 'A project can produce a product, a service (e.g., a consulting engagement), or a result (e.g., research findings).' },
          { q: 'Which container groups projects/programs/operations purely for strategic alignment, regardless of whether they are related?', answer: 'Portfolio', solution: 'Portfolios do not require components to be related — only aligned to strategy.' },
        ],
        intermediate: [
          { q: 'A retailer launches three related projects — new POS system, staff retraining, and store layout redesign — to jointly increase in-store revenue. Six months later, they add a fourth, unrelated project (updating the corporate website) to the same tracking sheet purely for budget visibility. Has the grouping changed from a program to a portfolio? Explain.', answer: 'The original 3 remain a program; the overall tracking sheet now behaves like portfolio-level oversight once an unrelated item is added purely for visibility.', solution: 'Programs require interdependency and shared benefit; adding an unrelated item for pure tracking purposes is a portfolio-style aggregation, not a program expansion.' },
          { q: 'Numerical: A portfolio contains 2 programs. Program A has 4 projects, Program B has 3 projects. Additionally there are 2 standalone projects directly in the portfolio. How many total projects exist in this portfolio?', type: 'numerical', answer: '9 projects', solution: '4 (Program A) + 3 (Program B) + 2 (standalone) = 9 total projects.' },
          { q: "A company's 'Digital Bank Launch' contains a mobile app project, a backend infrastructure project, and a compliance project, all coordinated because delays in one affect the others. Is this best called a program or a portfolio? Why?", answer: 'Program', solution: 'Interdependency + shared benefit + coordinated timing is the hallmark of a program, not a portfolio.' },
        ],
        challenging: [
          { q: 'Numerical: A portfolio manager tracks value delivery across the portfolio. Program A contributes $2.4M NPV across 4 projects and Program B contributes $1.8M NPV across 3 projects, plus 2 standalone projects worth $0.5M and $0.3M. What is the total portfolio NPV, and what percentage of total NPV comes from Program A?', type: 'numerical', answer: 'Total NPV = $5.0M; Program A = 48%', solution: 'Total = 2.4 + 1.8 + 0.5 + 0.3 = $5.0M. Program A share = 2.4 / 5.0 = 0.48 = 48%.' },
          { q: 'Your organization has historically treated "related projects sharing a benefit" and "any strategic grouping" as the same thing, calling everything a "program." A new PMO director wants to correct this. Write a short justification she could give leadership for why the program vs. portfolio distinction changes how governance and reporting should work.', answer: 'Programs need coordinated schedules/dependencies and shared benefits management; portfolios need strategic prioritization and resource balancing across potentially unrelated efforts.', solution: 'Conflating the two causes programs to be managed too loosely (missing interdependency tracking) or portfolios to be managed too rigidly (forcing artificial coordination between unrelated projects).' },
        ],
      },
      interviewPrep: [
        { q: 'How do you personally distinguish a project from ongoing operations when a stakeholder is unsure?', a: "I ask two questions: does it have a defined end date, and will it produce something that doesn't already exist in this exact form? If yes to both, it's a project. I also note that a project can transition into operations once delivered — e.g., building a new IT system is a project, but running/maintaining it afterward is operations." },
        { q: 'Tell me about a program you managed or contributed to, and how it differed from managing a single project.', a: 'Good answer structure: describe 2+ related projects with a shared benefit, explain the extra coordination overhead (shared resources, dependency management, benefits realization tracking across projects), and how program-level governance differed from single-project execution.' },
        { q: 'Why would an organization run a portfolio review process?', a: 'To ensure investment decisions (projects, programs, ongoing operations) stay aligned with strategic objectives, to balance risk and resource allocation across many initiatives, and to make transparent, data-driven decisions about which initiatives to fund, pause, or kill.' },
      ],
    },
    {
      day: 2,
      title: 'The Role of the Project Manager & the Talent Triangle',
      domain: 'FOUNDATIONS',
      minutes: 90,
      objectives: [
        'Describe the project manager\'s core responsibilities',
        'Explain PMI\'s Talent Triangle',
        'Differentiate PM authority across organizational structures (preview)',
      ],
      intro: "Yesterday you learned what a project IS. Today we ask: who is responsible for making it happen, and what does that person actually need to be good at? A common misconception — especially among people new to the field — is that project management is purely administrative: build a schedule, track tasks, send status emails. In reality, the best PMs spend as much energy on people and business context as they do on schedules. Today's lesson gives you the vocabulary to describe that balance, which is exactly the kind of self-awareness interviewers look for when they ask 'what makes a good project manager?'",
      sections: [
        { type: 'p', text: 'The Project Manager (PM) is the person assigned by the performing organization to lead the team responsible for achieving project objectives. Unlike a functional manager (who manages a department) or a product owner (who owns the product backlog in Agile), the PM owns the **overall delivery** of the project — scope, schedule, budget, quality, risk, and people.' },
        { type: 'p', text: 'PMI\'s **Talent Triangle** describes the three skill sets every PM needs:' },
        { type: 'diagram', mermaid: `flowchart LR
  T["PMI Talent Triangle"] --> A["Ways of Working<br/>technical PM skills:<br/>planning, scheduling, tools"]
  T --> B["Power Skills<br/>leadership, communication,<br/>conflict management"]
  T --> C["Business Acumen<br/>industry knowledge,<br/>strategy, value delivery"]` },
        { type: 'list', items: [
          '**Ways of Working** — technical skills: scheduling, budgeting, risk analysis, choosing predictive/agile/hybrid methods.',
          '**Power Skills** — interpersonal skills: communication, conflict resolution, emotional intelligence, servant leadership.',
          '**Business Acumen** — understanding the organization\'s strategy, industry, and how the project delivers business value.',
        ]},
        { type: 'callout', tone: 'warn', text: 'PMP exam mindset: when a scenario question offers an option that is "escalate to management" vs. "the PM resolves it directly," the exam almost always rewards the PM taking ownership and resolving it first, unless it is truly outside their authority (e.g., budget approval beyond their limit).' },
      ],
      keyTerms: [
        { term: 'Talent Triangle', def: 'PMI model of three skill sets: Ways of Working, Power Skills, Business Acumen.' },
        { term: 'Functional Manager', def: 'Manages a department/discipline; controls resources in a functional org.' },
        { term: 'Sponsor', def: 'Person/group providing resources and support, accountable for enabling project success.' },
      ],
      quiz: [
        {
          q: 'A project manager spends time learning the industry and company strategy to ensure the project delivers real business value. This reflects which Talent Triangle skill?',
          options: ['Ways of Working', 'Power Skills', 'Business Acumen', 'Technical Project Management'],
          answer: 2,
          explain: 'Business Acumen is understanding the organization/industry context so the project delivers strategic value.',
        },
        {
          q: 'On the PMP exam, when a team conflict arises that is within the PM\'s control, the BEST first action is usually to:',
          options: [
            'Escalate immediately to the sponsor',
            'Ignore it, it will resolve itself',
            'Address it directly using conflict resolution skills',
            'Reassign the team members involved without discussion',
          ],
          answer: 2,
          explain: 'PMs are expected to resolve conflicts directly using their power skills before escalating.',
        },
      ],
      workedExamples: [
        {
          title: 'Matching a Situation to the Right Skill Set',
          problem: 'During a sprint, two senior developers disagree loudly about architecture in front of the whole team, and morale visibly drops. Which Talent Triangle skill does the PM need most right now, and what would a good first move look like?',
          steps: [
            'This is an interpersonal, in-the-moment issue affecting team morale — not a scheduling or strategy problem.',
            'That points to **Power Skills** (specifically conflict resolution and emotional intelligence).',
            'A good first move: pause the public debate, acknowledge both viewpoints, and move the technical disagreement to a smaller, structured discussion (e.g., a design-decision meeting) rather than letting it play out in front of the team.',
          ],
          answer: 'Power Skills — defuse the public conflict, then resolve the technical disagreement in a smaller forum.',
        },
        {
          title: 'Numerical: Allocating a Work Week Across the Triangle',
          problem: 'A PM logs a typical 40-hour week as follows: 40% on Ways of Working (schedules, risk logs, tracking), 35% on Power Skills (1:1s, conflict resolution, stakeholder conversations), and the remainder on Business Acumen. How many hours go to each category?',
          steps: [
            'Ways of Working = 40% of 40 hours = 0.40 × 40 = 16 hours.',
            'Power Skills = 35% of 40 hours = 0.35 × 40 = 14 hours.',
            'Remaining percentage for Business Acumen = 100% − 40% − 35% = 25%.',
            'Business Acumen = 0.25 × 40 = 10 hours.',
          ],
          answer: 'Ways of Working = 16 hrs, Power Skills = 14 hrs, Business Acumen = 10 hrs.',
        },
      ],
      practiceQuestions: {
        easy: [
          { q: 'Name the three components of PMI\'s Talent Triangle.', answer: 'Ways of Working, Power Skills, Business Acumen', solution: 'These represent technical, interpersonal, and strategic/contextual skill sets respectively.' },
          { q: 'A PM explaining industry regulations that affect the project timeline is demonstrating which skill?', answer: 'Business Acumen', solution: 'Understanding industry/regulatory context is Business Acumen, not a technical PM skill.' },
          { q: 'True or False: A functional manager and a project manager always have identical authority over the same team member.', answer: 'False', solution: 'Authority is split differently depending on the organizational structure (covered in detail tomorrow).' },
        ],
        intermediate: [
          { q: 'A PM has excellent scheduling skills (Ways of Working) but consistently fails to notice when team members are frustrated or disengaged. Which skill gap is most likely hurting their performance, and what is one concrete symptom you would expect to see on their team?', answer: 'Power Skills gap', solution: 'Expected symptom: rising attrition/disengagement, unresolved conflicts resurfacing repeatedly, or team members going around the PM to resolve issues informally.' },
          { q: 'Numerical: Over a 4-week sprint cycle, a PM spends 6 hours/week on stakeholder communication (Power Skills) out of a 45-hour work week. What percentage of their total 4-week time went to this Power Skill activity?', type: 'numerical', answer: '≈ 13.3%', solution: 'Total hours over 4 weeks = 45 × 4 = 180. Time on communication = 6 × 4 = 24 hours. Percentage = 24 / 180 = 0.1333 = 13.3%.' },
          { q: 'Explain, with an example, why "escalate to the sponsor immediately" is usually the WRONG first answer on a PMP scenario question about team conflict.', answer: 'PMs are expected to resolve conflicts within their authority first, using Power Skills; escalation is a later step if resolution attempts fail or the issue is outside PM authority.', solution: 'Example: two team members disagree on task priority — the PM should facilitate a discussion and align priorities before ever looping in the sponsor.' },
        ],
        challenging: [
          { q: 'A PM in a weak matrix organization (low formal authority) still needs to influence a functional manager to release a key resource. Which combination of Talent Triangle skills would be most effective, and describe a realistic script the PM might use.', answer: 'Power Skills (influence/negotiation) combined with Business Acumen (framing the ask in terms of business value).', solution: 'Example script: "I know your team is stretched, but releasing Ana for 2 days next week keeps our Q3 compliance deadline on track, which directly protects the revenue this project unlocks." This combines interpersonal influence with a business-value argument, since formal authority (Ways of Working alone) is insufficient in a weak matrix.' },
          { q: 'Numerical: A hiring panel scores PM candidates on a 30-point scale: Ways of Working (out of 10), Power Skills (out of 10), Business Acumen (out of 10). Candidate X scores 9, 4, 7. Candidate Y scores 6, 8, 6. If the role is a turnaround project with a highly conflicted stakeholder group, which candidate is the stronger hire based on totals AND skill distribution, and why might raw totals be misleading here?', type: 'numerical', answer: 'Both total 20/30, but Candidate Y is the stronger hire for THIS role.', solution: 'Raw totals are tied (9+4+7=20, 6+8+6=20), so totals alone are misleading. Because the role is dominated by conflict management (a turnaround with conflicted stakeholders), Candidate Y\'s higher Power Skills (8 vs 4) is more valuable for this specific context, even though total scores are equal.' },
        ],
      },
      interviewPrep: [
        { q: 'What do you think separates a good project manager from a great one?', a: 'A strong answer references all three Talent Triangle areas: solid technical/planning discipline (Ways of Working), the ability to read and manage people under pressure (Power Skills), and enough business context to make trade-off decisions that protect value (Business Acumen) — not just "finishing on time."' },
        { q: 'Describe a time you had to resolve conflict within your team without escalating to your manager.', a: 'Use the STAR method: Situation (what caused the conflict), Task (your responsibility as PM), Action (specific conflict-resolution technique used — e.g., separate conversations, then a facilitated joint discussion), Result (how it was resolved and the measurable outcome, e.g., schedule stayed on track).' },
        { q: 'How do you build "business acumen" for an industry you\'re new to?', a: 'Mention concrete habits: reading the business case and financial justification for the project, talking to subject-matter experts and the sponsor early, reviewing competitor/industry context, and asking "how does this project make or save the company money?" for every major decision.' },
      ],
    },
    {
      day: 3,
      title: 'Organizational Structures & PMO Types',
      domain: 'FOUNDATIONS',
      minutes: 90,
      objectives: [
        'Compare functional, matrix, and projectized structures',
        'Explain how structure affects PM authority',
        'Identify the four PMO types',
      ],
      intro: "Here is a question that trips up almost every beginner: two PMs can have the exact same title, the exact same certification, and manage nearly identical projects — yet one has almost total control over their team and budget, while the other has to politely request resources from someone else's boss. The difference isn't skill. It's organizational structure. Understanding this is one of the highest-yield topics for the PMP exam AND for job interviews, because interviewers often want to know if you can operate effectively even when you don't have direct authority.",
      sections: [
        { type: 'p', text: 'How much authority a PM has depends heavily on the organizational structure.' },
        { type: 'table', headers: ['Structure', 'PM Authority', 'Who controls resources', 'Typical PM role'], rows: [
          ['Functional', 'Low / none', 'Functional manager', 'Part-time, coordinator'],
          ['Weak Matrix', 'Low', 'Functional manager', 'Coordinator/expediter'],
          ['Balanced Matrix', 'Low to Moderate', 'Shared', 'Part-time, some authority'],
          ['Strong Matrix', 'Moderate to High', 'PM (mostly)', 'Full-time PM'],
          ['Projectized', 'High to Almost Total', 'PM', 'Full-time PM, dedicated team'],
        ]},
        { type: 'diagram', mermaid: `flowchart LR\n  A[Functional] --> B[Weak Matrix] --> C[Balanced Matrix] --> D[Strong Matrix] --> E[Projectized]\n  A -.->|PM authority increases left to right| E` },
        { type: 'p', text: 'A **Project Management Office (PMO)** standardizes governance across projects. PMI describes three PMO types:' },
        { type: 'list', items: [
          '**Supportive** — low control; provides templates, best practices, lessons learned (consultative role).',
          '**Controlling** — moderate control; requires compliance via specific frameworks/methodologies.',
          '**Directive** — high control; directly manages the projects by providing the project managers themselves.',
        ]},
      ],
      keyTerms: [
        { term: 'Matrix Organization', def: 'Structure where staff report to both a functional manager and a project manager.' },
        { term: 'Projectized Organization', def: 'Entire organization is structured around projects; PM has high authority.' },
        { term: 'PMO', def: 'Project Management Office — standardizes governance, provides support/control/direction.' },
      ],
      quiz: [
        {
          q: 'In a strong matrix organization, who typically has the most authority over the project?',
          options: ['Functional manager', 'Project manager', 'Team members equally', 'The PMO exclusively'],
          answer: 1,
          explain: 'In a strong matrix, the PM has moderate-to-high authority, more than the functional manager.',
        },
        {
          q: 'A PMO that provides templates and coaching but does not require compliance is a:',
          options: ['Directive PMO', 'Controlling PMO', 'Supportive PMO', 'Functional PMO'],
          answer: 2,
          explain: 'Supportive PMOs offer a consultative role with low control.',
        },
      ],
      workedExamples: [
        {
          title: 'Identifying the Structure from Symptoms',
          problem: 'A PM complains: "I have to ask the engineering manager for every resource, my authority is basically zero, and I\'m doing this alongside my normal day job." What organizational structure does this describe?',
          steps: [
            'Key phrase: "ask the engineering manager for every resource" → resources are controlled by a functional manager, not the PM.',
            '"Authority is basically zero" and "alongside my normal day job" → the PM role is part-time and low-authority, typical of a coordinator/expediter.',
            'This combination (functional manager controls resources + PM has near-zero authority + part-time PM role) matches a **Functional** or **Weak Matrix** organization, with Functional being the more extreme case (no dedicated PM role title even exists).',
          ],
          answer: 'Functional organization (or, if a PM title formally exists with minimal power, a Weak Matrix).',
        },
        {
          title: 'Numerical: Resource Allocation Across a Matrix',
          problem: 'In a strong matrix organization, a software engineer\'s 40-hour week is split: 70% dedicated to Project Alpha (led by the PM) and 30% to ongoing departmental support (led by the functional manager). How many hours per week does the PM effectively control for this engineer, and how many does the functional manager retain?',
          steps: [
            'PM-controlled hours = 70% × 40 = 0.70 × 40 = 28 hours.',
            'Functional manager hours = 30% × 40 = 0.30 × 40 = 12 hours.',
            'Check: 28 + 12 = 40 hours ✓.',
          ],
          answer: 'PM controls 28 hours/week; functional manager retains 12 hours/week.',
        },
      ],
      practiceQuestions: {
        easy: [
          { q: 'In which structure does the PM typically have the highest authority?', answer: 'Projectized', solution: 'The entire organization is built around projects, so the PM has near-total control of resources.' },
          { q: 'Name the four PMO types and rank them from lowest to highest control.', answer: 'Supportive < Controlling < Directive (three main types by PMI; some texts also mention a fourth hybrid type)', solution: 'Supportive = consultative/low control. Controlling = requires compliance/moderate control. Directive = manages projects directly/high control.' },
          { q: 'True or False: In a weak matrix, the functional manager usually retains more control over resources than the PM.', answer: 'True', solution: 'Weak matrix leans toward functional-manager control; only strong matrix and projectized shift majority control to the PM.' },
        ],
        intermediate: [
          { q: 'A company is scaling rapidly and wants PMs to have enough authority to move fast on cross-department initiatives, but doesn\'t want to fully dismantle its functional departments. Which structure best fits, and what trade-off should leadership expect?', answer: 'Balanced or Strong Matrix', solution: 'This preserves functional departments (unlike projectized) while giving PMs real authority (unlike weak matrix/functional). Trade-off: potential for dual-reporting conflict between functional managers and PMs over the same staff.' },
          { q: 'Numerical: A PMO reviews 50 active projects. 20 fall under a Supportive PMO (light touch), 22 under a Controlling PMO, and the rest under a Directive PMO. How many projects are under Directive PMO governance, and what percentage of the total is that?', type: 'numerical', answer: '8 projects; 16%', solution: '50 − 20 − 22 = 8 projects. Percentage = 8 / 50 = 0.16 = 16%.' },
          { q: 'Why might a Directive PMO be resisted by experienced project managers even though it offers the most organizational control and consistency?', answer: 'Experienced PMs may feel it removes their autonomy since the PMO directly supplies/manages the PMs themselves, reducing individual decision-making authority.', solution: 'High control models trade individual PM autonomy for organizational consistency — a classic centralization vs. autonomy trade-off.' },
        ],
        challenging: [
          { q: 'Numerical: Your organization is weighing the cost of moving from a Weak Matrix to a Strong Matrix. Currently, project delays cost an estimated $18,000/month due to slow resource negotiation with functional managers. The transition to Strong Matrix costs $40,000 one-time plus reduces delay costs by 75%. After how many months does the transition pay for itself?', type: 'numerical', answer: '≈ 2.96 months (round up to 3 months)', solution: 'Monthly savings = 75% × $18,000 = $13,500/month. Payback period = $40,000 / $13,500 ≈ 2.96 months → practically, 3 months.' },
          { q: 'A candidate in an interview is asked: "How do you succeed as a PM when you have no formal authority over your team?" Draft a strong answer using at least two concrete influence techniques appropriate for a weak matrix environment.', answer: 'Techniques might include: building relationships and trust with functional managers ahead of need, using data/business impact to justify resource requests, escalating strategically (not habitually) with clear evidence, and leveraging sponsor visibility to reinforce priority.', solution: 'Interviewers reward concrete, repeatable techniques over vague statements like "good communication."' },
        ],
      },
      interviewPrep: [
        { q: 'Have you ever worked in a matrix organization? How did you handle competing priorities from a functional manager?', a: 'Strong answers describe a specific negotiation: acknowledging the functional manager\'s constraints, quantifying the project\'s business impact, and reaching a compromise (e.g., partial allocation, adjusted timeline) rather than an authority standoff.' },
        { q: 'What is a PMO, and have you worked with one before?', a: 'Define it briefly (a governance function that standardizes PM practices), then describe which type you experienced (Supportive/Controlling/Directive) and one concrete artifact it provided (templates, mandatory stage-gate reviews, or assigned PMs).' },
        { q: 'If you joined a company and found out project managers there have very little authority, how would you adapt your working style?', a: 'Emphasize influence-based leadership: relationship-building, transparent data-driven communication, and strategic use of the sponsor\'s authority rather than relying on positional power you don\'t have.' },
      ],
    },
    {
      day: 4,
      title: 'Stakeholders — Identification & Engagement Basics',
      domain: 'PEOPLE',
      minutes: 90,
      objectives: [
        'Define a stakeholder',
        'Use the Power/Interest grid to prioritize stakeholders',
        'Understand the stakeholder register basics',
      ],
      intro: "Every project fails or succeeds through people, not Gantt charts. Today's topic — stakeholders — is arguably the single most tested 'People domain' concept on the PMP exam (worth 42% of the exam) and one of the most common interview topics, because every employer wants to know: can you manage relationships with people who have power over your project but very little day-to-day interest in it, or vice versa? We'll build a simple but powerful mental tool — the Power/Interest grid — that you can literally sketch on a whiteboard in any interview to demonstrate structured thinking.",
      sections: [
        { type: 'p', text: 'A **stakeholder** is any individual, group, or organization that may affect, be affected by, or perceive itself to be affected by a decision, activity, or outcome of the project.' },
        { type: 'p', text: 'Stakeholder identification and engagement is continuous, not a one-time step — it happens throughout the project.' },
        { type: 'diagram', mermaid: `quadrantChart\n  title Power/Interest Grid\n  x-axis Low Interest --> High Interest\n  y-axis Low Power --> High Power\n  quadrant-1 Keep Satisfied\n  quadrant-2 Manage Closely\n  quadrant-3 Monitor\n  quadrant-4 Keep Informed\n  Sponsor: [0.8, 0.9]\n  End User: [0.7, 0.3]\n  Regulator: [0.2, 0.85]\n  Vendor: [0.4, 0.4]` },
        { type: 'list', items: [
          '**Manage Closely** (high power, high interest) — sponsors, key decision makers.',
          '**Keep Satisfied** (high power, low interest) — regulators, senior execs not daily involved.',
          '**Keep Informed** (low power, high interest) — end users affected by the outcome.',
          '**Monitor** (low power, low interest) — minimal effort, periodic check-ins.',
        ]},
        { type: 'callout', tone: 'info', text: 'The Stakeholder Register captures identification info, assessment (power/interest), and classification for every stakeholder — it is a living document.' },
      ],
      keyTerms: [
        { term: 'Stakeholder', def: 'Anyone who can affect or be affected by the project.' },
        { term: 'Stakeholder Register', def: 'Document listing stakeholders with identification, assessment, and classification info.' },
        { term: 'Power/Interest Grid', def: 'Tool to prioritize stakeholder engagement based on their power and interest levels.' },
      ],
      quiz: [
        {
          q: 'A government regulator has high power over your project but shows little day-to-day interest. Per the Power/Interest grid, you should:',
          options: ['Manage closely', 'Keep satisfied', 'Keep informed', 'Monitor only'],
          answer: 1,
          explain: 'High power + low interest = Keep Satisfied.',
        },
        {
          q: 'Stakeholder identification should occur:',
          options: [
            'Only once, at project kickoff',
            'Only during the closing phase',
            'Continuously throughout the project',
            'Only when a stakeholder complains',
          ],
          answer: 2,
          explain: 'New stakeholders can emerge at any time; identification and engagement is iterative.',
        },
      ],
      workedExamples: [
        {
          title: 'Placing Stakeholders on the Grid',
          problem: 'You are running an ERP migration. Classify these stakeholders using the Power/Interest grid: (1) the CFO who approved the budget but is rarely involved day-to-day, (2) the warehouse staff who will use the new system daily but have no say over the budget, (3) an external auditor who could block go-live for compliance reasons but only checks in quarterly.',
          steps: [
            'CFO: high power (controls budget/approval), low day-to-day interest → **Keep Satisfied**.',
            'Warehouse staff: low formal power (can\'t change budget/scope), high interest (directly affected daily) → **Keep Informed**.',
            'External auditor: high power (can block go-live), low ongoing interest (checks in quarterly) → **Keep Satisfied**, with a scheduled compliance touchpoint before go-live.',
          ],
          answer: 'CFO → Keep Satisfied; Warehouse staff → Keep Informed; Auditor → Keep Satisfied.',
        },
        {
          title: 'Numerical: Scoring Stakeholders to Prioritize Engagement',
          problem: 'A PM scores 5 stakeholders on Power (1–10) and Interest (1–10). Using Power × Interest as a simple "engagement priority score," rank these: Sponsor (P=9, I=8), IT Ops (P=5, I=9), Legal (P=8, I=3), Vendor (P=4, I=4), End Users (P=3, I=9).',
          steps: [
            'Sponsor: 9 × 8 = 72.',
            'IT Ops: 5 × 9 = 45.',
            'Legal: 8 × 3 = 24.',
            'Vendor: 4 × 4 = 16.',
            'End Users: 3 × 9 = 27.',
            'Ranking (highest priority first): Sponsor (72) > IT Ops (45) > End Users (27) > Legal (24) > Vendor (16).',
          ],
          answer: 'Priority order: Sponsor > IT Ops > End Users > Legal > Vendor.',
        },
      ],
      practiceQuestions: {
        easy: [
          { q: 'Define "stakeholder" in one sentence.', answer: 'Anyone who can affect, be affected by, or perceive themselves affected by the project.', solution: 'This is broader than just "people who work on the project" — it includes regulators, competitors, community groups, etc.' },
          { q: 'High power + high interest stakeholders should be placed in which quadrant?', answer: 'Manage Closely', solution: 'These are your most critical stakeholders — typically sponsors and key decision-makers.' },
          { q: 'True or False: Once the stakeholder register is created during Initiating, it should not be changed.', answer: 'False', solution: 'The register is a living document, updated continuously as new stakeholders emerge or influence changes.' },
        ],
        intermediate: [
          { q: 'A mid-level manager who initially had low interest suddenly starts attending every steering committee meeting after a reorg. What should the PM do with their stakeholder classification, and why?', answer: 'Re-assess and likely move them toward a higher-interest quadrant (e.g., from Monitor/Keep Satisfied to Manage Closely/Keep Informed), since influence and interest can change over time.', solution: 'Stakeholder analysis is iterative; a reorg is a classic trigger event to reassess power and interest.' },
          { q: 'Numerical: Using the Power × Interest scoring method, a stakeholder has Power = 6 and Interest = 7. Another has Power = 9 and Interest = 4. Which has the higher priority score, and by how much?', type: 'numerical', answer: 'First stakeholder (42) is 6 points higher than the second (36)', solution: 'First: 6 × 7 = 42. Second: 9 × 4 = 36. Difference = 42 − 36 = 6.' },
          { q: 'Why is "Monitor" (low power, low interest) still worth including in the stakeholder register instead of ignoring entirely?', answer: 'Their power or interest could increase later, and periodic minimal-effort monitoring avoids being blindsided.', solution: 'Stakeholder landscapes shift; today\'s low-power/low-interest party could become tomorrow\'s vocal opponent or ally.' },
        ],
        challenging: [
          { q: 'Numerical: A PM has limited engagement time — only 20 hours/month for stakeholder engagement across 8 stakeholders. Using Power × Interest priority scores (totaling 200 across all 8), allocate hours proportionally to the two highest scorers, who together account for 90 of the 200 total score points. How many hours should go to those two combined?', type: 'numerical', answer: '9 hours', solution: 'Proportion = 90 / 200 = 0.45. Hours = 0.45 × 20 = 9 hours for the two highest-priority stakeholders combined.' },
          { q: 'Design a brief stakeholder engagement plan (3-4 bullet points) for a "Keep Satisfied" stakeholder who is a senior regulator, ensuring compliance risk is managed without over-consuming their limited attention.', answer: 'Example plan: (1) Scheduled quarterly compliance briefings rather than frequent updates, (2) A single accountable liaison for all regulator communication, (3) Pre-emptive disclosure of any compliance-relevant changes before go-live, (4) An escalation channel reserved for material risks only.', solution: 'The plan should minimize engagement frequency (respecting low interest) while guaranteeing high-quality, well-timed communication (respecting high power).' },
        ],
      },
      interviewPrep: [
        { q: 'How do you handle a stakeholder with a lot of influence but very little day-to-day interest in your project?', a: 'Reference the Power/Interest grid explicitly: classify them as "Keep Satisfied," then describe a concrete tactic — concise executive summaries, milestone-based updates instead of frequent check-ins, and ensuring no surprises reach them.' },
        { q: 'Tell me about a time a stakeholder\'s priorities changed mid-project. How did you adapt?', a: 'STAR format: describe the trigger (reorg, budget cut, new regulation), how you re-assessed their power/interest, and the specific change in your communication or engagement approach.' },
        { q: 'How do you keep a large group of end users informed without overwhelming them with communication?', a: 'Discuss tiered communication: a short digest for broad audiences, deeper detail available on request/self-serve documentation, and highlight-only updates at key milestones — tailoring frequency and depth to their "Keep Informed" classification.' },
      ],
    },
    {
      day: 5,
      title: 'Project Life Cycle & Process Groups (Predictive View)',
      domain: 'PROCESS',
      minutes: 90,
      objectives: [
        'Describe the phases of a predictive project life cycle',
        'Introduce the 5 Process Groups',
        'Distinguish life cycle phases from process groups',
      ],
      intro: "We close Week 1 by zooming out to see the whole shape of a project over time — both its calendar phases and the five recurring types of management activity that happen inside every phase. This is the single most confused topic among PMP first-timers, because the words 'phase' and 'process group' sound interchangeable but are NOT. Get this distinction rock-solid today, because it underpins almost everything in Weeks 2 through 16.",
      sections: [
        { type: 'p', text: 'A **project life cycle** is the series of phases a project passes through, from start to finish (e.g., Feasibility → Design → Build → Test → Deploy).' },
        { type: 'p', text: 'This is different from the **5 Process Groups**, which describe categories of activity that occur within EVERY phase (not sequential phases themselves):' },
        { type: 'diagram', mermaid: `flowchart LR
  I[Initiating] --> P[Planning] --> E[Executing]
  E <--> M["Monitoring & Controlling"]
  P <--> M
  M --> C[Closing]
  E --> C` },
        { type: 'table', headers: ['Process Group', 'Purpose'], rows: [
          ['Initiating', 'Define a new project/phase, get authorization (Charter)'],
          ['Planning', 'Establish scope, refine objectives, define course of action'],
          ['Executing', 'Complete the work defined in the plan'],
          ['Monitoring & Controlling', 'Track, review, and regulate progress/performance'],
          ['Closing', 'Formally complete the project/phase/contract'],
        ]},
        { type: 'callout', tone: 'warn', text: 'Common exam trap: Process groups are NOT phases. A single phase (e.g., "Design") contains its own Initiating → Planning → Executing → Monitoring → Closing activities.' },
        { type: 'p', text: 'Cost and staffing are typically low at Initiating, peak during Executing, and drop sharply at Closing — a classic PMP chart to recognize.' },
      ],
      keyTerms: [
        { term: 'Project Life Cycle', def: 'The phases a project passes through from start to finish.' },
        { term: 'Process Group', def: 'Category of PM activities (Initiating, Planning, Executing, M&C, Closing) present in every phase.' },
      ],
      quiz: [
        {
          q: 'Process groups differ from project phases because process groups:',
          options: [
            'Always occur once per entire project',
            'Repeat within each phase of the project',
            'Only apply to agile projects',
            'Replace the need for a life cycle',
          ],
          answer: 1,
          explain: 'Each phase contains its own set of the five process groups.',
        },
        {
          q: 'During which process group is the project charter typically produced?',
          options: ['Planning', 'Executing', 'Initiating', 'Closing'],
          answer: 2,
          explain: 'The charter formally authorizes the project — an Initiating process.',
        },
      ],
      workedExamples: [
        {
          title: 'Mapping Activities to the Right Process Group',
          problem: 'A construction project has a "Foundation" phase. Within that phase, the team (1) gets sign-off to start foundation work, (2) creates a detailed pour schedule, (3) pours concrete, (4) inspects concrete strength daily against the plan, and (5) formally hands off the completed foundation to the next phase team. Map each activity to a process group.',
          steps: [
            '(1) Getting sign-off to start → **Initiating** (authorization for this phase).',
            '(2) Creating the detailed pour schedule → **Planning**.',
            '(3) Pouring concrete → **Executing** (doing the actual work).',
            '(4) Daily inspection against the plan → **Monitoring & Controlling**.',
            '(5) Formal hand-off → **Closing** (of this phase).',
          ],
          answer: '(1) Initiating, (2) Planning, (3) Executing, (4) Monitoring & Controlling, (5) Closing — note all five process groups occurred WITHIN one single phase.',
        },
        {
          title: 'Numerical: Reading a Cost/Staffing Curve',
          problem: 'A project\'s cumulative spend by phase is: Initiating $10k, Planning $40k, Executing $300k, Closing $20k (project total budget = $370k). What percentage of the total budget is spent during Executing, and does this match the typical PMP cost-curve shape?',
          steps: [
            'Total = 10 + 40 + 300 + 20 = $370k (matches given total).',
            'Executing percentage = 300 / 370 = 0.811 = 81.1%.',
            'Yes — this matches the classic PMP chart: cost/staffing is low at Initiating, rises through Planning, peaks during Executing, and drops sharply at Closing.',
          ],
          answer: '≈ 81.1% of the budget is spent during Executing — consistent with the typical S-curve.',
        },
      ],
      practiceQuestions: {
        easy: [
          { q: 'Name the five process groups in order.', answer: 'Initiating, Planning, Executing, Monitoring & Controlling, Closing', solution: 'M&C runs in parallel/overlaps with Planning and Executing rather than strictly "after" them.' },
          { q: 'True or False: A project can have multiple phases, and each phase repeats all five process groups.', answer: 'True', solution: 'This is the key distinction between life cycle phases (sequential, calendar-based) and process groups (recurring activity categories).' },
          { q: 'Which process group typically has the highest cost and staffing levels?', answer: 'Executing', solution: 'This is where the bulk of the actual work (and therefore cost/labor) happens.' },
        ],
        intermediate: [
          { q: 'A stakeholder says, "We finished Planning last month, so Monitoring & Controlling hasn\'t started yet." Correct this misunderstanding.', answer: 'Monitoring & Controlling actually runs concurrently with Planning and Executing, not strictly after Planning finishes — e.g., you monitor the quality of the plan itself while still planning.', solution: 'M&C is a continuous, overlapping activity, not a distinct sequential stage.' },
          { q: 'Numerical: A 4-phase project has phase durations of 3, 6, 8, and 3 weeks (Design, Build, Test, Deploy). What percentage of total project duration does the Build phase represent?', type: 'numerical', answer: '30%', solution: 'Total duration = 3+6+8+3 = 20 weeks. Build % = 6/20 = 0.30 = 30%.' },
          { q: 'Why does PMI emphasize that process groups are NOT the same as project phases on the exam?', answer: 'Because many candidates incorrectly assume Initiating/Planning/Executing/M&C/Closing are sequential phases of the whole project, when actually each individual phase contains its own instance of all five groups.', solution: 'This misunderstanding leads to wrong answers on scenario questions describing multi-phase projects.' },
        ],
        challenging: [
          { q: 'Numerical: Project total budget is $500,000 across phases with cumulative spend of $25k (Initiating), $75k (Planning), $370k (Executing), and $30k (Closing). Calculate the percentage spent in each phase and confirm the classic PMP S-curve shape (low-rising-peak-drop) holds.', type: 'numerical', answer: 'Initiating 5%, Planning 15%, Executing 74%, Closing 6% — shape holds.', solution: '25/500=5%, 75/500=15%, 370/500=74%, 30/500=6%. The percentages rise from Initiating to Planning to a peak at Executing, then drop sharply at Closing — matching the expected curve.' },
          { q: 'A multi-phase mega-project (Design → Build → Commission) discovers that "Closing" activities for the Design phase were skipped entirely — no formal sign-off, no lessons-learned capture — before Build began. Explain, using process-group vocabulary, what risk this creates and what should be done retroactively.', answer: 'Skipping the Closing process group for a phase means there was no formal validation that Design deliverables met acceptance criteria before Build (which depends on Design) began, and lessons learned were lost, risking repeated mistakes.', solution: 'Retroactive fix: perform a delayed phase-closure review now — validate Design deliverables against requirements, document lessons learned, and formally record acceptance even though Build has already started, to reduce downstream rework risk.' },
        ],
      },
      interviewPrep: [
        { q: 'Walk me through how you structure a project from kickoff to completion.', a: 'Use both vocabularies correctly: describe the life cycle phases relevant to your domain (e.g., Discovery → Design → Build → Test → Launch), and mention that within each phase you apply Initiating/Planning/Executing/Monitoring/Closing activities — showing you understand both concepts are distinct but complementary.' },
        { q: 'How do you know when a phase or project is really "done"?', a: 'Reference formal closure criteria: deliverables verified against acceptance criteria, stakeholder sign-off obtained, lessons learned documented, and resources released/transitioned — not just "the code was merged."' },
        { q: 'Describe how cost and staffing typically change over the life of a project you\'ve worked on.', a: 'Describe the low-rising-peak-drop pattern with a real example: light staffing during early planning, ramp-up during build/execution, and a taper as the project winds down and transitions to support/operations.' },
      ],
    },
    {
      day: 6,
      title: 'Week 1 Test — Foundations',
      domain: 'FOUNDATIONS',
      minutes: 45,
      isTest: true,
      objectives: ['Assess retention of Week 1 concepts before moving to Week 2'],
      intro: 'A real professor doesn\'t just lecture \u2014 they check whether the lecture actually landed. Treat this test as a diagnostic, not a grade. Anything you get wrong here is more valuable than ten things you get right, because it tells you exactly where to spend five extra minutes reviewing before Week 2 builds on top of it.',
      sections: [
        { type: 'p', text: 'Take this test without notes. Aim for 80%+. Review any missed explanations before moving on.' },
      ],
      keyTerms: [],
      quiz: [
        { q: 'A "unique, temporary endeavor" best defines a:', options: ['Program', 'Portfolio', 'Project', 'Process'], answer: 2, explain: 'That is the definition of a project.' },
        { q: 'Which is grouped for strategic alignment, not necessarily interdependence?', options: ['Program', 'Portfolio', 'Sub-project', 'Phase'], answer: 1, explain: 'Portfolios align to strategy; components need not be related.' },
        { q: 'Power Skills in the Talent Triangle refer to:', options: ['Scheduling tools', 'Leadership/communication ability', 'Industry knowledge', 'Contract law'], answer: 1, explain: 'Power Skills = interpersonal/leadership skills.' },
        { q: 'In which structure does the PM have the LEAST authority?', options: ['Projectized', 'Strong Matrix', 'Functional', 'Balanced Matrix'], answer: 2, explain: 'Functional orgs give PMs little to no authority.' },
        { q: 'A PMO that directly manages projects by supplying the PMs is a:', options: ['Supportive PMO', 'Controlling PMO', 'Directive PMO', 'Virtual PMO'], answer: 2, explain: 'Directive PMOs have high control, providing the PMs themselves.' },
        { q: 'High power + low interest stakeholders should be:', options: ['Managed closely', 'Kept satisfied', 'Monitored only', 'Ignored'], answer: 1, explain: 'Keep Satisfied quadrant.' },
        { q: 'The five Process Groups repeat:', options: ['Once per project', 'Once per organization', 'Within every phase', 'Only in agile projects'], answer: 2, explain: 'Every phase contains its own set of process groups.' },
      ],
    },
  ],
};

// ---------- WEEK 2 ----------
const week2 = {
  week: 2,
  month: 1,
  title: 'PMBOK 7 Principles, Performance Domains & Delivery Approaches',
  blurb: 'The 12 principles, 8 performance domains, and choosing predictive vs agile vs hybrid.',
  days: [
    {
      day: 1,
      title: '12 Principles of Project Management (Part 1)',
      domain: 'FOUNDATIONS',
      minutes: 90,
      objectives: [
        'Understand why PMBOK 7 shifted from processes to principles',
        'Explain the first 6 principles',
      ],
      intro: "Week 1 gave you the vocabulary of project management. Starting today, we move into the philosophy behind the modern PMP exam. In 2021, PMI made a deliberate, controversial shift: instead of prescribing 49 rigid processes to follow in order, the 7th Edition of the PMBOK Guide gives PMs 12 principles — values to apply with judgment, in any methodology. Think of the difference between memorizing a recipe versus understanding the chemistry of cooking: principles are the chemistry. This is also exactly why modern PMP exam questions read like workplace scenarios rather than trivia — they're testing whether you'd make a good judgment call, not whether you memorized a flowchart.",
      sections: [
        { type: 'p', text: 'PMBOK 7th Edition shifted from a process-based model to a **principle-based** model — values and guidelines that apply regardless of methodology (predictive, agile, or hybrid). The PMP exam blends this thinking with the practical ECO domains (People/Process/Business Environment).' },
        { type: 'list', items: [
          '**1. Stewardship** — be a diligent, respectful, caring steward of resources (financial, human, environmental).',
          '**2. Team** — create a collaborative project team culture.',
          '**3. Stakeholders** — engage stakeholders proactively to understand needs.',
          '**4. Value** — focus on value creation as the ultimate measure of success, not just outputs.',
          '**5. Systems Thinking** — recognize, evaluate, and respond to how project components interact as a system.',
          '**6. Leadership** — demonstrate and adapt leadership behaviors to the situation.',
        ]},
        { type: 'callout', tone: 'info', text: 'Exam mindset shift: modern PMP questions test judgment ("what would a good PM do?") rooted in these principles, not memorization of rigid steps.' },
      ],
      keyTerms: [
        { term: 'Stewardship', def: 'Responsible, ethical management of resources on behalf of others.' },
        { term: 'Systems Thinking', def: 'Viewing the project as an interconnected system, not isolated tasks.' },
      ],
      quiz: [
        { q: 'PMBOK 7 organizes guidance primarily around:', options: ['49 processes', '12 principles and 8 performance domains', '5 process groups only', '10 knowledge areas only'], answer: 1, explain: 'PMBOK7 is principle- and performance-domain based.' },
        { q: 'Recognizing how a delay in procurement affects schedule, cost, and team morale together reflects:', options: ['Stewardship', 'Systems Thinking', 'Value focus', 'Leadership'], answer: 1, explain: 'Systems thinking considers interacting components holistically.' },
      ],
      workedExamples: [
        {
          title: 'Identifying the Principle at Play',
          problem: 'A PM notices that cutting corners on testing would save 2 weeks but discovers the team is quietly stressed and considering skipping code review too. Instead of pushing forward, the PM pauses, talks to the team about sustainable pace, and reworks the plan. Which two principles are most clearly demonstrated?',
          steps: [
            'Prioritizing team wellbeing and sustainable pace over a short-term shortcut reflects the **Team** principle (collaborative, healthy team culture).',
            'Recognizing that skipping testing now could cascade into quality and morale problems later reflects **Systems Thinking** (seeing how one decision ripples across the whole system).',
            'Note that neither principle says "never adjust plans" — the PM still tailors the plan, but does so responsibly.',
          ],
          answer: 'Team + Systems Thinking.',
        },
        {
          title: 'Numerical: Weighing Stewardship Trade-offs',
          problem: 'A PM must choose between two vendors for a $200,000 contract. Vendor A costs $180,000 but has weaker environmental practices; Vendor B costs $200,000 (11.1% more) with strong sustainability credentials aligned to company policy. If the Stewardship principle requires responsible use of resources INCLUDING environmental factors, and company policy mandates sustainable sourcing above $150,000 contracts, which vendor satisfies Stewardship, and what is the exact percentage cost premium for choosing it?',
          steps: [
            'Cost premium = (200,000 − 180,000) / 180,000 = 20,000 / 180,000 = 0.1111 = 11.11%.',
            'Company policy mandates sustainable sourcing for contracts above $150,000; this contract ($180k–200k) qualifies.',
            'Stewardship includes environmental responsibility, not just lowest cost — so Vendor B satisfies the principle despite the ~11.11% premium.',
          ],
          answer: 'Vendor B satisfies Stewardship; the cost premium is 11.11%.',
        },
      ],
      practiceQuestions: {
        easy: [
          { q: 'List the first three of the 12 principles in order.', answer: 'Stewardship, Team, Stakeholders', solution: 'These set the ethical/relational foundation before Value, Systems Thinking, and Leadership.' },
          { q: 'True or False: PMBOK 7 completely removed all mention of processes.', answer: 'False', solution: 'Processes still exist as practical techniques (in the Standard and practice guides); PMBOK7 simply organizes GUIDANCE around principles/domains instead of prescribing a rigid process sequence.' },
          { q: 'Which principle is most directly about focusing on outcomes rather than just outputs?', answer: 'Value', solution: 'Value principle: success = value delivered, not just "tasks completed."' },
        ],
        intermediate: [
          { q: 'A team delivers 100% of planned features on time and on budget, but the client rarely uses the new system and revenue targets are missed. Using the Value principle, was this project successful? Explain.', answer: 'Not fully — hitting scope/schedule/budget targets (outputs) does not guarantee Value (outcomes) was achieved; the Value principle judges success by realized benefit, not just delivered features.', solution: 'This is the classic "successful project, failed outcome" trap the Value principle is designed to prevent.' },
          { q: 'Numerical: A stewardship-conscious PM tracks resource waste. Out of a $500,000 project budget, $35,000 was wasted on rework due to poor planning. What percentage of the budget was wasted, and what would the revised effective budget utilization be?', type: 'numerical', answer: '7% wasted; 93% effective utilization', solution: 'Waste % = 35,000 / 500,000 = 0.07 = 7%. Effective utilization = 100% − 7% = 93%.' },
          { q: 'Give a workplace example (not from this course) of Systems Thinking failing — i.e., a decision that looked good in isolation but caused a ripple problem elsewhere.', answer: 'Example: a team ships a feature fast by skipping integration testing (looks good for schedule), but it breaks a downstream reporting system relied on by finance, causing a much larger cost than the time saved.', solution: 'Good answers show cross-functional/ripple awareness, not just a single isolated cause-effect.' },
        ],
        challenging: [
          { q: 'Numerical: Two competing decisions are on the table. Decision A saves $15,000 immediately but has an estimated 30% chance of causing a $80,000 downstream integration failure (Systems Thinking risk). Decision B costs $15,000 more upfront but eliminates that risk. Calculate the expected cost of Decision A (including risk) and determine which decision a Systems-Thinking-minded PM should choose.', type: 'numerical', answer: 'Expected cost of Decision A ≈ $24,000 in risk exposure alone (plus needing the $15,000 saved is not real savings); Decision B is the safer, cheaper expected choice.', solution: 'Expected value of risk = 30% × $80,000 = $24,000. Since $24,000 (expected downstream cost) far exceeds the $15,000 saved upfront, Decision A is a net expected loss of $24,000 − $15,000 = $9,000 versus Decision B\'s certain $15,000 cost — actually compare: A\'s expected total cost = -15,000 (savings) + 24,000 (expected risk) = $9,000 net cost; B\'s cost = $15,000 net cost. So mathematically A is slightly cheaper in expectation ($9,000 vs $15,000), BUT a prudent PM may still prefer B for risk-averse reasons (avoiding the 30% chance of a severe, disruptive $80,000 event) — this illustrates that Systems Thinking also weighs risk tolerance, not just expected value.' },
          { q: 'Write a 3-4 sentence explanation, suitable for a non-PM executive, of why PMI moved away from a rigid 49-process checklist toward 12 principles. Use at least one concrete downside of the old rigid-process approach in your answer.', answer: 'Rigid processes assumed every project looked the same, which broke down for agile/hybrid work where flexibility matters more than sequence compliance. Principles let PMs apply judgment to fit context (size, risk, industry) instead of mechanically following steps that may not fit. A concrete downside of the old approach: teams sometimes completed paperwork/process steps just to "check the box" (e.g., writing a detailed change request for a trivial change) without adding real value, wasting time that principles-based tailoring would avoid.', solution: 'Strong answers reference tailoring and real-world flexibility, not just "it\'s more modern."' },
        ],
      },
      interviewPrep: [
        { q: 'What do you think is the biggest shift in how project management is taught/practiced in the last few years?', a: 'Reference the move from rigid process-driven frameworks to principle-based, value-focused, and increasingly agile/hybrid ways of working — emphasizing judgment and context over checklist compliance.' },
        { q: 'Tell me about a time you had to balance short-term delivery pressure with your team\'s wellbeing.', a: 'STAR format referencing the Team and Stewardship principles: describe the pressure, the trade-off you considered, the decision you made, and the outcome — ideally showing you protected sustainable pace without abandoning delivery commitments entirely.' },
        { q: 'How do you make sure a project delivers real value, not just the features that were asked for?', a: 'Discuss validating assumptions early, tying deliverables to measurable business outcomes (not just scope completion), and following up post-delivery to check actual usage/benefit realization — direct application of the Value principle.' },
      ],
    },
    {
      day: 2,
      title: '12 Principles of Project Management (Part 2)',
      domain: 'FOUNDATIONS',
      minutes: 90,
      objectives: ['Explain principles 7 through 12'],
      intro: "We finish the 12 principles today. Pay special attention to Tailoring and Risk — these two are the most frequently tested on the actual PMP exam and the most misunderstood in real workplaces. A huge number of practicing PMs (and interview candidates) treat 'tailoring' as an excuse to skip governance, and treat 'risk management' as only about bad things happening. Both are wrong, and today fixes that.",
      sections: [
        { type: 'list', items: [
          '**7. Tailoring** — design the project approach based on context; no one-size-fits-all.',
          '**8. Quality** — build quality into processes and deliverables.',
          '**9. Complexity** — navigate complexity using experience, judgment, and decomposition.',
          '**10. Risk** — optimize risk responses continuously (both threats and opportunities).',
          '**11. Adaptability and Resiliency** — build in the ability to adapt when circumstances change.',
          '**12. Change** — enable change to achieve the envisioned future state.',
        ]},
        { type: 'diagram', mermaid: `mindmap\n  root((12 Principles))\n    Stewardship\n    Team\n    Stakeholders\n    Value\n    Systems Thinking\n    Leadership\n    Tailoring\n    Quality\n    Complexity\n    Risk\n    Adaptability\n    Change` },
        { type: 'callout', tone: 'warn', text: 'Exam trap: "Tailoring" does not mean skipping governance — it means adjusting methods/tools/level of formality to fit the project\'s size, risk, and context while still meeting requirements.' },
      ],
      keyTerms: [
        { term: 'Tailoring', def: 'Adapting the project approach, governance, and processes to fit the context.' },
        { term: 'Risk (as a principle)', def: 'Continuously identifying and responding to both threats and opportunities.' },
      ],
      quiz: [
        { q: 'Tailoring in PMBOK 7 means:', options: ['Skipping all documentation', 'Adjusting approach/processes to fit the project context', 'Only for agile projects', 'A one-time decision at project start never revisited'], answer: 1, explain: 'Tailoring is adapting the approach appropriately, and can be revisited.' },
        { q: 'The Risk principle emphasizes responding to:', options: ['Threats only', 'Opportunities only', 'Both threats and opportunities', 'Only risks above a cost threshold'], answer: 2, explain: 'Modern risk management addresses threats AND opportunities.' },
      ],
      workedExamples: [
        {
          title: 'Tailoring in Practice, Not Theory',
          problem: 'A 3-person startup project and a 300-person regulated pharmaceutical project both need a "change control process." Describe how Tailoring would make these look different while both still satisfying the underlying principle.',
          steps: [
            'The startup project might use a 15-minute team discussion and a shared doc update to approve a change — lightweight, fast, proportionate to low risk/small team.',
            'The pharmaceutical project likely requires a formal Change Control Board, documented impact analysis, and regulatory sign-off — heavyweight, proportionate to high risk/compliance exposure.',
            'Both satisfy the underlying principle (changes are evaluated and approved before implementation) — Tailoring changed the FORMALITY, not whether governance exists at all.',
          ],
          answer: 'Tailoring adjusts the level of formality/process to context — it never means "skip governance entirely."',
        },
        {
          title: 'Numerical: Quantifying an Opportunity (Positive Risk)',
          problem: 'A PM identifies an opportunity: if a new vendor tool is adopted early, there\'s a 40% chance of saving $60,000 in the project budget through automation. Using Expected Monetary Value (EMV), what is the value of pursuing this opportunity?',
          steps: [
            'EMV = Probability × Impact.',
            'EMV = 0.40 × $60,000 = $24,000.',
            'This positive EMV represents an opportunity (upside risk), calculated the same way as a threat, just with a positive impact value.',
          ],
          answer: 'EMV = $24,000 (positive), representing an opportunity worth pursuing relative to its cost of pursuit.',
        },
      ],
      practiceQuestions: {
        easy: [
          { q: 'Which principle explicitly says risk includes both threats and opportunities?', answer: 'Risk', solution: 'Modern risk management is symmetric — manage bad outcomes AND capture good ones.' },
          { q: 'True or False: Tailoring means you can skip required regulatory documentation if you\'re in a hurry.', answer: 'False', solution: 'Tailoring adjusts formality/approach, not compliance obligations.' },
          { q: 'Which principle is about building the capacity to adjust when things don\'t go as planned?', answer: 'Adaptability and Resiliency', solution: 'Distinct from Tailoring (initial approach design) — this is about ongoing capacity to absorb change.' },
        ],
        intermediate: [
          { q: 'A regulated banking project and a small internal marketing project both need risk registers. Describe how Tailoring would make these registers different in practice while both satisfying the Risk principle.', answer: 'The banking project likely needs a detailed, formally reviewed risk register with quantitative analysis (e.g., EMV, Monte Carlo) and compliance sign-off; the marketing project might use a simple one-page list with qualitative High/Medium/Low ratings reviewed informally in team meetings.', solution: 'Both track and respond to risk (satisfying the principle); the FORMALITY and rigor differ based on context (regulatory exposure, project size).' },
          { q: 'Numerical: A risk has a 25% probability of a $40,000 negative impact (a threat), and a separate opportunity has a 15% probability of a $50,000 positive impact. Calculate the EMV of each and the NET EMV if both could occur independently.', type: 'numerical', answer: 'Threat EMV = -$10,000; Opportunity EMV = +$7,500; Net EMV = -$2,500', solution: 'Threat EMV = 0.25 × (−$40,000) = −$10,000. Opportunity EMV = 0.15 × $50,000 = $7,500. Net = −$10,000 + $7,500 = −$2,500.' },
          { q: 'Explain why "Complexity" is listed as its own principle rather than being folded into Systems Thinking.', answer: 'Systems Thinking is about recognizing interactions between components; Complexity is specifically about navigating ambiguity, ill-structured problems, and situations where cause-and-effect isn\'t clear — requiring experience and judgment rather than just mapping relationships.', solution: 'They are related but distinct: one is about interconnection, the other is about difficulty/uncertainty in decision-making itself.' },
        ],
        challenging: [
          { q: 'Numerical: A project has 3 identified risks: Risk 1 (threat, 20% probability, -$30,000 impact), Risk 2 (opportunity, 35% probability, +$45,000 impact), Risk 3 (threat, 10% probability, -$100,000 impact). Calculate the total portfolio EMV for this project\'s risk exposure, and state whether the project\'s risk profile is net positive or negative.', type: 'numerical', answer: 'Total EMV = -$4,250 (net negative)', solution: 'Risk 1 = 0.20 × (-30,000) = -$6,000. Risk 2 = 0.35 × 45,000 = +$15,750. Risk 3 = 0.10 × (-100,000) = -$10,000. Total = -6,000 + 15,750 - 10,000 = -$4,250. Net negative, meaning risk exposure currently outweighs opportunity upside.' },
          { q: 'A junior PM tailors away nearly all documentation on a fast-moving project, arguing "the principles say I should tailor to my context." Six months later, an audit fails because there\'s no evidence of key decisions or approvals. Using principle vocabulary, explain what the PM misunderstood, and how you would coach them.', answer: 'The PM correctly identified Tailoring as a principle but misunderstood its boundary: tailoring adjusts the LEVEL of formality/process to fit context, but does not eliminate the underlying obligation for traceable decisions, especially where compliance/audit requirements exist (this also ties to Stewardship — responsible management includes accountability).', solution: 'Coaching approach: help the PM design a lightweight but still traceable practice (e.g., a single-line decision log) that satisfies both speed AND auditability, rather than an all-or-nothing choice.' },
        ],
      },
      interviewPrep: [
        { q: 'How do you decide how much process/documentation is "enough" for a project?', a: 'Reference Tailoring explicitly: base the decision on project size, risk, regulatory requirements, and team distribution — give a concrete example of scaling process up or down and why.' },
        { q: 'Tell me about a risk you identified that turned into an opportunity, or an opportunity you pursued that had risk.', a: 'Use a specific example showing you evaluated probability and impact (even informally), and made a deliberate decision rather than reacting emotionally to uncertainty.' },
        { q: 'How do you handle a project where requirements or environment keep changing unpredictably?', a: 'Reference Adaptability and Resiliency and Complexity: describe building in review checkpoints, maintaining a flexible plan/backlog, and using experience-based judgment rather than rigidly following an outdated plan.' },
      ],
    },
    {
      day: 3,
      title: 'The 8 Performance Domains',
      domain: 'PROCESS',
      minutes: 90,
      objectives: ['List and describe the 8 PMBOK7 performance domains', 'Connect domains to the ECO'],
      intro: "Principles told us HOW to think. Performance domains tell us WHAT to actually pay attention to, every single day, on a real project. If the 12 principles are a philosophy course, the 8 performance domains are the operating manual. Note how they map closely to the practical work you'll actually do: managing a team, engaging stakeholders, planning work, tracking measurement, and handling uncertainty — all running in parallel, all the time.",
      sections: [
        { type: 'p', text: 'Performance domains are groups of related activities critical for effective project delivery. They operate continuously, not sequentially.' },
        { type: 'table', headers: ['Domain', 'Focus'], rows: [
          ['Team', 'Building a high-performing, collaborative team'],
          ['Stakeholders', 'Engagement and satisfaction of stakeholders'],
          ['Development Approach & Life Cycle', 'Choosing predictive/agile/hybrid and phasing'],
          ['Planning', 'Organizing and coordinating work toward deliverables'],
          ['Project Work', 'Establishing processes, managing resources/procurement'],
          ['Delivery', 'Scope and quality of value delivered'],
          ['Measurement', 'Assessing project performance, taking appropriate action'],
          ['Uncertainty', 'Risk and ambiguity management'],
        ]},
        { type: 'diagram', mermaid: `flowchart TD\n  center((Project))\n  center --- Team\n  center --- Stakeholders\n  center --- DevApproach[Dev Approach & Life Cycle]\n  center --- Planning\n  center --- ProjectWork[Project Work]\n  center --- Delivery\n  center --- Measurement\n  center --- Uncertainty` },
      ],
      keyTerms: [
        { term: 'Performance Domain', def: 'A group of related activities critical to effective project delivery, operating continuously.' },
      ],
      quiz: [
        { q: 'Performance domains operate:', options: ['Sequentially, one after another', 'Continuously, throughout the project', 'Only during Executing', 'Only in agile projects'], answer: 1, explain: 'Domains are interrelated and continuous, not phase-locked.' },
        { q: 'Which domain focuses specifically on choosing predictive, agile, or hybrid methods?', options: ['Delivery', 'Development Approach & Life Cycle', 'Measurement', 'Planning'], answer: 1, explain: 'That domain is explicitly about choosing/tailoring the development approach.' },
      ],
      workedExamples: [
        {
          title: 'Mapping a Daily Scenario to Multiple Domains',
          problem: 'On Tuesday morning, a PM: (1) reviews last sprint\'s velocity chart, (2) has a 1:1 with a struggling engineer, (3) updates the risk register after a vendor delay, and (4) sends a milestone update to the steering committee. Map each activity to a performance domain.',
          steps: [
            '(1) Reviewing velocity chart → **Measurement** domain (assessing performance).',
            '(2) 1:1 with a struggling engineer → **Team** domain.',
            '(3) Updating risk register after vendor delay → **Uncertainty** domain.',
            '(4) Steering committee update → **Stakeholders** domain.',
          ],
          answer: 'Measurement, Team, Uncertainty, Stakeholders — note all four happened in a SINGLE morning, proving domains run continuously and in parallel, not sequentially.',
        },
        {
          title: 'Numerical: Measurement Domain in Action',
          problem: 'A team planned to complete 50 story points this sprint but only completed 38. Calculate the Schedule Performance Index (SPI) equivalent for this simple planned-vs-actual measure, and interpret the result.',
          steps: [
            'Simple performance ratio = Actual / Planned = 38 / 50 = 0.76.',
            'A ratio below 1.0 indicates the team delivered less than planned (under-performing against the plan).',
            'This is conceptually similar to SPI (covered in detail in Month 2) — a ratio below 1.0 signals a schedule concern requiring investigation.',
          ],
          answer: 'Ratio = 0.76 (76% of planned work completed) — signals an under-performance the Measurement domain should flag for action.',
        },
      ],
      practiceQuestions: {
        easy: [
          { q: 'Name any four of the 8 performance domains.', answer: 'Any four of: Team, Stakeholders, Development Approach & Life Cycle, Planning, Project Work, Delivery, Measurement, Uncertainty', solution: 'All 8 operate continuously throughout the project.' },
          { q: 'True or False: Performance domains happen one after another, similar to project phases.', answer: 'False', solution: 'They are continuous and interrelated, unlike sequential life-cycle phases.' },
          { q: 'Which domain would you check to see if the project is on track against its baseline?', answer: 'Measurement', solution: 'Measurement domain covers performance assessment and corrective action.' },
        ],
        intermediate: [
          { q: 'A PM spends an entire week only on Delivery-domain activities (producing outputs) and completely neglects the Stakeholders domain. What risk does this create, even if the technical work is excellent?', answer: 'Stakeholders may become unaware of progress, misaligned on scope, or blindsided by changes — risking rework, loss of trust, or late-stage rejection of otherwise excellent deliverables.', solution: 'This illustrates why domains must be balanced continuously, not traded off entirely in favor of one.' },
          { q: 'Numerical: A project measures domain "health" with a simple 1-10 self-assessment across all 8 domains. Scores are: Team 8, Stakeholders 6, DevApproach 9, Planning 7, ProjectWork 8, Delivery 9, Measurement 5, Uncertainty 4. What is the average domain health score, and which domain most needs attention?', type: 'numerical', answer: 'Average ≈ 7.0; Uncertainty (score 4) needs the most attention', solution: 'Sum = 8+6+9+7+8+9+5+4 = 56. Average = 56/8 = 7.0. Lowest score (4) is Uncertainty, indicating the weakest area.' },
          { q: 'Explain the relationship between the "Development Approach & Life Cycle" domain and the choice between predictive, agile, and hybrid (tomorrow\'s topic).', answer: 'This domain is literally where that decision and its ongoing tailoring lives — it covers selecting the approach AND structuring the life cycle/phases/iterations to match it.', solution: 'It is a continuous domain, meaning the approach can be revisited if project conditions change, not locked in forever at kickoff.' },
        ],
        challenging: [
          { q: 'Numerical: Using the same 1-10 domain health scoring method, Project X scores an average of 7.5 but has a standard deviation of 2.8 (high variance across domains), while Project Y scores an average of 7.0 with a standard deviation of 0.9 (low variance). Which project is likely healthier overall, and why might average alone be misleading?', answer: 'Project Y is likely healthier overall despite the lower average, because low variance means no domain is critically neglected, while Project X\'s high variance likely hides a severely weak domain (e.g., a 3 or 4) that could cause a major failure even though the average looks fine.', solution: 'This illustrates why aggregate/average health metrics can mask a single critical weak spot — always check the distribution, not just the mean, a mindset useful for both PMP scenario questions and real dashboards.' },
          { q: 'Describe a real or hypothetical project where neglecting the Uncertainty domain (poor risk/ambiguity management) caused a cascading failure in at least two OTHER domains. Name the domains affected and explain the cascade.', answer: 'Example: a vendor risk was never tracked (Uncertainty neglected). The vendor failed to deliver a critical component, which delayed Delivery (missed deadline), forced emergency unplanned work harming Team morale (Team domain), and required an awkward, trust-damaging update to the steering committee (Stakeholders domain).', solution: 'Strong answers show explicit cause-and-effect chains across at least 2 domains, demonstrating Systems Thinking (principle) applied to performance domains.' },
        ],
      },
      interviewPrep: [
        { q: 'How do you keep track of multiple aspects of a project — team health, stakeholders, risk, delivery — all at once without dropping any of them?', a: 'Describe a concrete practice: a weekly dashboard/checklist touching each domain, dedicated 1:1 cadence for team health, a living risk register reviewed regularly, and stakeholder communication built into the schedule — showing structured, continuous attention rather than reactive firefighting.' },
        { q: 'Describe the last time you had to balance competing priorities across different parts of a project (e.g., team wellbeing vs. delivery speed).', a: 'STAR example referencing at least two performance domains explicitly (e.g., Team vs. Delivery), showing you made a deliberate, reasoned trade-off rather than ignoring one side.' },
        { q: 'What metrics do you track to know if a project is truly healthy, not just "on schedule"?', a: 'Go beyond schedule/cost: mention team engagement/attrition signals, stakeholder satisfaction, quality/defect trends, and risk exposure trend — reflecting a multi-domain view of project health.' },
      ],
    },
    {
      day: 4,
      title: 'Predictive vs Agile vs Hybrid — Choosing a Delivery Approach',
      domain: 'AGILE',
      minutes: 90,
      objectives: ['Compare predictive, agile, and hybrid approaches', 'Identify factors that drive approach selection'],
      intro: "This might be the single most practically important lesson so far, because interviewers at almost every modern tech or product company will ask some version of 'do you have agile experience?' The honest, sophisticated answer is never 'yes' or 'no' — it's knowing WHICH approach fits WHICH situation, and being able to defend that choice with reasoning instead of buzzwords. Today we build that reasoning, plus your first real numerical tool from the agile world: velocity.",
      sections: [
        { type: 'table', headers: ['Approach', 'Characteristics', 'Best When'], rows: [
          ['Predictive (Waterfall)', 'Sequential phases, detailed upfront planning, scope fixed early', 'Requirements stable, low uncertainty, regulatory/compliance-heavy'],
          ['Agile', 'Iterative, incremental, adaptive planning, frequent feedback', 'Requirements evolve, high uncertainty, need fast feedback'],
          ['Hybrid', 'Mix of predictive + agile elements (e.g., agile execution, predictive governance)', 'Some parts stable, some parts uncertain'],
        ]},
        { type: 'diagram', mermaid: `flowchart LR
  A["High Certainty<br/>Stable Requirements"] --> P[Predictive]
  B[Mixed Certainty] --> H[Hybrid]
  C["High Uncertainty<br/>Evolving Requirements"] --> AG[Agile]` },
        { type: 'p', text: 'Factors influencing the choice: requirement stability, delivery cadence needs, safety/regulatory constraints, team/customer availability for frequent feedback, and organizational culture.' },
        { type: 'callout', tone: 'info', text: 'PMP exam covers ALL three approaches — expect roughly half the exam to include agile/hybrid scenario questions, not just predictive.' },
      ],
      keyTerms: [
        { term: 'Predictive Approach', def: 'Plan-driven, sequential; scope/schedule/cost defined early.' },
        { term: 'Agile Approach', def: 'Iterative and incremental, embracing change and frequent feedback.' },
        { term: 'Hybrid Approach', def: 'Combination of predictive and agile elements tailored to project needs.' },
      ],
      quiz: [
        { q: 'A project with heavily regulated, fixed requirements and low tolerance for change is best suited to:', options: ['Pure Agile', 'Predictive', 'Kanban only', 'No planning at all'], answer: 1, explain: 'Stable, regulated requirements favor a predictive approach.' },
        { q: 'A hybrid approach is best described as:', options: ['Only Scrum with different names', 'A blend of predictive and agile elements tailored to the project', 'Agile without a product owner', 'Predictive with daily standups only'], answer: 1, explain: 'Hybrid tailors and combines elements of both approaches.' },
      ],
      workedExamples: [
        {
          title: 'Choosing an Approach from Project Characteristics',
          problem: 'A team is building a new consumer mobile app feature where user feedback will likely reshape requirements every 2 weeks, but the underlying payment-processing module must comply with strict financial regulations that cannot change once certified. Recommend an approach and justify it.',
          steps: [
            'The consumer-facing feature has evolving requirements and benefits from fast feedback loops → favors **Agile**.',
            'The payment-processing module has fixed, regulation-driven requirements with low tolerance for change → favors **Predictive**.',
            'Since the project has both characteristics in different parts, the best fit is a **Hybrid** approach: agile iterations for the app feature, predictive/stage-gated governance for the regulated payment module.',
          ],
          answer: 'Hybrid approach — agile for the evolving UI feature, predictive for the regulated payment module.',
        },
        {
          title: 'Numerical: Calculating and Using Agile Velocity',
          problem: 'An agile team completes 32, 28, and 36 story points in its last three 2-week sprints. The remaining product backlog has 210 story points. (a) What is the team\'s average velocity? (b) Approximately how many more sprints are needed to complete the backlog? (c) Roughly how many weeks is that?',
          steps: [
            'Average velocity = (32 + 28 + 36) / 3 = 96 / 3 = 32 story points per sprint.',
            'Sprints needed = remaining backlog / average velocity = 210 / 32 = 6.5625, round up to **7 sprints** (partial sprints still consume a full sprint\'s calendar time).',
            'Weeks needed = 7 sprints × 2 weeks/sprint = **14 weeks**.',
          ],
          answer: 'Average velocity = 32 points/sprint; ≈ 7 sprints needed; ≈ 14 weeks to complete the backlog.',
        },
      ],
      practiceQuestions: {
        easy: [
          { q: 'Which approach is most appropriate for a project with stable, well-understood, regulation-driven requirements?', answer: 'Predictive', solution: 'Stable requirements and low tolerance for change favor predictive/plan-driven delivery.' },
          { q: 'True or False: A hybrid approach means running two completely separate, unrelated projects side by side.', answer: 'False', solution: 'Hybrid blends elements of both approaches WITHIN a single, coordinated project.' },
          { q: 'Name two factors that would push a team toward Agile over Predictive.', answer: 'Evolving/uncertain requirements and the need for frequent customer feedback (also: high uncertainty, fast-changing market conditions)', solution: 'These are the classic triggers for iterative, incremental delivery.' },
        ],
        intermediate: [
          { q: 'Numerical: A team\'s velocity over 4 sprints was 20, 24, 18, and 26 story points. The backlog has 150 points remaining. Using average velocity, estimate the number of sprints needed to finish, rounded up.', type: 'numerical', answer: '7 sprints', solution: 'Average velocity = (20+24+18+26)/4 = 88/4 = 22. Sprints needed = 150/22 = 6.82 → round up to 7 sprints.' },
          { q: 'A regulated medical device company wants faster feedback from users but cannot legally change certified safety requirements mid-stream. Recommend and justify an approach.', answer: 'Hybrid: predictive/stage-gated governance for the certified safety-critical requirements, with agile iteration for non-certified areas like UI/UX or non-safety features where feedback can safely drive change.', solution: 'This mirrors real medical device / aerospace practice — safety-critical cores stay predictive; peripheral, non-regulated areas can be agile.' },
          { q: 'Why is "the exam covers roughly half agile/hybrid content" an important fact for someone who has only ever worked in traditional waterfall environments?', answer: 'They cannot rely solely on their waterfall experience to pass; they must deliberately study agile/hybrid concepts (roles, ceremonies, estimation, velocity) even if their day job hasn\'t used them yet.', solution: 'This is a common failure point for experienced but traditionally-trained PMs taking the modern PMP exam.' },
        ],
        challenging: [
          { q: 'Numerical: Team A has average velocity 30 pts/sprint with high variance (sprints ranged from 15 to 45). Team B has average velocity 28 pts/sprint with low variance (sprints ranged from 26 to 30). Both face a 200-point backlog. Using JUST average velocity, which team finishes sooner in theory, and why might Team B actually be the safer bet for a hard deadline?', type: 'numerical', answer: 'Team A finishes theoretically sooner (200/30 = 6.67 → 7 sprints) vs Team B (200/28 = 7.14 → 8 sprints), BUT Team B is safer for a hard deadline due to predictability.', solution: 'Team A\'s high variance (15 to 45) means real-world forecasts are unreliable — a bad sprint of 15 points could blow the deadline, whereas Team B\'s tight, predictable range (26-30) gives a much more reliable forecast despite a slightly lower average, which matters more when the deadline is fixed and hard.' },
          { q: 'A stakeholder insists on "100% of scope defined upfront AND biweekly changing priorities" for the same project. Explain why this combination is internally contradictory, and propose a hybrid compromise that manages the stakeholder\'s underlying concerns.', answer: 'Predictive delivery assumes scope is fixed upfront specifically because changing it later is costly; demanding both full upfront scope AND frequent reprioritization contradicts the core assumption predictive planning relies on.', solution: 'Compromise: fix only the high-level scope/goals and non-negotiable constraints (budget, key milestones, compliance items) upfront in a predictive-style charter, while managing feature-level details in an agile backlog that can be reprioritized every sprint — a classic hybrid pattern.' },
        ],
      },
      interviewPrep: [
        { q: 'Do you have agile experience?', a: 'Avoid a flat yes/no. Describe specific frameworks used (Scrum/Kanban), your role in ceremonies, and — critically — a concrete example of WHY agile fit that particular project (evolving requirements, need for fast feedback), showing judgment rather than buzzword-matching.' },
        { q: 'How do you decide between a waterfall and agile approach for a new project?', a: 'Walk through the decision factors explicitly: requirement stability, regulatory/compliance constraints, need for customer feedback cadence, and team/organizational maturity — then give a real or plausible example ending in a hybrid recommendation if appropriate.' },
        { q: 'Have you ever worked on a hybrid project? What did that look like in practice?', a: 'Describe concretely which parts were predictive (e.g., overall budget/milestones fixed via a charter) and which parts were agile (e.g., sprint-based feature delivery with a backlog), and how governance connected the two (e.g., sprint reviews feeding into a monthly steering committee).' },
      ],
    },
    {
      day: 5,
      title: 'Business Case, Project Charter & Selection Methods',
      domain: 'BUSINESS',
      minutes: 90,
      objectives: ['Explain the purpose of a business case', 'Describe the project charter\'s role', 'Compare project selection methods'],
      intro: "Today is formula day — arguably the highest-density numerical content in Month 1. Every PMP exam includes financial project-selection questions, and every experienced PM interview eventually asks 'how do you justify a project to leadership?' The answer is always some version of these four methods: NPV, Payback Period, IRR, and Benefit-Cost Ratio. Don't just memorize 'higher is better' — work through the numbers below until the logic feels obvious, because that's what separates candidates who guess correctly from those who reason correctly under exam pressure.",
      sections: [
        { type: 'p', text: 'The **business case** documents the economic feasibility of a project — the problem/opportunity, options considered, and justification for investment. It typically exists BEFORE the project charter and drives the go/no-go decision.' },
        { type: 'p', text: 'The **project charter** formally authorizes the project and gives the PM authority to apply resources. It typically includes: purpose, measurable objectives, high-level requirements, assumptions/constraints, high-level risks, summary milestones, and the assigned PM with their authority level.' },
        { type: 'table', headers: ['Selection Method', 'How it works'], rows: [
          ['NPV (Net Present Value)', 'Value of future cash flows discounted to present; higher NPV = better'],
          ['Payback Period', 'Time to recover initial investment; shorter = better'],
          ['IRR (Internal Rate of Return)', 'Discount rate where NPV = 0; higher IRR = better'],
          ['Benefit-Cost Ratio (BCR)', 'Benefits ÷ Costs; BCR > 1 means benefits exceed costs'],
        ]},
        { type: 'callout', tone: 'warn', text: 'Formula reminder for the exam: when comparing projects, HIGHER NPV, IRR, and BCR are better; LOWER Payback Period is better.' },
      ],
      keyTerms: [
        { term: 'Business Case', def: 'Document justifying the investment in a project based on need/benefit analysis.' },
        { term: 'Project Charter', def: 'Document that formally authorizes a project and names the PM.' },
        { term: 'NPV', def: 'Net Present Value — discounted value of future cash flows; higher is better.' },
      ],
      quiz: [
        { q: 'Which document formally authorizes the project and names the project manager?', options: ['Business case', 'Project charter', 'Scope statement', 'Stakeholder register'], answer: 1, explain: 'The charter authorizes the project and grants the PM authority.' },
        { q: 'Between two projects, Project A has NPV $50,000 and Project B has NPV $30,000. All else equal, which is the better financial choice?', options: ['Project B', 'Project A', 'They are equal', 'Cannot be determined'], answer: 1, explain: 'Higher NPV is better.' },
        { q: 'A project with Payback Period of 8 months is generally preferred over one with:', options: ['Payback of 5 months', 'Payback of 14 months', 'Same NPV', 'Same IRR'], answer: 1, explain: 'Shorter payback period is better; 8 months beats 14 months.' },
      ],
      workedExamples: [
        {
          title: 'Numerical: Calculating Payback Period',
          problem: 'A project costs $120,000 upfront and generates $30,000 per year in net cash inflow. What is the simple Payback Period?',
          steps: [
            'Payback Period = Initial Investment / Annual Cash Inflow.',
            'Payback Period = $120,000 / $30,000 per year = 4 years.',
          ],
          answer: 'Payback Period = 4 years.',
        },
        {
          title: 'Numerical: Calculating Benefit-Cost Ratio (BCR)',
          problem: 'A proposed project has estimated total benefits of $450,000 and total costs of $300,000. Calculate the BCR and state whether the project should proceed on financial grounds alone.',
          steps: [
            'BCR = Benefits / Costs.',
            'BCR = $450,000 / $300,000 = 1.5.',
            'A BCR greater than 1 means benefits exceed costs, so on financial grounds alone, the project looks favorable.',
          ],
          answer: 'BCR = 1.5 (favorable, since it is greater than 1).',
        },
        {
          title: 'Numerical: Comparing Two Projects Using Multiple Methods',
          problem: 'Project Alpha: NPV = $80,000, Payback = 3 years. Project Beta: NPV = $95,000, Payback = 5 years. Using NPV alone, which project wins? Using Payback alone, which project wins? What might explain the conflict, and which metric usually takes priority in PMP scenario questions unless stated otherwise?',
          steps: [
            'By NPV: Beta wins ($95,000 > $80,000).',
            'By Payback: Alpha wins (3 years is shorter than 5 years, meaning faster capital recovery).',
            'The conflict arises because NPV considers the ENTIRE cash flow lifetime (long-term value), while Payback only considers how fast the initial investment is recovered (short-term liquidity/risk).',
            'On the PMP exam, unless the question specifically emphasizes cash-flow urgency or liquidity risk, NPV is generally treated as the more complete/preferred financial measure because it accounts for the full value and time value of money.',
          ],
          answer: 'NPV favors Beta; Payback favors Alpha. NPV is typically the preferred overall selection metric on the exam.',
        },
      ],
      practiceQuestions: {
        easy: [
          { q: 'Which document is created first: the business case or the project charter?', answer: 'Business case', solution: 'The business case justifies the investment; the charter formally authorizes the project afterward.' },
          { q: 'True or False: A higher IRR is generally better when comparing projects.', answer: 'True', solution: 'Higher IRR indicates a more attractive rate of return relative to the investment.' },
          { q: 'Numerical: A project costs $60,000 and returns $20,000/year. What is the Payback Period?', type: 'numerical', answer: '3 years', solution: 'Payback = 60,000 / 20,000 = 3 years.' },
        ],
        intermediate: [
          { q: 'Numerical: Calculate the BCR for a project with benefits of $180,000 and costs of $240,000. Should it proceed on financial grounds alone?', type: 'numerical', answer: 'BCR = 0.75; should NOT proceed on financial grounds alone', solution: 'BCR = 180,000 / 240,000 = 0.75. Since BCR < 1, costs exceed benefits.' },
          { q: 'Numerical: Project X has NPV $40,000 and Project Y has NPV -$5,000 (negative). Which should be selected, and what does a negative NPV mean in plain language?', type: 'numerical', answer: 'Select Project X; a negative NPV means the project is expected to destroy value (costs exceed the discounted value of benefits).', solution: 'Comparing $40,000 (positive) vs -$5,000 (negative) — X is clearly superior; a negative NPV project should typically be rejected on financial grounds.' },
          { q: 'A charter is being drafted, but the detailed day-by-day schedule keeps getting added to it by an overly detailed sponsor. Explain to the sponsor, in plain terms, why that level of detail doesn\'t belong in the charter.', answer: 'The charter is meant to be a high-level authorization document (purpose, objectives, high-level risks/milestones, and the PM\'s authority) created during Initiating; detailed day-by-day schedules are produced later during Planning, once scope and resources are better understood.', solution: 'Putting excessive detail in the charter risks locking in assumptions before proper planning analysis is done.' },
        ],
        challenging: [
          { q: 'Numerical: A company can only fund ONE of three projects this year due to budget constraints. Project A: cost $100,000, NPV $30,000, Payback 2 years. Project B: cost $150,000, NPV $55,000, Payback 4 years. Project C: cost $80,000, NPV $22,000, Payback 1.5 years. Calculate the BCR-equivalent "NPV per dollar invested" (NPV / Cost) for each, and recommend which project maximizes value per dollar spent.', type: 'numerical', answer: 'A: 0.30, B: 0.367, C: 0.275 — Project B maximizes NPV per dollar invested.', solution: 'A: 30,000/100,000 = 0.30. B: 55,000/150,000 = 0.3667. C: 22,000/80,000 = 0.275. Project B has the highest ratio (≈36.7%), meaning it generates the most value per dollar of investment, even though it has the longest payback — illustrating that Payback Period alone can be a misleading sole criterion.' },
          { q: 'Numerical: A project has a 2-year Payback Period and an NPV of $12,000, but a competing project has a 2-year Payback Period and NPV of $45,000. Since Payback Period is IDENTICAL, is Payback Period a useful tiebreaker here? What should the decision-maker use instead, and what does this reveal about a key limitation of the Payback Period method?', answer: 'Payback Period is NOT a useful tiebreaker here since both are equal; NPV should be used instead, favoring the $45,000 project.', solution: 'This reveals a core limitation of Payback Period: it ignores the total value/profitability generated AFTER the payback point and ignores the time value of money — two projects can have identical payback periods but wildly different total value.' },
        ],
      },
      interviewPrep: [
        { q: 'How would you justify a project financially to a skeptical executive?', a: 'Reference concrete financial selection methods: NPV (total discounted value), Payback Period (how fast we recover investment), IRR (rate of return), and BCR (value per dollar spent) — and explain you\'d present multiple metrics together since each reveals a different risk/value dimension.' },
        { q: 'Walk me through the difference between a business case and a project charter.', a: 'Business case = the economic justification and go/no-go analysis, created BEFORE authorization. Project charter = the formal authorization document that names the PM and grants authority, created immediately after the business case is approved.' },
        { q: 'Tell me about a time you had to choose between two good project options with limited budget.', a: 'STAR example referencing at least two selection methods (e.g., NPV and Payback), explaining the trade-off you weighed (long-term value vs. faster capital recovery) and the reasoning behind your final recommendation.' },
      ],
    },
    {
      day: 6,
      title: 'Week 2 Test — Principles, Domains & Approaches',
      domain: 'FOUNDATIONS',
      minutes: 45,
      isTest: true,
      objectives: ['Assess retention of Week 2 concepts', 'Month 1 cumulative checkpoint'],
      intro: 'This test blends the philosophy of Week 2 (principles, domains, approach selection) with the numerical selection methods from Day 5. If the numerical questions feel shaky, redo the worked examples from Day 5 before moving into Week 3 — those formulas resurface constantly for the rest of the course.',
      sections: [
        { type: 'p', text: 'This test blends Week 1 and Week 2 material as a Month 1 checkpoint.' },
      ],
      keyTerms: [],
      quiz: [
        { q: 'PMBOK 7 replaced the process-based model with:', options: ['More knowledge areas', 'Principles and performance domains', 'A single methodology', 'Strict phase gates'], answer: 1, explain: 'PMBOK7 is built on 12 principles and 8 performance domains.' },
        { q: 'Adjusting the level of formality and process based on project size/risk is called:', options: ['Scope creep', 'Tailoring', 'Gold plating', 'Baselining'], answer: 1, explain: 'Tailoring adapts approach to context.' },
        { q: 'Which performance domain covers risk and ambiguity?', options: ['Delivery', 'Uncertainty', 'Measurement', 'Team'], answer: 1, explain: 'The Uncertainty domain covers risk/ambiguity management.' },
        { q: 'Evolving requirements with a need for frequent feedback point toward:', options: ['Predictive', 'Agile', 'No methodology', 'Pure waterfall'], answer: 1, explain: 'Agile fits evolving requirements and frequent feedback needs.' },
        { q: 'The business case is typically created:', options: ['After the charter', 'After project closure', 'Before the project charter, to justify investment', 'During execution only'], answer: 2, explain: 'The business case justifies the investment before formal authorization.' },
        { q: 'Which selection method looks for the discount rate where NPV equals zero?', options: ['Payback Period', 'IRR', 'BCR', 'ROI'], answer: 1, explain: 'IRR is the rate where NPV = 0.' },
        { q: 'A project charter should include all of the following EXCEPT:', options: ['High-level risks', 'Assigned PM and authority level', 'Detailed day-by-day task schedule', 'Summary milestones'], answer: 2, explain: 'Detailed schedules come later in Planning, not the charter.' },
      ],
    },
  ],
};

// ---------- Roadmap-only weeks (Weeks 3-16) — metadata now, full content added incrementally ----------
const roadmapWeeks = [
  { week: 3, month: 1, title: 'Business Environment & Compliance', blurb: 'External factors, compliance, benefits management, project selection deep dive.' },
  { week: 4, month: 1, title: 'Stakeholder Engagement Deep Dive + Month 1 Test', blurb: 'Engagement strategies, communication styles, Month 1 cumulative exam.' },
  { week: 5, month: 2, title: 'Team Domain — Leadership & Conflict', blurb: 'Team formation (Tuckman), leadership styles, servant leadership, conflict resolution.' },
  { week: 6, month: 2, title: 'Scope & Schedule Planning (Predictive Tools)', blurb: 'WBS, network diagrams, critical path method, dependencies.' },
  { week: 7, month: 2, title: 'Cost, Quality, Risk Planning & EVM Formulas', blurb: 'Budgeting, quality tools, risk register, Earned Value Management formulas.' },
  { week: 8, month: 2, title: 'Communications & Procurement + Month 2 Test', blurb: 'Communication models/channels, contract types, Month 2 cumulative exam.' },
  { week: 9, month: 3, title: 'Agile Fundamentals — Scrum, Kanban, XP', blurb: 'Roles, ceremonies, artifacts across major agile frameworks.' },
  { week: 10, month: 3, title: 'Agile Planning — Stories, Backlog, Velocity', blurb: 'User stories, backlog refinement, estimation, velocity, burndown/burnup charts.' },
  { week: 11, month: 3, title: 'Process Domain Deep Dive (ECO Tasks)', blurb: 'Execution, monitoring & controlling tasks mapped to the PMP Exam Content Outline.' },
  { week: 12, month: 3, title: 'Hybrid & Tailoring + Month 3 Test', blurb: 'Blending approaches, tailoring frameworks, Month 3 cumulative exam.' },
  { week: 13, month: 4, title: 'Formula & People-Domain Recap', blurb: 'EVM/PERT/communication-channel formula drills, full People domain recap.' },
  { week: 14, month: 4, title: 'Process & Business Environment Recap', blurb: 'Full recap of Process and Business Environment domains.' },
  { week: 15, month: 4, title: 'Full-Length Mock Exam 1', blurb: '180-question simulated exam + detailed review of every wrong answer.' },
  { week: 16, month: 4, title: 'Full-Length Mock Exam 2 & Exam Strategy', blurb: 'Second mock exam, final weak-area review, exam-day strategy and logistics.' },
];

export const curriculum = [week1, week2, ...roadmapWeeks];

export const totalWeeks = 16;
export const totalMonths = 4;
