
import { ExternalLink, Github, Code } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory management, payment processing, and advanced analytics dashboard.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      github: '#',
      demo: '#',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates, team collaboration features, and advanced reporting.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      technologies: ['Vue.js', 'Express', 'MongoDB', 'Socket.io'],
      github: '#',
      demo: '#',
      featured: false
    },
    {
      title: 'AI-Powered Analytics',
      description: 'Machine learning platform that provides predictive analytics and data visualization for business intelligence.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      technologies: ['Python', 'TensorFlow', 'React', 'FastAPI'],
      github: '#',
      demo: '#',
      featured: true
    },
    {
      title: 'Mobile Banking App',
      description: 'Secure mobile banking application with biometric authentication, transaction history, and investment tracking.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
      technologies: ['React Native', 'Firebase', 'Node.js', 'JWT'],
      github: '#',
      demo: '#',
      featured: false
    },
    {
      title: 'Smart Home Dashboard',
      description: 'IoT dashboard for controlling smart home devices with real-time monitoring and automation scheduling.',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop',
      technologies: ['TypeScript', 'Next.js', 'MQTT', 'InfluxDB'],
      github: '#',
      demo: '#',
      featured: false
    },
    {
      title: 'Video Streaming Platform',
      description: 'Scalable video streaming service with adaptive bitrate streaming and content management system.',
      image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=600&h=400&fit=crop',
      technologies: ['React', 'AWS', 'Docker', 'Redis'],
      github: '#',
      demo: '#',
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-slate-900/50 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-neon-blue to-electric-purple bg-clip-text text-transparent">
            Our Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the innovative solutions we've crafted for our clients. Each project represents 
            our commitment to excellence and cutting-edge technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className={`group bg-secondary/50 border-primary/20 hover:border-primary/40 transition-all duration-300 overflow-hidden animate-fade-in ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {project.featured && (
                  <Badge className="absolute top-4 left-4 bg-gradient-to-r from-neon-blue to-electric-purple">
                    Featured
                  </Badge>
                )}
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-2">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 border-primary/20 hover:border-primary/40"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1 bg-gradient-to-r from-neon-blue to-electric-purple hover:from-neon-blue/80 hover:to-electric-purple/80"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <Code className="w-5 h-5 mr-2" />
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
