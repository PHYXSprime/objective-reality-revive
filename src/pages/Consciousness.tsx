import { ExternalLink, Brain, Users, Globe, Lightbulb } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Consciousness() {
  const { t } = useLanguage();

  const consciousnessLevels = [
    {
      level: "1. Survival",
      color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
      description: "Basic survival instincts, fight-or-flight responses, and immediate physical needs.",
      characteristics: ["Reactive behavior", "Survival-focused", "Limited awareness"]
    },
    {
      level: "2. Tribal",
      color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
      description: "Group belonging, tradition, and tribal identity. Us vs. them mentality.",
      characteristics: ["Tradition-bound", "Group loyalty", "Ritual importance"]
    },
    {
      level: "3. Achievement",
      color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
      description: "Individual success, competition, and material achievement.",
      characteristics: ["Goal-oriented", "Competitive", "Success-driven"]
    },
    {
      level: "4. Community",
      color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      description: "Harmony, equality, and community welfare. Focus on relationships and feelings.",
      characteristics: ["Consensus-seeking", "Inclusive", "Process-oriented"]
    },
    {
      level: "5. Integral",
      color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      description: "Systems thinking, complexity acceptance, and multiple perspective integration.",
      characteristics: ["Systems awareness", "Complexity tolerance", "Multi-perspective"]
    },
    {
      level: "6. Holistic",
      color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      description: "Holistic thinking, ecological awareness, and spiritual dimensions.",
      characteristics: ["Holistic view", "Ecological thinking", "Spiritual awareness"]
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            {t('consciousness.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mb-6">
            {t('consciousness.description')}
          </p>
        </div>

        {/* David Heggli's Digital Twins Study */}
        <Card className="mb-12 border-primary/20 glass-card">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Brain className="h-6 w-6 text-primary" />
              <CardTitle className="text-2xl">Digital Twins of Human Consciousness</CardTitle>
            </div>
            <CardDescription className="text-lg">
              Research by David Heggli on modeling consciousness levels through digital twin technology
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                David Heggli's groundbreaking research explores the intersection of consciousness development 
                and digital twin technology. His work investigates how different levels of human consciousness 
                can be modeled, understood, and potentially enhanced through sophisticated digital representations.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-4">
                Key Research Areas
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-foreground">Consciousness Mapping</h4>
                      <p className="text-sm text-muted-foreground">
                        Digital models that represent different stages of consciousness development and their characteristics.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-foreground">Collective Intelligence</h4>
                      <p className="text-sm text-muted-foreground">
                        How groups and organizations can be modeled to understand their collective consciousness levels.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Globe className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-foreground">Global Implications</h4>
                      <p className="text-sm text-muted-foreground">
                        Applications for understanding societal development and global consciousness evolution.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Brain className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-foreground">Practical Applications</h4>
                      <p className="text-sm text-muted-foreground">
                        Real-world implementations in education, organizational development, and personal growth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4 pt-4">
              <Button variant="outline" className="flex items-center gap-2">
                <ExternalLink className="h-4 w-4" />
                Read Full Research
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <ExternalLink className="h-4 w-4" />
                Contact Researcher
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Consciousness Levels */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Levels of Consciousness Development
          </h2>
          <p className="text-muted-foreground mb-8">
            Understanding the stages of human consciousness development helps us recognize different 
            worldviews and approaches to complex problems.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {consciousnessLevels.map((level, index) => (
            <Card key={index} className="h-full glass-card">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${level.color}`}>
                    {level.level}
                  </div>
                </div>
                <CardDescription className="text-sm leading-relaxed">
                  {level.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-medium text-sm text-foreground mb-3">Key Characteristics:</h4>
                <ul className="space-y-2">
                  {level.characteristics.map((char, charIndex) => (
                    <li key={charIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                      {char}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 p-6 bg-muted/50 rounded-lg">
          <p className="text-sm text-muted-foreground">
            <strong>Note:</strong> This consciousness framework is based on developmental psychology research 
            and integral theory. It's important to understand that these levels are not hierarchical in terms 
            of human worth, but rather represent different ways of making sense of complex situations. 
            Each level has its own strengths and limitations, and healthy development involves integrating 
            insights from multiple levels.
          </p>
        </div>
      </div>
    </div>
  );
}