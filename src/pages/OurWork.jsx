import React from "react";
import { Link } from "react-router-dom";
import {
  Activity,
  GraduationCap,
  Database,
  ClipboardList,
  Users,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

/**
 * Medlish Communications — Our Work Page
 * Shares the design system from HomePage.jsx / AboutUs.jsx / Services.jsx
 * (Navbar/Footer/fonts are provided by ../layouts/Layout)
 */

const STATS = [
  { value: "3,000+", label: "Total projects delivered" },
  { value: "2,000+", label: "Original articles published" },
  { value: "20+", label: "Systematic reviews & meta-analyses" },
  { value: "25+", label: "Registries built & managed" },
  { value: "5+", label: "Pan-India consensus statements & guidelines" },
  { value: "10,000+", label: "Total published research works" },
];

const THERAPY_AREAS = [
  "Endocrinology",
  "Cardiology",
  "Diabetology",
  "Medical Oncology",
  "General Practice",
  "Family Medicine",
  "Dermatology",
  "Obstetrics & Gynaecology",
  "Ophthalmology",
  "Pathology",
  "Infectious Diseases",
  "Gastroenterology",
  "Surgery",
  "Surgical Oncology",
];

const THESIS_STEPS = [
  {
    title: "A fresh perspective",
    body: "Uncover multiple publishable insights from a single thesis.",
  },
  {
    title: "A lasting impression",
    body: "Help younger doctors (35–45 years) build a professional legacy.",
  },
  {
    title: "A bigger contribution",
    body: "Extend thesis work into broader scientific influence.",
  },
];

const EHR_STAGES = [
  "Dormant data → meaningful inferences",
  "Meaningful inferences → publications",
  "Publications → thought leadership",
  "Thought leadership → textbooks",
  "Thought leadership → guideline-setting",
  "National & international eminence",
];

const REGISTRY_POINTS = [
  {
    label: "Collaborate",
    body: "Creating assembly points and coordinating deliberations.",
  },
  {
    label: "Collate",
    body: "Managing data and surfacing valuable insights.",
  },
  {
    label: "Conclude",
    body: "Acting as a real-time analytical partner.",
  },
];

const CONSENSUS_POINTS = [
  "Meta-analyses & systematic reviews",
  "Patent-related scientific work",
  "World Congress support",
  "Drug development & gene therapy content",
  "Position papers (KOM articles)",
  "ACERT committee involvement",
  "Multi-site clinical trial coordination",
  "National surveys",
];

const DIABETOLOGY_MODULES = [
  "Modules for physicians",
  "Modules for patient educators",
  "Modules for patients",
  "Modules for nutritionists",
  "Modules on emerging technologies for T1DM management",
  "Patient-centric decision-support tools & GDMT models",
];

const GUIDELINES = [
  { bold: "MASLD management", rest: "— screening & therapeutic recommendations" },
  { bold: "Heart Failure Profiling Wheel", rest: "— operationalizing GDMT" },
  { bold: "In-hospital management of Type 2 diabetes", rest: "— strategy models" },
  { bold: "Vitamin D & COVID-19", rest: "— management considerations" },
  { bold: "Type 1 diabetes in low-resource settings", rest: "— India-specific guidance" },
  { bold: "Type 2 diabetes in elderly populations", rest: "— re-defined criteria" },
];

const OUTPUT_FORMATS = [
  "Systematic reviews & meta-analyses",
  "Original research articles",
  "Key opinion pieces",
  "Review articles / position papers",
  "Full book / textbook chapters",
  "Letters to the editor",
  "Scientific content for social & personalized media",
];

function SectionLabel({ children }) {
  return (
    <span className="text-2xl font-cursive font-extrabold capitalize italic leading-snug text-[#110069] tracking-[0.2em]">
      {children}
    </span>
  );
}

function ProgramCard({ icon: Icon, eyebrow, title, children }) {
  return (
    <div className="rounded-2xl border border-[#110069]/10 bg-white p-6 sm:p-8">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#110069] text-white">
          <Icon size={20} />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#C9A227]">
            {eyebrow}
          </p>
          <h3 className="font-display text-xl text-[#110069] sm:text-2xl">
            {title}
          </h3>
        </div>
      </div>
      <div className="mt-6">{children}</div>
    </div>
  );
}

export default function OurWork() {
  return (
    <>
      {/* ================= INTRO ================= */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-20">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#C9A227]/40 bg-[#C9A227]/10 px-4 py-1.5 text-[16px] font-extrabold uppercase tracking-[0.18em] text-[#110069]">
              Our Work
            </p>
            <h1 className="font-display text-4xl leading-[1.1] text-[#110069] sm:text-5xl lg:text-6xl">
              Success Snapshot
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-[#181430]/65 sm:text-lg">
              Nearly a decade of scientific partnership — translated into
              impact.
            </p>
          </div>
        </div>
        <div className="pointer-events-none absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-[#C9A227] to-transparent sm:block lg:left-10" />
      </section>

      {/* ================= SUCCESS SNAPSHOT ================= */}
      <section className="bg-[#110069]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
            {STATS.map((stat) => (
              <div key={stat.label} className="border-l-2 border-[#C9A227]/60 pl-4">
                <div className="font-display text-3xl text-white sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-xs leading-snug text-white/90">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-white/80">
            These numbers reflect not just volume — but sustained scientific
            contribution across clinical, academic, and pharmaceutical
            ecosystems.
          </p>

          <div className="mt-14 border-t border-white/10 pt-10">
            <SectionLabel>Therapy Areas Covered</SectionLabel>
            <h2 className="mt-3 font-display text-2xl text-white sm:text-3xl">
              Breadth across specialties. Depth in every project.
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {THERAPY_AREAS.map((area) => (
                <span
                  key={area}
                  className="whitespace-nowrap rounded-full border border-white/15 bg-white/5 px-4 py-2 text-base font-medium text-white/80"
                >
                  {area}
                </span>
              ))}
            </div>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
              Our work spans the full spectrum of modern medicine — with
              contextual intelligence in each domain.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SIGNATURE PROGRAMS ================= */}
      <section className="bg-[#FAF9F6]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <SectionLabel>Signature Programs</SectionLabel>
          <h2 className="mt-3 font-display text-3xl text-[#110069] sm:text-4xl">
            Five programs. One partnership philosophy.
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Medical Education for Diabetologists of India */}
            <ProgramCard
              icon={Activity}
              eyebrow="Signature Program"
              title="Medical Education for Diabetologists of India"
            >
              <p className="text-base leading-relaxed text-[#181430]/95">
                A comprehensive Type 1 Diabetes education initiative
                designed for multi-stakeholder impact:
              </p>
              <ul className="mt-4 space-y-2.5">
                {DIABETOLOGY_MODULES.map((item) => (
                  <li key={item} className="flex gap-2.5 text-[15px] leading-relaxed text-[#181430]/90">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#C9A227]" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-base leading-relaxed text-[#181430]/85">
                This program demonstrates our ability to build structured,
                scalable, clinically relevant education ecosystems.
              </p>
            </ProgramCard>

            {/* Thesis to Publication */}
            <ProgramCard
              icon={GraduationCap}
              eyebrow="Signature Program"
              title="Thesis to Publication"
            >
              <p className="text-base font-semibold uppercase tracking-[0.14em] text-[#8a6c14]">
                Closing a long-standing gap in academic publishing.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#181430]/95">
                Nearly{" "}
                <span className="font-semibold text-[#110069]">75%</span> of
                doctors never publish their postgraduate thesis work,
                leaving valuable scientific insights unused. Medlish helps
                convert dormant academic work into lasting scientific
                contribution.
              </p>
              <div className="mt-5 flex flex-col gap-4">
                {THESIS_STEPS.map(({ title, body }, i) => (
                  <div key={title} className="flex gap-3">
                    <span className="font-display text-xl text-[#C9A227]">
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-[#110069]">
                        {title}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-[#181430]/95">
                        {body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-base leading-relaxed text-[#181430]/85">
                This program is a testimony that we act as a catalyst for
                academic visibility and scientific continuity.
              </p>
            </ProgramCard>

            {/* EHR/EMR to Publications — full width, timeline style */}
            <div className="rounded-2xl border border-[#110069]/10 bg-white p-6 sm:p-8 lg:col-span-2">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#110069] text-white">
                  <Database size={20} />
                </div>
                <div>
                  <p className="text-xs  font-semibold uppercase tracking-[0.16em] text-[#C9A227]">
                    Signature Program
                  </p>
                  <h3 className="font-display text-xl text-[#110069] sm:text-2xl">
                    EHR/EMR to Publications
                  </h3>
                </div>
              </div>
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-[#8a6c14]">
                From dormant data to national influence — a six-stage
                journey.
              </p>
              <p className="mt-3 text-base leading-relaxed text-[#181430]/65">
                We guide institutions through a structured transformation:
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {EHR_STAGES.map((stage, i) => (
                  <div
                    key={stage}
                    className="rounded-xl border border-[#110069]/10 bg-[#FAF9F6] p-5"
                  >
                    <span className="font-display text-2xl text-[#C9A227]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-2 text-base font-semibold leading-snug text-[#110069]">
                      {stage}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Registry Creation & Quality Management */}
            <ProgramCard
              icon={ClipboardList}
              eyebrow="Signature Program"
              title="Registry Creation & Quality Management"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#8a6c14]">
                Turning collaboration into scientific intelligence.
              </p>
              <p className="mt-3 text-base leading-relaxed text-[#181430]/65">
                We help doctors:
              </p>
              <div className="mt-4 flex flex-col gap-3">
                {REGISTRY_POINTS.map(({ label, body }) => (
                  <div key={label} className="flex gap-3">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#C9A227]" />
                    <p className="text-[15px] leading-relaxed text-[#181430]/70">
                      <span className="font-semibold text-[#110069]">
                        {label}
                      </span>{" "}
                      — {body}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-base   leading-relaxed text-[#181430]/85">
                Registries inform product portfolio design, new product
                development strategy, and early trend detection — making
                them invaluable for both clinicians and industry.
              </p>
            </ProgramCard>

            {/* Consensus Creation & Opinion Leadership */}
            <ProgramCard
              icon={Users}
              eyebrow="Signature Program"
              title="Consensus Creation & Opinion Leadership"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#8a6c14]">
                Evidence-aligned influence at national scale.
              </p>
              <p className="mt-3 text-base leading-relaxed text-[#181430]/65">
                Our contributions include:
              </p>
              <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {CONSENSUS_POINTS.map((item) => (
                  <li key={item} className="flex gap-2.5 text-[15px] leading-relaxed text-[#181430]/90">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#C9A227]" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-base leading-relaxed text-[#181430]/85">
                This program demonstrates our ability to shape scientific
                opinion responsibly and ethically.
              </p>
            </ProgramCard>
          </div>
        </div>
      </section>

      {/* ================= NATIONAL GUIDELINE CONTRIBUTIONS ================= */}
      <section className="border-y border-[#110069]/10 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <SectionLabel>National Guideline Contributions</SectionLabel>
          <h2 className="mt-3 max-w-2xl font-display text-3xl text-[#110069] sm:text-4xl">
            Scientific work that shapes medical practice.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#181430]/95">
            Medlish content has directly informed national medical practice
            guidance, including:
          </p>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {GUIDELINES.map(({ bold, rest }) => (
              <div
                key={bold}
                className="flex gap-3 rounded-2xl border border-[#110069]/10 bg-[#FAF9F6] p-5"
              >
                <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-[#C9A227]" />
                <p className="text-base leading-relaxed text-[#181430]/95">
                  <span className="font-semibold text-[#110069]">{bold}</span>{" "}
                  {rest}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-[#181430]/85">
            These contributions reflect our leadership-grade scientific
            integrity and real-world relevance.
          </p>
        </div>
      </section>

      {/* ================= FROM IDEA TO IMPACT ================= */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <SectionLabel>From Idea to Impact</SectionLabel>
        <h2 className="mt-3 max-w-2xl font-display text-3xl text-[#110069] sm:text-4xl">
          Every input becomes a scientific asset.
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
          <div className="rounded-2xl border border-[#110069]/10 bg-white p-6 sm:p-7">
            <p className="text-[16px] leading-relaxed text-[#181430]/90">
              <span className="font-bold text-[#110069]">
                Scientific ideas
              </span>{" "}
              become publications — placed in PubMed, Google Scholar, and
              with major publishers like Wiley, Wolters Kluwer, Springer, and
              Oxford University Press.
            </p>
          </div>
          <div className="rounded-2xl border border-[#110069]/10 bg-white p-6 sm:p-7">
            <p className="text-[16px] leading-relaxed text-[#181430]/90">
              <span className="font-bold text-[#110069]">
                Clinical observations & data
              </span>{" "}
              become analyzed, dashboarded, shareable, publishable — even
              patentable — assets.
            </p>
          </div>
        </div>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-900">
          This section shows our ability to convert raw scientific material
          into structured, high-impact output.
        </p>

        <div className="mt-8 rounded-2xl bg-[#110069] p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C9A227]">
            Output Formats We Produce
          </p>
          <p className="mt-2 text-base text-white/90">
            A complete spectrum of scientific communication.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {OUTPUT_FORMATS.map((format) => (
              <span
                key={format}
                className="whitespace-nowrap rounded-full border border-white/15 bg-white/5 px-4 py-2 text-base font-medium text-white/85"
              >
                {format}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CLOSING CTA ================= */}
      <section className="border-t border-[#110069]/10 bg-white">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8 lg:px-10">
          <h2 className="font-display text-3xl text-[#110069] sm:text-4xl">
            Your data, thesis, or idea could be next.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-gray-900">
            Tell us what you're sitting on — we'll help you see the
            publication, registry, or guideline hiding inside it.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#110069] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(17,0,105,0.5)] transition-transform hover:-translate-y-0.5"
          >
            Start a Conversation
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}