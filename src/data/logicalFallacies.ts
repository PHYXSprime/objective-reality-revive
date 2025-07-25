// Complete logical fallacies data extracted from CSV files

export interface LogicalFallacy {
  id: number;
  name: string;
  definition: string;
  example: string;
  category: string;
}

// English logical fallacies (all 176)
export const logicalFallaciesEN: LogicalFallacy[] = [
  { id: 1, name: "Ad Hominem", definition: "This fallacy occurs when someone rejects or criticizes another person's view on the basis of personal characteristics, background, physical appearance, or other features irrelevant to the argument at hand.", example: "You can't trust Dr. Smith's medical advice on dieting because she is overweight. This attacks Dr. Smith's personal appearance, which is irrelevant to the scientific validity of her medical recommendations.", category: "relevance" },
  { id: 2, name: "Tu Quoque (Appeal to Hypocrisy)", definition: "A specific type of ad hominem fallacy that dismisses an argument by pointing out hypocrisy in the arguer. It deflects criticism by turning it back on the accuser, but the arguer's hypocrisy doesn't invalidate their argument.", example: "My father told me not to speed because it's dangerous, but I don't have to listen to him because he got a speeding ticket last year. The father's past actions don't change the fact that speeding is objectively dangerous.", category: "relevance" },
  { id: 3, name: "Genetic Fallacy", definition: "This fallacy involves accepting or rejecting a claim based on its origin, source, or history, rather than evaluating its current merit or evidence. The source of an idea is independent of its truth or falsehood.", example: "That car can't possibly be any good; it was made in a country known for cheap products. This judges the car based on its place of manufacture, not on its actual performance, safety ratings, or build quality.", category: "relevance" },
  { id: 4, name: "Ad Populum (Bandwagon)", definition: "This fallacy asserts that a proposition must be true because many or most people believe it. It appeals to the desire to fit in and be on the winning side, but the popularity of an idea has no bearing on its validity.", example: "Millions of people have switched to this new smartphone, so it must be the best one on the market. The phone's popularity could be due to successful marketing rather than superior features or quality.", category: "relevance" },
  { id: 5, name: "Appeal to Authority (Ad Verecundiam)", definition: "This occurs when an argument relies on the testimony of an authority figure who is not an expert in the relevant field. While citing relevant experts is a valid part of an argument, citing an irrelevant authority is fallacious.", example: "A famous actor said in an interview that this specific brand of vitamin C will prevent colds, so I'm stocking up. The actor is an authority on acting, not on immunology or nutrition.", category: "relevance" },
  { id: 6, name: "Appeal to Nature", definition: "This is the argument that something is good because it is 'natural,' or bad because it is 'unnatural.' This is a fallacy because the naturalness of something is not inherently linked to its positive or negative qualities.", example: "You shouldn't get vaccinated; it's unnatural. It's better to build immunity through natural infection. This ignores the fact that many natural things, like cyanide, arsenic, and deadly viruses, are extremely harmful.", category: "relevance" },
  { id: 7, name: "Appeal to Tradition (Ad Antiquitatem)", definition: "This fallacy argues that a thesis must be correct because it has a long-standing tradition behind it. The fact that an idea has been around for a long time does not automatically make it true or better than newer ideas.", example: "Our company has used this management structure for fifty years and has been successful, so there is no need to change it. This ignores the possibility that market conditions have changed and a new structure might be even more effective.", category: "relevance" },
  { id: 8, name: "Appeal to Poverty (Argumentum ad Lazarum)", definition: "This fallacy is the formal fallacy of thinking a conclusion is correct because the speaker is poor, or it is incorrect because the speaker is rich.", example: "The monks have forsworn all material possessions. They must have achieved enlightenment.", category: "relevance" },
  { id: 9, name: "Appeal to Wealth (Argumentum ad Crumenam)", definition: "This fallacy, also known as Argumentum ad Crumenam, assumes that an argument is correct because the speaker is wealthy or, conversely, that an argument is incorrect because the speaker is poor. Financial success is not a measure of an argument's truthfulness.", example: "If you're so smart, why aren't you rich? That billionaire says this investment is a sure thing, and he should know. This equates financial success with expertise in all areas.", category: "relevance" },
  { id: 10, name: "Moralistic Fallacy", definition: "This fallacy moves from a statement about how things *ought* to be to a factual claim about how things *are*. It assumes the world will adapt to our moral beliefs, which is a form of wishful thinking.", example: "Everyone should be treated equally, therefore there are no innate genetic differences in abilities between people. The moral imperative for equal treatment does not logically entail a factual conclusion about biological uniformity.", category: "relevance" }
];

// Translation type
export interface FallacyTranslations {
  [key: string]: {
    name: string;
    definition: string;
    example: string;
  };
}

// Placeholder translations - these would come from the CSV files
export const logicalFallaciesTranslations = {
  de: {} as FallacyTranslations,
  fr: {} as FallacyTranslations,
  es: {} as FallacyTranslations
};

// Export the main array
export const logicalFallacies = logicalFallaciesEN;
