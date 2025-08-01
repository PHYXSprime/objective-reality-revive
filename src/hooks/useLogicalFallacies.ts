import { useState, useEffect } from 'react';

export interface LogicalFallacy {
  id: number;
  name: string;
  definition: string;
  example: string;
  category: string;
}

export function useLogicalFallacies(language: string = 'en') {
  const [fallacies, setFallacies] = useState<LogicalFallacy[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFallacies = async () => {
      setLoading(true);
      try {
        console.log('Loading logical fallacies for language:', language);
        
        // Import the appropriate data based on language
        let fallaciesData: LogicalFallacy[] = [];
        
        switch (language) {
          case 'de': {
            const { logicalFallacies: enFallacies } = await import('../data/logicalFallacies');
            const { logicalFallaciesDE } = await import('../data/logicalFallacies.de');
            
            fallaciesData = enFallacies.map(fallacy => ({
              ...fallacy,
              name: logicalFallaciesDE[fallacy.name]?.name || fallacy.name,
              definition: logicalFallaciesDE[fallacy.name]?.definition || fallacy.definition,
              example: logicalFallaciesDE[fallacy.name]?.example || fallacy.example,
            }));
            break;
          }
          case 'es': {
            const { logicalFallacies: enFallacies } = await import('../data/logicalFallacies');
            const { logicalFallaciesES } = await import('../data/logicalFallacies.es');
            
            fallaciesData = enFallacies.map(fallacy => ({
              ...fallacy,
              name: logicalFallaciesES[fallacy.name]?.name || fallacy.name,
              definition: logicalFallaciesES[fallacy.name]?.definition || fallacy.definition,
              example: logicalFallaciesES[fallacy.name]?.example || fallacy.example,
            }));
            break;
          }
          case 'fr': {
            const { logicalFallacies: enFallacies } = await import('../data/logicalFallacies');
            const { logicalFallaciesFR } = await import('../data/logicalFallacies.fr');
            
            fallaciesData = enFallacies.map(fallacy => ({
              ...fallacy,
              name: logicalFallaciesFR[fallacy.name]?.name || fallacy.name,
              definition: logicalFallaciesFR[fallacy.name]?.definition || fallacy.definition,
              example: logicalFallaciesFR[fallacy.name]?.example || fallacy.example,
            }));
            break;
          }
          default: {
            const { logicalFallacies } = await import('../data/logicalFallacies');
            fallaciesData = logicalFallacies;
            break;
          }
        }
        
        console.log('Loaded fallacies, count:', fallaciesData.length);
        setFallacies(fallaciesData);
      } catch (error) {
        console.error('Error loading logical fallacies:', error);
        setFallacies([]);
      } finally {
        setLoading(false);
      }
    };

    loadFallacies();
  }, [language]);

  return { fallacies, loading };
}