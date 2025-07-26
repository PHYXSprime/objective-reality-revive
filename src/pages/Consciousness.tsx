import { ExternalLink, Brain, Users, Globe, Lightbulb } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { ConsciousnessTable } from '@/components/ConsciousnessTable';
import { PHYXSTable } from '@/components/PHYXSTable';
import { useAQALMapData } from '@/hooks/useAQALMapData';
import { usePHYXSMapData } from '@/hooks/usePHYXSMapData';
import linesOfDevelopmentImage from '@/assets/lines-of-development-diagram.jpg';

export default function Consciousness() {
  const { t } = useLanguage();
  const aqalMapData = useAQALMapData();
  const phyxsMapData = usePHYXSMapData();

  return (
    <div className="min-h-screen gradient-bg relative overflow-hidden">
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
            <CardDescription className="text-lg">
              {t('consciousness.newInsights.description')}
            </CardDescription>
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
                  <DialogContent className="max-w-4xl max-h-[90vh] p-4">
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