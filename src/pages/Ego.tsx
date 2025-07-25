import { Crown, User, Heart, Brain, AlertTriangle, Target, Users, Eye } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChallengeNavigation } from '@/components/ChallengeNavigation';

export default function Ego() {
  const { t } = useLanguage();

  const egoManifestations = [
    {
      type: t('ego.manifestation.intellectualPride'),
      description: t('ego.manifestation.intellectualPride.desc'),
      examples: [t('ego.manifestation.intellectualPride.ex1'), t('ego.manifestation.intellectualPride.ex2'), t('ego.manifestation.intellectualPride.ex3'), t('ego.manifestation.intellectualPride.ex4')]
    },
    {
      type: t('ego.manifestation.identityProtection'),
      description: t('ego.manifestation.identityProtection.desc'),
      examples: [t('ego.manifestation.identityProtection.ex1'), t('ego.manifestation.identityProtection.ex2'), t('ego.manifestation.identityProtection.ex3'), t('ego.manifestation.identityProtection.ex4')]
    },
    {
      type: t('ego.manifestation.statusSeeking'),
      description: t('ego.manifestation.statusSeeking.desc'),
      examples: [t('ego.manifestation.statusSeeking.ex1'), t('ego.manifestation.statusSeeking.ex2'), t('ego.manifestation.statusSeeking.ex3'), t('ego.manifestation.statusSeeking.ex4')]
    },
    {
      type: t('ego.manifestation.needToBeRight'),
      description: t('ego.manifestation.needToBeRight.desc'),
      examples: [t('ego.manifestation.needToBeRight.ex1'), t('ego.manifestation.needToBeRight.ex2'), t('ego.manifestation.needToBeRight.ex3'), t('ego.manifestation.needToBeRight.ex4')]
    },
    {
      type: t('ego.manifestation.fearBeingWrong'),
      description: t('ego.manifestation.fearBeingWrong.desc'),
      examples: [t('ego.manifestation.fearBeingWrong.ex1'), t('ego.manifestation.fearBeingWrong.ex2'), t('ego.manifestation.fearBeingWrong.ex3'), t('ego.manifestation.fearBeingWrong.ex4')]
    },
    {
      type: t('ego.manifestation.superiorityComplex'),
      description: t('ego.manifestation.superiorityComplex.desc'),
      examples: [t('ego.manifestation.superiorityComplex.ex1'), t('ego.manifestation.superiorityComplex.ex2'), t('ego.manifestation.superiorityComplex.ex3'), t('ego.manifestation.superiorityComplex.ex4')]
    }
  ];

  const egoCosts = [
    {
      area: t('ego.cost.learningGrowth'),
      impact: t('ego.cost.learningGrowth.impact'),
      consequences: [t('ego.cost.learningGrowth.c1'), t('ego.cost.learningGrowth.c2'), t('ego.cost.learningGrowth.c3')]
    },
    {
      area: t('ego.cost.relationships'),
      impact: t('ego.cost.relationships.impact'),
      consequences: [t('ego.cost.relationships.c1'), t('ego.cost.relationships.c2'), t('ego.cost.relationships.c3')]
    },
    {
      area: t('ego.cost.decisionMaking'),
      impact: t('ego.cost.decisionMaking.impact'),
      consequences: [t('ego.cost.decisionMaking.c1'), t('ego.cost.decisionMaking.c2'), t('ego.cost.decisionMaking.c3')]
    },
    {
      area: t('ego.cost.truthSeeking'),
      impact: t('ego.cost.truthSeeking.impact'),
      consequences: [t('ego.cost.truthSeeking.c1'), t('ego.cost.truthSeeking.c2'), t('ego.cost.truthSeeking.c3')]
    }
  ];

  const egoTraps = [
    {
      trap: t('ego.trap.expert'),
      description: t('ego.trap.expert.desc'),
      warning: t('ego.trap.expert.warning')
    },
    {
      trap: t('ego.trap.identity'),
      description: t('ego.trap.identity.desc'),
      warning: t('ego.trap.identity.warning')
    },
    {
      trap: t('ego.trap.investment'),
      description: t('ego.trap.investment.desc'),
      warning: t('ego.trap.investment.warning')
    },
    {
      trap: t('ego.trap.social'),
      description: t('ego.trap.social.desc'),
      warning: t('ego.trap.social.warning')
    },
    {
      trap: t('ego.trap.moral'),
      description: t('ego.trap.moral.desc'),
      warning: t('ego.trap.moral.warning')
    }
  ];

  const egoReduction = [
    {
      practice: t('ego.reduction.intellectualHumility'),
      description: t('ego.reduction.intellectualHumility.desc'),
      techniques: [t('ego.reduction.intellectualHumility.t1'), t('ego.reduction.intellectualHumility.t2'), t('ego.reduction.intellectualHumility.t3')]
    },
    {
      practice: t('ego.reduction.curiosityOverCertainty'),
      description: t('ego.reduction.curiosityOverCertainty.desc'),
      techniques: [t('ego.reduction.curiosityOverCertainty.t1'), t('ego.reduction.curiosityOverCertainty.t2'), t('ego.reduction.curiosityOverCertainty.t3')]
    },
    {
      practice: t('ego.reduction.perspectiveTaking'),
      description: t('ego.reduction.perspectiveTaking.desc'),
      techniques: [t('ego.reduction.perspectiveTaking.t1'), t('ego.reduction.perspectiveTaking.t2'), t('ego.reduction.perspectiveTaking.t3')]
    },
    {
      practice: t('ego.reduction.errorCelebration'),
      description: t('ego.reduction.errorCelebration.desc'),
      techniques: [t('ego.reduction.errorCelebration.t1'), t('ego.reduction.errorCelebration.t2'), t('ego.reduction.errorCelebration.t3')]
    },
    {
      practice: t('ego.reduction.processFocus'),
      description: t('ego.reduction.processFocus.desc'),
      techniques: [t('ego.reduction.processFocus.t1'), t('ego.reduction.processFocus.t2'), t('ego.reduction.processFocus.t3')]
    },
    {
      practice: t('ego.reduction.identitySeparation'),
      description: t('ego.reduction.identitySeparation.desc'),
      techniques: [t('ego.reduction.identitySeparation.t1'), t('ego.reduction.identitySeparation.t2'), t('ego.reduction.identitySeparation.t3')]
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
              {t('ego.title')}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('ego.subtitle')}
            </p>
          </div>
        </div>

        {/* Definition */}
        <div className="glass-card rounded-2xl p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Crown className="h-6 w-6 text-purple-600" />
            <h2 className="text-2xl font-bold text-foreground">{t('ego.definition')}</h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            {t('ego.definitionText')}
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-2">{t('ego.coreProblem')}</h4>
              <p className="text-sm text-muted-foreground">
                {t('ego.coreProblemDesc')}
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-2">{t('ego.universalChallenge')}</h4>
              <p className="text-sm text-muted-foreground">
                {t('ego.universalChallengeDesc')}
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-2">{t('ego.hiddenNature')}</h4>
              <p className="text-sm text-muted-foreground">
                {t('ego.hiddenNatureDesc')}
              </p>
            </div>
          </div>
        </div>

        {/* Manifestations of Ego */}
        <div className="mb-12">
          <div className="glass-card rounded-2xl p-6 text-center mb-8 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {t('ego.manifestations')}
            </h2>
            <p className="text-muted-foreground">
              {t('ego.manifestationsDesc')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {egoManifestations.map((manifestation, index) => (
              <Card key={index} className="glass-card rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <User className="h-5 w-5 text-blue-600" />
                    {manifestation.type}
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

        {/* Costs of Ego-Driven Thinking */}
        <div className="glass-card rounded-2xl p-8 mb-12 border-red-200 dark:border-red-800">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="h-6 w-6 text-red-600" />
            <h2 className="text-2xl font-bold text-foreground">{t('ego.costs')}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {egoCosts.map((cost, index) => (
              <div key={index} className="border border-muted rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">{cost.area}</h4>
                <p className="text-muted-foreground text-sm mb-3">{cost.impact}</p>
                <div className="space-y-1">
                  <h5 className="text-xs font-medium text-red-600 dark:text-red-400 uppercase tracking-wide">{t('ego.consequences')}</h5>
                  {cost.consequences.map((consequence, idx) => (
                    <p key={idx} className="text-xs text-red-600 dark:text-red-400">• {consequence}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Common Ego Traps */}
        <div className="glass-card rounded-2xl p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Target className="h-6 w-6 text-orange-600" />
            <h2 className="text-2xl font-bold text-foreground">{t('ego.traps')}</h2>
          </div>
          <div className="space-y-4">
            {egoTraps.map((trap, index) => (
              <div key={index} className="border border-muted rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <div className="flex-grow">
                    <h4 className="font-semibold text-foreground mb-1">{trap.trap}</h4>
                    <p className="text-muted-foreground text-sm mb-2">{trap.description}</p>
                    <div className="glass-card p-3 rounded-lg border border-orange-500/30 shadow-[0_0_20px_-5px_rgba(251,146,60,0.3)]">
                      <p className="text-xs text-orange-200 dark:text-orange-100">
                        <span className="font-semibold">{t('ego.warningSign')}</span> {trap.warning}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ego Reduction Practices */}
        <div className="mb-12">
          <div className="glass-card rounded-2xl p-6 text-center mb-8 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {t('ego.reductionPractices')}
            </h2>
            <p className="text-muted-foreground">
              {t('ego.reductionPracticesDesc')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {egoReduction.map((practice, index) => (
              <Card key={index} className="glass-card rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Heart className="h-5 w-5 text-green-600" />
                    {practice.practice}
                  </CardTitle>
                  <CardDescription>{practice.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="glass-card p-3 rounded-lg border border-green-500/30 shadow-[0_0_20px_-5px_rgba(34,197,94,0.3)]">
                    <h5 className="font-semibold text-green-200 dark:text-green-100 mb-2">{t('ego.techniques')}</h5>
                    <ul className="space-y-1">
                      {practice.techniques.map((technique, idx) => (
                        <li key={idx} className="text-xs text-green-200 dark:text-green-100">• {technique}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* The Paradox of Ego */}
        <div className="glass-card rounded-2xl p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Brain className="h-6 w-6 text-purple-600" />
            <h2 className="text-2xl font-bold text-foreground">{t('ego.paradox')}</h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            {t('ego.paradoxText')}
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-foreground mb-4">{t('ego.genuineProgress')}</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• {t('ego.progress.uncertainty')}</li>
                <li>• {t('ego.progress.joyInWrong')}</li>
                <li>• {t('ego.progress.curiosity')}</li>
                <li>• {t('ego.progress.understanding')}</li>
                <li>• {t('ego.progress.lessNeed')}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">{t('ego.disguises')}</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• {t('ego.disguise.rational')}</li>
                <li>• {t('ego.disguise.humility')}</li>
                <li>• {t('ego.disguise.competitive')}</li>
                <li>• {t('ego.disguise.performance')}</li>
                <li>• {t('ego.disguise.judging')}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Authentic Growth */}
        <div className="glass-card rounded-2xl p-8 border-blue-200 dark:border-blue-800">
          <div className="flex items-center gap-3 mb-6">
            <Eye className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-foreground">{t('ego.pathBeyond')}</h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            {t('ego.pathBeyondText')}
          </p>
          <div className="glass-card p-6 rounded-lg border border-blue-500/30 shadow-[0_0_20px_-5px_rgba(59,130,246,0.3)]">
            <h4 className="font-semibold text-blue-200 dark:text-blue-100 mb-3">{t('ego.ultimateGoal')}</h4>
            <p className="text-blue-200 dark:text-blue-100">
              {t('ego.ultimateGoalText')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}