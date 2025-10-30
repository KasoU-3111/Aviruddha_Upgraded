import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Industrial Area, Phase-2", "Manufacturing Hub, India"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 XXX XXX XXXX", "Mon-Sat: 9:00 AM - 6:00 PM"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@aviruddha.com", "sales@aviruddha.com"],
    },
  ];

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold">
              Get In Touch
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Discuss Your 
            <span className="text-primary"> Manufacturing Needs</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Our team of experts is ready to help optimize your production process 
            and reduce your cost per cut.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <info.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
              {info.details.map((detail, idx) => (
                <p key={idx} className="text-muted-foreground text-sm">
                  {detail}
                </p>
              ))}
            </Card>
          ))}
        </div>

        {/* Form and Map */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="p-8 animate-slide-in-left">
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="text-sm font-medium mb-2 block">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium mb-2 block">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="text-sm font-medium mb-2 block">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    placeholder="+91 XXX XXX XXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="company" className="text-sm font-medium mb-2 block">
                    Company Name
                  </label>
                  <Input
                    id="company"
                    placeholder="ABC Manufacturing"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="text-sm font-medium mb-2 block">
                  Message *
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your requirements..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              
              <Button type="submit" variant="hero" className="w-full" size="lg">
                Send Message
                <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </Card>

          {/* Map */}
          <Card className="p-2 animate-slide-in-right overflow-hidden">
            <div className="w-full h-full min-h-[500px] bg-muted rounded-lg relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.14571719898!2d72.71637344999999!3d19.0822507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
                title="Aviruddha Location"
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
