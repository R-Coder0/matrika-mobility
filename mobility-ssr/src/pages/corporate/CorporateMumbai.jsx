import React, { useState } from "react";
import { Briefcase, Users, Globe, ArrowRight, Heart } from "lucide-react";
import BookingDialog from "../../components/BookingCar";
import {
    FaHandshake,
    FaCogs,
    FaTachometerAlt,
    FaFileInvoice,
    FaCalendarAlt,
    FaUsers,
} from "react-icons/fa";
import SOPsSection from "../SOPsSection";
import BestPracticesSection from "../../components/BestPractise";
import { Helmet } from "react-helmet-async";

/**
 * CorporateMumbaiPage — content adapted for Mumbai
 */

export default function CorporateMumbaiPage() {
    const [dialogOpen, setDialogOpen] = useState(false);

    const services = [
        {
            icon: <Briefcase className="h-8 w-8 text-amber-500" />,
            title: "Executive Corporate Travel",
            description:
                "SLA-backed rentals for executives — punctual, discreet and secure across Mumbai’s corporate and financial corridors.",
            image: "/corporate/ect.webp",
            features: [
                "Hourly, daily & multi-day rental options",
                "Local & outstation trips",
                "Sedans, SUVs, luxury cars & tempo travellers",
            ],
        },
        {
            icon: <Users className="h-8 w-8 text-amber-500" />,
            title: "Event & Conference Transportation",
            description:
                "End-to-end fleet coordination for conferences, exhibitions and large-scale events across Mumbai and Navi Mumbai.",
            image: "/corporate/eact.jpg",
            features: [
                "Group shuttles & minibuses",
                "Staggered pickups & multi-venue drops",
                "Dedicated on-ground logistics team",
            ],
        },
        {
            icon: <Heart className="h-8 w-8 text-amber-500" />,
            title: "Wedding & Special Occasion Cars",
            description: "Premium and vintage vehicles for high-profile ceremonies and celebrations across Mumbai.",
            image: "/corporate/wsoc.jpg",
            features: [
                "Themed vehicle decor",
                "Chauffeured VIP transfers",
                "Flexible booking windows",
            ],
        },
        {
            icon: <Globe className="h-8 w-8 text-amber-500" />,
            title: "Airport Transfers",
            description: "Flight-aware transfers to/from Mumbai International Airport (T1/T2) — smooth and dependable.",
            image: "/corporate/at.jpg",
            features: [
                "Real-time flight tracking",
                "Meet-and-greet options",
                "Flight delay handling",
            ],
        },
    ];

    const benefits = [
        {
            icon: <FaHandshake className="text-amber-500 h-6 w-6" />,
            title: "SLA-Backed Reliability",
            desc: "Guaranteed pickup windows, proactive rerouting and on-time performance monitoring.",
        },
        {
            icon: <FaCogs className="text-amber-500 h-6 w-6" />,
            title: "Dedicated Account Managers",
            desc: "Single point of contact for billing, operations and escalations—fast resolution.",
        },
        {
            icon: <FaTachometerAlt className="text-amber-500 h-6 w-6" />,
            title: "Real-Time Tracking",
            desc: "Live vehicle positions, ETA updates and integrated alerts for stakeholders.",
        },
        {
            icon: <FaFileInvoice className="text-amber-500 h-6 w-6" />,
            title: "MIS & Finance-Ready Reports",
            desc: "Consolidated monthly invoicing, exportable reports and cost-centre tagging.",
        },
        {
            icon: <FaCalendarAlt className="text-amber-500 h-6 w-6" />,
            title: "Event & Bulk Expertise",
            desc: "Route planning, staggered pick-ups and dedicated event ops.",
        },
        {
            icon: <FaUsers className="text-amber-500 h-6 w-6" />,
            title: "Trained Drivers & Teams",
            desc: "Background-checked chauffeurs and pro operations staff trained for corporate service.",
        },
    ];

    const faqs = [
        {
            q: "Do you provide monthly billing for corporate clients?",
            a: "Yes — we offer consolidated monthly billing and customizable MIS reports tailored to your finance team.",
        },
        {
            q: "Can I add multiple employees under one account?",
            a: "Absolutely. Our corporate plans support multiple users with role-based access and individual reporting.",
        },
        {
            q: "What is your cancellation policy for corporate bookings?",
            a: "Cancellation windows vary by product. For standard corporate rentals, cancellations made 24 hours before pickup are free — please check the SLA for event/large bookings.",
        },
    ];

    return (
        <div className="min-h-screen bg-[#FFFAFA] text-black">
            <Helmet>
                <title>Best Corporate Car Rental in Mumbai | TaxiTribe</title>
                <meta
                    name="description"
                    content="Best corporate car rental in Mumbai — SLA-backed corporate programs, airport transfers and event transportation with dedicated account managers."
                />
                <link rel="canonical" href="https://taxitribe.in/corporate/corporate-in-mumbai" />
            </Helmet>

            {/* HERO */}
            <header className="relative">
                <div
                    className="h-56 md:h-100 bg-center bg-cover relative"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('/mumbai.png')",
                    }}
                    role="img"
                    aria-label="Corporate car rental in Mumbai"
                >
                    <div className="max-w-[1500px] mx-auto px-6 h-full flex items-center">
                        <div className="w-full md:w-2/3 lg:w-1/2 text-white z-10">

                            <nav aria-label="Breadcrumb" className="text-sm text-gray-200 mb-2">
                                <ol className="flex items-center gap-2">
                                    <li><a href="/" className="hover:underline">Home</a></li>
                                    <li className="text-gray-400">/</li>
                                    <li><a href="/corporate-protocol" className="hover:underline">Corporate</a></li>
                                    <li className="text-gray-400">/</li>
                                    <li className="font-semibold text-amber-300">Mumbai</li>
                                </ol>
                            </nav>

                            <h1 className="text-2xl md:text-3xl font-bold leading-snug">
                                Best Corporate Car Rental in Mumbai
                            </h1>

                            <p className="mt-3 text-sm md:text-base text-gray-200 max-w-xl">
                                SLA-backed corporate car rental programs across Mumbai — BKC, Andheri, Powai, Navi Mumbai and Lower Parel covered with dedicated account managers and real-time tracking.
                            </p>

                            <div className="mt-4 flex items-center gap-3">
                                <button
                                    onClick={() => setDialogOpen(true)}
                                    className="bg-amber-500 text-black px-4 py-2 rounded-full font-semibold shadow-sm hover:bg-amber-600 transition cursor-pointer focus:outline-none"
                                >
                                    Get Quote
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </header>

            {/* MAIN CONTENT */}
            <main className="max-w-[1500px] mx-auto px-6 py-12">

                {/* ABOUT SECTION */}
                <section className="mb-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                        {/* LEFT */}
                        <div className="lg:col-span-5">
                            <h2 className="text-2xl font-semibold mb-4">About Our Mumbai Corporate Program</h2>

                            <p className="text-gray-700 leading-relaxed mb-4">
                                TaxiTribe delivers corporate mobility crafted for Mumbai — high-density commercial zones, financial districts and airport-driven commutes.
                                We help companies reduce downtime, centralize billing and improve employee punctuality across BKC, Andheri, Powai, Lower Parel and Navi Mumbai.
                            </p>

                            <ul className="text-gray-700 mb-6 space-y-2">
                                <li>• SLA-backed daily transfers & airport services</li>
                                <li>• Dedicated account managers & MIS exports</li>
                                <li>• Event logistics & bulk bookings</li>
                            </ul>

                            <button
                                onClick={() => setDialogOpen(true)}
                                className="bg-black text-white px-5 py-2 rounded-md font-medium"
                            >
                                Request a Pilot
                            </button>
                        </div>

                        {/* RIGHT CARDS */}
                        <div className="lg:col-span-7">
                            <div className="grid sm:grid-cols-2 gap-4">
                                {benefits.map((b, i) => (
                                    <div
                                        key={i}
                                        className="flex gap-4 bg-white rounded-lg p-4 shadow-sm hover:shadow-md transform hover:-translate-y-1 transition"
                                        style={{ minHeight: 120 }}
                                    >
                                        <div className="w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center">
                                            {b.icon}
                                        </div>

                                        <div className="flex-1">
                                            <h4 className="font-semibold">{b.title}</h4>
                                            <p className="text-sm text-gray-700 mt-1">{b.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </section>

                {/* TAILORED SERVICES */}
                <section className="mb-12">
                    <h3 className="text-2xl font-semibold text-center mb-6">Tailored Services</h3>

                    <div className="grid md:grid-cols-2 gap-8">
                        {services.map((s, i) => (
                            <article key={i} className="rounded-xl shadow-lg overflow-hidden bg-white">
                                <div className="h-56 bg-gray-100">
                                    <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                                </div>

                                <div className="p-6">
                                    <div className="flex gap-4 items-start">
                                        <div className="mt-1">{s.icon}</div>

                                        <div>
                                            <h4 className="text-xl font-semibold mb-2">{s.title}</h4>
                                            <p className="text-gray-700 mb-3">{s.description}</p>

                                            <ul className="list-inside space-y-1 mb-4 text-gray-700">
                                                {s.features.map((f, idx) => (
                                                    <li key={idx} className="flex items-start">
                                                        <span className="text-amber-500 mr-2 mt-1">•</span>
                                                        {f}
                                                    </li>
                                                ))}
                                            </ul>

                                            <button
                                                onClick={() => setDialogOpen(true)}
                                                className="text-amber-500 font-medium flex items-center gap-2"
                                            >
                                                Get Quote <ArrowRight className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                {/* WHY CHOOSE SECTION */}
                <section className="mb-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                        {/* LEFT */}
                        <div className="lg:col-span-5">
                            <h3 className="text-2xl font-semibold mb-4">Why Corporations Trust TaxiTribe in Mumbai</h3>

                            <p className="text-gray-700 mb-4">
                                Mumbai’s business hubs, financial centres and airport-linked travel demand predictable corporate mobility. TaxiTribe brings SLA-driven operations with local expertise for maximum reliability.
                            </p>

                            <p className="text-gray-700 mb-6">
                                Our corporate mobility program improves punctuality, optimizes operational costs and streamlines billing through MIS-ready reporting.
                            </p>

                            <button
                                onClick={() => setDialogOpen(true)}
                                className="bg-amber-500 text-black px-5 py-2 rounded-md font-medium"
                            >
                                Request a Corporate Quote
                            </button>
                        </div>

                        {/* RIGHT CARDS */}
                        <div className="lg:col-span-7">
                            <div className="grid sm:grid-cols-2 gap-4">
                                {benefits.map((b, i) => (
                                    <div
                                        key={i}
                                        className="flex gap-4 bg-white rounded-lg p-4 shadow-sm hover:shadow-md transform hover:-translate-y-1 transition"
                                        style={{ minHeight: 120 }}
                                    >
                                        <div className="w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center">
                                            {b.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">{b.title}</h4>
                                            <p className="text-sm text-gray-700 mt-1">{b.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </section>

                {/* SOPs & BEST PRACTICES */}
                <SOPsSection />
                <BestPracticesSection />

                {/* FAQs */}
                <section id="faqs" className="my-12">
                    <h3 className="text-2xl font-semibold text-center mb-6">Frequently Asked Questions</h3>

                    <div className="max-w-[900px] mx-auto space-y-4">
                        {faqs.map((f, i) => (
                            <details key={i} className="bg-white border rounded-lg p-4">
                                <summary className="font-medium cursor-pointer">{f.q}</summary>
                                <p className="mt-2 text-gray-700">{f.a}</p>
                            </details>
                        ))}
                    </div>
                </section>

                {/* FINAL CTA */}
                <div className="bg-linear-to-r from-amber-500 to-amber-600 shadow-xl">
                    <div className="grid md:grid-cols-2">
                        <div className="p-12">
                            <h2 className="text-2xl font-bold mb-4">Ready to elevate your corporate travel?</h2>
                            <p className="text-lg mb-8">“Guaranteed 10% savings on your annual mobility spends.”</p>

                            <button
                                onClick={() => setDialogOpen(true)}
                                className="bg-black text-white px-8 py-3 rounded-lg font-bold"
                            >
                                Get Quote
                            </button>
                        </div>

                        <div className="hidden md:block bg-[url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800')] bg-cover bg-center"></div>
                    </div>
                </div>

            </main>

            {/* BOOKING DIALOG */}
            <BookingDialog
                open={dialogOpen}
                model="Corporate Rental Program - Mumbai"
                onOpenChange={setDialogOpen}
                onSubmit={(payload) => {
                    console.log("Corporate Service Booking Payload:", payload);
                    setDialogOpen(false);
                }}
            />
        </div>
    );
}
