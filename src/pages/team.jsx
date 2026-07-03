import React from "react";
import { Mail, Phone, ArrowRight } from "lucide-react";

/**
 * Medlish Communications — Team Page
 * Shares the design system from HomePage.jsx / AboutUs.jsx / Services.jsx / OurWork.jsx / ClientsPartners.jsx
 * (Navbar/Footer/fonts are provided by ../layouts/Layout)
 */

const LEADERSHIP = [
  {
    name: "Dr. Ezhil Arasan Ramanan",
    credentials: "M.B., B.S., M.D., FACP",
    title: "President",
    org: "Dr. VRE Labs",
    email: "dr.arasan@medlish.com",
    phone: "(+91) 9841013467",
  },
  {
    name: "Hariram Krishnan",
    credentials: "",
    title: "Chief Mentor",
    org: "Former Managing Director, Galderma",
    email: null,
    phone: null,
  },
  {
    name: "Sailatha Ravi",
    credentials: "M.S., Ph.D.",
    title: "Vice President",
    org: "",
    email: "sailatha@medlishcommunications.com",
    phone: "(+91) 8946041355",
  },
  {
    name: "Scott Karren",
    credentials: "",
    title: "CEO, Channel Ventures",
    org: "",
    email: null,
    phone: null,
  },
];

const ADVISORY = [
  {
    name: "Tom Myers",
    role: "CFO, Super Bio Probiotic / Vemtowa Nutraceutical",
  },
  {
    name: "Mahesh Mathrubutham",
    role: "President, SuperBio; Co-founder and Director, Vemtowa",
  },
  {
    name: "Salil Kallianpur",
    role: "Founder and Managing Director, ARKS Knowledge Consulting Pvt Ltd",
  },
];

const BROADER_NETWORK = [
  "Members of the American Medical Writers Association",
  "Member of the European Medical Writers Association",
  "CMPP-certified writers",
  "Independent consultants for global publication houses",
  "PhDs, MSs, and medical professionals",
  "Statistical experts",
];

function initials(name) {
  return name
    .split(" ")
    .filter((w) => w[0] === w[0].toUpperCase() && /[A-Za-z]/.test(w[0]))
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function SectionLabel({ children }) {
  return (
    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
      {children}
    </span>
  );
}

function LeadershipCard({ person }) {
  const { name, credentials, title, org, email, phone } = person;
  return (
    <div className="flex flex-col rounded-2xl border border-[#110069]/10 bg-white p-6 sm:p-8">
      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#110069] font-display text-lg text-white">
          {initials(name)}
        </div>
        <div>
          <h3 className="font-display text-xl text-[#110069] sm:text-2xl">
            {name}
          </h3>
          {credentials && (
            <p className="text-xs font-medium text-[#181430]/45">
              {credentials}
            </p>
          )}
          <p className="mt-1 text-sm font-semibold text-[#C9A227]">{title}</p>
          {org && (
            <p className="text-sm text-[#181430]/60">{org}</p>
          )}
        </div>
      </div>

      {(email || phone) && (
        <div className="mt-5 flex flex-col gap-2 border-t border-[#110069]/10 pt-5">
          {email && (
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-2 text-sm text-[#181430]/70 transition-colors hover:text-[#110069]"
            >
              <Mail size={15} className="text-[#C9A227]" />
              {email}
            </a>
          )}
          {phone && (
            <a
              href={`tel:${phone.replace(/[^\d+]/g, "")}`}
              className="flex items-center gap-2 text-sm text-[#181430]/70 transition-colors hover:text-[#110069]"
            >
              <Phone size={15} className="text-[#C9A227]" />
              {phone}
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default function Team() {
  return (
    <>
      {/* ================= INTRO ================= */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#C9A227]/40 bg-[#C9A227]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#8a6c14]">
              Team
            </p>
            <h1 className="font-display text-4xl leading-[1.1] text-[#110069] sm:text-5xl lg:text-6xl">
              The people behind the science.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-[#181430]/65 sm:text-lg">
              Physicians, mentors, and scientific strategists — the
              leadership and network that make Medlish's work possible.
            </p>
          </div>
        </div>
        <div className="pointer-events-none absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-[#C9A227] to-transparent sm:block lg:left-10" />
      </section>

      {/* ================= LEADERSHIP ================= */}
      <section className="border-y border-[#110069]/10 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <SectionLabel>Leadership</SectionLabel>
          <h2 className="mt-3 font-display text-3xl text-[#110069] sm:text-4xl">
            Meet the leadership team.
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {LEADERSHIP.map((person) => (
              <LeadershipCard key={person.name} person={person} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= ADVISORY & EXTENDED TEAM ================= */}
      <section className="bg-[#FAF9F6]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <SectionLabel>Advisory & Extended Team</SectionLabel>
          <h2 className="mt-3 max-w-2xl font-display text-3xl text-[#110069] sm:text-4xl">
            The advisors who shape our direction.
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {ADVISORY.map(({ name, role }) => (
              <div
                key={name}
                className="rounded-2xl border border-[#110069]/10 bg-white p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#110069]/10 font-display text-base text-[#110069]">
                  {initials(name)}
                </div>
                <h3 className="mt-4 text-base font-semibold text-[#110069]">
                  {name}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-[#181430]/65">
                  {role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= OUR BROADER NETWORK ================= */}
      <section className="bg-[#110069]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <SectionLabel>Our Broader Network</SectionLabel>
          <h2 className="mt-3 max-w-2xl font-display text-3xl text-white sm:text-4xl">
            Backed by a deep bench of scientific talent.
          </h2>

          <div className="mt-10 flex flex-wrap gap-3">
            {BROADER_NETWORK.map((item) => (
              <span
                key={item}
                className="whitespace-nowrap rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/85"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CLOSING CTA ================= */}
      <section className="border-t border-[#110069]/10 bg-white">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8 lg:px-10">
          <h2 className="font-display text-3xl text-[#110069] sm:text-4xl">
            Want to work with our team?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#181430]/65">
            Reach out directly to our leadership, or tell us about your
            project and we'll route it to the right person.
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