
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Github, Link } from 'lucide-react';

// Projects data structure
const projects = [
  {
    id: 1,
    title: 'Fake News Detection',
    description: 'A machine learning system that identifies fake news articles using advanced NLP techniques and classification algorithms.',
    image: '/fake-news-detection.jpg',
    tags: ['Machine Learning', 'NLP', 'Python', 'Classification'],
    category: 'ai',
    githubLink: 'https://github.com/MajorAbdullah/Fake-News-Detection-using-Machine-Learning',
    liveLink: '#'
  },
  {
    id: 2,
    title: 'Indoor Environmental Monitoring System',
    description: 'IoT-based system for monitoring indoor environmental conditions like temperature, humidity, and air quality in real-time.',
    image: '/iems.jpg',
    tags: ['IoT', 'Hardware', 'Sensors', 'Data Analysis'],
    category: 'iot',
    githubLink: 'https://github.com/MajorAbdullah/Indoor-Environmental-Monitoring-System-IEMS-',
    liveLink: '#'
  },
  {
    id: 3,
    title: 'K-Compiler',
    description: 'A custom compiler implementation for processing and translating code in the K programming language.',
    image: '/k-compiler.jpg',
    tags: ['Compiler', 'Language Design', 'Parsing', 'Code Generation'],
    category: 'development',
    githubLink: 'https://github.com/MajorAbdullah/K-Compiler',
    liveLink: '#'
  },
  {
    id: 4,
    title: 'Local AI Agent With RAG',
    description: 'An AI agent that uses Retrieval-Augmented Generation (RAG) to provide more accurate and contextual responses from local data.',
    image: '/local-ai-rag.jpg',
    tags: ['AI', 'RAG', 'NLP', 'Knowledge Retrieval'],
    category: 'ai',
    githubLink: 'https://github.com/MajorAbdullah/LocalAIAgentWithRAG-main',
    liveLink: '#'
  },
  {
    id: 5,
    title: 'Python JS AI Voice Agent',
    description: 'A voice-enabled AI assistant built with Python and JavaScript that can understand and respond to voice commands.',
    image: '/voice-agent.jpg',
    tags: ['Voice AI', 'Python', 'JavaScript', 'NLP'],
    category: 'ai',
    githubLink: 'https://github.com/MajorAbdullah/PythonJSAIVoiceAgent-main',
    liveLink: '#'
  },
  {
    id: 6,
    title: 'SQL AI API',
    description: 'API that leverages AI to translate natural language queries into SQL database operations for users not proficient in SQL.',
    image: '/sql-ai-api.jpg', // Note: You might need to update this image file
    tags: ['AI', 'SQL', 'API', 'Natural Language Processing', 'Database'],
    category: 'ai',
    githubLink: 'https://github.com/MajorAbdullah/sql-ai-api-main',
    liveLink: '#'
}
];

const ProjectsSection = () => {
  // Get unique categories from projects
  const categories = ['all', ...new Set(projects.map(project => project.category))];
  
  return (
    <section id="projects" className="section-container">
      <h2 className="section-title text-center">My Projects</h2>
      
      <Tabs defaultValue="all" className="mb-12">
        <div className="flex justify-center">
          <TabsList className="mb-8">
            {categories.map(category => (
              <TabsTrigger 
                key={category} 
                value={category}
                className="capitalize"
              >
                {category === 'all' ? 'All Projects' : `${category} Projects`}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        
        {/* Dynamic tab content generation */}
        {categories.map(category => (
          <TabsContent key={category} value={category} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(category === 'all' 
                ? projects 
                : projects.filter(p => p.category === category)
              ).map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
      
      <div className="text-center">
        <Button variant="outline" size="lg" className="group">
          View All Projects
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <Card className="overflow-hidden card-hover border-border/50 bg-card/50 backdrop-blur-sm">
      <div className="h-48 overflow-hidden bg-muted">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = '/placeholder.svg';
          }}
        />
      </div>
      <CardContent className="pt-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="bg-secondary/30">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-0">
        <Button 
          variant="ghost" 
          size="sm" 
          className="gap-2"
          onClick={() => window.open(project.githubLink, '_blank')}
        >
          <Github className="h-4 w-4" />
          Code
        </Button>
        {project.liveLink && project.liveLink !== '#' && (
          <Button 
            variant="ghost" 
            size="sm" 
            className="gap-2"
            onClick={() => window.open(project.liveLink, '_blank')}
          >
            <Link className="h-4 w-4" />
            Demo
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectsSection;
