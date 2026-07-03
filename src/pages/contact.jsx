import React, { useState } from "react";
import { Mail, Phone, Send, CheckCircle2, Quote } from "lucide-react";

/**
 * Medlish Communications — Contact Page
 * Shares the design system from HomePage.jsx / AboutUs.jsx / Services.jsx / OurWork.jsx / ClientsPartners.jsx / Team.jsx
 * (Navbar/Footer/fonts are provided by ../layouts/Layout)
 *
 * Note: handleSubmit currently just simulates a successful send.
 * Wire it up to your backend / email service (e.g. an API route, EmailJS,
 * Formspree) by replacing the setTimeout block below.
 */

const INTEREST_OPTIONS = [
  "Medical Writing",
  "Clinical Research",
  "Medico-Marketing",
  "Patient Education",
  "Direct-to-Consumer",
  "Conferences & Meetings",
  "Partnership Inquiry",
  "Other",
];

const DIRECT_CONTACTS = [
  {
    name: "Dr. Ezhil Arasan Ramanan",
    credentials: "M.B., B.S., M.D., FACP",
    title: "President",
    email: "dr.arasan@medlish.com",
    phone: "(+91) 9841013467",
  },
  {
    name: "Sailatha Ravi",
    credentials: "M.S., Ph.D.",
    title: "Vice President",
    email: "sailatha@medlishcommunications.com",
    phone: "(+91) 8946041355",
  },
];

const initialForm = {
  name: "",
  organization: "",
  email: "",
  phone: "",
  interest: "",
  message: "",
};

function SectionLabel({ children }) {
  return (
    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
      {children}
    </span>
  );
}

function initials(name) {
  return name
    .split(" ")
    .filter((w) => /[A-Za-z]/.test(w[0]))
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

const inputClasses =
  "w-full rounded-xl border border-[#110069]/15 bg-white px-4 py-3 text-sm text-[#181430] placeholder:text-[#181430]/35 outline-none transition-colors focus:border-[#110069] focus:ring-2 focus:ring-[#110069]/10";

function Field({ label, children, htmlFor }) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.1em] text-[#181430]/50"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | submitting | success

  const update = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const toggleInterest = (option) =>
    setForm((f) => ({
      ...f,
      interest: f.interest === option ? "" : option,
    }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting");
    // TODO: replace with a real submission (API route, EmailJS, Formspree, etc.)
    setTimeout(() => {
      setStatus("success");
      setForm(initialForm);
    }, 900);
  };

  return (
    <>
      {/* ================= INTRO ================= */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#C9A227]/40 bg-[#C9A227]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#8a6c14]">
              Contact
            </p>
            <h1 className="font-display text-4xl leading-[1.1] text-[#110069] sm:text-5xl lg:text-6xl">
              Let's create scientific value, together.
            </h1>
          </div>
        </div>
        <div className="pointer-events-none absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-[#C9A227] to-transparent sm:block lg:left-10" />
      </section>

      {/* ================= FORM + DIRECT CONTACTS ================= */}
      <section className="border-y border-[#110069]/10 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
            {/* ---- Form ---- */}
            <div>
              <SectionLabel>Send Us a Message</SectionLabel>
              <h2 className="mt-3 font-display text-2xl text-[#110069] sm:text-3xl">
                Tell us about your project.
              </h2>

              {status === "success" ? (
                <div className="mt-8 flex items-start gap-3 rounded-2xl border border-[#C9A227]/30 bg-[#C9A227]/10 p-6">
                  <CheckCircle2 size={22} className="mt-0.5 shrink-0 text-[#8a6c14]" />
                  <div>
                    <p className="font-semibold text-[#110069]">
                      Message sent.
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-[#181430]/65">
                      Thanks for reaching out — someone from our team will
                      get back to you shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="mt-4 text-sm font-semibold text-[#110069] underline decoration-[#C9A227] decoration-2 underline-offset-4"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Field label="Name" htmlFor="name">
                      <input
                        id="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={update("name")}
                        placeholder="Your full name"
                        className={inputClasses}
                      />
                    </Field>
                    <Field label="Organization" htmlFor="organization">
                      <input
                        id="organization"
                        type="text"
                        value={form.organization}
                        onChange={update("organization")}
                        placeholder="Company / institution"
                        className={inputClasses}
                      />
                    </Field>
                    <Field label="Email" htmlFor="email">
                      <input
                        id="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={update("email")}
                        placeholder="you@example.com"
                        className={inputClasses}
                      />
                    </Field>
                    <Field label="Phone" htmlFor="phone">
                      <input
                        id="phone"
                        type="tel"
                        value={form.phone}
                        onChange={update("phone")}
                        placeholder="(+91) 00000 00000"
                        className={inputClasses}
                      />
                    </Field>
                  </div>

                  <Field label="I'm interested in">
                    <div className="flex flex-wrap gap-2">
                      {INTEREST_OPTIONS.map((option) => {
                        const active = form.interest === option;
                        return (
                          <button
                            key={option}
                            type="button"
                            onClick={() => toggleInterest(option)}
                            aria-pressed={active}
                            className={`rounded-full border px-4 py-2 text-xs font-semibold transition-colors ${
                              active
                                ? "border-[#110069] bg-[#110069] text-white"
                                : "border-[#110069]/15 bg-white text-[#181430]/65 hover:border-[#110069]/40"
                            }`}
                          >
                            {option}
                          </button>
                        );
                      })}
                    </div>
                  </Field>

                  <Field label="Message" htmlFor="message">
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={update("message")}
                      placeholder="Tell us a bit about what you're working on..."
                      className={`${inputClasses} resize-none`}
                    />
                  </Field>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-[#110069] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(17,0,105,0.5)] transition-transform hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0"
                  >
                    {status === "submitting" ? "Sending..." : "Submit"}
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>

            {/* ---- Direct Contacts ---- */}
            <div>
              <SectionLabel>Direct Contacts</SectionLabel>
              <h2 className="mt-3 font-display text-2xl text-[#110069] sm:text-3xl">
                Prefer to reach out directly?
              </h2>

              <div className="mt-8 flex flex-col gap-5">
                {DIRECT_CONTACTS.map(({ name, credentials, title, email, phone }) => (
                  <div
                    key={name}
                    className="rounded-2xl border border-[#110069]/10 bg-[#FAF9F6] p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#110069] font-display text-base text-white">
                        {initials(name)}
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-[#110069]">
                          {name}
                        </h3>
                        <p className="text-xs text-[#181430]/45">
                          {credentials}
                        </p>
                        <p className="mt-1 text-sm font-medium text-[#C9A227]">
                          {title}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-col gap-2 border-t border-[#110069]/10 pt-4">
                      <a
                        href={`mailto:${email}`}
                        className="flex items-center gap-2 text-sm text-[#181430]/70 transition-colors hover:text-[#110069]"
                      >
                        <Mail size={15} className="text-[#C9A227]" />
                        {email}
                      </a>
                      <a
                        href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                        className="flex items-center gap-2 text-sm text-[#181430]/70 transition-colors hover:text-[#110069]"
                      >
                        <Phone size={15} className="text-[#C9A227]" />
                        {phone}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CLOSING QUOTE ================= */}
      <section className="bg-[#110069]">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8 sm:py-20 lg:px-10">
          <Quote
            size={32}
            className="mx-auto text-[#C9A227]"
            fill="currentColor"
            strokeWidth={0}
          />
          <p className="mt-5 font-display text-xl italic leading-snug text-white sm:text-2xl">
            "The art of conversation is the art of hearing as well as of
            being heard."
          </p>
          <p className="mt-4 text-sm font-medium text-[#C9A227]">
            — William Hazlitt
          </p>
        </div>
      </section>
    </>
  );
}