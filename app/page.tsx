import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { WhyUs } from "@/components/sections/WhyUs";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { Process } from "@/components/sections/Process";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";import { Footer } from "@/components/sections/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div id="services"><Services /></div>
      <div id="portfolio"><Portfolio /></div>
      <WhyUs />
      <div id="pricing"><Pricing /></div>
      <Testimonials />
      <Process />
      <div id="faq"><FAQ /></div>
      <CTA />
      <Footer />
    </>
  );
}
