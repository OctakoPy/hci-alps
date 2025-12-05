import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { 
  Eye, Brain, Cat, Target, Zap, Lock, Check, X, AlertCircle,
  MonitorPlay, Cpu, Shield, TrendingUp, Users, FileText, Award,
  ChevronRight, Play, Camera, Activity, Bell
} from "lucide-react";
import { useState } from "react";
import alpsCat from "@/assets/alps-cat-mascot.png";
import groupProjectImage from "@/assets/alps-howitworks.png";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WaitlistForm from "@/components/WaitlistForm";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const HowItWorksPage = () => {
  const [selectedNotification, setSelectedNotification] = useState<string>("overlay");
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  
  // Scroll animation hooks for different sections
  const step1 = useScrollAnimation();
  const step2 = useScrollAnimation();
  const step3 = useScrollAnimation();
  const demoSection = useScrollAnimation();
  const techSection = useScrollAnimation();
  const notificationSection = useScrollAnimation();
  const faqSection = useScrollAnimation();
  const ctaSection = useScrollAnimation();
  
  return (
    <div className="min-h-screen">
      <Navigation />
      {/* Hero Section */}
      <section className="py-16 md:py-12 gradient-hero">
        <div className="container mx-auto px-4">
          {/* Badge above columns */}
          <div className="text-center animate-slide-up">
            <Badge className="bg-white/20 text-white border-white/30">
              Technology Explained
            </Badge>
          </div>

          <div className="grid md:grid-cols-3 px-24 items-center">
            {/* Left Column - 2/3 width */}
            <div className="md:col-span-2 text-center md:text-left text-white animate-slide-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                See How ALPS Protects Your Posture
              </h1>
              <p className="text-xl text-white/90">
                Intelligent AI that watches, learns, and coaches—all without leaving your device
              </p>
            </div>

            {/* Right Column - 1/3 width */}
            <div className="md:col-span-1 animate-slide-in-right">
              <img 
                src={groupProjectImage} 
                alt="ALPS Technology" 
                className="w-full h-48 md:h-full"
              />
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto text-white">
            
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 animate-slide-up">
              <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Target className="h-8 w-8" />
                <div className="text-left">
                  <div className="font-bold text-lg">85%+ Accuracy</div>
                  <div className="text-sm text-white/80">Validated</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Zap className="h-8 w-8" />
                <div className="text-left">
                  <div className="font-bold text-lg">&lt;100ms</div>
                  <div className="text-sm text-white/80">Response Time</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Lock className="h-8 w-8" />
                <div className="text-left">
                  <div className="font-bold text-lg">100% Private</div>
                  <div className="text-sm text-white/80">On-Device</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 animate-slide-up">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                <a href="#demo">Try Live Demo Below</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Simple 3-Step Explanation */}
      <section className="py-16 md:py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Three Steps to Better Posture</h2>
            <p className="text-xl text-muted-foreground">Simple technology, powerful results</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Step 1 */}
            <Card 
              ref={step1.ref}
              className={`relative overflow-hidden hover-scale scroll-animate scroll-fade-up ${step1.isVisible ? 'visible' : ''}`}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-bl-full flex items-start justify-end p-4">
                <span className="text-3xl font-bold text-primary">1</span>
              </div>
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>ALPS Watches 👀</CardTitle>
                <CardDescription className="text-lg">Silent Monitoring</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  ALPS uses your built-in webcam to track your sitting position in real-time. 
                  It runs quietly in the background—you won't even know it's there until you need it.
                </p>
                <div className="bg-muted/50 p-3 rounded-lg text-sm">
                  <Lock className="h-4 w-4 inline mr-2" />
                  Your video never leaves your computer. Ever.
                </div>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card 
              ref={step2.ref}
              className={`relative overflow-hidden hover-scale scroll-animate scroll-fade-up stagger-2 ${step2.isVisible ? 'visible' : ''}`}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-bl-full flex items-start justify-end p-4">
                <span className="text-3xl font-bold text-primary">2</span>
              </div>
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>ALPS Thinks 🧠</CardTitle>
                <CardDescription className="text-lg">Smart Detection</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Our AI analyzes your posture continuously, learning what's normal for YOUR body. 
                  It knows the difference between looking at documents and actually slouching.
                </p>
                <div className="bg-muted/50 p-3 rounded-lg text-sm">
                  <Cpu className="h-4 w-4 inline mr-2" />
                  State-of-the-art computer vision trained on thousands of examples
                </div>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card 
              ref={step3.ref}
              className={`relative overflow-hidden hover-scale scroll-animate scroll-fade-up stagger-4 ${step3.isVisible ? 'visible' : ''}`}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-bl-full flex items-start justify-end p-4">
                <span className="text-3xl font-bold text-primary">3</span>
              </div>
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Cat className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>ALPS Coaches 🐱</CardTitle>
                <CardDescription className="text-lg">Friendly Reminders</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  When your posture needs help, ALPS sends a gentle notification with specific guidance. 
                  Timing, style, and frequency adapt to your work patterns.
                </p>
                <div className="bg-muted/50 p-3 rounded-lg text-sm">
                  <Bell className="h-4 w-4 inline mr-2" />
                  Choose from overlay, pop-up, or subtle banner notifications
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section id="demo" className="py-16 md:py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div 
            ref={demoSection.ref}
            className={`max-w-4xl mx-auto scroll-animate scroll-fade-up ${demoSection.isVisible ? 'visible' : ''}`}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">ALPS Demo</h2>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Deep Dive */}
      <section className="py-16 md:py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div 
            ref={techSection.ref}
            className={`max-w-4xl mx-auto scroll-animate scroll-fade-up ${techSection.isVisible ? 'visible' : ''}`}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Under the Hood: The Technology</h2>
              <p className="text-xl text-muted-foreground">For the technically curious</p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="cv" className="border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <MonitorPlay className="h-5 w-5 text-primary" />
                    <span className="font-semibold">Computer Vision & AI Models</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 space-y-4">
                  <p>
                    ALPS uses advanced pose estimation algorithms based on MediaPipe architecture, 
                    fine-tuned specifically for ergonomic analysis in office environments.
                  </p>
                  <div className="bg-muted p-4 rounded-lg space-y-2">
                    <p className="font-semibold">Key Features:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Keypoint detection across 33 body landmarks</li>
                      <li>• Real-time skeletal tracking at 10-15 FPS</li>
                      <li>• Angle calculations for neck, back, and shoulders</li>
                      <li>• 85%+ accuracy validated in clinical trials</li>
                    </ul>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Training data includes diverse datasets of office workers, students, and remote employees 
                    across different body types and desk setups.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="device" className="border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <Cpu className="h-5 w-5 text-primary" />
                    <span className="font-semibold">On-Device Processing</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 space-y-4">
                  <p>
                    All AI processing happens locally on your device using optimized models that run 
                    efficiently without cloud connectivity.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="font-semibold mb-2">Performance</p>
                      <ul className="space-y-1 text-sm">
                        <li>• &lt;2% CPU usage average</li>
                        <li>• ~150-200MB RAM</li>
                        <li>• 10-15 FPS processing</li>
                        <li>• Minimal battery impact</li>
                      </ul>
                    </div>
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="font-semibold mb-2">Privacy Benefit</p>
                      <p className="text-sm">
                        Your video stream never leaves your RAM—there's literally no way 
                        for us to see it. Everything stays on your device.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="learning" className="border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <span className="font-semibold">Adaptive Learning System</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 space-y-4">
                  <p>
                    ALPS builds a personalized baseline of YOUR natural sitting position over the first week, 
                    continuously improving accuracy and reducing false positives.
                  </p>
                  <div className="bg-muted p-4 rounded-lg space-y-3">
                    <div>
                      <p className="font-semibold text-sm mb-1">Week 1: Learning Phase</p>
                      <p className="text-sm">Observes natural patterns, establishes baseline</p>
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-1">Week 2-4: Refinement</p>
                      <p className="text-sm">Distinguishes intentional movements from poor posture</p>
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-1">Ongoing: Optimization</p>
                      <p className="text-sm">Adapts to changing work patterns and preferences</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="notifications" className="border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <Bell className="h-5 w-5 text-primary" />
                    <span className="font-semibold">Smart Notification System</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 space-y-4">
                  <p>
                    Notifications are intelligently timed based on your activity, context, and preferences.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                      <Activity className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-sm">Activity Detection</p>
                        <p className="text-sm text-muted-foreground">
                          Delays during typing bursts, mouse activity, or detected focus states
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                      <Users className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-sm">Context Awareness</p>
                        <p className="text-sm text-muted-foreground">
                          Auto-detects Zoom, Teams, presentation mode, and screen recording
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                      <TrendingUp className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-sm">Adaptive Frequency</p>
                        <p className="text-sm text-muted-foreground">
                          Adjusts based on your response patterns and correction speed
                        </p>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="privacy" className="border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-primary" />
                    <span className="font-semibold">Privacy & Security Architecture</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 space-y-4">
                  <div className="bg-primary/5 border border-primary/20 p-4 rounded-lg">
                    <p className="font-semibold mb-2 flex items-center gap-2">
                      <Lock className="h-4 w-4" />
                      Data Flow: Webcam → RAM → AI Model → Display
                    </p>
                    <p className="text-sm text-muted-foreground">Nothing written to disk. Ever.</p>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">100% on-device processing with zero cloud dependency</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Optional analytics (anonymous usage stats only) with opt-in</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">PDPA 2010 compliant and internationally validated</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Ethics-approved by HUMAC Research Centre</span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Notification Gallery */}
      <section className="py-16 md:py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div 
            ref={notificationSection.ref}
            className={`max-w-5xl mx-auto scroll-animate scroll-fade-up ${notificationSection.isVisible ? 'visible' : ''}`}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Coaching Style</h2>
              <p className="text-xl text-muted-foreground">Customize how ALPS communicates with you</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-3xl mx-auto">
              <Button
                variant={selectedNotification === "overlay" ? "default" : "outline"}
                onClick={() => setSelectedNotification("overlay")}
                className={`h-auto flex-col py-4 scroll-animate scroll-scale-in stagger-1 ${notificationSection.isVisible ? 'visible' : ''}`}
              >
                <MonitorPlay className="h-6 w-6 mb-2" />
                <span className="font-semibold">Full Overlay</span>
                <span className="text-xs opacity-80">Maximum impact</span>
              </Button>
              <Button
                variant={selectedNotification === "popup" ? "default" : "outline"}
                onClick={() => setSelectedNotification("popup")}
                className={`h-auto flex-col py-4 scroll-animate scroll-scale-in stagger-2 ${notificationSection.isVisible ? 'visible' : ''}`}
              >
                <Bell className="h-6 w-6 mb-2" />
                <span className="font-semibold">Pop-up Alert</span>
                <span className="text-xs opacity-80">Balanced</span>
              </Button>
              <Button
                variant={selectedNotification === "banner" ? "default" : "outline"}
                onClick={() => setSelectedNotification("banner")}
                className={`h-auto flex-col py-4 scroll-animate scroll-scale-in stagger-3 ${notificationSection.isVisible ? 'visible' : ''}`}
              >
                <Activity className="h-6 w-6 mb-2" />
                <span className="font-semibold">Banner</span>
                <span className="text-xs opacity-80">Subtle</span>
              </Button>
            </div>

            <Card className={`scroll-animate scroll-scale-in stagger-4 ${notificationSection.isVisible ? 'visible' : ''}`}>
              <CardContent className="p-8">
                <div className="aspect-[2/1] bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <img src={alpsCat} alt="ALPS Cat" className="w-32 h-32 opacity-20 absolute" />
                  <div className="relative z-10 text-center">
                    <Cat className="h-16 w-16 text-primary mx-auto mb-4" />
                    <p className="text-lg font-semibold mb-2">
                      {selectedNotification === "overlay" && "Full Screen Overlay Preview"}
                      {selectedNotification === "popup" && "Pop-up Alert Preview"}
                      {selectedNotification === "banner" && "Banner Notification Preview"}
                    </p>
                    <p className="text-sm text-muted-foreground max-w-md mx-auto">
                      {selectedNotification === "overlay" && "Large, impossible-to-ignore reminder with animated guidance and posture correction instructions"}
                      {selectedNotification === "popup" && "Clear modal alert with cat mascot, text guidance, and easy dismiss button"}
                      {selectedNotification === "banner" && "Slim banner at top of screen with brief text, auto-dismisses after 10 seconds"}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-12 bg-background">
        <div className="container mx-auto px-4">
          <div 
            ref={faqSection.ref}
            className={`max-w-4xl mx-auto scroll-animate scroll-fade-up ${faqSection.isVisible ? 'visible' : ''}`}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground">Technical questions answered</p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="monitors" className="border rounded-lg px-6">
                <AccordionTrigger>How does ALPS work with multiple monitors?</AccordionTrigger>
                <AccordionContent className="pt-4">
                  ALPS tracks your head and torso position regardless of monitor setup. It detects poor posture 
                  relative to your primary screen. If you use an external webcam, position it at your main monitor 
                  for best accuracy.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="lighting" className="border rounded-lg px-6">
                <AccordionTrigger>What if my lighting is poor?</AccordionTrigger>
                <AccordionContent className="pt-4">
                  ALPS works in varied lighting conditions, including low light. For best results, avoid extreme 
                  backlighting (sitting in front of bright windows). The AI model is trained on diverse lighting scenarios.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="external-cam" className="border rounded-lg px-6">
                <AccordionTrigger>Does ALPS work with external webcams?</AccordionTrigger>
                <AccordionContent className="pt-4">
                  Yes! ALPS automatically detects and uses any connected webcam. You can select your preferred 
                  camera in settings if you have multiple.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="standing" className="border rounded-lg px-6">
                <AccordionTrigger>Can I use ALPS with a standing desk?</AccordionTrigger>
                <AccordionContent className="pt-4">
                  Absolutely. ALPS adapts to your height and posture baseline whether sitting or standing. 
                  It learns your natural positions in both configurations.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="video-calls" className="border rounded-lg px-6">
                <AccordionTrigger>Does ALPS interfere with video calls?</AccordionTrigger>
                <AccordionContent className="pt-4">
                  No. ALPS runs independently of video conferencing software. Your webcam can be used by both 
                  ALPS and Zoom/Teams simultaneously. Plus, ALPS enters DND mode during calls.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="offline" className="border rounded-lg px-6">
                <AccordionTrigger>Can I use ALPS offline?</AccordionTrigger>
                <AccordionContent className="pt-4">
                  Yes! Once installed, ALPS works completely offline. Your posture monitoring never requires 
                  an internet connection. Internet is only needed for initial download and optional updates.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-12 gradient-hero">
        <div className="container mx-auto px-4">
          <div 
            ref={ctaSection.ref}
            className={`max-w-3xl mx-auto text-center text-white scroll-animate scroll-scale-in ${ctaSection.isVisible ? 'visible' : ''}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Want To Experience ALPS Early?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join the waitlist for beta testing!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90" onClick={() => setWaitlistOpen(true)}>
                Join Waitlist
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      <WaitlistForm open={waitlistOpen} onOpenChange={setWaitlistOpen} />
    </div>
  );
};

export default HowItWorksPage;
