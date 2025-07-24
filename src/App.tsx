import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/hooks/useLanguage";
import { Navigation } from "@/components/Navigation";
import Index from "./pages/Index";
import Epistemology from "./pages/Epistemology";
import Challenges from "./pages/Challenges";
import Solutions from "./pages/Solutions";
import StreetEpistemology from "./pages/StreetEpistemology";
import SocraticQuestioning from "./pages/SocraticQuestioning";
import ScientificMethod from "./pages/ScientificMethod";
import Comedians from "./pages/Comedians";
import CognitiveBiases from "./pages/CognitiveBiases";
import LogicalFallacies from "./pages/LogicalFallacies";
import Consciousness from "./pages/Consciousness";
import ScientificConsensus from "./pages/ScientificConsensus";
import Censorship from "./pages/Censorship";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        {/* Animated starfield background */}
        <div 
          className="fixed top-0 left-0 w-[200%] h-[200%] opacity-80 pointer-events-none"
          style={{
            backgroundImage: `
              radial-gradient(2px 2px at 20px 30px, hsl(var(--star-color)), transparent),
              radial-gradient(2px 2px at 40px 70px, hsl(var(--star-color) / 0.8), transparent),
              radial-gradient(1px 1px at 90px 40px, hsl(var(--star-color) / 0.6), transparent),
              radial-gradient(1px 1px at 130px 80px, hsl(var(--star-color) / 0.4), transparent),
              radial-gradient(2px 2px at 160px 30px, hsl(var(--star-color) / 0.7), transparent)
            `,
            backgroundRepeat: 'repeat',
            backgroundSize: '200px 100px',
            animation: 'stars 200s linear infinite',
            zIndex: -2
          }}
        />
        
        {/* Earth from space background */}
        <div 
          className="fixed bottom-[-40%] left-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] rounded-full pointer-events-none"
          style={{
            backgroundImage: 'url(/earth-from-space-night-bg2.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: 'rgba(0, 100, 200, 0.3)', // Debug blue tint
            animation: 'earthFloat 60s ease-in-out infinite',
            filter: 'blur(0.5px)',
            transformOrigin: 'center',
            zIndex: -1
          }}
        />
        
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/challenges" element={<Challenges />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/street-epistemology" element={<StreetEpistemology />} />
            <Route path="/socratic-questioning" element={<SocraticQuestioning />} />
            <Route path="/scientific-method" element={<ScientificMethod />} />
            <Route path="/comedians" element={<Comedians />} />
            <Route path="/cognitive-biases" element={<CognitiveBiases />} />
            <Route path="/logical-fallacies" element={<LogicalFallacies />} />
            <Route path="/consciousness" element={<Consciousness />} />
            <Route path="/consensus" element={<ScientificConsensus />} />
            <Route path="/censorship" element={<Censorship />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
