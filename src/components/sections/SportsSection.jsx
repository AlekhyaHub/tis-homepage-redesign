import { Trophy } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import { sports } from "../../data/sports";

function SportsSection() {
  return (
    <section
      id="sports"
      className="bg-teal-tint/40 px-6 py-16 dark:bg-neutral-900"
    >
      <SectionHeading
        title="Sports? It's the foundation"
        subtitle="16+ sports curated to bring joy and discipline to your life."
      />
      <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {sports.map((sport) => (
          <li key={sport}>
            <Card className="flex h-full items-center gap-3">
              <Trophy
                size={20}
                className="shrink-0 text-gold"
                aria-hidden="true"
              />
              <span className="font-nav text-sm font-semibold uppercase tracking-wide">
                {sport}
              </span>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default SportsSection;