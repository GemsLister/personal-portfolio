import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white px-5 py-12 md:py-16">
      <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Side: Branding / Name */}
        <div className="flex flex-col items-center md:items-start">
          <span className="font-space-grotesk text-xl font-bold text-slate-950">
            James Lester Lopez
          </span>
          <p className="font-plus-jakarta-sans text-sm text-slate-500 mt-1">
            Aspiring Frontend Developer
          </p>
        </div>

        {/* Right Side: Social Links & Copyright */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/GemsLister"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition-colors hover:border-primary hover:bg-primary hover:text-white"
            >
              <FontAwesomeIcon icon={faGithub} className="text-base" />
            </a>
            <a
              href="https://www.linkedin.com/in/jameslesterlopez"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition-colors hover:border-primary hover:bg-primary hover:text-white"
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-base" />
            </a>
            <a
              href="mailto:jameslester.l.lopez@gmail.com"
              aria-label="Email Me"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition-colors hover:border-primary hover:bg-primary hover:text-white"
            >
              <FontAwesomeIcon icon={faEnvelope} className="text-base" />
            </a>
          </div>
          <p className="font-plus-jakarta-sans text-xs text-slate-400">
            © {currentYear} James Lester Lopez. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
