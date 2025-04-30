
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactSection from "@/components/sections/ContactSection";
import TechStackShowcase from "@/components/sections/TechStackShowcase";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main>
        <HeroSection />
        <TechStackShowcase />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
