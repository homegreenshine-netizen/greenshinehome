
import AreasSection from "./components/home/AreasSection";
import CtaSection from "./components/home/CtaSection";
import HeroSection from "./components/home/HeroSection";
import HowItWorksSection from "./components/home/HowItWorksSection";
import PricingSection from "./components/home/PricingSection";
import ServicesSection from "./components/home/ServicesSection";
import WhyUsSection from "./components/home/WhyUsSection";


export default function Home() {
  return (
    <>
  
    <HeroSection />
    <ServicesSection />
    <PricingSection />
    <WhyUsSection/>
    <HowItWorksSection/>
    <AreasSection/>
    <CtaSection/>
    </>
  );
}
