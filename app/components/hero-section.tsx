// 固定 URL と文言型をインポート
import { siteLinks } from "../data/site-links";
import type { Content } from "../data/content";
import { ButtonLink } from "./button-link";

// HeroSection は文言オブジェクト全体を受け取る
type HeroSectionProps = {
  t: Content;
};

// ファーストビュー（画面いっぱいのヒーロー領域）
export function HeroSection({ t }: HeroSectionProps) {
  return (
    <section className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-24 sm:py-16">
      <div className="mb-8">
        <h1 className="mb-6 text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl">
          {t.name} {/* 大きな見出しで名前表示 */}
        </h1>

        <p className="mb-8 max-w-2xl text-xl leading-relaxed text-slate-600">
          {t.hero.summary} {/* 一言キャッチコピー */}
        </p>

        <div className="flex flex-wrap gap-4">
          <ButtonLink href="#projects" variant="primary">
            {t.hero.projects} {/* メイン CTA */}
          </ButtonLink>
          <ButtonLink href={siteLinks.resume} external>
            {t.hero.resume} {/* PDF を新しいタブで */}
          </ButtonLink>
          <ButtonLink href="#contact">{t.hero.contact}</ButtonLink>
        </div>
      </div>
    </section>
  );
}
