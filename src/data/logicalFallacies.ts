// Logical fallacies data structure - CLEARED per user request
// Waiting for new CSV files with 176 fallacies

export interface LogicalFallacy {
  id: number;
  name: string;
  definition: string;
  example: string;
  category: string;
}

// Placeholder - will be populated when new CSV files are provided
export const logicalFallacies: LogicalFallacy[] = [];

// Translation interfaces
export interface FallacyTranslation {
  name: string;
  definition: string;
  example: string;
}

export interface FallacyTranslations {
  [key: string]: FallacyTranslation;
}

export interface FallacyLanguageTranslations {
  [language: string]: FallacyTranslations;
}

// Placeholder for translations - will be populated when new CSV files are provided
export const logicalFallaciesTranslations: FallacyLanguageTranslations = {
  de: {},
  es: {},
  fr: {}
};
