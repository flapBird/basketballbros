import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site.config";
import LegalPage from "@/components/LegalPage";

export const metadata = buildMetadata({ title: "Privacy Policy", path: "/privacy" });

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <section>
        <h2 className="font-heading font-bold text-xl text-text-dark mt-8 mb-3">
          1. Information We Collect
        </h2>
        <p>
          When you visit <strong>{siteConfig.siteName}</strong>, we may automatically
          collect certain standard information through web server logs and analytics tools.
          This includes your IP address, browser type and version, operating system, the
          pages you visit, and how long you spend on each page. We use this data to
          understand how people use the site and to keep things running smoothly.
        </p>
      </section>

      <section>
        <h2 className="font-heading font-bold text-xl text-text-dark mt-8 mb-3">
          2. Cookies
        </h2>
        <p>
          Like most websites, we use cookies and similar technologies to remember your
          preferences, analyze site traffic, and keep the site functioning properly.
          You can disable cookies in your browser settings at any time, though some
          features of the site may not work as expected without them.
        </p>
      </section>

      <section>
        <h2 className="font-heading font-bold text-xl text-text-dark mt-8 mb-3">
          3. Third-Party Services
        </h2>
        <p>
          We may use analytics services to understand how visitors interact with the
          site — things like page views, visit duration, and general location by country.
          These services operate under their own privacy policies and may use cookies to
          collect this information. We do not share any personally identifiable data
          with these services.
        </p>
        <p className="mt-3">
          Basketball Bros is embedded through a third-party game platform, which may use
          its own cookies and data collection practices. We do not control how that
          platform handles your data, so we recommend reviewing its privacy policy if
          you have concerns.
        </p>
      </section>

      <section>
        <h2 className="font-heading font-bold text-xl text-text-dark mt-8 mb-3">
          4. Children&apos;s Privacy
        </h2>
        <p>
          We do not knowingly collect personal information from children under 13. If
          you believe your child has shared personal data through this site, please reach
          out and we will remove it promptly.
        </p>
      </section>

      <section>
        <h2 className="font-heading font-bold text-xl text-text-dark mt-8 mb-3">
          5. Changes to This Policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time. When we do, the revised
          version will be posted here with an updated date. Continuing to use the site
          after changes are posted means you accept the updated policy.
        </p>
      </section>

      <section>
        <h2 className="font-heading font-bold text-xl text-text-dark mt-8 mb-3">
          6. Contact
        </h2>
        <p>
          If you have questions about this Privacy Policy, reach us at{" "}
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
