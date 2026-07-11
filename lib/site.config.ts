/**
 * Site configuration — the single source of truth for the entire game site.
 * When creating a new game site, only edit this file and replace images in /public.
 *
 * Sensitive values (gaId, adsenseClient) are read from environment variables
 * via getters so they stay out of the compiled bundle when not set.
 */

function env(key: string, fallback = ""): string {
  return (typeof process !== "undefined" && process.env?.[key]) || fallback;
}

export const siteConfig = {
  /** Display name shown in header, footer, and browser title. */
  siteName: "Basketball Bros",

  /** Canonical domain, no trailing slash. Used for sitemap, OG URLs, etc. */
  domain: "https://basketballbros.site",

  seo: {
    /** Homepage <title>. Used as-is on the homepage. */
    title: "Basketball Bros Game - Play Unblocked Online Free",

    /**
     * Homepage meta description, keep under 160 characters.
     * Describe what the game is and that it's free to play online.
     */
    description:
      "Play Basketball Bros game online free unblocked. Fast 1v1 basketball action, 33 characters, crazy dunks & multiplayer. No download needed.",

    /** Comma-separated keywords for the homepage. */
    keywords: ["basketball bros", "basketbros", "basketball game free", "play basketball bros online", "1v1 basketball", "multiplayer basketball", "basketball bros unblocked"],

    /** Social sharing image, 1200x630px. Replace /public/og-image.png. */
    ogImage: "/og-image.png",

    /** Twitter/X handle, can be left empty. */
    twitterHandle: "",
  },

  game: {
    /** Name of the game, shown in Hero, JSON-LD, etc. */
    name: "Basketball Bros",

    /** Genre(s) for JSON-LD VideoGame.genre. e.g. ["Sports", "Basketball"]. */
    genre: ["Sports", "Basketball", "Multiplayer"],

    /** iframe embed URL — must be manually replaced with the real embeddable URL. */
    embedUrl: "https://basketballgame.io/basketball-bros-game.embed",

    /** Aspect ratio of the embedded game, used to prevent CLS. */
    aspectRatio: "16 / 9",

    /** Cover image shown on the idle/launch screen. Replace /public/cover.jpg. */
    coverImage: "/cover.svg",

    /** Age rating for the game. */
    ageRating: "Everyone",

    /** Attribution displayed below the game and in the footer. */
    sourceAttribution: "BasketBros by Blue Wizard Digital · Embedded via CrazyGames",
  },

  theme: {
    /**
     * Bright & playful color palette.
     * Adjust per-game to match its visual style, but keep the overall bright tone.
     */
    primary: "#e85d2c",
    secondary: "#1C3A5C",
    background: "#FBF7F2",
    surface: "#F0E8DC",
    textDark: "#1C1917",
    fontHeading: "'Nunito', sans-serif",
    fontBody: "'Quicksand', sans-serif",
  },

  contact: {
    /** Contact email shown on /contact and in legal pages. */
    email: "hello@basketballbros.site",
  },

  legal: {
    /** Last updated date for Privacy / Terms pages. */
    lastUpdated: "2026-07-09",
  },

  ads: {
    /**
     * Keep false until AdSense is approved and real ad code is added.
     * When true, sidebar and rectangle ad slots appear on the page.
     */
    enabled: false,
    /** AdSense publisher ID — read from NEXT_PUBLIC_ADSENSE_CLIENT_ID env var. */
    get clientId() {
      return env("NEXT_PUBLIC_ADSENSE_CLIENT_ID");
    },
  },

  analytics: {
    /** Google Analytics 4 measurement ID — read from NEXT_PUBLIC_GA_ID env var. */
    get gaId() {
      return env("NEXT_PUBLIC_GA_ID");
    },
    /** Google Search Console verification code. Leave empty to skip. */
    gscVerification: "",
  },
} as const;

export type SiteConfig = typeof siteConfig;
