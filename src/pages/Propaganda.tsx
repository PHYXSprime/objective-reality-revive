import { Target, AlertTriangle, Brain, Users, Eye, Megaphone } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChallengeNavigation } from '@/components/ChallengeNavigation';

export default function Propaganda() {
  const { t } = useLanguage();

  const techniques = [
    {
      name: "Emotional Appeals",
      description: "Using fear, anger, patriotism, or other emotions to bypass rational thinking",
      example: "Fear-mongering about threats to make people accept restrictions"
    },
    {
      name: "Bandwagon Effect",
      description: "Suggesting everyone is doing it, so you should too",
      example: "Polls showing majority support to pressure conformity"
    },
    {
      name: "Authority Appeals",
      description: "Using respected figures or institutions to endorse a message",
      example: "Celebrity endorsements or expert testimonials"
    },
    {
      name: "Repetition",
      description: "Repeating messages frequently to make them seem true",
      example: "Constant media repetition of specific narratives"
    },
    {
      name: "False Dichotomy",
      description: "Presenting only two options when more exist",
      example: "You're either with us or against us"
    },
    {
      name: "Loaded Language",
      description: "Using emotionally charged words to influence perception",
      example: "Freedom fighters vs. terrorists for the same group"
    }
  ];

  const defenses = [
    {
      title: "Question Sources",
      description: "Who benefits from this message? What are their motivations?"
    },
    {
      title: "Seek Multiple Perspectives",
      description: "Look for opposing viewpoints and different interpretations"
    },
    {
      title: "Check Primary Sources",
      description: "Go beyond headlines to actual data and original documents"
    },
    {
      title: "Recognize Emotional Manipulation",
      description: "Notice when your emotions are being targeted rather than your reason"
    },
    {
      title: "Practice Critical Thinking",
      description: "Apply logical analysis and question underlying assumptions"
    }
  ];

  return (
    <div className="min-h-screen py-8 pr-20">
      <ChallengeNavigation />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="glass-card p-8 max-w-4xl mx-auto mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-6">
              {t('propaganda.title')}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('propaganda.subtitle')}
            </p>
          </div>
        </div>

        {/* Definition and Overview */}
        <div className="glass-card p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Megaphone className="h-6 w-6 text-red-600" />
            <h2 className="text-2xl font-bold text-foreground">{t('propaganda.definition')}</h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            {t('propaganda.definitionText')}
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-2">Key Characteristic</h4>
              <p className="text-sm text-muted-foreground">
                Designed to persuade rather than inform, often using emotional manipulation
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-2">Modern Context</h4>
              <p className="text-sm text-muted-foreground">
                Amplified through social media echo chambers and algorithmic content curation
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-2">Historical Impact</h4>
              <p className="text-sm text-muted-foreground">
                Used throughout history to justify wars, political movements, and social changes
              </p>
            </div>
          </div>
        </div>

        {/* Common Techniques */}
        <div className="mb-12">
          <div className="glass-card p-6 text-center mb-8 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Common Propaganda Techniques
            </h2>
            <p className="text-muted-foreground">
              Recognizing these methods helps build resistance to manipulation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {techniques.map((technique, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{technique.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">{technique.description}</p>
                  <div className="bg-muted/50 p-3 rounded-lg">
                    <p className="text-sm text-muted-foreground italic">
                      Example: {technique.example}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Modern Propaganda */}
        <div className="glass-card p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Eye className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-foreground">Modern Digital Propaganda</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-foreground mb-4">Algorithmic Amplification</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Social media algorithms create echo chambers</li>
                <li>• Personalized content reinforces existing beliefs</li>
                <li>• Emotional content gets more engagement and spread</li>
                <li>• Bot networks artificially amplify messages</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Psychological Targeting</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Data mining reveals personal vulnerabilities</li>
                <li>• Micro-targeting delivers specific messages to groups</li>
                <li>• A/B testing optimizes persuasive effectiveness</li>
                <li>• Deepfakes and AI-generated content blur reality</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Building Defenses */}
        <div className="mb-12">
          <div className="glass-card p-6 text-center mb-8 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Building Mental Defenses
            </h2>
            <p className="text-muted-foreground">
              Practical strategies to resist propaganda and maintain independent thinking
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {defenses.map((defense, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Target className="h-5 w-5 text-green-600" />
                    {defense.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{defense.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Warning Signs */}
        <div className="glass-card p-8 mb-12 border-orange-200 dark:border-orange-800">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="h-6 w-6 text-orange-600" />
            <h2 className="text-2xl font-bold text-foreground">Warning Signs of Propaganda</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-3">Content Red Flags:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Extreme emotional language</li>
                <li>• Oversimplified complex issues</li>
                <li>• Claims of moral superiority</li>
                <li>• Urgent calls to action</li>
                <li>• Silencing of dissent</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">Source Red Flags:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Anonymous or unclear authorship</li>
                <li>• Funding sources not disclosed</li>
                <li>• No opposing viewpoints presented</li>
                <li>• Claims without evidence</li>
                <li>• Appeals to authority without expertise</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Action Steps */}
        <div className="glass-card p-8">
          <div className="flex items-center gap-3 mb-6">
            <Brain className="h-6 w-6 text-purple-600" />
            <h2 className="text-2xl font-bold text-foreground">Take Action</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-3">Personal Practice:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Diversify your information sources</li>
                <li>• Practice the principle of charity</li>
                <li>• Learn about cognitive biases</li>
                <li>• Develop emotional awareness</li>
                <li>• Study historical propaganda examples</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">Community Engagement:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Promote media literacy education</li>
                <li>• Support independent journalism</li>
                <li>• Encourage open dialogue</li>
                <li>• Challenge echo chambers respectfully</li>
                <li>• Share this knowledge with others</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}