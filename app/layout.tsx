// =============================================================================
// app/layout.tsx — 全ページ共通の HTML 骨格と SEO メタデータ（Server Component）
// =============================================================================

// Next.js のメタデータ型をインポート（<head> タグ用の設定）
import type { Metadata } from "next";
// グローバル CSS（Tailwind と body の基本スタイル）を読み込む
import "./globals.css";

// サイトのベース URL を環境に応じて決める関数
function siteUrl(): string {
  // 環境変数 NEXT_PUBLIC_SITE_URL があれば最優先（独自ドメイン用）
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) {
    // 末尾スラッシュを除いて統一
    return explicit.replace(/\/$/, "");
  }
  // Vercel デプロイ時に自動設定されるホスト名
  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) {
    // https:// を付け、余分なスラッシュや既存のプロトコルを除去
    return `https://${vercel.replace(/^https?:\/\//, "").replace(/\/$/, "")}`;
  }
  // ローカル開発時のデフォルト
  return "http://localhost:3000";
}

// OGP 等で使う「サイトのルート URL」オブジェクト
const metadataBase = new URL(`${siteUrl()}/`);

// ブラウザタブ・SNS シェア用のデフォルトタイトル
const defaultTitle = "Issei Hasegawa | Portfolio";
// 検索結果・OGP 用のサイト説明文
const description =
  "Computer Science student at Allegheny College interested in distributed systems, operating systems, and reliable backend infrastructure.";

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
    "distributed systems",
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
    card: "summary",
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

// ルートレイアウト: すべての page.tsx を包む
export default function RootLayout({
  children, // 子として page.tsx の内容が入る
}: Readonly<{
  children: React.ReactNode; // React が描画できる任意のノード
}>) {
  return (
    // ドキュメントルート。lang は HTML 標準の言語属性
    <html lang="en" className="h-full antialiased">
      {/* ページ本体。children に Home コンポーネントが表示される */}
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
