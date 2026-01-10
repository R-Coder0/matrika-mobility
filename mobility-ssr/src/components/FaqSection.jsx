import { useState } from "react";

export default function FAQSection() {
  const faqs = [
    {
      question: "What types of car rental and mobility services does TaxiTribe provide?",
      answer:
        "TaxiTribe provides reliable car rental and mobility services for daily travel, long-term rentals, events, and corporate employee transportation, backed by defined SLAs, 24×7 support, verified drivers, and transparent billing.",
    },
    {
      question: "How does TaxiTribe ensure reliability and on-time performance for corporate travel?",
      answer:
        "TaxiTribe operates with defined SLAs, process-based dispatch, live trip monitoring, and a dedicated operations team. With pre-dispatch quality checks, real-time coordination, and contingency planning, we help minimise delays and ensure employees reach their destinations on time.",
    },
    {
      question: "What safety measures are in place for travellers, especially women?",
      answer:
        "All drivers are police-verified and professionally trained with GPS-enabled vehicles, panic buttons, and SOS support. Additionally, for women, TaxiTribe offers enhanced monitoring, WhatsApp-based SOS assistance, and end-to-end trip oversight to ensure safe travel.",
    },
    {
      question: "How does billing work for corporate clients using TaxiTribe?",
      answer:
        "TaxiTribe offers transparent, centralised billing with flexible cycles. Our clients receive consolidated invoices along with detailed MIS reports, making reconciliation simple for admin and finance teams.",
    },
    {
      question: "What standards does TaxiTribe follow for vehicle quality and maintenance?",
      answer:
        "All vehicles used by TaxiTribe are well-maintained, with a strict limit on vehicle age of 3 years and controlled mileage. With regular preventive maintenance, daily safety checks, and hygiene protocols, we ensure consistent comfort and reduced breakdown risk.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 bg-[#FFFAFA]">
      <div className="container mx-auto px-6 max-w-4xl">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Frequently Asked <span className="text-amber-600">Questions</span>
          </h2>
          <p className="mt-3 text-gray-600">
            Answers to common questions about TaxiTribe’s car rental and mobility services
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border border-gray-200 rounded-xl bg-white shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex justify-between items-center px-6 py-4 text-left"
                >
                  <span className="text-gray-900 font-semibold">
                    {faq.question}
                  </span>
                  <span className="text-amber-600 text-xl font-bold">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 text-gray-700 text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
