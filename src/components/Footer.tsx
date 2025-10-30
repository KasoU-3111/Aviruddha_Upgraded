import { Facebook, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Products & Services", href: "#products" },
    { name: "Contact", href: "#contact" },
  ];

  const products = [
    "Carbide End Mills",
    "HSS Drills",
    "CNC Machining",
    "Tool Management",
  ];

  return (
    <footer className="bg-dark-blue text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">A</span>
              </div>
              <span className="text-xl font-bold">Aviruddha</span>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Leading provider of precision cutting tools and machining solutions 
              for modern manufacturing.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-9 h-9 bg-primary-foreground/10 hover:bg-accent rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-primary-foreground/10 hover:bg-accent rounded-full flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-primary-foreground/10 hover:bg-accent rounded-full flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Products</h3>
            <ul className="space-y-2">
              {products.map((product) => (
                <li key={product}>
                  <span className="text-primary-foreground/80">{product}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80 text-sm">
                  Industrial Area, Phase-2<br />Manufacturing Hub, India
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  +91 XXX XXX XXXX
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  info@aviruddha.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Aviruddha. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-primary-foreground/60 hover:text-accent text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-primary-foreground/60 hover:text-accent text-sm transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
