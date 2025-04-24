
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-tech-blue border-t border-border">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Let's Connect</h3>
            <p className="text-muted-foreground mb-4">
              Open for freelance opportunities and collaborations on AI and Flutter projects.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Email">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#skills" className="hover:text-primary transition-colors">Skills</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-secondary px-2 py-1 rounded text-xs">Flutter</span>
              <span className="bg-secondary px-2 py-1 rounded text-xs">AI/ML</span>
              <span className="bg-secondary px-2 py-1 rounded text-xs">Python</span>
              <span className="bg-secondary px-2 py-1 rounded text-xs">TensorFlow</span>
              <span className="bg-secondary px-2 py-1 rounded text-xs">PyTorch</span>
              <span className="bg-secondary px-2 py-1 rounded text-xs">Dart</span>
              <span className="bg-secondary px-2 py-1 rounded text-xs">React</span>
              <span className="bg-secondary px-2 py-1 rounded text-xs">Firebase</span>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; {currentYear} · AI & Flutter Developer · Built with React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
