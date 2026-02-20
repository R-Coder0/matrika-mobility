// App.jsx
import { Routes, Route, useLocation } from "react-router-dom";
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
import OutStationLandingPage from "./pages/OutStationLandingPage";
import UrbaniaLandingPage from "./pages/Urbania";
import LuxryCarLandingPage from "./pages/LuxryCar";

// === Google Ads IDs (from client mail) ===
const ADS_ID = "AW-17769558353";
const CALL_CONVERSION_LABEL = "Z52xCM7OzPgbENHil5lC";
const PHONE_NUMBER = "7011438890";

/**
 * SPA route tracker for Google Ads + Call forwarding replacement
 * - On every route change:
 *   1) Updates page_path for Ads
 *   2) Runs phone forwarding replacement snippet (call conversion)
 */
function GoogleAdsRouteTracker() {
  const location = useLocation();

  useEffect(() => {
    if (!window.gtag) return;

    const page_path = location.pathname + location.search;

    // 1) Update page path (SPA)
    window.gtag("config", ADS_ID, { page_path });

    // 2) Phone forwarding / website call conversion snippet (SPA)
    window.gtag("config", `${ADS_ID}/${CALL_CONVERSION_LABEL}`, {
      phone_conversion_number: PHONE_NUMBER,
    });
  }, [location.pathname, location.search]);

  return null;
}

export default function App() {
  return (
    <PopupProvider>
      <CityProvider>
        <ScrollToTop />
        <GoogleAdsRouteTracker />

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

          {/* LANDING PAGES */}
          <Route path="/wedding-car" element={<WeddingCar />} />
          <Route path="/airport" element={<AirportPage />} />
          <Route path="/out-station" element={<OutStationLandingPage />} />
          <Route path="/urbania" element={<UrbaniaLandingPage />} />
          <Route path="/luxury-car" element={<LuxryCarLandingPage />} />

          {/* DYNAMIC SERVICE PAGES — keep LAST */}
          <Route path="/:slug" element={<DynamicServicePage />} />
        </Routes>

        {/* <FloatingContact /> */}
        <ImportantLinks />
        <Footer />
      </CityProvider>
    </PopupProvider>
  );
}