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
  continued: {
    en: '→ continues on page',
    de: '→ weiter auf Seite',
    fr: '→ continue à la page',
    es: '→ continúa en página'
  }
};

interface NodePos {
  x: number;
  y: number;
  w: number;
  h: number;
  page: number;
}

// Define page structure - which subgraphs go on which page
const pageStructure: { subgraphs: SubgraphId[]; title: Record<string, string> }[] = [
  {
    subgraphs: ['DC'],
    title: {
      en: 'Data Collection & Initial Assessment',
      de: 'Datenerhebung & Erste Bewertung',
      fr: 'Collecte de données & Évaluation initiale',
      es: 'Recopilación de datos & Evaluación inicial'
    }
  },
  {
    subgraphs: ['HE', 'NT'],
    title: {
      en: 'Hypothesis & Non-Testable Classification',
      de: 'Hypothese & Nicht-prüfbare Klassifizierung',
      fr: 'Hypothèse & Classification non testable',
      es: 'Hipótesis & Clasificación no comprobable'
    }
  },
  {
    subgraphs: ['BA', 'EE'],
    title: {
      en: 'Bayes Theorem & Evidence Evaluation',
      de: 'Bayes-Theorem & Beweisbewertung',
      fr: 'Théorème de Bayes & Évaluation des preuves',
      es: 'Teorema de Bayes & Evaluación de evidencia'
    }
  },
  {
    subgraphs: ['BM', 'KB'],
    title: {
      en: 'Bias Management & Knowledge Database',
      de: 'Bias-Management & Wissensdatenbank',
      fr: 'Gestion des biais & Base de connaissances',
      es: 'Gestión de sesgos & Base de conocimiento'
    }
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
      const margin = 10;
      const topMargin = 28;
      const bottomMargin = 18;
      const contentWidth = pageWidth - 2 * margin;
      const contentHeight = pageHeight - topMargin - bottomMargin;

      // Node dimensions
      const nw = 24; // node width
      const nh = 9;  // node height
      const vGap = 5; // vertical gap
      const hGap = 4; // horizontal gap

      const totalPages = pageStructure.length;

      // Calculate positions for all nodes
      const positions: Record<string, NodePos> = {};

      // Helper to get nodes for a page
      const getNodesForPage = (pageIndex: number): FlowchartNode[] => {
        const pageSubgraphs = pageStructure[pageIndex].subgraphs;
        return nodes.filter(n => pageSubgraphs.includes(n.subgraph));
      };

      // Layout nodes for each page
      for (let pageIndex = 0; pageIndex < totalPages; pageIndex++) {
        const pageNodes = getNodesForPage(pageIndex);
        const startY = topMargin + 8;
        
        // Create a simple grid layout for the page
        let currentY = startY;
        let currentX = margin;
        let maxHeightInRow = 0;
        let nodesInRow = 0;
        const maxNodesPerRow = Math.floor(contentWidth / (nw + hGap));

        // Group nodes by subgraph for better organization
        const subgraphGroups: Record<string, FlowchartNode[]> = {};
        pageNodes.forEach(node => {
          if (!subgraphGroups[node.subgraph]) {
            subgraphGroups[node.subgraph] = [];
          }
          subgraphGroups[node.subgraph].push(node);
        });

        // Layout each subgraph group
        Object.entries(subgraphGroups).forEach(([subgraphId, sgNodes]) => {
          // Add subgraph header spacing
          if (currentY > startY) {
            currentY += 4;
          }
          
          // Reset row for new subgraph
          currentX = margin;
          nodesInRow = 0;

          sgNodes.forEach((node) => {
            // Check if we need a new row
            if (nodesInRow >= maxNodesPerRow || currentX + nw > pageWidth - margin) {
              currentY += nh + vGap;
              currentX = margin;
              nodesInRow = 0;
            }

            // Check if we're running out of vertical space
            if (currentY + nh > pageHeight - bottomMargin - 10) {
              currentY = startY;
              currentX = margin;
              nodesInRow = 0;
            }

            positions[node.id] = {
              x: currentX,
              y: currentY,
              w: nw,
              h: nh,
              page: pageIndex
            };

            currentX += nw + hGap;
            nodesInRow++;
            maxHeightInRow = Math.max(maxHeightInRow, nh);
          });

          // Move to next row after subgraph
          currentY += nh + vGap;
          currentX = margin;
          nodesInRow = 0;
        });
      }

      // Draw each page
      for (let pageIndex = 0; pageIndex < totalPages; pageIndex++) {
        if (pageIndex > 0) {
          pdf.addPage();
        }

        // Background
        pdf.setFillColor(15, 23, 42);
        pdf.rect(0, 0, pageWidth, pageHeight, 'F');

        // Main title
        pdf.setTextColor(168, 85, 247);
        pdf.setFontSize(12);
        pdf.setFont('helvetica', 'bold');
        const title = translations.title[language as keyof typeof translations.title] || translations.title.en;
        pdf.text(title, pageWidth / 2, 10, { align: 'center' });

        // Page subtitle
        const pageTitle = pageStructure[pageIndex].title[language] || pageStructure[pageIndex].title.en;
        pdf.setFontSize(9);
        pdf.setTextColor(150, 150, 180);
        pdf.text(pageTitle, pageWidth / 2, 17, { align: 'center' });

        // Subgraph color indicators
        const pageSubgraphs = pageStructure[pageIndex].subgraphs;
        let indicatorX = margin;
        pageSubgraphs.forEach(sgId => {
          const sg = subgraphs.find(s => s.id === sgId);
          if (sg) {
            const color = sg.color;
            const r = parseInt(color.slice(1, 3), 16);
            const g = parseInt(color.slice(3, 5), 16);
            const b = parseInt(color.slice(5, 7), 16);
            pdf.setFillColor(r, g, b);
            pdf.rect(indicatorX, 21, 3, 3, 'F');
            pdf.setTextColor(200, 200, 200);
            pdf.setFontSize(5);
            const sgTitle = sg.title[language] || sg.title.en;
            pdf.text(sgTitle.substring(0, 25), indicatorX + 4, 23.5);
            indicatorX += 50;
          }
        });

        // Get nodes for this page
        const pageNodes = nodes.filter(n => positions[n.id]?.page === pageIndex);

        // Draw arrows first (behind nodes)
        const drawArrow = (fromId: string, toId: string, label?: string, color?: string) => {
          const from = positions[fromId];
          const to = positions[toId];
          if (!from || !to) return;
          if (from.page !== pageIndex) return;

          const c = color || '#475569';
          pdf.setDrawColor(parseInt(c.slice(1, 3), 16), parseInt(c.slice(3, 5), 16), parseInt(c.slice(5, 7), 16));
          pdf.setLineWidth(0.2);

          // If target is on different page, draw arrow to page indicator
          if (to.page !== pageIndex) {
            const fromCx = from.x + from.w / 2;
            const fromBottom = from.y + from.h;
            pdf.line(fromCx, fromBottom, fromCx, fromBottom + 3);
            
            // Draw page reference
            pdf.setFontSize(3);
            pdf.setTextColor(parseInt(c.slice(1, 3), 16), parseInt(c.slice(3, 5), 16), parseInt(c.slice(5, 7), 16));
            const continueText = `→ P${to.page + 1}`;
            pdf.text(continueText, fromCx, fromBottom + 5, { align: 'center' });
            return;
          }

          const fromCx = from.x + from.w / 2;
          const fromCy = from.y + from.h / 2;
          const toCx = to.x + to.w / 2;
          const toCy = to.y + to.h / 2;

          let sx: number, sy: number, ex: number, ey: number;

          const dx = Math.abs(toCx - fromCx);
          const dy = Math.abs(toCy - fromCy);

          if (dy > dx * 0.5) {
            sy = toCy > fromCy ? from.y + from.h : from.y;
            ey = toCy > fromCy ? to.y : to.y + to.h;
            sx = fromCx;
            ex = toCx;
          } else {
            sx = toCx > fromCx ? from.x + from.w : from.x;
            ex = toCx > fromCx ? to.x : to.x + to.w;
            sy = fromCy;
            ey = toCy;
          }

          // Elbow connection
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
          const aLen = 0.8;
          pdf.line(ex, ey, ex - aLen * Math.cos(angle - 0.4), ey - aLen * Math.sin(angle - 0.4));
          pdf.line(ex, ey, ex - aLen * Math.cos(angle + 0.4), ey - aLen * Math.sin(angle + 0.4));

          if (label) {
            pdf.setFontSize(2.5);
            pdf.setTextColor(parseInt(c.slice(1, 3), 16), parseInt(c.slice(3, 5), 16), parseInt(c.slice(5, 7), 16));
            pdf.text(label, (sx + ex) / 2, (sy + ey) / 2 - 0.5, { align: 'center' });
          }
        };

        const yes = language === 'de' ? 'Ja' : language === 'fr' ? 'Oui' : language === 'es' ? 'Sí' : 'Yes';
        const no = language === 'de' ? 'Nein' : language === 'fr' ? 'Non' : 'No';

        // Draw all connections
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

          // Get subgraph color
          const sg = subgraphs.find(s => s.id === node.subgraph);
          const sgColor = sg?.color || '#3b82f6';
          const sgR = parseInt(sgColor.slice(1, 3), 16);
          const sgG = parseInt(sgColor.slice(3, 5), 16);
          const sgB = parseInt(sgColor.slice(5, 7), 16);

          // Colors by type
          let fill: [number, number, number];
          let border: [number, number, number];

          switch (node.type) {
            case 'start':
              fill = [88, 28, 135];
              border = [168, 85, 247];
              break;
            case 'decision':
              fill = [113, 63, 18];
              border = [234, 179, 8];
              break;
            case 'end':
              fill = [20, 83, 45];
              border = [34, 197, 94];
              break;
            case 'category':
              // Use category-specific color if available
              if (node.categoryColor) {
                const cc = node.categoryColor;
                const ccR = parseInt(cc.slice(1, 3), 16);
                const ccG = parseInt(cc.slice(3, 5), 16);
                const ccB = parseInt(cc.slice(5, 7), 16);
                fill = [Math.floor(ccR * 0.3), Math.floor(ccG * 0.3), Math.floor(ccB * 0.3)];
                border = [ccR, ccG, ccB];
              } else {
                fill = [30, 58, 95];
                border = [34, 197, 94];
              }
              break;
            case 'database':
              fill = [20, 50, 20];
              border = [34, 197, 94];
              break;
            default:
              fill = [Math.floor(sgR * 0.15), Math.floor(sgG * 0.15), Math.floor(sgB * 0.15)];
              border = [sgR, sgG, sgB];
              break;
          }

          pdf.setFillColor(...fill);
          pdf.setDrawColor(...border);
          pdf.setLineWidth(0.3);

          if (node.type === 'decision') {
            // Diamond shape
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
            pdf.roundedRect(pos.x, pos.y, pos.w, pos.h, 2.5, 2.5, 'FD');
          } else if (node.type === 'database') {
            // Cylinder-like shape for database
            pdf.roundedRect(pos.x, pos.y, pos.w, pos.h, 1, 1, 'FD');
            // Add a subtle top arc
            pdf.setDrawColor(...border);
            pdf.line(pos.x + 1, pos.y + 1.5, pos.x + pos.w - 1, pos.y + 1.5);
          } else {
            pdf.roundedRect(pos.x, pos.y, pos.w, pos.h, 1, 1, 'FD');
          }

          // Text
          pdf.setTextColor(248, 250, 252);
          pdf.setFontSize(2.8);
          pdf.setFont('helvetica', 'bold');

          const lines = pdf.splitTextToSize(nodeTitle, pos.w - 1.5);
          const lh = 1.8;
          const maxLines = 3;
          const displayLines = lines.slice(0, maxLines);
          const th = displayLines.length * lh;
          const ty = pos.y + (pos.h - th) / 2 + lh;

          displayLines.forEach((line: string, i: number) => {
            pdf.text(line, pos.x + pos.w / 2, ty + i * lh, { align: 'center' });
          });
        };

        pageNodes.forEach(drawNode);

        // Legend (only on first page)
        if (pageIndex === 0) {
          const ly = pageHeight - 12;
          pdf.setFontSize(4);

          const legend = [
            { label: 'Start/End', color: [168, 85, 247] },
            { label: 'Decision', color: [234, 179, 8] },
            { label: 'Process', color: [59, 130, 246] },
            { label: 'Category', color: [34, 197, 94] }
          ];

          let lx = margin;
          legend.forEach(item => {
            pdf.setFillColor(item.color[0], item.color[1], item.color[2]);
            pdf.rect(lx, ly - 1.5, 3, 2.5, 'F');
            pdf.setTextColor(180, 180, 180);
            pdf.text(item.label, lx + 4, ly, { align: 'left' });
            lx += 25;
          });
        }

        // Page number
        pdf.setTextColor(120, 120, 140);
        pdf.setFontSize(5);
        const pageText = `${translations.page[language as keyof typeof translations.page] || 'Page'} ${pageIndex + 1} ${translations.of[language as keyof typeof translations.of] || 'of'} ${totalPages}`;
        pdf.text(pageText, pageWidth / 2, pageHeight - 6, { align: 'center' });

        // Website
        pdf.setTextColor(168, 85, 247);
        pdf.setFontSize(5);
        pdf.text('www.Objective-Reality.info', pageWidth - margin, pageHeight - 6, { align: 'right' });
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
