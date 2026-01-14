import React from "react";
import {
  FaClock,
  FaCar,
  FaWallet,
  FaUserShield,
  FaRoute,
  FaUsers,
} from "react-icons/fa";
import { FaShield } from "react-icons/fa6";
import { MdOutlineSupportAgent } from "react-icons/md";

export default function BenefitsAndWhy() {
  const benefits = [
    {
      icon: <FaClock />,
      title: "Defined SLAs",
      desc:
        "Clear service-level agreements ensure timely pickups, faster issue resolution, and consistent service standards with full accountability.",
      tone: "amber",
    },
    {
      icon: <MdOutlineSupportAgent />,
      title: "24×7 Operations & Dedicated Car Desk",
      desc:
        "Round-the-clock support to manage bookings, modifications, and escalations in real time, even for last-minute schedule changes.",
      tone: "green",
    },
    {
      icon: <FaUserShield />,
      title: "Police-Verified Drivers",
      desc:
        "All drivers are police-verified and professionally trained to minimise safety risks and ensure a reliable travel experience.",
      tone: "blue",
    },
    {
      icon: <FaShield />,
      title: "Women Safety Support",
      desc:
        "Structured women safety protocols including live trip tracking and a WhatsApp-based SOS system for immediate emergency support.",
      tone: "rose",
    },
    {
      icon: <FaCar />,
      title: "Modern & Well-Maintained Vehicles",
      desc:
        "All vehicles are under three years old, offering better comfort, fewer breakdowns, and a consistently premium travel experience.",
      tone: "orange",
    },
    {
      icon: <FaRoute />,
      title: "Technology-Led Monitoring",
      desc:
        "Live trip visibility, centralized coordination, and proactive monitoring help prevent issues before they escalate.",
      tone: "sky",
    },
    {
      icon: <FaWallet />,
      title: "Transparent Billing & MIS Reporting",
      desc:
        "Single consolidated invoices with clear MIS reports make reconciliation simple for admin and finance teams.",
      tone: "yellow",
    },
    {
      icon: <FaUsers />,
      title: "Expert Drivers with Scalable Reach",
      desc:
        "Trained drivers with deep route knowledge and operational expertise, scalable across locations as requirements grow.",
      tone: "purple",
    },
  ];

  const toneToClasses = {
    amber: "text-amber-600",
    green: "text-green-600",
    blue: "text-blue-600",
    rose: "text-rose-500",
    orange: "text-orange-500",
    sky: "text-sky-500",
    yellow: "text-yellow-500",
    purple: "text-purple-600",
  };

  return (
    <section className="py-16 bg-[#FFFAFA]">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block rounded-full bg-amber-100 text-amber-600 px-4 py-1 text-sm font-semibold">
            TaxiTribe
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
            Why Choose <span className="text-amber-600">TaxiTribe</span>
          </h2>

          <h3 className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Why Choose TaxiTribe for Car Rental and Mobility Services
          </h3>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition hover:scale-[1.02]"
            >
              <div className={`mb-4 text-3xl ${toneToClasses[b.tone]}`}>
                {b.icon}
              </div>

              <h3 className="text-gray-900 text-lg font-semibold">
                {b.title}
              </h3>

              <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                {b.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
