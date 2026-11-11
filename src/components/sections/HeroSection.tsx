import Profile from "../../assets/profile.png";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PrimaryButton } from "../buttons/PrimaryButton";
import { SecondaryButton } from "../buttons/SecondaryButton";

const socialLinks = [
  {
    icon: faGithub,
    name: "GitHub",
    url: "https://github.com/GemsLister",
  },
  {
    icon: faLinkedin,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/jameslesterlopez",
  },
  {
    icon: faEnvelope,
    name: "Email",
    url: "mailto:jameslester.l.lopez@gmail.com",
  },
];

export const HeroSection = () => {
  return (
    <section className="w-full px-5 py-12 md:px-7 lg:py-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 lg:gap-12 lg:flex-row lg:items-center">
        {/* Left Column: Text & Actions */}
        <div className="min-w-0 flex-1">
          {/* Status Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 border border-orange-200/60 text-primary text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-space-grotesk">
              Open to Internship Opportunities
            </span>
          </div>

          {/* Main Headline */}
          <div className="font-space-grotesk text-4xl font-bold sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl leading-tight">
            <span className="text-slate-950 font-bold text-lg sm:text-2xl tracking-wide">
              Hi, <span className="text-primary">I'm James Lester Lopez</span>
            </span>
            <h1 className="text-slate-950">I build thoughtful</h1>
            <span className="text-primary">responsive web applications.</span>
          </div>

          {/* Bio Copy */}
          <p className="mt-5 font-plus-jakarta-sans text-base md:text-lg font-medium text-slate-700 leading-relaxed max-w-2xl">
            A Bachelor of Science in Information Technology (BSIT) student and
            aspiring Frontend Developer who enjoys turning complex ideas into
            clear, welcoming digital experiences. I focus on building
            responsive, user-friendly interfaces using React, TypeScript, and
            modern styling tools.
          </p>

          {/* Action Buttons Row (Primary + Outline Hierarchy) */}
          <div className="flex flex-wrap items-center gap-4 mt-6">
            <PrimaryButton href="#projects">View Projects</PrimaryButton>
            <SecondaryButton>
              View Resume
              <FontAwesomeIcon icon={faFile} />
            </SecondaryButton>
          </div>

          {/* Social Icons Row */}
          <div className="mt-6 flex items-center gap-4 text-primary">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="transition-colors duration-300 hover:text-primary-hover"
              >
                <FontAwesomeIcon
                  icon={social.icon}
                  className="text-2xl lg:text-3xl"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Right Column: Profile Image */}
        <div className="flex justify-center w-full lg:w-5/12 shrink-0">
          <img
            src={Profile}
            alt="Profile"
            className="w-full max-w-xs sm:max-w-sm rounded-3xl border-4 border-white shadow-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};
