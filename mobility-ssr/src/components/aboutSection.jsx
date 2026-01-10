import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="bg-[#FFFAFA] py-14">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Left Content */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              About TaxiTribe
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              TaxiTribe is a car rental and mobility services provider offering
              reliable travel solutions for both personal and business needs.
              From daily travel to airport transfers to events to corporate
              requirements, we provide it all. With trained drivers, modern
              vehicles, live tracking, and transparent pricing, TaxiTribe makes
              travel easier to plan and manage, even when schedules or
              requirements change.
            </p>

            <Link to="/about-us" className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-md transition">
              Know More
            </Link>
          </div>

          {/* Right Image */}
          <div className="w-full">
            <img
              src="/about.webp"
              alt="TaxiTribe Car Rental Services"
              className="w-full h-80 object-cover rounded-lg"
            />
          </div> 

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
