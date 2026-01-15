import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import {
    FaClock,
    FaUserTie,
    FaHeadset,
    FaShieldAlt,
} from "react-icons/fa";
import BookingDialog from "../../components/BookingCar";
import GlobalAvailabilitySection from "../../components/Map";
import SOPsSection from "../SOPsSection";
import BestPracticesSection from "../../components/BestPractise";

export default function LocalSpotRentalMumbai() {
    const [dialogOpen, setDialogOpen] = useState(false);

    const faqs = [
        {
            q: "Do you offer monthly billing for corporate clients in Mumbai?",
            a: "Yes. We provide consolidated monthly invoicing along with MIS reports suitable for corporate and finance teams.",
        },
        {
            q: "Is your service suitable for daily business travel in Mumbai?",
            a: "Absolutely. Our spot rentals are widely used for daily meetings, airport transfers, and flexible corporate travel.",
        },
        {
            q: "Can I book outstation trips from Mumbai for multiple days?",
            a: "Yes. We support single-day and multi-day outstation travel with transparent pricing and dedicated chauffeurs.",
        },
        {
            q: "Are chauffeurs trained for executive and VIP travel?",
            a: "All chauffeurs are professionally trained, background-verified, and experienced in executive-level travel.",
        },
        {
            q: "What is the cancellation policy?",
            a: "Standard bookings can be cancelled up to 24 hours before pickup without charges. Policies may vary for large or event bookings.",
        },
    ];

    return (
        <section className="bg-[#FFFFFF] text-gray-900">
            {/* ================= SEO ================= */}
            <Helmet>
                <title>Best Local & Outstation Spot Rental in Mumbai | TaxiTribe</title>
                <meta
                    name="description"
                    content="TaxiTribe offers reliable local & outstation spot rental services in Mumbai with premium cars, verified chauffeurs, transparent pricing and 24x7 support."
                />
                <link
                    rel="canonical"
                    href="https://taxitribe.in/local-outstation-service-in-mumbai"
                />
            </Helmet>

            {/* ================= HERO ================= */}
            <div className="relative min-h-[70vh] pt-28 md:pt-14 pb-24 md:pb-14 flex items-center">
                <img
                    src="https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=2000&q=70"
                    alt="Best Local & Outstation Spot Rental in Mumbai"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/70" />

                <div className="relative z-10 container mx-auto px-6">
                    <nav aria-label="Breadcrumb" className="text-sm text-gray-200 mb-2">
                        <ol className="flex items-center gap-2">
                            <li>
                                <a href="/" className="hover:underline">Home</a>
                            </li>
                            <li className="text-gray-400">/</li>
                            <li>
                                <a href="/corporate-protocol" className="hover:underline">
                                    Local & Outstation
                                </a>
                            </li>
                            <li className="text-gray-400">/</li>
                            <li className="font-semibold text-amber-300">Mumbai</li>
                        </ol>
                    </nav>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white max-w-4xl">
                        Best Local & Outstation Spot Rental in{" "}
                        <span className="text-amber-500">Mumbai</span>
                    </h1>

                    <p className="mt-6 text-lg text-gray-200 max-w-3xl">
                        Premium chauffeur-driven cars for Mumbai’s corporate,
                        financial, and executive travel — from city rides to
                        long-distance outstation journeys.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <button
                            onClick={() => setDialogOpen(true)}
                            className="bg-amber-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-amber-700 transition"
                        >
                            Get Instant Quote
                        </button>

                        <a
                            href="tel:+917011438890"
                            className="px-8 py-4 border border-white/30 text-white rounded-lg hover:bg-white/10 transition"
                        >
                            Call Now
                        </a>
                    </div>
                </div>
            </div>

            {/* ================= ABOUT SERVICE ================= */}
            <div className="container mx-auto px-6 py-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">
                            Local & Outstation Spot Rentals in Mumbai – Designed for a City That Never Stops
                        </h2>

                        <p className="text-gray-700 mb-4 leading-relaxed">
                            Mumbai is India’s financial capital, operating at a relentless pace
                            where punctuality and reliability are essential. TaxiTribe’s local
                            and outstation spot rental services in Mumbai are tailored for
                            professionals who need dependable, on-demand mobility.
                        </p>

                        <p className="text-gray-700 mb-4 leading-relaxed">
                            From daily meetings across South Mumbai, BKC, and Andheri to airport
                            transfers and intercity travel, we provide premium vehicles,
                            experienced chauffeurs, and transparent pricing.
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            Trusted by corporates, financial institutions, media houses,
                            and residents, TaxiTribe ensures smooth journeys, on-time pickups,
                            and 24×7 support across Mumbai and nearby destinations.
                        </p>
                    </div>

                    <div className="rounded-2xl overflow-hidden shadow-sm">
                        <img
                            src="/2.jpeg"
                            alt="Outstation cab service from Mumbai"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* ================= WHY CHOOSE ================= */}
            <div className="bg-white border-t border-b border-gray-100">
                <div className="container mx-auto px-6 py-20">
                    <h2 className="text-3xl font-bold text-center mb-6">
                        Why Choose TaxiTribe for Spot Rentals in Mumbai?
                    </h2>

                    <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
                        Our services are optimized for Mumbai’s dense traffic,
                        high expectations, and demanding corporate travel needs.
                    </p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: <FaUserTie />,
                                text: "Experienced, background-verified chauffeurs",
                            },
                            {
                                icon: <FaClock />,
                                text: "Time-focused operations despite Mumbai traffic",
                            },
                            {
                                icon: <FaShieldAlt />,
                                text: "Safe, insured, and well-maintained premium vehicles",
                            },
                            {
                                icon: <FaHeadset />,
                                text: "24×7 customer support for uninterrupted travel",
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-[#FFFFFF] border border-gray-200 rounded-xl p-6 text-center"
                            >
                                <div className="w-12 h-12 mx-auto rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mb-4 text-2xl">
                                    {item.icon}
                                </div>
                                <p className="text-sm text-gray-700">{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ================= HOW IT WORKS ================= */}
            <div className="container mx-auto px-6 py-20">
                <h2 className="text-3xl font-bold text-center mb-6">
                    How Our Spot Rental Service Works in Mumbai
                </h2>

                <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
                    Booking a local or outstation cab in Mumbai with TaxiTribe is
                    quick, transparent, and corporate-friendly.
                </p>

                <div className="grid md:grid-cols-4 gap-8">
                    {[
                        {
                            title: "Share Travel Details",
                            desc: "Tell us your pickup location, destination, and duration.",
                        },
                        {
                            title: "Get Instant Quote",
                            desc: "Receive an all-inclusive price with no hidden charges.",
                        },
                        {
                            title: "Car Assigned",
                            desc: "A premium vehicle with a trained chauffeur is allocated.",
                        },
                        {
                            title: "Travel Comfortably",
                            desc: "Enjoy a smooth journey with real-time assistance.",
                        },
                    ].map((step, i) => (
                        <div
                            key={i}
                            className="bg-white border border-gray-200 rounded-xl p-6 text-center"
                        >
                            <div className="w-12 h-12 mx-auto rounded-full bg-amber-600 text-white flex items-center justify-center font-bold mb-4">
                                {i + 1}
                            </div>
                            <h4 className="font-semibold mb-2">{step.title}</h4>
                            <p className="text-gray-700 text-sm">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* ================= GLOBAL SERVICES ================= */}
            <div className="bg-white border-t border-gray-100">
                <div className="container mx-auto px-6 py-4">
                    <GlobalAvailabilitySection theme="light" />
                </div>
            </div>

            {/* ================= SOPs & BEST PRACTICES ================= */}
            <SOPsSection variant="full" />
            <BestPracticesSection />

            {/* ================= FAQ ================= */}
            <section id="faqs" className="mt-14 mb-14">
                <h3 className="text-2xl font-semibold text-center mb-8">
                    Frequently Asked Questions
                </h3>

                <div className="max-w-[1500px] mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {faqs.map((f, i) => (
                            <details
                                key={i}
                                className="group bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition"
                            >
                                <summary className="font-medium cursor-pointer list-none flex items-start justify-between gap-3">
                                    <span className="text-gray-900">{f.q}</span>
                                    <span className="text-amber-500 transform transition-transform duration-300 group-open:rotate-180">
                                        ▼
                                    </span>
                                </summary>
                                <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                                    {f.a}
                                </p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= FINAL CTA ================= */}
            <div className="container mx-auto px-6 pb-24">
                <div className="bg-amber-600/10 border border-amber-200 rounded-2xl p-12 text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Book the Best Local & Outstation Spot Rental in Mumbai
                    </h2>
                    <p className="text-gray-700 mb-8">
                        Premium cars. Executive chauffeurs. Transparent pricing.
                    </p>
                    <button
                        onClick={() => setDialogOpen(true)}
                        className="bg-amber-600 text-white px-10 py-4 rounded-lg font-bold hover:bg-amber-700 transition"
                    >
                        Get Quote Now
                    </button>
                </div>
            </div>

            {/* ================= BOOKING DIALOG ================= */}
            <BookingDialog
                open={dialogOpen}
                model="Local & Outstation Spot Rental – Mumbai"
                onOpenChange={setDialogOpen}
                onSubmit={() => setDialogOpen(false)}
            />
        </section>
    );
}
