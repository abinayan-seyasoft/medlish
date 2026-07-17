import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Medlish-Logo-1.png"

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/service" },
  { label: "Our Work", to: "/ourwork" },
  { label: "Gallery", to: "/gallery" },
  { label: "Clients & Partners", to: "/clientspartners" },
  { label: "Team", to: "/team" },
  { label: "Insights", to: "/insight" },
  { label: "Contact", to: "/contact" },
];
export default function Footer() {
  return (
    <footer className="bg-[#0a0140]">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <img src={logo} className="h-14 w-49" />
            <p className="mt-3 text-[15px] leading-relaxed text-white/70">
               Context-Intelligent Medical Communication for Modern Healthcare
              Brands
             
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C9A227]">
              Explore
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm font-medium text-white/80">
              {NAV_LINKS.map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className="transition-colors hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C9A227]">
              Contact
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-white/80">
              <li>dr.arasan@medlish.com</li>
              <li>sailatha@medlishcommunications.com</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C9A227]">
              Legal
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-white/80">
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/70">
          © Medlish Communications. ® All rights reserved.
        </div>
      </div>
    </footer>
  );
}