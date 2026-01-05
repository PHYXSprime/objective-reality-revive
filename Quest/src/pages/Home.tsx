import { Link } from 'wouter';
import { motion } from 'framer-motion';
import StarField from '@/components/StarField';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Target, Scale, Lightbulb, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Star field background */}
      <StarField />

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between p-4">
          <a
            href="https://www.objective-reality.info"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            <span className="text-sm">objective-reality.info</span>
          </a>
          <LanguageSwitcher />
        </header>

        {/* Hero section */}
        <main className="flex-1 flex flex-col items-center justify-center p-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto space-y-8"
          >
            {/* Matrix-style intro text */}
            <p className="text-green-500 font-mono text-sm animate-pulse">
              ....wake up Neo! .................. wake up...
            </p>

            {/* Main title */}
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {t({
                en: 'Quest for Objective Reality',
                de: 'Suche nach objektiver Realität',
                fr: 'Quête de la réalité objective',
                es: 'Búsqueda de la realidad objetiva'
              })}
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-muted-foreground max-w-lg mx-auto">
              {t({
                en: 'How can we know if something is actually true?',
                de: 'Wie können wir wissen, ob etwas tatsächlich wahr ist?',
                fr: 'Comment savoir si quelque chose est vraiment vrai?',
                es: '¿Cómo podemos saber si algo es realmente verdad?'
              })}
            </p>

            {/* Description */}
            <div className="glass-card rounded-2xl p-6 text-left space-y-4">
              <p className="text-muted-foreground">
                {t({
                  en: 'The short answer is:',
                  de: 'Die kurze Antwort ist:',
                  fr: 'La réponse courte est:',
                  es: 'La respuesta corta es:'
                })}{' '}
                <strong className="text-foreground">
                  {t({
                    en: 'we can never be 100% sure of anything',
                    de: 'wir können nie 100% sicher sein',
                    fr: 'nous ne pouvons jamais être sûrs à 100%',
                    es: 'nunca podemos estar 100% seguros de nada'
                  })}
                </strong>. 
                {t({
                  en: 'Therefore, the best thing to do is to give every piece of information or belief a',
                  de: 'Daher ist es am besten, jeder Information oder Überzeugung einen',
                  fr: 'Par conséquent, la meilleure chose à faire est de donner à chaque information ou croyance une',
                  es: 'Por lo tanto, lo mejor es dar a cada pieza de información o creencia un'
                })}
                <span className="text-green-400"> {t({
                  en: 'value of confidence',
                  de: 'Vertrauenswert',
                  fr: 'valeur de confiance',
                  es: 'valor de confianza'
                })}</span> {t({
                  en: 'that adjusts with every new piece of information we gain.',
                  de: 'zu geben, der sich mit jeder neuen Information anpasst.',
                  fr: 'qui s\'ajuste avec chaque nouvelle information que nous obtenons.',
                  es: 'que se ajusta con cada nueva información que obtenemos.'
                })}
              </p>
              <p className="text-muted-foreground">
                {t({
                  en: 'This interactive guide will walk you through a systematic process for evaluating claims, beliefs, and information using critical thinking, the scientific method, and Bayesian reasoning.',
                  de: 'Dieser interaktive Leitfaden führt Sie durch einen systematischen Prozess zur Bewertung von Behauptungen, Überzeugungen und Informationen mit kritischem Denken, der wissenschaftlichen Methode und Bayes\'schem Denken.',
                  fr: 'Ce guide interactif vous accompagnera dans un processus systématique d\'évaluation des affirmations, des croyances et des informations en utilisant la pensée critique, la méthode scientifique et le raisonnement bayésien.',
                  es: 'Esta guía interactiva le llevará a través de un proceso sistemático para evaluar afirmaciones, creencias e información utilizando el pensamiento crítico, el método científico y el razonamiento bayesiano.'
                })}
              </p>
            </div>

            {/* CTA Button */}
            <Link href="/quest">
              <Button 
                size="lg" 
                className="decision-btn text-lg px-8 py-6 group"
              >
                {t({
                  en: 'Start Your Quest',
                  de: 'Starten Sie Ihre Suche',
                  fr: 'Commencez votre quête',
                  es: 'Comienza tu búsqueda'
                })}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            {/* Features */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
              {[
                { icon: Brain, label: t({ en: 'Critical Thinking', de: 'Kritisches Denken', fr: 'Pensée critique', es: 'Pensamiento crítico' }) },
                { icon: Target, label: t({ en: 'Scientific Method', de: 'Wissenschaftliche Methode', fr: 'Méthode scientifique', es: 'Método científico' }) },
                { icon: Scale, label: t({ en: 'Bayes Theorem', de: 'Bayes-Theorem', fr: 'Théorème de Bayes', es: 'Teorema de Bayes' }) },
                { icon: Lightbulb, label: t({ en: 'Bias Awareness', de: 'Bias-Bewusstsein', fr: 'Conscience des biais', es: 'Conciencia de sesgos' }) },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-2 p-3 rounded-lg bg-white/5">
                  <Icon className="w-6 h-6 text-primary" />
                  <span className="text-xs text-muted-foreground">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </main>

        {/* Footer */}
        <footer className="p-4 text-center text-xs text-muted-foreground">
          <p>
            {t({
              en: 'Part of',
              de: 'Teil von',
              fr: 'Partie de',
              es: 'Parte de'
            })}{' '}
            <a 
              href="https://www.objective-reality.info" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Objective Reality
            </a>
            {' '}— {t({
              en: 'A resource for clearer thinking',
              de: 'Eine Ressource für klareres Denken',
              fr: 'Une ressource pour une pensée plus claire',
              es: 'Un recurso para un pensamiento más claro'
            })}
          </p>
        </footer>
      </div>
    </div>
  );
}
