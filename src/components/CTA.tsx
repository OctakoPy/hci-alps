import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Check } from "lucide-react";
import alpsCat from "@/assets/alps-cat-cta.png";
import WaitlistForm from "./WaitlistForm";
import { useState } from "react";

const CTA = () => {
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  
  return (
    <>
      <WaitlistForm open={waitlistOpen} onOpenChange={setWaitlistOpen} />
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl gradient-hero p-12 md:p-16">
          {/* Background Cat */}
          <div className="absolute -right-6 bottom-0 hidden lg:block">
            <img 
              src={alpsCat} 
              alt="ALPS Cat"
              className="w-94 h-74"
            />
          </div>
          
          <div className="relative z-10 max-w-2xl">
            <div className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
              <p className="text-sm font-semibold text-white">🚀 Launching September 2026</p>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Be First to Experience ALPS
            </h2>
            
            <p className="text-xl text-white/90 mb-8">
              Join the waitlist for early access to AI-powered posture coaching. Reserve your spot for September 2026 launch.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 group"
                onClick={() => setWaitlistOpen(true)}
              >
                Join Waitlist
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white/50 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm text-lg px-8"
              >
                <Play className="mr-2 h-5 w-5" />
                View Prototype Demo
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-2 text-white">
                <Check className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm">Early bird pricing</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Check className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm">Mac & Windows</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Check className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm">Beta access</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Check className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm">Privacy first</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default CTA;
