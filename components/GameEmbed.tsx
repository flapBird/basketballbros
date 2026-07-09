"use client";

import { siteConfig } from "@/lib/site.config";

export default function GameEmbed() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: siteConfig.game.aspectRatio }}>
        <iframe
          src={siteConfig.game.embedUrl}
          className="absolute inset-0 w-full h-full"
          allow="autoplay; fullscreen"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          title={siteConfig.game.name}
          loading="eager"
        />
      </div>
    </div>
  );
}
