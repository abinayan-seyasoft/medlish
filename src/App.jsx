import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout/Layout";
import MedlishHome from "./pages/HomePage";
import AboutUs from "./pages/Aboutus";
import Services from "./pages/Service";
import OurWork from "./pages/OurWork";
import ClientsPartners from "./pages/ClientsPartners";
import Team from "./pages/team";
import Insights from "./pages/Insight";
import Contact from "./pages/contact";
import ScrollToTop from "./components/Scrolltop";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MedlishHome />} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/service" element= {<Services/>} />
          <Route path="/ourwork" element = {<OurWork/>} />
          <Route path="/gallery" element = {<Gallery/>} />
          <Route path="/clientspartners"  element = {<ClientsPartners/>} />
          <Route path= "/team" element = {<Team/>} />
          <Route path="/insight" element={<Insights/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="*" element= {<Navigate to="/" replace/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;