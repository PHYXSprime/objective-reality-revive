import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { FileDown, Loader2 } from 'lucide-react';
import { useQuestLanguage } from '@/contexts/QuestLanguageContext';
import { nodes, subgraphs } from '@/data/flowchartData';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

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
    en: 'Quest for Objective Reality - Complete Flowchart',
    de: 'Suche nach objektiver Realität - Komplettes Flussdiagramm',
    fr: 'Quête de la réalité objective - Organigramme complet',
    es: 'Búsqueda de la realidad objetiva - Diagrama completo'
  },
  tips: {
    en: 'Tips',
    de: 'Tipps',
    fr: 'Conseils',
    es: 'Consejos'
  },
  examples: {
    en: 'Examples',
    de: 'Beispiele',
    fr: 'Exemples',
    es: 'Ejemplos'
  },
  nextStep: {
    en: 'Next',
    de: 'Weiter',
    fr: 'Suivant',
    es: 'Siguiente'
  },
  options: {
    en: 'Options',
    de: 'Optionen',
    fr: 'Options',
    es: 'Opciones'
  }
};

export default function FlowchartPDFExport() {
  const { language, t } = useQuestLanguage();
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePDF = async () => {
    setIsGenerating(true);

    try {
      // Create a hidden container for rendering
      const container = document.createElement('div');
      container.style.position = 'absolute';
      container.style.left = '-9999px';
      container.style.top = '0';
      container.style.width = '1400px';
      container.style.backgroundColor = '#0f172a';
      container.style.color = 'white';
      container.style.padding = '40px';
      container.style.fontFamily = 'system-ui, -apple-system, sans-serif';
      document.body.appendChild(container);

      // Group nodes by subgraph
      const nodesBySubgraph: Record<string, typeof nodes> = {};
      nodes.forEach(node => {
        if (!nodesBySubgraph[node.subgraph]) {
          nodesBySubgraph[node.subgraph] = [];
        }
        nodesBySubgraph[node.subgraph].push(node);
      });

      // Build HTML content
      let html = `
        <div style="text-align: center; margin-bottom: 40px;">
          <h1 style="font-size: 32px; font-weight: bold; margin-bottom: 10px; color: #a855f7;">
            ${translations.title[language as keyof typeof translations.title] || translations.title.en}
          </h1>
          <p style="color: #94a3b8; font-size: 14px;">www.quest4objectivereality.com</p>
        </div>
      `;

      // Render each subgraph section
      subgraphs.forEach(subgraph => {
        const subgraphNodes = nodesBySubgraph[subgraph.id] || [];
        if (subgraphNodes.length === 0) return;

        html += `
          <div style="margin-bottom: 30px; border: 2px solid ${subgraph.color}; border-radius: 12px; overflow: hidden;">
            <div style="background: ${subgraph.bgColor}; padding: 12px 20px; border-bottom: 1px solid ${subgraph.color};">
              <h2 style="font-size: 18px; font-weight: bold; color: ${subgraph.color}; margin: 0;">
                ${subgraph.title[language as keyof typeof subgraph.title] || subgraph.title.en}
              </h2>
            </div>
            <div style="padding: 20px; display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px;">
        `;

        subgraphNodes.forEach(node => {
          const title = node.title[language as keyof typeof node.title] || node.title.en;
          const description = node.description ? 
            (node.description[language as keyof typeof node.description] || node.description.en) : '';
          
          const tips = node.tips ? 
            (node.tips[language as keyof typeof node.tips] || node.tips.en || []) : [];
          
          const examples = node.examples ? 
            (node.examples[language as keyof typeof node.examples] || node.examples.en || []) : [];

          const nodeColor = node.type === 'start' ? '#a855f7' : 
                           node.type === 'decision' ? '#eab308' :
                           node.type === 'end' ? '#22c55e' :
                           node.categoryColor || '#64748b';

          html += `
            <div style="background: rgba(30, 41, 59, 0.8); border: 1px solid ${nodeColor}40; border-radius: 8px; padding: 16px;">
              <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                <span style="width: 8px; height: 8px; border-radius: 50%; background: ${nodeColor};"></span>
                <h3 style="font-size: 14px; font-weight: 600; color: white; margin: 0;">${title}</h3>
              </div>
              ${description ? `<p style="font-size: 12px; color: #94a3b8; margin: 0 0 8px 0; line-height: 1.5;">${description}</p>` : ''}
              
              ${tips.length > 0 ? `
                <div style="margin-top: 8px; padding: 8px; background: rgba(234, 179, 8, 0.1); border-radius: 4px;">
                  <p style="font-size: 10px; font-weight: 600; color: #eab308; margin: 0 0 4px 0;">
                    ${translations.tips[language as keyof typeof translations.tips] || translations.tips.en}:
                  </p>
                  <ul style="margin: 0; padding-left: 16px; font-size: 10px; color: #94a3b8;">
                    ${tips.map(tip => `<li style="margin-bottom: 2px;">${tip}</li>`).join('')}
                  </ul>
                </div>
              ` : ''}
              
              ${node.options && node.options.length > 0 ? `
                <div style="margin-top: 8px; display: flex; gap: 8px; flex-wrap: wrap;">
                  ${node.options.map(opt => {
                    const label = opt.label[language as keyof typeof opt.label] || opt.label.en;
                    const color = opt.style === 'yes' ? '#22c55e' : opt.style === 'no' ? '#ef4444' : '#64748b';
                    return `<span style="font-size: 10px; padding: 4px 8px; border-radius: 4px; background: ${color}20; color: ${color}; border: 1px solid ${color}40;">→ ${label}</span>`;
                  }).join('')}
                </div>
              ` : ''}
              
              ${node.nextNodeId && !node.options ? `
                <p style="font-size: 10px; color: #64748b; margin: 8px 0 0 0;">
                  ${translations.nextStep[language as keyof typeof translations.nextStep] || translations.nextStep.en}: ${node.nextNodeId}
                </p>
              ` : ''}
            </div>
          `;
        });

        html += `
            </div>
          </div>
        `;
      });

      container.innerHTML = html;

      // Render to canvas
      const canvas = await html2canvas(container, {
        scale: 2,
        backgroundColor: '#0f172a',
        logging: false
      });

      // Create PDF (A4 landscape)
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4'
      });

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      
      const imgWidth = pageWidth - 20;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      // Add pages as needed
      let yOffset = 0;
      const pageContentHeight = pageHeight - 20;
      
      while (yOffset < imgHeight) {
        if (yOffset > 0) {
          pdf.addPage();
        }
        
        // Calculate source coordinates for this page
        const sourceY = (yOffset / imgHeight) * canvas.height;
        const sourceHeight = Math.min((pageContentHeight / imgHeight) * canvas.height, canvas.height - sourceY);
        
        // Create a temporary canvas for this page section
        const pageCanvas = document.createElement('canvas');
        pageCanvas.width = canvas.width;
        pageCanvas.height = sourceHeight;
        const ctx = pageCanvas.getContext('2d');
        
        if (ctx) {
          ctx.drawImage(canvas, 0, sourceY, canvas.width, sourceHeight, 0, 0, canvas.width, sourceHeight);
          const pageImgData = pageCanvas.toDataURL('image/png');
          const pageImgHeight = (sourceHeight * imgWidth) / canvas.width;
          pdf.addImage(pageImgData, 'PNG', 10, 10, imgWidth, pageImgHeight);
        }
        
        yOffset += pageContentHeight;
      }

      // Download
      const langCode = language.toUpperCase();
      pdf.save(`Quest-Flowchart-${langCode}.pdf`);

      // Cleanup
      document.body.removeChild(container);
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
