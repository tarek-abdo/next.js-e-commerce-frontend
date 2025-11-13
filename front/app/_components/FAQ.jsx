"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      question: "How do I download my purchased product?",
      answer:
        "Once your payment is confirmed, you’ll receive an instant download link on your account page and via email.",
    },
    {
      question: "Can I get a refund?",
      answer:
        "Yes! If you're not satisfied with your purchase, you can request a refund within 14 days. Check our refund policy for details.",
    },
    {
      question: "How can I contact support?",
      answer:
        "Our support team is available 24/7. You can reach us through the Contact Us page or by emailing support@digitalstore.com.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
          Frequently Asked <span className="text-primary">Questions</span>
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <button
                className="flex justify-between items-center w-full px-6 py-4 text-left text-gray-800 font-medium"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.question}
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-primary" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
