import React from "react";
import { Link } from "react-router-dom";
import {
  FileText,
  FlaskConical,
  GraduationCap,
  Megaphone,
  Share2,
  CalendarDays,
  ArrowRight,
  Sparkle,
} from "lucide-react";

/**
 * Medlish Communications — Services Page
 * Shares the design system from HomePage.jsx / AboutUs.jsx
 * (Navbar/Footer/fonts are provided by ../layouts/Layout)
 */

const SERVICES = [
  {
    icon: FileText,
    number: "01",
    title: "Medical Writing & Scientific Publications",
    tagline: "Turning science into structured, publishable knowledge.",
    items: [
      "Manuscript preparation",
      "Journal publications",
      "Customized medical journals",
      "Conference abstracts & proceedings",
    ],
    distinctive:
      'We don\u2019t just write — we interpret, refine, and position your science so it stands up to "best of class peer review" and "real-world scrutiny."',
  },
  {
    icon: FlaskConical,
    number: "02",
    title: "Clinical Research & Regulatory Support",
    tagline: "Scientific rigor from study design to statistical interpretation.",
    items: [
      "Study design & protocol writing",
      "Case report forms (CRFs)",
      "Regulatory compliance documentation",
      "Pharmacovigilance support",
      "Data analysis & biostatistics",
    ],
    distinctive:
      "Our clinical and regulatory insight ensures your research is not only well-designed but also defensible, ethical, and aligned with global standards.",
  },
  {
    icon: GraduationCap,
    number: "03",
    title: "Patient Education & Public Health Communication",
    tagline: "Making science accessible, accurate, and empathetic.",
    items: [
      "Patient-friendly YouTube presentations",
      "Interactive engagement platforms",
    ],
    distinctive:
      "We translate complex science into clear, human-centered communication that empowers patients and communities.",
  },
  {
    icon: Megaphone,
    number: "04",
    title: "Medico-Marketing & Scientific Strategy",
    tagline: "Evidence-aligned communication that strengthens brand credibility.",
    items: [
      "Therapy positioning",
      "Medical review articles",
      "Training modules & seminars",
      "Continuing Medical Education (CME) content",
    ],
    distinctive:
      "We support brand teams with scientific clarity — not marketing spin — ensuring credibility with clinicians and regulators.",
  },
  {
    icon: Share2,
    number: "05",
    title: "Direct-to-Consumer Scientific Communication",
    tagline: "Science-backed messaging for consumer-facing brands.",
    items: [
      "Social media scientific constructs",
      "Brand imaging & personality development",
      "Focused group discussions",
      "Market research",
    ],
    distinctive:
      "We help consumer brands communicate responsibly — grounded in evidence, shaped by context, and free of exaggerated claims.",
  },
  {
    icon: CalendarDays,
    number: "06",
    title: "Conferences, Events & Scientific Meetings",
    tagline: "End-to-end support for scientific gatherings.",
    items: [
      "Web platforms for events",
      "World congress support",
      "Proceedings & conference documentation",
    ],
    distinctive:
      "We ensure scientific events are structured, documented, and communicated with precision — from planning to publication.",
  },
];

export default function Services() {
  return (
    <>
      {/* ================= INTRO ================= */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#C9A227]/40 bg-[#C9A227]/10 px-4 py-1.5 text-[16px] font-extrabold uppercase tracking-[0.18em] text-[#110069]">
              Services
            </p>

            <h1 className="font-display text-4xl leading-[1.15] text-[#110069] sm:text-5xl lg:text-6xl">
              From manuscripts to national registries — scientific
              communication with depth, rigor, and context.
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-gray-900">
              Medlish offers end-to-end medical and scientific communication
              support across six core service lines. Each service is
              delivered with precision, responsibility, and real-world
              contextual understanding — ensuring your scientific output is
              credible, usable, and impactful.
            </p>
          </div>
        </div>

        <div className="pointer-events-none absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-[#C9A227] to-transparent sm:block lg:left-10" />
      </section>

      {/* ================= SERVICE LINES ================= */}
      <section className="border-y border-[#110069]/10 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {SERVICES.map(({ icon: Icon, number, title, tagline, items, distinctive }) => (
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
                <p className="mt-1.5 text-base italic text-[#181430]/90">
                  {tagline}
                </p>

                <ul className="mt-4 space-y-2.5">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2.5 text-[15px] leading-relaxed text-[#181430]"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#C9A227]" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex-1 rounded-xl border-l-2 border-[#C9A227] bg-white p-4">
                  <p className="flex items-start gap-2 text-xs font-semibold uppercase tracking-[0.1em] text-[#8a6c14]">
                    <Sparkle size={13} className="mt-0.5 shrink-0" />
                    What Makes This Distinctive
                  </p>
                  <p className="mt-2 text-base leading-relaxed text-[#181430]/90">
                    {distinctive}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA BAND ================= */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-gradient-to-r from-[#110069] to-[#241394] p-8 sm:flex-row sm:items-center sm:p-10">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
              Not Sure Where to Start?
            </span>
            <p className="mt-3 max-w-xl text-lg leading-snug text-white sm:text-xl">
              Tell us your challenge — we'll map the right combination of
              services to your scientific and strategic needs.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#C9A227] px-6 py-3 text-sm font-semibold text-[#110069] transition-transform hover:-translate-y-0.5"
          >
            Talk to Our Team
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}