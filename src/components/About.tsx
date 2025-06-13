
import { Users, Target, Lightbulb, Rocket } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Precision',
      description: 'Every line of code serves a purpose, crafted with meticulous attention to detail.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We push boundaries and explore new technologies to deliver cutting-edge solutions.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Success comes from working together, sharing ideas, and building as a team.'
    },
    {
      icon: Rocket,
      title: 'Growth',
      description: 'We believe in continuous learning and evolving with the ever-changing tech landscape.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-neon-blue to-electric-purple bg-clip-text text-transparent">
            About Byte-Bloom
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are a passionate team of developers, designers, and innovators dedicated to creating 
            digital solutions that make a difference. Our mission is to transform complex challenges 
            into elegant, user-friendly applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-in-left">
            <h3 className="text-3xl font-bold mb-6 text-foreground">Our Story</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Founded with a vision to bridge the gap between innovative technology and practical solutions, 
              Byte-Bloom has grown from a small startup to a trusted partner for businesses worldwide.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our journey began with a simple belief: that great software should be both powerful and 
              intuitive. Today, we continue to uphold this philosophy while embracing new technologies 
              and methodologies that push the boundaries of what's possible.
            </p>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-neon-blue/20 to-electric-purple/20 rounded-2xl p-8 backdrop-blur-sm border border-primary/20">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-neon-blue">50+</div>
                  <div className="text-muted-foreground">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-electric-purple">5+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-muted-foreground">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-neon-blue">24/7</div>
                  <div className="text-muted-foreground">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={value.title} className="bg-secondary/50 border-primary/20 hover:border-primary/40 transition-all duration-300 group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-neon-blue/20 to-electric-purple/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-foreground">{value.title}</h4>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
