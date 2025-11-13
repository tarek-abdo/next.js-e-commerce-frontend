"use client";
import { Layers, Code, Brush, BookOpen, Puzzle } from "lucide-react";

export default function Categories() {
  const categories = [
    { title: "UI Kits", icon: <Layers className="w-10 h-10 text-indigo-600" /> },
    { title: "Development Courses", icon: <Code className="w-10 h-10 text-indigo-600" /> },
    { title: "Design Templates", icon: <Brush className="w-10 h-10 text-indigo-600" /> },
    { title: "Ebooks", icon: <BookOpen className="w-10 h-10 text-indigo-600" /> },
    { title: "Plugins", icon: <Puzzle className="w-10 h-10 text-indigo-600" /> },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Our <span className="text-primary">Categories</span>
        </h2>
        <p className="text-gray-600 mb-10">
          Explore our diverse range of digital products designed to boost your skills and creativity.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-4">{cat.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{cat.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
