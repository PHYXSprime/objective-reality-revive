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
        console.log('Loading logical fallacies from API for language:', language);
        
        const response = await fetch(`/api/logical-fallacies.php?lang=${language}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Loaded fallacies from API, count:', data.length);
        
        if (Array.isArray(data)) {
          setFallacies(data);
        } else {
          throw new Error('Invalid response format');
        }
      } catch (error) {
        console.error('Error loading logical fallacies from API:', error);
        setFallacies([]);
      } finally {
        setLoading(false);
      }
    };

    loadFallacies();
  }, [language]);

  return { fallacies, loading };
}