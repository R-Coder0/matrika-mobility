import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import {
    FaCar,
    FaUserTie,
    FaHeadset,
    FaShieldAlt,
} from "react-icons/fa";
import BookingDialog from "../../components/BookingCar";
import GlobalAvailabilitySection from "../../components/Map";
import SOPsSection from "../SOPsSection";
import BestPracticesSection from "../../components/BestPractise";

export default function LongTermFixedRentalBangalore() {
    const [dialogOpen, setDialogOpen] = useState(false);

    return (
        <section className="bg-[#FFFFFF] text-gray-900">
            {/* ================= SEO ================= */}
            <Helmet>
                <title>Long-Term Fixed Car Rentals in Bangalore | TaxiTribe</title>
                <meta
                    name="description"
                    content="TaxiTribe offers long-term fixed car rentals in Bangalore with dedicated vehicles, trained chauffeurs, fixed monthly pricing and 24x7 corporate support."
                />
                <link
                    rel="canonical"
                    href="https://taxitribe.in/long-term-fixed-rental-bangalore"
                />
            </Helmet>

            {/* ================= HERO ================= */}
            <div className="relative min-h-[70vh] pt-28 md:pt-14 pb-24 md:pb-14 flex items-center">
                <img
                    src="https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=2000&q=70"
                    alt="Long-Term Fixed Car Rentals in Bangalore"
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
                            <li className="font-semibold text-amber-300">Bangalore</li>
                        </ol>
                    </nav>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white max-w-4xl">
                        Long-Term Fixed Car Rentals in{" "}
                        <span className="text-amber-500">Bangalore</span>
                    </h1>

                    <p className="mt-6 text-lg text-gray-200 max-w-3xl">
                        Dedicated corporate vehicles with fixed monthly pricing
                        for Bangalore’s IT, startup and enterprise ecosystem.
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
                            Long-Term Fixed Rentals in Bangalore – Engineered for Tech-Driven Corporates
                        </h2>

                        <p className="text-gray-700 mb-4 leading-relaxed">
                            Bangalore is India’s technology and startup capital,
                            where predictable, cost-controlled transportation is
                            critical for business continuity. TaxiTribe’s long-term
                            fixed rental services in Bangalore are designed for
                            organizations that require dedicated vehicles on
                            monthly contracts.
                        </p>

                        <p className="text-gray-700 mb-4 leading-relaxed">
                            With fixed monthly commercials, assigned chauffeurs,
                            and operational backups, we help enterprises eliminate
                            daily transport uncertainty and focus on core business.
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            Ideal for IT companies, global capability centers,
                            startups, R&D hubs and CXO travel — TaxiTribe delivers
                            SLA-driven performance across Bangalore and nearby tech corridors.
                        </p>
                    </div>

                    <div className="rounded-2xl overflow-hidden shadow-sm">
                        <img
                            src="/2.jpeg"
                            alt="Corporate long term car rental Bangalore"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* ================= WHY CHOOSE ================= */}
            <div className="bg-white border-t border-b border-gray-100">
                <div className="container mx-auto px-6 py-20">
                    <h2 className="text-3xl font-bold text-center mb-6">
                        Why Choose TaxiTribe for Fixed Rentals in Bangalore?
                    </h2>

                    <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
                        Our long-term rental model is purpose-built for
                        Bangalore’s high-growth corporate ecosystem.
                    </p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: <FaCar />,
                                text: "Dedicated vehicles assigned exclusively to your organization",
                            },
                            {
                                icon: <FaUserTie />,
                                text: "Corporate-trained, background-verified chauffeurs",
                            },
                            {
                                icon: <FaShieldAlt />,
                                text: "SLA-backed operations with standby vehicles",
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
                    A structured onboarding and governance process for enterprises.
                </p>

                <div className="grid md:grid-cols-4 gap-8">
                    {[
                        {
                            title: "Requirement Assessment",
                            desc: "Define monthly usage, shifts and vehicle category.",
                        },
                        {
                            title: "Fixed Monthly Commercials",
                            desc: "Transparent pricing with SLA and billing structure.",
                        },
                        {
                            title: "Vehicle Deployment",
                            desc: "Dedicated car and chauffeur assigned.",
                        },
                        {
                            title: "Operational Oversight",
                            desc: "Account management, audits and replacements.",
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
                        Looking for a Long-Term Rental Partner in Bangalore?
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
                model="Long-Term Fixed Rental – Bangalore"
                onOpenChange={setDialogOpen}
                onSubmit={() => setDialogOpen(false)}
            />
        </section>
    );
}
