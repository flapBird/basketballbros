import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site.config";

export const metadata = buildMetadata({ title: "Contact", path: "/contact" });

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-text-dark mb-4">
        Contact Us
      </h1>

      <p className="text-text-dark/70 leading-relaxed mb-6">
        Whether you have a question about the game, found something that isn&apos;t working right, or
        want to discuss a partnership — we&apos;d love to hear from you. Drop us an email and
        we&apos;ll get back as soon as we can.
      </p>

      <div className="bg-surface rounded-xl p-6 border border-gray-100">
        <p className="text-sm text-text-dark/60 mb-1">Send your message to:</p>
        <a
          href={`mailto:${siteConfig.contact.email}`}
          className="text-primary font-semibold text-lg hover:underline"
        >
          {siteConfig.contact.email}
        </a>
      </div>

      <p className="mt-8 text-sm text-text-dark/40 leading-relaxed">
        We typically respond within 1-2 business days. For urgent issues,
        please include as much detail as possible — screenshots, your browser and operating system,
        and a description of what went wrong help a lot.
      </p>
    </div>
  );
}
