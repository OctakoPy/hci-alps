import { Coffee, BellOff, Video, Bluetooth } from "lucide-react";
import problemSlouching from "@/assets/problem-slouching.png";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const problems = [
  {
    icon: Coffee,
    title: "The 3 PM Slump",
    description: "You started the day sitting perfectly. Now you're practically horizontal and your neck is screaming.",
    color: "text-warning",
  },
  {
    icon: BellOff,
    title: "The Ignored App",
    description: "You've tried using posture apps but after hundreds of annoying notifications you've learnt to ignore them all.",
    color: "text-error",
  },
  {
    icon: Video,
    title: "The Post-Meeting Neck Pain",
    description: "Two hours of video calls later, and you can barely turn your head. There has to be a better way.",
    color: "text-secondary",
  },
  {
    icon: Bluetooth,
    title: "The Uncomfortable Wearable",
    description: "That posture sensor seemed great... until you had to charge it again, and it kept giving false alerts.",
    color: "text-muted-foreground",
  },
];

const ProblemSection = () => {
  // Scroll animation hooks
  const headerSection = useScrollAnimation();
  const cardsSection = useScrollAnimation();
  const statsSection = useScrollAnimation();
  
  return (
    <section className="py-8 md:py-10 bg-muted/30">
      <div className="container mx-auto px-4">
        <div 
          ref={headerSection.ref}
          className={`text-center mb-12 scroll-animate scroll-fade-up ${headerSection.isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">
            The <span className="text-primary">Problem</span> We Are Solving
          </h2>
          <p className="text-lg text-center text-muted-foreground max-w-2xl mx-auto">
Does any of this sound familiar?
          </p>
        </div>
        
        <div 
          ref={cardsSection.ref}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6"
        >
          {problems.map((problem, index) => (
            <div 
              key={index}
              className={`bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow scroll-animate scroll-fade-up stagger-${index + 1} ${cardsSection.isVisible ? 'visible' : ''}`}
            >
              <problem.icon className={`h-12 w-12 ${problem.color} mb-4`} />
              <h3 className="text-xl font-semibold mb-2">{problem.title}</h3>
              <p className="text-muted-foreground">{problem.description}</p>
            </div>
          ))}
        </div>

          <p className="text-lg text-center text-muted-foreground max-w-2xl mx-auto py-8">
            You're not alone. 100% of office workers we interviewed struggle with at least one of these issues every day.
          </p>
        
        {/* Statistics */}
        <div 
          ref={statsSection.ref}
          className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className={`text-center scroll-animate scroll-scale-in stagger-1 ${statsSection.isVisible ? 'visible' : ''}`}>
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">87%</div>
            <p className="text-muted-foreground">of desk workers experience bad back or neck pain</p>
          </div>
          <div className={`text-center scroll-animate scroll-scale-in stagger-2 ${statsSection.isVisible ? 'visible' : ''}`}>
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">&lt;20%</div>
            <p className="text-muted-foreground">long-term adoption rate of current solutions</p>
          </div>
          <div className={`text-center scroll-animate scroll-scale-in stagger-3 ${statsSection.isVisible ? 'visible' : ''}`}>
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">$Millions</div>
            <p className="text-muted-foreground">lost in productivity due to poor posture</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
