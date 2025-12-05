import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Lock, Smile, Lightbulb, Users, FileText, Linkedin, Twitter, Github, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const About = () => {
  // Scroll animation hooks
  const storySection = useScrollAnimation();
  const valuesSection = useScrollAnimation();
  const teamSection = useScrollAnimation();
  
  const values = [
    {
      icon: Heart,
      title: "Human-First Design",
      description: "We start with real people and real problems. Every feature in ALPS comes from user research, not assumptions. Technology should serve humans, not the other way around."
    },
    {
      icon: Lock,
      title: "Privacy by Default",
      description: "Your data is yours. We believe in on-device processing, minimal data collection, and complete transparency. We never compromise privacy for convenience."
    },
    {
      icon: Smile,
      title: "Delightful Experiences",
      description: "Wellness tools shouldn't feel like punishment. We use friendly design, adaptive AI, and yes, cute cats to make healthy habits feel natural and even fun."
    },
    {
      icon: Lightbulb,
      title: "Continuous Innovation",
      description: "We're never satisfied with 'good enough.' We constantly refine our AI models, gather user feedback, and push the boundaries of what ergonomic technology can do."
    },
    {
      icon: Users,
      title: "Accessibility for All",
      description: "Everyone deserves good posture support, regardless of budget or tech skills. We design for simplicity, affordability, and inclusivity from day one."
    },
    {
      icon: FileText,
      title: "Evidence-Based",
      description: "Our solutions are grounded in research—both academic studies on ergonomics and our own user studies. We validate with physiotherapy professionals and iterate based on real results."
    }
  ];

  const futureVision = [
    {
      title: "ALPS Pro Features",
      items: [
        "Advanced analytics for teams and enterprises",
        "Integration with HR wellness programs",
        "Predictive health insights"
      ]
    },
    {
      title: "Expanded Wellness Suite",
      items: [
        "Eye strain prevention with screen brightness adaptation",
        "Break activity suggestions based on work patterns",
        "Holistic wellness coaching beyond posture"
      ]
    },
    {
      title: "Community & Research",
      items: [
        "Open-source research contributions",
        "Partnerships with physiotherapy organizations",
        "Community-driven feature development"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-12 pb-8 px-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-background">
        <div className="container mx-auto max-w-6xl">
          {/* Badge above columns */}
          <div className="text-center mb-8 animate-slide-up">
            <div className="inline-block px-6 py-2 bg-primary/10 border border-primary/20 rounded-full">
              <p className="text-sm font-semibold text-primary">🚀 In Development - Launching September 2026</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Column - Cat GIF */}
            <div className="flex items-center justify-center animate-slide-in-right">
              <img 
                src="/assets/cat entry.gif" 
                alt="Cat mascot animation" 
                className="w-full max-w-md rounded-2xl shadow-lg"
              />
            </div>

            {/* Right Column - Content */}
            <div className="text-center md:text-left animate-slide-up">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
                Meet ErgoAI
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                We're a team passionate about solving real problems with AI.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                ErgoAI was founded on a simple belief: technology should make our lives better, not hurt our bodies. 
                After years of watching desk workers suffer from bad posture, we decided to do something about it. 
                We're currently developing ALPS, our first step towards an automatic, intelligent, and actually enjoyable ergonomic tool.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 
            ref={storySection.ref}
            className={`text-4xl md:text-5xl font-bold mb-12 text-center text-foreground scroll-animate scroll-fade-up ${storySection.isVisible ? 'visible' : ''}`}
          >
            Our Story: From Pain Points to Solutions
          </h2>
          <div className={`grid md:grid-cols-2 gap-12 items-center scroll-animate scroll-fade-up ${storySection.isVisible ? 'visible' : ''}`}>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-foreground">The Problem We Saw</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Every day, millions of people spend hours at their desks, slowly damaging their bodies through bad posture that caused                   chronic neck pain, back problems, and repetitive strain injuries. 
                  The existing solutions were clearly failing.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-foreground">The Insight</h3>
                <p className="text-foreground/80 leading-relaxed">
                  We realized the problem wasn't awareness but consistency and adaptation. 
                  What if technology could coach you in real-time, learn your unique body and work patterns, and deliver feedback that 
                  actually fits into your life? What if posture correction could be as friendly and stress-free as possible?
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-foreground">The Solution</h3>
                <p className="text-foreground/80 leading-relaxed">
                  That's how ALPS was born. Using AI and human-centered design, we're building a posture coach 
                  that runs quietly in the background, respects your privacy, understands your context, and uses the most stress-reducing 
                  mascot we could think of—a cute cat. 
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-foreground">Our Mission</h3>
                <p className="text-foreground/80 leading-relaxed">
                  ErgoAI exists to make workplace wellness effortless through intelligent, ergonomic technology. We're committed to building AI-powered solutions that protect your health while respecting your privacy, 
                  autonomy, and workflow.
                </p>
              </div>
            </div>
            
            <div className="bg-muted/30 rounded-2xl p-8 border-2 border-primary/20">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-center mb-6 text-foreground">Our Journey</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 rounded-full bg-success"></div>
                    <div>
                      <p className="font-semibold text-foreground">Nov 2025: Project Begins</p>
                      <p className="text-sm text-muted-foreground">Research initiation and partnerships established</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                    <div>
                      <p className="font-semibold text-foreground">July-Aug 2026: Pilot Testing & Validation</p>
                      <p className="text-sm text-muted-foreground">Testing with real users and expert validation</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 rounded-full bg-accent"></div>
                    <div>
                      <p className="font-semibold text-foreground">Sept 2026: Public Launch</p>
                      <p className="text-sm text-muted-foreground">Official release and community building</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 rounded-full bg-secondary"></div>
                    <div>
                      <p className="font-semibold text-foreground">Future: Expanding ErgoAI Suite</p>
                      <p className="text-sm text-muted-foreground">Enterprise features and mobile apps</p>
                    </div>
                  </div>
                </div>
                <div className="text-center pt-4">
                  <Link to="/roadmap">
                    <Button variant="outline" size="sm">
                      View Full Roadmap
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Journey CTA */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Want to Learn More About Our Journey Building ALPS?
              </h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Explore the research, design, and testing process that transformed pain points into solutions
              </p>
              <Button size="lg" className="text-lg px-8 group" asChild>
                <Link to="/our-journey">
                  Explore Our Journey
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values Section */}
      <section className="py-12 px-4 bg-muted/30">
        <div 
          ref={valuesSection.ref}
          className={`container mx-auto max-w-6xl scroll-animate scroll-fade-up ${valuesSection.isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-foreground">
            What We Stand For
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Our values guide everything we build at ErgoAI
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">{value.title}</h3>
                    <p className="text-foreground/70 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Organization Chart / Team Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-7xl">
          <h2 
            ref={teamSection.ref}
            className={`text-4xl md:text-5xl font-bold mb-4 text-center text-foreground scroll-animate scroll-fade-up ${teamSection.isVisible ? 'visible' : ''}`}
          >
            Meet the Humans Behind ALPS
          </h2>
          <p className={`text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto scroll-animate scroll-fade-up ${teamSection.isVisible ? 'visible' : ''}`}>
            Six passionate people who believe technology can—and should—make life better
          </p>

          {/* Top Level - CEO/Founder */}
          <div className="flex flex-col items-center mb-12">
            <Card className={`w-full max-w-2xl hover:shadow-xl transition-all duration-300 scroll-animate scroll-scale-in ${teamSection.isVisible ? 'visible' : ''}`}>
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                  <img 
                    src="/assets/team/amirah.jpg" 
                    alt="Dr. Izzah Amirah" 
                    className="w-32 h-32 rounded-full object-cover border-4 border-destructive/30 flex-shrink-0"
                  />
                  <div className="flex-1 text-center md:text-left">
                    <div className="mb-3">
                      <h3 className="text-2xl font-bold text-foreground">Dr Izzah Amirah</h3>
                      <p className="text-sm text-muted-foreground mt-1">Founder & CEO</p>
                    </div>
                    <p className="text-sm text-foreground/70 leading-relaxed mb-4">
                      As the founder and CEO of ErgoAI Technologies, Dr Izzah provides strategic oversight and drives the vision of making workplace wellness effortless through intelligent technology. She champions the human-centered approach that defines ALPS and ensures the project stays aligned with both user needs and business objectives.
                    </p>
                    <div className="flex justify-center md:justify-start gap-4">
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <Twitter className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Vertical Line */}
            <div className="w-0.5 h-16 bg-border"></div>
          </div>

          {/* Second Level - Project Manager */}
          <div className="flex flex-col items-center mb-12">
            <Card className={`w-full max-w-2xl hover:shadow-xl transition-all duration-300 scroll-animate scroll-scale-in stagger-2 ${teamSection.isVisible ? 'visible' : ''}`}>
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                  <img 
                    src="/assets/team/caleb.jpg" 
                    alt="Caleb Lim Shian Zer" 
                    className="w-32 h-32 rounded-full object-cover border-4 border-warning/50 flex-shrink-0"
                  />
                  <div className="flex-1 text-center md:text-left">
                    <div className="mb-3">
                      <h3 className="text-2xl font-bold text-foreground">Caleb Lim Shian Zer</h3>
                      <p className="text-sm text-muted-foreground mt-1">Project Manager</p>
                    </div>
                    <p className="text-sm text-foreground/70 leading-relaxed mb-4">
                      Leads the planning, coordination, and execution of the ALPS project from inception to launch. Caleb manages sprint scheduling, stakeholder reporting, and ensures the project stays on timeline and within budget. With expertise in Agile methodologies, he keeps the team aligned and focused on delivering excellence.
                    </p>
                    <div className="flex justify-center md:justify-start gap-4">
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <Twitter className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Vertical Line */}
            <div className="w-0.5 h-16 bg-border"></div>
          </div>

          {/* Horizontal Line connecting team members */}
          <div className="flex justify-center mb-12">
            <div className="w-full max-w-6xl">
              <div className="h-0.5 bg-border"></div>
            </div>
          </div>

          {/* Team Members Level */}
          <div className="relative">
            {/* Vertical lines from horizontal bar to each card */}
            <div className="absolute top-0 left-0 right-0 flex justify-around pointer-events-none -mt-12">
              <div className="w-0.5 h-12 bg-border"></div>
              <div className="w-0.5 h-12 bg-border hidden md:block"></div>
              <div className="w-0.5 h-12 bg-border hidden lg:block"></div>
              <div className="w-0.5 h-12 bg-border hidden lg:block"></div>
            </div>
            
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 scroll-animate scroll-fade-up stagger-3 ${teamSection.isVisible ? 'visible' : ''}`}>
              {/* Lee Hong Yen */}
              <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <img 
                    src="/assets/team/Hong.jpeg" 
                    alt="Lee Hong Yen" 
                    className="w-32 h-32 mx-auto mb-4 rounded-full object-cover border-4 border-primary/20"
                  />
                  <h3 className="text-xl font-bold mb-1 text-foreground">Lee Hong Yen</h3>
                  <p className="text-sm text-muted-foreground mb-4">AI Lead Developer</p>
                  <p className="text-sm text-foreground/70 leading-relaxed mb-6">
                    The technical mastermind behind ALPS's intelligent posture detection system. Hong Yen designs, trains, and optimizes the AI models that power real-time posture analysis, ensuring they meet the strict accuracy (≥85%) and latency (≤100ms) targets while maintaining complete privacy through on-device processing.
                  </p>
                  <div className="flex justify-center gap-4">
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Brandon Koh */}
              <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <img 
                    src="/assets/team/Brandon.jpeg" 
                    alt="Brandon Koh Siu Ven" 
                    className="w-32 h-32 mx-auto mb-4 rounded-full object-cover border-4 border-primary/20"
                  />
                  <h3 className="text-xl font-bold mb-1 text-foreground">Brandon Koh Siu Ven</h3>
                  <p className="text-sm text-muted-foreground mb-4">UX/UI Designer</p>
                  <p className="text-sm text-foreground/70 leading-relaxed mb-6">
                    Responsible for crafting ALPS's delightful user experience, from the adaptive feedback dashboard to the beloved cat mascot. Brandon translates complex AI capabilities into intuitive interfaces and ensures every notification mode feels natural and stress-free. He oversees all usability testing to guarantee user satisfaction.
                  </p>
                  <div className="flex justify-center gap-4">
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Lam Ming Cherng */}
              <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <img 
                    src="/assets/team/Ming.jpeg" 
                    alt="Lam Ming Cherng" 
                    className="w-32 h-32 mx-auto mb-4 rounded-full object-cover border-4 border-primary/20"
                  />
                  <h3 className="text-xl font-bold mb-1 text-foreground">Lam Ming Cherng</h3>
                  <p className="text-sm text-muted-foreground mb-4">QA & Compliance Officer</p>
                  <p className="text-sm text-foreground/70 leading-relaxed mb-6">
                    Ensures ALPS meets the highest standards of privacy and compliance. Ming Cherng oversees PDPA compliance, manages internal data audits, and maintains all ethical documentation. He also tracks project risks and ensures that user data remains completely private and secure through on-device processing.
                  </p>
                  <div className="flex justify-center gap-4">
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Dr. Lim */}
              <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <img 
                    src="/assets/team/dr-lim.jpg" 
                    alt="Dr. Lim" 
                    className="w-32 h-32 mx-auto mb-4 rounded-full object-cover border-4 border-primary/20"
                  />
                  <h3 className="text-xl font-bold mb-1 text-foreground">Dr Lim</h3>
                  <p className="text-sm text-muted-foreground mb-4">HUMAC Research Partner</p>
                  <p className="text-sm text-foreground/70 leading-relaxed mb-6">
                    Representing the Research Centre for Human-Machine Collaboration (HUMAC) at Sunway Group, Dr Lim provides scientific validation and ergonomic expertise. He manages participant recruitment, ethics approval processes, and lab testing protocols, ensuring ALPS is grounded in rigorous research and professional standards.
                  </p>
                  <div className="flex justify-center gap-4">
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;