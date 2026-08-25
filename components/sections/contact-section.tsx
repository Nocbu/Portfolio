import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { site } from "@/lib/site";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-28 pb-10">
      <Reveal>
        <div className="panel rounded-[2rem] p-3 sm:p-4 md:p-6">
          <SectionHeading eyebrow="Get in Touch" title="Let's build something great" />
          <div className="mt-6 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-2xl border border-white/10 bg-black/40 p-5 md:p-6 backdrop-blur-xl">
              <p className="max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base font-light">
                Reach out at{" "}
                <a
                  className="font-semibold text-white underline decoration-white/30 underline-offset-4 transition-colors hover:text-zinc-200"
                  href={`mailto:${site.email}`}
                >
                  {site.email}
                </a>{" "}
                for collaboration, roles, or project discussions.
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs text-zinc-400 font-mono">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Available for freelance & full-time roles</span>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-5 md:p-6 backdrop-blur-xl">
              <p className="text-mono text-xs uppercase tracking-[0.35em] text-zinc-400 font-medium">
                Quick Actions
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  className="rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white shadow-[0_4px_16px_rgba(0,0,0,0.3)] backdrop-blur-md transition-all duration-300 hover:border-white/35 hover:bg-white/20"
                  href={`mailto:${site.email}`}
                >
                  Email me ✉️
                </a>
                <a
                  className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-zinc-300 backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:text-white"
                  href={site.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-zinc-300 backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:text-white"
                  href={site.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  className="rounded-full border border-white/10 bg-black/30 px-5 py-3 text-sm font-semibold text-zinc-400 transition-all duration-300 hover:border-white/25 hover:text-white"
                  href="#top"
                >
                  Back to top ↑
                </a>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
