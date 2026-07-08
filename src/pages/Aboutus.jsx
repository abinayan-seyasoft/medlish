import React from "react";
import { Link } from "react-router-dom";
import { Quote, Sparkles, ArrowRight } from "lucide-react";

/**
 * Medlish Communications — About Us Page
 * Shares the design system from HomePage.jsx (Navbar/Footer/fonts via ../layouts/Layout)
 */

const PHILOSOPHY = [
  {
    title: "Evidence-Aligned Thinking",
    body: 'We challenge outdated norms when the science demands it. We do not follow "best practice" blindly — we follow evidence, logic, and real-world insight.',
  },
  {
    title: "Contextual Intelligence",
    body: "We study the clinical, cultural, and market environment surrounding every problem. We understand the forces shaping decisions, the constraints teams operate under, and the audiences who must be influenced. This is how we ensure relevance, not just accuracy.",
  },
  {
    title: "Deep Domain Expertise",
    body: "Our team brings decades of pharmaceutical medicine practice, clinical experience, translational research, regulatory understanding, and medical affairs leadership. This is not just expertise — it is perspective.",
  },
  {
    title: "Scientific Ethics & Integrity",
    body: "Neutrality and integrity are foundational. We decline work that compromises scientific truth, and we never distort evidence for convenience. Our reputation is built on responsibility — and we protect it fiercely.",
  },
];

const PHILOSOPHY_QUOTES = [
  {
    text: "Ethics is knowing the difference between what you have a right to do and what is right to do.",
    author: "Potter Stewart",
  },
  {
    text: "Communication is not the last step of science — it is the moment science becomes useful.",
    author: "Medlish Communicators",
  },
];

const DIFFERENT_QUOTES = [
  {
    text: "The greatest enemy of knowledge is not ignorance; it is the illusion of knowledge.",
    author: "Stephen Hawking",
  },
  {
    text: "Evidence guides us. Context shapes us. Ethics defines us.",
    author: "Medlish Communicators",
  },
];

const GROWTH_QUOTES = [
  {
    text: "The purpose of science is not to open the door to infinite wisdom, but to set a limit to infinite error.",
    author: "Bertolt Brecht",
  },
  {
    text: "Clarity is not simplicity; it is precision delivered with empathy.",
    author: "Medlish Communicators",
  },
];

const GROWTH = [
  {
    range: "2019–2021",
    label: "Foundations",
    points: [
      "Research publications with Wiley and Wolters Kluwer",
      "Memberships: PGRN, CPIC, ACERT, IMA, IFDA, Nutrify",
    ],
  },
  {
    range: "2021–2022",
    label: "Expansion",
    points: [
      "Clinical trial support: dermatology, PCOS, cardiometabolic syndrome, cosmetology",
      "KOM development, Cochrane reviews, PROSPERO meta-analyses, cardiac registry",
      "Global reach through university collaborations",
    ],
  },
  {
    range: "2022–2023",
    label: "Scale",
    points: [
      "Large-scale guideline development and surveys",
      "US arm launched with AI-based pharmacovigilance",
      "Subsidiary CRO arm established",
    ],
  },
  {
    range: "2023–2024",
    label: "Influence",
    points: [
      "Scientist consortium established with Oxford UK",
      "Nutrify India: panel discussions and position presentations",
      "Research collaborations with NCCS Association, PGx, and RSSDI members",
    ],
  },
];

function QuoteCard({ text, author, tone = "dark" }) {
  if (tone === "light") {
    return (
      <div className="relative rounded-2xl border border-[#110069]/10 bg-[#FAF9F6] p-6 pl-14 sm:p-8 sm:pl-16">
        <Quote
          size={26}
          className="absolute left-5 top-6 text-[#C9A227] sm:left-6 sm:top-7"
          fill="currentColor"
          strokeWidth={0}
        />
        <p className="font-display text-lg italic leading-snug text-[#110069] sm:text-xl">
          "{text}"
        </p>
        <p className="mt-4 text-sm font-medium text-[#8a6c14]">— {author}</p>
      </div>
    );
  }
  return (
    <div className="relative rounded-2xl bg-[#110069] p-6 pl-14 text-white sm:p-8 sm:pl-16">
      <Quote
        size={26}
        className="absolute left-5 top-6 text-[#C9A227] sm:left-6 sm:top-7"
        fill="currentColor"
        strokeWidth={0}
      />
      <p className="font-display text-lg italic leading-snug sm:text-xl">
        "{text}"
      </p>
      <p className="mt-4 text-sm font-medium text-[#C9A227]">— {author}</p>
    </div>
  );
}

export default function AboutUs() {
  return (
    <>
      {/* ================= INTRO ================= */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#C9A227]/40 bg-[#C9A227]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#8a6c14]">
              About Us
            </p>

            <h1 className="font-display text-4xl leading-[1.1] text-[#110069] sm:text-5xl lg:text-6xl">
              Built on a simple truth.
            </h1>

            <div className="mt-6 flex flex-col gap-4 text-base leading-relaxed text-[#181430]/65 sm:text-lg">
              <p>
                Medlish Communications was built on a simple truth:
                scientific content only creates impact when it is shaped
                with intelligence, sensitivity, and a deep understanding of
                the environment in which it must operate.
              </p>
              <p>
                Our work is not only just about writing. It is about
                multidimensionality — interpreting, framing, and translating
                science so it becomes useful, usable, and meaningful for the
                people who depend on it.
              </p>
              <p>
                We exist to bring that discipline and that clarity to modern
                healthcare communication.
              </p>
            </div>
          </div>
        </div>

        {/* Signature rotated gold rule, consistent with hero on Home */}
        <div className="pointer-events-none absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-[#C9A227] to-transparent sm:block lg:left-10" />
      </section>

      {/* ================= OUR PHILOSOPHY ================= */}
      <section className="border-y border-[#110069]/10 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
              Our Philosophy
            </span>
            <h2 className="mt-3 font-display text-3xl text-[#110069] sm:text-4xl">
              Four qualities we consider non-negotiable.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#181430]/65">
              These principles guide our thinking and define how we approach
              every scientific challenge — the internal compass behind our
              work.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {PHILOSOPHY.map(({ title, body }, i) => (
              <div
                key={title}
                className="rounded-2xl border border-[#110069]/10 bg-[#FAF9F6] p-6 transition-colors hover:border-[#C9A227]/50"
              >
                <span className="font-display text-3xl text-[#C9A227]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-base font-semibold leading-snug text-[#110069]">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#181430]/65">
                  {body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {PHILOSOPHY_QUOTES.map((quote) => (
              <QuoteCard key={quote.author + quote.text} {...quote} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY MEDLISH IS DIFFERENT ================= */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
              Why Medlish Is Different
            </span>
            <h2 className="mt-3 font-display text-3xl text-[#110069] sm:text-4xl">
              We enable science — we don't market it.
            </h2>
            <div className="mt-5 flex flex-col gap-4 text-base leading-relaxed text-[#181430]/65">
              <p>
                We neither market science, nor do we have any marketing
                businesses. We bring experience without agenda. We are{" "}
                <span className="font-semibold text-[#110069]">
                  neutral, ethical, and free of personal bias
                </span>
                .
              </p>
              <p>
                Our role is to enable — giving full prominence to pharma
                teams and Key Opinion Leaders (KOLs), while we build the
                scientific foundation, the structure, and the rigor behind
                the scenes.
              </p>
              <p className="font-display text-xl italic text-[#110069]">
                We make others shine, and that is our strength.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            {DIFFERENT_QUOTES.map((quote) => (
              <QuoteCard key={quote.author + quote.text} {...quote} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= OUR GROWTH — BANDWIDTH IN SCIENCE ================= */}
      <section className="bg-[#110069]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <div className="flex items-center gap-2">
            <Sparkles size={18} className="text-[#C9A227]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
              Our Growth — Bandwidth in Science
            </span>
          </div>
          <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">
            A snapshot of how our capabilities have expanded.
          </h2>

          {/* Timeline */}
          <div className="relative mt-14">
            {/* Connector line */}
            <div className="absolute left-4 top-2 hidden h-[calc(100%-1rem)] w-px bg-[#C9A227]/30 sm:block lg:left-1/2 lg:-translate-x-1/2" />

            <div className="flex flex-col gap-10 lg:gap-0">
              {GROWTH.map(({ range, label, points }, i) => {
                const isEven = i % 2 === 0;
                return (
                  <div
                    key={range}
                    className="relative flex flex-col gap-4 pl-10 sm:pl-12 lg:grid lg:grid-cols-2 lg:gap-10 lg:py-8 lg:pl-0"
                  >
                    {/* Dot */}
                    <span className="absolute left-2.5 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full bg-[#C9A227] sm:left-4 lg:left-1/2" />

                    {/* Card — alternates sides on large screens */}
                    <div
                      className={`rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-7 ${
                        isEven ? "lg:order-1 lg:mr-auto lg:w-full" : "lg:order-2 lg:ml-auto lg:w-full"
                      }`}
                    >
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C9A227]">
                        {range}
                      </span>
                      <h3 className="mt-1 font-display text-xl text-white sm:text-2xl">
                        {label}
                      </h3>
                      <ul className="mt-4 space-y-2.5">
                        {points.map((point) => (
                          <li
                            key={point}
                            className="flex gap-2.5 text-sm leading-relaxed text-white/70"
                          >
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#C9A227]" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={isEven ? "lg:order-2" : "lg:order-1"} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ================= GROWTH QUOTES ================= */}
      <section className="border-b border-[#110069]/10 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {GROWTH_QUOTES.map((quote) => (
              <QuoteCard key={quote.author + quote.text} {...quote} tone="light" />
            ))}
          </div>
        </div>
      </section>

      {/* ================= CLOSING CTA ================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8 lg:px-10">
          <h2 className="font-display text-3xl text-[#110069] sm:text-4xl">
            Built on expertise. Guided by ethics. Driven by context.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#181430]/65">
            If that's the kind of scientific partner you're looking for,
            we'd love to hear about your project.
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