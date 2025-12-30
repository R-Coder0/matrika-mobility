import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import {
  FaPlaneArrival,
  FaPlaneDeparture,
  FaClock,
  FaUserTie,
  FaShieldAlt,
  FaHeadset,
  FaRoute,
  FaQuestionCircle,
} from "react-icons/fa";
import BookingDialog from "../../components/BookingCar";
import GlobalAvailabilitySection from "../../components/Map";
import SOPsSection from "../SOPsSection";
import BestPracticesSection from "../../components/BestPractise";

export default function AirportTransfersGurugram() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <section className="bg-white text-gray-900">

      {/* ================= SEO ================= */}
      <Helmet>
        <title>Airport Transfers in Gurugram | IGI Airport Taxi Service – TaxiTribe</title>
        <meta
          name="description"
          content="Reliable airport transfers from Gurugram to IGI Airport with TaxiTribe. On-time pickups, flight tracking, corporate chauffeurs & 24x7 support."
        />
        <link
          rel="canonical"
          href="https://taxitribe.in/airport-transport-in-gurugram"
        />
      </Helmet>

      {/* ================= HERO ================= */}
            <div className="relative min-h-[70vh] pt-28 md:pt-14 pb-24 md:pb-14 flex items-center">
        <img
          src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=2000&q=70"
          alt="Airport Transfers in Gurugram"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 container mx-auto px-6">
          <nav className="text-sm text-gray-200 mb-2">
            <ol className="flex gap-2">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li className="text-gray-400">/</li>
              <li>
                <a href="/services/airport-transfers" className="hover:underline">
                  Airport Transfers
                </a>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-amber-300 font-semibold">Gurugram</li>
            </ol>
          </nav>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white max-w-4xl">
            Airport Transfers in <span className="text-amber-500">Gurugram</span>
          </h1>

          <p className="mt-6 text-lg text-gray-200 max-w-3xl">
            Premium, punctual airport taxi service from Gurugram to IGI Airport —
            trusted by corporates, CXOs and frequent international travelers.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => setDialogOpen(true)}
              className="bg-amber-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-amber-700 transition"
            >
              Book Airport Taxi
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

      {/* ================= ABOUT ================= */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Reliable Airport Transfers from Gurugram to IGI Airport
            </h2>

            <p className="text-gray-700 mb-4 leading-relaxed">
              Gurugram is home to India’s largest corporate offices, MNC headquarters,
              IT parks and business hubs. Airport travel from Gurugram requires precise
              timing, experienced chauffeurs and real-time coordination.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed">
              TaxiTribe’s airport transfer service in Gurugram is built for time-critical
              travel — whether it’s an early morning international departure or a late-night
              arrival from a long-haul flight.
            </p>

            <p className="text-gray-700 leading-relaxed">
              With flight monitoring, route planning and trained chauffeurs, we ensure
              smooth airport journeys across DLF Phases, Golf Course Road, Sohna Road,
              Udyog Vihar and Cyber City.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-sm">
            <img
              src="/airport-transfer-gurugram.jpg"
              alt="Gurugram to IGI airport taxi"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* ================= WHY CHOOSE ================= */}
      <div className="bg-white border-t border-b border-gray-100">
        <div className="container mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center mb-6">
            Why Choose TaxiTribe for Airport Transfers in Gurugram?
          </h2>

          <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
            Our airport transfer operations are optimized for Gurugram’s
            corporate travel demands and high-frequency airport movement.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <FaClock />, text: "Live flight tracking & delay adjustment" },
              { icon: <FaUserTie />, text: "Corporate-trained professional chauffeurs" },
              { icon: <FaShieldAlt />, text: "Insured, sanitized & GPS-enabled vehicles" },
              { icon: <FaHeadset />, text: "24×7 operations desk & escalation support" },
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
          How Airport Transfers Work in Gurugram
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            { title: "Share Travel Details", desc: "Pickup location, flight number & timing." },
            { title: "Flight Tracking", desc: "We monitor flight status in real time." },
            { title: "On-Time Pickup", desc: "Driver arrives as per updated schedule." },
            { title: "Comfortable Drop", desc: "Smooth transfer to IGI Airport terminals." },
          ].map((step, i) => (
            <div key={i} className="bg-white border rounded-xl p-6 text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-amber-600 text-white flex items-center justify-center mb-4">
                {i + 1}
              </div>
              <h4 className="font-semibold mb-2">{step.title}</h4>
              <p className="text-sm text-gray-700">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= FAQs ================= */}
      <div className="bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            FAQs – Airport Transfers in Gurugram
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                q: "How long does it take to reach IGI Airport from Gurugram?",
                a: "Travel time typically ranges from 25 to 60 minutes depending on pickup location, traffic and time of day.",
              },
              {
                q: "Do you provide airport transfers for corporate executives?",
                a: "Yes. We specialize in CXO and corporate airport transfers with premium vehicles, trained chauffeurs and invoicing.",
              },
              {
                q: "Do you operate early morning and late-night airport taxis?",
                a: "Absolutely. TaxiTribe airport transfers operate 24x7, including red-eye and early international departures.",
              },
              {
                q: "Which areas of Gurugram do you cover?",
                a: "We cover DLF Phases 1–5, Golf Course Road, Cyber City, Udyog Vihar, Sohna Road, New Gurgaon and surrounding areas.",
              },
              {
                q: "Is flight delay adjustment included?",
                a: "Yes. We track your flight and adjust pickup timing automatically at no extra cost.",
              },
            ].map((faq, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-6">
                <h4 className="font-semibold flex items-center gap-2 mb-2">
                  <FaQuestionCircle className="text-amber-500" />
                  {faq.q}
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= GLOBAL SERVICES ================= */}
      <GlobalAvailabilitySection theme="light" />

      {/* ================= SOPs & PRACTICES ================= */}
      <SOPsSection variant="full" />
      <BestPracticesSection />

      {/* ================= FINAL CTA ================= */}
      <div className="container mx-auto px-6 pb-24">
        <div className="bg-amber-600/10 border border-amber-200 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need a Trusted Airport Taxi from Gurugram?
          </h2>
          <p className="text-gray-700 mb-8">
            On-time pickups. Corporate-grade service. Airport-ready operations.
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
        model="Airport Transfer – Gurugram"
        onOpenChange={setDialogOpen}
        onSubmit={() => setDialogOpen(false)}
      />
    </section>
  );
}
