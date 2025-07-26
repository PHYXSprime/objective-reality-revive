import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { PHYXSLevel } from '@/data/phyxsMapData';
import { useLanguage } from '@/hooks/useLanguage';

interface PHYXSTableProps {
  data: PHYXSLevel[];
  title: string;
  description: string;
}

export function PHYXSTable({ data, title, description }: PHYXSTableProps) {
  const { t } = useLanguage();
  const [openRows, setOpenRows] = React.useState<Set<number>>(new Set());

  const toggleRow = (index: number) => {
    const newOpenRows = new Set(openRows);
    if (newOpenRows.has(index)) {
      newOpenRows.delete(index);
    } else {
      newOpenRows.add(index);
    }
    setOpenRows(newOpenRows);
  };

  const getEvolutionColors = (index: number) => {
    // Use index-based colors instead of language-dependent evolution point names
    const colorPalette = [
      {
        bg: "bg-gradient-to-b from-white/20 via-violet-500/20 to-indigo-500/20",
        border: "border-l-violet-500",
        badge: "bg-gradient-to-b from-white via-violet-500 to-indigo-500 text-white"
      },
      {
        bg: "bg-teal-500/20",
        border: "border-l-teal-500",
        badge: "bg-teal-500 text-white"
      },
      {
        bg: "bg-yellow-500/20",
        border: "border-l-yellow-500",
        badge: "bg-yellow-500 text-black"
      },
      {
        bg: "bg-green-500/20",
        border: "border-l-green-500",
        badge: "bg-green-500 text-white"
      },
      {
        bg: "bg-orange-500/20",
        border: "border-l-orange-500",
        badge: "bg-orange-500 text-white"
      },
      {
        bg: "bg-blue-500/20",
        border: "border-l-blue-500",
        badge: "bg-blue-500 text-white"
      },
      {
        bg: "bg-red-500/20",
        border: "border-l-red-500",
        badge: "bg-red-500 text-white"
      },
      {
        bg: "bg-purple-500/20",
        border: "border-l-purple-500",
        badge: "bg-purple-500 text-white"
      },
      {
        bg: "bg-zinc-800/20",
        border: "border-l-zinc-800",
        badge: "bg-zinc-800 text-white"
      }
    ];
    
    return colorPalette[index] || {
      bg: "bg-stone-500/20",
      border: "border-l-stone-500",
      badge: "bg-stone-500 text-white"
    };
  };

  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        <p className="text-muted-foreground">{description}</p>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]"></TableHead>
                <TableHead>{t('consciousness.phyxs.table.headers.evolutionPoint')}</TableHead>
                <TableHead>{t('consciousness.phyxs.table.headers.stage')}</TableHead>
                <TableHead>{t('consciousness.phyxs.table.headers.timeframe')}</TableHead>
                <TableHead>{t('consciousness.phyxs.table.headers.significance')}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((level, index) => {
                const colors = getEvolutionColors(index);
                const isOpen = openRows.has(index);
                return (
                  <React.Fragment key={index}>
                    <TableRow 
                      className={`cursor-pointer hover:bg-muted/50 border-l-[10px] ${colors.bg} ${colors.border}`}
                      onClick={() => toggleRow(index)}
                    >
                      <TableCell>
                        {isOpen ? (
                          <ChevronDown className="h-4 w-4" />
                        ) : (
                          <ChevronRight className="h-4 w-4" />
                        )}
                      </TableCell>
                      <TableCell>
                        <Badge className={colors.badge}>
                          {level.evolutionPoint}
                        </Badge>
                      </TableCell>
                      <TableCell className="font-medium">
                        {level.stage}
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {level.timeframe}
                      </TableCell>
                      <TableCell className="text-sm max-w-xs">
                        {level.significance}
                      </TableCell>
                    </TableRow>
                    {isOpen && (
                      <TableRow>
                        <TableCell colSpan={5} className="p-0">
                          <div className={`p-6 border-t border-l-[10px] ${colors.bg} ${colors.border} animate-fade-in`}>
                            <div className="grid md:grid-cols-2 gap-6">
                               {/* Description */}
                                <div className="md:col-span-2 text-left">
                                  <h4 className="font-semibold mb-2 text-left">{t('consciousness.phyxs.table.labels.description')}</h4>
                                  <p className="text-sm text-muted-foreground leading-relaxed text-left">{level.description}</p>
                                </div>

                                {/* Characteristics */}
                                 <div className="text-left">
                                   <h4 className="font-semibold mb-2 text-left">{t('consciousness.phyxs.table.labels.characteristics')}</h4>
                                  <div className="space-y-1 text-left">
                                    {level.characteristics.map((char, i) => (
                                      <p key={i} className="text-sm text-muted-foreground leading-relaxed text-left">
                                        • {char}
                                      </p>
                                    ))}
                                  </div>
                                </div>

                                {/* Biophysical Markers */}
                                 <div className="text-left">
                                   <h4 className="font-semibold mb-2 text-left">{t('consciousness.phyxs.table.labels.biophysicalMarkers')}</h4>
                                  <div className="space-y-1 text-left">
                                    {level.biophysicalMarkers.map((marker, i) => (
                                      <p key={i} className="text-sm text-muted-foreground leading-relaxed text-left">
                                        • {marker}
                                      </p>
                                    ))}
                                  </div>
                                </div>

                               {/* Cognitive Capabilities */}
                                <div className="md:col-span-2 text-left">
                                  <h4 className="font-semibold mb-2 text-left">{t('consciousness.phyxs.table.labels.cognitiveCapabilities')}</h4>
                                 <div className="flex flex-wrap gap-2 text-left">
                                   {level.cognitiveCapabilities.map((capability, i) => (
                                     <Badge key={i} variant="outline" className="text-xs">
                                       {capability}
                                     </Badge>
                                   ))}
                                 </div>
                               </div>
                            </div>
                          </div>
                        </TableCell>
                      </TableRow>
                    )}
                  </React.Fragment>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}