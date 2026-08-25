import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { skills } from "@/data/skills";
import { site } from "@/lib/site";

const pillars = [
  {
    icon: "💡",
    title: "Problem Solving",
    text: "I break down complex requirements into clean, practical architecture and elegant implementation steps.",
  },
  {
    icon: "⚡",
    title: "Build & Iterate Fast",
    text: "I like shipping functional features with clean code, testing early, and iterating rapidly with feedback.",
  },
  {
    icon: "🛠️",
    title: "Full-Stack Ownership",
    text: "From backend APIs and databases to responsive frontend UI, I enjoy owning the complete build process.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-28">
      <Reveal>
        <div className="panel rounded-[2rem] p-3 sm:p-4 md:p-6">
          <SectionHeading eyebrow="About Me" title="A quick intro" />

          <div className="mt-6 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
            <div className="rounded-2xl border border-white/10 bg-black/40 p-5 md:p-6 backdrop-blur-xl">
              <p className="max-w-3xl text-sm leading-7 text-zinc-300 sm:text-base font-light">
                {site.bio}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-5 md:p-6 backdrop-blur-xl">
              <p className="text-mono text-xs uppercase tracking-[0.35em] text-zinc-400 font-medium">
                Core Stack
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs text-zinc-200 shadow-sm backdrop-blur-md transition-all duration-200 hover:border-white/30 hover:bg-white/10 hover:text-white"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {pillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={index * 0.08}>
                <div className="rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-xl transition-all duration-300 hover:border-white/30 hover:bg-black/60">
                  <div className="text-2xl mb-2">{pillar.icon}</div>
                  <h3 className="text-lg font-semibold text-white">{pillar.title}</h3>
                  <p className="mt-2.5 text-sm leading-6 text-zinc-300">{pillar.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
