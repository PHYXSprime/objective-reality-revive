// Utility to parse CSV data for logical fallacies
export function parseLogicalFallaciesCSV(csvData: string) {
  const lines = csvData.trim().split('\n');
  const headers = lines[0].split(',').map(h => h.replace(/"/g, ''));
  
  return lines.slice(1).map((line, index) => {
    // Handle CSV parsing with proper quote handling
    const values = [];
    let current = '';
    let inQuotes = false;
    
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      
      if (char === '"' && (i === 0 || line[i-1] === ',')) {
        inQuotes = true;
      } else if (char === '"' && (i === line.length - 1 || line[i+1] === ',')) {
        inQuotes = false;
      } else if (char === ',' && !inQuotes) {
        values.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }
    values.push(current.trim());
    
    return {
      id: parseInt(values[0]) || index + 1,
      name: values[1]?.replace(/"/g, '') || '',
      definition: values[2]?.replace(/"/g, '') || '',
      example: values[3]?.replace(/"/g, '') || '',
      category: values[4]?.replace(/"/g, '') || ''
    };
  });
}