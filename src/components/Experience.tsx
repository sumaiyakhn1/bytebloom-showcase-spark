
import { Calendar, MapPin, Building, Award, TrendingUp } from 'lucide-react';
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
      ],
      highlight: true
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
      ],
      isEducation: true
    }
  ];

  return (
    <section id="experience" className="py-12 md:py-20 bg-gradient-to-b from-background to-slate-900/50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-neon-blue/10 to-electric-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-r from-electric-purple/10 to-neon-blue/10 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-full mb-4 backdrop-blur-sm">
            <TrendingUp className="w-4 h-4 text-neon-blue" />
            <span className="text-sm text-muted-foreground">Professional Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-neon-blue to-electric-purple bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Our journey through the tech industry, building expertise and delivering 
            exceptional results across various roles and technologies.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Desktop Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-neon-blue via-electric-purple to-primary transform -translate-x-0.5 rounded-full"></div>
            
            {/* Mobile Timeline line */}
            <div className="md:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-blue via-electric-purple to-primary rounded-full"></div>
            
            {experiences.map((exp, index) => (
              <div 
                key={exp.title}
                className={`relative mb-8 md:mb-16 animate-fade-in ${
                  index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className={`absolute w-6 h-6 bg-gradient-to-r ${
                  exp.highlight ? 'from-electric-purple to-neon-blue' : 'from-neon-blue to-electric-purple'
                } rounded-full border-4 border-background shadow-lg ${
                  index % 2 === 0 
                    ? 'left-4 md:left-1/2 md:transform md:-translate-x-3' 
                    : 'left-4 md:left-1/2 md:transform md:-translate-x-3'
                } flex items-center justify-center`}>
                  {exp.isEducation ? 
                    <Award className="w-3 h-3 text-background" /> : 
                    <Building className="w-3 h-3 text-background" />
                  }
                </div>
                
                <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-20' : 'md:ml-20'}`}>
                  <Card className={`bg-secondary/30 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-500 group hover:shadow-2xl hover:shadow-primary/10 ${
                    exp.highlight ? 'ring-2 ring-electric-purple/30' : ''
                  }`}>
                    <CardContent className="p-4 md:p-6">
                      <div className="space-y-4">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <div>
                            <h3 className="text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                              {exp.title}
                              {exp.highlight && <div className="w-2 h-2 bg-electric-purple rounded-full animate-pulse"></div>}
                            </h3>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-2 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Building className="w-4 h-4 flex-shrink-0" />
                                <span className="font-medium">{exp.company}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4 flex-shrink-0" />
                                <span>{exp.location}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 text-sm font-medium bg-primary/10 px-3 py-1 rounded-full">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{exp.description}</p>
                        
                        <div className="space-y-3">
                          <div>
                            <h4 className="font-semibold text-foreground mb-2 text-sm">Technologies:</h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech) => (
                                <Badge key={tech} variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-foreground mb-2 text-sm">Key Achievements:</h4>
                            <ul className="text-muted-foreground space-y-2 text-sm">
                              {exp.achievements.map((achievement, i) => (
                                <li key={i} className="flex items-start gap-3">
                                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-neon-blue to-electric-purple rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="leading-relaxed">{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
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
