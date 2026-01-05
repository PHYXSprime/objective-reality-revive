// Flowchart node types
export type NodeType = 'start' | 'process' | 'decision' | 'category' | 'database' | 'end';

export type SubgraphId = 'DC' | 'HE' | 'NT' | 'BA' | 'EE' | 'BM' | 'KB';

export interface FlowchartNode {
  id: string;
  type: NodeType;
  subgraph: SubgraphId;
  title: Record<string, string>;
  description?: Record<string, string>;
  tips?: Record<string, string[]>;
  examples?: Record<string, string[]>;
  links?: { title: string; url: string }[];
  // For decision nodes
  options?: {
    label: Record<string, string>;
    nextNodeId: string;
    style?: 'yes' | 'no' | 'neutral';
  }[];
  // For process nodes
  nextNodeId?: string;
  // Special content (like Bayes equation)
  specialContent?: 'bayes' | 'confidence';
  // Category color for classification nodes
  categoryColor?: string;
}

export interface Subgraph {
  id: SubgraphId;
  title: Record<string, string>;
  color: string;
  bgColor: string;
}

// Subgraph definitions
export const subgraphs: Subgraph[] = [
  {
    id: 'DC',
    title: {
      en: 'Data Collection & Initial Assessment',
      de: 'Datenerhebung & Erste Bewertung',
      fr: 'Collecte de données & Évaluation initiale',
      it: 'Raccolta dati & Valutazione iniziale',
      es: 'Recopilación de datos & Evaluación inicial'
    },
    color: '#ec4899',
    bgColor: 'rgba(236, 72, 153, 0.1)'
  },
  {
    id: 'HE',
    title: {
      en: 'Hypothesis & Experimentation',
      de: 'Hypothese & Experiment',
      fr: 'Hypothèse & Expérimentation',
      it: 'Ipotesi & Sperimentazione',
      es: 'Hipótesis & Experimentación'
    },
    color: '#f59e0b',
    bgColor: 'rgba(245, 158, 11, 0.1)'
  },
  {
    id: 'NT',
    title: {
      en: 'Non-Testable Classification',
      de: 'Nicht-prüfbare Klassifizierung',
      fr: 'Classification non testable',
      it: 'Classificazione non verificabile',
      es: 'Clasificación no comprobable'
    },
    color: '#eab308',
    bgColor: 'rgba(234, 179, 8, 0.1)'
  },
  {
    id: 'BA',
    title: {
      en: 'Bayes Theorem',
      de: 'Bayes-Theorem',
      fr: 'Théorème de Bayes',
      it: 'Teorema di Bayes',
      es: 'Teorema de Bayes'
    },
    color: '#a855f7',
    bgColor: 'rgba(168, 85, 247, 0.1)'
  },
  {
    id: 'EE',
    title: {
      en: 'Evidence Evaluation',
      de: 'Beweisbewertung',
      fr: 'Évaluation des preuves',
      it: 'Valutazione delle prove',
      es: 'Evaluación de evidencia'
    },
    color: '#06b6d4',
    bgColor: 'rgba(6, 182, 212, 0.1)'
  },
  {
    id: 'BM',
    title: {
      en: 'Bias Management',
      de: 'Bias-Management',
      fr: 'Gestion des biais',
      it: 'Gestione dei bias',
      es: 'Gestión de sesgos'
    },
    color: '#ec4899',
    bgColor: 'rgba(236, 72, 153, 0.1)'
  },
  {
    id: 'KB',
    title: {
      en: 'Knowledge Database',
      de: 'Wissensdatenbank',
      fr: 'Base de connaissances',
      it: 'Database della conoscenza',
      es: 'Base de conocimiento'
    },
    color: '#22c55e',
    bgColor: 'rgba(34, 197, 94, 0.1)'
  }
];

// All flowchart nodes
export const nodes: FlowchartNode[] = [
  // START
  {
    id: 'StartQuest',
    type: 'start',
    subgraph: 'DC',
    title: {
      en: 'Start Quest for Objective Reality',
      de: 'Start der Suche nach objektiver Realität',
      fr: 'Commencer la quête de la réalité objective',
      it: 'Inizia la ricerca della realtà oggettiva',
      es: 'Comenzar la búsqueda de la realidad objetiva'
    },
    description: {
      en: 'Welcome to your journey of truth-seeking. This guided process will help you evaluate claims, beliefs, and information systematically.',
      de: 'Willkommen auf Ihrer Reise der Wahrheitssuche. Dieser geführte Prozess hilft Ihnen, Behauptungen, Überzeugungen und Informationen systematisch zu bewerten.',
      fr: 'Bienvenue dans votre voyage de recherche de la vérité. Ce processus guidé vous aidera à évaluer systématiquement les affirmations, les croyances et les informations.',
      it: 'Benvenuto nel tuo viaggio alla ricerca della verità. Questo processo guidato ti aiuterà a valutare sistematicamente affermazioni, credenze e informazioni.',
      es: 'Bienvenido a tu viaje de búsqueda de la verdad. Este proceso guiado te ayudará a evaluar sistemáticamente afirmaciones, creencias e información.'
    },
    tips: {
      en: [
        'Keep an open mind but remain skeptical',
        'Be willing to change your beliefs based on evidence',
        'Remember: we can never be 100% certain of anything'
      ],
      de: [
        'Bleiben Sie aufgeschlossen, aber skeptisch',
        'Seien Sie bereit, Ihre Überzeugungen aufgrund von Beweisen zu ändern',
        'Denken Sie daran: Wir können nie 100% sicher sein'
      ],
      fr: [
        'Gardez l\'esprit ouvert mais restez sceptique',
        'Soyez prêt à changer vos croyances en fonction des preuves',
        'Rappelez-vous: nous ne pouvons jamais être sûrs à 100%'
      ],
      es: [
        'Mantén la mente abierta pero permanece escéptico',
        'Esté dispuesto a cambiar sus creencias basándose en la evidencia',
        'Recuerde: nunca podemos estar 100% seguros de nada'
      ]
    },
    nextNodeId: 'Start'
  },

  // DATA COLLECTION
  {
    id: 'Start',
    type: 'process',
    subgraph: 'DC',
    title: {
      en: 'Define Your Question',
      de: 'Frage definieren',
      fr: 'Définir votre question',
      it: 'Definisci la tua domanda',
      es: 'Define tu pregunta'
    },
    description: {
      en: 'Clearly articulate the claim, belief, or question you want to investigate. A well-defined question is the foundation of good inquiry.',
      de: 'Formulieren Sie klar die Behauptung, Überzeugung oder Frage, die Sie untersuchen möchten.',
      fr: 'Articulez clairement l\'affirmation, la croyance ou la question que vous souhaitez examiner.',
      it: 'Articola chiaramente l\'affermazione, la credenza o la domanda che vuoi investigare.',
      es: 'Articula claramente la afirmación, creencia o pregunta que deseas investigar.'
    },
    tips: {
      en: [
        'Be specific - vague questions lead to vague answers',
        'Write it down to clarify your thinking',
        'Ask: "What would change my mind about this?"'
      ],
      de: [
        'Sei spezifisch - vage Fragen führen zu vagen Antworten',
        'Schreibe es auf, um dein Denken zu klären',
        'Frage: "Was würde meine Meinung ändern?"'
      ],
      fr: [
        'Soyez précis - les questions vagues mènent à des réponses vagues',
        'Écrivez-le pour clarifier votre pensée',
        'Demandez: "Qu\'est-ce qui changerait mon avis?"'
      ],
      es: [
        'Sé específico - las preguntas vagas llevan a respuestas vagas',
        'Escríbelo para aclarar tu pensamiento',
        'Pregunta: "¿Qué cambiaría mi opinión sobre esto?"'
      ]
    },
    examples: {
      en: [
        '"Is climate change primarily caused by human activity?"',
        '"Does this supplement actually improve health?"',
        '"Is this news story accurate?"'
      ],
      de: [
        '"Wird der Klimawandel hauptsächlich durch menschliche Aktivitäten verursacht?"',
        '"Verbessert dieses Nahrungsergänzungsmittel wirklich die Gesundheit?"',
        '"Ist diese Nachricht korrekt?"'
      ],
      fr: [
        '"Le changement climatique est-il principalement causé par l\'activité humaine?"',
        '"Ce supplément améliore-t-il vraiment la santé?"',
        '"Cette information est-elle exacte?"'
      ],
      es: [
        '"¿El cambio climático es causado principalmente por la actividad humana?"',
        '"¿Este suplemento realmente mejora la salud?"',
        '"¿Esta noticia es precisa?"'
      ]
    },
    nextNodeId: 'SourceQuality'
  },
  {
    id: 'SourceQuality',
    type: 'process',
    subgraph: 'DC',
    title: {
      en: 'Source Quality Assessment',
      de: 'Bewertung der Quellenqualität',
      fr: 'Évaluation de la qualité des sources',
      it: 'Valutazione della qualità delle fonti',
      es: 'Evaluación de la calidad de las fuentes'
    },
    description: {
      en: 'Evaluate the credibility of your information sources. Not all sources are equally reliable.',
      de: 'Bewerten Sie die Glaubwürdigkeit Ihrer Informationsquellen.',
      fr: 'Évaluez la crédibilité de vos sources d\'information.',
      it: 'Valuta la credibilità delle tue fonti di informazione.',
      es: 'Evalúa la credibilidad de tus fuentes de información.'
    },
    tips: {
      en: [
        'Primary sources > Secondary sources',
        'Peer-reviewed > Opinion pieces',
        'Check for potential conflicts of interest',
        'Look for citations and references'
      ],
      de: [
        'Primärquellen > Sekundärquellen',
        'Peer-reviewed > Meinungsartikel',
        'Prüfen Sie auf mögliche Interessenkonflikte',
        'Suchen Sie nach Zitaten und Referenzen'
      ],
      fr: [
        'Sources primaires > Sources secondaires',
        'Évalué par des pairs > Articles d\'opinion',
        'Vérifiez les conflits d\'intérêts potentiels',
        'Recherchez les citations et références'
      ],
      es: [
        'Fuentes primarias > Fuentes secundarias',
        'Revisado por pares > Artículos de opinión',
        'Verifique posibles conflictos de interés',
        'Busque citas y referencias'
      ]
    },
    nextNodeId: 'ExpertiseCheck'
  },
  {
    id: 'ExpertiseCheck',
    type: 'decision',
    subgraph: 'DC',
    title: {
      en: 'Expertise Calibration',
      de: 'Experten-Prüfung',
      fr: 'Calibration de l\'expertise',
      it: 'Calibrazione dell\'expertise',
      es: 'Calibración de la experiencia'
    },
    description: {
      en: 'Do you have sufficient domain expertise to evaluate this topic yourself?',
      de: 'Haben Sie ausreichende Fachkenntnisse, um dieses Thema selbst zu bewerten?',
      fr: 'Avez-vous suffisamment d\'expertise pour évaluer ce sujet vous-même?',
      it: 'Hai sufficiente competenza nel settore per valutare questo argomento da solo?',
      es: '¿Tienes suficiente experiencia en el dominio para evaluar este tema tú mismo?'
    },
    tips: {
      en: [
        'Be honest about your knowledge limitations',
        'Dunning-Kruger effect: beginners often overestimate their expertise',
        'Even experts should seek peer review'
      ],
      de: [
        'Seien Sie ehrlich über Ihre Wissensgrenzen',
        'Dunning-Kruger-Effekt: Anfänger überschätzen oft ihre Expertise',
        'Selbst Experten sollten Peer-Review suchen'
      ],
      fr: [
        'Soyez honnête sur vos limites de connaissances',
        'Effet Dunning-Kruger: les débutants surestiment souvent leur expertise',
        'Même les experts devraient chercher une évaluation par les pairs'
      ],
      es: [
        'Sea honesto sobre sus limitaciones de conocimiento',
        'Efecto Dunning-Kruger: los principiantes a menudo sobreestiman su experiencia',
        'Incluso los expertos deben buscar revisión por pares'
      ]
    },
    options: [
      { label: { en: 'Yes', de: 'Ja', fr: 'Oui', it: 'Sì', es: 'Sí' }, nextNodeId: 'Collect', style: 'yes' },
      { label: { en: 'No', de: 'Nein', fr: 'Non', it: 'No', es: 'No' }, nextNodeId: 'SeekExpert', style: 'no' }
    ]
  },
  {
    id: 'SeekExpert',
    type: 'process',
    subgraph: 'DC',
    title: {
      en: 'Seek Expert Consultation',
      de: 'Experten suchen',
      fr: 'Consulter un expert',
      it: 'Cerca consulenza esperta',
      es: 'Buscar consulta experta'
    },
    description: {
      en: 'Find qualified experts in the relevant field. Look for consensus among multiple experts rather than relying on a single opinion.',
      de: 'Finden Sie qualifizierte Experten im relevanten Bereich.',
      fr: 'Trouvez des experts qualifiés dans le domaine concerné.',
      it: 'Trova esperti qualificati nel campo pertinente.',
      es: 'Encuentra expertos calificados en el campo relevante.'
    },
    tips: {
      en: [
        'Look for experts with relevant credentials',
        'Check if they have published peer-reviewed work',
        'Be wary of "experts" who only appear in media',
        'Seek consensus, not outlier opinions'
      ],
      de: [
        'Suchen Sie nach Experten mit relevanten Qualifikationen',
        'Prüfen Sie, ob sie peer-reviewed Arbeiten veröffentlicht haben',
        'Seien Sie vorsichtig bei "Experten", die nur in Medien erscheinen',
        'Suchen Sie Konsens, nicht Außenseitermeinungen'
      ],
      fr: [
        'Recherchez des experts avec des qualifications pertinentes',
        'Vérifiez s\'ils ont publié des travaux évalués par des pairs',
        'Méfiez-vous des "experts" qui n\'apparaissent que dans les médias',
        'Recherchez le consensus, pas les opinions marginales'
      ],
      es: [
        'Busque expertos con credenciales relevantes',
        'Verifique si han publicado trabajos revisados por pares',
        'Tenga cuidado con los "expertos" que solo aparecen en los medios',
        'Busque consenso, no opiniones atípicas'
      ]
    },
    nextNodeId: 'Collect'
  },
  {
    id: 'Collect',
    type: 'process',
    subgraph: 'DC',
    title: {
      en: 'Collect ALL Data',
      de: 'ALLE Daten sammeln',
      fr: 'Collecter TOUTES les données',
      it: 'Raccogli TUTTI i dati',
      es: 'Recopilar TODOS los datos'
    },
    description: {
      en: 'Gather information from multiple sources, including opposing viewpoints. Avoid confirmation bias by actively seeking contradicting evidence.',
      de: 'Sammeln Sie Informationen aus mehreren Quellen, einschließlich gegensätzlicher Standpunkte.',
      fr: 'Rassemblez des informations provenant de plusieurs sources, y compris des points de vue opposés.',
      it: 'Raccogli informazioni da più fonti, inclusi punti di vista opposti.',
      es: 'Recopila información de múltiples fuentes, incluyendo puntos de vista opuestos.'
    },
    tips: {
      en: [
        'Actively seek opposing views',
        'Use multiple independent sources',
        'Document where each piece of information comes from',
        'Be suspicious if all sources agree too perfectly'
      ],
      de: [
        'Suchen Sie aktiv nach gegensätzlichen Ansichten',
        'Verwenden Sie mehrere unabhängige Quellen',
        'Dokumentieren Sie, woher jede Information stammt',
        'Seien Sie misstrauisch, wenn alle Quellen zu perfekt übereinstimmen'
      ],
      fr: [
        'Recherchez activement les points de vue opposés',
        'Utilisez plusieurs sources indépendantes',
        'Documentez d\'où vient chaque information',
        'Méfiez-vous si toutes les sources sont trop parfaitement d\'accord'
      ],
      es: [
        'Busque activamente puntos de vista opuestos',
        'Use múltiples fuentes independientes',
        'Documente de dónde proviene cada información',
        'Sospeche si todas las fuentes coinciden demasiado perfectamente'
      ]
    },
    nextNodeId: 'AssessNature'
  },
  {
    id: 'AssessNature',
    type: 'decision',
    subgraph: 'DC',
    title: {
      en: 'Empirically Testable?',
      de: 'Empirisch prüfbar?',
      fr: 'Empiriquement testable?',
      it: 'Empiricamente verificabile?',
      es: '¿Empíricamente comprobable?'
    },
    description: {
      en: 'Can this claim be tested through observation, experimentation, or evidence? Some claims are inherently unfalsifiable.',
      de: 'Kann diese Behauptung durch Beobachtung, Experimente oder Beweise getestet werden?',
      fr: 'Cette affirmation peut-elle être testée par l\'observation, l\'expérimentation ou des preuves?',
      it: 'Questa affermazione può essere testata attraverso osservazione, sperimentazione o prove?',
      es: '¿Esta afirmación puede ser probada mediante observación, experimentación o evidencia?'
    },
    tips: {
      en: [
        'Testable claims make specific predictions',
        'If nothing could possibly disprove it, it\'s not scientific',
        'Vague claims are often unfalsifiable'
      ],
      de: [
        'Prüfbare Behauptungen machen spezifische Vorhersagen',
        'Wenn nichts es widerlegen könnte, ist es nicht wissenschaftlich',
        'Vage Behauptungen sind oft nicht falsifizierbar'
      ],
      fr: [
        'Les affirmations testables font des prédictions spécifiques',
        'Si rien ne peut le réfuter, ce n\'est pas scientifique',
        'Les affirmations vagues sont souvent non falsifiables'
      ],
      es: [
        'Las afirmaciones comprobables hacen predicciones específicas',
        'Si nada puede refutarlo, no es científico',
        'Las afirmaciones vagas a menudo son infalsificables'
      ]
    },
    options: [
      { label: { en: 'Yes', de: 'Ja', fr: 'Oui', it: 'Sì', es: 'Sí' }, nextNodeId: 'Formulate', style: 'yes' },
      { label: { en: 'No', de: 'Nein', fr: 'Non', it: 'No', es: 'No' }, nextNodeId: 'IsSupernatural', style: 'no' }
    ]
  },

  // HYPOTHESIS & EXPERIMENTATION
  {
    id: 'Formulate',
    type: 'process',
    subgraph: 'HE',
    title: {
      en: 'Formulate Hypothesis',
      de: 'Hypothese formulieren',
      fr: 'Formuler une hypothèse',
      it: 'Formulare un\'ipotesi',
      es: 'Formular hipótesis'
    },
    description: {
      en: 'Create a clear, testable hypothesis from first principles. A good hypothesis makes specific, measurable predictions.',
      de: 'Erstellen Sie eine klare, testbare Hypothese aus Grundprinzipien.',
      fr: 'Créez une hypothèse claire et testable à partir des premiers principes.',
      it: 'Crea un\'ipotesi chiara e verificabile partendo dai principi fondamentali.',
      es: 'Crea una hipótesis clara y comprobable desde los primeros principios.'
    },
    tips: {
      en: [
        'Start from first principles, not assumptions',
        'Make specific, measurable predictions',
        'Consider what would prove you wrong'
      ],
      de: [
        'Beginnen Sie mit Grundprinzipien, nicht mit Annahmen',
        'Machen Sie spezifische, messbare Vorhersagen',
        'Überlegen Sie, was Sie widerlegen würde'
      ],
      fr: [
        'Partez des principes fondamentaux, pas des suppositions',
        'Faites des prédictions spécifiques et mesurables',
        'Considérez ce qui prouverait que vous avez tort'
      ],
      es: [
        'Comience desde los primeros principios, no desde suposiciones',
        'Haga predicciones específicas y medibles',
        'Considere qué probaría que está equivocado'
      ]
    },
    nextNodeId: 'Falsifiability'
  },
  {
    id: 'Falsifiability',
    type: 'decision',
    subgraph: 'HE',
    title: {
      en: 'Is it Falsifiable?',
      de: 'Ist es falsifizierbar?',
      fr: 'Est-ce falsifiable?',
      it: 'È falsificabile?',
      es: '¿Es falsificable?'
    },
    description: {
      en: 'Can this hypothesis be proven wrong? A scientific hypothesis must be falsifiable - there must be some possible observation that could disprove it.',
      de: 'Kann diese Hypothese widerlegt werden?',
      fr: 'Cette hypothèse peut-elle être réfutée?',
      it: 'Questa ipotesi può essere smentita?',
      es: '¿Esta hipótesis puede ser refutada?'
    },
    tips: {
      en: [
        'Karl Popper: "A theory that explains everything explains nothing"',
        'Good hypotheses make risky predictions',
        'If you can\'t imagine what would disprove it, reformulate'
      ],
      de: [
        'Karl Popper: "Eine Theorie, die alles erklärt, erklärt nichts"',
        'Gute Hypothesen machen riskante Vorhersagen',
        'Wenn Sie sich nicht vorstellen können, was es widerlegen würde, formulieren Sie neu'
      ],
      fr: [
        'Karl Popper: "Une théorie qui explique tout n\'explique rien"',
        'Les bonnes hypothèses font des prédictions risquées',
        'Si vous ne pouvez pas imaginer ce qui le réfuterait, reformulez'
      ],
      es: [
        'Karl Popper: "Una teoría que explica todo no explica nada"',
        'Las buenas hipótesis hacen predicciones arriesgadas',
        'Si no puede imaginar qué lo refutaría, reformule'
      ]
    },
    options: [
      { label: { en: 'Yes', de: 'Ja', fr: 'Oui', it: 'Sì', es: 'Sí' }, nextNodeId: 'Design', style: 'yes' },
      { label: { en: 'No', de: 'Nein', fr: 'Non', it: 'No', es: 'No' }, nextNodeId: 'ReformulateHyp', style: 'no' }
    ]
  },
  {
    id: 'ReformulateHyp',
    type: 'process',
    subgraph: 'HE',
    title: {
      en: 'Reformulate Hypothesis',
      de: 'Hypothese neu formulieren',
      fr: 'Reformuler l\'hypothèse',
      it: 'Riformulare l\'ipotesi',
      es: 'Reformular la hipótesis'
    },
    description: {
      en: 'Your hypothesis needs to be more specific. What concrete prediction does it make? What observation would prove it wrong?',
      de: 'Ihre Hypothese muss spezifischer sein.',
      fr: 'Votre hypothèse doit être plus spécifique.',
      it: 'La tua ipotesi deve essere più specifica.',
      es: 'Tu hipótesis necesita ser más específica.'
    },
    nextNodeId: 'Formulate'
  },
  {
    id: 'Design',
    type: 'process',
    subgraph: 'HE',
    title: {
      en: 'Design Experiment',
      de: 'Experiment entwerfen',
      fr: 'Concevoir une expérience',
      it: 'Progettare un esperimento',
      es: 'Diseñar experimento'
    },
    description: {
      en: 'Design a test that could potentially falsify your hypothesis. Consider controls, variables, and potential confounding factors.',
      de: 'Entwerfen Sie einen Test, der Ihre Hypothese möglicherweise widerlegen könnte.',
      fr: 'Concevez un test qui pourrait potentiellement réfuter votre hypothèse.',
      it: 'Progetta un test che potrebbe potenzialmente falsificare la tua ipotesi.',
      es: 'Diseña una prueba que podría potencialmente falsificar tu hipótesis.'
    },
    tips: {
      en: [
        'Include control groups when possible',
        'Identify and control for confounding variables',
        'Pre-register your methodology to prevent p-hacking'
      ],
      de: [
        'Fügen Sie wenn möglich Kontrollgruppen ein',
        'Identifizieren und kontrollieren Sie Störvariablen',
        'Registrieren Sie Ihre Methodik vorab, um P-Hacking zu verhindern'
      ],
      fr: [
        'Incluez des groupes de contrôle si possible',
        'Identifiez et contrôlez les variables confondantes',
        'Pré-enregistrez votre méthodologie pour éviter le p-hacking'
      ],
      es: [
        'Incluya grupos de control cuando sea posible',
        'Identifique y controle las variables de confusión',
        'Pre-registre su metodología para prevenir el p-hacking'
      ]
    },
    nextNodeId: 'CollectMore'
  },
  {
    id: 'CollectMore',
    type: 'process',
    subgraph: 'HE',
    title: {
      en: 'Collect More Data',
      de: 'Mehr Daten sammeln',
      fr: 'Collecter plus de données',
      it: 'Raccogliere più dati',
      es: 'Recopilar más datos'
    },
    description: {
      en: 'Execute your experiment or investigation and gather the resulting data. Document everything carefully.',
      de: 'Führen Sie Ihr Experiment durch und sammeln Sie die resultierenden Daten.',
      fr: 'Exécutez votre expérience et rassemblez les données résultantes.',
      it: 'Esegui il tuo esperimento e raccogli i dati risultanti.',
      es: 'Ejecuta tu experimento y recopila los datos resultantes.'
    },
    nextNodeId: 'Bayes'
  },

  // NON-TESTABLE CLASSIFICATION
  {
    id: 'IsSupernatural',
    type: 'decision',
    subgraph: 'NT',
    title: {
      en: 'Supernatural Claims?',
      de: 'Übernatürliche Behauptungen?',
      fr: 'Affirmations surnaturelles?',
      it: 'Affermazioni soprannaturali?',
      es: '¿Afirmaciones sobrenaturales?'
    },
    description: {
      en: 'Does this claim involve supernatural entities, forces, or explanations that are by definition beyond natural observation?',
      de: 'Beinhaltet diese Behauptung übernatürliche Entitäten oder Kräfte?',
      fr: 'Cette affirmation implique-t-elle des entités ou forces surnaturelles?',
      it: 'Questa affermazione coinvolge entità o forze soprannaturali?',
      es: '¿Esta afirmación involucra entidades o fuerzas sobrenaturales?'
    },
    options: [
      { label: { en: 'Yes', de: 'Ja', fr: 'Oui', it: 'Sì', es: 'Sí' }, nextNodeId: 'Religion', style: 'yes' },
      { label: { en: 'No', de: 'Nein', fr: 'Non', it: 'No', es: 'No' }, nextNodeId: 'IsRigid', style: 'no' }
    ]
  },
  {
    id: 'IsRigid',
    type: 'decision',
    subgraph: 'NT',
    title: {
      en: 'Rigid / No Evidence?',
      de: 'Starr / Keine Belege?',
      fr: 'Rigide / Sans preuves?',
      it: 'Rigido / Senza prove?',
      es: '¿Rígido / Sin evidencia?'
    },
    description: {
      en: 'Is this belief held rigidly regardless of evidence, or does it explicitly reject the need for evidence?',
      de: 'Wird diese Überzeugung unabhängig von Beweisen starr festgehalten?',
      fr: 'Cette croyance est-elle maintenue rigidement indépendamment des preuves?',
      it: 'Questa credenza è mantenuta rigidamente indipendentemente dalle prove?',
      es: '¿Esta creencia se mantiene rígidamente independientemente de la evidencia?'
    },
    options: [
      { label: { en: 'Yes', de: 'Ja', fr: 'Oui', it: 'Sì', es: 'Sí' }, nextNodeId: 'Dogma', style: 'yes' },
      { label: { en: 'No', de: 'Nein', fr: 'Non', it: 'No', es: 'No' }, nextNodeId: 'IsIdeology', style: 'no' }
    ]
  },
  {
    id: 'IsIdeology',
    type: 'decision',
    subgraph: 'NT',
    title: {
      en: 'Political Beliefs?',
      de: 'Politische Überzeugungen?',
      fr: 'Croyances politiques?',
      it: 'Credenze politiche?',
      es: '¿Creencias políticas?'
    },
    description: {
      en: 'Is this primarily a political or ideological position rather than an empirical claim?',
      de: 'Handelt es sich hauptsächlich um eine politische oder ideologische Position?',
      fr: 'S\'agit-il principalement d\'une position politique ou idéologique?',
      it: 'Si tratta principalmente di una posizione politica o ideologica?',
      es: '¿Es esto principalmente una posición política o ideológica?'
    },
    options: [
      { label: { en: 'Yes', de: 'Ja', fr: 'Oui', it: 'Sì', es: 'Sí' }, nextNodeId: 'Ideology', style: 'yes' },
      { label: { en: 'No', de: 'Nein', fr: 'Non', it: 'No', es: 'No' }, nextNodeId: 'IsSecret', style: 'no' }
    ]
  },
  {
    id: 'IsSecret',
    type: 'decision',
    subgraph: 'NT',
    title: {
      en: 'Secret Knowledge?',
      de: 'Geheimwissen?',
      fr: 'Connaissance secrète?',
      it: 'Conoscenza segreta?',
      es: '¿Conocimiento secreto?'
    },
    description: {
      en: 'Does this claim rely on hidden or secret information that only select people have access to?',
      de: 'Stützt sich diese Behauptung auf verborgene oder geheime Informationen?',
      fr: 'Cette affirmation repose-t-elle sur des informations cachées ou secrètes?',
      it: 'Questa affermazione si basa su informazioni nascoste o segrete?',
      es: '¿Esta afirmación se basa en información oculta o secreta?'
    },
    options: [
      { label: { en: 'Yes', de: 'Ja', fr: 'Oui', it: 'Sì', es: 'Sí' }, nextNodeId: 'Conspiracy', style: 'yes' },
      { label: { en: 'No', de: 'Nein', fr: 'Non', it: 'No', es: 'No' }, nextNodeId: 'Gossip', style: 'no' }
    ]
  },
  {
    id: 'Religion',
    type: 'category',
    subgraph: 'NT',
    title: { en: 'Religion', de: 'Religion', fr: 'Religion', it: 'Religione', es: 'Religión' },
    description: {
      en: 'This appears to be a religious or faith-based belief. Such beliefs are not empirically testable by definition.',
      de: 'Dies scheint eine religiöse oder glaubensbasierte Überzeugung zu sein.',
      fr: 'Cela semble être une croyance religieuse ou basée sur la foi.',
      it: 'Questa sembra essere una credenza religiosa o basata sulla fede.',
      es: 'Esto parece ser una creencia religiosa o basada en la fe.'
    },
    categoryColor: '#228B22',
    nextNodeId: 'NotTestable'
  },
  {
    id: 'Dogma',
    type: 'category',
    subgraph: 'NT',
    title: { en: 'Dogma', de: 'Dogma', fr: 'Dogme', it: 'Dogma', es: 'Dogma' },
    description: {
      en: 'This is a dogmatic belief - held as absolute truth without evidence or despite contrary evidence.',
      de: 'Dies ist eine dogmatische Überzeugung.',
      fr: 'C\'est une croyance dogmatique.',
      it: 'Questa è una credenza dogmatica.',
      es: 'Esta es una creencia dogmática.'
    },
    categoryColor: '#8B0000',
    nextNodeId: 'NotTestable'
  },
  {
    id: 'Ideology',
    type: 'category',
    subgraph: 'NT',
    title: { en: 'Ideology', de: 'Ideologie', fr: 'Idéologie', it: 'Ideologia', es: 'Ideología' },
    description: {
      en: 'This is an ideological position - a system of beliefs that may contain both testable and untestable elements.',
      de: 'Dies ist eine ideologische Position.',
      fr: 'C\'est une position idéologique.',
      it: 'Questa è una posizione ideologica.',
      es: 'Esta es una posición ideológica.'
    },
    categoryColor: '#FFA500',
    nextNodeId: 'NotTestable'
  },
  {
    id: 'Conspiracy',
    type: 'category',
    subgraph: 'NT',
    title: { en: 'Conspiracy', de: 'Verschwörung', fr: 'Conspiration', it: 'Cospirazione', es: 'Conspiración' },
    description: {
      en: 'This has characteristics of conspiracy thinking - relying on hidden knowledge and unfalsifiable claims.',
      de: 'Dies hat Merkmale von Verschwörungsdenken.',
      fr: 'Cela a des caractéristiques de la pensée conspirationniste.',
      it: 'Questo ha caratteristiche del pensiero complottista.',
      es: 'Esto tiene características del pensamiento conspirativo.'
    },
    categoryColor: '#808080',
    nextNodeId: 'NotTestable'
  },
  {
    id: 'Gossip',
    type: 'category',
    subgraph: 'NT',
    title: { en: 'Gossip', de: 'Klatsch', fr: 'Ragots', it: 'Pettegolezzo', es: 'Chisme' },
    description: {
      en: 'This appears to be unverified information or hearsay without reliable sourcing.',
      de: 'Dies scheint unbestätigte Information oder Hörensagen zu sein.',
      fr: 'Cela semble être des informations non vérifiées ou des ouï-dire.',
      it: 'Questo sembra essere informazione non verificata o diceria.',
      es: 'Esto parece ser información no verificada o rumores.'
    },
    categoryColor: '#DDA0DD',
    nextNodeId: 'NotTestable'
  },
  {
    id: 'NotTestable',
    type: 'process',
    subgraph: 'NT',
    title: {
      en: 'Not Empirically Testable',
      de: 'Nicht empirisch prüfbar',
      fr: 'Non testable empiriquement',
      it: 'Non verificabile empiricamente',
      es: 'No comprobable empíricamente'
    },
    description: {
      en: 'This claim cannot be evaluated using the scientific method. It may still be meaningful to you personally, but it cannot be objectively verified.',
      de: 'Diese Behauptung kann nicht mit der wissenschaftlichen Methode bewertet werden.',
      fr: 'Cette affirmation ne peut pas être évaluée par la méthode scientifique.',
      it: 'Questa affermazione non può essere valutata usando il metodo scientifico.',
      es: 'Esta afirmación no puede ser evaluada usando el método científico.'
    },
    tips: {
      en: [
        'This doesn\'t mean the belief is wrong - just that it\'s outside empirical inquiry',
        'Consider what value this belief provides in your life',
        'Be aware when mixing testable and untestable claims'
      ],
      de: [
        'Das bedeutet nicht, dass der Glaube falsch ist - nur dass er außerhalb empirischer Untersuchung liegt',
        'Überlegen Sie, welchen Wert dieser Glaube in Ihrem Leben bietet',
        'Seien Sie sich bewusst, wenn Sie prüfbare und nicht prüfbare Behauptungen mischen'
      ],
      fr: [
        'Cela ne signifie pas que la croyance est fausse - juste qu\'elle est en dehors de l\'enquête empirique',
        'Considérez quelle valeur cette croyance apporte à votre vie',
        'Soyez conscient lorsque vous mélangez des affirmations testables et non testables'
      ],
      es: [
        'Esto no significa que la creencia sea incorrecta - solo que está fuera de la investigación empírica',
        'Considere qué valor proporciona esta creencia en su vida',
        'Sea consciente cuando mezcle afirmaciones comprobables y no comprobables'
      ]
    },
    nextNodeId: 'EndInquiry'
  },

  // BAYES THEOREM
  {
    id: 'Bayes',
    type: 'process',
    subgraph: 'BA',
    title: {
      en: 'Apply Bayes Theorem',
      de: 'Bayes-Theorem anwenden',
      fr: 'Appliquer le théorème de Bayes',
      it: 'Applicare il teorema di Bayes',
      es: 'Aplicar el teorema de Bayes'
    },
    description: {
      en: 'Update your beliefs based on new evidence using Bayesian reasoning. This is the mathematical foundation of rational belief updating.',
      de: 'Aktualisieren Sie Ihre Überzeugungen basierend auf neuen Beweisen.',
      fr: 'Mettez à jour vos croyances en fonction des nouvelles preuves.',
      it: 'Aggiorna le tue credenze in base alle nuove prove.',
      es: 'Actualiza tus creencias basándote en nueva evidencia.'
    },
    specialContent: 'bayes',
    nextNodeId: 'Evaluate'
  },

  // EVIDENCE EVALUATION
  {
    id: 'Evaluate',
    type: 'process',
    subgraph: 'EE',
    title: {
      en: 'Evaluate Evidence',
      de: 'Beweise bewerten',
      fr: 'Évaluer les preuves',
      it: 'Valutare le prove',
      es: 'Evaluar la evidencia'
    },
    description: {
      en: 'Systematically assess the quality and relevance of your evidence. Not all evidence is equally strong.',
      de: 'Bewerten Sie systematisch die Qualität und Relevanz Ihrer Beweise.',
      fr: 'Évaluez systématiquement la qualité et la pertinence de vos preuves.',
      it: 'Valuta sistematicamente la qualità e la rilevanza delle tue prove.',
      es: 'Evalúa sistemáticamente la calidad y relevancia de tu evidencia.'
    },
    nextNodeId: 'MetaAnalysis'
  },
  {
    id: 'MetaAnalysis',
    type: 'process',
    subgraph: 'EE',
    title: {
      en: 'Meta-Analysis',
      de: 'Meta-Analyse',
      fr: 'Méta-analyse',
      it: 'Meta-analisi',
      es: 'Meta-análisis'
    },
    description: {
      en: 'If multiple studies or sources exist, combine and weigh their findings. Look for systematic reviews and meta-analyses.',
      de: 'Wenn mehrere Studien existieren, kombinieren und gewichten Sie deren Ergebnisse.',
      fr: 'Si plusieurs études existent, combinez et pesez leurs résultats.',
      it: 'Se esistono più studi, combina e pesa i loro risultati.',
      es: 'Si existen múltiples estudios, combina y pondera sus hallazgos.'
    },
    tips: {
      en: [
        'Meta-analyses are stronger than individual studies',
        'Look for replication across different research groups',
        'Be wary of cherry-picking favorable studies'
      ],
      de: [
        'Meta-Analysen sind stärker als einzelne Studien',
        'Suchen Sie nach Replikation durch verschiedene Forschungsgruppen',
        'Seien Sie vorsichtig bei der Auswahl günstiger Studien'
      ],
      fr: [
        'Les méta-analyses sont plus solides que les études individuelles',
        'Recherchez la réplication par différents groupes de recherche',
        'Méfiez-vous de la sélection d\'études favorables'
      ],
      es: [
        'Los meta-análisis son más fuertes que los estudios individuales',
        'Busque replicación entre diferentes grupos de investigación',
        'Tenga cuidado con la selección de estudios favorables'
      ]
    },
    nextNodeId: 'Layer'
  },
  {
    id: 'Layer',
    type: 'process',
    subgraph: 'EE',
    title: {
      en: 'Layer Evidence',
      de: 'Beweise schichten',
      fr: 'Stratifier les preuves',
      it: 'Stratificare le prove',
      es: 'Estratificar la evidencia'
    },
    description: {
      en: 'Organize evidence by quality and relevance. Direct evidence > indirect evidence. Controlled studies > observational data.',
      de: 'Organisieren Sie Beweise nach Qualität und Relevanz.',
      fr: 'Organisez les preuves par qualité et pertinence.',
      it: 'Organizza le prove per qualità e rilevanza.',
      es: 'Organiza la evidencia por calidad y relevancia.'
    },
    nextNodeId: 'Filter'
  },
  {
    id: 'Filter',
    type: 'process',
    subgraph: 'EE',
    title: {
      en: 'Filter Noise',
      de: 'Rauschen filtern',
      fr: 'Filtrer le bruit',
      it: 'Filtrare il rumore',
      es: 'Filtrar el ruido'
    },
    description: {
      en: 'Separate signal from noise. Identify and discount low-quality evidence, anecdotes, and outliers.',
      de: 'Trennen Sie Signal von Rauschen.',
      fr: 'Séparez le signal du bruit.',
      it: 'Separa il segnale dal rumore.',
      es: 'Separa la señal del ruido.'
    },
    nextNodeId: 'AssessConf'
  },
  {
    id: 'AssessConf',
    type: 'decision',
    subgraph: 'EE',
    title: {
      en: 'Confidence Level?',
      de: 'Vertrauensniveau?',
      fr: 'Niveau de confiance?',
      it: 'Livello di confidenza?',
      es: '¿Nivel de confianza?'
    },
    description: {
      en: 'Based on all evidence, what is your confidence level in the hypothesis? Be honest and calibrated.',
      de: 'Basierend auf allen Beweisen, wie hoch ist Ihr Vertrauen in die Hypothese?',
      fr: 'Sur la base de toutes les preuves, quel est votre niveau de confiance dans l\'hypothèse?',
      it: 'Sulla base di tutte le prove, qual è il tuo livello di confidenza nell\'ipotesi?',
      es: 'Basándote en toda la evidencia, ¿cuál es tu nivel de confianza en la hipótesis?'
    },
    specialContent: 'confidence',
    options: [
      { label: { en: '≥80% High', de: '≥80% Hoch', fr: '≥80% Élevé', it: '≥80% Alto', es: '≥80% Alto' }, nextNodeId: 'ProceedMore', style: 'yes' },
      { label: { en: '40-79% Medium', de: '40-79% Mittel', fr: '40-79% Moyen', it: '40-79% Medio', es: '40-79% Medio' }, nextNodeId: 'ProceedMedium', style: 'neutral' },
      { label: { en: '<40% Low', de: '<40% Niedrig', fr: '<40% Faible', it: '<40% Basso', es: '<40% Bajo' }, nextNodeId: 'Reevaluate', style: 'no' }
    ]
  },
  {
    id: 'ProceedMore',
    type: 'process',
    subgraph: 'EE',
    title: {
      en: 'Proceed with High Confidence',
      de: 'Mit hohem Vertrauen fortfahren',
      fr: 'Procéder avec haute confiance',
      it: 'Procedere con alta confidenza',
      es: 'Proceder con alta confianza'
    },
    description: {
      en: 'Your evidence strongly supports the hypothesis. Continue to bias management before finalizing.',
      de: 'Ihre Beweise unterstützen die Hypothese stark. Fahren Sie mit dem Bias-Management fort, bevor Sie abschließen.',
      fr: 'Vos preuves soutiennent fortement l\'hypothèse. Continuez vers la gestion des biais avant de finaliser.',
      es: 'Tu evidencia apoya fuertemente la hipótesis. Continúa con la gestión de sesgos antes de finalizar.'
    },
    tips: {
      en: [
        'High confidence (≥80%) means strong evidence alignment',
        'Example: Multiple independent studies confirm the same result',
        'Still check for confirmation bias before concluding'
      ],
      de: [
        'Hohes Vertrauen (≥80%) bedeutet starke Beweisübereinstimmung',
        'Beispiel: Mehrere unabhängige Studien bestätigen dasselbe Ergebnis',
        'Überprüfen Sie dennoch auf Bestätigungsfehler, bevor Sie abschließen'
      ],
      fr: [
        'Haute confiance (≥80%) signifie un fort alignement des preuves',
        'Exemple: Plusieurs études indépendantes confirment le même résultat',
        'Vérifiez encore le biais de confirmation avant de conclure'
      ],
      es: [
        'Alta confianza (≥80%) significa fuerte alineación de evidencia',
        'Ejemplo: Múltiples estudios independientes confirman el mismo resultado',
        'Aún así, verifica el sesgo de confirmación antes de concluir'
      ]
    },
    examples: {
      en: ['Like a well-replicated scientific finding with consistent results across different labs and methodologies.'],
      de: ['Wie ein gut repliziertes wissenschaftliches Ergebnis mit konsistenten Resultaten in verschiedenen Labors.'],
      fr: ['Comme une découverte scientifique bien répliquée avec des résultats cohérents dans différents laboratoires.'],
      es: ['Como un hallazgo científico bien replicado con resultados consistentes en diferentes laboratorios.']
    },
    nextNodeId: 'Conclude'
  },
  {
    id: 'ProceedMedium',
    type: 'process',
    subgraph: 'EE',
    title: {
      en: 'Proceed with Caution',
      de: 'Mit Vorsicht fortfahren',
      fr: 'Procéder avec prudence',
      it: 'Procedere con cautela',
      es: 'Proceder con precaución'
    },
    description: {
      en: 'Evidence is mixed. Consider gathering more data or accepting uncertainty.',
      de: 'Die Beweise sind gemischt. Erwägen Sie, mehr Daten zu sammeln oder Unsicherheit zu akzeptieren.',
      fr: 'Les preuves sont mitigées. Envisagez de recueillir plus de données ou d\'accepter l\'incertitude.',
      es: 'La evidencia es mixta. Considera recopilar más datos o aceptar la incertidumbre.'
    },
    tips: {
      en: [
        'Medium confidence (40-79%) indicates inconclusive evidence',
        'This is a normal state - most real-world questions fall here',
        'Consider: What additional evidence would shift your confidence?'
      ],
      de: [
        'Mittleres Vertrauen (40-79%) zeigt nicht schlüssige Beweise an',
        'Dies ist ein normaler Zustand - die meisten realen Fragen fallen hierher',
        'Überlegen Sie: Welche zusätzlichen Beweise würden Ihr Vertrauen verschieben?'
      ],
      fr: [
        'Confiance moyenne (40-79%) indique des preuves non concluantes',
        'C\'est un état normal - la plupart des questions réelles tombent ici',
        'Considérez: Quelles preuves supplémentaires changeraient votre confiance?'
      ],
      es: [
        'Confianza media (40-79%) indica evidencia no concluyente',
        'Este es un estado normal - la mayoría de las preguntas del mundo real caen aquí',
        'Considera: ¿Qué evidencia adicional cambiaría tu confianza?'
      ]
    },
    examples: {
      en: ['Like a new diet study with promising but not yet replicated results - worth noting but not betting your health on.'],
      de: ['Wie eine neue Diätstudie mit vielversprechenden, aber noch nicht replizierten Ergebnissen.'],
      fr: ['Comme une nouvelle étude de régime avec des résultats prometteurs mais pas encore répliqués.'],
      es: ['Como un nuevo estudio de dieta con resultados prometedores pero aún no replicados.']
    },
    nextNodeId: 'MedConfWall'
  },
  {
    id: 'Reevaluate',
    type: 'process',
    subgraph: 'EE',
    title: {
      en: 'Re-evaluate',
      de: 'Neu bewerten',
      fr: 'Réévaluer',
      it: 'Rivalutare',
      es: 'Reevaluar'
    },
    description: {
      en: 'Confidence is too low. Consider reformulating your hypothesis or gathering more evidence.',
      de: 'Das Vertrauen ist zu niedrig. Erwägen Sie, Ihre Hypothese neu zu formulieren oder mehr Beweise zu sammeln.',
      fr: 'La confiance est trop faible. Envisagez de reformuler votre hypothèse ou de recueillir plus de preuves.',
      es: 'La confianza es demasiado baja. Considera reformular tu hipótesis o recopilar más evidencia.'
    },
    tips: {
      en: [
        'Low confidence (<40%) is valuable information - it means you should not act on this belief yet',
        'Ask: Is the hypothesis testable? Is there a way to get better evidence?',
        'Consider suspending judgment rather than forcing a conclusion'
      ],
      de: [
        'Niedriges Vertrauen (<40%) ist wertvolle Information - es bedeutet, dass Sie noch nicht auf dieser Überzeugung handeln sollten',
        'Fragen Sie: Ist die Hypothese testbar? Gibt es einen Weg, bessere Beweise zu bekommen?',
        'Erwägen Sie, das Urteil auszusetzen, anstatt eine Schlussfolgerung zu erzwingen'
      ],
      fr: [
        'Faible confiance (<40%) est une information précieuse - cela signifie que vous ne devriez pas encore agir sur cette croyance',
        'Demandez: L\'hypothèse est-elle testable? Y a-t-il un moyen d\'obtenir de meilleures preuves?',
        'Envisagez de suspendre le jugement plutôt que de forcer une conclusion'
      ],
      es: [
        'Baja confianza (<40%) es información valiosa - significa que no debes actuar sobre esta creencia todavía',
        'Pregunta: ¿Es la hipótesis comprobable? ¿Hay una forma de obtener mejor evidencia?',
        'Considera suspender el juicio en lugar de forzar una conclusión'
      ]
    },
    examples: {
      en: ['Like an extraordinary claim with only anecdotal evidence - interesting but not actionable without more rigorous investigation.'],
      de: ['Wie eine außergewöhnliche Behauptung mit nur anekdotischen Beweisen - interessant, aber ohne gründlichere Untersuchung nicht umsetzbar.'],
      fr: ['Comme une affirmation extraordinaire avec seulement des preuves anecdotiques - intéressant mais pas exploitable sans enquête plus rigoureuse.'],
      es: ['Como una afirmación extraordinaria con solo evidencia anecdótica - interesante pero no accionable sin una investigación más rigurosa.']
    },
    nextNodeId: 'TimeReview'
  },
  {
    id: 'TimeReview',
    type: 'process',
    subgraph: 'EE',
    title: {
      en: 'Schedule Review',
      de: 'Überprüfung planen',
      fr: 'Planifier une révision',
      it: 'Pianificare una revisione',
      es: 'Programar revisión'
    },
    description: {
      en: 'Set a time to revisit this topic when new evidence may be available.',
      de: 'Legen Sie einen Zeitpunkt fest, um dieses Thema erneut zu überprüfen.',
      fr: 'Fixez un moment pour revisiter ce sujet.',
      it: 'Imposta un momento per rivisitare questo argomento.',
      es: 'Establece un momento para revisar este tema.'
    },
    nextNodeId: 'LowConfWall'
  },
  {
    id: 'Conclude',
    type: 'process',
    subgraph: 'EE',
    title: {
      en: 'Conclude or Refine Theory',
      de: 'Theorie abschließen oder verfeinern',
      fr: 'Conclure ou affiner la théorie',
      it: 'Concludere o affinare la teoria',
      es: 'Concluir o refinar la teoría'
    },
    description: {
      en: 'You have high confidence in your conclusion. Before finalizing, run it through bias management.',
      de: 'Sie haben hohes Vertrauen in Ihre Schlussfolgerung.',
      fr: 'Vous avez une haute confiance dans votre conclusion.',
      it: 'Hai alta confidenza nella tua conclusione.',
      es: 'Tienes alta confianza en tu conclusión.'
    },
    nextNodeId: 'AddressBiases'
  },

  // BIAS MANAGEMENT
  {
    id: 'AddressBiases',
    type: 'process',
    subgraph: 'BM',
    title: {
      en: 'Address Biases',
      de: 'Biases adressieren',
      fr: 'Traiter les biais',
      it: 'Affrontare i bias',
      es: 'Abordar los sesgos'
    },
    description: {
      en: 'Before accepting your conclusion, actively check for cognitive biases that may have influenced your reasoning.',
      de: 'Bevor Sie Ihre Schlussfolgerung akzeptieren, prüfen Sie aktiv auf kognitive Verzerrungen.',
      fr: 'Avant d\'accepter votre conclusion, vérifiez activement les biais cognitifs.',
      it: 'Prima di accettare la tua conclusione, verifica attivamente i bias cognitivi.',
      es: 'Antes de aceptar tu conclusión, verifica activamente los sesgos cognitivos.'
    },
    nextNodeId: 'MotivatedReasoning'
  },
  {
    id: 'MotivatedReasoning',
    type: 'decision',
    subgraph: 'BM',
    title: {
      en: 'Motivated Reasoning?',
      de: 'Motiviertes Schlussfolgern?',
      fr: 'Raisonnement motivé?',
      it: 'Ragionamento motivato?',
      es: '¿Razonamiento motivado?'
    },
    description: {
      en: 'Ask yourself honestly: Do I WANT this conclusion to be true? Am I reasoning toward a predetermined answer?',
      de: 'Fragen Sie sich ehrlich: WILL ich, dass diese Schlussfolgerung wahr ist?',
      fr: 'Demandez-vous honnêtement: Est-ce que je VEUX que cette conclusion soit vraie?',
      it: 'Chiediti onestamente: VOGLIO che questa conclusione sia vera?',
      es: 'Pregúntate honestamente: ¿QUIERO que esta conclusión sea verdadera?'
    },
    tips: {
      en: [
        'We naturally seek evidence that confirms what we already believe',
        'Strong emotional reactions may indicate motivated reasoning',
        'Ask: "What would I believe if I had no stake in the outcome?"'
      ],
      de: [
        'Wir suchen natürlich nach Beweisen, die bestätigen, was wir bereits glauben',
        'Starke emotionale Reaktionen können auf motiviertes Denken hinweisen',
        'Fragen Sie: "Was würde ich glauben, wenn ich kein Interesse am Ergebnis hätte?"'
      ],
      fr: [
        'Nous cherchons naturellement des preuves qui confirment ce que nous croyons déjà',
        'Les réactions émotionnelles fortes peuvent indiquer un raisonnement motivé',
        'Demandez: "Que croirais-je si je n\'avais aucun intérêt dans le résultat?"'
      ],
      es: [
        'Naturalmente buscamos evidencia que confirme lo que ya creemos',
        'Las reacciones emocionales fuertes pueden indicar razonamiento motivado',
        'Pregunte: "¿Qué creería si no tuviera interés en el resultado?"'
      ]
    },
    options: [
      { label: { en: 'Yes', de: 'Ja', fr: 'Oui', it: 'Sì', es: 'Sí' }, nextNodeId: 'AcknowledgeBias', style: 'yes' },
      { label: { en: 'No', de: 'Nein', fr: 'Non', it: 'No', es: 'No' }, nextNodeId: 'Steelman', style: 'no' }
    ]
  },
  {
    id: 'AcknowledgeBias',
    type: 'process',
    subgraph: 'BM',
    title: {
      en: 'Document Bias',
      de: 'Bias dokumentieren',
      fr: 'Documenter le biais',
      it: 'Documentare il bias',
      es: 'Documentar el sesgo'
    },
    description: {
      en: 'Acknowledge and document your potential bias. This awareness helps counteract its influence.',
      de: 'Erkennen und dokumentieren Sie Ihre potenzielle Voreingenommenheit.',
      fr: 'Reconnaissez et documentez votre biais potentiel.',
      it: 'Riconosci e documenta il tuo potenziale bias.',
      es: 'Reconoce y documenta tu posible sesgo.'
    },
    nextNodeId: 'Steelman'
  },
  {
    id: 'Steelman',
    type: 'process',
    subgraph: 'BM',
    title: {
      en: 'Steelman the Opposition',
      de: 'Steelman-Argument',
      fr: 'Argument Steelman',
      it: 'Argomento Steelman',
      es: 'Argumento Steelman'
    },
    description: {
      en: 'Construct the STRONGEST possible argument against your conclusion. If you can\'t, you may not understand the opposing view well enough.',
      de: 'Konstruieren Sie das STÄRKSTE mögliche Argument gegen Ihre Schlussfolgerung.',
      fr: 'Construisez l\'argument le PLUS FORT possible contre votre conclusion.',
      it: 'Costruisci l\'argomento PIÙ FORTE possibile contro la tua conclusione.',
      es: 'Construye el argumento MÁS FUERTE posible contra tu conclusión.'
    },
    tips: {
      en: [
        'This is the opposite of a "strawman" argument',
        'If you can\'t steelman the opposition, seek out their best advocates',
        'A strong steelman should make you at least slightly uncertain'
      ],
      de: [
        'Dies ist das Gegenteil eines "Strohmann"-Arguments',
        'Wenn Sie die Opposition nicht verstärken können, suchen Sie ihre besten Vertreter',
        'Ein starkes Steelman sollte Sie zumindest leicht unsicher machen'
      ],
      fr: [
        'C\'est l\'opposé d\'un argument "homme de paille"',
        'Si vous ne pouvez pas renforcer l\'opposition, cherchez leurs meilleurs défenseurs',
        'Un steelman fort devrait vous rendre au moins légèrement incertain'
      ],
      es: [
        'Esto es lo opuesto a un argumento "hombre de paja"',
        'Si no puede fortalecer la oposición, busque a sus mejores defensores',
        'Un steelman fuerte debería hacerle al menos ligeramente incierto'
      ]
    },
    nextNodeId: 'Debias'
  },
  {
    id: 'Debias',
    type: 'process',
    subgraph: 'BM',
    title: {
      en: 'Debiasing Strategies',
      de: 'Debiasing-Strategien',
      fr: 'Stratégies de débiaisage',
      it: 'Strategie di debiasing',
      es: 'Estrategias de desbiasing'
    },
    description: {
      en: 'Apply specific techniques to counteract cognitive biases.',
      de: 'Wenden Sie spezifische Techniken an, um kognitive Verzerrungen entgegenzuwirken.',
      fr: 'Appliquez des techniques spécifiques pour contrecarrer les biais cognitifs.',
      it: 'Applica tecniche specifiche per contrastare i bias cognitivi.',
      es: 'Aplica técnicas específicas para contrarrestar los sesgos cognitivos.'
    },
    tips: {
      en: [
        'Consider the opposite: What if the opposite were true?',
        'Seek disconfirming evidence actively',
        'Use pre-mortems: Imagine your conclusion is wrong - why?',
        'Get feedback from people who disagree with you'
      ],
      de: [
        'Betrachten Sie das Gegenteil: Was wäre, wenn das Gegenteil wahr wäre?',
        'Suchen Sie aktiv nach widerlegenden Beweisen',
        'Verwenden Sie Pre-Mortems: Stellen Sie sich vor, Ihre Schlussfolgerung ist falsch - warum?',
        'Holen Sie sich Feedback von Menschen, die anderer Meinung sind'
      ],
      fr: [
        'Considérez l\'opposé: Et si l\'opposé était vrai?',
        'Recherchez activement des preuves infirmantes',
        'Utilisez des pré-mortems: Imaginez que votre conclusion est fausse - pourquoi?',
        'Obtenez des retours de personnes qui ne sont pas d\'accord avec vous'
      ],
      es: [
        'Considere lo opuesto: ¿Y si lo opuesto fuera verdad?',
        'Busque activamente evidencia que lo contradiga',
        'Use pre-mortems: Imagine que su conclusión es incorrecta - ¿por qué?',
        'Obtenga retroalimentación de personas que no están de acuerdo con usted'
      ]
    },
    nextNodeId: 'CriticalReview'
  },
  {
    id: 'CriticalReview',
    type: 'process',
    subgraph: 'BM',
    title: {
      en: 'Critical Review',
      de: 'Kritische Prüfung',
      fr: 'Revue critique',
      it: 'Revisione critica',
      es: 'Revisión crítica'
    },
    description: {
      en: 'Subject your reasoning to rigorous critical analysis. Look for logical fallacies and weak points.',
      de: 'Unterziehen Sie Ihre Argumentation einer rigorosen kritischen Analyse.',
      fr: 'Soumettez votre raisonnement à une analyse critique rigoureuse.',
      it: 'Sottoponi il tuo ragionamento a un\'analisi critica rigorosa.',
      es: 'Somete tu razonamiento a un análisis crítico riguroso.'
    },
    nextNodeId: 'AvoidFallacies'
  },
  {
    id: 'AvoidFallacies',
    type: 'process',
    subgraph: 'BM',
    title: {
      en: 'Avoid Fallacies',
      de: 'Fehlschlüsse vermeiden',
      fr: 'Éviter les sophismes',
      it: 'Evitare le fallacie',
      es: 'Evitar falacias'
    },
    description: {
      en: 'Check your reasoning for common logical fallacies.',
      de: 'Überprüfen Sie Ihre Argumentation auf häufige logische Fehlschlüsse.',
      fr: 'Vérifiez votre raisonnement pour les sophismes logiques courants.',
      it: 'Controlla il tuo ragionamento per le fallacie logiche comuni.',
      es: 'Revisa tu razonamiento en busca de falacias lógicas comunes.'
    },
    tips: {
      en: [
        'Ad hominem: Attacking the person, not the argument',
        'Appeal to authority: Expert opinion ≠ proof',
        'False dichotomy: Are there really only two options?',
        'Slippery slope: Is the chain of consequences actually likely?'
      ],
      de: [
        'Ad hominem: Angriff auf die Person, nicht das Argument',
        'Autoritätsargument: Expertenmeinung ≠ Beweis',
        'Falsches Dilemma: Gibt es wirklich nur zwei Optionen?',
        'Rutschige Bahn: Ist die Kette von Konsequenzen tatsächlich wahrscheinlich?'
      ],
      fr: [
        'Ad hominem: Attaquer la personne, pas l\'argument',
        'Appel à l\'autorité: L\'opinion d\'expert ≠ preuve',
        'Fausse dichotomie: Y a-t-il vraiment seulement deux options?',
        'Pente glissante: La chaîne de conséquences est-elle vraiment probable?'
      ],
      es: [
        'Ad hominem: Atacar a la persona, no el argumento',
        'Apelación a la autoridad: Opinión de experto ≠ prueba',
        'Falsa dicotomía: ¿Realmente hay solo dos opciones?',
        'Pendiente resbaladiza: ¿Es realmente probable la cadena de consecuencias?'
      ]
    },
    links: [
      { title: 'Logical Fallacies', url: 'https://www.objective-reality.info/logical-fallacies' }
    ],
    nextNodeId: 'SeekVerify'
  },
  {
    id: 'SeekVerify',
    type: 'process',
    subgraph: 'BM',
    title: {
      en: 'Verification',
      de: 'Verifizierung',
      fr: 'Vérification',
      it: 'Verifica',
      es: 'Verificación'
    },
    description: {
      en: 'Seek external verification of your conclusions. Share your reasoning with others who can critique it.',
      de: 'Suchen Sie externe Überprüfung Ihrer Schlussfolgerungen.',
      fr: 'Cherchez une vérification externe de vos conclusions.',
      it: 'Cerca una verifica esterna delle tue conclusioni.',
      es: 'Busca verificación externa de tus conclusiones.'
    },
    nextNodeId: 'Replication'
  },
  {
    id: 'Replication',
    type: 'process',
    subgraph: 'BM',
    title: {
      en: 'Replication',
      de: 'Replikation',
      fr: 'Réplication',
      it: 'Replicazione',
      es: 'Replicación'
    },
    description: {
      en: 'Can your findings be replicated? Independent replication is the gold standard of scientific validity.',
      de: 'Können Ihre Ergebnisse repliziert werden?',
      fr: 'Vos résultats peuvent-ils être répliqués?',
      it: 'I tuoi risultati possono essere replicati?',
      es: '¿Tus hallazgos pueden ser replicados?'
    },
    tips: {
      en: [
        'The replication crisis shows many findings don\'t hold up',
        'Look for independent replications by different research groups',
        'Be skeptical of unreplicated findings'
      ],
      de: [
        'Die Replikationskrise zeigt, dass viele Ergebnisse nicht standhalten',
        'Suchen Sie nach unabhängigen Replikationen durch verschiedene Forschungsgruppen',
        'Seien Sie skeptisch gegenüber nicht replizierten Ergebnissen'
      ],
      fr: [
        'La crise de la réplication montre que de nombreux résultats ne tiennent pas',
        'Recherchez des réplications indépendantes par différents groupes de recherche',
        'Soyez sceptique face aux résultats non répliqués'
      ],
      es: [
        'La crisis de replicación muestra que muchos hallazgos no se sostienen',
        'Busque replicaciones independientes por diferentes grupos de investigación',
        'Sea escéptico con los hallazgos no replicados'
      ]
    },
    nextNodeId: 'PeerReview'
  },
  {
    id: 'PeerReview',
    type: 'process',
    subgraph: 'BM',
    title: {
      en: 'Peer Review',
      de: 'Peer-Review',
      fr: 'Revue par les pairs',
      it: 'Revisione tra pari',
      es: 'Revisión por pares'
    },
    description: {
      en: 'Submit your conclusions to peer review - either formal academic review or informal review by knowledgeable critics.',
      de: 'Unterziehen Sie Ihre Schlussfolgerungen einem Peer-Review.',
      fr: 'Soumettez vos conclusions à une revue par les pairs.',
      it: 'Sottoponi le tue conclusioni a una revisione tra pari.',
      es: 'Somete tus conclusiones a revisión por pares.'
    },
    nextNodeId: 'Feedback'
  },
  {
    id: 'Feedback',
    type: 'decision',
    subgraph: 'BM',
    title: {
      en: 'Feedback Result?',
      de: 'Feedback-Ergebnis?',
      fr: 'Résultat du feedback?',
      it: 'Risultato del feedback?',
      es: '¿Resultado del feedback?'
    },
    description: {
      en: 'What was the result of peer review and verification?',
      de: 'Was war das Ergebnis des Peer-Reviews und der Verifizierung?',
      fr: 'Quel a été le résultat de la revue par les pairs et de la vérification?',
      it: 'Qual è stato il risultato della revisione tra pari e della verifica?',
      es: '¿Cuál fue el resultado de la revisión por pares y la verificación?'
    },
    options: [
      { label: { en: 'Confirmed', de: 'Bestätigt', fr: 'Confirmé', it: 'Confermato', es: 'Confirmado' }, nextNodeId: 'HighConfTrue', style: 'yes' },
      { label: { en: 'Needs Revision', de: 'Überarbeitung nötig', fr: 'Révision nécessaire', it: 'Revisione necessaria', es: 'Necesita revisión' }, nextNodeId: 'AI_Reevaluate', style: 'neutral' },
      { label: { en: 'Refuted', de: 'Widerlegt', fr: 'Réfuté', it: 'Confutato', es: 'Refutado' }, nextNodeId: 'ErrorDetected', style: 'no' }
    ]
  },
  {
    id: 'AI_Reevaluate',
    type: 'process',
    subgraph: 'BM',
    title: {
      en: 'Re-evaluate Everything',
      de: 'Alles neu bewerten',
      fr: 'Tout réévaluer',
      it: 'Rivalutare tutto',
      es: 'Reevaluar todo'
    },
    description: {
      en: 'Based on feedback, return to the evidence evaluation stage with new insights.',
      de: 'Basierend auf dem Feedback, kehren Sie zur Beweisbewertung zurück.',
      fr: 'Sur la base des retours, retournez à l\'évaluation des preuves.',
      it: 'Sulla base del feedback, torna alla valutazione delle prove.',
      es: 'Basándote en el feedback, vuelve a la evaluación de evidencia.'
    },
    nextNodeId: 'Evaluate'
  },
  {
    id: 'ErrorDetected',
    type: 'process',
    subgraph: 'BM',
    title: {
      en: 'Error/Fallacy Detected',
      de: 'Fehler/Fehlschluss erkannt',
      fr: 'Erreur/Sophisme détecté',
      it: 'Errore/Fallacia rilevata',
      es: 'Error/Falacia detectada'
    },
    description: {
      en: 'A significant error or logical fallacy has been identified in your reasoning or evidence.',
      de: 'Ein signifikanter Fehler wurde in Ihrer Argumentation identifiziert.',
      fr: 'Une erreur significative a été identifiée dans votre raisonnement.',
      it: 'Un errore significativo è stato identificato nel tuo ragionamento.',
      es: 'Se ha identificado un error significativo en tu razonamiento.'
    },
    nextNodeId: 'ConfirmedUntrue'
  },

  // KNOWLEDGE DATABASE
  {
    id: 'HighConfTrue',
    type: 'database',
    subgraph: 'KB',
    title: {
      en: 'HIGH CONFIDENCE',
      de: 'HOHES VERTRAUEN',
      fr: 'HAUTE CONFIANCE',
      it: 'ALTA CONFIDENZA',
      es: 'ALTA CONFIANZA'
    },
    description: {
      en: '≥95% Verified. This conclusion has passed rigorous testing and peer review. It can be treated as reliable knowledge, subject to future revision if new evidence emerges.',
      de: '≥95% Verifiziert. Diese Schlussfolgerung hat rigorose Tests bestanden.',
      fr: '≥95% Vérifié. Cette conclusion a passé des tests rigoureux.',
      it: '≥95% Verificato. Questa conclusione ha superato test rigorosi.',
      es: '≥95% Verificado. Esta conclusión ha pasado pruebas rigurosas.'
    },
    categoryColor: '#22C55E',
    nextNodeId: 'KnowledgeDB'
  },
  {
    id: 'MedConfWall',
    type: 'database',
    subgraph: 'KB',
    title: {
      en: 'MEDIUM CONFIDENCE',
      de: 'MITTLERES VERTRAUEN',
      fr: 'CONFIANCE MOYENNE',
      it: 'CONFIDENZA MEDIA',
      es: 'CONFIANZA MEDIA'
    },
    description: {
      en: '40-79%. Evidence is suggestive but not conclusive. Treat as provisional knowledge that may change.',
      de: '40-79%. Beweise sind andeutend, aber nicht schlüssig.',
      fr: '40-79%. Les preuves sont suggestives mais non concluantes.',
      it: '40-79%. Le prove sono suggestive ma non conclusive.',
      es: '40-79%. La evidencia es sugestiva pero no concluyente.'
    },
    categoryColor: '#EAB308',
    nextNodeId: 'KnowledgeDB'
  },
  {
    id: 'LowConfWall',
    type: 'database',
    subgraph: 'KB',
    title: {
      en: 'LOW CONFIDENCE',
      de: 'NIEDRIGES VERTRAUEN',
      fr: 'FAIBLE CONFIANCE',
      it: 'BASSA CONFIDENZA',
      es: 'BAJA CONFIANZA'
    },
    description: {
      en: '<40%. Insufficient evidence to draw conclusions. Scheduled for periodic review.',
      de: '<40%. Unzureichende Beweise für Schlussfolgerungen.',
      fr: '<40%. Preuves insuffisantes pour tirer des conclusions.',
      it: '<40%. Prove insufficienti per trarre conclusioni.',
      es: '<40%. Evidencia insuficiente para sacar conclusiones.'
    },
    categoryColor: '#F97316',
    nextNodeId: 'KnowledgeDB'
  },
  {
    id: 'ConfirmedUntrue',
    type: 'database',
    subgraph: 'KB',
    title: {
      en: 'CONFIRMED BS',
      de: 'BESTÄTIGTER BS',
      fr: 'BS CONFIRMÉ',
      it: 'BS CONFERMATO',
      es: 'BS CONFIRMADO'
    },
    description: {
      en: 'Disproven. This claim has been conclusively shown to be false through evidence and logical analysis.',
      de: 'Widerlegt. Diese Behauptung wurde schlüssig als falsch erwiesen.',
      fr: 'Réfuté. Cette affirmation a été prouvée fausse de manière concluante.',
      it: 'Smentito. Questa affermazione è stata dimostrata conclusivamente falsa.',
      es: 'Refutado. Esta afirmación ha sido demostrada conclusivamente falsa.'
    },
    categoryColor: '#DC2626',
    nextNodeId: 'KnowledgeDB'
  },
  {
    id: 'EndInquiry',
    type: 'end',
    subgraph: 'KB',
    title: {
      en: 'End of Inquiry',
      de: 'Ende der Untersuchung',
      fr: 'Fin de l\'enquête',
      it: 'Fine dell\'indagine',
      es: 'Fin de la investigación'
    },
    description: {
      en: 'This inquiry has reached its conclusion. The result has been recorded in the knowledge database.',
      de: 'Diese Untersuchung hat ihre Schlussfolgerung erreicht.',
      fr: 'Cette enquête a atteint sa conclusion.',
      it: 'Questa indagine ha raggiunto la sua conclusione.',
      es: 'Esta investigación ha llegado a su conclusión.'
    },
    nextNodeId: 'KnowledgeDB'
  },
  {
    id: 'KnowledgeDB',
    type: 'end',
    subgraph: 'KB',
    title: {
      en: 'Central Knowledge Database',
      de: 'Zentrale Wissensdatenbank',
      fr: 'Base de connaissances centrale',
      it: 'Database centrale della conoscenza',
      es: 'Base de conocimiento central'
    },
    description: {
      en: 'Your conclusion has been recorded. Remember: all knowledge is provisional and subject to revision with new evidence. Set up periodic reviews to check for confidence decay.',
      de: 'Ihre Schlussfolgerung wurde aufgezeichnet.',
      fr: 'Votre conclusion a été enregistrée.',
      it: 'La tua conclusione è stata registrata.',
      es: 'Tu conclusión ha sido registrada.'
    },
    tips: {
      en: [
        'Schedule periodic reviews of your beliefs',
        'Stay open to new evidence that might change your conclusions',
        'Remember: being wrong is an opportunity to learn'
      ],
      de: [
        'Planen Sie regelmäßige Überprüfungen Ihrer Überzeugungen',
        'Bleiben Sie offen für neue Beweise, die Ihre Schlussfolgerungen ändern könnten',
        'Denken Sie daran: Falsch zu liegen ist eine Gelegenheit zu lernen'
      ],
      fr: [
        'Planifiez des révisions périodiques de vos croyances',
        'Restez ouvert aux nouvelles preuves qui pourraient changer vos conclusions',
        'Rappelez-vous: avoir tort est une opportunité d\'apprendre'
      ],
      es: [
        'Programe revisiones periódicas de sus creencias',
        'Manténgase abierto a nueva evidencia que pueda cambiar sus conclusiones',
        'Recuerde: estar equivocado es una oportunidad para aprender'
      ]
    }
  }
];

// Helper function to get node by ID
export function getNodeById(id: string): FlowchartNode | undefined {
  return nodes.find(node => node.id === id);
}

// Helper function to get subgraph by ID
export function getSubgraphById(id: SubgraphId): Subgraph | undefined {
  return subgraphs.find(sg => sg.id === id);
}

// Get all nodes in a subgraph
export function getNodesInSubgraph(subgraphId: SubgraphId): FlowchartNode[] {
  return nodes.filter(node => node.subgraph === subgraphId);
}
