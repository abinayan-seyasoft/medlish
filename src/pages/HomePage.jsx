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
 * Type: DM Serif Display (headlines) + DM Sans (body/UI)
 *
 * Note: font import + Navbar + Footer are provided by ../layouts/Layout,
 * which wraps this page via the router — no need to duplicate them here.
 */

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
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-4 lg:px-10 lg:py-28">
          {/* Text column */}
          <div className="relative">
            {/* Signature rotated gold rule */}
            <div className="pointer-events-none absolute -left-6 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-[#C9A227] to-transparent sm:block lg:-left-10" />

            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#C9A227]/40 bg-[#C9A227]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#8a6c14]">
              Context-Intelligent Medical Communication for Modern Healthcare
              Brands
            </p>

            <h1 className="font-display mt-3 text-4xl leading-[1.08] text-[#110069] sm:text-5xl lg:text-6xl">
              Medlish
              <br />
              Communications
            </h1>

            <p className="mt-6 max-w-md font-display text-2xl italic leading-snug text-[#181430]/85 sm:text-3xl">
              "You don't need to explain
              <br />
              your science twice."
            </p>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-[#181430]/65">
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                to="/service"
                className="inline-flex items-center gap-2 rounded-full bg-[#110069] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(17,0,105,0.5)] transition-transform hover:-translate-y-0.5"
              >
                Explore Our Services
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/ourwork"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#110069] underline decoration-[#C9A227] decoration-2 underline-offset-4"
              >
                See Our Work
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>

          {/* Visual column */}
          <div className="relative mx-auto aspect-[5/5] w-full max-w-sm overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#110069] via-[#1c1080] to-[#0a0140] shadow-2xl lg:max-w-md">
            <img
              src={pic}
              alt="Clinician engaging with scientific data"
              className="absolute inset-0 h-full w-full  opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0140] via-[#0a0140]/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-8 text-white">
              <span className="font-display text-4xl">1,000+</span>
              <span className="text-sm text-white/70">
                Published research works, and counting
              </span>
            </div>
            <div className="absolute right-6 top-6 h-16 w-16 rotate-12 rounded-2xl border border-[#C9A227]/50" />
            <div className="absolute left-6 top-10 h-2 w-24 rounded-full bg-[#C9A227]/70" />
          </div>
        </div>
      </section>

      {/* ================= HI, THIS IS MEDLISH ================= */}
      <section className="border-y border-[#110069]/10 bg-white">
        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
            Hi, This Is Medlish
          </span>

          <p className="mt-5 font-display text-2xl leading-snug text-[#110069] sm:text-3xl">
            We bring something rare to pharmaceutical, nutraceutical, and
            healthcare organizations: deep and extensive medical expertise
            backed by high-level, leadership-driven, empathetic listening —
            and an immediate grasp of your real-world context from the very
            first conversation.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              "You don't need to explain your science twice.",
              "You don't need long onboarding.",
              'And you certainly don\u2019t need to strain or labor to make someone "get it."',
            ].map((line) => (
              <div
                key={line}
                className="rounded-2xl border border-[#110069]/10 bg-[#FAF9F6] p-5"
              >
                <p className="text-sm font-medium leading-relaxed text-[#181430]/80">
                  {line}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-5">
            <p className="text-base leading-relaxed text-[#181430]/65">
              We already speak your world — clinical practice, research,
              regulatory pathways, medical affairs, and the publication
              insights that influence real decisions in healthcare.
            </p>
            <p className="text-base leading-relaxed text-[#181430]/65">
              We combine that expertise with empathy, curiosity, and a
              commitment to understanding why your message matters and who
              it must influence.
            </p>
          </div>

          <div className="relative mt-10 rounded-2xl bg-[#110069] p-6 pl-14 sm:p-8 sm:pl-16">
            <Quote
              size={28}
              className="absolute left-5 top-6 text-[#C9A227] sm:left-6 sm:top-7"
              fill="currentColor"
              strokeWidth={0}
            />
            <p className="font-display text-lg italic leading-snug text-white sm:text-xl">
              The result is communication that is scientifically rigorous,
              strategically aligned, and contextually intelligent — crafted
              to make your product, your evidence, and your brand story
              truly land.
            </p>
          </div>
        </div>
      </section>

      {/* ================= OUR BIG IDEA ================= */}
      <section className="border-y border-[#110069]/10 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
                Our Big Idea
              </span>
              <h2 className="mt-3 font-display text-3xl text-[#110069] sm:text-4xl">
                First, we set the context right.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#181430]/65">
                In science, content is only as powerful as the context it's
                delivered in. Medlish exists at the intersection of deep
                domain expertise, in-depth understanding of a problem within
                its real-world context, the willingness to challenge "best
                practice" when the evidence demands it, and an unwavering
                commitment to scientific ethics and principles.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                "Deep domain expertise",
                "In-depth understanding of the problem within the context",
                'Willingness to challenge "best practice"',
                "Commitment to scientific ethics and principles",
              ].map((factor, i) => (
                <div
                  key={factor}
                  className="rounded-2xl border border-[#110069]/10 bg-[#FAF9F6] p-6 transition-colors hover:border-[#C9A227]/50"
                >
                  <span className="font-display text-3xl text-[#C9A227]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-3 text-sm font-medium leading-snug text-[#181430]/80">
                    {factor}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHO WE SERVE ================= */}
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
      </section>

      {/* ================= BY THE NUMBERS ================= */}
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
      </section>

      {/* ================= TRUSTED BY ================= */}
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
      </section>

      {/* ================= FEATURED PARTNERSHIP ================= */}
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
      </section>

      {/* ================= CLOSING CTA ================= */}
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
      </section>
    </>
  );
}