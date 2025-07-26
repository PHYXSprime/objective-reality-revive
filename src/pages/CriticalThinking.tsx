import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SolutionNavigation } from '@/components/SolutionNavigation';

export default function CriticalThinking() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen py-8 pr-20">
      <SolutionNavigation />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Card className="mb-8 glass-card">
          <CardHeader>
            <CardTitle className="text-4xl font-bold">
              {t('criticalThinking.title')}
            </CardTitle>
            <CardDescription className="text-xl max-w-3xl">
              {t('criticalThinking.subtitle')}
            </CardDescription>
          </CardHeader>
        </Card>

        {/* What is Critical Thinking Card */}
        <Card className="mb-8 glass-card">
          <CardHeader>
            <CardTitle className="text-3xl font-semibold">{t('criticalThinking.whatIs')}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              {t('criticalThinking.definition1')}
            </p>
            <p className="text-muted-foreground">
              {t('criticalThinking.definition2')}
            </p>
          </CardContent>
        </Card>

        {/* Core Components Card */}
        <Card className="mb-8 glass-card">
          <CardHeader>
            <CardTitle className="text-3xl font-semibold">{t('criticalThinking.coreComponents')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-xl">{t('criticalThinking.components.analysis')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {t('criticalThinking.components.analysisDesc')}
                  </p>
                </CardContent>
              </Card>
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-xl">{t('criticalThinking.components.evaluation')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {t('criticalThinking.components.evaluationDesc')}
                  </p>
                </CardContent>
              </Card>
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-xl">{t('criticalThinking.components.inference')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {t('criticalThinking.components.inferenceDesc')}
                  </p>
                </CardContent>
              </Card>
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-xl">{t('criticalThinking.components.interpretation')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {t('criticalThinking.components.interpretationDesc')}
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Skills and Strategies Card */}
        <Card className="mb-8 glass-card">
          <CardHeader>
            <CardTitle className="text-3xl font-semibold">{t('criticalThinking.essentialSkills')}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">{t('criticalThinking.skills.questioningAssumptions')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {t('criticalThinking.skills.questioningAssumptionsDesc')}
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>{t('criticalThinking.skills.questioningQuestions.q1')}</li>
                  <li>{t('criticalThinking.skills.questioningQuestions.q2')}</li>
                  <li>{t('criticalThinking.skills.questioningQuestions.q3')}</li>
                  <li>{t('criticalThinking.skills.questioningQuestions.q4')}</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">{t('criticalThinking.skills.examiningEvidence')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {t('criticalThinking.skills.examiningEvidenceDesc')}
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>{t('criticalThinking.skills.evidenceQuestions.q1')}</li>
                  <li>{t('criticalThinking.skills.evidenceQuestions.q2')}</li>
                  <li>{t('criticalThinking.skills.evidenceQuestions.q3')}</li>
                  <li>{t('criticalThinking.skills.evidenceQuestions.q4')}</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">{t('criticalThinking.skills.multiplePerspec')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {t('criticalThinking.skills.multiplePespecDesc')}
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>{t('criticalThinking.skills.perspectiveQuestions.q1')}</li>
                  <li>{t('criticalThinking.skills.perspectiveQuestions.q2')}</li>
                  <li>{t('criticalThinking.skills.perspectiveQuestions.q3')}</li>
                  <li>{t('criticalThinking.skills.perspectiveQuestions.q4')}</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">{t('criticalThinking.skills.logicalReasoning')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {t('criticalThinking.skills.logicalReasoningDesc')}
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>{t('criticalThinking.skills.reasoningQuestions.q1')}</li>
                  <li>{t('criticalThinking.skills.reasoningQuestions.q2')}</li>
                  <li>{t('criticalThinking.skills.reasoningQuestions.q3')}</li>
                  <li>{t('criticalThinking.skills.reasoningQuestions.q4')}</li>
                </ul>
              </CardContent>
            </Card>
          </CardContent>
        </Card>

        {/* Barriers to Critical Thinking Card */}
        <Card className="mb-8 glass-card">
          <CardHeader>
            <CardTitle className="text-3xl font-semibold">{t('criticalThinking.commonBarriers')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="glass-card">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">{t('criticalThinking.barriers.confirmationBias')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {t('criticalThinking.barriers.confirmationBiasDesc')}
                  </p>
                </CardContent>
              </Card>
              <Card className="glass-card">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">{t('criticalThinking.barriers.emotionalReasoning')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {t('criticalThinking.barriers.emotionalReasoningDesc')}
                  </p>
                </CardContent>
              </Card>
              <Card className="glass-card">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">{t('criticalThinking.barriers.groupthink')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {t('criticalThinking.barriers.groupthinkDesc')}
                  </p>
                </CardContent>
              </Card>
              <Card className="glass-card">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">{t('criticalThinking.barriers.authorityBias')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {t('criticalThinking.barriers.authorityBiasDesc')}
                  </p>
                </CardContent>
              </Card>
              <Card className="glass-card">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">{t('criticalThinking.barriers.blackWhiteThinking')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {t('criticalThinking.barriers.blackWhiteThinkingDesc')}
                  </p>
                </CardContent>
              </Card>
              <Card className="glass-card">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">{t('criticalThinking.barriers.informationOverload')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {t('criticalThinking.barriers.informationOverloadDesc')}
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Developing Critical Thinking Card */}
        <Card className="mb-8 glass-card">
          <CardHeader>
            <CardTitle className="text-3xl font-semibold">{t('criticalThinking.howToDevelop')}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <Card className="glass-card float-card hover:glow-primary transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-lg">{t('criticalThinking.development.activeReading')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t('criticalThinking.development.activeReadingDesc')}
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass-card float-card hover:glow-primary transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-lg">{t('criticalThinking.development.powerfulQuestions')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t('criticalThinking.development.powerfulQuestionsDesc')}
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card float-card hover:glow-primary transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-lg">{t('criticalThinking.development.diverseSources')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t('criticalThinking.development.diverseSourcesDesc')}
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card float-card hover:glow-primary transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-lg">{t('criticalThinking.development.metacognition')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t('criticalThinking.development.metacognitionDesc')}
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card float-card hover:glow-primary transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-lg">{t('criticalThinking.development.intellectualHumility')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t('criticalThinking.development.intellectualHumilityDesc')}
                </p>
              </CardContent>
            </Card>
          </CardContent>
        </Card>

        {/* Benefits Card */}
        <Card className="mb-8 glass-card">
          <CardHeader>
            <CardTitle className="text-3xl font-semibold">{t('criticalThinking.benefits')}</CardTitle>
          </CardHeader>
          <CardContent>
            <Card className="glass-card">
              <CardContent className="pt-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">{t('criticalThinking.personalBenefits')}</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 text-sm">
                      <li>{t('criticalThinking.personalBenefitsList.betterDecisions')}</li>
                      <li>{t('criticalThinking.personalBenefitsList.selfAwareness')}</li>
                      <li>{t('criticalThinking.personalBenefitsList.problemSolving')}</li>
                      <li>{t('criticalThinking.personalBenefitsList.independence')}</li>
                      <li>{t('criticalThinking.personalBenefitsList.manipulation')}</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">{t('criticalThinking.professionalBenefits')}</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 text-sm">
                      <li>{t('criticalThinking.professionalBenefitsList.analytical')}</li>
                      <li>{t('criticalThinking.professionalBenefitsList.strategic')}</li>
                      <li>{t('criticalThinking.professionalBenefitsList.creativity')}</li>
                      <li>{t('criticalThinking.professionalBenefitsList.communication')}</li>
                      <li>{t('criticalThinking.professionalBenefitsList.leadership')}</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>

        {/* Conclusion Card */}
        <Card className="mb-8 glass-card">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">{t('criticalThinking.pathForward')}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              {t('criticalThinking.conclusion1')}
            </p>
            <p className="text-muted-foreground">
              {t('criticalThinking.conclusion2')}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}