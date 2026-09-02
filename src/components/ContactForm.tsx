"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(site.formspreeEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="card p-8 text-center">
        <p className="text-lg font-semibold text-white">Thanks — message sent!</p>
        <p className="mt-2 text-sm text-[var(--color-muted)]">
          We&apos;ll get back to you shortly, usually within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-5 p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-white">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-2 w-full rounded-md border border-[var(--color-line)] bg-[var(--color-ink)] px-3 py-2 text-sm text-white outline-none focus:border-[var(--color-brand-light)]"
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-white">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="mt-2 w-full rounded-md border border-[var(--color-line)] bg-[var(--color-ink)] px-3 py-2 text-sm text-white outline-none focus:border-[var(--color-brand-light)]"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium text-white">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-2 w-full rounded-md border border-[var(--color-line)] bg-[var(--color-ink)] px-3 py-2 text-sm text-white outline-none focus:border-[var(--color-brand-light)]"
        />
      </div>

      <div>
        <label htmlFor="vehicle" className="text-sm font-medium text-white">
          Vehicle (year / make / model)
        </label>
        <input
          id="vehicle"
          name="vehicle"
          type="text"
          placeholder="e.g. 2022 Honda CR-V"
          className="mt-2 w-full rounded-md border border-[var(--color-line)] bg-[var(--color-ink)] px-3 py-2 text-sm text-white outline-none focus:border-[var(--color-brand-light)]"
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-white">
          What do you need calibrated?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-2 w-full rounded-md border border-[var(--color-line)] bg-[var(--color-ink)] px-3 py-2 text-sm text-white outline-none focus:border-[var(--color-brand-light)]"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn btn-primary w-full disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-400">
          Something went wrong sending your message. Please call or email us
          directly — see contact details above.
        </p>
      )}
    </form>
  );
}
