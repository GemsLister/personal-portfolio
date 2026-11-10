import { Header } from "./components/layouts/Header";
import { HeroSection } from "./components/sections/HeroSection";
import "animate.css";
function App() {
  return (
    <div className="animate__animated animate__fadeIn h-screen w-screen">
      <Header />
      <HeroSection />
    </div>
  );
}

export default App;
