import { Shield, Brain, AlertTriangle, Target, Users, Eye, BookOpen } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChallengeNavigation } from '@/components/ChallengeNavigation';

export default function DogmaticBeliefs() {
  const { t } = useLanguage();

  const characteristics = [
    {
      title: t('dogmaticBeliefs.char.absoluteCertainty'),
      description: t('dogmaticBeliefs.char.absoluteCertainty.desc'),
      danger: t('dogmaticBeliefs.char.absoluteCertainty.danger')
    },
    {
      title: t('dogmaticBeliefs.char.resistanceToChallenge'),
      description: t('dogmaticBeliefs.char.resistanceToChallenge.desc'),
      danger: t('dogmaticBeliefs.char.resistanceToChallenge.danger')
    },
    {
      title: t('dogmaticBeliefs.char.appealToAuthority'),
      description: t('dogmaticBeliefs.char.appealToAuthority.desc'),
      danger: t('dogmaticBeliefs.char.appealToAuthority.danger')
    },
    {
      title: t('dogmaticBeliefs.char.circularReasoning'),
      description: t('dogmaticBeliefs.char.circularReasoning.desc'),
      danger: t('dogmaticBeliefs.char.circularReasoning.danger')
    },
    {
      title: t('dogmaticBeliefs.char.blackWhiteThinking'),
      description: t('dogmaticBeliefs.char.blackWhiteThinking.desc'),
      danger: t('dogmaticBeliefs.char.blackWhiteThinking.danger')
    },
    {
      title: t('dogmaticBeliefs.char.emotionalInvestment'),
      description: t('dogmaticBeliefs.char.emotionalInvestment.desc'),
      danger: t('dogmaticBeliefs.char.emotionalInvestment.danger')
    }
  ];

  const examples = [
    {
      category: t('dogmaticBeliefs.example.religious'),
      description: t('dogmaticBeliefs.example.religious.desc'),
      manifestations: [t('dogmaticBeliefs.example.religious.m1'), t('dogmaticBeliefs.example.religious.m2'), t('dogmaticBeliefs.example.religious.m3'), t('dogmaticBeliefs.example.religious.m4')]
    },
    {
      category: t('dogmaticBeliefs.example.political'),
      description: t('dogmaticBeliefs.example.political.desc'),
      manifestations: [t('dogmaticBeliefs.example.political.m1'), t('dogmaticBeliefs.example.political.m2'), t('dogmaticBeliefs.example.political.m3'), t('dogmaticBeliefs.example.political.m4')]
    },
    {
      category: t('dogmaticBeliefs.example.scientific'),
      description: t('dogmaticBeliefs.example.scientific.desc'),
      manifestations: [t('dogmaticBeliefs.example.scientific.m1'), t('dogmaticBeliefs.example.scientific.m2'), t('dogmaticBeliefs.example.scientific.m3'), t('dogmaticBeliefs.example.scientific.m4')]
    },
    {
      category: t('dogmaticBeliefs.example.social'),
      description: t('dogmaticBeliefs.example.social.desc'),
      manifestations: [t('dogmaticBeliefs.example.social.m1'), t('dogmaticBeliefs.example.social.m2'), t('dogmaticBeliefs.example.social.m3'), t('dogmaticBeliefs.example.social.m4')]
    }
  ];

  const liberation = [
    {
      step: t('dogmaticBeliefs.lib.recognizeCertainty'),
      description: t('dogmaticBeliefs.lib.recognizeCertainty.desc')
    },
    {
      step: t('dogmaticBeliefs.lib.intellectualHumility'),
      description: t('dogmaticBeliefs.lib.intellectualHumility.desc')
    },
    {
      step: t('dogmaticBeliefs.lib.seekDisconfirming'),
      description: t('dogmaticBeliefs.lib.seekDisconfirming.desc')
    },
    {
      step: t('dogmaticBeliefs.lib.embraceUncertainty'),
      description: t('dogmaticBeliefs.lib.embraceUncertainty.desc')
    },
    {
      step: t('dogmaticBeliefs.lib.questionSacred'),
      description: t('dogmaticBeliefs.lib.questionSacred.desc')
    },
    {
      step: t('dogmaticBeliefs.lib.valueProcess'),
      description: t('dogmaticBeliefs.lib.valueProcess.desc')
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
              {t('dogmaticBeliefs.title')}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('dogmaticBeliefs.subtitle')}
            </p>
          </div>
        </div>

        {/* Definition */}
        <div className="glass-card rounded-2xl p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="h-6 w-6 text-red-600" />
            <h2 className="text-2xl font-bold text-foreground">{t('dogmaticBeliefs.definition')}</h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            {t('dogmaticBeliefs.definitionText')}
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-2">{t('dogmaticBeliefs.coreProblem')}</h4>
              <p className="text-sm text-muted-foreground">
                {t('dogmaticBeliefs.coreProblemText')}
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-2">{t('dogmaticBeliefs.universalRisk')}</h4>
              <p className="text-sm text-muted-foreground">
                {t('dogmaticBeliefs.universalRiskText')}
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-2">{t('dogmaticBeliefs.hiddenNature')}</h4>
              <p className="text-sm text-muted-foreground">
                {t('dogmaticBeliefs.hiddenNatureText')}
              </p>
            </div>
          </div>
        </div>

        {/* Characteristics */}
        <div className="mb-12">
          <div className="glass-card rounded-2xl p-6 text-center mb-8 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {t('dogmaticBeliefs.characteristics')}
            </h2>
            <p className="text-muted-foreground">
              {t('dogmaticBeliefs.characteristicsDesc')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {characteristics.map((char, index) => (
              <Card key={index} className="glass-card rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-orange-600" />
                    {char.title}
                  </CardTitle>
                  <CardDescription>{char.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="glass-card p-3 rounded-lg border border-red-500/30 shadow-[0_0_20px_-5px_rgba(239,68,68,0.3)]">
                    <p className="text-sm text-red-200 dark:text-red-100">
                      <span className="font-semibold">{t('dogmaticBeliefs.danger')}</span> {char.danger}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Examples Across Domains */}
        <div className="glass-card rounded-2xl p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Eye className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-foreground">{t('dogmaticBeliefs.examplesAcrossDomains')}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {examples.map((example, index) => (
              <div key={index} className="border border-muted rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">{example.category}</h4>
                <p className="text-muted-foreground text-sm mb-3">{example.description}</p>
                <ul className="space-y-1">
                  {example.manifestations.map((manifestation, idx) => (
                    <li key={idx} className="text-xs text-muted-foreground flex items-center gap-2">
                      <span className="w-1 h-1 bg-blue-600 rounded-full"></span>
                      {manifestation}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Psychological Roots */}
        <div className="glass-card rounded-2xl p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Brain className="h-6 w-6 text-purple-600" />
            <h2 className="text-2xl font-bold text-foreground">{t('dogmaticBeliefs.psychologicalRoots')}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-foreground mb-4">{t('dogmaticBeliefs.roots.psychologicalNeeds')}</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• {t('dogmaticBeliefs.roots.need1')}</li>
                <li>• {t('dogmaticBeliefs.roots.need2')}</li>
                <li>• {t('dogmaticBeliefs.roots.need3')}</li>
                <li>• {t('dogmaticBeliefs.roots.need4')}</li>
                <li>• {t('dogmaticBeliefs.roots.need5')}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">{t('dogmaticBeliefs.roots.socialPressures')}</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• {t('dogmaticBeliefs.roots.pressure1')}</li>
                <li>• {t('dogmaticBeliefs.roots.pressure2')}</li>
                <li>• {t('dogmaticBeliefs.roots.pressure3')}</li>
                <li>• {t('dogmaticBeliefs.roots.pressure4')}</li>
                <li>• {t('dogmaticBeliefs.roots.pressure5')}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Path to Liberation */}
        <div className="mb-12">
          <div className="glass-card rounded-2xl p-6 text-center mb-8 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {t('dogmaticBeliefs.stepsToLiberation')}
            </h2>
            <p className="text-muted-foreground">
              {t('dogmaticBeliefs.liberationDesc')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {liberation.map((step, index) => (
              <Card key={index} className="glass-card rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Target className="h-5 w-5 text-green-600" />
                    {step.step}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="glass-card rounded-2xl p-8 border-green-200 dark:border-green-800">
          <div className="flex items-center gap-3 mb-6">
            <Users className="h-6 w-6 text-green-600" />
            <h2 className="text-2xl font-bold text-foreground">{t('dogmaticBeliefs.freedomOfUncertainty')}</h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            {t('dogmaticBeliefs.freedomText')}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-3">{t('dogmaticBeliefs.benefitsTitle')}</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• {t('dogmaticBeliefs.benefit1')}</li>
                <li>• {t('dogmaticBeliefs.benefit2')}</li>
                <li>• {t('dogmaticBeliefs.benefit3')}</li>
                <li>• {t('dogmaticBeliefs.benefit4')}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">{t('dogmaticBeliefs.habitsTitle')}</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• {t('dogmaticBeliefs.habit1')}</li>
                <li>• {t('dogmaticBeliefs.habit2')}</li>
                <li>• {t('dogmaticBeliefs.habit3')}</li>
                <li>• {t('dogmaticBeliefs.habit4')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}