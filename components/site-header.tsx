import { site } from "@/lib/site";
import Image from "next/image";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between px-3 py-4 sm:px-4 md:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.35em] text-white/90 sm:text-sm">
          <Image
            src={site.logoPath}
            alt={`${site.name} logo`}
            width={28}
            height={28}
            className="rounded-md border border-white/15"
            unoptimized
          />
          <span>{site.name}</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-zinc-500 md:flex">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
        <a
          href={site.resumePath}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-zinc-100 sm:text-sm"
        >
          Resume
        </a>
      </div>
    </header>
  );
}
