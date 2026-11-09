import ProfileImage from "../../assets/profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const socialLinks = [
  {
    icon: faLinkedin,
    link: "https://www.linkedin.com/in/james-lester-lopez-0a6695366/",
  },
  {
    icon: faGithub,
    link: "https://github.com/GemsLister",
  },
  {
    icon: faEnvelope,
    link: "mailto:jameslesterlopez@gmail.com",
  },
];
export const SideSection = () => {
  return (
    <aside className="p-10">
      <article className="animate__animated animate__fadeIn bg-slate-50 border-2 border-slate-300 flex flex-col gap-3 items-center p-4 rounded-3xl">
        <img src={ProfileImage} alt="Profile" className="size-50 rounded-3xl" />
        <div className="text-center px-2">
          <h1 className="font-space-grotesk font-bold text-3xl text-primary">
            James Lester Lopez
          </h1>
          <p className="font-space-grotesk text-md text-center mt-4 text-slate-700">
            An aspiring Frontend Engineer passionate about learning modern web
            tech and turning ideas into clean, interactive user experiences.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-3">
          {socialLinks.map((socialLink, index) => (
            <a
              key={index}
              href={socialLink.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-blue-500 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={socialLink.icon} className="text-2xl" />
            </a>
          ))}
        </div>
      </article>
    </aside>
  );
};
