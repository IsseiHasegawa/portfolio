"use client";

import { useEffect, useState } from "react";
// ヘッダーで使うデータ・型を content.ts からインポート
import {
  languages,
  sectionNav,
  type Content,
  type Language,
} from "../data/content";
import { useActiveSection } from "../lib/use-active-section";

// useActiveSection の依存配列を安定させるため、コンポーネントの外で1度だけ作る
const sectionIds = sectionNav.map(({ href }) => href.slice(1));

// SiteHeader の props 型
type SiteHeaderProps = {
  name: string; // 左上に表示する名前
  nav: Content["nav"]; // ナビラベル一式
  languageLabel: string; // 言語ボタン群の説明（スクリーンリーダー用）
  menuLabel: string; // モバイルの開閉ボタンの説明
  language: Language; // 現在の言語
  onLanguageChange: (language: Language) => void; // 言語変更コールバック
};

// 画面上部固定のヘッダーコンポーネント
export function SiteHeader({
  name,
  nav,
  languageLabel,
  menuLabel,
  language,
  onLanguageChange,
}: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection(sectionIds);

  // 画面外をタップして閉じられないため、Escape での離脱経路を用意する
  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  // デスクトップとモバイルパネルで同じリンクを使うため関数に切り出す
  const navLink = (href: string, label: string, extraClassName: string) => {
    const isActive = activeSection === href.slice(1);

    return (
      <a
        key={href}
        href={href}
        aria-current={isActive ? "true" : undefined}
        onClick={() => setMenuOpen(false)} // 遷移後にパネルを閉じる
        className={`rounded-sm transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-900 ${extraClassName} ${
          isActive
            ? "text-slate-900" // 現在地は色と下線で示す（太字にすると幅が変わる）
            : "text-slate-600 hover:text-slate-900"
        }`}
      >
        {label}
      </a>
    );
  };

  return (
    // fixed: スクロールしても上部に固定 / z-50: 他要素より前面
    <header
      className={`fixed left-0 top-0 z-50 w-full border-b border-slate-200/80 ${
        // メニュー展開中はパネルが不透明なので、上部バーだけ透けると質感がちぐはぐになる
        menuOpen ? "bg-white" : "bg-white/85 backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4">
        {/* 名前クリックでページ先頭へ */}
        <a
          href="#"
          className="rounded-sm text-sm font-bold tracking-wide text-slate-900 transition hover:text-slate-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-900"
        >
          {name}
        </a>

        <div className="flex items-center gap-4 text-sm sm:gap-6">
          {/* 狭い画面では隠し、下のパネルに逃がす */}
          <div className="hidden items-center gap-6 lg:flex">
            {sectionNav.map(({ href, labelKey }) =>
              navLink(
                href,
                nav[labelKey],
                "underline-offset-8 decoration-2 aria-[current]:underline",
              ),
            )}
          </div>

          {/* EN / 日本語 切替ボタン（画面幅にかかわらず常に表示） */}
          <div
            aria-label={languageLabel}
            className="flex rounded-full border border-slate-300 bg-white p-1"
            role="group"
          >
            {languages.map((option) => (
              <button
                key={option}
                type="button"
                lang={option} // ラベル「日本語」を英語として読み上げさせない
                aria-pressed={language === option} // 選択中かどうか
                onClick={() => onLanguageChange(option)} // 親の state を更新
                className={`rounded-full px-3 py-1 text-xs font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 ${
                  language === option
                    ? "bg-slate-900 text-white" // 選択中スタイル
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900" // 未選択スタイル
                }`}
              >
                {option === "en" ? "EN" : "日本語"}
              </button>
            ))}
          </div>

          {/* モバイル用の開閉ボタン */}
          <button
            type="button"
            aria-label={menuLabel}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
            className="rounded-md p-1 text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 lg:hidden"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {menuOpen ? (
                <path d="M6 6 18 18M18 6 6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* 折りたたみパネル。閉じている間も DOM に残し aria-controls の参照先を保つ */}
      <div
        id="mobile-nav"
        hidden={!menuOpen}
        className="border-t border-slate-200 bg-white px-6 py-2 lg:hidden"
      >
        <div className="flex flex-col">
          {sectionNav.map(({ href, labelKey }) =>
            navLink(href, nav[labelKey], "py-3 text-base"),
          )}
        </div>
      </div>
    </header>
  );
}
