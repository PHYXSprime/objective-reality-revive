import { Smile, Brain, Users, AlertTriangle, Shield, Target } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { SolutionNavigation } from '@/components/SolutionNavigation';

export default function Comedians() {
  const { t } = useLanguage();

  const comedianRoles = [
    {
      role: t('comedians.roles.truthTellers'),
      description: t('comedians.roles.truthTellersDesc')
    },
    {
      role: t('comedians.roles.socialCritics'),
      description: t('comedians.roles.socialCriticsDesc')
    },
    {
      role: t('comedians.roles.realityCheckers'),
      description: t('comedians.roles.realityCheckersDesc')
    },
    {
      role: t('comedians.roles.cognitiveDisruptors'),
      description: t('comedians.roles.cognitiveDisruptorsDesc')
    }
  ];

  const comedianPhilosophers = [
    {
      name: "George Carlin",
      insight: t('comedians.carlin.insight'),
      quote: t('comedians.carlin.quote')
    },
    {
      name: "Ricky Gervais",
      insight: t('comedians.gervais.insight'),
      quote: t('comedians.gervais.quote')
    },
    {
      name: "Dave Chappelle",
      insight: t('comedians.chappelle.insight'),
      quote: t('comedians.chappelle.quote')
    },
    {
      name: "Jim Carrey",
      insight: t('comedians.carrey.insight'),
      quote: t('comedians.carrey.quote')
    }
  ];

  const propagandaWarning = [
    t('comedians.propaganda.hollywood'),
    t('comedians.propaganda.socialMedia'),
    t('comedians.propaganda.cambridge'),
    t('comedians.propaganda.freeApps'),
    t('comedians.propaganda.pressure')
  ];

  return (
    <div className="min-h-screen py-8 pr-20">
      <SolutionNavigation />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="glass-card rounded-2xl p-8 max-w-4xl mx-auto mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-6">
              {t('comedians.title')}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('comedians.subtitle')}
            </p>
          </div>
        </div>

        {/* The Role of Comedy */}
        <Card className="mb-12 glass-card rounded-2xl border-blue-200 dark:border-blue-800">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Brain className="h-6 w-6 text-blue-600" />
              <CardTitle className="text-2xl">{t('comedians.importance')}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {t('comedians.importanceText')}
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {comedianRoles.map((role, index) => (
                <div key={index} className="p-4 border border-border rounded-lg text-center">
                  <h4 className="font-semibold text-foreground mb-2">{role.role}</h4>
                  <p className="text-sm text-muted-foreground">{role.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

          <div className="mb-12">
            <div className="glass-card rounded-2xl p-6 text-center mb-8 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                {t('comedians.philosophersTitle')}
              </h2>
            </div>
          <div className="grid md:grid-cols-2 gap-6">
            {comedianPhilosophers.map((comedian, index) => (
              <Card key={index} className="glass-card rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-lg">{comedian.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {comedian.insight}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-sm italic text-muted-foreground border-l-4 border-primary pl-4">
                    "{comedian.quote}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* The Dark Side: Propaganda Potential */}
        <Alert className="mb-12 border-orange-200 dark:border-orange-800">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription className="text-lg">
            <strong>{t('comedians.warningTitle')}</strong> {t('comedians.warningText')}
          </AlertDescription>
        </Alert>

        <Card className="mb-12 glass-card rounded-2xl">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-red-600" />
              <CardTitle className="text-2xl">{t('comedians.resistanceTitle')}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t('comedians.resistanceText')}
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-foreground mb-3">Dave Chappelle</h4>
                <p className="text-sm text-muted-foreground">
                  {t('comedians.chappelle.resistance')}
                </p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-foreground mb-3">Jim Carrey</h4>
                <p className="text-sm text-muted-foreground">
                  {t('comedians.carrey.resistance')}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-12 glass-card rounded-2xl">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Users className="h-6 w-6 text-purple-600" />
              <CardTitle className="text-2xl">{t('comedians.propagandaTitle')}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t('comedians.propagandaText')}
            </p>
            <div className="space-y-3">
              {propagandaWarning.map((warning, index) => (
                <div key={index} className="flex items-start gap-3">
                  <AlertTriangle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{warning}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="mb-12 glass-card rounded-2xl">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Target className="h-6 w-6 text-green-600" />
              <CardTitle className="text-2xl">{t('comedians.evaluationTitle')}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-foreground mb-4">{t('comedians.truthTelling.title')}</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• {t('comedians.truthTelling.1')}</li>
                  <li>• {t('comedians.truthTelling.2')}</li>
                  <li>• {t('comedians.truthTelling.3')}</li>
                  <li>• {t('comedians.truthTelling.4')}</li>
                  <li>• {t('comedians.truthTelling.5')}</li>
                  <li>• {t('comedians.truthTelling.6')}</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-4">{t('comedians.propagandaComedy.title')}</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• {t('comedians.propagandaComedy.1')}</li>
                  <li>• {t('comedians.propagandaComedy.2')}</li>
                  <li>• {t('comedians.propagandaComedy.3')}</li>
                  <li>• {t('comedians.propagandaComedy.4')}</li>
                  <li>• {t('comedians.propagandaComedy.5')}</li>
                  <li>• {t('comedians.propagandaComedy.6')}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="glass-card rounded-2xl text-center p-8">
          <Smile className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-foreground mb-4">
            {t('comedians.jesterTitle')}
          </h3>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            {t('comedians.jesterText')}
          </p>
        </div>
      </div>
    </div>
  );
}