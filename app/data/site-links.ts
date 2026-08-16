// サイト内で使う固定 URL を1か所にまとめたオブジェクト
export const siteLinks = {
  email: "mailto:hasegawa01@allegheny.edu", // メールクライアントを開くリンク
  github: "https://github.com/IsseiHasegawa", // GitHub プロフィール
  linkedIn: "https://www.linkedin.com/", // LinkedIn（要: 実際のプロフィール URL に差し替え可）
  resume: "/resume.pdf", // public フォルダ内の PDF へのパス
} as const; // 読み取り専用・リテラル型に固定
