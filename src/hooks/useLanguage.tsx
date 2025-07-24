import { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'de' | 'fr' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    'nav.home': 'Home',
    'nav.epistemology': 'Epistemology',
    'nav.challenges': 'Challenges',
    'nav.cognitive-biases': 'Cognitive Biases',
    'nav.logical-fallacies': 'Logical Fallacies',
    'nav.consciousness': 'Consciousness',
    'nav.consensus': 'Scientific Consensus',
    'nav.censorship': 'Censorship',
    'nav.language': 'Language',
    'home.title': 'Objective Reality',
    'home.subtitle': 'Understanding cognitive biases, logical fallacies, and consciousness',
    'home.description': 'Explore the systematic patterns of deviation from rationality in judgment and decision-making.',
    'epistemology.title': 'Epistemology',
    'epistemology.description': 'How can we know if something is actually true?',
    'challenges.title': 'Challenges',
    'challenges.description': 'Barriers that separate us from objective reality',
    'biases.title': 'Cognitive Biases',
    'biases.description': 'Systematic errors in thinking that affect decisions and judgments',
    'fallacies.title': 'Logical Fallacies',
    'fallacies.description': 'Flawed reasoning patterns that undermine the logic of an argument',
    'consciousness.title': 'Consciousness',
    'consciousness.description': 'Understanding levels of human consciousness and development',
    'consensus.title': 'Scientific Consensus',
    'consensus.description': 'Critical analysis of scientific authority and groupthink',
    'censorship.title': 'Censorship',
    'censorship.description': 'Information suppression and thought control in modern society',
    'category.too_much_information': 'Too Much Information',
    'category.not_enough_meaning': 'Not Enough Meaning',
    'category.need_to_act_fast': 'Need to Act Fast',
    'category.what_should_we_remember': 'What Should We Remember',
    'category.relevance': 'Relevance',
    'category.presumption': 'Presumption',
    'category.weak_inference': 'Weak Inference',
    'category.distraction': 'Distraction',
  },
  de: {
    'nav.home': 'Startseite',
    'nav.epistemology': 'Erkenntnistheorie',
    'nav.challenges': 'Herausforderungen',
    'nav.cognitive-biases': 'Kognitive Verzerrungen',
    'nav.logical-fallacies': 'Logische Fehlschlüsse',
    'nav.consciousness': 'Bewusstsein',
    'nav.consensus': 'Wissenschaftlicher Konsens',
    'nav.censorship': 'Zensur',
    'nav.language': 'Sprache',
    'home.title': 'Objektive Realität',
    'home.subtitle': 'Verständnis von kognitiven Verzerrungen, logischen Fehlschlüssen und Bewusstsein',
    'home.description': 'Entdecken Sie systematische Abweichungsmuster von der Rationalität in Urteilsfindung und Entscheidungsfindung.',
    'epistemology.title': 'Erkenntnistheorie',
    'epistemology.description': 'Wie können wir wissen, ob etwas tatsächlich wahr ist?',
    'challenges.title': 'Herausforderungen',
    'challenges.description': 'Barrieren, die uns von der objektiven Realität trennen',
    'biases.title': 'Kognitive Verzerrungen',
    'biases.description': 'Systematische Denkfehler, die Entscheidungen und Urteile beeinflussen',
    'fallacies.title': 'Logische Fehlschlüsse',
    'fallacies.description': 'Fehlerhafte Argumentationsmuster, die die Logik eines Arguments untergraben',
    'consciousness.title': 'Bewusstsein',
    'consciousness.description': 'Verständnis der Ebenen menschlichen Bewusstseins und Entwicklung',
    'consensus.title': 'Wissenschaftlicher Konsens',
    'consensus.description': 'Kritische Analyse wissenschaftlicher Autorität und Gruppendenken',
    'censorship.title': 'Zensur',
    'censorship.description': 'Informationsunterdrückung und Gedankenkontrolle in der modernen Gesellschaft',
    'category.too_much_information': 'Zu viele Informationen',
    'category.not_enough_meaning': 'Nicht genug Bedeutung',
    'category.need_to_act_fast': 'Schnell handeln müssen',
    'category.what_should_we_remember': 'Was sollten wir uns merken',
    'category.relevance': 'Relevanz',
    'category.presumption': 'Vermutung',
    'category.weak_inference': 'Schwache Schlussfolgerung',
    'category.distraction': 'Ablenkung',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.cognitive-biases': 'Biais Cognitifs',
    'nav.logical-fallacies': 'Sophismes Logiques',
    'nav.consciousness': 'Conscience',
    'nav.language': 'Langue',
    'home.title': 'Réalité Objective',
    'home.subtitle': 'Comprendre les biais cognitifs, les sophismes logiques et la conscience',
    'home.description': 'Explorez les modèles systématiques de déviation de la rationalité dans le jugement et la prise de décision.',
    'biases.title': 'Biais Cognitifs',
    'biases.description': 'Erreurs systématiques de pensée qui affectent les décisions et les jugements',
    'fallacies.title': 'Sophismes Logiques',
    'fallacies.description': 'Modèles de raisonnement défaillants qui sapent la logique d\'un argument',
    'consciousness.title': 'Conscience',
    'consciousness.description': 'Comprendre les niveaux de conscience et de développement humains',
    'category.too_much_information': 'Trop d\'informations',
    'category.not_enough_meaning': 'Pas assez de sens',
    'category.need_to_act_fast': 'Besoin d\'agir vite',
    'category.what_should_we_remember': 'Que devons-nous retenir',
    'category.relevance': 'Pertinence',
    'category.presumption': 'Présomption',
    'category.weak_inference': 'Inférence faible',
    'category.distraction': 'Distraction',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.cognitive-biases': 'Sesgos Cognitivos',
    'nav.logical-fallacies': 'Falacias Lógicas',
    'nav.consciousness': 'Conciencia',
    'nav.language': 'Idioma',
    'home.title': 'Realidad Objetiva',
    'home.subtitle': 'Entender los sesgos cognitivos, falacias lógicas y conciencia',
    'home.description': 'Explora los patrones sistemáticos de desviación de la racionalidad en el juicio y la toma de decisiones.',
    'biases.title': 'Sesgos Cognitivos',
    'biases.description': 'Errores sistemáticos en el pensamiento que afectan decisiones y juicios',
    'fallacies.title': 'Falacias Lógicas',
    'fallacies.description': 'Patrones de razonamiento defectuosos que socavan la lógica de un argumento',
    'consciousness.title': 'Conciencia',
    'consciousness.description': 'Entender los niveles de conciencia y desarrollo humano',
    'category.too_much_information': 'Demasiada información',
    'category.not_enough_meaning': 'No hay suficiente significado',
    'category.need_to_act_fast': 'Necesidad de actuar rápido',
    'category.what_should_we_remember': 'Qué deberíamos recordar',
    'category.relevance': 'Relevancia',
    'category.presumption': 'Presunción',
    'category.weak_inference': 'Inferencia débil',
    'category.distraction': 'Distracción',
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}