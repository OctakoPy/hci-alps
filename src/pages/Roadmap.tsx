import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Check, Circle, Clock, Rocket, Target, Users, ChevronRight, FileText } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { wbsData } from "@/data/wbsData";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Roadmap = () => {
  // Scroll animation hooks
  const statusSection = useScrollAnimation();
  const timelineSection = useScrollAnimation();
  const wbsSection = useScrollAnimation();
  const objectivesSection = useScrollAnimation();
  const beyondSection = useScrollAnimation();
  const partnershipSection = useScrollAnimation();
  const betaSection = useScrollAnimation();
  
  const phases = [
    {
      id: 1,
      name: "Foundation",
      period: "Nov 2025 - Jan 2026",
      status: "in-progress",
      icon: Circle,
      tasks: [
        "Project initiation",
        "Ethics approval secured",
        "Research partnerships established",
        "Initial prototype design",
      ],
    },
    {
      id: 2,
      name: "AI Development",
      period: "Jan 2026 - Mar 2026",
      status: "upcoming",
      icon: Clock,
      tasks: [
        "AI model design & training",
        "Posture detection algorithm",
        "Accuracy optimization (Target: 85%+)",
        "Latency testing (Target: <100ms)",
      ],
    },
    {
      id: 3,
      name: "UX/UI Design",
      period: "Mar 2026 - Apr 2026",
      status: "upcoming",
      icon: Clock,
      tasks: [
        "Adaptive notification system",
        "Personalization engine",
        "Dashboard interface",
        "User customization features",
      ],
    },
    {
      id: 4,
      name: "Pilot Testing",
      period: "July - Aug 2026",
      status: "planned",
      icon: Clock,
      tasks: [
        "Partner lab testing with HUMAC",
        "Physiotherapist validation",
        "Real user feedback",
        "Performance benchmarking",
      ],
    },
    {
      id: 5,
      name: "Refinement",
      period: "Aug - Sept 2026",
      status: "planned",
      icon: Clock,
      tasks: [
        "Bug fixes & optimization",
        "Final adjustments based on testing",
        "Compliance documentation",
        "Quality assurance",
      ],
    },
    {
      id: 6,
      name: "Launch",
      period: "Sept 2026",
      status: "target",
      icon: Rocket,
      tasks: [
        "Public release",
        "Official launch event",
        "Beta program opens",
        "Community building begins",
      ],
    },
  ];

  const objectives = [
    "85%+ AI posture detection accuracy",
    "< 100ms response latency",
    "80%+ user satisfaction rate",
    "20%+ improvement in posture comfort",
    "100% PDPA & ethics compliance",
    "Validation from Malaysian physiotherapy centers",
  ];

  const futureFeatures = [
    {
      quarter: "Q3 2026",
      title: "Enterprise & Team Features",
      description: "Admin dashboards, team analytics, and bulk licensing",
    },
    {
      quarter: "Q4 2026",
      title: "Advanced Analytics Dashboard",
      description: "Deep insights, trend analysis, and personalized recommendations",
    },
    {
      quarter: "2027",
      title: "Mobile App Versions",
      description: "Native iOS and Android applications",
    },
    {
      quarter: "Future",
      title: "Integration & API Access",
      description: "Third-party integrations and developer API",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "complete":
        return "text-success";
      case "in-progress":
        return "text-primary";
      default:
        return "text-muted-foreground";
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "complete":
        return "✅ COMPLETE";
      case "in-progress":
        return "🔄 IN PROGRESS";
      case "upcoming":
        return "📅 UPCOMING";
      case "planned":
        return "📅 PLANNED";
      case "target":
        return "🚀 TARGET";
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-12 pb-8 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
            Building ALPS: <span className="text-primary">Our Roadmap</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-slide-up">
            Track our progress from research to launch and beyond
          </p>
        </div>
      </section>

      {/* Current Status Banner */}
      <section className="py-8 bg-muted/30">
        <div 
          ref={statusSection.ref}
          className={`container mx-auto px-4 max-w-4xl scroll-animate scroll-scale-in ${statusSection.isVisible ? 'visible' : ''}`}
        >
          <Card className="border-primary/50">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Current Status</p>
                    <p className="text-xl font-semibold">
                      🔄 Project Foundation (Phase 1 of 6)
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground mb-1">Expected Launch</p>
                    <p className="text-xl font-semibold text-primary">September 2026</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Overall Progress</span>
                    <span className="font-semibold">17%</span>
                  </div>
                  <Progress value={17} className="h-3" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 
            ref={timelineSection.ref}
            className={`text-3xl md:text-4xl font-bold text-center mb-12 scroll-animate scroll-fade-up ${timelineSection.isVisible ? 'visible' : ''}`}
          >
            Development Timeline
          </h2>
          
          <div className={`space-y-8 scroll-animate scroll-fade-up ${timelineSection.isVisible ? 'visible' : ''}`}>
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <div key={phase.id} className="relative">
                  <Card className={phase.status === "in-progress" ? "border-primary" : ""}>
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-full bg-muted ${getStatusColor(phase.status)}`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                            <CardTitle className="text-2xl">
                              Phase {phase.id}: {phase.name}
                            </CardTitle>
                            <span className="text-sm font-semibold px-3 py-1 rounded-full bg-muted">
                              {getStatusBadge(phase.status)}
                            </span>
                          </div>
                          <CardDescription className="text-base">{phase.period}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {phase.tasks.map((task, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className={`h-4 w-4 mt-0.5 flex-shrink-0 ${
                              phase.status === "complete" ? "text-success" : "text-muted-foreground"
                            }`} />
                            <span className="text-sm">{task}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Full WBS Timeline */}
      <section className="py-8 px-4 bg-gradient-to-b from-background to-muted/30">
        <div 
          ref={wbsSection.ref}
          className={`container mx-auto max-w-6xl scroll-animate scroll-fade-up ${wbsSection.isVisible ? 'visible' : ''}`}
        >
          <div className="text-center mb-12">
            <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complete Work Breakdown Structure
            </h2>
            <p className="text-lg text-muted-foreground mb-2">
              ALPS: AI Lifestyle Posture Support (Project Code: ALPS-2025)
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <span className="font-semibold">RM 315,000</span>
              <span>•</span>
              <span className="font-semibold">10 Months</span>
              <span>•</span>
              <span>Nov 2025 - 29 Sept 2026</span>
            </div>
          </div>

          <Card className="overflow-hidden border-2">
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="space-y-2">
                {wbsData.map((workPackage, index) => (
                  <AccordionItem 
                    key={workPackage.id} 
                    value={workPackage.id}
                    className="border rounded-lg overflow-hidden bg-card"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-4 w-full text-left">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-lg mb-1">
                            {workPackage.id} {workPackage.title}
                          </div>
                          <div className="text-sm text-muted-foreground font-normal">
                            {workPackage.period}
                          </div>
                        </div>
                        <ChevronRight className="h-5 w-5 text-muted-foreground transition-transform duration-200" />
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <div className="mt-2 space-y-3 pl-16">
                        <Accordion type="multiple" className="space-y-2">
                          {workPackage.children.map((subPackage) => (
                            <AccordionItem
                              key={subPackage.id}
                              value={subPackage.id}
                              className="border-l-2 border-primary/20 pl-4"
                            >
                              <AccordionTrigger className="py-3 hover:no-underline text-left">
                                <div className="flex items-center gap-3 w-full">
                                  <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/5 text-primary text-sm font-semibold flex-shrink-0">
                                    {subPackage.id.split('.')[1]}
                                  </div>
                                  <span className="font-semibold text-base">
                                    {subPackage.id} {subPackage.title}
                                  </span>
                                </div>
                              </AccordionTrigger>
                              <AccordionContent className="pt-2 pb-3">
                                <ul className="space-y-2 pl-11">
                                  {subPackage.tasks.map((task, taskIndex) => (
                                    <li key={taskIndex} className="flex items-start gap-2 text-sm">
                                      <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                                      <span className="text-muted-foreground">{task}</span>
                                    </li>
                                  ))}
                                </ul>
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Detailed project breakdown with {wbsData.length} major work packages and{" "}
              {wbsData.reduce((acc, wp) => acc + wp.children.length, 0)} sub-packages
            </p>
          </div>
        </div>
      </section>

      {/* Project Objectives */}
      <section className="py-12 px-4 bg-muted/30">
        <div 
          ref={objectivesSection.ref}
          className={`container mx-auto max-w-4xl scroll-animate scroll-fade-up ${objectivesSection.isVisible ? 'visible' : ''}`}
        >
          <div className="text-center mb-12">
            <Target className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What We're Building Toward
            </h2>
            <p className="text-lg text-muted-foreground">
              Our success criteria and achievement targets
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {objectives.map((objective, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-base font-medium">{objective}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Highlight */}
      <section className="py-12 px-4 bg-muted/30">
        <div 
          ref={partnershipSection.ref}
          className={`container mx-auto max-w-4xl scroll-animate scroll-fade-up ${partnershipSection.isVisible ? 'visible' : ''}`}
        >
          <div className="text-center mb-12">
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Built with Expert Collaboration
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6 text-center">
                <p className="text-xl font-semibold mb-2">HUMAC Research Centre</p>
                <p className="text-muted-foreground">Sunway Group Partnership</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <p className="text-xl font-semibold mb-2">Malaysian Physiotherapy Centers</p>
                <p className="text-muted-foreground">Clinical Validation Partners</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <p className="text-xl font-semibold mb-2">ErgoLab Testing Partners</p>
                <p className="text-muted-foreground">Real-world Validation</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <p className="text-xl font-semibold mb-2">Academic Research Teams</p>
                <p className="text-muted-foreground">Scientific Collaboration</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Beta Program CTA */}
      <section className="py-12 px-4">
        <div 
          ref={betaSection.ref}
          className={`container mx-auto max-w-5xl scroll-animate scroll-scale-in ${betaSection.isVisible ? 'visible' : ''}`}
        >
          <Card className="gradient-hero text-white">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl md:text-4xl mb-4">
                Want To Experience ALPS Early?
              </CardTitle>
              <CardDescription className="text-white/90 text-lg">
                Join our waitlist for beta testing!
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-md text-foreground"
                />
                <Button size="lg" variant="secondary" className="sm:w-auto">
                  Join Waitlist
                </Button>
              </div>
              <div className="text-center space-y-2 text-white/80 text-sm">
                <p>✓ Beta testing priority access</p>
                <p>✓ Exclusive launch discounts</p>
                <p>✓ Milestone updates & behind-the-scenes content</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Roadmap;
