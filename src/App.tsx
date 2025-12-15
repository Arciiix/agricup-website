import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { WaterChart } from "./components/WaterChart";
import { HowItWorks } from "./components/HowItWorks";
import { Contact } from "./components/Contact";
import { Team } from "./components/Team";
import { Footer } from "./components/Footer";
import { Gallery } from "./components/Gallery";

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-green-500/30">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Gallery />
        <WaterChart />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
