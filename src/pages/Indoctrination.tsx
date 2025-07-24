import { Brain, Users, BookOpen, Target, AlertTriangle, Eye, Shield } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChallengeNavigation } from '@/components/ChallengeNavigation';

export default function Indoctrination() {
  const { t } = useLanguage();

  const sources = [
    {
      icon: Users,
      title: "Family & Cultural Environment",
      description: "Early childhood experiences shape core beliefs and worldview",
      examples: ["Religious upbringing", "Political family values", "Cultural traditions", "Social class expectations"]
    },
    {
      icon: BookOpen,
      title: "Educational System",
      description: "Structured learning that can promote conformity over critical thinking",
      examples: ["Standardized curricula", "Authority-based learning", "Peer pressure", "Institutional values"]
    },
    {
      icon: Eye,
      title: "Media & Information",
      description: "Constant exposure to selected information shapes perception of reality",
      examples: ["News bias", "Social media algorithms", "Entertainment messaging", "Advertising influence"]
    },
    {
      icon: Shield,
      title: "State & Institutions",
      description: "Governmental and institutional messaging that promotes specific narratives",
      examples: ["National narratives", "Legal frameworks", "Public policy messaging", "Historical interpretation"]
    }
  ];

  const stages = [
    {
      phase: "Early Childhood (0-7)",
      description: "Absorption of fundamental beliefs without critical evaluation",
      impact: "Forms basic worldview and emotional associations"
    },
    {
      phase: "School Age (7-14)",
      description: "Formal education reinforces or challenges family beliefs",
      impact: "Develops thinking patterns and authority relationships"
    },
    {
      phase: "Adolescence (14-21)",
      description: "Peer influence and identity formation shape belief systems",
      impact: "Solidifies or rebels against earlier programming"
    },
    {
      phase: "Adulthood (21+)",
      description: "Professional and social environments continue influencing beliefs",
      impact: "Career and social pressures maintain or modify worldview"
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <ChallengeNavigation />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="glass-card rounded-2xl p-8 max-w-4xl mx-auto mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-6">
              Indoctrination: The Invisible Programming
            </h1>
            <p className="text-xl text-muted-foreground">
              Understanding how systematic influence shapes our beliefs from childhood and persists throughout life
            </p>
          </div>
        </div>

        {/* Definition */}
        <div className="glass-card rounded-2xl p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Brain className="h-6 w-6 text-purple-600" />
            <h2 className="text-2xl font-bold text-foreground">What is Indoctrination?</h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Indoctrination is the process of teaching a person or group to accept a set of beliefs uncritically. 
            Unlike education, which encourages questioning and critical thinking, indoctrination discourages 
            independent thought and promotes acceptance of specific worldviews as absolute truth.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-2">Key Difference</h4>
              <p className="text-sm text-muted-foreground">
                Education teaches how to think; indoctrination teaches what to think
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-2">Timing Matters</h4>
              <p className="text-sm text-muted-foreground">
                Most effective during childhood when critical thinking skills are undeveloped
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-2">Often Invisible</h4>
              <p className="text-sm text-muted-foreground">
                The most effective indoctrination feels natural and unquestionable
              </p>
            </div>
          </div>
        </div>

        {/* Sources of Indoctrination */}
        <div className="mb-12">
          <div className="glass-card rounded-2xl p-6 text-center mb-8 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Primary Sources of Indoctrination
            </h2>
            <p className="text-muted-foreground">
              Multiple overlapping systems work together to shape our beliefs and worldview
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {sources.map((source, index) => (
              <Card key={index} className="glass-card rounded-2xl">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <source.icon className="h-6 w-6 text-blue-600" />
                    <CardTitle className="text-lg">{source.title}</CardTitle>
                  </div>
                  <CardDescription>{source.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {source.examples.map((example, idx) => (
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

        {/* Developmental Stages */}
        <div className="glass-card rounded-2xl p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Target className="h-6 w-6 text-green-600" />
            <h2 className="text-2xl font-bold text-foreground">Developmental Impact</h2>
          </div>
          <div className="space-y-6">
            {stages.map((stage, index) => (
              <div key={index} className="border-l-4 border-green-600 pl-6">
                <h4 className="font-semibold text-foreground mb-2">{stage.phase}</h4>
                <p className="text-muted-foreground mb-2">{stage.description}</p>
                <p className="text-sm text-green-600 font-medium">{stage.impact}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Breaking Free */}
        <div className="glass-card rounded-2xl p-8 mb-12 border-orange-200 dark:border-orange-800">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="h-6 w-6 text-orange-600" />
            <h2 className="text-2xl font-bold text-foreground">Breaking Free from Indoctrination</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-foreground mb-4">Recognition Steps:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Identify beliefs you've never questioned</li>
                <li>• Examine the sources of your core beliefs</li>
                <li>• Notice emotional reactions to challenges</li>
                <li>• Question what feels "obviously true"</li>
                <li>• Explore opposing viewpoints</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Liberation Practices:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Cultivate intellectual humility</li>
                <li>• Practice suspended judgment</li>
                <li>• Seek diverse perspectives</li>
                <li>• Learn to sit with uncertainty</li>
                <li>• Develop meta-cognitive awareness</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Warning Signs */}
        <div className="glass-card rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <Eye className="h-6 w-6 text-red-600" />
            <h2 className="text-2xl font-bold text-foreground">Warning Signs of Indoctrination</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-3">In Others:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Absolute certainty without evidence</li>
                <li>• Unwillingness to consider alternatives</li>
                <li>• Emotional reactions to challenges</li>
                <li>• Appeals to authority over reason</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">In Yourself:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Defensive feelings when beliefs are questioned</li>
                <li>• Inability to explain why you believe something</li>
                <li>• Avoiding information that contradicts beliefs</li>
                <li>• Feeling lost without certain beliefs</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">In Systems:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Discouraging questions or doubt</li>
                <li>• Punishing dissent or independent thinking</li>
                <li>• Claiming exclusive access to truth</li>
                <li>• Using fear to maintain compliance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}