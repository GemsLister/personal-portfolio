import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ScrollButton } from "../buttons/ScrollButton";
import PickleSlot from "../../assets/projects-image/pickleslot.png";
import Fynlo from "../../assets/projects-image/fynlo.png";
import { ProjectContainer } from "../containers/ProjectContainer";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const projects = [
  {
    name: "Fynlo",
    image: Fynlo,
    description:
      "A full-stack personal finance tracker for managing budgets, transactions, and income and expense trends in one dashboard.",
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Express",
      "PostgreSQL",
      "JWT",
    ],
    githubRepo: "https://github.com/GemsLister/Fynlo",
    url: "https://fynlo-theta.vercel.app/",
    icon: [faPlay, faGithub],
  },
  {
    name: "PickleSlot",
    image: PickleSlot,
    description:
      "A court reservation app for browsing pickleball facilities, booking court time, and renting equipment. Includes player accounts and an admin area for managing facilities and reservations.",
    techStack: ["Laravel", "PHP", "Vite", "PostgreSQL", "Docker"],
    githubRepo: "https://github.com/GemsLister/PickleSlot",
    url: "https://pickleslot.onrender.com/",
    icon: [faPlay, faGithub],
  },
];

export const ProjectsSection = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollProjects = (direction: "left" | "right") => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    carousel.scrollBy({
      left: direction === "left" ? -carousel.clientWidth : carousel.clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="projects"
      className="scroll-mt-24 px-5 py-12 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="font-space-grotesk text-4xl md:text-5xl font-bold text-primary tracking-tight">
            PROJECTS
          </h1>

          {/* Scroll Buttons */}
          <div className="flex gap-2 md:hidden">
            <ScrollButton
              scroll={() => scrollProjects("left")}
              arialLabel="Previous project"
            >
              <ChevronLeft aria-hidden="true" />
            </ScrollButton>
            <ScrollButton
              scroll={() => scrollProjects("right")}
              arialLabel="Next project"
            >
              <ChevronRight aria-hidden="true" />
            </ScrollButton>
          </div>
        </div>

        {/* Projects Container */}
        <div
          ref={carouselRef}
          role="region"
          aria-label="Projects"
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth scrollbar-none md:snap-none md:overflow-visible"
        >
          {projects.map((project) => (
            <ProjectContainer
              name={project.name}
              image={project.image}
              description={project.description}
              techStack={project.techStack}
              url={project.url}
              githubRepo={project.githubRepo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
