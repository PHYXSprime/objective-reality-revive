import { Link } from 'react-router-dom';
import { Brain, AlertTriangle, Eye, ArrowRight, Target, Users, Shield, MessageCircle, BookOpen, Microscope, Smile, UserCheck, Scale, Zap, Megaphone, GraduationCap, Church, TreePine, Bed, Heart, UserX, Lightbulb } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageViewCounter } from '@/components/PageViewCounter';

export default function Home() {
  const { t } = useLanguage();

  // Challenge pages
  const challengePages = [
    {
      icon: Brain,
      title: t('biases.title'),
      link: '/cognitive-biases',
      color: 'text-blue-600 dark:text-blue-400',
    },
    {
      icon: AlertTriangle,
      title: t('fallacies.title'),
      link: '/logical-fallacies',
      color: 'text-red-600 dark:text-red-400',
    },
    {
      icon: Scale,
      title: 'Scientific Consensus',
      link: '/consensus',
      color: 'text-indigo-600 dark:text-indigo-400',
    },
    {
      icon: Zap,
      title: 'Censorship',
      link: '/censorship',
      color: 'text-yellow-600 dark:text-yellow-400',
    },
    {
      icon: Megaphone,
      title: 'Propaganda',
      link: '/propaganda',
      color: 'text-orange-600 dark:text-orange-400',
    },
    {
      icon: GraduationCap,
      title: 'Indoctrination',
      link: '/indoctrination',
      color: 'text-pink-600 dark:text-pink-400',
    },
    {
      icon: Church,
      title: 'Dogmatic Beliefs',
      link: '/dogmas',
      color: 'text-gray-600 dark:text-gray-400',
    },
    {
      icon: Bed,
      title: 'Lazy Thinking',
      link: '/lazy-thinking',
      color: 'text-teal-600 dark:text-teal-400',
    },
    {
      icon: Heart,
      title: 'Psychological Weakness',
      link: '/psychological-weakness',
      color: 'text-rose-600 dark:text-rose-400',
    },
    {
      icon: UserX,
      title: 'Ego',
      link: '/ego',
      color: 'text-amber-600 dark:text-amber-400',
    },
  ];

  // Solution pages
  const solutionPages = [
    {
      icon: MessageCircle,
      title: 'Street Epistemology',
      link: '/street-epistemology',
      color: 'text-green-600 dark:text-green-400',
    },
    {
      icon: BookOpen,
      title: 'Socratic Questioning',
      link: '/socratic-questioning',
      color: 'text-blue-600 dark:text-blue-400',
    },
    {
      icon: Microscope,
      title: 'Scientific Method',
      link: '/scientific-method',
      color: 'text-purple-600 dark:text-purple-400',
    },
    {
      icon: Lightbulb,
      title: 'Critical Thinking',
      link: '/critical-thinking',
      color: 'text-cyan-600 dark:text-cyan-400',
    },
    {
      icon: Smile,
      title: 'Comedians',
      link: '/comedians',
      color: 'text-yellow-600 dark:text-yellow-400',
    },
    {
      icon: UserCheck,
      title: 'Stefan Molyneux',
      link: '/stefan-molyneux',
      color: 'text-red-600 dark:text-red-400',
    },
  ];

  // Add Co-Evolution to challenges
  challengePages.push({
    icon: TreePine,
    title: 'Co-Evolution',
    link: '/co-evolution',
    color: 'text-emerald-600 dark:text-emerald-400',
  });

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
    <div className="min-h-screen gradient-bg relative overflow-hidden">
      <PageViewCounter />
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="relative z-10">
        {/* Hero Section with Epistemology */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-glow-blue mb-4 animate-pulse">
                {t('home.wakeUpNeo')}
              </h2>
            </div>
            <div className="glass-card rounded-3xl p-12 max-w-4xl mx-auto border border-primary/20 shadow-2xl mb-8">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {t('home.title')}
              </h1>
              <h2 className="text-2xl sm:text-3xl text-muted-foreground mb-6">
                {t('home.epistemologyQuestion')}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {t('home.epistemologyAnswer')}
              </p>
            </div>
          </div>
        </section>

      {/* Consciousness Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center">
            <Card className="glass-card transition-transform hover:scale-105 cursor-pointer w-full max-w-sm">
              <Link to="/consciousness" className="block p-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                      <Eye className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{t('consciousness.title')}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed text-left">
                    Explore consciousness levels and developmental frameworks for understanding human awareness
                  </p>
                </div>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Pages Navigation Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* Challenges Group */}
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl border border-orange-400/30 bg-transparent"></div>
            <div className="absolute -top-4 left-6 bg-background px-3 py-1 rounded-full border border-orange-400/30">
              <h2 className="text-xl font-semibold text-orange-600 dark:text-orange-400">Challenges</h2>
            </div>
            <div className="p-8 pt-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {challengePages.map((page, index) => (
                  <Card key={index} className="glass-card transition-transform hover:scale-105">
                    <Link to={page.link} className="block p-4">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center flex-shrink-0`}>
                          <page.icon className={`h-6 w-6 ${page.color}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-semibold text-foreground mb-2">{page.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            Learn about {page.title.toLowerCase()} and how they affect thinking
                          </p>
                        </div>
                      </div>
                    </Link>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Solutions Group */}
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl border border-green-400/30 bg-transparent"></div>
            <div className="absolute -top-4 left-6 bg-background px-3 py-1 rounded-full border border-green-400/30">
              <h2 className="text-xl font-semibold text-green-600 dark:text-green-400">Solutions</h2>
            </div>
            <div className="p-8 pt-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {solutionPages.map((page, index) => (
                  <Card key={index} className="glass-card transition-transform hover:scale-105">
                    <Link to={page.link} className="block p-4">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center flex-shrink-0`}>
                          <page.icon className={`h-6 w-6 ${page.color}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-semibold text-foreground mb-2">{page.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            Discover {page.title.toLowerCase()} techniques for better reasoning
                          </p>
                        </div>
                      </div>
                    </Link>
                  </Card>
                ))}
              </div>
            </div>
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
    </div>
  );
}