import React from "react";
import AirportHero from "../components/AirportHero";
import { CheckCircle } from "lucide-react";

export default function AirportPage() {
  return (
    <div className="w-full font-sans bg-[#FFFAFA] text-black">

      {/* ===== HERO ===== */}
      <AirportHero />

      {/* ===== WHY CHOOSE TAXI TRIBE (ABOUT) ===== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Why Choose Taxi Tribe for Airport Transfers?
          </h2>

          {/* Description */}
          <p className="mt-4 text-center text-gray-600 text-lg max-w-3xl mx-auto">
            Taxi Tribe offers reliable, comfortable, and cost-effective airport
            taxi services across India. Whether you are travelling for business
            or personal needs, our airport transfers ensure peace of mind,
            punctuality, and a premium travel experience.
          </p>

          {/* Points */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">

            {[
              "Save money compared to booking multiple taxis",
              "Travel together with family, friends or corporate teams",
              "Premium comfort with spacious seating & luggage space",
              "Perfect for airport pickups, drops & business travel",
            ].map((text, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl px-6 py-5 shadow-sm"
              >
                <CheckCircle className="w-6 h-6 text-[#fe9a00] flex-shrink-0" />
                <p className="text-lg font-medium text-gray-800">
                  {text}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>
      {/* ===== FLEET SECTION ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* Section Title with Lines */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-0.5 w-16 bg-gray-800"></span>
            <span className="h-px w-24 bg-gray-300"></span>

            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Our Airport Transfer Fleet
            </h2>

            <span className="h-px w-24 bg-gray-300"></span>
            <span className="h-0.5 w-16 bg-gray-800"></span>
          </div>

          <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto">
            Premium Mercedes sedans and reliable Innova vehicles for comfortable,
            chauffeur-driven airport transfers.
          </p>

          {/* Fleet Images */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

            {/* Mercedes 1 */}
            <div>
              <div className="overflow-hidden rounded-2xl shadow-sm">
                <img
                  src="/cars/E-450d.avif"
                  alt="Mercedes-Benz E-Class"
                  className="w-full h-56 object-cover hover:scale-105 transition duration-300"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold">
                Mercedes-Benz E-Class
              </h3>
            </div>

            {/* Mercedes 2 */}
            <div>
              <div className="overflow-hidden rounded-2xl shadow-sm">
                <img
                  src="/cars/S-350.jpg"
                  alt="Mercedes-Benz S-Class"
                  className="w-full h-56 object-cover hover:scale-105 transition duration-300"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold">
                Mercedes-Benz S-Class
              </h3>
            </div>

            {/* Mercedes 3 */}
            <div>
              <div className="overflow-hidden rounded-2xl shadow-sm">
                <img
                  src="/cars/merc2026/6.jpeg"
                  alt="Mercedes Luxury Sedan"
                  className="w-full h-56 object-cover hover:scale-105 transition duration-300"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold">
                Mercedes Luxury Sedan
              </h3>
            </div>

            {/* Innova */}
            <div>
              <div className="overflow-hidden rounded-2xl shadow-sm">
                <img
                  src="/cars/innova.jpg"
                  alt="Toyota Innova Crysta"
                  className="w-full h-56 object-cover hover:scale-105 transition duration-300"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold">
                Toyota Innova Crysta
              </h3>
            </div>

          </div>
        </div>
      </section>
      {/* ===== ENQUIRY FORM SECTION ===== */}
      <section className="py-20 bg-[#FFFAFA]">
        <div className="max-w-4xl mx-auto px-6">

          {/* Title */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="h-[1px] w-20 bg-gray-300"></span>
            <h2 className="text-2xl md:text-3xl font-bold text-center">
              Get Instant Airport Taxi Price
            </h2>
            <span className="h-[1px] w-20 bg-gray-300"></span>
          </div>

          {/* Form */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
            <form className="space-y-4">

              {/* Name */}
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fe9a00] outline-none"
              />

              {/* Phone + City */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fe9a00] outline-none"
                />

                <input
                  type="text"
                  placeholder="Travel City"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fe9a00] outline-none"
                />
              </div>

              {/* Trip Details */}
              <textarea
                rows="4"
                placeholder="Trip Details (Pickup, Drop, Date, Passengers)"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fe9a00] outline-none resize-none"
              ></textarea>

              {/* Submit */}
              <div className="text-center pt-4">
                <button
                  type="button"
                  className="bg-[#fe9a00] text-black font-semibold px-10 py-3 rounded-xl hover:shadow-md transition"
                >
                  Submit Inquiry
                </button>
              </div>

            </form>
          </div>
        </div>
      </section>

    </div>
  );
}
