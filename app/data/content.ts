export const content = {
  en: {
    name: "Issei Hasegawa",
    nav: {
      about: "About",
      news: "News",
      research: "Research",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      summary:
        "Computer Science student interested in distributed systems, operating systems, and reliable backend infrastructure.",
      projects: "View Projects",
      resume: "View Resume",
      contact: "Contact Me",
    },
    about: {
      title: "About",
      body: "I am an undergraduate student majoring in Computer Science at Allegheny College. My academic interests include distributed systems, operating systems, networking systems, and software reliability. I enjoy building systems and studying how real-world infrastructure remains dependable under failures.",
    },
    research: {
      title: "Research",
      name: "Distributed Key-Value Store Research",
      role: "Undergraduate Researcher · Allegheny College",
      body: "I am designing and implementing a distributed key-value store in C++ to study the trade-offs between failure detection and replication strategies. The system uses heartbeat-based failure detection with configurable intervals and timeouts, as well as synchronous and asynchronous replication modes.",
    },
    projects: {
      title: "Projects",
      items: [
        {
          title: "Distributed Key-Value Store",
          body: "A C++ research prototype for studying failure detection, replication, and system availability.",
        },
        {
          title: "Open Source Contributions",
          body: "Documentation and contribution work across open-source projects using Git, GitHub, and pull request workflows.",
        },
      ],
    },
    contact: {
      title: "Contact",
      body: "I am interested in software engineering, backend systems, distributed systems, and research opportunities.",
      email: "Email",
      resume: "Resume",
    },
    language: "Language",
    news: {
      title: "News",
      empty: "No updates yet. Add items in app/data/news.ts.",
    },
  },
  ja: {
    name: "長谷川一聖",
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
} as const;

export type Language = keyof typeof content;
export type Content = (typeof content)[Language];
export type NavKey = keyof Content["nav"];

export const languages = ["en", "ja"] as const satisfies readonly Language[];

export const sectionNav: readonly { href: string; labelKey: NavKey }[] = [
  { href: "#about", labelKey: "about" },
  { href: "#news", labelKey: "news" },
  { href: "#research", labelKey: "research" },
  { href: "#projects", labelKey: "projects" },
  { href: "#contact", labelKey: "contact" },
];
