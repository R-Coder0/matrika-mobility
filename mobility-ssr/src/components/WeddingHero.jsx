import React, { useEffect, useState } from "react";
import { Phone, Mail, ChevronLeft, ChevronRight } from "lucide-react";

const weddingCars = [
  {
    src: "/landingpage/audi.webp",
    title: "Audi A6 Wedding Edition",
    subtitle: "Perfect for grand entries & receptions",
  },
  {
    src: "/landingpage/bwm.webp",
    title: "BMW 5 Series",
    subtitle: "Premium luxury with professional chauffeur",
  },
  {
    src: "/landingpage/merc.jpg",
    title: "Mercedes C-Class",
    subtitle: "Elegant, decorated & photo-ready",
  },
  {
    src: "/landingpage/vintage.webp",
    title: "Vintage Royal Car",
    subtitle: "Classic vibes for royal baraat",
  },
];

export default function WeddingHero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % weddingCars.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? weddingCars.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % weddingCars.length);
  };

  const currentCar = weddingCars[currentIndex];

  return (
    <section
      className="relative w-full min-h-[80vh] bg-center bg-cover"
      style={{
        backgroundImage: "url('/wedding-car-on-rent-web.webp')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative container mx-auto px-6 py-34">
        <div className="grid md:grid-cols-2 gap-8 items-center">

          {/* LEFT SIDE (content) -> mobile mein niche */}
          <div className="text-white z-10 max-w-xl order-2 md:order-1">
            <p className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-white/10 border border-white/20 mb-3">
              Premium Wedding Car Rental · Same Day Support
            </p>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Luxury Wedding Cars
              <span className="block text-[#FFD400] mt-1">
                for Your Perfect Entry
              </span>
            </h1>

            <p className="mt-4 text-lg md:text-xl text-gray-100">
              Elegant, decorated cars with professional chauffeurs — on time,
              every time. Make your baraat & reception entry truly unforgettable.
            </p>

            <ul className="mt-6 space-y-2 text-sm md:text-base">
              <li className="flex items-center gap-3">
                <span className="inline-block w-2 h-2 rounded-full bg-[#FFD400]" />
                Premium fleet: Audi, BMW, Mercedes & more
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-block w-2 h-2 rounded-full bg-[#FFD400]" />
                Custom decoration as per theme
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-block w-2 h-2 rounded-full bg-[#FFD400]" />
                Trained chauffeurs & punctual service
              </li>
            </ul>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
              onClick={() => {
                        if (window.gtag) {
                            window.gtag("event", "conversion", {
                                send_to: "AW-17769558353/AbCdEfGhIjK", // 👈 YOUR CALL CONVERSION ID
                            });
                            console.log("📞 Call conversion fired");
                        }
                    }}
                href="tel:+91 7011438890"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#FFD400] text-black font-semibold shadow-md hover:shadow-lg transition"
              >
                <Phone className="w-4 h-4" />
                Call for Instant Quote
              </a>
              <a
                href="mailto:sales@taxitribe.com"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-white/40 text-white text-sm hover:bg-white/10 transition"
              >
                <Mail className="w-4 h-4" />
                Send Wedding Details
              </a>
            </div>
          </div>

          {/* RIGHT SIDE -> Slider (mobile mein upar) */}
          <div className="z-10 flex justify-end order-1 md:order-2">
            <div className="w-full max-w-md bg-white/95 rounded-2xl shadow-xl border border-gray-100 overflow-hidden backdrop-blur">
              {/* Yellow Top Border */}
              <div className="h-2 bg-[#FFD400]" />

              <div className="relative">
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={currentCar.src}
                    alt={currentCar.title}
                    className="w-full h-64 md:h-80 object-cover"
                  />
                </div>

                {/* Gradient overlay bottom text */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-linear-to-t from-black/80 via-black/40 to-transparent">
                  <h3 className="text-lg font-semibold text-white">
                    {currentCar.title}
                  </h3>
                  <p className="text-xs text-gray-200">
                    {currentCar.subtitle}
                  </p>
                </div>

                {/* Left / Right Arrows */}
                <button
                  type="button"
                  onClick={handlePrev}
                  className="hidden sm:flex absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                {/* Dots */}
                <div className="flex items-center justify-center gap-2 py-3 bg-white">
                  {weddingCars.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setCurrentIndex(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === currentIndex
                          ? "w-5 bg-[#FFD400]"
                          : "w-2 bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
