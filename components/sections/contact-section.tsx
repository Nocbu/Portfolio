import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { site } from "@/lib/site";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-28 pb-10">
      <Reveal>
        <div className="panel rounded-[2rem] p-3 sm:p-4 md:p-6">
          <SectionHeading eyebrow="Contact" title="Let's build something" />
          <div className="mt-6 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-2xl border border-white/10 bg-black/55 p-5 md:p-6">
              <p className="max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base">
                Reach me at{" "}
                <a className="font-semibold text-white underline decoration-white/20 underline-offset-4" href={`mailto:${site.email}`}>
                  {site.email}
                </a>{" "}
                for collaboration, roles, or project discussions.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/55 p-5 md:p-6">
              <p className="text-mono text-xs uppercase tracking-[0.35em] text-zinc-300">
                Quick Actions
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  className="rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white/35 hover:bg-white/10"
                  href={`mailto:${site.email}`}
                >
                  Email me
                </a>
                <a
                  className="rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white/35 hover:bg-white/10"
                  href={site.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  className="rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white/35 hover:bg-white/10"
                  href={site.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  className="rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white/35 hover:bg-white/10"
                  href="#top"
                >
                  Back to top
                </a>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
