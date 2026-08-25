"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export function RainyMeadowBackdrop() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Canvas Rain & Window Water Drops Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Falling rain streaks (prominent, crisp, slanted)
    const dropCount = Math.min(Math.floor(width / 9), 150);
    const drops = Array.from({ length: dropCount }, () => ({
      x: Math.random() * (width + 300) - 100,
      y: Math.random() * height,
      length: Math.random() * 32 + 20,
      speed: Math.random() * 8 + 14,
      opacity: Math.random() * 0.45 + 0.3,
      thickness: Math.random() * 1.4 + 0.8,
    }));

    // Window condensation droplets trickling down
    const windowDroplets = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2.8 + 1.2,
      speed: Math.random() * 0.5 + 0.15,
      trail: [] as { x: number; y: number; alpha: number }[],
    }));

    let isVisible = true;
    const handleVisibility = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener("visibilitychange", handleVisibility);

    let tick = 0;

    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      tick++;
      ctx.clearRect(0, 0, width, height);

      // 1. Draw Falling Rain
      for (let i = 0; i < drops.length; i++) {
        const drop = drops[i];
        ctx.beginPath();
        ctx.strokeStyle = `rgba(220, 240, 255, ${drop.opacity})`;
        ctx.lineWidth = drop.thickness;
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x - drop.length * 0.22, drop.y + drop.length);
        ctx.stroke();

        drop.y += drop.speed;
        drop.x -= drop.speed * 0.22;

        if (drop.y > height) {
          drop.y = -drop.length;
          drop.x = Math.random() * (width + 300) - 50;
        }
      }

      // 2. Draw Windowpane Glass Droplets
      for (let i = 0; i < windowDroplets.length; i++) {
        const d = windowDroplets[i];

        ctx.beginPath();
        const grad = ctx.createRadialGradient(
          d.x - d.radius * 0.3,
          d.y - d.radius * 0.3,
          d.radius * 0.2,
          d.x,
          d.y,
          d.radius
        );
        grad.addColorStop(0, "rgba(255, 255, 255, 0.75)");
        grad.addColorStop(0.6, "rgba(200, 230, 255, 0.35)");
        grad.addColorStop(1, "rgba(100, 150, 200, 0.4)");

        ctx.fillStyle = grad;
        ctx.arc(d.x, d.y, d.radius, 0, Math.PI * 2);
        ctx.fill();

        // Droplet trail
        if (Math.random() < 0.25) {
          d.trail.push({ x: d.x, y: d.y, alpha: 0.35 });
          if (d.trail.length > 10) d.trail.shift();
        }

        for (let t = 0; t < d.trail.length; t++) {
          const pt = d.trail[t];
          pt.alpha *= 0.95;
          ctx.fillStyle = `rgba(220, 240, 255, ${pt.alpha})`;
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, d.radius * 0.5, 0, Math.PI * 2);
          ctx.fill();
        }

        d.y += d.speed;
        if (tick % 45 === 0) {
          d.x += (Math.random() - 0.5) * 0.8;
        }

        if (d.y > height + 10) {
          d.y = -10;
          d.x = Math.random() * width;
          d.trail = [];
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibility);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Background Image Layer (Behind Rain & UI) */}
      <div
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
        aria-hidden="true"
      >
        <Image
          src="/uploads/back.jpg"
          alt="Rainy window background"
          fill
          priority
          className="object-cover object-center opacity-75"
        />

        {/* Subtle Dark Vignette for contrast */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Rain Canvas Layer (In Front of Image, Behind UI) */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-85"
        aria-hidden="true"
      />
    </>
  );
}
