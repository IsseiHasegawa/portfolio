import type { Content } from "../data/content";
import { Card } from "./card";
import { Section } from "./section";

type ProjectsSectionProps = {
  projects: Content["projects"];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <Section id="projects" title={projects.title} titleSpacing="wide">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.items.map((project) => (
          <Card key={project.title}>
            <h3 className="mb-3 text-xl font-semibold text-slate-900">
              {project.title}
            </h3>
            <p className="text-slate-600">{project.body}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
