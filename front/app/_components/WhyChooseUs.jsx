'use client'
import { Clock, DollarSign, Download, Headphones, Users } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Download className="w-8 h-8 text-primary" />,
      title: "Instant Downloads",
      desc: "Access your purchased digital products immediately after checkout.",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Expert Instructors",
      desc: "Learn from professionals with real-world experience in tech and design.",
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Lifetime Access",
      desc: "Enjoy lifetime access to all your purchased courses and materials.",
    },
    {
      icon: <Headphones className="w-8 h-8 text-primary" />,
      title: "24/7 Support",
      desc: "We’re always here to help you with any questions or technical issues.",
    },
    {
      icon: <DollarSign className="w-8 h-8 text-primary" />,
      title: "Affordable Prices",
      desc: "High-quality digital products and courses at competitive prices.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">
          Why <span className="text-primary">Choose Us</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          We provide everything you need to start, grow, and succeed in your digital journey.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
