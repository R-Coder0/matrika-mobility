import React, { useMemo, useState, useEffect } from "react";
import { Car, Search, Sparkles } from "lucide-react";
import BookingDialog from "../components/BookingCar";
import SOPsSection from "./SOPsSection";
import BestPracticesSection from "../components/BestPractise";
import { Helmet } from "react-helmet";

/* -------------------------------- utils -------------------------------- */
const safeSrc = (src) =>
  typeof src === "string" ? src.replace(/\s/g, "%20") : src;

const FALLBACK = "/cars/merc2026/1.jpeg";

/* -------------------------------- data -------------------------------- */
const categoriesData = [
    {
    key: "eclass-2026",
    title: "Mercedes-Benz E-Class (2026)",
    brand: "Luxury",
    tag: "New 2026",
    images: ["/cars/merc2026/1.jpeg",
      "/cars/merc2026/2.jpeg",
      "/cars/merc2026/3.jpeg",
      "/cars/merc2026/4.jpeg",
      "/cars/merc2026/5.jpeg",
      "/cars/merc2026/6.jpeg",],
    description: "Next-gen E-Class with advanced comfort & tech.",
    note: "New addition",
  },
  {
    key: "sprinter",
    title: "Mercedes-Benz Sprinter",
    brand: "Luxury",
    tag: "Delhi Only",
    images: [
      "/cars/sprinter/1.jpeg",
      "/cars/sprinter/2.jpeg",
      "/cars/sprinter/3.jpeg",
      "/cars/sprinter/4.jpeg",
      "/cars/sprinter/5.jpeg",
      "/cars/sprinter/6.jpeg",
      "/cars/sprinter/7.jpeg"
    ],
    description: "Luxury van for corporate delegations & events.",
    note: "Available in Delhi NCR",
  },
  {
    key: "dzire",
    title: "Maruti Suzuki Swift Dzire",
    brand: "Sedan",
    images: ["/cars/dezire.jpg"],
    description: "Reliable compact sedan for city & corporate travel.",
    note: "All variants available",
  },
  {
    key: "crysta",
    title: "Toyota Innova Crysta",
    brand: "SUV",
    images: ["/cars/innova.jpg"],
    description: "Spacious MPV ideal for executives & airport transfers.",
    note: "All variants available",
  },
  {
    key: "hycross",
    title: "Innova Hycross",
    brand: "SUV",
    images: ["/cars/hycross.avif"],
    description: "Hybrid MPV with premium comfort & efficiency.",
    note: "All variants available",
  },
  {
    key: "fortuner",
    title: "Toyota Fortuner",
    brand: "SUV",
    images: ["/cars/Fortuner.avif"],
    description: "Powerful luxury SUV with commanding presence.",
    note: "All variants available",
  },

  {
    key: "sclass",
    title: "Mercedes-Benz S-Class",
    brand: "Luxury",
    tag: "Top Pick",
    images: ["/cars/S-350.jpg"],
    description: "Premium executive sedan for luxury corporate travel.",
    note: "Chauffeur driven",
  },
  {
    key: "eclass",
    title: "Mercedes-Benz E-Class",
    brand: "Luxury",
    tag: "Top Pick",
    images: ["/cars/E-450d.avif"],
    description: "Premium executive sedan for luxury corporate travel.",
    note: "Chauffeur driven",
  },

];


const BRANDS = ["All", "Sedan", "SUV", "Luxury"];

/* =============================== COMPONENT =============================== */

export default function FleetPage() {
  const [brand, setBrand] = useState("All");
  const [query, setQuery] = useState("");
  const [debounced, setDebounced] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState("");

  useEffect(() => {
    const t = setTimeout(() => setDebounced(query.trim().toLowerCase()), 250);
    return () => clearTimeout(t);
  }, [query]);

  const list = useMemo(() => {
    const base =
      brand === "All"
        ? categoriesData
        : categoriesData.filter((c) => c.brand === brand);

    if (!debounced) return base;

    return base.filter((c) =>
      `${c.title} ${c.description} ${c.note}`
        .toLowerCase()
        .includes(debounced)
    );
  }, [brand, debounced]);

  const openFor = (model) => {
    setSelectedModel(model);
    setDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FFFAFA] text-gray-900">
      {/* ================= SEO ================= */}
      <Helmet>
        <title>Our Fleet | Premium & Luxury Car Rentals</title>
        <meta
          name="description"
          content="Explore our premium fleet of sedans, SUVs & luxury cars for corporate, airport & executive travel."
        />
        <link rel="canonical" href="https://taxitribe.in/our-fleet" />
      </Helmet>

      {/* ================= HERO ================= */}
      <section className="relative border-b border-gray-200 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-amber-100/40 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 py-14 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-amber-700 mb-4">
              <Car className="h-4 w-4" />
              Corporate & Executive Mobility
            </span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Our Premium Fleet
            </h1>
            <p className="mt-4 text-gray-700 max-w-xl">
              Hand-picked sedans, SUVs and luxury cars for corporate travel,
              airport transfers and VIP movements.
            </p>
          </div>

          <div className="hidden md:flex justify-end">
            <img
              src="/logo.png"
              alt="Fleet"
              className="max-h-12 object-contain"
            />
          </div>
        </div>
      </section>

      {/* ================= FILTER BAR ================= */}
      <div className="sticky top-0 z-20 bg-[#FFFAFA]/90 backdrop-blur border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {BRANDS.map((b) => (
              <button
                key={b}
                onClick={() => setBrand(b)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition
                ${brand === b
                    ? "bg-amber-500 border-amber-500 text-black"
                    : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50"
                  }`}
              >
                {b}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2 w-full md:w-96">
            <Search className="h-4 w-4 text-gray-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search car model..."
              className="flex-1 bg-transparent outline-none text-sm"
            />
          </div>
        </div>
      </div>

      {/* ================= GRID ================= */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        {list.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            <Sparkles className="h-8 w-8 mx-auto mb-3 text-amber-500" />
            No vehicles found
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {list.map((car) => (
              <FleetCard
                key={car.key}
                car={car}
                onQuote={() => openFor(car.title)}
              />
            ))}
          </div>
        )}
      </section>

      {/* ================= SOPs ================= */}
      <div className="max-w-7xl mx-auto px-4">
        <SOPsSection />
        <BestPracticesSection />
      </div>

      {/* ================= CTA ================= */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="rounded-2xl border border-gray-200 bg-white p-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl font-bold">
              Ready to upgrade your corporate travel?
            </h2>
            <p className="text-gray-600 mt-2">
              Save up to 10% on your annual transport spend.
            </p>
          </div>
          <button
            onClick={() => setDialogOpen(true)}
            className="px-8 py-4 rounded-xl bg-amber-600 text-white font-semibold hover:bg-amber-700"
          >
            Get Quote
          </button>
        </div>
      </div>

      {/* ================= MODAL ================= */}
      <BookingDialog
        open={dialogOpen}
        model={selectedModel}
        onOpenChange={setDialogOpen}
        onSubmit={() => setDialogOpen(false)}
      />
    </div>
  );
}

/* ============================ CARD COMPONENT ============================ */

function FleetCard({ car, onQuote }) {
  const imgs = car.images?.length ? car.images : [FALLBACK];
  const [active, setActive] = useState(0);

  return (
    <article className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow hover:shadow-lg transition flex flex-col">

      {/* IMAGE */}
      <div className="relative h-56">
        <img
          src={safeSrc(imgs[active])}
          onError={(e) => (e.currentTarget.src = FALLBACK)}
          className="h-full w-full object-cover"
          alt={car.title}
        />

        {/* Brand + Tag */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="px-3 py-1 text-xs rounded-full bg-white border">
            {car.brand}
          </span>
          {car.tag && (
            <span className="px-3 py-1 text-xs rounded-full bg-amber-100 text-amber-700 border border-amber-200">
              {car.tag}
            </span>
          )}
        </div>

        {/* Gallery Indicator */}
        {imgs.length > 1 && (
          <span className="absolute top-4 right-4 bg-black/70 text-white text-xs px-2 py-1 rounded">
            {imgs.length} Photos
          </span>
        )}
      </div>

      {/* Thumbnails */}
      {imgs.length > 1 && (
        <div className="flex gap-2 px-4 pt-3">
          {imgs.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-12 w-16 rounded-md overflow-hidden border ${active === i ? "border-amber-500" : "border-gray-200"
                }`}
            >
              <img
                src={safeSrc(img)}
                className="h-full w-full object-cover"
                alt=""
              />
            </button>
          ))}
        </div>
      )}

      {/* CONTENT */}
      <div className="p-6 flex flex-col flex-1">
        <div>
          <h3 className="text-lg font-semibold">{car.title}</h3>
          <p className="text-sm text-gray-600 mt-1">{car.description}</p>

          {car.note && (
            <p className="text-xs text-gray-500 mt-2">{car.note}</p>
          )}
        </div>

        {/* Button always bottom */}
        <button
          onClick={onQuote}
          className="mt-auto w-full py-3 rounded-xl bg-amber-500 text-black font-semibold hover:bg-amber-600 transition"
        >
          Get Quote
        </button>
      </div>
    </article>
  );
}

