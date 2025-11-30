import React from "react";
import { Phone, Mail } from "lucide-react";

export default function WeddingHero() {
  return (
    <section
      className="relative w-full min-h-[80vh] bg-center bg-cover"
      style={{
        backgroundImage: "url('/wedding-car-on-rent-web.webp')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative container mx-auto px-6 py-34">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          
          {/* LEFT SIDE */}
          <div className="text-white z-10 max-w-xl">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Luxury Wedding Cars
            </h1>

            <p className="mt-4 text-lg md:text-xl">
              Elegant, decorated cars with professional chauffeurs — on time, every time.
            </p>

            <ul className="mt-6 space-y-2 text-sm">
              <li className="flex items-center gap-3">
                <span className="inline-block w-2 h-2 rounded-full bg-[#FFD400]" />
                Premium Luxury Fleet (Audi, BMW, Mercedes)
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-block w-2 h-2 rounded-full bg-[#FFD400]" />
                Custom Decoration & Smooth Service
              </li>
            </ul>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="z-10 flex justify-end">
            <div className="w-full max-w-md bg-[#FFFAFA] rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              
              {/* Yellow Top Border */}
              <div className="h-2 bg-[#FFD400]" />

              <div className="p-6">
                <h3 className="text-xl font-semibold text-black">
                  Quick Wedding Quote
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Share the details and we’ll get back immediately.
                </p>

                {/* UPDATED FORM */}
                <form className="mt-5 grid gap-4">
                  
                  {/* 2-Column Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#FFD400]"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#FFD400]"
                    />
                  </div>

                  {/* 2-Column Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#FFD400]"
                    />
                    <input
                      type="date"
                      className="px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#FFD400]"
                    />
                  </div>

                  {/* 2-Column Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Location / City"
                      className="px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#FFD400]"
                    />
                    <input
                      type="text"
                      placeholder="Car Name (Audi, BMW, etc.)"
                      className="px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#FFD400]"
                    />
                  </div>

                  {/* Message */}
                  <textarea
                    placeholder="Message / Special Requirements"
                    rows={3}
                    className="px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#FFD400]"
                  />

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full bg-[#FFD400] text-black py-3 rounded-lg font-semibold shadow-sm hover:shadow-md transition"
                  >
                    Get Quote
                  </button>
                </form>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
