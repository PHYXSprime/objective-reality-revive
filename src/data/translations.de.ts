// Numbered German translations - systematic approach
export const cognitiveBiasesTranslations = {
  de: {
    // Cognitive Biases 1-50 (starting batch)
    1: {
      name: 'Verfügbarkeits-Heuristik',
      definition: 'Wir überschätzen die Wichtigkeit von Informationen, die leicht abrufbar sind. Wir sind von lebhaften, aktuellen oder emotional aufgeladenen Ereignissen beeinflusst.',
      example: 'Nach mehreren Nachrichten über Haiangriffe glauben Sie, dass diese viel häufiger sind als sie tatsächlich sind, obwohl Autounfälle statistisch weitaus gefährlicher sind.'
    },
    2: {
      name: 'Aufmerksamkeitsverzerrung',
      definition: 'Unsere Wahrnehmung wird unverhältnismäßig von dem beeinflusst, was gerade unsere Aufmerksamkeit beschäftigt, wodurch wir andere relevante Informationen vernachlässigen.',
      example: 'Eine Person, die mit dem Rauchen aufhören möchte, wird überall andere rauchende Menschen bemerken, was es viel schwerer macht, das Verlangen zu ignorieren.'
    },
    // Continue with remaining 115 biases...
  }
};

export const logicalFallaciesTranslations = {
  de: {
    // Logical Fallacies 1-25 (starting batch)
    1: {
      name: 'Ad Hominem',
      definition: 'Dieser Fehlschluss tritt auf, wenn jemand die Ansicht einer anderen Person aufgrund persönlicher Eigenschaften, Hintergrund, körperlicher Erscheinung oder anderer Merkmale ablehnt oder kritisiert, die für das vorliegende Argument irrelevant sind.',
      example: '"Sie können Dr. Smiths medizinischen Rat zum Thema Diät nicht vertrauen, weil sie übergewichtig ist." Dies greift Dr. Smiths persönliche Erscheinung an, die für die wissenschaftliche Gültigkeit ihrer medizinischen Empfehlungen irrelevant ist.'
    },
    2: {
      name: 'Tu Quoque',
      definition: 'Eine spezielle Art des Ad-Hominem-Fehlschlusses, der ein Argument durch Hinweis auf Heuchelei beim Argumentierenden verwirft. Er lenkt Kritik ab, indem er sie auf den Ankläger zurücklenkt, aber die Heuchelei des Argumentierenden macht ihr Argument nicht ungültig.',
      example: '"Mein Vater sagte mir, ich solle nicht zu schnell fahren, weil es gefährlich ist, aber ich muss nicht auf ihn hören, weil er letztes Jahr einen Strafzettel wegen zu schnellen Fahrens bekommen hat." Die vergangenen Handlungen des Vaters ändern nicht die Tatsache, dass schnelles Fahren objektiv gefährlich ist.'
    },
    // Continue with remaining 73 fallacies...
  }
};

export const challengePageTranslations = {
  de: {

    // Propaganda Page
    propaganda: {
      title: 'Propaganda',
      subtitle: 'Moderne Informationskriegsführung erkennen und ihr widerstehen',
      definition: 'Was ist Propaganda?',
      definitionText: 'Propaganda ist die systematische Verbreitung von Informationen, Ideen oder Gerüchten, um einer Institution, Sache oder Person zu helfen oder zu schaden. In der heutigen Welt ist sie subtiler und allgegenwärtiger geworden.',
      commonTechniques: 'Häufige Propagandatechniken',
      modernDigital: 'Moderne digitale Propaganda',
      buildingDefenses: 'Aufbau geistiger Verteidigung',
      warningSigns: 'Warnzeichen der Propaganda',
      actionSteps: 'Handlungsschritte',
      // Techniques
      'technique.emotionalAppeals': 'Emotionale Appelle',
      'technique.emotionalAppeals.desc': 'Verwendung von Angst, Wut, Patriotismus oder anderen Emotionen, um rationales Denken zu umgehen',
      'technique.emotionalAppeals.example': 'Angstmache vor Bedrohungen, damit Menschen Einschränkungen akzeptieren',
      'technique.bandwagon': 'Mitläufer-Effekt',
      'technique.bandwagon.desc': 'Suggeriert, dass alle es tun, also sollten Sie es auch',
      'technique.bandwagon.example': 'Umfragen, die Mehrheitsunterstützung zeigen, um Konformität zu erzwingen',
      'technique.authority': 'Autoritätsappelle',
      'technique.authority.desc': 'Verwendung respektierter Persönlichkeiten oder Institutionen zur Unterstützung einer Botschaft',
      'technique.authority.example': 'Prominente-Empfehlungen oder Experten-Testimonials',
      'technique.repetition': 'Wiederholung',
      'technique.repetition.desc': 'Häufige Wiederholung von Botschaften, damit sie wahr erscheinen',
      'technique.repetition.example': 'Ständige Medienwiederholung spezifischer Narrative',
      'technique.falseDichotomy': 'Falsche Dichotomie',
      'technique.falseDichotomy.desc': 'Präsentation von nur zwei Optionen, wenn mehr existieren',
      'technique.falseDichotomy.example': 'Du bist entweder mit uns oder gegen uns',
      'technique.loadedLanguage': 'Aufgeladene Sprache',
      'technique.loadedLanguage.desc': 'Verwendung emotional aufgeladener Wörter zur Beeinflussung der Wahrnehmung',
      'technique.loadedLanguage.example': 'Freiheitskämpfer vs. Terroristen für dieselbe Gruppe',
      // Defense strategies
      'defense.questionSources': 'Quellen hinterfragen',
      'defense.questionSources.desc': 'Wer profitiert von dieser Botschaft? Was sind ihre Motivationen?',
      'defense.seekPerspectives': 'Mehrere Perspektiven suchen',
      'defense.seekPerspectives.desc': 'Suchen Sie nach gegensätzlichen Standpunkten und verschiedenen Interpretationen',
      'defense.checkPrimary': 'Primärquellen prüfen',
      'defense.checkPrimary.desc': 'Gehen Sie über Schlagzeilen hinaus zu tatsächlichen Daten und Originaldokumenten',
      'defense.recognizeEmotional': 'Emotionale Manipulation erkennen',
      'defense.recognizeEmotional.desc': 'Bemerken Sie, wann Ihre Emotionen statt Ihrer Vernunft angesprochen werden',
      'defense.practicalCritical': 'Kritisches Denken praktizieren',
      'defense.practicalCritical.desc': 'Wenden Sie logische Analyse an und hinterfragen Sie grundlegende Annahmen',
      // Modern sections
      'modern.algorithmicAmplification': 'Algorithmische Verstärkung',
      'modern.psychologicalTargeting': 'Psychologische Zielausrichtung',
      // Warning signs
      'warning.extremeLanguage': 'Extreme emotionale Sprache',
      'warning.oversimplified': 'Vereinfachte komplexe Themen',
      'warning.moralSuperiority': 'Behauptungen moralischer Überlegenheit',
      'warning.urgentCalls': 'Dringende Handlungsaufrufe',
      'warning.silencingDissent': 'Unterdrückung von Dissens',
      'warning.anonymousAuthorship': 'Anonyme oder unklare Urheberschaft',
      'warning.undisclosedFunding': 'Nicht offengelegte Finanzierungsquellen',
      'warning.noOpposing': 'Keine gegensätzlichen Standpunkte präsentiert',
      'warning.noEvidence': 'Behauptungen ohne Beweise',
      'warning.authorityWithoutExpertise': 'Autoritätsappelle ohne Expertise'
    },

    // Censorship Page
    censorship: {
      title: 'Zensur',
      subtitle: 'Moderne Formen der Informationskontrolle',
      politicalCorrectnessAlert: 'Die "Politische Korrektheit" ist oft ein Euphemismus für Zensur und gedankliche Kontrolle.',
      typesOfCensorship: 'Arten moderner Zensur',
      propagandaLanguage: 'Propaganda-Sprache-Alarm',
      propagandaLanguageDesc: 'Diese Begriffe sind Teil der Indoktrinations- und Propaganda-Sprache und sollten sofort Warnsignale auslösen. Denken Sie daran: Was für manche ein "Freiheitskämpfer" ist, ist für andere ein "Terrorist".',
      sophistication: 'Das Raffinesse-Problem',
      sophisticationText: 'Moderne Zensur wird raffinierter und schwerer zu erkennen. Traditionelle offene Zensur wird durch subtile Manipulationstechniken ersetzt.',
      detection: 'Wie man Zensur erkennt',
      importanceOfFreeExpression: 'Die Bedeutung freier Meinungsäußerung',
      importanceText: 'Freie und offene Diskussion ist für den menschlichen Fortschritt unerlässlich. Wenn wir Ideen zensieren, auch "falsche", verlieren wir die Gelegenheit, unsere eigenen Überzeugungen zu testen und neue Wahrheiten zu entdecken.',
      // Censorship types
      'type.politicalCorrectness': 'Politische Korrektheit',
      'type.politicalCorrectness.desc': 'Gedankenpolizei, die kreative und progressive Diskussionen aus Angst vor Beleidigung tötet.',
      'type.algorithmicBias': 'Algorithmische Voreingenommenheit',
      'type.algorithmicBias.desc': 'Voreingenommene Algorithmen, die bestimmte Standpunkte unterdrücken und andere fördern.',
      'type.shadowBanning': 'Ghosting/Shadow Banning',
      'type.shadowBanning.desc': 'Inhalte unsichtbar machen, ohne Autor oder Publikum zu benachrichtigen.',
      'type.labelSuppression': 'Label-basierte Unterdrückung',
      'type.labelSuppression.desc': 'Inhalte durch Kennzeichnung als "Hassrede", "Desinformation" oder "Verschwörungstheorie" ablehnen.',
      'type.memoryHole': 'Memory Hole',
      'type.memoryHole.desc': 'Entfernung historischer Informationen oder vergangener Aussagen aus öffentlichen Aufzeichnungen.',
      'type.deplatforming': 'Deplatformierung',
      'type.deplatforming.desc': 'Vollständige Entfernung von Personen von Kommunikationsplattformen.',
      // Warning labels
      'label.hateSpeech': 'Hassrede',
      'label.hateSpeech.reality': 'Oft verwendet, um legitime Kritik oder unpopuläre Meinungen zum Schweigen zu bringen',
      'label.disinformation': 'Desinformation',
      'label.disinformation.reality': 'Kann auf Informationen angewendet werden, die offizielle Narrative herausfordern',
      'label.conspiracyTheory': 'Verschwörungstheorie',
      'label.conspiracyTheory.reality': 'Manchmal verwendet, um gültige Fragen zu offiziellen Erklärungen abzutun',
      'label.moderate': 'Moderat',
      'label.moderate.reality': 'Subjektiver Begriff, der vollständig von der Perspektive des Beobachters abhängt',
      // Detection methods
      'detection.informationPatterns': 'Informationsmuster',
      'detection.platformBehavior': 'Plattform-Verhalten',
      'detection.socialSignals': 'Soziale Signale',
      // Growing up section
      'growingUp.title': 'Intellektuell erwachsen werden',
      'growingUp.text': 'Sie haben das Recht, beleidigt zu sein. Werden Sie jetzt erwachsen und beginnen Sie, mit den Herausforderungen umzugehen, die dieses Leben Ihnen zuwirft. Nicht mehr beleidigt zu sein ist Teil des Erwachsenwerdens.'
    },

    // Scientific Consensus Page
    scientificConsensus: {
      title: 'Wissenschaftlicher Konsens',
      subtitle: 'Eine persönliche Bewertung der Zuverlässigkeit wissenschaftlicher Erkenntnisse',
      criticalObservation: 'Kritische Beobachtung',
      criticalText: 'Es ist durchaus möglich, dass ein erheblicher Teil dessen, was wir als "wissenschaftlichen Konsens" betrachten, in den nächsten Jahrzehnten als falsch erwiesen wird.',
      confidenceLevels: 'Vertrauensniveaus nach Bereichen',
      consensusVsDogma: 'Der Unterschied zum Dogma',
      consensusVsDogmaText: 'Wissenschaftlicher Konsens unterscheidet sich von religiösem Dogma, weil er mit neuen Beweisen aktualisiert werden kann. Das bedeutet jedoch nicht, dass wir den aktuellen Konsens unkritisch akzeptieren sollten.',
      balancedApproach: 'Ein ausgewogener Ansatz',
      balancedApproachText: 'Das Ziel ist nicht, die Wissenschaft abzulehnen, sondern gesunden Skeptizismus zu bewahren und die Grenzen des aktuellen Wissens zu verstehen.',
      historicalPattern: 'Historisches Muster',
      practicalGuidelines: 'Praktische Richtlinien',
      // Field descriptions
      'field.mathematics': 'Mathematik',
      'field.mathematics.desc': 'Bei den Grundlagen ist Betrug nahezu unmöglich',
      'field.physics': 'Physik (Klassisch)',
      'field.physics.desc': 'Gut etablierte Gesetze mit starken Beweisen',
      'field.chemistry': 'Chemie',
      'field.chemistry.desc': 'Solide experimentelle Grundlage',
      'field.biology': 'Biologie',
      'field.biology.desc': 'Komplexe Systeme mit vielen Variablen',
      'field.medicine': 'Medizin',
      'field.medicine.desc': 'Individuelle Variation und Komplexität',
      'field.history': 'Geschichte',
      'field.history.desc': 'Interpretation variiert, aber Fakten bleiben bestehen',
      'field.psychology': 'Psychologie',
      'field.psychology.desc': 'Replikationskrise und subjektive Elemente',
      'field.nutrition': 'Ernährungswissenschaft',
      'field.nutrition.desc': 'Widersprüchliche Studien und Industrieeinfluss',
      'field.economics': 'Wirtschaftswissenschaften',
      'field.economics.desc': 'Menschliches Verhalten und komplexe Systeme',
      'field.climate': 'Klimawissenschaft',
      'field.climate.desc': 'Komplexe Modelle mit vielen Variablen und politischem Einfluss',
      'field.social': 'Sozialwissenschaften',
      'field.social.desc': 'Kulturelle Voreingenommenheit und methodische Probleme',
      // Guidelines
      'guideline.checkFunding': 'Finanzierungsquellen und potenzielle Konflikte prüfen',
      'guideline.lookReplication': 'Nach unabhängiger Replikation suchen',
      'guideline.examineMethodology': 'Methodik und Stichprobengrößen untersuchen',
      'guideline.considerAlternatives': 'Alternative Interpretationen berücksichtigen',
      'guideline.skepticalClaims': 'Bei außergewöhnlichen Behauptungen besonders skeptisch sein',
      // Red flags
      'redflag.scienceSettled': '"Die Wissenschaft ist geklärt"-Aussagen',
      'redflag.suppressDissent': 'Unterdrückung abweichender Stimmen',
      'redflag.immediateAction': 'Behauptungen, die sofortiges Handeln erfordern',
      'redflag.noOpenData': 'Mangel an offenen Daten oder Methodik',
      'redflag.appealAuthority': 'Autoritätsappell statt Beweise'
    },

    // Indoctrination Page  
    indoctrination: {
      title: 'Indoktrination',
      subtitle: 'Die systematische Konditionierung von Überzeugungen',
      definition: 'Was ist Indoktrination?',
      definitionText: 'Indoktrination ist der Prozess der Vermittlung von Ideen, Einstellungen, kognitiven Strategien oder einer beruflichen Methodik. Es bezieht sich oft auf eine grundlegende Veränderung der Denkweise einer Person.',
      primarySources: 'Hauptquellen der Indoktrination',
      primarySourcesDesc: 'Mehrere sich überschneidende Systeme arbeiten zusammen, um unsere Überzeugungen und Weltanschauung zu formen',
      developmentalImpact: 'Entwicklungsauswirkungen',
      breakingFree: 'Befreiung von der Indoktrination',
      warningSigns: 'Warnzeichen der Indoktrination',
      // Sources
      'source.family': 'Familie & kulturelles Umfeld',
      'source.family.desc': 'Frühe Kindheitserfahrungen prägen Grundüberzeugungen und Weltanschauung',
      'source.education': 'Bildungssystem',
      'source.education.desc': 'Strukturiertes Lernen, das Konformität über kritisches Denken fördern kann',
      'source.media': 'Medien & Information',
      'source.media.desc': 'Ständige Exposition gegenüber ausgewählten Informationen prägt die Realitätswahrnehmung',
      'source.state': 'Staat & Institutionen',
      'source.state.desc': 'Regierungs- und institutionelle Botschaften, die spezifische Narrative fördern',
      // Stages
      'stage.earlyChildhood': 'Frühe Kindheit (0-7)',
      'stage.earlyChildhood.desc': 'Aufnahme fundamentaler Überzeugungen ohne kritische Bewertung',
      'stage.earlyChildhood.impact': 'Bildet grundlegende Weltanschauung und emotionale Assoziationen',
      'stage.schoolAge': 'Schulalter (7-14)',
      'stage.schoolAge.desc': 'Formale Bildung verstärkt oder stellt familiäre Überzeugungen in Frage',
      'stage.schoolAge.impact': 'Entwickelt Denkmuster und Autoritätsbeziehungen',
      'stage.adolescence': 'Adoleszenz (14-21)',
      'stage.adolescence.desc': 'Peer-Einfluss und Identitätsbildung prägen Glaubenssysteme',
      'stage.adolescence.impact': 'Festigt oder rebelliert gegen frühere Programmierung',
      'stage.adulthood': 'Erwachsenenalter (21+)',
      'stage.adulthood.desc': 'Berufliche und soziale Umgebungen beeinflussen weiterhin Überzeugungen',
      'stage.adulthood.impact': 'Karriere- und sozialer Druck erhält oder modifiziert Weltanschauung',
      // Warning signs
      'warning.inOthers': 'Bei anderen',
      'warning.inYourself': 'Bei sich selbst',
      'warning.inSystems': 'In Systemen'
    },

    comedians: {
      title: 'Komiker',
      subtitle: 'Die modernen Hofnarren der Wahrheit',
      importance: 'Die Bedeutung der Komödie',
      importanceText: 'Komiker spielen eine einzigartige Rolle in der Gesellschaft als moderne Hofnarren, die durch Humor Wahrheiten aussprechen können, die sonst zensiert würden.',
      cognitiveAbilities: 'Kognitive Fähigkeiten von Komikern',
      notableComedians: 'Bemerkenswerte Komiker-Philosophen',
      propagandaWarning: 'Vorsicht vor Propaganda',
      evaluatingTruth: 'Wahrheit vs. Manipulation bewerten'
    },

    streetEpistemology: {
      title: 'Straßen-Epistemologie',
      subtitle: 'Eine Methode zur Untersuchung von Überzeugungen durch sokratisches Hinterfragen',
      introduction: 'Einführung',
      introductionText: 'Straßen-Epistemologie (SE) ist eine diskursbasierte Methode, die von Dr. Peter Boghossian entwickelt wurde, um Überzeugungen zu erkunden und zu untersuchen.',
      aboutBoghossian: 'Über Dr. Peter Boghossian',
      corePrinciples: 'Kernprinzipien',
      keyQuestions: 'Schlüsselfragen',
      process: 'Der SE-Prozess',
      commonMistakes: 'Häufige Fehler',
      benefits: 'Vorteile',
      callToAction: 'Handlungsaufruf'
    },

    dogmaticBeliefs: {
      title: 'Dogmatische Überzeugungen',
      subtitle: 'Erkennen und Überwinden starren Denkens',
      definition: 'Dogmatische Überzeugungen sind Ideen, die als unumstößliche Wahrheiten akzeptiert werden, ohne kritische Prüfung oder Bereitschaft zur Revision angesichts neuer Beweise.',
      characteristics: 'Merkmale dogmatischen Denkens',
      examplesAcrossDomains: 'Beispiele in verschiedenen Bereichen',
      psychologicalRoots: 'Psychologische Wurzeln',
      stepsToLiberation: 'Schritte zur Befreiung'
    },

    scientificMethod: {
      title: 'Die wissenschaftliche Methode',
      subtitle: 'Ein Werkzeug für objektive Wahrheitssuche',
      introduction: 'Die wissenschaftliche Methode ist unser bestes Werkzeug zur Unterscheidung zwischen Wahrheit und Meinung, zwischen dem, was real ist und dem, was wir uns wünschen.',
      scienceVsDogma: 'Wissenschaft vs. Dogma',
      stepsTitle: 'Schritte der wissenschaftlichen Methode',
      corePrinciples: 'Kernprinzipien',
      commonMisunderstandings: 'Häufige Missverständnisse',
      personalBeliefs: 'Wissenschaftliches Denken auf persönliche Überzeugungen anwenden',
      limitations: 'Grenzen verstehen'
    },

    lazyThinking: {
      title: 'Faules Denken',
      subtitle: 'Die kognitive Epidemie unserer Zeit',
      definition: 'Faules Denken bezieht sich auf den Rückgriff auf mentale Abkürzungen, Annahmen und oberflächliche Analysen anstelle von rigorosem, kritischem Denken.',
      manifestations: 'Erscheinungsformen',
      causes: 'Ursachen',
      personalCosts: 'Persönliche Kosten',
      societalCosts: 'Gesellschaftliche Kosten',
      antidotes: 'Gegenmittel',
      buildingHabits: 'Bessere Denkgewohnheiten aufbauen'
    },

    socraticQuestioning: {
      title: 'Sokratisches Hinterfragen',
      subtitle: 'Die Kunst des disziplinierten Hinterfragens',
      introduction: 'Sokratisches Hinterfragen ist eine Form disziplinierter Fragestellung, die verwendet werden kann, um rigoroses Denken und kritische Denkfähigkeiten zu verfolgen.',
      keyDistinctions: 'Schlüsselmerkmale',
      purposes: 'Zwecke des sokratischen Hinterfragens',
      foundations: 'Fünf theoretische Grundlagen',
      questionTypes: 'Sechs Arten sokratischer Fragen',
      questioningProcess: 'Der Fragesteller-Prozess',
      bestPractices: 'Beste Praktiken',
      exampleInAction: 'Beispiel in Aktion',
      callToAction: 'Handlungsaufruf'
    },

    coEvolution: {
      title: 'Ko-Evolution',
      subtitle: 'Wie religiöse Denkmuster in säkularen Kontexten überleben',
      hypothesis: 'Die Ko-Evolutionshypothese',
      hypothesisText: 'Menschen haben sich entwickelt, um in einer religiösen Welt zu leben. Auch wenn religiöse Überzeugungen abnehmen, bleiben die zugrunde liegenden kognitiven Muster bestehen und manifestieren sich in säkularen Kontexten.',
      evolutionaryPatterns: 'Evolutionäre Muster',
      modernTraps: 'Moderne kognitive Fallen',
      historicalExamples: 'Historische Beispiele',
      liberationStrategies: 'Befreiungsstrategien',
      finalThoughts: 'Abschließende Gedanken'
    },

    psychologicalWeakness: {
      title: 'Psychologische Schwächen',
      subtitle: 'Menschliche Verletzlichkeiten, die ausgenutzt werden können'
    },

    ego: {
      title: 'Ego',
      subtitle: 'Wie persönliche Identität objektives Denken behindert'
    }
  }
};