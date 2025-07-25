import { FallacyTranslations } from './logicalFallacies';

export const logicalFallaciesDE: FallacyTranslations = {
  "Expert Status Argument": {
    name: "Experten-Status-Argument",
    definition: "Der Trugschluss, eine Behauptung sei wahr oder müsse akzeptiert werden, weil die Person, die sie aufstellt, eine Autoritäts-, Experten- oder hohe Statusposition innehat, und Glauben aufgrund ihres Titels anstatt der vorgelegten Beweise fordert. Dies schließt Appelle an den 'wissenschaftlichen Konsens' ein, wenn dieser dazu dient, Fragen zu unterbinden, anstatt Beweise vorzulegen.",
    example: "'Als Abteilungsleiter kann ich Ihnen sagen, dass dieses Projekt erfolgreich sein wird, und Sie müssen die Daten nicht sehen. Meine Position ist Beweis genug.' oder 'Sie müssen akzeptieren, dass diese Theorie korrekt ist, weil 97% der Wissenschaftler darin übereinstimmen; den Konsens in Frage zu stellen, ist illegitim.'"
  },
  "Ad Hominem": {
    name: "Ad Hominem",
    definition: "Dieser Trugschluss tritt auf, wenn jemand die Ansicht einer anderen Person aufgrund persönlicher Merkmale, Herkunft, Aussehen oder anderer für das Argument irrelevanter Merkmale ablehnt oder kritisiert.",
    example: "'Sie können dem medizinischen Rat von Dr. Schmidt zur Ernährung nicht trauen, weil sie übergewichtig ist.' Dies greift das persönliche Erscheinungsbild von Dr. Schmidt an, was für die wissenschaftliche Gültigkeit ihrer medizinischen Empfehlungen irrelevant ist."
  },
  "Tu Quoque (Appeal to Hypocrisy)": {
    name: "Tu Quoque (Appell an die Heuchelei)",
    definition: "Eine spezifische Art des Ad-hominem-Trugschlusses, der ein Argument abtut, indem er auf die Heuchelei des Argumentierenden hinweist. Er lenkt Kritik ab, indem er sie auf den Ankläger zurückwirft, aber die Heuchelei des Argumentierenden entkräftet sein Argument nicht.",
    example: "'Mein Vater hat mir gesagt, ich soll nicht zu schnell fahren, weil es gefährlich ist, aber ich muss nicht auf ihn hören, weil er letztes Jahr einen Strafzettel wegen zu schnellen Fahrens bekommen hat.' Die vergangenen Handlungen des Vaters ändern nichts an der Tatsache, dass zu schnelles Fahren objektiv gefährlich ist."
  },
  "Genetic Fallacy": {
    name: "Genetischer Trugschluss",
    definition: "Dieser Trugschluss besteht darin, eine Behauptung aufgrund ihres Ursprungs, ihrer Quelle oder ihrer Geschichte zu akzeptieren oder abzulehnen, anstatt ihren aktuellen Wert oder ihre Beweise zu bewerten. Die Quelle einer Idee ist unabhängig von ihrer Wahrheit oder Falschheit.",
    example: "'Dieses Auto kann unmöglich gut sein; es wurde in einem Land hergestellt, das für billige Produkte bekannt ist.' Dies beurteilt das Auto aufgrund seines Herstellungsortes, nicht aufgrund seiner tatsächlichen Leistung, Sicherheitsbewertungen oder Bauqualität."
  },
  "Ad Populum (Bandwagon)": {
    name: "Ad Populum (Mitläufereffekt)",
    definition: "Dieser Trugschluss behauptet, dass ein Vorschlag wahr sein muss, weil viele oder die meisten Menschen daran glauben. Er appelliert an den Wunsch, dazuzugehören und auf der Gewinnerseite zu stehen, aber die Popularität einer Idee hat keinen Einfluss auf ihre Gültigkeit.",
    example: "'Millionen von Menschen sind auf dieses neue Smartphone umgestiegen, also muss es das beste auf dem Markt sein.' Die Popularität des Telefons könnte auf erfolgreiches Marketing zurückzuführen sein, anstatt auf überlegene Funktionen oder Qualität."
  },
  "Appeal to Authority (Irrelevant)": {
    name: "Appell an die Autorität (Irrelevant)",
    definition: "Dies geschieht, wenn ein Argument auf dem Zeugnis einer Autoritätsperson beruht, die kein Experte auf dem relevanten Gebiet ist. Während das Zitieren relevanter Experten ein gültiger Teil eines Arguments ist, ist das Zitieren einer irrelevanten Autorität trügerisch.",
    example: "'Ein berühmter Schauspieler sagte in einem Interview, dass diese spezielle Marke von Vitamin C Erkältungen vorbeugen wird, also decke ich mich ein.' Der Schauspieler ist eine Autorität für Schauspielerei, nicht für Immunologie oder Ernährung."
  },
  // Add more entries as needed - this shows the pattern for manual entry
  // For a complete implementation, you would parse the German CSV file
};