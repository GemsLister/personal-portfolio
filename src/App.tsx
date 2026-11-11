import { Header } from "./components/layouts/Header";
import { HeroSection } from "./components/sections/HeroSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { TechnicalSkillsSection } from "./components/sections/TechnicalSkillsSection";
import { CertificationsSection } from "./components/sections/CertificationsSection";
import { ContactSection } from "./components/sections/ContactSection";
import { Footer } from "./components/layouts/Footer";
import { FadeInOnView } from "./components/FadeInOnView";
import { BackToTopButton } from "./components/buttons/BackToTopButton";
import "animate.css";
function App() {
  return (
    <div id="top" className="animate__animated animate__fadeIn h-screen">
      <Header />
      <div className="flex flex-col">
        <FadeInOnView>
          <HeroSection />
        </FadeInOnView>
        <FadeInOnView>
          <ProjectsSection />
        </FadeInOnView>
        <FadeInOnView>
          <TechnicalSkillsSection />
        </FadeInOnView>
        <FadeInOnView>
          <CertificationsSection />
        </FadeInOnView>
        <FadeInOnView>
          <ContactSection />
        </FadeInOnView>
      </div>
      <FadeInOnView>
        <Footer />
      </FadeInOnView>
      <BackToTopButton />
    </div>
  );
}

export default App;
