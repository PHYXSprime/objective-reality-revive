import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { QuestLanguageProvider } from '@/contexts/QuestLanguageContext';
import { QuestProvider, useQuest } from '@/contexts/QuestContext';
import StarField from '@/components/quest/StarField';
import FlowchartCard from '@/components/quest/FlowchartCard';
import CustomFlowchartOverview from '@/components/quest/CustomFlowchartOverview';

function QuestContent() {
  const { currentNode, resetQuest, goToNode } = useQuest();
  const [viewMode, setViewMode] = useState<'section' | 'full' | null>(null);

  const handleZoomOut = () => {
    if (viewMode === null) {
      setViewMode('section');
    } else if (viewMode === 'section') {
      setViewMode('full');
    }
  };

  const handleCloseOverview = () => {
    setViewMode(null);
  };

  const handleNodeClick = (nodeId: string) => {
    if (nodeId === '__FULL_VIEW__') {
      setViewMode('full');
    } else {
      goToNode(nodeId);
      setViewMode(null);
    }
  };

  return (
    <div className="min-h-screen relative overflow-y-auto overflow-x-hidden">
      <StarField />

      <div className="relative z-10 px-4 py-2">
        {/* Cards - no forced height, natural content flow */}
        <AnimatePresence mode="wait">
          {currentNode && (
            <FlowchartCard 
              key={currentNode.id} 
              node={currentNode} 
              onZoomOut={handleZoomOut}
              onReset={resetQuest}
            />
          )}
        </AnimatePresence>
      </div>

      {viewMode && currentNode && (
        <CustomFlowchartOverview
          currentNodeId={currentNode.id}
          onNodeClick={handleNodeClick}
          onClose={handleCloseOverview}
          viewMode={viewMode}
          currentSubgraph={currentNode.subgraph}
        />
      )}
    </div>
  );
}

export default function Quest() {
  return (
    <QuestLanguageProvider>
      <QuestProvider>
        <QuestContent />
      </QuestProvider>
    </QuestLanguageProvider>
  );
}
