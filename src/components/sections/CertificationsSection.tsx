import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Award, ExternalLink, Building } from 'lucide-react';

const certifications = [
  {
    id: 1,
    title: 'Machine Learning Specialization',
    provider: 'Coursera - Stanford University',
    issuer: 'DeepLearning.AI',
    date: '2023',
    skills: ['Machine Learning', 'Python', 'Neural Networks', 'Deep Learning'],
    credentialUrl: '#',
    image: '/coursera-ml.png'
  },
  {
    id: 2,
    title: 'AWS Certified Cloud Practitioner',
    provider: 'Amazon Web Services',
    issuer: 'AWS',
    date: '2023',
    skills: ['AWS', 'Cloud Computing', 'S3', 'EC2', 'Lambda'],
    credentialUrl: '#',
    image: '/aws-cert.png'
  },
  {
    id: 3,
    title: 'Complete Python Bootcamp',
    provider: 'Udemy',
    issuer: 'Jose Portilla',
    date: '2022',
    skills: ['Python', 'Django', 'Flask', 'Data Structures', 'OOP'],
    credentialUrl: '#',
    image: '/python-cert.png'
  },
  {
    id: 4,
    title: 'React - The Complete Guide',
    provider: 'Udemy',
    issuer: 'Maximilian Schwarzmüller',
    date: '2023',
    skills: ['React', 'JavaScript', 'TypeScript', 'Redux', 'Next.js'],
    credentialUrl: '#',
    image: '/react-cert.png'
  },
  {
    id: 5,
    title: 'Deep Learning Specialization',
    provider: 'Coursera - Stanford University',
    issuer: 'DeepLearning.AI',
    date: '2023',
    skills: ['Deep Learning', 'TensorFlow', 'CNN', 'RNN', 'NLP'],
    credentialUrl: '#',
    image: '/deep-learning-cert.png'
  },
  {
    id: 6,
    title: 'Google Data Analytics Certificate',
    provider: 'Coursera - Google',
    issuer: 'Google',
    date: '2022',
    skills: ['Data Analysis', 'SQL', 'Tableau', 'R', 'Statistics'],
    credentialUrl: '#',
    image: '/google-data-cert.png'
  }
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="section-container">
      <h2 className="section-title text-center">Certifications & Learning</h2>
      <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
        Continuous learning and professional development through industry-recognized certifications 
        from leading educational platforms and technology providers.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <Card 
            key={cert.id} 
            className="overflow-hidden card-hover border-border/50 bg-card/50 backdrop-blur-sm group"
            style={{
              animationDelay: `${index * 100}ms`
            }}
          >
            <CardContent className="p-0">
              {/* Certificate Image/Badge */}
              <div className="h-40 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300"></div>
                <Award className="h-16 w-16 text-primary relative z-10" />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="text-xs">
                    {cert.date}
                  </Badge>
                </div>
              </div>
              
              {/* Certificate Details */}
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2 line-clamp-2">{cert.title}</h3>
                
                <div className="flex items-center gap-2 mb-3">
                  <Building className="h-4 w-4 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">{cert.provider}</p>
                </div>
                
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">Issued: {cert.date}</p>
                </div>
                
                {/* Skills */}
                <div className="mb-4">
                  <p className="text-sm font-medium mb-2">Skills Acquired:</p>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map(skill => (
                      <Badge key={skill} variant="outline" className="text-xs bg-secondary/30">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* Credential Link */}
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-full gap-2 mt-2"
                  onClick={() => window.open(cert.credentialUrl, '_blank')}
                >
                  <ExternalLink className="h-4 w-4" />
                  View Credential
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Call to Action */}
      <div className="text-center mt-12">
        <p className="text-muted-foreground mb-4">
          Always learning and expanding my skill set
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
            <Award className="h-3 w-3 mr-1" />
            6+ Certifications
          </Badge>
          <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30">
            <Building className="h-3 w-3 mr-1" />
            Top Platforms
          </Badge>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;