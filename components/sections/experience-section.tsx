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
                <article className="rounded-2xl border border-white/10 bg-black/55 p-5 md:p-6">
                  <p className="text-mono text-xs uppercase tracking-[0.35em] text-zinc-500">
                    {item.period}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-white md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-300 sm:text-base">
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
