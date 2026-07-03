import React, { useState } from "react";
import { FileText, CalendarDays, Award, ArrowRight, ArrowUpRight } from "lucide-react";

/**
 * Medlish Communications — Insights Page
 *
 * This page was not part of the original source decks — it's the
 * low-maintenance content hub recommended alongside the sitemap:
 *   - Guideline summaries (tied to work already documented on /our-work)
 *   - Event recaps (tied to partnerships already documented on /clients-partners)
 *   - Success stories (e.g. Thesis-to-Publication outcomes, shared with permission)
 *
 * IMPORTANT: The posts below are PLACEHOLDER content, built only from facts
 * already established elsewhere on the site (guideline names, event names).
 * No dates, authors, or story specifics have been invented — swap in real
 * posts (and add real `date` / `href` / full body content + routing) as
 * they're published. Suggested cadence per the site brief: 1–2 posts/quarter.
 *
 * Shares the design system from the rest of the site.
 * (Navbar/Footer/fonts are provided by ../layouts/Layout)
 */

const CATEGORIES = [
  { key: "all", label: "All", icon: null },
  { key: "guideline", label: "Guideline Summaries", icon: FileText },
  { key: "event", label: "Event Recaps", icon: CalendarDays },
  { key: "story", label: "Success Stories", icon: Award },
];

const POSTS = [
  {
    category: "guideline",
    tag: "Guideline Summary",
    title: "Inside the Heart Failure Profiling Wheel",
    excerpt:
      "A look at the simplified model we developed to help physicians operationalize Guideline-Directed Medical Therapy (GDMT) at the point of care.",
  },
  {
    category: "guideline",
    tag: "Guideline Summary",
    title: "Screening & Therapeutic Recommendations for MASLD",
    excerpt:
      "Summarizing the practical screening and treatment guidance we helped shape for diabetologists managing MASLD.",
  },
  {
    category: "guideline",
    tag: "Guideline Summary",
    title: "Re-Defining Type 2 Diabetes Criteria in Elderly Populations",
    excerpt:
      "Why age-adjusted criteria matter, and what changed in the updated management guidance for elderly T2D patients.",
  },
  {
    category: "event",
    tag: "Event Recap",
    title: "Medlish at the 8th International Diabetes Experts Consortium",
    excerpt:
      "Recapping our participation in Pune as a Channel Partner of IDEC's i-Connect Program, and what it means for our diabetes and endocrine network.",
  },
  {
    category: "event",
    tag: "Event Recap",
    title: "HFAI 2025: Highlights from the Floor",
    excerpt:
      "Key themes and conversations from the Heart Failure Association of India's 2025 meeting.",
  },
  {
    category: "story",
    tag: "Success Story",
    title: "From Postgraduate Thesis to Published Research",
    excerpt:
      "A look at how our Thesis-to-Publication program helps close the gap — the ~75% of postgraduate thesis work that never gets published.",
  },
];

function SectionLabel({ children }) {
  return (
    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
      {children}
    </span>
  );
}

export default function Insights() {
  const [activeCategory, setActiveCategory] = useState("all");

  const visiblePosts =
    activeCategory === "all"
      ? POSTS
      : POSTS.filter((post) => post.category === activeCategory);

  return (
    <>
      {/* ================= INTRO ================= */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#C9A227]/40 bg-[#C9A227]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#8a6c14]">
              Insights
            </p>
            <h1 className="font-display text-4xl leading-[1.1] text-[#110069] sm:text-5xl lg:text-6xl">
              Notes from the work.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-[#181430]/65 sm:text-lg">
              Guideline summaries, event recaps, and success stories drawn
              from our ongoing scientific partnerships.
            </p>
          </div>
        </div>
        <div className="pointer-events-none absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-[#C9A227] to-transparent sm:block lg:left-10" />
      </section>

      {/* ================= FILTER + POSTS ================= */}
      <section className="border-y border-[#110069]/10 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(({ key, label, icon: Icon }) => {
              const active = activeCategory === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveCategory(key)}
                  aria-pressed={active}
                  className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-xs font-semibold transition-colors ${
                    active
                      ? "border-[#110069] bg-[#110069] text-white"
                      : "border-[#110069]/15 bg-white text-[#181430]/65 hover:border-[#110069]/40"
                  }`}
                >
                  {Icon && <Icon size={14} />}
                  {label}
                </button>
              );
            })}
          </div>

          {/* Posts grid */}
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visiblePosts.map(({ tag, title, excerpt }) => (
              <article
                key={title}
                className="group flex flex-col rounded-2xl border border-[#110069]/10 bg-[#FAF9F6] p-6 transition-shadow hover:shadow-[0_20px_40px_-24px_rgba(17,0,105,0.35)]"
              >
                <span className="w-fit rounded-full bg-[#C9A227]/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#8a6c14]">
                  {tag}
                </span>
                <h3 className="mt-4 font-display text-lg leading-snug text-[#110069] sm:text-xl">
                  {title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[#181430]/65">
                  {excerpt}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#110069]">
                  Read more
                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </article>
            ))}
          </div>

          {visiblePosts.length === 0 && (
            <p className="mt-10 text-sm text-[#181430]/50">
              No posts in this category yet.
            </p>
          )}
        </div>
      </section>

      {/* ================= CLOSING CTA ================= */}
      <section className="bg-[#110069]">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8 sm:py-20 lg:px-10">
          <h2 className="font-display text-3xl text-white sm:text-4xl">
            Have a guideline, event, or story worth sharing?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/65">
            If you'd like to contribute a recap or success story to
            Insights, reach out to our team.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#C9A227] px-7 py-3.5 text-sm font-semibold text-[#110069] transition-transform hover:-translate-y-0.5"
          >
            Get in Touch
            <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </>
  );
}