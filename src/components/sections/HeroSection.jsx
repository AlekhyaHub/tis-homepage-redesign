import Button from "../ui/Button";
import { contact } from "../../data/contact";
import dance from "../../assets/dance.webp";
import karate from "../../assets/karate.webp";

function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-brand px-6 py-16 md:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_2fr_1fr]">
        <img
          src={karate}
          alt="Student practising karate"
          width="320"
          height="320"
          className="mx-auto hidden aspect-square w-56 rounded-full bg-gold object-cover lg:block xl:w-72"
        />

        <div className="text-center text-white">
          <h1 className="font-nav text-5xl font-extrabold uppercase leading-tight sm:text-6xl md:text-7xl">
            Let&apos;s do{" "}
            <span className="font-display normal-case italic">it</span>
            <span className="block">
              With{" "}
              <span className="font-display normal-case italic">Tulas</span>
            </span>
          </h1>
          <div className="mx-auto mt-4 h-1 w-40 rounded-full bg-gold md:w-64" />
          <p className="mx-auto mt-6 max-w-md text-base text-white/90 md:text-lg">
            CBSE co-ed boarding and day school in Dehradun for Class 4 to 12.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button
              href={contact.applyUrl}
              variant="dark"
              target="_blank"
              rel="noreferrer"
            >
              Apply Now
            </Button>
            <Button href="#enquire" variant="outline">
              Enquire Now
            </Button>
          </div>
        </div>

        <img
          src={dance}
          alt="Student performing a classical dance"
          width="320"
          height="320"
          className="mx-auto aspect-square w-56 rounded-full bg-ink object-cover sm:w-64 xl:w-72"
        />
      </div>
    </section>
  );
}

export default HeroSection;