import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import JourneyNav from "@/components/OurJourney/JourneyNav";
import PageNavigation from "@/components/OurJourney/PageNavigation";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Users, MessageSquare, Target, Lightbulb, AlertCircle, Zap, Eye, Shield, Timer, Settings, BellOff, CheckCircle, XCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import problemSlouching from "@/assets/problem-slouching.png";
import heroGoodPosture from "@/assets/hero-good-posture.jpg";
import interview from "@/assets/interview.png";

const DesignResearch = () => {
  // Scroll animation hooks
  const problemSection = useScrollAnimation();
  const approachSection = useScrollAnimation();
  const participantsSection = useScrollAnimation();
  const findingsSection = useScrollAnimation();
  const summarySection = useScrollAnimation();
  
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

  return (
    <div className="min-h-screen">
      <Navigation />
      <JourneyNav />
      
      {/* Header */}
      <section className="pt-16 pb-4 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-up">
            Design <span className="text-primary">Research</span>
          </h1>
          <p className="text-2xl text-muted-foreground mb-8 animate-slide-up">
            Qualitative research through observation and interviews
          </p>
          <div className="flex flex-wrap gap-6 text-xl animate-slide-up">
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
        </div>
      </section>

      {/* Section 1: Research Approach */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <div 
            ref={approachSection.ref}
            className={`flex items-center gap-3 mb-8 scroll-animate scroll-fade-up ${approachSection.isVisible ? 'visible' : ''}`}
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-lg font-bold text-primary">1</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold ml-2">Our Research Approach</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className={`bg-card border border-border rounded-lg p-8 scroll-animate scroll-fade-in-left ${approachSection.isVisible ? 'visible' : ''}`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Observation</h3>
              </div>
              {/* Observation Image */}
              <div className="mb-4 rounded-lg overflow-hidden border border-border">
                <img src="/assets/group-project.jpg" alt="Observation research session" className="w-full h-48 object-cover" />
              </div>
              <ul className="space-y-4 text-muted-foreground text-xl">
                <li><strong className="text-foreground text-xl">Participants:</strong> Students during 4-hour exams</li>
                <li><strong className="text-foreground text-xl">What We Watched:</strong>
                  <ul className="ml-6 mt-3 space-y-2 text-xl">
                    <li>• Posture changes over time</li>
                    <li>• Physical Discomfort</li>
                  </ul>
                </li>
              </ul>
            </div>
            
            <div className={`bg-card border border-border rounded-lg p-8 scroll-animate scroll-fade-in-right ${approachSection.isVisible ? 'visible' : ''}`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Interviews</h3>
              </div>
              {/* Interviews Image */}
              <div className="mb-4 rounded-lg overflow-hidden border border-border">
                <img src={interview} alt="Interview research session" className="w-full h-48 object-cover" />
              </div>
              <ul className="space-y-4 text-muted-foreground text-xl">
                <li><strong className="text-foreground text-xl">Participants:</strong> 16 office workers & students</li>
                <li><strong className="text-foreground text-xl">Key Topics:</strong>
                  <ul className="ml-6 mt-3 space-y-2 text-xl">
                    <li>• Participants' current pain points</li>
                    <li>• Existing solutions</li>
                    <li>• User concerns, feedback and suggestions</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Key Findings */}
      <section className="py-12 border-b border-border">
        <div 
          ref={findingsSection.ref}
          className={`container mx-auto px-4 max-w-5xl scroll-animate scroll-fade-up ${findingsSection.isVisible ? 'visible' : ''}`}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-xl font-bold text-primary">2</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold ml-2">4 Key Findings</h2>
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
                  <p className="text-muted-foreground mb-3 text-xl">{theme.finding}</p>
                  <div className="bg-primary/5 rounded-lg p-3 mt-auto">
                    <p className="text-xl font-semibold text-primary">💡 {theme.insight}</p>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 mt-8">
            <div className="grid md:grid-cols-6 gap-8 items-center">
              <div className="md:col-span-4">
                <h3 className="text-xl font-bold mb-6">How This Informed ALPS:</h3>
                <ol className="space-y-4 list-decimal list-inside text-xl">
                  <li><strong>Adaptive AI</strong> that learns your body and work patterns</li>
                  <li><strong>Customisable notifications</strong> (full overlay, pop-up, or banner)</li>
                  <li><strong>Do Not Disturb mode</strong> that detects meetings automatically</li>
                  <li><strong>On-device processing</strong> for complete privacy</li>
                </ol>
              </div>
              <div className="flex justify-center md:col-span-2">
                <img 
                  src="/assets/alps-cat-mascot.png" 
                  alt="ALPS Cat Mascot" 
                  className="w-full max-w-xs h-auto drop-shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="container mx-auto px-4 max-w-5xl text-xl">
        <PageNavigation
          previous={{ title: "Overview", path: "/our-journey" }}
          next={{ title: "Design Ideation", path: "/our-journey/design-ideation" }}
        />
      </section>

      <Footer />
    </div>
  );
};

export default DesignResearch;
