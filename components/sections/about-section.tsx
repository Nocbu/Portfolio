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
            <div className="rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-5 md:p-6 backdrop-blur-xl transition-colors duration-500">
              <p className="max-w-3xl text-sm leading-7 text-[var(--muted)] sm:text-base font-light">
                {site.bio}
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-5 md:p-6 backdrop-blur-xl transition-colors duration-500">
              <p className="text-mono text-xs uppercase tracking-[0.35em] text-[var(--muted)] font-medium">
                Core Stack
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-[var(--border)] bg-[var(--badge-bg)] px-3.5 py-1.5 text-xs text-[var(--text)] shadow-sm backdrop-blur-md transition-all duration-200 hover:border-[var(--border-hover)] hover:scale-105"
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
                <div className="rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-5 backdrop-blur-xl transition-all duration-300 hover:border-[var(--border-hover)]">
                  <div className="text-2xl mb-2">{pillar.icon}</div>
                  <h3 className="text-lg font-semibold text-[var(--text)]">{pillar.title}</h3>
                  <p className="mt-2.5 text-sm leading-6 text-[var(--muted)]">{pillar.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
