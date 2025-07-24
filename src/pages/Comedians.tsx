import { Smile, Brain, Users, AlertTriangle, Shield, Target } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { SolutionNavigation } from '@/components/SolutionNavigation';

export default function Comedians() {
  const { t } = useLanguage();

  const comedianRoles = [
    {
      role: "Truth-Tellers",
      description: "Question society's 'status quo' and challenge accepted wisdom through humor"
    },
    {
      role: "Social Critics",
      description: "Point out inconsistencies and absurdities in social norms and beliefs"
    },
    {
      role: "Reality Checkers",
      description: "Bridge the gap between accepted 'knowledge' and objective reality"
    },
    {
      role: "Cognitive Disruptors",
      description: "Make people think by presenting familiar ideas in unexpected ways"
    }
  ];

  const comedianPhilosophers = [
    {
      name: "George Carlin",
      insight: "Master of questioning religious dogma, social conventions, and political hypocrisy",
      quote: "Think of how stupid the average person is, and realize half of them are stupider than that."
    },
    {
      name: "Ricky Gervais",
      insight: "Challenges religious beliefs and social taboos with logical reasoning disguised as humor",
      quote: "Just because you're offended doesn't mean you're right."
    },
    {
      name: "Dave Chappelle",
      insight: "Rejected $50 million to maintain integrity - couldn't resolve moral dissonance",
      quote: "The mark of greatness is when everything before you is obsolete, and everything after you bears your mark."
    },
    {
      name: "Jim Carrey",
      insight: "Started behaving 'strangely' when Hollywood tried to corrupt him with money and status",
      quote: "Behind every great man is a woman rolling her eyes."
    }
  ];

  const propagandaWarning = [
    "Hollywood has big ties to intelligence agencies (Mossad & CIA)",
    "Social media platforms enable granular propaganda targeting",
    "Cambridge Analytica scandal revealed manipulation capabilities",
    "'Free' apps collect data to influence public opinion",
    "Comedians face pressure to promote certain narratives"
  ];

  return (
    <div className="min-h-screen py-8 pr-20">
      <SolutionNavigation />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="glass-card rounded-2xl p-8 max-w-4xl mx-auto mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-6">
              Comedians: The Modern Jesters
            </h1>
            <p className="text-xl text-muted-foreground">
              Comedians often are among the smartest people in society. Their cognitive abilities 
              allow them to question our "status quo" and deliver truth disguised as humor.
            </p>
          </div>
        </div>

        {/* The Role of Comedy */}
        <Card className="mb-12 glass-card rounded-2xl border-blue-200 dark:border-blue-800">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Brain className="h-6 w-6 text-blue-600" />
              <CardTitle className="text-2xl">Why Comedy Matters for Truth</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The best humor condenses right at the boundary between what is socially accepted "knowledge", 
              tradition, dogmatic beliefs of the time and objective reality. Distributing the truth nicely 
              disguised as a joke makes the truth much more acceptable to the majority of people – 
              or at least makes them think about it.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {comedianRoles.map((role, index) => (
                <div key={index} className="p-4 border border-border rounded-lg text-center">
                  <h4 className="font-semibold text-foreground mb-2">{role.role}</h4>
                  <p className="text-sm text-muted-foreground">{role.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Notable Truth-Telling Comedians */}
        <div className="mb-12">
          <div className="glass-card rounded-2xl p-6 text-center mb-8 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Comedy Philosophers
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {comedianPhilosophers.map((comedian, index) => (
              <Card key={index} className="glass-card rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-lg">{comedian.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {comedian.insight}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-sm italic text-muted-foreground border-l-4 border-primary pl-4">
                    "{comedian.quote}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* The Dark Side: Propaganda Potential */}
        <Alert className="mb-12 border-orange-200 dark:border-orange-800">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription className="text-lg">
            <strong>Warning:</strong> This gives comedians a great deal of responsibility since the ability 
            to influence public opinion can also be abused for propaganda or dogmatic beliefs 
            that are not in line with objective reality.
          </AlertDescription>
        </Alert>

        {/* Corruption & Resistance */}
        <Card className="mb-12 glass-card rounded-2xl">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-red-600" />
              <CardTitle className="text-2xl">When Comedians Resist Corruption</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Some comedians couldn't resolve the dissonance between what was asked of them 
              (attempts to corrupt them with money and status) and their moral conscience:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-foreground mb-3">Dave Chappelle</h4>
                <p className="text-sm text-muted-foreground">
                  Rejected a $50 million contract rather than compromise his integrity. 
                  He couldn't reconcile the pressure to promote certain narratives 
                  with his commitment to truth-telling.
                </p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-foreground mb-3">Jim Carrey</h4>
                <p className="text-sm text-muted-foreground">
                  Started behaving in "strange ways" and dropped off the Hollywood A-list 
                  when he couldn't resolve the moral dissonance of what was being asked of him.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* The Propaganda Machine */}
        <Card className="mb-12 glass-card rounded-2xl">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Users className="h-6 w-6 text-purple-600" />
              <CardTitle className="text-2xl">The Modern Propaganda Landscape</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Hollywood is a huge propaganda machine with big ties to intelligence agencies. 
              Social media has joined the fray, enabling even more granular manipulation of public opinion.
            </p>
            <div className="space-y-3">
              {propagandaWarning.map((warning, index) => (
                <div key={index} className="flex items-start gap-3">
                  <AlertTriangle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{warning}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* How to Evaluate Comedy */}
        <Card className="mb-12 glass-card rounded-2xl">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Target className="h-6 w-6 text-green-600" />
              <CardTitle className="text-2xl">Evaluating Comedy for Truth vs. Propaganda</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-foreground mb-4">Truth-Telling Comedy:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Challenges popular but questionable beliefs</li>
                  <li>• Questions authority figures and institutions</li>
                  <li>• Points out logical inconsistencies</li>
                  <li>• Makes people uncomfortable but thinking</li>
                  <li>• Comes from personal observation and experience</li>
                  <li>• Often results in career consequences</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-4">Propaganda Comedy:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Reinforces mainstream narratives</li>
                  <li>• Mocks those who question official stories</li>
                  <li>• Promotes specific political agendas</li>
                  <li>• Makes people feel good about their beliefs</li>
                  <li>• Comes from scripted, corporate sources</li>
                  <li>• Often rewarded with career advancement</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* The Jester's Wisdom */}
        <div className="glass-card rounded-2xl text-center p-8">
          <Smile className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-foreground mb-4">
            The Eternal Role of the Jester
          </h3>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Throughout history, jesters were the only ones who could tell kings uncomfortable truths 
            without losing their heads. Today's comedians serve the same function for society. 
            When you hear a joke that makes you laugh but also makes you think, pay attention – 
            you might be hearing an important truth wrapped in humor.
          </p>
        </div>
      </div>
    </div>
  );
}