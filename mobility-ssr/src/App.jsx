// App.jsx
import { Routes, Route } from "react-router-dom";
import "./index.css";

import Navbar from "./components/navBar";
import Footer from "./components/footer";
import ScrollToTop from "./components/ScrolltoTop";
import FloatingContact from "./components/FloatingContact";

import Home from "./pages/homePage";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import FleetPage from "./pages/OurFleet";
import CorporatePage from "./pages/Corporate";
import ServicesPage from "./pages/Service";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogDetails";
import WeddingCar from "./pages/WeddingCar";
import PrivacyTermsPage from "./pages/PrivacyPolicies";
import TermsConditionsPage from "./pages/Terms&Condition";

import { PopupProvider } from "./components/PopupContext";

/* 🔥 NEW */
import DynamicServicePage from "./routes/DynamicServicePage";
import { CityProvider } from "./context/CityContext";
import ServiceBar from "./components/ServiceBar";
import ImportantLinks from "./components/ImportantLinks";

export default function App() {
  return (
<PopupProvider>
  <CityProvider>
    <ScrollToTop />
    <Navbar />
    <ServiceBar />

<Routes>
  {/* HOME */}
  <Route path="/" element={<Home />} />
  <Route path="/delhi" element={<Home />} />
  <Route path="/noida" element={<Home />} />
  <Route path="/gurugram" element={<Home />} />
  {/* STATIC */}
  <Route path="/about-us" element={<AboutPage />} />
  <Route path="/our-fleet" element={<FleetPage />} />
  <Route path="/contact-us" element={<ContactPage />} />
  <Route path="/blogs" element={<BlogPage />} />
  <Route path="/blog/:slug" element={<BlogPostPage />} />

  {/* 🔥 ALL SERVICE PAGES */}
  <Route path="/:slug" element={<DynamicServicePage />} />
  <Route path="/wedding-car" element={<WeddingCar />} />
</Routes>


    {/* <FloatingContact /> */}
    <ImportantLinks />
    <Footer />
  </CityProvider>
</PopupProvider>

  );
}
