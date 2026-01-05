import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { FileDown, Loader2 } from 'lucide-react';
import { useQuestLanguage } from '@/contexts/QuestLanguageContext';
import { nodes } from '@/data/flowchartData';
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

      const pageWidth = pdf.internal.pageSize.getWidth(); // 297mm
      const pageHeight = pdf.internal.pageSize.getHeight(); // 210mm
      const margin = 5;
      
      // Set background
      pdf.setFillColor(15, 23, 42);
      pdf.rect(0, 0, pageWidth, pageHeight, 'F');

      // Title
      pdf.setTextColor(168, 85, 247);
      pdf.setFontSize(14);
      pdf.setFont('helvetica', 'bold');
      const title = translations.title[language as keyof typeof translations.title] || translations.title.en;
      pdf.text(title, pageWidth / 2, 8, { align: 'center' });
      
      pdf.setFontSize(8);
      pdf.setTextColor(148, 163, 184);
      const subtitle = translations.subtitle[language as keyof typeof translations.subtitle] || translations.subtitle.en;
      pdf.text(subtitle, pageWidth / 2, 12, { align: 'center' });

      // Very small node dimensions to fit everything
      const nodeWidth = 22;
      const nodeHeight = 10;
      const colSpacing = 26;
      const rowSpacing = 14;
      const startY = 18;

      // Calculate column positions across the page
      const cols = [
        margin + 12,           // Col 0: Start
        margin + 12 + colSpacing,  // Col 1
        margin + 12 + colSpacing * 2,  // Col 2
        margin + 12 + colSpacing * 3,  // Col 3
        margin + 12 + colSpacing * 4,  // Col 4
        margin + 12 + colSpacing * 5,  // Col 5
        margin + 12 + colSpacing * 6,  // Col 6
        margin + 12 + colSpacing * 7,  // Col 7
        margin + 12 + colSpacing * 8,  // Col 8
        margin + 12 + colSpacing * 9,  // Col 9
        margin + 12 + colSpacing * 10, // Col 10
      ];

      // Position all nodes in a grid layout following the flow
      const nodePositions: Record<string, NodePosition> = {};
      
      // Row 0 - Main flow start
      nodePositions['StartQuest'] = { x: cols[0], y: startY, width: nodeWidth, height: nodeHeight };
      nodePositions['Start'] = { x: cols[1], y: startY, width: nodeWidth, height: nodeHeight };
      nodePositions['SourceQuality'] = { x: cols[2], y: startY, width: nodeWidth, height: nodeHeight };
      nodePositions['ExpertiseCheck'] = { x: cols[3], y: startY, width: nodeWidth, height: nodeHeight };
      nodePositions['Collect'] = { x: cols[4], y: startY, width: nodeWidth, height: nodeHeight };
      nodePositions['AssessNature'] = { x: cols[5], y: startY, width: nodeWidth, height: nodeHeight };
      
      // Row 1 - Branches
      nodePositions['SeekExpert'] = { x: cols[3], y: startY + rowSpacing, width: nodeWidth, height: nodeHeight };
      nodePositions['Formulate'] = { x: cols[6], y: startY, width: nodeWidth, height: nodeHeight };
      nodePositions['IsSupernatural'] = { x: cols[5], y: startY + rowSpacing, width: nodeWidth, height: nodeHeight };
      
      // Row 2
      nodePositions['Falsifiability'] = { x: cols[6], y: startY + rowSpacing, width: nodeWidth, height: nodeHeight };
      nodePositions['ClassifyMetaphysical'] = { x: cols[5], y: startY + rowSpacing * 2, width: nodeWidth, height: nodeHeight };
      nodePositions['IsUseful'] = { x: cols[4], y: startY + rowSpacing * 2, width: nodeWidth, height: nodeHeight };
      
      // Row 3
      nodePositions['ApplyBayes'] = { x: cols[7], y: startY, width: nodeWidth, height: nodeHeight };
      nodePositions['ClassifyPseudo'] = { x: cols[4], y: startY + rowSpacing * 3, width: nodeWidth, height: nodeHeight };
      nodePositions['Revise'] = { x: cols[6], y: startY + rowSpacing * 2, width: nodeWidth, height: nodeHeight };
      
      // Row 4 - Evidence evaluation
      nodePositions['EvaluateEvidence'] = { x: cols[8], y: startY, width: nodeWidth, height: nodeHeight };
      nodePositions['BiasCheck'] = { x: cols[8], y: startY + rowSpacing, width: nodeWidth, height: nodeHeight };
      nodePositions['AdjustConfidence'] = { x: cols[8], y: startY + rowSpacing * 2, width: nodeWidth, height: nodeHeight };
      
      // Row 5 - Conclusions
      nodePositions['Conclusion'] = { x: cols[9], y: startY, width: nodeWidth, height: nodeHeight };
      nodePositions['HighConfidence'] = { x: cols[9], y: startY + rowSpacing, width: nodeWidth, height: nodeHeight };
      nodePositions['MediumConfidence'] = { x: cols[9], y: startY + rowSpacing * 2, width: nodeWidth, height: nodeHeight };
      nodePositions['LowConfidence'] = { x: cols[9], y: startY + rowSpacing * 3, width: nodeWidth, height: nodeHeight };
      
      // Row 6 - Storage
      nodePositions['StoreFact'] = { x: cols[10], y: startY, width: nodeWidth, height: nodeHeight };
      nodePositions['StoreWorking'] = { x: cols[10], y: startY + rowSpacing, width: nodeWidth, height: nodeHeight };
      nodePositions['StoreUncertain'] = { x: cols[10], y: startY + rowSpacing * 2, width: nodeWidth, height: nodeHeight };
      nodePositions['StoreUnknown'] = { x: cols[10], y: startY + rowSpacing * 3, width: nodeWidth, height: nodeHeight };
      
      // Additional nodes - lower section
      nodePositions['NeedMoreData'] = { x: cols[7], y: startY + rowSpacing * 3, width: nodeWidth, height: nodeHeight };
      nodePositions['RecordResult'] = { x: cols[9], y: startY + rowSpacing * 4, width: nodeWidth, height: nodeHeight };
      nodePositions['ConfidenceDecay'] = { x: cols[10], y: startY + rowSpacing * 4, width: nodeWidth, height: nodeHeight };
      nodePositions['EndInquiry'] = { x: cols[9], y: startY + rowSpacing * 5, width: nodeWidth, height: nodeHeight };
      nodePositions['KnowledgeDB'] = { x: cols[10], y: startY + rowSpacing * 5, width: nodeWidth, height: nodeHeight };
      
      // Classification endpoints
      nodePositions['ClassifyFiction'] = { x: cols[3], y: startY + rowSpacing * 3, width: nodeWidth, height: nodeHeight };
      nodePositions['ClassifyOpinion'] = { x: cols[3], y: startY + rowSpacing * 4, width: nodeWidth, height: nodeHeight };
      nodePositions['ClassifyMisinfo'] = { x: cols[2], y: startY + rowSpacing * 3, width: nodeWidth, height: nodeHeight };
      
      // More process nodes
      nodePositions['ConsiderAlternatives'] = { x: cols[7], y: startY + rowSpacing, width: nodeWidth, height: nodeHeight };
      nodePositions['WeighEvidence'] = { x: cols[7], y: startY + rowSpacing * 2, width: nodeWidth, height: nodeHeight };

      // Draw function for nodes
      const drawNode = (nodeId: string, pos: NodePosition) => {
        const node = nodes.find(n => n.id === nodeId);
        if (!node) return;

        const nodeTitle = node.title[language as keyof typeof node.title] || node.title.en;
        
        // Get node color based on type
        let fillColor: string;
        let borderColor: string;
        switch (node.type) {
          case 'start':
            fillColor = '#581c87';
            borderColor = '#a855f7';
            break;
          case 'decision':
            fillColor = '#713f12';
            borderColor = '#eab308';
            break;
          case 'end':
            fillColor = '#14532d';
            borderColor = '#22c55e';
            break;
          case 'category':
          case 'database':
            fillColor = '#1e3a5f';
            borderColor = node.categoryColor || '#3b82f6';
            break;
          default:
            fillColor = '#1e3a5f';
            borderColor = '#3b82f6';
        }

        // Parse colors
        const parseColor = (hex: string) => [
          parseInt(hex.slice(1, 3), 16),
          parseInt(hex.slice(3, 5), 16),
          parseInt(hex.slice(5, 7), 16)
        ];

        const [fr, fg, fb] = parseColor(fillColor);
        const [br, bg, bb] = parseColor(borderColor);

        // Draw node shape
        if (node.type === 'decision') {
          // Diamond shape for decisions
          const cx = pos.x + pos.width / 2;
          const cy = pos.y + pos.height / 2;
          const hw = pos.width / 2;
          const hh = pos.height / 2;
          
          pdf.setFillColor(fr, fg, fb);
          pdf.setDrawColor(br, bg, bb);
          pdf.setLineWidth(0.3);
          
          // Draw filled diamond using triangle method
          pdf.triangle(cx, cy - hh, cx + hw, cy, cx, cy + hh, 'F');
          pdf.triangle(cx, cy - hh, cx - hw, cy, cx, cy + hh, 'F');
          
          // Draw border
          pdf.line(cx, cy - hh, cx + hw, cy);
          pdf.line(cx + hw, cy, cx, cy + hh);
          pdf.line(cx, cy + hh, cx - hw, cy);
          pdf.line(cx - hw, cy, cx, cy - hh);
        } else if (node.type === 'start' || node.type === 'end') {
          // Rounded rectangle for start/end
          pdf.setFillColor(fr, fg, fb);
          pdf.setDrawColor(br, bg, bb);
          pdf.setLineWidth(0.3);
          pdf.roundedRect(pos.x, pos.y, pos.width, pos.height, 3, 3, 'FD');
        } else {
          // Rectangle for process nodes
          pdf.setFillColor(fr, fg, fb);
          pdf.setDrawColor(br, bg, bb);
          pdf.setLineWidth(0.3);
          pdf.roundedRect(pos.x, pos.y, pos.width, pos.height, 1, 1, 'FD');
        }

        // Draw title text (very small)
        pdf.setTextColor(248, 250, 252);
        pdf.setFontSize(3.5);
        pdf.setFont('helvetica', 'bold');
        
        // Word wrap title
        const maxWidth = pos.width - 2;
        const lines = pdf.splitTextToSize(nodeTitle, maxWidth);
        const lineHeight = 2;
        const totalTextHeight = Math.min(lines.length, 3) * lineHeight;
        const startTextY = pos.y + (pos.height - totalTextHeight) / 2 + lineHeight;
        
        lines.slice(0, 3).forEach((line: string, i: number) => {
          pdf.text(line, pos.x + pos.width / 2, startTextY + i * lineHeight, { align: 'center' });
        });
      };

      // Draw arrows between nodes
      const drawArrow = (fromId: string, toId: string, label?: string, color?: string) => {
        const from = nodePositions[fromId];
        const to = nodePositions[toId];
        if (!from || !to) return;

        const arrowColor = color || '#64748b';
        const [ar, ag, ab] = [
          parseInt(arrowColor.slice(1, 3), 16),
          parseInt(arrowColor.slice(3, 5), 16),
          parseInt(arrowColor.slice(5, 7), 16)
        ];
        
        pdf.setDrawColor(ar, ag, ab);
        pdf.setLineWidth(0.2);

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
        const arrowSize = 1;
        pdf.line(endX, endY, endX - arrowSize * Math.cos(angle - Math.PI / 6), endY - arrowSize * Math.sin(angle - Math.PI / 6));
        pdf.line(endX, endY, endX - arrowSize * Math.cos(angle + Math.PI / 6), endY - arrowSize * Math.sin(angle + Math.PI / 6));

        // Draw label if provided
        if (label) {
          pdf.setFontSize(3);
          pdf.setTextColor(ar, ag, ab);
          const midX = (startX + endX) / 2;
          const midY = (startY + endY) / 2;
          pdf.text(label, midX, midY - 0.5, { align: 'center' });
        }
      };

      // Labels
      const yesLabel = language === 'de' ? 'Ja' : language === 'fr' ? 'Oui' : language === 'es' ? 'Sí' : 'Yes';
      const noLabel = language === 'de' ? 'Nein' : language === 'fr' ? 'Non' : 'No';

      // Draw connections
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
      drawArrow('Falsifiability', 'ApplyBayes', yesLabel, '#22c55e');
      drawArrow('Falsifiability', 'Revise', noLabel, '#ef4444');
      drawArrow('IsSupernatural', 'ClassifyMetaphysical', yesLabel, '#22c55e');
      drawArrow('IsSupernatural', 'IsUseful', noLabel, '#ef4444');
      drawArrow('IsUseful', 'ClassifyPseudo', noLabel, '#ef4444');
      drawArrow('IsUseful', 'ApplyBayes', yesLabel, '#22c55e');
      drawArrow('ApplyBayes', 'EvaluateEvidence');
      drawArrow('EvaluateEvidence', 'BiasCheck');
      drawArrow('BiasCheck', 'AdjustConfidence');
      drawArrow('AdjustConfidence', 'Conclusion');
      drawArrow('Conclusion', 'HighConfidence');
      drawArrow('HighConfidence', 'StoreFact', yesLabel, '#22c55e');
      drawArrow('HighConfidence', 'MediumConfidence', noLabel, '#ef4444');
      drawArrow('MediumConfidence', 'StoreWorking');
      drawArrow('MediumConfidence', 'LowConfidence', noLabel, '#ef4444');
      drawArrow('LowConfidence', 'StoreUncertain');
      drawArrow('LowConfidence', 'NeedMoreData', noLabel, '#ef4444');
      drawArrow('NeedMoreData', 'StoreUnknown');
      drawArrow('StoreFact', 'RecordResult');
      drawArrow('StoreWorking', 'RecordResult');
      drawArrow('StoreUncertain', 'RecordResult');
      drawArrow('StoreUnknown', 'RecordResult');
      drawArrow('RecordResult', 'ConfidenceDecay');
      drawArrow('RecordResult', 'EndInquiry');
      drawArrow('EndInquiry', 'KnowledgeDB');
      drawArrow('ConsiderAlternatives', 'WeighEvidence');
      drawArrow('WeighEvidence', 'AdjustConfidence');

      // Draw all positioned nodes
      Object.entries(nodePositions).forEach(([nodeId, pos]) => {
        drawNode(nodeId, pos);
      });

      // Add legend at bottom
      const legendY = pageHeight - 8;
      pdf.setFontSize(5);
      pdf.setTextColor(148, 163, 184);
      
      const legendItems = [
        { label: 'Start/End', color: '#a855f7', type: 'rounded' },
        { label: 'Decision', color: '#eab308', type: 'diamond' },
        { label: 'Process', color: '#3b82f6', type: 'rect' },
        { label: 'Category', color: '#22c55e', type: 'rect' }
      ];

      let legendX = margin;
      legendItems.forEach(item => {
        const [r, g, b] = [
          parseInt(item.color.slice(1, 3), 16),
          parseInt(item.color.slice(3, 5), 16),
          parseInt(item.color.slice(5, 7), 16)
        ];
        pdf.setFillColor(r, g, b);
        pdf.rect(legendX, legendY - 2, 4, 3, 'F');
        pdf.setTextColor(248, 250, 252);
        pdf.text(item.label, legendX + 5, legendY, { align: 'left' });
        legendX += 25;
      });

      // Website - CORRECTED URL
      pdf.setTextColor(168, 85, 247);
      pdf.setFontSize(6);
      pdf.text('www.Objective-Reality.info', pageWidth - margin, legendY, { align: 'right' });

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
