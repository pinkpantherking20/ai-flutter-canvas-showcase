
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Code, Menu, X, Linkedin, Github, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/MajorAbdullah', label: 'GitHub' },
    { icon: Linkedin, href: 'http://www.linkedin.com/in/syed-abdullah-shah-4018a5176', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:sa.abdullahshah.2001@gmail.com', label: 'Email' }
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300",
      isScrolled ? 'glass-effect py-2' : 'bg-transparent py-4'
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2 transition-transform hover:scale-105 duration-300">
          <Code className="h-6 w-6 text-primary" />
          <span className="font-mono font-bold text-xl">Major Abdullah</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors hover:scale-105 transform duration-300"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 border-l pl-4 border-border/50">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors hover:scale-110 transform duration-300"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Resume button moved to HeroSection */}
        </div>

        {/* Mobile Nav Toggle */}
        <Button
          variant="ghost" 
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-effect animate-fade-in">
          <div className="flex flex-col px-4 py-6 gap-4">
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={item.href}
                className="text-lg font-medium py-2 text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            
            {/* Social Links in Mobile Menu */}
            <div className="flex items-center gap-4 pt-4 border-t border-border/50">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* Resume button moved to HeroSection */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
