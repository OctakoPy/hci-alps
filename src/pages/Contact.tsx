import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Linkedin, Twitter, Github, ArrowRight, Phone, MessageCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import alpsCallImage from "@/assets/alps-call.png";
import alpsCatemailImage from "@/assets/alps-catemail.png";
import alpsMessageImage from "@/assets/alps-message.png";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Contact = () => {
  // Scroll animation hooks
  const cardsSection = useScrollAnimation();
  const socialSection = useScrollAnimation();
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Contact Section */}
      <section className="py-12 px-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-background">
        <div className="container mx-auto max-w-6xl">
          {/* Hero Section - Split Layout */}
          <div className="grid md:grid-cols-3 gap-8 mb-16 items-center">
            {/* Left Column - 2/3 width */}
            <div className="md:col-span-2 text-center md:text-left animate-slide-up">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Get In <span className="text-primary">Touch</span>
              </h1>
              <p className="text-lg text-foreground/80 leading-relaxed">
                We're a small, passionate team with big ambitions. If you're excited about AI, wellness tech, 
                and building products that truly improve people's lives, or if you just have any questions, we'd love to hear from you.
              </p>
            </div>

            {/* Right Column - 1/3 width */}
            <div className="md:col-span-1 animate-slide-in-right">
              <img 
                src={alpsCallImage} 
                alt="ErgoAI Team" 
                className="w-full h-64 md:h-full object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <div 
            ref={cardsSection.ref}
            className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12"
          >
            {/* General Inquiries */}
            <Card className={`hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-primary/30 bg-gradient-to-br from-background to-primary/5 overflow-hidden scroll-animate scroll-fade-in-left ${cardsSection.isVisible ? 'visible' : ''}`}>
              <div className="h-48 overflow-hidden flex items-center justify-center">
                <img 
                  src={alpsCatemailImage} 
                  alt="Team collaboration" 
                  className="w-full h-full object-contain"
                />
              </div>
              <CardContent className="pt-4 pb-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">General Inquiries</h3>
                <p className="text-sm text-muted-foreground mb-4">Questions about ALPS or ErgoAI?</p>
                <div className="space-y-2">
                  <a 
                    href="mailto:hello@ergoai.tech" 
                    className="text-primary hover:text-primary/80 font-semibold transition-colors inline-flex items-center gap-2"
                  >
                    hello@ergoai.tech
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <div className="flex items-center justify-center gap-4 pt-2">
                    <a 
                      href="tel:+60123456789" 
                      className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
                    >
                      <Phone className="w-4 h-4" />
                      +60 12-345 6789
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Partnership & Research */}
            <Card className={`hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-secondary/30 bg-gradient-to-br from-background to-secondary/5 overflow-hidden scroll-animate scroll-fade-in-right ${cardsSection.isVisible ? 'visible' : ''}`}>
              <div className="h-48 overflow-hidden flex items-center justify-center">
                <img 
                  src={alpsMessageImage} 
                  alt="Research collaboration" 
                  className="w-full h-full object-contain"
                />
              </div>
              <CardContent className="pt-4 pb-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Partnerships & Research</h3>
                <p className="text-sm text-muted-foreground mb-4">Collaborate with us on research or testing</p>
                <div className="space-y-2">
                  <a 
                    href="mailto:partnerships@ergoai.tech" 
                    className="text-secondary hover:text-secondary/80 font-semibold transition-colors inline-flex items-center gap-2"
                  >
                    partnerships@ergoai.tech
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <div className="flex items-center justify-center gap-4 pt-2">
                    <a 
                      href="https://wa.me/60123456789" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-secondary transition-colors inline-flex items-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Social Media & Additional Contact */}
          <div 
            ref={socialSection.ref}
            className={`bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-2xl p-8 border border-primary/20 scroll-animate scroll-scale-in ${socialSection.isVisible ? 'visible' : ''}`}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2 text-foreground">Connect With Us</h3>
                <p className="text-muted-foreground">Follow our journey and join the conversation</p>
              </div>
              <div className="flex gap-4">
                <a 
                  href="https://linkedin.com/company/ergoai" 
                  className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-6 h-6 text-primary" />
                </a>
                <a 
                  href="https://twitter.com/ergoai" 
                  className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="w-6 h-6 text-primary" />
                </a>
                <a 
                  href="https://github.com/ergoai" 
                  className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-6 h-6 text-primary" />
                </a>
              </div>
            </div>
          </div>

          {/* Office Location */}
          <div className={`mt-8 text-center scroll-animate scroll-fade-up ${socialSection.isVisible ? 'visible' : ''}`}>
            <p className="text-sm text-muted-foreground mb-2">📍 Based in Kuala Lumpur, Malaysia</p>
            <p className="text-xs text-muted-foreground">
              ErgoAI Technologies • In partnership with HUMAC Research Centre, Sunway Group
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
