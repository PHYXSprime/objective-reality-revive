import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import type { Language, TranslationKey } from '@/translations';
import { loadTranslations } from '@/translations';

export type { Language };

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey | string) => string;
  isLoading: boolean;
  error: string | null;
}

const defaultContextValue: LanguageContextType = {
  language: 'en',
  setLanguage: () => {},
  t: (key: string) => key,
  isLoading: false,
  error: null,
};

const LanguageContext = createContext<LanguageContextType>(defaultContextValue);

// Cache for loaded translations
const translationCache = new Map<Language, Record<string, string>>();

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  const [translations, setTranslations] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadLanguageTranslations = async (lang: Language) => {
    if (translationCache.has(lang)) {
      setTranslations(translationCache.get(lang)!);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setError(null);
    
    try {
      const loadedTranslations = await loadTranslations(lang);
      translationCache.set(lang, loadedTranslations);
      setTranslations(loadedTranslations);
    } catch (err) {
      setError(`Failed to load translations for ${lang}`);
      console.error('Translation loading error:', err);
      // Fallback to English if current language fails
      if (lang !== 'en') {
        try {
          const fallbackTranslations = await loadTranslations('en');
          translationCache.set('en', fallbackTranslations);
          setTranslations(fallbackTranslations);
        } catch (fallbackErr) {
          console.error('Fallback translation loading failed:', fallbackErr);
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadLanguageTranslations(language);
  }, [language]);

  const t = (key: TranslationKey | string): string => {
    // Return the key if translations are still loading to prevent showing raw keys
    if (isLoading) return key;
    return translations[key as TranslationKey] || key;
  };

  const contextValue: LanguageContextType = {
    language,
    setLanguage,
    t,
    isLoading,
    error,
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  return context;
}