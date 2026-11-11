import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="flex flex-col gap-5 scroll-mt-24 px-5 py-16 md:py-24 max-w-7xl mx-auto bg-brand-maroon text-white rounded-3xl my-12"
    >
      <div className="flex flex-col md:flex-row md:justify-between gap-8">
        <div>
          <span className="font-mono text-xs font-semibold tracking-wider text-primary">
            OPEN FOR OJT & INTERNSHIPS
          </span>
          <h2 className="font-space-grotesk text-4xl md:text-5xl font-bold tracking-tight mt-2">
            Let's build something impactful together.
          </h2>
          <p className="font-plus-jakarta-sans text-sm md:text-base text-slate-400 mt-3 max-w-xl">
            Looking for a dedicated frontend or full-stack intern to join your
            engineering team? I'd love to hear about your projects.
          </p>
        </div>
      </div>
      <div className="flex justify-end shrink-0">
        <a
          href="mailto:jameslester.l.lopez@gmail.com"
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-plus-jakarta-sans text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-primary-hover hover:shadow-lg"
        >
          Get in touch
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    </section>
  );
};
