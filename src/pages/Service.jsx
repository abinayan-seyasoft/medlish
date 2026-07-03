import React from "react";
import {
  FileText,
  FlaskConical,
  GraduationCap,
  Megaphone,
  Share2,
  CalendarDays,
  ArrowRight,
} from "lucide-react";

/**
 * Medlish Communications — Services Page
 * Shares the design system from HomePage.jsx / AboutUs.jsx
 * (Navbar/Footer/fonts are provided by ../layouts/Layout)
 */

const SERVICES = [
  {
    icon: FileText,
    number: "3.1",
    title: "Medical Writing Services",
    items: [
      "Manuscript preparation",
      "Journal publications",
      "Customized medical journals",
      "Conference proceedings",
    ],
  },
  {
    icon: FlaskConical,
    number: "3.2",
    title: "Clinical Research Services",
    items: [
      "Study design & protocol writing",
      "Case report forms",
      "Regulatory compliance",
      "Pharmacovigilance",
      "Data analysis and statistics",
    ],
  },
  {
    icon: GraduationCap,
    number: "3.3",
    title: "Patient Education Services",
    items: ["YouTube presentations", "Interactive engagement platforms"],
  },
  {
    icon: Megaphone,
    number: "3.4",
    title: "Medico-Marketing Solutions",
    items: [
      "Therapy positioning",
      "Medical review articles",
      "Training & seminars",
      "Continuing medical education (CME)",
    ],
  },
  {
    icon: Share2,
    number: "3.5",
    title: "Direct-to-Consumer Promotions",
    items: [
      "Social media constructs",
      "Brand imaging & brand personality",
      "Focused group discussions",
      "Market research",
    ],
  },
  {
    icon: CalendarDays,
    number: "3.6",
    title: "Conferences & Meetings",
    items: [
      "Web platforms for events",
      "World congress support",
      "Proceedings and conference documentation",
    ],
  },
];

export default function Services() {
  return (
    <>
      {/* ================= INTRO ================= */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#C9A227]/40 bg-[#C9A227]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#8a6c14]">
              Services
            </p>

            <h1 className="font-display text-4xl leading-[1.1] text-[#110069] sm:text-5xl lg:text-6xl">
              From manuscript to national registry.
            </h1>

            <p className="mt-6 text-base leading-relaxed text-[#181430]/65 sm:text-lg">
              From a single manuscript to a national registry, Medlish offers
              end-to-end medical communications support across six core
              service lines.
            </p>
          </div>
        </div>

        <div className="pointer-events-none absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-[#C9A227] to-transparent sm:block lg:left-10" />
      </section>

      {/* ================= SERVICE LINES ================= */}
      <section className="border-y border-[#110069]/10 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map(({ icon: Icon, number, title, items }) => (
              <div
                key={title}
                className="group flex flex-col rounded-2xl border border-[#110069]/10 bg-[#FAF9F6] p-6 transition-shadow hover:shadow-[0_20px_40px_-24px_rgba(17,0,105,0.35)] sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#110069] text-white transition-colors group-hover:bg-[#C9A227]">
                    <Icon size={20} />
                  </div>
                  <span className="font-display text-2xl text-[#C9A227]">
                    {number}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-xl text-[#110069]">
                  {title}
                </h3>

                <ul className="mt-4 space-y-2.5">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2.5 text-sm leading-relaxed text-[#181430]/70"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#C9A227]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA BAND ================= */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-gradient-to-r from-[#110069] to-[#241394] p-8 sm:flex-row sm:items-center sm:p-10">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
              Not Sure Where to Start?
            </span>
            <p className="mt-3 max-w-xl text-lg leading-snug text-white sm:text-xl">
              Not sure which service you need? Tell us your challenge and
              we'll map the right combination.
            </p>
          </div>
          <a
            href="/#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#C9A227] px-6 py-3 text-sm font-semibold text-[#110069] transition-transform hover:-translate-y-0.5"
          >
            Talk to Our Team
            <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </>
  );
}