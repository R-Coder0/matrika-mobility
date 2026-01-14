import React from "react";

export default function ServicesSection() {
  const services = [
    {
      title: "Corporate Mobility Solutions",
      description:
        "SLA-backed corporate mobility solutions are designed for corporate employee transportation, corporate car rental and corporate chauffeur services.",
      points: [
        "Hourly, daily, and multi-day corporate rental options",
        "Local city travel and outstation business trips",
        "Sedans, SUVs and luxury cars",
      ],
    },
    {
      title: "Conference & Event Transportation",
      description:
        "End-to-end event transportation management for conferences, exhibitions, off-sites, and large-scale business events.",
      points: [
        "Group shuttles, minibuses, and fleet deployments",
        "Staggered pickups and multi-venue drop coordination",
        "Dedicated on-ground logistics and operations support",
      ],
    },
    {
      title: "Wedding & Special Occasion Cars",
      description:
        "Premium chauffeur-driven vehicles for weddings, ceremonies, and high-profile personal events.",
      points: [
        "Luxury and vintage car options with themed decor",
        "VIP and guest transfers with professional chauffeurs",
        "Flexible booking windows to accommodate event schedules",
      ],
    },
    {
      title: "Airport Transfers",
      description:
        "Reliable airport transfer services with flight-aware pickups and professional support.",
      points: [
        "Real-time tracking for timely arrivals and departures",
        "Baggage assistance services",
        "Proactive handling of flight delays and schedule changes",
      ],
    },
    {
      title: "Long-Term Car Rental",
      description:
        "Long-term car rental solutions for individuals and organisations that need a vehicle for extended use without the complexity of ownership.",
      points: [
        "Monthly rental options",
        "Dedicated vehicles assigned for long-duration requirements",
        "Suitable for long-term employee transport, projects, and ongoing travel needs",
      ],
    },
    {
      title: "Fleet Management Services",
      description:
        "End-to-end fleet management services designed to keep vehicles running efficiently and operations organised.",
      points: [
        "Scheduled maintenance and compliance tracking",
        "Driver coordination and operational oversight",
        "Centralised reporting for cost and performance visibility",
      ],
    },
    {
      title: "Electric Vehicle (EV) Transportation Services",
      description:
        "EV-based transportation services for organisations looking to adopt cleaner and more sustainable travel options.",
      points: [
        "Electric vehicles available for daily travel",
        "Planned routes and charging coordination for smooth operations",
        "Drivers trained to handle EV-specific requirements",
      ],
    },
    {
      title: "Luxury Cab Services",
      description:
        "Luxury cab services for travel that requires comfort, privacy, and a more refined experience.",
      points: [
        "High-end vehicles maintained to professional standards",
        "Experienced chauffeurs trained for executive and VIP travel",
        "Local and outstation travel options",
      ],
    },
  ];

  return (
    <section className="py-14 bg-[#FFFAFA]">
      <div className="container mx-auto px-6">
        
        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Car Rental and Mobility Services <span className="text-amber-600">by TaxiTribe</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>

              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2 text-sm text-gray-700">
                {service.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-600"></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
