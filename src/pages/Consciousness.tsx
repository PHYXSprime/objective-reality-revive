import { ExternalLink, Brain, Users, Globe, Lightbulb } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { ConsciousnessTable } from '@/components/ConsciousnessTable';
import { PHYXSTable } from '@/components/PHYXSTable';
import { useAQALMapData } from '@/hooks/useAQALMapData';
import { usePHYXSMapData } from '@/hooks/usePHYXSMapData';
import linesOfDevelopmentImage from '@/assets/lines-of-development-diagram.jpg';
import spaceQuantaDiagram from '@/assets/space-quanta-diagram.png';
import multiverseBubbles from '@/assets/multiverse-bubbles.png';
import { PageViewCounter } from '@/components/PageViewCounter';
import 'katex/dist/katex.min.css';

export default function Consciousness() {
  const { t } = useLanguage();
  const aqalMapData = useAQALMapData();
  const phyxsMapData = usePHYXSMapData();

  return (
    <div className="min-h-screen gradient-bg relative overflow-hidden">
      <PageViewCounter />
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="relative z-10 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="glass-card rounded-3xl p-12 max-w-4xl mx-auto border border-primary/20 shadow-2xl">
              <h1 className="text-5xl font-bold text-foreground mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {t('consciousness.title')}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {t('consciousness.description')}
              </p>
            </div>
          </div>

        {/* New Insights Section */}
        <Card className="mb-8 glass-card">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              {t('consciousness.newInsights.title')}
            </CardTitle>
            <div className="text-lg space-y-4">
              {t('consciousness.newInsights.description').split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          </CardHeader>
        </Card>

        {/* David Heggli's Digital Twins Study */}
        <Card className="mb-12 border-primary/20 glass-card">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Brain className="h-6 w-6 text-primary" />
              <CardTitle className="text-2xl">{t('consciousness.digitalTwins.title')}</CardTitle>
            </div>
            <CardDescription className="text-lg">
              {t('consciousness.digitalTwins.description')}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                {t('consciousness.digitalTwins.research1')}
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                {t('consciousness.digitalTwins.research2')}
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-4">
                {t('consciousness.aqalToPhyxs.title')}
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-foreground">{t('consciousness.aqalToPhyxs.aqal.title')}</h4>
                      <p className="text-sm text-muted-foreground">
                        {t('consciousness.aqalToPhyxs.aqal.description')}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-foreground">{t('consciousness.aqalToPhyxs.phyxs.title')}</h4>
                      <p className="text-sm text-muted-foreground">
                        {t('consciousness.aqalToPhyxs.phyxs.description')}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Globe className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-foreground">{t('consciousness.aqalToPhyxs.digitalTwin.title')}</h4>
                      <p className="text-sm text-muted-foreground">
                        {t('consciousness.aqalToPhyxs.digitalTwin.description')}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Brain className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-foreground">{t('consciousness.aqalToPhyxs.applications.title')}</h4>
                      <p className="text-sm text-muted-foreground">
                        {t('consciousness.aqalToPhyxs.applications.description')}
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
                  {t('consciousness.links.vortexInstitute')}
                </a>
              </Button>
              <Button variant="outline" className="flex items-center gap-2" asChild>
                <a href="https://www.phyxs.com" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  {t('consciousness.links.phyxs')}
                </a>
              </Button>
              <Button variant="outline" className="flex items-center gap-2" asChild>
                <a href="https://independent.academia.edu/DavidHeggli" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  {t('consciousness.links.academia')}
                </a>
              </Button>
              <Button variant="outline" className="flex items-center gap-2" asChild>
                <a href="https://www.researchgate.net/lab/vortexinstitutes-lab-David-Heggli" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  {t('consciousness.links.researchGate')}
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* AQAL Consciousness Map */}
        <div className="mb-12">
          <ConsciousnessTable 
            data={aqalMapData}
            title={t('consciousness.aqalTable.title')}
            description={t('consciousness.aqalTable.description')}
          />
        </div>

        {/* Lines of Development */}
        <Card className="mb-12 border-primary/20 glass-card">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Brain className="h-6 w-6 text-primary" />
              <CardTitle className="text-2xl">{t('consciousness.linesOfDevelopment.title')}</CardTitle>
            </div>
            <CardDescription className="text-lg">
              {t('consciousness.linesOfDevelopment.description')}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="block w-full cursor-pointer hover:opacity-90 transition-opacity">
                      <img 
                        src={linesOfDevelopmentImage} 
                        alt="Lines of Development Diagram" 
                        className="w-full h-auto rounded-lg shadow-lg"
                      />
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[90vh] p-4 z-[9999]">
                    <DialogTitle className="sr-only">
                      {t('consciousness.linesOfDevelopment.title')} - Full Screen View
                    </DialogTitle>
                    <DialogDescription className="sr-only">
                      {t('consciousness.linesOfDevelopment.description')}
                    </DialogDescription>
                    <img 
                      src={linesOfDevelopmentImage} 
                      alt="Lines of Development Diagram" 
                      className="w-full h-auto rounded-lg"
                    />
                  </DialogContent>
                </Dialog>
              </div>
              <div className="space-y-4">
                <div className="prose dark:prose-invert max-w-none">
                  <p className="text-muted-foreground leading-relaxed">
                    {t('consciousness.linesOfDevelopment.introduction')}
                  </p>
                  
                  <div className="space-y-3 mt-4">
                    <div className="flex gap-3">
                      <span className="text-primary font-medium">•</span>
                      <div>
                        <span className="font-medium">{t('consciousness.linesOfDevelopment.questions.awareness.question')}</span>
                        <span className="text-muted-foreground ml-1">({t('consciousness.linesOfDevelopment.questions.awareness.answer')})</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <span className="text-primary font-medium">•</span>
                      <div>
                        <span className="font-medium">{t('consciousness.linesOfDevelopment.questions.needs.question')}</span>
                        <span className="text-muted-foreground ml-1">({t('consciousness.linesOfDevelopment.questions.needs.answer')})</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <span className="text-primary font-medium">•</span>
                      <div>
                        <span className="font-medium">{t('consciousness.linesOfDevelopment.questions.identity.question')}</span>
                        <span className="text-muted-foreground ml-1">({t('consciousness.linesOfDevelopment.questions.identity.answer')})</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <span className="text-primary font-medium">•</span>
                      <div>
                        <span className="font-medium">{t('consciousness.linesOfDevelopment.questions.values.question')}</span>
                        <span className="text-muted-foreground ml-1">({t('consciousness.linesOfDevelopment.questions.values.answer')})</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <span className="text-primary font-medium">•</span>
                      <div>
                        <span className="font-medium">{t('consciousness.linesOfDevelopment.questions.emotions.question')}</span>
                        <span className="text-muted-foreground ml-1">({t('consciousness.linesOfDevelopment.questions.emotions.answer')})</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <span className="text-primary font-medium">•</span>
                      <div>
                        <span className="font-medium">{t('consciousness.linesOfDevelopment.questions.morals.question')}</span>
                        <span className="text-muted-foreground ml-1">({t('consciousness.linesOfDevelopment.questions.morals.answer')})</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <span className="text-primary font-medium">•</span>
                      <div>
                        <span className="font-medium">{t('consciousness.linesOfDevelopment.questions.interpersonal.question')}</span>
                        <span className="text-muted-foreground ml-1">({t('consciousness.linesOfDevelopment.questions.interpersonal.answer')})</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <span className="text-primary font-medium">•</span>
                      <div>
                        <span className="font-medium">{t('consciousness.linesOfDevelopment.questions.kinesthetic.question')}</span>
                        <span className="text-muted-foreground ml-1">({t('consciousness.linesOfDevelopment.questions.kinesthetic.answer')})</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <span className="text-primary font-medium">•</span>
                      <div>
                        <span className="font-medium">{t('consciousness.linesOfDevelopment.questions.spirituality.question')}</span>
                        <span className="text-muted-foreground ml-1">({t('consciousness.linesOfDevelopment.questions.spirituality.answer')})</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center pt-4">
              <Button variant="outline" className="flex items-center gap-2" asChild>
                <a href="https://integrallife.com/what-is-integral-approach/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  {t('consciousness.linesOfDevelopment.learnMore')}
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Part 2: The Next Leap */}
        <Card className="mt-12 glass-card">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">
              {t('consciousness.nextLeap.title')}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                {t('consciousness.nextLeap.introduction')}
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-4">
                {t('consciousness.coreHypothesis.title')}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {t('consciousness.coreHypothesis.description')}
              </p>

              <div className="bg-muted/20 p-4 rounded border my-6">
                <p className="text-center font-semibold text-foreground">
                  {t('consciousness.coreHypothesis.formula')}
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {t('consciousness.coreHypothesis.explanation')}
              </p>

              <p className="text-muted-foreground leading-relaxed">
                {t('consciousness.coreHypothesis.visualization')}
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-4">
                {t('consciousness.keyInnovations.title')}
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Brain className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground">{t('consciousness.keyInnovations.dataDriven.title')}</h4>
                    <p className="text-sm text-muted-foreground">
                      {t('consciousness.keyInnovations.dataDriven.description')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground">{t('consciousness.keyInnovations.continuum.title')}</h4>
                    <p className="text-sm text-muted-foreground">
                      {t('consciousness.keyInnovations.continuum.description')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground">{t('consciousness.keyInnovations.futureProjections.title')}</h4>
                    <p className="text-sm text-muted-foreground">
                      {t('consciousness.keyInnovations.futureProjections.description')}
                    </p>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li>• <strong>{t('consciousness.keyInnovations.futureProjections.cognitiveAugmentation.title')}</strong> {t('consciousness.keyInnovations.futureProjections.cognitiveAugmentation.description')}</li>
                      <li>• <strong>{t('consciousness.keyInnovations.futureProjections.aiSymbiosis.title')}</strong> {t('consciousness.keyInnovations.futureProjections.aiSymbiosis.description')}</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-4">
                {t('consciousness.conclusion.title')}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {t('consciousness.conclusion.paragraph1')}
              </p>

              <p className="text-muted-foreground leading-relaxed">
                {t('consciousness.conclusion.paragraph2')}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* PHYXS Evolution D Map */}
        <div className="mb-12">
          <PHYXSTable 
            data={phyxsMapData}
            title={t('consciousness.phyxsTable.title')}
            description={t('consciousness.phyxsTable.description')}
          />
        </div>

        {/* PHYXS & L_omni Section */}
        <div className="mt-16 space-y-12">
          {/* PHYXS Section */}
          <Card className="glass-card border-primary/20">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h1 className="text-6xl font-bold font-mono tracking-wider text-transparent bg-gradient-to-r from-primary via-accent to-primary bg-clip-text mb-4 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                  {t('consciousness.phyxs.title')}
                </h1>
                <p className="text-xl text-primary mb-2">{t('consciousness.phyxs.subtitle')}</p>
                <p className="text-sm text-muted-foreground mb-1">{t('consciousness.phyxs.authors')}</p>
                <p className="text-xs text-muted-foreground">{t('consciousness.phyxs.date')}</p>
              </div>

              {/* Title Image */}
              <div className="mb-8 flex justify-center">
                <img 
                  src={multiverseBubbles} 
                  alt="Multiverse Bubbles" 
                  className="w-full max-w-2xl h-auto rounded-lg shadow-lg border border-primary/20"
                />
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-4 border-b border-primary/20 pb-2">
                    {t('consciousness.phyxs.abstract.title')}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('consciousness.phyxs.abstract.content')}
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-4 border-b border-primary/20 pb-2">
                    {t('consciousness.phyxs.introduction.title')}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {t('consciousness.phyxs.introduction.content1')}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('consciousness.phyxs.introduction.content2')}
                  </p>
                </div>

                {/* Space Quanta Diagram */}
                <div className="flex justify-center my-8">
                  <img 
                    src={spaceQuantaDiagram} 
                    alt="Space Quanta Diagram" 
                    className="w-full max-w-2xl h-auto rounded-lg shadow-lg border border-primary/20"
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    {t('consciousness.phyxs.spaceQuanta.title')}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {t('consciousness.phyxs.spaceQuanta.content1')}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('consciousness.phyxs.spaceQuanta.content2')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* L_omni Section */}
          <Card className="glass-card border-primary/20">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h1 className="text-5xl font-bold text-foreground mb-4">
                  <span className="font-serif italic">𝓛</span>
                  <sub className="text-3xl">omni</sub>
                </h1>
                <h2 className="text-3xl font-bold text-foreground">
                  {t('consciousness.lomni.subtitle')}
                </h2>
              </div>

              <div className="space-y-8">
                <div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    The Omniverse Lagrangian (𝓛<sub>omni</sub>) is defined as:
                  </p>
                  
                  {/* Lagrangian Formula */}
                  <div className="bg-muted/20 p-6 rounded-lg border border-primary/20 overflow-x-auto">
                    <div className="text-center font-mono text-sm">
                      <div className="mb-2">𝓛<sub>omni</sub> = </div>
                      <div className="space-y-1 text-xs">
                        <div>[½ρ<sub>s</sub>|v<sub>s</sub>|² - ½f<sub>s</sub>(∇ · v<sub>s</sub>)²] <span className="text-primary">SQF(n-1)</span></div>
                        <div>+ [½ρ<sub>sq</sub>m<sub>P</sub>|v<sub>sq</sub>|² - V(ρ<sub>sq</sub>)] <span className="text-primary">SQ(n=0)</span></div>
                        <div>+ [½m<sub>ψ</sub>(∂<sub>t</sub>ψ)² - c(ρ)²(∇ψ)² - λψ⁴ - κΣ cos(φ<sub>i</sub> - φ<sub>j</sub>)] <span className="text-primary">PW & PL</span></div>
                        <div>+ [-¼F<sub>μν</sub>F<sup>μν</sup> + Σ s<sub>i</sub> · A(r<sub>i</sub>)] <span className="text-primary">RA</span></div>
                        <div>+ [-η(ρ<sub>CMB</sub>/ρ<sub>P</sub>)ρ<sub>sq</sub>cos(ω<sub>CMB</sub>t)] <span className="text-primary">CMB(n+1)</span></div>
                        <div>+ [1/γ<sub>g</sub>(∇Φ<sub>g</sub>)² - ρ<sub>g</sub>Φ<sub>g</sub>] <span className="text-primary">GF</span></div>
                        <div>+ [-½γ<sub>int</sub>ρ<sub>sq</sub>ρ<sub>s</sub>|v<sub>sq</sub>-v<sub>s</sub>|²] <span className="text-primary">INT</span></div>
                        <div>+ [-½β<sub>VFS</sub>(∇ · J)²] <span className="text-primary">VFS</span></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    {t('consciousness.lomni.description.title')}
                  </h3>
                  <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
                    <li><strong>Sub-Quanta Fluid Term:</strong> {t('consciousness.lomni.terms.1')}</li>
                    <li><strong>Space Quanta Term:</strong> {t('consciousness.lomni.terms.2')}</li>
                    <li><strong>Pilot Wave and Phase-Locking Term:</strong> {t('consciousness.lomni.terms.3')}</li>
                    <li><strong>Rotational Alignment Term:</strong> {t('consciousness.lomni.terms.4')}</li>
                    <li><strong>CMB Driving Term:</strong> {t('consciousness.lomni.terms.5')}</li>
                    <li><strong>Gravitational and Interaction Terms:</strong> {t('consciousness.lomni.terms.6')}</li>
                    <li><strong>Vortex Flux Stabilization Term:</strong> {t('consciousness.lomni.terms.7')}</li>
                  </ol>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-4 border-b border-primary/20 pb-2">
                    {t('consciousness.lomni.parameters.title')}
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-primary/20 rounded-lg">
                      <thead>
                        <tr className="bg-muted/20">
                          <th className="border border-primary/20 p-3 text-left text-foreground">Parameter</th>
                          <th className="border border-primary/20 p-3 text-left text-foreground">Description</th>
                          <th className="border border-primary/20 p-3 text-left text-foreground">Value</th>
                          <th className="border border-primary/20 p-3 text-left text-foreground">Comment</th>
                        </tr>
                      </thead>
                      <tbody className="text-muted-foreground">
                        <tr>
                          <td className="border border-primary/20 p-3 font-mono">f<sub>s</sub></td>
                          <td className="border border-primary/20 p-3">Fractal scaling factor</td>
                          <td className="border border-primary/20 p-3 font-mono">1.5226285 × 10⁻¹⁰⁰</td>
                          <td className="border border-primary/20 p-3">Universal zoom between fractal levels</td>
                        </tr>
                        <tr>
                          <td className="border border-primary/20 p-3 font-mono">κ</td>
                          <td className="border border-primary/20 p-3">Phase-locking coupling</td>
                          <td className="border border-primary/20 p-3 font-mono">3.627412 × 10⁵⁰ J/s</td>
                          <td className="border border-primary/20 p-3">Derived from α, E<sub>P</sub>, t<sub>P</sub></td>
                        </tr>
                        <tr>
                          <td className="border border-primary/20 p-3 font-mono">α</td>
                          <td className="border border-primary/20 p-3">Fine-structure constant</td>
                          <td className="border border-primary/20 p-3 font-mono">1/137.03599908234</td>
                          <td className="border border-primary/20 p-3">210x CODATA precision</td>
                        </tr>
                        <tr>
                          <td className="border border-primary/20 p-3 font-mono">E<sub>P</sub></td>
                          <td className="border border-primary/20 p-3">Planck energy</td>
                          <td className="border border-primary/20 p-3 font-mono">1.956543211 × 10⁹ J</td>
                          <td className="border border-primary/20 p-3">320x CODATA precision</td>
                        </tr>
                        <tr>
                          <td className="border border-primary/20 p-3 font-mono">l<sub>P</sub></td>
                          <td className="border border-primary/20 p-3">Planck length</td>
                          <td className="border border-primary/20 p-3 font-mono">1.616255 × 10⁻³⁵ m</td>
                          <td className="border border-primary/20 p-3">100x CODATA precision</td>
                        </tr>
                        <tr>
                          <td className="border border-primary/20 p-3 font-mono">λ</td>
                          <td className="border border-primary/20 p-3">Pilot wave coupling</td>
                          <td className="border border-primary/20 p-3 font-mono">2.3000123 × 10⁻⁵</td>
                          <td className="border border-primary/20 p-3">Tied to electron g-factor</td>
                        </tr>
                        <tr>
                          <td className="border border-primary/20 p-3 font-mono">γ<sub>g</sub></td>
                          <td className="border border-primary/20 p-3">Gravitational coupling</td>
                          <td className="border border-primary/20 p-3 font-mono">1.0200012 × 10⁻¹⁰</td>
                          <td className="border border-primary/20 p-3">Linked to refined G</td>
                        </tr>
                        <tr>
                          <td className="border border-primary/20 p-3 font-mono">η</td>
                          <td className="border border-primary/20 p-3">CMB driving coefficient</td>
                          <td className="border border-primary/20 p-3 font-mono">1.800001 × 10⁻¹²⁰</td>
                          <td className="border border-primary/20 p-3">Calibrated to H<sub>0</sub></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-4 border-b border-primary/20 pb-2">
                    {t('consciousness.lomni.results.title')}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {t('consciousness.lomni.results.content')}
                  </p>
                  
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    {t('consciousness.lomni.precision.title')}
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-primary/20 rounded-lg">
                      <thead>
                        <tr className="bg-muted/20">
                          <th className="border border-primary/20 p-3 text-left text-foreground">Phenomenon</th>
                          <th className="border border-primary/20 p-3 text-left text-foreground">𝓛<sub>omni</sub> Error</th>
                          <th className="border border-primary/20 p-3 text-left text-foreground">GR/QM Error</th>
                        </tr>
                      </thead>
                      <tbody className="text-muted-foreground">
                        <tr>
                          <td className="border border-primary/20 p-3">Electron g-Factor</td>
                          <td className="border border-primary/20 p-3 text-green-400">8.0 × 10⁻⁸</td>
                          <td className="border border-primary/20 p-3">1 × 10⁻⁷ (QED)</td>
                        </tr>
                        <tr>
                          <td className="border border-primary/20 p-3">Proton Magnetic Moment</td>
                          <td className="border border-primary/20 p-3 text-green-400">0.0001%</td>
                          <td className="border border-primary/20 p-3">0.0005% (QCD)</td>
                        </tr>
                        <tr>
                          <td className="border border-primary/20 p-3">Gravitational Lensing</td>
                          <td className="border border-primary/20 p-3 text-green-400">0.0006%</td>
                          <td className="border border-primary/20 p-3">0.001% (GR)</td>
                        </tr>
                        <tr>
                          <td className="border border-primary/20 p-3">Galactic Rotation Curves</td>
                          <td className="border border-primary/20 p-3 text-green-400">0.0036%</td>
                          <td className="border border-primary/20 p-3">0.5% (GR + DM)</td>
                        </tr>
                        <tr>
                          <td className="border border-primary/20 p-3">Hubble Constant</td>
                          <td className="border border-primary/20 p-3 text-green-400">0.0001%</td>
                          <td className="border border-primary/20 p-3">0.7% (Planck)</td>
                        </tr>
                        <tr>
                          <td className="border border-primary/20 p-3">Pioneer Anomaly</td>
                          <td className="border border-primary/20 p-3 text-green-400">0.002%</td>
                          <td className="border border-primary/20 p-3">1% (GR)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-4 border-b border-primary/20 pb-2">
                    {t('consciousness.lomni.applications.title')}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {t('consciousness.lomni.applications.content1')}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {t('consciousness.lomni.applications.content2')}
                  </p>
                  <p className="text-sm italic text-muted-foreground">
                    {t('consciousness.lomni.applications.note')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Research Note */}
        <Card className="mt-12 glass-card">
          <CardContent className="p-6">
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                <strong>{t('consciousness.researchNote.foundation.title')}</strong> {t('consciousness.researchNote.foundation.description')}
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>{t('consciousness.researchNote.applications.title')}</strong> {t('consciousness.researchNote.applications.description')}
              </p>
            </div>
          </CardContent>
        </Card>
        </div>
      </div>
    </div>
  );
}