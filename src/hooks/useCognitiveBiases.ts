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
      setLoading(true);
      try {
        console.log('Loading cognitive biases for language:', language);
        
        // Load main English data
        const englishResponse = await fetch('/New list of cognitive biases.csv');
        if (!englishResponse.ok) {
          throw new Error(`HTTP error! status: ${englishResponse.status}`);
        }
        const englishText = await englishResponse.text();
        console.log('English CSV loaded, first 100 chars:', englishText.substring(0, 100));
        
        const englishBiases = parseCSV(englishText);
        console.log('Parsed biases count:', englishBiases.length);
        
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
              console.log('Loaded translations for', language, 'count:', translatedBiases.length);
            } else {
              console.warn(`Translation file not found: ${translationFile}`);
            }
          } catch (error) {
            console.warn(`Could not load translations for ${language}:`, error);
          }
        } else {
          // Clear translations for English
          setTranslations({});
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