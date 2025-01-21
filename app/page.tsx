import HeroSection from "./components/Hero";
import AboutSection from "./components/About";
import { LogoTicker } from "./components/LogoTicker";
import logosData from "./data/logosData.json"; // Now directly imports the array
import ServicesSection from "./components/Services";
import PortfolioGallery from "./components/PortfolioGallery";
import PricingSection from "./components/Pricing";
import { Testimonials } from "./components/Testimonials";
import CTASection from "./components/CTASection";
import ContactSection from "./components/ContactSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <LogoTicker logos={logosData} />
      <AboutSection />
      <ServicesSection />
      <CTASection />
      <PortfolioGallery />
      <PricingSection />
      <Testimonials />
      <ContactSection />
    </main>
  );
}
