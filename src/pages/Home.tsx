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
    <div className="min-h-screen">
      {/* Hero Section with Epistemology */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 p-6 glass-card rounded-2xl glow-primary">
            <h2 className="text-2xl font-bold text-glow-accent mb-4">
              ....wake up Neo! ..................  wake up...
            </h2>
          </div>
          <Card className="glass-card p-8 mb-8">
            <CardContent className="text-center space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
                {t('home.title')}
              </h1>
              <h2 className="text-2xl sm:text-3xl text-muted-foreground">
                How can we know if something is actually true?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                The short answer is: we can never be 100% sure of anything. Therefore, the best thing to do is to give every piece of information or belief a value of confidence that adjusts with every new piece of information we gain.
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
        <div className="max-w-4xl mx-auto">
          <Card className="glass-card">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold">
                Understanding Human Reasoning
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
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
                Epistemology: The Foundation
              </CardTitle>
              <CardDescription className="text-lg max-w-3xl mx-auto">
                Once we've accepted that our brains haven't developed to map reality as perfectly as possible – 
                but as fast as possible and just good enough to survive – we can find ways to work around our limitations.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-foreground">
                    Lessons from Aviation
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    My personal experience as an airline pilot with over 15,000 hours of flying experience and 14,000 landings 
                    has taught me how limited and vulnerable to errors our brains actually are. This is why we work in a team 
                    of two in the cockpit where all actions are performed in a closed loop principle.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    This closed loop principle has proven to be VERY effective in reducing human error. And yet, human error 
                    is way above any other category for aircraft related deaths and injuries, while accidents due to 
                    technical malfunctions are asymptotically trending towards zero.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-foreground">
                    Modern Consequences
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    In today's highly developed, sophisticated world, most of the time we don't run the risk of being 
                    attacked by a wild animal and eventually dying – however, wrong or sub-optimal decisions taken 
                    hastily could have devastating results.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    By removing our ego from the equation and giving every belief a confidence level that adjusts with 
                    new information, we can make significantly better decisions.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Core Principles */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Target,
                title: "Confidence-Based Beliefs",
                description: "Assign confidence levels to every belief and adjust them as new information becomes available.",
                color: "text-blue-600 dark:text-blue-400"
              },
              {
                icon: Brain,
                title: "Brain Limitations",
                description: "Our brains evolved for survival, not perfect accuracy. They prioritize speed over precision.",
                color: "text-green-600 dark:text-green-400"
              },
              {
                icon: Users,
                title: "Closed Loop Principle",
                description: "Use collaborative verification and systematic cross-checking to reduce human error.",
                color: "text-purple-600 dark:text-purple-400"
              },
              {
                icon: Shield,
                title: "Error Reduction",
                description: "Systematic approaches to identify and minimize cognitive errors in decision making.",
                color: "text-red-600 dark:text-red-400"
              }
            ].map((principle, index) => (
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
                Start Your Journey to Clearer Thinking
              </CardTitle>
              <CardDescription className="text-muted-foreground max-w-3xl mx-auto">
                By understanding cognitive biases, logical fallacies, and the principles of sound reasoning, 
                you can make better decisions and develop a more accurate understanding of reality.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to="/consciousness">
                    Explore Consciousness Levels
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/cognitive-biases">
                    Study Cognitive Biases
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}