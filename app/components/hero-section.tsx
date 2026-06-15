import { siteLinks } from "../data/site-links";
import type { Content } from "../data/content";
import { ButtonLink } from "./button-link";

type HeroSectionProps = {
  t: Content;
};

export function HeroSection({ t }: HeroSectionProps) {
  return (
    <section className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-24 sm:py-16">
      <div className="mb-8">
        <h1 className="mb-6 text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl">
          {t.name}
        </h1>

        <p className="mb-8 max-w-2xl text-xl leading-relaxed text-slate-600">
          {t.hero.summary}
        </p>

        <div className="flex flex-wrap gap-4">
          <ButtonLink href="#projects" variant="primary">
            {t.hero.projects}
          </ButtonLink>
          <ButtonLink href={siteLinks.resume} external>
            {t.hero.resume}
          </ButtonLink>
          <ButtonLink href="#contact">{t.hero.contact}</ButtonLink>
        </div>
      </div>
    </section>
  );
}
