import React, { useEffect, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Gupta",
    role: "Family Trip – Delhi to Jaipur",
    review:
      "Our outstation trip was smooth and completely stress-free. The driver was experienced, polite and drove safely throughout the journey. Highly recommended for family travel.",
  },
  {
    name: "Sneha Kapoor",
    role: "Weekend Getaway – Chandigarh",
    review:
      "Very comfortable vehicle and transparent pricing. No hidden charges at all. Booking process was simple and support team was responsive even during the trip.",
  },
  {
    name: "Manish Verma",
    role: "Business Travel – Lucknow",
    review:
      "I frequently travel outstation for meetings and Taxi Tribe has been extremely reliable. Clean cars, professional drivers and always on-time departures.",
  },
  {
    name: "Pooja Sharma",
    role: "Group Trip – Rishikesh",
    review:
      "We booked Force Urbania for our group trip and the experience was excellent. Spacious seating, ample luggage space and very smooth highway ride.",
  },
];

export default function TestimonialOutstation() {
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
