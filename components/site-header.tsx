"use client";

import { useState } from "react";
import Image from "next/image";
import { site } from "@/lib/site";
import { RainSoundButton } from "@/components/ui/rain-sound-button";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-2xl transition-colors">
      <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between px-3 py-4 sm:px-4 md:px-6 lg:px-8">
        <a
          href="#top"
          className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.35em] text-white transition-colors hover:text-zinc-300 sm:text-sm"
        >
          <div className="relative">
            <Image
              src={site.logoPath}
              alt={`${site.name} logo`}
              width={28}
              height={28}
              className="rounded-md border border-white/20"
              unoptimized
            />
          </div>
          <span>{site.name}</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 text-sm font-medium text-zinc-400 md:flex">
          <a href="#about" className="transition-colors hover:text-white">
            About
          </a>
          <a href="#projects" className="transition-colors hover:text-white">
            Projects
          </a>
          <a href="#experience" className="transition-colors hover:text-white">
            Experience
          </a>
          <a href="#contact" className="transition-colors hover:text-white">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-2.5 sm:gap-3">
          <a
            href={site.resumePath}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium text-white shadow-sm backdrop-blur-md transition-all duration-300 hover:border-white/35 hover:bg-white/20 sm:text-sm"
          >
            Resume
          </a>

          {/* Rain Ambience Sound Toggle beside Resume */}
          <RainSoundButton />

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="flex h-9 w-9 items-center justify-center rounded-md text-zinc-300 transition-colors hover:text-white md:hidden"
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line
                x1="4"
                y1="6"
                x2="20"
                y2="6"
                className={`transition-all duration-300 ease-in-out ${
                  isOpen ? "translate-y-[6px] rotate-45" : ""
                }`}
                style={{ transformOrigin: "12px 12px" }}
              />
              <line
                x1="4"
                y1="12"
                x2="20"
                y2="12"
                className={`transition-all duration-300 ease-in-out ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <line
                x1="4"
                y1="18"
                x2="20"
                y2="18"
                className={`transition-all duration-300 ease-in-out ${
                  isOpen ? "-translate-y-[6px] -rotate-45" : ""
                }`}
                style={{ transformOrigin: "12px 12px" }}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? "max-h-80 opacity-100 border-t border-white/10" : "max-h-0 opacity-0 border-t-0"
        } bg-black/95 backdrop-blur-2xl border-b border-white/10`}
      >
        <nav className="flex flex-col px-4 py-3 sm:px-6">
          <a
            href="#about"
            onClick={closeMenu}
            className="block py-2.5 text-sm text-zinc-300 transition-colors hover:text-white"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={closeMenu}
            className="block py-2.5 text-sm text-zinc-300 transition-colors hover:text-white"
          >
            Projects
          </a>
          <a
            href="#experience"
            onClick={closeMenu}
            className="block py-2.5 text-sm text-zinc-300 transition-colors hover:text-white"
          >
            Experience
          </a>
          <a
            href="#contact"
            onClick={closeMenu}
            className="block py-2.5 text-sm text-zinc-300 transition-colors hover:text-white"
          >
            Contact
          </a>
          <a
            href={site.resumePath}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
            className="block py-2.5 text-sm text-zinc-300 transition-colors hover:text-white"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
