import { buildMetadata, buildVideoGameJsonLd } from "@/lib/seo";
import Hero from "@/components/Hero";
import SidebarLayout from "@/components/SidebarLayout";
import SchemaMarkup from "@/components/SchemaMarkup";
import AdSlot from "@/components/AdSlot";

export const metadata = buildMetadata({ path: "/" });

const GAME_SECTIONS = [
  {
    id: "what-is",
    heading: "What is Basketball Bros?",
    body: [
      "Basketball Bros is a high-energy, arcade-style 1v1 basketball game that you can play right in your browser — no downloads, no installs, just pure hoops action. Built by Blue Wizard Digital (the same team behind ShellShockers.io), this fast-paced game strips basketball down to its most fun elements: dribbling, shooting, dunking, and a little bit of friendly competition.",
      "Whether you're looking to kill five minutes or go head-to-head against friends online, Basketball Bros delivers. The controls are simple to learn but hard to master, and with 33 unique characters to unlock — each with their own look and style — there's always a reason to come back for one more game.",
    ],
    images: [
      { src: "/images/gameplay-1.jpg", alt: "Basketball Bros gameplay - two players competing on the court" },
    ],
  },
  {
    id: "how-to-play",
    heading: "How to Play — Controls and Basics",
    body: [
      "Getting started is dead simple. You control your player with the WASD keys (or arrow keys if you prefer). Press Up to jump, then tap Up again mid-air to shoot. On defense, hit Space or Enter to block, steal, or — if you're feeling spicy — take a swing at your opponent. It's not always pretty, but it's effective.",
      "The game gives you two control layouts: WASD + G for the left hand, or Arrow keys + L for the right. Pick whichever feels natural and get on the court. Each match is quick — usually just a couple of minutes — so it's perfect for sneaking in a game between classes, during lunch, or whenever you need a break.",
    ],
    images: [
      { src: "/images/controls-guide.jpg", alt: "Basketball Bros keyboard controls guide" },
    ],
  },
  {
    id: "game-modes",
    heading: "Game Modes — More Ways to Play",
    body: [
      "Beyond the quick 1v1 mode, Basketball Bros gives you several ways to mix it up. Jump into Franchise Mode and take your favorite character through a 17-match tournament — win enough games and you'll lift the trophy. Want to play with a friend on the same keyboard? Fire up 2 Players Same PC mode and settle the score side by side.",
      "If you're new or just want to warm up, Shooting Practice lets you work on your timing without the pressure. And when you're ready for the real deal, hop into Online Multiplayer: host a private match, share the invite code with your friends, and battle it out. There's even a ranked-like system that tracks your wins as you climb the leaderboard.",
    ],
    images: [
      { src: "/images/game-modes.jpg", alt: "Basketball Bros game mode selection screen" },
    ],
  },
  {
    id: "characters",
    heading: "33 Characters, Endless Style",
    body: [
      "Here's where Basketball Bros really shines: the roster. There are 33 playable characters, and almost all of them are playful nods to real NBA stars — think Luka Magic, Step Flurry, and the Brow. Each character has a distinct look and personality, and you unlock them as you win matches and earn in-game currency.",
      "But it's not just about who's on the court — it's about how they look. You can customize everything: jerseys, shorts, sneakers, socks, logos, and even the ball you play with. Want to match your favorite team's colors? Go for it. Want to look absolutely ridiculous? That's an option too. It's your baller — dress them how you want.",
    ],
    images: [
      { src: "/images/characters.jpg", alt: "Basketball Bros character roster and customization options" },
    ],
  },
];

function ImagePlaceholder({ alt, className = "" }: { alt: string; className?: string }) {
  return (
    <div className={`rounded-xl overflow-hidden bg-surface border border-gray-200/60 shadow-sm flex items-center justify-center ${className}`}>
      <div className="text-center p-6">
        <svg className="w-10 h-10 mx-auto mb-2 text-primary/25" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-13.5 0l5.409-5.409a2.25 2.25 0 013.182 0L15.75 14.25M3 18h18M18 6h.008v.008H18V6z" />
        </svg>
        <p className="text-xs text-text-dark/25">{alt}</p>
      </div>
    </div>
  );
}

const PRO_TIPS = [
  {
    title: "Timing is everything",
    body: "Don't just spam the shoot button. Watch your opponent's position — if they're closing in, wait a beat, then release for a clean look.",
  },
  {
    title: "Defense wins games",
    body: "Blocking shots mid-air is satisfying, but sometimes it's smarter to just punch the ball loose. Spacebar is your best friend on D.",
  },
  {
    title: "Mix up your offense",
    body: "Dunks look cool, but step-back threes are harder to block. Keep your opponent guessing — don't be predictable.",
  },
  {
    title: "Grind Franchise Mode",
    body: "The best way to earn currency and unlock new characters is through Franchise Mode. 17 matches, one trophy — get after it.",
  },
];

const GALLERY_IMAGES = [
  { alt: "Basketball Bros in-game dunk scene", src: "/images/gallery-1.jpg" },
  { alt: "Basketball Bros character selection screen", src: "/images/gallery-2.jpg" },
  { alt: "Basketball Bros multiplayer match action", src: "/images/gallery-3.jpg" },
];

export default function HomePage() {
  return (
    <>
      <SchemaMarkup jsonLd={buildVideoGameJsonLd()} />
      <Hero />
      <SidebarLayout>
        <section className="space-y-16">
          {GAME_SECTIONS.map((section, i) => (
            <div key={section.id}>
              <div className={`flex flex-col ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-8`}>
                <div className="flex-1 min-w-0">
                  <h2 className="font-heading font-bold text-2xl text-text-dark mb-4">
                    {section.heading}
                  </h2>
                  <div className="space-y-4">
                    {section.body.map((paragraph, pi) => (
                      <p key={pi} className="text-text-dark/70 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
                {section.images?.[0] && (
                  <div className="flex-shrink-0 w-full md:w-[340px]">
                    <ImagePlaceholder alt={section.images[0].alt} className="aspect-[4/3]" />
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Pro Tips */}
          <div>
            <h2 className="font-heading font-bold text-2xl text-text-dark mb-4">
              Pro Tips to Step Up Your Game
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PRO_TIPS.map((tip, ti) => (
                <div key={ti} className="bg-surface rounded-lg p-5 border border-gray-200/50">
                  <h3 className="font-heading font-bold text-base text-text-dark mb-1.5">
                    {tip.title}
                  </h3>
                  <p className="text-sm text-text-dark/60 leading-relaxed">
                    {tip.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Gallery */}
          <div>
            <h2 className="font-heading font-bold text-2xl text-text-dark mb-4">
              Game Gallery
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {GALLERY_IMAGES.map((img, gi) => (
                <ImagePlaceholder key={gi} alt={img.alt} className="aspect-[4/3]" />
              ))}
            </div>
          </div>
        </section>

        <AdSlot type="banner" className="mt-12 mb-4" />
      </SidebarLayout>
    </>
  );
}
