// App.jsx
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
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
import OutStationLandingPage from "./pages/OutStationLandingPage";
import UrbaniaLandingPage from "./pages/Urbania";
import LuxryCarLandingPage from "./pages/LuxryCar";

function RouteTracker() {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "AW-17769558353", {
        page_path: location.pathname,
      });
    }
  }, [location]);

  return null;
}

export default function App() {

  return (
<PopupProvider>
  <CityProvider>
<ScrollToTop />
<RouteTracker />
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
  <Route path="/out-station" element={<OutStationLandingPage />} />
  <Route path="/urbania" element={<UrbaniaLandingPage />} />
  <Route path="/luxury-car" element={<LuxryCarLandingPage />} />
</Routes>


    {/* <FloatingContact /> */}
    <ImportantLinks />
    <Footer />
  </CityProvider>
</PopupProvider>

  );
}
