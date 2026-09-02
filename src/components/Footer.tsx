import Link from "next/link";
import { serviceAreas, site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-line)] bg-[var(--color-surface)]">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[var(--color-brand)] font-bold text-white">
              A
            </span>
            <span className="text-lg font-bold text-white">{site.name}</span>
          </div>
          <p className="mt-4 text-sm text-[var(--color-muted)]">
            {site.shortDescription}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Company</h3>
          <ul className="mt-4 space-y-2 text-sm text-[var(--color-muted)]">
            <li><Link href="/services" className="hover:text-white">Services</Link></li>
            <li><Link href="/service-area" className="hover:text-white">Service Area</Link></li>
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm text-[var(--color-muted)]">
            <li>
              <a href={site.phoneHref} className="hover:text-white">{site.phone}</a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a>
            </li>
            <li>{site.address}</li>
            <li>{site.hours}</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Service Area</h3>
          <p className="mt-4 text-sm text-[var(--color-muted)]">
            {serviceAreas.slice(0, 6).join(" · ")} and surrounding South Florida communities.
          </p>
        </div>
      </div>

      <div className="border-t border-[var(--color-line)] py-6">
        <div className="container-page flex flex-col items-center justify-between gap-2 text-xs text-[var(--color-muted)] md:flex-row">
          <p>&copy; {year} {site.name}. All rights reserved.</p>
          <p>Mobile ADAS Calibration &middot; South Florida</p>
        </div>
      </div>
    </footer>
  );
}
