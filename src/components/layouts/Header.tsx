import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { nav: "About me", link: "#about-me" },
  { nav: "Projects", link: "#projects" },
  { nav: "Tools", link: "#tools" },
  { nav: "Contact", link: "#contact" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={`sticky top-0 z-50 flex flex-wrap items-center justify-between p-4 transition-colors duration-300 ${
        isOpen ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className={`rounded-sm p-4 ${isOpen ? "bg-white" : "bg-primary"}`}>
        <h1
          className={`font-space-grotesk font-bold ${
            isOpen ? "text-primary" : "text-slate-50"
          }`}
        >
          JL
        </h1>
      </div>

      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className={`cursor-pointer transition-colors duration-300 md:hidden ${
          isOpen
            ? "text-white hover:text-slate-200"
            : "text-primary hover:text-primary-hover"
        }`}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="main-navigation"
      >
        {isOpen ? <X size={35} /> : <Menu size={35} />}
      </button>

      <nav
        id="main-navigation"
        className={`w-full overflow-hidden text-right transition-all duration-300 ease-in-out md:w-auto md:max-h-none md:translate-y-0 md:overflow-visible md:pt-0 md:opacity-100 ${
          isOpen
            ? "max-h-64 translate-y-0 pt-4 opacity-100"
            : "max-h-0 -translate-y-2 pt-0 opacity-0"
        }`}
      >
        <ul className="flex list-none flex-col items-center gap-3 md:flex-row md:items-center md:gap-8">
          {navLinks.map((item) => (
            <li key={item.link}>
              <a
                href={item.link}
                onClick={() => setIsOpen(false)}
                className={`font-plus-jakarta-sans text-xl transition-colors duration-300 font-medium hover:font-extrabold ${
                  isOpen
                    ? "text-white hover:text-slate-200"
                    : "text-primary hover:text-primary-hover"
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
