import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site.config";

export const metadata = buildMetadata({ title: "About", path: "/about" });

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-text-dark mb-4">
        About {siteConfig.siteName}
      </h1>
      <div className="space-y-5 text-text-dark/80 leading-relaxed">
        <p>
          Welcome to <strong>{siteConfig.siteName}</strong> — your go-to place for fast,
          free, and fun basketball action right in your browser. No sign-ups, no downloads,
          just pick a character and hit the court. We built this site because we love the
          game and wanted a clean, simple way for anyone to jump in and play — whether
          you&apos;ve got five minutes or an entire afternoon.
        </p>

        <p>
          Basketball Bros is an arcade-style 1v1 basketball game developed by Blue Wizard
          Digital. It distills everything that makes hoops fun — dribbling, shooting,
          blocking, and those ridiculous highlight-reel dunks — into quick matches you can
          play against the computer, a friend on the same keyboard, or real opponents
          online. With 33 unlockable characters, deep customization, and multiple game
          modes including Franchise and Shooting Practice, there&apos;s always a new
          reason to run it back.
        </p>

        <p>
          Everything on {siteConfig.siteName} is free to play and works directly in your
          web browser. Just open the page and you&apos;re on the court — no extra steps,
          no hidden fees. We handle the website so you can focus on the game.
        </p>

        <p>
          Got feedback, spotted a bug, or just want to say hi? Head over to our{" "}
          <a href="/contact" className="text-primary underline hover:text-primary/80">
            Contact page
          </a>{" "}
          — we read every message.
        </p>
      </div>
    </div>
  );
}
