import { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import {
  ReactFlow,
  Node,
  Edge,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  MarkerType,
  useReactFlow,
  ReactFlowProvider,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import dagre from '@dagrejs/dagre';
import { nodes as flowchartNodes, subgraphs, type FlowchartNode } from '@/data/flowchartData';
import { useLanguage } from '@/contexts/LanguageContext';

interface ReactFlowOverviewProps {
  currentNodeId: string;
  onNodeClick: (nodeId: string) => void;
  onClose: () => void;
  viewMode: 'section' | 'full';
  currentSubgraph: string;
}

// Dagre layout function
const getLayoutedElements = (nodes: Node[], edges: Edge[], direction = 'TB') => {
  const dagreGraph = new dagre.graphlib.Graph();
  dagreGraph.setDefaultEdgeLabel(() => ({}));

  const nodeWidth = 200;
  const nodeHeight = 70;

  dagreGraph.setGraph({ 
    rankdir: direction, 
    nodesep: 100,
    ranksep: 120,
    edgesep: 50,
    marginx: 100,
    marginy: 100,
  });

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  const layoutedNodes = nodes.map((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    return {
      ...node,
      position: {
        x: nodeWithPosition.x - nodeWidth / 2,
        y: nodeWithPosition.y - nodeHeight / 2,
      },
    };
  });

  return { nodes: layoutedNodes, edges };
};

// Get node color based on type
const getNodeColor = (type: string, isCurrent: boolean) => {
  if (isCurrent) return { bg: '#22c55e', border: '#86efac', text: '#ffffff' };
  
  switch (type) {
    case 'start': return { bg: '#9333ea', border: '#c084fc', text: '#ffffff' };
    case 'decision': return { bg: '#eab308', border: '#fde047', text: '#000000' };
    case 'endpoint': return { bg: '#ef4444', border: '#fca5a5', text: '#ffffff' };
    default: return { bg: '#374151', border: '#6b7280', text: '#ffffff' };
  }
};

function FlowchartContent({
  currentNodeId,
  onNodeClick,
  onClose,
  viewMode,
  currentSubgraph,
}: ReactFlowOverviewProps) {
  const { language } = useLanguage();
  const { fitView } = useReactFlow();
  const initialFitDone = useRef(false);

  // Filter nodes based on view mode
  const filteredNodes = useMemo(() => {
    if (viewMode === 'full') {
      return flowchartNodes;
    }
    return flowchartNodes.filter(node => node.subgraph === currentSubgraph);
  }, [viewMode, currentSubgraph]);

  // Generate React Flow nodes
  const initialNodes: Node[] = useMemo(() => {
    return filteredNodes.map((node: FlowchartNode) => {
      const isCurrent = node.id === currentNodeId;
      const colors = getNodeColor(node.type, isCurrent);
      
      return {
        id: node.id,
        position: { x: 0, y: 0 },
        data: {
          label: node.title[language] || node.title['en'],
        },
        style: {
          background: colors.bg,
          border: `3px solid ${colors.border}`,
          borderRadius: node.type === 'decision' ? '12px' : '8px',
          padding: '12px 16px',
          color: colors.text,
          fontSize: '13px',
          fontWeight: isCurrent ? 700 : 500,
          width: 180,
          textAlign: 'center' as const,
          boxShadow: isCurrent 
            ? '0 0 30px rgba(34, 197, 94, 0.8), 0 0 60px rgba(34, 197, 94, 0.4)' 
            : '0 4px 12px rgba(0,0,0,0.3)',
          cursor: 'pointer',
        },
      };
    });
  }, [filteredNodes, currentNodeId, language]);

  // Generate edges with VERY visible styling
  const initialEdges: Edge[] = useMemo(() => {
    const edges: Edge[] = [];
    const nodeIds = new Set(filteredNodes.map((n: FlowchartNode) => n.id));

    filteredNodes.forEach((node: FlowchartNode) => {
      // Process nodes with nextNodeId
      if (node.nextNodeId && nodeIds.has(node.nextNodeId)) {
        edges.push({
          id: `e-${node.id}-${node.nextNodeId}`,
          source: node.id,
          target: node.nextNodeId,
          type: 'smoothstep',
          animated: true,
          style: { 
            stroke: '#22c55e',
            strokeWidth: 4,
          },
          markerEnd: {
            type: MarkerType.ArrowClosed,
            color: '#22c55e',
            width: 20,
            height: 20,
          },
        });
      }

      // Decision nodes with options
      if (node.options) {
        node.options.forEach((option, index) => {
          if (nodeIds.has(option.nextNodeId)) {
            let edgeColor = '#00bfff';
            if (option.style === 'yes' || option.label.en?.toLowerCase() === 'yes') {
              edgeColor = '#22c55e';
            } else if (option.style === 'no' || option.label.en?.toLowerCase() === 'no') {
              edgeColor = '#ef4444';
            }
            
            edges.push({
              id: `e-${node.id}-${option.nextNodeId}-${index}`,
              source: node.id,
              target: option.nextNodeId,
              type: 'smoothstep',
              animated: true,
              label: option.label[language] || option.label['en'],
              labelStyle: { 
                fill: '#ffffff', 
                fontWeight: 700, 
                fontSize: 12,
              },
              labelBgStyle: { 
                fill: edgeColor,
                fillOpacity: 0.9,
              },
              labelBgPadding: [8, 6] as [number, number],
              labelBgBorderRadius: 6,
              style: { 
                stroke: edgeColor,
                strokeWidth: 4,
              },
              markerEnd: {
                type: MarkerType.ArrowClosed,
                color: edgeColor,
                width: 20,
                height: 20,
              },
            });
          }
        });
      }
    });

    return edges;
  }, [filteredNodes, language]);

  // Apply dagre layout
  const { nodes: layoutedNodes, edges: layoutedEdges } = useMemo(() => {
    return getLayoutedElements(initialNodes, initialEdges, 'TB');
  }, [initialNodes, initialEdges]);

  const [nodes, setNodes, onNodesChange] = useNodesState(layoutedNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedEdges);

  // Set nodes and edges after layout
  useEffect(() => {
    setNodes(layoutedNodes);
    setEdges(layoutedEdges);
  }, [layoutedNodes, layoutedEdges, setNodes, setEdges]);

  // Auto-fit view
  useEffect(() => {
    if (nodes.length > 0 && !initialFitDone.current) {
      const timer = setTimeout(() => {
        fitView({ 
          padding: 0.15, 
          duration: 500,
          maxZoom: 1,
        });
        initialFitDone.current = true;
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [fitView, nodes.length]);

  // Reset fit flag when view mode changes
  useEffect(() => {
    initialFitDone.current = false;
  }, [viewMode]);

  const handleNodeClick = useCallback((_: React.MouseEvent, node: Node) => {
    onNodeClick(node.id);
  }, [onNodeClick]);

  const currentSubgraphData = subgraphs.find(sg => sg.id === currentSubgraph);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95">
      <div className="relative w-full h-full">
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-4 bg-gradient-to-b from-black via-black/90 to-transparent">
          <div className="flex items-center gap-4">
            <div className="text-4xl">{viewMode === 'section' ? '📂' : '🗺️'}</div>
            <div>
              <h2 className="text-2xl font-bold text-green-400 font-mono">
                {viewMode === 'section' 
                  ? currentSubgraphData?.title[language] || 'Current Section'
                  : 'Full Flowchart Overview'
                }
              </h2>
              <p className="text-sm text-gray-400">
                {nodes.length} nodes • {edges.length} connections • Click any node to jump there
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            {viewMode === 'section' && (
              <button
                onClick={() => onNodeClick('__FULL_VIEW__')}
                className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-sm font-bold transition-all border-2 border-purple-400 shadow-lg shadow-purple-500/30"
              >
                🔍 Full View
              </button>
            )}
            <button
              onClick={onClose}
              className="px-5 py-3 bg-red-600 hover:bg-red-500 text-white rounded-xl text-sm font-bold transition-all border-2 border-red-400"
            >
              ✕ Close
            </button>
          </div>
        </div>

        {/* YOU ARE HERE indicator */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 z-30">
          <div className="bg-green-500 text-black font-black text-lg px-6 py-3 rounded-full shadow-lg shadow-green-500/50 animate-pulse flex items-center gap-2">
            <span className="text-2xl">📍</span>
            Look for the GLOWING GREEN node
          </div>
        </div>

        {/* React Flow Canvas */}
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onNodeClick={handleNodeClick}
          fitView
          fitViewOptions={{ padding: 0.15, maxZoom: 1 }}
          minZoom={0.05}
          maxZoom={2}
          defaultEdgeOptions={{
            type: 'smoothstep',
            animated: true,
            style: { stroke: '#22c55e', strokeWidth: 4 },
            markerEnd: {
              type: MarkerType.ArrowClosed,
              color: '#22c55e',
              width: 20,
              height: 20,
            },
          }}
          style={{ background: '#000000' }}
        >
          <Controls 
            position="bottom-left"
            style={{ 
              background: 'rgba(0,0,0,0.8)', 
              border: '2px solid #22c55e',
              borderRadius: '12px',
            }}
          />
          <MiniMap 
            position="bottom-right"
            style={{ 
              background: 'rgba(0,0,0,0.9)', 
              border: '2px solid #22c55e',
              borderRadius: '12px',
            }}
            nodeColor={(node) => {
              if (node.id === currentNodeId) return '#22c55e';
              const flowNode = flowchartNodes.find(n => n.id === node.id);
              if (!flowNode) return '#374151';
              const t = flowNode.type as string;
              if (t === 'start') return '#9333ea';
              if (t === 'decision') return '#eab308';
              if (t === 'endpoint') return '#ef4444';
              return '#374151';
            }}
            maskColor="rgba(0,0,0,0.8)"
          />
        </ReactFlow>

        {/* Legend */}
        <div className="absolute bottom-4 left-4 z-20 bg-black/90 border-2 border-green-500/50 rounded-xl p-4">
          <h3 className="text-green-400 font-bold mb-3 text-sm">LEGEND</h3>
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-green-500 shadow-lg shadow-green-500/50" />
              <span className="text-white">YOU ARE HERE</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-purple-500" />
              <span className="text-gray-300">Start</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-yellow-500" />
              <span className="text-gray-300">Decision</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-gray-500" />
              <span className="text-gray-300">Process</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-red-500" />
              <span className="text-gray-300">Endpoint</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-1 bg-green-500 rounded" />
              <span className="text-gray-300">Arrow</span>
            </div>
          </div>
        </div>

        {/* Navigation help */}
        <div className="absolute bottom-4 right-24 z-20 bg-black/90 border-2 border-cyan-500/50 rounded-xl p-4">
          <h3 className="text-cyan-400 font-bold mb-2 text-sm">NAVIGATION</h3>
          <div className="space-y-1 text-xs text-gray-300">
            <p>👆 Click any node to jump there</p>
            <p>🔍 Scroll to zoom in/out</p>
            <p>✋ Drag to pan around</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ReactFlowOverview(props: ReactFlowOverviewProps) {
  return (
    <ReactFlowProvider>
      <FlowchartContent {...props} />
    </ReactFlowProvider>
  );
}
