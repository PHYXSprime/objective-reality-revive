import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SimpleProvider } from "@/test-simple-context";
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
import Propaganda from "./pages/Propaganda";
import Indoctrination from "./pages/Indoctrination";
import DogmaticBeliefs from "./pages/DogmaticBeliefs";
import CoEvolution from "./pages/CoEvolution";
import LazyThinking from "./pages/LazyThinking";
import PsychologicalWeakness from "./pages/PsychologicalWeakness";
import Ego from "./pages/Ego";
import CriticalThinking from "./pages/CriticalThinking";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <SimpleProvider>
        {/* Background Elements */}
        <div className="starfield-container"></div>
        <div className="earth-container"></div>
        
        {/* Main App Content */}
        <div className="app-content" style={{position: 'relative', zIndex: 1000}}>
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
              <Route path="/propaganda" element={<Propaganda />} />
              <Route path="/indoctrination" element={<Indoctrination />} />
              <Route path="/dogmas" element={<DogmaticBeliefs />} />
              <Route path="/co-evolution" element={<CoEvolution />} />
              <Route path="/lazy-thinking" element={<LazyThinking />} />
              <Route path="/psychological-weakness" element={<PsychologicalWeakness />} />
              <Route path="/ego" element={<Ego />} />
              <Route path="/critical-thinking" element={<CriticalThinking />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      </SimpleProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;