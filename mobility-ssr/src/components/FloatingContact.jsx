import { useState } from "react";
import emailjs from "emailjs-com";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";

// 👉 yahan apne real EmailJS IDs daal dena:
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY_HERE";
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID_HERE";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID_HERE";

const FloatingContact = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const [formData, setFormData] = useState({
    from_name: "",
    reply_to: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formData,
        EMAILJS_PUBLIC_KEY
      );

      setStatus({
        type: "success",
        message: "Thank you! We will contact you shortly.",
      });
      setFormData({
        from_name: "",
        reply_to: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      let msg = "Something went wrong. Please try again.";

      if (error && (error.status === 412 || /Invalid grant/i.test(error.text || ""))) {
        msg =
          "Email issue (Gmail auth). Please reconnect Gmail in EmailJS dashboard or contact us by phone/WhatsApp.";
      }

      setStatus({
        type: "error",
        message: msg,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* 🔹 DESKTOP VERSION – Left Side Vertical Buttons */}
      <div className="hidden md:flex fixed right-4 top-1/2 translate-y-1/2 flex-col gap-4 z-50">
        {/* Enquiry Button */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="group relative w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300"
          aria-label="Enquiry"
        >
          <FaEnvelope className="text-xl" />
          <span className="absolute left-16 whitespace-nowrap bg-gray-900 text-white text-xs px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Quick Enquiry
          </span>
        </button>

        {/* Call Button */}
        <a
          href="tel:+917011438890"
          className="group relative w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 animate-pulse"
          aria-label="Call"
        >
          <FaPhoneAlt className="text-xl" />
          <span className="absolute left-16 whitespace-nowrap bg-gray-900 text-white text-xs px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Call Now
          </span>
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/917011438890?text=Hi%20TaxiTribe%2C%20I%20need%20a%20corporate%20car%20rental%20quote."
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300"
          aria-label="WhatsApp"
        >
          <FaWhatsapp className="text-2xl" />
          <span className="absolute left-16 whitespace-nowrap bg-gray-900 text-white text-xs px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            WhatsApp Us
          </span>
        </a>
      </div>

      {/* 🔹 MOBILE VERSION – Bottom Fixed Bar (3 Columns) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-gray-200 shadow-2xl">
        <div className="grid grid-cols-3 gap-0">
          {/* Enquiry */}
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="flex flex-col items-center justify-center py-3 bg-gradient-to-br from-amber-400 to-orange-500 text-white active:bg-orange-600 transition-all"
          >
            <FaEnvelope className="text-xl mb-1" />
            <span className="text-xs font-semibold">Enquiry</span>
          </button>

          {/* Call */}
          <a
            href="tel:+917011438890"
            className="flex flex-col items-center justify-center py-3 bg-gradient-to-br from-blue-500 to-blue-600 text-white active:bg-blue-700 transition-all"
          >
            <FaPhoneAlt className="text-xl mb-1 animate-pulse" />
            <span className="text-xs font-semibold">Call</span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/917011438890?text=Hi%20TaxiTribe%2C%20I%20need%20a%20corporate%20car%20rental%20quote."
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-3 bg-gradient-to-br from-green-400 to-green-600 text-white active:bg-green-700 transition-all"
          >
            <FaWhatsapp className="text-2xl mb-1" />
            <span className="text-xs font-semibold">WhatsApp</span>
          </a>
        </div>
      </div>

      {/* 🔹 DESKTOP – Slide-out Panel (Left Side) */}
{/* 🔹 DESKTOP – Slide-out Panel (RIGHT Side) */}
<div
  className={`hidden md:block fixed top-1/2 right-0 -translate-y-1/2 z-50 transition-transform duration-300 ease-out
  ${open ? "translate-x-0" : "translate-x-full"}`}
>
  <div className="w-96 bg-white border-l-4 border-orange-500 rounded-l-3xl shadow-2xl p-6">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
        <FaEnvelope className="text-orange-500" />
        Quick Enquiry
      </h3>
      <button
        type="button"
        onClick={() => setOpen(false)}
        className="text-2xl leading-none text-gray-400 hover:text-gray-800 transition"
      >
        &times;
      </button>
    </div>

    <div className="space-y-4">
      <div>
        <label className="block mb-2 text-sm font-semibold text-gray-700">
          Name*
        </label>
        <input
          type="text"
          name="from_name"
          value={formData.from_name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 text-sm border-2 border-gray-300 rounded-lg outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition"
        />
      </div>

      <div>
        <label className="block mb-2 text-sm font-semibold text-gray-700">
          Email*
        </label>
        <input
          type="email"
          name="reply_to"
          value={formData.reply_to}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 text-sm border-2 border-gray-300 rounded-lg outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition"
        />
      </div>

      <div>
        <label className="block mb-2 text-sm font-semibold text-gray-700">
          Phone*
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 text-sm border-2 border-gray-300 rounded-lg outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition"
        />
      </div>

      <div>
        <label className="block mb-2 text-sm font-semibold text-gray-700">
          Requirement*
        </label>
        <textarea
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 text-sm border-2 border-gray-300 rounded-lg outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition resize-none"
        />
      </div>

      <button
        type="button"
        onClick={handleSubmit}
        disabled={loading}
        className="w-full px-4 py-3 text-base font-bold text-white bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg hover:from-orange-600 hover:to-amber-600 disabled:opacity-60 shadow-lg hover:shadow-xl transition-all"
      >
        {loading ? "Sending..." : "Submit Enquiry"}
      </button>

      {status.message && (
        <p
          className={`mt-2 text-sm font-semibold ${
            status.type === "success" ? "text-green-600" : "text-red-600"
          }`}
        >
          {status.message}
        </p>
      )}
    </div>
  </div>
</div>


      {/* 🔹 MOBILE – Bottom Slide-up Panel */}
      <div
        className={`md:hidden fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300 ease-out
        ${open ? "translate-y-0" : "translate-y-full"}`}
      >
        <div className="bg-white rounded-t-3xl shadow-2xl p-5 pb-24 max-h-[85vh] overflow-y-auto border-t-4 border-orange-500">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-bold text-gray-800 flex items-center gap-2">
              <FaEnvelope className="text-orange-500" />
              Quick Enquiry
            </h3>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-2xl leading-none text-gray-400 hover:text-gray-800"
            >
              &times;
            </button>
          </div>

          <div className="space-y-3">
            <div>
              <label className="block mb-1 text-xs font-semibold text-gray-700">
                Name*
              </label>
              <input
                type="text"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 text-sm border-2 border-gray-300 rounded-lg outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
              />
            </div>

            <div>
              <label className="block mb-1 text-xs font-semibold text-gray-700">
                Email*
              </label>
              <input
                type="email"
                name="reply_to"
                value={formData.reply_to}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 text-sm border-2 border-gray-300 rounded-lg outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
              />
            </div>

            <div>
              <label className="block mb-1 text-xs font-semibold text-gray-700">
                Phone*
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 text-sm border-2 border-gray-300 rounded-lg outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
              />
            </div>

            <div>
              <label className="block mb-1 text-xs font-semibold text-gray-700">
                Requirement*
              </label>
              <textarea
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 text-sm border-2 border-gray-300 rounded-lg outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 resize-none"
              />
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              disabled={loading}
              className="w-full px-4 py-3 text-sm font-bold text-white bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg hover:from-orange-600 hover:to-amber-600 disabled:opacity-60 shadow-lg"
            >
              {loading ? "Sending..." : "Submit Enquiry"}
            </button>

            {status.message && (
              <p
                className={`mt-2 text-xs font-semibold ${
                  status.type === "success" ? "text-green-600" : "text-red-600"
                }`}
              >
                {status.message}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Mobile overlay backdrop */}
      {open && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default FloatingContact; 