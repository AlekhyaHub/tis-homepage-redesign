import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "../../assets/logo.png";
import { navLinks } from "../../data/navLinks";
import { contact } from "../../data/contact";
import Button from "../ui/Button";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-teal text-ink">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-4 px-4 py-2 text-xs sm:text-sm">
          <a
            href={contact.helplineHref}
            className="flex items-center gap-2 font-nav font-medium uppercase tracking-wide"
          >
            <Phone size={16} aria-hidden="true" />
            <span className="hidden sm:inline">{contact.helplineLabel}</span>
            {contact.helpline}
          </a>
          <a
            href="#enquire"
            className="rounded-full bg-black px-4 py-1 font-semibold text-white transition-colors hover:bg-ink-soft"
          >
            Enquire Now
          </a>
        </div>
      </div>

      <nav aria-label="Main navigation" className="bg-brand">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
          <a href="#" aria-label="Tulas International School home">
            <img
              src={logo}
              alt="Tulas International School"
              width="56"
              height="56"
              className="h-14 w-14 rounded-full bg-white object-contain"
            />
          </a>

          <ul className="hidden items-center gap-5 xl:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-nav text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <Button
                href={contact.applyUrl}
                variant="outline"
                target="_blank"
                rel="noreferrer"
              >
                Apply Now
              </Button>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-teal text-ink xl:hidden"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <ul id="mobile-menu" className="bg-brand-dark px-4 pb-4 xl:hidden">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block border-b border-white/10 py-3 font-nav text-sm font-semibold uppercase tracking-wide text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-4 sm:hidden">
              <Button
                href={contact.applyUrl}
                target="_blank"
                rel="noreferrer"
              >
                Apply Now
              </Button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Navbar;