import type { Content } from "../data/content";
import { Card } from "./card";
import { Section } from "./section";

type ResearchSectionProps = {
  research: Content["research"];
};

export function ResearchSection({ research }: ResearchSectionProps) {
  return (
    <Section id="research" title={research.title}>
      <Card>
        <h3 className="mb-3 text-2xl font-semibold text-slate-900">
          {research.name}
        </h3>
        <p className="mb-4 text-slate-500">{research.role}</p>
        <p className="leading-relaxed text-slate-600">{research.body}</p>
      </Card>
    </Section>
  );
}
