// 研究職・教育職に共通する経歴1件分の型。
// 期間や所属は翻訳が必要なので言語ブロック側に持たせ、URL だけ共通で持つ。
export type Role = {
  id: string; // React の key に使う識別子
  link?: string; // 成果物（リポジトリ・レポート）への URL
  en: RoleText;
  ja: RoleText;
};

type RoleText = {
  title: string; // 役職名
  org: string; // 所属機関と所在地
  period: string; // 在籍期間
  advisor?: string; // 指導教員
  linkLabel?: string; // リンクのラベル（link がある場合のみ）
  bullets: string[]; // 業務内容の箇条書き
};

export const researchRoles: Role[] = [
  {
    id: "pseudoscope-summer-research",
    link: "https://github.com/IsseiHasegawa/PseudoScope",
    en: {
      title: "Undergraduate Summer Researcher",
      org: "Allegheny College, Meadville, PA",
      period: "May 2026 – Present",
      advisor: "Advisor: Prof. Greg Kapfhammer",
      linkLabel: "View PseudoScope on GitHub",
      bullets: [
        "Designed and implemented PseudoScope, a mutation-testing tool that detects pseudo-tested code in C/C++ software systems.",
        "Built an automated pipeline that mutates function bodies, rebuilds projects, runs test suites, and flags functions no test actually exercises.",
        "Implemented AST-based, syntax-aware source analysis and explored Tree-sitter integration for scalable candidate selection.",
        "Evaluated detection effectiveness and computational cost on open-source C/C++ projects, analyzing the trade-off between mutation coverage and execution time.",
      ],
    },
    ja: {
      title: "学部生サマーリサーチャー",
      org: "アレゲニー大学（ペンシルベニア州ミードビル）",
      period: "2026年5月 – 現在",
      advisor: "指導教員: Greg Kapfhammer 教授",
      linkLabel: "PseudoScope を GitHub で見る",
      bullets: [
        "C/C++ システムにおける擬似テスト済みコードを検出する、ミューテーションテストベースのツール PseudoScope を設計・実装。",
        "関数本体を変異させ、プロジェクトを再ビルドし、テストスイートを実行して、実質的にテストされていない関数を特定する自動パイプラインを構築。",
        "AST を用いた構文認識のソースコード解析を実装し、候補選定をスケールさせるための Tree-sitter 統合を検討。",
        "オープンソースの C/C++ プロジェクトで検出精度と計算コストを実証評価し、ミューテーションカバレッジと実行時間のトレードオフを分析。",
      ],
    },
  },
  {
    id: "distributed-kv-store-research",
    link: "https://x.gd/ERwXc",
    en: {
      title: "Undergraduate Researcher",
      org: "Allegheny College, Meadville, PA",
      period: "Jan 2026 – Present",
      advisor: "Advisor: Prof. Greg Kapfhammer",
      linkLabel: "Read the research report",
      bullets: [
        "Designed and implemented a distributed key-value store in C++ to study trade-offs among failure-detection latency, downtime, replication strategy, and consistency.",
        "Implemented heartbeat-based failure detection with tunable interval and timeout parameters.",
        "Compared synchronous and asynchronous replication to quantify the consistency-performance trade-off.",
        "Ran controlled fault-injection experiments and visualized detection latency, downtime, and false positives with heatmaps and scatter plots.",
      ],
    },
    ja: {
      title: "学部生リサーチャー",
      org: "アレゲニー大学（ペンシルベニア州ミードビル）",
      period: "2026年1月 – 現在",
      advisor: "指導教員: Greg Kapfhammer 教授",
      linkLabel: "研究レポートを読む",
      bullets: [
        "障害検出のレイテンシ、ダウンタイム、レプリケーション戦略、一貫性の間のトレードオフを研究するため、C++ で分散キーバリューストアを設計・実装。",
        "間隔とタイムアウトを調整可能なハートビートベースの障害検出を実装。",
        "同期・非同期レプリケーションを比較し、一貫性と性能のトレードオフを定量化。",
        "制御された障害注入実験を行い、検出レイテンシ・ダウンタイム・誤検出をヒートマップと散布図で可視化。",
      ],
    },
  },
  {
    id: "abi-research-assistant",
    en: {
      title: "Undergraduate Research Assistant",
      org: "Arkansas Bioscience Institute, Jonesboro, AR",
      period: "Aug 2023 – Oct 2025",
      advisor: "Advisor: Prof. Bhattacharyya",
      bullets: [
        "Conducted machine-learning research on large-scale public-health and cancer datasets, improving dataset usability and model readiness.",
        "Built reproducible data pipelines for preprocessing, cleaning, normalization, and feature engineering.",
        "Developed imputation approaches for missing data to improve completeness and reliability.",
        "Applied regression and classification models to identify patterns and risk factors in health data.",
      ],
    },
    ja: {
      title: "学部生リサーチアシスタント",
      org: "アーカンソー・バイオサイエンス研究所（アーカンソー州ジョーンズボロ）",
      period: "2023年8月 – 2025年10月",
      advisor: "指導教員: Bhattacharyya 教授",
      bullets: [
        "大規模な公衆衛生データおよびがんデータを対象に機械学習研究を実施し、データセットの利用性とモデル適用性を向上。",
        "前処理・クレンジング・正規化・特徴量エンジニアリングのための再現可能なデータパイプラインを構築。",
        "欠損データの補完手法を開発し、データの完全性と信頼性を改善。",
        "回帰・分類モデルを適用し、健康データからパターンとリスク要因を特定。",
      ],
    },
  },
];

export const teachingRoles: Role[] = [
  {
    id: "cs-teaching-assistant",
    en: {
      title: "Teaching Assistant, Computer Science Department",
      org: "Allegheny College, Meadville, PA",
      period: "Jan 2026 – Present",
      bullets: [
        "Mentored 20 students building foundational Python skills in introductory computer science courses.",
        "Reviewed and graded assignments, giving feedback aimed at the specific gaps behind each mistake.",
        "Guided students in applying GitHub Actions to course projects and in practical software-development workflows.",
        "Held office hours to reinforce key concepts and unblock students on assignments.",
      ],
    },
    ja: {
      title: "ティーチングアシスタント（コンピュータサイエンス学科）",
      org: "アレゲニー大学（ペンシルベニア州ミードビル）",
      period: "2026年1月 – 現在",
      bullets: [
        "コンピュータサイエンス入門科目で、Python の基礎を学ぶ学生20名を指導。",
        "課題のレビューと採点を行い、誤答の背景にある理解のギャップに踏み込んだフィードバックを提供。",
        "GitHub Actions を課題に適用する方法と、実務的な開発ワークフローを指導。",
        "オフィスアワーを担当し、重要概念の定着と課題の詰まりの解消を支援。",
      ],
    },
  },
];
