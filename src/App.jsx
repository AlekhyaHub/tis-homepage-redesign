import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/sections/HeroSection";
import SectionHeading from "./components/ui/SectionHeading";
import Card from "./components/ui/Card";
import { stats } from "./data/stats";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />

        <section className="px-6 py-16">
          <SectionHeading title="Campus Highlights" />
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((item) => (
              <Card key={item.label} className="text-center">
                <p className="text-4xl font-bold text-brand dark:text-brand-soft">
                  {item.value}
                </p>
                <p className="mt-2 text-sm uppercase text-muted">{item.label}</p>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default App;