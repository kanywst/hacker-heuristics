export const translations = {
  en: {
    hero: {
      tag: 'Engineering Excellence 2026',
      title: 'The Grand Unified Theory of Engineering.',
      subtitle:
        '27 Essential Mental Models for Navigating the Unknown. Decipher the hidden mechanics of systems and organizations.',
      ctaPrimary: 'Start Exploring',
      ctaSecondary: 'Read Docs',
    },
    nav: {
      principles: 'Principles',
      about: 'About',
      github: 'GitHub',
    },
    heuristics: [
      {
        title: 'Type 1 vs Type 2 Decisions',
        tag: 'Decision Theory',
        mechanism:
          'The brain instinctively treats all failures as threats, demanding excessive caution for reversible decisions (two-way doors).',
        counter: "The 'One-Way Door' Filter.",
        guideline:
          "If a decision is easily reversible, ship within 24 hours. Only spend weeks on irreversible 'one-way doors'.",
      },
      {
        title: 'Normalization of Deviance',
        tag: 'Safety Engineering',
        mechanism:
          "When a minor rule is broken and no disaster occurs, the brain re-classifies deviance as 'normal'.",
        counter: 'Broken Windows Theory.',
        guideline:
          "Do not say 'it worked before' to skip investigation. Fix hacks or document them as high-priority debt.",
      },
      {
        title: "Chesterton's Fence",
        tag: 'Systems Thinking',
        mechanism:
          "The ego jumps to 'simplify' by deleting legacy code/rules it doesn't immediately understand.",
        counter: "Balance with YAGNI (You Ain't Gonna Need It).",
        guideline:
          'You are forbidden from removing a fence until you can explain exactly why it was put there.',
      },
      {
        title: 'Normalcy Bias',
        tag: 'Cognitive Psychology',
        mechanism:
          "In a crisis, the brain defaults to the most frequent explanation. 'It's just a transient error' as systems fail.",
        counter: 'Pre-mortem / Red Teaming.',
        guideline:
          "Ask: 'If this were the start of a total collapse, what would the next 10 minutes look like?'",
      },
      {
        title: 'Law of Triviality',
        tag: 'Social Dynamics',
        mechanism:
          'People provide more feedback on simple things (naming) than complex ones because everyone understands them.',
        counter: 'Core Value Focus.',
        guideline:
          'If a review spends 80% on style, approve immediately and move to automated linter configs.',
      },
      {
        title: "Gall's Law",
        tag: 'System Design',
        mechanism:
          'The delusion that complex systems can be designed top-down from scratch. They are too chaotic.',
        counter: 'The MVP (Minimum Viable Product).',
        guideline:
          "A complex system that works evolved from a simple system that worked. Start with a working 'Hello World'.",
      },
      {
        title: "Conway's Law",
        tag: 'Org Design',
        mechanism:
          "Software architecture is a map of the org chart. If teams don't talk, their services won't integrate.",
        counter: 'Inverse Conway Maneuver.',
        guideline:
          'To get a modular architecture, create independent teams first. Do not fight the org chart with code.',
      },
      {
        title: "Hyrum's Law",
        tag: 'API Design',
        mechanism:
          'With enough users, every observable behavior (even bugs) will be depended on by someone.',
        counter: 'Chaos Engineering.',
        guideline:
          'Assume every change is breaking once you have users. Use strict versioning and feature flags.',
      },
      {
        title: "Brooks' Law",
        tag: 'Management',
        mechanism:
          'Adding people to a late project increases communication overhead exponentially. New people drain veterans.',
        counter: 'Scope Cutting.',
        guideline:
          'If a project is late, do not add people. Remove features or push the date.',
      },
      {
        title: 'The XY Problem',
        tag: 'Communication',
        mechanism:
          'Users get stuck on a solution (Y) and ask for help with it, forgetting the original problem (X).',
        counter: 'Five Whys.',
        guideline:
          "When someone asks 'How do I do Y?', always reply 'What are you trying to achieve with Y?'",
      },
      {
        title: "Postel's Law",
        tag: 'Interoperability',
        mechanism:
          'Assuming everyone follows the spec perfectly leads to brittle failures in distributed systems.',
        counter: 'Fail-Fast (Internal only).',
        guideline:
          'Be conservative in what you send and liberal in what you accept.',
      },
      {
        title: "Hanlon's Razor",
        tag: 'Culture',
        mechanism:
          "Assuming malice or sabotage for bugs/delays when it's usually just lack of sleep or context.",
        counter: 'Psychological Safety.',
        guideline:
          'Never attribute to malice what is adequately explained by lack of context. Debug the system.',
      },
      {
        title: "Hofstadter's Law",
        tag: 'Estimation',
        mechanism:
          "It always takes longer than you expect, even when you take into account Hofstadter's Law.",
        counter: 'Evidence-Based Scheduling.',
        guideline:
          'Double your most conservative estimate, then add 20%. Expect to be wrong.',
      },
      {
        title: "Goodhart's Law",
        tag: 'Metrics',
        mechanism:
          "When a measure becomes a target, it ceases to be a good measure. Rewards for 'commits' create junk commits.",
        counter: 'Balanced Scorecards.',
        guideline:
          'Never use a single metric to judge performance. Observe outputs, not proxies.',
      },
      {
        title: 'Lindy Effect',
        tag: 'Survivability',
        mechanism:
          'For non-perishables like software, the longer it has survived, the longer it is likely to survive.',
        counter: 'Hype Cycle Analysis.',
        guideline:
          'If you need stability for 10 years, choose a technology that has already been around for 10 years.',
      },
      {
        title: 'Sunk Cost Fallacy',
        tag: 'Psychology',
        mechanism:
          "Continuing to invest in failing projects because 'we've already spent so much.' The brain hates loss.",
        counter: 'Zero-Based Budgeting.',
        guideline:
          "Ask: 'If we started today with zero investment, would we choose this path?' If no, kill it.",
      },
      {
        title: 'Cargo Cult Engineering',
        tag: 'Engineering Culture',
        mechanism:
          "Copying practices of successful companies (Spotify Model) without understanding the 'why'.",
        counter: 'First Principles Thinking.',
        guideline:
          'Adopt a tool because you have the exact problem it solves, not because Google uses it.',
      },
      {
        title: "Amdahl's Law",
        tag: 'Optimization',
        mechanism:
          'Optimizing a part has no impact if the bottleneck is elsewhere. Resource waste.',
        counter: 'Theory of Constraints.',
        guideline:
          'Find the 1% of code that takes 90% of time. Only optimize that. Ignore the rest.',
      },
      {
        title: 'Leaky Abstractions',
        tag: 'Architecture',
        mechanism:
          "All non-trivial abstractions leak. You can't use SQL without understanding indexes eventually.",
        counter: 'T-Shaped Skills.',
        guideline:
          'Use abstractions to move fast, but ensure someone understands the layer beneath it.',
      },
      {
        title: 'Pareto Principle',
        tag: 'Prioritization',
        mechanism:
          '80% of bugs come from 20% of code. 80% of value comes from 20% of features.',
        counter: 'Ruthless Prioritization.',
        guideline:
          "Identify the 'Critical 20%' and give it 100% of your quality focus.",
      },
      {
        title: 'Survivorship Bias',
        tag: 'Cognition',
        mechanism:
          'We study only the successes that survived and draw conclusions, ignoring the silent graveyard of failures that used the same strategy.',
        counter: 'Failure Studies / Post-mortem Culture.',
        guideline:
          "Before adopting a strategy because 'Company X succeeded with it,' research how many failed using the same approach. The dead don't write blog posts.",
      },
      {
        title: "Kernighan's Law",
        tag: 'Code Quality',
        mechanism:
          '"Debugging is twice as hard as writing the code. If you write the cleverest code you can, you are by definition not smart enough to debug it."',
        counter: 'KISS (Keep It Simple, Stupid).',
        guideline:
          'Code cleverness is a liability, not an asset. Write code your future self, sleep-deprived at 3 AM, can still understand in 6 months.',
      },
      {
        title: 'The Cobra Effect',
        tag: 'Incentive Design',
        mechanism:
          'A solution designed to fix a problem creates a worse one. A bounty on cobras led people to breed cobras for the reward.',
        counter: 'Second-Order Effects Analysis.',
        guideline:
          "For every incentive, ask: 'If someone wanted to game this, how would they?' If you find a way, the design is wrong.",
      },
      {
        title: "Dunbar's Number",
        tag: 'Org Scaling',
        mechanism:
          'Humans can maintain ~150 stable relationships. Teams larger than ~8 experience exponential communication breakdown.',
        counter: 'Two-Pizza Rule / Team Topologies.',
        guideline:
          "When a team exceeds 7±2 people, split it. If 'information-sharing meetings' multiply, you've exceeded the cognitive limit.",
      },
      {
        title: 'Worse is Better',
        tag: 'Design Philosophy',
        mechanism:
          "A simpler, 'inferior' design that is easy to implement and adopt will beat a theoretically 'correct' but complex one. Unix beat Lisp. HTTP beat CORBA.",
        counter: 'The Right Thing / Perfectionism.',
        guideline:
          'A solution 80% correct that ships today will outperform a 100% correct one that ships next year. Optimize for adoption, not elegance.',
      },
      {
        title: "Cunningham's Law",
        tag: 'Knowledge',
        mechanism:
          '"The best way to get the right answer on the internet is not to ask a question; it\'s to post the wrong answer." People correct mistakes faster than they answer questions.',
        counter: 'Socratic Method.',
        guideline:
          "When docs are missing, post your best guess of how something works. The expert will appear to correct you faster than if you'd asked directly.",
      },
      {
        title: 'Bystander Effect',
        tag: 'Incident Response',
        mechanism:
          "The more people present, the less likely any single person acts. 'Someone else will handle it.' A page to a group channel often means nobody responds.",
        counter: 'Explicit Role Assignment / Incident Commander.',
        guideline:
          'Never say "Can someone look at this?" Say "@name, you are investigating this." Assign a single, named owner for every incident.',
      },
    ],
    footer:
      '© 2026 Hacker Heuristics Project. Built for the next decade of engineering.',
  },
  jp: {
    hero: {
      tag: 'Engineering Excellence 2026',
      title: 'エンジニアリングの大統一理論。',
      subtitle:
        '未知の領域を切り拓くための、究極の意思決定メンタルモデル27選。システムと組織の隠れた力学を解読せよ。',
      ctaPrimary: '探索を始める',
      ctaSecondary: 'ドキュメントを読む',
    },
    nav: {
      principles: '原理原則',
      about: '概要',
      github: 'GitHub',
    },
    heuristics: [
      {
        title: '意思決定の可逆性',
        tag: '意思決定理論',
        mechanism:
          '脳は生存本能的にすべての失敗を脅威と見なし、すぐに戻せる決定にも過剰な慎重さを求めてしまう。',
        counter: '「一方向のドア」フィルター。',
        guideline:
          '容易にやり直しができる決定なら24時間以内に実行せよ。数週間かけるのは不可逆な決定のみ。',
      },
      {
        title: '逸脱の常態化',
        tag: '安全工学',
        mechanism:
          '小さなルール違反をしても大惨事が起きない場合、脳はその逸脱を「正常」と再定義してしまう。',
        counter: '割れ窓理論。',
        guideline:
          '「以前も大丈夫だった」を理由に調査を省略するな。ハックを見つけたら即座に修正か記録を。',
      },
      {
        title: 'チェスタトンの柵',
        tag: 'システム思考',
        mechanism:
          'エゴは理解できないものを「単純化」という名目で削除したがる。背景文脈の欠如による罠。',
        counter: 'YAGNIに対するバランス。',
        guideline:
          'その柵がなぜそこに立てられたか理由を完全に説明できるまで、壊してはならない。',
      },
      {
        title: '正常性バイアス',
        tag: '認知心理学',
        mechanism:
          '真の異常に直面しても、脳はエネルギー節約のため「いつものパターン」で解釈しようとする。',
        counter: 'プレモータム / レッドチーミング。',
        guideline:
          '「これがシステム全壊の始まりだとしたら？」を問え。その答えが恐ろしいなら今すぐ調査。',
      },
      {
        title: 'パーキンソンの凡俗法則',
        tag: '社会力学',
        mechanism:
          '人は複雑なことより、誰でも理解できる単純なこと（命名等）に多くのフィードバックをしてしまう。',
        counter: 'コア・バリューへの集中。',
        guideline:
          'レビューの8割がスタイルに集中しているなら即承認し、自動化の設定に議論を移せ。',
      },
      {
        title: 'ガルの法則',
        tag: 'システム設計',
        mechanism:
          '複雑なシステムをゼロから設計できるという妄想。複雑系はトップダウンでは設計できない。',
        counter: 'MVP (実用最小限の製品)。',
        guideline:
          '機能している複雑系は、例外なく単純な系から進化したものである。最小単位から始めよ。',
      },
      {
        title: 'コンウェイの法則',
        tag: '組織設計',
        mechanism:
          'ソフトウェア構造は組織図の写し鏡になる。チームが会話しなければ統合もスムーズにいかない。',
        counter: '逆コンウェイ戦略。',
        guideline:
          'モジュール化された構造が欲しいなら、先に独立したチームを作れ。コードで組織に抗うな。',
      },
      {
        title: 'ハイラムの法則',
        tag: 'API設計',
        mechanism:
          'ユーザー数が増えれば、システムの観測可能なあらゆる挙動は誰かの依存対象になる。',
        counter: 'カオスエンジニアリング。',
        guideline:
          'ユーザーがいる限り内部実装は存在しない。すべての変更は破壊的であると想定せよ。',
      },
      {
        title: 'ブルックスの法則',
        tag: 'マネジメント',
        mechanism:
          '遅れているプロジェクトに人を追加すると、調整コストが爆発し、さらに遅延する。',
        counter: 'スコープ削減。',
        guideline:
          'プロジェクトが遅れているなら人を増やすな。機能を削るか、期限を延ばせ。',
      },
      {
        title: 'XY問題',
        tag: 'コミュニケーション',
        mechanism:
          '解決策（Y）で詰まったとき、本来の目的（X）を忘れ、Yの方法を質問してしまう。',
        counter: 'なぜなぜ分析。',
        guideline:
          '「どうやってYをすればいいか？」には、「Yで何を達成したいのか？」と問い返せ。',
      },
      {
        title: 'ポステルの法則',
        tag: '相互運用性',
        mechanism:
          '全員が仕様を完璧に守ると想定すると、分散システムでは脆い失敗を招く。',
        counter: 'フェイルファスト (内部限定)。',
        guideline:
          '送るものには厳格に、受け取るものには寛容に。不完全な入力も優雅に処理せよ。',
      },
      {
        title: 'ハンロンの剃刀',
        tag: '文化・デバッグ',
        mechanism:
          'バグや遅延を悪意と受け取ってしまうが、実際には単なる睡眠不足や文脈欠如であることが多い。',
        counter: '心理的安全性。',
        guideline:
          '無能や文脈欠如で説明がつくことに悪意を見出すな。人ではなくシステムをデバッグせよ。',
      },
      {
        title: 'ホフスタッターの法則',
        tag: '見積もり',
        mechanism:
          'この法則を考慮しても常に予想以上の時間がかかる。脳は未知の未知を可視化できない。',
        counter: '実績ベースのスケジューリング。',
        guideline:
          '慎重な見積もりを2倍し、さらに20%加えよ。それでも外れることを覚悟せよ。',
      },
      {
        title: 'グッドハートの法則',
        tag: '指標',
        mechanism:
          'ある指標が目標になると、それは良い指標ではなくなる。コミット数評価はゴミを量産する。',
        counter: 'バランスト・スコアカード。',
        guideline:
          '単一の指標で判断するな。代用指標ではなくシステムの「出力」を直接観察せよ。',
      },
      {
        title: 'リンディ効果',
        tag: '生存性',
        mechanism:
          '非腐敗的なものは、長く生き残ってきたものほど今後も長く生き残る可能性が高い。',
        counter: 'ハイプサイクル分析。',
        guideline:
          '10年間の安定を求めるなら、既に10年以上存在している技術（例：PostgreSQL）を選べ。',
      },
      {
        title: 'サンクコストの誤謬',
        tag: '心理学',
        mechanism:
          '「既に投資したから」という理由で失敗に固執する。脳は負けを認めるのを嫌う。',
        counter: 'ゼロベース予算。',
        guideline:
          '「今日ゼロから始めるならこの道を選ぶか？」を問え。NOなら今すぐ捨てろ。',
      },
      {
        title: 'カーゴ・カルト・エンジニアリング',
        tag: 'エンジニア文化',
        mechanism:
          '成功企業の慣行を、なぜ機能したか理解せずに真似る罠。形だけ真似ても結果は出ない。',
        counter: '第一原理思考。',
        guideline:
          'Googleが使っているからではなく、そのツールが解決する特定の問題が自分たちにあるから導入せよ。',
      },
      {
        title: 'アムダールの法則',
        tag: '最適化',
        mechanism:
          'ボトルネックが他にある場合、一部を最適化しても全体性能には影響しない。リソースの浪費。',
        counter: '制約理論。',
        guideline:
          '実行時間の90%を占める1%のコードを見つけ、そこだけを最適化せよ。',
      },
      {
        title: 'リーキー・アブストラクション',
        tag: 'アーキテクチャ',
        mechanism:
          'あらゆる抽象化はある程度「漏れる」。下の層を理解せずに使い続けることはできない。',
        counter: 'T型スキル。',
        guideline:
          '抽象化を利用して加速せよ。ただしチームに一人は下の層を理解する人間を置け。',
      },
      {
        title: 'パレートの法則',
        tag: '優先順位',
        mechanism:
          'バグの80%は20%のコードに、価値の80%は20%の機能に起因する。不平等の法則。',
        counter: '非情な優先順位付け。',
        guideline:
          '「重要な20%」を特定し、品質管理のリソースの100%をそこに集中させよ。',
      },
      {
        title: '生存者バイアス',
        tag: '認知',
        mechanism:
          '生き残った成功事例だけを研究し結論を導く。同じ戦略で消えた無数の失敗はデータとして見えない。',
        counter: '失敗学 / ポストモーテム文化。',
        guideline:
          '「X社がこの方法で成功した」を根拠にする前に、同じ方法で失敗した企業を調べよ。死者はブログ記事を書かない。',
      },
      {
        title: 'カーニハンの法則',
        tag: 'コード品質',
        mechanism:
          '「デバッグはコードを書くときの2倍の知性を要する。最大限賢いコードを書いた時点で、デバッグする知性が定義上足りなくなる。」',
        counter: 'KISS (Keep It Simple, Stupid)。',
        guideline:
          'コードの「賢さ」は資産ではなく負債。6ヶ月後、午前3時に睡眠不足の自分がまだ理解できるコードを書け。',
      },
      {
        title: 'コブラ効果',
        tag: 'インセンティブ設計',
        mechanism:
          '問題解決の施策がかえって問題を悪化させる。コブラ駆除の懸賞金がコブラの養殖を誘発した。',
        counter: '二次効果分析。',
        guideline:
          'あらゆるインセンティブに「これを悪用するならどうする？」を問え。悪用できるなら設計が間違い。',
      },
      {
        title: 'ダンバー数',
        tag: '組織スケーリング',
        mechanism:
          '人間の認知限界は約150の安定した関係。チームが約8人を超えるとコミュニケーションが指数関数的に崩壊。',
        counter: 'ツー・ピザ・ルール / チームトポロジー。',
        guideline:
          'チームが7±2人を超えたら分割せよ。「情報共有ミーティング」の増殖は認知限界超過の兆候。',
      },
      {
        title: '劣っている方が勝つ',
        tag: '設計哲学',
        mechanism:
          '単純で「不完全」だが実装容易な設計が、理論的に「正しい」複雑な設計に勝つ。UnixはLispに、HTTPはCORBAに勝った。',
        counter: 'The Right Thing / 完璧主義。',
        guideline:
          '80%正しくて今日リリースできるものは、100%正しくて来年のものに勝つ。普及を最適化せよ。',
      },
      {
        title: 'カニンガムの法則',
        tag: '知識共有',
        mechanism:
          '「正しい答えを得る最良の方法は質問ではなく間違った答えの投稿だ。」人は質問に答えるより間違いを訂正する動機が強い。',
        counter: 'ソクラテス式問答。',
        guideline:
          'ドキュメントがないなら「これはXだと思う」と書け。知る者が訂正してくれる確率は「これは何？」と聞くより遥かに高い。',
      },
      {
        title: '傍観者効果',
        tag: 'インシデント対応',
        mechanism:
          '居合わせる人数が多いほど個人が行動しない。「誰かが対応するだろう」で全員が見送る。グループアラートは無視される。',
        counter: '明示的な役割割り当て / インシデントコマンダー。',
        guideline:
          '「誰か見てますか？」は禁句。「@名前、あなたが調査してください」と名指しせよ。全インシデントに単一のオーナーを。',
      },
    ],
    footer:
      '© 2026 Hacker Heuristics Project. エンジニアリングの次の10年のために。',
  },
};
