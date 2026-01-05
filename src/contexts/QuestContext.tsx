import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { getNodeById, FlowchartNode } from '@/data/flowchartData';

interface HistoryEntry {
  nodeId: string;
  timestamp: number;
  choiceLabel?: string;
}

interface QuestContextType {
  currentNodeId: string;
  history: HistoryEntry[];
  goToNode: (nodeId: string, choiceLabel?: string) => void;
  goBack: () => void;
  canGoBack: boolean;
  resetQuest: () => void;
  currentNode: FlowchartNode | undefined;
}

const QuestContext = createContext<QuestContextType | undefined>(undefined);

const STORAGE_KEY = 'quest-for-reality-progress';

export function QuestProvider({ children }: { children: React.ReactNode }) {
  const [currentNodeId, setCurrentNodeId] = useState<string>('StartQuest');
  const [history, setHistory] = useState<HistoryEntry[]>([]);

  // Load progress from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const { currentNodeId: savedNode, history: savedHistory } = JSON.parse(saved);
        if (savedNode && getNodeById(savedNode)) {
          setCurrentNodeId(savedNode);
          setHistory(savedHistory || []);
        }
      }
    } catch (e) {
      console.error('Failed to load progress:', e);
    }
  }, []);

  // Save progress to localStorage on change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ currentNodeId, history }));
    } catch (e) {
      console.error('Failed to save progress:', e);
    }
  }, [currentNodeId, history]);

  const goToNode = useCallback((nodeId: string, choiceLabel?: string) => {
    setHistory(prev => [...prev, { nodeId: currentNodeId, timestamp: Date.now(), choiceLabel }]);
    setCurrentNodeId(nodeId);
  }, [currentNodeId]);

  const goBack = useCallback(() => {
    if (history.length > 0) {
      const newHistory = [...history];
      const lastEntry = newHistory.pop();
      if (lastEntry) {
        setHistory(newHistory);
        setCurrentNodeId(lastEntry.nodeId);
      }
    }
  }, [history]);

  const resetQuest = useCallback(() => {
    setCurrentNodeId('StartQuest');
    setHistory([]);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  const currentNode = getNodeById(currentNodeId);
  const canGoBack = history.length > 0;

  return (
    <QuestContext.Provider value={{
      currentNodeId,
      history,
      goToNode,
      goBack,
      canGoBack,
      resetQuest,
      currentNode
    }}>
      {children}
    </QuestContext.Provider>
  );
}

export function useQuest() {
  const context = useContext(QuestContext);
  if (context === undefined) {
    throw new Error('useQuest must be used within a QuestProvider');
  }
  return context;
}
