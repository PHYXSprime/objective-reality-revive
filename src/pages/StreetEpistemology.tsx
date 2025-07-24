import { MessageSquare, Users, Heart, Target, CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function StreetEpistemology() {
  const { t } = useLanguage();

  const sePrinciples = [
    {
      title: "Non-confrontational",
      description: "The goal is not to 'win' but to help people examine their beliefs"
    },
    {
      title: "Genuine curiosity",
      description: "Ask questions from a place of authentic interest, not to trap"
    },
    {
      title: "Focus on method",
      description: "Examine how someone came to believe something, not what they believe"
    },
    {
      title: "Collaborative inquiry",
      description: "Work together to understand the reliability of belief-forming methods"
    }
  ];

  const seQuestions = [
    "How did you come to believe that?",
    "What evidence would change your mind?",
    "How confident are you in this belief on a scale of 1-10?",
    "What method did you use to evaluate this information?",
    "If you discovered this belief was wrong, would you want to know?",
    "What's the difference between thinking something is true and knowing it's true?"
  ];

  const commonMistakes = [
    {
      mistake: "Being confrontational or aggressive",
      correction: "Stay calm, patient, and genuinely curious"
    },
    {
      mistake: "Trying to change someone's mind immediately",
      correction: "Plant seeds of doubt; change takes time"
    },
    {
      mistake: "Asking leading questions",
      correction: "Ask open-ended questions that encourage reflection"
    },
    {
      mistake: "Getting emotionally invested in the outcome",
      correction: "Focus on the process, not the result"
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-6">
            Street Epistemology
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            A gentle, non-confrontational method of helping people examine the reliability 
            of their beliefs through conversational questioning techniques.
          </p>
        </div>

        {/* About Dr. Peter Boghossian */}
        <Card className="mb-12 border-blue-200 dark:border-blue-800">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Users className="h-6 w-6 text-blue-600" />
              <CardTitle className="text-2xl">Created by Dr. Peter Boghossian</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Street Epistemology was developed by Dr. Peter Boghossian, based on the ancient 
              <strong> Socratic Questioning</strong> method we've known for over 2,000 years. 
              Dr. Boghossian is a prime example of someone who truly cares about objective truth, 
              even when it puts his career at risk.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              He's particularly known for his academic "hoax papers" that exposed problems 
              in certain academic fields, demonstrating his commitment to intellectual integrity 
              over personal safety. We desperately need more people like him who have a spine 
              and not just linguistic smoke grenades.
            </p>
          </CardContent>
        </Card>

        {/* Core Principles */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Core Principles of Street Epistemology
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {sePrinciples.map((principle, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Heart className="h-5 w-5 text-blue-600" />
                    <CardTitle className="text-lg">{principle.title}</CardTitle>
                  </div>
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

        {/* Key Questions */}
        <Card className="mb-12">
          <CardHeader>
            <div className="flex items-center gap-3">
              <MessageSquare className="h-6 w-6 text-green-600" />
              <CardTitle className="text-2xl">Essential Street Epistemology Questions</CardTitle>
            </div>
            <CardDescription>
              These questions help people examine the reliability of their belief-forming processes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {seQuestions.map((question, index) => (
                <div key={index} className="p-4 border border-border rounded-lg">
                  <p className="text-foreground font-medium">"{question}"</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* The SE Process */}
        <Card className="mb-12">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Target className="h-6 w-6 text-purple-600" />
              <CardTitle className="text-2xl">The Street Epistemology Process</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-purple-600 font-bold">1</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Establish Rapport</h4>
                  <p className="text-sm text-muted-foreground">Build trust and create a safe conversational space</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-purple-600 font-bold">2</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Clarify the Claim</h4>
                  <p className="text-sm text-muted-foreground">Understand exactly what the person believes</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-purple-600 font-bold">3</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Explore the Method</h4>
                  <p className="text-sm text-muted-foreground">Ask how they came to believe this</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-purple-600 font-bold">4</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Examine Reliability</h4>
                  <p className="text-sm text-muted-foreground">Help them evaluate their belief-forming process</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Common Mistakes */}
        <Card className="mb-12">
          <CardHeader>
            <div className="flex items-center gap-3">
              <AlertCircle className="h-6 w-6 text-orange-600" />
              <CardTitle className="text-2xl">Common Mistakes to Avoid</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {commonMistakes.map((item, index) => (
                <div key={index} className="grid md:grid-cols-2 gap-4 p-4 border border-border rounded-lg">
                  <div>
                    <h4 className="font-semibold text-red-600 dark:text-red-400 mb-2">❌ Don't:</h4>
                    <p className="text-sm text-muted-foreground">{item.mistake}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">✅ Do:</h4>
                    <p className="text-sm text-muted-foreground">{item.correction}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Benefits */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-green-600" />
                <CardTitle>Why Street Epistemology Works</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Non-threatening approach preserves relationships</li>
                <li>• Focuses on process, not content</li>
                <li>• Helps people discover issues themselves</li>
                <li>• Develops critical thinking skills</li>
                <li>• Creates lasting change through self-reflection</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Target className="h-6 w-6 text-indigo-600" />
                <CardTitle>Best Practices</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Start with less emotionally charged topics</li>
                <li>• Listen more than you speak</li>
                <li>• Be prepared to say "I don't know"</li>
                <li>• Focus on epistemology, not facts</li>
                <li>• Practice on yourself first</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-muted/30 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Practice Street Epistemology?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
            Start by examining your own beliefs first. What methods did you use to form them? 
            How confident are you? What evidence would change your mind? Then practice these 
            gentle questioning techniques with friends and family.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg">
              Practice with Examples
            </Button>
            <Button variant="outline" size="lg">
              Learn Socratic Questioning
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}