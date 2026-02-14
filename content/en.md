# Hacker Heuristics: The Complete Collection

## 1. Type 1 vs Type 2 Decisions
- **Concept:** Reversibility of Decisions.
- **Mechanism:** The brain instinctively treats all failures as threats to survival, demanding excessive caution for reversible decisions (Two-way doors). This causes "Analysis Paralysis."
- **Counter:** **The "One-Way Door" Filter**.
- **Guideline:** If a decision is easily reversible (two-way door), ship within 24 hours to gain data. Only spend days/weeks on "one-way doors" (e.g., core database schema, security protocols).

## 2. Normalization of Deviance
- **Concept:** The erosion of safety standards.
- **Mechanism:** When a minor rule is broken (e.g., skipping a test) and no immediate disaster occurs, the brain re-classifies this "deviance" as "normal." This is how catastrophic failures begin.
- **Counter:** **Broken Windows Theory**.
- **Guideline:** If you see a "hack" or a bypassed alert, do not say "it worked before." Either fix it immediately or document it as high-priority technical debt.

## 3. Chesterton's Fence
- **Concept:** Second-Order Thinking.
- **Mechanism:** We view legacy code/processes as "clutter" because we lack the context of their origin. The ego jumps to "simplify" by deleting what it doesn't understand.
- **Counter:** **YAGNI (You Ain't Gonna Need It)**.
- **Guideline:** You are forbidden from removing a "fence" (code/rule) until you can explain exactly why it was put there in the first place.

## 4. Normalcy Bias
- **Concept:** Crisis Denial.
- **Mechanism:** In the face of a true anomaly, the brain defaults to the most "frequent" explanation to save energy. "It's probably just a transient network error," we say as the database corrupts.
- **Counter:** **Pre-mortem / Red Teaming**.
- **Guideline:** When an error occurs, ask: "If this were the start of a total system collapse, what would the next 10 minutes look like?" If that scares you, investigate now.

## 5. Law of Triviality (Bike-Shedding)
- **Concept:** Cognitive Ease.
- **Mechanism:** People provide more feedback on simple things (naming variables) than complex things (distributed consensus) because everyone understands the simple things, creating a false sense of value.
- **Counter:** **Core Value Focus**.
- **Guideline:** If a PR review spends 80% of comments on style/naming, approve immediately and move the discussion to an automated linter config.

## 6. Gall's Law
- **Concept:** Evolutionary Design.
- **Mechanism:** We believe we can "architect" a complex system from scratch. We can't. Complex systems are too chaotic to be designed top-down.
- **Counter:** **The MVP (Minimum Viable Product)**.
- **Guideline:** A complex system that works is invariably found to have evolved from a simple system that worked. Start with a working "Hello World" and evolve.

## 7. Conway's Law
- **Concept:** Mirroring.
- **Mechanism:** The software architecture is a map of the organizational chart. If two teams don't talk, their services won't integrate smoothly.
- **Counter:** **Inverse Conway Maneuver**.
- **Guideline:** If you want a modular architecture, create modular, independent teams first. Do not fight the org chart with code.

## 8. Hyrum's Law
- **Concept:** Implicit Contract.
- **Mechanism:** With a sufficient number of users, every observable behavior of your system (even bugs) will be depended on by someone.
- **Counter:** **Chaos Engineering**.
- **Guideline:** "Internal" doesn't exist once you have users. Assume every change is breaking. Use strict versioning and feature flags.

## 9. Brooks' Law
- **Concept:** Communication Debt.
- **Mechanism:** Adding people to a late project increases communication overhead exponentially ($n(n-1)/2$). New people take more time from veterans than they contribute.
- **Counter:** **Scope Cutting**.
- **Guideline:** If a project is late, do not add people. Remove features or push the date.

## 10. The XY Problem
- **Concept:** Goal Misalignment.
- **Mechanism:** A user/engineer gets stuck on a solution (Y) and asks for help with it, forgetting that the original problem (X) might have a much simpler solution.
- **Counter:** **Five Whys**.
- **Guideline:** When someone asks "How do I do Y?", always reply "What are you trying to achieve with Y?"

## 11. Postel's Law (Robustness Principle)
- **Concept:** Fault Tolerance.
- **Mechanism:** In a distributed system, assuming everyone follows the spec perfectly leads to brittle failures.
- **Counter:** **Fail-Fast (Internal only)**.
- **Guideline:** Be conservative in what you send (strict compliance) and liberal in what you accept (handle messy inputs gracefully).

## 12. Hanlon's Razor
- **Concept:** Attribution Bias.
- **Mechanism:** We take bugs/delays personally, assuming "malice" or "sabotage" when it's usually just lack of sleep or missing context.
- **Counter:** **Psychological Safety**.
- **Guideline:** Never attribute to malice that which is adequately explained by stupidity or lack of context. Focus on the system, not the person.

## 13. Hofstadter's Law
- **Concept:** Recursive Estimation Bias.
- **Mechanism:** "It always takes longer than you expect, even when you take into account Hofstadter's Law." The brain cannot visualize unknown unknowns.
- **Counter:** **Evidence-Based Scheduling**.
- **Guideline:** Double your most conservative estimate, then add 20%. And expect to be wrong.

## 14. Goodhart's Law
- **Concept:** Metric Obsolescence.
- **Mechanism:** When a measure becomes a target, it ceases to be a good measure. If you reward "number of commits," people will make tiny, useless commits.
- **Counter:** **Balanced Scorecards**.
- **Guideline:** Never use a single metric to judge performance. Observe the system's output, not its proxies.

## 15. Lindy Effect
- **Concept:** Survivability.
- **Mechanism:** For non-perishable things like ideas or software, the longer they have survived, the longer they are likely to survive.
- **Counter:** **Hype Cycle Analysis**.
- **Guideline:** If you need a stable system for 10 years, choose a technology that has already been around for 10 years (e.g., PostgreSQL over a new NoSQL).

## 16. Sunk Cost Fallacy
- **Concept:** Loss Aversion.
- **Mechanism:** We continue investing in a failing tech stack/project because "we've already spent so much on it." The brain hates admitting a loss.
- **Counter:** **Zero-Based Budgeting**.
- **Guideline:** Ask: "If we started today with zero investment, would we choose this path?" If no, kill it.

## 17. Cargo Cult Engineering
- **Concept:** Surface Imitation.
- **Mechanism:** Copying the practices of successful companies (e.g., "The Spotify Model") without understanding *why* they worked there, hoping for the same results.
- **Counter:** **First Principles Thinking**.
- **Guideline:** Do not adopt a tool/process because Google uses it. Adopt it because you have the exact problem Google had at that scale.

## 18. Amdahl's Law
- **Concept:** Diminishing Returns.
- **Mechanism:** Optimizing a small part of a system has no impact if the bottleneck is elsewhere.
- **Counter:** **Theory of Constraints**.
- **Guideline:** Find the 1% of the code that takes 90% of the time. Only optimize that. Ignore the rest.

## 19. The Law of Leaky Abstractions
- **Concept:** Complexity Leakage.
- **Mechanism:** All non-trivial abstractions, to some degree, leak. You can't use SQL without understanding how indexes work eventually.
- **Counter:** **T-Shaped Skills**.
- **Guideline:** Use abstractions to move fast, but ensure at least one person on the team understands the layer beneath it.

## 20. Pareto Principle (80/20 Rule)
- **Concept:** Distribution Inequality.
- **Mechanism:** 80% of bugs come from 20% of the code. 80% of value comes from 20% of the features.
- **Counter:** **Ruthless Prioritization**.
- **Guideline:** Identify the "Critical 20%" and give it 100% of your quality focus.

## 21. Survivorship Bias
- **Concept:** Invisible Failures.
- **Mechanism:** We study only the successes that survived and draw conclusions from them, ignoring the silent graveyard of failures that used the same strategy. The data we see is fundamentally skewed.
- **Counter:** **Failure Studies / Post-mortem Culture**.
- **Guideline:** Before adopting a strategy because "Company X succeeded with it," research how many companies failed using the same approach. The dead don't write blog posts.

## 22. Kernighan's Law
- **Concept:** Complexity Debt.
- **Mechanism:** "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
- **Counter:** **KISS (Keep It Simple, Stupid)**.
- **Guideline:** Code "cleverness" is a liability, not an asset. Write code that your future self, sleep-deprived at 3 AM, can still understand in 6 months.

## 23. The Cobra Effect
- **Concept:** Perverse Incentives.
- **Mechanism:** A solution designed to fix a problem creates a worse problem. In colonial India, a bounty on cobras led people to breed cobras for the reward. When the bounty was cancelled, breeders released their stock, making the problem worse.
- **Counter:** **Second-Order Effects Analysis / System Dynamics**.
- **Guideline:** For every incentive you create, ask: "If someone wanted to game this, how would they?" If you can find a way, the design is wrong.

## 24. Dunbar's Number
- **Concept:** Cognitive Scaling Limit.
- **Mechanism:** Humans can maintain approximately 150 stable social relationships. Teams larger than ~8 people experience exponential communication breakdown because the brain cannot track that many working relationships.
- **Counter:** **Two-Pizza Rule / Team Topologies**.
- **Guideline:** When a team exceeds 7±2 people, split it. If "information-sharing meetings" start multiplying, that's the symptom of exceeding the cognitive limit.

## 25. Worse is Better
- **Concept:** Pragmatic Design Philosophy.
- **Mechanism:** A simpler, "inferior" design that is easy to implement and adopt will beat a theoretically "correct" but complex design in the real world. Unix beat Lisp. HTTP beat CORBA.
- **Counter:** **The Right Thing / Perfectionism**.
- **Guideline:** A solution that is 80% correct and ships today will outperform a 100% correct solution that ships next year. Optimize for adoption, not elegance.

## 26. Cunningham's Law
- **Concept:** Social Knowledge Extraction.
- **Mechanism:** "The best way to get the right answer on the internet is not to ask a question; it's to post the wrong answer." People are more motivated to correct mistakes than to answer questions.
- **Counter:** **Socratic Method**.
- **Guideline:** When documentation is missing, post your best guess of how something works. The person who knows the truth will appear to correct you far faster than if you had asked directly.

## 27. Bystander Effect
- **Concept:** Diffusion of Responsibility.
- **Mechanism:** In an emergency, the more people who are present, the less likely any single person is to take action. "Someone else will handle it." In engineering, a page sent to a group channel often means nobody responds.
- **Counter:** **Explicit Role Assignment / Incident Commander**.
- **Guideline:** Never say "Can someone look at this?" Instead, say "@name, you are investigating this." Assign a single, named owner for every incident.
