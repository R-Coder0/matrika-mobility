import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaCar, FaPhoneAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { usePopup } from "./PopupContext";

const cityLinks = [
  ["Delhi", "/delhi"],
  ["Gurgaon", "/gurgaon"],
  ["Noida", "/noida"],
  ["Bangalore", "/bangalore"],
  ["Hyderabad", "/hyderabad"],
  ["Mumbai", "/mumbai"],
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { setShowPopup } = usePopup();
  const navigate = useNavigate();

  const toggleMenu = () => setOpen(!open);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
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
        className={`fixed w-full z-50 top-0 transition-all duration-300 ${
          scrolled
            ? "bg-[#FFFAFA]/90 backdrop-blur-md shadow-md"
            : "bg-[#FFFAFA]"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src="/logo.png"
              alt="Taxi Tribe"
              className="h-14 w-auto group-hover:opacity-80 transition duration-300"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {[
              ["Home", "/"],
              ["Corporate", "/corporate-protocol"],
              ["Our Fleet", "/our-fleet"],
              ["Services", "/services"],
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

            {/* Cities Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-700 hover:text-black font-medium transition-all duration-300 relative">
                Cities
                <span className="text-xs">▼</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
              </button>

              <div className="absolute right-0 mt-3 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {cityLinks.map(([label, link]) => (
                  <Link
                    key={label}
                    to={link}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-black"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Link
              to="https://app.indecab.com/login"
              className="bg-amber-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-amber-600 transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105"
            >
              Corporate login
            </Link>
          </div>

          {/* Mobile Call + Hamburger */}
          <div className="flex items-center gap-3 lg:hidden">
            {/* Call Button */}
            <a
              href="tel:+917011438890"
              className="flex items-center gap-2 px-3 py-2 rounded-full bg-amber-500 text-white text-sm font-semibold shadow-sm hover:bg-amber-600 transition-all"
            >
              <FaPhoneAlt className="text-sm" />
              <span>Call Now</span>
            </a>

            {/* Hamburger */}
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-amber-500 transition"
              aria-label="Toggle menu"
            >
              {open ? (
                <FaTimes className="text-2xl" />
              ) : (
                <FaBars className="text-2xl" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 lg:hidden ${
          open
            ? "bg-black/20 backdrop-blur-sm opacity-100"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <FaCar className="text-2xl text-amber-500" />
                <div className="text-xl font-black text-gray-800">
                  Taxi <span className="text-amber-500">Tribe</span>
                </div>
              </div>
              <button
                onClick={toggleMenu}
                className="text-gray-800 hover:text-amber-500"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex-1 p-6 space-y-6 overflow-y-auto">
              {[
                ["Home", "/"],
                ["Corporate", "/corporate-protocol"],
                ["Our Fleet", "/our-fleet"],
                ["Services", "/services"],
                ["About", "/about-us"],
                ["Blogs", "/blogs"],
                ["Contact", "/contact-us"],
              ].map(([label, link]) => (
                <Link
                  key={label}
                  to={link}
                  className="block text-gray-700 hover:text-black font-medium text-lg transition-all duration-300 hover:translate-x-2"
                  onClick={() => handleNavClick(link)}
                >
                  {label}
                </Link>
              ))}

              {/* Cities section */}
              <div className="pt-4 border-t border-gray-200">
                <p className="text-xs font-semibold text-gray-500 uppercase mb-3">
                  Cities We Serve
                </p>
                <div className="space-y-2">
                  {cityLinks.map(([label, link]) => (
                    <Link
                      key={label}
                      to={link}
                      className="block text-gray-600 hover:text-black text-sm font-medium transition-all duration-300 hover:translate-x-2"
                      onClick={() => handleNavClick(link)}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div className="pt-6 border-t border-gray-200 space-y-4">
                <div className="flex items-center space-x-3 text-gray-700">
                  <FaPhoneAlt className="text-amber-500" />
                  <span>+91 7011438890</span>
                </div>
              </div>

              {/* CTA */}
              <Link
                onClick={handleBookNowClick}
                to="https://app.indecab.com/login"
                className="block w-full bg-amber-500 text-white px-6 py-4 rounded-lg font-bold text-center hover:bg-amber-600 transition-all duration-300 mt-8 shadow-sm hover:shadow-md"
              >
                Corporate Login
              </Link>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-200">
              <p className="text-gray-500 text-sm text-center">
                Premium Car Rental Service
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
