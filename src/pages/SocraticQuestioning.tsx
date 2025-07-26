import { HelpCircle, Lightbulb, Search, Target, Brain, Users } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SolutionNavigation } from '@/components/SolutionNavigation';

export default function SocraticQuestioning() {
  const { t } = useLanguage();

  const purposes = [
    t('socraticQuestioning.purposes.exploreIdeas'),
    t('socraticQuestioning.purposes.getTruth'),
    t('socraticQuestioning.purposes.openIssues'),
    t('socraticQuestioning.purposes.uncoverAssumptions'),
    t('socraticQuestioning.purposes.analyzeConcepts'),
    t('socraticQuestioning.purposes.distinguishKnowledge'),
    t('socraticQuestioning.purposes.followConsequences'),
    t('socraticQuestioning.purposes.controlDiscussions')
  ];

  const questionTypes = [
    {
      category: t('socraticQuestioning.categories.clarification'),
      questions: [
        t('socraticQuestioning.clarification.q1'),
        t('socraticQuestioning.clarification.q2'),
        t('socraticQuestioning.clarification.q3'),
        t('socraticQuestioning.clarification.q4')
      ],
      color: "text-blue-600 dark:text-blue-400"
    },
    {
      category: t('socraticQuestioning.categories.assumption'),
      questions: [
        t('socraticQuestioning.assumption.q1'),
        t('socraticQuestioning.assumption.q2'),
        t('socraticQuestioning.assumption.q3'),
        t('socraticQuestioning.assumption.q4')
      ],
      color: "text-green-600 dark:text-green-400"
    },
    {
      category: t('socraticQuestioning.categories.evidence'),
      questions: [
        t('socraticQuestioning.evidence.q1'),
        t('socraticQuestioning.evidence.q2'),
        t('socraticQuestioning.evidence.q3'),
        t('socraticQuestioning.evidence.q4')
      ],
      color: "text-purple-600 dark:text-purple-400"
    },
    {
      category: t('socraticQuestioning.categories.perspective'),
      questions: [
        t('socraticQuestioning.perspective.q1'),
        t('socraticQuestioning.perspective.q2'),
        t('socraticQuestioning.perspective.q3'),
        t('socraticQuestioning.perspective.q4')
      ],
      color: "text-orange-600 dark:text-orange-400"
    },
    {
      category: t('socraticQuestioning.categories.implication'),
      questions: [
        t('socraticQuestioning.implication.q1'),
        t('socraticQuestioning.implication.q2'),
        t('socraticQuestioning.implication.q3'),
        t('socraticQuestioning.implication.q4')
      ],
      color: "text-red-600 dark:text-red-400"
    },
    {
      category: t('socraticQuestioning.categories.meta'),
      questions: [
        t('socraticQuestioning.meta.q1'),
        t('socraticQuestioning.meta.q2'),
        t('socraticQuestioning.meta.q3'),
        t('socraticQuestioning.meta.q4')
      ],
      color: "text-indigo-600 dark:text-indigo-400"
    }
  ];

  const foundations = [
    {
      foundation: t('socraticQuestioning.foundations.structuredLogic'),
      description: t('socraticQuestioning.foundations.structuredLogicDesc')
    },
    {
      foundation: t('socraticQuestioning.foundations.systematicApproach'),
      description: t('socraticQuestioning.foundations.systematicApproachDesc')
    },
    {
      foundation: t('socraticQuestioning.foundations.deepInquiry'),
      description: t('socraticQuestioning.foundations.deepInquiryDesc')
    },
    {
      foundation: t('socraticQuestioning.foundations.focusedDirection'),
      description: t('socraticQuestioning.foundations.focusedDirectionDesc')
    },
    {
      foundation: t('socraticQuestioning.foundations.disciplinedMethod'),
      description: t('socraticQuestioning.foundations.disciplinedMethodDesc')
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
              {t('socraticQuestioning.title')}
            </CardTitle>
            <CardDescription className="text-xl max-w-3xl">
              {t('socraticQuestioning.subtitle')}
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Key Distinction */}
        <Card className="mb-12 border-primary/20 glass-card">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Target className="h-6 w-6 text-primary" />
              <CardTitle className="text-2xl">{t('socraticQuestioning.whatMakesDifferent')}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('socraticQuestioning.whatMakesDifferentText')}
            </p>
          </CardContent>
        </Card>

        {/* Purposes */}
        <Card className="mb-12 glass-card">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Lightbulb className="h-6 w-6 text-primary" />
              <CardTitle className="text-2xl">{t('socraticQuestioning.purposes')}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {purposes.map((purpose, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{purpose}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Theoretical Foundations */}
        <Card className="mb-12 glass-card">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Brain className="h-6 w-6 text-primary" />
              <CardTitle className="text-2xl">{t('socraticQuestioning.fiveFoundations')}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {foundations.map((item, index) => (
                <div key={index} className="p-4 border border-border rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">{item.foundation}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Question Categories */}
        <Card className="glass-card mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              {t('socraticQuestioning.sixTypes')}
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              {t('socraticQuestioning.sixTypesDesc')}
            </CardDescription>
          </CardHeader>
        </Card>

        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {questionTypes.map((type, index) => (
            <Card key={index} className="h-full glass-card">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <HelpCircle className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">{type.category}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {type.questions.map((question, qIndex) => (
                    <li key={qIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                      {question}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* How to Use */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="glass-card">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Search className="h-6 w-6 text-primary" />
                <CardTitle>{t('socraticQuestioning.questioningProcess')}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground">{t('socraticQuestioning.process.startClarification')}</h4>
                    <p className="text-sm text-muted-foreground">
                      {t('socraticQuestioning.process.startClarificationDesc')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground">{t('socraticQuestioning.process.examineAssumptions')}</h4>
                    <p className="text-sm text-muted-foreground">
                      {t('socraticQuestioning.process.examineAssumptionsDesc')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground">{t('socraticQuestioning.process.exploreEvidence')}</h4>
                    <p className="text-sm text-muted-foreground">
                      {t('socraticQuestioning.process.exploreEvidenceDesc')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground">{t('socraticQuestioning.process.considerAlternatives')}</h4>
                    <p className="text-sm text-muted-foreground">
                      {t('socraticQuestioning.process.considerAlternativesDesc')}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Users className="h-6 w-6 text-primary" />
                <CardTitle>{t('socraticQuestioning.bestPractices')}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {[
                  t('socraticQuestioning.practices.askGenuinely'),
                  t('socraticQuestioning.practices.buildOnPrevious'),
                  t('socraticQuestioning.practices.allowTime'),
                  t('socraticQuestioning.practices.modelThinking'),
                  t('socraticQuestioning.practices.focusUnderstanding'),
                  t('socraticQuestioning.practices.bePatient'),
                  t('socraticQuestioning.practices.questionYourself')
                ].map((practice, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                    {practice}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Example in Action */}
        <Card className="mb-12 glass-card">
          <CardHeader>
            <CardTitle className="text-2xl">{t('socraticQuestioning.exampleTitle')}</CardTitle>
            <CardDescription>
              {t('socraticQuestioning.exampleDesc')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-muted/30 rounded-lg">
                <p className="font-medium text-foreground mb-2">{t('socraticQuestioning.example.clarification')}:</p>
                <p className="text-muted-foreground">
                  {t('socraticQuestioning.example.clarificationText')}
                </p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <p className="font-medium text-foreground mb-2">{t('socraticQuestioning.example.assumptions')}:</p>
                <p className="text-muted-foreground">
                  {t('socraticQuestioning.example.assumptionsText')}
                </p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <p className="font-medium text-foreground mb-2">{t('socraticQuestioning.example.evidence')}:</p>
                <p className="text-muted-foreground">
                  {t('socraticQuestioning.example.evidenceText')}
                </p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <p className="font-medium text-foreground mb-2">{t('socraticQuestioning.example.implications')}:</p>
                <p className="text-muted-foreground">
                  {t('socraticQuestioning.example.implicationsText')}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="text-center glass-card">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {t('socraticQuestioning.startToday')}
            </h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              {t('socraticQuestioning.startTodayDesc')}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}