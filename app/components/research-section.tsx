import type { Content, Language } from "../data/content";
import { researchRoles } from "../data/roles";
import { RoleCard } from "./role-card";
import { Section } from "./section";

type ResearchSectionProps = {
  research: Content["research"];
  language: Language;
};

// 研究経歴セクション。新しいものから縦に並べる
export function ResearchSection({ research, language }: ResearchSectionProps) {
  return (
    <Section id="research" title={research.title}>
      <div className="flex flex-col gap-6">
        {researchRoles.map((role) => (
          <RoleCard key={role.id} role={role} language={language} />
        ))}
      </div>
    </Section>
  );
}
