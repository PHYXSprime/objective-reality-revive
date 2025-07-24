import { Link } from 'react-router-dom';
import { Brain, AlertTriangle, Eye, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Brain,
      title: "Epistemology",
      description: "How can we know if something is actually true?",
      link: '/epistemology',
      color: 'text-indigo-600 dark:text-indigo-400',
    },
    {
      icon: AlertTriangle,
      title: "Challenges",
      description: "Barriers that separate us from objective reality",
      link: '/challenges',
      color: 'text-orange-600 dark:text-orange-400',
    },
    {
      icon: AlertTriangle,
      title: "Solutions",
      description: "Practical tools and methods to overcome cognitive limitations",
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

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            {t('home.title')}
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            {t('home.subtitle')}
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            {t('home.description')}
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="transition-transform hover:scale-105 bg-background">
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
                      Explore
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
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Understanding Human Reasoning
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Why It Matters
              </h3>
              <p className="text-muted-foreground">
                Cognitive biases and logical fallacies are systematic patterns that affect our thinking. 
                By understanding these patterns, we can make better decisions, improve our reasoning, 
                and develop a more accurate understanding of reality.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Our Approach
              </h3>
              <p className="text-muted-foreground">
                This resource provides comprehensive, categorized information about cognitive biases 
                and logical fallacies with real-world examples. Each entry includes clear definitions 
                and practical illustrations to help you recognize these patterns in everyday life.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}