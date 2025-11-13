"use client";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Ahmed",
      role: "Web Developer",
      review:
        "The best platform to learn React and buy UI kits! Everything is easy to use and well organized. Highly recommended!",
      rating: 5,
    },
    {
      name: "Mohamed Hassan",
      role: "UI/UX Designer",
      review:
        "Amazing experience! The digital products are top quality, and the lifetime access makes it worth every penny.",
      rating: 5,
    },
    {
      name: "Aisha Ali",
      role: "Student",
      review:
        "I’ve learned so much from their courses! The instructors explain everything clearly, and support is always available.",
      rating: 4,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-4xl  mb-4 text-gray-900">
          What Our <span className="text-primary">Customers Say</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Real feedback from our happy learners and digital creators.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-left"
            >
              <div className="flex mb-3">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">“{item.review}”</p>
              <div>
                <h3 className="font-semibold text-gray-900">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}