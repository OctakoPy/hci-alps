import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

const JourneyNav = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [mainNavVisible, setMainNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when at top of page
      if (currentScrollY === 0) {
        setIsVisible(true);
        setMainNavVisible(true);
      }
      // Hide when scrolling down, show when scrolling up
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setMainNavVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
        setMainNavVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);
  
  const pages = [
    { name: "Research", path: "/our-journey/design-research" },
    { name: "Ideation", path: "/our-journey/design-ideation" },
    { name: "Testing", path: "/our-journey/prototype-testing" }
  ];

  return (
    <nav className={`sticky z-40 bg-background/95 backdrop-blur border-border transition-all duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    } ${
      mainNavVisible ? 'top-16' : 'top-0'
    }`}>
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center gap-2 py-1 overflow-x-auto">
          <span className="text-sm pb-1 text-muted-foreground whitespace-nowrap">Our Journey</span>
          <span className="pb-1 text-muted-foreground">&gt;</span>
          <div className="flex items-center gap-4">
            {pages.map((page) => (
              <Link
                key={page.path}
                to={page.path}
                className={cn(
                  "text-sm font-medium whitespace-nowrap transition-colors pb-1 border-b-2",
                  location.pathname === page.path
                    ? "text-primary border-primary"
                    : "text-muted-foreground border-transparent hover:text-foreground"
                )}
              >
                {page.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default JourneyNav;
