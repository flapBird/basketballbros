import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site.config";
import LegalPage from "@/components/LegalPage";

export const metadata = buildMetadata({ title: "Terms & Conditions", path: "/terms" });

export default function TermsPage() {
  return (
    <LegalPage title="Terms &amp; Conditions">
      <section>
        <h2 className="font-heading font-bold text-xl text-text-dark mt-8 mb-3">
          1. Acceptance of Terms
        </h2>
        <p>
          By using <strong>{siteConfig.siteName}</strong>, you agree to these Terms &amp;
          Conditions. If you don&apos;t agree, please don&apos;t use the site.
        </p>
      </section>

      <section>
        <h2 className="font-heading font-bold text-xl text-text-dark mt-8 mb-3">
          2. Use of the Site
        </h2>
        <p>
          {siteConfig.siteName} provides free browser-based games for your entertainment.
          Play as much as you like — just don&apos;t try to hack, overload, or otherwise
          disrupt the site. We reserve the right to block access to anyone misusing the
          service.
        </p>
      </section>

      <section>
        <h2 className="font-heading font-bold text-xl text-text-dark mt-8 mb-3">
          3. Intellectual Property
        </h2>
        <p>
          Basketball Bros is owned and developed by Blue Wizard Digital. All game
          characters, artwork, music, and gameplay are the property of their respective
          owners. This site does not claim ownership of the game or any of its assets.
        </p>
        <p className="mt-3">
          The website design, written content, and original text on{" "}
          {siteConfig.siteName} belong to us. Please don&apos;t copy or republish our
          content without permission.
        </p>
      </section>

      <section>
        <h2 className="font-heading font-bold text-xl text-text-dark mt-8 mb-3">
          4. Third-Party Content
        </h2>
        <p>
          Basketball Bros is embedded through a third-party platform and may be subject
          to that platform&apos;s own terms. We are not responsible for the availability
          or behavior of third-party services. If the game is down or not loading, it may
          be an issue on the hosting side — we&apos;ll do our best to get it back up.
        </p>
      </section>

      <section>
        <h2 className="font-heading font-bold text-xl text-text-dark mt-8 mb-3">
          5. Disclaimer
        </h2>
        <p>
          The site is provided &quot;as is.&quot; We do our best to keep things running,
          but we can&apos;t guarantee uninterrupted access or that every feature will work
          perfectly on every device. Play at your own risk — though we think the worst
          that&apos;ll happen is you&apos;ll lose a close game.
        </p>
      </section>

      <section>
        <h2 className="font-heading font-bold text-xl text-text-dark mt-8 mb-3">
          6. Limitation of Liability
        </h2>
        <p>
          To the fullest extent allowed by law, {siteConfig.siteName} and its operators
          are not liable for any damages arising from your use of the site. This includes
          direct, indirect, incidental, or consequential damages.
        </p>
      </section>

      <section>
        <h2 className="font-heading font-bold text-xl text-text-dark mt-8 mb-3">
          7. Changes to These Terms
        </h2>
        <p>
          We may update these Terms from time to time. When we do, the new version goes
          live immediately. If you keep using the site after changes are posted,
          you&apos;re agreeing to the updated Terms.
        </p>
      </section>

      <section>
        <h2 className="font-heading font-bold text-xl text-text-dark mt-8 mb-3">
          8. Contact
        </h2>
        <p>
          Questions? Reach us at{" "}
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="text-primary underline"
          >
            {siteConfig.contact.email}
          </a>
          .
        </p>
      </section>
    </LegalPage>
  );
}
