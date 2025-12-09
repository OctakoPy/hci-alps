import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import JourneyNav from "@/components/OurJourney/JourneyNav";
import PageNavigation from "@/components/OurJourney/PageNavigation";
import { Button } from "@/components/ui/button";
import { Users, Search, CheckCircle, TrendingUp, ChevronLeft, ChevronRight, X, ArrowRight, FileEdit } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const PrototypeTesting = () => {
  // Scroll animation hooks
  const timelineSection = useScrollAnimation();
  const initialSection = useScrollAnimation();
  const paperSection = useScrollAnimation();
  const approachSection = useScrollAnimation();
  const severitySection = useScrollAnimation();
  const issuesSection = useScrollAnimation();
  const heuristicsSection = useScrollAnimation();
  const userTestingSection = useScrollAnimation();
  const validationSection = useScrollAnimation();
  const figmaSection = useScrollAnimation();
  const ctaSection = useScrollAnimation();
  
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeImageCollection, setActiveImageCollection] = useState<'initial' | 'paper' | 'mockup'>('initial');

  const initialPrototypeImages = [
    { src: "/assets/initialprototype1.jpg", alt: "Initial Prototype 1" },
    { src: "/assets/initialprototype2.jpg", alt: "Initial Prototype 2" }
  ];

  const paperPrototypeImages = [
    { src: "/assets/paper1.jpeg", alt: "Paper Prototype 1" },
    { src: "/assets/paper2.jpeg", alt: "Paper Prototype 2" },
    { src: "/assets/paper3.jpeg", alt: "Paper Prototype 3" },
    { src: "/assets/paper4.jpeg", alt: "Paper Prototype 4" },
    { src: "/assets/paper5.jpeg", alt: "Paper Prototype 5" },
    { src: "/assets/paper6.jpeg", alt: "Paper Prototype 6" },
    { src: "/assets/paper7.jpeg", alt: "Paper Prototype 7" },
    { src: "/assets/paper8.jpeg", alt: "Paper Prototype 8" },
    { src: "/assets/paper9.jpeg", alt: "Paper Prototype 9" },
    { src: "/assets/paper10.jpeg", alt: "Paper Prototype 10" }
  ];

  const mockupImages = [
    { src: "/assets/mockup1.png", alt: "Digital Mockup 1" },
    { src: "/assets/mockup2.png", alt: "Digital Mockup 2" },
    { src: "/assets/mockup3.png", alt: "Digital Mockup 3" },
    { src: "/assets/mockup4.png", alt: "Digital Mockup 4" }
  ];

  const openLightbox = (index: number, collection: 'initial' | 'paper' | 'mockup') => {
    setCurrentImageIndex(index);
    setActiveImageCollection(collection);
    setLightboxOpen(true);
  };

  const goToNext = () => {
    let totalImages = 0;
    if (activeImageCollection === 'initial') {
      totalImages = initialPrototypeImages.length;
    } else if (activeImageCollection === 'paper') {
      totalImages = paperPrototypeImages.length;
    } else {
      totalImages = mockupImages.length;
    }
    setCurrentImageIndex((prev) => (prev + 1) % totalImages);
  };

  const goToPrevious = () => {
    let totalImages = 0;
    if (activeImageCollection === 'initial') {
      totalImages = initialPrototypeImages.length;
    } else if (activeImageCollection === 'paper') {
      totalImages = paperPrototypeImages.length;
    } else {
      totalImages = mockupImages.length;
    }
    setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") goToNext();
    if (e.key === "ArrowLeft") goToPrevious();
    if (e.key === "Escape") setLightboxOpen(false);
  };

  const topIssues = [
    { num: 1, issue: "No background running indicator", heuristic: "Visibility of System Status", severity: "3 - Moderate", solution: "Added menu bar icon showing ALPS is active" },
    { num: 2, issue: "No save confirmation after settings change", heuristic: "Visibility of System Status", severity: "3 - Moderate", solution: "Added 'Settings saved!' confirmation pop-up" },
    { num: 6, issue: "Inconsistent cat visual style", heuristic: "Consistency and Standards", severity: "4 - Major", solution: "Redesigned to maintain consistent cat character across all screens", major: true },
    { num: 7, issue: "Inconsistent close button (timer vs. X icon)", heuristic: "Consistency and Standards", severity: "4 - Major", solution: "Standardized to timer-based close button for all reminders", major: true },
    { num: 4, issue: "No back/forward buttons in settings", heuristic: "User Control and Freedom", severity: "3 - Moderate", solution: "Added navigation arrows + breadcrumbs" },
    { num: 9, issue: "Settings navigation relies on memory", heuristic: "Recognition Rather than Recall", severity: "3 - Moderate", solution: "Added visible labels and breadcrumb trail" },
    { num: 12, issue: "No error message for detection failure", heuristic: "Help Users Recognize Errors", severity: "3 - Moderate", solution: "Added error pop-up: 'Posture detection unavailable. Check camera.'" },
    { num: 13, issue: "No onboarding for first-time users", heuristic: "Help and Documentation", severity: "3 - Moderate", solution: "Created onboarding screen + contextual help panel" },
    { num: 11, issue: "Wordy reminder text", heuristic: "Aesthetic and Minimalist Design", severity: "2 - Minor", solution: "Shortened to key phrases for faster reading" }
  ];

  const improvements = [
    "Consistent cat mascot across all screens",
    "Standardized timer-based close buttons",
    "Added background running indicator",
    "Created smooth fade-in animations",
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <JourneyNav />
      
      {/* Header */}
      <section className="pt-16 pb-12 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-up">
            Prototype &  <span className="text-primary">Testing</span>
          </h1>
          
          {/* Timeline Graphic */}
          <div 
            ref={timelineSection.ref}
            className={`flex items-center justify-between gap-4 pt-8 text-xl scroll-animate scroll-fade-up ${timelineSection.isVisible ? 'visible' : ''}`}
          >
              <div className="text-center flex-1">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mx-auto mb-2">
                  <FileEdit className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                </div>
                <div className="font-semibold text-xl leading-tight">
                  <div>Initial</div>
                  <div>Prototype</div>
                </div>
              </div>
              <ArrowRight className="text-muted-foreground w-6 h-6 md:w-8 md:h-8 flex-shrink-0" />
              <div className="text-center flex-1">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mx-auto mb-2">
                  <Search className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                </div>
                <div className="font-semibold text-xl leading-tight">
                  <div>Heuristic</div>
                  <div>Evaluation</div>
                </div>
              </div>
              <ArrowRight className="text-muted-foreground w-6 h-6 md:w-8 md:h-8 flex-shrink-0" />
              <div className="text-center flex-1">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mx-auto mb-2">
                  <FileEdit className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                </div>
                <div className="font-semibold text-xl leading-tight">
                  <div>Final</div>
                  <div>Prototype</div>
                </div>
              </div>
              <ArrowRight className="text-muted-foreground w-6 h-6 md:w-8 md:h-8 flex-shrink-0" />
              <div className="text-center flex-1">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mx-auto mb-2">
                  <Users className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                </div>
                <div className="font-semibold text-xl leading-tight">
                  <div>User</div>
                  <div>Testing</div>
                </div>
              </div>
              <ArrowRight className="text-muted-foreground w-6 h-6 md:w-8 md:h-8 flex-shrink-0" />
              <div className="text-center flex-1">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mx-auto mb-2">
                  <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                </div>
                <div className="font-semibold text-xl leading-tight">
                  <div>Digital</div>
                  <div>Mockup</div>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* Section 1: Initial Paper Prototypes */}
      <section className="py-12 border-b border-border">
        <div 
          ref={initialSection.ref}
          className={`container mx-auto px-4 max-w-5xl scroll-animate scroll-fade-up ${initialSection.isVisible ? 'visible' : ''}`}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-xl font-bold text-primary">1</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold ml-2">Initial Paper Prototypes</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {initialPrototypeImages.map((img, index) => (
              <div
                key={index}
                className="rounded-lg border border-border overflow-hidden cursor-pointer hover:opacity-80 transition-opacity aspect-square"
                onClick={() => openLightbox(index, 'initial')}
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          
          <p className="text-xl text-muted-foreground mt-6 text-center italic">
            Click on any image to view in full size
          </p>
        </div>
      </section>

      {/* Section 2: Heuristics Summary */}
      <section className="py-12 border-b border-border bg-muted/10">
        <div 
          ref={heuristicsSection.ref}
          className={`container mx-auto px-4 max-w-5xl scroll-animate scroll-fade-up ${heuristicsSection.isVisible ? 'visible' : ''}`}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-xl font-bold text-primary">2</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold ml-2">Heuristic Evaluation Summary</h2>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-10 space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Most Violated Principles:</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-orange-50 dark:bg-orange-950/20 rounded-lg p-6">
                  <h4 className="font-semibold text-orange-700 dark:text-orange-400 mb-3 text-xl">1. Consistency and Standards (2 major)</h4>
                  <ul className="space-y-2 text-xl ml-4">
                    <li>• Inconsistent cat visuals across screens</li>
                    <li>• Mixed close button styles</li>
                  </ul>
                  <p className="mt-3 text-xl"><strong>Impact:</strong> User confusion and reduced trust</p>
                </div>
                
                <div className="bg-orange-50 dark:bg-orange-950/20 rounded-lg p-6">
                  <h4 className="font-semibold text-orange-700 dark:text-orange-400 mb-3 text-xl">2. Visibility of System Status (2 moderate)</h4>
                  <ul className="space-y-2 text-xl ml-4">
                    <li>• No running indicator</li>
                    <li>• No save confirmations</li>
                  </ul>
                  <p className="mt-3 text-xl"><strong>Impact:</strong> Users uncertain if ALPS is working</p>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-4">
              <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2 text-xl">Not Violated:</h4>
              <div className="flex flex-wrap gap-2 text-xl">
                <span>✓ Match Between System and Real World</span>
                <span>✓ Error Prevention</span>
                <span>✓ Flexibility and Efficiency of Use</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 3: Paper Prototypes */}
      <section className="py-12 border-b border-border">
        <div 
          ref={paperSection.ref}
          className={`container mx-auto px-4 max-w-5xl scroll-animate scroll-fade-up ${paperSection.isVisible ? 'visible' : ''}`}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-xl font-bold text-primary">3</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold ml-2">Final Paper Prototype</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {paperPrototypeImages.map((img, index) => (
              <div
                key={index}
                className="rounded-lg border border-border overflow-hidden cursor-pointer hover:opacity-80 transition-opacity aspect-square"
                onClick={() => openLightbox(index, 'paper')}
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          
          <p className="text-xl text-muted-foreground mt-6 text-center italic">
            Click on any image to view in full size
          </p>
        </div>
      </section>

      {/* Section 4: User Testing Insights */}
      <section className="py-12 border-b border-border">
        <div 
          ref={userTestingSection.ref}
          className={`container mx-auto px-4 max-w-5xl scroll-animate scroll-fade-up ${userTestingSection.isVisible ? 'visible' : ''}`}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-xl font-bold text-primary">4</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold ml-2">User Testing Results</h2>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="text-xl font-bold mb-6">Tasks Tested:</h3>
            
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-muted/30 rounded-lg p-4 text-center">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <p className="font-medium text-xl">Posture Correction via Overlay</p>
              </div>
              
              <div className="bg-muted/30 rounded-lg p-4 text-center">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-primary">2</span>
                </div>
                <p className="font-medium text-xl">Customising Settings</p>
              </div>
              
              <div className="bg-muted/30 rounded-lg p-4 text-center">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-primary">3</span>
                </div>
                <p className="font-medium text-xl">Dismissing Reminders</p>
              </div>
            </div>
            
            <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-6 mb-6">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <h4 className="font-semibold text-green-700 dark:text-green-400 text-xl">Testing Successful</h4>
              </div>
              <p className="text-xl">All tasks were passed successfully and validated by user testing. Users found the interface intuitive and the task flows logical.</p>
            </div>
            
            <div className="bg-orange-50 dark:bg-orange-950/20 rounded-lg p-6">
              <h4 className="font-semibold text-orange-700 dark:text-orange-400 mb-3 text-xl">Note on Overlay Testing</h4>
              <p className="text-xl">Users mentioned concerns about the overlay appearance, but this could not be demonstrated clearly with paper prototypes. This feedback was incorporated into the digital prototype development phase.</p>
            </div>
          </div>
        </div>
      </section>


      {/* Section 8: From Paper to Figma */}
      <section className="py-12">
        <div 
          ref={figmaSection.ref}
          className={`container mx-auto px-4 max-w-5xl scroll-animate scroll-fade-up ${figmaSection.isVisible ? 'visible' : ''}`}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-xl font-bold text-primary">5</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold ml-2">Digital Mockup</h2>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-8 mb-6">
            <h3 className="text-xl font-bold mb-4">Key Changes Applied:</h3>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-xl">
              {improvements.map((improvement, i) => (
                <p key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{improvement}</span>
                </p>
              ))}
            </div>
          </div>
          
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6 text-center">Digital Mockup Screens</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {mockupImages.map((img, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-border overflow-hidden cursor-pointer hover:opacity-80 transition-opacity aspect-square"
                  onClick={() => openLightbox(index, 'mockup')}
                >
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <p className="text-xl text-muted-foreground mt-6 text-center italic">
              Click on any image to view in full size
            </p>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-primary/10 border-t border-border">
        <div 
          ref={ctaSection.ref}
          className={`container mx-auto px-4 max-w-5xl text-center scroll-animate scroll-scale-in ${ctaSection.isVisible ? 'visible' : ''}`}
        >
          <TrendingUp className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Download ALPS Now!
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
Don't hesitate to improve your sitting posture and overall wellbeing at your workplace!          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/how-it-works">
              <Button size="lg" className="w-full sm:w-auto">
                Contact Us
              </Button>
            </Link>
            <Link to="/roadmap">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Download ALPS for Windows
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="container mx-auto px-4 max-w-5xl text-xl">
        <PageNavigation
          previous={{ title: "Design Ideation", path: "/our-journey/design-ideation" }}
        />
      </section>

      {/* Image Lightbox */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95 border-none" onKeyDown={handleKeyDown}>
          <div className="relative w-full h-full flex items-center justify-center min-h-[95vh]">
            {/* Close button */}
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 z-50 bg-white/90 hover:bg-white rounded-full p-2 transition-colors"
            >
              <X className="w-6 h-6 text-black" />
            </button>

            {/* Previous button */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-primary/80 hover:bg-primary rounded-full p-3 transition-colors"
            >
              <ChevronLeft className="w-8 h-8 text-white" />
            </button>

            {/* Image */}
            <div className="flex items-center justify-center p-8 w-full h-full">
              <img
                src={
                  activeImageCollection === 'initial'
                    ? initialPrototypeImages[currentImageIndex].src
                    : activeImageCollection === 'paper'
                    ? paperPrototypeImages[currentImageIndex].src
                    : mockupImages[currentImageIndex].src
                }
                alt={
                  activeImageCollection === 'initial'
                    ? initialPrototypeImages[currentImageIndex].alt
                    : activeImageCollection === 'paper'
                    ? paperPrototypeImages[currentImageIndex].alt
                    : mockupImages[currentImageIndex].alt
                }
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Next button */}
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-primary/80 hover:bg-primary rounded-full p-3 transition-colors"
            >
              <ChevronRight className="w-8 h-8 text-white" />
            </button>

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 px-4 py-2 rounded-full text-white text-xl">
              {currentImageIndex + 1} / {
                activeImageCollection === 'initial'
                  ? initialPrototypeImages.length
                  : activeImageCollection === 'paper'
                  ? paperPrototypeImages.length
                  : mockupImages.length
              }
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default PrototypeTesting;
