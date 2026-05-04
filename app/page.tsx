"use client";

import { useMemo, useState } from "react";
import { getNewsSorted } from "./data/news";

const content = {
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

type Language = keyof typeof content;

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const t = content[language];
  const sortedNews = useMemo(() => getNewsSorted(), []);

  const formatNewsDate = (iso: string) =>
    new Intl.DateTimeFormat(language === "ja" ? "ja-JP" : "en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(new Date(`${iso}T12:00:00`));

  return (
    <main className="min-h-screen bg-white text-slate-800">
      <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-200/80 bg-white/85 backdrop-blur-md">
        <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-4">
          <a href="#" className="text-sm font-bold tracking-wide text-slate-900">
            {t.name}
          </a>

          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 sm:gap-6">
            <a href="#about" className="transition hover:text-slate-900">
              {t.nav.about}
            </a>
            <a href="#news" className="transition hover:text-slate-900">
              {t.nav.news}
            </a>
            <a href="#research" className="transition hover:text-slate-900">
              {t.nav.research}
            </a>
            <a href="#projects" className="transition hover:text-slate-900">
              {t.nav.projects}
            </a>
            <a href="#contact" className="transition hover:text-slate-900">
              {t.nav.contact}
            </a>

            <div
              aria-label={t.language}
              className="flex rounded-full border border-slate-300 bg-white p-1"
              role="group"
            >
              {(["en", "ja"] as const).map((option) => (
                <button
                  key={option}
                  type="button"
                  aria-pressed={language === option}
                  onClick={() => setLanguage(option)}
                  className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                    language === option
                      ? "bg-slate-900 text-white"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {option === "en" ? "EN" : "日本語"}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </header>

      <section className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-24 sm:py-16">
        <div className="mb-8">
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl">
            {t.name}
          </h1>

          <p className="mb-8 max-w-2xl text-xl leading-relaxed text-slate-600">
            {t.hero.summary}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              {t.hero.projects}
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-900 hover:text-slate-900"
            >
              {t.hero.resume}
            </a>

            <a
              href="#contact"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-900 hover:text-slate-900"
            >
              {t.hero.contact}
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-slate-200 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-3xl font-bold text-slate-900">
            {t.about.title}
          </h2>

          <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
            {t.about.body}
          </p>
        </div>
      </section>

      <section id="news" className="border-t border-slate-200 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-3xl font-bold text-slate-900">
            {t.news.title}
          </h2>

          {sortedNews.length === 0 ? (
            <p className="text-slate-500">{t.news.empty}</p>
          ) : (
            <ul className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-slate-50 px-6 py-2">
              {sortedNews.map((item) => {
                const copy = item[language];
                const titleClass =
                  "text-lg font-semibold text-slate-900 transition hover:text-slate-600";

                return (
                  <li key={item.id} className="py-6 first:pt-4 last:pb-4">
                    <time
                      dateTime={item.date}
                      className="text-sm font-medium text-slate-500"
                    >
                      {formatNewsDate(item.date)}
                    </time>

                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`mt-2 block ${titleClass}`}
                      >
                        {copy.title}
                      </a>
                    ) : (
                      <h3 className={`mt-2 ${titleClass}`}>{copy.title}</h3>
                    )}

                    <p className="mt-2 max-w-3xl leading-relaxed text-slate-600">
                      {copy.body}
                    </p>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </section>

      <section id="research" className="border-t border-slate-200 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-3xl font-bold text-slate-900">
            {t.research.title}
          </h2>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="mb-3 text-2xl font-semibold text-slate-900">
              {t.research.name}
            </h3>

            <p className="mb-4 text-slate-500">{t.research.role}</p>

            <p className="leading-relaxed text-slate-600">
              {t.research.body}
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="border-t border-slate-200 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-3xl font-bold text-slate-900">
            {t.projects.title}
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {t.projects.items.map((project) => (
              <div
                key={project.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <h3 className="mb-3 text-xl font-semibold text-slate-900">
                  {project.title}
                </h3>

                <p className="text-slate-600">{project.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-slate-200 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-3xl font-bold text-slate-900">
            {t.contact.title}
          </h2>

          <p className="mb-6 max-w-2xl text-lg text-slate-600">
            {t.contact.body}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:hasegawa01@allegheny.edu"
              className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              {t.contact.email}
            </a>

            <a
              href="https://github.com/IsseiHasegawa"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-900 hover:text-slate-900"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-900 hover:text-slate-900"
            >
              LinkedIn
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-900 hover:text-slate-900"
            >
              {t.contact.resume}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
