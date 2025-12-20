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
 * CorporateNoidaPage — content adapted from Delhi -> Noida
 */

export default function CorporateNoidaPage() {
    const [dialogOpen, setDialogOpen] = useState(false);

    const services = [
        {
            icon: <Briefcase className="h-8 w-8 text-amber-500" />,
            title: "Executive Corporate Travel",
            description:
                "SLA-backed rentals for executives — punctual, discreet and secure across Noida & Greater Noida.",
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
                "End-to-end fleet coordination for conferences, exhibitions and corporate events in Noida's business districts.",
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
            description: "Premium and vintage vehicles for high-profile ceremonies and celebrations across Noida.",
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
            description: "Flight-aware pickups with meet-and-greet and baggage assistance for Noida travellers.",
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
                <title>Best Corporate Car Rental in Noida | TaxiTribe</title>
                <meta
                    name="description"
                    content="Best corporate car rental in Noida — SLA-backed corporate programs, airport transfers and event transportation with dedicated account managers."
                />
                <link rel="canonical" href="https://taxitribe.in/corporate/corporate-in-noida" />
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
                    aria-label="Corporate car rental in Noida"
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
                                    <li className="font-semibold text-amber-300">Noida</li>
                                </ol>
                            </nav>

                            <h1 className="text-2xl md:text-3xl font-bold leading-snug">
                                Best Corporate Car Rental in Noida
                            </h1>

                            <p className="mt-3 text-sm md:text-base text-gray-200 max-w-xl">
                                SLA-backed corporate car rental programs across Noida & Greater Noida — dedicated account managers, real-time tracking and finance-ready reporting.
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
                            <h2 className="text-2xl font-semibold mb-4">About Our Noida Corporate Program</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                TaxiTribe delivers corporate mobility built for Noida’s pace — reliable SLAs, trained chauffeurs and finance-ready reporting.
                                We help companies reduce downtime, centralize billing and improve employee on-time performance across Noida, Noida Expressway and Greater Noida.
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
  <h3 className="text-2xl font-semibold text-center mb-10">
    Tailored Corporate Services
  </h3>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {services.map((s, i) => (
      <article
        key={i}
        className="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden"
      >
        {/* IMAGE */}
        <div className="relative h-44 overflow-hidden">
          <img
            src={s.image}
            alt={s.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
            loading="lazy"
          />
        </div>

        {/* CONTENT */}
        <div className="flex-1 p-5 flex flex-col">
          <div className="flex items-start gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center shrink-0">
              {s.icon}
            </div>
            <h4 className="text-lg font-semibold leading-snug">
              {s.title}
            </h4>
          </div>

          <p className="text-sm text-gray-700 mb-4">
            {s.description}
          </p>

          <ul className="text-sm text-gray-700 space-y-1 mb-6">
            {s.features.map((f, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-amber-500 mr-2 mt-1">•</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <button
            onClick={() => setDialogOpen(true)}
            className="mt-auto inline-flex items-center gap-2 text-amber-600 font-medium hover:text-amber-700 transition"
          >
            Get Quote <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </article>
    ))}
  </div>
</section>


                {/* WHY CHOOSE — redesigned (two-column story + 6 polished cards) */}
                <section className="mb-12">
                    <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        <div className="lg:col-span-5">
                            <h3 className="text-2xl font-semibold mb-4">
                                Why Corporations Trust TaxiTribe in Noida
                            </h3>

                            <p className="text-gray-700 leading-relaxed mb-4">
                                Noida's business hubs and expressway corridors need dependable mobility. TaxiTribe combines local knowledge with SLA-driven operations to keep your workforce moving on time.
                            </p>

                            <p className="text-gray-700 leading-relaxed mb-6">
                                Our corporate program reduces downtime, centralizes billing, and gives your team reliable chauffeurs, real-time tracking and clean MIS-ready reporting.
                            </p>

                            <button
                                onClick={() => setDialogOpen(true)}
                                className="bg-amber-500 text-black px-5 py-2 rounded-md font-medium shadow-sm hover:bg-amber-600 transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-300"
                            >
                                Request a Corporate Quote
                            </button>
                        </div>

                        <div className="lg:col-span-7">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {benefits.map((b, idx) => (
                                    <div
                                        key={idx}
                                        className="flex gap-4 items-start bg-white rounded-lg p-4 shadow-sm hover:shadow-md transform hover:-translate-y-1 transition"
                                        style={{ minHeight: 120 }}
                                    >
                                        <div className="shrink-0 w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center">
                                            <div className="text-amber-500">{b.icon}</div>
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

                {/* SOPs & Best Practices */}
                <SOPsSection />
                <BestPracticesSection />

                {/* FAQs */}
<section id="faqs" className="mt-14 mb-14">
  <h3 className="text-2xl font-semibold text-center mb-8">
    Frequently Asked Questions
  </h3>

  <div className="max-w-[1300px] mx-auto px-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {faqs.map((f, i) => (
        <details
          key={i}
          className="
            group
            bg-white
            border
            rounded-xl
            p-5
            shadow-sm
            hover:shadow-md
            transition
          "
        >
          <summary
            className="
              font-medium
              cursor-pointer
              list-none
              flex
              items-start
              justify-between
              gap-3
            "
          >
            <span className="text-gray-900">{f.q}</span>

            {/* Arrow */}
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
                model="Corporate Rental Program - Noida"
                onOpenChange={setDialogOpen}
                onSubmit={(payload) => {
                    console.log("Corporate Service Booking Payload:", payload);
                    setDialogOpen(false);
                }}
            />
        </div>
    );
}
