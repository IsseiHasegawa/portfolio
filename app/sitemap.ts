import type { MetadataRoute } from "next";
import { siteUrl } from "./lib/site-url";

// /sitemap.xml を生成する。現状は1ページ構成なのでトップのみ。
// 言語別ルート（/en, /ja）を追加したら、ここにも各 URL を並べる。
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl()}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
