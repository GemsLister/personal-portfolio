import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setIsVisible(window.scrollY > 300);

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      aria-hidden={!isVisible}
      disabled={!isVisible}
      className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary motion-reduce:transition-none ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <ArrowUp size={22} aria-hidden="true" />
    </button>
  );
};
