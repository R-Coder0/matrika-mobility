import { Link } from "react-router-dom";
import { CITIES, SERVICES } from "../config/importantLinksConfig";

export default function ImportantLinks() {
  return (
    <section className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto px-4 py-10">

        <h3 className="text-xl font-bold text-gray-800 mb-6">
          Important Links
        </h3>

        <div className="space-y-6">

          {SERVICES.map((service) => (
            <div key={service.label}>
              <h4 className="text-sm font-semibold text-gray-600 mb-2">
                {service.label}
              </h4>

              <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                {CITIES.map((city) => {
                  const url = `/${service.slug.replace("{city}", city)}`;

                  return (
                    <Link
                      key={city}
                      to={url}
                      className="text-gray-600 hover:text-amber-600 transition"
                    >
                      {service.label} in {city.charAt(0).toUpperCase() + city.slice(1)}
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
