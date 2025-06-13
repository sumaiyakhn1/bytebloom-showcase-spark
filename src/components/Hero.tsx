
import { ArrowDown, Code, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-slate-900 to-background"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neon-blue/20 via-transparent to-transparent"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-neon-blue rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-electric-purple rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-primary rounded-full animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-neon-blue" />
            <span className="text-sm text-muted-foreground">Welcome to the future</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-neon-blue to-electric-purple bg-clip-text text-transparent leading-tight">
            Byte-Bloom
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Crafting digital experiences that bloom into extraordinary solutions. 
            We transform ideas into powerful, scalable applications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-neon-blue to-electric-purple hover:from-neon-blue/80 hover:to-electric-purple/80 text-white px-8"
              onClick={scrollToAbout}
            >
              <Code className="w-5 h-5 mr-2" />
              Explore Our Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get in Touch
            </Button>
          </div>
        </div>

        <div className="animate-bounce">
          <button onClick={scrollToAbout}>
            <ArrowDown className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
