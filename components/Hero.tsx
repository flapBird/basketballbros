import GameEmbed from "./GameEmbed";

export default function Hero() {
  return (
    <section className="hero-gradient relative overflow-hidden pt-8 pb-16 sm:pt-10 sm:pb-24 px-4">
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <GameEmbed />
      </div>
    </section>
  );
}
