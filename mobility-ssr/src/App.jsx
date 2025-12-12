// App.jsx
import { Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/homePage';
import Navbar from './components/navBar';
import Footer from './components/footer';
import PopupForm from './components/popupForm';
import ContactPage from './pages/Contact';
import AboutPage from './pages/About';
import { PopupProvider } from './components/PopupContext';
import FleetPage from './pages/OurFleet';
import CorporatePage from './pages/Corporate';
import ScrollToTop from './components/ScrolltoTop';
import PrivacyTermsPage from './pages/PrivacyPolicies';
import TermsConditionsPage from './pages/Terms&Condition';
import AirportTransferPage from './pages/AirportTransfer';
import OutstationTransferPage from './pages/OutStation';
import ServicesPage from './pages/Service';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogDetails';
import WeddingCar from './pages/WeddingCar';
import FloatingContact from './components/FloatingContact';
import CorporateDelhiPage from './pages/CorporateDelhi';
import CorporateNoidaPage from './pages/CorporateNoida';
import CorporateGurgaonPage from './pages/CorporateGurugaon';
import CorporateBangalorePage from './pages/CorporateBanglore';
import CorporateHyderabadPage from './pages/CorporateHyderabad';
import CorporateMumbaiPage from './pages/CorporateMumbai';


export default function App() {
  return (
    <>
      <PopupProvider>
        <ScrollToTop />
        <Navbar />
        {/* <PopupForm /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/our-fleet" element={<FleetPage />} />
          <Route path="/corporate-protocol" element={<CorporatePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/privacy-policies" element={<PrivacyTermsPage />} />
          <Route path="/term-condition" element={<TermsConditionsPage />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/airport-transfer" element={<AirportTransferPage />} />
          <Route path="/out-station" element={<OutstationTransferPage />} />
          <Route path="/wedding-car" element={<WeddingCar />} />
          <Route path="/corporate/corporate-in-delhi" element={<CorporateDelhiPage />} />
          <Route path="/corporate/corporate-in-noida" element={<CorporateNoidaPage />} />
          <Route path="/corporate/corporate-in-gurugaon" element={<CorporateGurgaonPage />} />
          <Route path="/corporate/corporate-in-banglore" element={<CorporateBangalorePage />} />
          <Route path="/corporate/corporate-in-hyderabad" element={<CorporateHyderabadPage/>} />
          <Route path="/corporate/corporate-in-mumbai" element={<CorporateMumbaiPage/>} />
        </Routes>
        <FloatingContact/>
        <Footer />
      </PopupProvider>
    </>
  );
}
