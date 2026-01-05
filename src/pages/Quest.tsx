import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { QuestLanguageProvider, useQuestLanguage } from '@/contexts/QuestLanguageContext';
import { QuestProvider, useQuest } from '@/contexts/QuestContext';
import StarField from '@/components/quest/StarField';
import FlowchartCard from '@/components/quest/FlowchartCard';
import CustomFlowchartOverview from '@/components/quest/CustomFlowchartOverview';
import LanguageSwitcher from '@/components/quest/LanguageSwitcher';
import { Button } from '@/components/ui/button';
import { Map, RotateCcw, ExternalLink, Home } from 'lucide-react';

function QuestContent() {
  const { currentNode, resetQuest, history, goToNode } = useQuest();
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
    <div className="min-h-screen relative overflow-hidden">
      <StarField />

      <div className="relative z-10 min-h-screen flex flex-col">
        <header className="flex items-center justify-between p-4">
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-foreground">
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">Home</span>
            </Button>
          </Link>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-1 mr-4">
              <span className="text-xs text-muted-foreground">Steps: {history.length + 1}</span>
            </div>

            <LanguageSwitcher />

            <Button 
              variant="ghost" 
              size="sm" 
              onClick={resetQuest}
              className="text-muted-foreground hover:text-foreground"
            >
              <RotateCcw className="w-4 h-4" />
            </Button>
          </div>
        </header>

        <main className="flex-1 flex items-center justify-center p-4 pb-24">
          <AnimatePresence mode="wait">
            {currentNode && (
              <FlowchartCard key={currentNode.id} node={currentNode} />
            )}
          </AnimatePresence>
        </main>

        <button
          onClick={handleZoomOut}
          className="quest-zoom-btn"
          title="Zoom out to see overview"
        >
          <Map className="w-5 h-5 text-primary" />
        </button>

        <a
          href="https://www.objective-reality.info"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 left-4 z-50 flex items-center gap-2 px-3 py-2 rounded-full text-xs text-muted-foreground hover:text-foreground transition-colors quest-glass-card"
        >
          <ExternalLink className="w-3 h-3" />
          <span className="hidden sm:inline">objective-reality.info</span>
        </a>

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
