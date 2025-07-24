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
          className="fixed top-0 left-0 w-[300%] h-[300%] opacity-80 pointer-events-none"
          style={{
            backgroundImage: `
              radial-gradient(3px 3px at 20px 30px, #ffffff, transparent),
              radial-gradient(3px 3px at 40px 70px, rgba(255,255,255,0.9), transparent),
              radial-gradient(2px 2px at 90px 40px, rgba(255,255,255,0.7), transparent),
              radial-gradient(2px 2px at 130px 80px, rgba(255,255,255,0.5), transparent),
              radial-gradient(3px 3px at 160px 30px, rgba(255,255,255,0.8), transparent),
              radial-gradient(2px 2px at 200px 100px, rgba(255,255,255,0.6), transparent),
              radial-gradient(1px 1px at 250px 50px, rgba(255,255,255,0.4), transparent)
            `,
            backgroundRepeat: 'repeat',
            backgroundSize: '300px 150px',
            animation: 'stars 300s linear infinite',
            zIndex: 1
          }}
        />
        
        {/* Earth from space background */}
        <div 
          className="fixed bottom-[-30%] left-1/2 w-[100vw] h-[100vw] max-w-[1000px] max-h-[1000px] rounded-full pointer-events-none"
          style={{
            backgroundImage: 'url(/earth-from-space-night-bg2.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            animation: 'earthFloat 120s ease-in-out infinite',
            filter: 'blur(0.5px) drop-shadow(0 0 50px rgba(66, 153, 225, 0.6))',
            transformOrigin: 'center',
            zIndex: 2
          }}
        />
        
        {/* Content wrapper with higher z-index */}
        <div className="relative" style={{ zIndex: 10 }}>
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
        </div>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
