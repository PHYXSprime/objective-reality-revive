import { Link } from 'react-router-dom';
import { AlertTriangle, Users, Search, Shield, Brain, Target, Eye, FileText, MessageCircle, Zap, User } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PageViewCounter } from '@/components/PageViewCounter';
import { SEO } from '@/components/SEO';

export default function Challenges() {
  const { t } = useLanguage();

  const challenges = [
    {
      icon: Users,
      titleKey: "challenge.indoctrination.title",
      descriptionKey: "challenge.indoctrination.description",
      link: "/indoctrination",
      color: "text-red-600 dark:text-red-400"
    },
    {
      icon: Target,
      titleKey: "challenge.consensus.title",
      descriptionKey: "challenge.consensus.description",
      link: "/consensus",
      color: "text-orange-600 dark:text-orange-400"
    },
    {
      icon: Brain,
      titleKey: "challenge.cognitive_biases.title",
      descriptionKey: "challenge.cognitive_biases.description",
      link: "/cognitive-biases",
      color: "text-blue-600 dark:text-blue-400"
    },
    {
      icon: AlertTriangle,
      titleKey: "challenge.logical_fallacies.title",
      descriptionKey: "challenge.logical_fallacies.description",
      link: "/logical-fallacies",
      color: "text-red-600 dark:text-red-400"
    },
    {
      icon: MessageCircle,
      titleKey: "challenge.propaganda.title",
      descriptionKey: "challenge.propaganda.description",
      link: "/propaganda",
      color: "text-purple-600 dark:text-purple-400"
    },
    {
      icon: Shield,
      titleKey: "challenge.censorship.title",
      descriptionKey: "challenge.censorship.description",
      link: "/censorship",
      color: "text-yellow-600 dark:text-yellow-400"
    },
    {
      icon: FileText,
      titleKey: "challenge.dogmas.title",
      descriptionKey: "challenge.dogmas.description",
      link: "/dogmas",
      color: "text-green-600 dark:text-green-400"
    },
    {
      icon: Search,
      titleKey: "challenge.co_evolution.title",
      descriptionKey: "challenge.co_evolution.description",
      link: "/co-evolution",
      color: "text-indigo-600 dark:text-indigo-400"
    },
    {
      icon: Zap,
      titleKey: "challenge.lazy_thinking.title",
      descriptionKey: "challenge.lazy_thinking.description",
      link: "/lazy-thinking",
      color: "text-pink-600 dark:text-pink-400"
    },
    {
      icon: Eye,
      titleKey: "challenge.psychological_weakness.title",
      descriptionKey: "challenge.psychological_weakness.description",
      link: "/psychological-weakness",
      color: "text-cyan-600 dark:text-cyan-400"
    },
    {
      icon: User,
      titleKey: "challenge.ego.title",
      descriptionKey: "challenge.ego.description",
      link: "/ego",
      color: "text-teal-600 dark:text-teal-400"
    }
  ];

  return (
    <div className="min-h-screen gradient-bg relative overflow-hidden">
      <SEO 
        title="Challenges to Critical Thinking"
        description="Discover the obstacles to clear thinking: indoctrination, propaganda, cognitive biases, logical fallacies, and more. Learn to recognize and overcome mental barriers."
        image="/og-challenges.png"
        url="/challenges"
      />
      <PageViewCounter />
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="relative z-10 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="glass-card rounded-3xl p-12 max-w-4xl mx-auto border border-primary/20 shadow-2xl">
              <h1 className="text-5xl font-bold text-foreground mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {t('challenges.title')}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {t('challenges.description')}
              </p>
            </div>
          </div>

        {/* Challenges Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {challenges.map((challenge, index) => (
            <Card key={index} className="h-full glass-card transition-transform hover:scale-105">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4`}>
                  <challenge.icon className={`h-6 w-6 ${challenge.color}`} />
                </div>
                <CardTitle className="text-lg">{t(challenge.titleKey)}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {t(challenge.descriptionKey)}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link to={challenge.link}>
                    {t('learn_more')}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why This Matters */}
        <Card className="mb-12 glass-card">
          <CardHeader>
            <CardTitle className="text-2xl">{t('challenges.why.title')}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-foreground mb-3">{t('challenges.personal.title')}</h4>
                <p className="text-muted-foreground">
                  {t('challenges.personal.description')}
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">{t('challenges.societal.title')}</h4>
                <p className="text-muted-foreground">
                  {t('challenges.societal.description')}
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">{t('challenges.discourse.title')}</h4>
                <p className="text-muted-foreground">
                  {t('challenges.discourse.description')}
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">{t('challenges.scientific.title')}</h4>
                <p className="text-muted-foreground">
                  {t('challenges.scientific.description')}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Interactive Elements */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>{t('challenges.start_journey')}</CardTitle>
              <CardDescription>
                {t('challenges.start_journey.description')}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button asChild className="w-full">
                <Link to="/cognitive-biases">
                  {t('challenges.explore_biases')}
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link to="/logical-fallacies">
                  {t('challenges.study_fallacies')}
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <CardTitle>{t('challenges.advanced_topics')}</CardTitle>
              <CardDescription>
                {t('challenges.advanced_topics.description')}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button asChild variant="outline" className="w-full">
                <Link to="/consensus">
                  {t('challenges.scientific_consensus')}
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link to="/censorship">
                  {t('challenges.information_suppression')}
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
        </div>
      </div>
    </div>
  );
}