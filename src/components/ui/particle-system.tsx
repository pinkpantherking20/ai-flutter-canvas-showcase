import React, { useEffect, useState } from 'react';

interface ParticleSystemProps {
  particleCount?: number;
  className?: string;
}

const ParticleSystem: React.FC<ParticleSystemProps> = ({ 
  particleCount = 15, 
  className = "" 
}) => {
  const [particles, setParticles] = useState<Array<{
    id: number;
    size: number;
    delay: number;
    duration: number;
    left: number;
  }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 2, // 2-6px
      delay: Math.random() * 20, // 0-20s delay
      duration: Math.random() * 10 + 15, // 15-25s duration
      left: Math.random() * 100, // 0-100% left position
    }));
    setParticles(newParticles);
  }, [particleCount]);

  return (
    <div className={`particles ${className}`}>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.left}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default ParticleSystem;