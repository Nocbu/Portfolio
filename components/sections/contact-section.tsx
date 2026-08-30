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
            <div className="rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-5 md:p-6 backdrop-blur-xl transition-colors duration-500">
              <p className="max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base font-light">
                Reach out at{" "}
                <a
                  className="font-semibold text-[var(--text)] underline decoration-[var(--border)] underline-offset-4 transition-colors hover:text-[var(--muted)]"
                  href={`mailto:${site.email}`}
                >
                  {site.email}
                </a>{" "}
                for collaboration, roles, or project discussions.
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs text-[var(--muted)] font-mono">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Available for freelance & full-time roles</span>
              </div>
            </div>

            <div className="rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-5 md:p-6 backdrop-blur-xl transition-colors duration-500">
              <p className="text-mono text-xs uppercase tracking-[0.35em] text-[var(--muted)] font-medium">
                Quick Actions
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  className="rounded-full border border-[var(--btn-primary-border)] bg-[var(--btn-primary-bg)] px-5 py-3 text-sm font-semibold text-[var(--btn-primary-text)] shadow-[0_4px_16px_rgba(0,0,0,0.15)] backdrop-blur-md transition-all duration-300 hover:bg-[var(--btn-primary-hover-bg)]"
                  href={`mailto:${site.email}`}
                >
                  Email me ✉️
                </a>
                <a
                  className="rounded-full border border-[var(--btn-secondary-border)] bg-[var(--btn-secondary-bg)] px-5 py-3 text-sm font-semibold text-[var(--btn-secondary-text)] backdrop-blur-md transition-all duration-300 hover:border-[var(--border-hover)] hover:bg-[var(--btn-hover-bg)]"
                  href={site.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  className="rounded-full border border-[var(--btn-secondary-border)] bg-[var(--btn-secondary-bg)] px-5 py-3 text-sm font-semibold text-[var(--btn-secondary-text)] backdrop-blur-md transition-all duration-300 hover:border-[var(--border-hover)] hover:bg-[var(--btn-hover-bg)]"
                  href={site.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  className="rounded-full border border-[var(--border)] bg-transparent px-5 py-3 text-sm font-semibold text-[var(--muted)] transition-all duration-300 hover:border-[var(--border-hover)] hover:text-[var(--text)]"
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
