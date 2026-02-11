// App.jsx
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import "./index.css";

import Navbar from "./components/navBar";
import Footer from "./components/footer";
import ScrollToTop from "./components/ScrolltoTop";
// import FloatingContact from "./components/FloatingContact";

import Home from "./pages/homePage";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import FleetPage from "./pages/OurFleet";
// import CorporatePage from "./pages/Corporate";
// import ServicesPage from "./pages/Service";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogDetails";
import WeddingCar from "./pages/WeddingCar";
import PrivacyTermsPage from "./pages/PrivacyPolicies";
import TermsConditionsPage from "./pages/Terms&Condition";

import { PopupProvider } from "./components/PopupContext";
import DynamicServicePage from "./routes/DynamicServicePage";
import { CityProvider } from "./context/CityContext";
import ServiceBar from "./components/ServiceBar";
import ImportantLinks from "./components/ImportantLinks";
import AirportPage from "./pages/AirPort";

export default function App() {
  useEffect(() => {
    // Load Google Ads gtag
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://www.googletagmanager.com/gtag/js?id=AW-17769558353";
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;

    gtag("js", new Date());

    // 🔥 WEBSITE CALL TRACKING (NUMBER REPLACEMENT)
    gtag("config", "AW-17769558353", {
      phone_conversion_number: "+917011438890",
    });
  }, []);
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
  <Route path="/bangalore" element={<Home />} />
  <Route path="/hyderabad" element={<Home />} />
  <Route path="/mumbai" element={<Home />} />
  {/* STATIC */}
  <Route path="/about-us" element={<AboutPage />} />
  <Route path="/our-fleet" element={<FleetPage />} />
  <Route path="/contact-us" element={<ContactPage />} />
  <Route path="/blogs" element={<BlogPage />} />
  <Route path="/blog/:slug" element={<BlogPostPage />} />
  <Route path="/terms-and-conditions" element={<TermsConditionsPage />} />
  <Route path="/privacy-policy" element={<PrivacyTermsPage />} />

  {/* 🔥 ALL SERVICE PAGES */}
  <Route path="/:slug" element={<DynamicServicePage />} />
  <Route path="/wedding-car" element={<WeddingCar />} />
  <Route path="/airport" element={<AirportPage />} />
</Routes>


    {/* <FloatingContact /> */}
    <ImportantLinks />
    <Footer />
  </CityProvider>
</PopupProvider>

  );
}
