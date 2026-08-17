import type { Content, Language } from "../data/content";
import { projects } from "../data/projects";
import { Card } from "./card";
import { Section } from "./section";
import { TagList } from "./tag-list";

type ProjectsSectionProps = {
  projects: Content["projects"];
  language: Language;
};

// プロジェクト一覧セクション。技術スタックと成果物リンクを添える
export function ProjectsSection({
  projects: labels,
  language,
}: ProjectsSectionProps) {
  return (
    <Section id="projects" title={labels.title} titleSpacing="wide">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => {
          const text = project[language];

          return (
            // タグとリンクを下端に揃えるため、カード内を縦フレックスにする
            <Card key={project.id}>
              <div className="flex h-full flex-col">
                <h3 className="mb-3 text-xl font-semibold text-slate-900">
                  {text.title}
                </h3>

                <p className="leading-relaxed text-slate-600">{text.body}</p>

                {/* mt-auto: 本文の長さが違ってもカード間でタグの高さを揃える */}
                <div className="mt-auto pt-4">
                  <TagList items={project.tags} label={text.title} />
                </div>

                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 self-start rounded-sm text-sm font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 transition hover:decoration-slate-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-900"
                  >
                    {text.linkLabel}
                    <span aria-hidden="true">→</span>
                  </a>
                ) : null}
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
