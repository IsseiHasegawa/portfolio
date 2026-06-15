import type { Content } from "../data/content";
import { Section } from "./section";

type AboutSectionProps = {
  about: Content["about"];
};

export function AboutSection({ about }: AboutSectionProps) {
  return (
    <Section id="about" title={about.title}>
      <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
        {about.body}
      </p>
    </Section>
  );
}
