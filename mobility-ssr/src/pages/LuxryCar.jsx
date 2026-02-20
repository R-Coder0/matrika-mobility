import React, { useState } from "react";
import { CheckCircle } from "lucide-react";
import TestimonialLuxryCar from "../components/landingpage/TestimonialLuxryCar";
import LuxuryCarHero from "../components/landingpage/LuxryCarHero";

export default function LuxryCarLandingPage() {
  return (
    <div className="w-full font-sans bg-[#FFFAFA] text-black">
      <Helmet>
        <title>
          Luxury Car Rental in India | Premium Chauffeur-Driven Cars - TaxiTribe
        </title>

        <meta
          name="description"
          content="Rent luxury cars with professional chauffeurs for weddings, corporate events, airport transfers and special occasions. Premium sedans & SUVs available across major cities in India."
        />

        <link
          rel="canonical"
          href="https://taxitribe.in/luxury-car"
        />
      </Helmet>
      {/* ===== HERO ===== */}
      <LuxuryCarHero />
      {/* ===== WHY CHOOSE TAXI TRIBE (URBANIA) ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Why Choose Taxi Tribe for Luxury Car Rentals?
          </h2>

          {/* Description */}
          <p className="mt-4 text-center text-gray-600 text-lg max-w-3xl mx-auto">
            Luxury travel is not just about the car — it’s about the experience.
            Our premium chauffeur-driven vehicles are curated for weddings, VIP
            transfers, corporate events and special occasions where comfort,
            elegance and professionalism matter the most.
          </p>

          {/* Points */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">

            {[
              "Premium luxury sedans & high-end SUVs available",
              "Professional, uniformed and well-trained chauffeurs",
              "Spotless interiors with premium comfort features",
              "Ideal for weddings, corporate events & VIP travel",
              "Transparent pricing with no hidden charges",
              "24×7 booking assistance & priority customer support",
            ].map((text, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-[#F9F7F3] border border-gray-200 rounded-xl px-6 py-5 shadow-sm hover:shadow-md transition"
              >
                <CheckCircle className="w-6 h-6 text-[#C6A75E] shrink-0 mt-1" />
                <p className="text-lg font-medium text-gray-800 leading-relaxed">
                  {text}
                </p>
              </div>
            ))}

          </div>

          {/* Bottom Trust Line */}
          <p className="mt-12 text-center text-gray-500 text-sm">
            Trusted for premium chauffeur-driven luxury experiences across India.
          </p>

        </div>
      </section>

      {/* ===== LUXURY CAR GALLERY SECTION ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* Section Title with Lines */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-0.5 w-16 bg-gray-800"></span>
            <span className="h-px w-24 bg-gray-300"></span>

            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Our Premium Luxury Car Fleet
            </h2>

            <span className="h-px w-24 bg-gray-300"></span>
            <span className="h-0.5 w-16 bg-gray-800"></span>
          </div>

          <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto">
            Travel in elegance with our curated collection of premium sedans and luxury SUVs.
            Perfect for weddings, VIP airport transfers, corporate events and special occasions
            where comfort, class and professionalism define the journey.
          </p>

          {/* Luxury Car Images */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

            {/* Car 1 */}
            <div>
              <div className="overflow-hidden rounded-2xl shadow-sm">
                <img
                  src="/l2.jpeg"
                  alt="Mercedes Luxury Sedan"
                  className="w-full h-56 object-cover hover:scale-105 transition duration-300"
                />
              </div>
            </div>

            {/* Car 2 */}
            <div>
              <div className="overflow-hidden rounded-2xl shadow-sm">
                <img
                  src="/l3.jpeg"
                  alt="BMW Luxury Car"
                  className="w-full h-56 object-cover hover:scale-105 transition duration-300"
                />
              </div>
            </div>

            {/* Car 3 */}
            <div>
              <div className="overflow-hidden rounded-2xl shadow-sm">
                <img
                  src="/l4.png"
                  alt="Audi Premium Sedan"
                  className="w-full h-56 object-cover hover:scale-105 transition duration-300"
                />
              </div>
            </div>

            {/* Car 4 */}
            <div>
              <div className="overflow-hidden rounded-2xl shadow-sm">
                <img
                  src="/l5.png"
                  alt="Luxury SUV Rental"
                  className="w-full h-56 object-cover hover:scale-105 transition duration-300"
                />
              </div>
            </div>
            {/* Car 5 */}
            <div>
              <div className="overflow-hidden rounded-2xl shadow-sm">
                <img
                  src="/l6.jpeg"
                  alt="Luxury SUV Rental"
                  className="w-full h-56 object-cover hover:scale-105 transition duration-300"
                />
              </div>
            </div>

            {/* Car 7 */}
            <div>
              <div className="overflow-hidden rounded-2xl shadow-sm">
                <img
                  src="/l8.jpeg"
                  alt="Luxury SUV Rental"
                  className="w-full h-56 object-cover hover:scale-105 transition duration-300"
                />
              </div>
            </div>
            {/* Car 8 */}
            <div>
              <div className="overflow-hidden rounded-2xl shadow-sm">
                <img
                  src="/l9.jpeg"
                  alt="Luxury SUV Rental"
                  className="w-full h-56 object-cover hover:scale-105 transition duration-300"
                />
              </div>
            </div>
            {/* Car 9 */}
            <div>
              <div className="overflow-hidden rounded-2xl shadow-sm">
                <img
                  src="/l10.jpeg"
                  alt="Luxury SUV Rental"
                  className="w-full h-56 object-cover hover:scale-105 transition duration-300"
                />
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ===== ENQUIRY FORM SECTION (URBANIA) ===== */}
      <section className="py-20 bg-[#F9F7F3]">
        <div className="max-w-4xl mx-auto px-6">

          {/* Title */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-px w-20 bg-gray-300"></span>
            <h2 className="text-2xl md:text-3xl font-bold text-center">
              Get Instant Luxury Car Booking Quote
            </h2>
            <span className="h-px w-20 bg-gray-300"></span>
          </div>

          {/* Subtitle */}
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Planning a wedding, VIP transfer or corporate event?
            Share your travel details and our team will provide a customised
            luxury car rental quote tailored to your requirements.
          </p>

          {/* Form Card */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-8">
            <LuxuryForm />
          </div>

        </div>
      </section>



      <TestimonialLuxryCar />

    </div>
  );
}
function LuxuryForm() {
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
      const res = await fetch("https://taxitribe.in/api/luxury-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        window.gtag?.("event", "conversion", {
          send_to: "AW-17769558353/Z52xCM7OzPgbENHil5lC",
        });
        setMessage("✅ Luxury car enquiry submitted successfully!");
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
      setMessage("❌ Something went wrong. Please try again.");
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
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C6A75E] outline-none"
      />

      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone Number"
        required
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C6A75E] outline-none"
      />

      <input
        type="text"
        name="city"
        value={formData.city}
        onChange={handleChange}
        placeholder="Pickup Location / Travel Route"
        required
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C6A75E] outline-none"
      />

      <textarea
        rows="3"
        name="details"
        value={formData.details}
        onChange={handleChange}
        placeholder="Event Date, Car Preference (Mercedes/BMW/Audi), etc."
        required
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C6A75E] outline-none resize-none"
      ></textarea>

      <div className="text-center pt-4">
        <button
          type="submit"
          disabled={loading}
          className=" bg-[#fe9a00] text-black font-semibold px-10 py-3 rounded-xl hover:shadow-md transition disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Get Luxury Car Quote"}
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

