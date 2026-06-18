import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Domains from "@/components/sections/Domains";
import ProblemStatements from "@/components/sections/ProblemStatements";
import Prizes from "@/components/sections/Prizes";
import Timeline from "@/components/sections/Timeline";
import Sponsors from "@/components/sections/Sponsors";
import FAQ from "@/components/sections/FAQ";
import RegistrationCTA from "@/components/sections/RegistrationCTA";
import ScrollToTop from "@/components/ui/ScrollToTop";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Domains />
        <ProblemStatements />
        <Prizes />
        <Timeline />
        <Sponsors />
        <FAQ />
        <RegistrationCTA />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}