import { Brain, Users, BookOpen, Target, AlertTriangle, Eye, Shield } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChallengeNavigation } from '@/components/ChallengeNavigation';

export default function Indoctrination() {
  const { t } = useLanguage();

  const sources = [
    {
      icon: Users,
      title: t('indoctrination.source.family'),
      description: t('indoctrination.source.family.desc'),
      examples: [
        t('indoctrination.source.family.example1'),
        t('indoctrination.source.family.example2'),
        t('indoctrination.source.family.example3'),
        t('indoctrination.source.family.example4')
      ]
    },
    {
      icon: BookOpen,
      title: t('indoctrination.source.education'),
      description: t('indoctrination.source.education.desc'),
      examples: [
        t('indoctrination.source.education.example1'),
        t('indoctrination.source.education.example2'),
        t('indoctrination.source.education.example3'),
        t('indoctrination.source.education.example4')
      ]
    },
    {
      icon: Eye,
      title: t('indoctrination.source.media'),
      description: t('indoctrination.source.media.desc'),
      examples: [
        t('indoctrination.source.media.example1'),
        t('indoctrination.source.media.example2'),
        t('indoctrination.source.media.example3'),
        t('indoctrination.source.media.example4')
      ]
    },
    {
      icon: Shield,
      title: t('indoctrination.source.state'),
      description: t('indoctrination.source.state.desc'),
      examples: [
        t('indoctrination.source.state.example1'),
        t('indoctrination.source.state.example2'),
        t('indoctrination.source.state.example3'),
        t('indoctrination.source.state.example4')
      ]
    }
  ];

  const stages = [
    {
      phase: t('indoctrination.stage.earlyChildhood'),
      description: t('indoctrination.stage.earlyChildhood.desc'),
      impact: t('indoctrination.stage.earlyChildhood.impact')
    },
    {
      phase: t('indoctrination.stage.schoolAge'),
      description: t('indoctrination.stage.schoolAge.desc'),
      impact: t('indoctrination.stage.schoolAge.impact')
    },
    {
      phase: t('indoctrination.stage.adolescence'),
      description: t('indoctrination.stage.adolescence.desc'),
      impact: t('indoctrination.stage.adolescence.impact')
    },
    {
      phase: t('indoctrination.stage.adulthood'),
      description: t('indoctrination.stage.adulthood.desc'),
      impact: t('indoctrination.stage.adulthood.impact')
    }
  ];

  return (
    <div className="min-h-screen py-8 pr-20">
      <ChallengeNavigation />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="glass-card rounded-2xl p-8 max-w-4xl mx-auto mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-6">
              {t('indoctrination.title')}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('indoctrination.subtitle')}
            </p>
          </div>
        </div>

        {/* Definition */}
        <div className="glass-card rounded-2xl p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Brain className="h-6 w-6 text-purple-600" />
            <h2 className="text-2xl font-bold text-foreground">{t('indoctrination.definition')}</h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            {t('indoctrination.definitionText')}
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-2">{t('indoctrination.keyDifference')}</h4>
              <p className="text-sm text-muted-foreground">
                {t('indoctrination.keyDifferenceText')}
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-2">{t('indoctrination.timingMatters')}</h4>
              <p className="text-sm text-muted-foreground">
                {t('indoctrination.timingMattersText')}
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-2">{t('indoctrination.oftenInvisible')}</h4>
              <p className="text-sm text-muted-foreground">
                {t('indoctrination.oftenInvisibleText')}
              </p>
            </div>
          </div>
        </div>

        {/* Sources of Indoctrination */}
        <div className="mb-12">
          <div className="glass-card rounded-2xl p-6 text-center mb-8 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {t('indoctrination.primarySources')}
            </h2>
            <p className="text-muted-foreground">
              {t('indoctrination.primarySourcesDesc')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {sources.map((source, index) => (
              <Card key={index} className="glass-card rounded-2xl">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <source.icon className="h-6 w-6 text-blue-600" />
                    <CardTitle className="text-lg">{source.title}</CardTitle>
                  </div>
                  <CardDescription>{source.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {source.examples.map((example, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                        {example}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Developmental Stages */}
        <div className="glass-card rounded-2xl p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Target className="h-6 w-6 text-green-600" />
            <h2 className="text-2xl font-bold text-foreground">{t('indoctrination.developmentalImpact')}</h2>
          </div>
          <div className="space-y-6">
            {stages.map((stage, index) => (
              <div key={index} className="border-l-4 border-green-600 pl-6">
                <h4 className="font-semibold text-foreground mb-2">{stage.phase}</h4>
                <p className="text-muted-foreground mb-2">{stage.description}</p>
                <p className="text-sm text-green-600 font-medium">{stage.impact}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Breaking Free */}
        <div className="glass-card rounded-2xl p-8 mb-12 border-orange-200 dark:border-orange-800">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="h-6 w-6 text-orange-600" />
            <h2 className="text-2xl font-bold text-foreground">{t('indoctrination.breakingFree')}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-foreground mb-4">{t('indoctrination.recognition')}</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• {t('indoctrination.recognition.step1')}</li>
                <li>• {t('indoctrination.recognition.step2')}</li>
                <li>• {t('indoctrination.recognition.step3')}</li>
                <li>• {t('indoctrination.recognition.step4')}</li>
                <li>• {t('indoctrination.recognition.step5')}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">{t('indoctrination.liberation')}</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• {t('indoctrination.liberation.step1')}</li>
                <li>• {t('indoctrination.liberation.step2')}</li>
                <li>• {t('indoctrination.liberation.step3')}</li>
                <li>• {t('indoctrination.liberation.step4')}</li>
                <li>• {t('indoctrination.liberation.step5')}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Warning Signs */}
        <div className="glass-card rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <Eye className="h-6 w-6 text-red-600" />
            <h2 className="text-2xl font-bold text-foreground">{t('indoctrination.warningSigns')}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-3">{t('indoctrination.warning.inOthers')}:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• {t('indoctrination.warning.inOthers.sign1')}</li>
                <li>• {t('indoctrination.warning.inOthers.sign2')}</li>
                <li>• {t('indoctrination.warning.inOthers.sign3')}</li>
                <li>• {t('indoctrination.warning.inOthers.sign4')}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">{t('indoctrination.warning.inYourself')}:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• {t('indoctrination.warning.inYourself.sign1')}</li>
                <li>• {t('indoctrination.warning.inYourself.sign2')}</li>
                <li>• {t('indoctrination.warning.inYourself.sign3')}</li>
                <li>• {t('indoctrination.warning.inYourself.sign4')}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">{t('indoctrination.warning.inSystems')}:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• {t('indoctrination.warning.inSystems.sign1')}</li>
                <li>• {t('indoctrination.warning.inSystems.sign2')}</li>
                <li>• {t('indoctrination.warning.inSystems.sign3')}</li>
                <li>• {t('indoctrination.warning.inSystems.sign4')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}