import { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import dagre from '@dagrejs/dagre';
import { nodes as flowchartNodes, subgraphs, type FlowchartNode } from '@/data/flowchartData';
import { useQuestLanguage } from '@/contexts/QuestLanguageContext';

interface CustomFlowchartOverviewProps {
  currentNodeId: string;
  onNodeClick: (nodeId: string) => void;
  onClose: () => void;
  viewMode: 'section' | 'full';
  currentSubgraph: string;
}

interface LayoutNode {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  title: string;
  type: string;
  isCurrent: boolean;
}

interface LayoutEdge {
  id: string;
  sourceId: string;
  targetId: string;
  sourceX: number;
  sourceY: number;
  targetX: number;
  targetY: number;
  label?: string;
  color: string;
}

const getNodeColor = (type: string, isCurrent: boolean) => {
  if (isCurrent) return { bg: '#22c55e', border: '#86efac', text: '#ffffff', glow: 'rgba(34, 197, 94, 0.6)' };
  
  switch (type) {
    case 'start': return { bg: '#9333ea', border: '#c084fc', text: '#ffffff', glow: 'none' };
    case 'decision': return { bg: '#eab308', border: '#fde047', text: '#000000', glow: 'none' };
    case 'endpoint': return { bg: '#ef4444', border: '#fca5a5', text: '#ffffff', glow: 'none' };
    default: return { bg: '#374151', border: '#6b7280', text: '#ffffff', glow: 'none' };
  }
};

export default function CustomFlowchartOverview({
  currentNodeId,
  onNodeClick,
  onClose,
  viewMode,
  currentSubgraph,
}: CustomFlowchartOverviewProps) {
  const { language } = useQuestLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({ x: 0, y: 0, scale: 0.15 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isInitialized, setIsInitialized] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const NODE_WIDTH = 160;
  const NODE_HEIGHT = 50;

  const filteredNodes = useMemo(() => {
    if (viewMode === 'full') {
      return flowchartNodes;
    }
    return flowchartNodes.filter(node => node.subgraph === currentSubgraph);
  }, [viewMode, currentSubgraph]);

  const { layoutNodes, layoutEdges, bounds } = useMemo(() => {
    const dagreGraph = new dagre.graphlib.Graph();
    dagreGraph.setDefaultEdgeLabel(() => ({}));
    dagreGraph.setGraph({ 
      rankdir: 'TB', 
      nodesep: 40,
      ranksep: 60,
      edgesep: 20,
      marginx: 30,
      marginy: 30,
    });

    filteredNodes.forEach((node) => {
      dagreGraph.setNode(node.id, { width: NODE_WIDTH, height: NODE_HEIGHT });
    });

    const edges: { source: string; target: string; label?: string; color: string }[] = [];
    const nodeIds = new Set(filteredNodes.map(n => n.id));

    filteredNodes.forEach((node) => {
      if (node.nextNodeId && nodeIds.has(node.nextNodeId)) {
        dagreGraph.setEdge(node.id, node.nextNodeId);
        edges.push({ source: node.id, target: node.nextNodeId, color: '#22c55e' });
      }

      if (node.options) {
        node.options.forEach((option) => {
          if (nodeIds.has(option.nextNodeId)) {
            dagreGraph.setEdge(node.id, option.nextNodeId);
            let edgeColor = '#00bfff';
            if (option.style === 'yes' || option.label.en?.toLowerCase() === 'yes') {
              edgeColor = '#22c55e';
            } else if (option.style === 'no' || option.label.en?.toLowerCase() === 'no') {
              edgeColor = '#ef4444';
            }
            edges.push({ 
              source: node.id, 
              target: option.nextNodeId, 
              label: option.label[language] || option.label['en'],
              color: edgeColor 
            });
          }
        });
      }
    });

    dagre.layout(dagreGraph);

    const layoutNodes: LayoutNode[] = filteredNodes.map((node) => {
      const pos = dagreGraph.node(node.id);
      return {
        id: node.id,
        x: pos.x - NODE_WIDTH / 2,
        y: pos.y - NODE_HEIGHT / 2,
        width: NODE_WIDTH,
        height: NODE_HEIGHT,
        title: node.title[language] || node.title['en'],
        type: node.type,
        isCurrent: node.id === currentNodeId,
      };
    });

    const layoutEdges: LayoutEdge[] = edges.map((edge, index) => {
      const sourceNode = dagreGraph.node(edge.source);
      const targetNode = dagreGraph.node(edge.target);
      return {
        id: `edge-${index}`,
        sourceId: edge.source,
        targetId: edge.target,
        sourceX: sourceNode.x,
        sourceY: sourceNode.y + NODE_HEIGHT / 2,
        targetX: targetNode.x,
        targetY: targetNode.y - NODE_HEIGHT / 2,
        label: edge.label,
        color: edge.color,
      };
    });

    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    layoutNodes.forEach(node => {
      minX = Math.min(minX, node.x);
      minY = Math.min(minY, node.y);
      maxX = Math.max(maxX, node.x + node.width);
      maxY = Math.max(maxY, node.y + node.height);
    });

    return { 
      layoutNodes, 
      layoutEdges, 
      bounds: { minX, minY, maxX, maxY, width: maxX - minX, height: maxY - minY } 
    };
  }, [filteredNodes, currentNodeId, language]);

  useEffect(() => {
    if (!isInitialized && containerRef.current && layoutNodes.length > 0) {
      const container = containerRef.current;
      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;

      const padding = 100;
      const scaleX = (containerWidth - padding * 2) / bounds.width;
      const scaleY = (containerHeight - padding * 2) / bounds.height;
      const scale = Math.min(scaleX, scaleY, 0.8);

      const centerX = bounds.minX + bounds.width / 2;
      const centerY = bounds.minY + bounds.height / 2;
      const x = containerWidth / 2 - centerX * scale;
      const y = containerHeight / 2 - centerY * scale;

      setTransform({ x, y, scale });
      setIsInitialized(true);
    }
  }, [layoutNodes, bounds, isInitialized]);

  useEffect(() => {
    setIsInitialized(false);
  }, [viewMode]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (e.button === 0) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - transform.x, y: e.clientY - transform.y });
    }
  }, [transform]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (isDragging) {
      setTransform(prev => ({
        ...prev,
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      }));
    }
  }, [isDragging, dragStart]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? 0.9 : 1.1;
    const newScale = Math.max(0.05, Math.min(2, transform.scale * delta));
    
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      
      const newX = mouseX - (mouseX - transform.x) * (newScale / transform.scale);
      const newY = mouseY - (mouseY - transform.y) * (newScale / transform.scale);
      
      setTransform({ x: newX, y: newY, scale: newScale });
    }
  }, [transform]);

  const fitView = useCallback(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;

      const padding = 100;
      const scaleX = (containerWidth - padding * 2) / bounds.width;
      const scaleY = (containerHeight - padding * 2) / bounds.height;
      const scale = Math.min(scaleX, scaleY, 0.8);

      const centerX = bounds.minX + bounds.width / 2;
      const centerY = bounds.minY + bounds.height / 2;
      const x = containerWidth / 2 - centerX * scale;
      const y = containerHeight / 2 - centerY * scale;

      setIsAnimating(true);
      setTransform({ x, y, scale });
      setTimeout(() => setIsAnimating(false), 500);
    }
  }, [bounds]);

  const jumpToCurrentNode = useCallback(() => {
    const currentNode = layoutNodes.find(n => n.id === currentNodeId);
    if (currentNode && containerRef.current) {
      const container = containerRef.current;
      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;
      
      const scale = 1.2;
      const x = containerWidth / 2 - (currentNode.x + currentNode.width / 2) * scale;
      const y = containerHeight / 2 - (currentNode.y + currentNode.height / 2) * scale;
      
      setIsAnimating(true);
      setTransform({ x, y, scale });
      setTimeout(() => setIsAnimating(false), 500);
    }
  }, [layoutNodes, currentNodeId]);

  const currentSubgraphData = subgraphs.find(sg => sg.id === currentSubgraph);

  const generateArrowPath = (edge: LayoutEdge) => {
    const { sourceX, sourceY, targetX, targetY } = edge;
    const midY = (sourceY + targetY) / 2;
    return `M ${sourceX} ${sourceY} C ${sourceX} ${midY}, ${targetX} ${midY}, ${targetX} ${targetY - 10}`;
  };

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
                {layoutNodes.length} nodes • {layoutEdges.length} connections • Click any node to jump there
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
        
        {/* Find current node button */}
        <div className="absolute top-28 left-4 z-20">
          <button 
            onClick={jumpToCurrentNode}
            className="bg-green-500 hover:bg-green-400 text-black font-bold text-xs px-3 py-1.5 rounded-full shadow-md shadow-green-500/50 animate-pulse flex items-center gap-1.5 transition-all hover:scale-105 cursor-pointer"
          >
            <span className="text-sm">📍</span>
            <span>Find Current Node</span>
          </button>
        </div>

        {/* SVG Canvas */}
        <div 
          ref={containerRef}
          className="w-full h-full overflow-hidden cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onWheel={handleWheel}
        >
          <svg 
            width="100%" 
            height="100%" 
            style={{ background: '#000000' }}
          >
            <defs>
              <marker id="arrowhead-green" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                <polygon points="0 0, 8 4, 0 8" fill="#22c55e" />
              </marker>
              <marker id="arrowhead-red" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                <polygon points="0 0, 8 4, 0 8" fill="#ef4444" />
              </marker>
              <marker id="arrowhead-blue" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                <polygon points="0 0, 8 4, 0 8" fill="#00bfff" />
              </marker>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            <g 
              transform={`translate(${transform.x}, ${transform.y}) scale(${transform.scale})`}
              style={{ transition: isAnimating ? 'transform 0.5s ease-out' : 'none' }}
            >
              {/* Edges */}
              {layoutEdges.map((edge) => {
                const markerId = edge.color === '#22c55e' ? 'arrowhead-green' 
                  : edge.color === '#ef4444' ? 'arrowhead-red' 
                  : 'arrowhead-blue';
                
                return (
                  <g key={edge.id}>
                    <path
                      d={generateArrowPath(edge)}
                      fill="none"
                      stroke={edge.color}
                      strokeWidth={2}
                      strokeLinecap="round"
                      markerEnd={`url(#${markerId})`}
                      style={{ strokeDasharray: '6 3', animation: 'dash 1s linear infinite' }}
                    />
                    {edge.label && (
                      <g>
                        <rect
                          x={(edge.sourceX + edge.targetX) / 2 - 18}
                          y={(edge.sourceY + edge.targetY) / 2 - 8}
                          width={36}
                          height={16}
                          rx={4}
                          fill={edge.color}
                          opacity={0.9}
                        />
                        <text
                          x={(edge.sourceX + edge.targetX) / 2}
                          y={(edge.sourceY + edge.targetY) / 2 + 2}
                          textAnchor="middle"
                          fill="white"
                          fontSize={10}
                          fontWeight="bold"
                        >
                          {edge.label}
                        </text>
                      </g>
                    )}
                  </g>
                );
              })}

              {/* Nodes */}
              {layoutNodes.map((node) => {
                const colors = getNodeColor(node.type, node.isCurrent);
                
                return (
                  <g 
                    key={node.id}
                    onClick={() => onNodeClick(node.id)}
                    style={{ cursor: 'pointer' }}
                  >
                    {node.isCurrent && (
                      <>
                        <rect
                          x={node.x - 12}
                          y={node.y - 12}
                          width={node.width + 24}
                          height={node.height + 24}
                          rx={node.type === 'decision' ? 14 : 10}
                          fill="none"
                          stroke="#22c55e"
                          strokeWidth={4}
                          filter="url(#glow)"
                          style={{ animation: 'pulse 1.5s ease-in-out infinite' }}
                        />
                        <rect
                          x={node.x - 5}
                          y={node.y - 5}
                          width={node.width + 10}
                          height={node.height + 10}
                          rx={node.type === 'decision' ? 10 : 7}
                          fill="rgba(34, 197, 94, 0.2)"
                          stroke="#86efac"
                          strokeWidth={2}
                        />
                        <g>
                          <rect
                            x={node.x + node.width / 2 - 50}
                            y={node.y - 32}
                            width={100}
                            height={22}
                            rx={11}
                            fill="#22c55e"
                          />
                          <text
                            x={node.x + node.width / 2}
                            y={node.y - 21}
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fill="#000000"
                            fontSize={10}
                            fontWeight="bold"
                          >
                            📍 YOU ARE HERE
                          </text>
                        </g>
                      </>
                    )}
                    <rect
                      x={node.x}
                      y={node.y}
                      width={node.width}
                      height={node.height}
                      rx={node.type === 'decision' ? 12 : 8}
                      fill={colors.bg}
                      stroke={colors.border}
                      strokeWidth={3}
                    />
                    <text
                      x={node.x + node.width / 2}
                      y={node.y + node.height / 2}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill={colors.text}
                      fontSize={11}
                      fontWeight={node.isCurrent ? 700 : 500}
                    >
                      {node.title.length > 20 ? node.title.substring(0, 18) + '...' : node.title}
                    </text>
                  </g>
                );
              })}
            </g>
          </svg>
        </div>

        {/* Controls */}
        <div className="absolute bottom-52 left-4 z-20 flex flex-col gap-2">
          <button
            onClick={() => setTransform(prev => ({ ...prev, scale: Math.min(2, prev.scale * 1.2) }))}
            className="w-10 h-10 bg-black/80 border-2 border-green-500 rounded-lg text-white hover:bg-green-500/20 transition-all flex items-center justify-center"
          >
            +
          </button>
          <button
            onClick={() => setTransform(prev => ({ ...prev, scale: Math.max(0.05, prev.scale * 0.8) }))}
            className="w-10 h-10 bg-black/80 border-2 border-green-500 rounded-lg text-white hover:bg-green-500/20 transition-all flex items-center justify-center"
          >
            −
          </button>
          <button
            onClick={fitView}
            className="w-10 h-10 bg-black/80 border-2 border-green-500 rounded-lg text-white hover:bg-green-500/20 transition-all flex items-center justify-center text-xs"
          >
            ⊡
          </button>
          <button
            onClick={jumpToCurrentNode}
            className="w-10 h-10 bg-green-500/80 border-2 border-green-400 rounded-lg text-black hover:bg-green-400 transition-all flex items-center justify-center"
          >
            📍
          </button>
        </div>

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
          </div>
        </div>

        {/* Navigation help */}
        <div className="absolute bottom-4 right-4 z-20 bg-black/90 border-2 border-cyan-500/50 rounded-xl p-4">
          <h3 className="text-cyan-400 font-bold mb-2 text-sm">NAVIGATION</h3>
          <div className="space-y-1 text-xs text-gray-300">
            <p>👆 Click any node to jump there</p>
            <p>🔍 Scroll to zoom in/out</p>
            <p>✋ Drag to pan around</p>
            <p>📍 Click pin to find yourself</p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes dash {
          to { stroke-dashoffset: -12; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.6; stroke-width: 4; }
          50% { opacity: 1; stroke-width: 6; }
        }
      `}</style>
    </div>
  );
}
