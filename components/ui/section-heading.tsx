export function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <header className="flex items-end justify-between gap-4 border-b border-white/10 pb-4">
      <div>
        <p className="text-xs uppercase tracking-[0.45em] text-zinc-400 font-medium">
          {eyebrow}
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-4xl drop-shadow-sm">
          {title}
        </h2>
      </div>
      <span className="hidden text-xs uppercase tracking-[0.35em] text-zinc-500 md:inline font-mono">
        /section
      </span>
    </header>
  );
}
