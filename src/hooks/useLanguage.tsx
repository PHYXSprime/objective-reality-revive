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

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

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
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadLanguageTranslations(language);
  }, [language]);

  const t = (key: TranslationKey | string): string => {
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
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}