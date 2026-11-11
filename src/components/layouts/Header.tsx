import { useEffect, useState } from "react";
import { Certificate, Folder, House, Mail, Wrench } from "lucide-react";

const navLinks = [
  { nav: "Home", link: "#top", Icon: House },
  { nav: "Projects", link: "#projects", Icon: Folder },
  { nav: "Certifications", link: "#certifications", Icon: Certificate },
  { nav: "Technical Skills", link: "#tools", Icon: Wrench },
  { nav: "Contact", link: "#contact", Icon: Mail },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 24);

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  return (
    <header className="sticky top-0 z-50 px-4 py-3">
      <div
        className={`mx-auto flex min-h-14 w-fit items-center justify-center gap-6 rounded-full bg-brand-light-maroon px-5 py-2 shadow-lg transition-all duration-300 ease-out md:min-h-14 ${
          isScrolled
            ? "md:justify-center md:px-5"
            : "md:w-full md:max-w-7xl md:justify-between md:rounded-none md:bg-transparent md:px-6 md:py-0 md:shadow-none"
        }`}
      >
        <a
          href="#top"
          aria-label="James Lester Lopez — home"
          className="rounded-lg bg-primary p-2 text-white shadow-sm transition-transform duration-300 hover:scale-105 md:hidden"
        >
          <span className="font-space-grotesk text-base font-bold leading-none">
            JL
          </span>
        </a>

        {!isScrolled && (
          <a
            href="#top"
            aria-label="James Lester Lopez — home"
            className="hidden rounded-lg bg-primary p-2.5 text-white shadow-sm transition-transform duration-300 hover:scale-105 md:block"
          >
            <span className="font-space-grotesk text-lg font-bold leading-none">
              JL
            </span>
          </a>
        )}

        <nav id="main-navigation" aria-label="Main navigation">
          <ul
            className={`flex list-none flex-row items-center gap-1 ${
              isScrolled ? "md:gap-1" : "md:gap-7"
            }`}
          >
            {navLinks.map(({ nav, link, Icon }) => (
              <li key={link}>
                <a
                  href={link}
                  aria-label={nav}
                  title={nav}
                  className={`group flex items-center gap-2 rounded-full p-2.5 transition-all duration-300 ${
                    isScrolled
                      ? "text-white hover:bg-white/10 hover:text-white"
                      : "text-white hover:bg-white/10 md:p-2 md:font-space-grotesk md:font-medium md:text-slate-800 md:hover:bg-transparent md:hover:text-primary"
                  }`}
                >
                  <Icon
                    size={20}
                    aria-hidden="true"
                    className={`h-6 w-6 ${isScrolled ? "" : "md:hidden"}`}
                  />
                  <span
                    className={
                      isScrolled
                        ? "sr-only"
                        : "sr-only md:not-sr-only md:text-base lg:text-lg"
                    }
                  >
                    {nav}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
