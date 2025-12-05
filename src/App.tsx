import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Roadmap from "./pages/Roadmap";
import HowItWorks from "./pages/HowItWorks";
import NotFound from "./pages/NotFound";
import OurJourneyIndex from "./pages/OurJourney/Index";
import DesignResearch from "./pages/OurJourney/DesignResearch";
import DesignIdeation from "./pages/OurJourney/DesignIdeation";
import PrototypeTesting from "./pages/OurJourney/PrototypeTesting";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/our-journey" element={<OurJourneyIndex />} />
          <Route path="/our-journey/design-research" element={<DesignResearch />} />
          <Route path="/our-journey/design-ideation" element={<DesignIdeation />} />
          <Route path="/our-journey/prototype-testing" element={<PrototypeTesting />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
