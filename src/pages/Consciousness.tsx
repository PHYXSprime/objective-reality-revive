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
              {t('consciousness.title')}
            </CardTitle>
            <CardDescription className="text-xl max-w-3xl">
              {t('consciousness.description')}
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
                David Heggli's groundbreaking research at the VORTEX Institute explores the intersection of consciousness development 
                and digital twin technology. His work investigates how different levels of human consciousness 
                can be modeled, understood, and potentially enhanced through sophisticated digital representations, 
                bridging the gap between psychological models and biophysical reality.
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
            
            <div className="flex gap-4 pt-4">
              <Button variant="outline" className="flex items-center gap-2" asChild>
                <a href="https://www.phyxs.com" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  Visit PHYXS.com
                </a>
              </Button>
              <Button variant="outline" className="flex items-center gap-2" asChild>
                <a href="https://www.vortexinstitute.org" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  VORTEX Institute
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