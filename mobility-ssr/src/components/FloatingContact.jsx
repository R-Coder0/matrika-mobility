import { useState } from "react";
import emailjs from "emailjs-com";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";

/* === EmailJS credentials === */
const EMAILJS_PUBLIC_KEY = "lc85WOgfXS2GGvIlW";
const EMAILJS_SERVICE_ID = "service_goe734o";
const EMAILJS_TEMPLATE_ID = "template_s1y5olw";
/* =========================== */

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

  // field change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // SUBMIT handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    // EmailJS payload (aliases added for template)
    const payload = {
      from_name: formData.from_name,
      reply_to: formData.reply_to,
      phone: formData.phone,
      message: formData.message,

      // Aliases, so EmailJS template {{name}}, {{email}} works
      name: formData.from_name,
      email: formData.reply_to,

      time: new Date().toLocaleString(),
      title: document.title || "TaxiTribe",
    };

    console.log("Email payload:", payload);

    try {
      const res = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        payload,
        EMAILJS_PUBLIC_KEY
      );

      console.log("EmailJS result:", res);

      setStatus({ type: "success", message: "Thank you! We will contact you shortly." });

      setFormData({
        from_name: "",
        reply_to: "",
        phone: "",
        message: "",
      });

      setTimeout(() => {
        setOpen(false);
        setStatus({ type: "", message: "" });
      }, 1500);
    } catch (error) {
      console.error("EmailJS error:", error);

      let msg = "Something went wrong. Please try again.";

      if (error?.status === 412 || /Invalid grant/i.test(error?.text || "")) {
        msg =
          "Email sending failed (Gmail auth expired). Please reconnect Gmail inside EmailJS.";
      }

      setStatus({ type: "error", message: msg });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ---------------- DESKTOP FLOATING ICONS ---------------- */}
      <div className="hidden md:flex fixed right-4 top-1/2 -translate-y-1/2 flex-col gap-4 z-50">

        {/* Enquiry Button */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="group relative w-14 h-14 flex items-center justify-center 
                     rounded-full bg-linear-to-br from-amber-400 to-orange-500 
                     text-white shadow-xl hover:shadow-2xl hover:scale-110 
                     transition-all duration-300"
        >
          <FaEnvelope className="text-xl" />
          <span className="absolute right-16 bg-black text-white text-xs px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition">
            Enquiry
          </span>
        </button>

        {/* Call */}
        <a
          href="tel:7011438890"
          className="group relative w-14 h-14 flex items-center justify-center 
                     rounded-full bg-linear-to-br from-blue-500 to-blue-600 text-white 
                     shadow-xl hover:scale-110 transition-all duration-300"
        >
          <FaPhoneAlt className="text-xl" />
          <span className="absolute right-16 bg-black text-white text-xs px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition">
            Call Now
          </span>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/917011438890?text=Hi%20TaxiTribe%2C%20I%20need%20a%20quote."
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-14 h-14 flex items-center justify-center 
                     rounded-full bg-linear-to-br from-green-400 to-green-600 text-white 
                     shadow-xl hover:scale-110 transition-all duration-300"
        >
          <FaWhatsapp className="text-2xl" />
          <span className="absolute right-16 bg-black text-white text-xs px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition">
            WhatsApp
          </span>
        </a>
      </div>

      {/* ---------------- MOBILE BOTTOM BAR ---------------- */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-xl">
        <div className="grid grid-cols-3 text-center">
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="py-3 bg-linear-to-br from-amber-400 to-orange-500 text-white"
          >
            <FaEnvelope className="text-xl mx-auto" />
            <p className="text-xs">Enquiry</p>
          </button>

          <a href="tel:7011438890" className="py-3 bg-blue-600 text-white">
            <FaPhoneAlt className="text-xl mx-auto" />
            <p className="text-xs">Call</p>
          </a>

          <a
            href="https://wa.me/917011438890"
            target="_blank"
            className="py-3 bg-green-600 text-white"
          >
            <FaWhatsapp className="text-xl mx-auto" />
            <p className="text-xs">WhatsApp</p>
          </a>
        </div>
      </div>

      {/* ---------------- DESKTOP SLIDE PANEL (RIGHT) ---------------- */}
      <div
        className={`hidden md:block fixed top-1/2 right-0 -translate-y-1/2 z-50 transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="w-96 bg-white p-6 border-l-4 border-orange-500 rounded-l-3xl shadow-2xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold flex items-center gap-2">
              <FaEnvelope className="text-orange-500" />
              Quick Enquiry
            </h3>
            <button onClick={() => setOpen(false)} className="text-2xl text-gray-400">
              &times;
            </button>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-4">

            <div>
              <label className="text-sm">Full name *</label>
              <input
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl focus:border-orange-400 outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">

              <div>
                <label className="text-sm">Email *</label>
                <input
                  name="reply_to"
                  type="email"
                  value={formData.reply_to}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl focus:border-orange-400 outline-none"
                />
              </div>

              <div>
                <label className="text-sm">Phone *</label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl focus:border-orange-400 outline-none"
                />
              </div>

            </div>

            <div>
              <label className="text-sm">Requirement *</label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl focus:border-orange-400 outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 text-white font-bold bg-linear-to-r from-orange-500 to-amber-500 rounded-lg"
            >
              {loading ? "Sending..." : "Submit Enquiry"}
            </button>

            {status.message && (
              <p className={`text-sm mt-1 ${status.type === "success" ? "text-green-600" : "text-red-500"}`}>
                {status.message}
              </p>
            )}

          </form>
        </div>
      </div>

      {/* ---------------- MOBILE SLIDE-UP PANEL ---------------- */}
      {open && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}

      <div
        className={`md:hidden fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ${
          open ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="bg-white p-5 pb-24 rounded-t-3xl shadow-2xl border-t-4 border-orange-500 max-h-[85vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold text-base flex items-center gap-2">
              <FaEnvelope className="text-orange-500" /> Quick Enquiry
            </h3>
            <button className="text-2xl text-gray-400" onClick={() => setOpen(false)}>
              &times;
            </button>
          </div>

          {/* MOBILE FORM */}
          <form onSubmit={handleSubmit} className="space-y-3">

            <div>
              <label className="text-xs">Full name *</label>
              <input
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg"
              />
            </div>

            <div>
              <label className="text-xs">Email *</label>
              <input
                name="reply_to"
                type="email"
                value={formData.reply_to}
                onChange={handleChange}
                className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg"
              />
            </div>

            <div>
              <label className="text-xs">Phone *</label>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg"
              />
            </div>

            <div>
              <label className="text-xs">Requirement *</label>
              <textarea
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 text-white font-bold bg-amber-500 rounded-lg"
            >
              {loading ? "Sending..." : "Submit Enquiry"}
            </button>

            {status.message && (
              <p className={`text-xs mt-1 ${status.type === "success" ? "text-green-600" : "text-red-500"}`}>
                {status.message}
              </p>
            )}

          </form>
        </div>
      </div>
    </>
  );
};

export default FloatingContact;
