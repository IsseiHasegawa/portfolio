import { skills } from "../data/background";
import type { Content, Language } from "../data/content";
import { Section } from "./section";
import { TagList } from "./tag-list";

type SkillsSectionProps = {
  skills: Content["skills"];
  language: Language;
};

// 技術スキルセクション。分類ごとにタグを並べる
export function SkillsSection({
  skills: labels,
  language,
}: SkillsSectionProps) {
  return (
    <Section id="skills" title={labels.title}>
      <div className="flex flex-col gap-6">
        {skills[language].map((group) => (
          <div key={group.label}>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">
              {group.label}
            </h3>
            <TagList items={group.items} label={group.label} />
          </div>
        ))}
      </div>
    </Section>
  );
}
