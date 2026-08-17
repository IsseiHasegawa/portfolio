import type { Content, Language } from "../data/content";
import { teachingRoles } from "../data/roles";
import { RoleCard } from "./role-card";
import { Section } from "./section";

type ExperienceSectionProps = {
  experience: Content["experience"];
  language: Language;
};

// 研究以外の職歴（現状はティーチングアシスタント）
export function ExperienceSection({
  experience,
  language,
}: ExperienceSectionProps) {
  return (
    <Section id="experience" title={experience.title}>
      <div className="flex flex-col gap-6">
        {teachingRoles.map((role) => (
          <RoleCard key={role.id} role={role} language={language} />
        ))}
      </div>
    </Section>
  );
}
