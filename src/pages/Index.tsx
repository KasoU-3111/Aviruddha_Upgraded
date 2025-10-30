import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Aviruddha - Precision Cutting Tools & Machining Solutions</title>
        <meta
          name="description"
          content="Leading provider of precision cutting tools and CNC machining solutions. ISO 9001:2015 certified. Innovating precision, reducing cost per cut for modern manufacturing."
        />
        <meta
          name="keywords"
          content="cutting tools, CNC machining, precision manufacturing, carbide tools, industrial solutions"
        />
        <link rel="canonical" href="https://aviruddha.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Aviruddha - Precision Cutting Tools & Machining Solutions" />
        <meta
          property="og:description"
          content="Leading provider of precision cutting tools and CNC machining solutions. ISO 9001:2015 certified."
        />
        <meta property="og:type" content="website" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ManufacturingCompany",
            "name": "Aviruddha",
            "description": "Precision cutting tools and machining solutions provider",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "IN"
            },
            "offers": {
              "@type": "Offer",
              "itemOffered": [
                {
                  "@type": "Product",
                  "name": "Precision Cutting Tools"
                },
                {
                  "@type": "Service",
                  "name": "CNC Machining Services"
                }
              ]
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <ProductsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
