import { Link, useLocation } from "react-router-dom";
import { SERVICE_BAR_ITEMS } from "../config/serviceBarConfig";
import { useCity } from "../context/CityContext";

export default function ServiceBar() {
  const { city } = useCity();
  const location = useLocation();

  if (!city) return null;

  const currentPath = location.pathname.replace("/", "");

  return (
    <div className="w-full bg-white border-b z-40">
      <div className="max-w-[1400px] mx-auto px-4">
        <div
          className="
            flex justify-center gap-10
            py-4
            overflow-x-auto md:overflow-visible
            no-scrollbar
          "
        >
          {SERVICE_BAR_ITEMS.map((item) => {
            const slug = item.slug.replace("{city}", city);
            const isActive = currentPath === slug;

            return (
              <Link
                key={item.label}
                to={`/${slug}`}
                className={`
                  flex flex-col items-center gap-2
                  min-w-[110px]
                  transition
                  ${
                    isActive
                      ? "text-black font-semibold"
                      : "text-gray-500 hover:text-black"
                  }
                `}
              >
                {/* ICON */}
                <div
                  className={`
                    w-12 h-12 rounded-full border
                    flex items-center justify-center
                    transition
                    ${
                      isActive
                        ? "border-black"
                        : "border-gray-300"
                    }
                  `}
                >
                  <img
                    src={item.icon}
                    alt={item.label}
                    className="w-8 h-8 opacity-80"
                  />
                </div>

                {/* LABEL */}
                <span className="text-sm whitespace-nowrap text-center">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
