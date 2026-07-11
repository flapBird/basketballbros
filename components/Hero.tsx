import GameEmbed from "./GameEmbed";
import { siteConfig } from "@/lib/site.config";

export default function Hero() {
  return (
    <section className="hero-gradient relative overflow-hidden pt-8 pb-16 sm:pt-10 sm:pb-24 px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Screen-reader-only H1 for SEO — contains primary keyword */}
        <h1 className="sr-only">
          Basketball Bros Game - Play Online Free
        </h1>
        <GameEmbed />
      </div>
    </section>
  );
}
