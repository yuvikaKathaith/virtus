import Navbar from "./Components/Navbar";
import HeroSection from "./Components/Hero";
import About from "./Components/About";
import VolunteerForm from "./Components/VolunteerForm";
import SupportSection from "./Components/SupportSection";
import GiveDonation from "./Components/GiveDonation";
import Footer from "./Components/Footer";
import { ScrollThanks } from "./Components/ScrollThanks";
import AgendaSection from "./Components/AgendaSection";

export default function App() {
  return (
    <div className="bg-[#ecece2] font-sans">
      <Navbar />
      <main className="px-4 md:px-12 py-8 space-y-16">
        <HeroSection />
        <SupportSection />
        <About />
        <AgendaSection />
        <GiveDonation />
        <VolunteerForm />
        <Footer />
        <ScrollThanks />
      </main>
    </div>
  );
}
