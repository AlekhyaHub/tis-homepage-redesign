import Navbar from "./components/layout/Navbar";

import Footer from "./components/layout/Footer";
import ScrollProgress from "./components/animation/ScrollProgress";
import HeroSection from "./components/sections/HeroSection";
import StatsSection from "./components/sections/StatsSection";
import SportsSection from "./components/sections/SportsSection";
import EnquirySection from "./components/sections/EnquirySection";

function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <SportsSection />
        <EnquirySection />
      </main>
      <Footer />
    </>
  );
}

export default App;