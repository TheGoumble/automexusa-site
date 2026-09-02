import Link from "next/link";
import { site } from "@/lib/site";

export default function CTASection() {
  return (
    <section className="section border-t border-[var(--color-line)]">
      <div className="container-page">
        <div className="card gradient-hero flex flex-col items-center gap-6 rounded-2xl p-10 text-center md:p-16">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Ready to schedule a calibration?
          </h2>
          <p className="max-w-xl text-[var(--color-muted)]">
            Tell us about the vehicle and the job — we&apos;ll confirm availability and
            come to you, usually within 24 hours.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn btn-primary">
              Request a Quote
            </Link>
            <a href={site.phoneHref} className="btn btn-outline">
              Call {site.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
