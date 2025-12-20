import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";
import { useCity } from "../context/CityContext";

const CITIES = [
  { label: "Delhi", slug: "delhi" },
  { label: "Noida", slug: "noida" },
  { label: "Gurugram", slug: "gurugram" },
  { label: "Mumbai", slug: "mumbai" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cityOpen, setCityOpen] = useState(false);

  const { city, setCity } = useCity();
  const navigate = useNavigate();
  const location = useLocation();

  const handleCityChange = (newCity) => {
    setCity(newCity);
    setCityOpen(false);
    setMenuOpen(false);

    const path = location.pathname.toLowerCase();

    if (path.includes("-")) {
      navigate(
        path.replace(/(delhi|noida|gurugram|mumbai)/, newCity)
      );
    } else {
      navigate(`/${newCity}`);
    }
  };

  return (
    <nav className="relative z-50 w-full bg-[#FFFAFA] ">
      <div className="max-w-[1400px] mx-auto px-4 py-4 flex justify-between items-center">

        {/* LOGO + CITY */}
        <div className="flex items-center gap-4">
          <Link to="/">
            <img src="/logo.png" className="h-9 md:h-10 w-auto" />
          </Link>

          {/* CITY DROPDOWN */}
          <div className="relative">
            <button
              onClick={() => setCityOpen(!cityOpen)}
              className="flex items-center gap-2 px-4 py-2 border rounded-lg text-sm font-semibold bg-white hover:bg-gray-50"
            >
              {city ? city.charAt(0).toUpperCase() + city.slice(1) : "Select City"}
              <span className="text-xs">▼</span>
            </button>

            {cityOpen && (
              <div className="absolute left-0 mt-2 w-44 bg-white border rounded-lg shadow-xl z-[9999]">
                {CITIES.map((c) => (
                  <button
                    key={c.slug}
                    onClick={() => handleCityChange(c.slug)}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* DESKTOP LINKS */}
        <div className="hidden lg:flex items-center gap-6">
          <Link to="/" className="font-medium text-gray-700 hover:text-black">
            Home  
          </Link>
          <Link to="/our-fleet" className="font-medium text-gray-700 hover:text-black">
            Our Fleet
          </Link>
          <Link to="/about-us" className="font-medium text-gray-700 hover:text-black">
            About
          </Link>
          <Link to="/blogs" className="font-medium text-gray-700 hover:text-black">
            Blogs
          </Link>
          <Link to="/contact-us" className="font-medium text-gray-700 hover:text-black">
            Contact
          </Link>

          <a
            href="https://app.indecab.com/login"
            className="bg-amber-500 text-white px-5 py-2 rounded-lg font-bold hover:bg-amber-600"
          >
            Corporate Login
          </a>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMenuOpen(true)}
          className="lg:hidden text-xl"
        >
          <FaBars />
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/40 z-9998 lg:hidden">
          <div className="fixed right-0 top-0 h-full w-72 bg-white shadow-xl p-6 flex flex-col gap-4">
            <button
              className="self-end text-xl"
              onClick={() => setMenuOpen(false)}
            >
              <FaTimes />
            </button>



            <hr />

            {/* LINKS */}
                        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/our-fleet" onClick={() => setMenuOpen(false)}>Our Fleet</Link>
            <Link to="/about-us" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/blogs" onClick={() => setMenuOpen(false)}>Blogs</Link>
            <Link to="/contact-us" onClick={() => setMenuOpen(false)}>Contact</Link>

            <a
              href="https://app.indecab.com/login"
              className="mt-auto bg-amber-500 text-white px-4 py-2 rounded-lg text-center font-bold"
            >
              Corporate Login
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
