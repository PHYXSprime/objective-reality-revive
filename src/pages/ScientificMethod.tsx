import { Microscope, Brain, Target, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SolutionNavigation } from '@/components/SolutionNavigation';

export default function ScientificMethod() {
  const { t } = useLanguage();

  const methodSteps = [
    {
      step: t('scientificMethod.steps.observation'),
      description: t('scientificMethod.steps.observationDesc'),
      icon: "👁️"
    },
    {
      step: t('scientificMethod.steps.questionFormation'),
      description: t('scientificMethod.steps.questionFormationDesc'),
      icon: "❓"
    },
    {
      step: t('scientificMethod.steps.hypothesis'),
      description: t('scientificMethod.steps.hypothesisDesc'),
      icon: "💡"
    },
    {
      step: t('scientificMethod.steps.prediction'),
      description: t('scientificMethod.steps.predictionDesc'),
      icon: "🎯"
    },
    {
      step: t('scientificMethod.steps.experimentation'),
      description: t('scientificMethod.steps.experimentationDesc'),
      icon: "🧪"
    },
    {
      step: t('scientificMethod.steps.analysis'),
      description: t('scientificMethod.steps.analysisDesc'),
      icon: "📊"
    },
    {
      step: t('scientificMethod.steps.conclusion'),
      description: t('scientificMethod.steps.conclusionDesc'),
      icon: "✅"
    },
    {
      step: t('scientificMethod.steps.replication'),
      description: t('scientificMethod.steps.replicationDesc'),
      icon: "🔄"
    }
  ];

  const keyPrinciples = [
    {
      principle: t('scientificMethod.principles.empiricalEvidence'),
      description: t('scientificMethod.principles.empiricalEvidenceDesc')
    },
    {
      principle: t('scientificMethod.principles.falsifiability'),
      description: t('scientificMethod.principles.falsifiabilityDesc')
    },
    {
      principle: t('scientificMethod.principles.reproducibility'),
      description: t('scientificMethod.principles.reproducibilityDesc')
    },
    {
      principle: t('scientificMethod.principles.peerReview'),
      description: t('scientificMethod.principles.peerReviewDesc')
    },
    {
      principle: t('scientificMethod.principles.provisionalConclusions'),
      description: t('scientificMethod.principles.provisionalConclusionsDesc')
    },
    {
      principle: t('scientificMethod.principles.controlledVariables'),
      description: t('scientificMethod.principles.controlledVariablesDesc')
    }
  ];

  const commonMisunderstandings = [
    {
      myth: t('scientificMethod.myths.absoluteTruth'),
      reality: t('scientificMethod.realities.bestExplanation')
    },
    {
      myth: t('scientificMethod.myths.oneStudy'),
      reality: t('scientificMethod.realities.consensus')
    },
    {
      myth: t('scientificMethod.myths.completeObjectivity'),
      reality: t('scientificMethod.realities.minimizeBias')
    },
    {
      myth: t('scientificMethod.myths.correlationCausation'),
      reality: t('scientificMethod.realities.correlationNotCausation')
    }
  ];

  return (
    <div className="min-h-screen py-8 pr-20">
      <SolutionNavigation />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Card className="mb-12 glass-card">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-bold">
              {t('scientificMethod.title')}
            </CardTitle>
            <CardDescription className="text-xl max-w-4xl mx-auto">
              {t('scientificMethod.subtitle')}
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Key Difference from Dogma */}
        <Card className="mb-12 border-green-200 dark:border-green-800 glass-card">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Brain className="h-6 w-6 text-green-600" />
              <CardTitle className="text-2xl">{t('scientificMethod.scienceVsDogma')}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              {t('scientificMethod.scienceVsDogmaText')}
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg">
                <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">❌ {t('scientificMethod.dogmaticApproach')}</h4>
                <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                  <li>• {t('scientificMethod.dogmatic.absoluteTruth')}</li>
                  <li>• {t('scientificMethod.dogmatic.discourageQuestioning')}</li>
                  <li>• {t('scientificMethod.dogmatic.reliesOnAuthority')}</li>
                  <li>• {t('scientificMethod.dogmatic.resistantToChange')}</li>
                </ul>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">✅ {t('scientificMethod.scientificApproach')}</h4>
                <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                  <li>• {t('scientificMethod.scientific.provisionalConclusions')}</li>
                  <li>• {t('scientificMethod.scientific.encouragesSkepticism')}</li>
                  <li>• {t('scientificMethod.scientific.basedOnEvidence')}</li>
                  <li>• {t('scientificMethod.scientific.selfCorrecting')}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* The Scientific Method Steps */}
        <div className="mb-12">
          <Card className="glass-card mb-8">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold">
                {t('scientificMethod.processTitle')}
              </CardTitle>
            </CardHeader>
          </Card>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {methodSteps.map((step, index) => (
              <Card key={index} className="relative glass-card">
                <CardHeader className="text-center">
                  <div className="text-3xl mb-2">{step.icon}</div>
                  <CardTitle className="text-lg">{step.step}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground">
                    {step.description}
                  </CardDescription>
                </CardContent>
                {index < methodSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-2 top-1/2 transform -translate-y-1/2">
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Core Principles */}
        <Card className="mb-12 glass-card">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Target className="h-6 w-6 text-blue-600" />
              <CardTitle className="text-2xl">{t('scientificMethod.corePrinciples')}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {keyPrinciples.map((item, index) => (
                <div key={index} className="p-4 border border-border rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">{item.principle}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Common Misunderstandings */}
        <Card className="mb-12 glass-card">
          <CardHeader>
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-orange-600" />
              <CardTitle className="text-2xl">{t('scientificMethod.commonMisunderstandings')}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {commonMisunderstandings.map((item, index) => (
                <div key={index} className="grid md:grid-cols-2 gap-4 p-4 border border-border rounded-lg">
                  <div>
                    <h4 className="font-semibold text-red-600 dark:text-red-400 mb-2">❌ {t('scientificMethod.myth')}:</h4>
                    <p className="text-sm text-muted-foreground">{item.myth}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">✅ {t('scientificMethod.reality')}:</h4>
                    <p className="text-sm text-muted-foreground">{item.reality}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Applying to Personal Beliefs */}
        <Card className="mb-12 glass-card">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Microscope className="h-6 w-6 text-purple-600" />
              <CardTitle className="text-2xl">{t('scientificMethod.applyingToBeliefs')}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-foreground mb-4">{t('scientificMethod.questionsToAsk')}:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• {t('scientificMethod.questions.evidence')}</li>
                  <li>• {t('scientificMethod.questions.tested')}</li>
                  <li>• {t('scientificMethod.questions.changeMind')}</li>
                  <li>• {t('scientificMethod.questions.alternatives')}</li>
                  <li>• {t('scientificMethod.questions.correlation')}</li>
                  <li>• {t('scientificMethod.questions.biases')}</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-4">{t('scientificMethod.redFlags')}:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• {t('scientificMethod.flags.untestable')}</li>
                  <li>• {t('scientificMethod.flags.authority')}</li>
                  <li>• {t('scientificMethod.flags.anecdotal')}</li>
                  <li>• {t('scientificMethod.flags.resistance')}</li>
                  <li>• {t('scientificMethod.flags.cherryPicking')}</li>
                  <li>• {t('scientificMethod.flags.extraordinaryClaims')}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Limitations */}
        <Card className="mb-12 glass-card">
          <CardHeader>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-6 w-6 text-indigo-600" />
              <CardTitle className="text-2xl">{t('scientificMethod.understandingLimitations')}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('scientificMethod.limitationsIntro')}
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">{t('scientificMethod.inherentLimitations')}:</h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• {t('scientificMethod.limitations.values')}</li>
                  <li>• {t('scientificMethod.limitations.technology')}</li>
                  <li>• {t('scientificMethod.limitations.biases')}</li>
                  <li>• {t('scientificMethod.limitations.uncertainty')}</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">{t('scientificMethod.potentialMisuse')}:</h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• {t('scientificMethod.misuse.funding')}</li>
                  <li>• {t('scientificMethod.misuse.publication')}</li>
                  <li>• {t('scientificMethod.misuse.institutional')}</li>
                  <li>• {t('scientificMethod.misuse.misrepresentation')}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="glass-card">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">
              {t('scientificMethod.embraceScientificThinking')}
            </CardTitle>
            <CardDescription className="text-muted-foreground max-w-3xl mx-auto">
              {t('scientificMethod.embraceScientificThinkingDesc')}
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}