import { MessageSquare, Users, Heart, Target, CheckCircle, AlertCircle, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SolutionNavigation } from '@/components/SolutionNavigation';
import { Link } from 'react-router-dom';

export default function StreetEpistemology() {
  const { t } = useLanguage();

  const sePrinciples = [
    {
      title: t('streetEpistemology.principles.nonConfrontational'),
      description: t('streetEpistemology.principles.nonConfrontationalDesc')
    },
    {
      title: t('streetEpistemology.principles.genuineCuriosity'),
      description: t('streetEpistemology.principles.genuineCuriosityDesc')
    },
    {
      title: t('streetEpistemology.principles.focusOnMethod'),
      description: t('streetEpistemology.principles.focusOnMethodDesc')
    },
    {
      title: t('streetEpistemology.principles.collaborativeInquiry'),
      description: t('streetEpistemology.principles.collaborativeInquiryDesc')
    }
  ];

  const seQuestions = [
    t('streetEpistemology.questions.howDidYouBelieve'),
    t('streetEpistemology.questions.whatEvidenceChange'),
    t('streetEpistemology.questions.howConfident'),
    t('streetEpistemology.questions.whatMethod'),
    t('streetEpistemology.questions.wouldWantToKnow'),
    t('streetEpistemology.questions.thinkingVsKnowing')
  ];

  const commonMistakes = [
    {
      mistake: t('streetEpistemology.mistakes.confrontational'),
      correction: t('streetEpistemology.corrections.stayCalm')
    },
    {
      mistake: t('streetEpistemology.mistakes.changeImmediately'),
      correction: t('streetEpistemology.corrections.plantSeeds')
    },
    {
      mistake: t('streetEpistemology.mistakes.leadingQuestions'),
      correction: t('streetEpistemology.corrections.openEndedQuestions')
    },
    {
      mistake: t('streetEpistemology.mistakes.emotionallyInvested'),
      correction: t('streetEpistemology.corrections.focusOnProcess')
    }
  ];

  return (
    <div className="min-h-screen py-8 pr-20">
      <SolutionNavigation />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Card className="glass-card mb-8">
          <CardHeader>
            <CardTitle className="text-4xl font-bold">
              {t('streetEpistemology.title')}
            </CardTitle>
            <CardDescription className="text-xl max-w-3xl">
              {t('streetEpistemology.subtitle')}
            </CardDescription>
          </CardHeader>
        </Card>

        {/* About Dr. Peter Boghossian */}
        <Card className="mb-12 border-primary/20 glass-card">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Users className="h-6 w-6 text-primary" />
              <CardTitle className="text-2xl">{t('streetEpistemology.aboutBoghossian')}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              {t('streetEpistemology.aboutBoghossianText')}
            </p>
          </CardContent>
        </Card>

        {/* Core Principles */}
        <Card className="glass-card mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              {t('streetEpistemology.corePrinciples')}
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              {t('streetEpistemology.corePrinciplesDesc')}
            </CardDescription>
          </CardHeader>
        </Card>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {sePrinciples.map((principle, index) => (
            <Card key={index} className="glass-card">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Heart className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">{principle.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {principle.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Questions */}
        <Card className="mb-12 glass-card">
          <CardHeader>
            <div className="flex items-center gap-3">
              <MessageSquare className="h-6 w-6 text-primary" />
              <CardTitle className="text-2xl">{t('streetEpistemology.essentialQuestions')}</CardTitle>
            </div>
            <CardDescription>
              {t('streetEpistemology.essentialQuestionsDesc')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {seQuestions.map((question, index) => (
                <div key={index} className="p-4 border border-border rounded-lg">
                  <p className="text-foreground font-medium">"{question}"</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* The SE Process */}
        <Card className="mb-12 glass-card">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Target className="h-6 w-6 text-primary" />
              <CardTitle className="text-2xl">{t('streetEpistemology.seProcess')}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{t('streetEpistemology.process.establishRapport')}</h4>
                  <p className="text-sm text-muted-foreground">{t('streetEpistemology.process.establishRapportDesc')}</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{t('streetEpistemology.process.clarifyClaim')}</h4>
                  <p className="text-sm text-muted-foreground">{t('streetEpistemology.process.clarifyClaimDesc')}</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{t('streetEpistemology.process.exploreMethod')}</h4>
                  <p className="text-sm text-muted-foreground">{t('streetEpistemology.process.exploreMethodDesc')}</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">4</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{t('streetEpistemology.process.examineReliability')}</h4>
                  <p className="text-sm text-muted-foreground">{t('streetEpistemology.process.examineReliabilityDesc')}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Common Mistakes */}
        <Card className="mb-12 glass-card">
          <CardHeader>
            <div className="flex items-center gap-3">
              <AlertCircle className="h-6 w-6 text-primary" />
              <CardTitle className="text-2xl">{t('streetEpistemology.commonMistakes')}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {commonMistakes.map((item, index) => (
                <div key={index} className="grid md:grid-cols-2 gap-4 p-4 border border-border rounded-lg">
                  <div>
                    <h4 className="font-semibold text-red-600 dark:text-red-400 mb-2">{t('streetEpistemology.dontLabel')}</h4>
                    <p className="text-sm text-muted-foreground">{item.mistake}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">{t('streetEpistemology.doLabel')}</h4>
                    <p className="text-sm text-muted-foreground">{item.correction}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Benefits */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="glass-card">
            <CardHeader>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-primary" />
                <CardTitle>{t('streetEpistemology.whyItWorks')}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li>• {t('streetEpistemology.benefits.nonThreatening')}</li>
                <li>• {t('streetEpistemology.benefits.focusOnProcess')}</li>
                <li>• {t('streetEpistemology.benefits.selfDiscovery')}</li>
                <li>• {t('streetEpistemology.benefits.criticalThinking')}</li>
                <li>• {t('streetEpistemology.benefits.lastingChange')}</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Target className="h-6 w-6 text-primary" />
                <CardTitle>{t('streetEpistemology.bestPractices')}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li>• {t('streetEpistemology.practices.startEasy')}</li>
                <li>• {t('streetEpistemology.practices.listenMore')}</li>
                <li>• {t('streetEpistemology.practices.sayDontKnow')}</li>
                <li>• {t('streetEpistemology.practices.focusEpistemology')}</li>
                <li>• {t('streetEpistemology.practices.practiceYourself')}</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <Card className="glass-card">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {t('streetEpistemology.readyToPractice')}
            </h3>
            <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
              {t('streetEpistemology.readyToPracticeDesc')}
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button asChild size="lg" className="flex items-center gap-2">
                <Link to="/socratic-questioning">
                  <ExternalLink className="h-4 w-4" />
                  {t('streetEpistemology.practiceExamples')}
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/socratic-questioning">
                  {t('streetEpistemology.learnSocratic')}
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg" className="flex items-center gap-2">
                <a href="https://www.streetepistemology.com" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  Visit StreetEpistemology.com
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}