import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  SiFlutter,
  SiPython,
  SiTensorflow,
  SiPytorch,
  SiFirebase,
  SiGithub,
  SiLangchain,
  SiDjango,
  SiN8N,
  SiNumpy,
  SiOpencv,
  SiScikitlearn,
  SiKeras,
  SiSpacy,
  SiDart,
  SiGraphql,
  SiRedux,
  SiFastapi,
  SiOpenai,
  SiGooglecloud,
} from "react-icons/si";
import { FaCode, FaBrain, FaRobot } from "react-icons/fa";
import { AiOutlineDatabase } from "react-icons/ai";
import { BsBraces } from "react-icons/bs";
import { BiLogoVisualStudio } from "react-icons/bi";

const SkillsSection = () => {
  const techSkills = [
    {
      name: "Flutter & Dart",
      icon: <SiFlutter className="h-8 w-8 text-primary" />,
    },
    { name: "Python", icon: <SiPython className="h-8 w-8 text-primary" /> },
    {
      name: "TensorFlow",
      icon: <SiTensorflow className="h-8 w-8 text-primary" />,
    },
    {
      name: "Natural Language Processing",
      icon: <SiNumpy className="h-8 w-8 text-primary" />,
    },
    {
      name: "Machine Learning",
      icon: <FaBrain className="h-8 w-8 text-primary" />,
    },
    { name: "Firebase", icon: <SiFirebase className="h-8 w-8 text-primary" /> },
    {
      name: "Git & Version Control",
      icon: <SiGithub className="h-8 w-8 text-primary" />,
    },
    {
      name: "LangChain",
      icon: <SiLangchain className="h-8 w-8 text-primary" />,
    },
    { name: "Django", icon: <SiDjango className="h-8 w-8 text-primary" /> },
    { name: "n8n", icon: <SiN8N className="h-8 w-8 text-primary" /> },
  ];

  const aiSkills = [
    {
      name: "Computer Vision",
      icon: <FaCode className="h-8 w-8 text-primary" />,
    },
    {
      name: "Natural Language Processing",
      icon: <FaRobot className="h-8 w-8 text-primary" />,
    },
    {
      name: "Machine Learning",
      icon: <FaBrain className="h-8 w-8 text-primary" />,
    },
    {
      name: "TensorFlow",
      icon: <SiTensorflow className="h-8 w-8 text-primary" />,
    },
    { name: "PyTorch", icon: <SiPytorch className="h-8 w-8 text-primary" /> },
    {
      name: "Data Analysis",
      icon: <AiOutlineDatabase className="h-8 w-8 text-primary" />,
    },
    {
      name: "Model Deployment",
      icon: <BsBraces className="h-8 w-8 text-primary" />,
    },
    {
      name: "LangChain",
      icon: <SiLangchain className="h-8 w-8 text-primary" />,
    },
    { name: "Django", icon: <SiDjango className="h-8 w-8 text-primary" /> },
    { name: "n8n", icon: <SiN8N className="h-8 w-8 text-primary" /> },
  ];

  const flutterSkills = [
    {
      name: "Flutter & Dart",
      icon: <SiFlutter className="h-8 w-8 text-primary" />,
    },
    {
      name: "MVC | MVVM | Clean",
      icon: <FaCode className="h-8 w-8 text-primary" />,
    },
    {
      name: "State Management",
      icon: <SiRedux className="h-8 w-8 text-primary" />,
    },
    {
      name: "Firebase Integration",
      icon: <SiFirebase className="h-8 w-8 text-primary" />,
    },
    {
      name: "Native Features",
      icon: <FaCode className="h-8 w-8 text-primary" />,
    },
    {
      name: "UI/UX Implementation",
      icon: <FaCode className="h-8 w-8 text-primary" />,
    },
    {
      name: "Testing & Deployment",
      icon: <SiGithub className="h-8 w-8 text-primary" />,
    },
    {
      name: "Performance Optimization",
      icon: <FaCode className="h-8 w-8 text-primary" />,
    },
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
                  <h3 className="text-xl font-bold mb-6">
                    Technical Proficiency
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    {techSkills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex flex-col items-center p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-all"
                      >
                        <div className="mb-3">{skill.icon}</div>
                        <span className="text-center font-medium">
                          {skill.name}
                        </span>
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
                      Experienced in building and deploying machine learning
                      models, LLM's integration with AI Agents for Automations.
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {[
                        "TensorFlow",
                        "PyTorch",
                        "Scikit-Learn",
                        "N8N",
                        "Django",
                        "Keras",
                        "RAG",
                        "Pandas",
                        "OpenCV",
                        "NLTK",
                        "spaCy",
                      ].map((tech) => (
                        <div
                          key={tech}
                          className="bg-secondary/30 py-2 px-4 rounded-md text-center"
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 backdrop-blur-sm card-hover">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-4">
                      Flutter Development
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Specialized in creating beautiful, responsive, and
                      performant mobile applications with complex animations and
                      integrations.
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {[
                        "Dart",
                        "Provider",
                        "Bloc",
                        "Firebase",
                        "MVC",
                        "MVVM",
                        "RESTful APIs",
                        "Integrations",
                        "Animations",
                      ].map((tech) => (
                        <div
                          key={tech}
                          className="bg-secondary/30 py-2 px-4 rounded-md text-center"
                        >
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
                <h3 className="text-xl font-bold mb-6">
                  AI & Machine Learning Skills
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="grid grid-cols-2 gap-4">
                    {aiSkills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex flex-col items-center p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-all"
                      >
                        <div className="mb-3">{skill.icon}</div>
                        <span className="text-center font-medium">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-6">
                      My AI expertise spans from developing computer vision
                      systems for object detection to creating natural language
                      processing solutions for text analysis and generation.
                    </p>
                    <p className="text-muted-foreground mb-6">
                      I've worked with various machine learning frameworks,
                      deployed models to production environments, and optimized
                      algorithms for resource-constrained devices like mobile
                      phones.
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        "Supervised Learning",
                        "Unsupervised Learning",
                        "Neural Networks",
                        "AI-Powered Automation",
                        "Reinforcement Learning",
                        "Feature Engineering",
                        "Model Evaluation",
                        "Hyperparameter Tuning",
                        "Natural Language Processing",
                        "Computer Vision",
                        "Model Deployment",
                        "Large Language Models (LLMs)",
                        "Prompt Engineering",
                        "Fine-Tuning LLMs",
                        "LangChain",
                        "Retrieval-Augmented Generation",
                        "Vector Search",
                        "OpenAI / Cohere / Anthropic",
                        "Prompt Engineering",
                        "Conversational AI",
                      ].map((tech) => (
                        <div
                          key={tech}
                          className="bg-secondary/30 py-2 px-4 rounded-md text-center"
                        >
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
                <h3 className="text-xl font-bold mb-6">
                  Flutter Development Skills
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="grid grid-cols-2 gap-4">
                    {flutterSkills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex flex-col items-center p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-all"
                      >
                        <div className="mb-3">{skill.icon}</div>
                        <span className="text-center font-medium">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-6">
                      As a Flutter developer, I create beautiful, responsive
                      applications with complex animations and seamless user
                      experiences across iOS and Android platforms.
                    </p>
                    <p className="text-muted-foreground mb-6">
                      My experience includes implementing various state
                      management solutions, integrating with backend services,
                      and optimizing performance for smooth user interactions.
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        "StateMgmt",
                        "ResponsiveUI",
                        "Firebase",
                        "REST APIs",
                        "Routing",
                        "Themes",
                        "Testing",
                        "CI/CD",
                        "Optimization",
                        "Packages",
                        "MVC | MVVM | Clean",
                        "FormValidation",
                      ].map((tech) => (
                        <div
                          key={tech}
                          className="bg-secondary/30 py-2 px-4 rounded-md text-center"
                        >
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
