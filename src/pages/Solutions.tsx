import { Link } from 'react-router-dom';
import { MessageSquare, HelpCircle, Microscope, Lightbulb, Smile, Users, Target, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Solutions() {
  const { t } = useLanguage();

  const solutions = [
    {
      icon: MessageSquare,
      title: t('solutions.streetEpistemology.title'),
      description: t('solutions.streetEpistemology.description'),
      link: "/street-epistemology",
      color: "text-blue-600 dark:text-blue-400",
      priority: t('solutions.priority.essential')
    },
    {
      icon: HelpCircle,
      title: t('solutions.socraticQuestioning.title'),
      description: t('solutions.socraticQuestioning.description'),
      link: "/socratic-questioning",
      color: "text-green-600 dark:text-green-400",
      priority: t('solutions.priority.essential')
    },
    {
      icon: Microscope,
      title: t('solutions.scientificMethod.title'),
      description: t('solutions.scientificMethod.description'),
      link: "/scientific-method",
      color: "text-purple-600 dark:text-purple-400",
      priority: t('solutions.priority.core')
    },
    {
      icon: Lightbulb,
      title: t('solutions.criticalThinking.title'),
      description: t('solutions.criticalThinking.description'),
      link: "/critical-thinking",
      color: "text-orange-600 dark:text-orange-400",
      priority: t('solutions.priority.core')
    },
    {
      icon: Smile,
      title: t('solutions.comedians.title'),
      description: t('solutions.comedians.description'),
      link: "/comedians",
      color: "text-pink-600 dark:text-pink-400",
      priority: t('solutions.priority.cultural')
    }
  ];

  const personalActions = [
    t('solutions.personalActions.educate'),
    t('solutions.personalActions.practice'),
    t('solutions.personalActions.apply'),
    t('solutions.personalActions.expect'),
    t('solutions.personalActions.raise'),
    t('solutions.personalActions.model')
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="glass-card rounded-2xl p-8 max-w-4xl mx-auto mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-6">
              {t('solutions.title')}
            </h1>
            <h2 className="text-2xl text-muted-foreground mb-8">
              {t('solutions.subtitle')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('solutions.introduction')}
            </p>
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="mb-12">
          <div className="glass-card rounded-2xl p-6 text-center mb-8 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {t('solutions.practicalTools')}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <Card key={index} className="h-full glass-card rounded-2xl transition-transform hover:scale-105">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center`}>
                      <solution.icon className={`h-6 w-6 ${solution.color}`} />
                    </div>
                     <span className={`text-xs font-medium px-2 py-1 rounded ${
                       solution.priority === t('solutions.priority.essential') ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                       solution.priority === t('solutions.priority.core') ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                       'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                     }`}>
                       {solution.priority}
                     </span>
                  </div>
                  <CardTitle className="text-lg">{solution.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {solution.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                   <Button asChild variant="outline" className="w-full group">
                     <Link to={solution.link}>
                       {t('learn_more')}
                       <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                     </Link>
                   </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Personal Action Plan */}
        <Card className="mb-12 glass-card rounded-2xl">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Target className="h-6 w-6 text-indigo-600" />
              <CardTitle className="text-2xl">{t('solutions.personalActionPlan')}</CardTitle>
            </div>
            <CardDescription>
              {t('solutions.personalActionDescription')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-foreground mb-4">{t('solutions.dailyPractices')}</h4>
                <ul className="space-y-3">
                  {personalActions.slice(0, 3).map((action, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{action}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-4">{t('solutions.socialImpact')}</h4>
                <ul className="space-y-3">
                  {personalActions.slice(3).map((action, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{action}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Core Philosophy */}
        <Card className="mb-12 glass-card rounded-2xl border-primary/20">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Users className="h-6 w-6 text-primary" />
              <CardTitle className="text-2xl">{t('solutions.fundamentalMindset')}</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center p-6 bg-muted/30 rounded-lg">
              <h3 className="text-xl font-bold text-foreground mb-4">
                {t('solutions.fundamentalPrinciple')}
              </h3>
              <p className="text-muted-foreground">
                {t('solutions.fundamentalPrincipleText')}
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="font-semibold text-foreground mb-2">{t('solutions.questionEverything')}</h4>
                <p className="text-sm text-muted-foreground">
                  {t('solutions.questionEverythingText')}
                </p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-foreground mb-2">{t('solutions.seekEvidence')}</h4>
                <p className="text-sm text-muted-foreground">
                  {t('solutions.seekEvidenceText')}
                </p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-foreground mb-2">{t('solutions.stayCurious')}</h4>
                <p className="text-sm text-muted-foreground">
                  {t('solutions.stayCuriousText')}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Getting Started */}
        <div className="grid md:grid-cols-2 gap-6">
           <Card className="glass-card rounded-2xl">
            <CardHeader>
               <CardTitle>{t('solutions.startJourney')}</CardTitle>
               <CardDescription>
                 {t('solutions.startJourneyDescription')}
               </CardDescription>
             </CardHeader>
             <CardContent className="space-y-4">
               <Button asChild className="w-full">
                 <Link to="/street-epistemology">
                   {t('solutions.learnStreetEpistemology')}
                 </Link>
               </Button>
               <Button asChild variant="outline" className="w-full">
                 <Link to="/socratic-questioning">
                   {t('solutions.masterSocraticQuestioning')}
                 </Link>
               </Button>
            </CardContent>
          </Card>

          <Card className="glass-card rounded-2xl">
            <CardHeader>
               <CardTitle>{t('solutions.spreadKnowledge')}</CardTitle>
               <CardDescription>
                 {t('solutions.spreadKnowledgeDescription')}
               </CardDescription>
             </CardHeader>
             <CardContent className="space-y-4">
               <Button asChild variant="outline" className="w-full">
                 <Link to="/challenges">
                   {t('solutions.understandChallenges')}
                 </Link>
               </Button>
               <Button asChild variant="outline" className="w-full">
                 <Link to="/critical-thinking">
                   {t('solutions.developCriticalThinking')}
                 </Link>
               </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}