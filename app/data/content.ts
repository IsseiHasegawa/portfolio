// =============================================================================
// app/data/content.ts — 英語(en)・日本語(ja)の表示文言とナビ定義
// i18n ライブラリなし。content[language] で切り替える
// =============================================================================

// 翻訳オブジェクトをエクスポート
export const content = {
  // ---------- 英語 ----------
  en: {
    name: "Issei Hasegawa", // ヘッダー・ヒーローの表示名
    nav: {
      about: "About", // #about リンクのラベル
      news: "News", // #news リンクのラベル
      research: "Research", // #research リンクのラベル
      projects: "Projects", // #projects リンクのラベル
      contact: "Contact", // #contact リンクのラベル
    },
    hero: {
      summary:
        "Computer Science student interested in distributed systems, operating systems, and reliable backend infrastructure.", // ヒーロー下の一言紹介
      projects: "View Projects", // プロジェクトへ飛ぶボタン文言
      resume: "View Resume", // 履歴書ボタン文言
      contact: "Contact Me", // 連絡先へ飛ぶボタン文言
    },
    about: {
      title: "About", // 自己紹介セクション見出し
      body: "I am an undergraduate student majoring in Computer Science at Allegheny College. My academic interests include distributed systems, operating systems, networking systems, and software reliability. I enjoy building systems and studying how real-world infrastructure remains dependable under failures.", // 自己紹介本文
    },
    research: {
      title: "Research", // 研究セクション見出し
      name: "Distributed Key-Value Store Research", // 研究テーマ名
      role: "Undergraduate Researcher · Allegheny College", // 役割・所属
      body: "I am designing and implementing a distributed key-value store in C++ to study the trade-offs between failure detection and replication strategies. The system uses heartbeat-based failure detection with configurable intervals and timeouts, as well as synchronous and asynchronous replication modes.", // 研究の説明
    },
    projects: {
      title: "Projects", // プロジェクトセクション見出し
      items: [
        {
          title: "Distributed Key-Value Store", // プロジェクト1のタイトル
          body: "A C++ research prototype for studying failure detection, replication, and system availability.", // プロジェクト1の説明
        },
        {
          title: "Open Source Contributions", // プロジェクト2のタイトル
          body: "Documentation and contribution work across open-source projects using Git, GitHub, and pull request workflows.", // プロジェクト2の説明
        },
      ],
    },
    contact: {
      title: "Contact", // 連絡先セクション見出し
      body: "I am interested in software engineering, backend systems, distributed systems, and research opportunities.", // 連絡先の前置き文
      email: "Email", // メールボタンラベル
      resume: "Resume", // 履歴書ボタンラベル
    },
    language: "Language", // 言語切替 UI の aria-label
    news: {
      title: "News", // お知らせセクション見出し
      empty: "No updates yet. Add items in app/data/news.ts.", // お知らせ0件時のメッセージ
    },
  },
  // ---------- 日本語（キー構造は en と同一） ----------
  ja: {
    name: "長谷川一聖", // 日本語での表示名
    nav: {
      about: "自己紹介",
      news: "お知らせ",
      research: "研究",
      projects: "プロジェクト",
      contact: "連絡先",
    },
    hero: {
      summary:
        "分散システム、オペレーティングシステム、信頼性の高いバックエンド基盤に関心を持つコンピューターサイエンス専攻の学生です。",
      projects: "プロジェクトを見る",
      resume: "履歴書を見る",
      contact: "連絡先",
    },
    about: {
      title: "自己紹介",
      body: "Allegheny Collegeでコンピューターサイエンスを専攻している学部生です。分散システム、オペレーティングシステム、ネットワークシステム、ソフトウェアの信頼性に関心があります。システムを構築し、実世界のインフラが障害時にもどのように安定して動き続けるかを学ぶことに面白さを感じています。",
    },
    research: {
      title: "研究",
      name: "分散キーバリューストアの研究",
      role: "学部研究員 · Allegheny College",
      body: "障害検出とレプリケーション戦略のトレードオフを調べるため、C++で分散キーバリューストアを設計・実装しています。このシステムでは、設定可能な間隔とタイムアウトを持つハートビートベースの障害検出に加え、同期・非同期のレプリケーション方式を扱います。",
    },
    projects: {
      title: "プロジェクト",
      items: [
        {
          title: "分散キーバリューストア",
          body: "障害検出、レプリケーション、システム可用性を研究するためのC++プロトタイプです。",
        },
        {
          title: "オープンソース貢献",
          body: "Git、GitHub、プルリクエストのワークフローを用いた、オープンソースプロジェクトでのドキュメント作成と貢献活動です。",
        },
      ],
    },
    contact: {
      title: "連絡先",
      body: "ソフトウェアエンジニアリング、バックエンドシステム、分散システム、研究機会に関心があります。",
      email: "メール",
      resume: "履歴書",
    },
    language: "言語",
    news: {
      title: "お知らせ",
      empty: "まだありません。app/data/news.ts に項目を追加してください。",
    },
  },
} as const; // リテラル型を固定し、型推論を厳密にする

// content のキー "en" | "ja" からなる型
export type Language = keyof typeof content;

// 1言語分の文言オブジェクトの型
export type Content = (typeof content)[Language];

// nav オブジェクトのキー型（about, news, ...）
export type NavKey = keyof Content["nav"];

// 言語切替ボタンでループする配列
export const languages = ["en", "ja"] as const satisfies readonly Language[];

// ヘッダーナビのリンク定義（href と nav のキーを対応付け）
export const sectionNav: readonly { href: string; labelKey: NavKey }[] = [
  { href: "#about", labelKey: "about" }, // 自己紹介へジャンプ
  { href: "#news", labelKey: "news" }, // お知らせへジャンプ
  { href: "#research", labelKey: "research" }, // 研究へジャンプ
  { href: "#projects", labelKey: "projects" }, // プロジェクトへジャンプ
  { href: "#contact", labelKey: "contact" }, // 連絡先へジャンプ
];
