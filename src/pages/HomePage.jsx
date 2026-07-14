import React from "react";
import { Link } from "react-router-dom";
import {
  Stethoscope,
  FlaskConical,
  Pill,
  Users,
  ArrowRight,
  ChevronRight,
  Quote,
} from "lucide-react";
import pic from "../assets/hero section image.png";

/**
 * Medlish Communications — Home Page
 * Primary: #110069 (deep indigo)
 * Accent: #C9A227 (editorial gold)
 * Type: DM Sans (headings) + Mulish (body/UI)
 *
 * Note: font import + Navbar + Footer are provided by ../layouts/Layout,
 * which wraps this page via the router — no need to duplicate them here.
 */

const BIG_IDEA_FACTORS = [
  {
    title: "Deep Domain Expertise",
    body: "Decades of pioneering pharmaceutical medicine practice, clinical research experience, rigorous translational research, regulatory understanding, and thought leadership in medical affairs — the kind of expertise that lets us grasp your science instantly and communicate it with precision.",
  },
  {
    title: "In-Depth Understanding of the Problem Within Its Context",
    body: "We don't treat data as mere numbers. We understand the environment, the audience, the constraints, and the strategic intent behind your message, ensuring your communication lands exactly where it needs to.",
  },
  {
    title: 'Willingness to Challenge "Best Practice" When Evidence Demands It',
    body: "Healthcare evolves. Evidence shifts. We question outdated norms responsibly when the science points in a better direction, always with rigor and respect for the truth.",
  },
  {
    title: "Commitment to Scientific Ethics and Principles",
    body: "Integrity is non-negotiable. Every narrative we craft is grounded in ethical communication, accurate interpretation, and unwavering respect for scientific principles. We never hesitate to decline an assignment that could compromise our years of impeccable scientific service — no contract is worth diluting our core values.",
  },
];

const WHO_WE_SERVE = [
  {
    icon: Stethoscope,
    segment: "Clinical",
    who: "Doctors, surgeons, scientists",
    focus: "Practice-ready scientific communication",
  },
  {
    icon: FlaskConical,
    segment: "Research & Education",
    who: "Principal investigators, doctoral & medical students",
    focus: "Research design, grants, systematic reviews",
  },
  {
    icon: Pill,
    segment: "Pharmaceutical",
    who: "Brand & implementation teams",
    focus: "Real-world evidence, position papers, medico-marketing strategy",
  },
  {
    icon: Users,
    segment: "Public",
    who: "Patients, media, healthcare organizations",
    focus: "Epidemiological data, awareness programs",
  },
];

const STATS = [
  { value: "3,000+", label: "Total projects delivered" },
  { value: "2,000+", label: "Original articles published" },
  { value: "20+", label: "Systematic reviews / meta-analyses" },
  { value: "25+", label: "Registries built and managed" },
  { value: "5+", label: "Pan-India consensus statements & guidelines" },
  { value: "1,000+", label: "Total published research works" },
];

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

function LogoChip({ name }) {
  return (
    <span className="whitespace-nowrap rounded-full border border-[#110069]/15 bg-white px-4 py-2 text-sm font-medium text-[#110069]/70 sm:px-5">
      {name}
    </span>
  );
}

export default function MedlishHome() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section id="top" className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 py-10 sm:px-8 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-4 lg:px-10 lg:pt-20">
          {/* Text column */}
          <div className="relative">
            {/* Signature rotated gold rule */}
            <div className="pointer-events-none absolute -left-6 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-[#C9A227] to-transparent sm:block lg:-left-10" />

            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#C9A227]/40 bg-[#C9A227]/10 px-4 py-1.5 text-[16px] font-extrabold uppercase tracking-[0.18em] text-[#110069]">
              Medlish Communications
            </p>

            <h1 className="font-display text-4xl leading-[1.1] text-[#110069] sm:text-5xl lg:text-[3.4rem]">
              Context-Intelligent Medical Communication for Modern Healthcare
              Brands
            </h1>

            <p className="mt-6 max-w-lg text-xl leading-relaxed text-gray-900">
              Clear. Credible. Context-aware scientific communication shaped
              by deep expertise.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#110069] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(17,0,105,0.5)] transition-transform hover:-translate-y-0.5"
              >
                Work with Us
                <ArrowRight size={16} />
              </Link>
              <a
                href="#big-idea"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#110069] underline decoration-[#C9A227] decoration-2 underline-offset-4"
              >
                Explore Our Approach
                <ChevronRight size={16} />
              </a>
            </div>
          </div>

          {/* Visual column */}
          <div className="relative mx-auto aspect-[5/5] w-full max-w-sm overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#110069] via-[#1c1080] to-[#0a0140] shadow-2xl lg:max-w-md">
            <img
              src={pic}
              alt="Clinician engaging with scientific data"
              className="absolute inset-0 h-full w-full opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0140] via-[#0a0140]/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-8 text-white">
              <span className="font-display text-4xl">10,000+</span>
              <span className="text-sm text-white/70">
                Published research works, and counting
              </span>
            </div>
            <div className="absolute right-6 top-6 h-16 w-16 rotate-12 rounded-2xl border border-[#C9A227]/50" />
            <div className="absolute left-6 top-10 h-2 w-24 rounded-full bg-[#C9A227]/70" />
          </div>
        </div>
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-5 py-1 text-center sm:px-8 sm:py-6">
          <span className="h-px w-16 bg-[#C9A227]" />
          <p className="font-display text-xl italic leading-snug text-[#110069] sm:text-2xl">
            Scientific communication that understands your product, your
            science, and your context — from the very first conversation.
          </p>
          <span className="h-px w-16 bg-[#C9A227]" />
        </div>
      </section>

      {/* ================= OPENING STATEMENT ================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
          <span className="text-2xl font-cursive font-black capitalize italic leading-snug text-[#110069] tracking-[0.2em] ">
            Hi, This Is Medlish
          </span>

          <p className="mt-5 font-display text-2xl leading-snug text-[#110069] sm:text-3xl">
            We bring something rare to pharmaceutical, nutraceutical, and
            healthcare organizations: deep and extensive medical expertise
            backed by leadership-grade empathetic listening and an
            immediate grasp of your real-world context from the very first
            conversation.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              "You don't need to explain your science twice !",
              "You don't need long onboarding !",
              'And you certainly don\u2019t need to strain or labor to make someone "get it."',
            ].map((line) => (
              <div
                key={line}
                className="rounded-2xl border border-[#110069]/10 bg-[#FAF9F6] p-5"
              >
                <p className="text-base font-medium leading-relaxed text-gray-900">
                  {line}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-5">
            <p className="text-lg leading-relaxed text-gray-900">
              We already speak your world — clinical practice, research,
              regulatory pathways, medical affairs, and the publication
              insights that influence real decisions in healthcare.
            </p>
            <p className="text-lg leading-relaxed text-gray-900">
              We combine that expertise with empathy, curiosity, and a
              commitment to understanding why your message matters and who
              it must influence.
            </p>
          </div>

          <div className=" mt-10 rounded-2xl bg-[#110069] p-4  sm:p-8">
            <p className="font-display text-lg italic leading-snug text-white sm:text-xl">
              The result is communication that is scientifically rigorous,
              strategically aligned, and contextually intelligent — crafted
              to make your product, your evidence, and your brand story
              truly land.
            </p>
          </div>

          <p className="mt-8 text-center font-display text-lg italic leading-snug text-[#110069] sm:text-xl">
            Medlish is where content aligns with context — and where your
            message starts delivering from the very first line.
          </p>
        </div>
      </section>

      {/* ================= OUR BIG IDEA ================= */}
      <section id="big-idea" className="border-y border-[#110069]/10 bg-[#FAF9F6]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <div className="max-w-3xl">
            <span className="text-2xl font-cursive font-black capitalize italic leading-snug text-[#110069] tracking-[0.2em]">
              Our Big Idea
            </span>
            <h2 className="mt-3 font-display text-3xl text-[#110069] sm:text-4xl">
              First, we set the context right.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-900">
              In science, content fails to deliver when it is created
              without a thorough understanding of the context — and the
              nuances of where, how, and to whom it must be conveyed.
              Medlish exists at the intersection of deep medical expertise,
              real-world contextual insight, and leadership-grade
              scientific integrity, ensuring that every message is
              sculpted with clarity, credibility, and purpose.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {BIG_IDEA_FACTORS.map(({ title, body }, i) => (
              <div
                key={title}
                className="rounded-2xl border border-[#110069]/10 bg-white p-6 transition-colors hover:border-[#C9A227]/50 sm:p-7"
              >
                <span className="font-display text-3xl text-[#C9A227]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-base font-semibold leading-snug text-[#110069]">
                  {title}
                </h3>
                <p className="mt-2 text-medium leading-relaxed text-gray-900">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    
      {/* ================= WHO WE SERVE ================= 
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mb-12 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
            Who We Serve
          </span>
          <h2 className="mt-3 font-display text-3xl text-[#110069] sm:text-4xl">
            Four communities. One shared language.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#181430]/65">
            We sit at the intersection of four communities that make up
            healthcare — and we speak the language of each.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WHO_WE_SERVE.map(({ icon: Icon, segment, who, focus }) => (
            <div
              key={segment}
              className="group flex flex-col rounded-2xl border border-[#110069]/10 bg-white p-6 transition-shadow hover:shadow-[0_20px_40px_-24px_rgba(17,0,105,0.35)]"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#110069] text-white transition-colors group-hover:bg-[#C9A227]">
                <Icon size={20} />
              </div>
              <h3 className="font-display text-xl text-[#110069]">
                {segment}
              </h3>
              <p className="mt-2 text-sm font-medium text-[#181430]/55">
                {who}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#181430]/70">
                {focus}
              </p>
            </div>
          ))}
        </div>
      </section> */}

      {/* ================= BY THE NUMBERS ================= 
      <section className="bg-[#110069]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
            By the Numbers
          </span>
          <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">
            Nearly a decade of scientific partnership.
          </h2>

          <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="border-l-2 border-[#C9A227]/60 pl-4"
              >
                <div className="font-display text-3xl text-white sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-xs leading-snug text-white/60">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>*/}

      {/* ================= TRUSTED BY ================= 
      <section id="work" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
          Trusted By
        </span>
        <h2 className="mt-3 font-display text-3xl text-[#110069] sm:text-4xl">
          Pharma leaders. Global publishers.
        </h2>

        <div className="mt-8 flex flex-wrap gap-3">
          {PHARMA_LOGOS.map((name) => (
            <LogoChip key={name} name={name} />
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#181430]/40">
            Publication Partners
          </span>
          {PUBLISHING_LOGOS.map((name) => (
            <LogoChip key={name} name={name} />
          ))}
        </div>
      </section>*/}

      {/* ================= FEATURED PARTNERSHIP ================= 
      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-20 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-gradient-to-r from-[#110069] to-[#241394] p-8 sm:flex-row sm:items-center sm:p-10">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
              Featured Partnership
            </span>
            <p className="mt-3 max-w-xl text-lg leading-snug text-white sm:text-xl">
              Medlish is a Channel Partner of{" "}
              <span className="font-semibold">IDEC's i-Connect Program</span>,
              connecting our scientific content network to one of the leading
              global diabetes education and research academies.
            </p>
          </div>
          <Link
            to="/clients-partners"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#C9A227] px-6 py-3 text-sm font-semibold text-[#110069] transition-transform hover:-translate-y-0.5"
          >
            Learn More
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>*/}

      {/* ================= CLOSING CTA ================= 
      <section id="contact" className="border-t border-[#110069]/10 bg-white">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8 lg:px-10">
          <h2 className="font-display text-3xl text-[#110069] sm:text-4xl">
            Create new clinical and scientific value — with Medlish.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#181430]/65">
            Whether it's an idea, a dataset, or a decade of unpublished
            thesis work, we turn it into recognized scientific output.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#110069] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(17,0,105,0.5)] transition-transform hover:-translate-y-0.5"
          >
            Start a Conversation
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>*/}
      
    </>
  );
}