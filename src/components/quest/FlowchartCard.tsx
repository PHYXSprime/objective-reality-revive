import { motion } from 'framer-motion';
import { useQuestLanguage } from '@/contexts/QuestLanguageContext';
import { useQuest } from '@/contexts/QuestContext';
import { FlowchartNode, getSubgraphById } from '@/data/flowchartData';
import { Button } from '@/components/ui/button';
import { ArrowRight, Lightbulb, BookOpen, ExternalLink, ChevronLeft } from 'lucide-react';
import BayesTheorem from './BayesTheorem';

interface FlowchartCardProps {
  node: FlowchartNode;
}

export default function FlowchartCard({ node }: FlowchartCardProps) {
  const { t, language } = useQuestLanguage();
  const { goToNode, goBack, canGoBack } = useQuest();
  const subgraph = getSubgraphById(node.subgraph);

  const handleOptionClick = (nextNodeId: string, label: string) => {
    goToNode(nextNodeId, label);
  };

  const handleContinue = () => {
    if (node.nextNodeId) {
      goToNode(node.nextNodeId);
    }
  };

  const getNodeTypeStyle = () => {
    switch (node.type) {
      case 'start':
        return 'border-purple-500/50 shadow-purple-500/20';
      case 'decision':
        return 'border-yellow-500/50 shadow-yellow-500/20';
      case 'category':
        return `border-[${node.categoryColor}]/50`;
      case 'database':
        return `border-[${node.categoryColor}]/50`;
      case 'end':
        return 'border-green-500/50 shadow-green-500/20';
      default:
        return 'border-primary/30';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="w-full max-w-lg mx-auto"
    >
      <div className={`quest-glass-card quest-glass-card-active rounded-2xl overflow-hidden ${getNodeTypeStyle()}`}>
        {/* Subgraph indicator */}
        {subgraph && (
          <div 
            className="px-4 py-2 text-xs font-medium"
            style={{ backgroundColor: subgraph.bgColor, color: subgraph.color }}
          >
            {t(subgraph.title)}
          </div>
        )}

        {/* Main content */}
        <div className="p-6 space-y-4">
          {/* Title */}
          <h2 className="text-2xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>
            {t(node.title)}
          </h2>

          {/* Description */}
          {node.description && (
            <p className="text-muted-foreground leading-relaxed">
              {t(node.description)}
            </p>
          )}

          {/* Special content: Bayes Theorem */}
          {node.specialContent === 'bayes' && (
            <div className="mt-4">
              <BayesTheorem />
            </div>
          )}

          {/* Special content: Confidence slider info */}
          {node.specialContent === 'confidence' && (
            <div className="mt-4 p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
              <p className="text-sm text-cyan-400 mb-2">Confidence Scale:</p>
              <div className="flex justify-between text-xs">
                <span className="text-red-400">0%</span>
                <span className="text-orange-400">40%</span>
                <span className="text-yellow-400">60%</span>
                <span className="text-green-400">80%</span>
                <span className="text-green-500">100%</span>
              </div>
              <div className="h-2 mt-1 rounded-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500" />
            </div>
          )}

          {/* Tips */}
          {node.tips && (node.tips.en || node.tips.de || node.tips.fr || node.tips.es) && (
            <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/30">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-yellow-400" />
                <span className="text-sm font-medium text-yellow-400">
                  {t({ en: 'Tips', de: 'Tipps', fr: 'Conseils', es: 'Consejos' })}
                </span>
              </div>
              <ul className="space-y-1 text-sm text-muted-foreground">
                {(node.tips[language as keyof typeof node.tips] || node.tips.en || []).map((tip: string, i: number) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-yellow-400">•</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Examples */}
          {node.examples && (node.examples.en || node.examples.de || node.examples.fr || node.examples.es) && (
            <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/30">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium text-blue-400">
                  {t({ en: 'Examples', de: 'Beispiele', fr: 'Exemples', es: 'Ejemplos' })}
                </span>
              </div>
              <ul className="space-y-1 text-sm text-muted-foreground italic">
                {(node.examples[language as keyof typeof node.examples] || node.examples.en || []).map((example: string, i: number) => (
                  <li key={i}>{example}</li>
                ))}
              </ul>
            </div>
          )}

          {/* External links */}
          {node.links && node.links.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {node.links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                >
                  <ExternalLink className="w-3 h-3" />
                  {link.title}
                </a>
              ))}
            </div>
          )}

          {/* Category color indicator */}
          {node.categoryColor && (node.type === 'category' || node.type === 'database') && (
            <div 
              className="h-2 rounded-full mt-4"
              style={{ backgroundColor: node.categoryColor }}
            />
          )}
        </div>

        {/* Actions */}
        <div className="px-6 pb-6 space-y-3">
          {/* Decision options */}
          {node.options && node.options.length > 0 && (
            <div className="grid gap-2">
              {node.options.map((option, i) => (
                <Button
                  key={i}
                  onClick={() => handleOptionClick(option.nextNodeId, t(option.label))}
                  className={`w-full justify-center ${
                    option.style === 'yes' 
                      ? 'quest-decision-btn' 
                      : option.style === 'no'
                      ? 'quest-decision-btn quest-decision-btn-no'
                      : 'quest-decision-btn'
                  }`}
                  variant="outline"
                >
                  {t(option.label)}
                </Button>
              ))}
            </div>
          )}

          {/* Continue button for process nodes */}
          {!node.options && node.nextNodeId && node.type !== 'end' && (
            <Button
              onClick={handleContinue}
              className="w-full quest-decision-btn"
              variant="outline"
            >
              {t({ en: 'Continue', de: 'Weiter', fr: 'Continuer', es: 'Continuar' })}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          )}

          {/* Back button */}
          {canGoBack && (
            <Button
              onClick={goBack}
              variant="ghost"
              className="w-full text-muted-foreground hover:text-foreground"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              {t({ en: 'Go Back', de: 'Zurück', fr: 'Retour', es: 'Volver' })}
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
