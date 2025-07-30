import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Github, ExternalLink, Calendar, Users, Target, Lightbulb, Star, Sparkles } from 'lucide-react';
import FloatingElements from '@/components/ui/floating-elements';

// Extended projects data structure with detailed information
const projects = [
  {
    id: 1,
    title: 'Neblo-AI: Logistics Orchestration Engine',
    subtitle: 'Agentic AI',
    shortDescription: 'AI-powered chatbot using Agentic AI approach for logistics automation.',
    overview: 'Led and developed an AI-powered chatbot using the Agentic AI approach for Cloudpacer\'s logistics orchestration engine, built to automate and accelerate broker-carrier coordination across the U.S. freight network.',
    problemSolved: 'Addressed the challenge in U.S. logistics where thousands of loads are posted every hour across platforms like WhatsApp and Telegram, but brokers can\'t keep up due to real-time load notification floods, time-sensitive responses, and missed opportunities.',
    keyFeatures: [
      'Automated broker\'s most time-sensitive tasks using AI and real-time orchestration',
      'Implemented Load Detection & Publishing for real-time monitoring',
      'Developed AI-powered negotiation engine with business rules',
      'Incorporated Human-in-the-Loop Final Decision Loop',
      'Managed real-time ingestion of 1000+ load notifications',
      'Provided 24/7 responsiveness on behalf of brokers'
    ],
    impact: [
      'Eliminates overnight workload loss for brokers',
      'Increases coverage window (24/7 handling)',
      'Enables scalable load handling without adding headcount',
      'Provides end-to-end data visibility & control'
    ],
    technologies: ['Agentic AI', 'Python (Langchain)', 'WebSockets', 'WhatsApp/Telegram API', 'MySQL', 'Redis', 'Git', 'Jira'],
    category: 'ai',
    githubLink: 'https://github.com/MajorAbdullah/neblo-ai',
    liveLink: '#',
    image: '/neblo-ai.png'
  },
  {
    id: 2,
    title: 'Fake News Detection',
    subtitle: 'Machine Learning Classification',
    shortDescription: 'Advanced ML system for identifying fake news articles.',
    overview: 'A comprehensive machine learning system that identifies fake news articles using advanced NLP techniques and classification algorithms to combat misinformation.',
    problemSolved: 'With the rise of social media and digital news platforms, misinformation spreads rapidly. This system helps identify and flag potentially false news articles.',
    keyFeatures: [
      'Advanced NLP preprocessing and feature extraction',
      'Multiple classification algorithms comparison',
      'Real-time news article analysis',
      'Confidence scoring for predictions',
      'Web scraping capabilities for data collection'
    ],
    impact: [
      'Helps combat misinformation spread',
      'Provides reliable news verification',
      'Supports fact-checkers and journalists'
    ],
    technologies: ['Machine Learning', 'NLP', 'Python', 'Scikit-learn', 'NLTK', 'Pandas'],
    category: 'ai',
    githubLink: 'https://github.com/MajorAbdullah/Fake-News-Detection-using-Machine-Learning',
    liveLink: '#',
    image: '/fake-news-detection.png'
  },
  {
    id: 3,
    title: 'Indoor Environmental Monitoring System',
    subtitle: 'IoT Data Analytics',
    shortDescription: 'Real-time monitoring of indoor environmental conditions.',
    overview: 'IoT-based system for monitoring indoor environmental conditions like temperature, humidity, and air quality in real-time with data analytics and alerting capabilities.',
    problemSolved: 'Poor indoor air quality affects health and productivity. This system provides real-time monitoring and alerts for maintaining optimal indoor environments.',
    keyFeatures: [
      'Multi-sensor data collection',
      'Real-time data visualization',
      'Automated alerting system',
      'Historical data analysis',
      'Mobile app integration'
    ],
    impact: [
      'Improves indoor air quality awareness',
      'Reduces health risks from poor air quality',
      'Optimizes HVAC system efficiency'
    ],
    technologies: ['IoT', 'Arduino', 'Sensors', 'Node.js', 'MongoDB', 'React'],
    category: 'iot',
    githubLink: 'https://github.com/MajorAbdullah/Indoor-Environmental-Monitoring-System-IEMS-',
    liveLink: '#',
    image: '/iems.png'
  },
  {
    id: 4,
    title: 'K-Compiler',
    subtitle: 'Programming Language Implementation',
    shortDescription: 'Custom compiler for the K programming language.',
    overview: 'A custom compiler implementation for processing and translating code in the K programming language, featuring lexical analysis, parsing, and code generation.',
    problemSolved: 'Created a complete compiler toolchain for a custom programming language, demonstrating deep understanding of compiler design principles.',
    keyFeatures: [
      'Lexical analysis and tokenization',
      'Syntax parsing with error handling',
      'Abstract syntax tree generation',
      'Code optimization phases',
      'Target code generation'
    ],
    impact: [
      'Demonstrates compiler design expertise',
      'Educational tool for compiler construction',
      'Foundation for language development'
    ],
    technologies: ['C++', 'Flex', 'Bison', 'Assembly', 'Compiler Design'],
    category: 'development',
    githubLink: 'https://github.com/MajorAbdullah/K-Compiler',
    liveLink: '#',
    image: '/k-compiler.png'
  },
  {
    id: 5,
    title: 'Local AI Agent With RAG',
    subtitle: 'Retrieval-Augmented Generation',
    shortDescription: 'AI agent with RAG for contextual responses from local data.',
    overview: 'An AI agent that uses Retrieval-Augmented Generation (RAG) to provide more accurate and contextual responses from local data sources.',
    problemSolved: 'Traditional AI models lack access to specific local knowledge. This system combines retrieval with generation for more accurate, context-aware responses.',
    keyFeatures: [
      'Local document indexing and retrieval',
      'Vector embeddings for semantic search',
      'RAG pipeline implementation',
      'Context-aware response generation',
      'Multi-format document support'
    ],
    impact: [
      'Improved AI response accuracy',
      'Leverages local knowledge bases',
      'Reduces hallucination in AI responses'
    ],
    technologies: ['Python', 'LangChain', 'Vector Databases', 'OpenAI API', 'RAG'],
    category: 'ai',
    githubLink: 'https://github.com/MajorAbdullah/LocalAIAgentWithRAG-main',
    liveLink: '#',
    image: '/local-ai-rag.png'
  },
  {
    id: 6,
    title: 'Python JS AI Voice Agent',
    subtitle: 'Voice-Enabled AI Assistant',
    shortDescription: 'Voice AI assistant with Python and JavaScript integration.',
    overview: 'A voice-enabled AI assistant built with Python and JavaScript that can understand and respond to voice commands with natural language processing.',
    problemSolved: 'Created a seamless voice interface for AI interactions, making technology more accessible through natural speech communication.',
    keyFeatures: [
      'Real-time speech recognition',
      'Natural language understanding',
      'Text-to-speech synthesis',
      'Multi-language support',
      'Command execution capabilities'
    ],
    impact: [
      'Improved accessibility for voice interactions',
      'Natural human-computer interface',
      'Hands-free AI assistance'
    ],
    technologies: ['Python', 'JavaScript', 'Speech Recognition', 'NLP', 'Web APIs'],
    category: 'ai',
    githubLink: 'https://github.com/MajorAbdullah/PythonJSAIVoiceAgent-main',
    liveLink: '#',
    image: '/voice-agent.png'
  },
  {
    id: 7,
    title: 'SQL AI API',
    subtitle: 'Natural Language to SQL',
    shortDescription: 'AI-powered API for natural language to SQL translation.',
    overview: 'API that leverages AI to translate natural language queries into SQL database operations for users not proficient in SQL.',
    problemSolved: 'SQL complexity prevents non-technical users from accessing database insights. This API democratizes data access through natural language.',
    keyFeatures: [
      'Natural language to SQL translation',
      'Multi-database support',
      'Query optimization',
      'Security validation',
      'RESTful API interface'
    ],
    impact: [
      'Democratizes database access',
      'Reduces need for SQL expertise',
      'Accelerates data-driven decisions'
    ],
    technologies: ['Python', 'FastAPI', 'OpenAI API', 'SQL', 'PostgreSQL', 'MongoDB'],
    category: 'ai',
    githubLink: 'https://github.com/MajorAbdullah/sql-ai-api-main',
    liveLink: '#',
    image: '/sql-ai-api.png'
  }
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const categories = ['all', ...new Set(projects.map(project => project.category))];

  const filteredProjects = (category: string) => 
    category === 'all' ? projects : projects.filter(p => p.category === category);

  return (
    <section id="projects" className="section-container relative">
      <FloatingElements className="opacity-30" />
      
      <div className="relative z-10">
        <h2 className="section-title flex items-center justify-center gap-4">
          <Sparkles className="w-8 h-8 text-primary animate-pulse" />
          Featured Projects
          <Sparkles className="w-8 h-8 text-accent animate-pulse" />
        </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[600px] md:h-[700px] lg:h-[800px]">
        {/* Left Panel - Project List */}
        <div className="lg:col-span-1">
          <Card className="h-full glass-card"
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <CardContent className="p-0">
              <div className="p-6 border-b border-white/10">
                <h3 className="text-xl font-bold mb-4 gradient-text">Project Portfolio</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <Badge 
                      key={category} 
                      variant="outline" 
                      className="cursor-pointer glass-button transition-all duration-300 capitalize text-xs hover:neon-glow"
                    >
                      {category === 'all' ? 'All' : category}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <ScrollArea className="h-[calc(100%-120px)]">
                <div className="p-4 space-y-3">
                  {projects.map((project) => (
                    <Card 
                      key={project.id}
                      className={`cursor-pointer transition-all duration-500 card-hover ${
                        selectedProject.id === project.id 
                          ? 'glass-card neon-glow border-primary/50' 
                          : 'glass-card hover:neon-glow border-white/10'
                      }`}
                      onClick={() => setSelectedProject(project)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="w-12 h-12 rounded-lg glass-card overflow-hidden flex-shrink-0">
                            <img 
                              src={project.image} 
                              alt={project.title}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.currentTarget.src = '/placeholder.svg';
                              }}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-sm mb-1 truncate">{project.title}</h4>
                            <p className="text-xs text-muted-foreground mb-2">{project.subtitle}</p>
                            <div className="flex flex-wrap gap-1">
                              {project.technologies.slice(0, 2).map(tech => (
                                <Badge key={tech} variant="secondary" className="text-xs px-1 py-0 glass-button">
                                  {tech}
                                </Badge>
                              ))}
                              {project.technologies.length > 2 && (
                                <span className="text-xs text-muted-foreground">+{project.technologies.length - 2}</span>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>

        {/* Right Panel - Project Details */}
        <div className="lg:col-span-2">
          <Card className="h-full glass-card"
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <CardContent className="p-0 h-full">
              <ScrollArea className="h-full">
                <div className="p-8">
                  {/* Header */}
                  <div className="mb-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h1 className="text-3xl font-bold mb-2 gradient-text">{selectedProject.title}</h1>
                        <p className="text-lg text-primary font-medium animate-pulse">{selectedProject.subtitle}</p>
                      </div>
                      <div className="flex gap-3">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="gap-2 glass-button hover:neon-glow"
                          onClick={() => window.open(selectedProject.githubLink, '_blank')}
                        >
                          <Github className="h-4 w-4" />
                          Code
                        </Button>
                        {selectedProject.liveLink && selectedProject.liveLink !== '#' && (
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="gap-2 glass-button hover:neon-glow"
                            onClick={() => window.open(selectedProject.liveLink, '_blank')}
                          >
                            <ExternalLink className="h-4 w-4" />
                            Demo
                          </Button>
                        )}
                      </div>
                    </div>
                    
                    <div className="w-full h-64 rounded-lg glass-card overflow-hidden mb-6 neon-glow">
                      <img 
                        src={selectedProject.image} 
                        alt={selectedProject.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = '/placeholder.svg';
                        }}
                      />
                    </div>
                  </div>

                  {/* Project Overview */}
                  <div className="mb-8">
                    <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <Lightbulb className="h-5 w-5 text-primary" />
                      Project Overview
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">{selectedProject.overview}</p>
                  </div>

                  {/* Problem Solved */}
                  <div className="mb-8">
                    <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <Target className="h-5 w-5 text-primary" />
                      Problem Solved
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">{selectedProject.problemSolved}</p>
                  </div>

                  {/* Key Features */}
                  <div className="mb-8">
                    <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <Star className="h-5 w-5 text-primary" />
                      Key Contributions & Features
                    </h2>
                    <ul className="space-y-3">
                      {selectedProject.keyFeatures.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                          <p className="text-muted-foreground">{feature}</p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Impact */}
                  <div className="mb-8">
                    <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      Impact & Strategic Value
                    </h2>
                    <ul className="space-y-3">
                      {selectedProject.impact.map((impact, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                          <p className="text-muted-foreground">{impact}</p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h2 className="text-xl font-bold mb-4">Technologies Utilized</h2>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map(tech => (
                        <Badge key={tech} variant="outline" className="glass-button hover:neon-glow transition-all duration-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </div>
      </div>
    </section>
  );
};

export default ProjectsSection;