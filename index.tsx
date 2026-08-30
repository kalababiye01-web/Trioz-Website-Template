import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

const PHONE_DISPLAY = "(612) 464-6667";
const PHONE_TEL = "tel:+16124646667";
const ADDRESS = "2552 Nicollet Ave, Minneapolis, MN 55404";
const DIRECTIONS_URL =
  "https://www.google.com/maps/search/?api=1&query=2552+Nicollet+Ave+Minneapolis+MN+55404";

type Service = {
  name: string;
  benefit: string;
  icon: React.ReactNode;
};

function PhoneIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
    </svg>
  );
}

function StarIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M9.05 2.93c.3-.92 1.6-.92 1.9 0l1.3 3.98a1 1 0 0 0 .95.69h4.19c.97 0 1.37 1.24.59 1.81l-3.39 2.46a1 1 0 0 0-.36 1.12l1.3 3.98c.3.92-.76 1.68-1.54 1.11l-3.39-2.46a1 1 0 0 0-1.18 0l-3.39 2.46c-.78.57-1.84-.19-1.54-1.11l1.3-3.98a1 1 0 0 0-.36-1.12L2.02 9.4c-.78-.57-.38-1.81.59-1.81h4.19a1 1 0 0 0 .95-.69l1.3-3.98Z" />
    </svg>
  );
}

const SERVICES: Service[] = [
  {
    name: "Drain Cleaning",
    benefit: "Slow sinks, tubs & clogs cleared fast.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 6h12a2 2 0 0 1 2 2v3l4 4v3H4a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3Z" transform="translate(1 0)" />
        <circle cx="9" cy="14" r="1" /><circle cx="13" cy="14" r="1" />
      </svg>
    ),
  },
  {
    name: "Water Heater Repair",
    benefit: "No hot water? We get it flowing again.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 3c2 2 4 3.5 4 6a4 4 0 0 1-8 0c0-1 .5-2 1-3" />
        <path d="M9 21h6" />
      </svg>
    ),
  },
  {
    name: "Water Heater Installation",
    benefit: "New heaters installed & old units hauled away.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <path d="M12 6v6m-3 0h6" />
      </svg>
    ),
  },
  {
    name: "Leak Detection",
    benefit: "Find hidden leaks before they cause damage.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z" />
        <circle cx="12" cy="14" r="1.5" />
      </svg>
    ),
  },
  {
    name: "Pipe Repair",
    benefit: "Burst or leaking pipes fixed on the spot.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 7v10M21 7v10M7 7v10M17 7v10" />
      </svg>
    ),
  },
  {
    name: "Toilet Repair",
    benefit: "Running, clogged or broken toilets sorted fast.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M7 3h10M9 3a3 3 0 0 0-3 3v2h12V6a3 3 0 0 0-3-3" />
        <path d="M8 8h8v3a4 4 0 0 1-8 0V8ZM12 8v13" />
      </svg>
    ),
  },
  {
    name: "Faucet Installation",
    benefit: "New faucets & fixtures installed right.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 12h12v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-3Z" />
        <path d="M16 9a3 3 0 0 0-3-3h-2a1 1 0 0 1 0-2h5" />
      </svg>
    ),
  },
  {
    name: "Sewer Line Service",
    benefit: "Sewer clogs, backups & line damage handled.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 6h6a2 2 0 0 1 2 2v6a2 2 0 0 0 2 2h6" />
        <path d="M18 14l3-3-3-3" />
      </svg>
    ),
  },
  {
    name: "Emergency Plumbing",
    benefit: "24/7 rapid response for urgent plumbing issues.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 9v4M12 17h.01" />
        <path d="M10.3 3.9 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.7 3.9a2 2 0 0 0-3.4 0Z" />
      </svg>
    ),
  },
];

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

function Home() {
  return (
    <div className="bg-white text-slate-900">
      {/* ===== Header ===== */}
      <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-600 text-white">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z" />
                <circle cx="12" cy="13.5" r="2" />
              </svg>
            </div>
            <span className="text-lg font-extrabold leading-tight tracking-tight">
              Trioz Minneapolis
              <span className="block text-xs font-semibold uppercase tracking-wide text-sky-700">
                Plumbers &amp; Drain Clean Co.
              </span>
            </span>
          </div>
          <a
            href={PHONE_TEL}
            className="hidden items-center gap-2 rounded-lg bg-amber-500 px-4 py-2.5 font-bold text-slate-900 shadow-sm transition hover:bg-amber-400 sm:inline-flex"
          >
            <PhoneIcon className="h-4 w-4" />
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </header>

      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden bg-sky-950 text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-sky-700/40 blur-3xl" />
          <div className="absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-teal-600/30 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 font-semibold text-amber-300">
              <span className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4" />
                ))}
              </span>
              4.9 · (54 Google reviews)
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/90 px-3 py-1.5 font-bold text-emerald-950">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-950 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-900" />
              </span>
              Open 24 Hours · 24/7
            </span>
          </div>

          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
            Leak? Clog? No water?{" "}
            <span className="text-amber-400">We're here now.</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-sky-100 sm:text-xl">
            Trioz Minneapolis Plumbers &amp; Drain Clean Co. provides trusted,
            local emergency plumbing in Minneapolis and surrounding areas —
            available around the clock.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={PHONE_TEL}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-7 py-4 text-lg font-extrabold text-slate-900 shadow-lg shadow-amber-900/30 transition hover:bg-amber-400"
            >
              <PhoneIcon className="h-5 w-5" />
              Call {PHONE_DISPLAY}
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/5 px-7 py-4 text-lg font-bold text-white transition hover:bg-white/10"
            >
              Our Services
            </a>
          </div>

          <p className="mt-6 text-sm text-sky-200">
            Direct line to a real representative — no waiting, answered 24/7.
          </p>
        </div>
      </section>

      {/* ===== Trust / emergency band ===== */}
      <section className="border-b border-slate-100 bg-amber-50">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:px-6 md:grid-cols-3">
          <div className="flex items-start gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 3 2 11l6 2 2 6 4-4 6 6" transform="rotate(180 12 12)" />
              </svg>
            </span>
            <div>
              <h3 className="font-bold text-slate-900">24/7 Emergency Response</h3>
              <p className="text-sm text-slate-600">
                Day or night, weekends and holidays — we're on call for you.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sky-600 text-white">
              <PhoneIcon className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-bold text-slate-900">Direct Line, Real Person</h3>
              <p className="text-sm text-slate-600">
                When you call {PHONE_DISPLAY}, you talk straight to a representative.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-500 text-slate-900">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 21s-7-4.35-7-10a7 7 0 0 1 14 0c0 5.65-7 10-7 10Z" />
                <circle cx="12" cy="11" r="2.5" />
              </svg>
            </span>
            <div>
              <h3 className="font-bold text-slate-900">Serving Minneapolis &amp; Beyond</h3>
              <p className="text-sm text-slate-600">
                Local plumbers covering the Twin Cities metro and surrounding areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Services ===== */}
      <section id="services" className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-sm font-bold text-emerald-800">
              24/7 Emergency Plumbing
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Our Plumbing Services
            </h2>
            <p className="mt-3 text-slate-600">
              From urgent emergencies to everyday repairs — one call to{" "}
              {PHONE_DISPLAY} handles it all.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <a
                key={s.name}
                href={PHONE_TEL}
                className={`group flex flex-col justify-between rounded-2xl border p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${
                  s.name === "Emergency Plumbing"
                    ? "border-emerald-300 bg-emerald-50 ring-2 ring-emerald-500/30"
                    : "border-slate-200 bg-white"
                }`}
              >
                <div>
                  <div
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${
                      s.name === "Emergency Plumbing"
                        ? "bg-emerald-600 text-white"
                        : "bg-sky-100 text-sky-700 group-hover:bg-sky-600 group-hover:text-white"
                    }`}
                  >
                    {s.icon}
                  </div>
                  <h3 className="mt-4 text-xl font-bold">{s.name}</h3>
                  <p className="mt-1 text-slate-600">{s.benefit}</p>
                </div>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-sky-700 group-hover:underline">
                  Call to book
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14m-6-6 6 6-6 6" />
                  </svg>
                </span>
              </a>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-sky-950 px-6 py-8 text-center text-white sm:text-left sm:flex sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-bold">Have an emergency right now?</h3>
              <p className="mt-1 text-sky-200">
                Don't wait — our team is available 24/7 for immediate help.
              </p>
            </div>
            <a
              href={PHONE_TEL}
              className="mt-4 inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-amber-500 px-6 py-4 text-lg font-extrabold text-slate-900 shadow-lg transition hover:bg-amber-400 sm:mt-0"
            >
              <PhoneIcon className="h-5 w-5" />
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* ===== Why choose us ===== */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
            Why Choose Trioz Minneapolis?
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-6 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                <span className="flex text-2xl text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5" />
                  ))}
                </span>
              </div>
              <h3 className="mt-4 text-xl font-bold">4.9★ Rated</h3>
              <p className="mt-2 text-slate-600">
                Proudly rated 4.9 stars from 54 verified Google reviews.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 3" />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-bold">Open 24/7</h3>
              <p className="mt-2 text-slate-600">
                We're available 24 hours a day, 7 days a week — always.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 21s-7-4.35-7-10a7 7 0 0 1 14 0c0 5.65-7 10-7 10Z" />
                  <circle cx="12" cy="11" r="2.5" />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-bold">Licensed &amp; Local</h3>
              <p className="mt-2 text-slate-600">
                Experienced Minneapolis plumbers you can trust in your home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Location & hours ===== */}
      <section id="location" className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Visit Us &amp; Hours
              </h2>
              <p className="mt-3 text-slate-600">
                Proudly serving Minneapolis and surrounding areas with 24/7
                emergency plumbing.
              </p>
              <div className="mt-6 space-y-4 text-slate-700">
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-700">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-semibold">{ADDRESS}</p>
                    <a
                      href={DIRECTIONS_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-semibold text-sky-700 hover:underline"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-700">
                    <PhoneIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-semibold">{PHONE_DISPLAY}</p>
                    <a href={PHONE_TEL} className="text-sm font-semibold text-sky-700 hover:underline">
                      Tap to call now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 bg-emerald-50 px-6 py-4">
                <h3 className="text-lg font-bold text-emerald-900">Hours of Operation</h3>
                <span className="rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold text-white">
                  Open Now
                </span>
              </div>
              <ul className="divide-y divide-slate-100 px-6">
                {DAYS.map((day) => (
                  <li key={day} className="flex items-center justify-between py-3">
                    <span className="font-medium text-slate-700">{day}</span>
                    <span className="font-semibold text-emerald-700">Open 24 hours</span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-slate-100 bg-slate-50 px-6 py-4 text-sm text-slate-500">
                Including weekends &amp; holidays — we never close.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Final CTA ===== */}
      <section className="bg-sky-950 py-16 text-center text-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Plumbing emergency? We're on it.
          </h2>
          <p className="mt-3 text-sky-200">
            One call and our team is ready to help — 24 hours a day, 7 days a week.
          </p>
          <a
            href={PHONE_TEL}
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-8 py-4 text-xl font-extrabold text-slate-900 shadow-lg transition hover:bg-amber-400"
          >
            <PhoneIcon className="h-6 w-6" />
            Call {PHONE_DISPLAY}
          </a>
          <p className="mt-4 text-sm text-sky-300">
            Direct line · Answered 24/7 · Minneapolis &amp; surrounding areas
          </p>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="border-t border-slate-800 bg-sky-950 pb-28 pt-10 text-sky-200 sm:pb-10">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold text-white">Trioz Minneapolis Plumbers &amp; Drain Clean Co.</h3>
            <p className="mt-2 text-sm">
              Licensed, local, and trusted emergency plumbing for Minneapolis and
              surrounding areas.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Contact</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <a href={PHONE_TEL} className="font-semibold text-amber-400 hover:underline">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>{ADDRESS}</li>
              <li>
                <a
                  href={DIRECTIONS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-sky-300 hover:underline"
                >
                  Get Directions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Hours</h3>
            <p className="mt-2 text-sm">Open 24 hours, 7 days a week</p>
            <p className="mt-1 text-sm text-sky-300">
              Including weekends &amp; holidays — we never close.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-6xl border-t border-slate-800 pt-6 text-center text-xs text-sky-400 px-4">
          © {new Date().getFullYear()} Trioz Minneapolis Plumbers &amp; Drain Clean Co. All rights reserved.
        </div>
      </footer>

      {/* ===== Mobile sticky call bar ===== */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white p-3 shadow-[0_-4px_12px_rgba(0,0,0,0.08)] sm:hidden">
        <a
          href={PHONE_TEL}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-amber-500 py-4 text-lg font-extrabold text-slate-900 shadow-sm active:bg-amber-400"
        >
          <PhoneIcon className="h-5 w-5" />
          Call {PHONE_DISPLAY}
        </a>
        <p className="mt-1.5 text-center text-xs font-semibold text-emerald-700">
          Open 24 hours · Tap to call now
        </p>
      </div>
    </div>
  );
}
