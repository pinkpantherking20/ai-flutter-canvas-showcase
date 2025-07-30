import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, Download, Mail, Github, Linkedin, MapPin } from 'lucide-react';
import FloatingElements from '@/components/ui/floating-elements';
import ParticleSystem from '@/components/ui/particle-system';

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <FloatingElements />
      <ParticleSystem particleCount={20} />
      
      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Profile Avatar */}
        <div className="mb-8 animate-scale-in">
          <div className="relative inline-block">
            <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full glass-card mx-auto mb-6 overflow-hidden neon-glow-strong animate-glow-pulse">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                  SA
                </div>
              </div>
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full border-4 border-background animate-pulse"></div>
          </div>
        </div>

        {/* Status Badge */}
        <div className="mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <Badge className="glass-card px-4 py-2 text-sm font-medium">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
            Available for freelance projects
          </Badge>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <span className="block gradient-text mb-2">Syed Abdullah</span>
          <span className="block text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-muted-foreground font-normal">
            Full-Stack Developer & AI Engineer
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          Crafting innovative digital experiences with cutting-edge AI, machine learning, 
          and modern web technologies. Transforming ideas into intelligent solutions that shape the future.
        </p>

        {/* Location */}
        <div className="flex items-center justify-center gap-2 mb-8 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <MapPin className="w-4 h-4 text-primary" />
          <span className="text-muted-foreground">Pakistan • Remote Worldwide</span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <Button 
            size="lg" 
            className="glass-button px-8 py-4 text-lg font-semibold group neon-glow"
            onClick={scrollToContact}
          >
            <Mail className="w-5 h-5 mr-2 group-hover:animate-bounce" />
            Let's Work Together
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="glass-button px-8 py-4 text-lg font-semibold group"
            onClick={() => window.open('https://drive.google.com/file/d/1TQIpqiWwbSnaiBQT1FoBYHlg6i9h6SWp/view?usp=sharing', '_blank')}
          >
            <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
            Download Resume
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
          <Button
            variant="ghost"
            size="lg"
            className="glass-button rounded-full w-14 h-14 group"
            onClick={() => window.open('https://github.com/MajorAbdullah', '_blank')}
          >
            <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </Button>
          
          <Button
            variant="ghost"
            size="lg"
            className="glass-button rounded-full w-14 h-14 group"
            onClick={() => window.open('https://linkedin.com/in/syed-abdullah-shah-4018a5176', '_blank')}
          >
            <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </Button>
          
          <Button
            variant="ghost"
            size="lg"
            className="glass-button rounded-full w-14 h-14 group"
            onClick={scrollToContact}
          >
            <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator animate-fade-in-up" style={{ animationDelay: '1.4s' }}>
          <Button
            variant="ghost"
            size="lg"
            className="glass-button rounded-full w-14 h-14 group"
            onClick={scrollToProjects}
          >
            <ChevronDown className="w-6 h-6 group-hover:translate-y-1 transition-transform" />
          </Button>
          <p className="text-sm text-muted-foreground mt-2 opacity-70">Scroll to explore</p>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20 pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;