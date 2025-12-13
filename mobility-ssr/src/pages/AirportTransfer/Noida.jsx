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

export default function AirportTransfersNoida() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <section className="bg-white text-gray-900">

      {/* ================= SEO ================= */}
      <Helmet>
        <title>Airport Transfers in Noida | IGI Airport Taxi Service – TaxiTribe</title>
        <meta
          name="description"
          content="Book reliable airport transfers from Noida to IGI Airport with TaxiTribe. On-time pickups, flight tracking, professional chauffeurs & 24x7 support."
        />
        <link
          rel="canonical"
          href="https://taxitribe.in/services/airport-transfers/noida"
        />
      </Helmet>

      {/* ================= HERO ================= */}
            <div className="relative min-h-[70vh] pt-28 md:pt-14 pb-24 md:pb-14 flex items-center">
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=2000&q=70"
          alt="Airport Transfers in Noida"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 container mx-auto px-6">
          <nav className="text-sm text-gray-200 mb-2">
            <ol className="flex gap-2">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li className="text-gray-400">/</li>
              <li><a href="/services/airport-transfers" className="hover:underline">Airport Transfers</a></li>
              <li className="text-gray-400">/</li>
              <li className="text-amber-300 font-semibold">Noida</li>
            </ol>
          </nav>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white max-w-4xl">
            Airport Transfers in <span className="text-amber-500">Noida</span>
          </h1>

          <p className="mt-6 text-lg text-gray-200 max-w-3xl">
            Reliable, on-time airport taxi service from Noida to IGI Airport —
            built for corporates, professionals and frequent flyers.
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
              Stress-Free Airport Transfers from Noida to IGI Airport
            </h2>

            <p className="text-gray-700 mb-4 leading-relaxed">
              Traveling between Noida and IGI Airport often involves long distances,
              traffic congestion and unpredictable delays. TaxiTribe’s airport
              transfer service in Noida is designed to eliminate these challenges.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed">
              Our experienced chauffeurs plan routes intelligently, monitor flight
              schedules in real time and ensure timely pickups whether you’re flying
              early morning or landing late at night.
            </p>

            <p className="text-gray-700 leading-relaxed">
              From individual travelers to enterprise airport movement for teams,
              TaxiTribe provides dependable airport transportation across Noida,
              Greater Noida and Noida Extension.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-sm">
            <img
              src="/airport-transfer-noida.jpg"
              alt="Noida to IGI airport taxi"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* ================= WHY CHOOSE ================= */}
      <div className="bg-white border-t border-b border-gray-100">
        <div className="container mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center mb-6">
            Why Choose TaxiTribe for Airport Transfers in Noida?
          </h2>

          <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
            Our airport taxi operations are designed for punctuality,
            professionalism and passenger comfort.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <FaClock />, text: "Flight tracking & dynamic pickup timing" },
              { icon: <FaUserTie />, text: "Professional, background-verified chauffeurs" },
              { icon: <FaShieldAlt />, text: "Safe, clean & insured vehicles" },
              { icon: <FaHeadset />, text: "24×7 control room & support team" },
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
          How Airport Transfers Work
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            { title: "Book Your Ride", desc: "Share pickup location & flight details." },
            { title: "Flight Monitoring", desc: "We track delays & early arrivals." },
            { title: "Timely Pickup", desc: "Driver arrives as per updated schedule." },
            { title: "Smooth Drop", desc: "Comfortable transfer to IGI terminals." },
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



      {/* ================= GLOBAL SERVICES ================= */}
      <GlobalAvailabilitySection theme="light" />

      {/* ================= SOPs & PRACTICES ================= */}
      <SOPsSection variant="full" />
      <BestPracticesSection />
      {/* ================= FAQs ================= */}
      <div className="bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions – Airport Transfers in Noida
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                q: "How early should I book an airport taxi from Noida?",
                a: "We recommend booking at least 4–6 hours in advance. However, we also support last-minute airport transfers subject to availability.",
              },
              {
                q: "Do you track flight delays for airport pickups?",
                a: "Yes. We monitor live flight status and adjust driver arrival times accordingly, ensuring you are never charged for delays.",
              },
              {
                q: "Which areas of Noida do you cover?",
                a: "We cover Noida, Greater Noida, Noida Extension, Sector-based societies, IT parks and corporate hubs.",
              },
              {
                q: "Are your airport transfer services available at night?",
                a: "Absolutely. Our airport taxi service operates 24x7, including early morning and late-night pickups.",
              },
              {
                q: "Is this service suitable for corporate airport travel?",
                a: "Yes. TaxiTribe specializes in corporate airport transfers with invoicing, SLAs and dedicated support teams.",
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
      {/* ================= FINAL CTA ================= */}
      <div className="container mx-auto px-6 pb-24">
        <div className="bg-amber-600/10 border border-amber-200 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Book a Reliable Airport Taxi from Noida Today
          </h2>
          <p className="text-gray-700 mb-8">
            On-time arrivals. Professional chauffeurs. Airport-ready operations.
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
        model="Airport Transfer – Noida"
        onOpenChange={setDialogOpen}
        onSubmit={() => setDialogOpen(false)}
      />
    </section>
  );
}
