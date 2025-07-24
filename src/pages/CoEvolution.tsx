import { Dna, Brain, Users, BookOpen, Target, AlertTriangle, History, Eye } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChallengeNavigation } from '@/components/ChallengeNavigation';

export default function CoEvolution() {
  const { t } = useLanguage();

  const evolutionaryPatterns = [
    {
      title: "Tribal Thinking",
      religious: "Us vs. them mentality (believers vs. infidels)",
      secular: "Political polarization and ideological camps",
      impact: "Creates in-group loyalty but prevents objective evaluation"
    },
    {
      title: "Authority Worship",
      religious: "Unquestioning obedience to religious leaders",
      secular: "Blind trust in experts, celebrities, or institutions",
      impact: "Substitutes critical thinking with deference to power"
    },
    {
      title: "Ritual Adherence",
      religious: "Sacred ceremonies and repeated practices",
      secular: "Political correctness and social compliance rituals",
      impact: "Values conformity over truth-seeking"
    },
    {
      title: "Heresy Punishment",
      religious: "Excommunication and shunning of questioners",
      secular: "Cancel culture and social ostracism for dissent",
      impact: "Suppresses intellectual exploration and honest inquiry"
    },
    {
      title: "Sacred Texts",
      religious: "Scripture as infallible divine revelation",
      secular: "Treating certain documents or theories as unquestionable",
      impact: "Prevents updating beliefs with new evidence"
    },
    {
      title: "Faith-Based Reasoning",
      religious: "Belief without evidence as virtue",
      secular: "Ideological commitments resistant to facts",
      impact: "Undermines evidence-based decision making"
    }
  ];

  const cognitiveTraps = [
    {
      trap: "Sacred Cow Syndrome",
      description: "Certain beliefs become too important to question",
      examples: ["Democracy is always good", "Science is always right", "Progress is inevitable"]
    },
    {
      trap: "Moral Superiority",
      description: "Believing your group holds exclusive moral truth",
      examples: ["We are on the right side of history", "Anyone who disagrees is evil", "Our cause justifies any means"]
    },
    {
      trap: "Apocalyptic Thinking",
      description: "Crisis mentality that demands immediate action",
      examples: ["Climate emergency", "Existential threats", "Now or never moments"]
    },
    {
      trap: "Salvation Narratives",
      description: "Belief in simple solutions to complex problems",
      examples: ["Technology will save us", "The right policy will fix everything", "Education solves all problems"]
    }
  ];

  const liberationStrategies = [
    {
      strategy: "Recognize the Pattern",
      description: "Identify when secular thinking mirrors religious structures",
      practice: "Ask: 'Am I treating this belief like a religious doctrine?'"
    },
    {
      strategy: "Question Sacred Assumptions",
      description: "Examine beliefs that feel too important to doubt",
      practice: "List your most cherished beliefs and research opposing views"
    },
    {
      strategy: "Embrace Intellectual Heresy",
      description: "Be willing to question popular orthodoxies",
      practice: "Regularly explore ideas that your peer group would find offensive"
    },
    {
      strategy: "Practice Ideological Diversity",
      description: "Seek out perspectives from different worldview systems",
      practice: "Engage seriously with viewpoints you typically dismiss"
    },
    {
      strategy: "Cultivate Uncertainty",
      description: "Learn to be comfortable with not having all the answers",
      practice: "End statements with 'but I could be wrong about this'"
    },
    {
      strategy: "Develop Meta-Cognition",
      description: "Think about how you think and why you believe",
      practice: "Regular self-examination of your reasoning processes"
    }
  ];

  return (
    <div className="min-h-screen py-8 pr-20">
      <ChallengeNavigation />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="glass-card rounded-2xl p-8 max-w-4xl mx-auto mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-6">
              Co-evolution with Religion: Secular Sacred Thinking
            </h1>
            <p className="text-xl text-muted-foreground">
              How religious thinking patterns persist in secular contexts and continue to shape our reasoning
            </p>
          </div>
        </div>

        {/* Core Concept */}
        <div className="glass-card rounded-2xl p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Dna className="h-6 w-6 text-purple-600" />
            <h2 className="text-2xl font-bold text-foreground">The Co-evolutionary Hypothesis</h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Human beings evolved alongside religious thinking for thousands of years. Even as societies become 
            more secular, the cognitive patterns that made religious thinking adaptive persist and manifest 
            in supposedly rational, secular contexts. We've simply transferred religious-style thinking 
            to new domains while believing we've become more rational.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-2">Evolutionary Advantage</h4>
              <p className="text-sm text-muted-foreground">
                Religious thinking promoted group cohesion and survival in tribal environments
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-2">Cognitive Persistence</h4>
              <p className="text-sm text-muted-foreground">
                These thinking patterns remain active even when religious content is removed
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-2">Modern Manifestation</h4>
              <p className="text-sm text-muted-foreground">
                Secular ideologies adopt religious-style reasoning and social structures
              </p>
            </div>
          </div>
        </div>

        {/* Pattern Comparison */}
        <div className="mb-12">
          <div className="glass-card rounded-2xl p-6 text-center mb-8 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Religious vs. Secular: Same Patterns, Different Content
            </h2>
            <p className="text-muted-foreground">
              Examining how ancient religious thinking patterns appear in modern secular contexts
            </p>
          </div>
          
          <div className="space-y-6">
            {evolutionaryPatterns.map((pattern, index) => (
              <Card key={index} className="glass-card rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Brain className="h-5 w-5 text-blue-600" />
                    {pattern.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-blue-50 dark:bg-blue-950/20 p-3 rounded-lg">
                      <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Religious Context</h5>
                      <p className="text-sm text-blue-600 dark:text-blue-400">{pattern.religious}</p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded-lg">
                      <h5 className="font-semibold text-green-700 dark:text-green-300 mb-2">Secular Context</h5>
                      <p className="text-sm text-green-600 dark:text-green-400">{pattern.secular}</p>
                    </div>
                  </div>
                  <div className="bg-orange-50 dark:bg-orange-950/20 p-3 rounded-lg">
                    <p className="text-sm text-orange-700 dark:text-orange-300">
                      <span className="font-semibold">Impact:</span> {pattern.impact}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Modern Cognitive Traps */}
        <div className="glass-card rounded-2xl p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="h-6 w-6 text-orange-600" />
            <h2 className="text-2xl font-bold text-foreground">Modern Secular Sacred Thinking</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {cognitiveTraps.map((trap, index) => (
              <div key={index} className="border border-muted rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">{trap.trap}</h4>
                <p className="text-muted-foreground text-sm mb-3">{trap.description}</p>
                <div className="space-y-1">
                  <h5 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Examples:</h5>
                  {trap.examples.map((example, idx) => (
                    <p key={idx} className="text-xs text-muted-foreground">• {example}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Historical Perspective */}
        <div className="glass-card rounded-2xl p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <History className="h-6 w-6 text-indigo-600" />
            <h2 className="text-2xl font-bold text-foreground">Historical Examples</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-2">Political Religions</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Communism, fascism, and nationalism adopted religious-style devotion and orthodoxy
              </p>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Sacred texts (manifestos)</li>
                <li>• Infallible leaders</li>
                <li>• Heretic punishment</li>
                <li>• Utopian promises</li>
              </ul>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-2">Scientific Orthodoxy</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Science sometimes adopts religious-like resistance to paradigm changes
              </p>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Consensus worship</li>
                <li>• Authority appeals</li>
                <li>• Suppressing dissent</li>
                <li>• Institutional control</li>
              </ul>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-2">Social Movements</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Modern activism often mirrors religious zealotry and moral absolutism
              </p>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Moral purity demands</li>
                <li>• Confession rituals</li>
                <li>• Excommunication practices</li>
                <li>• Original sin concepts</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Liberation Strategies */}
        <div className="mb-12">
          <div className="glass-card rounded-2xl p-6 text-center mb-8 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Breaking Free from Secular Sacred Thinking
            </h2>
            <p className="text-muted-foreground">
              Practical approaches to recognize and overcome inherited religious thinking patterns
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {liberationStrategies.map((strategy, index) => (
              <Card key={index} className="glass-card rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Target className="h-5 w-5 text-green-600" />
                    {strategy.strategy}
                  </CardTitle>
                  <CardDescription>{strategy.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded-lg">
                    <p className="text-sm text-green-700 dark:text-green-300">
                      <span className="font-semibold">Practice:</span> {strategy.practice}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Awareness */}
        <div className="glass-card rounded-2xl p-8 border-purple-200 dark:border-purple-800">
          <div className="flex items-center gap-3 mb-6">
            <Eye className="h-6 w-6 text-purple-600" />
            <h2 className="text-2xl font-bold text-foreground">The Path to Genuine Rationality</h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Recognizing our co-evolution with religious thinking doesn't mean rejecting all human cooperation 
            or social structures. Instead, it means becoming aware of when we're using religious-style reasoning 
            in secular contexts and choosing more appropriate cognitive tools for objective analysis.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-3">What This Means:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• True secularism requires more than removing religious content</li>
                <li>• We must also examine religious-style thinking patterns</li>
                <li>• Rationality is an ongoing practice, not a achieved state</li>
                <li>• Intellectual humility is essential for objective thinking</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">Practical Application:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Question your most sacred secular beliefs</li>
                <li>• Notice when you demonize those who disagree</li>
                <li>• Examine the social functions of your beliefs</li>
                <li>• Practice intellectual charity toward opponents</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}