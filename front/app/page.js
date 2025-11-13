import Image from "next/image";
import Hero from "./_components/Hero";
import ProductSection from "./_components/ProductSection";
import WhyChooseUs from "./_components/WhyChooseUs";
import Testimonials from "./_components/Testimonials";
import HowItWorks from "./_components/HowItWorks";
import Categories from "./_components/Categories";
import FAQ from "./_components/FAQ";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <Hero />
      <ProductSection />
      <Categories />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <FAQ />

    </div>
  );
}
