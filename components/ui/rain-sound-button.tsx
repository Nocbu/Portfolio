"use client";

import { useEffect, useState } from "react";
import { subscribeRainAudio, toggleRainAudio } from "@/lib/rain-audio";

export function RainSoundButton({ className = "" }: { className?: string }) {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    return subscribeRainAudio((playing) => {
      setIsPlaying(playing);
    });
  }, []);

  return (
    <button
      type="button"
      onClick={toggleRainAudio}
      aria-label={isPlaying ? "Mute gentle rain sound" : "Play gentle rain sound"}
      className={`group inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--btn-bg)] px-3 py-1.5 sm:px-3.5 sm:py-2 text-xs font-medium text-[var(--text)] shadow-sm backdrop-blur-md transition-all duration-300 hover:bg-[var(--btn-hover-bg)] active:scale-95 ${className}`.trim()}
    >
      <span className="relative flex h-2 w-2">
        {isPlaying && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
        )}
        <span
          className={`relative inline-flex h-2 w-2 rounded-full ${
            isPlaying ? "bg-emerald-400" : "bg-[var(--muted)]"
          }`}
        />
      </span>
      <span className="text-sm" role="img" aria-hidden="true">
        {isPlaying ? "🌧️" : "☕"}
      </span>
      <span className="hidden sm:inline">
        Rain Sound
      </span>
      <span className="rounded bg-[var(--badge-bg)] px-1.5 py-0.5 text-[10px] text-[var(--muted)] group-hover:text-[var(--text)]">
        {isPlaying ? "ON" : "OFF"}
      </span>
    </button>
  );
}
