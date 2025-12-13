import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import {
    FaCar,
    FaClock,
    FaRoute,
    FaUserTie,
    FaCheckCircle,
    FaHeadset,
    FaShieldAlt,
    FaGlobe,
    FaQuestionCircle,
} from "react-icons/fa";
import BookingDialog from "../../components/BookingCar";
import GlobalAvailabilitySection from "../../components/Map";
import SOPsSection from "../SOPsSection";
import BestPracticesSection from "../../components/BestPractise";

export default function LocalSpotRentalDelhi() {
    const [dialogOpen, setDialogOpen] = useState(false);

    return (
        <section className="bg-[#FFFFFF] text-gray-900">

            {/* ================= SEO ================= */}
            <Helmet>
                <title>Best Local & Outstation Spot Rental in Delhi | TaxiTribe</title>
                <meta
                    name="description"
                    content="TaxiTribe offers the best local & outstation spot rental in Delhi. Clean cars, verified drivers, transparent pricing and 24x7 support."
                />
                <link
                    rel="canonical"
                    href="https://taxitribe.in/services/spot-rentals/delhi"
                />
            </Helmet>

            {/* ================= HERO ================= */}
            <div className="relative min-h-[70vh] pt-28 md:pt-14 pb-24 md:pb-14 flex items-center">
                <img
                    src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=2000&q=70"
                    alt="Best Local & Outstation Spot Rental in Delhi"
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
                                        <a href="/corporate-protocol" className="hover:underline">Local & Outstation</a>
                                    </li>
                                    <li className="text-gray-400">/</li>
                                    <li className="font-semibold text-amber-300">Delhi</li>
                                </ol>
                            </nav>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white max-w-4xl">
                        Best Local & Outstation Spot Rental in{" "}
                        <span className="text-amber-500">Delhi</span>
                    </h1>

                    <p className="mt-6 text-lg text-gray-200 max-w-3xl">
                        Reliable chauffeur-driven cars for local travel and long-distance
                        journeys from Delhi. Trusted by corporates, families and frequent
                        travelers.
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
            {/* ================= ABOUT SERVICE ================= */}
            <div className="container mx-auto px-6 py-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">
                            Local & Outstation Spot Rentals in Delhi – Trusted & Flexible
                        </h2>

                        <p className="text-gray-700 mb-4 leading-relaxed">
                            Delhi is a fast-moving city where time, comfort and reliability matter.
                            TaxiTribe’s local and outstation spot rental services in Delhi are
                            designed for travelers who need flexible, chauffeur-driven cars without
                            long-term commitments.
                        </p>

                        <p className="text-gray-700 mb-4 leading-relaxed">
                            Whether it’s a few hours of city travel, a full-day booking, or a
                            multi-day outstation journey, we provide clean vehicles, professional
                            chauffeurs and transparent pricing — so you can travel stress-free.
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            From corporate executives and airport travelers to families and tourists,
                            TaxiTribe is trusted for punctual pickups, smooth rides and reliable
                            customer support across Delhi NCR.
                        </p>
                    </div>

                    <div className="rounded-2xl overflow-hidden shadow-sm">
                        <img
                            src="/2.jpeg"
                            alt="Outstation cab service from Delhi"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>


            {/* ================= WHY CHOOSE ================= */}
            {/* ================= WHY CHOOSE ================= */}
            <div className="bg-white border-t border-b border-gray-100">
                <div className="container mx-auto px-6 py-20">
                    <h2 className="text-3xl font-bold text-center mb-6">
                        Why Choose TaxiTribe for Spot Rentals in Delhi?
                    </h2>

                    <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
                        TaxiTribe is not just a cab provider — we are a mobility partner.
                        Our focus is on safety, reliability and consistent service quality,
                        making us the preferred choice for local and outstation travel in Delhi.
                    </p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: <FaUserTie />,
                                text: "Background-verified & professionally trained chauffeurs for safe travel",
                            },
                            {
                                icon: <FaClock />,
                                text: "On-time pickups, real-time coordination & route monitoring",
                            },
                            {
                                icon: <FaShieldAlt />,
                                text: "Fully insured vehicles with strict safety and hygiene standards",
                            },
                            {
                                icon: <FaHeadset />,
                                text: "Dedicated 24×7 support team for assistance during your trip",
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
                    How Our Spot Rental Service Works
                </h2>

                <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
                    Booking a local or outstation cab with TaxiTribe is simple, transparent
                    and quick. Here’s how we ensure a smooth experience from start to finish.
                </p>

                <div className="grid md:grid-cols-4 gap-8">
                    {[
                        {
                            title: "Share Travel Details",
                            desc: "Tell us your pickup location, destination, date and duration.",
                        },
                        {
                            title: "Get Instant Quote",
                            desc: "Receive a clear, all-inclusive quotation with no hidden charges.",
                        },
                        {
                            title: "Vehicle Assigned",
                            desc: "A clean car and verified chauffeur are assigned before pickup.",
                        },
                        {
                            title: "Enjoy the Ride",
                            desc: "Travel comfortably with live support available throughout the trip.",
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
            <BestPracticesSection />            {/* ================= FAQ ================= */}
            {/* ================= FAQ ================= */}
            <div className="container mx-auto px-6 py-20">
                <h2 className="text-3xl font-bold mb-10 text-center">
                    Frequently Asked Questions
                </h2>

                <div className="max-w-3xl mx-auto space-y-4">
                    {[
                        {
                            q: "Which areas do you cover in Delhi?",
                            a: "We cover all areas across Delhi NCR including Central, South, West, North Delhi and airport zones.",
                        },
                        {
                            q: "Do you offer one-way outstation trips?",
                            a: "Yes, we provide both one-way and round-trip outstation spot rentals.",
                        },
                        {
                            q: "Are chauffeurs verified and trained?",
                            a: "Yes, all our drivers undergo background verification and professional training.",
                        },
                        {
                            q: "Is pricing transparent?",
                            a: "Absolutely. You receive clear pricing with GST-compliant invoices and no hidden charges.",
                        },
                    ].map((item, i) => {
                        const [open, setOpen] = useState(false);

                        return (
                            <div
                                key={i}
                                className="border border-gray-200 rounded-xl overflow-hidden"
                            >
                                <button
                                    onClick={() => setOpen(!open)}
                                    className="w-full flex justify-between items-center p-5 text-left font-semibold"
                                >
                                    <span>{item.q}</span>
                                    <FaQuestionCircle
                                        className={`text-amber-600 transition ${open ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>

                                {open && (
                                    <div className="px-5 pb-5 text-gray-700 text-sm leading-relaxed">
                                        {item.a}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>


            {/* ================= FINAL CTA ================= */}
            <div className="container mx-auto px-6 pb-24">
                <div className="bg-amber-600/10 border border-amber-200 rounded-2xl p-12 text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Book the Best Local & Outstation Spot Rental in Delhi
                    </h2>
                    <p className="text-gray-700 mb-8">
                        Clean cars. Professional chauffeurs. Transparent pricing.
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
                model="Local & Outstation Spot Rental – Delhi"
                onOpenChange={setDialogOpen}
                onSubmit={() => setDialogOpen(false)}
            />
        </section>
    );
}
