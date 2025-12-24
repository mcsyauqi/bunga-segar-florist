import Hero from "@/components/sections/Hero";
import Categories from "@/components/sections/Categories";
import BestSeller from "@/components/sections/BestSeller";
import Occasions from "@/components/sections/Occasions";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <BestSeller />
      <Occasions />
      <Services />
      <Testimonials />
      <CTA />
    </>
  );
}
