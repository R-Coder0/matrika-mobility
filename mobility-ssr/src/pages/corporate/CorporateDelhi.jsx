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
    FaShieldAlt,
    FaCarSide,
    FaUsersCog,
} from "react-icons/fa";
import SOPsSection from "../SOPsSection";
import BestPracticesSection from "../../components/BestPractise";
import { Helmet } from "react-helmet-async";

/**
 * CorporateDelhiPage — improved About alignment + polish
 * - max width 1700px
 * - hero compact + breadcrumbs
 * - About: two-column (text + 6 card grid), aligned & consistent
 * - All CTAs have cursor-pointer and focus styles
 */

export default function CorporateDelhiPage() {
    const [dialogOpen, setDialogOpen] = useState(false);

    const services = [
        {
            icon: <Briefcase className="h-8 w-8 text-amber-500" />,
            title: "Executive Corporate Travel",
            description:
                "SLA-backed rentals for executives — punctual, discreet and secure.",
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
                "End-to-end fleet coordination for conferences, exhibitions and corporate events.",
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
            description: "Premium and vintage vehicles for high-profile ceremonies.",
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
            description: "Flight-aware pickups with meet-and-greet and baggage assistance.",
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
            title: "Defined SLAs",
            desc: "Travel in Delhi requires clarity. With clearly defined service-level agreements, pickups stay on time, issues are resolved quickly, and service standards remain consistent across routes and locations.",
        },
        {
            icon: <FaCogs className="text-amber-500 h-6 w-6" />,
            title: "24×7 Operations and Dedicated Car Desk",
            desc: "Daily travel schedules often change. Our operations team works 24×7 to manage bookings, route changes, and escalations across Delhi and nearby areas.",
        },
        {
            icon: <FaUsers className="text-amber-500 h-6 w-6" />,
            title: "Police-Verified Drivers",
            desc: "All drivers are police-verified and trained to follow professional conduct. This helps reduce safety risks and complaints during regular travel.",
        },
        {
            icon: <FaShieldAlt className="text-amber-500 h-6 w-6" />,
            title: "Built-In Safety Support for Women",
            desc: "Every trip includes live tracking and access to a WhatsApp-based SOS system. This ensures timely support for women travellers during late hours or long routes.",
        },
        {
            icon: <FaCarSide className="text-amber-500 h-6 w-6" />,
            title: "Modern, Well-Maintained Vehicles",
            desc: "All vehicles operating in Delhi are under three years old. This lowers the chance of breakdowns and ensures consistent comfort across daily and long-distance travel.",
        },
        {
            icon: <FaTachometerAlt className="text-amber-500 h-6 w-6" />,
            title: "Technology-Led Monitoring and Coordination",
            desc: "Trips are monitored in real time through live tracking and central coordination. This allows quicker response when traffic or schedule changes occur.",
        },
        {
            icon: <FaFileInvoice className="text-amber-500 h-6 w-6" />,
            title: "Transparent Billing and MIS Reporting",
            desc: "One consolidated invoice with detailed MIS reports helps admin and finance teams manage travel expenses across multiple locations.",
        },
        {
            icon: <FaUsersCog className="text-amber-500 h-6 w-6" />,
            title: "Expert Drivers with Scalable Reach",
            desc: "Drivers familiar with routes, traffic conditions, and shift timings support smooth travel and allow services to scale as requirements grow.",
        },
    ];


const faqs = [
  {
    question: "What types of corporate car rental services does TaxiTribe offer in Delhi?",
    answer:
      "TaxiTribe provides corporate car rental services in Delhi for daily employee transportation, shift-based travel, executive and leadership movement, airport transfers, long-term corporate rentals, and event or conference transportation.",
  },
  {
    question: "Which areas in Delhi does TaxiTribe cover for corporate employee transportation?",
    answer:
      "TaxiTribe supports corporate travel across major business hubs in Delhi, including Nehru Place, Connaught Place, Aerocity, and nearby commercial zones, with the ability to scale coverage based on organisational needs.",
  },
  {
    question: "How does TaxiTribe ensure on-time pickups in Delhi traffic conditions?",
    answer:
      "TaxiTribe operates with defined SLAs, trained drivers familiar with local routes, and real-time trip monitoring. A dedicated operations team manages coordination and route adjustments to minimise delays.",
  },
  {
    question: "What safety measures are in place for employees, especially women travellers?",
    answer:
      "All drivers are police-verified and professionally trained. Trips include live tracking, in-vehicle safety features, and a WhatsApp-based SOS system to ensure timely support during travel, including late-night or early-morning shifts.",
  },
  {
    question: "How does billing work for corporate car rental services in Delhi?",
    answer:
      "TaxiTribe follows a transparent and centralised billing process. Corporate clients receive a single consolidated invoice along with detailed MIS reports, making expense tracking and reconciliation easier for admin and finance teams.",
  },
];

    const [openIndex, setOpenIndex] = useState(null);

    return (
        <div className="min-h-screen bg-[#FFFAFA] text-black">
            <Helmet>
                <title>Best Corporate Car Rental in Delhi | TaxiTribe</title>
                <meta
                    name="description"
                    content="Best corporate car rental in delhi — SLA-backed corporate programs, airport transfers and event transportation with dedicated account managers."
                />
                <link rel="canonical" href="hhttps://taxitribe.in/corporate-car-rental-delhi" />
            </Helmet>

            {/* HERO */}
            <header className="relative">
                <div
                    className="h-56 md:h-100 bg-center bg-cover relative"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('/delhi.png')",
                    }}
                    role="img"
                    aria-label="Corporate car rental in Delhi"
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
                                    <li className="font-semibold text-amber-300">Delhi</li>
                                </ol>
                            </nav>

                            <h1 className="text-2xl md:text-3xl font-bold leading-snug">
                                Best Corporate Car Rental in Delhi
                            </h1>

                            <p className="mt-3 text-sm md:text-base text-gray-200 max-w-xl">
                                TaxiTribe provides a reliable corporate car rental service in Delhi for corporate employee transportation. These services are backed by defined SLAs, 24×7 support, verified drivers, and transparent billing.

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
                    <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-10 gap-8 items-start">
                        {/* Left column: intro + CTA */}
                        <div className="lg:col-span-5">
                            <h2 className="text-2xl font-semibold mb-4">Corporate Car Rental Services in Delhi by TaxiTribe</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                TaxiTribe is a corporate car rental service provider in Delhi, supporting travel across major business hubs such as Nehru Place, Connaught Place and Aerocity. With trained drivers, modern vehicles, live tracking, and transparent pricing, TaxiTribe makes travel easier to plan and manage, even when schedules or requirements change.
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
                        <div className="lg:col-span-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <img
                                    src="/corporate/delhiabout2.jpg"
                                    alt="Corporate Travel Service"
                                    className="w-full h-64 object-cover rounded-xl shadow-sm"
                                />
                                <img
                                    src="/corporate/delhiabout3.jpg"
                                    alt="Airport Transfer Service"
                                    className="w-full h-64 object-cover rounded-xl shadow-sm"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* TAILORED SERVICES */}
                <section className="mb-16">
                    {/* SECTION HEADING */}
                    <h2 className="text-2xl font-semibold text-center mb-12">
                        Corporate Car Rental Services in Delhi by TaxiTribe
                    </h2>

                    {/* SERVICES LIST */}
                    <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {/* 1 */}
                        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                            <h3 className="text-lg font-semibold mb-3">
                                Daily Corporate Employee Transportation
                            </h3>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                Reliable office commute solutions covering major business hubs like Nehru Place, Connaught Place, Aerocity, and more.
                            </p>
                        </div>

                        {/* 2 */}
                        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                            <h3 className="text-lg font-semibold mb-3">
                                Shift-Based Travel Support
                            </h3>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                Managed transportation for early morning, late night, and rotational shifts with safety and tracking in place.
                            </p>
                        </div>

                        {/* 3 */}
                        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                            <h3 className="text-lg font-semibold mb-3">
                                Executive and Leadership Travel
                            </h3>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                Chauffeur-driven cars for senior management, client meetings, and official travel requirements.
                            </p>
                        </div>

                        {/* 4 */}
                        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                            <h3 className="text-lg font-semibold mb-3">
                                Airport Transfers
                            </h3>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                Flight-aware pickups and drops for employees and executives, including support for delays and schedule changes.
                            </p>
                        </div>

                        {/* 5 */}
                        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                            <h3 className="text-lg font-semibold mb-3">
                                Long-Term Corporate Car Rentals
                            </h3>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                Dedicated vehicles for extended usage, suitable for projects, ongoing roles, and fixed business requirements.
                            </p>
                        </div>

                        {/* 6 */}
                        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                            <h3 className="text-lg font-semibold mb-3">
                                Event and Conference Transportation
                            </h3>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                Coordinated movement for corporate events, meetings, and off-sites with staggered pickups and multi-location drops.
                            </p>
                        </div>

                    </div>
                </section>



                {/* WHY CHOOSE — redesigned (two-column story + 6 polished cards) */}
                <section className="mb-12">
                    <div className="max-w-[1500px] mx-auto flex flex-col gap-10">

                        {/* TOP AREA — TEXT LEFT | IMAGES RIGHT */}
                        <div className="flex flex-col lg:flex-row gap-10 items-start">

                            {/* LEFT — TEXT + CTA */}
                            <div className="max-w-[700px] mx-auto">
                                <h3 className="text-2xl font-semibold mb-4">
                                    Why Choose TaxiTribe for Corporate Car Rental in Delhi?
                                </h3>

                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Operating in Delhi NCR is different — congested corridors, weather
                                    disruptions and time-sensitive corporate schedules demand predictable
                                    mobility. TaxiTribe combines local expertise with SLA-driven operations
                                    to keep your workforce moving on time.
                                </p>

                                <p className="text-gray-700 leading-relaxed mb-6">
                                    Our corporate program reduces downtime, centralizes billing, and gives
                                    your team reliable chauffeurs, real-time tracking and clean MIS-ready
                                    reporting.
                                </p>

                                <button
                                    onClick={() => setDialogOpen(true)}
                                    className="bg-amber-500 text-black px-5 py-2 rounded-md font-medium shadow-sm hover:bg-amber-600 transition focus:outline-none focus:ring-2 focus:ring-amber-300"
                                >
                                    Request a Corporate Quote
                                </button>
                            </div>

                            {/* RIGHT — IMAGES */}
                            <div className="w-full lg:max-w-[600px]">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <img
                                        src="/corporate/delhiwhy.png"
                                        alt="Corporate Travel Service"
                                        className="w-full h-64 object-cover rounded-xl shadow-sm"
                                    />
                                    <img
                                        src="/corporate/delhiwhy2.png"
                                        alt="Airport Transfer Service"
                                        className="w-full h-64 object-cover rounded-xl shadow-sm"
                                    />
                                </div>
                            </div>

                        </div>

                        {/* BENEFITS — 4 CARDS PER ROW */}
                        <div className="flex flex-wrap gap-4">
                            {benefits.map((b, idx) => (
                                <div
                                    key={idx}
                                    className="
            flex gap-4 items-start bg-white rounded-lg p-4 shadow-sm
            hover:shadow-md transition
            w-full
            sm:w-[calc(50%-0.5rem)]
            lg:w-[calc(25%-0.75rem)]
          "
                                >
                                    <div className="shrink-0 w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center">
                                        <div className="text-amber-500">{b.icon}</div>
                                    </div>

                                    <div className="flex-1">
                                        <h4 className="font-semibold mb-1">{b.title}</h4>
                                        <p className="text-sm text-gray-700">{b.desc}</p>
                                    </div>
                                </div>
                            ))}
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

                {/* Reviews */}

<section className="mb-16">
  <div className="max-w-[1400px] mx-auto">

    {/* SECTION HEADING */}
    <h3 className="text-2xl font-semibold text-center mb-10">
      Reviews
    </h3>

    {/* REVIEWS GRID */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

      {/* Review 1 */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          We use TaxiTribe for daily employee transport in Delhi and the experience has been reliable so far. Pickups are mostly on time despite traffic, drivers are professional, and when schedules change the operations team steps in quickly, which makes daily coordination easier
        </p>
        <p className="font-semibold text-sm text-gray-900">
          Rahul Mehta
        </p>
      </div>

      {/* Review 2 */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          Our office runs late shifts, so safety was a major concern from day one. Live tracking and the SOS support helped, especially for women employees travelling at night, and over time it felt more organised and reassuring than vendors we had used earlier.
        </p>
        <p className="font-semibold text-sm text-gray-900">
          Ananya Singh
        </p>
      </div>

      {/* Review 3 */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          We booked TaxiTribe for executive travel between Connaught Place and Aerocity. The cars were clean, drivers were familiar with the routes, and even when meetings ran late, coordination stayed smooth without repeated follow-ups.
        </p>
        <p className="font-semibold text-sm text-gray-900">
          Vikram Khanna
        </p>
      </div>

      {/* Review 4 */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          We needed airport transfers for multiple employees on different flights, which usually turns messy. TaxiTribe handled delays and timing changes without us chasing updates, so the whole process felt more controlled and predictable.
        </p>
        <p className="font-semibold text-sm text-gray-900">
          Priya Malhotra
        </p>
      </div>

      {/* Review 5 */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition sm:col-span-2 lg:col-span-1">
        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          We used TaxiTribe for a corporate event in Delhi with multiple pickup points across the city. Managing guest movement is usually stressful, but their on-ground team handled coordination well and everything stayed on schedule.
        </p>
        <p className="font-semibold text-sm text-gray-900">
          Saurabh Jain
        </p>
      </div>

    </div>
  </div>
</section>

                {/* FINAL CTA */}
                {/* CTA Section */}
                <div className="bg-linear-to-r from-amber-500 to-amber-600 shadow-xl overflow-hidden">
                    <div className="grid md:grid-cols-2">
                        <div className="p-12">
                            <h2 className="text-2xl font-bold mb-4">Ready to elevate your corporate travel</h2>
                            <p className="text-lg mb-8">
                                “Guaranteed 10% savings on your current annual spends”
                            </p>
                            <button onClick={() => setDialogOpen(true)} className="bg-black text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-900 transition-colors">
                                Get Guote
                            </button>
                        </div>
                        <div className="hidden md:block bg-[url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800')] bg-cover bg-center"></div>
                    </div>
                </div>
            </main>

            {/* Booking Dialog */}
            <BookingDialog
                open={dialogOpen}
                model="Corporate Rental Program - Delhi"
                onOpenChange={setDialogOpen}
                onSubmit={(payload) => {
                    console.log("Corporate Service Booking Payload:", payload);
                    setDialogOpen(false);
                }}
            />
        </div>
    );
}
