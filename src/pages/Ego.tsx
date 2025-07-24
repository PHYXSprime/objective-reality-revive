import { Crown, User, Heart, Brain, AlertTriangle, Target, Users, Eye } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChallengeNavigation } from '@/components/ChallengeNavigation';

export default function Ego() {
  const { t } = useLanguage();

  const egoManifestations = [
    {
      type: "Intellectual Pride",
      description: "Overestimating one's knowledge and reasoning abilities",
      examples: ["Dunning-Kruger effect", "Expert overconfidence", "Dismissing others' ideas", "Refusing to admit ignorance"]
    },
    {
      type: "Identity Protection",
      description: "Defending self-image even when it conflicts with truth",
      examples: ["Confirmation bias", "Motivated reasoning", "Face-saving behaviors", "Doubling down on mistakes"]
    },
    {
      type: "Status Seeking",
      description: "Prioritizing social standing over accuracy",
      examples: ["Signaling virtue", "Intellectual posturing", "Name-dropping", "Competitive debating"]
    },
    {
      type: "Need to Be Right",
      description: "Compulsive urge to win arguments rather than seek truth",
      examples: ["Moving goalposts", "Strawman arguments", "Ad hominem attacks", "Refusing to concede points"]
    },
    {
      type: "Fear of Being Wrong",
      description: "Avoiding situations where mistakes might be exposed",
      examples: ["Analysis paralysis", "Perfectionism", "Avoiding challenges", "Blame shifting"]
    },
    {
      type: "Superiority Complex",
      description: "Believing oneself to be better than others",
      examples: ["Moral superiority", "Intellectual elitism", "Group supremacy", "Dismissing 'common' people"]
    }
  ];

  const egoCosts = [
    {
      area: "Learning & Growth",
      impact: "Ego prevents admitting mistakes, asking questions, and accepting feedback",
      consequences: ["Stagnated personal development", "Missed learning opportunities", "Repeated errors"]
    },
    {
      area: "Relationships",
      impact: "Ego creates barriers to genuine connection and understanding",
      consequences: ["Damaged relationships", "Social isolation", "Inability to collaborate"]
    },
    {
      area: "Decision Making",
      impact: "Ego-driven decisions prioritize image over optimal outcomes",
      consequences: ["Poor choices", "Sunk cost fallacy", "Escalation of commitment"]
    },
    {
      area: "Truth Seeking",
      impact: "Ego makes us defend positions rather than follow evidence",
      consequences: ["False beliefs", "Intellectual dishonesty", "Closed-mindedness"]
    }
  ];

  const egoTraps = [
    {
      trap: "The Expert Trap",
      description: "Expertise in one area leading to overconfidence in others",
      warning: "Nobel Prize winners making claims outside their field"
    },
    {
      trap: "The Identity Trap",
      description: "When beliefs become part of personal identity",
      warning: "Changing your mind feels like losing yourself"
    },
    {
      trap: "The Investment Trap",
      description: "Having invested time/energy in a position makes abandoning it painful",
      warning: "Defending bad ideas because you've already committed to them"
    },
    {
      trap: "The Social Trap",
      description: "Social groups punish admission of error or uncertainty",
      warning: "Being right matters less than appearing right to your tribe"
    },
    {
      trap: "The Moral Trap",
      description: "Confusing being right with being good",
      warning: "Moral superiority preventing intellectual humility"
    }
  ];

  const egoReduction = [
    {
      practice: "Intellectual Humility",
      description: "Recognizing the limits of your knowledge and reasoning",
      techniques: ["Regular 'I don't know' practice", "Seeking disconfirming evidence", "Asking genuine questions"]
    },
    {
      practice: "Curiosity Over Certainty",
      description: "Valuing learning and discovery over being right",
      techniques: ["Approaching disagreements with curiosity", "Celebrating when you change your mind", "Focusing on understanding"]
    },
    {
      practice: "Perspective Taking",
      description: "Genuinely trying to understand other viewpoints",
      techniques: ["Steel-manning opponents' arguments", "Role-playing different perspectives", "Seeking common ground"]
    },
    {
      practice: "Error Celebration",
      description: "Treating mistakes as valuable learning opportunities",
      techniques: ["Openly admitting errors", "Analyzing what went wrong", "Sharing lessons learned"]
    },
    {
      practice: "Process Focus",
      description: "Caring more about how you think than what you conclude",
      techniques: ["Examining your reasoning process", "Questioning your motivations", "Valuing good thinking over good outcomes"]
    },
    {
      practice: "Identity Separation",
      description: "Distinguishing between your ideas and your self-worth",
      techniques: ["Holding beliefs lightly", "Practicing ideological diversity", "Cultivating multiple identities"]
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
              Ego: The Great Barrier to Truth
            </h1>
            <p className="text-xl text-muted-foreground">
              How our need to protect self-image and maintain superiority interferes with objective reasoning and truth-seeking
            </p>
          </div>
        </div>

        {/* Definition */}
        <div className="glass-card rounded-2xl p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Crown className="h-6 w-6 text-purple-600" />
            <h2 className="text-2xl font-bold text-foreground">Understanding Ego in Truth-Seeking</h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            In the context of objective thinking, ego refers to the psychological mechanisms that prioritize 
            self-image, status, and identity protection over accurate understanding of reality. While healthy 
            self-regard is important, ego-driven thinking creates systematic barriers to learning, growth, 
            and genuine truth-seeking.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-2">The Core Problem</h4>
              <p className="text-sm text-muted-foreground">
                Ego makes being right feel more important than getting it right
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-2">Universal Challenge</h4>
              <p className="text-sm text-muted-foreground">
                Even highly intelligent people struggle with ego-driven thinking
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-2">Hidden Nature</h4>
              <p className="text-sm text-muted-foreground">
                Ego-protection often disguises itself as principled reasoning
              </p>
            </div>
          </div>
        </div>

        {/* Manifestations of Ego */}
        <div className="mb-12">
          <div className="glass-card rounded-2xl p-6 text-center mb-8 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              How Ego Manifests in Thinking
            </h2>
            <p className="text-muted-foreground">
              Recognizing these patterns helps identify when ego is interfering with objective analysis
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {egoManifestations.map((manifestation, index) => (
              <Card key={index} className="glass-card rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <User className="h-5 w-5 text-blue-600" />
                    {manifestation.type}
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

        {/* Costs of Ego-Driven Thinking */}
        <div className="glass-card rounded-2xl p-8 mb-12 border-red-200 dark:border-red-800">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="h-6 w-6 text-red-600" />
            <h2 className="text-2xl font-bold text-foreground">The Cost of Ego-Driven Thinking</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {egoCosts.map((cost, index) => (
              <div key={index} className="border border-muted rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">{cost.area}</h4>
                <p className="text-muted-foreground text-sm mb-3">{cost.impact}</p>
                <div className="space-y-1">
                  <h5 className="text-xs font-medium text-red-600 dark:text-red-400 uppercase tracking-wide">Consequences:</h5>
                  {cost.consequences.map((consequence, idx) => (
                    <p key={idx} className="text-xs text-red-600 dark:text-red-400">• {consequence}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Common Ego Traps */}
        <div className="glass-card rounded-2xl p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Target className="h-6 w-6 text-orange-600" />
            <h2 className="text-2xl font-bold text-foreground">Common Ego Traps</h2>
          </div>
          <div className="space-y-4">
            {egoTraps.map((trap, index) => (
              <div key={index} className="border border-muted rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <div className="flex-grow">
                    <h4 className="font-semibold text-foreground mb-1">{trap.trap}</h4>
                    <p className="text-muted-foreground text-sm mb-2">{trap.description}</p>
                    <div className="bg-orange-50 dark:bg-orange-950/20 p-2 rounded">
                      <p className="text-xs text-orange-700 dark:text-orange-300">
                        <span className="font-semibold">Warning Sign:</span> {trap.warning}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ego Reduction Practices */}
        <div className="mb-12">
          <div className="glass-card rounded-2xl p-6 text-center mb-8 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Practices for Ego Reduction
            </h2>
            <p className="text-muted-foreground">
              Practical strategies to minimize ego interference and cultivate genuine truth-seeking
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {egoReduction.map((practice, index) => (
              <Card key={index} className="glass-card rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Heart className="h-5 w-5 text-green-600" />
                    {practice.practice}
                  </CardTitle>
                  <CardDescription>{practice.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded-lg">
                    <h5 className="font-semibold text-green-700 dark:text-green-300 mb-2">Techniques:</h5>
                    <ul className="space-y-1">
                      {practice.techniques.map((technique, idx) => (
                        <li key={idx} className="text-xs text-green-600 dark:text-green-400">• {technique}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* The Paradox of Ego */}
        <div className="glass-card rounded-2xl p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Brain className="h-6 w-6 text-purple-600" />
            <h2 className="text-2xl font-bold text-foreground">The Ego Paradox</h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            The greatest challenge with ego is that the very act of trying to reduce it can become another 
            source of ego: "Look how humble and open-minded I am!" The key is developing genuine curiosity 
            about truth and authentic care for others' well-being, which naturally reduces ego's influence.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-foreground mb-4">Signs of Genuine Progress:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Increased comfort with uncertainty</li>
                <li>• Joy in discovering you were wrong</li>
                <li>• Genuine curiosity about opposing views</li>
                <li>• Focus on understanding over winning</li>
                <li>• Less need to be seen as smart or right</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Beware of Ego Disguises:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Pride in being "more rational" than others</li>
                <li>• Using humility as a superior stance</li>
                <li>• Competitive open-mindedness</li>
                <li>• Intellectual humility as a performance</li>
                <li>• Judging others for being "ego-driven"</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Authentic Growth */}
        <div className="glass-card rounded-2xl p-8 border-blue-200 dark:border-blue-800">
          <div className="flex items-center gap-3 mb-6">
            <Eye className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-foreground">The Path Beyond Ego</h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Reducing ego's influence isn't about self-flagellation or false modesty. It's about developing 
            genuine confidence that doesn't depend on being right, superior, or perfect. When we care more 
            about truth than our image, more about understanding than winning, we become both more effective 
            and more genuinely connected to reality and others.
          </p>
          <div className="bg-blue-50 dark:bg-blue-950/20 p-6 rounded-lg">
            <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">The Ultimate Goal:</h4>
            <p className="text-blue-600 dark:text-blue-400">
              To become the kind of person who can hold strong convictions lightly, change their mind gracefully, 
              admit ignorance comfortably, and seek truth courageously—regardless of where it leads or how it 
              affects their image.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}