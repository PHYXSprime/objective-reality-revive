import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { FileDown, Loader2 } from 'lucide-react';
import { useQuestLanguage } from '@/contexts/QuestLanguageContext';
import { nodes, subgraphs, type FlowchartNode, type SubgraphId } from '@/data/flowchartData';
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
  page: {
    en: 'Page',
    de: 'Seite',
    fr: 'Page',
    es: 'Página'
  },
  of: {
    en: 'of',
    de: 'von',
    fr: 'de',
    es: 'de'
  }
};

interface NodePos {
  x: number;
  y: number;
  w: number;
  h: number;
  page: number;
}

// Define the hierarchical flow structure for each page
const flowStructure: { 
  page: number;
  title: Record<string, string>;
  subgraphs: SubgraphId[];
  rows: { nodeIds: string[]; spacing?: 'wide' | 'normal' | 'compact' }[];
}[] = [
  {
    page: 0,
    title: {
      en: 'Data Collection & Initial Assessment',
      de: 'Datenerhebung & Erste Bewertung',
      fr: 'Collecte de données & Évaluation',
      es: 'Recopilación de datos & Evaluación'
    },
    subgraphs: ['DC'],
    rows: [
      { nodeIds: ['StartQuest'], spacing: 'wide' },
      { nodeIds: ['Start'] },
      { nodeIds: ['SourceQuality'] },
      { nodeIds: ['ExpertiseCheck'] },
      { nodeIds: ['SeekExpert', 'Collect'], spacing: 'wide' },
      { nodeIds: ['AssessNature'] }
    ]
  },
  {
    page: 1,
    title: {
      en: 'Hypothesis & Experimentation',
      de: 'Hypothese & Experiment',
      fr: 'Hypothèse & Expérimentation',
      es: 'Hipótesis & Experimentación'
    },
    subgraphs: ['HE'],
    rows: [
      { nodeIds: ['Formulate'] },
      { nodeIds: ['Falsifiability'] },
      { nodeIds: ['ReformulateHyp', 'Design'], spacing: 'wide' },
      { nodeIds: ['CollectMore'] },
      { nodeIds: ['Bayes'] }
    ]
  },
  {
    page: 2,
    title: {
      en: 'Non-Testable Classification',
      de: 'Nicht-prüfbare Klassifizierung',
      fr: 'Classification non testable',
      es: 'Clasificación no comprobable'
    },
    subgraphs: ['NT'],
    rows: [
      { nodeIds: ['IsSupernatural'] },
      { nodeIds: ['Religion', 'IsRigid'], spacing: 'wide' },
      { nodeIds: ['Dogma', 'IsIdeology'], spacing: 'wide' },
      { nodeIds: ['Ideology', 'IsSecret'], spacing: 'wide' },
      { nodeIds: ['Conspiracy', 'Gossip'], spacing: 'wide' },
      { nodeIds: ['NotTestable'] },
      { nodeIds: ['EndInquiry'] }
    ]
  },
  {
    page: 3,
    title: {
      en: 'Evidence Evaluation',
      de: 'Beweisbewertung',
      fr: 'Évaluation des preuves',
      es: 'Evaluación de evidencia'
    },
    subgraphs: ['EE'],
    rows: [
      { nodeIds: ['Evaluate'] },
      { nodeIds: ['MetaAnalysis'] },
      { nodeIds: ['Conflicts'] },
      { nodeIds: ['AdjustForConflict', 'ConfidenceCheck'], spacing: 'wide' },
      { nodeIds: ['ProceedHigh', 'ProceedMedium', 'Reevaluate'], spacing: 'compact' },
      { nodeIds: ['Conclude', 'MedConfWall', 'TimeReview'], spacing: 'compact' },
      { nodeIds: ['LowConfWall'] }
    ]
  },
  {
    page: 4,
    title: {
      en: 'Bias Management',
      de: 'Bias-Management',
      fr: 'Gestion des biais',
      es: 'Gestión de sesgos'
    },
    subgraphs: ['BM'],
    rows: [
      { nodeIds: ['AddressBiases'] },
      { nodeIds: ['MotivatedReasoning'] },
      { nodeIds: ['AcknowledgeBias', 'Steelman'], spacing: 'wide' },
      { nodeIds: ['Debias'] },
      { nodeIds: ['CriticalReview'] },
      { nodeIds: ['AvoidFallacies'] },
      { nodeIds: ['Verify'] },
      { nodeIds: ['PeerReview'] },
      { nodeIds: ['Feedback'] }
    ]
  },
  {
    page: 5,
    title: {
      en: 'Knowledge Database',
      de: 'Wissensdatenbank',
      fr: 'Base de connaissances',
      es: 'Base de conocimiento'
    },
    subgraphs: ['KB'],
    rows: [
      { nodeIds: ['AI_Reevaluate', 'HighConfTrue', 'ErrorDetected'], spacing: 'compact' },
      { nodeIds: ['ConfirmedUntrue'] },
      { nodeIds: ['KnowledgeDB'] }
    ]
  }
];

export default function FlowchartPDFExport() {
  const { language, t } = useQuestLanguage();
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePDF = async () => {
    setIsGenerating(true);

    try {
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      const pageWidth = 210;
      const pageHeight = 297;
      const margin = 15;
      const topMargin = 35;
      const bottomMargin = 20;
      const contentWidth = pageWidth - 2 * margin;
      const contentHeight = pageHeight - topMargin - bottomMargin;

      // Node dimensions - much larger for readability
      const nw = 50; // node width
      const nh = 18;  // node height
      const vGap = 8; // vertical gap between rows
      const hGap = 12; // horizontal gap between nodes

      const totalPages = flowStructure.length;

      // Calculate positions for all nodes
      const positions: Record<string, NodePos> = {};

      // Layout each page
      flowStructure.forEach((pageInfo, pageIndex) => {
        let currentY = topMargin + 5;
        const centerX = pageWidth / 2;

        pageInfo.rows.forEach(row => {
          const nodeCount = row.nodeIds.length;
          const spacing = row.spacing || 'normal';
          
          // Calculate total width for this row
          let totalRowWidth: number;
          let gapBetween: number;
          
          if (spacing === 'wide') {
            gapBetween = hGap * 2;
          } else if (spacing === 'compact') {
            gapBetween = hGap * 0.6;
          } else {
            gapBetween = hGap;
          }
          
          totalRowWidth = nodeCount * nw + (nodeCount - 1) * gapBetween;
          
          // Start X to center the row
          let startX = centerX - totalRowWidth / 2;
          
          row.nodeIds.forEach((nodeId, idx) => {
            const node = nodes.find(n => n.id === nodeId);
            if (node) {
              positions[nodeId] = {
                x: startX + idx * (nw + gapBetween),
                y: currentY,
                w: nw,
                h: nh,
                page: pageIndex
              };
            }
          });

          currentY += nh + vGap;
        });
      });

      // Draw each page
      for (let pageIndex = 0; pageIndex < totalPages; pageIndex++) {
        if (pageIndex > 0) {
          pdf.addPage();
        }

        const pageInfo = flowStructure[pageIndex];

        // Background - deep space blue
        pdf.setFillColor(15, 23, 42);
        pdf.rect(0, 0, pageWidth, pageHeight, 'F');

        // Main title
        pdf.setTextColor(168, 85, 247);
        pdf.setFontSize(16);
        pdf.setFont('helvetica', 'bold');
        const title = translations.title[language as keyof typeof translations.title] || translations.title.en;
        pdf.text(title, pageWidth / 2, 15, { align: 'center' });

        // Page subtitle with subgraph color
        const pageTitle = pageInfo.title[language] || pageInfo.title.en;
        const sg = subgraphs.find(s => s.id === pageInfo.subgraphs[0]);
        const sgColor = sg?.color || '#a855f7';
        const sgR = parseInt(sgColor.slice(1, 3), 16);
        const sgG = parseInt(sgColor.slice(3, 5), 16);
        const sgB = parseInt(sgColor.slice(5, 7), 16);
        
        pdf.setFontSize(12);
        pdf.setTextColor(sgR, sgG, sgB);
        pdf.text(pageTitle, pageWidth / 2, 24, { align: 'center' });

        // Decorative line under subtitle
        pdf.setDrawColor(sgR, sgG, sgB);
        pdf.setLineWidth(0.5);
        const lineWidth = Math.min(pdf.getTextWidth(pageTitle) + 20, contentWidth);
        pdf.line(pageWidth / 2 - lineWidth / 2, 27, pageWidth / 2 + lineWidth / 2, 27);

        // Get nodes for this page
        const pageNodeIds = pageInfo.rows.flatMap(r => r.nodeIds);
        const pageNodes = nodes.filter(n => pageNodeIds.includes(n.id));

        // Draw arrows first (behind nodes)
        const drawArrow = (fromId: string, toId: string, label?: string, color?: string) => {
          const from = positions[fromId];
          const to = positions[toId];
          if (!from || !to) return;
          if (from.page !== pageIndex) return;

          const c = color || '#64748b';
          pdf.setDrawColor(parseInt(c.slice(1, 3), 16), parseInt(c.slice(3, 5), 16), parseInt(c.slice(5, 7), 16));
          pdf.setLineWidth(0.6);

          const fromCx = from.x + from.w / 2;
          const fromBottom = from.y + from.h;
          const toCx = to.x + to.w / 2;
          const toTop = to.y;

          // If target is on different page
          if (to.page !== pageIndex) {
            pdf.line(fromCx, fromBottom, fromCx, fromBottom + 6);
            pdf.setFontSize(7);
            pdf.setTextColor(parseInt(c.slice(1, 3), 16), parseInt(c.slice(3, 5), 16), parseInt(c.slice(5, 7), 16));
            const continueText = `→ Page ${to.page + 1}`;
            pdf.text(continueText, fromCx, fromBottom + 10, { align: 'center' });
            return;
          }

          // Same page arrow
          const midY = (fromBottom + toTop) / 2;

          // Check if it's a straight down arrow
          if (Math.abs(fromCx - toCx) < 5) {
            // Straight vertical arrow
            pdf.line(fromCx, fromBottom, fromCx, toTop);
          } else {
            // Elbow connection
            pdf.line(fromCx, fromBottom, fromCx, midY);
            pdf.line(fromCx, midY, toCx, midY);
            pdf.line(toCx, midY, toCx, toTop);
          }

          // Arrowhead
          const aLen = 2;
          pdf.line(toCx, toTop, toCx - aLen, toTop - aLen);
          pdf.line(toCx, toTop, toCx + aLen, toTop - aLen);

          // Label
          if (label) {
            pdf.setFontSize(8);
            pdf.setTextColor(parseInt(c.slice(1, 3), 16), parseInt(c.slice(3, 5), 16), parseInt(c.slice(5, 7), 16));
            const labelX = Math.abs(fromCx - toCx) < 5 ? fromCx + 8 : (fromCx + toCx) / 2;
            const labelY = midY - 2;
            pdf.text(label, labelX, labelY, { align: 'center' });
          }
        };

        const yes = language === 'de' ? 'Ja' : language === 'fr' ? 'Oui' : language === 'es' ? 'Sí' : 'Yes';
        const no = language === 'de' ? 'Nein' : language === 'fr' ? 'Non' : 'No';

        // Draw all connections for this page
        pageNodes.forEach(node => {
          if (node.nextNodeId) {
            drawArrow(node.id, node.nextNodeId);
          }
          if (node.options) {
            node.options.forEach(opt => {
              const lbl = opt.style === 'yes' ? yes : opt.style === 'no' ? no : undefined;
              const clr = opt.style === 'yes' ? '#22c55e' : opt.style === 'no' ? '#ef4444' : '#eab308';
              drawArrow(node.id, opt.nextNodeId, lbl, clr);
            });
          }
        });

        // Draw nodes
        const drawNode = (node: FlowchartNode) => {
          const pos = positions[node.id];
          if (!pos || pos.page !== pageIndex) return;

          const nodeTitle = node.title[language] || node.title.en;

          // Colors by type
          let fillColor: [number, number, number];
          let borderColor: [number, number, number];
          let textColor: [number, number, number] = [248, 250, 252];

          switch (node.type) {
            case 'start':
              fillColor = [88, 28, 135];
              borderColor = [168, 85, 247];
              break;
            case 'decision':
              fillColor = [120, 70, 20];
              borderColor = [234, 179, 8];
              break;
            case 'end':
              fillColor = [20, 83, 45];
              borderColor = [34, 197, 94];
              break;
            case 'category':
              if (node.categoryColor) {
                const cc = node.categoryColor;
                const ccR = parseInt(cc.slice(1, 3), 16);
                const ccG = parseInt(cc.slice(3, 5), 16);
                const ccB = parseInt(cc.slice(5, 7), 16);
                fillColor = [Math.floor(ccR * 0.25), Math.floor(ccG * 0.25), Math.floor(ccB * 0.25)];
                borderColor = [ccR, ccG, ccB];
              } else {
                fillColor = [30, 58, 95];
                borderColor = [34, 197, 94];
              }
              break;
            case 'database':
              fillColor = [15, 60, 40];
              borderColor = [34, 197, 94];
              break;
            default:
              fillColor = [30, 41, 59];
              borderColor = [100, 116, 139];
              break;
          }

          pdf.setFillColor(...fillColor);
          pdf.setDrawColor(...borderColor);
          pdf.setLineWidth(0.8);

          if (node.type === 'decision') {
            // Diamond shape - larger
            const cx = pos.x + pos.w / 2;
            const cy = pos.y + pos.h / 2;
            const hw = pos.w / 2;
            const hh = pos.h / 2;

            // Draw filled diamond
            const points = [
              [cx, cy - hh],       // top
              [cx + hw, cy],       // right
              [cx, cy + hh],       // bottom
              [cx - hw, cy]        // left
            ];
            
            // Fill using triangles
            pdf.triangle(points[0][0], points[0][1], points[1][0], points[1][1], points[2][0], points[2][1], 'F');
            pdf.triangle(points[0][0], points[0][1], points[2][0], points[2][1], points[3][0], points[3][1], 'F');
            
            // Draw border
            pdf.line(points[0][0], points[0][1], points[1][0], points[1][1]);
            pdf.line(points[1][0], points[1][1], points[2][0], points[2][1]);
            pdf.line(points[2][0], points[2][1], points[3][0], points[3][1]);
            pdf.line(points[3][0], points[3][1], points[0][0], points[0][1]);
          } else if (node.type === 'start' || node.type === 'end') {
            // Rounded rectangle for start/end
            pdf.roundedRect(pos.x, pos.y, pos.w, pos.h, 6, 6, 'FD');
          } else if (node.type === 'database') {
            // Cylinder shape for database
            pdf.roundedRect(pos.x, pos.y, pos.w, pos.h, 2, 2, 'FD');
            // Add subtle lines at top
            pdf.setDrawColor(...borderColor);
            pdf.setLineWidth(0.3);
            pdf.line(pos.x + 3, pos.y + 3, pos.x + pos.w - 3, pos.y + 3);
          } else {
            // Regular rounded rectangle
            pdf.roundedRect(pos.x, pos.y, pos.w, pos.h, 3, 3, 'FD');
          }

          // Text - larger and more readable
          pdf.setTextColor(...textColor);
          pdf.setFontSize(8);
          pdf.setFont('helvetica', 'bold');

          const maxWidth = pos.w - 6;
          const lines = pdf.splitTextToSize(nodeTitle, maxWidth);
          const lineHeight = 3.5;
          const maxLines = Math.floor((pos.h - 4) / lineHeight);
          const displayLines = lines.slice(0, maxLines);
          const totalTextHeight = displayLines.length * lineHeight;
          const startY = pos.y + (pos.h - totalTextHeight) / 2 + lineHeight * 0.7;

          displayLines.forEach((line: string, i: number) => {
            pdf.text(line, pos.x + pos.w / 2, startY + i * lineHeight, { align: 'center' });
          });
        };

        pageNodes.forEach(drawNode);

        // Page footer
        pdf.setFillColor(20, 30, 50);
        pdf.rect(0, pageHeight - 12, pageWidth, 12, 'F');

        // Page number
        pdf.setTextColor(140, 140, 160);
        pdf.setFontSize(9);
        const pageText = `${translations.page[language as keyof typeof translations.page] || 'Page'} ${pageIndex + 1} ${translations.of[language as keyof typeof translations.of] || 'of'} ${totalPages}`;
        pdf.text(pageText, margin, pageHeight - 5);

        // Website
        pdf.setTextColor(168, 85, 247);
        pdf.setFontSize(9);
        pdf.text('www.Objective-Reality.info', pageWidth - margin, pageHeight - 5, { align: 'right' });

        // Legend on first page only
        if (pageIndex === 0) {
          const legendY = pageHeight - 25;
          pdf.setFontSize(7);
          
          const legend = [
            { label: 'Start/End', color: [168, 85, 247] as [number, number, number] },
            { label: 'Decision', color: [234, 179, 8] as [number, number, number] },
            { label: 'Process', color: [100, 116, 139] as [number, number, number] },
            { label: 'Category', color: [34, 197, 94] as [number, number, number] }
          ];

          let lx = margin;
          legend.forEach(item => {
            pdf.setFillColor(...item.color);
            pdf.roundedRect(lx, legendY - 2, 8, 5, 1, 1, 'F');
            pdf.setTextColor(180, 180, 180);
            pdf.text(item.label, lx + 10, legendY + 1.5);
            lx += 40;
          });
        }
      }

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
