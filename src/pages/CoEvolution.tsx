import { Dna, Brain, Users, BookOpen, Target, AlertTriangle, History, Eye } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChallengeNavigation } from '@/components/ChallengeNavigation';

export default function CoEvolution() {
  const { t } = useLanguage();

  const evolutionaryPatterns = [
    {
      title: t('coEvolution.patterns.tribalThinking.title'),
      religious: t('coEvolution.patterns.tribalThinking.religious'),
      secular: t('coEvolution.patterns.tribalThinking.secular'),
      impact: t('coEvolution.patterns.tribalThinking.impact')
    },
    {
      title: t('coEvolution.patterns.authorityWorship.title'),
      religious: t('coEvolution.patterns.authorityWorship.religious'),
      secular: t('coEvolution.patterns.authorityWorship.secular'),
      impact: t('coEvolution.patterns.authorityWorship.impact')
    },
    {
      title: t('coEvolution.patterns.ritualAdherence.title'),
      religious: t('coEvolution.patterns.ritualAdherence.religious'),
      secular: t('coEvolution.patterns.ritualAdherence.secular'),
      impact: t('coEvolution.patterns.ritualAdherence.impact')
    },
    {
      title: t('coEvolution.patterns.heresyPunishment.title'),
      religious: t('coEvolution.patterns.heresyPunishment.religious'),
      secular: t('coEvolution.patterns.heresyPunishment.secular'),
      impact: t('coEvolution.patterns.heresyPunishment.impact')
    },
    {
      title: t('coEvolution.patterns.sacredTexts.title'),
      religious: t('coEvolution.patterns.sacredTexts.religious'),
      secular: t('coEvolution.patterns.sacredTexts.secular'),
      impact: t('coEvolution.patterns.sacredTexts.impact')
    },
    {
      title: t('coEvolution.patterns.faithBasedReasoning.title'),
      religious: t('coEvolution.patterns.faithBasedReasoning.religious'),
      secular: t('coEvolution.patterns.faithBasedReasoning.secular'),
      impact: t('coEvolution.patterns.faithBasedReasoning.impact')
    }
  ];

  const cognitiveTraps = [
    {
      trap: t('coEvolution.cognitiveTraps.sacredCow.title'),
      description: t('coEvolution.cognitiveTraps.sacredCow.description'),
      examples: [
        t('coEvolution.cognitiveTraps.sacredCow.example1'),
        t('coEvolution.cognitiveTraps.sacredCow.example2'),
        t('coEvolution.cognitiveTraps.sacredCow.example3')
      ]
    },
    {
      trap: t('coEvolution.cognitiveTraps.moralSuperiority.title'),
      description: t('coEvolution.cognitiveTraps.moralSuperiority.description'),
      examples: [
        t('coEvolution.cognitiveTraps.moralSuperiority.example1'),
        t('coEvolution.cognitiveTraps.moralSuperiority.example2'),
        t('coEvolution.cognitiveTraps.moralSuperiority.example3')
      ]
    },
    {
      trap: t('coEvolution.cognitiveTraps.apocalypticThinking.title'),
      description: t('coEvolution.cognitiveTraps.apocalypticThinking.description'),
      examples: [
        t('coEvolution.cognitiveTraps.apocalypticThinking.example1'),
        t('coEvolution.cognitiveTraps.apocalypticThinking.example2'),
        t('coEvolution.cognitiveTraps.apocalypticThinking.example3')
      ]
    },
    {
      trap: t('coEvolution.cognitiveTraps.salvationNarratives.title'),
      description: t('coEvolution.cognitiveTraps.salvationNarratives.description'),
      examples: [
        t('coEvolution.cognitiveTraps.salvationNarratives.example1'),
        t('coEvolution.cognitiveTraps.salvationNarratives.example2'),
        t('coEvolution.cognitiveTraps.salvationNarratives.example3')
      ]
    }
  ];

  const liberationStrategies = [
    {
      strategy: t('coEvolution.liberation.recognizePattern.title'),
      description: t('coEvolution.liberation.recognizePattern.description'),
      practice: t('coEvolution.liberation.recognizePattern.practice')
    },
    {
      strategy: t('coEvolution.liberation.questionAssumptions.title'),
      description: t('coEvolution.liberation.questionAssumptions.description'),
      practice: t('coEvolution.liberation.questionAssumptions.practice')
    },
    {
      strategy: t('coEvolution.liberation.embraceHeresy.title'),
      description: t('coEvolution.liberation.embraceHeresy.description'),
      practice: t('coEvolution.liberation.embraceHeresy.practice')
    },
    {
      strategy: t('coEvolution.liberation.ideologicalDiversity.title'),
      description: t('coEvolution.liberation.ideologicalDiversity.description'),
      practice: t('coEvolution.liberation.ideologicalDiversity.practice')
    },
    {
      strategy: t('coEvolution.liberation.cultivateUncertainty.title'),
      description: t('coEvolution.liberation.cultivateUncertainty.description'),
      practice: t('coEvolution.liberation.cultivateUncertainty.practice')
    },
    {
      strategy: t('coEvolution.liberation.developMetaCognition.title'),
      description: t('coEvolution.liberation.developMetaCognition.description'),
      practice: t('coEvolution.liberation.developMetaCognition.practice')
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
              {t('coEvolution.title')}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('coEvolution.subtitle')}
            </p>
          </div>
        </div>

        {/* Core Concept */}
        <div className="glass-card rounded-2xl p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Dna className="h-6 w-6 text-purple-600" />
            <h2 className="text-2xl font-bold text-foreground">{t('coEvolution.coreHypothesis.title')}</h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            {t('coEvolution.coreHypothesis.description')}
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-2">{t('coEvolution.coreHypothesis.evolutionaryAdvantage.title')}</h4>
              <p className="text-sm text-muted-foreground">
                {t('coEvolution.coreHypothesis.evolutionaryAdvantage.description')}
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-2">{t('coEvolution.coreHypothesis.cognitivePersistence.title')}</h4>
              <p className="text-sm text-muted-foreground">
                {t('coEvolution.coreHypothesis.cognitivePersistence.description')}
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-2">{t('coEvolution.coreHypothesis.modernManifestation.title')}</h4>
              <p className="text-sm text-muted-foreground">
                {t('coEvolution.coreHypothesis.modernManifestation.description')}
              </p>
            </div>
          </div>
        </div>

        {/* Pattern Comparison */}
        <div className="mb-12">
          <div className="glass-card rounded-2xl p-6 text-center mb-8 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {t('coEvolution.patterns.title')}
            </h2>
            <p className="text-muted-foreground">
              {t('coEvolution.patterns.subtitle')}
            </p>
          </div>
          
          <div className="space-y-6">
            {evolutionaryPatterns.map((pattern, index) => (
              <Card key={index} className="glass-card rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Brain className="h-5 w-5 text-blue-600" />
                    {pattern.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="border border-muted rounded-lg p-3">
                      <h5 className="font-semibold text-foreground mb-2">{t('coEvolution.labels.religiousContext')}</h5>
                      <p className="text-sm text-muted-foreground">{pattern.religious}</p>
                    </div>
                    <div className="border border-muted rounded-lg p-3">
                      <h5 className="font-semibold text-foreground mb-2">{t('coEvolution.labels.secularContext')}</h5>
                      <p className="text-sm text-muted-foreground">{pattern.secular}</p>
                    </div>
                  </div>
                  <div className="border border-muted rounded-lg p-3">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold">{t('coEvolution.labels.impact')}</span> {pattern.impact}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Modern Cognitive Traps */}
        <div className="glass-card rounded-2xl p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="h-6 w-6 text-orange-600" />
            <h2 className="text-2xl font-bold text-foreground">{t('coEvolution.cognitiveTraps.title')}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {cognitiveTraps.map((trap, index) => (
              <div key={index} className="border border-muted rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">{trap.trap}</h4>
                <p className="text-muted-foreground text-sm mb-3">{trap.description}</p>
                <div className="space-y-1">
                  <h5 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{t('coEvolution.labels.examples')}</h5>
                  {trap.examples.map((example, idx) => (
                    <p key={idx} className="text-xs text-muted-foreground">• {example}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Historical Perspective */}
        <div className="glass-card rounded-2xl p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <History className="h-6 w-6 text-indigo-600" />
            <h2 className="text-2xl font-bold text-foreground">{t('coEvolution.historicalExamples.title')}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-2">{t('coEvolution.historicalExamples.politicalReligions.title')}</h4>
              <p className="text-sm text-muted-foreground mb-2">
                {t('coEvolution.historicalExamples.politicalReligions.description')}
              </p>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• {t('coEvolution.historicalExamples.politicalReligions.feature1')}</li>
                <li>• {t('coEvolution.historicalExamples.politicalReligions.feature2')}</li>
                <li>• {t('coEvolution.historicalExamples.politicalReligions.feature3')}</li>
                <li>• {t('coEvolution.historicalExamples.politicalReligions.feature4')}</li>
              </ul>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-2">{t('coEvolution.historicalExamples.scientificOrthodoxy.title')}</h4>
              <p className="text-sm text-muted-foreground mb-2">
                {t('coEvolution.historicalExamples.scientificOrthodoxy.description')}
              </p>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• {t('coEvolution.historicalExamples.scientificOrthodoxy.feature1')}</li>
                <li>• {t('coEvolution.historicalExamples.scientificOrthodoxy.feature2')}</li>
                <li>• {t('coEvolution.historicalExamples.scientificOrthodoxy.feature3')}</li>
                <li>• {t('coEvolution.historicalExamples.scientificOrthodoxy.feature4')}</li>
              </ul>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-2">{t('coEvolution.historicalExamples.socialMovements.title')}</h4>
              <p className="text-sm text-muted-foreground mb-2">
                {t('coEvolution.historicalExamples.socialMovements.description')}
              </p>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• {t('coEvolution.historicalExamples.socialMovements.feature1')}</li>
                <li>• {t('coEvolution.historicalExamples.socialMovements.feature2')}</li>
                <li>• {t('coEvolution.historicalExamples.socialMovements.feature3')}</li>
                <li>• {t('coEvolution.historicalExamples.socialMovements.feature4')}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Liberation Strategies */}
        <div className="mb-12">
          <div className="glass-card rounded-2xl p-6 text-center mb-8 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {t('coEvolution.liberation.title')}
            </h2>
            <p className="text-muted-foreground">
              {t('coEvolution.liberation.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {liberationStrategies.map((strategy, index) => (
              <Card key={index} className="glass-card rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Target className="h-5 w-5 text-green-600" />
                    {strategy.strategy}
                  </CardTitle>
                  <CardDescription>{strategy.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border border-muted rounded-lg p-3">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold">{t('coEvolution.labels.practice')}</span> {strategy.practice}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Awareness */}
        <div className="glass-card rounded-2xl p-8 border-purple-200 dark:border-purple-800">
          <div className="flex items-center gap-3 mb-6">
            <Eye className="h-6 w-6 text-purple-600" />
            <h2 className="text-2xl font-bold text-foreground">{t('coEvolution.pathToRationality.title')}</h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            {t('coEvolution.pathToRationality.description')}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-3">{t('coEvolution.pathToRationality.whatThisMeans.title')}</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• {t('coEvolution.pathToRationality.whatThisMeans.point1')}</li>
                <li>• {t('coEvolution.pathToRationality.whatThisMeans.point2')}</li>
                <li>• {t('coEvolution.pathToRationality.whatThisMeans.point3')}</li>
                <li>• {t('coEvolution.pathToRationality.whatThisMeans.point4')}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">{t('coEvolution.pathToRationality.practicalApplication.title')}</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• {t('coEvolution.pathToRationality.practicalApplication.point1')}</li>
                <li>• {t('coEvolution.pathToRationality.practicalApplication.point2')}</li>
                <li>• {t('coEvolution.pathToRationality.practicalApplication.point3')}</li>
                <li>• {t('coEvolution.pathToRationality.practicalApplication.point4')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}