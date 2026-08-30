"use client";

import { useEffect, useState } from "react";

type TypewriterHeadingProps = {
  className?: string;
  text: string;
  /** Milliseconds between each character */
  speed?: number;
};

export function TypewriterHeading({
  className,
  text,
  speed = 38,
}: TypewriterHeadingProps) {
  const [displayedCount, setDisplayedCount] = useState(0);
  const [prevText, setPrevText] = useState(text);

  if (prevText !== text) {
    setPrevText(text);
    setDisplayedCount(0);
  }

  useEffect(() => {
    if (displayedCount >= text.length) return;

    const timer = setTimeout(() => {
      setDisplayedCount((prev) => prev + 1);
    }, speed);

    return () => clearTimeout(timer);
  }, [displayedCount, text.length, speed]);

  const visibleText = text.slice(0, displayedCount);
  const isTyping = displayedCount < text.length;

  return (
    <h1 className={className} aria-label={text}>
      <span aria-hidden="true">{visibleText}</span>
      <span
        className={`typewriter-cursor ${isTyping ? "" : "typewriter-cursor-idle"}`}
        aria-hidden="true"
      />
    </h1>
  );
}
