import { Reveal } from "@/components/ui/reveal";
import { TypewriterHeading } from "@/components/ui/typewriter-heading";
import { site } from "@/lib/site";
import Image from "next/image";

const stats = [
  ["Focused Stack", "React, Spring Boot, Express, MongoDB"],
  ["Current Focus", "Full-stack apps with strong UX"],
  ["Open To", "Collaboration and product roles"],
];

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden pt-2">
      <div className="absolute inset-0 -z-10 grid-noise opacity-20" />

      <div className="panel-strong rounded-[2rem] p-3 sm:p-4 md:p-6">
        <div className="grid rounded-[1.5rem] border border-[var(--card-border)] bg-[var(--card-bg)] p-5 sm:p-6 md:p-8 lg:grid-cols-2 lg:p-10 backdrop-blur-2xl relative overflow-hidden transition-colors duration-500">
          
          <div className="min-w-0 lg:pr-10">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--badge-bg)] px-4 py-2 text-xs uppercase tracking-[0.3em] text-[var(--badge-text)] backdrop-blur-md">
                <span className="text-sm">🌧️</span>
                <span>{site.role}</span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <TypewriterHeading
                className="mt-6 text-4xl font-semibold tracking-tight text-[var(--text)] sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-sm"
                text="Building products that feel clean, fast, and genuinely useful."
              />
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base md:text-lg font-light drop-shadow-sm">
                {site.bio}
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <a
                  className="rounded-full border border-[var(--btn-primary-border)] bg-[var(--btn-primary-bg)] px-6 py-3 text-sm font-semibold text-[var(--btn-primary-text)] shadow-[0_4px_20px_rgba(0,0,0,0.2)] backdrop-blur-md transition-all duration-300 hover:bg-[var(--btn-primary-hover-bg)]"
                  href="#projects"
                >
                  View projects
                </a>
                <a
                  className="rounded-full border border-[var(--btn-secondary-border)] bg-[var(--btn-secondary-bg)] px-6 py-3 text-sm font-semibold text-[var(--btn-secondary-text)] backdrop-blur-md transition-all duration-300 hover:border-[var(--border-hover)] hover:bg-[var(--btn-hover-bg)]"
                  href="#contact"
                >
                  Contact me
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-10 grid gap-4 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {stats.map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-4 backdrop-blur-xl transition-all duration-300 hover:border-[var(--border-hover)]"
                  >
                    <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)] font-medium">
                      {label}
                    </p>
                    <p className="mt-2.5 text-sm leading-6 text-[var(--text)] sm:text-base font-normal">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="mt-10 flex min-h-80 items-center justify-center rounded-[1.5rem] border border-[var(--card-border)] bg-[var(--card-bg)] p-6 sm:min-h-96 lg:mt-0 lg:min-h-full lg:p-10 relative overflow-hidden backdrop-blur-xl shadow-2xl transition-colors duration-500">
              <Image
                src={site.photoPath}
                alt={`${site.name} profile photo`}
                width={560}
                height={700}
                sizes="(max-width: 1023px) 80vw, 40vw"
                className="float-photo relative z-10 h-auto max-h-[34rem] w-auto max-w-full rounded-[45%] object-contain object-top shadow-[0_25px_60px_rgba(0,0,0,0.5)] ring-1 ring-[var(--border)]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
