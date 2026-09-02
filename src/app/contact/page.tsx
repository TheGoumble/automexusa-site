import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Contact | ${site.name}`,
  description:
    "Request a mobile ADAS calibration quote from AUTOMEXUSA — serving South Florida shops, dealerships, and vehicle owners.",
};

export default function ContactPage() {
  return (
    <section className="gradient-hero border-b border-[var(--color-line)]">
      <div className="container-page section grid gap-12 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Contact</p>
          <h1 className="mt-2 text-4xl font-extrabold text-white sm:text-5xl">
            Request a Quote
          </h1>
          <p className="mt-6 max-w-md text-lg text-[var(--color-muted)]">
            Tell us about the vehicle and what needs calibrating. We typically
            confirm scheduling within one business day.
          </p>

          <div className="mt-10 space-y-4 text-sm">
            <div>
              <p className="font-semibold text-white">Phone</p>
              <a href={site.phoneHref} className="text-[var(--color-brand-light)]">
                {site.phone}
              </a>
            </div>
            <div>
              <p className="font-semibold text-white">Email</p>
              <a href={`mailto:${site.email}`} className="text-[var(--color-brand-light)]">
                {site.email}
              </a>
            </div>
            <div>
              <p className="font-semibold text-white">Hours</p>
              <p className="text-[var(--color-muted)]">{site.hours}</p>
            </div>
            <div>
              <p className="font-semibold text-white">Service Area</p>
              <p className="text-[var(--color-muted)]">{site.address}</p>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
