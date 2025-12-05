import { Check, X, Minus } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const solutions = [
  {
    name: "Break Reminders\n(Workrave, REMINDEE)",
    features: {
      realtime: false,
      context: false,
      customization: "complex",
      privacy: true,
      platform: "limited",
      continuous: false,
      adoption: "low",
      price: "Free",
    },
  },
  {
    name: "AI Ergonomic\n(Inseer)",
    features: {
      realtime: "limited",
      context: false,
      customization: false,
      privacy: "cloud",
      platform: "mobile",
      continuous: false,
      adoption: "low",
      price: "Subscription",
    },
  },
  {
    name: "Ergonomic\nEquipment",
    features: {
      realtime: false,
      context: "n/a",
      customization: false,
      privacy: true,
      platform: "n/a",
      continuous: "passive",
      adoption: "medium",
      price: "$500-$2000",
    },
  },
  {
    name: "Training\nPrograms",
    features: {
      realtime: false,
      context: false,
      customization: false,
      privacy: true,
      platform: "n/a",
      continuous: false,
      adoption: "fades",
      price: "$200-$500",
    },
  },
  {
    name: "ALPS ✨",
    features: {
      realtime: true,
      context: true,
      customization: true,
      privacy: true,
      platform: "desktop",
      continuous: true,
      adoption: "high",
    price: "~",
    },
    highlight: true,
  },
];

const ComparisonIcon = ({ value }: { value: boolean | string }) => {
  if (value === true) return <Check className="h-5 w-5 text-success" />;
  if (value === false) return <X className="h-5 w-5 text-error" />;
  if (value === "limited" || value === "cloud" || value === "complex" || value === "mobile" || value === "passive" || value === "fades") {
    return <Minus className="h-5 w-5 text-warning" />;
  }
  return <span className="text-sm text-muted-foreground">{value}</span>;
};

const Comparison = () => {
  // Scroll animation hooks
  const headerSection = useScrollAnimation();
  const tableSection = useScrollAnimation();
  
  return (
    <section className="py-16 md:py-12">
      <div className="container mx-auto px-4">
        <div 
          ref={headerSection.ref}
          className={`text-center mb-16 scroll-animate scroll-fade-up ${headerSection.isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">
            ALPS vs <span className="text-primary">Competitors</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Research-backed comparison of existing posture solutions
          </p>
        </div>
        
        <div 
          ref={tableSection.ref}
          className={`overflow-x-auto scroll-animate scroll-fade-up ${tableSection.isVisible ? 'visible' : ''}`}
        >
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-4 font-semibold">Feature</th>
                {solutions.map((solution, index) => (
                  <th 
                    key={index}
                    className={`p-4 text-center font-semibold ${
                      solution.highlight ? 'gradient-hero text-white' : ''
                    }`}
                  >
                    {solution.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="p-4 font-medium">Real-time feedback</td>
                {solutions.map((solution, index) => (
                  <td 
                    key={index} 
                    className={`p-4 text-center ${
                      solution.highlight ? 'bg-primary/5' : ''
                    }`}
                  >
                    <div className="flex justify-center">
                      <ComparisonIcon value={solution.features.realtime} />
                    </div>
                  </td>
                ))}
              </tr>
              
              <tr className="border-b border-border">
                <td className="p-4 font-medium">Understands context</td>
                {solutions.map((solution, index) => (
                  <td 
                    key={index}
                    className={`p-4 text-center ${
                      solution.highlight ? 'bg-primary/5' : ''
                    }`}
                  >
                    <div className="flex justify-center">
                      <ComparisonIcon value={solution.features.context} />
                    </div>
                  </td>
                ))}
              </tr>
              
              <tr className="border-b border-border">
                <td className="p-4 font-medium">Customization</td>
                {solutions.map((solution, index) => (
                  <td 
                    key={index}
                    className={`p-4 text-center ${
                      solution.highlight ? 'bg-primary/5' : ''
                    }`}
                  >
                    <div className="flex justify-center">
                      <ComparisonIcon value={solution.features.customization} />
                    </div>
                  </td>
                ))}
              </tr>
              
              <tr className="border-b border-border">
                <td className="p-4 font-medium">Privacy</td>
                {solutions.map((solution, index) => (
                  <td 
                    key={index}
                    className={`p-4 text-center ${
                      solution.highlight ? 'bg-primary/5' : ''
                    }`}
                  >
                    <div className="flex justify-center">
                      <ComparisonIcon value={solution.features.privacy} />
                    </div>
                  </td>
                ))}
              </tr>
              
              <tr className="border-b border-border">
                <td className="p-4 font-medium">Long-term adoption</td>
                {solutions.map((solution, index) => (
                  <td 
                    key={index}
                    className={`p-4 text-center ${
                      solution.highlight ? 'bg-primary/5' : ''
                    }`}
                  >
                    <span className={`text-sm ${
                      solution.highlight ? 'font-semibold text-primary' : 'text-muted-foreground'
                    }`}>
                      {solution.features.adoption}
                    </span>
                  </td>
                ))}
              </tr>
              
              <tr>
                <td className="p-4 font-medium">Price</td>
                {solutions.map((solution, index) => (
                  <td 
                    key={index}
                    className={`p-4 text-center ${
                      solution.highlight ? 'bg-primary/5' : ''
                    }`}
                  >
                    <span className={`text-sm ${
                      solution.highlight ? 'font-semibold text-primary' : 'text-muted-foreground'
                    }`}>
                      {solution.features.price}
                    </span>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        
        <p className="text-sm text-muted-foreground text-center mt-8">
          Based on systematic literature review and competitive analysis of existing ergonomic solutions
        </p>
        <p className="text-xs text-muted-foreground text-center mt-2">
          References: Supian et al. (2023), Trstenjak et al. (2025), Davis et al. (2020), Mahmud et al. (2011), Bazazan et al. (2018)
        </p>
      </div>
    </section>
  );
};

export default Comparison;
