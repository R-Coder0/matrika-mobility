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
 * CorporateGurgaonPage — content adapted from Delhi/Noida -> Gurgaon
 */

export default function CorporateGurgaonPage() {
    const [dialogOpen, setDialogOpen] = useState(false);
        const [openIndex, setOpenIndex] = useState(null);

    const services = [
        {
            icon: <Briefcase className="h-8 w-8 text-amber-500" />,
            title: "Executive Corporate Travel",
            description:
                "SLA-backed rentals for executives — punctual, discreet and secure across Gurgaon and its business corridors.",
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
                "End-to-end fleet coordination for conferences, exhibitions and corporate events in Gurgaon’s commercial hubs.",
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
            description: "Premium and vintage vehicles for high-profile ceremonies and celebrations across Gurgaon.",
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
            description: "Flight-aware pickups with meet-and-greet and baggage assistance for passengers in Gurgaon and surrounding areas.",
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
        question: "What corporate car rental services does TaxiTribe offer in Gurgaon?",
        answer:
            "TaxiTribe offers corporate car rental services in Gurgaon for daily employee commutes, shift-based travel, executive movement, airport transfers, long-term rentals, and transportation for corporate events or conferences."
    },
    {
        question: "Which areas in Gurgaon are covered for employee transportation?",
        answer:
            "Employee transportation is supported across key business areas such as Cyber City, Udyog Vihar, Golf Course Road, Sohna Road, and nearby office corridors. Coverage can be expanded based on team size, routes, or changing work locations."
    },
    {
        question: "How does TaxiTribe manage on-time pickups despite Gurgaon traffic?",
        answer:
            "Pickups are managed using defined timelines, experienced drivers familiar with Gurgaon routes, and live trip tracking. A central operations team actively monitors trips and intervenes in case of traffic delays or schedule changes."
    },
    {
        question: "What safety measures are provided, especially for women employees?",
        answer:
            "All drivers are police-verified and trained for professional conduct. Every trip includes live tracking and access to a WhatsApp-based SOS system, ensuring timely assistance during early morning or late-night travel."
    },
    {
        question: "How does billing work for corporate travel?",
        answer:
            "Corporate billing is handled through a single consolidated invoice supported by detailed MIS reports, helping admin and finance teams easily track, verify, and manage travel expenses across departments."
    }
];


    return (
        <div className="min-h-screen bg-[#FFFAFA] text-black">
            <Helmet>
                <title>Best Corporate Car Rental in Gurgaon | TaxiTribe</title>
                <meta
                    name="description"
                    content="Best corporate car rental in Gurugram — SLA-backed corporate programs, airport transfers and event transportation with dedicated account managers."
                />
                <link rel="canonical" href="https://taxitribe.in/corporate/corporate-in-gurugram" />
            </Helmet>

            {/* HERO */}
            <header className="relative">
                <div
                    className="h-56 md:h-100 bg-center bg-cover relative"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('/gurgaon.png')",
                    }}
                    role="img"
                    aria-label="Corporate car rental in Gurgaon"
                >
                    <div className="max-w-[1500px] mx-auto px-6 h-full flex items-center">
                        <div className="w-full md:w-2/3 lg:w-1/2 text-white z-10">
                            <nav aria-label="Breadcrumb" className="text-sm text-gray-200 mb-2">
                                <ol className="flex items-center gap-2">
                                    <li>
                                        <a href="/" className="hover:underline">Home</a>
                                    </li>
                                    <li className="text-gray-400">/</li>
                                    <li>
                                        <a href="/corporate-protocol" className="hover:underline">Corporate</a>
                                    </li>
                                    <li className="text-gray-400">/</li>
                                    <li className="font-semibold text-amber-300">Gurgaon</li>
                                </ol>
                            </nav>

                            <h1 className="text-2xl md:text-3xl font-bold leading-snug">
                                Best Corporate Car Rental in Gurgaon
                            </h1>

                            <p className="mt-3 text-sm md:text-base text-gray-200 max-w-xl">
                                TaxiTribe provides a reliable corporate car rental service in Gurgaon for corporate employee transportation. These services are backed by defined SLAs, 24×7 support, verified drivers, and transparent billing.
                            </p>

                            <div className="mt-4 flex items-center gap-3">
                                <button
                                    onClick={() => setDialogOpen(true)}
                                    className="bg-amber-500 text-black px-4 py-2 rounded-full font-semibold shadow-sm hover:bg-amber-600 transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-300"
                                    aria-label="Get quote"
                                >
                                    Get Quote
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* MAIN */}
            <main className="max-w-[1500px] mx-auto px-6 py-12">
                {/* ABOUT — two-column layout: left text/cta, right 6-card grid */}
                <section className="mb-12">
                    <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        {/* Left column: intro + CTA */}
                        <div className="lg:col-span-5">
                            <h2 className="text-2xl font-semibold mb-4">About Taxitribe</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                TaxiTribe is a corporate car rental service provider supporting employee and executive travel across Gurgaon. Our services are tailored for companies that need employee transportation across business zones like Cyber City, Udyog Vihar, Golf Course Road, etc. Our focus is on
                                making daily travel easier and safer with trained, police-verified drivers, live tracking, and central coordination.
                            </p>

                            <ul className="text-gray-700 mb-6 space-y-2">
                                <li>• SLA-backed daily transfers & airport services</li>
                                <li>• Dedicated account managers & MIS exports</li>
                                <li>• Event logistics & bulk bookings</li>
                            </ul>

                            <div className="flex gap-3">
                                <button
                                    onClick={() => setDialogOpen(true)}
                                    className="bg-black text-white px-5 py-2 rounded-md font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-black"
                                >
                                    Request a Pilot
                                </button>
                                <a href="#faqs" className="underline self-center text-gray-700 cursor-pointer">See FAQs</a>
                            </div>
                        </div>

                        {/* Right column: 6 cards */}
                        <div className="lg:col-span-7">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {benefits.map((b, i) => (
                                    <div
                                        key={i}
                                        className="flex gap-4 items-start bg-white rounded-lg p-4 shadow-sm hover:shadow-md transform hover:-translate-y-1 transition"
                                        style={{ minHeight: 120 }}
                                    >
                                        <div className="shrink-0">
                                            <div className="w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center">
                                                {b.icon}
                                            </div>
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

                {/* TAILORED SERVICES */}
                <section className="mb-16">
                    {/* SECTION HEADING */}
                    <h2 className="text-2xl font-semibold text-center mb-12">
                        Corporate Car Rental Services in Delhi NCR by TaxiTribe
                    </h2>

                    {/* SERVICES LIST */}
                    <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {/* 1 */}
                        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                            <h3 className="text-lg font-semibold mb-3">
                                Daily Corporate Employee Transportation
                            </h3>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                Reliable employee mobility solutions across key business hubs such as Cyber City, Golf Course Road, Udyog Vihar, and other major corporate zones.
                            </p>
                        </div>

                        {/* 2 */}
                        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                            <h3 className="text-lg font-semibold mb-3">
                                Shift-Based Travel Support
                            </h3>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                Transportation support for early morning, late night, and rotational shifts with live tracking, monitored pickups, and built-in safety measures.
                            </p>
                        </div>

                        {/* 3 */}
                        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                            <h3 className="text-lg font-semibold mb-3">
                                Executive and Leadership Travel
                            </h3>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                Chauffeur-driven premium cars for senior management, leadership teams, and client-facing roles with a focus on comfort, punctuality, and discretion.
                            </p>
                        </div>

                        {/* 4 */}
                        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                            <h3 className="text-lg font-semibold mb-3">
                                Airport Transfers
                            </h3>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                Flight-aware airport pickups and drops for employees and executives, with coordination support for delays, reschedules, and last-minute changes.
                            </p>
                        </div>

                        {/* 5 */}
                        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                            <h3 className="text-lg font-semibold mb-3">
                                Long-Term Corporate Car Rentals
                            </h3>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                Dedicated vehicles for long-term usage, ideal for extended projects, ongoing roles, and fixed corporate travel requirements.
                            </p>
                        </div>

                        {/* 6 */}
                        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                            <h3 className="text-lg font-semibold mb-3">
                                Event and Conference Transportation
                            </h3>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                End-to-end transportation management for corporate events, conferences, and off-sites with staggered pickups, multi-location drops, and central coordination across Gurgaon.
                            </p>
                        </div>

                    </div>
                </section>

{/* WHY CHOOSE TAXITRIBE */}
<section className="mb-16">
    {/* SECTION HEADING */}
    <h2 className="text-2xl font-semibold text-center mb-12">
        Why Choose TaxiTribe for Corporate Car Rental in Gurgaon?
    </h2>

    {/* FEATURES LIST */}
    <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* 1 */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold mb-3">
                Defined SLAs for Predictable Travel
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
                Clearly defined service level agreements ensure on-time pickups, faster issue resolution, and consistent service quality across all Gurgaon routes and office locations.
            </p>
        </div>

        {/* 2 */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold mb-3">
                24×7 Operations with Dedicated Car Desk
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
                Our round-the-clock operations team manages bookings, route changes, and escalations efficiently, supporting dynamic office hours and shift-based travel across Gurgaon.
            </p>
        </div>

        {/* 3 */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold mb-3">
                Police-Verified & Trained Drivers
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
                All drivers are police-verified, professionally trained, and experienced with Gurgaon’s business zones, ensuring safe, smooth, and disciplined daily commutes.
            </p>
        </div>

        {/* 4 */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold mb-3">
                Built-In Safety for Women Travellers
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
                Every trip includes live tracking and a WhatsApp-based SOS support system, providing timely assistance and enhanced safety for women employees.
            </p>
        </div>

        {/* 5 */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold mb-3">
                Well-Maintained & Reliable Vehicles
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
                Vehicles operating in Gurgaon are under three years old and regularly maintained, minimising breakdowns and ensuring consistent comfort for daily and long routes.
            </p>
        </div>

        {/* 6 */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold mb-3">
                Real-Time Monitoring & Transparent Billing
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
                Live trip monitoring with central coordination helps manage traffic or schedule disruptions, while consolidated billing with MIS reports ensures clear expense tracking.
            </p>
        </div>

    </div>
</section>

                {/* SOPs & Best Practices */}
                <SOPsSection />
                <BestPracticesSection />

               {/* FAQs */}
                <section className="py-16 bg-[#FFFAFA]">
                    <div className="max-w-4xl mx-auto px-6 ">

                        {/* Header */}
                        <div className="text-center mb-10">
                            <h2 className="text-4xl font-bold text-gray-900">
                                Frequently Asked <span className="text-amber-600">Questions</span>
                            </h2>
                            <p className="mt-3 text-gray-600">
                                Everything you need to know about TaxiTribe services
                            </p>
                        </div>

                        {/* Accordion */}
                        <div className="space-y-4">
                            {faqs.map((faq, index) => {
                                const isOpen = openIndex === index;

                                return (
                                    <div
                                        key={index}
                                        className="rounded-xl border border-gray-200 bg-white overflow-hidden transition"
                                    >
                                        {/* Question */}
                                        <button
                                            onClick={() => setOpenIndex(isOpen ? null : index)}
                                            className="w-full flex justify-between items-center px-6 py-4 text-left"
                                        >
                                            <span className="text-gray-900 font-semibold">
                                                {faq.question}
                                            </span>

                                            <span
                                                className={`text-2xl font-light text-amber-600 transition-transform duration-300 ${isOpen ? "rotate-45" : ""
                                                    }`}
                                            >
                                                +
                                            </span>
                                        </button>

                                        {/* Answer (hidden by default) */}
                                        <div
                                            className={`grid transition-all duration-300 ease-in-out ${isOpen
                                                    ? "grid-rows-[1fr] opacity-100"
                                                    : "grid-rows-[0fr] opacity-0"
                                                }`}
                                        >
                                            <div className="overflow-hidden px-6 pb-5 text-gray-700 text-sm leading-relaxed">
                                                {faq.answer}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                    </div>
                </section>


                {/* FINAL CTA */}
                <div className="bg-linear-to-r from-amber-500 to-amber-600 shadow-xl overflow-hidden">
                    <div className="grid md:grid-cols-2">
                        <div className="p-12">
                            <h2 className="text-2xl font-bold mb-4">Ready to elevate your corporate travel</h2>
                            <p className="text-lg mb-8">
                                “Guaranteed 10% savings on your current annual spends”
                            </p>
                            <button onClick={() => setDialogOpen(true)} className="bg-black text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-900 transition-colors">
                                Get Quote
                            </button>
                        </div>
                        <div className="hidden md:block bg-[url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800')] bg-cover bg-center"></div>
                    </div>
                </div>
            </main>

            {/* Booking Dialog */}
            <BookingDialog
                open={dialogOpen}
                model="Corporate Rental Program - Gurgaon"
                onOpenChange={setDialogOpen}
                onSubmit={(payload) => {
                    console.log("Corporate Service Booking Payload:", payload);
                    setDialogOpen(false);
                }}
            />
        </div>
    );
}
