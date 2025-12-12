import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaCar, FaPhoneAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { usePopup } from "./PopupContext";

/* =============================
  DATA STRUCTURE FOR DROPDOWNS
==============================*/

// Cities used under every service
const serviceCities = [
  "Delhi",
  "Noida",
  "Gurugram",
  // "Hyderabad",
  // "Bengaluru",
  // "Mumbai",
];

// Services list
const servicesMenu = [
  {
    label: "Local & Outstation Spot Rentals",
    basePath: "/services/spot-rentals/",
  },
  {
    label: "Long-Term Fixed Rentals",
    basePath: "/services/fixed-rentals/",
  },
  {
    label: "Airport Transfers",
    basePath: "/services/airport-transfers/",
  },
  {
    label: "MICE: Meetings, Incentives, Conferences & Events",
    basePath: "/services/mice/",
  },
  // {
  //   label: "Wedding & Special Occasion Cars",
  //   basePath: "/services/wedding-cars/",
  // },
];

// Corporate states list
const statesList = [
  ["Delhi", "/corporate/corporate-service-in-delhi"],
  ["Noida", "/corporate/corporate-service-in-noida"],
  ["Gurugram", "/corporate/corporate-service-in-gurugaon"],
  ["Hyderabad", "/corporate/corporate-service-in-hyderabad"],
  ["Bengaluru", "/corporate/corporate-service-in-banglore"],
  ["Mumbai", "/corporate/corporate-service-in-mumbai"],
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileCorporateOpen, setMobileCorporateOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [serviceCityOpen, setServiceCityOpen] = useState({});

  const { setShowPopup } = usePopup();
  const navigate = useNavigate();

  const toggleMenu = () => setOpen(!open);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (to) => {
    setOpen(false);
    navigate(to);
  };

  const handleBookNowClick = () => {
    setShowPopup(true);
    setOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed w-full z-50 top-0 transition-all duration-300 ${scrolled ? "bg-[#FFFAFA]/95 backdrop-blur-md shadow-lg" : "bg-[#FFFAFA]"
          }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 py-4 flex justify-between items-center">

          {/* LOGO */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src="/logo.png"
              alt="Taxi Tribe"
              className="h-14 w-auto group-hover:opacity-80 transition duration-300"
            />
          </Link>
          

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* =====================
                SERVICES DROPDOWN
            ====================== */}
            <div className="relative group">
              <div className="flex items-center gap-2 cursor-pointer">
                <span className="text-gray-700 hover:text-black font-medium transition-colors duration-300">Services</span>
                <span className="text-xs text-gray-500 transform group-hover:rotate-180 transition-transform duration-300">▼</span>
              </div>

              {/* MAIN DROPDOWN */}
              <div className="absolute left-0 mt-3 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 py-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">

                {servicesMenu.map((service, idx) => (
                  <div key={idx} className="group/item relative">

                    <div className="px-5 py-3 text-gray-700 hover:bg-linear-to-r hover:from-amber-50 hover:to-orange-50 hover:text-black cursor-pointer flex justify-between items-center transition-all duration-200 border-l-4 border-transparent hover:border-amber-500">
                      <span className="font-medium">{service.label}</span>
                      <span className="text-amber-500 transform group-hover/item:translate-x-1 transition-transform duration-200">▶</span>
                    </div>

                    {/* SUB MENU — Cities */}
                    <div className="absolute top-0 left-full ml-3 bg-white rounded-xl shadow-2xl border border-gray-200 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-300 w-60 py-3 transform group-hover/item:translate-x-0 -translate-x-2">

                      <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider border-b border-gray-100 mb-2">
                        Select City
                      </div>

                      {serviceCities.map((city) => (
                        <a
                          key={city}
                          href={`${service.basePath}${city.toLowerCase()}`}
                          className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-linear-to-r hover:from-amber-50 hover:to-orange-50 hover:text-black transition-all duration-200 hover:pl-6 border-l-4 border-transparent hover:border-amber-400"
                        >
                          <span className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                            {city}
                          </span>
                        </a>
                      ))}

                    </div>
                  </div>
                ))}

              </div>
            </div>

            {/* =====================
                CORPORATE DROPDOWN
            ====================== */}
            <div className="relative group">
              <div className="flex items-center gap-2 cursor-pointer">
                <Link
                  to="/corporate-protocol"
                  className="text-gray-700 hover:text-black font-medium transition-colors duration-300"
                >
                  Corporate
                </Link>
                <span className="text-xs text-gray-500 transform group-hover:rotate-180 transition-transform duration-300">▼</span>
              </div>

              <div className="absolute left-0 mt-3 w-64 bg-white rounded-2xl shadow-2xl border border-gray-200 py-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">

                <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider border-b border-gray-100 mb-2">
                  Corporate Services
                </div>

                {statesList.map(([label, link]) => (
                  <a
                    key={label}
                    href={link}
                    className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-linear-to-r hover:from-amber-50 hover:to-orange-50 hover:text-black transition-all duration-200 hover:pl-6 border-l-4 border-transparent hover:border-amber-400"
                  >
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                      {label}
                    </span>
                  </a>
                ))}

              </div>
            </div>

            {/* BASIC ROUTES */}
            {[
              ["Home", "/"],
              ["Our Fleet", "/our-fleet"],
              ["About", "/about-us"],
              ["Blogs", "/blogs"],
              ["Contact", "/contact-us"],
            ].map(([label, link]) => (
              <Link
                key={label}
                to={link}
                className="text-gray-700 hover:text-black font-medium transition-all duration-300 hover:scale-105 relative group"
              >
                {label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}



            {/* LOGIN CTA */}
            <Link
              to="https://app.indecab.com/login"
              className="bg-amber-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-amber-600 transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105"
            >
              Corporate login
            </Link>

          </div>

          {/* MOBILE RIGHT SIDE */}
          <div className="flex items-center gap-3 lg:hidden">

            {/* Call Button */}
            <a
              href="tel:+917011438890"
              className="flex items-center gap-2 px-3 py-2 rounded-full bg-amber-500 text-white shadow-md hover:shadow-lg transition-all duration-300"
            >
              <FaPhoneAlt className="text-sm" />
              Call Now
            </a>

            {/* Hamburger */}
            <button onClick={toggleMenu} className="text-gray-700 hover:text-amber-500 transition-colors duration-200">
              {open ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
          </div>

        </div>
      </nav>

      {/* =======================
          MOBILE MENU OVERLAY
      ======================== */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 lg:hidden ${open ? "bg-black/30 backdrop-blur-sm opacity-100" : "opacity-0 pointer-events-none"
          }`}
        onClick={toggleMenu}
      >
        <div
          className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"
            }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col h-full">

            {/* HEADER */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-linear-to-r from-amber-50 to-orange-50">
              <div className="flex items-center gap-3">
                <FaCar className="text-2xl text-amber-500" />
                <div className="text-xl font-black">Taxi <span className="text-amber-500">Tribe</span></div>
              </div>
              <button onClick={toggleMenu} className="text-gray-700 hover:text-amber-500 transition-colors duration-200">
                <FaTimes className="text-xl" />
              </button>
            </div>

            {/* MENU ITEMS */}
            <div className="flex-1 p-6 space-y-6 overflow-y-auto">

              {/* Basic Pages */}
              {[
                ["Home", "/"],
                ["Our Fleet", "/our-fleet"],
                ["About", "/about-us"],
                ["Blogs", "/blogs"],
                ["Contact", "/contact-us"],
              ].map(([label, link]) => (
                <Link
                  key={label}
                  to={link}
                  onClick={() => handleNavClick(link)}
                  className="block text-gray-700 text-lg font-medium hover:text-amber-500 hover:translate-x-2 transition-all duration-200"
                >
                  {label}
                </Link>
              ))}

              {/* ==========================
                  MOBILE SERVICES DROPDOWN
              =========================== */}
              <div className="pt-4 border-t border-gray-200">
                <button
                  className="w-full flex justify-between items-center text-gray-700 font-semibold text-lg hover:text-amber-500 transition-colors duration-200"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  <span className="flex items-center gap-2">
                    <span className="w-1 h-6 bg-amber-500 rounded-full"></span>
                    Services
                  </span>
                  <span className={`text-sm text-amber-500 transform transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`}>▼</span>
                </button>

                <div className={`mt-3 space-y-3 overflow-hidden transition-all duration-300 ${mobileServicesOpen ? "max-h-[600px]" : "max-h-0"
                  }`}>

                  {servicesMenu.map((service, idx) => (
                    <div key={idx} className="bg-linear-to-r from-gray-50 to-amber-50/30 border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200">

                      <button
                        onClick={() =>
                          setServiceCityOpen((prev) => ({
                            ...prev,
                            [idx]: !prev[idx],
                          }))
                        }
                        className="w-full flex justify-between items-center text-gray-700 font-medium text-left"
                      >
                        <span className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                          <span className="text-sm">{service.label}</span>
                        </span>
                        <span className={`text-xs text-amber-500 transform transition-transform duration-200 ${serviceCityOpen[idx] ? "rotate-180" : ""}`}>▼</span>
                      </button>

                      {/* Cities under each service */}
                      <div
                        className={`mt-3 space-y-2 pl-4 overflow-hidden transition-all duration-300 ${serviceCityOpen[idx] ? "max-h-80 border-l-2 border-amber-300" : "max-h-0"
                          }`}
                      >
                        {serviceCities.map((city) => (
                          <a
                            key={city}
                            href={`${service.basePath}${city.toLowerCase()}`}
                            className=" text-gray-600 hover:text-black text-sm py-2 px-3 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200 flex items-center gap-2"
                          >
                            <span className="w-1.5 h-1.5 bg-amber-400 rounded-full"></span>
                            {city}
                          </a>
                        ))}
                      </div>

                    </div>
                  ))}

                </div>
              </div>

              {/* ==============================
                  MOBILE CORPORATE DROPDOWN
              =============================== */}
              <div className="pt-4 border-t border-gray-200">
                <button
                  className="w-full flex justify-between items-center text-gray-700 font-semibold text-lg hover:text-amber-500 transition-colors duration-200"
                  onClick={() => setMobileCorporateOpen(!mobileCorporateOpen)}
                >
                  <span className="flex items-center gap-2">
                    <span className="w-1 h-6 bg-amber-500 rounded-full"></span>
                    Corporate
                  </span>
                  <span className={`text-amber-500 transform transition-transform duration-300 ${mobileCorporateOpen ? "rotate-180" : ""}`}>▼</span>
                </button>

                <div
                  className={`mt-3 overflow-hidden transition-all duration-300 ${mobileCorporateOpen ? "max-h-96" : "max-h-0"
                    }`}
                >
                  <div className="bg-linear-to-r from-gray-50 to-amber-50/30 border border-gray-200 rounded-xl p-4 shadow-sm space-y-2">
                    {statesList.map(([label, link]) => (
                      <a
                        key={label}
                        href={link}
                        className=" text-gray-600 hover:text-black text-sm py-2.5 px-3 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-amber-400 rounded-full"></span>
                        {label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <Link
                onClick={handleBookNowClick}
                to="https://app.indecab.com/login"
                className="block w-full bg-linear-to-r from-amber-500 to-orange-500 text-white px-6 py-4 rounded-xl font-bold text-center hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-md hover:shadow-xl"
              >
                Corporate Login
              </Link>
            </div>

            {/* FOOTER */}
            <div className="p-6 border-t border-gray-200 bg-gray-50">
              <p className="text-gray-500 text-sm text-center font-medium">Premium Car Rental Service</p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;