// サイト内で使う固定 URL を1か所にまとめる
type SiteLinks = {
  email: string;
  github: string;
  linkedIn: string;
  resume: string;
};

export const siteLinks: SiteLinks = {
  // 大学のアドレスは卒業後に失効するため、CV と同じ個人アドレスを使う
  email: "mailto:issei330hasegawa@gmail.com",
  github: "https://github.com/IsseiHasegawa", // GitHub プロフィール
  linkedIn: "https://www.linkedin.com/in/issei-hasegawa", // LinkedIn プロフィール
  resume: "/resume.pdf", // public フォルダ内の PDF へのパス
};
