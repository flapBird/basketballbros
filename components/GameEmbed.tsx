"use client";

import { useEffect, useRef } from "react";
import { siteConfig } from "@/lib/site.config";

export default function GameEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const preventWheel = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();
    };

    const preventTouch = (e: TouchEvent) => {
      // Allow single-finger touches (game interaction)
      // but prevent touchmove from scrolling the page
      if (e.cancelable) {
        e.preventDefault();
      }
    };

    container.addEventListener("wheel", preventWheel, { passive: false });
    container.addEventListener("touchmove", preventTouch, { passive: false });

    return () => {
      container.removeEventListener("wheel", preventWheel);
      container.removeEventListener("touchmove", preventTouch);
    };
  }, []);

  return (
    <div className="w-full max-w-[1000px] mx-auto">
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden rounded-lg"
        style={{ aspectRatio: siteConfig.game.aspectRatio }}
      >
        <iframe
          src={siteConfig.game.embedUrl}
          className="absolute inset-0 w-full h-full"
          allow="autoplay; fullscreen"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          title={siteConfig.game.name}
          loading="eager"
          scrolling="no"
        />
      </div>
    </div>
  );
}
