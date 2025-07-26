import { BookOpen, Target, Shield, Scale, Brain, Users, Eye, AlertTriangle, Search, Filter as FilterIcon } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Epistemology() {
  const { t } = useLanguage();

  const principles = [
    {
      icon: Target,
      title: t('epistemology.principles.confidenceBasedBeliefs.title'),
      description: t('epistemology.principles.confidenceBasedBeliefs.description'),
      color: "text-blue-600 dark:text-blue-400"
    },
    {
      icon: Brain,
      title: t('epistemology.principles.brainLimitations.title'),
      description: t('epistemology.principles.brainLimitations.description'),
      color: "text-green-600 dark:text-green-400"
    },
    {
      icon: Users,
      title: t('epistemology.principles.closedLoopPrinciple.title'),
      description: t('epistemology.principles.closedLoopPrinciple.description'),
      color: "text-purple-600 dark:text-purple-400"
    },
    {
      icon: Shield,
      title: t('epistemology.principles.errorReduction.title'),
      description: t('epistemology.principles.errorReduction.description'),
      color: "text-red-600 dark:text-red-400"
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Card className="mb-12 glass-card">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-bold">
              {t('epistemology.title')}
            </CardTitle>
            <CardDescription className="text-2xl mb-4">
              {t('epistemology.subtitle')}
            </CardDescription>
            <CardDescription className="text-lg max-w-4xl mx-auto">
              {t('epistemology.description')}
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Neo Quote */}
        <Card className="glass-card mb-12">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold text-foreground text-glow-accent">
              {t('epistemology.neoQuote')}
            </h2>
          </CardContent>
        </Card>

        {/* Main Content */}
        <Card className="glass-card mb-12">
          <CardContent className="p-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground">
                  {t('epistemology.sections.humanCognition.title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('epistemology.sections.humanCognition.paragraph1')}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {t('epistemology.sections.humanCognition.paragraph2')}
                </p>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground">
                  {t('epistemology.sections.aviationExperience.title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('epistemology.sections.aviationExperience.paragraph1')}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {t('epistemology.sections.aviationExperience.paragraph2')}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Core Principles */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            {t('epistemology.corePrinciples.title')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, index) => (
              <Card key={index} className="h-full glass-card">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4`}>
                    <principle.icon className={`h-6 w-6 ${principle.color}`} />
                  </div>
                  <CardTitle className="text-lg">{principle.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {principle.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Practical Application */}
        <Card className="mb-12 glass-card">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <Scale className="h-6 w-6 text-primary" />
              {t('epistemology.practicalApplication.title')}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-foreground mb-3">{t('epistemology.practicalApplication.confidenceCalibration.title')}</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• {t('epistemology.practicalApplication.confidenceCalibration.point1')}</li>
                  <li>• {t('epistemology.practicalApplication.confidenceCalibration.point2')}</li>
                  <li>• {t('epistemology.practicalApplication.confidenceCalibration.point3')}</li>
                  <li>• {t('epistemology.practicalApplication.confidenceCalibration.point4')}</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">{t('epistemology.practicalApplication.errorPrevention.title')}</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• {t('epistemology.practicalApplication.errorPrevention.point1')}</li>
                  <li>• {t('epistemology.practicalApplication.errorPrevention.point2')}</li>
                  <li>• {t('epistemology.practicalApplication.errorPrevention.point3')}</li>
                  <li>• {t('epistemology.practicalApplication.errorPrevention.point4')}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="glass-card">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">
              {t('epistemology.callToAction.title')}
            </CardTitle>
            <CardDescription className="text-muted-foreground max-w-3xl mx-auto">
              {t('epistemology.callToAction.description')}
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}