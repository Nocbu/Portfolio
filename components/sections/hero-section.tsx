import { Reveal } from "@/components/ui/reveal";
import { site } from "@/lib/site";
import Image from "next/image";

const stats = [
  ["Focused Stack", "React, Spring Boot, Express, MongoDB"],
  ["Current Focus", "Full-stack apps with strong UX"],
  ["Open To", "Collaboration and product roles"],
];

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 grid-noise opacity-30" />
      <div className="absolute left-1/2 top-0 -z-10 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />

      <div className="panel-strong rounded-[2rem] p-3 sm:p-4 md:p-6">
        <div className="grid rounded-[1.5rem] border border-white/10 bg-black/70 p-5 sm:p-6 md:p-8 lg:grid-cols-2 lg:p-10">
          <div className="min-w-0 lg:pr-10">
            <Reveal>
              <p className="text-mono inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-zinc-300">
                {site.role}
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Building products that feel clean, fast, and genuinely useful.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base md:text-lg">
                {site.bio}
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  className="rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white/35 hover:bg-white/10"
                  href="#projects"
                >
                  View projects
                </a>
                <a className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white/25 hover:bg-white/10" href="#contact">
                  Contact me
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-10 grid gap-4 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {stats.map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-black/45 p-4">
                    <p className="text-xs uppercase tracking-[0.35em] text-zinc-600">{label}</p>
                    <p className="mt-3 text-sm leading-6 text-zinc-200 sm:text-base">{value}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="mt-10 flex min-h-80 items-center justify-center rounded-[1.25rem] border border-white/10 bg-white/[0.02] p-6 sm:min-h-96 lg:mt-0 lg:min-h-full lg:p-10">
              <Image
                src={site.photoPath}
                alt={`${site.name} profile photo`}
                width={560}
                height={700}
                sizes="(max-width: 1023px) 80vw, 40vw"
                className="float-photo h-auto max-h-[34rem] w-auto max-w-full rounded-[45%] object-contain object-top shadow-[0_22px_55px_rgba(0,0,0,0.5)]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
