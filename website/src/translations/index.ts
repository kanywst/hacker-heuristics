export const translations = {
  en: {
    hero: {
      tagLabel: 'The Code of Engineering',
      title: 'Hammurabi',
      subtitle: 'Laws Every Engineer Should Know',
      lede: 'Laws that govern systems, teams, and decisions — each paired with its counter-force, a field guideline, and a primary source. Named for the first written code of laws.',
      ctaPrimary: 'Read the Codex',
      ctaSecondary: 'Source',
    },
    nav: {
      principles: 'The Laws',
      about: 'Epilogue',
      github: 'GitHub',
    },
    ui: {
      laws: 'The Laws',
      counter: 'Counter',
      quoteOpen: '“',
      quoteClose: '”',
      prologueLabel: 'Prologue',
      prologueQuote:
        '“…to bring about the rule of righteousness in the land, so that the strong should not harm the weak.”',
      prologueQuoteBy: '— The Code of Hammurabi, c. 1754 BCE',
      prologueBody:
        'Hammurabi did not invent justice; he wrote it down, numbered it, and set it in stone where everyone could read the same law. This codex does that for engineering — the recurring forces that govern systems, teams, and decisions, carved as articles so they can be cited, argued, and amended, rather than rediscovered at 3 AM.',
      maxim:
        'Good engineering is not the avoidance of all risk, but the deliberate choice of which risks are worth taking.',
      maximBy: '— The Code',
      epilogueLabel: 'Epilogue',
      epilogueCurse:
        'Let the engineer who tears down a fence without learning why it stands, who turns a measure into a target, or who calls a hard problem easy — inherit the pager at 3 AM.',
      metaTitle: 'Hammurabi — Laws Every Engineer Should Know',
      filterAll: 'All',
      filterGroupLabel: 'Filter laws by category',
      searchPlaceholder: 'Search the codex',
      resultsNone: 'No law matches your search.',
      copyLink: 'Copy link',
      backToTop: 'Back to top',
    },
    heuristics: [
      {
        title: 'Type 1 vs Type 2 Decisions',
        tag: 'Decision',
        mechanism:
          'The brain instinctively treats all failures as threats, demanding excessive caution for reversible decisions (two-way doors).',
        counter: "The 'One-Way Door' Filter.",
        guideline:
          "If a decision is easily reversible, ship within 24 hours. Only spend weeks on irreversible 'one-way doors'.",
        source: 'Jeff Bezos, Amazon Shareholder Letter (1997)',
      },
      {
        title: 'Normalization of Deviance',
        tag: 'Safety',
        mechanism:
          "When a minor rule is broken and no disaster occurs, the brain re-classifies deviance as 'normal'.",
        counter: 'Broken Windows Theory.',
        guideline:
          "Do not say 'it worked before' to skip investigation. Fix hacks or document them as high-priority debt.",
        source: 'Diane Vaughan, The Challenger Launch Decision (1996)',
      },
      {
        title: "Chesterton's Fence",
        tag: 'Systems',
        mechanism:
          "The ego jumps to 'simplify' by deleting legacy code/rules it doesn't immediately understand.",
        counter: "Balance with YAGNI (You Ain't Gonna Need It).",
        guideline:
          'You are forbidden from removing a fence until you can explain exactly why it was put there.',
        source: 'G. K. Chesterton, The Thing (1929)',
      },
      {
        title: 'Normalcy Bias',
        tag: 'Cognition',
        mechanism:
          "In a crisis, the brain defaults to the most frequent explanation. 'It's just a transient error' as systems fail.",
        counter: 'Pre-mortem / Red Teaming.',
        guideline:
          "Ask: 'If this were the start of a total collapse, what would the next 10 minutes look like?'",
        source: 'Amanda Ripley, The Unthinkable (2008)',
      },
      {
        title: 'Law of Triviality',
        tag: 'Organization',
        mechanism:
          'People provide more feedback on simple things (naming) than complex ones because everyone understands them.',
        counter: 'Core Value Focus.',
        guideline:
          'If a review spends 80% on style, approve immediately and move to automated linter configs.',
        source: "C. Northcote Parkinson, Parkinson's Law (1957)",
      },
      {
        title: "Gall's Law",
        tag: 'Systems',
        mechanism:
          'The delusion that complex systems can be designed top-down from scratch. They are too chaotic.',
        counter: 'The MVP (Minimum Viable Product).',
        guideline:
          "A complex system that works evolved from a simple system that worked. Start with a working 'Hello World'.",
        source: 'John Gall, Systemantics (1975)',
      },
      {
        title: "Conway's Law",
        tag: 'Organization',
        mechanism:
          "Software architecture is a map of the org chart. If teams don't talk, their services won't integrate.",
        counter: 'Inverse Conway Maneuver.',
        guideline:
          'To get a modular architecture, create independent teams first. Do not fight the org chart with code.',
        source: 'Melvin E. Conway, Datamation (1968)',
      },
      {
        title: "Hyrum's Law",
        tag: 'Systems',
        mechanism:
          'With enough users, every observable behavior (even bugs) will be depended on by someone.',
        counter: 'Chaos Engineering.',
        guideline:
          'Assume every change is breaking once you have users. Use strict versioning and feature flags.',
        source:
          'Hyrum Wright, hyrumslaw.com; Software Engineering at Google (2020)',
      },
      {
        title: "Brooks' Law",
        tag: 'Organization',
        mechanism:
          'Adding people to a late project explodes communication channels quadratically (n(n-1)/2). New people drain veterans.',
        counter: 'Scope Cutting.',
        guideline:
          'If a project is late, do not add people. Remove features or push the date.',
        source: 'Fred Brooks, The Mythical Man-Month (1975)',
      },
      {
        title: 'The XY Problem',
        tag: 'Cognition',
        mechanism:
          'Users get stuck on a solution (Y) and ask for help with it, forgetting the original problem (X).',
        counter: 'Five Whys.',
        guideline:
          "When someone asks 'How do I do Y?', always reply 'What are you trying to achieve with Y?'",
        source: 'Perl & sysadmin folklore; xyproblem.info',
      },
      {
        title: "Postel's Law",
        tag: 'Distributed Systems',
        mechanism:
          'Assuming everyone follows the spec perfectly leads to brittle failures in distributed systems.',
        counter: 'Fail-Fast (Internal only).',
        guideline:
          'Be conservative in what you send and liberal in what you accept.',
        source: 'Jon Postel, RFC 760 / RFC 793 (1980–81)',
      },
      {
        title: "Hanlon's Razor",
        tag: 'Organization',
        mechanism:
          "Assuming malice or sabotage for bugs/delays when it's usually just lack of sleep or context.",
        counter: 'Psychological Safety.',
        guideline:
          'Never attribute to malice what is adequately explained by lack of context. Debug the system.',
        source: "Robert J. Hanlon, Murphy's Law Book Two (1980)",
      },
      {
        title: "Hofstadter's Law",
        tag: 'Estimation',
        mechanism:
          "It always takes longer than you expect, even when you take into account Hofstadter's Law.",
        counter: 'Evidence-Based Scheduling.',
        guideline:
          'Double your most conservative estimate, then add 20%. Expect to be wrong.',
        source: 'Douglas Hofstadter, Gödel, Escher, Bach (1979)',
      },
      {
        title: "Goodhart's Law",
        tag: 'Incentives',
        mechanism:
          "When a measure becomes a target, it ceases to be a good measure. Rewards for 'commits' create junk commits.",
        counter: 'Balanced Scorecards.',
        guideline:
          'Never use a single metric to judge performance. Observe outputs, not proxies.',
        source: 'Charles Goodhart (1975); Marilyn Strathern (1997)',
      },
      {
        title: 'Lindy Effect',
        tag: 'Systems',
        mechanism:
          'For non-perishables like software, the longer it has survived, the longer it is likely to survive.',
        counter: 'Hype Cycle Analysis.',
        guideline:
          'If you need stability for 10 years, choose a technology that has already been around for 10 years.',
        source: 'Benoit Mandelbrot; Nassim Taleb, Antifragile (2012)',
      },
      {
        title: 'Sunk Cost Fallacy',
        tag: 'Decision',
        mechanism:
          "Continuing to invest in failing projects because 'we've already spent so much.' The brain hates loss.",
        counter: 'Zero-Based Budgeting.',
        guideline:
          "Ask: 'If we started today with zero investment, would we choose this path?' If no, kill it.",
        source: 'Hal R. Arkes & Catherine Blumer (1985)',
      },
      {
        title: 'Cargo Cult Engineering',
        tag: 'Cognition',
        mechanism:
          "Copying practices of successful companies (Spotify Model) without understanding the 'why'.",
        counter: 'First Principles Thinking.',
        guideline:
          'Adopt a tool because you have the exact problem it solves, not because Google uses it.',
        source: 'Richard P. Feynman, Cargo Cult Science (1974)',
      },
      {
        title: "Amdahl's Law",
        tag: 'Performance',
        mechanism:
          'Optimizing a part has no impact if the bottleneck is elsewhere. Resource waste.',
        counter: 'Theory of Constraints.',
        guideline:
          'Find the 1% of code that takes 90% of time. Only optimize that. Ignore the rest.',
        source: 'Gene Amdahl, AFIPS (1967)',
      },
      {
        title: 'Leaky Abstractions',
        tag: 'Systems',
        mechanism:
          "All non-trivial abstractions leak. You can't use SQL without understanding indexes eventually.",
        counter: 'T-Shaped Skills.',
        guideline:
          'Use abstractions to move fast, but ensure someone understands the layer beneath it.',
        source: 'Joel Spolsky, Joel on Software (2002)',
      },
      {
        title: 'Pareto Principle',
        tag: 'Decision',
        mechanism:
          '80% of bugs come from 20% of code. 80% of value comes from 20% of features.',
        counter: 'Ruthless Prioritization.',
        guideline:
          "Identify the 'Critical 20%' and give it 100% of your quality focus.",
        source: 'Vilfredo Pareto (1896); Joseph M. Juran (1951)',
      },
      {
        title: 'Survivorship Bias',
        tag: 'Cognition',
        mechanism:
          'We study only the successes that survived and draw conclusions, ignoring the silent graveyard of failures that used the same strategy.',
        counter: 'Failure Studies / Post-mortem Culture.',
        guideline:
          "Before adopting a strategy because 'Company X succeeded with it,' research how many failed using the same approach. The dead don't write blog posts.",
        source: 'Abraham Wald, SRG memo (1943)',
      },
      {
        title: "Kernighan's Law",
        tag: 'Maintainability',
        mechanism:
          '"Debugging is twice as hard as writing the code. If you write the cleverest code you can, you are by definition not smart enough to debug it."',
        counter: 'KISS (Keep It Simple, Stupid).',
        guideline:
          'Code cleverness is a liability, not an asset. Write code your future self, sleep-deprived at 3 AM, can still understand in 6 months.',
        source: 'Kernighan & Plauger, The Elements of Programming Style (1978)',
      },
      {
        title: 'The Cobra Effect',
        tag: 'Incentives',
        mechanism:
          'A solution designed to fix a problem creates a worse one. A bounty on cobras led people to breed cobras for the reward.',
        counter: 'Second-Order Effects Analysis.',
        guideline:
          "For every incentive, ask: 'If someone wanted to game this, how would they?' If you find a way, the design is wrong.",
        source: 'Horst Siebert, Der Kobra-Effekt (2001)',
      },
      {
        title: "Dunbar's Number",
        tag: 'Organization',
        mechanism:
          'Humans can maintain ~150 stable relationships. Teams larger than ~8 experience exponential communication breakdown.',
        counter: 'Two-Pizza Rule / Team Topologies.',
        guideline:
          "When a team exceeds 7±2 people, split it. If 'information-sharing meetings' multiply, you've exceeded the cognitive limit.",
        source: 'Robin I. M. Dunbar, J. Human Evolution (1992)',
      },
      {
        title: 'Worse is Better',
        tag: 'Systems',
        mechanism:
          "A simpler, 'inferior' design that is easy to implement and adopt will beat a theoretically 'correct' but complex one. Unix beat Lisp. HTTP beat CORBA.",
        counter: 'The Right Thing / Perfectionism.',
        guideline:
          'A solution 80% correct that ships today will outperform a 100% correct one that ships next year. Optimize for adoption, not elegance.',
        source: 'Richard P. Gabriel, Lisp: Good News, Bad News (1991)',
      },
      {
        title: "Cunningham's Law",
        tag: 'Organization',
        mechanism:
          '"The best way to get the right answer on the internet is not to ask a question; it\'s to post the wrong answer." People correct mistakes faster than they answer questions.',
        counter: 'Socratic Method.',
        guideline:
          "When docs are missing, post your best guess of how something works. The expert will appear to correct you faster than if you'd asked directly.",
        source: 'Ward Cunningham; named on Wikipedia (~2010)',
      },
      {
        title: 'Bystander Effect',
        tag: 'Organization',
        mechanism:
          "The more people present, the less likely any single person acts. 'Someone else will handle it.' A page to a group channel often means nobody responds.",
        counter: 'Explicit Role Assignment / Incident Commander.',
        guideline:
          'Never say "Can someone look at this?" Say "@name, you are investigating this." Assign a single, named owner for every incident.',
        source: 'John M. Darley & Bibb Latané, JPSP (1968)',
      },
      {
        title: "Murphy's Law",
        tag: 'Safety',
        mechanism:
          'Anything that can go wrong, will go wrong — given enough time, traffic, or unexpected input. Designing only for the happy path leaves a system one blip away from collapse.',
        counter: 'Defensive Design / Chaos Engineering.',
        guideline:
          'Treat every external dependency, retry, and timeout as something that will fail in production. Build the failure path before the success path.',
        source: 'Capt. Edward A. Murphy Jr., USAF MX981 (1949)',
      },
      {
        title: 'Boy Scout Rule',
        tag: 'Maintainability',
        mechanism:
          "Codebases decay because cleanup is always 'someone else's job.' Each engineer absorbs the entropy hit but defers the fix to a future refactor that never lands.",
        counter: 'Incremental Hygiene.',
        guideline:
          'Always leave the code cleaner than you found it. A one-line rename or a deleted dead branch is small enough for the same PR and bends the entropy curve over months.',
        source: 'Robert C. Martin, Clean Code (2008)',
      },
      {
        title: "Tesler's Law",
        tag: 'Systems',
        mechanism:
          'Every system has irreducible complexity that cannot be removed — only relocated. Hide it from the user and it lands on the developer; hide it from the developer and it lands on the customer at 3 AM.',
        counter: 'Honest Layering.',
        guideline:
          "When a 'simple API' feels too clean, ask: who absorbed the complexity I just removed? If you can't name them, you didn't simplify — you displaced.",
        source: 'Larry Tesler, Xerox PARC / Apple (~1984)',
      },
      {
        title: 'Dunning-Kruger Effect',
        tag: 'Cognition',
        mechanism:
          'Lacking expertise also means lacking the meta-skill to recognize incompetence. Novices over-claim; true experts under-claim, assuming others share their understanding.',
        counter: 'Calibrated Confidence.',
        guideline:
          'When someone declares a hard problem "easy," check their domain history before trusting the estimate. Weight the quiet veteran over the confident newcomer.',
        source: 'Justin Kruger & David Dunning, JPSP (1999)',
      },
      {
        title: 'Curse of Knowledge',
        tag: 'Cognition',
        mechanism:
          'Once you know a thing, you cannot easily imagine not knowing it. Docs, error messages, and APIs become obvious to the author and opaque to the next reader.',
        counter: 'User Testing / Onboarding Buddies.',
        guideline:
          'Before shipping docs or an API, have someone unfamiliar attempt the task while you watch silently. Their confusion maps the assumptions you forgot to spell out.',
        source: 'Camerer, Loewenstein & Weber, JPE (1989)',
      },
      {
        title: 'Swiss Cheese Model',
        tag: 'Safety',
        mechanism:
          'Every protective layer has holes. Accidents happen when holes across independent layers happen to align. No single layer is ever sufficient.',
        counter: 'Defense in Depth.',
        guideline:
          'In an incident review, do not stop at the one thing that failed. Enumerate every layer that should have caught it and ask why each hole was open at the same moment.',
        source: 'James Reason, Human Error (1990)',
      },
      {
        title: 'Premature Optimization',
        tag: 'Performance',
        mechanism:
          '"Premature optimization is the root of all evil." Optimizing before measurement wastes hours and entangles hot and cold paths, obstructing the real fix.',
        counter: 'Profile First.',
        guideline:
          'Write the obvious code first. Only optimize hot paths that a profiler proves are bottlenecks. Keep the other 97% simple for the next maintainer.',
        source: 'Donald E. Knuth, Computing Surveys (1974)',
      },
      {
        title: "Linus's Law",
        tag: 'Maintainability',
        mechanism:
          '"Given enough eyeballs, all bugs are shallow." Defects invisible to one mind become trivial under many independent perspectives — if the code is actually visible.',
        counter: 'Rotated Reviewers / Bug Bounties.',
        guideline:
          'If a bug class keeps slipping through, do not assign the same reviewers more carefully — expose the code to differently-shaped eyes. Rotate, open up, bounty.',
        source: 'Eric S. Raymond, The Cathedral and the Bazaar (1999)',
      },
      {
        title: 'CAP Theorem',
        tag: 'Distributed Systems',
        mechanism:
          'A networked store cannot simultaneously guarantee Consistency, Availability, and Partition tolerance. Partitions are not optional, so you are really choosing C or A when one strikes.',
        counter: 'PACELC / Tunable Consistency.',
        guideline:
          'Decide before an outage whether each operation prefers consistency or availability. The partition will happen; the only question is what your system does when it does.',
        source:
          'Eric Brewer, PODC keynote (2000); proved by Gilbert & Lynch (2002)',
      },
      {
        title: "Little's Law",
        tag: 'Performance',
        mechanism:
          'In any stable system, items-in-system (L) equals arrival rate (λ) times time-in-system (W): L = λW. It holds regardless of arrival distribution or service order.',
        counter: 'Backpressure / Admission Control.',
        guideline:
          'To cut latency without adding capacity, cut work-in-progress. Cap concurrent requests — a shorter queue is faster than a faster server.',
        source: 'John D. C. Little, Operations Research (1961)',
      },
      {
        title: 'Two Generals Problem',
        tag: 'Distributed Systems',
        mechanism:
          'Two parties on an unreliable channel can never be certain they agree — every message needs an ack, which needs an ack, forever. No fixed exchange guarantees common knowledge.',
        counter: 'Idempotency / Eventual Consistency.',
        guideline:
          'Never assume "I sent it, so they got it." Make every cross-network action safely retryable and idempotent, and reconcile state instead of trusting one round-trip.',
        source:
          'Akkoyunlu, Ekanadham & Huber (1975); framed by Jim Gray (1978)',
      },
      {
        title: 'Peter Principle',
        tag: 'Organization',
        mechanism:
          'People are promoted on performance in their current role, not the next one. So everyone rises until they reach a role they are bad at — and there they stay.',
        counter: 'Dual Career Ladders.',
        guideline:
          'Do not promote your best engineer into management as a reward. Offer a technical ladder, and evaluate candidates for the role above, not the one they already mastered.',
        source: 'Laurence J. Peter & Raymond Hull, The Peter Principle (1969)',
      },
      {
        title: "Parkinson's Law",
        tag: 'Organization',
        mechanism:
          '"Work expands so as to fill the time available for its completion." Give a task a week and it takes a week; the same task with a two-day deadline ships in two days.',
        counter: 'Timeboxing.',
        guideline:
          'Set deliberately short timeboxes for open-ended work and review at the deadline. A tight box forces the scoping decisions an open one defers forever.',
        source: 'C. Northcote Parkinson, The Economist (1955)',
      },
      {
        title: "Wirth's Law",
        tag: 'Performance',
        mechanism:
          '"Software is getting slower more rapidly than hardware is becoming faster." Each hardware gain is absorbed by added layers and features, so perceived speed stays flat.',
        counter: 'Performance Budgets.',
        guideline:
          'Treat the speed a faster machine buys you as a budget to protect, not a license to spend. Set a performance budget and fail the build when a release regresses against it.',
        source: 'Niklaus Wirth, A Plea for Lean Software (1995)',
      },
      {
        title: 'Ninety-Ninety Rule',
        tag: 'Estimation',
        mechanism:
          '"The first 90% of the code takes 90% of the time. The remaining 10% takes the other 90%." The visible work hides a second, equal body of integration and edge cases.',
        counter: 'Demo on Real Data.',
        guideline:
          'When something looks almost done, assume an entire second project remains: hardening, edge cases, integration. Schedule it, do not treat it as a rounding error.',
        source:
          'Tom Cargill (Bell Labs); Jon Bentley, Programming Pearls (1985)',
      },
      {
        title: "Eagleson's Law",
        tag: 'Maintainability',
        mechanism:
          'Any code you have not looked at for six months might as well have been written by someone else. Your mental model evaporates far faster than the code does.',
        counter: 'ADRs / Self-Explaining Code.',
        guideline:
          'Write code and commit messages for the stranger you will become in six months. If a decision is not obvious from the code, record the why — not in your head.',
        source: 'Programming folklore attributed to Peter Eagleson',
      },
      {
        title: "Hick's Law",
        tag: 'Interaction',
        mechanism:
          'Decision time grows logarithmically with the number of choices: T = b·log₂(n+1). More options do not just clutter — they measurably slow every user down.',
        counter: 'Progressive Disclosure / Defaults.',
        guideline:
          'Cut the choices on any screen or API surface to the few that matter; push the rest behind sensible defaults. Fewer doors, faster decisions.',
        source: 'W. E. Hick (1952) & Ray Hyman (1953)',
      },
      {
        title: "Fitts's Law",
        tag: 'Interaction',
        mechanism:
          'Time to reach a target depends on its distance and size: far, small targets are slow and error-prone; near, large ones are fast. Pointing has a measurable cost.',
        counter: 'Edges & Corners / Frequency Sizing.',
        guideline:
          'Make frequent actions big and easy to hit; make rare or destructive ones small and far. Screen edges and corners are infinite targets — put primary actions there.',
        source: 'Paul M. Fitts, J. Experimental Psychology (1954)',
      },
      {
        title: "Miller's Law",
        tag: 'Cognition',
        mechanism:
          '"The Magical Number Seven, Plus or Minus Two." Working memory holds about seven chunks. Cross that and recall collapses — the brain drops items rather than slowing.',
        counter: 'Chunking / Information Hiding.',
        guideline:
          'Group related items into a handful of named chunks wherever a person must hold state in their head: arguments, form fields, menu groups, on-call steps.',
        source: 'George A. Miller, Psychological Review (1956)',
      },
      {
        title: 'Fallacies of Distributed Computing',
        tag: 'Distributed Systems',
        mechanism:
          'Newcomers to networked code silently assume the network is reliable, latency is zero, bandwidth is infinite, topology is stable, and transport is free — every one of which fails in production.',
        counter: 'Design for Failure.',
        guideline:
          'Before any cross-process call, name which of the eight assumptions you are making and give each an explicit timeout, retry, and failure path.',
        source: 'L. Peter Deutsch & James Gosling, Sun Microsystems (1994–97)',
      },
      {
        title: 'Ironies of Automation',
        tag: 'Safety',
        mechanism:
          'Automating the routine leaves humans only the rarest, hardest exceptions — while their manual skill atrophies from disuse, exactly when a failing system hands control back.',
        counter: 'Human-in-the-Loop Drills.',
        guideline:
          'Keep operators sharp with regular game-days and hands-on drills; design handoffs so a human takes over with context, not cold.',
        source: 'Lisanne Bainbridge, Automatica (1983)',
      },
      {
        title: 'Principle of Least Privilege',
        tag: 'Security',
        mechanism:
          'Every component granted more authority than it needs enlarges the blast radius of any bug or compromise and multiplies what an auditor must reason about.',
        counter: 'Psychological Acceptability.',
        guideline:
          'Default every process, service account, and token to deny; grant only the minimal scopes the job provably needs, and re-audit when the job changes.',
        source: 'Jerome Saltzer & Michael Schroeder, Proc. IEEE (1975)',
      },
      {
        title: "Kerckhoffs's Principle",
        tag: 'Security',
        mechanism:
          'A cryptosystem must stay secure even if everything about it except the key is public. Secrecy of the mechanism is brittle: algorithms leak, get reverse-engineered, and get reused.',
        counter: 'Defense in Depth.',
        guideline:
          'Assume the attacker has your source and design. Put all the secret in rotatable keys; never rely on a hidden algorithm to protect anything.',
        source: 'Auguste Kerckhoffs, Journal des sciences militaires (1883)',
      },
      {
        title: "Gustafson's Law",
        tag: 'Performance',
        mechanism:
          'For a fixed time budget, a bigger machine lets you solve a proportionally bigger problem, so the serial fraction shrinks with scale — speedup grows near-linearly, unlike Amdahl’s fixed-workload pessimism.',
        counter: "Amdahl's Law.",
        guideline:
          'Before buying more cores, ask whether the problem grows with the hardware. If the workload is fixed, use Amdahl; if it scales, Gustafson applies.',
        source: 'John L. Gustafson, Communications of the ACM (1988)',
      },
      {
        title: 'The Tail at Scale',
        tag: 'Distributed Systems',
        mechanism:
          'In a service that fans out to many components, rare per-node slowness (GC pauses, contention, a bad disk) is near-certain to hit some node on every request, so tail latency (p99) dominates the experience even when medians look fine.',
        counter: 'Redundancy Has a Price.',
        guideline:
          'Set SLOs on p99/p99.9, not the mean. Reach for tail-tolerance — hedged requests, micro-partitioning — rather than trying to make every node uniformly fast.',
        source: 'Jeffrey Dean & Luiz Barroso, Communications of the ACM (2013)',
      },
      {
        title: "Ashby's Law of Requisite Variety",
        tag: 'Systems',
        mechanism:
          'A controller can regulate a system only if it can match the variety of states that system throws at it — only variety can absorb variety. Under-powered control cannot cope with a rich environment.',
        counter: 'Constrain the Environment.',
        guideline:
          'When incidents keep escaping your alerts and runbooks, either add matching response capability or deliberately shrink the state space: fewer configs, stricter inputs.',
        source: 'W. Ross Ashby, An Introduction to Cybernetics (1956)',
      },
      {
        title: 'Law of Demeter',
        tag: 'Maintainability',
        mechanism:
          "An object that reaches through other objects' internals (a.getB().getC().doThing()) couples itself to the whole dependency chain, so a distant change ripples back and breaks it.",
        counter: 'Pragmatism over Dogma.',
        guideline:
          'Only call methods on your direct collaborators, your arguments, objects you create, and your own fields. If you are chaining getters, add a method to the object that owns the data.',
        source: 'Karl Lieberherr & Ian Holland, IEEE Software (1989)',
      },
      {
        title: 'Jevons Paradox',
        tag: 'Incentives',
        mechanism:
          'Making a resource cheaper to use per unit lowers its effective price and can raise total consumption instead of lowering it — the efficiency gain gets spent on more usage.',
        counter: 'Cap the Rebound.',
        guideline:
          'When you make something cheaper — compute, storage, an internal API — expect demand to balloon. Provision and budget for the rebound instead of assuming net savings.',
        source: 'William Stanley Jevons, The Coal Question (1865)',
      },
      {
        title: 'Normal Accident Theory',
        tag: 'Safety',
        mechanism:
          'In systems that are both interactively complex and tightly coupled, small independent failures interact in ways no designer foresaw and propagate faster than operators can intervene — accidents become structural, not bad luck.',
        counter: 'High-Reliability Organizations.',
        guideline:
          'Reduce coupling — buffers, timeouts, bulkheads, circuit breakers — and cut complexity before adding more safety interlocks, which themselves add interactions.',
        source: 'Charles Perrow, Normal Accidents (1984)',
      },
    ],
    footer: '© 2026 Hammurabi · Laws Every Engineer Should Know.',
  },
  jp: {
    hero: {
      tagLabel: 'エンジニアリングの法典',
      title: 'Hammurabi',
      subtitle: 'エンジニアが知るべき法則集',
      lede: 'システム・チーム・意思決定を支配する法則。各法則に「対抗力」「現場の指針」「一次資料の出典」を添えた。人類最古の成文法典に因んで。',
      ctaPrimary: 'コーデックスを読む',
      ctaSecondary: 'ソース',
    },
    nav: {
      principles: '法則',
      about: '結文',
      github: 'GitHub',
    },
    ui: {
      laws: '法則',
      counter: '対',
      quoteOpen: '「',
      quoteClose: '」',
      prologueLabel: '序',
      prologueQuote:
        '「…この地に正義を行き渡らせ、強き者が弱き者を虐げぬように。」',
      prologueQuoteBy: '— ハンムラビ法典、紀元前1754年頃',
      prologueBody:
        'ハンムラビは正義を発明したのではない。それを書き留め、番号を振り、誰もが同じ法を読める石に刻んだ。この法典は同じことをエンジニアリングに対して行う——システム・チーム・意思決定を支配する反復する力を、午前3時に再発見されるのではなく、引用し、議論し、改訂できるよう、条文として刻む。',
      maxim:
        '優れたエンジニアリングとは、すべてのリスクを避けることではない。どのリスクを取る価値があるかを、意図して選ぶことである。',
      maximBy: '— 法典より',
      epilogueLabel: '結',
      epilogueCurse:
        'なぜ柵が立つかを学ばずに引き倒す者、測定を目標へとすり替える者、難問を「簡単だ」と言い切る者——その者に午前3時のページャーを継がせよ。',
      metaTitle: 'Hammurabi — エンジニアが知るべき法則集',
      filterAll: 'すべて',
      filterGroupLabel: 'カテゴリで法則を絞り込む',
      searchPlaceholder: '法典を検索',
      resultsNone: '該当する法則がありません。',
      copyLink: 'リンクをコピー',
      backToTop: 'トップへ戻る',
    },
    heuristics: [
      {
        title: '意思決定の可逆性',
        tag: '意思決定',
        mechanism:
          '脳は生存本能的にすべての失敗を脅威と見なし、すぐに戻せる決定にも過剰な慎重さを求めてしまう。',
        counter: '「一方向のドア」フィルター。',
        guideline:
          '容易にやり直しができる決定なら24時間以内に実行せよ。数週間かけるのは不可逆な決定のみ。',
        source: 'Jeff Bezos『Amazon 株主への手紙』(1997)',
      },
      {
        title: '逸脱の常態化',
        tag: '安全工学',
        mechanism:
          '小さなルール違反をしても大惨事が起きない場合、脳はその逸脱を「正常」と再定義してしまう。',
        counter: '割れ窓理論。',
        guideline:
          '「以前も大丈夫だった」を理由に調査を省略するな。ハックを見つけたら即座に修正か記録を。',
        source: 'Diane Vaughan, The Challenger Launch Decision (1996)',
      },
      {
        title: 'チェスタトンの柵',
        tag: 'システム',
        mechanism:
          'エゴは理解できないものを「単純化」という名目で削除したがる。背景文脈の欠如による罠。',
        counter: 'YAGNIに対するバランス。',
        guideline:
          'その柵がなぜそこに立てられたか理由を完全に説明できるまで、壊してはならない。',
        source: 'G. K. Chesterton, The Thing (1929)',
      },
      {
        title: '正常性バイアス',
        tag: '認知',
        mechanism:
          '真の異常に直面しても、脳はエネルギー節約のため「いつものパターン」で解釈しようとする。',
        counter: 'プレモータム / レッドチーミング。',
        guideline:
          '「これがシステム全壊の始まりだとしたら？」を問え。その答えが恐ろしいなら今すぐ調査。',
        source: 'Amanda Ripley, The Unthinkable (2008)',
      },
      {
        title: 'パーキンソンの凡俗法則',
        tag: '組織',
        mechanism:
          '人は複雑なことより、誰でも理解できる単純なこと（命名等）に多くのフィードバックをしてしまう。',
        counter: 'コア・バリューへの集中。',
        guideline:
          'レビューの8割がスタイルに集中しているなら即承認し、自動化の設定に議論を移せ。',
        source: "C. Northcote Parkinson, Parkinson's Law (1957)",
      },
      {
        title: 'ガルの法則',
        tag: 'システム',
        mechanism:
          '複雑なシステムをゼロから設計できるという妄想。複雑系はトップダウンでは設計できない。',
        counter: 'MVP (実用最小限の製品)。',
        guideline:
          '機能している複雑系は、例外なく単純な系から進化したものである。最小単位から始めよ。',
        source: 'John Gall, Systemantics (1975)',
      },
      {
        title: 'コンウェイの法則',
        tag: '組織',
        mechanism:
          'ソフトウェア構造は組織図の写し鏡になる。チームが会話しなければ統合もスムーズにいかない。',
        counter: '逆コンウェイ戦略。',
        guideline:
          'モジュール化された構造が欲しいなら、先に独立したチームを作れ。コードで組織に抗うな。',
        source: 'Melvin E. Conway, Datamation (1968 年)',
      },
      {
        title: 'ハイラムの法則',
        tag: 'システム',
        mechanism:
          'ユーザー数が増えれば、システムの観測可能なあらゆる挙動は誰かの依存対象になる。',
        counter: 'カオスエンジニアリング。',
        guideline:
          'ユーザーがいる限り内部実装は存在しない。すべての変更は破壊的であると想定せよ。',
        source: 'Hyrum Wright; Software Engineering at Google (2020)',
      },
      {
        title: 'ブルックスの法則',
        tag: '組織',
        mechanism:
          '遅れているプロジェクトに人を追加すると、通信路が二次関数的に爆発する (n 人で n(n-1)/2 本)。新人はベテランの手を止め、貢献より損失が上回る。',
        counter: 'スコープ削減。',
        guideline:
          'プロジェクトが遅れているなら人を増やすな。機能を削るか、期限を延ばせ。',
        source: 'Fred Brooks『人月の神話』(1975)',
      },
      {
        title: 'XY問題',
        tag: '認知',
        mechanism:
          '解決策（Y）で詰まったとき、本来の目的（X）を忘れ、Yの方法を質問してしまう。',
        counter: 'なぜなぜ分析。',
        guideline:
          '「どうやってYをすればいいか？」には、「Yで何を達成したいのか？」と問い返せ。',
        source: 'Perl / sysadmin コミュニティの口承; xyproblem.info',
      },
      {
        title: 'ポステルの法則',
        tag: '分散システム',
        mechanism:
          '全員が仕様を完璧に守ると想定すると、分散システムでは脆い失敗を招く。',
        counter: 'フェイルファスト (内部限定)。',
        guideline:
          '送るものには厳格に、受け取るものには寛容に。不完全な入力も優雅に処理せよ。',
        source: 'Jon Postel, RFC 760 / RFC 793 (1980–81)',
      },
      {
        title: 'ハンロンの剃刀',
        tag: '組織',
        mechanism:
          'バグや遅延を悪意と受け取ってしまうが、実際には単なる睡眠不足や文脈欠如であることが多い。',
        counter: '心理的安全性。',
        guideline:
          '無能や文脈欠如で説明がつくことに悪意を見出すな。人ではなくシステムをデバッグせよ。',
        source: "Robert J. Hanlon, Murphy's Law Book Two (1980)",
      },
      {
        title: 'ホフスタッターの法則',
        tag: '見積り',
        mechanism:
          'この法則を考慮しても常に予想以上の時間がかかる。脳は未知の未知を可視化できない。',
        counter: '実績ベースのスケジューリング。',
        guideline:
          '慎重な見積もりを2倍し、さらに20%加えよ。それでも外れることを覚悟せよ。',
        source: 'Douglas Hofstadter『ゲーデル、エッシャー、バッハ』(1979)',
      },
      {
        title: 'グッドハートの法則',
        tag: 'インセンティブ',
        mechanism:
          'ある指標が目標になると、それは良い指標ではなくなる。コミット数評価はゴミを量産する。',
        counter: 'バランスト・スコアカード。',
        guideline:
          '単一の指標で判断するな。代用指標ではなくシステムの「出力」を直接観察せよ。',
        source: 'Charles Goodhart (1975); Marilyn Strathern (1997)',
      },
      {
        title: 'リンディ効果',
        tag: 'システム',
        mechanism:
          '非腐敗的なものは、長く生き残ってきたものほど今後も長く生き残る可能性が高い。',
        counter: 'ハイプサイクル分析。',
        guideline:
          '10年間の安定を求めるなら、既に10年以上存在している技術（例：PostgreSQL）を選べ。',
        source: 'Benoit Mandelbrot; Nassim Taleb『Antifragile』(2012)',
      },
      {
        title: 'サンクコストの誤謬',
        tag: '意思決定',
        mechanism:
          '「既に投資したから」という理由で失敗に固執する。脳は負けを認めるのを嫌う。',
        counter: 'ゼロベース予算。',
        guideline:
          '「今日ゼロから始めるならこの道を選ぶか？」を問え。NOなら今すぐ捨てろ。',
        source: 'Hal R. Arkes & Catherine Blumer (1985)',
      },
      {
        title: 'カーゴ・カルト・エンジニアリング',
        tag: '認知',
        mechanism:
          '成功企業の慣行を、なぜ機能したか理解せずに真似る罠。形だけ真似ても結果は出ない。',
        counter: '第一原理思考。',
        guideline:
          'Googleが使っているからではなく、そのツールが解決する特定の問題が自分たちにあるから導入せよ。',
        source: 'Richard P. Feynman, Cargo Cult Science (1974)',
      },
      {
        title: 'アムダールの法則',
        tag: '性能',
        mechanism:
          'ボトルネックが他にある場合、一部を最適化しても全体性能には影響しない。リソースの浪費。',
        counter: '制約理論。',
        guideline:
          '実行時間の90%を占める1%のコードを見つけ、そこだけを最適化せよ。',
        source: 'Gene Amdahl, AFIPS (1967)',
      },
      {
        title: 'リーキー・アブストラクション',
        tag: 'システム',
        mechanism:
          'あらゆる抽象化はある程度「漏れる」。下の層を理解せずに使い続けることはできない。',
        counter: 'T型スキル。',
        guideline:
          '抽象化を利用して加速せよ。ただしチームに一人は下の層を理解する人間を置け。',
        source: 'Joel Spolsky, Joel on Software (2002)',
      },
      {
        title: 'パレートの法則',
        tag: '意思決定',
        mechanism:
          'バグの80%は20%のコードに、価値の80%は20%の機能に起因する。不平等の法則。',
        counter: '非情な優先順位付け。',
        guideline:
          '「重要な20%」を特定し、品質管理のリソースの100%をそこに集中させよ。',
        source: 'Vilfredo Pareto (1896); Joseph M. Juran (1951)',
      },
      {
        title: '生存者バイアス',
        tag: '認知',
        mechanism:
          '生き残った成功事例だけを研究し結論を導く。同じ戦略で消えた無数の失敗はデータとして見えない。',
        counter: '失敗学 / ポストモーテム文化。',
        guideline:
          '「X社がこの方法で成功した」を根拠にする前に、同じ方法で失敗した企業を調べよ。死者はブログ記事を書かない。',
        source: 'Abraham Wald, SRG メモ (1943)',
      },
      {
        title: 'カーニハンの法則',
        tag: '保守性',
        mechanism:
          '「デバッグはコードを書くときの2倍の知性を要する。最大限賢いコードを書いた時点で、デバッグする知性が定義上足りなくなる。」',
        counter: 'KISS (Keep It Simple, Stupid)。',
        guideline:
          'コードの「賢さ」は資産ではなく負債。6ヶ月後、午前3時に睡眠不足の自分がまだ理解できるコードを書け。',
        source: 'Kernighan & Plauger, The Elements of Programming Style (1978)',
      },
      {
        title: 'コブラ効果',
        tag: 'インセンティブ',
        mechanism:
          '問題解決の施策がかえって問題を悪化させる。コブラ駆除の懸賞金がコブラの養殖を誘発した。',
        counter: '二次効果分析。',
        guideline:
          'あらゆるインセンティブに「これを悪用するならどうする？」を問え。悪用できるなら設計が間違い。',
        source: 'Horst Siebert, Der Kobra-Effekt (2001)',
      },
      {
        title: 'ダンバー数',
        tag: '組織',
        mechanism:
          '人間の認知限界は約150の安定した関係。チームが約8人を超えるとコミュニケーションが指数関数的に崩壊。',
        counter: 'ツー・ピザ・ルール / チームトポロジー。',
        guideline:
          'チームが7±2人を超えたら分割せよ。「情報共有ミーティング」の増殖は認知限界超過の兆候。',
        source: 'Robin I. M. Dunbar, J. Human Evolution (1992)',
      },
      {
        title: '劣っている方が勝つ',
        tag: 'システム',
        mechanism:
          '単純で「不完全」だが実装容易な設計が、理論的に「正しい」複雑な設計に勝つ。UnixはLispに、HTTPはCORBAに勝った。',
        counter: 'The Right Thing / 完璧主義。',
        guideline:
          '80%正しくて今日リリースできるものは、100%正しくて来年のものに勝つ。普及を最適化せよ。',
        source: 'Richard P. Gabriel, Lisp: Good News, Bad News (1991)',
      },
      {
        title: 'カニンガムの法則',
        tag: '組織',
        mechanism:
          '「正しい答えを得る最良の方法は質問ではなく間違った答えの投稿だ。」人は質問に答えるより間違いを訂正する動機が強い。',
        counter: 'ソクラテス式問答。',
        guideline:
          'ドキュメントがないなら「これはXだと思う」と書け。知る者が訂正してくれる確率は「これは何？」と聞くより遥かに高い。',
        source: 'Ward Cunningham; Wikipedia で命名 (~2010)',
      },
      {
        title: '傍観者効果',
        tag: '組織',
        mechanism:
          '居合わせる人数が多いほど個人が行動しない。「誰かが対応するだろう」で全員が見送る。グループアラートは無視される。',
        counter: '明示的な役割割り当て / インシデントコマンダー。',
        guideline:
          '「誰か見てますか？」は禁句。「@名前、あなたが調査してください」と名指しせよ。全インシデントに単一のオーナーを。',
        source: 'John M. Darley & Bibb Latané, JPSP (1968)',
      },
      {
        title: 'マーフィーの法則',
        tag: '安全工学',
        mechanism:
          '「うまくいかない可能性があることは必ずうまくいかない。」十分な時間・トラフィック・想定外の入力があれば、潜在的な失敗モードはいずれ必ず発火する。',
        counter: '防御的設計 / カオスエンジニアリング。',
        guideline:
          '外部依存・リトライ・タイムアウトはすべて本番で必ず失敗するものとして扱え。成功パスより先に失敗パスを設計せよ。',
        source: 'Capt. Edward A. Murphy Jr., USAF MX981 (1949)',
      },
      {
        title: 'ボーイスカウトの規則',
        tag: '保守性',
        mechanism:
          'クリーンアップは常に「誰か別の人の仕事」になりがちで、コードベースは劣化していく。修正は「いつかのリファクタ」に先送りされ、それは結局来ない。',
        counter: '漸進的衛生管理。',
        guideline:
          'コードを来たときよりきれいにして去れ。同じ PR に含められる小さな改善でも、月単位で見ればエントロピー曲線を曲げる。',
        source: 'Robert C. Martin『Clean Code』(2008)',
      },
      {
        title: 'テスラーの複雑性保存則',
        tag: 'システム',
        mechanism:
          'あらゆるシステムには取り除けない本質的複雑性があり、それは消えず移動する。ユーザーから隠せば開発者へ、開発者から隠せば顧客へ、運用者から隠せば午前 3 時のオンコールに着地する。',
        counter: '誠実なレイヤリング。',
        guideline:
          '「シンプルな API」が綺麗すぎると感じたら問え——いま自分が消した複雑性を誰が吸収したのか? 答えられないならそれは簡素化ではなく転嫁である。',
        source: 'Larry Tesler, Xerox PARC / Apple (~1984)',
      },
      {
        title: 'ダニング・クルーガー効果',
        tag: '認知',
        mechanism:
          '専門性を欠くと「自分の無能さを認識するメタ能力」も欠ける。初心者は過信し、本当の熟達者は他人も自分と同じ理解を持つと仮定して過小評価する。',
        counter: '較正された自信。',
        guideline:
          '誰かが難問を「簡単」と断言したら、見積もりを信じる前にその分野の実績を確認せよ。寡黙な熟達者の声を、自信ある新参者より重く扱え。',
        source: 'Justin Kruger & David Dunning, JPSP (1999)',
      },
      {
        title: '知識の呪い',
        tag: '認知',
        mechanism:
          '一度知ってしまうと「知らなかった状態」を想像できなくなる。ドキュメント、エラーメッセージ、API は著者には自明、次に読む人には不透明になる。',
        counter: 'ユーザーテスト / オンボーディングバディ。',
        guideline:
          'ドキュメントや API を出荷する前に、未経験者にタスクを実行させ自分は黙って観察せよ。その混乱が、自分が言語化し忘れた前提を正確に指す。',
        source: 'Camerer, Loewenstein & Weber, JPE (1989)',
      },
      {
        title: 'スイスチーズモデル',
        tag: '安全工学',
        mechanism:
          'すべての防御層には穴がある。事故は独立した複数層の穴が偶然一直線に並んだ瞬間に起きる。単一層は決して十分でない。',
        counter: '多層防御。',
        guideline:
          'インシデント調査では「失敗した一つの要素」で止まるな。本来防げたはずの全層を列挙し、なぜ同時に穴が開いていたかを問え。',
        source: 'James Reason, Human Error (1990)',
      },
      {
        title: '早すぎる最適化',
        tag: '性能',
        mechanism:
          '「早すぎる最適化はあらゆる悪の根源」(Knuth)。計測前の最適化は時間を浪費し、ホットとコールドを絡め取って本来必要となる最適化を阻む複雑性を残す。',
        counter: 'プロファイル優先。',
        guideline:
          'まず素直なコードを書け。プロファイラがボトルネックと証明したホットパスのみを最適化せよ。残り 97% は次のメンテナーのために単純なまま保て。',
        source: 'Donald E. Knuth, Computing Surveys (1974)',
      },
      {
        title: 'リーナスの法則',
        tag: '保守性',
        mechanism:
          '「十分な目玉があれば、あらゆるバグは浅い」(Raymond)。一人には不可視の欠陥も、独立した多視点の前では自明になる——ただしコードが実際に見えていれば。',
        counter: 'レビュアーのローテーション / バグバウンティ。',
        guideline:
          'あるバグの型が漏れ続けるなら、同じ人に丁寧にレビューさせるのではなく、形の違う目を増やせ。ローテーション、公開、バウンティを使え。',
        source: 'Eric S. Raymond『The Cathedral and the Bazaar』(1999)',
      },
      {
        title: 'CAP定理',
        tag: '分散システム',
        mechanism:
          'ネットワーク化されたストアは、一貫性・可用性・分断耐性を同時には保証できない。分断は不可避なので、それが起きた瞬間に実質「一貫性か可用性か」を選ばされる。',
        counter: 'PACELC / 調整可能な一貫性。',
        guideline:
          '障害が起きる前に、各操作が一貫性と可用性のどちらを優先するか決めておけ。分断は必ず起きる。問われるのは「起きた時にシステムが何をするか」だけだ。',
        source:
          'Eric Brewer, PODC 基調講演 (2000); Gilbert & Lynch が証明 (2002)',
      },
      {
        title: 'リトルの法則',
        tag: '性能',
        mechanism:
          '安定したシステムでは、系内の項目数 (L) は到着率 (λ) と滞留時間 (W) の積に等しい: L = λW。到着分布やサービス順序に依らず成り立つ。',
        counter: 'バックプレッシャ / 流入制御。',
        guideline:
          '容量を増やさずレイテンシを下げたいなら、仕掛り (WIP) を減らせ。同時リクエスト数に上限を。短い行列は速いサーバより速い。',
        source: 'John D. C. Little, Operations Research (1961)',
      },
      {
        title: '二人の将軍問題',
        tag: '分散システム',
        mechanism:
          '不確実な通信路上の二者は、合意できたと確信できない。あらゆるメッセージは確認応答を要し、その応答もまた応答を要し、永遠に終わらない。',
        counter: 'べき等性 / 結果整合性。',
        guideline:
          '「送ったから届いた」と決して仮定するな。ネットワークを跨ぐ操作は再送安全かつべき等に設計し、一往復を信じず状態を突き合わせて整合させよ。',
        source: 'Akkoyunlu, Ekanadham & Huber (1975); Jim Gray が定式化 (1978)',
      },
      {
        title: 'ピーターの法則',
        tag: '組織',
        mechanism:
          '人は「次の職務」ではなく「現職の成績」で昇進する。だから誰もが不得手な職位に達するまで昇り、そこで留まる。有能は昇進で失われ、無能が堆積する。',
        counter: '専門職とマネジメントの複線キャリア。',
        guideline:
          '最高のエンジニアを褒美にマネジメントへ昇進させるな。技術職の梯子を用意し、達成済みの職務ではなく「一つ上の職務」への適性で評価せよ。',
        source: 'Laurence J. Peter & Raymond Hull, The Peter Principle (1969)',
      },
      {
        title: 'パーキンソンの法則',
        tag: '組織',
        mechanism:
          '「仕事は、それを完了するために与えられた時間を満たすまで膨張する」。一週間与えれば一週間かかり、同じ作業も締切が二日なら二日で片付く。',
        counter: 'タイムボックス。',
        guideline:
          '終わりの見えない作業には意図的に短いタイムボックスを切り、締切で見直せ。きつい箱は、緩い箱が永遠に先送りするスコープ判断を強制する。',
        source: 'C. Northcote Parkinson, The Economist (1955)',
      },
      {
        title: 'ヴィルトの法則',
        tag: '性能',
        mechanism:
          '「ソフトウェアはハードウェアが速くなるよりも速く遅くなる」。ハードの利得は層の追加と機能で吸収され、体感速度は横ばいか悪化する。',
        counter: 'パフォーマンスバジェット。',
        guideline:
          '速いマシンが買ってくれた速度は「使う許可」ではなく「守る予算」とみなせ。性能予算を設け、リリースが予算を割ったらビルドを失敗させよ。',
        source: 'Niklaus Wirth, A Plea for Lean Software (1995)',
      },
      {
        title: '90対90の法則',
        tag: '見積り',
        mechanism:
          '「最初の90%のコードが時間の90%を、残り10%のコードがもう90%を食う」。目に見える作業は、同じ大きさの統合・エッジケース・仕上げを隠している。',
        counter: '本番相当データでのデモ。',
        guideline:
          '「ほぼ完成」に見えたら、もう一つ丸ごとプロジェクトが残ると思え——堅牢化・エッジケース・統合。端数として無視せず明示的に見積もれ。',
        source:
          'Tom Cargill (Bell Labs); Jon Bentley, Programming Pearls (1985)',
      },
      {
        title: 'イーグルソンの法則',
        tag: '保守性',
        mechanism:
          '半年見ていない自分のコードは、他人が書いたも同然。コードそのものより遥かに速く、頭の中のメンタルモデルが蒸発する。文脈はソースに保存されない。',
        counter: 'ADR / 自己説明的なコード。',
        guideline:
          '半年後に他人と化す自分のために、コードとコミットメッセージを書け。コードから自明でない判断は「なぜ」を残せ——頭の中ではなく。',
        source: 'Peter Eagleson に帰される、プログラミングの口伝',
      },
      {
        title: 'ヒックの法則',
        tag: 'ヒューマンインタフェース',
        mechanism:
          '決定時間は選択肢の数の対数で増える: T = b·log₂(n+1)。選択肢の増加は見た目を散らかすだけでなく、全ユーザーを計測可能なほど遅くする。',
        counter: '段階的開示 / 既定値。',
        guideline:
          '画面や API 表面の選択肢を「効くものだけ」に削り、残りは妥当な既定値の裏へ。ドアが少ないほど決定は速い。',
        source: 'W. E. Hick (1952) & Ray Hyman (1953)',
      },
      {
        title: 'フィッツの法則',
        tag: 'ヒューマンインタフェース',
        mechanism:
          '対象に到達する時間は距離と大きさで決まる。遠く小さい対象は遅く誤りやすく、近く大きい対象は速い。ポインティングには計測可能なコストがある。',
        counter: '端と角の活用 / 頻度に応じたサイズ。',
        guideline:
          '頻用する操作は大きく当てやすく、稀・破壊的な操作は小さく遠くに。画面の端と角は無限大の的——主要操作はそこへ置け。',
        source: 'Paul M. Fitts, J. Experimental Psychology (1954)',
      },
      {
        title: 'ミラーの法則',
        tag: '認知',
        mechanism:
          '「マジカルナンバー 7 ± 2」。作業記憶が保持できるのは約7チャンク。それを超えると想起は崩壊する——脳は速度を落とさず項目を捨てる。',
        counter: 'チャンク化 / 情報隠蔽。',
        guideline:
          '人が頭の中で状態を保持せねばならない場所——引数・フォーム項目・メニュー群・オンコール手順——では、関連項目を少数の名前付きチャンクにまとめよ。',
        source: 'George A. Miller, Psychological Review (1956)',
      },
      {
        title: '分散コンピューティングの誤謬',
        tag: '分散システム',
        mechanism:
          'ネットワーク越しのコードに不慣れな者は、ネットワークは信頼でき、遅延はゼロ、帯域は無限、構成は不変で、転送コストはゼロだと暗黙に仮定する——そのどれもが本番では崩れる。',
        counter: '失敗前提の設計。',
        guideline:
          'プロセス間呼び出しの前に、8つの仮定のどれを置いているかを明示し、各々にタイムアウト・リトライ・失敗経路を与えよ。',
        source: 'L. Peter Deutsch & James Gosling, Sun Microsystems (1994–97)',
      },
      {
        title: '自動化の皮肉',
        tag: '安全工学',
        mechanism:
          '定型作業を自動化すると、人間には最も稀で難しい例外だけが残る——しかも使わぬ間に手作業の技能は衰える。システムが破綻して制御を返すのは、まさにその瞬間である。',
        counter: '人間参加型の訓練。',
        guideline:
          '定期的なゲームデーと実地訓練で運用者の勘を保て。引き継ぎは、文脈なく冷えた状態でなく、状況を保持したまま人が引き取れるよう設計せよ。',
        source: 'Lisanne Bainbridge, Automatica (1983)',
      },
      {
        title: '最小権限の原則',
        tag: 'セキュリティ',
        mechanism:
          '必要以上の権限を与えられた要素は、あらゆるバグや侵害の被害範囲を広げ、監査者が考慮すべき相互作用を増やす。',
        counter: '心理的受容性。',
        guideline:
          'すべてのプロセス・サービスアカウント・トークンを既定で拒否とし、職務が証明できる最小限の権限だけを与えよ。職務が変わったら権限を再監査せよ。',
        source: 'Jerome Saltzer & Michael Schroeder, Proc. IEEE (1975)',
      },
      {
        title: 'ケルクホフスの原理',
        tag: 'セキュリティ',
        mechanism:
          '暗号方式は、鍵以外のすべてが公開されても安全でなければならない。仕組みの秘匿は脆い——アルゴリズムは漏れ、解析され、使い回される。',
        counter: '多層防御。',
        guideline:
          '攻撃者は自分のソースと設計をすべて握っていると仮定せよ。秘密はすべて交換可能な鍵に置き、隠したアルゴリズムに防御を頼るな。',
        source: 'Auguste Kerckhoffs, Journal des sciences militaires (1883)',
      },
      {
        title: 'グスタフソンの法則',
        tag: '性能',
        mechanism:
          '時間の予算を固定すれば、大きな計算機はそれに比例して大きな問題を解ける。ゆえに規模とともに逐次部分の割合は縮み、速度向上はほぼ線形に伸びる——固定作業量を前提とするアムダールの悲観とは異なる。',
        counter: 'アムダールの法則。',
        guideline:
          'コアを増やす前に、問題がハードウェアとともに大きくなるかを問え。作業量が固定ならアムダール、規模とともに増えるならグスタフソンが効く。',
        source: 'John L. Gustafson, Communications of the ACM (1988)',
      },
      {
        title: 'スケールの裾野',
        tag: '分散システム',
        mechanism:
          '多数の要素へ扇状に処理を広げるサービスでは、ノード単位の稀な遅延（GC 停止・競合・不良ディスク）がほぼ毎リクエストどこかのノードで発生する。ゆえに中央値が良好に見えても、裾野のレイテンシ（p99）が体感を支配する。',
        counter: '冗長化には代償がある。',
        guideline:
          '平均ではなく p99／p99.9 で SLO を引け。すべてのノードを均一に速くしようとするより、ヘッジドリクエストやマイクロ分割といった裾野耐性の技法を用いよ。',
        source: 'Jeffrey Dean & Luiz Barroso, Communications of the ACM (2013)',
      },
      {
        title: 'アシュビーの必要多様性の法則',
        tag: 'システム',
        mechanism:
          '制御装置が系を調整できるのは、その系が生み出す状態の多様性に匹敵できる場合のみである——多様性のみが多様性を吸収する。力不足の制御は豊かな環境に対処できない。',
        counter: '環境そのものを制約する。',
        guideline:
          '障害がアラートや手順書を繰り返しすり抜けるなら、対応能力を多様性に見合うまで増やすか、設定を減らし入力を厳しくして系の状態空間を意図的に縮めよ。',
        source: 'W. Ross Ashby, An Introduction to Cybernetics (1956)',
      },
      {
        title: 'デメテルの法則',
        tag: '保守性',
        mechanism:
          '他オブジェクトの内部を辿って呼び出すコード（a.getB().getC().doThing()）は、依存の連鎖全体に自らを結びつける。ゆえに遠くの変更が波及して壊れる。',
        counter: '教条より実用。',
        guideline:
          '呼んでよいのは、直接の協力者・引数・自分が生成したもの・自分のフィールドのメソッドだけ。getter を数珠つなぎにしているなら、データを持つオブジェクト側にメソッドを足せ。',
        source: 'Karl Lieberherr & Ian Holland, IEEE Software (1989)',
      },
      {
        title: 'ジェヴォンズのパラドックス',
        tag: 'インセンティブ',
        mechanism:
          '資源の単位あたり利用を安くすると実効価格が下がり、総消費はむしろ増えうる——効率化で浮いた分が、さらなる利用に費やされる。',
        counter: '反動に上限を設ける。',
        guideline:
          '計算資源・ストレージ・社内 API など何かを安くしたら、需要が膨らむと見込め。純減を前提にせず、反動を織り込んで容量と予算を確保せよ。',
        source: 'William Stanley Jevons, The Coal Question (1865)',
      },
      {
        title: '通常事故理論',
        tag: '安全工学',
        mechanism:
          '相互作用的に複雑で、かつ密結合な系では、独立した小さな故障が設計者の予見しない形で相互作用し、運用者が介入するより速く伝播する——事故は不運ではなく構造的な性質となる。',
        counter: '高信頼性組織（HRO）。',
        guideline:
          'バッファ・タイムアウト・隔壁・サーキットブレーカで結合を緩め、複雑さを削れ。安全連動装置を足すのはその後だ——連動装置自体もまた相互作用を増やす。',
        source: 'Charles Perrow, Normal Accidents (1984)',
      },
    ],
    footer: '© 2026 Hammurabi · エンジニアが知るべき法則集。',
  },
};
