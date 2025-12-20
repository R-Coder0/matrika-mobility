import { Link } from "react-router-dom";
import { CITIES, SERVICES } from "../config/importantLinksConfig";

export default function ImportantLinks() {
  return (
    <section className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto px-4 py-14">

        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 mb-10">
          Important Links
        </h3>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {SERVICES.map((service) => (
            <div
              key={service.label}
              className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              {/* Service Title */}
              <h4 className="text-base font-semibold text-gray-800 mb-4">
                {service.label}
              </h4>

              {/* City Links */}
              <div className="flex flex-wrap gap-2">
                {CITIES.map((city) => {
                  const url = `/${service.slug.replace("{city}", city)}`;

                  return (
                    <Link
                      key={city}
                      to={url}
                      className="
                        text-sm
                        px-3 py-1.5
                        rounded-full
                        bg-gray-100
                        text-gray-700
                        hover:bg-amber-100
                        hover:text-amber-700
                        transition
                      "
                    >
                      {city.charAt(0).toUpperCase() + city.slice(1)}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
