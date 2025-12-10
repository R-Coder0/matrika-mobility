import React from "react";

function BookingForm() {
  return (
    <div className="w-full bg-white rounded-2xl shadow-xl border border-gray-100 p-5 md:p-6">
      {/* Top accent bar */}
      <div className="h-1.5 rounded-full bg-linear-to-r from-[#FFD400] via-[#FFC533] to-[#FFB100] mb-4" />

      <h3 className="text-lg md:text-xl font-semibold text-gray-900">
        Book Taxi in Bangalore
      </h3>
      <p className="text-[11px] md:text-xs text-gray-500 mt-1">
        Enter details & get instant confirmation on WhatsApp / Call.
      </p>

      <form className="mt-4 space-y-3.5 text-sm">
        {/* Name + Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-[#FFD400] focus:bg-white focus:ring-2 focus:ring-[#FFD400]/40 transition"
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-[#FFD400] focus:bg-white focus:ring-2 focus:ring-[#FFD400]/40 transition"
            required
          />
        </div>

        <input
          type="text"
          placeholder="Pickup Location"
          className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-[#FFD400] focus:bg-white focus:ring-2 focus:ring-[#FFD400]/40 transition"
          required
        />
        <input
          type="text"
          placeholder="Drop Location"
          className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-[#FFD400] focus:bg-white focus:ring-2 focus:ring-[#FFD400]/40 transition"
          required
        />

        <input
          type="datetime-local"
          className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-xs md:text-sm focus:outline-none focus:border-[#FFD400] focus:bg-white focus:ring-2 focus:ring-[#FFD400]/40 transition"
        />

        <select
          className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-700 focus:outline-none focus:border-[#FFD400] focus:bg-white focus:ring-2 focus:ring-[#FFD400]/40 transition"
        >
          <option value="">Select Car Type</option>
          <option value="sedan">Sedan</option>
          <option value="suv">SUV</option>
          <option value="premium">Premium</option>
        </select>

        <textarea
          rows={3}
          placeholder="Any special requirement?"
          className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-[#FFD400] focus:bg-white focus:ring-2 focus:ring-[#FFD400]/40 transition resize-none"
        />

        <button
          type="submit"
          className="w-full bg-linear-to-r from-[#FFD400] via-[#FFC533] to-[#FFB100] text-black py-2.5 rounded-xl font-semibold shadow-md hover:shadow-lg hover:brightness-105 transition"
        >
          Get Best Fare
        </button>

        <p className="text-[10px] md:text-[11px] text-gray-400 text-center mt-1">
          By continuing, you agree to receive updates on WhatsApp / SMS.
        </p>
      </form>
    </div>
  );
}

export default function BangaloreTaxiPage() {
  const city = "Bangalore";
  const state = "Karnataka";

  return (
    <div className="bg-[#F9FAFB] min-h-screen">
      {/* HERO */}
      <section className="relative w-full bg-slate-900 text-white">
        <div className="absolute inset-0">
          {/* Change image path */}
          <div className="w-full h-full bg-[url('/taxitribe-bangalore-hero.webp')] bg-cover bg-center opacity-40" />
        </div>
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative container mx-auto px-4 py-10 lg:py-14">
          <div className="max-w-3xl bg-black/30 backdrop-blur-sm rounded-2xl p-4 md:p-5">
            <p className="text-[11px] md:text-xs uppercase tracking-[0.2em] text-[#FFD400] mb-2">
              TaxiTribe · City Taxi Service
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
              Reliable Taxi Service in {city}
            </h1>
            <p className="mt-3 text-sm md:text-base text-gray-100 max-w-xl">
              Airport transfers, office commute, local trips and outstation cabs in{" "}
              {city}, {state}. Polite drivers, clean cars and transparent pricing –
              book your ride in just a few clicks.
            </p>

            <div className="mt-4 flex flex-wrap gap-3 text-xs md:text-sm">
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20">
                24×7 Service
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20">
                Instant Booking
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20">
                Verified Drivers
              </span>
            </div>
          </div>

          {/* Mobile form */}
          <div className="mt-6 lg:hidden">
            <BookingForm />
          </div>
        </div>
      </section>

      {/* MAIN LAYOUT */}
      <section className="container mx-auto px-4 py-8 lg:py-12">
        <div className="grid lg:grid-cols-[minmax(0,2fr)_minmax(360px,1fr)] gap-8">

          {/* LEFT: SCROLL CONTENT */}
          <div className="space-y-10 text-sm md:text-base leading-relaxed">

            {/* Section 1 */}
            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
                Taxi Services Available in {city}
              </h2>
              <p className="mt-3 text-gray-700">
                TaxiTribe provides seamless taxi services for daily commute, airport
                runs, business travel and weekend getaways in {city} & nearby areas.
              </p>

              <div className="mt-4 grid sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Local City Rides",
                    desc: "Affordable AC cabs for local trips, meetings and daily travel.",
                  },
                  {
                    title: "Airport Transfers (BLR)",
                    desc: "On-time pickups & drops to Kempegowda Airport from all locations.",
                  },
                  {
                    title: "Outstation Cabs",
                    desc: "Ideal for one-way or round trips to Mysore, Coorg, Ooty, etc.",
                  },
                  {
                    title: "Corporate & Event Travel",
                    desc: "Reliable fleet with professional drivers for offices and events.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm hover:shadow-md transition"
                  >
                    <h3 className="font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
                Why Choose TaxiTribe in {city}?
              </h2>
              <ul className="mt-3 space-y-2 text-gray-700 list-disc list-inside">
                <li>Verified drivers with excellent route knowledge.</li>
                <li>Fixed pricing – no hidden surge or surprises.</li>
                <li>Clean, comfortable and well-maintained cars.</li>
                <li>24×7 support for booking and travel assistance.</li>
              </ul>
            </section>

            {/* Section 3 – Areas we serve */}
            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
                Popular Areas We Serve in {city}
              </h2>
              <p className="mt-3 text-gray-700">
                We provide pick-up and drop across major areas in Bangalore.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                {[
                  "Whitefield",
                  "Indiranagar",
                  "Koramangala",
                  "Electronic City",
                  "Marathahalli",
                  "HSR Layout",
                  "MG Road",
                  "JP Nagar",
                  "Hebbal",
                  "Yelahanka",
                ].map((area) => (
                  <span
                    key={area}
                    className="px-3 py-1 rounded-full bg-white border border-gray-200"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </section>

            {/* Section 4 – FAQs short */}
            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
                Common Questions About Taxi in {city}
              </h2>
              <div className="mt-4 space-y-3">
                <details className="bg-white border border-gray-200 rounded-lg p-3">
                  <summary className="font-medium text-gray-900 text-sm cursor-pointer">
                    How do I book a cab in {city}?
                  </summary>
                  <p className="mt-2 text-xs text-gray-700">
                    Fill the form on the right or call our support team. Driver &
                    cab details will be shared before pickup.
                  </p>
                </details>
                <details className="bg-white border border-gray-200 rounded-lg p-3">
                  <summary className="font-medium text-gray-900 text-sm cursor-pointer">
                    Do you offer airport taxis in {city}?
                  </summary>
                  <p className="mt-2 text-xs text-gray-700">
                    Yes, we offer 24×7 airport transfers for Kempegowda Airport with fixed pricing.
                  </p>
                </details>
                <details className="bg-white border border-gray-200 rounded-lg p-3">
                  <summary className="font-medium text-gray-900 text-sm cursor-pointer">
                    Can I book an outstation cab?
                  </summary>
                  <p className="mt-2 text-xs text-gray-700">
                    Absolutely. We offer round trips and one-way cabs for Mysore,
                    Coorg, Ooty, Mangalore and more.
                  </p>
                </details>
              </div>
            </section>
          </div>

          {/* RIGHT: STICKY FORM */}
          <div className="hidden lg:block">
            <div className="sticky top-24">
              <BookingForm />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
