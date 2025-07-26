import { useState, useEffect } from 'react';
import { parseCSV, type CognitiveBias } from '@/utils/csvParser';

interface BiasTranslations {
  [key: string]: {
    name: string;
    definition: string;
    example: string;
  };
}

export function useCognitiveBiases(language: string = 'en') {
  const [biases, setBiases] = useState<CognitiveBias[]>([]);
  const [translations, setTranslations] = useState<BiasTranslations>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBiases = async () => {
      try {
        // Load main English data
        const englishResponse = await fetch('/New list of cognitive biases.csv');
        if (!englishResponse.ok) {
          throw new Error(`HTTP error! status: ${englishResponse.status}`);
        }
        const englishText = await englishResponse.text();
        const englishBiases = parseCSV(englishText);
        
        if (englishBiases.length === 0) {
          console.warn('No cognitive biases loaded from CSV');
        }
        
        setBiases(englishBiases);

        // Load translations if not English
        if (language !== 'en') {
          const translationFile = `/New list of cognitive biases ${language.toUpperCase()}.csv`;
          try {
            const translationResponse = await fetch(translationFile);
            if (translationResponse.ok) {
              const translationText = await translationResponse.text();
              const translatedBiases = parseCSV(translationText);
              
              const translationMap: BiasTranslations = {};
              translatedBiases.forEach(bias => {
                translationMap[bias.id.toString()] = {
                  name: bias.name,
                  definition: bias.definition,
                  example: bias.example
                };
              });
              setTranslations(translationMap);
            }
          } catch (error) {
            console.warn(`Could not load translations for ${language}:`, error);
          }
        }
      } catch (error) {
        console.error('Error loading cognitive biases:', error);
        // Set empty array to avoid infinite loading state
        setBiases([]);
      } finally {
        setLoading(false);
      }
    };

    loadBiases();
  }, [language]);

  const getTranslatedBias = (bias: CognitiveBias) => {
    if (language === 'en' || !translations[bias.id.toString()]) {
      return bias;
    }
    
    const translation = translations[bias.id.toString()];
    return {
      ...bias,
      name: translation.name,
      definition: translation.definition,
      example: translation.example
    };
  };

  return { biases, getTranslatedBias, loading };
}