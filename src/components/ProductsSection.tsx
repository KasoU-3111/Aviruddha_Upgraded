import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight, Wrench, Cog, Package, Shield } from "lucide-react";
import cuttingToolsImage from "@/assets/cutting-tools.jpg";
import machinedPartsImage from "@/assets/machined-parts.jpg";

const ProductsSection = () => {
  const products = [
    {
      icon: Wrench,
      title: "Precision Cutting Tools",
      description: "High-performance carbide end mills, drills, and cutting tools engineered for superior material removal rates and extended tool life.",
      image: cuttingToolsImage,
      features: ["Carbide End Mills", "HSS Drills", "Threading Tools", "Custom Tools"],
    },
    {
      icon: Cog,
      title: "CNC Machining Services",
      description: "Complete precision machining solutions from prototyping to production, utilizing advanced CNC technology for complex geometries.",
      image: machinedPartsImage,
      features: ["3-5 Axis Milling", "Precision Turning", "Wire EDM", "Surface Grinding"],
    },
  ];

  const services = [
    {
      icon: Package,
      title: "Tool Management Solutions",
      description: "Comprehensive tool inventory systems and vending solutions to optimize tool availability and reduce procurement costs.",
    },
    {
      icon: Shield,
      title: "Technical Consultation",
      description: "Expert guidance on tool selection, process optimization, and productivity enhancement for your specific applications.",
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold">
              Products & Services
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Comprehensive Solutions for 
            <span className="text-primary"> Modern Manufacturing</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            From cutting-edge tools to complete machining services, we deliver integrated 
            solutions that drive productivity and precision.
          </p>
        </div>

        {/* Main Products */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {products.map((product, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-elegant transition-all duration-300 group animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-blue to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4">
                  <product.icon className="w-12 h-12 text-accent" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{product.title}</h3>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <Button
                  variant="ghost"
                  className="group/btn"
                  onClick={scrollToContact}
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-card to-muted/20 animate-fade-in"
              style={{ animationDelay: `${0.4 + index * 0.2}s` }}
            >
              <service.icon className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-fade-in-up">
          <Button variant="hero" size="lg" onClick={scrollToContact}>
            Request a Quote
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
