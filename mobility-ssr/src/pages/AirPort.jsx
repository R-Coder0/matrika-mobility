import React, { useState } from "react";
import AirportHero from "../components/landingpage/AirportHero";
import { CheckCircle } from "lucide-react";
import TestimonialSlider from "../components/landingpage/TestimonialAirport";

export default function AirportPage() {
  return (
    <div className="w-full font-sans bg-[#FFFAFA] text-black">

      {/* ===== HERO ===== */}
      <AirportHero />
      {/* ===== WHY CHOOSE TAXI TRIBE (ABOUT) ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Why Corporates & Business Travelers Prefer Taxi Tribe
          </h2>

          {/* Description */}
          <p className="mt-4 text-center text-gray-600 text-lg max-w-3xl mx-auto">
            At Taxi Tribe, we understand that in business, time is money.
            Our airport transfer solutions are designed for corporates, executives
            and growing companies who demand punctual service, transparent billing
            and a premium travel experience — every single time.
          </p>

          {/* Points */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">

            {[
              "Guaranteed on-time pickups with real-time trip coordination",
              "Dedicated corporate billing with GST invoices & monthly reporting",
              "Professionally trained, uniformed chauffeurs",
              "Fixed transparent pricing — no surge, no hidden charges",
              "Premium Mercedes & Innova fleet for executive comfort",
              "24×7 priority support for urgent & last-minute bookings",
            ].map((text, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-[#FFFAFA] border border-gray-200 rounded-xl px-6 py-5 shadow-sm hover:shadow-md transition"
              >
                <CheckCircle className="w-6 h-6 text-[#fe9a00] shrink-0 mt-1" />
                <p className="text-lg font-medium text-gray-800 leading-relaxed">
                  {text}
                </p>
              </div>
            ))}

          </div>

          {/* Bottom Trust Line */}
          <p className="mt-12 text-center text-gray-500 text-sm">
            Trusted by growing startups, corporate teams & frequent executive travelers across India.
          </p>

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
                  src="/cars/Fortuner.avif"
                  alt="Mercedes-Benz E-Class"
                  className="w-full h-56 object-cover hover:scale-105 transition duration-300"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold">
                Toyota Fortuner
              </h3>
            </div>

            {/* Mercedes 2 */}
            <div>
              <div className="overflow-hidden rounded-2xl shadow-sm">
                <img
                  src="/cars/hycross.avif"
                  alt="Toyota Hycross"
                  className="w-full h-56 object-cover hover:scale-105 transition duration-300"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold">
                Toyota Hycross
              </h3>
            </div>

            {/* Mercedes 3 */}
            <div>
              <div className="overflow-hidden rounded-2xl shadow-sm">
                <img
                  src="/cars/dezire.jpg"
                  alt="Swift Dzire"
                  className="w-full h-56 object-cover hover:scale-105 transition duration-300"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold">
                Swift Dzire
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
                Toyota Innova
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
      <span className="h-px w-20 bg-gray-300"></span>
      <h2 className="text-2xl md:text-3xl font-bold text-center">
        Get Instant Airport Taxi Price
      </h2>
      <span className="h-px w-20 bg-gray-300"></span>
    </div>

    {/* Form Card */}
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8">

      <AirportForm />

    </div>
  </div>
</section>

      <TestimonialSlider />

    </div>
  );
}
function AirportForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    details: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("http://localhost:5000/api/airport-enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setMessage("✅ Enquiry submitted successfully!");
        setFormData({
          name: "",
          phone: "",
          city: "",
          details: "",
        });
      } else {
        setMessage("❌ Failed to submit enquiry.");
      }
    } catch (error) {
      setMessage("❌ Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Name"
        required
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fe9a00] outline-none"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fe9a00] outline-none"
        />

        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="Travel City"
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fe9a00] outline-none"
        />
      </div>

      <textarea
        rows="4"
        name="details"
        value={formData.details}
        onChange={handleChange}
        placeholder="Trip Details (Pickup, Drop, Date, Passengers)"
        required
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fe9a00] outline-none resize-none"
      ></textarea>

      <div className="text-center pt-4">
        <button
          type="submit"
          disabled={loading}
          className="bg-[#fe9a00] text-black font-semibold px-10 py-3 rounded-xl hover:shadow-md transition disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Submit Inquiry"}
        </button>
      </div>

      {message && (
        <p className="text-center text-sm mt-4">
          {message}
        </p>
      )}
    </form>
  );
}
