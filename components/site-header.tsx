"use client";

import { useState } from "react";
import Image from "next/image";
import { site } from "@/lib/site";
import { RainSoundButton } from "@/components/ui/rain-sound-button";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--header-bg)] backdrop-blur-2xl transition-colors duration-500">
      <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between px-3 py-3.5 sm:px-4 sm:py-4 md:px-6 lg:px-8">
        <a
          href="#top"
          className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.35em] text-[var(--text)] transition-colors hover:text-zinc-400 sm:text-sm"
        >
          <div className="relative">
            <Image
              src={site.logoPath}
              alt={`${site.name} logo`}
              width={28}
              height={28}
              className="rounded-md border border-[var(--border)]"
              unoptimized
            />
          </div>
          <span>{site.name}</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 text-sm font-medium text-[var(--muted)] md:flex">
          <a href="#about" className="transition-colors hover:text-[var(--text)]">
            About
          </a>
          <a href="#projects" className="transition-colors hover:text-[var(--text)]">
            Projects
          </a>
          <a href="#experience" className="transition-colors hover:text-[var(--text)]">
            Experience
          </a>
          <a href="#contact" className="transition-colors hover:text-[var(--text)]">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-2 sm:gap-2.5">
          <a
            href={site.resumePath}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[var(--border)] bg-[var(--btn-bg)] px-3.5 py-1.5 text-xs font-medium text-[var(--text)] shadow-sm backdrop-blur-md transition-all duration-300 hover:bg-[var(--btn-hover-bg)] sm:px-4 sm:py-2 sm:text-sm"
          >
            Resume
          </a>

          {/* Rain Ambience Sound Toggle */}
          <RainSoundButton />

          {/* Dark / Light Theme Toggle */}
          <ThemeToggle />

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="flex h-9 w-9 items-center justify-center rounded-md text-[var(--muted)] transition-colors hover:text-[var(--text)] md:hidden"
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
          isOpen ? "max-h-80 opacity-100 border-t border-[var(--border)]" : "max-h-0 opacity-0 border-t-0"
        } bg-[var(--panel-strong)] backdrop-blur-2xl border-b border-[var(--border)]`}
      >
        <nav className="flex flex-col px-4 py-3 sm:px-6">
          <a
            href="#about"
            onClick={closeMenu}
            className="block py-2.5 text-sm text-[var(--muted)] transition-colors hover:text-[var(--text)]"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={closeMenu}
            className="block py-2.5 text-sm text-[var(--muted)] transition-colors hover:text-[var(--text)]"
          >
            Projects
          </a>
          <a
            href="#experience"
            onClick={closeMenu}
            className="block py-2.5 text-sm text-[var(--muted)] transition-colors hover:text-[var(--text)]"
          >
            Experience
          </a>
          <a
            href="#contact"
            onClick={closeMenu}
            className="block py-2.5 text-sm text-[var(--muted)] transition-colors hover:text-[var(--text)]"
          >
            Contact
          </a>
          <a
            href={site.resumePath}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
            className="block py-2.5 text-sm text-[var(--text)] font-medium transition-colors hover:underline"
          >
            Resume (PDF)
          </a>
        </nav>
      </div>
    </header>
  );
}
