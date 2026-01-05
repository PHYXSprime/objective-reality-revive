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
  }
};

interface NodePos {
  x: number;
  y: number;
  w: number;
  h: number;
}

export default function FlowchartPDFExport() {
  const { language, t } = useQuestLanguage();
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePDF = async () => {
    setIsGenerating(true);

    try {
      // A4 Portrait
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      const pageWidth = 210;
      const pageHeight = 297;
      const margin = 8;
      
      // Background
      pdf.setFillColor(15, 23, 42);
      pdf.rect(0, 0, pageWidth, pageHeight, 'F');

      // Title
      pdf.setTextColor(168, 85, 247);
      pdf.setFontSize(16);
      pdf.setFont('helvetica', 'bold');
      const title = translations.title[language as keyof typeof translations.title] || translations.title.en;
      pdf.text(title, pageWidth / 2, 12, { align: 'center' });

      // Node dimensions - very small
      const nw = 28; // node width
      const nh = 8;  // node height
      const vGap = 4; // vertical gap
      const hGap = 4; // horizontal gap

      // Center X position
      const centerX = pageWidth / 2 - nw / 2;
      
      // Build positions - vertical flow with branches
      const positions: Record<string, NodePos> = {};
      let y = 20;

      // Helper to add node
      const addNode = (id: string, x: number, yPos: number) => {
        positions[id] = { x, y: yPos, w: nw, h: nh };
      };

      // ===== MAIN VERTICAL FLOW =====
      // Row 1: Start
      addNode('StartQuest', centerX, y);
      y += nh + vGap;

      // Row 2: Define Question
      addNode('Start', centerX, y);
      y += nh + vGap;

      // Row 3: Source Quality
      addNode('SourceQuality', centerX, y);
      y += nh + vGap;

      // Row 4: Expertise Check (decision) with branch
      addNode('ExpertiseCheck', centerX, y);
      addNode('SeekExpert', centerX - nw - hGap, y); // Left branch
      y += nh + vGap;

      // Row 5: Collect Data
      addNode('Collect', centerX, y);
      y += nh + vGap;

      // Row 6: Empirically Testable? (major decision)
      addNode('AssessNature', centerX, y);
      y += nh + vGap;

      // Row 7: Two branches - Testable vs Non-testable
      const leftBranchX = centerX - nw/2 - hGap/2 - nw/2;
      const rightBranchX = centerX + nw/2 + hGap/2 + nw/2;
      
      addNode('Formulate', leftBranchX, y);           // Yes branch
      addNode('IsSupernatural', rightBranchX, y);     // No branch
      y += nh + vGap;

      // Row 8
      addNode('Falsifiability', leftBranchX, y);
      addNode('ClassifyMetaphysical', rightBranchX + nw + hGap, y); // Far right
      addNode('IsUseful', rightBranchX, y);
      y += nh + vGap;

      // Row 9
      addNode('Revise', leftBranchX - nw - hGap, y);  // Left of left
      addNode('ApplyBayes', centerX, y);               // Center - main flow continues
      addNode('ClassifyPseudo', rightBranchX + nw + hGap, y);
      y += nh + vGap;

      // Row 10: Evidence Evaluation
      addNode('EvaluateEvidence', centerX, y);
      addNode('ConsiderAlternatives', leftBranchX, y);
      y += nh + vGap;

      // Row 11: Bias Check
      addNode('BiasCheck', centerX, y);
      addNode('WeighEvidence', leftBranchX, y);
      y += nh + vGap;

      // Row 12: Adjust Confidence
      addNode('AdjustConfidence', centerX, y);
      y += nh + vGap;

      // Row 13: Conclusion
      addNode('Conclusion', centerX, y);
      y += nh + vGap;

      // Row 14: Confidence levels (horizontal spread)
      const conf1X = margin + 10;
      const conf2X = margin + 10 + nw + hGap;
      const conf3X = margin + 10 + (nw + hGap) * 2;
      const conf4X = margin + 10 + (nw + hGap) * 3;
      
      addNode('HighConfidence', conf1X, y);
      addNode('MediumConfidence', conf2X, y);
      addNode('LowConfidence', conf3X, y);
      addNode('NeedMoreData', conf4X, y);
      y += nh + vGap;

      // Row 15: Storage categories
      addNode('StoreFact', conf1X, y);
      addNode('StoreWorking', conf2X, y);
      addNode('StoreUncertain', conf3X, y);
      addNode('StoreUnknown', conf4X, y);
      y += nh + vGap;

      // Row 16: Record & Review
      addNode('RecordResult', centerX - nw/2 - hGap/2, y);
      addNode('ConfidenceDecay', centerX + nw/2 + hGap/2, y);
      y += nh + vGap;

      // Row 17: End
      addNode('EndInquiry', centerX, y);
      y += nh + vGap;

      // Row 18: Knowledge DB
      addNode('KnowledgeDB', centerX, y);

      // Classification endpoints (side)
      addNode('ClassifyFiction', pageWidth - margin - nw - 5, 100);
      addNode('ClassifyOpinion', pageWidth - margin - nw - 5, 112);
      addNode('ClassifyMisinfo', pageWidth - margin - nw - 5, 124);

      // ===== DRAW ARROWS FIRST =====
      const drawArrow = (fromId: string, toId: string, label?: string, color?: string) => {
        const from = positions[fromId];
        const to = positions[toId];
        if (!from || !to) return;

        const c = color || '#475569';
        pdf.setDrawColor(parseInt(c.slice(1,3),16), parseInt(c.slice(3,5),16), parseInt(c.slice(5,7),16));
        pdf.setLineWidth(0.25);

        const fromCx = from.x + from.w / 2;
        const fromCy = from.y + from.h / 2;
        const toCx = to.x + to.w / 2;
        const toCy = to.y + to.h / 2;

        let sx: number, sy: number, ex: number, ey: number;

        // Determine connection direction
        const dx = Math.abs(toCx - fromCx);
        const dy = Math.abs(toCy - fromCy);

        if (dy > dx * 0.5) {
          // Vertical-ish
          sy = toCy > fromCy ? from.y + from.h : from.y;
          ey = toCy > fromCy ? to.y : to.y + to.h;
          sx = fromCx;
          ex = toCx;
        } else {
          // Horizontal-ish
          sx = toCx > fromCx ? from.x + from.w : from.x;
          ex = toCx > fromCx ? to.x : to.x + to.w;
          sy = fromCy;
          ey = toCy;
        }

        // Draw with elbow if needed
        if (Math.abs(sx - ex) > 2 && Math.abs(sy - ey) > 2) {
          const midY = (sy + ey) / 2;
          pdf.line(sx, sy, sx, midY);
          pdf.line(sx, midY, ex, midY);
          pdf.line(ex, midY, ex, ey);
        } else {
          pdf.line(sx, sy, ex, ey);
        }

        // Arrowhead
        const angle = Math.atan2(ey - sy, ex - sx);
        const aLen = 1.2;
        pdf.line(ex, ey, ex - aLen * Math.cos(angle - 0.4), ey - aLen * Math.sin(angle - 0.4));
        pdf.line(ex, ey, ex - aLen * Math.cos(angle + 0.4), ey - aLen * Math.sin(angle + 0.4));

        // Label
        if (label) {
          pdf.setFontSize(3);
          pdf.setTextColor(parseInt(c.slice(1,3),16), parseInt(c.slice(3,5),16), parseInt(c.slice(5,7),16));
          pdf.text(label, (sx + ex) / 2, (sy + ey) / 2 - 1, { align: 'center' });
        }
      };

      const yes = language === 'de' ? 'Ja' : language === 'fr' ? 'Oui' : language === 'es' ? 'Sí' : 'Yes';
      const no = language === 'de' ? 'Nein' : language === 'fr' ? 'Non' : 'No';

      // Main flow
      drawArrow('StartQuest', 'Start');
      drawArrow('Start', 'SourceQuality');
      drawArrow('SourceQuality', 'ExpertiseCheck');
      drawArrow('ExpertiseCheck', 'SeekExpert', no, '#ef4444');
      drawArrow('ExpertiseCheck', 'Collect', yes, '#22c55e');
      drawArrow('SeekExpert', 'Collect');
      drawArrow('Collect', 'AssessNature');
      drawArrow('AssessNature', 'Formulate', yes, '#22c55e');
      drawArrow('AssessNature', 'IsSupernatural', no, '#ef4444');
      drawArrow('Formulate', 'Falsifiability');
      drawArrow('Falsifiability', 'ApplyBayes', yes, '#22c55e');
      drawArrow('Falsifiability', 'Revise', no, '#ef4444');
      drawArrow('Revise', 'Formulate');
      drawArrow('IsSupernatural', 'ClassifyMetaphysical', yes, '#22c55e');
      drawArrow('IsSupernatural', 'IsUseful', no, '#ef4444');
      drawArrow('IsUseful', 'ApplyBayes', yes, '#22c55e');
      drawArrow('IsUseful', 'ClassifyPseudo', no, '#ef4444');
      drawArrow('ApplyBayes', 'EvaluateEvidence');
      drawArrow('EvaluateEvidence', 'BiasCheck');
      drawArrow('ConsiderAlternatives', 'WeighEvidence');
      drawArrow('WeighEvidence', 'AdjustConfidence');
      drawArrow('BiasCheck', 'AdjustConfidence');
      drawArrow('AdjustConfidence', 'Conclusion');
      drawArrow('Conclusion', 'HighConfidence');
      drawArrow('Conclusion', 'MediumConfidence');
      drawArrow('Conclusion', 'LowConfidence');
      drawArrow('Conclusion', 'NeedMoreData');
      drawArrow('HighConfidence', 'StoreFact');
      drawArrow('MediumConfidence', 'StoreWorking');
      drawArrow('LowConfidence', 'StoreUncertain');
      drawArrow('NeedMoreData', 'StoreUnknown');
      drawArrow('StoreFact', 'RecordResult');
      drawArrow('StoreWorking', 'RecordResult');
      drawArrow('StoreUncertain', 'RecordResult');
      drawArrow('StoreUnknown', 'RecordResult');
      drawArrow('RecordResult', 'ConfidenceDecay');
      drawArrow('RecordResult', 'EndInquiry');
      drawArrow('ConfidenceDecay', 'EndInquiry');
      drawArrow('EndInquiry', 'KnowledgeDB');

      // ===== DRAW NODES =====
      const drawNode = (id: string) => {
        const pos = positions[id];
        if (!pos) return;
        
        const node = nodes.find(n => n.id === id);
        if (!node) return;

        const nodeTitle = node.title[language as keyof typeof node.title] || node.title.en;

        // Colors by type
        let fill: [number, number, number];
        let border: [number, number, number];
        
        switch (node.type) {
          case 'start':
            fill = [88, 28, 135]; border = [168, 85, 247]; break;
          case 'decision':
            fill = [113, 63, 18]; border = [234, 179, 8]; break;
          case 'end':
            fill = [20, 83, 45]; border = [34, 197, 94]; break;
          case 'category':
          case 'database':
            fill = [30, 58, 95]; border = [34, 197, 94]; break;
          default:
            fill = [30, 58, 95]; border = [59, 130, 246]; break;
        }

        pdf.setFillColor(...fill);
        pdf.setDrawColor(...border);
        pdf.setLineWidth(0.4);

        if (node.type === 'decision') {
          // Diamond
          const cx = pos.x + pos.w / 2;
          const cy = pos.y + pos.h / 2;
          const hw = pos.w / 2;
          const hh = pos.h / 2;
          
          pdf.triangle(cx, cy - hh, cx + hw, cy, cx, cy + hh, 'F');
          pdf.triangle(cx, cy - hh, cx - hw, cy, cx, cy + hh, 'F');
          pdf.line(cx, cy - hh, cx + hw, cy);
          pdf.line(cx + hw, cy, cx, cy + hh);
          pdf.line(cx, cy + hh, cx - hw, cy);
          pdf.line(cx - hw, cy, cx, cy - hh);
        } else if (node.type === 'start' || node.type === 'end') {
          pdf.roundedRect(pos.x, pos.y, pos.w, pos.h, 3, 3, 'FD');
        } else {
          pdf.roundedRect(pos.x, pos.y, pos.w, pos.h, 1, 1, 'FD');
        }

        // Text
        pdf.setTextColor(248, 250, 252);
        pdf.setFontSize(3.2);
        pdf.setFont('helvetica', 'bold');
        
        const lines = pdf.splitTextToSize(nodeTitle, pos.w - 2);
        const lh = 2;
        const th = Math.min(lines.length, 3) * lh;
        const ty = pos.y + (pos.h - th) / 2 + lh;
        
        lines.slice(0, 3).forEach((line: string, i: number) => {
          pdf.text(line, pos.x + pos.w / 2, ty + i * lh, { align: 'center' });
        });
      };

      // Draw all nodes
      Object.keys(positions).forEach(drawNode);

      // Legend
      const ly = pageHeight - 10;
      pdf.setFontSize(5);
      
      const legend = [
        { label: 'Start/End', color: [168, 85, 247] },
        { label: 'Decision', color: [234, 179, 8] },
        { label: 'Process', color: [59, 130, 246] },
        { label: 'Category', color: [34, 197, 94] }
      ];

      let lx = margin;
      legend.forEach(item => {
        pdf.setFillColor(item.color[0], item.color[1], item.color[2]);
        pdf.rect(lx, ly - 2, 4, 3, 'F');
        pdf.setTextColor(200, 200, 200);
        pdf.text(item.label, lx + 5, ly, { align: 'left' });
        lx += 28;
      });

      // Website
      pdf.setTextColor(168, 85, 247);
      pdf.setFontSize(6);
      pdf.text('www.Objective-Reality.info', pageWidth - margin, ly, { align: 'right' });

      // Save
      pdf.save(`Quest-Flowchart-${language.toUpperCase()}.pdf`);

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
