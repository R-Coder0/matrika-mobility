import React, { useState } from "react";
import { CheckCircle } from "lucide-react";
import TestimonialSlider from "../components/landingpage/TestimonialOutStation";
import OutstationHero from "../components/landingpage/OutStation";

export default function OutStationLandingPage() {
  return (
    <div className="w-full font-sans bg-[#FFFAFA] text-black">

      {/* ===== HERO ===== */}
      <OutstationHero />
      {/* ===== WHY CHOOSE TAXI TRIBE (OUTSTATION) ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Why Choose Taxi Tribe for Outstation Travel?
          </h2>

          {/* Description */}
          <p className="mt-4 text-center text-gray-600 text-lg max-w-3xl mx-auto">
            Long-distance travel requires planning, safety and complete peace of mind.
            Taxi Tribe provides dependable outstation taxi services designed for families,
            corporate teams and weekend travelers who value comfort, punctuality and
            transparent pricing across every journey.
          </p>

          {/* Points */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">

            {[
              "One-way & round-trip options with flexible scheduling",
              "Transparent per-kilometer pricing — no hidden charges",
              "Experienced highway drivers with verified background checks",
              "Well-maintained, sanitized vehicles for long-distance comfort",
              "Ideal for family trips, business travel & weekend getaways",
              "24×7 customer support throughout your journey",
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
            Trusted by families, corporate travelers & long-distance commuters across India.
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
              Our Outstation Travel Fleet
            </h2>

            <span className="h-px w-24 bg-gray-300"></span>
            <span className="h-0.5 w-16 bg-gray-800"></span>
          </div>

          <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto">
            Travel comfortably with our well-maintained sedans, premium SUVs,
            spacious Innova and Force Urbania vehicles — perfect for family trips,
            corporate travel and long-distance journeys.
          </p>



          {/* Fleet Images */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

            {/* Urbania */}
            <div>
              <div className="overflow-hidden rounded-2xl shadow-sm">
                <img
                  src="/cars/urbania.avif"
                  alt="Urbania"
                  className="w-full h-56 object-cover hover:scale-105 transition duration-300"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold">
                Urbania
              </h3>
            </div>

            {/* Mercedes 2 */}
            <div>
              <div className="overflow-hidden rounded-2xl shadow-sm">
                <img
                  src="/cars/invicto.jpg"
                  alt="Toyota Hycross"
                  className="w-full h-56 object-cover hover:scale-105 transition duration-300"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold">
                Invicto
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
              Get Instant Outstation Taxi Quote
            </h2>
            <span className="h-px w-20 bg-gray-300"></span>
          </div>

          {/* Form Card */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
            <OutstationForm />
          </div>

        </div>
      </section>

      <TestimonialSlider />

    </div>
  );
}
function OutstationForm() {
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
      const res = await fetch("https://taxitribe.in/api/outstation-enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
          window.gtag?.("event", "conversion", {
    send_to: "AW-17769558353/Z52xCM7OzPgbENHil5lC",
  });
        setMessage("✅ Outstation enquiry submitted successfully!");
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

      {/* Name */}
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Name"
        required
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fe9a00] outline-none"
      />

      {/* Phone */}
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone Number"
        required
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fe9a00] outline-none"
      />

      {/* Travel City */}
      <input
        type="text"
        name="city"
        value={formData.city}
        onChange={handleChange}
        placeholder="Travel Route (e.g. Delhi to Jaipur)"
        required
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fe9a00] outline-none"
      />

      {/* Trip Details */}
      <textarea
        rows="3"
        name="details"
        value={formData.details}
        onChange={handleChange}
        placeholder="Trip Date, Passengers, Vehicle Preference, etc."
        required
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fe9a00] outline-none resize-none"
      ></textarea>

      {/* Submit */}
      <div className="text-center pt-4">
        <button
          type="submit"
          disabled={loading}
          className="bg-[#fe9a00] text-black font-semibold px-10 py-3 rounded-xl hover:shadow-md transition disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Get Quote"}
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

