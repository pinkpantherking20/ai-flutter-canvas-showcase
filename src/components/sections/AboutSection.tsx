
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { User, Code, FileText } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="bg-tech-blue py-20">
      <div className="section-container">
        <h2 className="section-title text-center">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="bg-card/50 backdrop-blur-sm card-hover">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary/20 p-3 rounded-full">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Background</h3>
              </div>
              <p className="text-muted-foreground">
                With over 5 years of experience in software development, I've specialized in AI engineering
                and Flutter development, creating intelligent and responsive applications for various industries.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-card/50 backdrop-blur-sm card-hover">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary/20 p-3 rounded-full">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Expertise</h3>
              </div>
              <p className="text-muted-foreground">
                I combine AI models with beautiful Flutter interfaces to create smart, intuitive applications.
                My work spans from computer vision projects to natural language processing implementations.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-card/50 backdrop-blur-sm card-hover">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary/20 p-3 rounded-full">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Education</h3>
              </div>
              <p className="text-muted-foreground">
                MSc in Artificial Intelligence with a focus on machine learning applications.
                Certified Flutter Developer with continuous learning in emerging AI technologies and mobile development.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-bold mb-4">My Journey</h3>
          <p className="text-muted-foreground mb-6">
            I started my career as a software developer with a passion for creating intuitive user experiences. 
            When I discovered Flutter, I was immediately drawn to its flexibility and capability to create beautiful cross-platform applications.
            Around the same time, I began exploring artificial intelligence and machine learning, seeing the potential to combine these technologies to create truly intelligent applications.
          </p>
          
          <p className="text-muted-foreground mb-6">
            Today, I specialize in integrating AI capabilities into mobile applications, creating solutions that are not just functional but intelligent.
            My expertise lies in developing applications that can understand user behavior, process natural language, recognize images, and make predictions based on data patterns.
          </p>
          
          <div className="mb-6">
            <h4 className="font-bold mb-3">Areas of Expertise</h4>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-secondary/50">Artificial Intelligence</Badge>
              <Badge variant="secondary" className="bg-secondary/50">Machine Learning</Badge>
              <Badge variant="secondary" className="bg-secondary/50">Flutter Development</Badge>
              <Badge variant="secondary" className="bg-secondary/50">Cross-Platform Mobile Apps</Badge>
              <Badge variant="secondary" className="bg-secondary/50">Computer Vision</Badge>
              <Badge variant="secondary" className="bg-secondary/50">NLP</Badge>
              <Badge variant="secondary" className="bg-secondary/50">TensorFlow & PyTorch</Badge>
              <Badge variant="secondary" className="bg-secondary/50">UI/UX Design</Badge>
            </div>
          </div>
          
          <p className="text-primary font-medium">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
