import { useEffect, useRef, useState, type ReactNode } from "react";

type FadeInOnViewProps = {
  children: ReactNode;
};

export const FadeInOnView = ({ children }: FadeInOnViewProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [hasEnteredViewport, setHasEnteredViewport] = useState(false);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEnteredViewport(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(wrapper);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={`transition-opacity duration-700 ease-out motion-reduce:transition-none ${
        hasEnteredViewport
          ? "opacity-100"
          : "opacity-0 motion-reduce:opacity-100"
      }`}
    >
      {children}
    </div>
  );
};
