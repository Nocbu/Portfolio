import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { experience } from "@/data/experience";

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-28">
      <Reveal>
        <div className="panel rounded-[2rem] p-3 sm:p-4 md:p-6">
          <SectionHeading eyebrow="Experience" title="What I've been doing" />
          <div className="mt-6 grid gap-4">
            {experience.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <article className="rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-5 md:p-6 backdrop-blur-xl transition-all duration-300 hover:border-[var(--border-hover)]">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--muted)]" />
                    <p className="text-mono text-xs uppercase tracking-[0.35em] text-[var(--muted)] font-medium">
                      {item.period}
                    </p>
                  </div>
                  <h3 className="mt-3 text-xl font-semibold text-[var(--text)] md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--muted)] sm:text-base font-light">
                    {item.summary}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
