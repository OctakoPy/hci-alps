import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Check } from "lucide-react";
import { Link } from "react-router-dom";
import alpsCat from "@/assets/alps-cat-mascot.png";
import heroPosture from "@/assets/hero-good-posture.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 gradient-subtle -z-10" />
      
      <div className="container mx-auto px-4 py-16 md:py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                <span className="text-sm font-medium text-primary">AI-Powered Posture Coaching</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full">
                <span className="text-sm font-semibold">🚀 Launching September 2026</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight">
              Your AI Posture Coach That{" "}
              <span className="text-primary">Actually Works</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              Meet ALPS: Adaptive, private, and non-intrusive AI coaching that learns your body and respects your workflow
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 group" asChild>
                <Link to="/roadmap">
                  Development Progress
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                <Link to="/how-it-works#demo">
                  <Play className="mr-2 h-5 w-5" />
                  Watch 60-Second Demo
                </Link>
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-2">
                <Check className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">No wearables needed</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Your data stays local</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Works on any laptop</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Cute cat animations</span>
              </div>
            </div>
          </div>
          
          {/* Right Column - Visual */}
          <div className="relative animate-slide-in-right">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={heroPosture} 
                alt="Person with perfect posture at desk"
                className="w-full h-auto"
              />
              
              {/* Floating Cat Mascot */}
              <div className="absolute bottom-8 right-8 animate-float">
                <div className="bg-card rounded-2xl p-4 shadow-glow">
                  <img 
                    src={alpsCat} 
                    alt="ALPS Cat Mascot"
                    className="w-20 h-20 md:w-24 md:h-24"
                  />
                </div>
              </div>
              
              {/* Posture Status Badge */}
              <div className="absolute top-8 left-8 bg-success/90 backdrop-blur-sm text-white px-4 py-2 rounded-full flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                <span className="text-sm font-medium">Great Posture!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
