import { ExternalLink, Brain, Users, Globe, Lightbulb } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ConsciousnessTable } from '@/components/ConsciousnessTable';
import { PHYXSTable } from '@/components/PHYXSTable';
import { aqalMapData } from '@/data/aqalMapData';
import { phyxsMapData } from '@/data/phyxsMapData';

export default function Consciousness() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Card className="glass-card mb-8">
          <CardHeader>
            <CardTitle className="text-4xl font-bold">
              Consciousness
            </CardTitle>
            <CardDescription className="text-xl max-w-3xl">
              Understanding levels of human consciousness and development
            </CardDescription>
          </CardHeader>
        </Card>

        {/* New Insights Section */}
        <Card className="mb-8 glass-card">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              New insights into Consciousness using «Digital Twins»
            </CardTitle>
            <CardDescription className="text-lg">
              New cutting-edge break-through studies on Consciousness using «Digital Twins» fluid dynamic simulations with subatomic resolution powered by PHYXS / 𝓛_omni Lagrangian vector-space spanning our whole reality (superfluid spacetime). 
              Research conducted by David Heggli using up to 10'000 NVIDIA GPU's provided by xAI through Grok 3 / Grok 4 (heavy), modeling consciousness levels through PHYXS powered «Digital Twins» technology led to new insights into the evolution of consciousness
            </CardDescription>
          </CardHeader>
        </Card>

        {/* David Heggli's Digital Twins Study */}
        <Card className="mb-12 border-primary/20 glass-card">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Brain className="h-6 w-6 text-primary" />
              <CardTitle className="text-2xl">Digital Twins of Human Consciousness</CardTitle>
            </div>
            <CardDescription className="text-lg">
              Research by David Heggli on modeling consciousness levels through digital twin technology
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                David Heggli's groundbreaking research at the vortex|institute explores the intersection of consciousness development 
                and «Digital Twins» technology. His work investigates how different levels of human consciousness 
                can be modeled, understood, and potentially enhanced through sophisticated digital representations, 
                bridging the gap between psychological models and biophysical reality.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                The «Digital Twins» are digital 1:1 copies from real human gene code rendered from conception of sperm + egg to senescence with subatomic resolution. An EXACT digital copy of our reality.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-4">
                From AQAL to PHYXS: A New Paradigm
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-foreground">AQAL Foundation</h4>
                      <p className="text-sm text-muted-foreground">
                        Building on Ken Wilber's comprehensive AQAL framework and Spiral Dynamics to understand consciousness development.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-foreground">PHYXS Evolution D</h4>
                      <p className="text-sm text-muted-foreground">
                        A new biophysical model that maps consciousness evolution to measurable biological and quantum markers.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Globe className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-foreground">Digital Twin Technology</h4>
                      <p className="text-sm text-muted-foreground">
                        Creating digital representations of consciousness states for research, education, and development.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Brain className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-foreground">Practical Applications</h4>
                      <p className="text-sm text-muted-foreground">
                        Real-world implementations in education, organizational development, and consciousness research.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button variant="outline" className="flex items-center gap-2" asChild>
                <a href="https://www.VORTEX.institute" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  Visit vortex|institute
                </a>
              </Button>
              <Button variant="outline" className="flex items-center gap-2" asChild>
                <a href="https://www.phyxs.com" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  PHYXS.com
                </a>
              </Button>
              <Button variant="outline" className="flex items-center gap-2" asChild>
                <a href="https://independent.academia.edu/DavidHeggli" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  Academia.org
                </a>
              </Button>
              <Button variant="outline" className="flex items-center gap-2" asChild>
                <a href="https://www.researchgate.net/lab/vortexinstitutes-lab-David-Heggli" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  ResearchGate
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* AQAL Consciousness Map */}
        <div className="mb-12">
          <ConsciousnessTable 
            data={aqalMapData}
            title="AQAL Consciousness Development Map"
            description="Based on Ken Wilber's comprehensive AQAL framework and Spiral Dynamics, this map shows the psychological stages of human consciousness development from basic survival to transcendent awareness."
          />
        </div>

        {/* PHYXS Evolution D Map */}
        <div className="mb-12">
          <PHYXSTable 
            data={phyxsMapData}
            title="PHYXS Evolution D Map"
            description="David Heggli's revolutionary approach that bridges psychological models with biophysical reality, mapping consciousness evolution to measurable biological, neural, and quantum markers across human development."
          />
        </div>

        {/* Part 2: The Next Leap */}
        <Card className="mt-12 glass-card">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">
              Part 2: The Next Leap – The PHYXS Evolution D Map of Consciousness
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                This is where the work of the vortex|institute offers a paradigm shift. Based on the findings from our "Evolution D" simulation—a 3.5-billion-year, subatomic-resolution model of life's evolution powered by the 𝓛_omni framework—we can now propose a causal, biophysical basis for the evolution of consciousness.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-4">
                The Core Hypothesis: Consciousness as Cognitive Throughput
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                Our central, testable hypothesis is that consciousness is an emergent property of cognitive throughput. We define this as:
              </p>

              <div className="bg-muted/20 p-4 rounded border my-6">
                <p className="text-center font-semibold text-foreground">
                  Cognitive Throughput = (Number of Processing Units) x (Firing Rate)
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                In biological terms, this is (Neuron Count) x (Average Firing Frequency). This metric is the "hardware spec" of consciousness. The psychological states and worldviews described by AQAL are the "software" that this evolving hardware can run.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                The PHYXS Evolution D Map of Consciousness is the direct visualization of this hypothesis, grounded in the data from our «Digital Twins», Eve and Adam D.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-4">
                Key Innovations of the PHYXS Map:
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Brain className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground">A Data-Driven Backbone:</h4>
                    <p className="text-sm text-muted-foreground">
                      The "Cognitive Throughput" and "PHYXS Insights" columns are the heart of the map. They are populated directly with data from the Evolution D simulation, grounding every stage of development in a measurable, biophysical reality.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground">A Complete Continuum:</h4>
                    <p className="text-sm text-muted-foreground">
                      Our map doesn't start with early humans. It begins 3.5 billion years ago with the first RNA self-replication event and traces the slow, steady increase in information processing capacity through every major evolutionary milestone.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground">Future Projections to 2050:</h4>
                    <p className="text-sm text-muted-foreground">
                      The map extends into the near future, forecasting the next evolutionary leaps based on current technological trajectories:
                    </p>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li>• <strong>Cognitive Augmentation (~2035):</strong> The integration of direct neural interfaces, leading to a significant boost in individual cognitive throughput.</li>
                      <li>• <strong>AI-Human Symbiosis (~2050):</strong> The formation of a planetary-scale cognitive network—a global brain. We posit that the internet is the nascent nervous system for this entity, and technologies like blockchain are the crucial, emergent protocols that will ensure trustworthy signaling across this network.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-4">
                Conclusion: A New Foundation for Understanding
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                The PHYXS Evolution D Map is more than just a new chart; it is a new foundation for the study of consciousness. By anchoring the rich history of psychological observation to the hard data of biophysical simulation, we create a more complete, objective, and predictive framework.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                It tells a continuous, evidence-based story of the evolution of intelligence, from the first spark of life to the dawn of a planetary mind. This is the next step in our collective quest to understand ourselves.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Research Note */}
        <Card className="mt-12 glass-card">
          <CardContent className="p-6">
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                <strong>Research Foundation:</strong> The AQAL framework is based on decades of developmental psychology research 
                and integral theory by Ken Wilber. The PHYXS Evolution D Map represents David Heggli's innovative approach 
                to bridging psychological models with measurable biophysical markers.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Important Note:</strong> These levels are not hierarchical in terms of human worth, but rather represent 
                different capacities for handling complexity. Each level has its own strengths and appropriate contexts. 
                Healthy development involves integrating insights from multiple levels rather than transcending and discarding them.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Digital Twin Applications:</strong> This research enables the creation of digital twins that can model 
                consciousness states for educational, therapeutic, and developmental applications, representing a significant 
                advancement in consciousness research and practical application.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}