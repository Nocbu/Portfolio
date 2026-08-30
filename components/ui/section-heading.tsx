export function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <header className="border-b border-theme-border pb-4 transition-colors duration-500">
      <p className="text-xs uppercase tracking-[0.45em] text-theme-muted font-medium">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-theme-text md:text-4xl drop-shadow-sm">
        {title}
      </h2>
    </header>
  );
}
