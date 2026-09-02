import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import { services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Services | ${site.name}`,
  description:
    "Mobile ADAS calibration services: static and dynamic calibration, diagnostic scanning, module programming, windshield camera calibration, and documentation.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="gradient-hero border-b border-[var(--color-line)]">
        <div className="container-page section">
          <p className="eyebrow">Services</p>
          <h1 className="mt-2 max-w-2xl text-4xl font-extrabold text-white sm:text-5xl">
            Mobile ADAS Calibration, Start to Finish
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-[var(--color-muted)]">
            From pre-scan to post-repair verification, {site.name} handles every
            step of the calibration process on-site, using OEM-specified
            equipment and procedures.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid gap-8 lg:grid-cols-2">
          {services.map((s) => (
            <div key={s.slug} id={s.slug} className="card p-8">
              <h2 className="text-xl font-bold text-white">{s.name}</h2>
              <p className="mt-3 text-[var(--color-muted)]">{s.summary}</p>
              <ul className="mt-5 space-y-2">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm text-[var(--color-muted)]">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section border-t border-[var(--color-line)] bg-[var(--color-surface)]/40">
        <div className="container-page grid gap-8 md:grid-cols-3">
          <div className="card p-6 text-center">
            <p className="text-3xl font-extrabold text-[var(--color-brand-light)]">1</p>
            <p className="mt-2 font-semibold text-white">Book the Job</p>
            <p className="mt-2 text-sm text-[var(--color-muted)]">
              Send us the vehicle info and the calibration needed — we confirm
              availability, usually same day or next day.
            </p>
          </div>
          <div className="card p-6 text-center">
            <p className="text-3xl font-extrabold text-[var(--color-brand-light)]">2</p>
            <p className="mt-2 font-semibold text-white">We Come to You</p>
            <p className="mt-2 text-sm text-[var(--color-muted)]">
              A fully-equipped mobile unit arrives at your shop, dealership, or
              driveway and performs the calibration on-site.
            </p>
          </div>
          <div className="card p-6 text-center">
            <p className="text-3xl font-extrabold text-[var(--color-brand-light)]">3</p>
            <p className="mt-2 font-semibold text-white">Get Your Report</p>
            <p className="mt-2 text-sm text-[var(--color-muted)]">
              A photo-verified digital report is emailed same day — ready for
              your records or your insurer.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
