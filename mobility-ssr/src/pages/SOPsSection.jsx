import React from "react";
import {
  FaClipboardCheck,
  FaSatelliteDish,
  FaTools,
  FaShieldAlt,
  FaHeartbeat,
  FaCarSide,
} from "react-icons/fa";
import { motion } from "framer-motion";

/**
 * SOPsSection (light theme)
 */
const DEFAULT_ITEMS = [
  {
    icon: <FaClipboardCheck className="w-6 h-6 text-amber-600" />,
    heading: "Process-based Operations",
    bullets: [
      "Clearly defined booking timelines with instant confirmations to avoid uncertainty",
      "Pre-dispatch quality checks and driver readiness are ensured before every trip",
      "Flexible billing cycles aligned with client needs for smooth reconciliation",
    ],
  },
  {
    icon: <FaSatelliteDish className="w-6 h-6 text-amber-600" />,
    heading: "Live Tracking",
    bullets: [
      "Real-time GPS tracking across all trips for complete visibility and control",
      "Enhanced monitoring for women with SOS and emergency support",
      "Built-in safety controls including panic buttons and speed governors",
    ],
  },
  {
    icon: <FaCarSide className="w-6 h-6 text-amber-600" />,
    heading: "Ageing Focus",
    bullets: [
      "Strict vehicle age to under 3 years or 1 lakh kilometers",
      "Regular replacement of tyres within the period of 50,000 km or 18 months",
      "Proactive maintenance to reduce breakdowns and service disruption",
    ],
  },
  {
    icon: <FaTools className="w-6 h-6 text-amber-600" />,
    heading: "Safety Measures & Daily Amenities",
    bullets: [
      "Daily safety checks to ensure vehicles are roadworthy",
      "Essential amenities provided for comfort and hygiene",
      "Emergency equipment available in every vehicle",
    ],
  },
  {
    icon: <FaShieldAlt className="w-6 h-6 text-amber-600" />,
    heading: "Contingency Plan",
    bullets: [
      "Parallel reservation teams to manage peak demand and emergencies",
      "Dedicated account and operations managers per location",
      "Backup processes to ensure continuity during disruptions",
    ],
  },
  {
    icon: <FaHeartbeat className="w-6 h-6 text-amber-600" />,
    heading: "Extensive Focus on Health",
    bullets: [
      "Clean-cab and hygiene protocols followed across all vehicles",
      "Periodic driver health checks and wellness monitoring",
      "Compliance with safety, HSSE, and regulatory standards",
    ],
  },
];


export default function SOPsSection({
  title = "SOPs — Safety, Security, Health & Environment",
  subtitle = "Protecting People, Places and the Planet - Every Mile",
  items = DEFAULT_ITEMS,
  variant = "full",
  className = "",
}) {
  const showItems = variant === "compact" ? items.slice(0, 3) : items;

  return (
    <section
      className={`py-12 ${className}`}
      style={{ backgroundColor: "#FFFAFA" }}
    >
      <div className="container mx-auto px-6">
        {/* Header row with small logo */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-8"
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
              <span className="text-amber-600">{title}</span>
            </h2>
            {subtitle && (
              <p className="text-gray-600 mt-2 max-w-3xl">{subtitle}</p>
            )}
          </div>

        </motion.div>

        {/* Grid */}
        <div
          className={`grid gap-6 ${
            variant === "compact"
              ? "grid-cols-1 md:grid-cols-3"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {showItems.map((card, i) => (
            <motion.div
              key={card.heading}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="rounded-2xl bg-white border border-gray-100 p-6 hover:shadow-md transition"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                  {card.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">{card.heading}</h3>
                  <ul className="mt-3 space-y-2 text-sm text-gray-700">
                    {card.bullets.map((b, idx) => (
                      <li key={idx} className="leading-relaxed">• {b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Optional CTA for compact */}
        {variant === "compact" && items.length > 3 && (
          <div className="text-center mt-8">
            <a
              href="#sops-full"
              className="inline-block px-5 py-2 rounded-xl font-semibold border border-gray-200 bg-white hover:bg-amber-50 transition"
            >
              View full SOPs
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
