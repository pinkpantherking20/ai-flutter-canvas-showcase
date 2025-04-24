
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SkillsSection = () => {
  const techSkills = [
    { name: 'Flutter & Dart', level: 90 },
    { name: 'Python', level: 85 },
    { name: 'TensorFlow', level: 80 },
    { name: 'PyTorch', level: 75 },
    { name: 'Computer Vision', level: 80 },
    { name: 'Natural Language Processing', level: 85 },
    { name: 'Machine Learning', level: 85 },
    { name: 'Firebase', level: 75 },
    { name: 'UI/UX Design', level: 70 },
    { name: 'Git & Version Control', level: 85 }
  ];

  const aiSkills = [
    { name: 'Computer Vision', level: 80 },
    { name: 'Natural Language Processing', level: 85 },
    { name: 'Machine Learning', level: 85 },
    { name: 'Deep Learning', level: 80 },
    { name: 'TensorFlow', level: 80 },
    { name: 'PyTorch', level: 75 },
    { name: 'Data Analysis', level: 75 },
    { name: 'Model Deployment', level: 70 },
  ];

  const flutterSkills = [
    { name: 'Flutter & Dart', level: 90 },
    { name: 'Custom Animations', level: 85 },
    { name: 'State Management', level: 85 },
    { name: 'Firebase Integration', level: 80 },
    { name: 'Native Features', level: 75 },
    { name: 'UI/UX Implementation', level: 85 },
    { name: 'Testing & Deployment', level: 75 },
    { name: 'Performance Optimization', level: 80 },
  ];

  return (
    <section id="skills" className="bg-tech-blue py-20">
      <div className="section-container">
        <h2 className="section-title text-center">Technical Skills</h2>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center">
            <TabsList className="mb-8">
              <TabsTrigger value="all">All Skills</TabsTrigger>
              <TabsTrigger value="ai">AI & ML</TabsTrigger>
              <TabsTrigger value="flutter">Flutter</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-card/50 backdrop-blur-sm card-hover">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-6">Technical Proficiency</h3>
                  <div className="space-y-6">
                    {techSkills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress 
                          value={skill.level} 
                          className="h-2 bg-secondary/30" 
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-8">
                <Card className="bg-card/50 backdrop-blur-sm card-hover">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-4">AI Development</h3>
                    <p className="text-muted-foreground mb-4">
                      Experienced in building and deploying machine learning models, with a focus on 
                      computer vision and natural language processing applications.
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {['TensorFlow', 'PyTorch', 'Scikit-Learn', 'Keras', 'OpenCV', 'NLTK', 'spaCy'].map((tech) => (
                        <div key={tech} className="bg-secondary/30 py-2 px-4 rounded-md text-center">
                          {tech}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 backdrop-blur-sm card-hover">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-4">Flutter Development</h3>
                    <p className="text-muted-foreground mb-4">
                      Specialized in creating beautiful, responsive, and performant mobile applications 
                      with complex animations and integrations.
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {['Dart', 'Provider', 'Bloc', 'Firebase', 'RESTful APIs', 'GraphQL', 'Animations'].map((tech) => (
                        <div key={tech} className="bg-secondary/30 py-2 px-4 rounded-md text-center">
                          {tech}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="ai">
            <Card className="bg-card/50 backdrop-blur-sm card-hover">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-6">AI & Machine Learning Skills</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-6">
                    {aiSkills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress 
                          value={skill.level} 
                          className="h-2 bg-secondary/30" 
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-6">
                      My AI expertise spans from developing computer vision systems for object detection to creating
                      natural language processing solutions for text analysis and generation.
                    </p>
                    <p className="text-muted-foreground mb-6">
                      I've worked with various machine learning frameworks, deployed models to production environments,
                      and optimized algorithms for resource-constrained devices like mobile phones.
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {['Data Preprocessing', 'Model Training', 'Fine-tuning', 'Edge Deployment', 'ML Pipelines', 'Hyperparameter Optimization'].map((tech) => (
                        <div key={tech} className="bg-secondary/30 py-2 px-4 rounded-md text-center">
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="flutter">
            <Card className="bg-card/50 backdrop-blur-sm card-hover">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-6">Flutter Development Skills</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-6">
                    {flutterSkills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress 
                          value={skill.level} 
                          className="h-2 bg-secondary/30" 
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-6">
                      As a Flutter developer, I create beautiful, responsive applications with complex animations
                      and seamless user experiences across iOS and Android platforms.
                    </p>
                    <p className="text-muted-foreground mb-6">
                      My experience includes implementing various state management solutions, integrating with
                      backend services, and optimizing performance for smooth user interactions.
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {['Responsive Design', 'Package Development', 'CI/CD', 'App Store Publishing', 'Platform Integration', 'Custom Painters'].map((tech) => (
                        <div key={tech} className="bg-secondary/30 py-2 px-4 rounded-md text-center">
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default SkillsSection;
