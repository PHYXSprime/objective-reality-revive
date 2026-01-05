import React, { createContext, useContext, useCallback } from 'react';
import { useLanguage, type Language } from '@/hooks/useLanguage';

export type QuestLanguage = Language;

interface QuestLanguageContextType {
  language: QuestLanguage;
  setLanguage: (lang: QuestLanguage) => void;
  t: (translations: Record<string, string>) => string;
}

const QuestLanguageContext = createContext<QuestLanguageContextType | undefined>(undefined);

export const questLanguages: { code: QuestLanguage; name: string; flag: string }[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
];

export function QuestLanguageProvider({ children }: { children: React.ReactNode }) {
  // Use the main site's language context
  const { language, setLanguage } = useLanguage();

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
