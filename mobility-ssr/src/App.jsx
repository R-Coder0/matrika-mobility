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
import LocalOutstationDelhi from './pages/localOutstation/Delhi';
import LocalSpotRentalNoida from './pages/localOutstation/Noida';
import LocalSpotRentalGurugram from './pages/localOutstation/Gurugaon';
import LongTermFixedRentalDelhi from './pages/LongFixRental/Delhi';
import LongTermFixedRentalNoida from './pages/LongFixRental/Noida';
import AirportTransfersDelhi from './pages/AirportTransfer/Delhi';
import LongTermFixedRentalGurugram from './pages/LongFixRental/Gurugram';
import AirportTransfersNoida from './pages/AirportTransfer/Noida';
import AirportTransfersGurugram from './pages/AirportTransfer/Gurugram';
import MICEDelhi from './pages/MICE/Delhi';
import MICENoida from './pages/MICE/Noida';
import MICEGurugram from './pages/MICE/Gurugram';


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
          <Route path="/corporate/corporate-service-in-delhi" element={<CorporateDelhiPage />} />
          <Route path="/corporate/corporate-service-in-noida" element={<CorporateNoidaPage />} />
          <Route path="/corporate/corporate-service-in-gurugaon" element={<CorporateGurgaonPage />} />
          <Route path="/corporate/corporate-service-in-banglore" element={<CorporateBangalorePage />} />
          <Route path="/corporate/corporate-service-in-hyderabad" element={<CorporateHyderabadPage/>} />
          <Route path="/corporate/corporate-service-in-mumbai" element={<CorporateMumbaiPage/>} />
          <Route path="/services/spot-rentals/delhi" element={<LocalOutstationDelhi/>} />
          <Route path="/services/spot-rentals/noida" element={<LocalSpotRentalNoida/>} />
          <Route path="/services/spot-rentals/gurugram" element={<LocalSpotRentalGurugram/>} />
          <Route path="/services/fixed-rentals/delhi" element={<LongTermFixedRentalDelhi/>} />
          <Route path="/services/fixed-rentals/noida" element={<LongTermFixedRentalNoida/>} />
          <Route path="/services/fixed-rentals/gurugram" element={<LongTermFixedRentalGurugram/>} />
          <Route path="/services/airport-transfers/delhi" element={<AirportTransfersDelhi/>} />
          <Route path="/services/airport-transfers/noida" element={<AirportTransfersNoida/>} />
          <Route path="/services/airport-transfers/gurugram" element={<AirportTransfersGurugram/>} />
          <Route path="/services/mice/delhi" element={<MICEDelhi/>} />
          <Route path="/services/mice/noida" element={<MICENoida/>} />
          <Route path="/services/mice/gurugram" element={<MICEGurugram/>} />
        </Routes>
        <FloatingContact/>
        <Footer />
      </PopupProvider>
    </>
  );
}
