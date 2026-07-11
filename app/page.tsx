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
      "Basketball Bros is a high-energy, arcade-style 1v1 basketball game that you can play right in your browser — no downloads, no installs, just pure hoops action. This fast-paced game is fully unblocked, so you can jump in and play Basketball Bros from school, work, or anywhere without restrictions. Built by Blue Wizard Digital, it strips basketball down to its most fun elements: dribbling, shooting, dunking, and a little bit of friendly competition.",
      "Whether you're looking to kill five minutes or go head-to-head against friends online, Basketball Bros delivers. The controls are simple to learn but hard to master, and with 33 unique characters to unlock — each with their own look and style — there's always a reason to come back for one more game.",
    ],
    images: [
      { src: "/images/basketballbros-desc-1.jpeg", alt: "Basketball Bros gameplay" },
    ],
  },
  {
    id: "how-to-play",
    heading: "How to Play Basketball Bros — Controls and Basics",
    body: [
      "Getting started with Basketball Bros is dead simple. You control your player with the WASD keys or arrow keys. Press Up to jump, then tap Up again mid-air to shoot. On defense, hit Space or Enter to block, steal, or take a swing at your opponent. It's not always pretty, but it's effective in this Basketball Bros game.",
      "There are two control layouts: WASD + G for the left hand, or Arrow keys + L for the right. Pick whichever feels natural. Each Basketball Bros match is quick — usually just a couple of minutes — so it's perfect for sneaking in a game between classes, during lunch, or whenever you need a break.",
    ],
    images: [
      { src: "/images/basketballbros-desc-2.jpeg", alt: "Basketball Bros keyboard controls guide" },
    ],
  },
  {
    id: "game-modes",
    heading: "Basketball Bros Game Modes — More Ways to Play",
    body: [
      "Beyond the quick 1v1 mode, the game gives you several ways to mix it up. Jump into Franchise Mode and take your favorite character through a 17-match tournament — win enough games and you'll lift the trophy. Want to play Basketball Bros with a friend on the same keyboard? Fire up 2 Players Same PC mode and settle the score side by side.",
      "If you're new to Basketball Bros or just want to warm up, Shooting Practice lets you work on your timing without the pressure. And when you're ready, hop into Online Multiplayer: host a private match, share the invite code with your friends, and battle it out. There's even a ranked system that tracks your wins as you climb the leaderboard.",
    ],
    images: [
      { src: "/images/basketballbros-desc-3.jpeg", alt: "Basketball Bros game mode selection screen" },
    ],
  },
  {
    id: "characters",
    heading: "Basketball Bros Characters — 33 Unique Players",
    body: [
      "Here's where Basketball Bros really shines: the roster. There are 33 playable characters, and almost all of them are playful nods to real NBA stars — think Luka Magic, Step Flurry, and the Brow. Each character has a distinct look and personality, and you unlock them as you win Basketball Bros matches and earn in-game currency.",
      "But it's not just about who's on the court — it's about how they look. You can customize everything: jerseys, shorts, sneakers, socks, logos, and even the ball. Want to match your favorite team's colors while playing Basketball Bros? Go for it. Want to look absolutely ridiculous? That's an option too. It's your baller — dress them how you want.",
    ],
    images: [
      { src: "/images/basketballbros-desc-4.jpeg", alt: "Basketball Bros character roster" },
    ],
  },
  {
    id: "dunk-mechanics",
    heading: "Basketball Bros Dunk Physics and Scoring",
    body: [
      "What sets Basketball Bros apart from other browser basketball games is its surprisingly deep physics engine. Every jump, shot, and block is calculated in real time — the angle you release the ball, the momentum of your player, and even the direction you're moving all affect whether that shot swishes through the net or clanks off the rim. Dunking in Basketball Bros isn't just a canned animation: time your approach right, press Up at the peak of your jump, and you'll throw down a monster jam.",
      "Scoring in this Basketball Bros game works on a simple but rewarding system. Regular two-point baskets keep the scoreboard ticking, while three-pointers from beyond the arc reward good positioning and timing. Alley-oops and flashy dunks can shift the momentum of the match and put your opponent on the back foot. The shot clock keeps things moving too — you have to create, attack, and finish before the buzzer.",
    ],
    images: [
      { src: "/images/basketballbros-desc-1.jpeg", alt: "Basketball Bros dunk physics" },
    ],
  },
  {
    id: "beginner-tips",
    heading: "Tips for Getting Good at Basketball Bros",
    body: [
      "If you're stepping onto the court for the first time, start with Shooting Practice mode to get a feel for the timing. The jump-and-release window is tighter than you'd expect in Basketball Bros, and practicing without pressure makes a huge difference. Once you're comfortable, jump into 1v1 against the AI and focus on defense first: learn to read your opponent's movement and time your blocks before worrying about flashy offense.",
      "Pay attention to your stamina bar too. Sprinting and jumping drain it fast in Basketball Bros, and a tired player moves like they're stuck in mud. Pace yourself, pick your moments, and don't be afraid to pull up for a jump shot instead of forcing a drive. As you win Basketball Bros matches, you'll earn coins that unlock new characters and customization items — so even when you lose, focus on improving one thing each game in this Basketball Bros game.",
    ],
    images: [
      { src: "/images/basketballbros-desc-2.jpeg", alt: "Basketball Bros beginner tips" },
    ],
  },
  {
    id: "why-online",
    heading: "Why Play Basketball Bros Online?",
    body: [
      "The real magic of Basketball Bros comes alive when you play against other people. The AI is decent for practice, but nothing beats the unpredictability of a human opponent. Online multiplayer in this Basketball Bros game lets you host private matches with friends — just share the room code — or queue up against random players from around the world. The built-in leaderboard tracks your win record, so there's always a reason to push for one more victory in Basketball Bros.",
      "And because everything runs entirely in your browser, there's zero friction. No account creation needed to play Basketball Bros, no download queue, no waiting for updates. You click, you're in a match, and two minutes later you've either celebrated a buzzer-beater or learned a lesson for the next round. It's pickup basketball, digitized and distilled into its purest form with Basketball Bros — accessible anywhere, anytime, on almost any computer with an internet connection.",
    ],
    images: [
      { src: "/images/basketballbros-desc-3.jpeg", alt: "Basketball Bros online multiplayer" },
    ],
  },
];

function ImagePlaceholder({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
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
  { alt: "Basketball Bros in-game dunk scene", src: "/images/basketballbros-desc-1.jpeg" },
  { alt: "Basketball Bros character selection screen", src: "/images/basketballbros-desc-2.jpeg" },
  { alt: "Basketball Bros multiplayer match action", src: "/images/basketballbros-desc-3.jpeg" },
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
                    <span>Why isn&apos;t the Basketball Bros game loading?</span>
                    <svg className="w-4 h-4 text-text-dark/40 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-4 text-sm text-text-dark/60 leading-relaxed">
                    <p>First, check your internet connection and make sure the page isn&apos;t blocked by your network. Ad blockers and browser extensions sometimes interfere with game embeds — try disabling them or whitelisting basketballbros.site. Chrome is your best bet for the best Basketball Bros experience, but the game also runs on Firefox and Safari.</p>
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
                    <p>Jump right into the Basketball Bros game! Use WASD or Arrow Keys to move, tap Up to jump, and tap Up again mid-air to shoot. Hit Space or Enter to block and steal on defense. Pick the 2 Players option to play with a friend on the same keyboard, or hop into Online to challenge someone across the world. It takes about thirty seconds to learn Basketball Bros and a lifetime to master that perfect step-back three.</p>
                  </div>
                </details>
              </div>

              <div className="bg-white rounded-lg border border-gray-200/60 overflow-hidden">
                <details className="group">
                  <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-heading font-bold text-text-dark hover:bg-gray-50 transition-colors">
                    <span>Which browser works best for Basketball Bros?</span>
                    <svg className="w-4 h-4 text-text-dark/40 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-4 text-sm text-text-dark/60 leading-relaxed">
                    <p>Chrome is the most reliable for playing Basketball Bros — it&apos;s what the game was primarily built and tested on. That said, Basketball Bros also runs well on Firefox and Safari. If you run into performance issues, switching to Chrome usually does the trick.</p>
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
                    <p>Win Basketball Bros matches and you&apos;ll earn in-game currency to unlock new characters. There are 33 in total in this Basketball Bros game, and most are lighthearted references to real NBA stars — you&apos;ll spot familiar moves and nicknames as you go. Franchise Mode is the fastest way to rack up wins and currency, so start there if you&apos;re building out your roster.</p>
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
                    <p>Basketball Bros is designed for desktop and keyboard play — the controls really need those physical keys to feel right. You can technically play Basketball Bros on a tablet with a keyboard attachment, but for the smoothest experience, stick to a laptop or desktop computer.</p>
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
                    <p>Absolutely. This Basketball Bros game is no download, no sign-up, no credit card — just click and play. All 33 characters and game modes are available right from the start. It&apos;s free Basketball Bros, plain and simple.</p>
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
