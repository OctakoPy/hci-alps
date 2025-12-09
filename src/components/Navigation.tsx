import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import alpsCat from "@/assets/alps-cat-mascot.png";
import { useState, useEffect } from "react";
import WaitlistForm from "./WaitlistForm";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when at top of page
      if (currentScrollY === 0) {
        setIsVisible(true);
      }
      // Hide when scrolling down, show when scrolling up
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);
  
  return (
    <>
      <WaitlistForm open={waitlistOpen} onOpenChange={setWaitlistOpen} />
      <nav className={`sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src={alpsCat} alt="ALPS" className="w-10 h-10" />
            <span className="font-bold text-xl">ALPS</span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </a>
            <a href="/demo" className="text-sm font-medium hover:text-primary transition-colors">
              Demo
            </a>
            <a href="/our-journey/design-research" className="text-sm font-medium hover:text-primary transition-colors">
              Design Research
            </a>
            <a href="/our-journey/design-ideation" className="text-sm font-medium hover:text-primary transition-colors">
              Design Ideation
            </a>
            <a href="/our-journey/prototype-testing" className="text-sm font-medium hover:text-primary transition-colors">
              Prototype Testing
            </a>
          </div>
          
          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">

          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            <a 
              href="/" 
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="/demo" 
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Demo
            </a>
            <a 
              href="/our-journey/design-research" 
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Design Research
            </a>
            <a 
              href="/our-journey/design-ideation" 
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Design Ideation
            </a>
            <a 
              href="/our-journey/prototype-testing" 
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Prototype Testing
            </a>
            <a 
              href="/how-it-works" 
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="/presentation" 
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Presentation
            </a>
            <a 
              href="/roadmap" 
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Roadmap
            </a>
            <a 
              href="/about" 
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="/contact" 
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <div className="pt-4 space-y-2">
              <Button variant="ghost" size="sm" className="w-full" onClick={() => setWaitlistOpen(true)}>
                Join Beta Testing
              </Button>
              <Button size="sm" className="w-full" asChild>
                <a href="/contact">Contact Us</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
    </>
  );
};

export default Navigation;
