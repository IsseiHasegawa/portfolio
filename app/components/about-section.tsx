import { awards, education } from "../data/background";
import type { Content, Language } from "../data/content";
import { Card } from "./card";
import { Section } from "./section";
import { TagList } from "./tag-list";

type AboutSectionProps = {
  about: Content["about"];
  language: Language;
};

// 自己紹介セクション。本文に続けて学歴と受賞歴を並べる
export function AboutSection({ about, language }: AboutSectionProps) {
  const school = education[language];
  const honors = awards[language];

  return (
    <Section id="about" title={about.title}>
      <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
        {about.body}
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <Card>
          <h3 className="mb-3 text-lg font-semibold text-slate-900">
            {about.educationTitle}
          </h3>

          <p className="font-medium text-slate-800">{school.school}</p>
          <p className="text-slate-600">{school.degree}</p>
          <p className="mt-1 text-sm text-slate-500">{school.period}</p>
          <p className="text-sm text-slate-500">{school.advisor}</p>

          <p className="mb-2 mt-4 text-sm font-semibold text-slate-700">
            {school.courseworkLabel}
          </p>
          <TagList items={school.coursework} label={school.courseworkLabel} />
        </Card>

        <Card>
          <h3 className="mb-3 text-lg font-semibold text-slate-900">
            {about.awardsTitle}
          </h3>

          <ul className="flex flex-col gap-2">
            {honors.map((honor) => (
              <li
                key={honor}
                className="relative pl-5 leading-relaxed text-slate-600 before:absolute before:left-0 before:top-[0.6em] before:size-1.5 before:rounded-full before:bg-slate-400"
              >
                {honor}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </Section>
  );
}
