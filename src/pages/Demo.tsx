import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Lightbulb, Search } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

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

const Demo = () => {
  const journeyCardsSection = useScrollAnimation();
  const videoDemoSection = useScrollAnimation();
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <section className="flex-1 flex items-center justify-center bg-gradient-to-b from-background to-muted/20 pt-12">
        <div
          ref={videoDemoSection.ref}
          className={`container mx-auto px-4 text-center scroll-animate scroll-fade-up ${videoDemoSection.isVisible ? 'visible' : ''}`}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 animate-slide-up">
            ALPS <span className="text-primary">Video Demo</span>
          </h1>
          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Experience ALPS in action! Watch our demo video to see how our AI-powered posture coach works in real scenarios.
            </p>
            {/* Replace the below div with your actual video embed or player */}
            <div className="w-full h-96 bg-muted rounded-lg flex items-center justify-center border-2 border-primary/20 shadow-lg">
              <span className="text-2xl text-muted-foreground">[Video Demo Placeholder]</span>
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
      <Footer />
    </div>
  );
};

export default Demo;
