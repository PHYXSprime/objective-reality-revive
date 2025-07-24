import { HelpCircle, Lightbulb, Search, Target, Brain, Users } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SolutionNavigation } from '@/components/SolutionNavigation';

export default function SocraticQuestioning() {
  const { t } = useLanguage();

  const purposes = [
    "Explore complex ideas in depth",
    "Get to the truth of matters",
    "Open up issues and problems",
    "Uncover hidden assumptions",
    "Analyze concepts systematically",
    "Distinguish what we know from what we don't know",
    "Follow logical consequences of thought",
    "Control and guide discussions productively"
  ];

  const questionTypes = [
    {
      category: "Clarification Questions",
      questions: [
        "What do you mean when you say...?",
        "Could you give me an example?",
        "How does this relate to what we discussed earlier?",
        "Could you explain that point further?"
      ],
      color: "text-blue-600 dark:text-blue-400"
    },
    {
      category: "Assumption Questions",
      questions: [
        "What assumptions are you making here?",
        "What if we assumed the opposite?",
        "Do you think this assumption always holds true?",
        "What evidence do we have for this assumption?"
      ],
      color: "text-green-600 dark:text-green-400"
    },
    {
      category: "Evidence Questions",
      questions: [
        "What evidence supports this view?",
        "How do we know this to be true?",
        "What evidence might contradict this?",
        "How reliable is this source of information?"
      ],
      color: "text-purple-600 dark:text-purple-400"
    },
    {
      category: "Perspective Questions",
      questions: [
        "What alternative ways of looking at this exist?",
        "How might someone who disagrees respond?",
        "What are the strengths and weaknesses of this view?",
        "What factors make this issue complex?"
      ],
      color: "text-orange-600 dark:text-orange-400"
    },
    {
      category: "Implication Questions",
      questions: [
        "If this is true, what follows?",
        "What are the consequences of this belief?",
        "How does this fit with what else we know?",
        "What does this imply for the future?"
      ],
      color: "text-red-600 dark:text-red-400"
    },
    {
      category: "Meta Questions",
      questions: [
        "Why is this issue important?",
        "How does this question help us?",
        "What does this tell us about the nature of...?",
        "What general principles are involved here?"
      ],
      color: "text-indigo-600 dark:text-indigo-400"
    }
  ];

  const foundations = [
    {
      foundation: "Structured Logic",
      description: "Thinking follows logical patterns that can be examined and questioned"
    },
    {
      foundation: "Systematic Approach",
      description: "Questions are organized and purposeful, not random or haphazard"
    },
    {
      foundation: "Deep Inquiry",
      description: "Goes beyond surface-level to examine fundamental concepts and principles"
    },
    {
      foundation: "Focused Direction",
      description: "Usually concentrates on core theories, issues, or problems"
    },
    {
      foundation: "Disciplined Method",
      description: "Follows consistent principles and maintains intellectual rigor"
    }
  ];

  return (
    <div className="min-h-screen py-8 pr-20">
      <SolutionNavigation />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Card className="glass-card mb-8">
          <CardHeader>
            <CardTitle className="text-4xl font-bold">
              Socratic Questioning
            </CardTitle>
            <CardDescription className="text-xl max-w-3xl">
              A form of disciplined questioning that can be used to pursue thought in many directions 
              and for many purposes. The foundation of critical thinking for over 2,000 years.
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Key Distinction */}
        <Card className="mb-12 border-primary/20 glass-card">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Target className="h-6 w-6 text-primary" />
              <CardTitle className="text-2xl">What Makes It Different</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The key to distinguishing Socratic questioning from questioning <em>per se</em> is that 
              Socratic questioning is <strong>systematic, disciplined, deep and usually focuses on 
              fundamental concepts, principles, theories, issues or problems</strong>.
            </p>
          </CardContent>
        </Card>

        {/* Purposes */}
        <Card className="mb-12 glass-card">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Lightbulb className="h-6 w-6 text-primary" />
              <CardTitle className="text-2xl">Purposes of Socratic Questioning</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {purposes.map((purpose, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{purpose}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Theoretical Foundations */}
        <Card className="mb-12 glass-card">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Brain className="h-6 w-6 text-primary" />
              <CardTitle className="text-2xl">Five Theoretical Foundations</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {foundations.map((item, index) => (
                <div key={index} className="p-4 border border-border rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">{item.foundation}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Question Categories */}
        <Card className="glass-card mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Six Types of Socratic Questions
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Each type of question serves a specific purpose in critical thinking and systematic inquiry.
            </CardDescription>
          </CardHeader>
        </Card>

        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {questionTypes.map((type, index) => (
            <Card key={index} className="h-full glass-card">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <HelpCircle className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">{type.category}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {type.questions.map((question, qIndex) => (
                    <li key={qIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                      {question}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* How to Use */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="glass-card">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Search className="h-6 w-6 text-primary" />
                <CardTitle>The Questioning Process</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground">1. Start with Clarification</h4>
                    <p className="text-sm text-muted-foreground">
                      Ensure you understand exactly what is being claimed or argued.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground">2. Examine Assumptions</h4>
                    <p className="text-sm text-muted-foreground">
                      Identify and question the underlying assumptions being made.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground">3. Explore Evidence</h4>
                    <p className="text-sm text-muted-foreground">
                      Look at what evidence supports or contradicts the position.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground">4. Consider Alternatives</h4>
                    <p className="text-sm text-muted-foreground">
                      Examine different perspectives and possibilities.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Users className="h-6 w-6 text-primary" />
                <CardTitle>Best Practices</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {[
                  "Ask questions genuinely, not to trap or embarrass",
                  "Build on previous questions and answers", 
                  "Allow time for thoughtful responses",
                  "Model the thinking you want to encourage",
                  "Focus on understanding, not winning",
                  "Be patient with the process",
                  "Question your own assumptions too"
                ].map((practice, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                    {practice}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Example in Action */}
        <Card className="mb-12 glass-card">
          <CardHeader>
            <CardTitle className="text-2xl">Example: Questioning a Common Belief</CardTitle>
            <CardDescription>
              How Socratic questioning might explore the belief "Money can't buy happiness"
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-muted/30 rounded-lg">
                <p className="font-medium text-foreground mb-2">Clarification:</p>
                <p className="text-muted-foreground">
                  "What exactly do you mean by 'happiness'? How are you defining 'money' in this context?"
                </p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <p className="font-medium text-foreground mb-2">Assumptions:</p>
                <p className="text-muted-foreground">
                  "Are you assuming happiness is the same for everyone? What if someone's happiness comes from financial security?"
                </p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <p className="font-medium text-foreground mb-2">Evidence:</p>
                <p className="text-muted-foreground">
                  "What evidence do we have about the relationship between money and well-being? How do studies on this topic affect your view?"
                </p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <p className="font-medium text-foreground mb-2">Implications:</p>
                <p className="text-muted-foreground">
                  "If this is true, what does it mean for how we should live? Should we not pursue financial success at all?"
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center bg-muted/30 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Start Questioning Today
          </h3>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Begin by questioning your own beliefs and assumptions. Practice the six types of questions 
            on topics you feel confident about. You might be surprised by what you discover when you 
            dig deeper into the foundations of your own thinking.
          </p>
        </div>
      </div>
    </div>
  );
}