"use client";
import Image from "next/image";
import React from "react";

function AboutUs() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20 pt-28 px-6 md:px-20 lg:px-28">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left side text */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Empowering Your <span className="text-primary">Digital Journey</span>
          </h2>
          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            At <span className="font-semibold text-primary">Digital Store</span>,
            we believe in helping creators, students, and businesses thrive in
            the digital world. We provide high-quality digital products,
            online courses, and resources to accelerate your growth.
          </p>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            From modern UI templates and design assets to full-stack development
            courses and productivity tools — we make digital learning and
            innovation accessible to everyone.
          </p>
          
          <div className="flex gap-4 mt-8">
            <button className="px-6 py-3 bg-primary text-white font-medium rounded-xl shadow-md hover:bg-primary-dark transition">
              Explore Products
            </button>
            <button className="px-6 py-3 border border-primary text-primary font-medium rounded-xl hover:bg-primary-light transition">
              Join Our Courses
            </button>
          </div>
        </div>

        {/* Right side image */}
        <div className="relative w-full h-[320px] md:h-[320px] rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/digital-about.jpeg"
            alt="About Digital Store"
            fill
            className="object-cover hover:scale-105 transition-all duration-700 ease-in-out"
          />
        </div>
      </div>

      {/* Extra tagline below */}
      <div className="text-center mt-8">
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
          “Your One-Stop Platform for Digital Success”
        </h3>
        <p className="text-gray-500 mt-3 text-lg">
          Learn, create, and grow with the latest technology and digital tools.
        </p>
      </div>
    </section>
  );
}

export default AboutUs;
