import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SolutionNavigation } from '@/components/SolutionNavigation';
import { 
  Brain, 
  Search, 
  Eye, 
  Lightbulb, 
  Target, 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  BookOpen, 
  Users, 
  TrendingUp, 
  Star,
  Zap,
  Trophy,
  ArrowRight
} from 'lucide-react';

export default function CriticalThinking() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen py-8 pr-20">
      <SolutionNavigation />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Card className="mb-8 glass-card border-primary/20">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <div>
                <CardTitle className="text-4xl font-bold">
                  {t('criticalThinking.title')}
                </CardTitle>
                <CardDescription className="text-xl max-w-3xl">
                  {t('criticalThinking.subtitle')}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* What is Critical Thinking Card */}
        <Card className="mb-8 glass-card border-blue-500/20">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Lightbulb className="h-6 w-6 text-blue-500" />
              <CardTitle className="text-3xl font-semibold">{t('criticalThinking.whatIs')}</CardTitle>
            </div>
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
        <Card className="mb-8 glass-card border-purple-500/20">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Target className="h-6 w-6 text-purple-500" />
              <CardTitle className="text-3xl font-semibold">{t('criticalThinking.coreComponents')}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="glass-card border-green-500/20 hover:border-green-500/40 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Search className="h-5 w-5 text-green-500" />
                    <CardTitle className="text-xl">{t('criticalThinking.components.analysis')}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {t('criticalThinking.components.analysisDesc')}
                  </p>
                </CardContent>
              </Card>
              <Card className="glass-card border-orange-500/20 hover:border-orange-500/40 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-orange-500" />
                    <CardTitle className="text-xl">{t('criticalThinking.components.evaluation')}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {t('criticalThinking.components.evaluationDesc')}
                  </p>
                </CardContent>
              </Card>
              <Card className="glass-card border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Zap className="h-5 w-5 text-cyan-500" />
                    <CardTitle className="text-xl">{t('criticalThinking.components.inference')}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {t('criticalThinking.components.inferenceDesc')}
                  </p>
                </CardContent>
              </Card>
              <Card className="glass-card border-pink-500/20 hover:border-pink-500/40 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Eye className="h-5 w-5 text-pink-500" />
                    <CardTitle className="text-xl">{t('criticalThinking.components.interpretation')}</CardTitle>
                  </div>
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
        <Card className="mb-8 glass-card border-indigo-500/20">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Star className="h-6 w-6 text-indigo-500" />
              <CardTitle className="text-3xl font-semibold">{t('criticalThinking.essentialSkills')}</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <Card className="glass-card border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-5 w-5 text-yellow-500" />
                  <CardTitle className="text-lg">{t('criticalThinking.skills.questioningAssumptions')}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {t('criticalThinking.skills.questioningAssumptionsDesc')}
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="p-3 border border-border rounded-lg bg-muted/20">
                    <p className="text-sm text-muted-foreground">• {t('criticalThinking.skills.questioningQuestions.q1')}</p>
                  </div>
                  <div className="p-3 border border-border rounded-lg bg-muted/20">
                    <p className="text-sm text-muted-foreground">• {t('criticalThinking.skills.questioningQuestions.q2')}</p>
                  </div>
                  <div className="p-3 border border-border rounded-lg bg-muted/20">
                    <p className="text-sm text-muted-foreground">• {t('criticalThinking.skills.questioningQuestions.q3')}</p>
                  </div>
                  <div className="p-3 border border-border rounded-lg bg-muted/20">
                    <p className="text-sm text-muted-foreground">• {t('criticalThinking.skills.questioningQuestions.q4')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-card border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Search className="h-5 w-5 text-emerald-500" />
                  <CardTitle className="text-lg">{t('criticalThinking.skills.examiningEvidence')}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {t('criticalThinking.skills.examiningEvidenceDesc')}
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="p-3 border border-border rounded-lg bg-muted/20">
                    <p className="text-sm text-muted-foreground">• {t('criticalThinking.skills.evidenceQuestions.q1')}</p>
                  </div>
                  <div className="p-3 border border-border rounded-lg bg-muted/20">
                    <p className="text-sm text-muted-foreground">• {t('criticalThinking.skills.evidenceQuestions.q2')}</p>
                  </div>
                  <div className="p-3 border border-border rounded-lg bg-muted/20">
                    <p className="text-sm text-muted-foreground">• {t('criticalThinking.skills.evidenceQuestions.q3')}</p>
                  </div>
                  <div className="p-3 border border-border rounded-lg bg-muted/20">
                    <p className="text-sm text-muted-foreground">• {t('criticalThinking.skills.evidenceQuestions.q4')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-violet-500/20 hover:border-violet-500/40 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-violet-500" />
                  <CardTitle className="text-lg">{t('criticalThinking.skills.multiplePerspec')}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {t('criticalThinking.skills.multiplePespecDesc')}
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="p-3 border border-border rounded-lg bg-muted/20">
                    <p className="text-sm text-muted-foreground">• {t('criticalThinking.skills.perspectiveQuestions.q1')}</p>
                  </div>
                  <div className="p-3 border border-border rounded-lg bg-muted/20">
                    <p className="text-sm text-muted-foreground">• {t('criticalThinking.skills.perspectiveQuestions.q2')}</p>
                  </div>
                  <div className="p-3 border border-border rounded-lg bg-muted/20">
                    <p className="text-sm text-muted-foreground">• {t('criticalThinking.skills.perspectiveQuestions.q3')}</p>
                  </div>
                  <div className="p-3 border border-border rounded-lg bg-muted/20">
                    <p className="text-sm text-muted-foreground">• {t('criticalThinking.skills.perspectiveQuestions.q4')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Brain className="h-5 w-5 text-blue-500" />
                  <CardTitle className="text-lg">{t('criticalThinking.skills.logicalReasoning')}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {t('criticalThinking.skills.logicalReasoningDesc')}
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="p-3 border border-border rounded-lg bg-muted/20">
                    <p className="text-sm text-muted-foreground">• {t('criticalThinking.skills.reasoningQuestions.q1')}</p>
                  </div>
                  <div className="p-3 border border-border rounded-lg bg-muted/20">
                    <p className="text-sm text-muted-foreground">• {t('criticalThinking.skills.reasoningQuestions.q2')}</p>
                  </div>
                  <div className="p-3 border border-border rounded-lg bg-muted/20">
                    <p className="text-sm text-muted-foreground">• {t('criticalThinking.skills.reasoningQuestions.q3')}</p>
                  </div>
                  <div className="p-3 border border-border rounded-lg bg-muted/20">
                    <p className="text-sm text-muted-foreground">• {t('criticalThinking.skills.reasoningQuestions.q4')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>

        {/* Barriers to Critical Thinking Card */}
        <Card className="mb-8 glass-card border-red-500/20">
          <CardHeader>
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-red-500" />
              <CardTitle className="text-3xl font-semibold">{t('criticalThinking.commonBarriers')}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="glass-card border-red-400/20 hover:border-red-400/40 transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <CardTitle className="text-base">{t('criticalThinking.barriers.confirmationBias')}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {t('criticalThinking.barriers.confirmationBiasDesc')}
                  </p>
                </CardContent>
              </Card>
              <Card className="glass-card border-orange-400/20 hover:border-orange-400/40 transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <CardTitle className="text-base">{t('criticalThinking.barriers.emotionalReasoning')}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {t('criticalThinking.barriers.emotionalReasoningDesc')}
                  </p>
                </CardContent>
              </Card>
              <Card className="glass-card border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <CardTitle className="text-base">{t('criticalThinking.barriers.groupthink')}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {t('criticalThinking.barriers.groupthinkDesc')}
                  </p>
                </CardContent>
              </Card>
              <Card className="glass-card border-purple-400/20 hover:border-purple-400/40 transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <CardTitle className="text-base">{t('criticalThinking.barriers.authorityBias')}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {t('criticalThinking.barriers.authorityBiasDesc')}
                  </p>
                </CardContent>
              </Card>
              <Card className="glass-card border-blue-400/20 hover:border-blue-400/40 transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <CardTitle className="text-base">{t('criticalThinking.barriers.blackWhiteThinking')}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {t('criticalThinking.barriers.blackWhiteThinkingDesc')}
                  </p>
                </CardContent>
              </Card>
              <Card className="glass-card border-pink-400/20 hover:border-pink-400/40 transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <CardTitle className="text-base">{t('criticalThinking.barriers.informationOverload')}</CardTitle>
                  </div>
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
        <Card className="mb-8 glass-card border-green-500/20">
          <CardHeader>
            <div className="flex items-center gap-3">
              <TrendingUp className="h-6 w-6 text-green-500" />
              <CardTitle className="text-3xl font-semibold">{t('criticalThinking.howToDevelop')}</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <Card className="glass-card border-indigo-400/20 hover:border-indigo-400/40 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <BookOpen className="h-5 w-5 text-indigo-500" />
                  <CardTitle className="text-lg">{t('criticalThinking.development.activeReading')}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t('criticalThinking.development.activeReadingDesc')}
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass-card border-purple-400/20 hover:border-purple-400/40 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Lightbulb className="h-5 w-5 text-purple-500" />
                  <CardTitle className="text-lg">{t('criticalThinking.development.powerfulQuestions')}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t('criticalThinking.development.powerfulQuestionsDesc')}
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card border-teal-400/20 hover:border-teal-400/40 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-teal-500" />
                  <CardTitle className="text-lg">{t('criticalThinking.development.diverseSources')}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t('criticalThinking.development.diverseSourcesDesc')}
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Brain className="h-5 w-5 text-cyan-500" />
                  <CardTitle className="text-lg">{t('criticalThinking.development.metacognition')}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t('criticalThinking.development.metacognitionDesc')}
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card border-amber-400/20 hover:border-amber-400/40 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-amber-500" />
                  <CardTitle className="text-lg">{t('criticalThinking.development.intellectualHumility')}</CardTitle>
                </div>
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
        <Card className="mb-8 glass-card border-emerald-500/20">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Trophy className="h-6 w-6 text-emerald-500" />
              <CardTitle className="text-3xl font-semibold">{t('criticalThinking.benefits')}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="glass-card border-blue-400/20 hover:border-blue-400/40 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-blue-500" />
                    <h4 className="font-semibold text-foreground">{t('criticalThinking.personalBenefits')}</h4>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-2 rounded-lg bg-muted/20">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{t('criticalThinking.personalBenefitsList.betterDecisions')}</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 rounded-lg bg-muted/20">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{t('criticalThinking.personalBenefitsList.selfAwareness')}</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 rounded-lg bg-muted/20">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{t('criticalThinking.personalBenefitsList.problemSolving')}</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 rounded-lg bg-muted/20">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{t('criticalThinking.personalBenefitsList.independence')}</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 rounded-lg bg-muted/20">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{t('criticalThinking.personalBenefitsList.manipulation')}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="glass-card border-purple-400/20 hover:border-purple-400/40 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-5 w-5 text-purple-500" />
                    <h4 className="font-semibold text-foreground">{t('criticalThinking.professionalBenefits')}</h4>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-2 rounded-lg bg-muted/20">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{t('criticalThinking.professionalBenefitsList.analytical')}</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 rounded-lg bg-muted/20">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{t('criticalThinking.professionalBenefitsList.strategic')}</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 rounded-lg bg-muted/20">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{t('criticalThinking.professionalBenefitsList.creativity')}</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 rounded-lg bg-muted/20">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{t('criticalThinking.professionalBenefitsList.communication')}</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 rounded-lg bg-muted/20">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{t('criticalThinking.professionalBenefitsList.leadership')}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Conclusion Card */}
        <Card className="mb-8 glass-card border-primary/20">
          <CardHeader>
            <div className="flex items-center gap-3">
              <ArrowRight className="h-6 w-6 text-primary" />
              <CardTitle className="text-2xl font-semibold">{t('criticalThinking.pathForward')}</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 border border-primary/20 rounded-lg bg-primary/5">
              <p className="text-muted-foreground">
                {t('criticalThinking.conclusion1')}
              </p>
            </div>
            <div className="p-4 border border-primary/20 rounded-lg bg-primary/5">
              <p className="text-muted-foreground">
                {t('criticalThinking.conclusion2')}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}