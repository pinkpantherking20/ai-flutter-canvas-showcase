
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Code, 
  Database, 
  FlaskConical, 
  Github, 
  Linkedin, 
  Codepen, 
  Braces, 
  BarChart 
} from "lucide-react";

type TechItem = {
  name: string;
  icon: React.ReactNode;
};

const TechStackShowcase = () => {
  const techStack: TechItem[] = [
    { name: "Python", icon: <Codepen className="h-8 w-8" /> },
    { name: "Flutter", icon: <Code className="h-8 w-8" /> },
    { name: "React", icon: <Braces className="h-8 w-8" /> },
    { name: "TensorFlow", icon: <BarChart className="h-8 w-8" /> },
    { name: "Firebase", icon: <Database className="h-8 w-8" /> },
    { name: "SQL", icon: <Database className="h-8 w-8" /> },
    { name: "GitHub", icon: <Github className="h-8 w-8" /> },
    { name: "PyTorch", icon: <FlaskConical className="h-8 w-8" /> },
    { name: "FastAPI", icon: <Code className="h-8 w-8" /> },
    { name: "Django", icon: <Codepen className="h-8 w-8" /> },
    { name: "Flask", icon: <FlaskConical className="h-8 w-8" /> },
    { name: "Dart", icon: <Code className="h-8 w-8" /> },
    { name: "AWS", icon: <Database className="h-8 w-8" /> },
    { name: "GCP", icon: <Database className="h-8 w-8" /> },
  ];

  return (
    <section className="py-8 bg-gradient-to-r from-tech-blue to-tech-purple">
      <div className="container mx-auto">
        <div className="flex items-center mb-4">
          <div className="h-[2px] flex-grow bg-primary/30"></div>
          <h3 className="mx-4 text-xl font-bold text-center gradient-text">My Tech Stack</h3>
          <div className="h-[2px] flex-grow bg-primary/30"></div>
        </div>
        
        <div className="w-full overflow-x-auto py-6 hide-scrollbar">
          <div className="inline-flex animate-scroll gap-8 px-4">
            {techStack.map((tech, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center justify-center bg-card/40 backdrop-blur-sm p-4 rounded-lg min-w-[100px]"
              >
                <div className="text-primary mb-2">{tech.icon}</div>
                <span className="text-sm font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackShowcase;
