import Navbar from "./components/layout/Navbar";
import ScrollProgress from "./components/animation/ScrollProgress";
import HeroSection from "./components/sections/HeroSection";
import StatsSection from "./components/sections/StatsSection";
import SportsSection from "./components/sections/SportsSection";

function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <SportsSection />
      </main>
    </>
  );
}

export default App;