import { useState, useEffect } from 'react';

export interface CognitiveBias {
  id: number;
  name: string;
  definition: string;
  example: string;
  category: string;
}

export function useCognitiveBiases(language: string = 'en') {
  const [biases, setBiases] = useState<CognitiveBias[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBiases = async () => {
      setLoading(true);
      try {
        console.log('Loading cognitive biases from API for language:', language);
        
        // Use relative URL for same domain
        const response = await fetch(`/api/cognitive-biases.php?lang=${language}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Loaded biases from API, count:', data.length);
        
        if (Array.isArray(data)) {
          setBiases(data);
        } else {
          throw new Error('Invalid response format');
        }
      } catch (error) {
        console.error('Error loading cognitive biases from API:', error);
        setBiases([]);
      } finally {
        setLoading(false);
      }
    };

    loadBiases();
  }, [language]);

  return { biases, loading };
}