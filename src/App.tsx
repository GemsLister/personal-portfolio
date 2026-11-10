import { Header } from "./components/layouts/Header";
import { HeroSection } from "./components/sections/HeroSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { TechnicalSkillsSection } from "./components/sections/TechnicalSkillsSection";

import "animate.css";
function App() {
  return (
    <div className="animate__animated animate__fadeIn h-screen">
      <Header />
      <div className="flex flex-col">
        <HeroSection />
        <ProjectsSection />
        <TechnicalSkillsSection />
      </div>
    </div>
  );
}

export default App;
