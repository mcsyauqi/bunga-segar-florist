import Hero from "@/components/sections/Hero";
import Categories from "@/components/sections/Categories";
import BestSeller from "@/components/sections/BestSeller";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Occasions from "@/components/sections/Occasions";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Stats from "@/components/sections/Stats";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Categories />
      <BestSeller />
      <WhyChooseUs />
      <Occasions />
      <Services />
      <Process />
      <Gallery />
      <Testimonials />
      <FAQ limit={5} showLink={true} />
      <CTA />
    </>
  );
}
