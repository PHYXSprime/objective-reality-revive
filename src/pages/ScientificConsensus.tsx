import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { AlertTriangle, TrendingUp, CheckCircle, AlertCircle } from 'lucide-react';
import { ChallengeNavigation } from '@/components/ChallengeNavigation';

export default function ScientificConsensus() {
  const { t, isLoading, error } = useLanguage();

  if (isLoading) {
    return (
      <div className="min-h-screen py-8 pr-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Loading...</h1>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen py-8 pr-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Error</h1>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  // Confidence levels data
  const confidenceLevels = [
    { field: 'mathematics', confidence: 99, icon: <CheckCircle className="h-5 w-5" /> },
    { field: 'physics', confidence: 95, icon: <CheckCircle className="h-5 w-5" /> },
    { field: 'chemistry', confidence: 90, icon: <CheckCircle className="h-5 w-5" /> },
    { field: 'biology', confidence: 80, icon: <TrendingUp className="h-5 w-5" /> },
    { field: 'medicine', confidence: 75, icon: <TrendingUp className="h-5 w-5" /> },
    { field: 'history', confidence: 70, icon: <TrendingUp className="h-5 w-5" /> },
    { field: 'psychology', confidence: 60, icon: <AlertCircle className="h-5 w-5" /> },
    { field: 'nutrition', confidence: 50, icon: <AlertTriangle className="h-5 w-5" /> },
    { field: 'economics', confidence: 45, icon: <AlertTriangle className="h-5 w-5" /> },
    { field: 'climate', confidence: 40, icon: <AlertTriangle className="h-5 w-5" /> },
    { field: 'social', confidence: 35, icon: <AlertTriangle className="h-5 w-5" /> },
  ];

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 90) return 'bg-green-500';
    if (confidence >= 75) return 'bg-blue-500';
    if (confidence >= 60) return 'bg-yellow-500';
    if (confidence >= 45) return 'bg-orange-500';
    return 'bg-red-500';
  };

  const getConfidenceBadgeColor = (confidence: number) => {
    if (confidence >= 90) return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
    if (confidence >= 75) return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
    if (confidence >= 60) return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
    if (confidence >= 45) return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
    return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
  };

  return (
    <div className="min-h-screen py-8 pr-20">
      <ChallengeNavigation />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Card className="mb-8 glass-card">
          <CardHeader>
            <CardTitle className="text-4xl font-bold">
              {t('scientificConsensus.title')}
            </CardTitle>
            <CardDescription className="text-xl max-w-3xl">
              {t('consensus.description')}
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Critical Observation */}
        <Card className="mb-8 glass-card border-orange-200 dark:border-orange-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-orange-600 dark:text-orange-400">
              <AlertTriangle className="h-6 w-6" />
              {t('scientificConsensus.criticalObservation')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-muted-foreground">
              {t('scientificConsensus.criticalText')}
            </p>
          </CardContent>
        </Card>

        {/* Key Concepts */}
        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>{t('scientificConsensus.consensusVsDogma')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                {t('scientificConsensus.consensusVsDogmaText')}
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <CardTitle>{t('scientificConsensus.balancedApproach')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                {t('scientificConsensus.balancedApproachText')}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Confidence Levels */}
        <Card className="mb-8 glass-card">
          <CardHeader>
            <CardTitle className="text-2xl">{t('scientificConsensus.confidenceLevels')}</CardTitle>
            <CardDescription>
              {t('scientificConsensus.confidenceDesc')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {confidenceLevels.map((item) => (
                <div key={item.field} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {item.icon}
                      <div>
                        <h4 className="font-medium">
                          {t(`scientificConsensus.field.${item.field}`)}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {t(`scientificConsensus.field.${item.field}.desc`)}
                        </p>
                      </div>
                    </div>
                    <Badge className={getConfidenceBadgeColor(item.confidence)}>
                      {item.confidence}{t('scientificConsensus.confidencePercentage')}
                    </Badge>
                  </div>
                  <Progress 
                    value={item.confidence} 
                    className="h-2"
                    style={{
                      '--progress-background': getConfidenceColor(item.confidence)
                    } as React.CSSProperties}
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Historical Pattern */}
        <Card className="mb-8 glass-card">
          <CardHeader>
            <CardTitle className="text-2xl">{t('scientificConsensus.historicalPattern')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <h3 className="font-semibold mb-2 text-primary">
                  {t('scientificConsensus.historical.pastConsensus')}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t('scientificConsensus.historical.pastConsensusText')}
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-primary">
                  {t('scientificConsensus.historical.currentChallenges')}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t('scientificConsensus.historical.currentChallengesText')}
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-primary">
                  {t('scientificConsensus.historical.futureOutlook')}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t('scientificConsensus.historical.futureOutlookText')}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Problems with Consensus */}
        <Card className="mb-8 glass-card">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <AlertCircle className="h-6 w-6 text-orange-500" />
              {t('scientificConsensus.consensusProblems')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm">{t('scientificConsensus.consensusProblems.paradigms')}</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm">{t('scientificConsensus.consensusProblems.funding')}</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm">{t('scientificConsensus.consensusProblems.groupthink')}</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm">{t('scientificConsensus.consensusProblems.political')}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Practical Guidelines */}
        <Card className="mb-8 glass-card">
          <CardHeader>
            <CardTitle className="text-2xl">{t('scientificConsensus.practicalGuidelines')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm">{t('scientificConsensus.balancedMethods.question')}</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm">{t('scientificConsensus.balancedMethods.conflicts')}</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm">{t('scientificConsensus.balancedMethods.alternatives')}</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm">{t('scientificConsensus.balancedMethods.statistics')}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}