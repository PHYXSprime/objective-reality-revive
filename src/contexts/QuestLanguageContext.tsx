import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

export type QuestLanguage = 'en' | 'de' | 'fr' | 'es';

interface QuestLanguageContextType {
  language: QuestLanguage;
  setLanguage: (lang: QuestLanguage) => void;
  t: (translations: Record<string, string>) => string;
}

const QuestLanguageContext = createContext<QuestLanguageContextType | undefined>(undefined);

const LANGUAGE_STORAGE_KEY = 'quest-for-reality-language';

function getInitialLanguage(): QuestLanguage {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (stored && ['en', 'de', 'fr', 'es'].includes(stored)) {
      return stored as QuestLanguage;
    }
  }
  return 'en';
}

export const questLanguages: { code: QuestLanguage; name: string; flag: string }[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
];

export function QuestLanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<QuestLanguage>(getInitialLanguage);

  const setLanguage = useCallback((lang: QuestLanguage) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    }
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (stored && ['en', 'de', 'fr', 'es'].includes(stored) && stored !== language) {
      setLanguageState(stored as QuestLanguage);
    }
  }, []);

  const t = useCallback((translations: Record<string, string>): string => {
    return translations[language] || translations['en'] || '';
  }, [language]);

  return (
    <QuestLanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </QuestLanguageContext.Provider>
  );
}

export function useQuestLanguage() {
  const context = useContext(QuestLanguageContext);
  if (context === undefined) {
    throw new Error('useQuestLanguage must be used within a QuestLanguageProvider');
  }
  return context;
}
