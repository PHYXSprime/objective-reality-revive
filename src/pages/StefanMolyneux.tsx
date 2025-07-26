import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Play, ExternalLink, ArrowRight, Quote, Lightbulb, Star } from 'lucide-react';
import { SolutionNavigation } from '@/components/SolutionNavigation';

export default function StefanMolyneux() {
  const { t } = useLanguage();

  const upbPrinciples = [
    {
      title: t('stefanMolyneux.upb.principle1.title'),
      description: t('stefanMolyneux.upb.principle1.description')
    },
    {
      title: t('stefanMolyneux.upb.principle2.title'),
      description: t('stefanMolyneux.upb.principle2.description')
    },
    {
      title: t('stefanMolyneux.upb.principle3.title'),
      description: t('stefanMolyneux.upb.principle3.description')
    }
  ];

  const philosophy = [
    {
      icon: Lightbulb,
      title: t('stefanMolyneux.philosophy.rational.title'),
      description: t('stefanMolyneux.philosophy.rational.description')
    },
    {
      icon: Star,
      title: t('stefanMolyneux.philosophy.evidence.title'),
      description: t('stefanMolyneux.philosophy.evidence.description')
    },
    {
      icon: Quote,
      title: t('stefanMolyneux.philosophy.peaceful.title'),
      description: t('stefanMolyneux.philosophy.peaceful.description')
    }
  ];

  return (
    <div className="min-h-screen gradient-bg relative overflow-hidden">
      {/* Solution Navigation */}
      <SolutionNavigation />
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="relative z-10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="glass-card rounded-3xl p-12 max-w-5xl mx-auto border border-primary/20 shadow-2xl">
              <h1 className="text-5xl font-bold text-foreground mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {t('stefanMolyneux.title')}
              </h1>
              <h2 className="text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                {t('stefanMolyneux.subtitle')}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t('stefanMolyneux.introduction')}
              </p>
            </div>
          </div>

          {/* Universally Preferable Behaviour Section */}
          <Card className="mb-16 glass-card rounded-3xl border border-primary/20 shadow-lg">
            <CardHeader className="pb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-blue-600 flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-3xl text-foreground">{t('stefanMolyneux.upb.title')}</CardTitle>
                  <CardDescription className="text-lg mt-2">
                    {t('stefanMolyneux.upb.description')}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="text-center p-8 bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-900/20 dark:to-blue-900/20 rounded-2xl border border-emerald-200/50 dark:border-emerald-800/50">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  {t('stefanMolyneux.upb.core')}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
                  {t('stefanMolyneux.upb.coreText')}
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {upbPrinciples.map((principle, index) => (
                  <div key={index} className="text-center p-6 rounded-xl bg-muted/30 hover:bg-muted/40 transition-colors">
                    <h4 className="font-semibold text-foreground mb-4 text-lg">{principle.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <Button asChild className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:opacity-90 transition-opacity">
                  <a href="http://cdn.media.freedomainradio.com/feed/books/UPB/Universally_Preferable_Behaviour_UPB_by_Stefan_Molyneux_PDF.pdf" 
                     target="_blank" 
                     rel="noopener noreferrer">
                    <BookOpen className="mr-2 h-4 w-4" />
                    {t('stefanMolyneux.upb.downloadPdf')}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Video Section */}
          <Card className="mb-16 glass-card rounded-3xl border border-primary/20 shadow-lg">
            <CardHeader className="pb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center">
                  <Play className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-3xl text-foreground">{t('stefanMolyneux.video.title')}</CardTitle>
                  <CardDescription className="text-lg mt-2">
                    {t('stefanMolyneux.video.description')}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-muted/20 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {t('stefanMolyneux.video.enslavementTitle')}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6 max-w-3xl mx-auto">
                  {t('stefanMolyneux.video.enslavementDescription')}
                </p>
                <div className="aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden bg-black/20 border border-border/50">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://odysee.com/$/embed/@vortexinstitute:4/your-enslavement:5"
                    title="The Story of Your Enslavement"
                    frameBorder="0"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <div className="mt-6">
                  <Button asChild variant="outline">
                    <a href="https://odysee.com/@vortexinstitute:4/your-enslavement:5" 
                       target="_blank" 
                       rel="noopener noreferrer">
                      {t('stefanMolyneux.video.watchOnOdysee')}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Philosophy Section */}
          <Card className="mb-16 glass-card rounded-3xl border border-primary/20 shadow-lg">
            <CardHeader className="pb-6">
              <CardTitle className="text-3xl text-foreground text-center">{t('stefanMolyneux.philosophy.title')}</CardTitle>
              <CardDescription className="text-lg text-center">
                {t('stefanMolyneux.philosophy.description')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8">
                {philosophy.map((item, index) => (
                  <div key={index} className="text-center p-6 rounded-xl bg-muted/30 hover:bg-muted/40 transition-colors group">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <item.icon className="h-7 w-7 text-white" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-4 text-lg">{item.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Key Ideas */}
          <Card className="mb-16 glass-card rounded-3xl border border-primary/20 shadow-lg">
            <CardHeader>
              <CardTitle className="text-3xl text-foreground text-center">{t('stefanMolyneux.keyIdeas.title')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-foreground">{t('stefanMolyneux.keyIdeas.anarchCapitalism')}</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('stefanMolyneux.keyIdeas.anarchCapitalismText')}
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-foreground">{t('stefanMolyneux.keyIdeas.nonAggression')}</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('stefanMolyneux.keyIdeas.nonAggressionText')}
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-foreground">{t('stefanMolyneux.keyIdeas.reasonEvidence')}</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('stefanMolyneux.keyIdeas.reasonEvidenceText')}
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-foreground">{t('stefanMolyneux.keyIdeas.peacefulParenting')}</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('stefanMolyneux.keyIdeas.peacefulParentingText')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Resources & Call to Action */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="glass-card rounded-2xl border border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl">{t('stefanMolyneux.resources.title')}</CardTitle>
                <CardDescription className="text-lg">
                  {t('stefanMolyneux.resources.description')}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button asChild className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 hover:opacity-90 transition-opacity">
                  <a href="http://cdn.media.freedomainradio.com/feed/books/UPB/Universally_Preferable_Behaviour_UPB_by_Stefan_Molyneux_PDF.pdf" 
                     target="_blank" 
                     rel="noopener noreferrer">
                    <BookOpen className="mr-2 h-4 w-4" />
                    {t('stefanMolyneux.resources.upbBook')}
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <a href="https://odysee.com/@vortexinstitute:4/your-enslavement:5" 
                     target="_blank" 
                     rel="noopener noreferrer">
                    <Play className="mr-2 h-4 w-4" />
                    {t('stefanMolyneux.resources.enslavementVideo')}
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-card rounded-2xl border border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl">{t('stefanMolyneux.apply.title')}</CardTitle>
                <CardDescription className="text-lg">
                  {t('stefanMolyneux.apply.description')}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button asChild variant="outline" className="w-full">
                  <a href="/critical-thinking">
                    {t('stefanMolyneux.apply.criticalThinking')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <a href="/socratic-questioning">
                    {t('stefanMolyneux.apply.socraticMethod')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}