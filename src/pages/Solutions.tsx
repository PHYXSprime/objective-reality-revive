import { Link } from 'react-router-dom';
import { MessageSquare, HelpCircle, Microscope, Lightbulb, Smile, Users, Target, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Solutions() {
  const { t } = useLanguage();

  const solutions = [
    {
      icon: MessageSquare,
      title: "Street Epistemology",
      description: "A gentle method of questioning that helps people examine the reliability of their beliefs without confrontation.",
      link: "/street-epistemology",
      color: "text-blue-600 dark:text-blue-400",
      priority: "Essential"
    },
    {
      icon: HelpCircle,
      title: "Socratic Questioning",
      description: "The ancient art of systematic questioning to explore complex ideas and uncover assumptions.",
      link: "/socratic-questioning",
      color: "text-green-600 dark:text-green-400",
      priority: "Essential"
    },
    {
      icon: Microscope,
      title: "Scientific Method",
      description: "Strict use of empirical methods and rigorous skepticism to form beliefs based on evidence.",
      link: "/scientific-method",
      color: "text-purple-600 dark:text-purple-400",
      priority: "Core"
    },
    {
      icon: Lightbulb,
      title: "Critical Thinking",
      description: "Systematic evaluation of information using logic, evidence, and rational analysis.",
      link: "/critical-thinking",
      color: "text-orange-600 dark:text-orange-400",
      priority: "Core"
    },
    {
      icon: Smile,
      title: "Comedians as Truth-Tellers",
      description: "The modern jesters who challenge status quo and deliver truth disguised as humor.",
      link: "/comedians",
      color: "text-pink-600 dark:text-pink-400",
      priority: "Cultural"
    }
  ];

  const personalActions = [
    "Educate yourself in Cognitive Biases and Logical Fallacies",
    "Practice Street Epistemology in conversations",
    "Apply the Scientific Method to your beliefs",
    "Always expect to be wrong or biased yourself",
    "Raise awareness and share knowledge",
    "Be a role model for rational thinking"
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-6">
            Solutions
          </h1>
          <h2 className="text-2xl text-muted-foreground mb-8">
            ...so what can we do about it?!
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Now that we understand the challenges to objective reality, let's explore the practical tools 
            and methods we can use to overcome cognitive biases, think more clearly, and help others do the same.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Practical Tools & Methods
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <Card key={index} className="h-full transition-transform hover:scale-105">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center`}>
                      <solution.icon className={`h-6 w-6 ${solution.color}`} />
                    </div>
                    <span className={`text-xs font-medium px-2 py-1 rounded ${
                      solution.priority === 'Essential' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                      solution.priority === 'Core' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                      'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                    }`}>
                      {solution.priority}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{solution.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {solution.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full group">
                    <Link to={solution.link}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Personal Action Plan */}
        <Card className="mb-12">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Target className="h-6 w-6 text-indigo-600" />
              <CardTitle className="text-2xl">Personal Action Plan</CardTitle>
            </div>
            <CardDescription>
              Practical steps you can take today to improve your thinking and help others
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-foreground mb-4">Daily Practices</h4>
                <ul className="space-y-3">
                  {personalActions.slice(0, 3).map((action, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{action}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-4">Social Impact</h4>
                <ul className="space-y-3">
                  {personalActions.slice(3).map((action, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{action}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Core Philosophy */}
        <Card className="mb-12 border-primary/20">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Users className="h-6 w-6 text-primary" />
              <CardTitle className="text-2xl">The Fundamental Mindset</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center p-6 bg-muted/30 rounded-lg">
              <h3 className="text-xl font-bold text-foreground mb-4">
                "Always expect to be wrong or biased yourself!"
              </h3>
              <p className="text-muted-foreground">
                This is the most important principle. Intellectual humility and the willingness 
                to update your beliefs when presented with better evidence is the foundation 
                of rational thinking.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="font-semibold text-foreground mb-2">Question Everything</h4>
                <p className="text-sm text-muted-foreground">
                  Including your own beliefs, assumptions, and "common knowledge"
                </p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-foreground mb-2">Seek Evidence</h4>
                <p className="text-sm text-muted-foreground">
                  Base beliefs on evidence, not emotion, tradition, or authority
                </p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-foreground mb-2">Stay Curious</h4>
                <p className="text-sm text-muted-foreground">
                  Maintain genuine interest in discovering truth, even when uncomfortable
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Getting Started */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Start Your Journey</CardTitle>
              <CardDescription>
                Begin with the most practical and immediately useful tools.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button asChild className="w-full">
                <Link to="/street-epistemology">
                  Learn Street Epistemology
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link to="/socratic-questioning">
                  Master Socratic Questioning
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Spread the Knowledge</CardTitle>
              <CardDescription>
                Help others develop better thinking skills and resist manipulation.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button asChild variant="outline" className="w-full">
                <Link to="/challenges">
                  Understand the Challenges
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link to="/critical-thinking">
                  Develop Critical Thinking
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}