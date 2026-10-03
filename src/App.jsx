import Button from "./components/ui/Button";
import SectionHeading from "./components/ui/SectionHeading";
import Card from "./components/ui/Card";
import { stats } from "./data/stats";

function App() {
  return (
    <main>
      <section className="bg-brand px-6 py-16">
        <SectionHeading title="Why Tulas" subtitle="Test section" light />
        <div className="flex justify-center gap-3">
          <Button href="#enquire">Apply Now</Button>
          <Button variant="dark">Enquire Now</Button>
          <Button variant="outline">Outline</Button>
        </div>
      </section>

      <section className="px-6 py-16">
        <SectionHeading title="Campus Highlights" />
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((item) => (
            <Card key={item.label} className="text-center">
              <p className="text-4xl font-bold text-brand">{item.value}</p>
              <p className="mt-2 text-sm uppercase text-muted">{item.label}</p>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;