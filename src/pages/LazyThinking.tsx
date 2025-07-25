import { Zap, Brain, AlertTriangle, Target, Clock, Users, BookOpen, Eye } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChallengeNavigation } from '@/components/ChallengeNavigation';
import { challengePageTranslations } from '@/data/translations.de';

export default function LazyThinking() {
  const { t, language } = useLanguage();

  // Get language-specific translations 
  const currentLang = language === 'de' ? challengePageTranslations.de : null;
  
  const manifestations = currentLang ? [
    {
      title: currentLang.lazyThinking.manifestation.mentalShortcuts.title,
      description: currentLang.lazyThinking.manifestation.mentalShortcuts.description,
      examples: currentLang.lazyThinking.manifestation.mentalShortcuts.examples
    },
    {
      title: currentLang.lazyThinking.manifestation.confirmationSeeking.title,
      description: currentLang.lazyThinking.manifestation.confirmationSeeking.description,
      examples: currentLang.lazyThinking.manifestation.confirmationSeeking.examples
    },
    {
      title: currentLang.lazyThinking.manifestation.authorityDependence.title,
      description: currentLang.lazyThinking.manifestation.authorityDependence.description,
      examples: currentLang.lazyThinking.manifestation.authorityDependence.examples
    },
    {
      title: currentLang.lazyThinking.manifestation.binaryThinking.title,
      description: currentLang.lazyThinking.manifestation.binaryThinking.description,
      examples: currentLang.lazyThinking.manifestation.binaryThinking.examples
    },
    {
      title: currentLang.lazyThinking.manifestation.emotionalReasoning.title,
      description: currentLang.lazyThinking.manifestation.emotionalReasoning.description,
      examples: currentLang.lazyThinking.manifestation.emotionalReasoning.examples
    },
    {
      title: currentLang.lazyThinking.manifestation.surfaceLevelProcessing.title,
      description: currentLang.lazyThinking.manifestation.surfaceLevelProcessing.description,
      examples: currentLang.lazyThinking.manifestation.surfaceLevelProcessing.examples
    }
  ] : [
    {
      title: "Mental Shortcuts",
      description: "Relying on heuristics instead of thorough analysis",
      examples: ["Stereotyping", "First impression bias", "Availability heuristic", "Representativeness bias"]
    },
    {
      title: "Confirmation Seeking",
      description: "Looking for information that confirms existing beliefs",
      examples: ["Echo chambers", "Selective reading", "Cherry-picking data", "Ignoring contradictions"]
    },
    {
      title: "Authority Dependence",
      description: "Accepting conclusions without examining reasoning",
      examples: ["Expert worship", "Celebrity opinions", "Credential bias", "Appeal to popularity"]
    },
    {
      title: "Binary Thinking",
      description: "Reducing complex issues to simple either/or choices",
      examples: ["False dichotomies", "All-or-nothing thinking", "Good vs. evil narratives", "With us or against us"]
    },
    {
      title: "Emotional Reasoning",
      description: "Using feelings as evidence for truth",
      examples: ["If it feels right, it must be true", "Gut instinct over analysis", "Wishful thinking", "Fear-based decisions"]
    },
    {
      title: "Surface-Level Processing",
      description: "Stopping at the first plausible explanation",
      examples: ["Headlines only", "Sound bite thinking", "Meme-level understanding", "Shallow research"]
    }
  ];

  const causes = currentLang ? [
    {
      factor: currentLang.lazyThinking.cause.cognitiveLoad.factor,
      description: currentLang.lazyThinking.cause.cognitiveLoad.description,
      impact: currentLang.lazyThinking.cause.cognitiveLoad.impact
    },
    {
      factor: currentLang.lazyThinking.cause.timePressure.factor,
      description: currentLang.lazyThinking.cause.timePressure.description,
      impact: currentLang.lazyThinking.cause.timePressure.impact
    },
    {
      factor: currentLang.lazyThinking.cause.comfortSeeking.factor,
      description: currentLang.lazyThinking.cause.comfortSeeking.description,
      impact: currentLang.lazyThinking.cause.comfortSeeking.impact
    },
    {
      factor: currentLang.lazyThinking.cause.socialConformity.factor,
      description: currentLang.lazyThinking.cause.socialConformity.description,
      impact: currentLang.lazyThinking.cause.socialConformity.impact
    },
    {
      factor: currentLang.lazyThinking.cause.informationOverload.factor,
      description: currentLang.lazyThinking.cause.informationOverload.description,
      impact: currentLang.lazyThinking.cause.informationOverload.impact
    },
    {
      factor: currentLang.lazyThinking.cause.educationSystem.factor,
      description: currentLang.lazyThinking.cause.educationSystem.description,
      impact: currentLang.lazyThinking.cause.educationSystem.impact
    }
  ] : [
    {
      factor: "Cognitive Load",
      description: "Mental fatigue leads to shortcuts and reduced analytical capacity",
      impact: "Decision quality decreases when overwhelmed"
    },
    {
      factor: "Time Pressure",
      description: "Rushing to conclusions to meet deadlines or social expectations",
      impact: "Premature closure on complex problems"
    },
    {
      factor: "Comfort Seeking",
      description: "Avoiding the discomfort of uncertainty and complexity",
      impact: "Preference for simple, certain answers over nuanced truth"
    },
    {
      factor: "Social Conformity",
      description: "Following group opinions to avoid conflict or rejection",
      impact: "Suppression of independent critical thinking"
    },
    {
      factor: "Information Overload",
      description: "Too much information leads to analysis paralysis or shortcuts",
      impact: "Either no decision or poorly informed decisions"
    },
    {
      factor: "Education System",
      description: "Training to find 'the right answer' rather than explore complexity",
      impact: "Underdeveloped critical thinking skills"
    }
  ];

  const antidotes = currentLang ? [
    {
      practice: currentLang.lazyThinking.antidote.slowThinking.practice,
      description: currentLang.lazyThinking.antidote.slowThinking.description,
      technique: currentLang.lazyThinking.antidote.slowThinking.technique
    },
    {
      practice: currentLang.lazyThinking.antidote.devilsAdvocate.practice,
      description: currentLang.lazyThinking.antidote.devilsAdvocate.description,
      technique: currentLang.lazyThinking.antidote.devilsAdvocate.technique
    },
    {
      practice: currentLang.lazyThinking.antidote.multiplePerspectives.practice,
      description: currentLang.lazyThinking.antidote.multiplePerspectives.description,
      technique: currentLang.lazyThinking.antidote.multiplePerspectives.technique
    },
    {
      practice: currentLang.lazyThinking.antidote.questionAssumptions.practice,
      description: currentLang.lazyThinking.antidote.questionAssumptions.description,
      technique: currentLang.lazyThinking.antidote.questionAssumptions.technique
    },
    {
      practice: currentLang.lazyThinking.antidote.evidenceHierarchy.practice,
      description: currentLang.lazyThinking.antidote.evidenceHierarchy.description,
      technique: currentLang.lazyThinking.antidote.evidenceHierarchy.technique
    },
    {
      practice: currentLang.lazyThinking.antidote.intellectualHumility.practice,
      description: currentLang.lazyThinking.antidote.intellectualHumility.description,
      technique: currentLang.lazyThinking.antidote.intellectualHumility.technique
    }
  ] : [
    {
      practice: "Slow Thinking",
      description: "Deliberately take time before reaching conclusions",
      technique: "Count to 10, sleep on decisions, use waiting periods"
    },
    {
      practice: "Devil's Advocate",
      description: "Actively seek arguments against your position",
      technique: "Argue the opposite side, find credible critics"
    },
    {
      practice: "Multiple Perspectives",
      description: "Consider how different people might view the issue",
      technique: "Role-play different viewpoints, diverse consultation"
    },
    {
      practice: "Question Assumptions",
      description: "Identify and examine underlying premises",
      technique: "Ask 'What if the opposite were true?' regularly"
    },
    {
      practice: "Evidence Hierarchy",
      description: "Distinguish between types and quality of evidence",
      technique: "Primary sources > secondary > opinions > speculation"
    },
    {
      practice: "Intellectual Humility",
      description: "Acknowledge the limits of your knowledge",
      technique: "Use phrases like 'I might be wrong' and 'I don't know'"
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
              {t('lazyThinking.title')}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('lazyThinking.subtitle')}
            </p>
          </div>
        </div>

        {/* Definition */}
        <div className="glass-card rounded-2xl p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Zap className="h-6 w-6 text-yellow-600" />
            <h2 className="text-2xl font-bold text-foreground">{t('lazyThinking.definition')}</h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            {t('lazyThinking.definitionText')}
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-2">{t('lazyThinking.naturalTendency')}</h4>
              <p className="text-sm text-muted-foreground">
                {t('lazyThinking.naturalTendencyDesc')}
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-2">{t('lazyThinking.modernAmplification')}</h4>
              <p className="text-sm text-muted-foreground">
                {t('lazyThinking.modernAmplificationDesc')}
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-2">{t('lazyThinking.hiddenCosts')}</h4>
              <p className="text-sm text-muted-foreground">
                {t('lazyThinking.hiddenCostsDesc')}
              </p>
            </div>
          </div>
        </div>

        {/* Manifestations */}
        <div className="mb-12">
          <div className="glass-card rounded-2xl p-6 text-center mb-8 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {t('lazyThinking.manifestations')}
            </h2>
            <p className="text-muted-foreground">
              {t('lazyThinking.manifestationsDesc')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {manifestations.map((manifestation, index) => (
              <Card key={index} className="glass-card rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Brain className="h-5 w-5 text-blue-600" />
                    {manifestation.title}
                  </CardTitle>
                  <CardDescription>{manifestation.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {manifestation.examples.map((example, idx) => (
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

        {/* Root Causes */}
        <div className="glass-card rounded-2xl p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Target className="h-6 w-6 text-orange-600" />
            <h2 className="text-2xl font-bold text-foreground">{t('lazyThinking.causes')}</h2>
          </div>
          <div className="space-y-6">
            {causes.map((cause, index) => (
              <div key={index} className="border border-muted rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">{cause.factor}</h4>
                <p className="text-muted-foreground text-sm mb-2">{cause.description}</p>
                <div className="bg-orange-50 dark:bg-orange-950/20 p-2 rounded">
                  <p className="text-xs text-orange-700 dark:text-orange-300">
                    <span className="font-semibold">{t('lazyThinking.impactLabel')}</span> {cause.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Costs of Lazy Thinking */}
        <div className="glass-card rounded-2xl p-8 mb-12 border-red-200 dark:border-red-800">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="h-6 w-6 text-red-600" />
            <h2 className="text-2xl font-bold text-foreground">{t('lazyThinking.hiddenCostsTitle')}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-foreground mb-4">{t('lazyThinking.personalConsequences')}</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• {t('lazyThinking.poorFinancialDecisions')}</li>
                <li>• {t('lazyThinking.relationshipProblems')}</li>
                <li>• {t('lazyThinking.careerStagnation')}</li>
                <li>• {t('lazyThinking.healthIssues')}</li>
                <li>• {t('lazyThinking.missedOpportunities')}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">{t('lazyThinking.societalImpact')}</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• {t('lazyThinking.politicalPolarization')}</li>
                <li>• {t('lazyThinking.misinformationSpread')}</li>
                <li>• {t('lazyThinking.poorCollectiveDecisions')}</li>
                <li>• {t('lazyThinking.reducedInnovation')}</li>
                <li>• {t('lazyThinking.democraticDegradation')}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Antidotes */}
        <div className="mb-12">
          <div className="glass-card rounded-2xl p-6 text-center mb-8 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {t('lazyThinking.antidotes')}
            </h2>
            <p className="text-muted-foreground">
              {t('lazyThinking.antidotesDesc')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {antidotes.map((antidote, index) => (
              <Card key={index} className="glass-card rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Eye className="h-5 w-5 text-green-600" />
                    {antidote.practice}
                  </CardTitle>
                  <CardDescription>{antidote.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded-lg">
                    <p className="text-sm text-green-700 dark:text-green-300">
                      <span className="font-semibold">{t('lazyThinking.howLabel')}</span> {antidote.technique}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Building Better Habits */}
        <div className="glass-card rounded-2xl p-8 border-green-200 dark:border-green-800">
          <div className="flex items-center gap-3 mb-6">
            <Clock className="h-6 w-6 text-green-600" />
            <h2 className="text-2xl font-bold text-foreground">{t('lazyThinking.buildingHabits')}</h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            {t('lazyThinking.buildingHabitsDesc')}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-3">{t('lazyThinking.dailyPractices')}</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• {t('lazyThinking.readLongForm')}</li>
                <li>• {t('lazyThinking.explainComplex')}</li>
                <li>• {t('lazyThinking.askWhyHow')}</li>
                <li>• {t('lazyThinking.seekOpposing')}</li>
                <li>• {t('lazyThinking.takePauses')}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">{t('lazyThinking.environmentalChanges')}</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• {t('lazyThinking.reduceSocialMedia')}</li>
                <li>• {t('lazyThinking.createThinkingSpaces')}</li>
                <li>• {t('lazyThinking.surroundThoughtful')}</li>
                <li>• {t('lazyThinking.chooseQuality')}</li>
                <li>• {t('lazyThinking.scheduleReflection')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}