import { useState } from 'react';
import { useQuestLanguage } from '@/contexts/QuestLanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calculator, Info, Youtube, ExternalLink } from 'lucide-react';

const translations = {
  title: {
    en: "Bayes' Theorem",
    de: "Bayes-Theorem",
    fr: "Théorème de Bayes",
    es: "Teorema de Bayes"
  },
  equation: {
    en: "The Equation",
    de: "Die Gleichung",
    fr: "L'équation",
    es: "La ecuación"
  },
  calculator: {
    en: "Calculator",
    de: "Rechner",
    fr: "Calculateur",
    es: "Calculadora"
  },
  priorProb: {
    en: "Prior Probability P(H)",
    de: "A-priori-Wahrscheinlichkeit P(H)",
    fr: "Probabilité a priori P(H)",
    es: "Probabilidad previa P(H)"
  },
  priorDesc: {
    en: "Your initial belief before seeing evidence (0-100%)",
    de: "Ihre anfängliche Überzeugung vor dem Beweis (0-100%)",
    fr: "Votre croyance initiale avant de voir les preuves (0-100%)",
    es: "Tu creencia inicial antes de ver la evidencia (0-100%)"
  },
  likelihood: {
    en: "Likelihood P(E|H)",
    de: "Likelihood P(E|H)",
    fr: "Vraisemblance P(E|H)",
    es: "Verosimilitud P(E|H)"
  },
  likelihoodDesc: {
    en: "Probability of seeing this evidence IF hypothesis is true (0-100%)",
    de: "Wahrscheinlichkeit dieses Beweises WENN Hypothese wahr ist (0-100%)",
    fr: "Probabilité de voir cette preuve SI l'hypothèse est vraie (0-100%)",
    es: "Probabilidad de ver esta evidencia SI la hipótesis es verdadera (0-100%)"
  },
  falsePositive: {
    en: "False Positive Rate P(E|¬H)",
    de: "Falsch-Positiv-Rate P(E|¬H)",
    fr: "Taux de faux positifs P(E|¬H)",
    es: "Tasa de falsos positivos P(E|¬H)"
  },
  falsePositiveDesc: {
    en: "Probability of seeing this evidence IF hypothesis is FALSE (0-100%)",
    de: "Wahrscheinlichkeit dieses Beweises WENN Hypothese FALSCH ist (0-100%)",
    fr: "Probabilité de voir cette preuve SI l'hypothèse est FAUSSE (0-100%)",
    es: "Probabilidad de ver esta evidencia SI la hipótesis es FALSA (0-100%)"
  },
  calculate: {
    en: "Calculate",
    de: "Berechnen",
    fr: "Calculer",
    es: "Calcular"
  },
  posterior: {
    en: "Posterior Probability P(H|E)",
    de: "A-posteriori-Wahrscheinlichkeit P(H|E)",
    fr: "Probabilité a posteriori P(H|E)",
    es: "Probabilidad posterior P(H|E)"
  },
  posteriorDesc: {
    en: "Your updated belief after considering the evidence",
    de: "Ihre aktualisierte Überzeugung nach Berücksichtigung der Beweise",
    fr: "Votre croyance mise à jour après avoir considéré les preuves",
    es: "Tu creencia actualizada después de considerar la evidencia"
  },
  howToUse: {
    en: "How to Use",
    de: "Anleitung",
    fr: "Comment utiliser",
    es: "Cómo usar"
  },
  learnMore: {
    en: "Learn More (Videos)",
    de: "Mehr erfahren (Videos)",
    fr: "En savoir plus (Vidéos)",
    es: "Aprende más (Videos)"
  },
  tips: {
    en: "Tips",
    de: "Tipps",
    fr: "Conseils",
    es: "Consejos"
  },
  tipPrior: {
    en: "Prior probability:",
    de: "A-priori-Wahrscheinlichkeit:",
    fr: "Probabilité a priori:",
    es: "Probabilidad previa:"
  },
  tipPriorDesc: {
    en: "What you believed before seeing the evidence",
    de: "Was Sie glaubten, bevor Sie die Beweise sahen",
    fr: "Ce que vous croyiez avant de voir les preuves",
    es: "Lo que creías antes de ver la evidencia"
  },
  tipLikelihood: {
    en: "Likelihood:",
    de: "Likelihood:",
    fr: "Vraisemblance:",
    es: "Verosimilitud:"
  },
  tipLikelihoodDesc: {
    en: "How probable is this evidence if your hypothesis is true?",
    de: "Wie wahrscheinlich ist dieser Beweis, wenn Ihre Hypothese wahr ist?",
    fr: "Quelle est la probabilité de cette preuve si votre hypothèse est vraie?",
    es: "¿Qué tan probable es esta evidencia si tu hipótesis es verdadera?"
  },
  tipPosterior: {
    en: "Posterior:",
    de: "A-posteriori:",
    fr: "Postérieur:",
    es: "Posterior:"
  },
  tipPosteriorDesc: {
    en: "Your updated belief after considering the evidence",
    de: "Ihre aktualisierte Überzeugung nach Berücksichtigung der Beweise",
    fr: "Votre croyance mise à jour après avoir considéré les preuves",
    es: "Tu creencia actualizada después de considerar la evidencia"
  }
};

const videoResources = [
  {
    title: {
      en: "The quick proof of Bayes' theorem",
      de: "Der schnelle Beweis des Bayes-Theorems",
      fr: "La preuve rapide du théorème de Bayes",
      es: "La prueba rápida del teorema de Bayes"
    },
    channel: "3Blue1Brown",
    url: "https://youtu.be/HZGCoVF3YvM",
    color: "text-blue-400"
  },
  {
    title: {
      en: "Bayes theorem, the geometry of changing beliefs",
      de: "Bayes-Theorem, die Geometrie sich ändernder Überzeugungen",
      fr: "Théorème de Bayes, la géométrie des croyances changeantes",
      es: "Teorema de Bayes, la geometría de las creencias cambiantes"
    },
    channel: "3Blue1Brown",
    url: "https://youtu.be/lG4VkPoG3ko",
    color: "text-blue-400"
  },
  {
    title: {
      en: "The medical test paradox, and redesigning Bayes' rule",
      de: "Das Paradox des medizinischen Tests",
      fr: "Le paradoxe du test médical",
      es: "La paradoja de la prueba médica"
    },
    channel: "3Blue1Brown",
    url: "https://youtu.be/U_85TaXbeIo",
    color: "text-blue-400"
  },
  {
    title: {
      en: "The Bayesian Trap",
      de: "Die Bayesianische Falle",
      fr: "Le piège bayésien",
      es: "La trampa bayesiana"
    },
    channel: "Veritasium",
    url: "https://youtu.be/R13BD8qKeTg",
    color: "text-green-400"
  }
];

export default function BayesTheorem() {
  const { t } = useQuestLanguage();
  const [prior, setPrior] = useState<string>('50');
  const [likelihood, setLikelihood] = useState<string>('80');
  const [falsePositive, setFalsePositive] = useState<string>('10');
  const [posterior, setPosterior] = useState<number | null>(null);
  const [showGuide, setShowGuide] = useState(false);

  const calculate = () => {
    const p_h = parseFloat(prior) / 100;
    const p_e_h = parseFloat(likelihood) / 100;
    const p_e_not_h = parseFloat(falsePositive) / 100;

    if (isNaN(p_h) || isNaN(p_e_h) || isNaN(p_e_not_h)) return;

    const p_e = p_e_h * p_h + p_e_not_h * (1 - p_h);
    const p_h_e = (p_e_h * p_h) / p_e;
    
    setPosterior(Math.round(p_h_e * 1000) / 10);
  };

  return (
    <div className="space-y-6">
      {/* Equation Display */}
      <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/30">
        <h4 className="text-sm font-medium text-purple-400 mb-3">{t(translations.equation)}</h4>
        <div className="font-mono text-lg text-center text-white py-2">
          <span className="text-purple-400">P(H|E)</span> = 
          <span className="mx-2">
            <span className="text-green-400">P(E|H)</span> × <span className="text-blue-400">P(H)</span>
          </span>
          / 
          <span className="ml-2 text-yellow-400">P(E)</span>
        </div>
        <div className="text-xs text-muted-foreground text-center mt-2 space-y-1">
          <p><span className="text-purple-400">P(H|E)</span> = Posterior (updated belief)</p>
          <p><span className="text-green-400">P(E|H)</span> = Likelihood | <span className="text-blue-400">P(H)</span> = Prior</p>
          <p><span className="text-yellow-400">P(E)</span> = P(E|H)×P(H) + P(E|¬H)×P(¬H)</p>
        </div>
      </div>

      {/* Guide Toggle */}
      <Button 
        variant="outline" 
        size="sm" 
        onClick={() => setShowGuide(!showGuide)}
        className="w-full"
      >
        <Info className="w-4 h-4 mr-2" />
        {t(translations.howToUse)}
      </Button>

      {showGuide && (
        <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/30 text-sm space-y-2">
          <p><strong>1.</strong> Start with your prior belief (before seeing evidence)</p>
          <p><strong>2.</strong> Estimate how likely you'd see this evidence if your hypothesis is true</p>
          <p><strong>3.</strong> Estimate how likely you'd see this evidence if your hypothesis is false</p>
          <p><strong>4.</strong> The result shows your rationally updated belief</p>
        </div>
      )}

      {/* Calculator */}
      <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30">
        <h4 className="text-sm font-medium flex items-center gap-2 text-green-400 mb-4">
          <Calculator className="w-4 h-4" />
          {t(translations.calculator)}
        </h4>

        <div className="space-y-3">
          <div>
            <Label className="text-xs">{t(translations.priorProb)}</Label>
            <Input 
              type="number" 
              min="0" 
              max="100" 
              value={prior}
              onChange={(e) => setPrior(e.target.value)}
              className="mt-1"
            />
            <p className="text-xs text-muted-foreground mt-1">{t(translations.priorDesc)}</p>
          </div>

          <div>
            <Label className="text-xs">{t(translations.likelihood)}</Label>
            <Input 
              type="number" 
              min="0" 
              max="100" 
              value={likelihood}
              onChange={(e) => setLikelihood(e.target.value)}
              className="mt-1"
            />
            <p className="text-xs text-muted-foreground mt-1">{t(translations.likelihoodDesc)}</p>
          </div>

          <div>
            <Label className="text-xs">{t(translations.falsePositive)}</Label>
            <Input 
              type="number" 
              min="0" 
              max="100" 
              value={falsePositive}
              onChange={(e) => setFalsePositive(e.target.value)}
              className="mt-1"
            />
            <p className="text-xs text-muted-foreground mt-1">{t(translations.falsePositiveDesc)}</p>
          </div>

          <Button onClick={calculate} className="w-full bg-green-600 hover:bg-green-700">
            {t(translations.calculate)}
          </Button>

          {posterior !== null && (
            <div className="p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-center">
              <p className="text-xs text-muted-foreground">{t(translations.posterior)}</p>
              <p className="text-3xl font-bold text-green-400">{posterior}%</p>
              <p className="text-xs text-muted-foreground mt-1">{t(translations.posteriorDesc)}</p>
            </div>
          )}
        </div>
      </div>

      {/* Tips section */}
      <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/30">
        <h4 className="text-sm font-medium flex items-center gap-2 text-yellow-400 mb-2">
          <Info className="w-4 h-4" />
          {t(translations.tips)}
        </h4>
        <ul className="text-xs text-muted-foreground space-y-1">
          <li>• <strong>{t(translations.tipPrior)}</strong> {t(translations.tipPriorDesc)}</li>
          <li>• <strong>{t(translations.tipLikelihood)}</strong> {t(translations.tipLikelihoodDesc)}</li>
          <li>• <strong>{t(translations.tipPosterior)}</strong> {t(translations.tipPosteriorDesc)}</li>
        </ul>
      </div>

      {/* Video Resources */}
      <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30">
        <h4 className="text-sm font-medium flex items-center gap-2 text-red-400 mb-3">
          <Youtube className="w-4 h-4" />
          {t(translations.learnMore)}
        </h4>
        <div className="space-y-2">
          {videoResources.map((video, index) => (
            <a
              key={index}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-2 rounded-md bg-black/30 hover:bg-black/50 transition-colors group"
            >
              <div className="w-8 h-8 rounded bg-red-600 flex items-center justify-center flex-shrink-0">
                <Youtube className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-white truncate group-hover:text-red-400 transition-colors">
                  {t(video.title)}
                </p>
                <p className={`text-xs ${video.color}`}>{video.channel}</p>
              </div>
              <ExternalLink className="w-3 h-3 text-muted-foreground flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
