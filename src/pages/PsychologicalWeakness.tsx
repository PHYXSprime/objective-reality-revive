import { Shield, Heart, Brain, AlertTriangle, Target, Users, Eye, Zap } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChallengeNavigation } from '@/components/ChallengeNavigation';

export default function PsychologicalWeakness() {
  const { t } = useLanguage();

  const vulnerabilities = [
    {
      weakness: t('psychologicalWeakness.vulnerability.needBelonging'),
      description: t('psychologicalWeakness.vulnerability.needBelonging.desc'),
      exploitation: t('psychologicalWeakness.vulnerability.needBelonging.exploitation'),
      manifestation: t('psychologicalWeakness.vulnerability.needBelonging.manifestation')
    },
    {
      weakness: t('psychologicalWeakness.vulnerability.fearUncertainty'),
      description: t('psychologicalWeakness.vulnerability.fearUncertainty.desc'),
      exploitation: t('psychologicalWeakness.vulnerability.fearUncertainty.exploitation'),
      manifestation: t('psychologicalWeakness.vulnerability.fearUncertainty.manifestation')
    },
    {
      weakness: t('psychologicalWeakness.vulnerability.emotionalReasoning'),
      description: t('psychologicalWeakness.vulnerability.emotionalReasoning.desc'),
      exploitation: t('psychologicalWeakness.vulnerability.emotionalReasoning.exploitation'),
      manifestation: t('psychologicalWeakness.vulnerability.emotionalReasoning.manifestation')
    },
    {
      weakness: t('psychologicalWeakness.vulnerability.authorityDependence'),
      description: t('psychologicalWeakness.vulnerability.authorityDependence.desc'),
      exploitation: t('psychologicalWeakness.vulnerability.authorityDependence.exploitation'),
      manifestation: t('psychologicalWeakness.vulnerability.authorityDependence.manifestation')
    },
    {
      weakness: t('psychologicalWeakness.vulnerability.cognitiveDissonance'),
      description: t('psychologicalWeakness.vulnerability.cognitiveDissonance.desc'),
      exploitation: t('psychologicalWeakness.vulnerability.cognitiveDissonance.exploitation'),
      manifestation: t('psychologicalWeakness.vulnerability.cognitiveDissonance.manifestation')
    },
    {
      weakness: t('psychologicalWeakness.vulnerability.patternSeeking'),
      description: t('psychologicalWeakness.vulnerability.patternSeeking.desc'),
      exploitation: t('psychologicalWeakness.vulnerability.patternSeeking.exploitation'),
      manifestation: t('psychologicalWeakness.vulnerability.patternSeeking.manifestation')
    },
    {
      weakness: t('psychologicalWeakness.vulnerability.lossAversion'),
      description: t('psychologicalWeakness.vulnerability.lossAversion.desc'),
      exploitation: t('psychologicalWeakness.vulnerability.lossAversion.exploitation'),
      manifestation: t('psychologicalWeakness.vulnerability.lossAversion.manifestation')
    },
    {
      weakness: t('psychologicalWeakness.vulnerability.socialProof'),
      description: t('psychologicalWeakness.vulnerability.socialProof.desc'),
      exploitation: t('psychologicalWeakness.vulnerability.socialProof.exploitation'),
      manifestation: t('psychologicalWeakness.vulnerability.socialProof.manifestation')
    }
  ];

  const manipulationTactics = [
    {
      category: t('psychologicalWeakness.manipulation.emotional'),
      tactics: [t('psychologicalWeakness.manipulation.emotional.fear'), t('psychologicalWeakness.manipulation.emotional.guilt'), t('psychologicalWeakness.manipulation.emotional.anger'), t('psychologicalWeakness.manipulation.emotional.hope')],
      defense: t('psychologicalWeakness.manipulation.emotional.defense')
    },
    {
      category: t('psychologicalWeakness.manipulation.social'),
      tactics: [t('psychologicalWeakness.manipulation.social.pressure'), t('psychologicalWeakness.manipulation.social.isolation'), t('psychologicalWeakness.manipulation.social.status'), t('psychologicalWeakness.manipulation.social.belonging')],
      defense: t('psychologicalWeakness.manipulation.social.defense')
    },
    {
      category: t('psychologicalWeakness.manipulation.cognitive'),
      tactics: [t('psychologicalWeakness.manipulation.cognitive.overload'), t('psychologicalWeakness.manipulation.cognitive.choices'), t('psychologicalWeakness.manipulation.cognitive.anchoring'), t('psychologicalWeakness.manipulation.cognitive.framing')],
      defense: t('psychologicalWeakness.manipulation.cognitive.defense')
    },
    {
      category: t('psychologicalWeakness.manipulation.authority'),
      tactics: [t('psychologicalWeakness.manipulation.authority.false'), t('psychologicalWeakness.manipulation.authority.credential'), t('psychologicalWeakness.manipulation.authority.intimidation'), t('psychologicalWeakness.manipulation.authority.tradition')],
      defense: t('psychologicalWeakness.manipulation.authority.defense')
    }
  ];

  const strengtheningStrategies = [
    {
      strategy: t('psychologicalWeakness.strategy.emotionalAwareness'),
      description: t('psychologicalWeakness.strategy.emotionalAwareness.desc'),
      practice: t('psychologicalWeakness.strategy.emotionalAwareness.practice')
    },
    {
      strategy: t('psychologicalWeakness.strategy.independentThinking'),
      description: t('psychologicalWeakness.strategy.independentThinking.desc'),
      practice: t('psychologicalWeakness.strategy.independentThinking.practice')
    },
    {
      strategy: t('psychologicalWeakness.strategy.uncertaintyTolerance'),
      description: t('psychologicalWeakness.strategy.uncertaintyTolerance.desc'),
      practice: t('psychologicalWeakness.strategy.uncertaintyTolerance.practice')
    },
    {
      strategy: t('psychologicalWeakness.strategy.criticalAnalysis'),
      description: t('psychologicalWeakness.strategy.criticalAnalysis.desc'),
      practice: t('psychologicalWeakness.strategy.criticalAnalysis.practice')
    },
    {
      strategy: t('psychologicalWeakness.strategy.perspectiveTaking'),
      description: t('psychologicalWeakness.strategy.perspectiveTaking.desc'),
      practice: t('psychologicalWeakness.strategy.perspectiveTaking.practice')
    },
    {
      strategy: t('psychologicalWeakness.strategy.valuesClarification'),
      description: t('psychologicalWeakness.strategy.valuesClarification.desc'),
      practice: t('psychologicalWeakness.strategy.valuesClarification.practice')
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
              {t('psychologicalWeakness.title')}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('psychologicalWeakness.subtitle')}
            </p>
          </div>
        </div>

        {/* Definition */}
        <div className="glass-card rounded-2xl p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="h-6 w-6 text-red-600" />
            <h2 className="text-2xl font-bold text-foreground">{t('psychologicalWeakness.definition')}</h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            {t('psychologicalWeakness.definitionText')}
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-2">{t('psychologicalWeakness.evolutionaryOrigins')}</h4>
              <p className="text-sm text-muted-foreground">
                {t('psychologicalWeakness.evolutionaryOriginsDesc')}
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-2">{t('psychologicalWeakness.modernExploitation')}</h4>
              <p className="text-sm text-muted-foreground">
                {t('psychologicalWeakness.modernExploitationDesc')}
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-2">{t('psychologicalWeakness.universalNature')}</h4>
              <p className="text-sm text-muted-foreground">
                {t('psychologicalWeakness.universalNatureDesc')}
              </p>
            </div>
          </div>
        </div>

        {/* Core Vulnerabilities */}
        <div className="mb-12">
          <div className="glass-card rounded-2xl p-6 text-center mb-8 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {t('psychologicalWeakness.vulnerabilities')}
            </h2>
            <p className="text-muted-foreground">
              {t('psychologicalWeakness.vulnerabilitiesDesc')}
            </p>
          </div>
          
          <div className="space-y-6">
            {vulnerabilities.map((vulnerability, index) => (
              <Card key={index} className="glass-card rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Brain className="h-5 w-5 text-purple-600" />
                    {vulnerability.weakness}
                  </CardTitle>
                  <CardDescription>{vulnerability.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="glass-card p-3 rounded-lg border border-red-500/30 shadow-[0_0_20px_-5px_rgba(239,68,68,0.3)]">
                      <h5 className="font-semibold text-red-200 dark:text-red-100 mb-2">{t('psychologicalWeakness.howExploited')}</h5>
                      <p className="text-sm text-red-200 dark:text-red-100">{vulnerability.exploitation}</p>
                    </div>
                    <div className="glass-card p-3 rounded-lg border border-orange-500/30 shadow-[0_0_20px_-5px_rgba(251,146,60,0.3)]">
                      <h5 className="font-semibold text-orange-200 dark:text-orange-100 mb-2">{t('psychologicalWeakness.manifestation')}</h5>
                      <p className="text-sm text-orange-200 dark:text-orange-100">{vulnerability.manifestation}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Manipulation Tactics */}
        <div className="glass-card rounded-2xl p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="h-6 w-6 text-orange-600" />
            <h2 className="text-2xl font-bold text-foreground">{t('psychologicalWeakness.manipulationTactics')}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {manipulationTactics.map((tactic, index) => (
              <div key={index} className="border border-muted rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-3">{tactic.category}</h4>
                <div className="mb-3">
                  <h5 className="text-sm font-medium text-muted-foreground mb-2">{t('psychologicalWeakness.commonTactics')}</h5>
                  <ul className="space-y-1">
                    {tactic.tactics.map((technique, idx) => (
                      <li key={idx} className="text-xs text-muted-foreground flex items-center gap-2">
                        <span className="w-1 h-1 bg-orange-600 rounded-full"></span>
                        {technique}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="glass-card p-3 rounded-lg border border-blue-500/30 shadow-[0_0_20px_-5px_rgba(59,130,246,0.3)]">
                  <p className="text-xs text-blue-200 dark:text-blue-100">
                    <span className="font-semibold">{t('psychologicalWeakness.defense')}</span> {tactic.defense}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Warning Signs */}
        <div className="glass-card rounded-2xl p-8 mb-12 border-yellow-200 dark:border-yellow-800">
          <div className="flex items-center gap-3 mb-6">
            <Eye className="h-6 w-6 text-yellow-600" />
            <h2 className="text-2xl font-bold text-foreground">{t('psychologicalWeakness.warningSignsTitle')}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-3">{t('psychologicalWeakness.emotionalRedFlags')}</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• {t('psychologicalWeakness.emotional.pressured')}</li>
                <li>• {t('psychologicalWeakness.emotional.reactions')}</li>
                <li>• {t('psychologicalWeakness.emotional.fomo')}</li>
                <li>• {t('psychologicalWeakness.emotional.guilt')}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">{t('psychologicalWeakness.socialRedFlags')}</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• {t('psychologicalWeakness.social.isolation')}</li>
                <li>• {t('psychologicalWeakness.social.conform')}</li>
                <li>• {t('psychologicalWeakness.social.punishment')}</li>
                <li>• {t('psychologicalWeakness.social.exclusive')}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">{t('psychologicalWeakness.logicalRedFlags')}</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• {t('psychologicalWeakness.logical.oversimplified')}</li>
                <li>• {t('psychologicalWeakness.logical.noEvidence')}</li>
                <li>• {t('psychologicalWeakness.logical.falseAuthority')}</li>
                <li>• {t('psychologicalWeakness.logical.unquestionable')}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Strengthening Strategies */}
        <div className="mb-12">
          <div className="glass-card rounded-2xl p-6 text-center mb-8 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {t('psychologicalWeakness.resilience')}
            </h2>
            <p className="text-muted-foreground">
              {t('psychologicalWeakness.resilienceDesc')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strengtheningStrategies.map((strategy, index) => (
              <Card key={index} className="glass-card rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Target className="h-5 w-5 text-green-600" />
                    {strategy.strategy}
                  </CardTitle>
                  <CardDescription>{strategy.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="glass-card p-3 rounded-lg border border-green-500/30 shadow-[0_0_20px_-5px_rgba(34,197,94,0.3)]">
                    <p className="text-sm text-green-200 dark:text-green-100">
                      <span className="font-semibold">{t('psychologicalWeakness.practice')}</span> {strategy.practice}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="glass-card rounded-2xl p-8 border-green-200 dark:border-green-800">
          <div className="flex items-center gap-3 mb-6">
            <Zap className="h-6 w-6 text-green-600" />
            <h2 className="text-2xl font-bold text-foreground">{t('psychologicalWeakness.freedom')}</h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            {t('psychologicalWeakness.freedomText')}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-3">{t('psychologicalWeakness.goalTitle')}</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• {t('psychologicalWeakness.goal.authentic')}</li>
                <li>• {t('psychologicalWeakness.goal.resist')}</li>
                <li>• {t('psychologicalWeakness.goal.relationships')}</li>
                <li>• {t('psychologicalWeakness.goal.clarity')}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">{t('psychologicalWeakness.rememberTitle')}</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• {t('psychologicalWeakness.remember.universal')}</li>
                <li>• {t('psychologicalWeakness.remember.awareness')}</li>
                <li>• {t('psychologicalWeakness.remember.practice')}</li>
                <li>• {t('psychologicalWeakness.remember.humanity')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}