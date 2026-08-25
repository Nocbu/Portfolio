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
      className={`group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-xs font-medium text-white shadow-sm backdrop-blur-md transition-all duration-300 hover:border-white/35 hover:bg-white/20 ${className}`.trim()}
    >
      <span className="relative flex h-2 w-2">
        {isPlaying && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
        )}
        <span
          className={`relative inline-flex h-2 w-2 rounded-full ${
            isPlaying ? "bg-white" : "bg-zinc-500"
          }`}
        />
      </span>
      <span className="text-sm" role="img" aria-hidden="true">
        {isPlaying ? "🌧️" : "☕"}
      </span>
      <span className="hidden sm:inline">
        {isPlaying ? "Rain Sound" : "Rain Sound"}
      </span>
      <span className="rounded bg-white/10 px-1.5 py-0.5 text-[10px] text-zinc-300 group-hover:text-white">
        {isPlaying ? "ON" : "OFF"}
      </span>
    </button>
  );
}
