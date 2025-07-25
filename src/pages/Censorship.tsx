import { Shield, Eye, AlertTriangle, MessageSquare, Zap, Filter } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ChallengeNavigation } from '@/components/ChallengeNavigation';

export default function Censorship() {
  const { t } = useLanguage();

  const censorshipTypes = [
    {
      type: "Political Correctness",
      description: "Thought police that kills creative and progressive discussions out of fear of offending someone.",
      danger: "High",
      color: "text-red-600 dark:text-red-400"
    },
    {
      type: "Algorithmic Bias",
      description: "Biased algorithms that suppress certain viewpoints while promoting others.",
      danger: "High",
      color: "text-red-600 dark:text-red-400"
    },
    {
      type: "Ghosting/Shadow Banning",
      description: "Making content invisible without notifying the author or audience.",
      danger: "Medium",
      color: "text-orange-600 dark:text-orange-400"
    },
    {
      type: "Label-Based Suppression",
      description: "Dismissing content by labeling it as 'hate speech', 'disinformation', or 'conspiracy theory'.",
      danger: "High",
      color: "text-red-600 dark:text-red-400"
    },
    {
      type: "Memory Hole",
      description: "Removing historical information or past statements from public record.",
      danger: "Medium",
      color: "text-orange-600 dark:text-orange-400"
    },
    {
      type: "Deplatforming",
      description: "Removing individuals from communication platforms entirely.",
      danger: "High",
      color: "text-red-600 dark:text-red-400"
    }
  ];

  const warningLabels = [
    {
      label: "Hate Speech",
      reality: "Often used to silence legitimate criticism or unpopular opinions"
    },
    {
      label: "Disinformation",
      reality: "May be applied to information that challenges official narratives"
    },
    {
      label: "Conspiracy Theory",
      reality: "Sometimes used to dismiss valid questions about official explanations"
    },
    {
      label: "Moderate",
      reality: "Subjective term that depends entirely on the observer's perspective"
    }
  ];

  return (
    <div className="min-h-screen py-8 pr-20">
      <ChallengeNavigation />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Card className="glass-card mb-8">
          <CardHeader>
            <CardTitle className="text-4xl font-bold">
              {t('censorship.title')}
            </CardTitle>
            <CardDescription className="text-xl max-w-3xl">
              {t('censorship.subtitle')}
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Main Alert */}
        <Card className="mb-12 border-primary/20 glass-card">
          <CardHeader>
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-primary" />
              <CardTitle className="text-xl">{t('censorship.politicalCorrectnessAlert')}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              {t('censorship.politicalCorrectnessAlert')}
            </p>
          </CardContent>
        </Card>

        {/* Types of Modern Censorship */}
        <Card className="glass-card mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Types of Modern Censorship
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Understanding the various forms of censorship helps us recognize and resist them.
            </CardDescription>
          </CardHeader>
        </Card>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {censorshipTypes.map((item, index) => (
            <Card key={index} className="h-full glass-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{item.type}</CardTitle>
                  <span className={`text-sm font-medium px-2 py-1 rounded ${
                    item.danger === 'High' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' :
                    'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
                  }`}>
                    {item.danger} Risk
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Warning Labels */}
        <Card className="mb-12 glass-card">
          <CardHeader>
            <div className="flex items-center gap-3">
              <MessageSquare className="h-6 w-6 text-primary" />
              <CardTitle className="text-2xl">Propaganda Language Alert</CardTitle>
            </div>
            <CardDescription className="text-muted-foreground">
              These labels are part of indoctrination and propaganda language and should immediately 
              raise red flags. Remember: who for some is a "freedom fighter", for others is a "terrorist".
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {warningLabels.map((item, index) => (
                <div key={index} className="p-4 border border-border rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">"{item.label}"</h4>
                  <p className="text-sm text-muted-foreground">{item.reality}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* The Growing Problem */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="glass-card">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Eye className="h-6 w-6 text-primary" />
                <CardTitle>The Sophistication Problem</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Modern censorship is becoming more sophisticated and harder to detect. 
                Traditional overt censorship is being replaced by subtle manipulation techniques.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Algorithmic suppression appears neutral</li>
                <li>• Content is hidden, not obviously removed</li>
                <li>• Demonetization instead of deletion</li>
                <li>• "Fact-checking" as soft censorship</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Shield className="h-6 w-6 text-primary" />
                <CardTitle>Growing Up Intellectually</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You have the right to be offended. Now grow up and start dealing with the challenges 
                this life is throwing at you. Not being offended anymore is part of growing up.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Develop thick skin for opposing viewpoints</li>
                <li>• Distinguish between harm and offense</li>
                <li>• Value truth over comfort</li>
                <li>• Engage with ideas, not emotions</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Detection Methods */}
        <Card className="mb-12 glass-card">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Filter className="h-6 w-6 text-primary" />
              <CardTitle className="text-2xl">How to Detect Censorship</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Information Patterns</h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• One-sided coverage of controversial topics</li>
                  <li>• Absence of dissenting expert opinions</li>
                  <li>• Sudden disappearance of content</li>
                  <li>• Consistent message across platforms</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Platform Behavior</h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Reduced engagement on certain topics</li>
                  <li>• Search results that seem filtered</li>
                  <li>• "Fact-check" warnings on specific viewpoints</li>
                  <li>• Account restrictions without clear violations</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Social Signals</h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Taboo topics that "can't be discussed"</li>
                  <li>• Career risks for certain opinions</li>
                  <li>• Social ostracism for questioning narratives</li>
                  <li>• Appeals to not "platform" certain ideas</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="glass-card">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              The Importance of Free Expression
            </h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Free and open discussion is essential for human progress. When we censor ideas, 
              even "wrong" ones, we lose the opportunity to test our own beliefs and discover 
              new truths. The marketplace of ideas works best when all ideas can compete freely.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}