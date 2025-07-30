import React from 'react';

interface FloatingElementsProps {
  className?: string;
}

const FloatingElements: React.FC<FloatingElementsProps> = ({ className = "" }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Floating Geometric Shapes */}
      <div className="geometric-shape w-32 h-32 top-1/4 left-1/4 floating opacity-20"></div>
      <div className="geometric-shape w-20 h-20 top-3/4 right-1/4 floating-delayed opacity-15"></div>
      <div className="geometric-shape w-16 h-16 top-1/2 right-1/3 floating-slow opacity-10"></div>
      
      {/* Triangular Shapes */}
      <div className="absolute top-1/3 right-1/4 floating opacity-10">
        <div className="geometric-triangle"></div>
      </div>
      <div className="absolute bottom-1/4 left-1/3 floating-delayed opacity-15">
        <div className="geometric-triangle"></div>
      </div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 blur-3xl floating opacity-30"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-gradient-to-r from-accent/10 to-primary/10 blur-3xl floating-delayed opacity-25"></div>
      
      {/* Light Streaks */}
      <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent opacity-30 floating"></div>
      <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-transparent via-accent/20 to-transparent opacity-25 floating-delayed"></div>
    </div>
  );
};

export default FloatingElements;