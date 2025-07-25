import { en } from './en';
import { de } from './de';
import { fr } from './fr';
import { es } from './es';

export type Language = 'en' | 'de' | 'fr' | 'es';
export type TranslationKey = keyof typeof en;

export const translations = {
  en,
  de,
  fr,
  es,
} as const;

export async function loadTranslations(language: Language) {
  switch (language) {
    case 'en':
      return (await import('./en')).en;
    case 'de':
      return (await import('./de')).de;
    case 'fr':
      return (await import('./fr')).fr;
    case 'es':
      return (await import('./es')).es;
    default:
      return (await import('./en')).en;
  }
}