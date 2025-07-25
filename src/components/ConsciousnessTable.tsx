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
                      <div className="flex items-center gap-2">
                        <Badge className={level.color}>
                          {level.level}
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
                  </TableRow>
                  <Collapsible open={openRows.has(index)}>
                    <CollapsibleContent>
                      <TableRow>
                        <TableCell colSpan={5} className="p-0">
                          <div className="p-6 bg-muted/20 border-t">
                            <div className="grid md:grid-cols-2 gap-6">
                              {/* Description */}
                              <div>
                                <h4 className="font-semibold mb-2">Description</h4>
                                <ul className="space-y-1">
                                  {level.description.map((desc, i) => (
                                    <li key={i} className="text-sm text-muted-foreground">
                                      • {desc}
                                    </li>
                                  ))}
                                </ul>
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

                              {/* AQAL Quadrants */}
                              <div className="md:col-span-2">
                                <h4 className="font-semibold mb-3">AQAL Quadrants</h4>
                                <div className="grid grid-cols-2 gap-4">
                                  <div className="p-3 bg-background rounded border">
                                    <h5 className="font-medium text-sm mb-1">Interior-Individual</h5>
                                    <p className="text-xs text-muted-foreground">{level.quadrants.interiorIndividual}</p>
                                  </div>
                                  <div className="p-3 bg-background rounded border">
                                    <h5 className="font-medium text-sm mb-1">Exterior-Individual</h5>
                                    <p className="text-xs text-muted-foreground">{level.quadrants.exteriorIndividual}</p>
                                  </div>
                                  <div className="p-3 bg-background rounded border">
                                    <h5 className="font-medium text-sm mb-1">Interior-Collective</h5>
                                    <p className="text-xs text-muted-foreground">{level.quadrants.interiorCollective}</p>
                                  </div>
                                  <div className="p-3 bg-background rounded border">
                                    <h5 className="font-medium text-sm mb-1">Exterior-Collective</h5>
                                    <p className="text-xs text-muted-foreground">{level.quadrants.exteriorCollective}</p>
                                  </div>
                                </div>
                              </div>

                              {/* Pitfalls */}
                              <div className="md:col-span-2">
                                <h4 className="font-semibold mb-2">Common Pitfalls</h4>
                                <div className="flex flex-wrap gap-1">
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
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}