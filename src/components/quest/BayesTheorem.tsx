import { useState } from 'react';
import { useQuestLanguage } from '@/contexts/QuestLanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calculator, Info, Youtube, ExternalLink, Plus, Trash2 } from 'lucide-react';

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
  evidence: {
    en: "Evidence",
    de: "Beweis",
    fr: "Preuve",
    es: "Evidencia"
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
  addEvidence: {
    en: "Add Evidence",
    de: "Beweis hinzufügen",
    fr: "Ajouter une preuve",
    es: "Añadir evidencia"
  },
  removeEvidence: {
    en: "Remove",
    de: "Entfernen",
    fr: "Supprimer",
    es: "Eliminar"
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
    en: "Your updated belief after considering all evidence",
    de: "Ihre aktualisierte Überzeugung nach Berücksichtigung aller Beweise",
    fr: "Votre croyance mise à jour après avoir considéré toutes les preuves",
    es: "Tu creencia actualizada después de considerar toda la evidencia"
  },
  intermediateResult: {
    en: "After evidence",
    de: "Nach Beweis",
    fr: "Après preuve",
    es: "Después de evidencia"
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
  },
  tipMultiEvidence: {
    en: "Multiple evidence:",
    de: "Mehrere Beweise:",
    fr: "Preuves multiples:",
    es: "Evidencia múltiple:"
  },
  tipMultiEvidenceDesc: {
    en: "Weak evidence (likelihood ≈ false positive) barely changes your belief. Strong evidence makes a big difference!",
    de: "Schwache Beweise (Likelihood ≈ Falsch-Positiv) ändern Ihre Überzeugung kaum. Starke Beweise machen einen großen Unterschied!",
    fr: "Les preuves faibles (vraisemblance ≈ faux positif) changent à peine votre croyance. Les preuves fortes font une grande différence!",
    es: "La evidencia débil (verosimilitud ≈ falso positivo) apenas cambia tu creencia. ¡La evidencia fuerte hace una gran diferencia!"
  },
  guideStep1: {
    en: "Start with your prior belief (before seeing evidence)",
    de: "Beginnen Sie mit Ihrer anfänglichen Überzeugung (vor dem Beweis)",
    fr: "Commencez par votre croyance initiale (avant de voir les preuves)",
    es: "Comienza con tu creencia previa (antes de ver la evidencia)"
  },
  guideStep2: {
    en: "Estimate how likely you'd see this evidence if your hypothesis is true",
    de: "Schätzen Sie, wie wahrscheinlich Sie diesen Beweis sehen würden, wenn Ihre Hypothese wahr ist",
    fr: "Estimez la probabilité de voir cette preuve si votre hypothèse est vraie",
    es: "Estima qué tan probable sería ver esta evidencia si tu hipótesis es verdadera"
  },
  guideStep3: {
    en: "Estimate how likely you'd see this evidence if your hypothesis is false",
    de: "Schätzen Sie, wie wahrscheinlich Sie diesen Beweis sehen würden, wenn Ihre Hypothese falsch ist",
    fr: "Estimez la probabilité de voir cette preuve si votre hypothèse est fausse",
    es: "Estima qué tan probable sería ver esta evidencia si tu hipótesis es falsa"
  },
  guideStep4: {
    en: "Add more evidence to see how each piece updates your belief sequentially",
    de: "Fügen Sie weitere Beweise hinzu, um zu sehen, wie jeder Beweis Ihre Überzeugung nacheinander aktualisiert",
    fr: "Ajoutez plus de preuves pour voir comment chaque élément met à jour votre croyance séquentiellement",
    es: "Añade más evidencia para ver cómo cada pieza actualiza tu creencia secuencialmente"
  }
};

// Language-specific video resources
const videoResources: Record<string, Array<{
  title: string;
  channel: string;
  url: string;
  color: string;
}>> = {
  en: [
    {
      title: "The quick proof of Bayes' theorem",
      channel: "3Blue1Brown",
      url: "https://youtu.be/HZGCoVF3YvM",
      color: "text-blue-400"
    },
    {
      title: "Bayes theorem, the geometry of changing beliefs",
      channel: "3Blue1Brown",
      url: "https://youtu.be/lG4VkPoG3ko",
      color: "text-blue-400"
    },
    {
      title: "The medical test paradox, and redesigning Bayes' rule",
      channel: "3Blue1Brown",
      url: "https://youtu.be/U_85TaXbeIo",
      color: "text-blue-400"
    },
    {
      title: "The Bayesian Trap",
      channel: "Veritasium",
      url: "https://youtu.be/R13BD8qKeTg",
      color: "text-green-400"
    }
  ],
  de: [
    {
      title: "Satz von Bayes | bedingte Wahrscheinlichkeit",
      channel: "Mathe by Daniel Jung",
      url: "https://www.youtube.com/watch?v=wUDxQFbXqjA",
      color: "text-orange-400"
    },
    {
      title: "Bayes Theorem (mit deutschen Untertiteln)",
      channel: "3Blue1Brown",
      url: "https://youtu.be/HZGCoVF3YvM",
      color: "text-blue-400"
    }
  ],
  fr: [
    {
      title: "LA LOI DE BAYES - Argument frappant",
      channel: "Monsieur Phi",
      url: "https://www.youtube.com/watch?v=3FOrWMDL8CY",
      color: "text-purple-400"
    },
    {
      title: "L'inférence bayésienne",
      channel: "ScienceÉtonnante",
      url: "https://www.youtube.com/watch?v=QbKw0_v2clo",
      color: "text-cyan-400"
    }
  ],
  es: [
    {
      title: "Teorema de Bayes | Introducción",
      channel: "Matemáticas Profe Alex",
      url: "https://www.youtube.com/watch?v=bDfCURXoKkU",
      color: "text-red-400"
    },
    {
      title: "TEOREMA DE BAYES - Explicación Completa",
      channel: "Pasos por ingeniería",
      url: "https://www.youtube.com/watch?v=cgRmOpzgotI",
      color: "text-yellow-400"
    }
  ]
};

interface Evidence {
  id: number;
  likelihood: string;
  falsePositive: string;
}

export default function BayesTheorem() {
  const { language, t } = useQuestLanguage();
  const [prior, setPrior] = useState<string>('50');
  const [evidences, setEvidences] = useState<Evidence[]>([
    { id: 1, likelihood: '80', falsePositive: '10' }
  ]);
  const [results, setResults] = useState<{ intermediates: number[]; final: number } | null>(null);
  const [showGuide, setShowGuide] = useState(false);

  const addEvidence = () => {
    if (evidences.length < 5) {
      setEvidences([...evidences, { 
        id: Date.now(), 
        likelihood: '50', 
        falsePositive: '50' 
      }]);
    }
  };

  const removeEvidence = (id: number) => {
    if (evidences.length > 1) {
      setEvidences(evidences.filter(e => e.id !== id));
    }
  };

  const updateEvidence = (id: number, field: 'likelihood' | 'falsePositive', value: string) => {
    setEvidences(evidences.map(e => 
      e.id === id ? { ...e, [field]: value } : e
    ));
  };

  const calculate = () => {
    let currentPrior = parseFloat(prior) / 100;
    if (isNaN(currentPrior)) return;

    const intermediates: number[] = [];

    for (const evidence of evidences) {
      const p_e_h = parseFloat(evidence.likelihood) / 100;
      const p_e_not_h = parseFloat(evidence.falsePositive) / 100;

      if (isNaN(p_e_h) || isNaN(p_e_not_h)) return;

      const p_e = p_e_h * currentPrior + p_e_not_h * (1 - currentPrior);
      currentPrior = (p_e_h * currentPrior) / p_e;
      intermediates.push(Math.round(currentPrior * 1000) / 10);
    }

    setResults({
      intermediates,
      final: intermediates[intermediates.length - 1]
    });
  };

  const currentVideos = videoResources[language] || videoResources['en'];

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
          <p><strong>1.</strong> {t(translations.guideStep1)}</p>
          <p><strong>2.</strong> {t(translations.guideStep2)}</p>
          <p><strong>3.</strong> {t(translations.guideStep3)}</p>
          <p><strong>4.</strong> {t(translations.guideStep4)}</p>
        </div>
      )}

      {/* Calculator */}
      <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30">
        <h4 className="text-sm font-medium flex items-center gap-2 text-green-400 mb-4">
          <Calculator className="w-4 h-4" />
          {t(translations.calculator)}
        </h4>

        <div className="space-y-4">
          {/* Prior */}
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

          {/* Evidence sections */}
          {evidences.map((evidence, index) => (
            <div 
              key={evidence.id} 
              className="p-3 rounded-lg bg-black/20 border border-white/10 space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-white/70">
                  {t(translations.evidence)} {index + 1}
                </span>
                {evidences.length > 1 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeEvidence(evidence.id)}
                    className="h-6 px-2 text-red-400 hover:text-red-300 hover:bg-red-500/10"
                  >
                    <Trash2 className="w-3 h-3 mr-1" />
                    <span className="text-xs">{t(translations.removeEvidence)}</span>
                  </Button>
                )}
              </div>

              <div>
                <Label className="text-xs">{t(translations.likelihood)}</Label>
                <Input 
                  type="number" 
                  min="0" 
                  max="100" 
                  value={evidence.likelihood}
                  onChange={(e) => updateEvidence(evidence.id, 'likelihood', e.target.value)}
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
                  value={evidence.falsePositive}
                  onChange={(e) => updateEvidence(evidence.id, 'falsePositive', e.target.value)}
                  className="mt-1"
                />
                <p className="text-xs text-muted-foreground mt-1">{t(translations.falsePositiveDesc)}</p>
              </div>

              {/* Show intermediate result for this evidence */}
              {results && results.intermediates[index] !== undefined && (
                <div className="p-2 rounded bg-green-500/10 border border-green-500/30 text-center">
                  <p className="text-xs text-muted-foreground">
                    {t(translations.intermediateResult)} {index + 1}:
                  </p>
                  <p className="text-lg font-bold text-green-400">{results.intermediates[index]}%</p>
                </div>
              )}
            </div>
          ))}

          {/* Add Evidence Button */}
          {evidences.length < 5 && (
            <Button
              variant="outline"
              size="sm"
              onClick={addEvidence}
              className="w-full border-dashed"
            >
              <Plus className="w-4 h-4 mr-2" />
              {t(translations.addEvidence)}
            </Button>
          )}

          <Button onClick={calculate} className="w-full bg-green-600 hover:bg-green-700">
            {t(translations.calculate)}
          </Button>

          {results !== null && (
            <div className="p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-center">
              <p className="text-xs text-muted-foreground">{t(translations.posterior)}</p>
              <p className="text-3xl font-bold text-green-400">{results.final}%</p>
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
          <li>• <strong>{t(translations.tipMultiEvidence)}</strong> {t(translations.tipMultiEvidenceDesc)}</li>
        </ul>
      </div>

      {/* Video Resources - Language specific */}
      <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30">
        <h4 className="text-sm font-medium flex items-center gap-2 text-red-400 mb-3">
          <Youtube className="w-4 h-4" />
          {t(translations.learnMore)}
        </h4>
        <div className="space-y-2">
          {currentVideos.map((video, index) => (
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
                  {video.title}
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
