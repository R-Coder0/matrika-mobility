import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import {
  FaPlaneArrival,
  FaPlaneDeparture,
  FaClock,
  FaUserTie,
  FaCheckCircle,
  FaHeadset,
  FaShieldAlt,
  FaRoute,
} from "react-icons/fa";
import BookingDialog from "../../components/BookingCar";
import GlobalAvailabilitySection from "../../components/Map";
import SOPsSection from "../SOPsSection";
import BestPracticesSection from "../../components/BestPractise";

export default function AirportTransfersDelhi() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <section className="bg-white text-gray-900">

      {/* ================= SEO ================= */}
      <Helmet>
        <title>Airport Transfers in Delhi | Reliable Airport Taxi Service – TaxiTribe</title>
        <meta
          name="description"
          content="Book reliable airport transfers in Delhi with TaxiTribe. On-time pickups, flight tracking, professional chauffeurs and 24x7 support for IGI Airport."
        />
        <link
          rel="canonical"
          href="https://taxitribe.in/services/airport-transfers/delhi"
        />
      </Helmet>

      {/* ================= HERO ================= */}
            <div className="relative min-h-[70vh] pt-28 md:pt-14 pb-24 md:pb-14 flex items-center">
        <img
          src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=2000&q=70"
          alt="Airport Transfers in Delhi"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 container mx-auto px-6">
          <nav aria-label="Breadcrumb" className="text-sm text-gray-200 mb-2">
            <ol className="flex items-center gap-2">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li className="text-gray-400">/</li>
              <li>
                <a href="/services/airport-transfers" className="hover:underline">
                  Airport Transfers
                </a>
              </li>
              <li className="text-gray-400">/</li>
              <li className="font-semibold text-amber-300">Delhi</li>
            </ol>
          </nav>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white max-w-4xl">
            Airport Transfers in <span className="text-amber-500">Delhi</span>
          </h1>

          <p className="mt-6 text-lg text-gray-200 max-w-3xl">
            On-time, stress-free airport pickup and drop services for IGI Airport —
            trusted by corporates, executives and frequent flyers across Delhi NCR.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => setDialogOpen(true)}
              className="bg-amber-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-amber-700 transition"
            >
              Book Airport Transfer
            </button>

            <a
              href="tel:+917011438890"
              className="px-8 py-4 border border-white/30 text-white rounded-lg hover:bg-white/10 transition"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>

      {/* ================= ABOUT SERVICE ================= */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Professional Airport Transfers in Delhi for Hassle-Free Travel
            </h2>

            <p className="text-gray-700 mb-4 leading-relaxed">
              Navigating Delhi traffic while catching a flight or arriving after a
              long journey can be exhausting. TaxiTribe’s airport transfer services
              in Delhi are designed to remove uncertainty and delays from airport travel.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed">
              Whether it’s an early morning departure, late-night arrival or tight
              business schedule, our chauffeurs ensure punctual pickups and smooth
              drops at Indira Gandhi International Airport (IGI).
            </p>

            <p className="text-gray-700 leading-relaxed">
              From individual travelers to corporate airport transfers at scale,
              TaxiTribe delivers consistency, safety and premium service across
              Delhi NCR.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-sm">
            <img
              src="/airport-transfer.jpg"
              alt="Delhi airport taxi service"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* ================= WHY CHOOSE ================= */}
      <div className="bg-white border-t border-b border-gray-100">
        <div className="container mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center mb-6">
            Why Choose TaxiTribe for Airport Transfers in Delhi?
          </h2>

          <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            Our airport transfer service is engineered for punctuality, safety and
            peace of mind — especially for time-critical airport journeys.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <FaClock />, text: "Real-time flight tracking & adjusted pickup times" },
              { icon: <FaUserTie />, text: "Professional, background-verified chauffeurs" },
              { icon: <FaShieldAlt />, text: "Clean, insured vehicles with safety protocols" },
              { icon: <FaHeadset />, text: "24×7 operations support & live coordination" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mb-4 text-2xl">
                  {item.icon}
                </div>
                <p className="text-sm text-gray-700">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= HOW IT WORKS ================= */}
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-6">
          How Airport Transfers Work with TaxiTribe
        </h2>

        <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
          A streamlined process designed for both individual travelers and corporate teams.
        </p>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              title: "Booking Confirmation",
              desc: "Share flight details, pickup location and preferred vehicle.",
            },
            {
              title: "Flight Monitoring",
              desc: "We track your flight for delays or early arrivals.",
            },
            {
              title: "On-Time Pickup",
              desc: "Chauffeur arrives as per updated flight schedule.",
            },
            {
              title: "Safe Drop",
              desc: "Smooth transfer to or from IGI Airport terminals.",
            },
          ].map((step, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl p-6 text-center"
            >
              <div className="w-12 h-12 mx-auto rounded-full bg-amber-600 text-white flex items-center justify-center font-bold mb-4">
                {i + 1}
              </div>
              <h4 className="font-semibold mb-2">{step.title}</h4>
              <p className="text-gray-700 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= GLOBAL SERVICES ================= */}
      <div className="bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <GlobalAvailabilitySection theme="light" />
        </div>
      </div>

      {/* ================= SOPs & BEST PRACTICES ================= */}
      <SOPsSection variant="full" />
      <BestPracticesSection />

      {/* ================= FINAL CTA ================= */}
      <div className="container mx-auto px-6 pb-24">
        <div className="bg-amber-600/10 border border-amber-200 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need a Reliable Airport Taxi in Delhi?
          </h2>
          <p className="text-gray-700 mb-8">
            On-time pickups. Trained chauffeurs. Airport-ready operations.
          </p>
          <button
            onClick={() => setDialogOpen(true)}
            className="bg-amber-600 text-white px-10 py-4 rounded-lg font-bold hover:bg-amber-700 transition"
          >
            Book Airport Transfer
          </button>
        </div>
      </div>

      {/* ================= BOOKING DIALOG ================= */}
      <BookingDialog
        open={dialogOpen}
        model="Airport Transfer – Delhi"
        onOpenChange={setDialogOpen}
        onSubmit={() => setDialogOpen(false)}
      />
    </section>
  );
}
