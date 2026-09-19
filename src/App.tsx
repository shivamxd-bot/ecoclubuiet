import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import EventSection from "./components/EventSection";
import About from "./components/About";
import Showcase from "./components/Showcase";
import ScriptureBand from "./components/ScriptureBand";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import Passes from "./components/Passes";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-paper font-body text-ink">
      {/* film grain over everything */}
      <div
        aria-hidden
        className="grain-overlay pointer-events-none fixed inset-0 z-[80] opacity-[0.05] mix-blend-multiply"
      />

      <Navbar />
      <main>
        <Hero />
        <EventSection />
        <About />
        <Showcase />
        <ScriptureBand />
        <Benefits />
        <Testimonials />
        <Passes />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
