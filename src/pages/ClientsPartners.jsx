import React from "react";
import { Link } from "react-router-dom";
import {
  Landmark,
  GraduationCap,
  BookOpen,
  ArrowRight,
  Award,
} from "lucide-react";

/**
 * Medlish Communications — Clients & Partners Page
 * Shares the design system from HomePage.jsx / AboutUs.jsx / Services.jsx / OurWork.jsx
 * (Navbar/Footer/fonts are provided by ../layouts/Layout)
 */

const PHARMA_LOGOS = [
  "USV",
  "Novartis",
  "Alkem",
  "Sun Pharma",
  "Zydus Healthcare",
  "Sanofi",
  "Pfizer",
  "Alcon",
  "Tablets (India) Limited",
  "Kyowa Kirin",
];

const PUBLISHING_LOGOS = ["Wiley", "Wolters Kluwer", "Springer Nature"];

const ACADEMIC_ASSOCIATES = [
  "Research Society for the Study of Diabetes in India (RSSDI)",
  "ACERT (Associates for Cardiology Education and Research in Tamil Nadu)",
  "IDEC / Academia Unlimited (with Emory)",
  "Nutrify Today",
  "Heart Failure Association of India (HFAI)",
  "Indian Association of Cardiovascular-Thoracic Surgeons",
  "California Life Sciences",
  "American Medical Writers Association (AMWA)",
];

const UNIVERSITY_COLLABORATIONS = [
  "Jawaharlal Institute of Postgraduate Medical Education and Research (JIPMER)",
  "Wayne State University",
  "Temasek Polytechnic",
  "Nanyang Technological University (NTU)",
  "National Centre for Cell Science (NCCS)",
  "The University of Sydney",
  "The University of Western Australia",
  "Carnegie Mellon University",
  "Vellore Institute of Technology (VIT)",
];

const JOURNALS = [
  "Association of Physicians of India",
  "PLOS",
  "The American Journal of the Medical Sciences",
  "International Journal of Dermatology, Venereology and Leprosy Sciences",
  "JACC Journals",
  "European Society of Cardiology (ESC)",
  "European Heart Journal",
  "Journal of Endocrinology & Metabolism",
  "BMJ Journals",
  "Diabetes Research and Clinical Practice",
  "Endocrine Society",
  "American Diabetes Association",
  "Indian Pacing and Electrophysiology Journal",
  "Wiley",
  "Springer",
  "Frontiers in Endocrinology",
  "Indian Heart Journal",
];

function SectionLabel({ children }) {
  return (
    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
      {children}
    </span>
  );
}

function LogoChip({ name, tone = "light" }) {
  const toneClasses =
    tone === "dark"
      ? "border-white/15 bg-white/5 text-white/80"
      : "border-[#110069]/15 bg-white text-[#110069]/70";
  return (
    <span
      className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium sm:px-5 ${toneClasses}`}
    >
      {name}
    </span>
  );
}

function AssociateList({ icon: Icon, items }) {
  return (
    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-3 rounded-xl border border-[#110069]/10 bg-[#FAF9F6] p-4"
        >
          <Icon size={18} className="mt-0.5 shrink-0 text-[#C9A227]" />
          <span className="text-sm leading-relaxed text-[#181430]/75">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function ClientsPartners() {
  return (
    <>
      {/* ================= INTRO ================= */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#C9A227]/40 bg-[#C9A227]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#8a6c14]">
              Clients & Partners
            </p>
            <h1 className="font-display text-4xl leading-[1.1] text-[#110069] sm:text-5xl lg:text-6xl">
              Trusted across pharma, publishing, and academia.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-[#181430]/65 sm:text-lg">
              Nearly a decade of scientific partnership built with
              organizations that set the standard in their fields.
            </p>
          </div>
        </div>
        <div className="pointer-events-none absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-[#C9A227] to-transparent sm:block lg:left-10" />
      </section>

      {/* ================= PHARMA + PUBLISHING ================= */}
      <section className="border-y border-[#110069]/10 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <SectionLabel>Pharmaceutical & Healthcare Clients</SectionLabel>
          <h2 className="mt-3 font-display text-3xl text-[#110069] sm:text-4xl">
            Pharma leaders we've partnered with.
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {PHARMA_LOGOS.map((name) => (
              <LogoChip key={name} name={name} />
            ))}
          </div>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-[#181430]/55">
            These partnerships reflect our ability to work with teams that
            demand scientific rigor, ethical clarity, and context-aware
            communication, across therapy areas, product lifecycles, and
            evidence needs.
          </p>

          <div className="mt-14 border-t border-[#110069]/10 pt-10">
            <SectionLabel>Publication Associates</SectionLabel>
            <h2 className="mt-3 font-display text-2xl text-[#110069] sm:text-3xl">
              Where our science finds a home.
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {PUBLISHING_LOGOS.map((name) => (
                <LogoChip key={name} name={name} />
              ))}
            </div>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-[#181430]/55">
              Our publication collaborations demonstrate credibility with
              global scientific publishers, ensuring your work is
              positioned with precision and integrity.
            </p>
          </div>
        </div>
      </section>

      {/* ================= ACADEMIC & PROFESSIONAL ASSOCIATES ================= */}
      <section className="bg-[#FAF9F6]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <SectionLabel>Academic & Professional Associates</SectionLabel>
          <h2 className="mt-3 max-w-2xl font-display text-3xl text-[#110069] sm:text-4xl">
            The associations and academies we work alongside.
          </h2>
          <div className="mt-10">
            <AssociateList icon={Landmark} items={ACADEMIC_ASSOCIATES} />
          </div>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-[#181430]/55">
            These associations reflect our commitment to scientific ethics,
            evidence-aligned thinking, and real-world relevance — across
            cardiology, endocrinology, metabolic health, and scientific
            writing.
          </p>
        </div>
      </section>

      {/* ================= UNIVERSITY COLLABORATIONS ================= */}
      <section className="border-t border-[#110069]/10 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <SectionLabel>University Collaborations</SectionLabel>
          <h2 className="mt-3 max-w-2xl font-display text-3xl text-[#110069] sm:text-4xl">
            A global academic footprint.
          </h2>
          <div className="mt-10">
            <AssociateList icon={GraduationCap} items={UNIVERSITY_COLLABORATIONS} />
          </div>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-[#181430]/55">
            Our collaborations span clinical research, translational
            science, data science, and academic publishing, enabling
            multi-institutional scientific output with global relevance.
          </p>
        </div>
      </section>

      {/* ================= FEATURED PARTNERSHIP ================= */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-gradient-to-r from-[#110069] to-[#241394] p-8 sm:flex-row sm:items-center sm:p-10">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
              <Award size={16} />
              Featured Partnership
            </span>
            <p className="mt-3 max-w-xl text-lg leading-snug text-white sm:text-xl">
              Medlish is a Channel Partner of{" "}
              <span className="font-semibold">IDEC's i-Connect Program</span>,
              connecting our scientific content network to one of the
              leading global diabetes education and research academies.
            </p>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/70">
              This partnership reflects our commitment to shaping diabetes
              education, evidence dissemination, and clinician-ready
              scientific communication at scale.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#C9A227] px-6 py-3 text-sm font-semibold text-[#110069] transition-transform hover:-translate-y-0.5"
          >
            Learn More
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ================= JOURNALS ================= */}
      <section className="bg-[#110069]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
            <BookOpen size={16} />
            Journals We've Published In
          </span>
          <h2 className="mt-3 max-w-2xl font-display text-3xl text-white sm:text-4xl">
            Where our science has found a home.
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {JOURNALS.map((journal) => (
              <LogoChip key={journal} name={journal} tone="dark" />
            ))}
          </div>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/60">
            Our publication footprint spans high-impact clinical, endocrine,
            cardiology, metabolic, and general medicine journals —
            demonstrating scientific credibility across specialties.
          </p>
        </div>
      </section>

      {/* ================= CLOSING CTA ================= */}
      <section className="border-t border-[#110069]/10 bg-white">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8 lg:px-10">
          <h2 className="font-display text-3xl text-[#110069] sm:text-4xl">
            Become Part of the Network.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#181430]/65">
            Whether you're a pharma team, a publisher, or a research
            institution — let's explore what a partnership could look like.
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