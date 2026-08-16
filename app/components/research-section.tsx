import type { Content } from "../data/content";
import { Card } from "./card";
import { Section } from "./section";

type ResearchSectionProps = {
  research: Content["research"];
};

// 研究紹介セクション
export function ResearchSection({ research }: ResearchSectionProps) {
  return (
    <Section id="research" title={research.title}>
      <Card>
        <h3 className="mb-3 text-2xl font-semibold text-slate-900">
          {research.name} {/* 研究タイトル */}
        </h3>
        <p className="mb-4 text-slate-500">{research.role} {/* 所属・役割 */}</p>
        <p className="leading-relaxed text-slate-600">{research.body}</p>
      </Card>
    </Section>
  );
}
