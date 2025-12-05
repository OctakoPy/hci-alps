import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free Trial",
    price: "$0",
    duration: "14 days",
    description: "Try all premium features",
    features: [
      "All premium features",
      "Unlimited posture tracking",
      "Full customization",
      "Progress reports",
      "No credit card required",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Individual",
    price: "$9.99",
    duration: "per month",
    description: "Perfect for personal use",
    features: [
      "Everything in Free Trial",
      "Unlimited devices (up to 3)",
      "Priority support",
      "Export unlimited reports",
      "Beta feature access",
    ],
    cta: "Get Started",
    popular: true,
    yearlyPrice: "$89/year (save 25%)",
  },
  {
    name: "Lifetime",
    price: "$199",
    duration: "one-time",
    description: "Best value for committed users",
    originalPrice: "$299",
    features: [
      "Everything in Individual",
      "Lifetime updates",
      "Priority support forever",
      "5 device activations",
      "Support indie development",
    ],
    cta: "Get Lifetime Access",
    popular: false,
    badge: "BEST VALUE",
  },
];

const Pricing = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">
            Choose Your <span className="text-primary">Plan</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-3">
            Start with a free trial. No credit card required. Cancel anytime.
          </p>
          <p className="text-sm font-medium text-primary">
            ✨ Pre-order discount available • Early bird pricing for beta testers
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative ${
                plan.popular ? 'border-primary shadow-lg scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="gradient-hero text-white px-4 py-1 rounded-full text-sm font-semibold">
                    MOST POPULAR
                  </span>
                </div>
              )}
              
              {plan.badge && !plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    {plan.badge}
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <div className="mb-2">
                  {plan.originalPrice && (
                    <span className="text-muted-foreground line-through text-sm mr-2">
                      {plan.originalPrice}
                    </span>
                  )}
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">/ {plan.duration}</span>
                </div>
                {plan.yearlyPrice && (
                  <div className="text-sm text-secondary">{plan.yearlyPrice}</div>
                )}
                <CardDescription className="text-base mt-2">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full" 
                  size="lg"
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Enterprise */}
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">For Teams & Companies</CardTitle>
            <CardDescription className="text-base">
              Custom pricing for 10+ users. Includes admin dashboard, usage analytics, and ROI tracking.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-success" />
                  Team dashboard
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-success" />
                  Department-wide analytics
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-success" />
                  Custom branding options
                </li>
              </ul>
              <Button variant="outline" size="lg">Contact Sales</Button>
            </div>
          </CardContent>
        </Card>
        
        {/* Trust Elements */}
        <div className="text-center mt-12 space-y-2">
          <p className="text-sm text-muted-foreground">
            All plans include 30-day money-back guarantee
          </p>
          <p className="text-sm text-muted-foreground">
            Cancel anytime, no questions asked
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
