import { Link } from 'react-router-dom';
import { Brain, AlertTriangle, Eye, ArrowRight, Target, Users, Shield } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  const { t } = useLanguage();

  const features = [
    {
      icon: AlertTriangle,
      title: t('home.features.challenges.title'),
      description: t('home.features.challenges.description'),
      link: '/challenges',
      color: 'text-orange-600 dark:text-orange-400',
    },
    {
      icon: AlertTriangle,
      title: t('home.features.solutions.title'),
      description: t('home.features.solutions.description'),
      link: '/solutions',
      color: 'text-green-600 dark:text-green-400',
    },
    {
      icon: Brain,
      title: t('biases.title'),
      description: t('biases.description'),
      link: '/cognitive-biases',
      color: 'text-blue-600 dark:text-blue-400',
    },
    {
      icon: AlertTriangle,
      title: t('fallacies.title'),
      description: t('fallacies.description'),
      link: '/logical-fallacies',
      color: 'text-red-600 dark:text-red-400',
    },
    {
      icon: Eye,
      title: t('consciousness.title'),
      description: t('consciousness.description'),
      link: '/consciousness',
      color: 'text-purple-600 dark:text-purple-400',
    },
  ];

  const principles = [
    {
      icon: Target,
      title: t('home.principles.confidence.title'),
      description: t('home.principles.confidence.description'),
      color: "text-blue-600 dark:text-blue-400"
    },
    {
      icon: Brain,
      title: t('home.principles.limitations.title'),
      description: t('home.principles.limitations.description'),
      color: "text-green-600 dark:text-green-400"
    },
    {
      icon: Users,
      title: t('home.principles.closedLoop.title'),
      description: t('home.principles.closedLoop.description'),
      color: "text-purple-600 dark:text-purple-400"
    },
    {
      icon: Shield,
      title: t('home.principles.errorReduction.title'),
      description: t('home.principles.errorReduction.description'),
      color: "text-red-600 dark:text-red-400"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Epistemology */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-glow-blue mb-4 animate-pulse">
              {t('home.wakeUpNeo')}
            </h2>
          </div>
          <Card className="glass-card p-8 mb-8">
            <CardContent className="text-center space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
                {t('home.title')}
              </h1>
              <h2 className="text-2xl sm:text-3xl text-muted-foreground">
                {t('home.epistemologyQuestion')}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {t('home.epistemologyAnswer')}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="glass-card transition-transform hover:scale-105">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4`}>
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full group">
                    <Link to={feature.link}>
                      {t('home.explore')}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="glass-card">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold">
                {t('home.reasoning.title')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">
                    {t('home.reasoning.whyMatters.title')}
                  </h3>
                  <p className="text-muted-foreground">
                    {t('home.reasoning.whyMatters.text')}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">
                    {t('home.reasoning.approach.title')}
                  </h3>
                  <p className="text-muted-foreground">
                    {t('home.reasoning.approach.text')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Epistemology Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <Card className="glass-card mb-12">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold">
                {t('home.epistemology.title')}
              </CardTitle>
              <CardDescription className="text-lg max-w-3xl mx-auto">
                {t('home.epistemology.subtitle')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-foreground">
                    {t('home.aviation.title')}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('home.aviation.personal')}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('home.aviation.closedLoop')}
                  </p>
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-foreground">
                    {t('home.consequences.title')}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('home.consequences.today')}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('home.consequences.solution')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

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
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="glass-card">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold">
                {t('home.cta.title')}
              </CardTitle>
              <CardDescription className="text-muted-foreground max-w-3xl mx-auto">
                {t('home.cta.description')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to="/consciousness">
                    {t('home.cta.consciousness')}
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/cognitive-biases">
                    {t('home.cta.biases')}
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="glass-card">
            <CardContent className="text-center py-6">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <a 
                    href="https://lovable.dev" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm"
                  >
                    «Made with tons of ❤️ by Lovable.dev»
                  </a>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <a href="mailto:contact@Objective-Reality.info">
                    Contact David Heggli
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </footer>
    </div>
  );
}