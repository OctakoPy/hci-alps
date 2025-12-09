import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Search, Lightbulb, CheckCircle, ArrowRight, FileEdit, Shield, Zap, Users, Target, AlertCircle, BellOff, Video, Bluetooth } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import problemSlouching from "@/assets/backpain.jpg";
import tooManyNotification from "@/assets/toomanynotification.jpg";
import heroGoodPosture from "@/assets/backbrace.jpg";
import featurePrivacy from "@/assets/watched.png";
import alpsCat from "@/assets/alps-cat-mascot.png";
import secure from "@/assets/secure.jpeg";
import contextualAI from "@/assets/contextualai.jpg";
import friendlyalpsCat from "@/assets/doublecat.png";
import goodPosture from "@/assets/alps-logo.png";

const OurJourneyIndex = () => {
  // Scroll animation hooks
  const timelineSection = useScrollAnimation();
  const abstractSection = useScrollAnimation();
  const problemSection = useScrollAnimation();
  const solutionSection = useScrollAnimation();
  const journeyCardsSection = useScrollAnimation();
  
  const journeyCards = [
    {
      icon: Search,
      title: "Design Research",
      headline: "Understanding the Problem",
      summary: "We performed interviews and observation to identify real pain points with existing solutions.",
      stats: [
        "16 participants interviewed",
        "8 key themes identified",
        "80% abandon wearables within 2 weeks"
      ],
      link: "/our-journey/design-research",
      cta: "View Research Process"
    },
    {
      icon: Lightbulb,
      title: "Design Ideation",
      headline: "Crafting the Solution",
      summary: "Through task analysis and iterative sketching, we developed three design concepts and selected the optimal approach.",
      stats: [
        "6 core tasks identified",
        "3 design sketches created",
        "2 detailed scenarios developed"
      ],
      link: "/our-journey/design-ideation",
      cta: "View Design Process"
    },
    {
      icon: CheckCircle,
      title: "Prototype & Testing",
      headline: "Validating Through Testing",
      summary: "Heuristic evaluation and usability testing with paper prototypes helped refine ALPS before digital development.",
      stats: [
        "13 usability issues identified",
        "9 heuristics evaluated",
        "100% of critical issues resolved"
      ],
      link: "/our-journey/prototype-testing",
      cta: "View Testing Results"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-12 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-16">
          <div className="grid md:grid-cols-3 gap-8 mb-12 items-center">
            {/* Left Column - 2/3 width */}
            <div className="md:col-span-2 text-center md:text-left">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
                AI Lifestyle Posture <span className="text-primary">Support Coach (ALPS)</span>
              </h1>
              <p className="text-2xl md:text-3xl text-muted-foreground animate-slide-up">
                A journey of user research, iterative design, and validation
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

      {/* Project Abstract Section */}
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

          </div>
        </div>
      </section>

      {/* Journey Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div 
            ref={journeyCardsSection.ref}
            className={`text-center mb-12 scroll-animate scroll-fade-up ${journeyCardsSection.isVisible ? 'visible' : ''}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-primary">Design </span> Journey
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {journeyCards.map((card, index) => (
              <Link
                key={index}
                to={card.link}
                className={`group bg-card border border-border rounded-lg p-8 hover:border-primary transition-all duration-300 hover:shadow-lg scroll-animate scroll-scale-in stagger-${index + 1} ${journeyCardsSection.isVisible ? 'visible' : ''}`}
              >
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <card.icon className="w-10 h-10 md:w-12 md:h-12 text-primary" />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {card.headline}
                </h3>
                
                <p className="text-muted-foreground text-lg md:text-xl mb-6 leading-relaxed">
                  {card.summary}
                </p>
                
                <div className="space-y-3 mb-6">
                  {card.stats.map((stat, i) => (
                    <div key={i} className="flex items-center gap-3 text-base md:text-lg">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="font-medium">{stat}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center gap-2 text-primary text-lg font-semibold group-hover:gap-3 transition-all">
                  {card.cta}
                  <ArrowRight className="w-5 h-5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Presentation Link Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-primary/10 border-y border-border">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Want to See Everything in <span className="text-primary">One Place?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              View our complete design journey from research to final prototype in a single, comprehensive presentation.
            </p>
            <Link 
              to="/presentation" 
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-hover transition-colors"
            >
              View Complete Presentation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>



      <Footer />
    </div>
  );
};

export default OurJourneyIndex;
