import { Shield, Heart, Brain, AlertTriangle, Target, Users, Eye, Zap } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChallengeNavigation } from '@/components/ChallengeNavigation';

export default function PsychologicalWeakness() {
  const { t } = useLanguage();

  const vulnerabilities = [
    {
      weakness: "Need for Belonging",
      description: "Desire to fit in and be accepted by groups",
      exploitation: "Social pressure, groupthink, echo chambers",
      manifestation: "Adopting group beliefs uncritically to avoid rejection"
    },
    {
      weakness: "Fear of Uncertainty",
      description: "Discomfort with ambiguity and unknown outcomes",
      exploitation: "False certainty, conspiracy theories, simple explanations",
      manifestation: "Preferring wrong certainty over uncomfortable uncertainty"
    },
    {
      weakness: "Emotional Reasoning",
      description: "Using feelings as evidence for truth",
      exploitation: "Fear-mongering, emotional appeals, manipulation",
      manifestation: "Believing something because it feels right rather than examining evidence"
    },
    {
      weakness: "Authority Dependence",
      description: "Over-reliance on experts and leaders for truth",
      exploitation: "Appeal to authority, credential worship, false experts",
      manifestation: "Accepting claims based on who said them rather than their merit"
    },
    {
      weakness: "Cognitive Dissonance Avoidance",
      description: "Discomfort when beliefs conflict with reality",
      exploitation: "Confirmation bias, selective attention, rationalization",
      manifestation: "Ignoring contradictory evidence to maintain comfortable beliefs"
    },
    {
      weakness: "Pattern Seeking",
      description: "Tendency to see patterns even in random events",
      exploitation: "False correlations, conspiracy theories, superstitions",
      manifestation: "Creating elaborate explanations for coincidences"
    },
    {
      weakness: "Loss Aversion",
      description: "Fear of losing what we have more than gaining something new",
      exploitation: "Status quo bias, sunk cost fallacy, change resistance",
      manifestation: "Sticking with bad situations to avoid potential losses"
    },
    {
      weakness: "Social Proof Dependence",
      description: "Assuming others' behavior indicates correct action",
      exploitation: "Fake popularity, bandwagon effects, manufactured consensus",
      manifestation: "Following crowds without independent evaluation"
    }
  ];

  const manipulationTactics = [
    {
      category: "Emotional Manipulation",
      tactics: ["Fear appeals", "Guilt tripping", "Anger triggering", "Hope exploitation"],
      defense: "Recognize when emotions are being targeted rather than reason"
    },
    {
      category: "Social Manipulation",
      tactics: ["Peer pressure", "Isolation threats", "Status appeals", "Belonging promises"],
      defense: "Value truth over social acceptance and comfort"
    },
    {
      category: "Cognitive Manipulation",
      tactics: ["Information overload", "False choices", "Anchoring", "Framing effects"],
      defense: "Step back and examine the structure of arguments, not just content"
    },
    {
      category: "Authority Manipulation",
      tactics: ["False expertise", "Credential inflation", "Intimidation", "Appeal to tradition"],
      defense: "Evaluate claims based on evidence, not the source's perceived authority"
    }
  ];

  const strengtheningStrategies = [
    {
      strategy: "Emotional Awareness",
      description: "Recognize and understand your emotional responses",
      practice: "Regular emotional check-ins, mindfulness meditation, emotion labeling"
    },
    {
      strategy: "Independent Thinking",
      description: "Develop comfort with holding minority or unpopular opinions",
      practice: "Practice disagreeing respectfully, seek out contrarian views"
    },
    {
      strategy: "Uncertainty Tolerance",
      description: "Learn to be comfortable with not knowing",
      practice: "Practice saying 'I don't know' and sitting with ambiguity"
    },
    {
      strategy: "Critical Analysis",
      description: "Systematically evaluate information and arguments",
      practice: "Learn logical fallacies, practice argument analysis, fact-checking"
    },
    {
      strategy: "Perspective Taking",
      description: "Consider multiple viewpoints on complex issues",
      practice: "Steel-manning opposing arguments, seeking diverse sources"
    },
    {
      strategy: "Values Clarification",
      description: "Understand your core values and principles",
      practice: "Regular self-reflection, values exercises, priority setting"
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
              Psychological Weaknesses: Our Mental Vulnerabilities
            </h1>
            <p className="text-xl text-muted-foreground">
              Understanding the human psychological vulnerabilities that can be exploited to manipulate thinking and behavior
            </p>
          </div>
        </div>

        {/* Definition */}
        <div className="glass-card rounded-2xl p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="h-6 w-6 text-red-600" />
            <h2 className="text-2xl font-bold text-foreground">Understanding Psychological Vulnerability</h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Psychological weaknesses are inherent human tendencies that, while often adaptive in evolutionary contexts, 
            can be exploited to influence our thinking, decisions, and behavior. Recognizing these vulnerabilities 
            is the first step toward developing psychological resilience and maintaining independent judgment.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-2">Evolutionary Origins</h4>
              <p className="text-sm text-muted-foreground">
                Many vulnerabilities were adaptive for survival in small groups
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-2">Modern Exploitation</h4>
              <p className="text-sm text-muted-foreground">
                These same tendencies can be weaponized in complex modern societies
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-2">Universal Nature</h4>
              <p className="text-sm text-muted-foreground">
                Everyone has these vulnerabilities regardless of intelligence or education
              </p>
            </div>
          </div>
        </div>

        {/* Core Vulnerabilities */}
        <div className="mb-12">
          <div className="glass-card rounded-2xl p-6 text-center mb-8 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Core Psychological Vulnerabilities
            </h2>
            <p className="text-muted-foreground">
              The fundamental human psychological weaknesses that make us susceptible to manipulation
            </p>
          </div>
          
          <div className="space-y-6">
            {vulnerabilities.map((vulnerability, index) => (
              <Card key={index} className="glass-card rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Brain className="h-5 w-5 text-purple-600" />
                    {vulnerability.weakness}
                  </CardTitle>
                  <CardDescription>{vulnerability.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-red-50 dark:bg-red-950/20 p-3 rounded-lg">
                      <h5 className="font-semibold text-red-700 dark:text-red-300 mb-2">How It's Exploited:</h5>
                      <p className="text-sm text-red-600 dark:text-red-400">{vulnerability.exploitation}</p>
                    </div>
                    <div className="bg-orange-50 dark:bg-orange-950/20 p-3 rounded-lg">
                      <h5 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Manifestation:</h5>
                      <p className="text-sm text-orange-600 dark:text-orange-400">{vulnerability.manifestation}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Manipulation Tactics */}
        <div className="glass-card rounded-2xl p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="h-6 w-6 text-orange-600" />
            <h2 className="text-2xl font-bold text-foreground">Common Manipulation Tactics</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {manipulationTactics.map((tactic, index) => (
              <div key={index} className="border border-muted rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-3">{tactic.category}</h4>
                <div className="mb-3">
                  <h5 className="text-sm font-medium text-muted-foreground mb-2">Common Tactics:</h5>
                  <ul className="space-y-1">
                    {tactic.tactics.map((technique, idx) => (
                      <li key={idx} className="text-xs text-muted-foreground flex items-center gap-2">
                        <span className="w-1 h-1 bg-orange-600 rounded-full"></span>
                        {technique}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-blue-50 dark:bg-blue-950/20 p-2 rounded">
                  <p className="text-xs text-blue-700 dark:text-blue-300">
                    <span className="font-semibold">Defense:</span> {tactic.defense}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Warning Signs */}
        <div className="glass-card rounded-2xl p-8 mb-12 border-yellow-200 dark:border-yellow-800">
          <div className="flex items-center gap-3 mb-6">
            <Eye className="h-6 w-6 text-yellow-600" />
            <h2 className="text-2xl font-bold text-foreground">Warning Signs of Manipulation</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-3">Emotional Red Flags:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Feeling pressured to decide quickly</li>
                <li>• Strong emotional reactions to information</li>
                <li>• Fear of missing out or being left behind</li>
                <li>• Guilt or shame for questioning</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">Social Red Flags:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Isolation from other perspectives</li>
                <li>• Pressure to conform to group beliefs</li>
                <li>• Punishment for asking questions</li>
                <li>• Claims of special or exclusive knowledge</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">Logical Red Flags:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Oversimplified explanations for complex issues</li>
                <li>• Lack of evidence or refusal to provide it</li>
                <li>• Appeals to authority without expertise</li>
                <li>• Claims that can't be questioned or tested</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Strengthening Strategies */}
        <div className="mb-12">
          <div className="glass-card rounded-2xl p-6 text-center mb-8 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Building Psychological Resilience
            </h2>
            <p className="text-muted-foreground">
              Practical strategies to strengthen your psychological defenses against manipulation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strengtheningStrategies.map((strategy, index) => (
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

        {/* Call to Action */}
        <div className="glass-card rounded-2xl p-8 border-green-200 dark:border-green-800">
          <div className="flex items-center gap-3 mb-6">
            <Zap className="h-6 w-6 text-green-600" />
            <h2 className="text-2xl font-bold text-foreground">Your Psychological Freedom</h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Understanding your psychological vulnerabilities isn't about becoming paranoid or cynical. 
            It's about developing the awareness and skills necessary to make truly independent decisions 
            based on evidence and reason rather than manipulation and emotional pressure.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-3">The Goal:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Make decisions based on your authentic values</li>
                <li>• Resist manipulation while remaining open to influence</li>
                <li>• Maintain healthy relationships without losing independence</li>
                <li>• Think clearly under pressure and uncertainty</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">Remember:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Everyone has psychological vulnerabilities</li>
                <li>• Awareness is the first line of defense</li>
                <li>• Practice strengthens psychological resilience</li>
                <li>• You can maintain humanity while being cautious</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}