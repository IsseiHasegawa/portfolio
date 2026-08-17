// =============================================================================
// app/layout.tsx — 全ページ共通の HTML 骨格と SEO メタデータ（Server Component）
// =============================================================================

// Next.js のメタデータ型をインポート（<head> タグ用の設定）
import type { Metadata } from "next";
// 本文用の欧文フォント。next/font がビルド時に取得して自己ホストする
import { Inter } from "next/font/google";
// グローバル CSS（Tailwind と body の基本スタイル）を読み込む
import "./globals.css";
// sitemap / robots と共通のベース URL
import { siteUrl } from "./lib/site-url";
// 外部プロフィールへのリンク（構造化データの sameAs に使う）
import { siteLinks } from "./data/site-links";

// 可変フォントを CSS 変数として公開し、globals.css の --font-sans から参照する。
// display: "swap" で、フォント取得中もテキストが消えないようにする。
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// OGP 等で使う「サイトのルート URL」オブジェクト
const siteBase = siteUrl();
const metadataBase = new URL(`${siteBase}/`);

// ブラウザタブ・SNS シェア用のデフォルトタイトル
const defaultTitle = "Issei Hasegawa | Portfolio";
// 検索結果・OGP 用のサイト説明文
const description =
  "Computer Science undergraduate at Allegheny College researching machine learning systems, distributed systems, and software reliability.";

// Next.js がビルド時に <head> に出力するメタ情報
export const metadata: Metadata = {
  metadataBase, // 相対 URL を絶対 URL に変換する基準
  title: {
    default: defaultTitle, // トップページの <title>
    template: "%s | Issei Hasegawa", // 子ページ用タイトルテンプレート
  },
  description, // <meta name="description">
  keywords: [ // 検索キーワードのヒント
    "Issei Hasegawa",
    "Computer Science",
    "machine learning systems",
    "distributed systems",
    "mutation testing",
    "software reliability",
    "Allegheny College",
    "portfolio",
  ],
  authors: [{ name: "Issei Hasegawa", url: "https://github.com/IsseiHasegawa" }],
  creator: "Issei Hasegawa",
  openGraph: { // Facebook / LinkedIn 等のプレビュー用
    type: "website",
    locale: "en_US",
    alternateLocale: ["ja_JP"],
    url: "/",
    siteName: "Issei Hasegawa",
    title: defaultTitle,
    description,
  },
  twitter: { // X (Twitter) カード用
    // opengraph-image.tsx が 1200x630 を生成するので大きいカードを使う
    card: "summary_large_image",
    title: defaultTitle,
    description,
  },
  robots: { // 検索エンジンにインデックス許可
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/", // 正規 URL（重複コンテンツ対策）
  },
};

// 検索エンジンに「誰のサイトか」を機械可読な形で伝える構造化データ。
// 名前だけでは同姓同名と区別できないため、所属・専門分野・外部プロフィールを添える。
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Issei Hasegawa",
  alternateName: "長谷川一聖",
  url: siteBase,
  description,
  jobTitle: "Undergraduate Researcher",
  email: siteLinks.email.replace(/^mailto:/, ""),
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: "Allegheny College",
    url: "https://allegheny.edu",
  },
  knowsAbout: [
    "Machine Learning Systems",
    "Distributed Systems",
    "Operating Systems",
    "Computer Networks",
    "Software Testing",
    "Software Reliability",
    "C++",
  ],
  // LinkedIn は未設定のことがあるので空の項目を落とす
  sameAs: [siteLinks.github, siteLinks.linkedIn].filter(Boolean),
};

// ルートレイアウト: すべての page.tsx を包む
export default function RootLayout({
  children, // 子として page.tsx の内容が入る
}: Readonly<{
  children: React.ReactNode; // React が描画できる任意のノード
}>) {
  return (
    // ドキュメントルート。lang は HTML 標準の言語属性
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      {/* ページ本体。children に Home コンポーネントが表示される */}
      <body className="min-h-full flex flex-col">
        {/* 構造化データ。"<" をエスケープして script の早期終了を防ぐ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
