import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

type ProjectContainerProps = {
  name: string;
  image: string;
  description: string;
  techStack: string[];
  url: string;
  githubRepo: string;
};

export const ProjectContainer = ({
  name,
  image,
  description,
  techStack,
  url,
  githubRepo,
}: ProjectContainerProps) => {
  return (
    <article
      className="group w-full shrink-0 snap-center overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition-shadow duration-300 hover:shadow-xl md:w-[calc(50%-0.75rem)]"
      aria-label={name}
    >
      {/* Browser Header Bar */}
      <div className="relative overflow-hidden rounded-t-2xl bg-slate-900">
        <div className="flex items-center gap-1.5 border-b border-slate-800 bg-slate-900 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
          <span className="ml-2 font-mono text-[10px] text-slate-400">
            {new URL(url).host}
          </span>
        </div>
        <div className="aspect-video overflow-hidden">
          <img
            src={image}
            alt={`${name} project preview`}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6">
        <div className="flex justify-between items-center">
          <h3 className="font-space-grotesk text-2xl font-bold text-slate-950">
            {name}
          </h3>

          {/* Live Demo and Github Repository Links */}
          <div className="flex gap-3">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live demo for ${name}`}
            >
              <FontAwesomeIcon
                icon={faPlay}
                className="text-primary hover:text-primary-hover text-2xl transition-all ease-in-out duration-300"
              />
            </a>
            <a
              href={githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View GitHub repository for ${name}`}
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="text-primary hover:text-primary-hover text-2xl transition-all ease-in-out duration-300"
              />
            </a>
          </div>
        </div>

        <p className="mt-2 font-plus-jakarta-sans text-sm leading-relaxed text-slate-700">
          {description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <li
              key={tech}
              className="rounded-full bg-primary/10 px-3 py-1 font-plus-jakarta-sans text-xs font-semibold text-primary"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};
