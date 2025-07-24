import { Microscope, Brain, Target, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function ScientificMethod() {
  const { t } = useLanguage();

  const methodSteps = [
    {
      step: "Observation",
      description: "Careful, systematic observation of phenomena with rigorous skepticism about cognitive assumptions",
      icon: "👁️"
    },
    {
      step: "Question Formation",
      description: "Formulate specific, testable questions based on observations",
      icon: "❓"
    },
    {
      step: "Hypothesis",
      description: "Create testable explanations via induction based on observations",
      icon: "💡"
    },
    {
      step: "Prediction",
      description: "Make specific predictions that can be tested experimentally",
      icon: "🎯"
    },
    {
      step: "Experimentation",
      description: "Test deductions drawn from hypotheses through controlled experiments",
      icon: "🧪"
    },
    {
      step: "Analysis",
      description: "Analyze data objectively, looking for patterns and statistical significance",
      icon: "📊"
    },
    {
      step: "Conclusion",
      description: "Refine, modify, or eliminate hypotheses based on experimental findings",
      icon: "✅"
    },
    {
      step: "Replication",
      description: "Independent verification of results by other researchers",
      icon: "🔄"
    }
  ];

  const keyPrinciples = [
    {
      principle: "Empirical Evidence",
      description: "Knowledge comes from direct observation and experimentation, not from authority or tradition"
    },
    {
      principle: "Falsifiability",
      description: "Scientific claims must be testable and potentially disprovable"
    },
    {
      principle: "Reproducibility",
      description: "Results must be replicable by independent researchers under similar conditions"
    },
    {
      principle: "Peer Review",
      description: "Claims are scrutinized by other experts before acceptance"
    },
    {
      principle: "Provisional Conclusions",
      description: "All scientific knowledge is tentative and subject to revision with new evidence"
    },
    {
      principle: "Controlled Variables",
      description: "Isolate factors to establish clear cause-and-effect relationships"
    }
  ];

  const commonMisunderstandings = [
    {
      myth: "Science proves things absolutely true",
      reality: "Science provides the best current explanation based on available evidence"
    },
    {
      myth: "One study is enough to establish truth",
      reality: "Scientific consensus builds through multiple independent studies and replication"
    },
    {
      myth: "Scientists are completely objective",
      reality: "Scientists have biases too; the method is designed to minimize their impact"
    },
    {
      myth: "Correlation equals causation",
      reality: "Correlation may suggest relationships but doesn't prove causation without proper controls"
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Card className="mb-12 glass-card">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-bold">
              The Scientific Method
            </CardTitle>
            <CardDescription className="text-xl max-w-4xl mx-auto">
              An empirical method of acquiring knowledge that has characterized the development 
              of science since at least the 17th century. It involves careful observation and 
              rigorous skepticism about what is observed.
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Key Difference from Dogma */}
        <Card className="mb-12 border-green-200 dark:border-green-800 glass-card">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Brain className="h-6 w-6 text-green-600" />
              <CardTitle className="text-2xl">Science vs. Dogma</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Unlike religions or other dogmatic beliefs that claim ultimate authority that can't be questioned, 
              <strong> science lives from the expectation that one has never got the full answer, is partially 
              or completely wrong</strong> – and is always ready to change one's mind upon presentation of 
              better facts, evidence and arguments.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg">
                <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">❌ Dogmatic Approach</h4>
                <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                  <li>• Claims absolute truth</li>
                  <li>• Discourages questioning</li>
                  <li>• Relies on authority</li>
                  <li>• Resistant to change</li>
                </ul>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">✅ Scientific Approach</h4>
                <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                  <li>• Provisional conclusions</li>
                  <li>• Encourages skepticism</li>
                  <li>• Based on evidence</li>
                  <li>• Self-correcting</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* The Scientific Method Steps */}
        <div className="mb-12">
          <Card className="glass-card mb-8">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold">
                The Scientific Method Process
              </CardTitle>
            </CardHeader>
          </Card>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {methodSteps.map((step, index) => (
              <Card key={index} className="relative glass-card">
                <CardHeader className="text-center">
                  <div className="text-3xl mb-2">{step.icon}</div>
                  <CardTitle className="text-lg">{step.step}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground">
                    {step.description}
                  </CardDescription>
                </CardContent>
                {index < methodSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-2 top-1/2 transform -translate-y-1/2">
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Core Principles */}
        <Card className="mb-12 glass-card">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Target className="h-6 w-6 text-blue-600" />
              <CardTitle className="text-2xl">Core Principles</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {keyPrinciples.map((item, index) => (
                <div key={index} className="p-4 border border-border rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">{item.principle}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Common Misunderstandings */}
        <Card className="mb-12 glass-card">
          <CardHeader>
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-orange-600" />
              <CardTitle className="text-2xl">Common Misunderstandings</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {commonMisunderstandings.map((item, index) => (
                <div key={index} className="grid md:grid-cols-2 gap-4 p-4 border border-border rounded-lg">
                  <div>
                    <h4 className="font-semibold text-red-600 dark:text-red-400 mb-2">❌ Myth:</h4>
                    <p className="text-sm text-muted-foreground">{item.myth}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">✅ Reality:</h4>
                    <p className="text-sm text-muted-foreground">{item.reality}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Applying to Personal Beliefs */}
        <Card className="mb-12 glass-card">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Microscope className="h-6 w-6 text-purple-600" />
              <CardTitle className="text-2xl">Applying Scientific Thinking to Personal Beliefs</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-foreground mb-4">Questions to Ask Yourself:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• What evidence supports this belief?</li>
                  <li>• Has this belief been tested systematically?</li>
                  <li>• What would it take to change my mind?</li>
                  <li>• Are there alternative explanations?</li>
                  <li>• Am I confusing correlation with causation?</li>
                  <li>• What are my potential biases here?</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-4">Red Flags to Watch For:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Claims that can't be tested</li>
                  <li>• Appeals to authority without evidence</li>
                  <li>• Anecdotal evidence presented as proof</li>
                  <li>• Resistance to questioning</li>
                  <li>• Cherry-picking favorable data</li>
                  <li>• Extraordinary claims with ordinary evidence</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Limitations */}
        <Card className="mb-12 glass-card">
          <CardHeader>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-6 w-6 text-indigo-600" />
              <CardTitle className="text-2xl">Understanding the Limitations</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The scientific method is powerful but not perfect. It has limitations and can be misused:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Inherent Limitations:</h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Cannot address all types of questions (values, meaning)</li>
                  <li>• Relies on current technology and instruments</li>
                  <li>• Limited by human cognitive biases</li>
                  <li>• Statistical uncertainty in all measurements</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Potential for Misuse:</h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Funding bias influencing research directions</li>
                  <li>• Publication bias toward positive results</li>
                  <li>• Institutional pressure on researchers</li>
                  <li>• Misrepresentation by media and politicians</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="glass-card">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">
              Embrace Scientific Thinking
            </CardTitle>
            <CardDescription className="text-muted-foreground max-w-3xl mx-auto">
              Apply scientific principles to your daily life: base beliefs on evidence, remain open 
              to new information, question assumptions, and always be ready to update your understanding 
              when presented with better evidence. This is the path to more accurate beliefs and better decisions.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}