# Hammurabi: Laws Every Engineer Should Know

## 1. Type 1 vs Type 2 Decisions

- **Concept:** Reversibility of Decisions.
- **Mechanism:** The brain instinctively treats all failures as threats to survival, demanding excessive caution for reversible decisions (Two-way doors). This causes "Analysis Paralysis."
- **Counter:** **The "One-Way Door" Filter**.
- **Guideline:** If a decision is easily reversible (two-way door), ship within 24 hours to gain data. Only spend days/weeks on "one-way doors" (e.g., core database schema, security protocols).
- **Source:** Jeff Bezos, *1997 Amazon Shareholder Letter* — popularized in the 2015 letter as the "Type 1 / Type 2 decisions" framing.

## 2. Normalization of Deviance

- **Concept:** The erosion of safety standards.
- **Mechanism:** When a minor rule is broken (e.g., skipping a test) and no immediate disaster occurs, the brain re-classifies this "deviance" as "normal." This is how catastrophic failures begin.
- **Counter:** **Broken Windows Theory**.
- **Guideline:** If you see a "hack" or a bypassed alert, do not say "it worked before." Either fix it immediately or document it as high-priority technical debt.
- **Source:** Diane Vaughan, *The Challenger Launch Decision* (1996) — coined while analyzing the NASA Challenger disaster.

## 3. Chesterton's Fence

- **Concept:** Second-Order Thinking.
- **Mechanism:** We view legacy code/processes as "clutter" because we lack the context of their origin. The ego jumps to "simplify" by deleting what it doesn't understand.
- **Counter:** **YAGNI (You Ain't Gonna Need It)**.
- **Guideline:** You are forbidden from removing a "fence" (code/rule) until you can explain exactly why it was put there in the first place.
- **Source:** G. K. Chesterton, *The Thing* (1929) — the original parable of the fence in the road.

## 4. Normalcy Bias

- **Concept:** Crisis Denial.
- **Mechanism:** In the face of a true anomaly, the brain defaults to the most "frequent" explanation to save energy. "It's probably just a transient network error," we say as the database corrupts.
- **Counter:** **Pre-mortem / Red Teaming**.
- **Guideline:** When an error occurs, ask: "If this were the start of a total system collapse, what would the next 10 minutes look like?" If that scares you, investigate now.
- **Source:** Disaster psychology literature; widely surveyed in Amanda Ripley, *The Unthinkable* (2008).

## 5. Law of Triviality (Bike-Shedding)

- **Concept:** Cognitive Ease.
- **Mechanism:** People provide more feedback on simple things (naming variables) than complex things (distributed consensus) because everyone understands the simple things, creating a false sense of value.
- **Counter:** **Core Value Focus**.
- **Guideline:** If a PR review spends 80% of comments on style/naming, approve immediately and move the discussion to an automated linter config.
- **Source:** C. Northcote Parkinson, *Parkinson's Law: The Pursuit of Progress* (1957) — the original "bike-shed" committee parable.

## 6. Gall's Law

- **Concept:** Evolutionary Design.
- **Mechanism:** We believe we can "architect" a complex system from scratch. We can't. Complex systems are too chaotic to be designed top-down.
- **Counter:** **The MVP (Minimum Viable Product)**.
- **Guideline:** A complex system that works is invariably found to have evolved from a simple system that worked. Start with a working "Hello World" and evolve.
- **Source:** John Gall, *Systemantics: How Systems Really Work and How They Fail* (1975).

## 7. Conway's Law

- **Concept:** Mirroring.
- **Mechanism:** The software architecture is a map of the organizational chart. If two teams don't talk, their services won't integrate smoothly.
- **Counter:** **Inverse Conway Maneuver**.
- **Guideline:** If you want a modular architecture, create modular, independent teams first. Do not fight the org chart with code.
- **Source:** Melvin E. Conway, *How Do Committees Invent?* (Datamation, April 1968).

## 8. Hyrum's Law

- **Concept:** Implicit Contract.
- **Mechanism:** With a sufficient number of users, every observable behavior of your system (even bugs) will be depended on by someone.
- **Counter:** **Chaos Engineering**.
- **Guideline:** "Internal" doesn't exist once you have users. Assume every change is breaking. Use strict versioning and feature flags.
- **Source:** Hyrum Wright, *hyrumslaw.com*; canonicalized in *Software Engineering at Google* (Winters, Manshreck, Wright, 2020).

## 9. Brooks' Law

- **Concept:** Communication Debt.
- **Mechanism:** Adding people to a late project increases communication overhead quadratically (n(n-1)/2 communication channels for n people). New people take more time from veterans than they contribute.
- **Counter:** **Scope Cutting**.
- **Guideline:** If a project is late, do not add people. Remove features or push the date.
- **Source:** Fred Brooks, *The Mythical Man-Month* (1975, anniversary edition 1995).

## 10. The XY Problem

- **Concept:** Goal Misalignment.
- **Mechanism:** A user/engineer gets stuck on a solution (Y) and asks for help with it, forgetting that the original problem (X) might have a much simpler solution.
- **Counter:** **Five Whys**.
- **Guideline:** When someone asks "How do I do Y?", always reply "What are you trying to achieve with Y?"
- **Source:** Folklore from the Perl IRC and sysadmin communities; canonical write-up at *xyproblem.info*.

## 11. Postel's Law (Robustness Principle)

- **Concept:** Fault Tolerance.
- **Mechanism:** In a distributed system, assuming everyone follows the spec perfectly leads to brittle failures.
- **Counter:** **Fail-Fast (Internal only)**.
- **Guideline:** Be conservative in what you send (strict compliance) and liberal in what you accept (handle messy inputs gracefully).
- **Source:** Jon Postel, *RFC 760* (1980) and *RFC 793* (TCP, 1981).

## 12. Hanlon's Razor

- **Concept:** Attribution Bias.
- **Mechanism:** We take bugs/delays personally, assuming "malice" or "sabotage" when it's usually just lack of sleep or missing context.
- **Counter:** **Psychological Safety**.
- **Guideline:** Never attribute to malice that which is adequately explained by stupidity or lack of context. Focus on the system, not the person.
- **Source:** Robert J. Hanlon, contributed to *Murphy's Law Book Two* (Arthur Bloch, 1980).

## 13. Hofstadter's Law

- **Concept:** Recursive Estimation Bias.
- **Mechanism:** "It always takes longer than you expect, even when you take into account Hofstadter's Law." The brain cannot visualize unknown unknowns.
- **Counter:** **Evidence-Based Scheduling**.
- **Guideline:** Double your most conservative estimate, then add 20%. And expect to be wrong.
- **Source:** Douglas Hofstadter, *Gödel, Escher, Bach: an Eternal Golden Braid* (1979).

## 14. Goodhart's Law

- **Concept:** Metric Obsolescence.
- **Mechanism:** When a measure becomes a target, it ceases to be a good measure. If you reward "number of commits," people will make tiny, useless commits.
- **Counter:** **Balanced Scorecards**.
- **Guideline:** Never use a single metric to judge performance. Observe the system's output, not its proxies.
- **Source:** Charles Goodhart, *Problems of Monetary Management* (1975); reformulated by Marilyn Strathern (1997).

## 15. Lindy Effect

- **Concept:** Survivability.
- **Mechanism:** For non-perishable things like ideas or software, the longer they have survived, the longer they are likely to survive.
- **Counter:** **Hype Cycle Analysis**.
- **Guideline:** If you need a stable system for 10 years, choose a technology that has already been around for 10 years (e.g., PostgreSQL over a new NoSQL).
- **Source:** Coined by Albert Goldman (*New Republic*, 1964); formalized by Benoit Mandelbrot and popularized by Nassim Taleb, *Antifragile* (2012).

## 16. Sunk Cost Fallacy

- **Concept:** Loss Aversion.
- **Mechanism:** We continue investing in a failing tech stack/project because "we've already spent so much on it." The brain hates admitting a loss.
- **Counter:** **Zero-Based Budgeting**.
- **Guideline:** Ask: "If we started today with zero investment, would we choose this path?" If no, kill it.
- **Source:** Hal R. Arkes & Catherine Blumer, *The Psychology of Sunk Cost* (Organizational Behavior and Human Decision Processes, 1985).

## 17. Cargo Cult Engineering

- **Concept:** Surface Imitation.
- **Mechanism:** Copying the practices of successful companies (e.g., "The Spotify Model") without understanding *why* they worked there, hoping for the same results.
- **Counter:** **First Principles Thinking**.
- **Guideline:** Do not adopt a tool/process because Google uses it. Adopt it because you have the exact problem Google had at that scale.
- **Source:** Richard P. Feynman, *Cargo Cult Science* (Caltech commencement address, 1974).

## 18. Amdahl's Law

- **Concept:** Diminishing Returns.
- **Mechanism:** Optimizing a small part of a system has no impact if the bottleneck is elsewhere.
- **Counter:** **Theory of Constraints**.
- **Guideline:** Find the 1% of the code that takes 90% of the time. Only optimize that. Ignore the rest.
- **Source:** Gene Amdahl, *Validity of the Single Processor Approach to Achieving Large Scale Computing Capabilities* (AFIPS, 1967).

## 19. The Law of Leaky Abstractions

- **Concept:** Complexity Leakage.
- **Mechanism:** All non-trivial abstractions, to some degree, leak. You can't use SQL without understanding how indexes work eventually.
- **Counter:** **T-Shaped Skills**.
- **Guideline:** Use abstractions to move fast, but ensure at least one person on the team understands the layer beneath it.
- **Source:** Joel Spolsky, *The Law of Leaky Abstractions* (Joel on Software, 2002).

## 20. Pareto Principle (80/20 Rule)

- **Concept:** Distribution Inequality.
- **Mechanism:** 80% of bugs come from 20% of the code. 80% of value comes from 20% of the features.
- **Counter:** **Ruthless Prioritization**.
- **Guideline:** Identify the "Critical 20%" and give it 100% of your quality focus.
- **Source:** Vilfredo Pareto, *Cours d'Économie Politique* (1896); applied to quality engineering by Joseph M. Juran (*Quality Control Handbook*, 1951).

## 21. Survivorship Bias

- **Concept:** Invisible Failures.
- **Mechanism:** We study only the successes that survived and draw conclusions from them, ignoring the silent graveyard of failures that used the same strategy. The data we see is fundamentally skewed.
- **Counter:** **Failure Studies / Post-mortem Culture**.
- **Guideline:** Before adopting a strategy because "Company X succeeded with it," research how many companies failed using the same approach. The dead don't write blog posts.
- **Source:** Abraham Wald, *A Method of Estimating Plane Vulnerability* (SRG Memo, 1943) — the WWII bomber-armor analysis.

## 22. Kernighan's Law

- **Concept:** Complexity Debt.
- **Mechanism:** "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
- **Counter:** **KISS (Keep It Simple, Stupid)**.
- **Guideline:** Code "cleverness" is a liability, not an asset. Write code that your future self, sleep-deprived at 3 AM, can still understand in 6 months.
- **Source:** Brian W. Kernighan & P. J. Plauger, *The Elements of Programming Style*, 2nd ed. (1978).

## 23. The Cobra Effect

- **Concept:** Perverse Incentives.
- **Mechanism:** A solution designed to fix a problem creates a worse problem. In colonial India, a bounty on cobras led people to breed cobras for the reward. When the bounty was cancelled, breeders released their stock, making the problem worse.
- **Counter:** **Second-Order Effects Analysis / System Dynamics**.
- **Guideline:** For every incentive you create, ask: "If someone wanted to game this, how would they?" If you can find a way, the design is wrong.
- **Source:** Horst Siebert, *Der Kobra-Effekt: Wie man Irrwege der Wirtschaftspolitik vermeidet* (2001).

## 24. Dunbar's Number

- **Concept:** Cognitive Scaling Limit.
- **Mechanism:** Humans can maintain approximately 150 stable social relationships. Teams larger than ~8 people experience exponential communication breakdown because the brain cannot track that many working relationships.
- **Counter:** **Two-Pizza Rule / Team Topologies**.
- **Guideline:** When a team exceeds 7±2 people, split it. If "information-sharing meetings" start multiplying, that's the symptom of exceeding the cognitive limit.
- **Source:** Robin I. M. Dunbar, *Neocortex size as a constraint on group size in primates* (Journal of Human Evolution, 1992).

## 25. Worse is Better

- **Concept:** Pragmatic Design Philosophy.
- **Mechanism:** A simpler, "inferior" design that is easy to implement and adopt will beat a theoretically "correct" but complex design in the real world. Unix beat Lisp. HTTP beat CORBA.
- **Counter:** **The Right Thing / Perfectionism**.
- **Guideline:** A solution that is 80% correct and ships today will outperform a 100% correct solution that ships next year. Optimize for adoption, not elegance.
- **Source:** Richard P. Gabriel, *Lisp: Good News, Bad News, How to Win Big* (1991) — the "Worse is Better" essay.

## 26. Cunningham's Law

- **Concept:** Social Knowledge Extraction.
- **Mechanism:** "The best way to get the right answer on the internet is not to ask a question; it's to post the wrong answer." People are more motivated to correct mistakes than to answer questions.
- **Counter:** **Socratic Method**.
- **Guideline:** When documentation is missing, post your best guess of how something works. The person who knows the truth will appear to correct you far faster than if you had asked directly.
- **Source:** Attributed to Ward Cunningham (inventor of the wiki) by Steven McGeady; named in this form on Wikipedia (~2010).

## 27. Bystander Effect

- **Concept:** Diffusion of Responsibility.
- **Mechanism:** In an emergency, the more people who are present, the less likely any single person is to take action. "Someone else will handle it." In engineering, a page sent to a group channel often means nobody responds.
- **Counter:** **Explicit Role Assignment / Incident Commander**.
- **Guideline:** Never say "Can someone look at this?" Instead, say "@name, you are investigating this." Assign a single, named owner for every incident.
- **Source:** John M. Darley & Bibb Latané, *Bystander Intervention in Emergencies: Diffusion of Responsibility* (JPSP, 1968).

## 28. Murphy's Law

- **Concept:** Failure as a Default Assumption.
- **Mechanism:** "Anything that can go wrong, will go wrong." Given enough time, traffic, or unexpected input, every latent failure mode eventually fires. Engineers who design only for the happy path build systems that are one network blip away from collapse.
- **Counter:** **Defensive Design / Chaos Engineering**.
- **Guideline:** Treat every external dependency, retry, and timeout as something that *will* fail in production. Build the failure path before the success path.
- **Source:** Capt. Edward A. Murphy Jr., USAF Project MX981 (1949); popularized by Maj. John Paul Stapp.

## 29. The Boy Scout Rule

- **Concept:** Continuous Improvement.
- **Mechanism:** Codebases decay because cleanup is always "someone else's job." Each engineer absorbs the entropy hit but defers the fix to a future refactor that never lands. The graph trends down.
- **Counter:** **Incremental Hygiene / Opportunistic Refactoring**.
- **Guideline:** Always leave the code cleaner than you found it. A one-line rename, a clearer comment, a deleted dead branch — small enough to ship in the same PR, large enough to bend the entropy curve over months.
- **Source:** Adapted from a Boy Scouts of America campsite rule; applied to code in Robert C. Martin, *Clean Code* (2008).

## 30. Tesler's Law of Conservation of Complexity

- **Concept:** Complexity is a Conserved Quantity.
- **Mechanism:** Every system has an irreducible amount of complexity that cannot be removed — only relocated. Hide it from the user and it lands on the developer. Hide it from the developer and it lands on the operator. Hide it from the operator and it lands on the customer at 3 AM.
- **Counter:** **Honest Layering / Explicit Tradeoffs**.
- **Guideline:** When a "simple API" feels too clean, ask: who absorbed the complexity I just removed? If you can't name them, you didn't simplify — you displaced.
- **Source:** Larry Tesler, while at Xerox PARC / Apple (~1984); cited as the "Law of Conservation of Complexity."

## 31. Dunning-Kruger Effect

- **Concept:** Metacognitive Blind Spots.
- **Mechanism:** Lacking expertise in a domain also means lacking the meta-skill required to recognize one's own incompetence. Novices rate themselves at the same percentile as experts. True experts often *under*-rate themselves, because they assume others share their understanding.
- **Counter:** **Calibrated Confidence / Structured Skill Assessment**.
- **Guideline:** When someone declares a hard problem "easy," check their domain history before trusting the estimate. During scoping, pair confident newcomers with quiet veterans and weight the quiet voice.
- **Source:** Justin Kruger & David Dunning, *Unskilled and Unaware of It* (JPSP, 1999).

## 32. Curse of Knowledge

- **Concept:** Expert-Novice Asymmetry.
- **Mechanism:** Once you know a thing, you cannot easily imagine not knowing it. Engineers write docs, error messages, and APIs that are obvious to themselves and opaque to the next person who has to use them.
- **Counter:** **User Testing / Onboarding Buddies / Documentation Reviewers Outside the Author's Team**.
- **Guideline:** Before shipping documentation or a public API, have someone who has never touched the system attempt the task while you watch silently. Their confusion points exactly at the assumptions you forgot to spell out.
- **Source:** Colin Camerer, George Loewenstein & Martin Weber, *The Curse of Knowledge in Economic Settings: An Experimental Analysis* (Journal of Political Economy, 1989).

## 33. Swiss Cheese Model

- **Concept:** Layered Defense and Aligned Holes.
- **Mechanism:** Every protective layer (review, test, alert, runbook, rollback) has holes. Accidents happen when holes across multiple independent layers happen to align. No single layer can ever be perfect, so resilience comes from layers that fail in independent ways.
- **Counter:** **Defense in Depth / Independent Controls / Hole-Audit at Post-Mortem**.
- **Guideline:** During an incident review, do not stop at "the one thing that failed." Enumerate every layer that should have caught the failure and ask why each hole was open at exactly that moment. The fix is rarely a single layer; it's plugging the cheapest two.
- **Source:** James Reason, *Human Error* (Cambridge University Press, 1990).

## 34. Premature Optimization

- **Concept:** Misallocated Engineering Cost.
- **Mechanism:** "Premature optimization is the root of all evil." Optimizing code before measurement proves it matters wastes engineering hours, adds complexity, and obstructs the eventual real optimization by entangling hot and cold paths.
- **Counter:** **Profile First / Make It Work, Make It Right, Make It Fast (in that order)**.
- **Guideline:** Write the obvious code first. Only optimize hot paths that a profiler proves are bottlenecks. Leave the other 97% of the code simple — that's where the next maintainer will live.
- **Source:** Donald E. Knuth, *Structured Programming with go to Statements* (Computing Surveys, 1974).

## 35. Linus's Law

- **Concept:** Distributed Bug Detection.
- **Mechanism:** "Given enough eyeballs, all bugs are shallow." A defect that looks impossible to one person often becomes trivial when many independent perspectives are applied to it — provided the code is actually visible to those perspectives.
- **Counter:** **Open Source / Rotated Reviewers / Bug Bounties / Internal Code Discoverability**.
- **Guideline:** If the same class of bug keeps slipping through, the fix is not more careful review by the same people — it is exposing the code to more, differently-shaped eyes. Rotate reviewers, open up internal libraries, run bug bounties.
- **Source:** Eric S. Raymond, *The Cathedral and the Bazaar* (1999) — named for Linus Torvalds.

## 36. CAP Theorem

- **Concept:** Impossibility Under Partition.
- **Mechanism:** A networked data store cannot simultaneously guarantee **C**onsistency, **A**vailability, and **P**artition tolerance. Because network partitions are not optional in the real world, the live choice is really between consistency and availability *at the moment a partition happens*.
- **Counter:** **PACELC / Tunable Consistency**.
- **Guideline:** Decide *before* an outage whether each operation prefers consistency or availability. The partition will happen; the only question is what your system does when it does.
- **Source:** Eric Brewer, *Towards Robust Distributed Systems* (PODC keynote, 2000); proved by Seth Gilbert & Nancy Lynch (*SIGACT News*, 2002).

## 37. Little's Law

- **Concept:** Queueing Invariant.
- **Mechanism:** In any stable system, the average number of items in the system (L) equals the average arrival rate (λ) times the average time each item spends in it (W): **L = λW**. It holds regardless of arrival distribution or service discipline.
- **Counter:** **Backpressure / Admission Control**.
- **Guideline:** To cut latency (W) without adding capacity, cut work-in-progress (L). Cap concurrent requests — a shorter queue is faster than a faster server.
- **Source:** John D. C. Little, *A Proof for the Queuing Formula L = λW* (Operations Research, 1961).

## 38. Two Generals Problem

- **Concept:** Impossibility of Guaranteed Agreement.
- **Mechanism:** Two parties communicating over an unreliable channel can never be *certain* they have reached agreement — every message needs an acknowledgment, which itself needs an acknowledgment, forever. No fixed number of messages yields common knowledge.
- **Counter:** **Idempotency / Eventual Consistency / Acknowledged Retries**.
- **Guideline:** Never assume "I sent it, so they got it." Make every cross-network action safely retryable and idempotent, and reconcile state instead of trusting a single round-trip.
- **Source:** E. A. Akkoyunlu, K. Ekanadham & R. V. Huber (1975); framed as a database problem by Jim Gray, *Notes on Data Base Operating Systems* (1978).

## 39. Peter Principle

- **Concept:** Promotion to Incompetence.
- **Mechanism:** In a hierarchy, people are promoted on performance in their *current* role, not the one above. So everyone tends to rise until they reach a role they are bad at — and there they stay. Competence is promoted away; incompetence accumulates.
- **Counter:** **Dual Career Ladders / Role-Specific Evaluation**.
- **Guideline:** Do not promote your best engineer into management as a reward — it removes a great engineer and risks creating a poor manager. Offer a technical ladder, and evaluate candidates for the role above, not the one they already mastered.
- **Source:** Laurence J. Peter & Raymond Hull, *The Peter Principle* (1969).

## 40. Parkinson's Law

- **Concept:** Work Expands to Fill Time.
- **Mechanism:** "Work expands so as to fill the time available for its completion." Give a task a week and it takes a week; the same task with a two-day deadline ships in two days. Slack is consumed, not banked.
- **Counter:** **Timeboxing**.
- **Guideline:** Set deliberately short timeboxes for open-ended work and review at the deadline. A tight box forces the scoping decisions an open one defers forever.
- **Source:** C. Northcote Parkinson, *Parkinson's Law* (The Economist, 1955; book, 1957).

## 41. Wirth's Law

- **Concept:** Software Bloat Outpaces Hardware.
- **Mechanism:** "Software is getting slower more rapidly than hardware is becoming faster." Each hardware gain is absorbed by added abstraction layers, features, and carelessness, so user-perceived speed stays flat or worsens.
- **Counter:** **Performance Budgets / Lean Software**.
- **Guideline:** Treat the speed a faster machine buys you as a budget to protect, not a license to spend. Set a performance budget and fail the build when a release regresses against it.
- **Source:** Niklaus Wirth, *A Plea for Lean Software* (IEEE Computer, 1995).

## 42. Ninety-Ninety Rule

- **Concept:** The Estimation Tail.
- **Mechanism:** "The first 90% of the code accounts for the first 90% of the development time. The remaining 10% of the code accounts for the other 90% of the development time." The visible work hides a second, equally large body of integration, edge cases, and polish.
- **Counter:** **Demo on Real Data / Hard Definition of Done**.
- **Guideline:** When something looks "almost done," assume an entire second project remains: the last-10% of hardening, edge cases, and integration. Schedule it explicitly instead of treating it as a rounding error.
- **Source:** Tom Cargill (Bell Labs); popularized by Jon Bentley, *Programming Pearls* (CACM, 1985).

## 43. Eagleson's Law

- **Concept:** Code Memory Decay.
- **Mechanism:** "Any code of your own that you haven't looked at for six months might as well have been written by someone else." Your mental model of the code evaporates far faster than the code does; context is not stored in the source.
- **Counter:** **ADRs / Self-Explaining Code / Code Comments on the "Why"**.
- **Guideline:** Write code and commit messages for the stranger you will become in six months. If a decision is not obvious from the code, record the *why* in a comment or an ADR — not just in your head.
- **Source:** Programming folklore attributed to Peter Eagleson; a long-circulated adage among the catalogued "laws of software development."

## 44. Hick's Law

- **Concept:** Choice Overload.
- **Mechanism:** The time to make a decision grows logarithmically with the number of choices: **T = b·log₂(n+1)**. More options do not just add visual clutter — they measurably slow every user down.
- **Counter:** **Progressive Disclosure / Sensible Defaults**.
- **Guideline:** Cut the number of choices on any screen or API surface to the few that matter; push the rest behind defaults and progressive disclosure. Fewer doors, faster decisions.
- **Source:** William E. Hick (1952) and Ray Hyman (1953) — the "Hick–Hyman Law."

## 45. Fitts's Law

- **Concept:** Target Acquisition Cost.
- **Mechanism:** The time to move to a target depends on its distance and size: distant, small targets are slow and error-prone; near, large targets are fast. Pointing is a physical act with a measurable cost.
- **Counter:** **Edges & Corners / Sizing by Frequency**.
- **Guideline:** Make frequent or destructive actions big and easy to hit; make rare or dangerous ones small and far. Screen edges and corners are effectively infinite targets — put primary actions there.
- **Source:** Paul M. Fitts, *The Information Capacity of the Human Motor System in Controlling the Amplitude of Movement* (Journal of Experimental Psychology, 1954).

## 46. Miller's Law

- **Concept:** Working-Memory Limit.
- **Mechanism:** "The Magical Number Seven, Plus or Minus Two" — human working memory holds only about seven chunks at once. Cross that limit and recall collapses; the brain drops items rather than slowing down.
- **Counter:** **Chunking / Information Hiding**.
- **Guideline:** Group related items into a handful of named chunks — phone-number style — wherever a person must hold state in their head: function arguments, form fields, menu groups, on-call steps.
- **Source:** George A. Miller, *The Magical Number Seven, Plus or Minus Two* (Psychological Review, 1956).

## 47. Fallacies of Distributed Computing

- **Concept:** The hidden assumptions of networked code.
- **Mechanism:** Newcomers to distributed systems silently assume the network is reliable, latency is zero, bandwidth is infinite, the network is secure, topology is stable, there is one administrator, transport cost is zero, and the network is homogeneous. Every one of these eight assumptions fails in production.
- **Counter:** **Design for Failure** (without gold-plating against impossible modes).
- **Guideline:** Before shipping any cross-process call, name which of the eight assumptions you are relying on and add an explicit timeout, retry, and failure path for each.
- **Source:** L. Peter Deutsch (fallacies 5–7, 1994) and James Gosling (the 8th, ~1997), building on earlier work at Sun Microsystems.

## 48. Ironies of Automation

- **Concept:** Automation reshapes the human role rather than removing it.
- **Mechanism:** Automating the routine parts of a task leaves the human only the rarest, hardest exceptions — while their manual skill and situational awareness atrophy from disuse, precisely at the moment a failing automated system hands control back to them.
- **Counter:** **Human-in-the-Loop Drills** (better teaming, not less automation).
- **Guideline:** Keep operators sharp with regular game-days and hands-on drills, and design handoffs so a human takes over with context, not cold.
- **Source:** Lisanne Bainbridge, *Ironies of Automation* (Automatica, 1983).

## 49. Principle of Least Privilege

- **Concept:** Grant the minimum authority required.
- **Mechanism:** Every component granted more authority than it strictly needs enlarges the blast radius of any bug, compromise, or accident, and multiplies the interactions an auditor must reason about.
- **Counter:** **Psychological Acceptability** — over-restriction that users route around defeats itself.
- **Guideline:** Default every process, service account, and token to deny, then add only the minimal scopes the job provably needs; re-audit the grants whenever the job changes.
- **Source:** Jerome Saltzer & Michael Schroeder, *The Protection of Information in Computer Systems* (Proceedings of the IEEE, 1975).

## 50. Kerckhoffs's Principle

- **Concept:** Security must not depend on the secrecy of the mechanism.
- **Mechanism:** A cryptosystem should remain secure even if everything about it except the key is public. Secrecy of the algorithm is brittle: mechanisms leak, get reverse-engineered, and get reused across systems.
- **Counter:** **Defense in Depth** — obscurity may be one thin extra layer, never the foundation.
- **Guideline:** Assume the attacker has your source and design. Put all of the secret in rotatable keys, and never rely on a hidden algorithm to protect anything.
- **Source:** Auguste Kerckhoffs, *La cryptographie militaire* (Journal des sciences militaires, 1883).

## 51. Gustafson's Law

- **Concept:** Scaled speedup for growing problems.
- **Mechanism:** For a fixed time budget, a larger machine lets you solve a proportionally larger problem, so the serial fraction shrinks with scale and speedup grows near-linearly — the optimistic counterpart to Amdahl's fixed-workload pessimism.
- **Counter:** **Amdahl's Law** — for a fixed-size workload, the serial fraction still hard-caps speedup.
- **Guideline:** Before justifying more cores, ask whether the problem size grows with the hardware. If the workload is fixed, reason with Amdahl; if it scales, Gustafson applies.
- **Source:** John L. Gustafson, *Reevaluating Amdahl's Law* (Communications of the ACM, 1988).

## 52. The Tail at Scale

- **Concept:** Tail latency dominates at fan-out.
- **Mechanism:** In a service that fans out to many components, rare per-node slowness (GC pauses, contention, a failing disk) is near-certain to hit some node on every request. So tail latency (p99, p99.9) governs the user experience even when medians look healthy.
- **Counter:** **Redundancy Has a Price** — hedged and tied requests add load; don't chase the tail where the median is what users feel.
- **Guideline:** Set SLOs on p99/p99.9, not the mean, and deploy tail-tolerance — hedged requests, micro-partitioning — instead of trying to make every node uniformly fast.
- **Source:** Jeffrey Dean & Luiz André Barroso, *The Tail at Scale* (Communications of the ACM, 2013).

## 53. Ashby's Law of Requisite Variety

- **Concept:** Only variety can absorb variety.
- **Mechanism:** A controller can regulate a system only if it can match the variety of states that system can produce. Under-powered control simply cannot cope with a sufficiently rich environment.
- **Counter:** **Constrain the Environment** — excess control variety is itself cost and complexity.
- **Guideline:** When incidents keep escaping your alerts and runbooks, either add matching response capability or deliberately shrink the system's state space: fewer configurations, stricter inputs.
- **Source:** W. Ross Ashby, *An Introduction to Cybernetics* (Chapman & Hall, 1956).

## 54. Law of Demeter

- **Concept:** Principle of Least Knowledge.
- **Mechanism:** An object that reaches through other objects' internals (`a.getB().getC().doThing()`) couples itself to the entire dependency chain, so a change anywhere along that chain ripples back and breaks it.
- **Counter:** **Pragmatism over Dogma** — strict application breeds forwarding and wrapper bloat.
- **Guideline:** Only call methods on your direct collaborators, your arguments, objects you create, and your own fields. If you are chaining getters, add a method to the object that owns the data.
- **Source:** Karl Lieberherr & Ian Holland, *Assuring Good Style for Object-Oriented Programs* (IEEE Software, 1989).

## 55. Jevons Paradox

- **Concept:** Efficiency can increase total consumption.
- **Mechanism:** Making a resource cheaper to use per unit lowers its effective price and can raise total consumption instead of lowering it — the efficiency gain is spent on more usage rather than banked as savings.
- **Counter:** **Cap the Rebound** — pair efficiency with a quota, cap, or price signal to actually capture the savings.
- **Guideline:** When you make something cheaper — compute, storage, an internal API — expect demand to balloon; provision and budget for the rebound instead of assuming a net reduction.
- **Source:** William Stanley Jevons, *The Coal Question* (1865).

## 56. Normal Accident Theory

- **Concept:** In some systems, accidents are structural.
- **Mechanism:** In systems that are both interactively complex and tightly coupled, small independent failures interact in ways no designer anticipated and propagate faster than operators can intervene — so accidents become a property of the structure, not bad luck.
- **Counter:** **High-Reliability Organizations** — culture, slack, and decoupling measurably beat fatalism.
- **Guideline:** Reduce coupling — add buffers, timeouts, bulkheads, and circuit breakers — and cut complexity before adding more safety interlocks, which themselves add interactions.
- **Source:** Charles Perrow, *Normal Accidents: Living with High-Risk Technologies* (Basic Books, 1984).
