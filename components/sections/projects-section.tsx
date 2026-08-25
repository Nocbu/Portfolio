import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/ui/project-card";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-28">
      <Reveal>
        <div className="panel rounded-[2rem] p-3 sm:p-4 md:p-6">
          <SectionHeading eyebrow="Projects" title="Selected work" />
          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            {projects.map((project, index) => (
              <Reveal key={project.title} delay={index * 0.08}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
