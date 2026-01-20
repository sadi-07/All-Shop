import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import Pricing from "@/components/home/Pricing";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <Hero />
      <Features />
      <About />
      <Services />
      <Pricing />
      <Testimonials />
      <Contact />
    </div>
  );
}
