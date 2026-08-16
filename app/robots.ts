import type { MetadataRoute } from "next";
import { siteUrl } from "./lib/site-url";

// /robots.txt を生成する。公開ポートフォリオなので全ページをクロール許可し、
// sitemap の場所だけ明示する。
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl()}/sitemap.xml`,
  };
}
