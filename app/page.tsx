// =============================================================================
// app/page.tsx — トップページ（/）のエントリポイント
// 詳細はファイル先頭のブロックコメントも参照
// =============================================================================

// このファイルを Client Component にする宣言（useState を使うため必須）
"use client";

// React の状態管理フックをインポート
import { useState } from "react";
// 翻訳データと言語型をインポート
import { content, type Language } from "./data/content";
// <html lang> を現在の言語に追従させるフック
import { useDocumentLanguage } from "./lib/use-document-language";
// 各セクションの UI コンポーネントをインポート
import { AboutSection } from "./components/about-section";
import { ContactSection } from "./components/contact-section";
import { HeroSection } from "./components/hero-section";
import { NewsSection } from "./components/news-section";
import { ProjectsSection } from "./components/projects-section";
import { ResearchSection } from "./components/research-section";
import { SiteHeader } from "./components/site-header";

// ページのメインコンポーネント（Next.js が / にこの関数の戻り値を表示する）
export default function Home() {
  // 現在の表示言語を state で保持。初期値 "en"（英語）
  const [language, setLanguage] = useState<Language>("en");

  // language が "en" なら content.en、"ja" なら content.ja が入る
  const t = content[language];

  // 支援技術に正しい言語を伝えるため <html lang> を同期する
  useDocumentLanguage(language);

  // JSX を返してブラウザに描画させる
  return (
    // ページ全体のラッパー。最低画面高・白背景・文字色を指定
    <main className="min-h-screen bg-white text-slate-800">
      {/* 固定ヘッダー: 名前・ナビ・言語切替 */}
      <SiteHeader
        name={t.name} // ヘッダー左の表示名
        nav={t.nav} // ナビ各リンクのラベル
        languageLabel={t.language} // 言語ボタン群の aria-label 用
        language={language} // 現在選択中の言語
        onLanguageChange={setLanguage} // ボタン押下時に language を更新する関数
      />

      {/* ファーストビュー（名前・概要・CTA） */}
      <HeroSection t={t} />
      {/* 自己紹介文 */}
      <AboutSection about={t.about} />
      {/* お知らせ一覧（日付データは news.ts、ラベルは t.news） */}
      <NewsSection news={t.news} language={language} />
      {/* 研究内容 */}
      <ResearchSection research={t.research} />
      {/* プロジェクト一覧 */}
      <ProjectsSection projects={t.projects} />
      {/* 連絡先リンク */}
      <ContactSection contact={t.contact} />
    </main>
  );
}
