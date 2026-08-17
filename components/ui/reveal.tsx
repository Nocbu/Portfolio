import type { CSSProperties, ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 18,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <div
      className={`reveal ${className}`.trim()}
      style={{ "--reveal-delay": `${delay}s`, "--reveal-distance": `${y}px` } as CSSProperties}
    >
      {children}
    </div>
  );
}
