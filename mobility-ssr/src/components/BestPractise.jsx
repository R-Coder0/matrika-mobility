import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { SERVICE_BAR_ITEMS } from "../config/serviceBarConfig";
import { useCity } from "../context/CityContext";

export default function ServiceBar() {
  const { city } = useCity();
  const location = useLocation();
  const [isSticky, setIsSticky] = useState(false);

  const currentPath = location.pathname.replace("/", "");

  useEffect(() => {
    const sentinel = document.getElementById("service-bar-sentinel");
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // 🔒 LOCKED LOGIC
        if (entry.boundingClientRect.top < 0) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      },
      {
        root: null,
        threshold: 0,
      }
    );

    observer.observe(sentinel);

    return () => observer.disconnect();
  }, []);

  if (!city) return null;

  return (
    <div
      className={`w-full bg-white border-b z-40 transition-shadow
        ${isSticky ? "sticky top-0 shadow-md" : "relative"}
      `}
    >
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex justify-center gap-10 py-4 no-scrollbar overflow-x-auto">
          {SERVICE_BAR_ITEMS.map((item) => {
            const slug = item.slug.replace("{city}", city);
            const isActive = currentPath === slug;

            return (
              <a
                key={item.label}
                href={`/${slug}`}
                className={`flex flex-col items-center gap-2 min-w-[110px]
                  ${
                    isActive
                      ? "text-black font-semibold"
                      : "text-gray-500 hover:text-black"
                  }
                `}
              >
                <div
                  className={`w-12 h-12 rounded-full border flex items-center justify-center
                    ${isActive ? "border-black" : "border-gray-300"}
                  `}
                >
                  <img src={item.icon} className="w-6 h-6" />
                </div>

                <span className="text-sm whitespace-nowrap">
                  {item.label}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
