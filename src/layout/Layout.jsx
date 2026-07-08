import { Outlet } from "react-router-dom";
import Navbar from "../components/Header";
import Footer from "../components/Footer";

// Heading font: DM Sans · Body font: Mulish
const FONT_IMPORT_URL =
  "https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800;1,9..40,400;1,9..40,500;1,9..40,600;1,9..40,700&family=Mulish:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600&display=swap";

export default function Layout() {
  return (
    <div
      className="min-h-screen bg-[#FAF9F6] text-[#181430] antialiased"
      style={{ fontFamily: "'Mulish', ui-sans-serif, system-ui, sans-serif" }}
    >
      <style>{`
        @import url('${FONT_IMPORT_URL}');
        .font-display { font-family: 'DM Sans', ui-sans-serif, system-ui, sans-serif; }
      `}</style>

      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}