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

export default function LocalSpotRentalBangalore() {
    const [dialogOpen, setDialogOpen] = useState(false);

    const faqs = [
        {
            q: "Do you provide monthly billing for corporate clients?",
            a: "Yes — we offer consolidated monthly billing along with detailed MIS reports suitable for corporate finance teams.",
        },
        {
            q: "Is the service suitable for daily office commutes in Bangalore?",
            a: "Absolutely. Our spot rentals are widely used for daily corporate travel, meetings, and flexible office commutes.",
        },
        {
            q: "Can I book cars for multi-day outstation trips from Bangalore?",
            a: "Yes. We support multi-day outstation travel with transparent pricing and dedicated chauffeurs.",
        },
        {
            q: "Are chauffeurs trained for corporate and executive travel?",
            a: "All chauffeurs are professionally trained, background-verified, and experienced in corporate travel etiquette.",
        },
        {
            q: "What is your cancellation policy?",
            a: "Standard bookings can be cancelled free of charge up to 24 hours before pickup. Terms may vary for large or event-based bookings.",
        },
    ];

    return (
        <section className="bg-[#FFFFFF] text-gray-900">
            {/* ================= SEO ================= */}
            <Helmet>
                <title>Best Local & Outstation Spot Rental in Bangalore | TaxiTribe</title>
                <meta
                    name="description"
                    content="TaxiTribe provides reliable local & outstation spot rental services in Bangalore with premium cars, verified drivers, transparent pricing and 24x7 support."
                />
                <link
                    rel="canonical"
                    href="https://taxitribe.in/local-outstation-service-in-bangalore"
                />
            </Helmet>

            {/* ================= HERO ================= */}
            <div className="relative min-h-[70vh] pt-28 md:pt-14 pb-24 md:pb-14 flex items-center">
                <img
                    src="https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=2000&q=70"
                    alt="Best Local & Outstation Spot Rental in Bangalore"
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
                            <li className="font-semibold text-amber-300">Bangalore</li>
                        </ol>
                    </nav>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white max-w-4xl">
                        Best Local & Outstation Spot Rental in{" "}
                        <span className="text-amber-500">Bangalore</span>
                    </h1>

                    <p className="mt-6 text-lg text-gray-200 max-w-3xl">
                        Premium chauffeur-driven cars for Bangalore’s corporate, tech,
                        and business travel needs — from city rides to long-distance
                        outstation journeys.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <button
                            onClick={() => setDialogOpen(true)}
                            className="bg-amber-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-amber-700 transition"
                        >
                            Get Instant Quote
                        </button>

                        <a
                            href="tel:7011438890"
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
                            Local & Outstation Spot Rentals in Bangalore – Built for Professionals
                        </h2>

                        <p className="text-gray-700 mb-4 leading-relaxed">
                            Bangalore is India’s technology and startup capital, where
                            efficient and dependable mobility is essential. TaxiTribe’s
                            local and outstation spot rental services in Bangalore are
                            designed for professionals who need flexible, on-demand travel
                            without long-term commitments.
                        </p>

                        <p className="text-gray-700 mb-4 leading-relaxed">
                            From daily meetings across the city to airport transfers and
                            weekend or business outstation trips, we deliver premium
                            vehicles, courteous chauffeurs, and predictable pricing.
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            Trusted by corporates, startups, and residents alike,
                            TaxiTribe ensures punctual pickups, comfortable journeys,
                            and round-the-clock support across Bangalore and nearby regions.
                        </p>
                    </div>

                    <div className="rounded-2xl overflow-hidden shadow-sm">
                        <img
                            src="/2.jpeg"
                            alt="Outstation cab service from Bangalore"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* ================= WHY CHOOSE ================= */}
            <div className="bg-white border-t border-b border-gray-100">
                <div className="container mx-auto px-6 py-20">
                    <h2 className="text-3xl font-bold text-center mb-6">
                        Why Choose TaxiTribe for Spot Rentals in Bangalore?
                    </h2>

                    <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
                        Our services are tailored for Bangalore’s fast-moving corporate
                        ecosystem, with a strong focus on safety, punctuality, and service quality.
                    </p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: <FaUserTie />,
                                text: "Professionally trained, background-verified chauffeurs",
                            },
                            {
                                icon: <FaClock />,
                                text: "Reliable pickups despite Bangalore traffic conditions",
                            },
                            {
                                icon: <FaShieldAlt />,
                                text: "Safe, insured, and well-maintained premium vehicles",
                            },
                            {
                                icon: <FaHeadset />,
                                text: "24×7 customer support for business and personal travel",
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
                    How Our Spot Rental Service Works in Bangalore
                </h2>

                <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
                    Booking a local or outstation cab in Bangalore with TaxiTribe is simple,
                    fast, and fully transparent.
                </p>

                <div className="grid md:grid-cols-4 gap-8">
                    {[
                        {
                            title: "Share Travel Details",
                            desc: "Provide pickup, destination, and travel duration.",
                        },
                        {
                            title: "Receive Instant Quote",
                            desc: "Get a clear, all-inclusive price instantly.",
                        },
                        {
                            title: "Car & Chauffeur Assigned",
                            desc: "A premium vehicle with a verified chauffeur is allocated.",
                        },
                        {
                            title: "Relax & Travel",
                            desc: "Enjoy a smooth ride with continuous support.",
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
                        Book the Best Local & Outstation Spot Rental in Bangalore
                    </h2>
                    <p className="text-gray-700 mb-8">
                        Premium cars. Corporate-grade chauffeurs. Transparent pricing.
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
                model="Local & Outstation Spot Rental – Bangalore"
                onOpenChange={setDialogOpen}
                onSubmit={() => setDialogOpen(false)}
            />
        </section>
    );
}
