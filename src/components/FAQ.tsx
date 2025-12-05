import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "How does ALPS protect my privacy?",
    answer: "All video processing happens entirely on your device. ALPS never uploads, stores, or transmits your webcam footage. We can't see your video—literally. The AI models run locally, and only anonymous usage statistics (like 'posture reminder shown') are sent to help improve the app. You can disable even these analytics in settings.",
  },
  {
    question: "Will ALPS slow down my computer?",
    answer: "ALPS is designed to be lightweight, using less than 2% CPU on modern computers. It runs efficiently in the background and won't impact your work performance. Minimum requirements: 4GB RAM, any processor from the last 5 years.",
  },
  {
    question: "What if ALPS gives a false alert?",
    answer: "Click the 'My Posture is Fine' button on any reminder. This helps ALPS learn your unique body position and movement patterns. Over time, accuracy improves to match YOUR specific posture baseline.",
  },
  {
    question: "Can I use ALPS during video calls?",
    answer: "Absolutely! ALPS automatically enters Do Not Disturb mode when it detects meeting apps like Zoom, Teams, or Google Meet. You can still enable subtle side notifications if you want posture reminders during calls. ALPS won't show up in screen shares.",
  },
  {
    question: "Does ALPS work on tablets or phones?",
    answer: "Currently ALPS is designed for desktop/laptop use, where poor posture is most common. Mobile versions are in development for tablet support in 2025.",
  },
  {
    question: "What happens after my free trial?",
    answer: "You'll receive reminders at 7 and 1 day before trial expiration. After 14 days, ALPS will prompt you to choose a plan. No automatic charges—you decide if you want to continue.",
  },
  {
    question: "Can I use ALPS on multiple computers?",
    answer: "Yes! Individual plans support up to 3 devices. Lifetime plans support up to 5. Your settings and progress sync across devices (encrypted and secure).",
  },
  {
    question: "What's your refund policy?",
    answer: "We offer a 30-day money-back guarantee, no questions asked. Just email support@alps.app and we'll process your refund within 2 business days.",
  },
  {
    question: "How accurate is the AI posture detection?",
    answer: "ALPS uses state-of-the-art computer vision models trained on thousands of posture examples. In testing, it achieved 94% accuracy in detecting poor posture. It gets even better over time as it learns your specific body mechanics.",
  },
  {
    question: "Can I customize the cat mascot?",
    answer: "Not yet, but this is coming soon! We're working on additional mascot options and customization features for late 2025.",
  },
];

const FAQ = () => {
  return (
    <section className="py-16 md:py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              <span className="text-primary">Fully Anticipated</span> Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about ALPS
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Still have questions?
            </p>
            <Link 
              to="/contact" 
              className="text-primary hover:underline font-medium"
            >
              Contact our support team →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
