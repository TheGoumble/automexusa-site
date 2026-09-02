import Link from "next/link";
import CTASection from "@/components/CTASection";
import {
  customerTypes,
  serviceAreas,
  services,
  site,
  whyUs,
} from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero border-b border-[var(--color-line)]">
        <div className="container-page section grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Mobile &middot; South Florida</p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              Mobile ADAS Calibration,{" "}
              <span className="text-[var(--color-brand-light)]">
                Wherever the Vehicle Is
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-[var(--color-muted)]">
              {site.name} brings OEM-level camera, radar, and sensor calibration
              to collision centers, dealerships, independent shops, and vehicle
              owners across South Florida — no towing, no downtime.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="btn btn-primary">
                Request a Quote
              </Link>
              <Link href="/services" className="btn btn-outline">
                View Services
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-[var(--color-muted)]">
              <span>✓ Static &amp; dynamic calibration</span>
              <span>✓ Same-day availability</span>
              <span>✓ Documented for insurance</span>
            </div>
          </div>

          <div className="card p-8">
            <p className="eyebrow">Why shops call us</p>
            <ul className="mt-6 space-y-5">
              {whyUs.map((item) => (
                <li key={item.title} className="flex gap-4">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--color-accent)]" />
                  <div>
                    <p className="font-semibold text-white">{item.title}</p>
                    <p className="mt-1 text-sm text-[var(--color-muted)]">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="section">
        <div className="container-page">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">What we do</p>
              <h2 className="mt-2 text-3xl font-bold text-white">
                Full-Service ADAS Calibration
              </h2>
            </div>
            <Link
              href="/services"
              className="text-sm font-semibold text-[var(--color-brand-light)] hover:underline"
            >
              See all services →
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((s) => (
              <div key={s.slug} className="card p-6">
                <h3 className="font-semibold text-white">{s.name}</h3>
                <p className="mt-2 text-sm text-[var(--color-muted)]">
                  {s.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="section border-t border-[var(--color-line)] bg-[var(--color-surface)]/40">
        <div className="container-page">
          <p className="eyebrow">Who we serve</p>
          <h2 className="mt-2 text-3xl font-bold text-white">
            Built for Shops, Dealers, and Vehicle Owners
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {customerTypes.map((c) => (
              <div key={c.title} className="card p-6">
                <h3 className="font-semibold text-white">{c.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-muted)]">
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service area teaser */}
      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">Where we work</p>
            <h2 className="mt-2 text-3xl font-bold text-white">
              Covering Miami-Dade, Broward &amp; Palm Beach Counties
            </h2>
            <p className="mt-4 text-[var(--color-muted)]">
              Our mobile units run routes across South Florida every day. If
              you&apos;re not sure we cover your area, ask — we&apos;re
              expanding coverage regularly.
            </p>
            <Link
              href="/service-area"
              className="mt-6 inline-block text-sm font-semibold text-[var(--color-brand-light)] hover:underline"
            >
              View full service area →
            </Link>
          </div>
          <div className="card flex flex-wrap gap-3 p-8">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-[var(--color-line)] px-4 py-2 text-sm text-[var(--color-muted)]"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
