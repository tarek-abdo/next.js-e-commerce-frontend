"use client";
import { ShoppingCart, Search, CreditCard, Download } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <Search className="w-10 h-10 text-primary" />,
      title: "Browse Digital Items",
      desc: "Explore a wide range of digital products and tech courses made by professionals.",
    },
    {
      icon: <ShoppingCart className="w-10 h-10 text-primary" />,
      title: "Add to Cart",
      desc: "Choose your favorite items or learning materials and add them to your cart easily.",
    },
    {
      icon: <CreditCard className="w-10 h-10 text-primary" />,
      title: "Purchase Securely",
      desc: "Enjoy safe and fast checkout with multiple payment options available.",
    },
    {
      icon: <Download className="w-10 h-10 text-primary" />,
      title: "Instant Access",
      desc: "Download your products or start your courses immediately after payment.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">
          How It <span className="text-primary">Works</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Get started in just a few simple steps — from browsing to instant
          access.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
