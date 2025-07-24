import { TrendingUp, AlertTriangle, BarChart3, Brain, Target, Users } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export default function ScientificConsensus() {
  const { t } = useLanguage();

  const fields = [
    { field: "Mathematics", confidence: 98, description: "Close to impossible to cheat at basics" },
    { field: "Physics (Classical)", confidence: 85, description: "Well-established laws with strong evidence" },
    { field: "Chemistry", confidence: 80, description: "Solid experimental foundation" },
    { field: "Biology", confidence: 70, description: "Complex systems with many variables" },
    { field: "Medicine", confidence: 60, description: "Individual variation and complexity" },
    { field: "Psychology", confidence: 45, description: "Replication crisis and subjective elements" },
    { field: "Economics", confidence: 35, description: "Human behavior and complex systems" },
    { field: "Climate Science", confidence: 65, description: "Complex models with many variables" },
    { field: "Nutrition Science", confidence: 40, description: "Conflicting studies and industry influence" },
    { field: "Social Sciences", confidence: 35, description: "Cultural bias and methodology issues" }
  ];

  const getProgressColor = (confidence: number) => {
    if (confidence >= 80) return "bg-green-500";
    if (confidence >= 60) return "bg-yellow-500";
    if (confidence >= 40) return "bg-orange-500";
    return "bg-red-500";
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-6">
            Scientific Consensus as a Golden Calf
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            The scientific community agrees on a current consensus – which is constantly adjusted according to the latest findings. THAT is the difference to religious beliefs and dogmas.
          </p>
        </div>

        {/* Key Insight */}
        <Card className="mb-12 border-orange-200 dark:border-orange-800">
          <CardHeader>
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-orange-600" />
              <CardTitle className="text-2xl">Critical Observation</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-muted-foreground leading-relaxed">
              After evaluating many different scientific fields and going beyond the 
              <span className="font-semibold"> Dunning-Kruger Effect</span>, I estimate that 
              <span className="font-bold text-orange-600"> approximately 50% of today's scientific consensus 
              will most likely be falsified in the future</span>.
            </p>
          </CardContent>
        </Card>

        {/* Field Confidence Analysis */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Confidence Levels by Scientific Field
          </h2>
          <p className="text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
            These percentages represent personal confidence levels based on examining the quality of scientists, 
            potential for bias, and historical track record of accuracy in each field.
          </p>
          
          <div className="grid gap-4">
            {fields.map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-foreground">{item.field}</h3>
                    <span className="text-sm font-medium text-muted-foreground">
                      {item.confidence}% confidence
                    </span>
                  </div>
                  <Progress 
                    value={item.confidence} 
                    className="mb-2"
                  />
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why This Matters */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Brain className="h-6 w-6 text-blue-600" />
                <CardTitle>The Difference from Dogma</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Scientific consensus differs from religious dogma because it can be updated with new evidence. 
                However, this doesn't mean we should accept all current consensus uncritically.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Scientific paradigms can become entrenched</li>
                <li>• Funding and career incentives can bias research</li>
                <li>• Groupthink can affect scientific communities</li>
                <li>• Political and social pressures influence conclusions</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Target className="h-6 w-6 text-green-600" />
                <CardTitle>A Balanced Approach</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The goal isn't to reject science, but to maintain healthy skepticism 
                and understand the limitations of current knowledge.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Question methodologies and assumptions</li>
                <li>• Look for conflicts of interest</li>
                <li>• Consider alternative explanations</li>
                <li>• Understand statistical limitations</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Historical Perspective */}
        <Card className="mb-12">
          <CardHeader>
            <div className="flex items-center gap-3">
              <TrendingUp className="h-6 w-6 text-purple-600" />
              <CardTitle className="text-2xl">Historical Pattern</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="font-semibold text-foreground mb-2">Past Consensus</h4>
                <p className="text-sm text-muted-foreground">
                  Many "established" scientific facts have been overturned: 
                  flat Earth, phlogiston theory, static universe, etc.
                </p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-foreground mb-2">Current Challenges</h4>
                <p className="text-sm text-muted-foreground">
                  Replication crisis, publication bias, p-hacking, 
                  and institutional pressure affect modern science.
                </p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-foreground mb-2">Future Outlook</h4>
                <p className="text-sm text-muted-foreground">
                  Expect significant revisions in our understanding, 
                  especially in complex fields with many variables.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Practical Guidelines */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <Users className="h-6 w-6 text-indigo-600" />
              <CardTitle className="text-2xl">Practical Guidelines</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">When Evaluating Scientific Claims:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Check funding sources and potential conflicts</li>
                  <li>• Look for independent replication</li>
                  <li>• Examine methodology and sample sizes</li>
                  <li>• Consider alternative interpretations</li>
                  <li>• Be especially skeptical of extraordinary claims</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Red Flags to Watch For:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• "The science is settled" statements</li>
                  <li>• Suppression of dissenting voices</li>
                  <li>• Claims that require immediate action</li>
                  <li>• Lack of open data or methodology</li>
                  <li>• Appeal to authority rather than evidence</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}