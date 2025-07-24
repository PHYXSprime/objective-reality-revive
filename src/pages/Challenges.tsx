import { Link } from 'react-router-dom';
import { AlertTriangle, Users, Search, Shield, Brain, Target, Eye, FileText, MessageCircle, Zap, User } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Challenges() {
  const { t } = useLanguage();

  const challenges = [
    {
      icon: Users,
      title: "Indoctrination",
      description: "Systematic influence by parents, state/school, and media that shapes our worldview from childhood.",
      link: "/indoctrination",
      color: "text-red-600 dark:text-red-400"
    },
    {
      icon: Target,
      title: "Scientific Consensus as Golden Calf",
      description: "Blind acceptance of scientific consensus without critical evaluation of underlying assumptions.",
      link: "/consensus",
      color: "text-orange-600 dark:text-orange-400"
    },
    {
      icon: Brain,
      title: "Cognitive Biases",
      description: "Systematic errors in thinking that affect decisions and judgments.",
      link: "/cognitive-biases",
      color: "text-blue-600 dark:text-blue-400"
    },
    {
      icon: AlertTriangle,
      title: "Logical Fallacies",
      description: "Flawed reasoning patterns that undermine the logic of arguments.",
      link: "/logical-fallacies",
      color: "text-red-600 dark:text-red-400"
    },
    {
      icon: MessageCircle,
      title: "Propaganda",
      description: "Information designed to promote particular political causes or points of view.",
      link: "/propaganda",
      color: "text-purple-600 dark:text-purple-400"
    },
    {
      icon: Shield,
      title: "Censorship",
      description: "Suppression of information and ideas that challenge established narratives.",
      link: "/censorship",
      color: "text-yellow-600 dark:text-yellow-400"
    },
    {
      icon: FileText,
      title: "Dogmatic Beliefs",
      description: "Rigid adherence to principles without consideration of evidence or alternative viewpoints.",
      link: "/dogmas",
      color: "text-green-600 dark:text-green-400"
    },
    {
      icon: Search,
      title: "Co-evolution with Religion",
      description: "How religious thinking patterns influence secular reasoning and decision-making.",
      link: "/co-evolution",
      color: "text-indigo-600 dark:text-indigo-400"
    },
    {
      icon: Zap,
      title: "Lazy Thinking",
      description: "Mental shortcuts and avoidance of deep analysis leading to poor conclusions.",
      link: "/lazy-thinking",
      color: "text-pink-600 dark:text-pink-400"
    },
    {
      icon: Eye,
      title: "Psychological Weaknesses",
      description: "Human psychological vulnerabilities that can be exploited to manipulate thinking.",
      link: "/psychological-weakness",
      color: "text-cyan-600 dark:text-cyan-400"
    },
    {
      icon: User,
      title: "Ego",
      description: "How personal identity and self-image interfere with objective reasoning.",
      link: "/ego",
      color: "text-teal-600 dark:text-teal-400"
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Card className="mb-12 glass-card">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-bold">
              Challenges to Objective Reality
            </CardTitle>
            <CardDescription className="text-xl max-w-4xl mx-auto">
              The challenges that divide us from objective reality are many. Understanding these barriers is the first step toward overcoming them and developing clearer, more accurate thinking.
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Challenges Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {challenges.map((challenge, index) => (
            <Card key={index} className="h-full glass-card transition-transform hover:scale-105">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4`}>
                  <challenge.icon className={`h-6 w-6 ${challenge.color}`} />
                </div>
                <CardTitle className="text-lg">{challenge.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {challenge.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link to={challenge.link}>
                    Learn More
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why This Matters */}
        <Card className="mb-12 glass-card">
          <CardHeader>
            <CardTitle className="text-2xl">Why Understanding These Challenges Matters</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Personal Growth</h4>
                <p className="text-muted-foreground">
                  Recognizing these challenges in yourself leads to better decision-making, 
                  reduced susceptibility to manipulation, and more accurate beliefs about reality.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Societal Progress</h4>
                <p className="text-muted-foreground">
                  When more people understand these barriers, society becomes more resilient 
                  to misinformation, propaganda, and collective delusions.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Better Discourse</h4>
                <p className="text-muted-foreground">
                  Understanding these challenges improves the quality of debates and discussions, 
                  leading to more productive conversations and better collective outcomes.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Scientific Progress</h4>
                <p className="text-muted-foreground">
                  Awareness of these biases and fallacies helps scientists and researchers 
                  design better studies and reach more reliable conclusions.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Interactive Elements */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Start Your Journey</CardTitle>
              <CardDescription>
                Begin by exploring the most fundamental challenges to clear thinking.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button asChild className="w-full">
                <Link to="/cognitive-biases">
                  Explore Cognitive Biases
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link to="/logical-fallacies">
                  Study Logical Fallacies
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Advanced Topics</CardTitle>
              <CardDescription>
                Dive deeper into systemic and cultural barriers to objective thinking.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button asChild variant="outline" className="w-full">
                <Link to="/consensus">
                  Scientific Consensus
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link to="/censorship">
                  Information Suppression
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}