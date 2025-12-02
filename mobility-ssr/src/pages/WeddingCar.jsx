import React from "react";
import { Phone, Mail, MessageCircle, ChevronDown } from "lucide-react";
import WeddingHero from "../components/WeddingHero";

export default function WeddingCar() {
    return (
        <div className="w-full font-sans bg-[#FFFAFA] text-black">

            {/* ===== HERO BANNER ===== */}
            <WeddingHero />

            {/* ===== THIN CONTACT STRIP ===== */}
            <div className="w-full bg-[#FFD400] py-3">
                <div className="container mx-auto px-6 flex justify-center gap-8">
                    <p className="flex items-center gap-2"><Phone size={18} /> +91-98XXXXXX90</p>
                    <p className="flex items-center gap-2"><Mail size={18} /> support@taxitribe.in</p>
                    <p className="flex items-center gap-2"><MessageCircle size={18} /> WhatsApp</p>
                </div>
            </div>

            {/* ===== ABOUT SECTION ===== */}
            {/* ===== ENHANCED ABOUT SECTION ===== */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-10 items-center">

                        {/* LEFT: Content */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-black">
                                About Our Wedding Car Service
                            </h2>

                            <p className="mt-4 text-gray-700 text-lg max-w-xl">
                                At Taxi Tribe we specialise in turning wedding travel into a classy,
                                stress-free experience. From elegant sedans to premium SUVs and
                                vintage classics — each car is thoroughly cleaned, decorated on-demand,
                                and driven by a trained chauffeur who understands wedding-day protocols.
                            </p>

                            {/* Quick benefits */}
                            <div className="mt-6 grid sm:grid-cols-2 gap-4 max-w-xl">
                                <div className="flex items-start gap-3">
                                    <span className="w-3 h-3 rounded-full bg-[#FFD400] mt-2" />
                                    <div>
                                        <h4 className="font-semibold">Custom Decoration</h4>
                                        <p className="text-sm text-gray-600">Flower themes, ribbons, and colour-matching.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <span className="w-3 h-3 rounded-full bg-[#FFD400] mt-2" />
                                    <div>
                                        <h4 className="font-semibold">Punctual Chauffeurs</h4>
                                        <p className="text-sm text-gray-600">Experienced drivers dressed professionally.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <span className="w-3 h-3 rounded-full bg-[#FFD400] mt-2" />
                                    <div>
                                        <h4 className="font-semibold">Transparent Pricing</h4>
                                        <p className="text-sm text-gray-600">Clear packages with zero hidden charges.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <span className="w-3 h-3 rounded-full bg-[#FFD400] mt-2" />
                                    <div>
                                        <h4 className="font-semibold">Event Coordination</h4>
                                        <p className="text-sm text-gray-600">Dedicated support for logistics & on-day changes.</p>
                                    </div>
                                </div>
                            </div>

                            {/* small stats */}
                            <div className="mt-8 flex gap-6 items-center">
                                <div>
                                    <p className="text-2xl font-bold">250+</p>
                                    <p className="text-sm text-gray-600">Cars in Fleet</p>
                                </div>
                                <div>
                                    <p className="text-2xl font-bold">1,200+</p>
                                    <p className="text-sm text-gray-600">Weddings Served</p>
                                </div>
                                <div>
                                    <p className="text-2xl font-bold">30+</p>
                                    <p className="text-sm text-gray-600">Cities Covered</p>
                                </div>
                            </div>

                            {/* CTA */}

                        </div>

                        {/* RIGHT: Image with badges */}
                        <div className="relative">
                            <img
                                src="/wedding-car-on-rent-web.webp"
                                alt="Decorated wedding car"
                                className="w-full rounded-xl shadow-lg object-cover h-80 md:h-[420px]"
                            />

                            {/* Top-left badge */}
                            <div className="absolute top-4 left-4 bg-white/95 border border-gray-100 px-3 py-2 rounded-full flex items-center gap-2 shadow-sm">
                                <span className="w-2 h-2 rounded-full bg-[#FFD400]" />
                                <span className="text-sm font-semibold">Decor Included</span>
                            </div>

                            {/* Bottom-left small card */}
                            <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-md border border-gray-100 flex items-center gap-3">
                                <div className="text-sm">
                                    <p className="font-semibold">24/7 Support</p>
                                    <p className="text-xs text-gray-600">On-day coordination & emergency backup</p>
                                </div>
                            </div>

                            {/* Decorative thin yellow strip at right edge */}
                            <div className="hidden md:block absolute top-0 right-0 h-full w-2 bg-[#FFD400] rounded-l-md" />
                        </div>
                    </div>
                </div>
            </section>


            {/* ===== FULL-WIDTH ENQUIRY FORM ===== */}
            {/* ===== FULL-WIDTH ENQUIRY FORM ===== */}
            <section className="py-14 bg-white shadow-inner border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-6">

                    <h2 className="text-2xl font-bold text-center mb-8">
                        Quick Enquiry
                    </h2>

                    <form className="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-6xl mx-auto">

                        {/* Name */}
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD400]"
                        />

                        {/* Phone */}
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD400]"
                        />

                        {/* Email */}
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD400]"
                        />

                        {/* City */}
                        <input
                            type="text"
                            placeholder="City / Location"
                            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD400]"
                        />

                        {/* Date */}
                        <input
                            type="date"
                            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD400]"
                        />


                        {/* FULL-WIDTH BUTTON (comes below on mobile/tablet) */}
                        <button
                            type="submit"
                            className="md:col-span-6 bg-[#FFD400] text-black rounded-lg font-semibold shadow-sm hover:shadow-md transition px-6 py-3"
                        >
                            Submit Enquiry
                        </button>
                    </form>

                    <p className="text-center text-xs text-gray-500 mt-3">
                        Our team will get back to you instantly.
                    </p>
                </div>
            </section>


            {/* ===== IMAGE GRID GALLERY ===== */}
            {/* ===== WEDDING CAR GALLERY (UPGRADED) ===== */}
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


            {/* ===== WHY TAXI TRIBE ===== */}
            <section className="py-20 bg-[#FFF7D1]">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-black">
                        Why Taxi Tribe For Wedding Cars?
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8 mt-12">
                        {[
                            { title: "Luxury Fleet", desc: "BMW, Audi, Mercedes, Jaguar, Fortuner & more." },
                            { title: "Decorated Cars", desc: "Flower, ribbon & custom theme decoration." },
                            { title: "Professional Chauffeurs", desc: "Trained drivers with premium hospitality." },
                            { title: "On-Time Service", desc: "Guaranteed timely arrival for your events." },
                            { title: "Affordable Packages", desc: "Special wedding pricing options." },
                            { title: "24/7 Support", desc: "Dedicated wedding car support team." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl shadow">
                                <h3 className="text-xl font-semibold">{item.title}</h3>
                                <p className="text-gray-700 mt-2">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

{/* ===== FAQ ===== */}
<section className="py-20">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-center">FAQs</h2>

    {[
      { 
        q: "Is car decoration included?", 
        a: "Yes, we provide both simple and premium decoration options." 
      },
      { 
        q: "When does the car arrive?", 
        a: "The car is ready 15–20 minutes before your scheduled pickup time." 
      },
      { 
        q: "Can we customize the decoration?", 
        a: "Absolutely! You can choose themes, colors, flowers, ribbons, and more." 
      },
    ].map((faq, i) => (
      <div key={i} className="border-b py-4">
        <details className="cursor-pointer">
          <summary className="flex justify-between text-lg font-semibold">
            {faq.q}
            <ChevronDown />
          </summary>
          <p className="mt-2 text-gray-700">{faq.a}</p>
        </details>
      </div>
    ))}
  </div>
</section>


            {/* ===== FINAL CTA ===== */}
            <section className="py-16 bg-[#FFD400] text-black text-center">
                <h2 className="text-3xl font-bold">Book Your Luxury Wedding Car Today</h2>
                <p className="mt-2 text-lg">Premium cars • Elegant décor • Professional chauffeurs</p>

                <a
                    href="tel:+91-98XXXXXX90"
                    className="mt-6 inline-block bg-black text-white px-10 py-4 rounded-xl font-semibold"
                >
                    Call Now
                </a>
            </section>

        </div>
    );
}
