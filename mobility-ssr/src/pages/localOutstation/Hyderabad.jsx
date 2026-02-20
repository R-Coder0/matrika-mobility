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

export default function LocalSpotRentalHyderabad() {
    const [dialogOpen, setDialogOpen] = useState(false);

    const faqs = [
        {
            q: "Do you offer monthly billing for corporate clients in Hyderabad?",
            a: "Yes. We provide consolidated monthly billing with detailed MIS reports designed for corporate and finance teams.",
        },
        {
            q: "Is the service suitable for daily corporate travel in Hyderabad?",
            a: "Absolutely. Our spot rentals are ideal for daily office travel, meetings, airport transfers, and flexible business movement.",
        },
        {
            q: "Can I book multi-day outstation trips from Hyderabad?",
            a: "Yes. We support both short and multi-day outstation travel with transparent pricing and dedicated chauffeurs.",
        },
        {
            q: "Are chauffeurs trained for executive and corporate travel?",
            a: "All chauffeurs are professionally trained, background-verified, and experienced in corporate travel standards.",
        },
        {
            q: "What is the cancellation policy?",
            a: "Standard bookings can be cancelled free of charge up to 24 hours before pickup. Policies may vary for large or event-based bookings.",
        },
    ];

    return (
        <section className="bg-[#FFFFFF] text-gray-900">
            {/* ================= SEO ================= */}
            <Helmet>
                <title>Best Local & Outstation Spot Rental in Hyderabad | TaxiTribe</title>
                <meta
                    name="description"
                    content="TaxiTribe provides reliable local & outstation spot rental services in Hyderabad with premium cars, verified chauffeurs, transparent pricing and 24x7 support."
                />
                <link
                    rel="canonical"
                    href="https://taxitribe.in/local-outstation-service-in-hyderabad"
                />
            </Helmet>

            {/* ================= HERO ================= */}
            <div className="relative min-h-[70vh] pt-28 md:pt-14 pb-24 md:pb-14 flex items-center">
                <img
                    src="https://images.unsplash.com/photo-1604398905995-51aefb48c69c?auto=format&fit=crop&w=2000&q=70"
                    alt="Best Local & Outstation Spot Rental in Hyderabad"
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
                            <li className="font-semibold text-amber-300">Hyderabad</li>
                        </ol>
                    </nav>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white max-w-4xl">
                        Best Local & Outstation Spot Rental in{" "}
                        <span className="text-amber-500">Hyderabad</span>
                    </h1>

                    <p className="mt-6 text-lg text-gray-200 max-w-3xl">
                        Premium chauffeur-driven cars for Hyderabad’s IT,
                        pharmaceutical, and corporate travel — from city commutes
                        to long-distance outstation journeys.
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
                            Local & Outstation Spot Rentals in Hyderabad – Smart Mobility for Growing Enterprises
                        </h2>

                        <p className="text-gray-700 mb-4 leading-relaxed">
                            Hyderabad is a rapidly expanding hub for IT, pharma,
                            and global enterprises where dependable mobility is
                            essential. TaxiTribe’s local and outstation spot rental
                            services in Hyderabad are designed for professionals
                            who require flexible, on-demand transportation.
                        </p>

                        <p className="text-gray-700 mb-4 leading-relaxed">
                            Whether it’s daily office travel in HITEC City, airport
                            transfers, or outstation journeys to nearby business
                            hubs, we offer premium vehicles, courteous chauffeurs,
                            and transparent pricing.
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            Trusted by corporates, startups, and residents,
                            TaxiTribe ensures punctual pickups, comfortable rides,
                            and 24×7 support across Hyderabad and surrounding regions.
                        </p>
                    </div>

                    <div className="rounded-2xl overflow-hidden shadow-sm">
                        <img
                            src="/2.jpeg"
                            alt="Outstation cab service from Hyderabad"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* ================= WHY CHOOSE ================= */}
            <div className="bg-white border-t border-b border-gray-100">
                <div className="container mx-auto px-6 py-20">
                    <h2 className="text-3xl font-bold text-center mb-6">
                        Why Choose TaxiTribe for Spot Rentals in Hyderabad?
                    </h2>

                    <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
                        Our services are aligned with Hyderabad’s corporate growth
                        and focus on safety, punctuality, and service reliability.
                    </p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: <FaUserTie />,
                                text: "Trained and background-verified professional chauffeurs",
                            },
                            {
                                icon: <FaClock />,
                                text: "Reliable pickups across Hyderabad’s expanding city zones",
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
                    How Our Spot Rental Service Works in Hyderabad
                </h2>

                <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
                    Booking a local or outstation cab in Hyderabad with TaxiTribe
                    is simple, fast, and completely transparent.
                </p>

                <div className="grid md:grid-cols-4 gap-8">
                    {[
                        {
                            title: "Share Travel Details",
                            desc: "Provide pickup point, destination, and duration.",
                        },
                        {
                            title: "Get Instant Quote",
                            desc: "Receive a clear, all-inclusive price instantly.",
                        },
                        {
                            title: "Vehicle Assigned",
                            desc: "A premium car with a verified chauffeur is allocated.",
                        },
                        {
                            title: "Ride with Comfort",
                            desc: "Enjoy a smooth journey with real-time support.",
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
                        Book the Best Local & Outstation Spot Rental in Hyderabad
                    </h2>
                    <p className="text-gray-700 mb-8">
                        Premium cars. Corporate-trained chauffeurs. Transparent pricing.
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
                model="Local & Outstation Spot Rental – Hyderabad"
                onOpenChange={setDialogOpen}
                onSubmit={() => setDialogOpen(false)}
            />
        </section>
    );
}
