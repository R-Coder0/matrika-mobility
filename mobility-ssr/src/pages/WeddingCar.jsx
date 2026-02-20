import React, { useState } from "react";
import { Phone, Mail, MessageCircle, ChevronDown, CheckCircle } from "lucide-react";
import WeddingCarHero from "../components/landingpage/WeddingCarHero";
import TestimonialWeddingCar from "../components/landingpage/TestimonialWeddingCar";
import { Helmet } from 'react-helmet';

export default function WeddingCar() {
    // ================= FORM STATE =================
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        city: "",
        date: "",
    });

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ type: "", message: "" });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setStatus({ type: "", message: "" });

  try {
    const res = await fetch("https://taxitribe.in/api/wedding-enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok || !data?.success) {
      throw new Error(data?.message || "Failed");
    }

    // ✅ GOOGLE ADS CONVERSION EVENT (fire only on success)
    window.gtag?.("event", "conversion", {
      send_to: "AW-17769558353/gU4fCLaclNUbENHil5lC", // confirm this label
    });

    setStatus({
      type: "success",
      message: "✅ Enquiry submitted successfully! Our team will contact you shortly.",
    });

    setFormData({
      name: "",
      phone: "",
      email: "",
      city: "",
      date: "",
    });
  } catch (error) {
    console.error("🔴 Form submit error:", error);
    setStatus({
      type: "error",
      message: "❌ Something went wrong. Please try again.",
    });
  } finally {
    setLoading(false);
  }
};


    return (
        
        <div className="w-full font-sans bg-[#FFFAFA] text-black">
<Helmet>
  <title>
    Luxury Wedding Car Rental in India | Decorated Cars with Chauffeur - TaxiTribe
  </title>

  <meta
    name="description"
    content="Book luxury wedding car rental with professional chauffeurs, decorated bride & groom entry cars, baraat vehicles and premium SUVs. Available PAN India with on-time arrival guarantee."
  />

  <link
    rel="canonical"
    href="https://taxitribe.in/wedding-car"
  />
</Helmet>
            {/* ===== HERO BANNER ===== */}
            <WeddingCarHero />

            {/* ===== WHY CHOOSE TAXI TRIBE (WEDDING CAR) ===== */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Title */}
                    <h2 className="text-3xl md:text-4xl font-bold text-center">
                        Why Choose Taxi Tribe for Wedding Car Rental?
                    </h2>

                    {/* Description */}
                    <p className="mt-4 text-center text-gray-600 text-lg max-w-3xl mx-auto">
                        Your wedding day deserves elegance, punctuality and perfection.
                        Taxi Tribe provides luxury wedding cars with professional chauffeurs,
                        premium decoration options and a grand arrival experience that
                        makes your special day unforgettable.
                    </p>

                    {/* Points */}
                    <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">

                        {[
                            "Luxury sedans, premium SUVs & vintage wedding cars available",
                            "Beautiful floral decoration options for bride & groom entry",
                            "Professional uniformed chauffeurs with punctual service",
                            "On-time arrival guaranteed for baraat & wedding entry",
                            "Flexible hourly packages for full wedding events",
                            "Dedicated support team for smooth coordination",
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
                        Trusted for grand wedding entries, baraat processions & luxury celebrations across India.
                    </p>

                </div>
            </section>
            {/* ===== IMAGE GRID GALLERY ===== */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">

                    <h2 className="text-3xl font-bold text-center">Wedding Car Gallery</h2>
                    <p className="text-center text-gray-600 mt-2">
                        Explore our beautifully decorated premium wedding cars
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                        {[
                            "1.webp",
                            "2.webp",
                            "3.webp",
                            "4.webp",
                            "5.jpeg",
                            "1.webp",
                            "2.webp",
                            "3.webp"
                        ].map((img, i) => (

                            <div
                                key={i}
                                className="group relative rounded-xl overflow-hidden shadow-md bg-white border border-gray-100"
                            >
                                {/* Image */}
                                <img
                                    src={`/gallery/${img}`}
                                    alt="Wedding Car"
                                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                                />

                                {/* Subtle Overlay on Hover */}
                                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition"></div>
                            </div>

                        ))}
                    </div>

                </div>
            </section>


            {/* ===== FULL-WIDTH ENQUIRY FORM ===== */}
            <section className="py-14 bg-white shadow-inner border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-6">

                    <h2 className="text-2xl font-bold text-center mb-8">
                        Quick Enquiry
                    </h2>

                    <form
                        onSubmit={handleSubmit}
                        className="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-6xl mx-auto"
                    >

                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Full Name"
                            required
                            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD400]"
                        />

                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone Number"
                            required
                            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD400]"
                        />

                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email Address"
                            required
                            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD400]"
                        />

                        <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            placeholder="City / Location"
                            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD400]"
                        />

                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFD400]"
                        />

                        <button
                            type="submit"
                            disabled={loading}
                            className="md:col-span-5 bg-[#FFD400] text-black rounded-lg font-semibold hover:shadow-md transition px-6 py-3 disabled:opacity-60"
                        >
                            {loading ? "Submitting..." : "Submit Enquiry"}
                        </button>
                    </form>

                    {status.message && (
                        <p
                            className={`text-center mt-4 font-medium ${status.type === "success"
                                ? "text-green-600"
                                : "text-red-600"
                                }`}
                        >
                            {status.message}
                        </p>
                    )}

                    <p className="text-center text-xs text-gray-500 mt-2">
                        Your details are safe with us.
                    </p>
                </div>
            </section>

            {/* ===== FINAL CTA ===== */}
            <TestimonialWeddingCar />



        </div>
    );
}
