import { Award, Target, Users, Zap } from "lucide-react";
import { Card } from "./ui/card";
import factoryImage from "@/assets/factory-floor.jpg";

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Precision Engineering",
      description: "State-of-the-art CNC technology delivering micron-level accuracy",
    },
    {
      icon: Zap,
      title: "Productivity First",
      description: "Optimized solutions that maximize output and minimize downtime",
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "ISO 9001:2015 certified processes ensuring consistent excellence",
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Dedicated technical team providing comprehensive consultation",
    },
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative animate-slide-in-left">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img
                src={factoryImage}
                alt="Modern manufacturing facility with CNC machines"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/50 to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-glow">
              <div className="text-4xl font-bold">25+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-slide-in-right">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold">
                About Aviruddha
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Leading the Future of 
              <span className="text-primary"> Precision Manufacturing</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              For over two decades, Aviruddha has been at the forefront of cutting tool innovation 
              and machining excellence. We specialize in providing comprehensive solutions that 
              transform manufacturing processes across industries.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8">
              Our commitment to quality, combined with advanced technology and expert technical 
              support, has made us the trusted partner for manufacturers seeking to optimize their 
              production efficiency and reduce operational costs.
            </p>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="p-5 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border/50"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <value.icon className="w-8 h-8 text-accent mb-3" />
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
