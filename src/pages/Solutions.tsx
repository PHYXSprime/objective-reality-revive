import { Link } from 'react-router-dom';
import { MessageSquare, HelpCircle, Microscope, Lightbulb, Smile, User, Users, Target, ArrowRight } from 'lucide-react';
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
    },
    {
      icon: User,
      title: t('solutions.stefanMolyneux.title'),
      description: t('solutions.stefanMolyneux.description'),
      link: "/stefan-molyneux",
      color: "text-emerald-600 dark:text-emerald-400",
      priority: t('solutions.priority.influential')
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
    <div className="min-h-screen gradient-bg relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="relative z-10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="glass-card rounded-3xl p-12 max-w-4xl mx-auto border border-primary/20 shadow-2xl">
              <h1 className="text-5xl font-bold text-foreground mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {t('solutions.title')}
              </h1>
              <h2 className="text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                {t('solutions.subtitle')}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t('solutions.introduction')}
              </p>
            </div>
          </div>

          {/* Solutions Grid */}
          <div className="mb-16">
            <div className="glass-card rounded-2xl p-6 text-center mb-12 max-w-3xl mx-auto border border-primary/10">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                {t('solutions.practicalTools')}
              </h2>
              <p className="text-muted-foreground">
                {t('solutions.practicalToolsDescription')}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <Card key={index} className="group h-full glass-card rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl border border-border/50 hover:border-primary/30">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <solution.icon className={`h-7 w-7 ${solution.color}`} />
                      </div>
                       <span className={`text-xs font-medium px-3 py-1.5 rounded-full ${
                         solution.priority === t('solutions.priority.essential') ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                         solution.priority === t('solutions.priority.core') ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                         'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                       }`}>
                         {solution.priority}
                       </span>
                    </div>
                    <CardTitle className="text-xl mb-3">{solution.title}</CardTitle>
                    <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                      {solution.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                     <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
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
          <Card className="mb-16 glass-card rounded-3xl border border-primary/20 shadow-lg">
            <CardHeader className="pb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-3xl text-foreground">{t('solutions.personalActionPlan')}</CardTitle>
                  <CardDescription className="text-lg mt-2">
                    {t('solutions.personalActionDescription')}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h4 className="font-semibold text-foreground text-lg">{t('solutions.dailyPractices')}</h4>
                  <div className="space-y-4">
                    {personalActions.slice(0, 3).map((action, index) => (
                      <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-muted/30">
                        <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground leading-relaxed">{action}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-6">
                  <h4 className="font-semibold text-foreground text-lg">{t('solutions.socialImpact')}</h4>
                  <div className="space-y-4">
                    {personalActions.slice(3).map((action, index) => (
                      <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-muted/30">
                        <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground leading-relaxed">{action}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Core Philosophy */}
          <Card className="mb-16 glass-card rounded-3xl border border-primary/20 bg-gradient-to-br from-background/80 to-background/60 shadow-lg">
            <CardHeader className="pb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-3xl text-foreground">{t('solutions.fundamentalMindset')}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="text-center p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl border border-primary/20">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  {t('solutions.fundamentalPrinciple')}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
                  {t('solutions.fundamentalPrincipleText')}
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 rounded-xl bg-muted/30">
                  <h4 className="font-semibold text-foreground mb-4 text-lg">{t('solutions.questionEverything')}</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('solutions.questionEverythingText')}
                  </p>
                </div>
                <div className="text-center p-6 rounded-xl bg-muted/30">
                  <h4 className="font-semibold text-foreground mb-4 text-lg">{t('solutions.seekEvidence')}</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('solutions.seekEvidenceText')}
                  </p>
                </div>
                <div className="text-center p-6 rounded-xl bg-muted/30">
                  <h4 className="font-semibold text-foreground mb-4 text-lg">{t('solutions.stayCurious')}</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('solutions.stayCuriousText')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Getting Started */}
          <div className="grid md:grid-cols-2 gap-8">
             <Card className="glass-card rounded-2xl border border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                 <CardTitle className="text-2xl">{t('solutions.startJourney')}</CardTitle>
                 <CardDescription className="text-lg">
                   {t('solutions.startJourneyDescription')}
                 </CardDescription>
               </CardHeader>
               <CardContent className="space-y-4">
                 <Button asChild className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
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

            <Card className="glass-card rounded-2xl border border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                 <CardTitle className="text-2xl">{t('solutions.spreadKnowledge')}</CardTitle>
                 <CardDescription className="text-lg">
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
    </div>
  );
}