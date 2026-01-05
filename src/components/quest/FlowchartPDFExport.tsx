import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { FileDown, Loader2 } from 'lucide-react';
import { useQuestLanguage } from '@/contexts/QuestLanguageContext';
import { nodes, subgraphs } from '@/data/flowchartData';
import jsPDF from 'jspdf';

const translations = {
  exportButton: {
    en: 'Export Flowchart as PDF',
    de: 'Flowchart als PDF exportieren',
    fr: 'Exporter l\'organigramme en PDF',
    es: 'Exportar diagrama como PDF'
  },
  generating: {
    en: 'Generating PDF...',
    de: 'PDF wird erstellt...',
    fr: 'Génération du PDF...',
    es: 'Generando PDF...'
  },
  title: {
    en: 'Quest for Objective Reality',
    de: 'Suche nach objektiver Realität',
    fr: 'Quête de la réalité objective',
    es: 'Búsqueda de la realidad objetiva'
  },
  subtitle: {
    en: 'Complete Decision Flowchart',
    de: 'Komplettes Entscheidungs-Flussdiagramm',
    fr: 'Organigramme de décision complet',
    es: 'Diagrama de flujo de decisiones completo'
  }
};

interface NodePosition {
  x: number;
  y: number;
  width: number;
  height: number;
}

export default function FlowchartPDFExport() {
  const { language, t } = useQuestLanguage();
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePDF = async () => {
    setIsGenerating(true);

    try {
      // A4 Landscape
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4'
      });

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const margin = 10;
      
      // Colors
      const colors = {
        background: '#0f172a',
        cardBg: '#1e293b',
        text: '#f8fafc',
        textMuted: '#94a3b8',
        start: '#a855f7',
        decision: '#eab308',
        process: '#3b82f6',
        end: '#22c55e',
        arrow: '#64748b'
      };

      // Set background
      pdf.setFillColor(15, 23, 42);
      pdf.rect(0, 0, pageWidth, pageHeight, 'F');

      // Title
      pdf.setTextColor(168, 85, 247);
      pdf.setFontSize(20);
      pdf.setFont('helvetica', 'bold');
      const title = translations.title[language as keyof typeof translations.title] || translations.title.en;
      pdf.text(title, pageWidth / 2, 15, { align: 'center' });
      
      pdf.setFontSize(12);
      pdf.setTextColor(148, 163, 184);
      const subtitle = translations.subtitle[language as keyof typeof translations.subtitle] || translations.subtitle.en;
      pdf.text(subtitle, pageWidth / 2, 22, { align: 'center' });

      // Node dimensions
      const nodeWidth = 45;
      const nodeHeight = 25;
      const startY = 35;
      const colSpacing = 55;
      const rowSpacing = 35;

      // Position nodes in a flowchart layout
      const nodePositions: Record<string, NodePosition> = {};
      
      // Main flow columns
      const col1X = margin + 25;
      const col2X = col1X + colSpacing;
      const col3X = col2X + colSpacing;
      const col4X = col3X + colSpacing;
      const col5X = col4X + colSpacing;

      // Position key nodes manually for proper flow
      const keyNodes = [
        { id: 'StartQuest', x: col1X, y: startY },
        { id: 'Start', x: col1X, y: startY + rowSpacing },
        { id: 'SourceQuality', x: col1X, y: startY + rowSpacing * 2 },
        { id: 'ExpertiseCheck', x: col1X, y: startY + rowSpacing * 3 },
        { id: 'SeekExpert', x: col1X - 30, y: startY + rowSpacing * 3.5 },
        { id: 'Collect', x: col1X, y: startY + rowSpacing * 4 },
        { id: 'AssessNature', x: col2X, y: startY },
        { id: 'Formulate', x: col2X, y: startY + rowSpacing },
        { id: 'Falsifiability', x: col2X, y: startY + rowSpacing * 2 },
        { id: 'IsSupernatural', x: col3X, y: startY },
        { id: 'ClassifyMetaphysical', x: col3X + 25, y: startY + rowSpacing * 0.5 },
        { id: 'IsUseful', x: col3X, y: startY + rowSpacing },
        { id: 'ClassifyPseudo', x: col3X + 25, y: startY + rowSpacing * 1.5 },
        { id: 'ApplyBayes', x: col3X, y: startY + rowSpacing * 2 },
        { id: 'EvaluateEvidence', x: col3X, y: startY + rowSpacing * 3 },
        { id: 'BiasCheck', x: col4X, y: startY },
        { id: 'AdjustConfidence', x: col4X, y: startY + rowSpacing },
        { id: 'Conclusion', x: col4X, y: startY + rowSpacing * 2 },
        { id: 'HighConfidence', x: col4X, y: startY + rowSpacing * 3 },
        { id: 'StoreFact', x: col5X, y: startY },
        { id: 'StoreWorking', x: col5X, y: startY + rowSpacing },
        { id: 'StoreUncertain', x: col5X, y: startY + rowSpacing * 2 },
        { id: 'StoreUnknown', x: col5X, y: startY + rowSpacing * 3 },
      ];

      // Set node positions
      keyNodes.forEach(n => {
        nodePositions[n.id] = { x: n.x, y: n.y, width: nodeWidth, height: nodeHeight };
      });

      // Draw function for nodes
      const drawNode = (nodeId: string, pos: NodePosition) => {
        const node = nodes.find(n => n.id === nodeId);
        if (!node) return;

        const title = node.title[language as keyof typeof node.title] || node.title.en;
        
        // Get node color based on type
        let fillColor: string;
        let borderColor: string;
        switch (node.type) {
          case 'start':
            fillColor = '#581c87';
            borderColor = colors.start;
            break;
          case 'decision':
            fillColor = '#713f12';
            borderColor = colors.decision;
            break;
          case 'end':
            fillColor = '#14532d';
            borderColor = colors.end;
            break;
          default:
            fillColor = '#1e3a5f';
            borderColor = colors.process;
        }

        // Draw node shape
        if (node.type === 'decision') {
          // Diamond shape for decisions
          const cx = pos.x + pos.width / 2;
          const cy = pos.y + pos.height / 2;
          const hw = pos.width / 2;
          const hh = pos.height / 2;
          
          pdf.setFillColor(parseInt(fillColor.slice(1, 3), 16), parseInt(fillColor.slice(3, 5), 16), parseInt(fillColor.slice(5, 7), 16));
          pdf.setDrawColor(parseInt(borderColor.slice(1, 3), 16), parseInt(borderColor.slice(3, 5), 16), parseInt(borderColor.slice(5, 7), 16));
          pdf.setLineWidth(0.5);
          
          // Draw diamond
          const points = [
            { x: cx, y: cy - hh },
            { x: cx + hw, y: cy },
            { x: cx, y: cy + hh },
            { x: cx - hw, y: cy }
          ];
          
          pdf.moveTo(points[0].x, points[0].y);
          pdf.lineTo(points[1].x, points[1].y);
          pdf.lineTo(points[2].x, points[2].y);
          pdf.lineTo(points[3].x, points[3].y);
          pdf.lineTo(points[0].x, points[0].y);
          pdf.fill();
          
          // Draw border
          pdf.moveTo(points[0].x, points[0].y);
          pdf.lineTo(points[1].x, points[1].y);
          pdf.lineTo(points[2].x, points[2].y);
          pdf.lineTo(points[3].x, points[3].y);
          pdf.lineTo(points[0].x, points[0].y);
          pdf.stroke();
        } else if (node.type === 'start' || node.type === 'end') {
          // Rounded rectangle for start/end
          pdf.setFillColor(parseInt(fillColor.slice(1, 3), 16), parseInt(fillColor.slice(3, 5), 16), parseInt(fillColor.slice(5, 7), 16));
          pdf.setDrawColor(parseInt(borderColor.slice(1, 3), 16), parseInt(borderColor.slice(3, 5), 16), parseInt(borderColor.slice(5, 7), 16));
          pdf.setLineWidth(0.5);
          pdf.roundedRect(pos.x, pos.y, pos.width, pos.height, 5, 5, 'FD');
        } else {
          // Rectangle for process nodes
          pdf.setFillColor(parseInt(fillColor.slice(1, 3), 16), parseInt(fillColor.slice(3, 5), 16), parseInt(fillColor.slice(5, 7), 16));
          pdf.setDrawColor(parseInt(borderColor.slice(1, 3), 16), parseInt(borderColor.slice(3, 5), 16), parseInt(borderColor.slice(5, 7), 16));
          pdf.setLineWidth(0.5);
          pdf.roundedRect(pos.x, pos.y, pos.width, pos.height, 2, 2, 'FD');
        }

        // Draw title text
        pdf.setTextColor(248, 250, 252);
        pdf.setFontSize(6);
        pdf.setFont('helvetica', 'bold');
        
        // Word wrap title
        const maxWidth = pos.width - 4;
        const lines = pdf.splitTextToSize(title, maxWidth);
        const lineHeight = 3;
        const totalTextHeight = lines.length * lineHeight;
        const startTextY = pos.y + (pos.height - totalTextHeight) / 2 + lineHeight;
        
        lines.forEach((line: string, i: number) => {
          pdf.text(line, pos.x + pos.width / 2, startTextY + i * lineHeight, { align: 'center' });
        });
      };

      // Draw arrows between nodes
      const drawArrow = (fromId: string, toId: string, label?: string, color?: string) => {
        const from = nodePositions[fromId];
        const to = nodePositions[toId];
        if (!from || !to) return;

        const arrowColor = color || colors.arrow;
        pdf.setDrawColor(parseInt(arrowColor.slice(1, 3), 16), parseInt(arrowColor.slice(3, 5), 16), parseInt(arrowColor.slice(5, 7), 16));
        pdf.setLineWidth(0.3);

        // Calculate connection points
        const fromCx = from.x + from.width / 2;
        const fromCy = from.y + from.height / 2;
        const toCx = to.x + to.width / 2;
        const toCy = to.y + to.height / 2;

        let startX: number, startY: number, endX: number, endY: number;

        // Determine start and end points based on relative positions
        if (Math.abs(toCx - fromCx) > Math.abs(toCy - fromCy)) {
          // Horizontal connection
          if (toCx > fromCx) {
            startX = from.x + from.width;
            endX = to.x;
          } else {
            startX = from.x;
            endX = to.x + to.width;
          }
          startY = fromCy;
          endY = toCy;
        } else {
          // Vertical connection
          if (toCy > fromCy) {
            startY = from.y + from.height;
            endY = to.y;
          } else {
            startY = from.y;
            endY = to.y + to.height;
          }
          startX = fromCx;
          endX = toCx;
        }

        // Draw line
        pdf.line(startX, startY, endX, endY);

        // Draw arrowhead
        const angle = Math.atan2(endY - startY, endX - startX);
        const arrowSize = 2;
        pdf.line(endX, endY, endX - arrowSize * Math.cos(angle - Math.PI / 6), endY - arrowSize * Math.sin(angle - Math.PI / 6));
        pdf.line(endX, endY, endX - arrowSize * Math.cos(angle + Math.PI / 6), endY - arrowSize * Math.sin(angle + Math.PI / 6));

        // Draw label if provided
        if (label) {
          pdf.setFontSize(5);
          pdf.setTextColor(parseInt(arrowColor.slice(1, 3), 16), parseInt(arrowColor.slice(3, 5), 16), parseInt(arrowColor.slice(5, 7), 16));
          const midX = (startX + endX) / 2;
          const midY = (startY + endY) / 2;
          pdf.text(label, midX, midY - 1, { align: 'center' });
        }
      };

      // Draw connections first (so they appear behind nodes)
      const yesLabel = language === 'de' ? 'Ja' : language === 'fr' ? 'Oui' : language === 'es' ? 'Sí' : 'Yes';
      const noLabel = language === 'de' ? 'Nein' : language === 'fr' ? 'Non' : 'No';

      // Main flow arrows
      drawArrow('StartQuest', 'Start');
      drawArrow('Start', 'SourceQuality');
      drawArrow('SourceQuality', 'ExpertiseCheck');
      drawArrow('ExpertiseCheck', 'SeekExpert', noLabel, '#ef4444');
      drawArrow('ExpertiseCheck', 'Collect', yesLabel, '#22c55e');
      drawArrow('SeekExpert', 'Collect');
      drawArrow('Collect', 'AssessNature');
      drawArrow('AssessNature', 'Formulate', yesLabel, '#22c55e');
      drawArrow('AssessNature', 'IsSupernatural', noLabel, '#ef4444');
      drawArrow('Formulate', 'Falsifiability');
      drawArrow('IsSupernatural', 'ClassifyMetaphysical', yesLabel, '#22c55e');
      drawArrow('IsSupernatural', 'IsUseful', noLabel, '#ef4444');
      drawArrow('IsUseful', 'ClassifyPseudo', noLabel, '#ef4444');
      drawArrow('IsUseful', 'ApplyBayes', yesLabel, '#22c55e');
      drawArrow('Falsifiability', 'ApplyBayes', yesLabel, '#22c55e');
      drawArrow('ApplyBayes', 'EvaluateEvidence');
      drawArrow('EvaluateEvidence', 'BiasCheck');
      drawArrow('BiasCheck', 'AdjustConfidence');
      drawArrow('AdjustConfidence', 'Conclusion');
      drawArrow('Conclusion', 'HighConfidence');
      drawArrow('HighConfidence', 'StoreFact', yesLabel, '#22c55e');
      drawArrow('HighConfidence', 'StoreWorking', noLabel, '#ef4444');

      // Draw all positioned nodes
      Object.entries(nodePositions).forEach(([nodeId, pos]) => {
        drawNode(nodeId, pos);
      });

      // Add legend
      const legendY = pageHeight - 20;
      pdf.setFontSize(8);
      pdf.setTextColor(148, 163, 184);
      pdf.text('Legend:', margin, legendY);

      // Start node legend
      pdf.setFillColor(88, 28, 135);
      pdf.roundedRect(margin + 20, legendY - 3, 10, 6, 2, 2, 'F');
      pdf.setTextColor(248, 250, 252);
      pdf.setFontSize(6);
      pdf.text('Start/End', margin + 32, legendY);

      // Decision node legend
      pdf.setFillColor(113, 63, 18);
      pdf.rect(margin + 55, legendY - 3, 10, 6, 'F');
      pdf.text('Decision', margin + 67, legendY);

      // Process node legend
      pdf.setFillColor(30, 58, 95);
      pdf.rect(margin + 90, legendY - 3, 10, 6, 'F');
      pdf.text('Process', margin + 102, legendY);

      // Website
      pdf.setTextColor(168, 85, 247);
      pdf.setFontSize(8);
      pdf.text('www.quest4objectivereality.com', pageWidth - margin, legendY, { align: 'right' });

      // Download
      const langCode = language.toUpperCase();
      pdf.save(`Quest-Flowchart-${langCode}.pdf`);

    } catch (error) {
      console.error('PDF generation failed:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Button
      onClick={generatePDF}
      disabled={isGenerating}
      variant="outline"
      className="w-full border-purple-500/50 text-purple-400 hover:bg-purple-500/10"
    >
      {isGenerating ? (
        <>
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          {t(translations.generating)}
        </>
      ) : (
        <>
          <FileDown className="w-4 h-4 mr-2" />
          {t(translations.exportButton)}
        </>
      )}
    </Button>
  );
}
