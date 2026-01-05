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
  },
  goTo: {
    en: 'Go to',
    de: 'Weiter zu',
    fr: 'Aller à',
    es: 'Ir a'
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
  exitPoints?: { targetPage: number; label: string; position: 'left' | 'center' | 'right' }[];
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
      { nodeIds: ['StartQuest'] },
      { nodeIds: ['Start'] },
      { nodeIds: ['SourceQuality'] },
      { nodeIds: ['ExpertiseCheck'] },
      { nodeIds: ['SeekExpert', 'Collect'], spacing: 'wide' },
      { nodeIds: ['AssessNature'] }
    ],
    exitPoints: [
      { targetPage: 1, label: 'Yes → Hypothesis', position: 'left' },
      { targetPage: 2, label: 'No → Classification', position: 'right' }
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
    ],
    exitPoints: [
      { targetPage: 3, label: '→ Evidence Evaluation', position: 'center' }
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
      { nodeIds: ['NotTestable'] }
    ],
    exitPoints: [
      { targetPage: 5, label: '→ Knowledge Database', position: 'center' }
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
      { nodeIds: ['Conclude', 'MedConfWall', 'TimeReview'], spacing: 'compact' }
    ],
    exitPoints: [
      { targetPage: 4, label: 'High → Bias Management', position: 'left' },
      { targetPage: 5, label: 'Med/Low → Knowledge DB', position: 'right' }
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
    ],
    exitPoints: [
      { targetPage: 5, label: '→ Knowledge Database', position: 'center' }
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
      { nodeIds: ['ConfirmedUntrue', 'LowConfWall'], spacing: 'wide' },
      { nodeIds: ['EndInquiry'] },
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
      const margin = 12;
      const topMargin = 32;
      const bottomMargin = 28;
      const contentHeight = pageHeight - topMargin - bottomMargin;

      // Node dimensions - compact padding
      const nw = 48; // node width
      const nh = 14;  // node height (reduced)
      const vGap = 6; // vertical gap between rows
      const hGap = 8; // horizontal gap between nodes

      const totalPages = flowStructure.length;

      // Calculate positions for all nodes
      const positions: Record<string, NodePos> = {};

      // Layout each page
      flowStructure.forEach((pageInfo, pageIndex) => {
        let currentY = topMargin + 3;
        const centerX = pageWidth / 2;

        pageInfo.rows.forEach(row => {
          const nodeCount = row.nodeIds.length;
          const spacing = row.spacing || 'normal';
          
          let gapBetween: number;
          if (spacing === 'wide') {
            gapBetween = hGap * 2.5;
          } else if (spacing === 'compact') {
            gapBetween = hGap * 0.5;
          } else {
            gapBetween = hGap;
          }
          
          const totalRowWidth = nodeCount * nw + (nodeCount - 1) * gapBetween;
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

        // Background
        pdf.setFillColor(15, 23, 42);
        pdf.rect(0, 0, pageWidth, pageHeight, 'F');

        // Main title
        pdf.setTextColor(168, 85, 247);
        pdf.setFontSize(14);
        pdf.setFont('helvetica', 'bold');
        const title = translations.title[language as keyof typeof translations.title] || translations.title.en;
        pdf.text(title, pageWidth / 2, 12, { align: 'center' });

        // Page subtitle
        const pageTitle = pageInfo.title[language] || pageInfo.title.en;
        const sg = subgraphs.find(s => s.id === pageInfo.subgraphs[0]);
        const sgColor = sg?.color || '#a855f7';
        const sgR = parseInt(sgColor.slice(1, 3), 16);
        const sgG = parseInt(sgColor.slice(3, 5), 16);
        const sgB = parseInt(sgColor.slice(5, 7), 16);
        
        pdf.setFontSize(11);
        pdf.setTextColor(sgR, sgG, sgB);
        pdf.text(pageTitle, pageWidth / 2, 21, { align: 'center' });

        // Decorative line
        pdf.setDrawColor(sgR, sgG, sgB);
        pdf.setLineWidth(0.4);
        const lineWidth = Math.min(pdf.getTextWidth(pageTitle) + 16, pageWidth - 2 * margin);
        pdf.line(pageWidth / 2 - lineWidth / 2, 24, pageWidth / 2 + lineWidth / 2, 24);

        // Get nodes for this page
        const pageNodeIds = pageInfo.rows.flatMap(r => r.nodeIds);
        const pageNodes = nodes.filter(n => pageNodeIds.includes(n.id));

        // Draw arrows
        const drawArrow = (fromId: string, toId: string, label?: string, color?: string) => {
          const from = positions[fromId];
          const to = positions[toId];
          if (!from || !to) return;
          if (from.page !== pageIndex) return;

          const c = color || '#64748b';
          pdf.setDrawColor(parseInt(c.slice(1, 3), 16), parseInt(c.slice(3, 5), 16), parseInt(c.slice(5, 7), 16));
          pdf.setLineWidth(0.5);

          const fromCx = from.x + from.w / 2;
          const fromBottom = from.y + from.h;
          const toCx = to.x + to.w / 2;
          const toTop = to.y;

          // Skip cross-page arrows - they're handled by exit points
          if (to.page !== pageIndex) return;

          const midY = (fromBottom + toTop) / 2;

          if (Math.abs(fromCx - toCx) < 3) {
            pdf.line(fromCx, fromBottom, fromCx, toTop);
          } else {
            pdf.line(fromCx, fromBottom, fromCx, midY);
            pdf.line(fromCx, midY, toCx, midY);
            pdf.line(toCx, midY, toCx, toTop);
          }

          // Arrowhead
          const aLen = 1.5;
          pdf.line(toCx, toTop, toCx - aLen, toTop - aLen);
          pdf.line(toCx, toTop, toCx + aLen, toTop - aLen);

          if (label) {
            pdf.setFontSize(7);
            pdf.setTextColor(parseInt(c.slice(1, 3), 16), parseInt(c.slice(3, 5), 16), parseInt(c.slice(5, 7), 16));
            const labelX = Math.abs(fromCx - toCx) < 3 ? fromCx + 6 : (fromCx + toCx) / 2;
            pdf.text(label, labelX, midY - 1, { align: 'center' });
          }
        };

        const yes = language === 'de' ? 'Ja' : language === 'fr' ? 'Oui' : language === 'es' ? 'Sí' : 'Yes';
        const no = language === 'de' ? 'Nein' : language === 'fr' ? 'Non' : 'No';

        // Draw connections
        pageNodes.forEach(node => {
          if (node.nextNodeId && positions[node.nextNodeId]?.page === pageIndex) {
            drawArrow(node.id, node.nextNodeId);
          }
          if (node.options) {
            node.options.forEach(opt => {
              if (positions[opt.nextNodeId]?.page === pageIndex) {
                const lbl = opt.style === 'yes' ? yes : opt.style === 'no' ? no : undefined;
                const clr = opt.style === 'yes' ? '#22c55e' : opt.style === 'no' ? '#ef4444' : '#eab308';
                drawArrow(node.id, opt.nextNodeId, lbl, clr);
              }
            });
          }
        });

        // Draw nodes
        const drawNode = (node: FlowchartNode) => {
          const pos = positions[node.id];
          if (!pos || pos.page !== pageIndex) return;

          const nodeTitle = node.title[language] || node.title.en;

          let fillColor: [number, number, number];
          let borderColor: [number, number, number];
          const textColor: [number, number, number] = [248, 250, 252];

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
          pdf.setLineWidth(0.6);

          if (node.type === 'decision') {
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
            pdf.roundedRect(pos.x, pos.y, pos.w, pos.h, 5, 5, 'FD');
          } else if (node.type === 'database') {
            pdf.roundedRect(pos.x, pos.y, pos.w, pos.h, 2, 2, 'FD');
            pdf.setLineWidth(0.3);
            pdf.line(pos.x + 2, pos.y + 2.5, pos.x + pos.w - 2, pos.y + 2.5);
          } else {
            pdf.roundedRect(pos.x, pos.y, pos.w, pos.h, 2, 2, 'FD');
          }

          // Text - compact
          pdf.setTextColor(...textColor);
          pdf.setFontSize(7);
          pdf.setFont('helvetica', 'bold');

          const maxWidth = pos.w - 3;
          const lines = pdf.splitTextToSize(nodeTitle, maxWidth);
          const lineHeight = 3;
          const maxLines = Math.floor((pos.h - 2) / lineHeight);
          const displayLines = lines.slice(0, maxLines);
          const totalTextHeight = displayLines.length * lineHeight;
          const startY = pos.y + (pos.h - totalTextHeight) / 2 + lineHeight * 0.6;

          displayLines.forEach((line: string, i: number) => {
            pdf.text(line, pos.x + pos.w / 2, startY + i * lineHeight, { align: 'center' });
          });
        };

        pageNodes.forEach(drawNode);

        // Draw EXIT POINTS - clear navigation boxes at bottom
        if (pageInfo.exitPoints && pageInfo.exitPoints.length > 0) {
          const exitY = pageHeight - bottomMargin - 8;
          const exitBoxHeight = 12;
          const exitBoxWidth = 70;
          
          pageInfo.exitPoints.forEach((exit, idx) => {
            let exitX: number;
            const numExits = pageInfo.exitPoints!.length;
            
            if (exit.position === 'left') {
              exitX = margin + 10;
            } else if (exit.position === 'right') {
              exitX = pageWidth - margin - exitBoxWidth - 10;
            } else {
              exitX = pageWidth / 2 - exitBoxWidth / 2;
            }
            
            // If multiple exits, distribute evenly
            if (numExits > 1 && exit.position === 'center') {
              const spacing = (pageWidth - 2 * margin - exitBoxWidth) / (numExits + 1);
              exitX = margin + spacing * (idx + 1);
            }

            // Get target page info
            const targetPageInfo = flowStructure[exit.targetPage];
            const targetTitle = targetPageInfo?.title[language] || targetPageInfo?.title.en || '';

            // Draw exit box
            pdf.setFillColor(40, 50, 70);
            pdf.setDrawColor(168, 85, 247);
            pdf.setLineWidth(0.8);
            pdf.roundedRect(exitX, exitY, exitBoxWidth, exitBoxHeight, 3, 3, 'FD');

            // Arrow from last row to exit box
            const lastRow = pageInfo.rows[pageInfo.rows.length - 1];
            if (lastRow && lastRow.nodeIds.length > 0) {
              const lastNodeId = exit.position === 'left' ? lastRow.nodeIds[0] : 
                                 exit.position === 'right' ? lastRow.nodeIds[lastRow.nodeIds.length - 1] :
                                 lastRow.nodeIds[Math.floor(lastRow.nodeIds.length / 2)];
              const lastPos = positions[lastNodeId];
              if (lastPos) {
                pdf.setDrawColor(168, 85, 247);
                pdf.setLineWidth(0.5);
                const fromX = lastPos.x + lastPos.w / 2;
                const toX = exitX + exitBoxWidth / 2;
                pdf.line(fromX, lastPos.y + lastPos.h, fromX, lastPos.y + lastPos.h + 3);
                pdf.line(fromX, lastPos.y + lastPos.h + 3, toX, exitY - 2);
                pdf.line(toX, exitY - 2, toX, exitY);
              }
            }

            // Exit text
            pdf.setTextColor(168, 85, 247);
            pdf.setFontSize(8);
            pdf.setFont('helvetica', 'bold');
            pdf.text(`Page ${exit.targetPage + 1}`, exitX + exitBoxWidth / 2, exitY + 4, { align: 'center' });
            
            pdf.setFontSize(6);
            pdf.setTextColor(200, 200, 220);
            pdf.text(exit.label, exitX + exitBoxWidth / 2, exitY + 8, { align: 'center' });
          });
        }

        // Footer
        pdf.setFillColor(15, 25, 45);
        pdf.rect(0, pageHeight - 10, pageWidth, 10, 'F');

        pdf.setTextColor(130, 130, 150);
        pdf.setFontSize(8);
        const pageText = `${translations.page[language as keyof typeof translations.page] || 'Page'} ${pageIndex + 1} ${translations.of[language as keyof typeof translations.of] || 'of'} ${totalPages}`;
        pdf.text(pageText, margin, pageHeight - 4);

        pdf.setTextColor(168, 85, 247);
        pdf.setFontSize(8);
        pdf.text('www.Objective-Reality.info', pageWidth - margin, pageHeight - 4, { align: 'right' });

        // Legend on first page
        if (pageIndex === 0) {
          const legendY = pageHeight - bottomMargin - 22;
          pdf.setFontSize(6);
          
          const legend = [
            { label: 'Start/End', color: [168, 85, 247] as [number, number, number] },
            { label: 'Decision', color: [234, 179, 8] as [number, number, number] },
            { label: 'Process', color: [100, 116, 139] as [number, number, number] },
            { label: 'Category', color: [34, 197, 94] as [number, number, number] }
          ];

          let lx = margin;
          legend.forEach(item => {
            pdf.setFillColor(...item.color);
            pdf.roundedRect(lx, legendY - 1.5, 6, 4, 1, 1, 'F');
            pdf.setTextColor(170, 170, 180);
            pdf.text(item.label, lx + 8, legendY + 1);
            lx += 35;
          });
        }
      }

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
