import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";
import logo from "../assets/medlish logo.png";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/service" },
  { label: "Our Work", to: "/ourwork" },
  { label: "Clients & Partners", to: "/clientspartners" },
  { label: "Team", to: "/team" },
  { label: "Insights", to: "/insight" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-[#110069]/10 bg-[#FAF9F6]/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        <Link to="/" className="flex items-baseline gap-2">
          <img src={logo} alt="Medlish Communications logo" className="h-16 w-[180px] object-contain" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map(({ label, to }) => {
            const isActive = location.pathname === to;
            return (
              <Link
                key={label}
                to={to}
                className={`text-sm transition-colors ${
                  isActive
                    ? "font-semibold text-[#110069]"
                    : "font-medium text-[#181430]/70 hover:text-[#110069]"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#110069] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1a0d99]"
          >
            Start a Conversation
            <ArrowRight size={16} />
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="rounded-md p-2 text-[#110069] lg:hidden"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-[#110069]/10 bg-[#FAF9F6] px-5 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map(({ label, to }) => {
              const isActive = location.pathname === to;
              return (
                <Link
                  key={label}
                  to={to}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-lg px-3 py-2.5 text-sm transition-colors ${
                    isActive
                      ? "bg-[#110069]/5 font-semibold text-[#110069]"
                      : "font-medium text-[#181430]/80 hover:bg-[#110069]/5"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-[#110069] px-5 py-3 text-sm font-semibold text-white"
            >
              Start a Conversation
              <ArrowRight size={16} />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}