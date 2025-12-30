// src/components/Footer.jsx
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const LOCATIONS = [
  {
    city: "Delhi (Head Office)",
    address: ["E-169, East of Kailash", "New Delhi – 110065"],
  },
  {
    city: "Gurugram",
    address: ["FF-7, Vyapar Kendra", "Sushant Lok-I", "Gurugram – 122002"],
  },
  {
    city: "Noida",
    address: ["Sector 143", "Opp Metro Station", "Noida – 201303"],
  },
  {
    city: "Bangalore",
    address: [
      "10 Kashinagara, Amruthahalli",
      "Near Prakruthi Meadows",
      "Bangalore",
    ],
  },
  {
    city: "Hyderabad",
    address: ["Sri Ram Nagar X Road", "Yousufguda", "Hyderabad – 500045"],
  },
  {
    city: "Mumbai",
    address: [
      "F-18 A Wing, Express Zone Mall",
      "Malad East",
      "Mumbai – 400097",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-linear-to-br from-black via-[#0f0f0f] to-[#1a1a1a] text-gray-300">

      {/* ================= TOP FOOTER ================= */}
      <div className="max-w-[1400px] mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-700">

        {/* BRAND */}
        <div>
          <Link to="/" className="flex items-center mb-4">
            <img src="/logo.png" alt="Taxi Tribe" className="h-14" />
          </Link>
          <p className="text-sm text-gray-400 mb-4">
            Premium corporate & city car rental solutions across India.
            Reliable. Professional. Scalable.
          </p>

          <div className="flex gap-4 text-lg">
            <a href="#" className="hover:text-amber-400"><FaFacebookF /></a>
            <a href="#" className="hover:text-amber-400"><FaTwitter /></a>
            <a href="#" className="hover:text-amber-400"><FaInstagram /></a>
            <a href="#" className="hover:text-amber-400"><FaLinkedin /></a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-amber-400">Home</Link></li>
            <li><Link to="/about-us" className="hover:text-amber-400">About Us</Link></li>
            <li><Link to="/blogs" className="hover:text-amber-400">Blogs</Link></li>
            <li><Link to="/contact-us" className="hover:text-amber-400">Contact Us</Link></li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/corporate-car-rental-delhi" className="hover:text-amber-400">Corporate Car Rental</Link></li>
            <li><Link to="/airport-transport-in-delhi" className="hover:text-amber-400">Airport Transfers</Link></li>
            <li><Link to="/local-outstation-service-in-delhi" className="hover:text-amber-400">Local & Outstation</Link></li>
            <li><Link to="/mice-in-delhi" className="hover:text-amber-400">MICE Services</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-amber-400" />
              <a href="tel:+917011438890" className="hover:text-amber-400">
                +91 70114 38890
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-amber-400" />
              <a href="mailto:sales@taxitribe.in" className="hover:text-amber-400">
                sales@taxitribe.in
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* ================= LOCATIONS ================= */}
      <div className="max-w-[1400px] mx-auto px-6 py-12">

        <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-8">
          Our Locations
        </h3>

        {/* MOBILE — ACCORDION */}
        <div className="block md:hidden space-y-3">
          {LOCATIONS.map((loc) => (
            <details
              key={loc.city}
              className="bg-black border border-gray-700 rounded-lg p-4"
            >
              <summary className="flex items-center gap-3 cursor-pointer font-semibold text-white">
                <span className="bg-amber-400 p-2 rounded-full">
                  <FaMapMarkerAlt className="text-black" />
                </span>
                {loc.city}
              </summary>

              <div className="mt-3 text-sm text-gray-300">
                {loc.address.map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </div>
            </details>
          ))}
        </div>

        {/* DESKTOP — GRID */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
          {LOCATIONS.map((loc) => (
            <div
              key={loc.city}
              className="bg-linear-to-br from-gray-900 to-black border border-gray-700 rounded-xl p-6 hover:border-amber-400 transition"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-amber-400 p-2 rounded-full">
                  <FaMapMarkerAlt className="text-black" />
                </div>
                <h4 className="text-lg font-semibold text-white">{loc.city}</h4>
              </div>

              <p className="text-sm text-gray-300 leading-relaxed">
                {loc.address.map((line, i) => (
                  <span key={i} className="block">{line}</span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="border-t border-gray-700">
        <div className="max-w-[1400px] mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Taxi Tribe. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy-policies" className="hover:text-amber-400">
              Privacy Policy
            </Link>
            <Link to="/term-condition" className="hover:text-amber-400">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
