import { Outlet } from "react-router-dom";
import Navbar from "../components/Header";
import Footer from "../components/Footer";

const FONT_IMPORT_URL =
  "https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&display=swap";

export default function Layout() {
  return (
    <div
      className="min-h-screen bg-[#FAF9F6] text-[#181430] antialiased"
      style={{ fontFamily: "'DM Sans', ui-sans-serif, system-ui, sans-serif" }}
    >
      <style>{`
        @import url('${FONT_IMPORT_URL}');
        .font-display { font-family: 'DM Serif Display', ui-serif, Georgia, serif; }
      `}</style>

      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}