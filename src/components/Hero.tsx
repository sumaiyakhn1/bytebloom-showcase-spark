
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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Floating Elements */}
      <div className="absolute top-20 left-4 md:left-10 w-4 h-4 bg-neon-blue rounded-full animate-float"></div>
      <div className="absolute top-40 right-4 md:right-20 w-6 h-6 bg-electric-purple rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-4 md:left-20 w-3 h-3 bg-primary rounded-full animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto text-center relative z-10 max-w-6xl">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-secondary/50 px-3 md:px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-neon-blue" />
            <span className="text-xs md:text-sm text-muted-foreground">Welcome to the future</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-neon-blue to-electric-purple bg-clip-text text-transparent leading-tight px-4">
            Byte-Bloom
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            Crafting digital experiences that bloom into extraordinary solutions. 
            We transform ideas into powerful, scalable applications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 px-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-neon-blue to-electric-purple hover:from-neon-blue/80 hover:to-electric-purple/80 text-white px-6 md:px-8 w-full sm:w-auto"
              onClick={scrollToAbout}
            >
              <Code className="w-5 h-5 mr-2" />
              Explore Our Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full sm:w-auto"
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
