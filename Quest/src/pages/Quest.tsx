import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { QuestProvider, useQuest } from '@/contexts/QuestContext';
import StarField from '@/components/StarField';
import FlowchartCard from '@/components/FlowchartCard';
import CustomFlowchartOverview from '@/components/CustomFlowchartOverview';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { Button } from '@/components/ui/button';
import { Map, RotateCcw, ExternalLink, Home } from 'lucide-react';
import { Link } from 'wouter';

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
      {/* Star field background */}
      <StarField />

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between p-4">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-foreground">
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">Home</span>
            </Button>
          </Link>

          <div className="flex items-center gap-2">
            {/* Progress indicator */}
            <div className="hidden sm:flex items-center gap-1 mr-4">
              <span className="text-xs text-muted-foreground">Steps: {history.length + 1}</span>
            </div>

            <LanguageSwitcher />

            {/* Reset button */}
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

        {/* Card area */}
        <main className="flex-1 flex items-center justify-center p-4 pb-24">
          <AnimatePresence mode="wait">
            {currentNode && (
              <FlowchartCard key={currentNode.id} node={currentNode} />
            )}
          </AnimatePresence>
        </main>

        {/* Floating zoom button */}
        <button
          onClick={handleZoomOut}
          className="zoom-btn"
          title="Zoom out to see overview"
        >
          <Map className="w-5 h-5 text-primary" />
        </button>

        {/* Back to main site button */}
        <a
          href="https://www.objective-reality.info"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 left-4 z-50 flex items-center gap-2 px-3 py-2 rounded-full text-xs text-muted-foreground hover:text-foreground transition-colors glass-card"
        >
          <ExternalLink className="w-3 h-3" />
          <span className="hidden sm:inline">objective-reality.info</span>
        </a>

        {/* React Flow Overview modal */}
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
    <LanguageProvider>
      <QuestProvider>
        <QuestContent />
      </QuestProvider>
    </LanguageProvider>
  );
}
