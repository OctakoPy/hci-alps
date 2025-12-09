import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import JourneyNav from "@/components/OurJourney/JourneyNav";
import PageNavigation from "@/components/OurJourney/PageNavigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, XCircle, AlertCircle, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const DesignIdeation = () => {
  // Scroll animation hooks
  const tasksSection = useScrollAnimation();
  const designsSection = useScrollAnimation();
  const comparisonSection = useScrollAnimation();
  const scenariosSection = useScrollAnimation();
  
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentStoryboard, setCurrentStoryboard] = useState<1 | 2>(1);
  const [designSketchOpen, setDesignSketchOpen] = useState(false);
  const [currentDesignSketch, setCurrentDesignSketch] = useState(1);

  const storyboard1Images = [
    { src: "/assets/storyboard1a.png", alt: "Storyboard 1a - Daniel working" },
    { src: "/assets/storyboard1b.png", alt: "Storyboard 1b - ALPS detection" },
    { src: "/assets/storyboard1c.png", alt: "Storyboard 1c - Posture corrected" }
  ];

  const storyboard2Images = [
    { src: "/assets/storyboard2a.jpg", alt: "Storyboard 2a" },
    { src: "/assets/storyboard2b.jpg", alt: "Storyboard 2b" },
    { src: "/assets/storyboard2c.jpg", alt: "Storyboard 2c" },
    { src: "/assets/storyboard2d.jpg", alt: "Storyboard 2d" },
    { src: "/assets/storyboard2e.jpg", alt: "Storyboard 2e" },
    { src: "/assets/storyboard2f.jpg", alt: "Storyboard 2f" },
    { src: "/assets/storyboard2g.jpg", alt: "Storyboard 2g" }
  ];

  const openLightbox = (storyboard: 1 | 2, index: number) => {
    setCurrentStoryboard(storyboard);
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const openDesignSketch = (designNum: number) => {
    setCurrentDesignSketch(designNum);
    setDesignSketchOpen(true);
  };

  const getCurrentImages = () => {
    return currentStoryboard === 1 ? storyboard1Images : storyboard2Images;
  };

  const goToNext = () => {
    const images = getCurrentImages();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    const images = getCurrentImages();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") goToNext();
    if (e.key === "ArrowLeft") goToPrevious();
    if (e.key === "Escape") setLightboxOpen(false);
  };
  const tasks = [
    {
      num: 1,
      title: "Posture Correction via Overlay",
      description: "Detecting poor posture and providing feedback to users."
    },
    {
      num: 2,
      title: "Customising Settings",
      description: "Allowing users to personalise notification styles and preferences."
    },
    {
      num: 3,
      title: "Taking Breaks/Stretching",
      description: "Encouraging healthy breaks and providing stretch routines."
    },
    {
      num: 4,
      title: "Generating Reports",
      description: "Providing insights into users' posture habits."
    },
    {
      num: 5,
      title: "Correcting False Reminders",
      description: "Allowing the user to flag false positives."
    },
    {
      num: 6,
      title: "Dismissing Reminders",
      description: "Letting the user close notifications while preventing accidental dismissal."
    }
  ];

  const designs = [
    {
      num: 1,
      title: "Focus on Customisation & Reporting",
      tasksIncluded: [
        "1. Posture Correction via Overlay",
        "2. Customising Settings",
        "4. Generating Reports"
      ],
      tasks: "Task 1, 2, 4"
    },
    {
      num: 2,
      title: "False Alert Correction & Lock Screen Breaks",
      tasksIncluded: [
        "1. Posture Correction via Overlay",
        "3. Taking Breaks/Stretching",
        "5. Correcting False Reminders",
        "6. Dismissing Reminders"
      ],
      tasks: "Task 1, 3, 5, 6"
    },
    {
      num: 3,
      title: "Video Guidance & Preview (SELECTED)",
      tasksIncluded: [
        "1. Posture Correction via Overlay",
        "2. Customising Settings",
        "3. Taking Breaks/Stretching",
        "6. Dismissing Reminders"
      ],
      tasks: "Task 1, 2, 3, 6",
      selected: true,
      reason: "Design #3 gives the best balance of the tasks required by users. It provides customisation, includes stretch guidance and uses videos to make posture correction more intuitive."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <JourneyNav />
      
      {/* Header */}
      <section className="pt-16 pb-12 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-up">
            Design <span className="text-primary">Ideation</span>
          </h1>
          <p className="text-2xl text-muted-foreground animate-slide-up">
            Translating research into concrete tasks and design concepts
          </p>
        </div>
      </section>

      {/* Section 1: Core Tasks */}
      <section className="py-12 border-b border-border">
        <div 
          ref={tasksSection.ref}
          className={`container mx-auto px-4 max-w-5xl scroll-animate scroll-fade-up ${tasksSection.isVisible ? 'visible' : ''}`}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-lg font-bold text-primary">1</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold ml-2">6 Core Tasks</h2>
          </div>
          
          <p className="text-xl text-muted-foreground mb-8">
            Based on user research, we identified 6 essential tasks ALPS must support:
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {tasks.map((task) => (
              <Card key={task.num}>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-bold text-primary text-xl">{task.num}</span>
                    </div>
                    <CardTitle className="text-xl">{task.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-xl">{task.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Design Concepts */}
      <section className="py-12 border-b border-border bg-muted/10">
        <div className="container mx-auto px-4 max-w-5xl">
          <div 
            ref={designsSection.ref}
            className={`flex items-center gap-3 mb-6 scroll-animate scroll-fade-up ${designsSection.isVisible ? 'visible' : ''}`}
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-lg font-bold text-primary">2</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold ml-2">Three Design Sketches</h2>
          </div>
          
          <div className={`space-y-8 scroll-animate scroll-fade-up ${designsSection.isVisible ? 'visible' : ''}`}>
            {designs.map((design) => (
              <Card key={design.num} className={design.selected ? "border-primary border-2" : ""}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="font-bold text-primary text-2xl">#{design.num}</span>
                      </div>
                      <CardTitle className="text-2xl">{design.title}</CardTitle>
                    </div>
                    {design.selected && (
                      <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-xl font-semibold">
                        ✓ SELECTED
                      </span>
                    )}
                  </div>

                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Design sketch image and content layout */}
                  <div className={`grid md:grid-cols-5 gap-6 items-start ${design.num === 2 ? 'md:grid-flow-col-dense' : ''}`}>
                    {/* Image */}
                    <div className={`md:col-span-3 rounded-lg border border-border overflow-hidden cursor-pointer hover:opacity-80 transition-opacity ${design.num === 2 ? 'md:order-2' : ''}`}
                         onClick={() => openDesignSketch(design.num)}>
                      <img 
                        src={`/assets/designsketch${design.num}.jpg`} 
                        alt={`Design Sketch ${design.num} - ${design.title}`} 
                        className="w-full h-auto object-cover" 
                      />
                    </div>
                    
                    {/* Content */}
                    <div className={`md:col-span-2 ${design.num === 2 ? 'md:order-1' : ''}`}>
                      <h4 className="font-semibold mb-4 text-xl">Tasks Included:</h4>
                      <div className="space-y-3">
                        {design.tasksIncluded.map((task, i) => (
                          <div key={i} className="flex items-start gap-3 text-xl">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span>{task}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {design.selected && design.reason && (
                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-5">
                      <h4 className="font-semibold text-primary mb-3 text-xl">Why We Selected This Design:</h4>
                      <p className="text-xl">{design.reason}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: User Scenarios */}
      <section className="py-12 bg-muted/10">
        <div 
          ref={scenariosSection.ref}
          className={`container mx-auto px-4 max-w-5xl scroll-animate scroll-fade-up ${scenariosSection.isVisible ? 'visible' : ''}`}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-lg font-bold text-primary">3</span>
            </div>
            <h2 className="text-3xl font-bold ml-2">User Scenarios & Storyboards</h2>
          </div>
          
          <div className="space-y-8">
            {/* Scenario 1 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <span className="text-primary">Scenario #1:</span> Daniel, Financial Analyst
                </CardTitle>
                <CardDescription className="text-xl">ALPS monitors, detects and corrects bad posture during long hours of computer work.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">

                
                <div className="space-y-4">
                  <h4 className="font-semibold text-xl">Storyboard:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {storyboard1Images.map((img, index) => (
                      <div 
                        key={index}
                        className="rounded-lg border border-border overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => openLightbox(1, index)}
                      >
                        <img src={img.src} alt={img.alt} className="w-full h-auto object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Scenario 2 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <span className="text-primary">Scenario #2:</span> Rachel, Project Manager
                </CardTitle>
                <CardDescription className="text-xl">Customising ALPS to avoid interruptions during frequent video calls.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">

                
                <div className="space-y-4">
                  <h4 className="font-semibold text-xl">Storyboard:</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {storyboard2Images.map((img, index) => (
                      <div 
                        key={index}
                        className="rounded-lg border border-border overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => openLightbox(2, index)}
                      >
                        <img src={img.src} alt={img.alt} className="w-full h-auto object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="container mx-auto px-4 max-w-5xl text-xl">
        <PageNavigation
          previous={{ title: "Design Research", path: "/our-journey/design-research" }}
          next={{ title: "Prototype & Testing", path: "/our-journey/prototype-testing" }}
        />
      </section>

      {/* Image Lightbox */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95 border-none" onKeyDown={handleKeyDown}>
          <div className="relative w-full h-full flex items-center justify-center">
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
              className="absolute left-4 z-50 bg-primary/80 hover:bg-primary rounded-full p-3 transition-colors"
            >
              <ChevronLeft className="w-8 h-8 text-white" />
            </button>

            {/* Image */}
            <div className="flex items-center justify-center p-8 w-full h-full">
              <img
                src={getCurrentImages()[currentImageIndex].src}
                alt={getCurrentImages()[currentImageIndex].alt}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Next button */}
            <button
              onClick={goToNext}
              className="absolute right-4 z-50 bg-primary/80 hover:bg-primary rounded-full p-3 transition-colors"
            >
              <ChevronRight className="w-8 h-8 text-white" />
            </button>

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 px-4 py-2 rounded-full text-white text-sm">
              {currentImageIndex + 1} / {getCurrentImages().length}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Design Sketch Lightbox */}
      <Dialog open={designSketchOpen} onOpenChange={setDesignSketchOpen}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95 border-none">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close button */}
            <button
              onClick={() => setDesignSketchOpen(false)}
              className="absolute top-4 right-4 z-50 bg-white/90 hover:bg-white rounded-full p-2 transition-colors"
            >
              <X className="w-6 h-6 text-black" />
            </button>

            {/* Image */}
            <div className="flex items-center justify-center p-8 w-full h-full">
              <img
                src={`/assets/designsketch${currentDesignSketch}.jpg`}
                alt={`Design Sketch ${currentDesignSketch}`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default DesignIdeation;
