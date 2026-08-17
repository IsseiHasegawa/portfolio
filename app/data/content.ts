// =============================================================================
// app/data/content.ts — 英語(en)・日本語(ja)の表示文言とナビ定義
// i18n ライブラリなし。content[language] で切り替える
//
// 経歴・プロジェクト・学歴などの実データは roles.ts / projects.ts /
// background.ts にある。ここに置くのは見出しと固定文言だけ。
// =============================================================================

export const content = {
  // ---------- 英語 ----------
  en: {
    name: "Issei Hasegawa", // ヘッダー・ヒーローの表示名
    nav: {
      about: "About",
      news: "News",
      research: "Research",
      projects: "Projects",
      experience: "Experience",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      location: "Meadville, PA · United States",
      summary:
        "Computer Science undergraduate at Allegheny College. I research machine learning systems, distributed systems, and the tooling that keeps software dependable when parts of it break.",
      projects: "View Projects", // プロジェクトへ飛ぶボタン文言
      resume: "View Resume", // 履歴書ボタン文言
      contact: "Contact Me", // 連絡先へ飛ぶボタン文言
    },
    about: {
      title: "About",
      body: "I am an undergraduate at Allegheny College majoring in Computer Science with a minor in Economics. My work sits where systems meet software reliability: I build tools that expose the weaknesses a test suite hides, and distributed prototypes that turn failure-handling trade-offs into numbers you can compare. I am drawn to infrastructure that keeps working after something in it goes wrong.",
      educationTitle: "Education",
      awardsTitle: "Awards & Honors",
    },
    research: {
      title: "Research",
    },
    projects: {
      title: "Projects",
    },
    experience: {
      title: "Experience",
    },
    skills: {
      title: "Skills",
    },
    contact: {
      title: "Contact",
      body: "I am looking for software engineering and research opportunities in systems, distributed infrastructure, and machine learning systems.",
      email: "Email", // メールボタンラベル
      resume: "Resume", // 履歴書ボタンラベル
    },
    language: "Language", // 言語切替 UI の aria-label
    menu: "Menu", // モバイルのメニュー開閉ボタンの aria-label
    news: {
      title: "News",
      empty: "No updates yet.",
    },
  },
  // ---------- 日本語（キー構造は en と同一） ----------
  ja: {
    name: "長谷川一聖",
    nav: {
      about: "自己紹介",
      news: "お知らせ",
      research: "研究",
      projects: "プロジェクト",
      experience: "経歴",
      skills: "スキル",
      contact: "連絡先",
    },
    hero: {
      location: "米国ペンシルベニア州ミードビル",
      summary:
        "アレゲニー大学コンピュータサイエンス専攻。機械学習システム、分散システム、そして一部が壊れてもソフトウェアを動かし続けるための技術を研究しています。",
      projects: "プロジェクトを見る",
      resume: "履歴書を見る",
      contact: "連絡する",
    },
    about: {
      title: "自己紹介",
      body: "アレゲニー大学でコンピュータサイエンスを専攻し、経済学を副専攻しています。関心はシステムとソフトウェア信頼性の交点にあり、テストスイートが覆い隠している弱点を明るみに出すツールや、障害処理のトレードオフを比較可能な数値に変える分散システムのプロトタイプを作っています。何かが壊れたあとも動き続けるインフラに惹かれています。",
      educationTitle: "学歴",
      awardsTitle: "受賞・表彰",
    },
    research: {
      title: "研究",
    },
    projects: {
      title: "プロジェクト",
    },
    experience: {
      title: "経歴",
    },
    skills: {
      title: "スキル",
    },
    contact: {
      title: "連絡先",
      body: "システム、分散インフラ、機械学習システムの領域で、ソフトウェアエンジニアリングおよび研究の機会を探しています。",
      email: "メール",
      resume: "履歴書",
    },
    language: "言語",
    menu: "メニュー",
    news: {
      title: "お知らせ",
      empty: "まだありません。",
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

// ヘッダーナビのリンク定義。並び順はページ上のセクション順と一致させる
export const sectionNav: readonly { href: string; labelKey: NavKey }[] = [
  { href: "#about", labelKey: "about" },
  { href: "#news", labelKey: "news" },
  { href: "#research", labelKey: "research" },
  { href: "#projects", labelKey: "projects" },
  { href: "#experience", labelKey: "experience" },
  { href: "#skills", labelKey: "skills" },
  { href: "#contact", labelKey: "contact" },
];
