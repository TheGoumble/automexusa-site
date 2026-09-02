"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/service-area", label: "Service Area" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-[var(--color-ink)]/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[var(--color-brand)] font-bold text-white">
            A
          </span>
          <span className="text-lg font-bold tracking-tight text-white">
            {site.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--color-muted)] transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={site.phoneHref}
            className="text-sm font-semibold text-[var(--color-brand-light)]"
          >
            {site.phone}
          </a>
          <Link href="/contact" className="btn btn-primary">
            Get a Quote
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="flex items-center justify-center rounded-md border border-[var(--color-line)] p-2 text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-[var(--color-line)] bg-[var(--color-ink)] md:hidden">
          <nav className="container-page flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 text-sm font-medium text-[var(--color-muted)] hover:bg-[var(--color-surface)] hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={site.phoneHref}
              className="mt-2 rounded-md px-2 py-2.5 text-sm font-semibold text-[var(--color-brand-light)]"
            >
              {site.phone}
            </a>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn btn-primary mt-2 justify-center"
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
