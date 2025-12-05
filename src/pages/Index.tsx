import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Search, Lightbulb, CheckCircle, ArrowRight, FileEdit, Shield, Zap, Users, Target, AlertCircle, BellOff, Video, Bluetooth, MessageSquare, Eye, Timer, Settings, TrendingUp, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";

// Import all images
import problemSlouching from "@/assets/backpain.jpg";
import tooManyNotification from "@/assets/toomanynotification.jpg";
import heroGoodPosture from "@/assets/backbrace.jpg";
import featurePrivacy from "@/assets/watched.png";
import alpsCat from "@/assets/alps-cat-mascot.png";
import secure from "@/assets/secure.jpeg";
import contextualAI from "@/assets/contextualai.jpg";
import friendlyalpsCat from "@/assets/doublecat.png";
import goodPosture from "@/assets/alps-logo.png";
import interview from "@/assets/interview.png";

const Index = () => {
  // Scroll animation hooks for all sections
  const heroSection = useScrollAnimation();
  const timelineSection = useScrollAnimation();
  const abstractSection = useScrollAnimation();
  const problemSection = useScrollAnimation();
  const solutionSection = useScrollAnimation();
  const researchApproachSection = useScrollAnimation();
  const findingsSection = useScrollAnimation();
  const tasksSection = useScrollAnimation();
  const designsSection = useScrollAnimation();
  const scenariosSection = useScrollAnimation();
  const prototypeTimelineSection = useScrollAnimation();
  const initialSection = useScrollAnimation();
  const heuristicsSection = useScrollAnimation();
  const paperSection = useScrollAnimation();
  const userTestingSection = useScrollAnimation();
  const figmaSection = useScrollAnimation();
  const ctaSection = useScrollAnimation();

  // State for lightboxes
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeImageCollection, setActiveImageCollection] = useState<'initial' | 'paper' | 'mockup' | 'storyboard1' | 'storyboard2'>('initial');
  const [designSketchOpen, setDesignSketchOpen] = useState(false);
  const [currentDesignSketch, setCurrentDesignSketch] = useState(1);

  // Image collections
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

  // Research findings themes
  const themes = [
    {
      icon: Zap,
      title: "AI Integration Opportunities",
      image: heroGoodPosture,
      finding: "Users want AI that learns their body and habits, delivering smart reminders only when needed.",
      insight: "AI should distinguish between natural movements and poor posture."
    },
    {
      icon: Settings,
      title: "Feedback Preferences",
      image: heroGoodPosture,
      finding: "Divided preferences—some want direct alerts; others prefer subtle cues.",
      insight: "One-size-fits-all won't work. ALPS needs customisable notification styles."
    },
    {
      icon: Eye,
      title: "Context-Awareness Needed",
      image: problemSlouching,
      finding: "Overlays acceptable during normal work but NOT during meetings or presentations.",
      insight: "ALPS must detect meetings and adjust accordingly."
    },
    {
      icon: Shield,
      title: "Adoption Conditions",
      image: heroGoodPosture,
      finding: "Users will adopt if solution is accurate, non-nagging, and privacy-respecting.",
      insight: "Privacy and accuracy are non-negotiable."
    },
  ];

  // Core tasks for ideation
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

  // Design concepts
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

  // Lightbox functions
  const openLightbox = (index: number, collection: 'initial' | 'paper' | 'mockup' | 'storyboard1' | 'storyboard2') => {
    setCurrentImageIndex(index);
    setActiveImageCollection(collection);
    setLightboxOpen(true);
  };

  const openDesignSketch = (designNum: number) => {
    setCurrentDesignSketch(designNum);
    setDesignSketchOpen(true);
  };

  const getCurrentImages = () => {
    switch (activeImageCollection) {
      case 'initial':
        return initialPrototypeImages;
      case 'paper':
        return paperPrototypeImages;
      case 'mockup':
        return mockupImages;
      case 'storyboard1':
        return storyboard1Images;
      case 'storyboard2':
        return storyboard2Images;
      default:
        return initialPrototypeImages;
    }
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

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-12 bg-gradient-to-b from-background to-muted/20">
        <div 
          ref={heroSection.ref}
          className={`container mx-auto px-16 scroll-animate scroll-fade-up ${heroSection.isVisible ? 'visible' : ''}`}
        >
          <div className="grid md:grid-cols-3 gap-8 mb-12 items-center">
            {/* Left Column - 2/3 width */}
            <div className="md:col-span-2 text-center md:text-left">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
                AI Lifestyle Posture <span className="text-primary">Support Coach (ALPS)</span>
              </h1>
              <p className="text-2xl md:text-3xl text-muted-foreground animate-slide-up">
                Complete Design Journey Presentation
              </p>
            </div>

            {/* Right Column - 1/3 width */}
            <div className="md:col-span-1 animate-slide-in-right">
              <img 
                src={alpsCat} 
                alt="ALPS Cat Mascot" 
                className="w-full h-auto max-w-md mx-auto drop-shadow-2xl"
              />
            </div>
          </div>
          
          {/* Timeline Graphic - Centered below */}
          <div 
            ref={timelineSection.ref}
            className={`flex items-center justify-center gap-3 md:gap-6 text-base md:text-lg flex-wrap scroll-animate scroll-fade-up ${timelineSection.isVisible ? 'visible' : ''}`}
          >
            <div className="text-center">
              <div className="font-semibold mb-2 text-lg md:text-xl">Research</div>
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mx-auto">
                <Search className="w-8 h-8 md:w-10 md:h-10 text-primary" />
              </div>
            </div>
            <ArrowRight className="text-muted-foreground hidden md:block w-8 h-8" />
            <div className="text-center">
              <div className="font-semibold mb-2 text-lg md:text-xl">Ideation</div>
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mx-auto">
                <Lightbulb className="w-8 h-8 md:w-10 md:h-10 text-primary" />
              </div>
            </div>
            <ArrowRight className="text-muted-foreground hidden md:block w-8 h-8" />
            <div className="text-center">
              <div className="font-semibold mb-2 text-lg md:text-xl">Prototyping</div>
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mx-auto">
                <FileEdit className="w-8 h-8 md:w-10 md:h-10 text-primary" />
              </div>
            </div>
            <ArrowRight className="text-muted-foreground hidden md:block w-8 h-8" />
            <div className="text-center">
              <div className="font-semibold mb-2 text-lg md:text-xl">Testing</div>
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="pt-24 py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div 
            ref={abstractSection.ref}
            className={`max-w-6xl mx-auto scroll-animate scroll-fade-up ${abstractSection.isVisible ? 'visible' : ''}`}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12">
              The <span className="text-primary">Problem</span> We Identified
            </h2>

            {/* The Problem */}
            <div 
              ref={problemSection.ref}
              className={`scroll-animate scroll-scale-in ${problemSection.isVisible ? 'visible' : ''} mb-8`}
            >
              <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {/* Problem 1: Unintelligent Notifications */}
                <div className="bg-card border border-border rounded-lg p-8 hover:border-primary transition-all">
                  <img src={tooManyNotification} alt="Annoying notifications" className="w-full h-48 object-cover rounded-md mb-6 opacity-70" />
                  <h4 className="text-2xl md:text-3xl font-bold mb-4"><span className="text-primary">Unintelligent</span> App Notifications</h4>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
                    Generic reminder apps interrupt users' workflows at poor times, such as during meetings. This causes users to feel frustrated and ignore or disable the reminders entirely.
                  </p>
                  <div className="text-center">
                    <div className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold text-base rounded-full border border-primary/20">
                      Disruptive
                    </div>
                  </div>
                </div>

                {/* Problem 2: Abandoned Wearables */}
                <div className="bg-card border border-border rounded-lg p-8 hover:border-primary transition-all">
                  <img src={heroGoodPosture} alt="Uncomfortable wearables" className="w-full h-48 object-cover rounded-md mb-6 opacity-60" />
                  <h4 className="text-2xl md:text-3xl font-bold mb-4">One Size Fits All <span className="text-primary">Doesn't Work</span></h4>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
                    Competitor solutions have high abandonment rates due to lack of personalisation and inconvenience. For example, 80% of users stop using posture wearables within one month.
                  </p>
                  <div className="text-center">
                    <div className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold text-base rounded-full border border-primary/20">
                      Impersonal
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 mt-16">
              Our Solution: <span className="text-primary">ALPS</span>
            </h2>

            {/* Our Solution */}
            <div 
              ref={solutionSection.ref}
              className={`scroll-animate scroll-scale-in ${solutionSection.isVisible ? 'visible' : ''} mb-8`}
            >
              <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {/* Solution 1: Contextual Intelligence */}
                <div className="bg-card border border-border rounded-lg p-8 hover:border-primary transition-all">
                  <img src={contextualAI} alt="Contextual AI" className="w-full h-48 object-cover rounded-md mb-6 opacity-70" />
                  <h4 className="text-2xl md:text-3xl font-bold mb-4"><span className="text-primary">Contextual</span> Intelligence</h4>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
                    Smart AI distinguishes between slouching and intentional leaning and never interrupts during calls or presentations.
                  </p>
                  <div className="text-center">
                    <div className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold text-base rounded-full border border-primary/20">
                      Non-Disruptive
                    </div>
                  </div>
                </div>

                {/* Solution 2: Easy Setup */}
                <div className="bg-card border border-border rounded-lg p-8 hover:border-primary transition-all">
                  <img src={friendlyalpsCat} alt="Easy setup" className="w-full h-48 object-cover rounded-md mb-6 opacity-60" />
                  <h4 className="text-2xl md:text-3xl font-bold mb-4"><span className="text-primary">Adaptable</span> and Convenient</h4>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
                    ALPS is customisable to your unique preferences and lifestyle. It runs silently as a software in the background and does not require wearables or complicated setup.
                  </p>
                  <div className="text-center">
                    <div className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold text-base rounded-full border border-primary/20">
                      Personalised
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Demo Section */}
            <div className="mt-16">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">ALPS <span className="text-primary">Video Demo</span></h2>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                  PLACEHOLDER FOR THE VIDEO
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Research Section */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">
            <span className="text-muted-foreground">1.</span> Design <span className="text-primary">Research</span>
          </h1>
          <p className="text-2xl text-muted-foreground mb-8 text-center">
            Qualitative research through observation and interviews
          </p>
          <div className="flex flex-wrap gap-6 text-lg justify-center mb-16">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span><strong>Conducted:</strong> November 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span><strong>Duration:</strong> 1 week</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span><strong>Participants:</strong> 16</span>
            </div>
          </div>

          {/* Research Approach */}
          <div 
            ref={researchApproachSection.ref}
            className={`mb-16 scroll-animate scroll-fade-up ${researchApproachSection.isVisible ? 'visible' : ''}`}
          >
            <div className="flex items-center gap-4 mb-8 justify-center">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center" style={{transform: 'translateY(2px)'}}>
                <span className="text-lg font-bold text-primary">1</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">Our Research Approach</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card border border-border rounded-lg p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Observation</h3>
                </div>
                
                <div className="mb-4 rounded-lg overflow-hidden border border-border">
                  <img src="/assets/group-project.jpg" alt="Observation research session" className="w-full h-48 object-cover" />
                </div>
                
                <ul className="space-y-4 text-muted-foreground text-lg">
                  <li><strong className="text-foreground text-xl">Participants:</strong> Students during 4-hour exams</li>
                  <li><strong className="text-foreground text-xl">What We Watched:</strong>
                    <ul className="ml-6 mt-3 space-y-2 text-base">
                      <li>• Posture changes over time</li>
                      <li>• Physical Discomfort</li>
                    </ul>
                  </li>
                </ul>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Interviews</h3>
                </div>
                
                <div className="mb-4 rounded-lg overflow-hidden border border-border">
                  <img src={interview} alt="Interview research session" className="w-full h-48 object-cover" />
                </div>
                
                <ul className="space-y-4 text-muted-foreground text-lg">
                  <li><strong className="text-foreground text-xl">Participants:</strong> 16 office workers & students</li>
                  <li><strong className="text-foreground text-xl">Key Topics:</strong>
                    <ul className="ml-6 mt-3 space-y-2 text-base">
                      <li>• Participants' current pain points</li>
                      <li>• Existing solutions</li>
                      <li>• User concerns, feedback and suggestions</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Findings */}
          <div 
            ref={findingsSection.ref}
            className={`mb-16 scroll-animate scroll-fade-up ${findingsSection.isVisible ? 'visible' : ''}`}
          >
            <div className="flex items-center gap-4 mb-8 justify-center">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center" style={{transform: 'translateY(2px)'}}>
                <span className="text-lg font-bold text-primary">2</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">4 Key Findings</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {themes.map((theme, index) => {
                const Icon = theme.icon;
                return (
                  <div key={index} className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold mt-2">{theme.title}</h3>
                    </div>
                    
                    <p className="text-muted-foreground mb-3 text-base">{theme.finding}</p>
                    
                    <div className="bg-primary/5 rounded-lg p-3 mt-auto">
                      <p className="text-xs font-semibold text-primary">💡 {theme.insight}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 mt-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-bold mb-6">How This Informed ALPS:</h3>
                  <ol className="space-y-4 list-decimal list-inside">
                    <li><strong>Adaptive AI</strong> that learns your body and work patterns</li>
                    <li><strong>Customisable notifications</strong> (full overlay, pop-up, or banner)</li>
                    <li><strong>Do Not Disturb mode</strong> that detects meetings automatically</li>
                    <li><strong>On-device processing</strong> for complete privacy</li>
                  </ol>
                </div>
                <div className="flex justify-center">
                  <img 
                    src="/assets/alps-cat-mascot.png" 
                    alt="ALPS Cat Mascot" 
                    className="w-full max-w-xs h-auto drop-shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Ideation Section */}
      <section className="py-16 border-b border-border bg-muted/10">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">
            <span className="text-muted-foreground">2.</span> Design <span className="text-primary">Ideation</span>
          </h1>
          <p className="text-2xl text-muted-foreground mb-16 text-center">
            Translating research into concrete tasks and design concepts
          </p>

          {/* Core Tasks */}
          <div 
            ref={tasksSection.ref}
            className={`mb-16 scroll-animate scroll-fade-up ${tasksSection.isVisible ? 'visible' : ''}`}
          >
            <div className="flex items-center gap-4 mb-6 justify-center">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center" style={{transform: 'translateY(2px)'}}>
                <span className="text-lg font-bold text-primary">1</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">6 Core Tasks</h2>
            </div>
            
            <p className="text-xl text-muted-foreground mb-8 text-center">
              Based on user research, we identified 6 essential tasks ALPS must support:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {tasks.map((task) => (
                <Card key={task.num}>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-lg font-bold text-primary">{task.num}</span>
                      </div>
                      <CardTitle className="text-xl">{task.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{task.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Design Concepts */}
          <div 
            ref={designsSection.ref}
            className={`mb-16 scroll-animate scroll-fade-up ${designsSection.isVisible ? 'visible' : ''}`}
          >
            <div className="flex items-center gap-4 mb-6 justify-center">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center" style={{transform: 'translateY(2px)'}}>
                <span className="text-lg font-bold text-primary">2</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">Three Design Sketches</h2>
            </div>
            
            <div className="space-y-8">
              {designs.map((design) => (
                <Card key={design.num} className={design.selected ? "border-primary border-2" : ""}>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-lg font-bold text-primary">{design.num}</span>
                        </div>
                        <CardTitle className="text-xl">{design.title}</CardTitle>
                      </div>
                      {design.selected && (
                        <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                          SELECTED
                        </div>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className={`grid md:grid-cols-3 gap-6 items-start ${design.num === 2 ? 'md:grid-flow-col-dense' : ''}`}>
                      <div className={`md:col-span-2 rounded-lg border border-border overflow-hidden cursor-pointer hover:opacity-80 transition-opacity ${design.num === 2 ? 'md:order-2' : ''}`}
                           onClick={() => openDesignSketch(design.num)}>
                        <img 
                          src={`/assets/designsketch${design.num}.jpg`} 
                          alt={`Design Sketch ${design.num} - ${design.title}`} 
                          className="w-full h-auto object-cover" 
                        />
                      </div>
                      
                      <div className={`${design.num === 2 ? 'md:order-1' : ''}`}>
                        <h4 className="font-semibold mb-3">Tasks Included:</h4>
                        <ul className="space-y-2 text-sm">
                          {design.tasksIncluded.map((task, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                              <span>{task}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    {design.selected && design.reason && (
                      <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-4">
                        <p className="text-sm"><strong>Why this design was selected:</strong> {design.reason}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* User Scenarios */}
          <div 
            ref={scenariosSection.ref}
            className={`scroll-animate scroll-fade-up ${scenariosSection.isVisible ? 'visible' : ''}`}
          >
            <div className="flex items-center gap-4 mb-6 justify-center">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center" style={{transform: 'translateY(2px)'}}>
                <span className="text-lg font-bold text-primary">3</span>
              </div>
              <h2 className="text-3xl font-bold">User Scenarios & Storyboards</h2>
            </div>
            
            <div className="space-y-8">
              {/* Scenario 1 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span className="text-primary">Scenario #1:</span> Daniel, Financial Analyst
                  </CardTitle>
                  <CardDescription>ALPS monitors, detects and corrects bad posture during long hours of computer work.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Storyboard:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {storyboard1Images.map((img, index) => (
                        <div key={index} className="relative rounded-lg overflow-hidden border border-border cursor-pointer hover:opacity-80 transition-opacity"
                             onClick={() => openLightbox(index, 'storyboard1')}>
                          <img src={img.src} alt={img.alt} className="w-full h-48 object-cover" />
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Scenario 2 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span className="text-primary">Scenario #2:</span> Rachel, Project Manager
                  </CardTitle>
                  <CardDescription>Customising ALPS to avoid interruptions during frequent video calls.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Storyboard:</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {storyboard2Images.map((img, index) => (
                        <div key={index} className="relative rounded-lg overflow-hidden border border-border cursor-pointer hover:opacity-80 transition-opacity"
                             onClick={() => openLightbox(index, 'storyboard2')}>
                          <img src={img.src} alt={img.alt} className="w-full h-32 object-cover" />
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Prototype & Testing Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">
            <span className="text-muted-foreground">3.</span> Prototype &  <span className="text-primary">Testing</span>
          </h1>
          
          {/* Prototype Timeline */}
          <div 
            ref={prototypeTimelineSection.ref}
            className={`flex items-center justify-between gap-4 pt-8 mb-16 text-base md:text-lg scroll-animate scroll-fade-up ${prototypeTimelineSection.isVisible ? 'visible' : ''}`}
          >
            <div className="text-center flex-1">
              <div className="font-semibold mb-2 text-lg md:text-xl">Initial Paper Prototype</div>
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mx-auto">
                <FileEdit className="w-6 h-6 md:w-8 md:h-8 text-primary" />
              </div>
            </div>
            <ArrowRight className="text-muted-foreground w-6 h-6 md:w-8 md:h-8 flex-shrink-0" />
            <div className="text-center flex-1">
              <div className="font-semibold mb-2 text-lg md:text-xl">Heuristics Evaluation</div>
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mx-auto">
                <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-primary" />
              </div>
            </div>
            <ArrowRight className="text-muted-foreground w-6 h-6 md:w-8 md:h-8 flex-shrink-0" />
            <div className="text-center flex-1">
              <div className="font-semibold mb-2 text-lg md:text-xl">Final Paper Prototype</div>
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mx-auto">
                <FileEdit className="w-6 h-6 md:w-8 md:h-8 text-primary" />
              </div>
            </div>
            <ArrowRight className="text-muted-foreground w-6 h-6 md:w-8 md:h-8 flex-shrink-0" />
            <div className="text-center flex-1">
              <div className="font-semibold mb-2 text-lg md:text-xl">User <br></br>Testing</div>
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mx-auto">
                <Users className="w-6 h-6 md:w-8 md:h-8 text-primary" />
              </div>
            </div>
            <ArrowRight className="text-muted-foreground w-6 h-6 md:w-8 md:h-8 flex-shrink-0" />
            <div className="text-center flex-1">
              <div className="font-semibold mb-2 text-lg md:text-xl">Digital <br></br> Mockup</div>
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mx-auto">
                <Target className="w-6 h-6 md:w-8 md:h-8 text-primary" />
              </div>
            </div>
          </div>

          {/* Initial Prototypes */}
          <div 
            ref={initialSection.ref}
            className={`mb-16 scroll-animate scroll-fade-up ${initialSection.isVisible ? 'visible' : ''}`}
          >
            <div className="flex items-center gap-4 mb-6 justify-center">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center" style={{transform: 'translateY(2px)'}}>
                <span className="text-lg font-bold text-primary">1</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">Initial Paper Prototypes</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {initialPrototypeImages.map((img, index) => (
                <div key={index} className="relative rounded-lg overflow-hidden border border-border cursor-pointer hover:opacity-80 transition-opacity"
                     onClick={() => openLightbox(index, 'initial')}>
                  <img src={img.src} alt={img.alt} className="w-full h-64 object-cover" />
                </div>
              ))}
            </div>
            
            <p className="text-sm text-muted-foreground text-center italic">
              Click on any image to view in full size
            </p>
          </div>

          {/* Heuristics Summary */}
          <div 
            ref={heuristicsSection.ref}
            className={`mb-16 scroll-animate scroll-fade-up ${heuristicsSection.isVisible ? 'visible' : ''}`}
          >
            <div className="flex items-center gap-4 mb-6 justify-center">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center" style={{transform: 'translateY(2px)'}}>
                <span className="text-lg font-bold text-primary">2</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">Heuristic Evaluation Summary</h2>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-10 space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-6">Results Summary:</h3>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-red-50 dark:bg-red-950/20 rounded-lg">
                    <div className="text-3xl font-bold text-red-600 mb-2">4</div>
                    <div className="text-sm text-red-700 dark:text-red-300">Major Issues</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                    <div className="text-3xl font-bold text-orange-600 mb-2">7</div>
                    <div className="text-sm text-orange-700 dark:text-orange-300">Moderate Issues</div>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg">
                    <div className="text-3xl font-bold text-yellow-600 mb-2">2</div>
                    <div className="text-sm text-yellow-700 dark:text-yellow-300">Minor Issues</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-4">
                <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">✅ Outcome</h4>
                <p className="text-green-700 dark:text-green-300">All 13 identified issues were addressed in subsequent iterations, focusing on consistency, user control, and system feedback.</p>
              </div>
            </div>
          </div>

          {/* Paper Prototypes */}
          <div 
            ref={paperSection.ref}
            className={`mb-16 scroll-animate scroll-fade-up ${paperSection.isVisible ? 'visible' : ''}`}
          >
            <div className="flex items-center gap-4 mb-6 justify-center">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center" style={{transform: 'translateY(2px)'}}>
                <span className="text-lg font-bold text-primary">3</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">Final Paper Prototype</h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
              {paperPrototypeImages.map((img, index) => (
                <div key={index} className="relative rounded-lg overflow-hidden border border-border cursor-pointer hover:opacity-80 transition-opacity"
                     onClick={() => openLightbox(index, 'paper')}>
                  <img src={img.src} alt={img.alt} className="w-full h-32 object-cover" />
                </div>
              ))}
            </div>
            
            <p className="text-sm text-muted-foreground text-center italic">
              Click on any image to view in full size
            </p>
          </div>

          {/* User Testing Results */}
          <div 
            ref={userTestingSection.ref}
            className={`mb-16 scroll-animate scroll-fade-up ${userTestingSection.isVisible ? 'visible' : ''}`}
          >
            <div className="flex items-center gap-4 mb-6 justify-center">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center" style={{transform: 'translateY(2px)'}}>
                <span className="text-lg font-bold text-primary">4</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">User Testing Results</h2>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-xl font-bold mb-6">Tasks Tested:</h3>
              
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-2">Task 1</div>
                  <div className="text-sm text-blue-700 dark:text-blue-300">Posture Correction</div>
                </div>
                
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-2">Task 2</div>
                  <div className="text-sm text-blue-700 dark:text-blue-300">Settings Customisation</div>
                </div>
                
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-2">Task 3</div>
                  <div className="text-sm text-blue-700 dark:text-blue-300">Break Guidance</div>
                </div>
              </div>
              
              <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-6 mb-6">
                <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">✅ Success Rate</h4>
                <p className="text-green-700 dark:text-green-300">100% task completion rate across all 3 core tasks</p>
              </div>
              
              <div className="bg-orange-50 dark:bg-orange-950/20 rounded-lg p-6">
                <h4 className="font-bold text-orange-800 dark:text-orange-200 mb-2">⚠️ Key Insight</h4>
                <p className="text-orange-700 dark:text-orange-300">Users needed clearer navigation between settings screens</p>
              </div>
            </div>
          </div>

          {/* Digital Mockup */}
          <div 
            ref={figmaSection.ref}
            className={`scroll-animate scroll-fade-up ${figmaSection.isVisible ? 'visible' : ''}`}
          >
            <div className="flex items-center gap-4 mb-6 justify-center">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center" style={{transform: 'translateY(2px)'}}>
                <span className="text-lg font-bold text-primary">5</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">Digital Mockup</h2>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-8 mb-6">
              <h3 className="text-xl font-bold mb-4">Key Changes Applied:</h3>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Consistent cat mascot across all screens</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Standardized timer-based close buttons</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Added background running indicator</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Created smooth fade-in animations</span>
                </div>
              </div>
            </div>
            
            <div className="mb-12">
              <h3 className="text-xl font-bold mb-6 text-center">Final Digital Prototype:</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {mockupImages.map((img, index) => (
                  <div key={index} className="relative rounded-lg overflow-hidden border border-border cursor-pointer hover:opacity-80 transition-opacity"
                       onClick={() => openLightbox(index, 'mockup')}>
                    <img src={img.src} alt={img.alt} className="w-full h-48 object-cover" />
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-6 text-center italic">
                Click on any image to view in full size
              </p>
            </div>
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
            Complete Design Journey Presentation
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            From initial research insights to validated digital prototypes - the complete ALPS development story in one comprehensive presentation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/our-journey">View Individual Sections</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/">Back to Home</Link>
            </Button>
          </div>
        </div>
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

export default Index;
