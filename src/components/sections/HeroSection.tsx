import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import VideoBackground from "../ui/video-background";
import { Link } from "react-router-dom";
const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      <VideoBackground videoFileName="coding-background.mp4" />
      
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl" style={{
      transform: `translateY(${scrollY * 0.2}px)`
    }} />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" style={{
      transform: `translateY(${scrollY * 0.3}px)`
    }} />
      
      <div className="container mx-auto px-4 z-10 py-20 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in" style={{
          transform: `translateY(${scrollY * 0.1}px)`
        }}>
            <p className="text-primary mb-3 font-mono">Hello, I'm Syed Abdullah Shah</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="block text-foreground">Python AI Engineer </span>
              <span className="gradient-text font-normal text-4xl">&amp; Flutter Developer</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8">I build intelligent applications and beautiful mobile experiences. Specializing in GEN-AI, ML models creation / integration, LLM's, Automations and cross-platform development.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="outline" onClick={scrollToContact}>
                Contact me
              </Button>
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => window.open('https://drive.google.com/file/d/1TQIpqiWwbSnaiBQT1FoBYHlg6i9h6SWp/view?usp=sharing', '_blank')}
              >
                Resume
              </Button>
            </div>
          </div>
          
          <div className="relative hidden lg:block" style={{
          transform: `translateY(${scrollY * -0.1}px)`
        }}>
            <div className="relative w-full h-[450px] animate-float">
              <div className="absolute glass-effect rounded-xl w-64 h-64 top-0 left-12 border border-white/20 shadow-xl"></div>
              <div className="absolute glass-effect rounded-xl w-56 h-56 top-48 left-48 border border-white/20 shadow-xl"></div>
              <div className="absolute glass-effect rounded-xl w-64 h-48 bottom-0 left-24 border border-white/20 shadow-xl"></div>
              
              <div className="absolute top-6 left-20 bg-tech-blue/90 p-4 rounded-lg font-mono text-xs shadow-lg">
                <pre className="text-primary">import 'package:flutter/material.dart';</pre>
                <pre className="text-muted-foreground">class <span className="text-accent">AnimatedApp</span> extends StatefulWidget &#123;</pre>
                <pre className="text-muted-foreground">  @override</pre>
                <pre className="text-muted-foreground">  _AnimatedAppState createState() =&gt; _AnimatedAppState();</pre>
                <pre className="text-muted-foreground">&#125;</pre>
              </div>
              
              <div className="absolute top-56 left-56 bg-tech-blue/90 p-4 rounded-lg font-mono text-xs shadow-lg">
                <pre className="text-primary">import tensorflow as tf</pre>
                <pre className="text-muted-foreground">model = tf.keras.Sequential([</pre>
                <pre className="text-muted-foreground">    tf.keras.layers.Dense(128, activation='relu'),</pre>
                <pre className="text-muted-foreground">    tf.keras.layers.Dropout(0.2),</pre>
                <pre className="text-muted-foreground">    tf.keras.layers.Dense(10)</pre>
                <pre className="text-muted-foreground">])</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;