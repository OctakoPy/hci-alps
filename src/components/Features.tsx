import { Target, Bell, Calendar, Dumbbell, TrendingUp, Shield, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const features = [
  {
    icon: Target,
    title: "Real-Time Monitoring",
    description: "AI-powered detection that understands YOUR body",
    details: [
      "Learns your natural posture baseline",
      "Distinguishes between natural movements and poor posture",
      "Predictive alerts before you slouch too far",
      "Works from any camera angle",
    ],
  },
  {
    icon: Bell,
    title: "Adaptive Notifications",
    description: "Notifications that adapt to what you're doing",
    details: [
      "Full screen overlay for immediate attention",
      "Subtle pop-ups during focused work",
      "Banner notifications for minimal disruption",
      "Preview all styles before choosing",
    ],
  },
  {
    icon: Calendar,
    title: "Contextual Intelligence",
    description: "ALPS knows when NOT to interrupt",
    details: [
      "Automatically detects meeting apps (Zoom, Teams, etc.)",
      "Silent during presentations and screen recordings",
      "Optional subtle side notifications even during DND",
      "Customize which apps trigger DND mode",
    ],
  },
  {
    icon: Dumbbell,
    title: "Guided Recovery Sessions",
    description: "Built-in stretch routines with video guidance",
    details: [
      "Smart break timing based on your work patterns",
      "Quick 30-second stretches or longer breaks",
      "Video demonstrations for each exercise",
      "Lock screen option to enforce breaks",
    ],
  },
  {
    icon: TrendingUp,
    title: "See Your Improvement",
    description: "Beautiful analytics that motivate you",
    details: [
      "Daily, weekly, and monthly posture reports",
      "Time-lapse videos of your posture journey",
      "Exportable reports (PDF/CSV)",
      "Track pain reduction over time",
    ],
  },
  {
    icon: Shield,
    title: "Your Data Stays Yours",
    description: "On-device processing, zero cloud uploads",
    details: [
      "All video processing happens locally",
      "No video or images stored or transmitted",
      "No account required for basic features",
      "Optional anonymous usage analytics only",
    ],
  },
];

const Features = () => {
  // Scroll animation hooks
  const headerSection = useScrollAnimation();
  const cardsSection = useScrollAnimation();
  const ctaSection = useScrollAnimation();
  
  return (
    <section className="py-16 md:py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div 
          ref={headerSection.ref}
          className={`text-center mb-16 scroll-animate scroll-fade-up ${headerSection.isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">
            The <span className="text-primary">Key Features</span> We Provide
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful features that users want to help them break bad habits and build a strong posture
          </p>
        </div>
        
        <div 
          ref={cardsSection.ref}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <Card 
              key={index}
              className={`hover:shadow-lg transition-shadow group scroll-animate scroll-fade-up stagger-${(index % 3) + 1} ${cardsSection.isVisible ? 'visible' : ''}`}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Journey CTA */}
        <div 
          ref={ctaSection.ref}
          className={`mt-16 text-center scroll-animate scroll-scale-in ${ctaSection.isVisible ? 'visible' : ''}`}
        >
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Curious How We Identified These Features?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Dive into our design journey to see the research, ideation, and testing that shaped ALPS
            </p>
            <Button size="lg" className="text-lg px-8 group" asChild>
              <Link to="/our-journey">
                Check Out Our Journey
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
