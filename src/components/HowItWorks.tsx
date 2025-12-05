import { Camera, Brain, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import alpsCat from "@/assets/alps-cat-mascot.png";
import featurePrivacy from "@/assets/feature-privacy.png";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const steps = [
  {
    icon: Camera,
    title: "Smart Monitoring",
    description: "ALPS uses your webcam to track your posture in real-time, but don't worry! All processing happens on your device so your video never leaves your computer.",
    image: featurePrivacy,
  },
  {
    icon: Brain,
    title: "Intelligent Detection",
    description: "Our AI distinguishes between natural movements (like looking at documents) and actual poor posture which means no false alerts! ALPS also has Contextual Intellgence so it will not raise alerts during meetings or other Do Not Disturb Applications.",
    highlight: true,
  },
  {
    icon: MessageCircle,
    title: "Adaptive Feedback",
    description: "Get cute, context-aware reminders exactly when you need them. The feedback is customisable to your preferences, and users praise our approach for helping them break bad posture habits*",
    image: alpsCat,
  },
];

const HowItWorks = () => {
  // Scroll animation hooks
  const headerSection = useScrollAnimation();
  const step1Section = useScrollAnimation();
  const step2Section = useScrollAnimation();
  const step3Section = useScrollAnimation();
  
  const stepSections = [step1Section, step2Section, step3Section];
  
  return (
    <section className="py-16 md:py-12">
      <div className="container mx-auto px-4">
        <div 
          ref={headerSection.ref}
          className={`text-center mb-16 scroll-animate scroll-fade-up ${headerSection.isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-2">
            Our Solution: <span className="text-primary">ALPS</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
          <span className="text-primary">(Coming September 2026)</span>
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to better posture, powered by Advanced AI and Contextual Intelligence
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto space-y-8 md:space-y-12">
          {steps.map((step, index) => (
            <div 
              key={index}
              ref={stepSections[index].ref}
              className={`grid lg:grid-cols-12 gap-6 lg:gap-10 items-center scroll-animate scroll-fade-up ${stepSections[index].isVisible ? 'visible' : ''}`}
            >
              {/* Content */}
              <div className={`lg:col-span-6 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="max-w-lg">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg gradient-hero mb-3">
                    <step.icon className="h-5 w-5 text-white" />
                  </div>
                  
                  <div className="text-xs font-semibold text-primary mb-1.5 tracking-wide">
                    STEP {index + 1}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
              
              
              {/* Visual */}
              <div className={`lg:col-span-6 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                {step.image ? (
                  <div className="relative group">
                    <div className="absolute inset-0 gradient-hero opacity-20 blur-2xl rounded-full transform group-hover:scale-110 transition-transform duration-500" />
                    <div className="relative bg-gradient-to-br from-card to-secondary/5 rounded-2xl p-4 md:p-6 shadow-lg border border-border/50">
                      <img 
                        src={step.image} 
                        alt={step.title}
                        className="w-full h-auto max-w-[14rem] mx-auto drop-shadow-xl"
                      />
                    </div>
                  </div>
                  
                ) : (
                  <div className="relative group">
                    <div className="absolute inset-0 gradient-hero opacity-20 blur-2xl rounded-full transform group-hover:scale-110 transition-transform duration-500" />
                    <div className="relative bg-gradient-to-br from-secondary/30 to-primary/30 rounded-2xl p-8 md:p-10 aspect-square flex items-center justify-center max-w-[16rem] mx-auto">
                      <step.icon className="h-20 w-20 md:h-24 md:w-24 text-primary drop-shadow-lg" />
                    </div>
                  </div>
                )}
                
              </div>
              
            </div>
            
          ))}

        </div>
                            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            *according to feedback from early usability testing
          </p>
          <div className="flex justify-center mt-12">
            <Button size="lg" className="text-lg px-8 group" asChild>
              <Link to="/how-it-works" onClick={() => window.scrollTo(0, 0)}>
                Learn More About ALPS
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
      </div>
    </section>
  );
};

export default HowItWorks;
