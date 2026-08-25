"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";

type Project = {
  title: string;
  description: string;
  stack: string[];
  href?: string;
  images?: string[];
};

export function ProjectCard({ project }: { project: Project }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      whileHover={reduceMotion ? undefined : { y: -6 }}
      transition={{ duration: 0.25 }}
      className="group panel rounded-3xl p-5 bg-black/45 backdrop-blur-2xl shadow-[0_16px_36px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-white/30 hover:bg-black/60 sm:p-6"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold text-white md:text-2xl">{project.title}</h3>
        <span className="text-mono rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-zinc-300">
          Featured
        </span>
      </div>
      <p className="mt-4 leading-7 text-zinc-300 text-sm sm:text-base font-light">{project.description}</p>

      {project.images?.length ? (
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {project.images.map((image, index) => (
            <a
              key={`${project.title}-${image}`}
              href={image}
              target="_blank"
              rel="noreferrer"
              className={`relative overflow-hidden rounded-2xl border border-white/10 bg-black/60 shadow-md ${
                index === 0 ? "sm:col-span-2" : ""
              }`}
            >
              <Image
                src={image}
                alt={`${project.title} screenshot ${index + 1}`}
                width={1200}
                height={700}
                className="h-40 w-full object-cover transition-transform duration-500 hover:scale-[1.03] sm:h-44"
              />
            </a>
          ))}
        </div>
      ) : null}

      <ul className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <li
            key={item}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300 backdrop-blur-md"
          >
            {item}
          </li>
        ))}
      </ul>
      {project.href ? (
        <a
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-white transition-colors hover:text-zinc-300"
          href={project.href}
        >
          <span>View project</span>
          <span>→</span>
        </a>
      ) : null}
    </motion.article>
  );
}
