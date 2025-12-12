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

export default function LongTermFixedRentalDelhi() {
    const [dialogOpen, setDialogOpen] = useState(false);

    return (
        <section className="bg-[#FFFFFF] text-gray-900">

            {/* ================= SEO ================= */}
            <Helmet>
                <title>Long-Term Fixed Car Rentals in Delhi | TaxiTribe</title>
                <meta
                    name="description"
                    content="TaxiTribe offers long-term fixed car rentals in Delhi with dedicated vehicles, trained chauffeurs, fixed monthly pricing and 24x7 support."
                />
                <link
                    rel="canonical"
                    href="https://taxitribe.in/services/fixed-rentals/delhi"
                />
            </Helmet>

            {/* ================= HERO ================= */}
            <div className="relative min-h-[70vh] flex items-center">
                <img
                    src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2000&q=70"
                    alt="Long-Term Fixed Car Rentals in Delhi"
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
                                <a href="/services/fixed-rentals" className="hover:underline">
                                    Long-Term Rentals
                                </a>
                            </li>
                            <li className="text-gray-400">/</li>
                            <li className="font-semibold text-amber-300">Delhi</li>
                        </ol>
                    </nav>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white max-w-4xl">
                        Long-Term Fixed Car Rentals in{" "}
                        <span className="text-amber-500">Delhi</span>
                    </h1>

                    <p className="mt-6 text-lg text-gray-200 max-w-3xl">
                        Dedicated cars with fixed monthly pricing for corporates,
                        executives and organizations operating in Delhi NCR.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <button
                            onClick={() => setDialogOpen(true)}
                            className="bg-amber-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-amber-700 transition"
                        >
                            Get Monthly Quote
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
                            Long-Term Fixed Rentals in Delhi – Reliable Corporate Mobility
                        </h2>

                        <p className="text-gray-700 mb-4 leading-relaxed">
                            Delhi’s corporate ecosystem demands predictable, punctual
                            and cost-controlled transportation. TaxiTribe’s long-term
                            fixed rental services in Delhi are designed for companies
                            that need dedicated vehicles on a monthly basis.
                        </p>

                        <p className="text-gray-700 mb-4 leading-relaxed">
                            With fixed pricing, assigned chauffeurs and replacement
                            vehicles on downtime, we eliminate operational uncertainty
                            and help organizations manage employee mobility efficiently.
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            Ideal for corporate offices, MNCs, BPOs, plant locations
                            and leadership travel — TaxiTribe ensures SLA-backed
                            performance across Delhi NCR.
                        </p>
                    </div>

                    <div className="rounded-2xl overflow-hidden shadow-sm">
                        <img
                            src="/2.jpeg"
                            alt="Corporate long term car rental Delhi"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* ================= WHY CHOOSE ================= */}
            <div className="bg-white border-t border-b border-gray-100">
                <div className="container mx-auto px-6 py-20">
                    <h2 className="text-3xl font-bold text-center mb-6">
                        Why Choose TaxiTribe for Fixed Rentals in Delhi?
                    </h2>

                    <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
                        Our long-term rental model is built for reliability,
                        accountability and predictable monthly billing.
                    </p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: <FaCar />,
                                text: "Dedicated vehicle assigned for your organization",
                            },
                            {
                                icon: <FaUserTie />,
                                text: "Uniformed, background-verified chauffeurs",
                            },
                            {
                                icon: <FaShieldAlt />,
                                text: "SLA-backed service with backup vehicles",
                            },
                            {
                                icon: <FaHeadset />,
                                text: "Dedicated account & 24×7 operations support",
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
                    How Long-Term Fixed Rentals Work
                </h2>

                <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
                    A simple onboarding process designed for corporate procurement teams.
                </p>

                <div className="grid md:grid-cols-4 gap-8">
                    {[
                        {
                            title: "Requirement Discussion",
                            desc: "Share usage hours, vehicle type and monthly km needs.",
                        },
                        {
                            title: "Fixed Monthly Quote",
                            desc: "Transparent pricing with SLA and billing structure.",
                        },
                        {
                            title: "Vehicle Deployment",
                            desc: "Dedicated car & chauffeur assigned to your account.",
                        },
                        {
                            title: "Ongoing Support",
                            desc: "Account manager, backups and compliance monitoring.",
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

            {/* ================= FINAL CTA ================= */}
            <div className="container mx-auto px-6 pb-24">
                <div className="bg-amber-600/10 border border-amber-200 rounded-2xl p-12 text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Looking for a Reliable Long-Term Rental Partner in Delhi?
                    </h2>
                    <p className="text-gray-700 mb-8">
                        Fixed pricing. Dedicated vehicles. Corporate-grade service.
                    </p>
                    <button
                        onClick={() => setDialogOpen(true)}
                        className="bg-amber-600 text-white px-10 py-4 rounded-lg font-bold hover:bg-amber-700 transition"
                    >
                        Request Monthly Quote
                    </button>
                </div>
            </div>

            {/* ================= BOOKING DIALOG ================= */}
            <BookingDialog
                open={dialogOpen}
                model="Long-Term Fixed Rental – Delhi"
                onOpenChange={setDialogOpen}
                onSubmit={() => setDialogOpen(false)}
            />
        </section>
    );
}
