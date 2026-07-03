import React from "react";
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
  { value: "3,000+", label: "Total projects" },
  { value: "2,000+", label: "Original articles" },
  { value: "20+", label: "Systematic reviews / meta-analyses" },
  { value: "25+", label: "Registries" },
  { value: "5+", label: "Pan-India consensus statements & guidelines" },
  { value: "1,000+", label: "Total published research work" },
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
];

const THESIS_STEPS = [
  {
    title: "A fresh perspective",
    body: "Another pair of scientific eyes often reveals more than one publication hiding in a single thesis.",
  },
  {
    title: "A lasting impression",
    body: "We help younger doctors (35–45 years) publish their thesis work and build a lasting professional legacy.",
  },
  {
    title: "A bigger contribution",
    body: "Some thesis work has genuine scope to extend into a larger scientific contribution and gain wider recognition.",
  },
];

const EHR_STAGES = [
  { stage: "Dormant data → meaningful inferences", role: "you become a scientific partner" },
  { stage: "Meaningful inferences → publications", role: "you become an enabler" },
  { stage: "Publications → thought leadership", role: "you become a collaborator" },
  { stage: "Thought leadership → textbooks", role: "you become an associate mentor" },
  { stage: "Thought leadership → guideline-setting", role: "you become a soft influencer" },
  { stage: "National & international eminence", role: "you become a long-term friend, philosopher, and guide" },
];

const REGISTRY_POINTS = [
  "Help doctors collaborate — we create the assembly points and coordinate deliberations",
  "Help doctors collate data — we manage data and surface valuable insights",
  "Help doctors draw inferences — we act as a real-time analytical partner",
  "Registries inform product portfolio design, NPD strategy, and early trend detection",
];

const CONSENSUS_POINTS = [
  "Meta-analysis & systematic review development",
  "Patent-related scientific work",
  "World Congress support",
  "Drug development & gene therapy content",
  "Position papers (KOM articles)",
  "ACERT committee (Founder Trustee involvement)",
  "Multi-site clinical trial coordination",
  "National surveys",
];

const DIABETOLOGY_MODULES = [
  "Modules for physicians",
  "Modules for patient educators",
  "Modules for patients",
  "Modules for nutritionists",
  "Modules on emerging tech for T1DM management",
  "Patient-centric decision-support tools and Guideline-Directed Medical Therapy (GDMT) models",
];

const GUIDELINES = [
  { bold: "MASLD management", rest: "— screening & therapeutic recommendations (target: diabetologists)" },
  { bold: "Heart Failure Profiling Wheel", rest: "— a simplified model operationalizing Guideline-Directed Medical Therapy (target: physicians)" },
  { bold: "In-hospital management of Type 2 diabetes", rest: "— strategy models" },
  { bold: "Vitamin D levels and COVID-19", rest: "— management considerations" },
  { bold: "Type 1 diabetes in low-resource settings", rest: "— guidance for management in India" },
  { bold: "Type 2 diabetes in elderly populations", rest: "— re-defined management criteria" },
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
    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
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
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C9A227]">
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
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#C9A227]/40 bg-[#C9A227]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#8a6c14]">
              Our Work
            </p>
            <h1 className="font-display text-4xl leading-[1.1] text-[#110069] sm:text-5xl lg:text-6xl">
              Numbers tell part of the story.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-[#181430]/65 sm:text-lg">
              Here's what nearly a decade of scientific partnership looks
              like in practice.
            </p>
          </div>
        </div>
        <div className="pointer-events-none absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-[#C9A227] to-transparent sm:block lg:left-10" />
      </section>

      {/* ================= SUCCESS SNAPSHOT ================= */}
      <section className="bg-[#110069]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <SectionLabel>Success Snapshot</SectionLabel>
          <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">
            Nearly a decade, in numbers.
          </h2>

          <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
            {STATS.map((stat) => (
              <div key={stat.label} className="border-l-2 border-[#C9A227]/60 pl-4">
                <div className="font-display text-3xl text-white sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-xs leading-snug text-white/60">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C9A227]">
              Therapy Areas Covered
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {THERAPY_AREAS.map((area) => (
                <span
                  key={area}
                  className="whitespace-nowrap rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/80"
                >
                  {area}
                </span>
              ))}
            </div>
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
              <p className="text-sm leading-relaxed text-[#181430]/65">
                A comprehensive Type 1 Diabetes education initiative
                including:
              </p>
              <ul className="mt-4 space-y-2.5">
                {DIABETOLOGY_MODULES.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-[#181430]/70">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#C9A227]" />
                    {item}
                  </li>
                ))}
              </ul>
            </ProgramCard>

            {/* Thesis to Publication */}
            <ProgramCard
              icon={GraduationCap}
              eyebrow="Signature Program"
              title="Thesis to Publication"
            >
              <p className="text-sm leading-relaxed text-[#181430]/65">
                In our experience, at least{" "}
                <span className="font-semibold text-[#110069]">75%</span> of
                doctors never adequately publish the thesis work completed
                during their postgraduate years. We close that gap.
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
                      <p className="mt-1 text-sm leading-relaxed text-[#181430]/65">
                        {body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ProgramCard>

            {/* EHR/EMR to Publications — full width, timeline style */}
            <div className="rounded-2xl border border-[#110069]/10 bg-white p-6 sm:p-8 lg:col-span-2">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#110069] text-white">
                  <Database size={20} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C9A227]">
                    Signature Program
                  </p>
                  <h3 className="font-display text-xl text-[#110069] sm:text-2xl">
                    EHR/EMR to Publications
                  </h3>
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-[#181430]/65">
                We walk institutions through a six-stage journey from
                dormant data to lasting scientific influence:
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {EHR_STAGES.map(({ stage, role }, i) => (
                  <div
                    key={stage}
                    className="rounded-xl border border-[#110069]/10 bg-[#FAF9F6] p-5"
                  >
                    <span className="font-display text-2xl text-[#C9A227]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-2 text-sm font-semibold leading-snug text-[#110069]">
                      {stage}
                    </p>
                    <p className="mt-1.5 text-xs italic leading-relaxed text-[#181430]/55">
                      {role}
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
              <ul className="space-y-2.5">
                {REGISTRY_POINTS.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-[#181430]/70">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#C9A227]" />
                    {item}
                  </li>
                ))}
              </ul>
            </ProgramCard>

            {/* Consensus Creation & Opinion */}
            <ProgramCard
              icon={Users}
              eyebrow="Signature Program"
              title="Consensus Creation & Opinion"
            >
              <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {CONSENSUS_POINTS.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-[#181430]/70">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#C9A227]" />
                    {item}
                  </li>
                ))}
              </ul>
            </ProgramCard>
          </div>
        </div>
      </section>

      {/* ================= NATIONAL GUIDELINE CONTRIBUTIONS ================= */}
      <section className="border-y border-[#110069]/10 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <SectionLabel>National Guideline Contributions</SectionLabel>
          <h2 className="mt-3 max-w-2xl font-display text-3xl text-[#110069] sm:text-4xl">
            Medlish content has directly informed national medical practice
            guidance.
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {GUIDELINES.map(({ bold, rest }) => (
              <div
                key={bold}
                className="flex gap-3 rounded-2xl border border-[#110069]/10 bg-[#FAF9F6] p-5"
              >
                <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-[#C9A227]" />
                <p className="text-sm leading-relaxed text-[#181430]/75">
                  <span className="font-semibold text-[#110069]">{bold}</span>{" "}
                  {rest}
                </p>
              </div>
            ))}
          </div>
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
            <p className="text-sm leading-relaxed text-[#181430]/70">
              <span className="font-semibold text-[#110069]">
                Scientific ideas
              </span>{" "}
              become publications — placed in PubMed, Google Scholar, and
              with major publishers like Wiley, Wolters Kluwer, Springer, and
              Oxford University Press.
            </p>
          </div>
          <div className="rounded-2xl border border-[#110069]/10 bg-white p-6 sm:p-7">
            <p className="text-sm leading-relaxed text-[#181430]/70">
              <span className="font-semibold text-[#110069]">
                Clinical observations and data
              </span>{" "}
              become analyzed, dashboarded, shareable, publishable — even
              patentable — assets.
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-2xl bg-[#110069] p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C9A227]">
            Output Formats We Produce
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {OUTPUT_FORMATS.map((format) => (
              <span
                key={format}
                className="whitespace-nowrap rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/85"
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
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#181430]/65">
            Tell us what you're sitting on — we'll help you see the
            publication, registry, or guideline hiding inside it.
          </p>
          <a
            href="/#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#110069] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(17,0,105,0.5)] transition-transform hover:-translate-y-0.5"
          >
            Start a Conversation
            <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </>
  );
}