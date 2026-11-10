// Language and Frameworks
import BootstrapLogo from "../../assets/logos/languages-frameworks/bootstrap.svg";
import CSSLogo from "../../assets/logos/languages-frameworks/css.svg";
import HTMLLogo from "../../assets/logos/languages-frameworks/html.svg";
import JavascriptLogo from "../../assets/logos/languages-frameworks/javascript.svg";
import LaravelLogo from "../../assets/logos/languages-frameworks/laravel.svg";
import PHPLogo from "../../assets/logos/languages-frameworks/php.svg";
import ReactLogo from "../../assets/logos/languages-frameworks/reactjs.svg";
import TailwindCSSLogo from "../../assets/logos/languages-frameworks/tailwindcss.svg";
import TypescriptLogo from "../../assets/logos/languages-frameworks/typescript.svg";
// Database and Tools
import CanvaLogo from "../../assets/logos/database-tools/canva.png";
import FigmaLogo from "../../assets/logos/database-tools/figma.svg";
import GitLogo from "../../assets/logos/database-tools/git.svg";
import GithubLogo from "../../assets/logos/database-tools/github.svg";
import MySQLLogo from "../../assets/logos/database-tools/mysql.png";
import NodeJSLogo from "../../assets/logos/database-tools/nodejs.svg";
import PostgreSQLLogo from "../../assets/logos/database-tools/pg.svg";
import PostmanLogo from "../../assets/logos/database-tools/postman.svg";

export const languagesFrameworks = [
  {
    name: "Bootstrap",
    image: BootstrapLogo,
    label: "Bootstrap",
  },
  {
    name: "CSS",
    image: CSSLogo,
    label: "CSS",
  },
  {
    name: "HTML",
    image: HTMLLogo,
    label: "HTML",
  },
  {
    name: "JavaScript",
    image: JavascriptLogo,
    label: "JavaScript",
  },
  {
    name: "TypeScript",
    image: TypescriptLogo,
    label: "TypeScript",
  },
  {
    name: "React",
    image: ReactLogo,
    label: "React",
  },
  {
    name: "PHP",
    image: PHPLogo,
    label: "PHP",
  },
  {
    name: "Laravel",
    image: LaravelLogo,
    label: "Laravel",
  },
  {
    name: "Tailwind CSS",
    image: TailwindCSSLogo,
    label: "Tailwind CSS",
  },
];

export const databaseTools = [
  {
    name: "Canva",
    image: CanvaLogo,
    label: "Canva",
  },
  {
    name: "Figma",
    image: FigmaLogo,
    label: "Figma",
  },
  {
    name: "Git",
    image: GitLogo,
    label: "Git",
  },
  {
    name: "Github",
    image: GithubLogo,
    label: "Github",
  },
  {
    name: "MySQL",
    image: MySQLLogo,
    label: "MySQL",
  },
  {
    name: "NodeJS",
    image: NodeJSLogo,
    label: "NodeJS",
  },
  {
    name: "PostgreSQL",
    image: PostgreSQLLogo,
    label: "PostgreSQL",
  },
  {
    name: "Postman",
    image: PostmanLogo,
    label: "Postman",
  },
];

export const TechnicalSkillsSection = () => {
  return (
    <section className="px-5 py-12 md:py-20 lg:py-24 max-w-7xl mx-auto">
      <h2 className="font-space-grotesk text-4xl md:text-5xl font-bold text-primary tracking-tight">
        TECHNICAL SKILLS
      </h2>

      {/* Languages & Frameworks Group */}
      <div className="mt-10">
        <h3 className="text-xl md:text-2xl text-slate-950 font-bold font-space-grotesk mb-6">
          Languages & Frameworks
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {languagesFrameworks.map((languageFramework, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
            >
              <img
                src={languageFramework.image}
                alt={languageFramework.name}
                className="w-8 h-8 object-contain shrink-0"
              />
              <span className="font-plus-jakarta-sans text-sm font-semibold text-slate-800">
                {languageFramework.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Database & Tools Group */}
      <div className="mt-12">
        <h3 className="text-xl md:text-2xl text-slate-950 font-bold font-space-grotesk mb-6">
          Database & Tools
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {databaseTools.map((databaseTool, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
            >
              <img
                src={databaseTool.image}
                alt={databaseTool.name}
                className="w-8 h-8 object-contain shrink-0"
              />
              <span className="font-plus-jakarta-sans text-sm font-semibold text-slate-800">
                {databaseTool.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
