import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Product Manager',
    company: 'TechCorp Inc.',
    avatar: '/placeholder.svg',
    content: 'Abdullah delivered exceptional AI solutions that transformed our logistics operations. His expertise in machine learning and attention to detail are outstanding.',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CTO',
    company: 'StartupXYZ',
    avatar: '/placeholder.svg',
    content: 'Working with Abdullah was a game-changer for our project. His technical skills in full-stack development and AI integration exceeded our expectations.',
    rating: 5
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Founder',
    company: 'Innovation Labs',
    avatar: '/placeholder.svg',
    content: 'Abdullah\'s ability to translate complex AI concepts into practical solutions is remarkable. He delivered our project on time and within budget.',
    rating: 5
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'Engineering Lead',
    company: 'DataFlow Systems',
    avatar: '/placeholder.svg',
    content: 'Exceptional work on our IoT monitoring system. Abdullah\'s expertise in both hardware and software integration made our vision a reality.',
    rating: 5
  }
];

const clientLogos = [
  { name: 'TechCorp', logo: '/placeholder.svg' },
  { name: 'StartupXYZ', logo: '/placeholder.svg' },
  { name: 'Innovation Labs', logo: '/placeholder.svg' },
  { name: 'DataFlow', logo: '/placeholder.svg' },
  { name: 'AI Solutions', logo: '/placeholder.svg' },
  { name: 'CloudTech', logo: '/placeholder.svg' }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-container">
      <h2 className="section-title">What Clients Say</h2>
      
      {/* Testimonials Carousel */}
      <div className="relative max-w-4xl mx-auto mb-16">
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                <Card className="glass-card card-hover">
                  <CardContent className="p-8 text-center">
                    {/* Stars */}
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <div key={i} className="w-5 h-5 text-yellow-400 mr-1">⭐</div>
                      ))}
                    </div>
                    
                    {/* Quote */}
                    <blockquote className="text-lg sm:text-xl text-muted-foreground mb-8 italic leading-relaxed">
                      "{testimonial.content}"
                    </blockquote>
                    
                    {/* Avatar and Info */}
                    <div className="flex items-center justify-center gap-4">
                      <div className="w-16 h-16 rounded-full glass-card overflow-hidden">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.src = '/placeholder.svg';
                          }}
                        />
                      </div>
                      <div className="text-left">
                        <h4 className="font-bold text-lg">{testimonial.name}</h4>
                        <p className="text-muted-foreground">{testimonial.role}</p>
                        <p className="text-primary text-sm">{testimonial.company}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
        
        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-primary neon-glow' 
                  : 'bg-muted hover:bg-primary/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Client Logos */}
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-8 text-muted-foreground">Trusted by Amazing Companies</h3>
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {[...clientLogos, ...clientLogos].map((client, index) => (
              <div key={index} className="flex-shrink-0 mx-8">
                <div className="w-32 h-16 glass-card rounded-lg flex items-center justify-center group hover:neon-glow transition-all duration-300">
                  <span className="text-muted-foreground font-semibold group-hover:text-primary transition-colors">
                    {client.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;