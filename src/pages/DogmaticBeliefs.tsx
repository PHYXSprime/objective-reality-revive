import { Shield, Brain, AlertTriangle, Target, Users, Eye, BookOpen } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChallengeNavigation } from '@/components/ChallengeNavigation';

export default function DogmaticBeliefs() {
  const { t } = useLanguage();

  const characteristics = [
    {
      title: "Absolute Certainty",
      description: "Beliefs held with complete confidence despite lack of evidence",
      danger: "Prevents learning and adaptation to new information"
    },
    {
      title: "Resistance to Challenge",
      description: "Strong emotional reaction to questioning or opposing views",
      danger: "Creates intellectual isolation and confirmation bias"
    },
    {
      title: "Appeal to Authority",
      description: "Justification based on who said it rather than evidence",
      danger: "Substitutes critical thinking with blind obedience"
    },
    {
      title: "Circular Reasoning",
      description: "Using the belief system to justify itself",
      danger: "Creates closed logical loops that resist external validation"
    },
    {
      title: "Black and White Thinking",
      description: "Seeing complex issues in simple, binary terms",
      danger: "Eliminates nuance and prevents understanding complexity"
    },
    {
      title: "Emotional Investment",
      description: "Identity becomes tied to specific beliefs",
      danger: "Makes belief change feel like personal attack or loss of self"
    }
  ];

  const examples = [
    {
      category: "Religious Dogma",
      description: "Unquestioning acceptance of religious doctrine",
      manifestations: ["Scripture as absolute truth", "Faith over evidence", "Heresy accusations", "Divine command theory"]
    },
    {
      category: "Political Ideology",
      description: "Rigid adherence to political worldviews",
      manifestations: ["Party loyalty over principles", "Us vs. them mentality", "Policy positions without analysis", "Demonizing opposition"]
    },
    {
      category: "Scientific Dogma",
      description: "Treating scientific theories as unchangeable truth",
      manifestations: ["Consensus worship", "Suppressing dissent", "Career punishment for questioning", "Funding bias"]
    },
    {
      category: "Social Movements",
      description: "Ideological purity within activist communities",
      manifestations: ["Cancel culture", "Orthodoxy enforcement", "Purity tests", "Excommunication practices"]
    }
  ];

  const liberation = [
    {
      step: "Recognize Certainty as a Red Flag",
      description: "Notice when you or others express absolute certainty about complex topics"
    },
    {
      step: "Practice Intellectual Humility",
      description: "Acknowledge the limits of your knowledge and the possibility of being wrong"
    },
    {
      step: "Seek Disconfirming Evidence",
      description: "Actively look for information that challenges your beliefs"
    },
    {
      step: "Embrace Uncertainty",
      description: "Learn to be comfortable with not knowing or having incomplete answers"
    },
    {
      step: "Question Sacred Beliefs",
      description: "Examine beliefs that feel too important or sacred to question"
    },
    {
      step: "Value Process Over Conclusion",
      description: "Focus on how you arrive at beliefs rather than defending specific conclusions"
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
              {t('dogmaticBeliefs.title')}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('dogmaticBeliefs.subtitle')}
            </p>
          </div>
        </div>

        {/* Definition */}
        <div className="glass-card rounded-2xl p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="h-6 w-6 text-red-600" />
            <h2 className="text-2xl font-bold text-foreground">{t('dogmaticBeliefs.definition')}</h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            {t('dogmaticBeliefs.definitionText')}
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-2">Core Problem</h4>
              <p className="text-sm text-muted-foreground">
                Confuses confidence with accuracy and certainty with truth
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-2">Universal Risk</h4>
              <p className="text-sm text-muted-foreground">
                Can affect anyone regardless of intelligence or education level
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-2">Hidden Nature</h4>
              <p className="text-sm text-muted-foreground">
                Often invisible to those who hold them most strongly
              </p>
            </div>
          </div>
        </div>

        {/* Characteristics */}
        <div className="mb-12">
          <div className="glass-card rounded-2xl p-6 text-center mb-8 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {t('dogmaticBeliefs.characteristics')}
            </h2>
            <p className="text-muted-foreground">
              Recognizing these patterns helps identify when beliefs have become rigid and unexamined
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {characteristics.map((char, index) => (
              <Card key={index} className="glass-card rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-orange-600" />
                    {char.title}
                  </CardTitle>
                  <CardDescription>{char.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-red-50 dark:bg-red-950/20 p-3 rounded-lg">
                    <p className="text-sm text-red-700 dark:text-red-300">
                      <span className="font-semibold">Danger:</span> {char.danger}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Examples Across Domains */}
        <div className="glass-card rounded-2xl p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Eye className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-foreground">{t('dogmaticBeliefs.examplesAcrossDomains')}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {examples.map((example, index) => (
              <div key={index} className="border border-muted rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">{example.category}</h4>
                <p className="text-muted-foreground text-sm mb-3">{example.description}</p>
                <ul className="space-y-1">
                  {example.manifestations.map((manifestation, idx) => (
                    <li key={idx} className="text-xs text-muted-foreground flex items-center gap-2">
                      <span className="w-1 h-1 bg-blue-600 rounded-full"></span>
                      {manifestation}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Psychological Roots */}
        <div className="glass-card rounded-2xl p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Brain className="h-6 w-6 text-purple-600" />
            <h2 className="text-2xl font-bold text-foreground">{t('dogmaticBeliefs.psychologicalRoots')}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-foreground mb-4">Psychological Needs:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Security and certainty in an uncertain world</li>
                <li>• Identity and belonging within groups</li>
                <li>• Cognitive ease and reduced mental effort</li>
                <li>• Protection from anxiety and doubt</li>
                <li>• Sense of meaning and purpose</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Social Pressures:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Group conformity and peer pressure</li>
                <li>• Authority figures demanding compliance</li>
                <li>• Cultural and family expectations</li>
                <li>• Professional and social consequences</li>
                <li>• Echo chambers reinforcing beliefs</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Path to Liberation */}
        <div className="mb-12">
          <div className="glass-card rounded-2xl p-6 text-center mb-8 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {t('dogmaticBeliefs.stepsToLiberation')}
            </h2>
            <p className="text-muted-foreground">
              Practical steps to develop intellectual flexibility and open-mindedness
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {liberation.map((step, index) => (
              <Card key={index} className="glass-card rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Target className="h-5 w-5 text-green-600" />
                    {step.step}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="glass-card rounded-2xl p-8 border-green-200 dark:border-green-800">
          <div className="flex items-center gap-3 mb-6">
            <Users className="h-6 w-6 text-green-600" />
            <h2 className="text-2xl font-bold text-foreground">The Freedom of Uncertainty</h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Abandoning dogmatic thinking doesn't mean becoming wishy-washy or losing all convictions. 
            Instead, it means holding beliefs proportionally to evidence, remaining open to new information, 
            and maintaining intellectual humility about the limits of human knowledge.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-3">Benefits of Intellectual Flexibility:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• More accurate understanding of reality</li>
                <li>• Better relationships and communication</li>
                <li>• Reduced anxiety about being "right"</li>
                <li>• Increased creativity and problem-solving</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">Practical Daily Habits:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Say "I could be wrong about this"</li>
                <li>• Ask "What would change my mind?"</li>
                <li>• Seek out opposing viewpoints</li>
                <li>• Practice saying "I don't know"</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}