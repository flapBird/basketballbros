"use client";

import { useEffect, useRef } from "react";
import { siteConfig } from "@/lib/site.config";

export default function GameEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isOverGame = false;

    const onMouseEnter = () => {
      isOverGame = true;
      document.body.style.overflow = "hidden";
    };
    const onMouseLeave = () => {
      isOverGame = false;
      document.body.style.overflow = "";
    };

    container.addEventListener("mouseenter", onMouseEnter);
    container.addEventListener("mouseleave", onMouseLeave);

    return () => {
      container.removeEventListener("mouseenter", onMouseEnter);
      container.removeEventListener("mouseleave", onMouseLeave);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="w-full max-w-[1100px] mx-auto">
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
