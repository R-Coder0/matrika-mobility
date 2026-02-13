import React from "react";
import { Phone, ArrowRight, Star, ShieldCheck, Crown, PhoneCallIcon } from "lucide-react";

export default function LuxuryHero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#F9F7F3] to-white">
      
      {/* Soft Gold Background Glow */}
      <div className="absolute top-[-200px] right-[-200px] w-[500px] h-[500px] bg-[#C6A75E]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* ================= LEFT CONTENT ================= */}
          <div>

            {/* Premium Badge */}
            <span className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 text-sm font-semibold rounded-full bg-black text-white">
              <Crown className="w-4 h-4" />
              Premium Luxury Car Rentals • PAN India
            </span>

            <br />

            {/* Phone Badge */}
            <a 
              href="tel:+917011438890" 
              className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 text-lg font-bold rounded-full bg-green-50 text-green-700"
            >
              <PhoneCallIcon className="w-4 h-4" />
              +91 70114 38890
            </a>

            {/* Headline */}
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-gray-900">
              Experience Luxury Travel,
              <span className="block text-[#C6A75E]">
                Redefined with Chauffeur Excellence
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              Book premium luxury cars for weddings, corporate events, VIP transfers 
              and special occasions. Travel in unmatched comfort with professional 
              chauffeurs, spotless interiors and elite service standards.
            </p>

            {/* Trust Points */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C6A75E]" />
                Professional Uniformed Chauffeurs
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-[#C6A75E]" />
                Premium Sedans & Luxury SUVs
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-5">

              {/* Call CTA */}
              <a
                href="tel:+917011438890"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl
                bg-[#C6A75E] text-black font-bold text-lg
                shadow-lg hover:shadow-xl transition"
              >
                <Phone className="w-5 h-5" />
                Call & Book Luxury Car
              </a>

              {/* Quote CTA */}
              <a
                href="mailto:sales@taxitribe.in?subject=Luxury%20Car%20Booking%20Enquiry"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl
                bg-white text-black font-bold text-lg
                border-2 border-[#C6A75E]
                shadow-md hover:shadow-xl transition"
              >
                Get Luxury Quote
                <ArrowRight className="w-5 h-5" />
              </a>

            </div>

            {/* Micro Trust Text */}
            <p className="mt-4 text-xs text-gray-400">
              Ideal for Weddings • Corporate Events • VIP Transfers
            </p>

          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="relative">

            <img
              src="/l7.png"
              alt="Luxury Car Rental Service"
              className="w-full rounded-3xl shadow-2xl object-cover"
            />

            {/* Floating Trust Card */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-4 border">
              <div className="w-11 h-11 rounded-xl bg-[#C6A75E] flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-xl font-bold">500+</p>
                <p className="text-sm text-gray-500">Luxury Bookings Completed</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
