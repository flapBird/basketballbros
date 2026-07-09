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
      "Basketball Bros is a high-energy, arcade-style 1v1 basketball game that you can play right in your browser — no downloads, no installs, just pure hoops action. It's fully unblocked, so you can jump in and play from school, work, or anywhere without restrictions. Built by Blue Wizard Digital, this fast-paced game strips basketball down to its most fun elements: dribbling, shooting, dunking, and a little bit of friendly competition.",
      "Whether you're looking to kill five minutes or go head-to-head against friends online, Basketball Bros delivers. The controls are simple to learn but hard to master, and with 33 unique characters to unlock — each with their own look and style — there's always a reason to come back for one more game.",
    ],
    images: [
      { src: "/images/basketballbros-desc-1.jpeg", alt: "Basketball Bros gameplay - two players competing on the court" },
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
      { src: "/images/basketballbros-desc-2.jpeg", alt: "Basketball Bros keyboard controls guide" },
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
      { src: "/images/basketballbros-desc-3.jpeg", alt: "Basketball Bros game mode selection screen" },
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
      { src: "/images/basketballbros-desc-4.jpeg", alt: "Basketball Bros character roster and customization options" },
    ],
  },
];

function ImagePlaceholder({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`rounded-xl object-cover bg-surface border border-gray-200/60 shadow-sm ${className}`}
    />
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
  { alt: "Basketball Bros in-game dunk scene", src: "/images/gallery-1.jpeg" },
  { alt: "Basketball Bros character selection screen", src: "/images/gallery-2.jpeg" },
  { alt: "Basketball Bros multiplayer match action", src: "/images/gallery-3.jpeg" },
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
                    <ImagePlaceholder src={section.images[0].src} alt={section.images[0].alt} className="aspect-[4/3]" />
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
                <ImagePlaceholder key={gi} src={img.src} alt={img.alt} className="aspect-[4/3]" />
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="font-heading font-bold text-2xl text-text-dark mb-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <div className="bg-white rounded-lg border border-gray-200/60 overflow-hidden">
                <details className="group">
                  <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-heading font-bold text-text-dark hover:bg-gray-50 transition-colors">
                    <span>Why isn&apos;t the game loading?</span>
                    <svg className="w-4 h-4 text-text-dark/40 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-4 text-sm text-text-dark/60 leading-relaxed">
                    <p>First, check your internet connection and make sure the page isn&apos;t blocked by your network. Ad blockers and browser extensions sometimes interfere with game embeds — try disabling them or whitelisting basketballbros.site. Chrome is your best bet, but the game also runs on Firefox and Safari.</p>
                  </div>
                </details>
              </div>

              <div className="bg-white rounded-lg border border-gray-200/60 overflow-hidden">
                <details className="group">
                  <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-heading font-bold text-text-dark hover:bg-gray-50 transition-colors">
                    <span>How do I play Basketball Bros?</span>
                    <svg className="w-4 h-4 text-text-dark/40 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-4 text-sm text-text-dark/60 leading-relaxed">
                    <p>Jump right in! Use WASD or Arrow Keys to move, tap Up to jump, and tap Up again mid-air to shoot. Hit Space or Enter to block and steal on defense. Pick the 2 Players option to play a friend on the same keyboard, or hop into Online to challenge someone across the world. It takes about thirty seconds to learn and a lifetime to master that perfect step-back three.</p>
                  </div>
                </details>
              </div>

              <div className="bg-white rounded-lg border border-gray-200/60 overflow-hidden">
                <details className="group">
                  <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-heading font-bold text-text-dark hover:bg-gray-50 transition-colors">
                    <span>Which browser works best?</span>
                    <svg className="w-4 h-4 text-text-dark/40 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-4 text-sm text-text-dark/60 leading-relaxed">
                    <p>Chrome is the most reliable — it&apos;s what the game was primarily built and tested on. That said, Basketball Bros also runs well on Firefox and Safari. If you run into performance issues on a particular browser, switching to Chrome usually does the trick.</p>
                  </div>
                </details>
              </div>

              <div className="bg-white rounded-lg border border-gray-200/60 overflow-hidden">
                <details className="group">
                  <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-heading font-bold text-text-dark hover:bg-gray-50 transition-colors">
                    <span>How do I unlock more characters?</span>
                    <svg className="w-4 h-4 text-text-dark/40 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-4 text-sm text-text-dark/60 leading-relaxed">
                    <p>Win matches and you&apos;ll earn in-game currency to unlock new characters. There are 33 in total, and most are lighthearted references to real NBA stars — you&apos;ll spot familiar moves and nicknames as you go. Franchise Mode is the fastest way to rack up wins and currency, so start there if you&apos;re building out your roster.</p>
                  </div>
                </details>
              </div>

              <div className="bg-white rounded-lg border border-gray-200/60 overflow-hidden">
                <details className="group">
                  <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-heading font-bold text-text-dark hover:bg-gray-50 transition-colors">
                    <span>Can I play Basketball Bros on my phone or tablet?</span>
                    <svg className="w-4 h-4 text-text-dark/40 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-4 text-sm text-text-dark/60 leading-relaxed">
                    <p>Basketball Bros is designed for desktop and keyboard play — it really needs those physical keys for the controls to feel right. You can technically load it on a tablet with a keyboard attachment, but for the smoothest experience, stick to a laptop or desktop computer running Chrome.</p>
                  </div>
                </details>
              </div>

              <div className="bg-white rounded-lg border border-gray-200/60 overflow-hidden">
                <details className="group">
                  <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-heading font-bold text-text-dark hover:bg-gray-50 transition-colors">
                    <span>Is Basketball Bros really free?</span>
                    <svg className="w-4 h-4 text-text-dark/40 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-4 text-sm text-text-dark/60 leading-relaxed">
                    <p>Absolutely. No download, no sign-up, no credit card — just click and play. All 33 characters and game modes are available right from the start (characters unlock through gameplay, not paywalls). It&apos;s free basketball, plain and simple.</p>
                  </div>
                </details>
              </div>
            </div>
          </div>

        </section>

        <AdSlot type="banner" className="mt-12 mb-4" />
      </SidebarLayout>
    </>
  );
}
