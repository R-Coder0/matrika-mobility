// src/components/SafetySection.jsx
import React from "react";

export const SafetySection = () => {
  const images = [
    {
      src: "1.jpeg",
      alt: "Driver handing over keys - professional handover",
      caption: "Vetted & trained chauffeurs",
    },
    {
      src: "2.jpeg",
      alt: "GPS navigation on the phone",
      caption: "Real-time GPS tracking",
    },
    {
      src: "3.jpeg",
      alt: "Car emergency kit and fire extinguisher",
      caption: "Prepared for emergencies",
    },
    {
      src: "4.jpeg",
      alt: "Sanitizer and clean car interior",
      caption: "Hygiene & periodic sanitisation",
    },
  ];

  return (
    <section
      className="py-20"
      style={{ backgroundColor: "#FFFAFA" }}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-3xl font-extrabold text-gray-900 mb-2 leading-tight">
           How We Ensure Safe and Reliable Operations
            </h2>

            <div className="w-15 h-1 bg-amber-500 mb-4 rounded-full" />

<div className="space-y-4 text-gray-700 text-base md:text-[16px]">
  <p>
    At Taxi Tribe, safety is central to our car rental and mobility services.
    Every trip is supported by real-time GPS tracking, 24×7 monitoring, and
    essential in-car safety equipment to ensure secure and reliable travel for
    both personal and corporate needs.
  </p>

  <p>
    We place a strong focus on women’s safety with SOS-enabled support and trained,
    verified chauffeurs. With consistent safety standards across metro, Tier 2,
    and Tier 3 cities, Taxi Tribe delivers the same trusted and professional
    experience wherever you travel.
  </p>

  {/* Safety & Operations Points */}
  <ul className="mt-6 space-y-3 text-gray-800 text-sm md:text-base">
    <li className="flex items-start gap-2">
      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-600"></span>
      Daily Vehicle Maintenance and Safety Checks
    </li>
    <li className="flex items-start gap-2">
      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-600"></span>
      Preventive Maintenance
    </li>
    <li className="flex items-start gap-2">
      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-600"></span>
      Standardised Safety Inspections and Audits
    </li>
    <li className="flex items-start gap-2">
      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-600"></span>
      Clearly Documented Operating and Safety Protocols
    </li>
    <li className="flex items-start gap-2">
      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-600"></span>
      Transparent Pricing with Defined Policies
    </li>
    <li className="flex items-start gap-2">
      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-600"></span>
      Structured Reservation Management
    </li>
    <li className="flex items-start gap-2">
      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-600"></span>
      Dedicated Customer Support and Escalation Handling
    </li>
    <li className="flex items-start gap-2">
      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-600"></span>
     Strict Cleanliness and Hygiene Standards
    </li>
  </ul>
</div>


          </div>

          {/* 4-Image Grid */}
          <div>
            <div className="grid grid-cols-2 gap-4">
              {images.map((img, idx) => (
                <figure
                  key={idx}
                  className="relative overflow-hidden rounded-2xl shadow-lg bg-white"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-56 sm:h-64 object-cover transform transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  {/* subtle overlay and caption */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/30 via-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  <figcaption className="absolute left-4 bottom-3 text-sm">
                    <span className="inline-block bg-amber-600 text-white text-xs px-2 py-1 rounded-md shadow-sm">
                      {idx + 1}
                    </span>
                    {/* <div className="mt-2 text-gray-100 text-sm font-medium drop-shadow-sm">
                      {img.caption}
                    </div> */}
                  </figcaption>
                </figure>
              ))}
            </div>

            {/* small trust strip under images */}
            <div className="mt-6 flex flex-wrap gap-3 items-center text-sm text-gray-700">
              <span className="inline-flex items-center gap-2 bg-white/80 border border-gray-200 rounded-full px-3 py-1 shadow-sm">
                <svg className="w-4 h-4 text-amber-600" viewBox="0 0 24 24" fill="currentColor"><path d="M9 12l2 2 4-4" /></svg>
                GPS Tracking
              </span>
              <span className="inline-flex items-center gap-2 bg-white/80 border border-gray-200 rounded-full px-3 py-1 shadow-sm">
                <svg className="w-4 h-4 text-amber-600" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 100 20 10 10 0 000-20z" /></svg>
                24×7 Support
              </span>
              <span className="inline-flex items-center gap-2 bg-white/80 border border-gray-200 rounded-full px-3 py-1 shadow-sm">
                <svg className="w-4 h-4 text-amber-600" viewBox="0 0 24 24" fill="currentColor"><path d="M6 9l6 6 6-6" /></svg>
                Emergency Kits
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
