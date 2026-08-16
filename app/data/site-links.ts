// サイト内で使う固定 URL を1か所にまとめる
type SiteLinks = {
  email: string;
  github: string;
  // 空文字の間は Contact にボタンを描画しない。
  // 未設定のまま出すと LinkedIn のトップページに飛ばしてしまうため
  linkedIn: string;
  resume: string;
};

export const siteLinks: SiteLinks = {
  email: "mailto:hasegawa01@allegheny.edu", // メールクライアントを開くリンク
  github: "https://github.com/IsseiHasegawa", // GitHub プロフィール
  linkedIn: "", // TODO: https://www.linkedin.com/in/<自分のID> を設定する
  resume: "/resume.pdf", // public フォルダ内の PDF へのパス
};
