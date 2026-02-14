import React from "react";
import { Phone, ArrowRight, Star, ShieldCheck, MapPin, PhoneCallIcon } from "lucide-react";

export default function WeddingCarHero() {
  return (
    <section className="relative w-full overflow-hidden bg-linear-to-b from-[#F7FAFF] to-white">

      {/* Soft Background Glow */}
      <div className="absolute top-[-200px] right-[-200px] w-[500px] h-[500px] bg-[#fe9a00]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* ================= LEFT CONTENT ================= */}
          {/* ================= LEFT CONTENT ================= */}
          <div>

            {/* Badge */}
            <span className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 text-sm font-semibold rounded-full bg-pink-50 text-pink-600">
              <ShieldCheck className="w-4 h-4" />
              Luxury Wedding Car Rental • PAN India
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
  Arrive In Style,
  <span className="block text-[#fe9a00]">
    Luxury Wedding Cars
  </span>
</h1>


            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              Make your wedding grand and unforgettable with our premium wedding car rentals.
              From luxury sedans to royal vintage cars, we provide beautifully decorated vehicles
              with professional chauffeurs for your special day.
            </p>

            {/* Trust Points */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#fe9a00]" />
                Bride & Groom Special Entry Cars
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#fe9a00]" />
                Decorated Cars With Professional Chauffeurs
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-5">

              {/* Call CTA */}
              <a
                href="tel:+917011438890"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl
      bg-[#fe9a00] text-black font-bold text-lg
      shadow-lg hover:shadow-xl transition"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>

              {/* Quote CTA */}
              <a
                href="mailto:sales@taxitribe.com?subject=Wedding%20Car%20Booking%20Enquiry"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl
      bg-white text-black font-bold text-lg
      border-2 border-[#fe9a00]
      shadow-md hover:shadow-xl transition"
              >
                Get Quote
                <ArrowRight className="w-5 h-5" />
              </a>

            </div>

            {/* Micro Trust Text */}
            <p className="mt-4 text-xs text-gray-400">
              Luxury Fleet • On-Time Arrival • Elegant Decoration Options
            </p>

          </div>


          {/* ================= RIGHT IMAGE ================= */}
          <div className="relative">

            <img
              src="/landingpage/merc.jpg"
              alt="Outstation Cab Service"
              className="w-full rounded-3xl shadow-2xl object-cover"
            />

            {/* Floating Trust Card */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-4 border">
              <div className="w-11 h-11 rounded-xl bg-[#fe9a00] flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-xl font-bold">1,200+</p>
                <p className="text-sm text-gray-500">Weddings Served</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
