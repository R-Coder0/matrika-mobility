import React, { useState } from "react";
import { CheckCircle } from "lucide-react";
import TestimonialSlider from "../components/landingpage/TestimonialAirport";
import UrbaniaHero from "../components/landingpage/UrbaniaHero";
import TestimonialUrbania from "../components/landingpage/TestimonialAirport copy";

export default function UrbaniaLandingPage() {
  return (
    <div className="w-full font-sans bg-[#FFFAFA] text-black">

      {/* ===== HERO ===== */}
      <UrbaniaHero />
      {/* ===== WHY CHOOSE TAXI TRIBE (URBANIA) ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Why Choose Taxi Tribe for Urbania Rentals?
          </h2>

          {/* Description */}
          <p className="mt-4 text-center text-gray-600 text-lg max-w-3xl mx-auto">
            Group travel demands space, comfort and premium experience.
            Our Force Urbania rentals are designed for weddings, corporate trips,
            family tours and long-distance journeys where comfort and reliability
            matter the most.
          </p>

          {/* Points */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">

            {[
              "Premium 9, 12 & 17 seater Urbania options available",
              "Luxury pushback seats with spacious legroom",
              "Professional, uniformed and verified chauffeurs",
              "Ideal for weddings, corporate events & family tours",
              "Transparent pricing with no hidden charges",
              "24×7 booking assistance & on-trip support",
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
            Trusted for premium group travel experiences across India.
          </p>

        </div>
      </section>


{/* ===== URBANIA GALLERY SECTION ===== */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    {/* Section Title with Lines */}
    <div className="flex items-center justify-center gap-4 mb-6">
      <span className="h-0.5 w-16 bg-gray-800"></span>
      <span className="h-px w-24 bg-gray-300"></span>

      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Our Premium Urbania Fleet
      </h2>

      <span className="h-px w-24 bg-gray-300"></span>
      <span className="h-0.5 w-16 bg-gray-800"></span>
    </div>

    <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto">
      Experience luxury group travel with our well-maintained Force Urbania vehicles.
      Spacious interiors, comfortable pushback seating and ample luggage space —
      perfect for weddings, corporate trips and family tours.
    </p>

    {/* Urbania Images */}
    <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

      {/* Urbania 1 */}
      <div>
        <div className="overflow-hidden rounded-2xl shadow-sm">
          <img
            src="/u1.png"
            alt="Force Urbania Exterior"
            className="w-full h-56 object-cover hover:scale-105 transition duration-300"
          />
        </div>
      </div>

      {/* Urbania 2 */}
      <div>
        <div className="overflow-hidden rounded-2xl shadow-sm">
          <img
            src="/u2.png"
            alt="Urbania Luxury Interior"
            className="w-full h-56 object-cover hover:scale-105 transition duration-300"
          />
        </div>
      </div>

      {/* Urbania 3 */}
      <div>
        <div className="overflow-hidden rounded-2xl shadow-sm">
          <img
            src="/u3.png"
            alt="Urbania Seating Layout"
            className="w-full h-56 object-cover hover:scale-105 transition duration-300"
          />
        </div>
      </div>

      {/* Urbania 4 */}
      <div>
        <div className="overflow-hidden rounded-2xl shadow-sm">
          <img
            src="/u4.png"
            alt="Urbania Group Travel"
            className="w-full h-56 object-cover hover:scale-105 transition duration-300"
          />
        </div>
      </div>

    </div>
  </div>
</section>

      {/* ===== ENQUIRY FORM SECTION (URBANIA) ===== */}
      <section className="py-20 bg-[#FFFAFA]">
        <div className="max-w-4xl mx-auto px-6">

          {/* Title */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-px w-20 bg-gray-300"></span>
            <h2 className="text-2xl md:text-3xl font-bold text-center">
              Get Instant Urbania Booking Quote
            </h2>
            <span className="h-px w-20 bg-gray-300"></span>
          </div>

          {/* Subtitle */}
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Planning a wedding, corporate event or family tour?
            Share your travel details and our team will provide a customised
            Urbania rental quote within minutes.
          </p>

          {/* Form Card */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-8">
            <UrbaniaForm />
          </div>

        </div>
      </section>


      <TestimonialUrbania />

    </div>
  );
}
function UrbaniaForm() {
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
      const res = await fetch("https://taxitribe.in/api/urbania-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setMessage("✅ Urbania enquiry submitted successfully!");
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
        placeholder="Travel Route / City"
        required
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fe9a00] outline-none"
      />

      <textarea
        rows="3"
        name="details"
        value={formData.details}
        onChange={handleChange}
        placeholder="Trip Date, Passengers, etc."
        required
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fe9a00] outline-none resize-none"
      ></textarea>

      <div className="text-center pt-4">
        <button
          type="submit"
          disabled={loading}
          className="bg-[#fe9a00] text-black font-semibold px-10 py-3 rounded-xl hover:shadow-md transition disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Get Urbania Quote"}
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


