import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useQuest } from '@/contexts/QuestContext';
import { nodes, subgraphs, getNodesInSubgraph, SubgraphId, FlowchartNode } from '@/data/flowchartData';
import { X, ZoomIn } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FlowchartOverviewProps {
  level: 'subgraph' | 'full';
  onClose: () => void;
  onZoomIn: () => void;
}

export default function FlowchartOverview({ level, onClose, onZoomIn }: FlowchartOverviewProps) {
  const { t } = useLanguage();
  const { currentNodeId, goToNode, currentNode } = useQuest();

  const currentSubgraph = currentNode?.subgraph;

  const handleNodeClick = (nodeId: string) => {
    goToNode(nodeId);
    onClose();
  };

  const getNodeColor = (node: FlowchartNode) => {
    if (node.id === currentNodeId) return '#22C55E';
    if (node.categoryColor) return node.categoryColor;
    switch (node.type) {
      case 'start': return '#9333EA';
      case 'decision': return '#EAB308';
      case 'end': return '#22C55E';
      default: return '#6B7280';
    }
  };

  const renderSubgraphView = () => {
    if (!currentSubgraph) return null;
    const subgraph = subgraphs.find(s => s.id === currentSubgraph);
    const nodesInSubgraph = getNodesInSubgraph(currentSubgraph);

    return (
      <div className="space-y-4">
        <div 
          className="p-3 rounded-lg text-center font-bold"
          style={{ backgroundColor: subgraph?.bgColor, color: subgraph?.color }}
        >
          {subgraph && t(subgraph.title)}
        </div>
        <div className="grid grid-cols-2 gap-2">
          {nodesInSubgraph.map(node => (
            <button
              key={node.id}
              onClick={() => handleNodeClick(node.id)}
              className={`p-3 rounded-lg text-xs text-left transition-all hover:scale-105 ${
                node.id === currentNodeId ? 'ring-2 ring-green-500 ring-offset-2 ring-offset-background' : ''
              }`}
              style={{ 
                backgroundColor: `${getNodeColor(node)}20`,
                borderColor: getNodeColor(node),
                borderWidth: '1px'
              }}
            >
              <div className="font-medium truncate" style={{ color: getNodeColor(node) }}>
                {t(node.title)}
              </div>
              {node.id === currentNodeId && (
                <div className="text-green-400 text-[10px] mt-1">📍 You are here</div>
              )}
            </button>
          ))}
        </div>
      </div>
    );
  };

  const renderFullView = () => {
    return (
      <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
        {subgraphs.map(subgraph => {
          const nodesInSubgraph = getNodesInSubgraph(subgraph.id);
          const isCurrentSubgraph = subgraph.id === currentSubgraph;

          return (
            <div 
              key={subgraph.id}
              className={`rounded-lg overflow-hidden ${isCurrentSubgraph ? 'ring-2 ring-green-500' : ''}`}
            >
              <div 
                className="p-2 text-xs font-bold"
                style={{ backgroundColor: subgraph.bgColor, color: subgraph.color }}
              >
                {t(subgraph.title)}
                {isCurrentSubgraph && <span className="ml-2">📍</span>}
              </div>
              <div className="p-2 grid grid-cols-3 gap-1 bg-black/30">
                {nodesInSubgraph.map(node => (
                  <button
                    key={node.id}
                    onClick={() => handleNodeClick(node.id)}
                    className={`p-1.5 rounded text-[10px] text-left transition-all hover:scale-105 ${
                      node.id === currentNodeId ? 'ring-1 ring-green-500' : ''
                    }`}
                    style={{ 
                      backgroundColor: `${getNodeColor(node)}30`,
                    }}
                  >
                    <div className="truncate" style={{ color: getNodeColor(node) }}>
                      {node.id === currentNodeId ? '📍 ' : ''}{t(node.title).substring(0, 15)}...
                    </div>
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="glass-card rounded-2xl p-6 w-full max-w-2xl max-h-[80vh] overflow-hidden"
          onClick={e => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--font-display)' }}>
              {level === 'subgraph' ? 'Current Section' : 'Full Flowchart Overview'}
            </h3>
            <div className="flex items-center gap-2">
              {level === 'subgraph' && (
                <Button variant="ghost" size="sm" onClick={onZoomIn}>
                  <ZoomIn className="w-4 h-4 mr-1" />
                  Full View
                </Button>
              )}
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Content */}
          {level === 'subgraph' ? renderSubgraphView() : renderFullView()}

          {/* Legend */}
          <div className="mt-4 pt-4 border-t border-border flex flex-wrap gap-3 text-xs">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded bg-purple-500" />
              <span>Start</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded bg-yellow-500" />
              <span>Decision</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded bg-gray-500" />
              <span>Process</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded bg-green-500" />
              <span>Current / End</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
