import { Zap, Brain, AlertTriangle, Target, Clock, Users, BookOpen, Eye } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function LazyThinking() {
  const { t } = useLanguage();

  const manifestations = [
    {
      title: "Mental Shortcuts",
      description: "Relying on heuristics instead of thorough analysis",
      examples: ["Stereotyping", "First impression bias", "Availability heuristic", "Representativeness bias"]
    },
    {
      title: "Confirmation Seeking",
      description: "Looking for information that confirms existing beliefs",
      examples: ["Echo chambers", "Selective reading", "Cherry-picking data", "Ignoring contradictions"]
    },
    {
      title: "Authority Dependence",
      description: "Accepting conclusions without examining reasoning",
      examples: ["Expert worship", "Celebrity opinions", "Credential bias", "Appeal to popularity"]
    },
    {
      title: "Binary Thinking",
      description: "Reducing complex issues to simple either/or choices",
      examples: ["False dichotomies", "All-or-nothing thinking", "Good vs. evil narratives", "With us or against us"]
    },
    {
      title: "Emotional Reasoning",
      description: "Using feelings as evidence for truth",
      examples: ["If it feels right, it must be true", "Gut instinct over analysis", "Wishful thinking", "Fear-based decisions"]
    },
    {
      title: "Surface-Level Processing",
      description: "Stopping at the first plausible explanation",
      examples: ["Headlines only", "Sound bite thinking", "Meme-level understanding", "Shallow research"]
    }
  ];

  const causes = [
    {
      factor: "Cognitive Load",
      description: "Mental fatigue leads to shortcuts and reduced analytical capacity",
      impact: "Decision quality decreases when overwhelmed"
    },
    {
      factor: "Time Pressure",
      description: "Rushing to conclusions to meet deadlines or social expectations",
      impact: "Premature closure on complex problems"
    },
    {
      factor: "Comfort Seeking",
      description: "Avoiding the discomfort of uncertainty and complexity",
      impact: "Preference for simple, certain answers over nuanced truth"
    },
    {
      factor: "Social Conformity",
      description: "Following group opinions to avoid conflict or rejection",
      impact: "Suppression of independent critical thinking"
    },
    {
      factor: "Information Overload",
      description: "Too much information leads to analysis paralysis or shortcuts",
      impact: "Either no decision or poorly informed decisions"
    },
    {
      factor: "Education System",
      description: "Training to find 'the right answer' rather than explore complexity",
      impact: "Underdeveloped critical thinking skills"
    }
  ];

  const antidotes = [
    {
      practice: "Slow Thinking",
      description: "Deliberately take time before reaching conclusions",
      technique: "Count to 10, sleep on decisions, use waiting periods"
    },
    {
      practice: "Devil's Advocate",
      description: "Actively seek arguments against your position",
      technique: "Argue the opposite side, find credible critics"
    },
    {
      practice: "Multiple Perspectives",
      description: "Consider how different people might view the issue",
      technique: "Role-play different viewpoints, diverse consultation"
    },
    {
      practice: "Question Assumptions",
      description: "Identify and examine underlying premises",
      technique: "Ask 'What if the opposite were true?' regularly"
    },
    {
      practice: "Evidence Hierarchy",
      description: "Distinguish between types and quality of evidence",
      technique: "Primary sources > secondary > opinions > speculation"
    },
    {
      practice: "Intellectual Humility",
      description: "Acknowledge the limits of your knowledge",
      technique: "Use phrases like 'I might be wrong' and 'I don't know'"
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="glass-card rounded-2xl p-8 max-w-4xl mx-auto mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-6">
              Lazy Thinking: The Path of Least Mental Resistance
            </h1>
            <p className="text-xl text-muted-foreground">
              Understanding how mental shortcuts and cognitive laziness lead us away from truth and toward convenient fiction
            </p>
          </div>
        </div>

        {/* Definition */}
        <div className="glass-card rounded-2xl p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Zap className="h-6 w-6 text-yellow-600" />
            <h2 className="text-2xl font-bold text-foreground">What is Lazy Thinking?</h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Lazy thinking is the tendency to use mental shortcuts, avoid deep analysis, and accept 
            superficial explanations rather than engaging in the hard work of critical reasoning. 
            While mental efficiency can be useful, lazy thinking often leads to poor decisions, 
            false beliefs, and missed opportunities for understanding.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-2">Natural Tendency</h4>
              <p className="text-sm text-muted-foreground">
                Our brains are wired to conserve energy and take cognitive shortcuts
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-2">Modern Amplification</h4>
              <p className="text-sm text-muted-foreground">
                Information overload and instant gratification culture encourage shallow thinking
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-2">Hidden Costs</h4>
              <p className="text-sm text-muted-foreground">
                Poor decisions compound over time, leading to significant life consequences
              </p>
            </div>
          </div>
        </div>

        {/* Manifestations */}
        <div className="mb-12">
          <div className="glass-card rounded-2xl p-6 text-center mb-8 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Common Forms of Lazy Thinking
            </h2>
            <p className="text-muted-foreground">
              Recognizing these patterns helps identify when we're taking cognitive shortcuts
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {manifestations.map((manifestation, index) => (
              <Card key={index} className="glass-card rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Brain className="h-5 w-5 text-blue-600" />
                    {manifestation.title}
                  </CardTitle>
                  <CardDescription>{manifestation.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {manifestation.examples.map((example, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                        {example}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Root Causes */}
        <div className="glass-card rounded-2xl p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Target className="h-6 w-6 text-orange-600" />
            <h2 className="text-2xl font-bold text-foreground">Why Do We Think Lazily?</h2>
          </div>
          <div className="space-y-6">
            {causes.map((cause, index) => (
              <div key={index} className="border border-muted rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">{cause.factor}</h4>
                <p className="text-muted-foreground text-sm mb-2">{cause.description}</p>
                <div className="bg-orange-50 dark:bg-orange-950/20 p-2 rounded">
                  <p className="text-xs text-orange-700 dark:text-orange-300">
                    <span className="font-semibold">Impact:</span> {cause.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Costs of Lazy Thinking */}
        <div className="glass-card rounded-2xl p-8 mb-12 border-red-200 dark:border-red-800">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="h-6 w-6 text-red-600" />
            <h2 className="text-2xl font-bold text-foreground">The Hidden Costs</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-foreground mb-4">Personal Consequences:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Poor financial decisions</li>
                <li>• Relationship problems from misunderstandings</li>
                <li>• Career stagnation from lack of deep thinking</li>
                <li>• Health issues from ignoring complexity</li>
                <li>• Missed opportunities for growth and learning</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Societal Impact:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Political polarization and tribalism</li>
                <li>• Spread of misinformation and conspiracy theories</li>
                <li>• Poor collective decision-making</li>
                <li>• Reduced innovation and problem-solving</li>
                <li>• Democratic degradation through uninformed voting</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Antidotes */}
        <div className="mb-12">
          <div className="glass-card rounded-2xl p-6 text-center mb-8 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Antidotes to Lazy Thinking
            </h2>
            <p className="text-muted-foreground">
              Practical strategies to develop more rigorous and thoughtful mental habits
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {antidotes.map((antidote, index) => (
              <Card key={index} className="glass-card rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Eye className="h-5 w-5 text-green-600" />
                    {antidote.practice}
                  </CardTitle>
                  <CardDescription>{antidote.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded-lg">
                    <p className="text-sm text-green-700 dark:text-green-300">
                      <span className="font-semibold">How:</span> {antidote.technique}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Building Better Habits */}
        <div className="glass-card rounded-2xl p-8 border-green-200 dark:border-green-800">
          <div className="flex items-center gap-3 mb-6">
            <Clock className="h-6 w-6 text-green-600" />
            <h2 className="text-2xl font-bold text-foreground">Building Deeper Thinking Habits</h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Overcoming lazy thinking requires deliberate practice and patience. The goal isn't to 
            overthink everything, but to recognize when a situation deserves deeper analysis 
            and having the tools and habits to provide it.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-3">Daily Practices:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Read long-form content regularly</li>
                <li>• Practice explaining complex topics simply</li>
                <li>• Ask "Why?" and "How?" more often</li>
                <li>• Seek out opposing viewpoints</li>
                <li>• Take breaks before important decisions</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">Environmental Changes:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Reduce social media consumption</li>
                <li>• Create distraction-free thinking spaces</li>
                <li>• Surround yourself with thoughtful people</li>
                <li>• Choose quality over quantity in information</li>
                <li>• Schedule regular reflection time</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}