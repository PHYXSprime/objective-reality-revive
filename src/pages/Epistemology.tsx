import { BookOpen, Target, Shield, Scale, Brain, Users, Eye, AlertTriangle, Search, Filter as FilterIcon } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Epistemology() {
  const { t } = useLanguage();

  const principles = [
    {
      icon: Target,
      title: "Confidence-Based Beliefs",
      description: "Assign confidence levels to every belief and adjust them as new information becomes available. Remove ego from the equation.",
      color: "text-blue-600 dark:text-blue-400"
    },
    {
      icon: Brain,
      title: "Brain Limitations",
      description: "Our brains evolved for survival, not perfect accuracy. They prioritize speed over precision to conserve energy.",
      color: "text-green-600 dark:text-green-400"
    },
    {
      icon: Users,
      title: "Closed Loop Principle",
      description: "Like airline pilots, use collaborative verification and systematic cross-checking to reduce human error.",
      color: "text-purple-600 dark:text-purple-400"
    },
    {
      icon: Shield,
      title: "Error Reduction",
      description: "Systematic approaches to identify and minimize cognitive errors in high-stakes decision making.",
      color: "text-red-600 dark:text-red-400"
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-6">
            Epistemology
          </h1>
          <p className="text-2xl text-muted-foreground mb-4">
            How can we know if something is actually true?
          </p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            The short answer is: we can never be 100% sure of anything. Therefore, the best thing to do is to give every piece of information or belief a value of confidence that adjusts with every new piece of information we gain.
          </p>
        </div>

        {/* Neo Quote */}
        <div className="bg-muted/30 p-8 rounded-lg mb-12 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            ....wake up Neo! ..................  wake up...
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">
              The Reality of Human Cognition
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Once we've accepted that our brains haven't developed to map reality as perfectly as possible – but as fast as possible and just good enough to survive and not waste too much energy on the quality of the result – we can find ways to work around the shortcomings of our brains.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              In today's highly developed, sophisticated world, most of the time we don't run the risk of being attacked by a wild animal and eventually dying – however, wrong or sub-optimal decisions taken hastily could have devastating results.
            </p>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">
              Aviation Experience
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              My personal experience as an airline pilot with over 15,000 hours of flying experience and 14,000 landings has taught me how limited and vulnerable to errors our brains actually are. This is why we work in a team of two in the cockpit where all actions are performed in a closed loop principle.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This closed loop principle has proven to be VERY effective in reducing human error on the list of aviation related accidents. And yet, human error is way above any other category for aircraft related deaths and injuries, while accidents due to technical malfunctions are asymptotically trending towards zero.
            </p>
          </div>
        </div>

        {/* Core Principles */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Core Epistemological Principles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, index) => (
              <Card key={index} className="h-full">
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
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <Scale className="h-6 w-6 text-primary" />
              Practical Application
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Confidence Calibration</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Rate beliefs on a 0-100% confidence scale</li>
                  <li>• Update confidence levels with new evidence</li>
                  <li>• Separate confidence from emotional attachment</li>
                  <li>• Track accuracy of past confidence assessments</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Error Prevention</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Use systematic verification processes</li>
                  <li>• Implement collaborative cross-checking</li>
                  <li>• Recognize when emotions influence judgment</li>
                  <li>• Question assumptions regularly</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center bg-muted/30 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            The Path to Better Decision Making
          </h3>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            By understanding the limitations of human cognition and implementing systematic approaches to verification and error reduction, we can make significantly better decisions and develop a more accurate understanding of reality.
          </p>
        </div>
      </div>
    </div>
  );
}