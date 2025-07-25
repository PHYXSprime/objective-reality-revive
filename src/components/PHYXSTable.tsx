import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { PHYXSLevel } from '@/data/phyxsMapData';

interface PHYXSTableProps {
  data: PHYXSLevel[];
  title: string;
  description: string;
}

export function PHYXSTable({ data, title, description }: PHYXSTableProps) {
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

  const getEvolutionColor = (evolutionPoint: string) => {
    const colors = [
      "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200",
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
      "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
      "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
      "bg-stone-100 text-stone-800 dark:bg-stone-900 dark:text-stone-200"
    ];
    return colors[parseInt(evolutionPoint.charAt(1)) - 1] || colors[0];
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
                <TableHead>Evolution Point</TableHead>
                <TableHead>Stage</TableHead>
                <TableHead>Timeframe</TableHead>
                <TableHead>Significance</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((level, index) => (
                <React.Fragment key={index}>
                  <TableRow 
                    className="cursor-pointer hover:bg-muted/50"
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
                      <Badge className={getEvolutionColor(level.evolutionPoint)}>
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
                  <Collapsible open={openRows.has(index)}>
                    <CollapsibleContent>
                      <TableRow>
                        <TableCell colSpan={5} className="p-0">
                          <div className="p-6 bg-muted/20 border-t">
                            <div className="grid md:grid-cols-2 gap-6">
                              {/* Description */}
                              <div className="md:col-span-2">
                                <h4 className="font-semibold mb-2">Description</h4>
                                <p className="text-sm text-muted-foreground">{level.description}</p>
                              </div>

                              {/* Characteristics */}
                              <div>
                                <h4 className="font-semibold mb-2">Characteristics</h4>
                                <ul className="space-y-1">
                                  {level.characteristics.map((char, i) => (
                                    <li key={i} className="text-sm text-muted-foreground">
                                      • {char}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Biophysical Markers */}
                              <div>
                                <h4 className="font-semibold mb-2">Biophysical Markers</h4>
                                <ul className="space-y-1">
                                  {level.biophysicalMarkers.map((marker, i) => (
                                    <li key={i} className="text-sm text-muted-foreground">
                                      • {marker}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Cognitive Capabilities */}
                              <div className="md:col-span-2">
                                <h4 className="font-semibold mb-2">Cognitive Capabilities</h4>
                                <div className="flex flex-wrap gap-1">
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
                    </CollapsibleContent>
                  </Collapsible>
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}