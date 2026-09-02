import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import { site, whyUs } from "@/lib/site";

export const metadata: Metadata = {
  title: `About | ${site.name}`,
  description:
    "AUTOMEXUSA provides mobile ADAS calibration across South Florida, bringing OEM-level equipment and documentation directly to shops and vehicle owners.",
};

export default function AboutPage() {
  return (
    <>
      <section className="gradient-hero border-b border-[var(--color-line)]">
        <div className="container-page section grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">About {site.name}</p>
            <h1 className="mt-2 text-4xl font-extrabold text-white sm:text-5xl">
              Calibration Expertise, Built for Mobility
            </h1>
            <p className="mt-6 text-lg text-[var(--color-muted)]">
              As vehicles have added more cameras, radar, and sensors, keeping
              those systems properly calibrated has become essential to safe
              repairs. {site.name} exists to make OEM-level calibration
              accessible — without requiring every shop to buy the equipment
              or every vehicle owner to find a specialist.
            </p>
            <p className="mt-4 text-[var(--color-muted)]">
              We bring the calibration to the vehicle, wherever it is, and
              document every job so shops, insurers, and owners have the
              paper trail they need.
            </p>
          </div>
          <div className="card p-8">
            <h2 className="font-semibold text-white">What guides our work</h2>
            <ul className="mt-5 space-y-4">
              {whyUs.map((item) => (
                <li key={item.title}>
                  <p className="font-semibold text-[var(--color-brand-light)]">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm text-[var(--color-muted)]">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid gap-8 md:grid-cols-2">
          <div className="card p-8">
            <h2 className="font-bold text-white">Our Equipment</h2>
            <p className="mt-3 text-[var(--color-muted)]">
              Our mobile units carry OEM-specified targets, frames, and
              diagnostic tools for static and dynamic calibration across
              domestic, Asian, European, and exotic makes — kept current as
              manufacturer requirements evolve.
            </p>
          </div>
          <div className="card p-8">
            <h2 className="font-bold text-white">Our Standards</h2>
            <p className="mt-3 text-[var(--color-muted)]">
              Every calibration follows OEM procedures to the letter, with
              photo-verified documentation for every job — because a
              calibration is only as good as its verification.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
