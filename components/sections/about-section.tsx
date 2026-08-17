import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { skills } from "@/data/skills";
import { site } from "@/lib/site";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-28">
      <Reveal>
        <div className="panel rounded-[2rem] p-3 sm:p-4 md:p-6">
          <SectionHeading eyebrow="About" title="A quick intro" />

          <div className="mt-6 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
            <div className="rounded-2xl border border-white/10 bg-black/55 p-5 md:p-6">
              <p className="max-w-3xl text-sm leading-7 text-zinc-300 sm:text-base">
                {site.bio}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/55 p-5 md:p-6">
              <p className="text-mono text-xs uppercase tracking-[0.35em] text-zinc-500">
                Core Stack
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <li key={skill} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-zinc-200">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              ["Problem Solving", "I break down messy product problems into practical implementation steps."],
              ["Build Fast", "I like shipping useful features quickly and iterating with feedback."],
              ["Hands-On", "From API wiring to polished UI, I enjoy owning the full build process."],
            ].map(([title, text], index) => (
              <Reveal key={title} delay={index * 0.08}>
                <div className="rounded-2xl border border-white/10 bg-black/55 p-5">
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-300">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
