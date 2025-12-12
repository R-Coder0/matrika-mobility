import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import {
    FaUsers,
    FaCalendarAlt,
    FaRoute,
    FaUserTie,
    FaCheckCircle,
    FaHeadset,
    FaShieldAlt,
    FaQuestionCircle,
} from "react-icons/fa";
import BookingDialog from "../../components/BookingCar";
import GlobalAvailabilitySection from "../../components/Map";
import SOPsSection from "../SOPsSection";
import BestPracticesSection from "../../components/BestPractise";

export default function MICEGurugram() {
    const [dialogOpen, setDialogOpen] = useState(false);

    return (
        <section className="bg-[#FFFFFF] text-gray-900">

            {/* ================= SEO ================= */}
            <Helmet>
                <title>MICE Transport Services in Gurugram | Corporate Event Mobility | TaxiTribe</title>
                <meta
                    name="description"
                    content="TaxiTribe provides professional MICE transport services in Gurugram for meetings, conferences, exhibitions and corporate events with dedicated fleets and on-ground coordination."
                />
                <link
                    rel="canonical"
                    href="https://taxitribe.in/services/mice/gurugram"
                />
            </Helmet>

            {/* ================= HERO ================= */}
            <div className="relative min-h-[70vh] flex items-center">
                <img
                    src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=2000&q=70"
                    alt="MICE Transport Services in Gurugram"
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
                                <a href="/services/mice" className="hover:underline">
                                    MICE Services
                                </a>
                            </li>
                            <li className="text-gray-400">/</li>
                            <li className="font-semibold text-amber-300">Gurugram</li>
                        </ol>
                    </nav>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white max-w-4xl">
                        MICE Transport Services in{" "}
                        <span className="text-amber-500">Gurugram</span>
                    </h1>

                    <p className="mt-6 text-lg text-gray-200 max-w-3xl">
                        End-to-end transportation solutions for meetings, incentives,
                        conferences and corporate events across Gurugram and NCR.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <button
                            onClick={() => setDialogOpen(true)}
                            className="bg-amber-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-amber-700 transition"
                        >
                            Plan Event Transport
                        </button>

                        <a
                            href="tel:+917011438890"
                            className="px-8 py-4 border border-white/30 text-white rounded-lg hover:bg-white/10 transition"
                        >
                            Call Event Desk
                        </a>
                    </div>
                </div>
            </div>

            {/* ================= ABOUT SERVICE ================= */}
            <div className="container mx-auto px-6 py-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">
                            Corporate MICE Transportation in Gurugram – Precision Driven
                        </h2>

                        <p className="text-gray-700 mb-4 leading-relaxed">
                            Gurugram is India’s leading corporate and MNC hub, hosting
                            high-profile conferences, leadership meets, product launches
                            and large-scale corporate events.
                            TaxiTribe delivers specialized MICE transportation services
                            in Gurugram to handle complex mobility requirements flawlessly.
                        </p>

                        <p className="text-gray-700 mb-4 leading-relaxed">
                            From airport transfers for senior leadership to multi-venue
                            shuttle movements, VIP convoys and tight schedules,
                            our experienced operations team ensures seamless execution.
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            Trusted by corporates, global enterprises, event planners
                            and hospitality partners, TaxiTribe provides reliable,
                            punctual and brand-aligned event mobility across Gurugram.
                        </p>
                    </div>

                    <div className="rounded-2xl overflow-hidden shadow-sm">
                        <img
                            src="/2.jpeg"
                            alt="Corporate event transport Gurugram"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* ================= WHY CHOOSE ================= */}
            <div className="bg-white border-t border-b border-gray-100">
                <div className="container mx-auto px-6 py-20">
                    <h2 className="text-3xl font-bold text-center mb-6">
                        Why Choose TaxiTribe for MICE in Gurugram?
                    </h2>

                    <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
                        MICE transportation in Gurugram requires strict timelines,
                        executive-level service and real-time coordination — exactly
                        what TaxiTribe delivers.
                    </p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: <FaCalendarAlt />,
                                text: "Detailed pre-event planning & route simulations",
                            },
                            {
                                icon: <FaUsers />,
                                text: "Scalable fleets for delegates, teams & CXOs",
                            },
                            {
                                icon: <FaShieldAlt />,
                                text: "Trained chauffeurs with executive protocols",
                            },
                            {
                                icon: <FaHeadset />,
                                text: "Dedicated event command center & 24×7 support",
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
                    How Our MICE Transport Process Works
                </h2>

                <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
                    A structured, enterprise-grade process for flawless event execution.
                </p>

                <div className="grid md:grid-cols-4 gap-8">
                    {[
                        {
                            title: "Requirement Mapping",
                            desc: "Event dates, venues, guest count & movement flow.",
                        },
                        {
                            title: "Transport Blueprint",
                            desc: "Fleet planning, routes, staging & timelines.",
                        },
                        {
                            title: "Live Execution",
                            desc: "On-ground coordinators & real-time monitoring.",
                        },
                        {
                            title: "Post-Event Closure",
                            desc: "Reporting, billing & service review.",
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
                        Hosting a Corporate Event in Gurugram?
                    </h2>
                    <p className="text-gray-700 mb-8">
                        Trust TaxiTribe for seamless MICE transportation execution.
                    </p>
                    <button
                        onClick={() => setDialogOpen(true)}
                        className="bg-amber-600 text-white px-10 py-4 rounded-lg font-bold hover:bg-amber-700 transition"
                    >
                        Get Event Transport Quote
                    </button>
                </div>
            </div>

            {/* ================= BOOKING DIALOG ================= */}
            <BookingDialog
                open={dialogOpen}
                model="MICE Transport Service – Gurugram"
                onOpenChange={setDialogOpen}
                onSubmit={() => setDialogOpen(false)}
            />
        </section>
    );
}
