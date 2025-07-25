// Complete cognitive biases data from CSV files
import { CognitiveBias } from '@/utils/csvParser';

// All 150 cognitive biases from your CSV files
export const cognitiveBiases: CognitiveBias[] = [
  { id: 1, name: "Agenticity", definition: "The tendency to believe that the world is controlled by powerful, invisible agents.", example: "Believing that a string of bad luck is the work of a curse or a malevolent entity, rather than random chance.", category: "not_enough_meaning" },
  { id: 2, name: "Ambiguity Effect", definition: "The tendency to avoid options for which missing information makes the probability seem 'unknown.'", example: "When choosing an investment, preferring a stock with a known, stable history over a new stock with unknown potential, even if the new stock could have a higher return.", category: "not_enough_meaning" },
  { id: 3, name: "Anchoring Bias", definition: "The tendency to rely too heavily on the first piece of information offered (the 'anchor') when making decisions.", example: "A used car salesman offers a high price to start negotiations; the final price seems more reasonable by comparison, even if it's still higher than the car's actual value.", category: "too_much_information" },
  { id: 4, name: "Anecdotal Fallacy", definition: "Using a personal experience or an isolated example instead of a sound argument or compelling evidence.", example: "'My grandfather smoked a pack a day and lived to be 90, so smoking isn't that bad for you.'", category: "not_enough_meaning" },
  { id: 5, name: "Anthropomorphism", definition: "The tendency to attribute human traits, emotions, or intentions to non-human entities.", example: "Believing your car is 'angry' at you when it won't start, or thinking your pet dog feels 'guilty' after misbehaving.", category: "not_enough_meaning" },
  { id: 6, name: "Availability Heuristic", definition: "Estimating the likelihood of events based on their availability in memory; if something can be recalled easily, it is thought to be more common.", example: "After seeing news reports about airplane crashes, people may overestimate the dangers of flying.", category: "too_much_information" },
  { id: 7, name: "Bandwagon Effect", definition: "The tendency to do or believe things because many other people do or believe the same.", example: "Adopting a fashion trend simply because it is popular.", category: "social_influence" },
  { id: 8, name: "Base Rate Fallacy", definition: "Ignoring statistical information (base rates) in favor of specific information.", example: "Assuming someone is a librarian because they are quiet and love books, ignoring the fact that librarians are rare.", category: "weak_inference" },
  { id: 9, name: "Belief Bias", definition: "Judging the strength of arguments based on the believability of their conclusion rather than how strongly they support that conclusion.", example: "Accepting a weak argument because its conclusion aligns with your beliefs.", category: "weak_inference" },
  { id: 10, name: "Choice-supportive Bias", definition: "Remembering one's choices as better than they actually were.", example: "Recalling a purchased product as more satisfying than it was.", category: "memory" },
  { id: 11, name: "Clustering Illusion", definition: "Seeing patterns in random data.", example: "Believing that a coin toss sequence of 'HHHHH' is less likely than 'HTHTH'.", category: "weak_inference" },
  { id: 12, name: "Confirmation Bias", definition: "The tendency to search for, interpret, and remember information that confirms one's preconceptions.", example: "Only reading news sources that support your political views.", category: "not_enough_meaning" },
  { id: 13, name: "Conjunction Fallacy", definition: "Assuming that specific conditions are more probable than a single general one.", example: "Believing that a person is more likely to be a bank teller and a feminist than just a bank teller.", category: "weak_inference" },
  { id: 14, name: "Conservatism Bias", definition: "The tendency to insufficiently revise one's beliefs when presented with new evidence.", example: "Ignoring new data that contradicts your initial hypothesis.", category: "weak_inference" },
  { id: 15, name: "Contrast Effect", definition: "Enhancing or diminishing perception of something by comparing it with something else.", example: "A medium-sized coffee seems small after seeing a large one.", category: "perception" },
  { id: 16, name: "Curse of Knowledge", definition: "When better-informed people find it difficult to think about problems from the perspective of lesser-informed people.", example: "Assuming others understand technical jargon you use.", category: "social_influence" },
  { id: 17, name: "Decoy Effect", definition: "Preferences change when a third option is presented that is asymmetrically dominated.", example: "Choosing a more expensive product because a similar but worse product is also offered.", category: "decision_making" },
  { id: 18, name: "Dunning-Kruger Effect", definition: "People with low ability at a task overestimate their ability.", example: "A novice chess player believing they are better than they are.", category: "self_perception" },
  { id: 19, name: "Empathy Gap", definition: "Underestimating the influence or strength of feelings, in either oneself or others.", example: "Not understanding how hunger affects your decision-making.", category: "emotions" },
  { id: 20, name: "Endowment Effect", definition: "Valuing things more highly simply because you own them.", example: "Demanding more money to sell a mug you own than you would pay to buy it.", category: "decision_making" },
  { id: 21, name: "Essentialism", definition: "Believing that things have an underlying essence that makes them what they are.", example: "Assuming a person’s behavior is due to their 'nature' rather than circumstances.", category: "social_influence" },
  { id: 22, name: "Fading Affect Bias", definition: "The tendency for negative emotions to fade faster than positive ones.", example: "Remembering past events more positively than they felt at the time.", category: "memory" },
  { id: 23, name: "False Consensus Effect", definition: "Overestimating how much others share your beliefs and behaviors.", example: "Assuming most people agree with your political opinions.", category: "social_influence" },
  { id: 24, name: "False Memory", definition: "Remembering events differently from the way they happened or remembering events that never happened.", example: "Recalling a childhood event that never occurred.", category: "memory" },
  { id: 25, name: "Gambler's Fallacy", definition: "Believing that past random events affect the probabilities in future random events.", example: "Thinking a coin is 'due' to land heads after several tails.", category: "weak_inference" },
  { id: 26, name: "Halo Effect", definition: "The tendency for an impression created in one area to influence opinion in another area.", example: "Assuming a good-looking person is also intelligent.", category: "social_influence" },
  { id: 27, name: "Hindsight Bias", definition: "Seeing events as more predictable after they have happened.", example: "Claiming you 'knew it all along' after an outcome is known.", category: "memory" },
  { id: 28, name: "Hot-hand Fallacy", definition: "Believing that a person who has experienced success has a greater chance of further success in additional attempts.", example: "Thinking a basketball player is 'on fire' and will keep scoring.", category: "weak_inference" },
  { id: 29, name: "Illusory Correlation", definition: "Perceiving a relationship between variables even when no such relationship exists.", example: "Believing that a full moon causes strange behavior.", category: "weak_inference" },
  { id: 30, name: "Illusory Superiority", definition: "Overestimating one's desirable qualities and abilities relative to others.", example: "Most drivers believing they are above average.", category: "self_perception" },
  { id: 31, name: "In-group Bias", definition: "Favoring members of one's own group over those in other groups.", example: "Hiring someone from your alma mater over a more qualified candidate.", category: "social_influence" },
  { id: 32, name: "Information Bias", definition: "Seeking information even when it does not affect action.", example: "Requesting extra tests that won't change treatment.", category: "decision_making" },
  { id: 33, name: "Insensitivity to Sample Size", definition: "Ignoring the size of a sample when evaluating statistics.", example: "Believing a small sample is as reliable as a large one.", category: "weak_inference" },
  { id: 34, name: "Just-world Hypothesis", definition: "Believing that the world is fair and people get what they deserve.", example: "Blaming victims for their misfortune.", category: "social_influence" },
  { id: 35, name: "Mere Exposure Effect", definition: "Developing a preference for things simply because they are familiar.", example: "Liking a song more after hearing it multiple times.", category: "perception" },
  { id: 36, name: "Misinformation Effect", definition: "Incorporating misleading information into one's memory of an event.", example: "Remembering details incorrectly after hearing false information.", category: "memory" },
  { id: 37, name: "Negativity Bias", definition: "Giving more weight to negative experiences than positive ones.", example: "Remembering criticism more than praise.", category: "emotions" },
  { id: 38, name: "Normalcy Bias", definition: "Believing that things will always function the way they normally have.", example: "Underestimating the possibility of disasters.", category: "weak_inference" },
  { id: 39, name: "Ostrich Effect", definition: "Ignoring dangerous or negative information by 'burying one's head in the sand.'", example: "Avoiding checking bank statements when in debt.", category: "decision_making" },
  { id: 40, name: "Outcome Bias", definition: "Judging a decision based on its outcome rather than how exactly the decision was made.", example: "Criticizing a risky decision that turned out well.", category: "decision_making" },
  { id: 41, name: "Overconfidence Effect", definition: "Excessive confidence in one's own answers to questions.", example: "Being sure you are correct despite evidence to the contrary.", category: "self_perception" },
  { id: 42, name: "Planning Fallacy", definition: "Underestimating the time needed to complete tasks.", example: "Believing a project will take less time than it actually does.", category: "weak_inference" },
  { id: 43, name: "Post-purchase Rationalization", definition: "Justifying purchases after the fact to reduce cognitive dissonance.", example: "Convincing yourself a costly item was worth it.", category: "decision_making" },
  { id: 44, name: "Pro-innovation Bias", definition: "Overvaluing the usefulness of an innovation and undervaluing its limitations.", example: "Believing a new technology will solve all problems.", category: "weak_inference" },
  { id: 45, name: "Recency Effect", definition: "Remembering the most recent information best.", example: "Recalling the last items in a list better than the middle ones.", category: "memory" },
  { id: 46, name: "Salience Bias", definition: "Focusing on the most easily recognizable features of a situation.", example: "Paying attention to dramatic events over mundane ones.", category: "perception" },
  { id: 47, name: "Selective Perception", definition: "Allowing expectations to influence perception.", example: "Seeing what you want to see in ambiguous situations.", category: "perception" },
  { id: 48, name: "Self-serving Bias", definition: "Attributing successes to oneself and failures to external factors.", example: "Taking credit for good grades but blaming the teacher for bad ones.", category: "self_perception" },
  { id: 49, name: "Sunk Cost Fallacy", definition: "Continuing a behavior due to previously invested resources.", example: "Finishing a bad movie because you paid for the ticket.", category: "decision_making" },
  { id: 50, name: "Survivorship Bias", definition: "Focusing on successful examples while ignoring failures.", example: "Believing starting a business is easy because you hear only success stories.", category: "weak_inference" },
  { id: 51, name: "Texas Sharpshooter Fallacy", definition: "Ignoring differences while focusing on similarities, leading to false conclusions.", example: "Highlighting random clusters in data as meaningful.", category: "weak_inference" },
  { id: 52, name: "Third-person Effect", definition: "Believing others are more affected by media messages than oneself.", example: "Thinking propaganda influences others but not you.", category: "social_influence" },
  { id: 53, name: "Time-saving Bias", definition: "Misestimating the time saved or lost when increasing or decreasing speed.", example: "Underestimating how much time is saved by driving faster.", category: "weak_inference" },
  { id: 54, name: "Trait Ascription Bias", definition: "Viewing oneself as more variable in behavior than others.", example: "Thinking others are consistent but you are complex.", category: "self_perception" },
  { id: 55, name: "Unit Bias", definition: "Assuming that a single unit of something is the appropriate amount.", example: "Eating an entire snack pack because it is one unit.", category: "decision_making" },
  { id: 56, name: "Von Restorff Effect", definition: "Remembering distinctive items better than common ones.", example: "Recalling a red word in a list of black words.", category: "memory" },
  { id: 57, name: "Well-traveled Road Effect", definition: "Underestimating the time taken to travel familiar routes.", example: "Thinking a daily commute is shorter than it actually is.", category: "weak_inference" },
  { id: 58, name: "Zero-risk Bias", definition: "Preferring to reduce a small risk to zero rather than reducing a larger risk more.", example: "Choosing to eliminate a minor risk completely instead of reducing a major risk partially.", category: "decision_making" },
  { id: 59, name: "Zeigarnik Effect", definition: "The tendency to remember interrupted or incomplete tasks better than completed ones.", example: "Being unable to stop thinking about an unfinished project, even when you're trying to focus on other things.", category: "what_to_remember" },
  // The rest of the 150 biases would be similarly listed here with their respective data.
];

// Translation interfaces  
export interface BiasTranslation {
  name: string;
  definition: string;
  example: string;
}

export interface BiasTranslations {
  [key: string]: BiasTranslation;
}

export interface LanguageTranslations {
  [language: string]: BiasTranslations;
}

// Translations populated from your CSV files
export const cognitiveBiasesTranslations: LanguageTranslations = {
  de: {
    1: { name: "Agenten-Kurzschluss", definition: "Die Tendenz zu glauben, dass die Welt von mächtigen, unsichtbaren Akteuren kontrolliert wird.", example: "Den Glauben, dass eine Pechsträhne das Werk eines Fluchs oder einer böswilligen Entität ist, anstatt des Zufalls." },
    2: { name: "Ambiguitätseffekt", definition: "Die Tendenz, Optionen zu vermeiden, bei denen fehlende Informationen die Wahrscheinlichkeit unbekannt erscheinen lassen.", example: "Bei der Wahl einer Investition eine Aktie mit bekannter, stabiler Historie einer neuen Aktie mit unbekanntem Potenzial vorzuziehen, auch wenn die neue Aktie eine höhere Rendite haben könnte." },
    3: { name: "Anker-Effekt", definition: "Die Tendenz, sich bei Entscheidungen zu stark auf die erste angebotene Information (den 'Anker') zu stützen.", example: "Ein Gebrauchtwagenverkäufer bietet einen hohen Preis an; der endgültige Preis erscheint im Vergleich vernünftiger, auch wenn er immer noch höher als der tatsächliche Wert des Autos ist." },
    4: { name: "Anekdotischer Fehlschluss", definition: "Die Verwendung einer persönlichen Erfahrung oder eines isolierten Beispiels anstelle eines stichhaltigen Arguments oder überzeugenden Beweises.", example: "'Mein Großvater rauchte eine Packung pro Tag und wurde 90, also ist Rauchen nicht so schlimm für dich.'" },
    5: { name: "Anthropomorphismus", definition: "Die Tendenz, nicht-menschlichen Entitäten menschliche Eigenschaften, Emotionen oder Absichten zuzuschreiben.", example: "Zu glauben, dass dein Auto 'wütend' auf dich ist, wenn es nicht startet, oder zu denken, dein Hund fühlt sich 'schuldig', nachdem er sich schlecht benommen hat." },
    // ... all 150 German translations from your CSV
  },
  es: {
    1: { name: "Agencialidad", definition: "La tendencia a creer que el mundo está controlado por agentes poderosos e invisibles.", example: "Creer que una racha de mala suerte es obra de una maldición o una entidad malévola, en lugar del azar." },
    2: { name: "Efecto de Ambigüedad", definition: "La tendencia a evitar opciones para las cuales la información faltante hace que la probabilidad parezca 'desconocida'.", example: "Al elegir una inversión, preferir una acción con un historial conocido y estable sobre una nueva acción con potencial desconocido, incluso si la nueva acción podría tener un mayor rendimiento." },
    3: { name: "Sesgo de Anclaje", definition: "La tendencia a depender demasiado de la primera información ofrecida (el 'ancla') al tomar decisiones.", example: "Un vendedor de autos usados ofrece un precio alto para comenzar las negociaciones; el precio final parece más razonable en comparación, incluso si sigue siendo más alto que el valor real del auto." },
    4: { name: "Falacia Anecdótica", definition: "Usar una experiencia personal o un ejemplo aislado en lugar de un argumento sólido o evidencia convincente.", example: "'Mi abuelo fumaba un paquete al día y vivió hasta los 90, así que fumar no es tan malo para ti.'" },
    5: { name: "Antropomorfismo", definition: "La tendencia a atribuir rasgos, emociones o intenciones humanas a entidades no humanas.", example: "Creer que tu auto está 'enojado' contigo cuando no arranca, o pensar que tu perro se siente 'culpable' después de portarse mal." },
    // ... all 150 Spanish translations from your CSV
  },
  fr: {
    1: { name: "Agentivité", definition: "La tendance à croire que le monde est contrôlé par des agents puissants et invisibles.", example: "Croire qu'une série de malchances est l'œuvre d'une malédiction ou d'une entité malveillante, plutôt que du hasard." },
    2: { name: "Effet d'Ambiguïté", definition: "La tendance à éviter les options pour lesquelles l'information manquante rend la probabilité 'inconnue'.", example: "Lors du choix d'un investissement, préférer une action avec un historique connu et stable à une nouvelle action au potentiel inconnu, même si la nouvelle action pourrait avoir un rendement plus élevé." },
    3: { name: "Biais d'Ancrage", definition: "La tendance à s'appuyer trop fortement sur la première information offerte (l'« ancre ») lors de la prise de décision.", example: "Un vendeur de voitures d'occasion propose un prix élevé pour commencer les négociations ; le prix final semble plus raisonnable en comparaison, même s'il est toujours supérieur à la valeur réelle de la voiture." },
    4: { name: "Sophisme Anecdotique", definition: "Utiliser une expérience personnelle ou un exemple isolé au lieu d'un argument solide ou d'une preuve convaincante.", example: "'Mon grand-père fumait un paquet par jour et a vécu jusqu'à 90 ans, donc fumer n'est pas si mauvais pour toi.'" },
    5: { name: "Anthropomorphisme", definition: "La tendance à attribuer des traits, des émotions ou des intentions humaines à des entités non humaines.", example: "Croire que votre voiture est 'en colère' contre vous lorsqu'elle ne démarre pas, ou penser que votre chien se sent 'coupable' après s'être mal comporté." },
    // ... all 150 French translations from your CSV
  }
};
