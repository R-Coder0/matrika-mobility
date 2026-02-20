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

export default function LongTermFixedRentalGurugram() {
    const [dialogOpen, setDialogOpen] = useState(false);

    return (
        <section className="bg-[#FFFFFF] text-gray-900">

            {/* ================= SEO ================= */}
            <Helmet>
                <title>Long-Term Fixed Car Rentals in Gurugram | TaxiTribe</title>
                <meta
                    name="description"
                    content="TaxiTribe offers long-term fixed car rentals in Gurugram with dedicated vehicles, trained chauffeurs, fixed monthly pricing and 24x7 support."
                />
                <link
                    rel="canonical"
                    href="https://taxitribe.in/long-term-fixed-rental-gurugram"
                />
            </Helmet>

            {/* ================= HERO ================= */}
            <div className="relative min-h-[70vh] pt-28 md:pt-14 pb-24 md:pb-14 flex items-center">
                <img
                    src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2000&q=70"
                    alt="Long-Term Fixed Car Rentals in Gurugram"
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
                            <li className="font-semibold text-amber-300">Gurugram</li>
                        </ol>
                    </nav>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white max-w-4xl">
                        Long-Term Fixed Car Rentals in{" "}
                        <span className="text-amber-500">Gurugram</span>
                    </h1>

                    <p className="mt-6 text-lg text-gray-200 max-w-3xl">
                        Dedicated cars with fixed monthly pricing for corporates,
                        MNCs and business parks operating across Gurugram.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <button
                            onClick={() => setDialogOpen(true)}
                            className="bg-amber-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-amber-700 transition"
                        >
                            Get Monthly Quote
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
                            Long-Term Fixed Rentals in Gurugram – Corporate-Grade Mobility
                        </h2>

                        <p className="text-gray-700 mb-4 leading-relaxed">
                            Gurugram is India’s leading corporate and technology hub where
                            organizations demand punctual, reliable and cost-controlled
                            transportation. TaxiTribe’s long-term fixed rental services
                            in Gurugram are designed for companies that need dedicated
                            vehicles on a monthly basis.
                        </p>

                        <p className="text-gray-700 mb-4 leading-relaxed">
                            With fixed pricing, assigned chauffeurs and backup vehicles,
                            we eliminate daily operational uncertainty and help
                            enterprises manage executive and employee mobility smoothly.
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            Ideal for MNCs, IT parks, BPOs, corporate offices and leadership
                            travel — TaxiTribe delivers SLA-backed performance across
                            Gurugram and NCR.
                        </p>
                    </div>

                    <div className="rounded-2xl overflow-hidden shadow-sm">
                        <img
                            src="/2.jpeg"
                            alt="Corporate long term car rental Gurugram"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* ================= WHY CHOOSE ================= */}
            <div className="bg-white border-t border-b border-gray-100">
                <div className="container mx-auto px-6 py-20">
                    <h2 className="text-3xl font-bold text-center mb-6">
                        Why Choose TaxiTribe for Fixed Rentals in Gurugram?
                    </h2>

                    <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
                        Our long-term rental model is purpose-built for Gurugram’s
                        fast-paced corporate environment.
                    </p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: <FaCar />,
                                text: "Dedicated vehicle assigned to your organization",
                            },
                            {
                                icon: <FaUserTie />,
                                text: "Uniformed, background-verified chauffeurs",
                            },
                            {
                                icon: <FaShieldAlt />,
                                text: "SLA-backed service with standby vehicles",
                            },
                            {
                                icon: <FaHeadset />,
                                text: "Dedicated account manager & 24×7 support",
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
                    A structured onboarding process tailored for corporate procurement teams.
                </p>

                <div className="grid md:grid-cols-4 gap-8">
                    {[
                        {
                            title: "Requirement Discussion",
                            desc: "Define monthly hours, kms and vehicle category.",
                        },
                        {
                            title: "Fixed Monthly Quote",
                            desc: "Transparent pricing with SLA and billing terms.",
                        },
                        {
                            title: "Vehicle Deployment",
                            desc: "Dedicated car and chauffeur assigned.",
                        },
                        {
                            title: "Ongoing Support",
                            desc: "Account management, replacements and compliance.",
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
                        Looking for a Long-Term Rental Partner in Gurugram?
                    </h2>
                    <p className="text-gray-700 mb-8">
                        Fixed pricing. Dedicated vehicles. Corporate-grade execution.
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
                model="Long-Term Fixed Rental – Gurugram"
                onOpenChange={setDialogOpen}
                onSubmit={() => setDialogOpen(false)}
            />
        </section>
    );
}
