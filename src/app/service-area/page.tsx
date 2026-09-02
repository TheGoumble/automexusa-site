import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import { counties, serviceAreas, site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Service Area | ${site.name}`,
  description:
    "Mobile ADAS calibration service area covering Miami-Dade, Broward, and Palm Beach counties, including Miami, Fort Lauderdale, and West Palm Beach.",
};

export default function ServiceAreaPage() {
  return (
    <>
      <section className="gradient-hero border-b border-[var(--color-line)]">
        <div className="container-page section">
          <p className="eyebrow">Service Area</p>
          <h1 className="mt-2 max-w-2xl text-4xl font-extrabold text-white sm:text-5xl">
            Mobile Coverage Across South Florida
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-[var(--color-muted)]">
            Our mobile calibration units run daily routes across three counties.
            Don&apos;t see your city listed? Reach out — we&apos;re adding
            coverage regularly and can often accommodate outside our core area.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-3">
          {counties.map((county) => (
            <div key={county} className="card p-6">
              <h2 className="font-bold text-white">{county}</h2>
              <p className="mt-2 text-sm text-[var(--color-muted)]">
                Full mobile calibration coverage, scheduled daily.
              </p>
            </div>
          ))}
        </div>

        <div className="container-page mt-10">
          <div className="card p-8">
            <h3 className="font-semibold text-white">Cities We Serve</h3>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {serviceAreas.map((area) => (
                <div
                  key={area}
                  className="rounded-lg border border-[var(--color-line)] px-4 py-3 text-sm text-[var(--color-muted)]"
                >
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section border-t border-[var(--color-line)] bg-[var(--color-surface)]/40">
        <div className="container-page text-center">
          <h2 className="text-2xl font-bold text-white">Not sure if we cover you?</h2>
          <p className="mx-auto mt-3 max-w-xl text-[var(--color-muted)]">
            Call {site.phone} or send us your location — we&apos;ll let you
            know if we can get there and how soon.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
