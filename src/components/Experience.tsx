
import { Calendar, MapPin, Building } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Leading a team of 8 developers in building scalable web applications. Architected microservices infrastructure that improved system performance by 40%.',
      technologies: ['React', 'Node.js', 'AWS', 'Docker', 'Kubernetes'],
      achievements: [
        'Reduced deployment time by 60% through CI/CD implementation',
        'Mentored 5 junior developers',
        'Led migration to microservices architecture'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Innovations Inc',
      location: 'New York, NY',
      period: '2020 - 2022',
      description: 'Developed responsive web applications using modern JavaScript frameworks. Collaborated with UX teams to implement pixel-perfect designs.',
      technologies: ['Vue.js', 'TypeScript', 'Sass', 'Webpack', 'Jest'],
      achievements: [
        'Improved app performance by 35%',
        'Built component library used across 10+ projects',
        'Implemented accessibility standards'
      ]
    },
    {
      title: 'Junior Developer',
      company: 'StartupHub',
      location: 'Austin, TX',
      period: '2018 - 2020',
      description: 'Built full-stack applications from conception to deployment. Gained experience in agile development and rapid prototyping.',
      technologies: ['JavaScript', 'Python', 'Django', 'PostgreSQL', 'Git'],
      achievements: [
        'Delivered 15+ projects on time',
        'Contributed to open-source projects',
        'Learned multiple programming languages'
      ]
    },
    {
      title: 'Computer Science Student',
      company: 'University of California',
      location: 'Berkeley, CA',
      period: '2014 - 2018',
      description: 'Bachelor of Science in Computer Science with focus on software engineering and algorithms.',
      technologies: ['Java', 'C++', 'Python', 'Data Structures', 'Algorithms'],
      achievements: [
        'Graduated Magna Cum Laude',
        'Dean\'s List for 6 semesters',
        'Computer Science Club President'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-background to-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-neon-blue to-electric-purple bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our journey through the tech industry, building expertise and delivering 
            exceptional results across various roles and technologies.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-blue to-electric-purple transform md:-translate-x-0.5"></div>
            
            {experiences.map((exp, index) => (
              <div 
                key={exp.title}
                className={`relative mb-12 animate-fade-in ${
                  index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className={`absolute w-4 h-4 bg-gradient-to-r from-neon-blue to-electric-purple rounded-full border-4 border-background ${
                  index % 2 === 0 
                    ? 'left-6 md:left-1/2 md:transform md:-translate-x-2' 
                    : 'left-6 md:left-1/2 md:transform md:-translate-x-2'
                }`}></div>
                
                <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-16' : 'md:ml-16'}`}>
                  <Card className="bg-secondary/50 border-primary/20 hover:border-primary/40 transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {exp.title}
                          </h3>
                          <div className="flex flex-wrap items-center gap-4 mt-2 text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Building className="w-4 h-4" />
                              <span>{exp.company}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span>{exp.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{exp.period}</span>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground">{exp.description}</p>
                        
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="space-y-2">
                          <h4 className="font-semibold text-foreground">Key Achievements:</h4>
                          <ul className="text-muted-foreground space-y-1">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
