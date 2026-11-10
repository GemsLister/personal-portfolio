import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { nav: "Projects", link: "#projects" },
  { nav: "Technical Skills", link: "#tools" },
  { nav: "Contact", link: "#contact" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 0);

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  const hasSolidBackground = isOpen || isScrolled;

  return (
    <header
      className={`sticky top-0 z-50 flex flex-wrap items-center justify-between px-6 py-4 transition-colors duration-300 ${
        hasSolidBackground ? "bg-primary shadow-md" : "bg-transparent"
      }`}
    >
      {/* Logo Box */}
      <div
        className={`rounded-lg p-2.5 shadow-sm ${
          hasSolidBackground ? "bg-white text-primary" : "bg-primary text-white"
        }`}
      >
        <h1 className="font-space-grotesk font-bold text-lg leading-none">
          JL
        </h1>
      </div>

      {/* Mobile Menu Toggle Button */}
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className={`cursor-pointer transition-colors duration-300 md:hidden ${
          hasSolidBackground
            ? "text-white hover:text-slate-200"
            : "text-slate-900 hover:text-primary"
        }`}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="main-navigation"
      >
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* Navigation Links */}
      <nav
        id="main-navigation"
        className={`w-full overflow-hidden transition-all duration-300 ease-in-out md:w-auto md:max-h-none md:translate-y-0 md:overflow-visible md:pt-0 md:opacity-100 ${
          isOpen
            ? "max-h-64 translate-y-0 pt-4 opacity-100"
            : "max-h-0 -translate-y-2 pt-0 opacity-0"
        }`}
      >
        <ul className="flex list-none flex-col items-end md:items-center gap-4 md:flex-row md:gap-8">
          {navLinks.map((item) => (
            <li key={item.link}>
              <a
                href={item.link}
                onClick={() => setIsOpen(false)}
                className={`font-space-grotesk text-base sm:text-lg transition-colors duration-300 font-medium ${
                  hasSolidBackground
                    ? "text-white hover:text-slate-200"
                    : "text-slate-800 hover:text-primary"
                }`}
              >
                {item.nav}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
