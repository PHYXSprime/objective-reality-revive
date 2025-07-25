import { TrendingUp, AlertTriangle, BarChart3, Brain, Target, Users } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ChallengeNavigation } from '@/components/ChallengeNavigation';

export default function ScientificConsensus() {
  const { t } = useLanguage();

  const fields = [
    { field: t('scientificConsensus.field.mathematics'), confidence: 98, description: t('scientificConsensus.field.mathematics.desc') },
    { field: t('scientificConsensus.field.physics'), confidence: 85, description: t('scientificConsensus.field.physics.desc') },
    { field: t('scientificConsensus.field.chemistry'), confidence: 80, description: t('scientificConsensus.field.chemistry.desc') },
    { field: t('scientificConsensus.field.biology'), confidence: 70, description: t('scientificConsensus.field.biology.desc') },
    { field: t('scientificConsensus.field.medicine'), confidence: 60, description: t('scientificConsensus.field.medicine.desc') },
    { field: t('scientificConsensus.field.history'), confidence: 60, description: t('scientificConsensus.field.history.desc') },
    { field: t('scientificConsensus.field.psychology'), confidence: 45, description: t('scientificConsensus.field.psychology.desc') },
    { field: t('scientificConsensus.field.nutrition'), confidence: 40, description: t('scientificConsensus.field.nutrition.desc') },
    { field: t('scientificConsensus.field.economics'), confidence: 35, description: t('scientificConsensus.field.economics.desc') },
    { field: t('scientificConsensus.field.climate'), confidence: 24, description: t('scientificConsensus.field.climate.desc') },
    { field: t('scientificConsensus.field.social'), confidence: 14, description: t('scientificConsensus.field.social.desc') }
  ];

  const getProgressColor = (confidence: number) => {
    if (confidence >= 80) return "bg-green-500";
    if (confidence >= 60) return "bg-yellow-500";
    if (confidence >= 40) return "bg-orange-500";
    return "bg-red-500";
  };

  return (
    <div className="min-h-screen py-8 pr-20">
      <ChallengeNavigation />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="glass-card rounded-2xl p-8 max-w-4xl mx-auto mb-8 shadow-[0_0_20px_-5px_rgba(59,130,246,0.2)]">
            <h1 className="text-4xl font-bold text-foreground mb-6">
              {t('scientificConsensus.title')}
              {/* Debug: {JSON.stringify({key: 'scientificConsensus.title', value: t('scientificConsensus.title')})} */}
            </h1>
          </div>
          <div className="glass-card rounded-2xl p-6 max-w-4xl mx-auto mb-8 shadow-[0_0_15px_-5px_rgba(59,130,246,0.15)]">
            <p className="text-xl text-muted-foreground">
              {t('scientificConsensus.subtitle')}
            </p>
          </div>
        </div>

        {/* Key Insight */}
        <div className="glass-card rounded-2xl p-8 mb-12 border-orange-200/30 dark:border-orange-800/30 shadow-[0_0_20px_-5px_rgba(234,88,12,0.2)]">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="h-6 w-6 text-orange-600" />
            <h2 className="text-2xl font-bold text-foreground">{t('scientificConsensus.criticalObservation')}</h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t('scientificConsensus.criticalText')}
          </p>
        </div>

        {/* Field Confidence Analysis */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            {t('scientificConsensus.confidenceLevels')}
          </h2>
          <div className="glass-card rounded-2xl p-6 text-center mb-8 max-w-3xl mx-auto shadow-[0_0_15px_-5px_rgba(99,102,241,0.15)]">
            <p className="text-muted-foreground">
              {t('scientificConsensus.confidenceDesc')}
            </p>
          </div>
          
          <div className="grid gap-4">
            {fields.map((item, index) => (
              <Card key={index} className="glass-card rounded-2xl shadow-[0_0_10px_-3px_rgba(139,92,246,0.1)]">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-foreground">{item.field}</h3>
                    <span className="text-sm font-medium text-muted-foreground">
                      {item.confidence}{t('scientificConsensus.confidencePercentage')}
                    </span>
                  </div>
                  <Progress 
                    value={item.confidence} 
                    className="mb-2"
                  />
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why This Matters */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="glass-card rounded-2xl p-6 shadow-[0_0_15px_-5px_rgba(59,130,246,0.2)]">
            <div className="flex items-center gap-3 mb-4">
              <Brain className="h-6 w-6 text-blue-600" />
              <h3 className="text-xl font-bold text-foreground">{t('scientificConsensus.consensusVsDogma')}</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('scientificConsensus.consensusVsDogmaText')}
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• {t('scientificConsensus.consensusProblems.paradigms')}</li>
              <li>• {t('scientificConsensus.consensusProblems.funding')}</li>
              <li>• {t('scientificConsensus.consensusProblems.groupthink')}</li>
              <li>• {t('scientificConsensus.consensusProblems.political')}</li>
            </ul>
          </div>

          <div className="glass-card rounded-2xl p-6 shadow-[0_0_15px_-5px_rgba(34,197,94,0.2)]">
            <div className="flex items-center gap-3 mb-4">
              <Target className="h-6 w-6 text-green-600" />
              <h3 className="text-xl font-bold text-foreground">{t('scientificConsensus.balancedApproach')}</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('scientificConsensus.balancedApproachText')}
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• {t('scientificConsensus.balancedMethods.question')}</li>
              <li>• {t('scientificConsensus.balancedMethods.conflicts')}</li>
              <li>• {t('scientificConsensus.balancedMethods.alternatives')}</li>
              <li>• {t('scientificConsensus.balancedMethods.statistics')}</li>
            </ul>
          </div>
        </div>

        {/* Historical Perspective */}
        <div className="glass-card rounded-2xl p-8 mb-12 shadow-[0_0_20px_-5px_rgba(139,92,246,0.2)]">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="h-6 w-6 text-purple-600" />
            <h2 className="text-2xl font-bold text-foreground">{t('scientificConsensus.historicalPattern')}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-2">{t('scientificConsensus.historical.pastConsensus')}</h4>
              <p className="text-sm text-muted-foreground">
                {t('scientificConsensus.historical.pastConsensusText')}
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-2">{t('scientificConsensus.historical.currentChallenges')}</h4>
              <p className="text-sm text-muted-foreground">
                {t('scientificConsensus.historical.currentChallengesText')}
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-2">{t('scientificConsensus.historical.futureOutlook')}</h4>
              <p className="text-sm text-muted-foreground">
                {t('scientificConsensus.historical.futureOutlookText')}
              </p>
            </div>
          </div>
        </div>

        {/* Practical Guidelines */}
        <div className="glass-card rounded-2xl p-8 shadow-[0_0_20px_-5px_rgba(99,102,241,0.2)]">
          <div className="flex items-center gap-3 mb-6">
            <Users className="h-6 w-6 text-indigo-600" />
            <h2 className="text-2xl font-bold text-foreground">{t('scientificConsensus.practicalGuidelines')}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-3">{t('scientificConsensus.evaluating.title')}</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• {t('scientificConsensus.evaluating.funding')}</li>
                <li>• {t('scientificConsensus.evaluating.replication')}</li>
                <li>• {t('scientificConsensus.evaluating.methodology')}</li>
                <li>• {t('scientificConsensus.evaluating.interpretations')}</li>
                <li>• {t('scientificConsensus.evaluating.extraordinary')}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">{t('scientificConsensus.redFlags.title')}</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• {t('scientificConsensus.redFlags.settled')}</li>
                <li>• {t('scientificConsensus.redFlags.suppression')}</li>
                <li>• {t('scientificConsensus.redFlags.immediate')}</li>
                <li>• {t('scientificConsensus.redFlags.noData')}</li>
                <li>• {t('scientificConsensus.redFlags.authority')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}