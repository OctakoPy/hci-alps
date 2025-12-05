import { Card, CardContent } from "@/components/ui/card";
import { Star, TrendingUp, Clock, Target } from "lucide-react";
import danielPhoto from "@/assets/testimonial-daniel.jpg";
import rachelPhoto from "@/assets/testimonial-rachel.jpg";
import sarahPhoto from "@/assets/testimonial-sarah.jpg";

const testimonials = [
  {
    name: "Daniel Chen",
    role: "Financial Analyst",
    company: "Goldman Sachs",
    image: danielPhoto,
    quote: "I used to end every day with neck pain. Now I barely notice my posture because ALPS catches me before it gets bad. It's like having a physiotherapist watching over my shoulder—minus the creepy factor.",
    rating: 5,
    metrics: [
      { label: "Reduction in bad posture", value: "87%", icon: TrendingUp },
      { label: "Average posture score", value: "92/100", icon: Target },
      { label: "Weeks using ALPS", value: "8 weeks", icon: Clock },
    ],
  },
  {
    name: "Rachel Martinez",
    role: "Project Manager",
    company: "Microsoft",
    image: rachelPhoto,
    quote: "Finally, an app that doesn't interrupt my presentations! ALPS is smart enough to know when I'm in a meeting and waits until after. The customization options are perfect—not overwhelming like other apps.",
    rating: 5,
    metrics: [
      { label: "Daily usage", value: "6 hours", icon: Clock },
      { label: "Upright sitting time", value: "94%", icon: Target },
      { label: "vs. previous apps", value: "3x better", icon: TrendingUp },
    ],
  },
  {
    name: "Sarah Thompson",
    role: "Computer Science Student",
    company: "Stanford University",
    image: sarahPhoto,
    quote: "The cat animations actually make me smile when I get a reminder. I've tried other posture apps and deleted them within days. ALPS has been on my laptop for 3 months and I'm not removing it.",
    rating: 5,
    metrics: [
      { label: "Stretches completed", value: "45/month", icon: Target },
      { label: "Pain reduction", value: "73%", icon: TrendingUp },
      { label: "Study sessions", value: "8+ hours", icon: Clock },
    ],
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">
            Real People, <span className="text-primary">Real Problems</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how ALPS is transforming the daily lives of desk workers
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                {/* Profile Section */}
                <div className="flex items-start gap-4 mb-6">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                
                {/* Quote */}
                <blockquote className="text-muted-foreground mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                
                {/* Metrics */}
                <div className="space-y-3 pt-6 border-t border-border">
                  {testimonial.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <metric.icon className="w-4 h-4 text-primary" />
                        <span className="text-sm text-muted-foreground">
                          {metric.label}
                        </span>
                      </div>
                      <span className="text-sm font-semibold text-primary">
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Social Proof */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-2xl font-bold">4.8/5</span>
          </div>
          <p className="text-muted-foreground">
            Based on 500+ reviews from verified users
          </p>
          <p className="text-lg font-semibold text-primary">
            Join 10,000+ users improving their posture daily
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
