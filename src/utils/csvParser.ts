export interface CognitiveBias {
  id: number;
  name: string;
  definition: string;
  example: string;
  category: string;
}

export function parseCSV(csvContent: string): CognitiveBias[] {
  const lines = csvContent.trim().split('\n');
  const header = lines[0];
  
  if (!header.includes('id,name,definition,example,category')) {
    throw new Error('Invalid CSV format - expected headers: id,name,definition,example,category');
  }
  
  const biases: CognitiveBias[] = [];
  
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    
    // Parse CSV line handling quoted values
    const values = parseCSVLine(line);
    
    if (values.length >= 5) {
      biases.push({
        id: parseInt(values[0]) || i,
        name: cleanQuotes(values[1]),
        definition: cleanQuotes(values[2]),
        example: cleanQuotes(values[3]),
        category: cleanQuotes(values[4])
      });
    }
  }
  
  return biases;
}

function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;
  let i = 0;
  
  while (i < line.length) {
    const char = line[i];
    
    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        // Escaped quote
        current += '"';
        i += 2;
      } else {
        // Toggle quotes
        inQuotes = !inQuotes;
        i++;
      }
    } else if (char === ',' && !inQuotes) {
      result.push(current);
      current = '';
      i++;
    } else {
      current += char;
      i++;
    }
  }
  
  result.push(current);
  return result;
}

function cleanQuotes(value: string): string {
  return value.replace(/^"/, '').replace(/"$/, '').replace(/""/g, '"');
}