import { ArrowRight, Play } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "@/assets/hero-machining.jpg";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Advanced CNC machining in progress"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 pt-20">
        <div className="max-w-4xl animate-fade-in-up">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full text-accent-foreground text-sm font-semibold border border-accent/30">
              ISO 9001:2015 Certified
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground leading-tight">
            Innovating Precision — 
            <span className="text-accent"> Reducing Cost Per Cut</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-2xl">
            Advanced cutting tools and machining solutions engineered for maximum productivity, 
            precision, and efficiency in modern manufacturing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="hero"
              size="lg"
              onClick={() => scrollToSection("products")}
              className="group"
            >
              Explore Solutions
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("about")}
              className="bg-background/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-background/20"
            >
              <Play className="mr-2" size={18} />
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-16 pt-8 border-t border-primary-foreground/20">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-accent mb-2">25+</div>
              <div className="text-primary-foreground/80 text-sm">Years Experience</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-4xl font-bold text-accent mb-2">500+</div>
              <div className="text-primary-foreground/80 text-sm">Happy Clients</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="text-4xl font-bold text-accent mb-2">98%</div>
              <div className="text-primary-foreground/80 text-sm">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
