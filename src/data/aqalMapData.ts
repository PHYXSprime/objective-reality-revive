export interface AQALLevel {
  level: string;
  humanAge: string;
  color: string;
  description: string[];
  characteristics: string[];
  quadrants: {
    interiorIndividual: string;
    exteriorIndividual: string;
    interiorCollective: string;
    exteriorCollective: string;
  };
  quest: string;
  method: string;
  pitfalls: string[];
}

export const aqalMapData: AQALLevel[] = [
  {
    level: "Unitive Self (Indigo-Ultraviolet)",
    humanAge: "Transcendent",
    color: "bg-white/20 text-white border-white/30",
    description: [
      "Witness Self. Action and non-action without attachment to outcome.",
      "Realization as a verb not a destination. Apex Self."
    ],
    characteristics: [
      "Non-dual awareness",
      "Effortless functioning",
      "Universal compassion"
    ],
    quadrants: {
      interiorIndividual: "Pure awareness, witness consciousness",
      exteriorIndividual: "Spontaneous right action",
      interiorCollective: "Universal love and compassion",
      exteriorCollective: "Global healing systems"
    },
    quest: "Realizing integrated free functioning human being",
    method: "Surrender, presence, witness consciousness",
    pitfalls: ["Spiritual bypassing", "Detachment from world"]
  },
  {
    level: "Holistic Self (Turquoise)",
    humanAge: "Starting 30 years ago",
    color: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200",
    description: [
      "Collective Individualism - Authenticirony. An ecology of perspectives",
      "Transrational perceptions. Aware of AQAL arising."
    ],
    characteristics: [
      "Global, cosmic perspective",
      "Sees interconnectedness of all life",
      "Focus on universal harmony and balance"
    ],
    quadrants: {
      interiorIndividual: "Transpersonal awareness, universal ethics",
      exteriorIndividual: "Actions for global sustainability",
      interiorCollective: "Shared cosmic consciousness",
      exteriorCollective: "Global cooperation, planetary systems"
    },
    quest: "Peace in an incomprehensible world",
    method: "Holistic integration, spiritual ecology",
    pitfalls: ["Pathologies of the soul", "Over-complexity"]
  },
  {
    level: "Integral Self (Yellow)",
    humanAge: "Starting 50 years ago",
    color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    description: [
      "World-Kosmocentric. Healthy hierarchies, Live fully and responsibly.",
      "Integrate the whole spiral. Evolutionary streams awaken."
    ],
    characteristics: [
      "Holistic, systems-thinking approach",
      "Integrates previous stages, values flexibility",
      "Focus on functionality and competence"
    ],
    quadrants: {
      interiorIndividual: "Self-actualization, big-picture thinking",
      exteriorIndividual: "Problem-solving, innovative actions",
      interiorCollective: "Shared vision of interconnected systems",
      exteriorCollective: "Global systems, sustainable solutions"
    },
    quest: "Integral synthesis - to balance the whole with holarchy",
    method: "Systems thinking, integral maps, developmental perspective",
    pitfalls: ["Aborted self-actualization", "Existential angst", "Bad faith"]
  },
  {
    level: "Sensitive Self (Green)",
    humanAge: "15-21 years - Starting 150 years ago",
    color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    description: [
      "Social Democracies, informational. Pluralism.",
      "Seek inner peace within a caring community. Power with, Solidarity."
    ],
    characteristics: [
      "Emphasis on equality, community, and empathy",
      "Pluralistic, values diversity and inclusion",
      "Seeks harmony and consensus"
    ],
    quadrants: {
      interiorIndividual: "Empathy and personal growth focus",
      exteriorIndividual: "Actions to promote fairness, activism",
      interiorCollective: "Shared values of equality, community",
      exteriorCollective: "Social movements, cooperative systems"
    },
    quest: "Peace, affectionate relations, beneficial resolution, dialogue and consensus",
    method: "Appreciate diverse views, listen well, consensus, emphasize group needs",
    pitfalls: ["Nihilism", "Inauthenticity", "Excessive relativism", "Endless consensus", "Heartless irony"]
  },
  {
    level: "Rational Self (Orange)",
    humanAge: "9-14 years - Starting 300 years ago",
    color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
    description: [
      "Capitalistic Democracies. Scientific Rationalism, worldcentric.",
      "Act from self-interest by playing the game to win. Market-Driven Meritocracy."
    ],
    characteristics: [
      "Focus on individual success and innovation",
      "Rational, scientific, and materialistic worldview",
      "Goal-oriented, seeking progress"
    ],
    quadrants: {
      interiorIndividual: "Ambition and self-improvement drive",
      exteriorIndividual: "Pursuit of wealth, status, skills",
      interiorCollective: "Shared value in progress, innovation",
      exteriorCollective: "Capitalism, markets, technology systems"
    },
    quest: "Rational truth, material pleasure, in defense of civilization",
    method: "Science, learn to excel, set goals, achieve, measure success",
    pitfalls: ["Scientism", "Flatland", "Identity crisis", "Consumerism", "Ecological crisis", "Workaholism"]
  },
  {
    level: "Rule/Role Self (Blue)",
    humanAge: "7-8 years - Starting 5,000 years ago",
    color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    description: [
      "Late Mythic, Nation States, Authoritarian, Absolutistic Religious.",
      "Life has meaning, direction, and purpose with predetermined outcomes."
    ],
    characteristics: [
      "Focus on order, rules, and absolute truths",
      "Duty, discipline, and loyalty to authority",
      "Belief in divine or moral purpose"
    ],
    quadrants: {
      interiorIndividual: "Conformity, duty, moral discipline",
      exteriorIndividual: "Rule-following behavior, obedience",
      interiorCollective: "Shared moral codes, religious beliefs",
      exteriorCollective: "Hierarchical institutions, law and order"
    },
    quest: "Ultimate peace, good versus evil",
    method: "Fit in, follow the given rules, don't exceed your role, discipline, faith",
    pitfalls: ["Archetypal role identification", "Script pathology", "Fundamentalism", "Fascism"]
  },
  {
    level: "Power Self (Red)",
    humanAge: "3-6 years - Starting 10,000 years ago",
    color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
    description: [
      "Early Mythic, Feudal & Exploitive Empire.",
      "Aggression, might makes right, be and do what you want, regardless."
    ],
    characteristics: [
      "Impulsive, egocentric, power-focused",
      "Immediate gratification",
      "Survival through dominance"
    ],
    quadrants: {
      interiorIndividual: "Impulsive desires, power drives",
      exteriorIndividual: "Aggressive behavior, dominance",
      interiorCollective: "Tribal loyalty, gang mentality",
      exteriorCollective: "Feudal systems, empires, gangs"
    },
    quest: "Heroic status, power, glory, rage and revenge",
    method: "Align with power, take what you need, power over others, force",
    pitfalls: ["Gangs", "Anxiety", "Depression", "Phobias", "Bullying", "Terrorism"]
  },
  {
    level: "Tribal Order (Purple)",
    humanAge: "Starting 50,000 years ago",
    color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    description: [
      "Egocentric, impulsive. Keep the spirits happy and tribe's nest warm and safe.",
      "Magical thinking, animistic worldview."
    ],
    characteristics: [
      "Tribal solidarity",
      "Magical thinking",
      "Ritual importance"
    ],
    quadrants: {
      interiorIndividual: "Magical beliefs, tribal identity",
      exteriorIndividual: "Ritual behavior, tribal customs",
      interiorCollective: "Shared myths and stories",
      exteriorCollective: "Tribal structures, kinship systems"
    },
    quest: "Safe mode of living, security",
    method: "Petition to Gods or Powers with ritual",
    pitfalls: ["Borderline", "Narcissism", "Omnipotent fantasy", "Tribal conflicts"]
  },
  {
    level: "Instinctive Self (Beige)",
    humanAge: "0-18 months - Starting 100,000 years ago",
    color: "bg-stone-100 text-stone-800 dark:bg-stone-900 dark:text-stone-200",
    description: [
      "Survival Bands. Do what you must to stay alive.",
      "Un-differentiated, narcissism. Basic survival instincts."
    ],
    characteristics: [
      "Survival-focused",
      "Instinctual behavior",
      "Basic needs orientation"
    ],
    quadrants: {
      interiorIndividual: "Basic survival instincts",
      exteriorIndividual: "Survival behaviors",
      interiorCollective: "Basic bonding, attachment",
      exteriorCollective: "Survival bands, basic groups"
    },
    quest: "Food, water, warmth, shelter",
    method: "Scavenge whatever you need",
    pitfalls: ["Primitive developmental psycho-pathologies", "Autism"]
  }
];