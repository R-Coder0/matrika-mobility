import React, { useEffect, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Karan Mehta",
    role: "Wedding Luxury Car – Delhi",
    review:
      "We booked a Mercedes for our wedding entry and the experience was outstanding. The car was spotless, arrived on time and the chauffeur was extremely professional. It added a royal touch to our special day.",
  },
  {
    name: "Ritika Sharma",
    role: "Corporate Event – Gurgaon",
    review:
      "Our international clients were impressed with the premium vehicle and smooth chauffeur service. Everything was handled professionally from booking to drop-off. Highly recommended for corporate transfers.",
  },
  {
    name: "Vikram Singh",
    role: "VIP Airport Transfer – Mumbai",
    review:
      "The luxury sedan was immaculate and the chauffeur maintained perfect professionalism. The ride was smooth, comfortable and truly premium. Excellent service for VIP travel.",
  },
  {
    name: "Ananya Kapoor",
    role: "Anniversary Celebration – Jaipur",
    review:
      "We hired a luxury car for our anniversary evening and the experience was exceptional. Elegant vehicle, courteous driver and flawless service. Definitely our go-to for premium occasions.",
  },
];


export default function TestimonialLuxryCar() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          What Our Outstation Travelers Say
        </h2>

        <p className="text-gray-600 mb-12">
          Trusted by families, business travelers and long-distance commuters across India.
        </p>

        {/* Slider Card */}
        <div className="relative bg-[#FFFAFA] border border-gray-200 rounded-3xl p-10 shadow-sm transition">

          {/* Stars */}
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 text-[#fe9a00] fill-[#fe9a00]"
              />
            ))}
          </div>

          {/* Review */}
          <p className="text-lg text-gray-800 leading-relaxed max-w-2xl mx-auto">
            "{testimonials[current].review}"
          </p>

          {/* Name */}
          <div className="mt-8">
            <p className="font-semibold text-lg">
              {testimonials[current].name}
            </p>
            <p className="text-sm text-gray-500">
              {testimonials[current].role}
            </p>
          </div>

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white border rounded-full p-2 shadow hover:bg-gray-50 transition"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white border rounded-full p-2 shadow hover:bg-gray-50 transition"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

        </div>
      </div>
    </section>
  );
}
