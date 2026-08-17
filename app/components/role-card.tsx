import type { Language } from "../data/content";
import type { Role } from "../data/roles";
import { Card } from "./card";

type RoleCardProps = {
  role: Role;
  language: Language;
};

// 研究職・教育職に共通する経歴カード。役職、所属、期間、業務内容、成果物リンク。
export function RoleCard({ role, language }: RoleCardProps) {
  const text = role[language];

  return (
    <Card>
      {/* 期間は狭い画面で役職名の下に回り込ませる */}
      <div className="mb-1 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
        <h3 className="text-xl font-semibold text-slate-900">{text.title}</h3>
        <p className="shrink-0 text-sm text-slate-500">{text.period}</p>
      </div>

      <p className="text-slate-600">{text.org}</p>

      {text.advisor ? (
        <p className="mt-1 text-sm text-slate-500">{text.advisor}</p>
      ) : null}

      <ul className="mt-4 flex flex-col gap-2">
        {text.bullets.map((bullet) => (
          <li
            key={bullet}
            // ::before で作った点と本文を、折り返しても揃うように配置する
            className="relative pl-5 leading-relaxed text-slate-600 before:absolute before:left-0 before:top-[0.6em] before:size-1.5 before:rounded-full before:bg-slate-400"
          >
            {bullet}
          </li>
        ))}
      </ul>

      {role.link && text.linkLabel ? (
        <a
          href={role.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1 rounded-sm text-sm font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 transition hover:decoration-slate-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-900"
        >
          {text.linkLabel}
          <span aria-hidden="true">→</span>
        </a>
      ) : null}
    </Card>
  );
}
