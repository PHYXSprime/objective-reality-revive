import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { AQALLevel } from '@/data/aqalMapData';

interface ConsciousnessTableProps {
  data: AQALLevel[];
  title: string;
  description: string;
}

export function ConsciousnessTable({ data, title, description }: ConsciousnessTableProps) {
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

  const getLevelColors = (level: AQALLevel, index: number) => {
    // Map level names to colors based on the data
    const colorMap: Record<string, { bg: string; border: string; badge: string }> = {
      "Unitive Self": {
        bg: "bg-gradient-to-b from-white/20 via-violet-500/20 to-indigo-500/20",
        border: "border-l-gradient-to-b border-l-white border-l-violet-500 border-l-indigo-500",
        badge: "bg-gradient-to-b from-white via-violet-500 to-indigo-500 text-white"
      },
      "Holistic Self (Turquoise)": {
        bg: "bg-teal-500/20",
        border: "border-l-teal-500",
        badge: "bg-teal-500 text-white"
      },
      "Integral Self (Yellow)": {
        bg: "bg-yellow-500/20",
        border: "border-l-yellow-500",
        badge: "bg-yellow-500 text-black"
      },
      "Sensitive Self (Green)": {
        bg: "bg-green-500/20",
        border: "border-l-green-500",
        badge: "bg-green-500 text-white"
      },
      "Rational Self (Orange)": {
        bg: "bg-orange-500/20",
        border: "border-l-orange-500",
        badge: "bg-orange-500 text-white"
      },
      "Rule/Role Self (Blue)": {
        bg: "bg-blue-500/20",
        border: "border-l-blue-500",
        badge: "bg-blue-500 text-white"
      },
      "Power Self (Red)": {
        bg: "bg-red-500/20",
        border: "border-l-red-500",
        badge: "bg-red-500 text-white"
      },
      "Tribal Order (Purple)": {
        bg: "bg-purple-500/20",
        border: "border-l-purple-500",
        badge: "bg-purple-500 text-white"
      },
      "Instinctive Self (Beige)": {
        bg: "bg-stone-500/20",
        border: "border-l-stone-500",
        badge: "bg-stone-500 text-white"
      }
    };
    
    return colorMap[level.level] || {
      bg: "bg-stone-500/20",
      border: "border-l-stone-500",
      badge: "bg-gradient-to-b from-white via-violet-500 to-indigo-500 text-white"
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
                <TableHead>Level</TableHead>
                <TableHead>Human Age</TableHead>
                <TableHead>Quest</TableHead>
                <TableHead>Method</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.flatMap((level, index) => {
                const colors = getLevelColors(level, index);
                return [
                    <TableRow key={`row-${index}`}
                      className={`cursor-pointer hover:bg-muted/50 border-l-[10px] ${colors.bg} ${colors.border}`}
                      onClick={() => toggleRow(index)}
                    >
                      <TableCell>
                        {openRows.has(index) ? (
                          <ChevronDown className="h-4 w-4" />
                        ) : (
                          <ChevronRight className="h-4 w-4" />
                        )}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Badge className={colors.badge}>
                            {level.level === "Unitive Self" ? "Unitive Self (Indigo)" : level.level}
                          </Badge>
                        </div>
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {level.humanAge}
                      </TableCell>
                      <TableCell className="text-sm max-w-xs">
                        {level.quest}
                      </TableCell>
                      <TableCell className="text-sm max-w-xs">
                        {level.method}
                      </TableCell>
                    </TableRow>,
                    <Collapsible key={`collapsible-${index}`} open={openRows.has(index)}>
                      <CollapsibleContent>
                        <TableRow key={`content-${index}`}>
                          <TableCell colSpan={5} className="p-0">
                            <div className={`p-6 border-t border-l-[10px] ${colors.bg} ${colors.border}`}>
                              <div className="grid md:grid-cols-2 gap-6">
                                  {/* Description */}
                                  <div className="text-left">
                                    <h4 className="font-semibold mb-2 text-left">Description</h4>
                                    <div className="space-y-1 text-left">
                                      {level.description.map((desc, i) => (
                                        <p key={i} className="text-sm text-muted-foreground leading-relaxed text-left">
                                          • {desc}
                                        </p>
                                      ))}
                                    </div>
                                  </div>

                                  {/* Characteristics */}
                                  <div className="text-left">
                                    <h4 className="font-semibold mb-2 text-left">Characteristics</h4>
                                    <div className="space-y-1 text-left">
                                      {level.characteristics.map((char, i) => (
                                        <p key={i} className="text-sm text-muted-foreground leading-relaxed text-left">
                                          • {char}
                                        </p>
                                      ))}
                                    </div>
                                  </div>

                                 {/* AQAL Quadrants */}
                                 <div className="md:col-span-2 text-left">
                                   <h4 className="font-semibold mb-3 text-left">AQAL Quadrants</h4>
                                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                     <div className="p-3 bg-background/80 rounded border text-left">
                                       <h5 className="font-medium text-sm mb-2 text-left">Interior-Individual</h5>
                                       <p className="text-xs text-muted-foreground leading-relaxed text-left">{level.quadrants.interiorIndividual}</p>
                                     </div>
                                     <div className="p-3 bg-background/80 rounded border text-left">
                                       <h5 className="font-medium text-sm mb-2 text-left">Exterior-Individual</h5>
                                       <p className="text-xs text-muted-foreground leading-relaxed text-left">{level.quadrants.exteriorIndividual}</p>
                                     </div>
                                     <div className="p-3 bg-background/80 rounded border text-left">
                                       <h5 className="font-medium text-sm mb-2 text-left">Interior-Collective</h5>
                                       <p className="text-xs text-muted-foreground leading-relaxed text-left">{level.quadrants.interiorCollective}</p>
                                     </div>
                                     <div className="p-3 bg-background/80 rounded border text-left">
                                       <h5 className="font-medium text-sm mb-2 text-left">Exterior-Collective</h5>
                                       <p className="text-xs text-muted-foreground leading-relaxed text-left">{level.quadrants.exteriorCollective}</p>
                                     </div>
                                   </div>
                                 </div>

                                 {/* Pitfalls */}
                                 <div className="md:col-span-2 text-left">
                                   <h4 className="font-semibold mb-2 text-left">Common Pitfalls</h4>
                                   <div className="flex flex-wrap gap-2 text-left">
                                     {level.pitfalls.map((pitfall, i) => (
                                       <Badge key={i} variant="outline" className="text-xs">
                                         {pitfall}
                                       </Badge>
                                     ))}
                                   </div>
                                 </div>
                              </div>
                            </div>
                          </TableCell>
                        </TableRow>
                      </CollapsibleContent>
                    </Collapsible>
                  ];
              })}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}