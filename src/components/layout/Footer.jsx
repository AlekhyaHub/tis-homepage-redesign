import { MapPin, Phone, Mail } from "lucide-react";
import { contact } from "../../data/contact";

function Footer() {
  return (
    <footer id="footer" className="bg-brand text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-3">
        <div>
          <h2 className="font-nav text-xl font-bold uppercase tracking-wide">
            Tulas International School
          </h2>
          <p className="mt-3 flex items-start gap-2 text-sm text-white/90">
            <MapPin size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
            {contact.address}
          </p>
        </div>

        <div className="space-y-3 text-sm">
          <h2 className="font-nav text-lg font-bold uppercase tracking-wide">
            Contact
          </h2>
          <a
            href={contact.helplineHref}
            className="flex items-center gap-2 hover:text-gold"
          >
            <Phone size={16} aria-hidden="true" />
            {contact.helpline}
          </a>
          <p className="flex items-center gap-2 text-white/90">
            <Phone size={16} aria-hidden="true" />
            {contact.landlines.join(", ")}
          </p>
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center gap-2 hover:text-gold"
          >
            <Mail size={16} aria-hidden="true" />
            {contact.email}
          </a>
        </div>

        <div>
          <h2 className="font-nav text-lg font-bold uppercase tracking-wide">
            Follow us
          </h2>
          <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm">
            {contact.social.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="underline-offset-4 hover:text-gold hover:underline"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="border-t border-white/20 px-6 py-4 text-center text-xs text-white/80">
        Redesign for assessment purposes. Original brand, copy and assets belong
        to Tulas International School, Dehradun.
      </p>
    </footer>
  );
}

export default Footer;