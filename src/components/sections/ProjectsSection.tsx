
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Github, Link } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'AI-Powered Image Recognition App',
    description: 'A Flutter application that uses TensorFlow Lite to recognize objects in real-time using the device camera.',
    image: '/placeholder.svg',
    tags: ['Flutter', 'TensorFlow', 'AI', 'Mobile'],
    category: 'ai',
    githubLink: '#',
    liveLink: '#'
  },
  {
    id: 2,
    title: 'Smart Personal Assistant',
    description: 'Voice-controlled assistant built with Flutter and integrated with GPT for conversational AI capabilities.',
    image: '/placeholder.svg',
    tags: ['Flutter', 'GPT', 'NLP', 'Voice Recognition'],
    category: 'ai',
    githubLink: '#',
    liveLink: '#'
  },
  {
    id: 3,
    title: 'E-Commerce Mobile App',
    description: 'A feature-rich Flutter e-commerce application with animations, cart functionality, and payment integration.',
    image: '/placeholder.svg',
    tags: ['Flutter', 'Firebase', 'Animation', 'E-commerce'],
    category: 'flutter',
    githubLink: '#',
    liveLink: '#'
  },
  {
    id: 4,
    title: 'Sentiment Analysis Dashboard',
    description: 'Web application that analyzes social media posts to determine sentiment using custom NLP models.',
    image: '/placeholder.svg',
    tags: ['Python', 'NLP', 'ReactJS', 'AI'],
    category: 'ai',
    githubLink: '#',
    liveLink: '#'
  },
  {
    id: 5,
    title: 'Fitness Tracker App',
    description: 'A beautifully designed fitness application with custom animations and health tracking features.',
    image: '/placeholder.svg',
    tags: ['Flutter', 'Animation', 'Health', 'Mobile'],
    category: 'flutter',
    githubLink: '#',
    liveLink: '#'
  },
  {
    id: 6,
    title: 'Predictive Maintenance System',
    description: 'IoT-based system that uses machine learning to predict equipment failures before they occur.',
    image: '/placeholder.svg',
    tags: ['Python', 'ML', 'IoT', 'Prediction'],
    category: 'ai',
    githubLink: '#',
    liveLink: '#'
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-container">
      <h2 className="section-title text-center">Featured Projects</h2>
      
      <Tabs defaultValue="all" className="mb-12">
        <div className="flex justify-center">
          <TabsList className="mb-8">
            <TabsTrigger value="all">All Projects</TabsTrigger>
            <TabsTrigger value="ai">AI Projects</TabsTrigger>
            <TabsTrigger value="flutter">Flutter Apps</TabsTrigger>
          </TabsList>
        </div>
        
        {/* All Projects */}
        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </TabsContent>
        
        {/* AI Projects */}
        <TabsContent value="ai" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(p => p.category === 'ai').map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </TabsContent>
        
        {/* Flutter Projects */}
        <TabsContent value="flutter" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(p => p.category === 'flutter').map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </TabsContent>
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
        <Button variant="ghost" size="sm" className="gap-2">
          <Github className="h-4 w-4" />
          Code
        </Button>
        <Button variant="ghost" size="sm" className="gap-2">
          <Link className="h-4 w-4" />
          Demo
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectsSection;
