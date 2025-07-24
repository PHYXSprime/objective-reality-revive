export interface LogicalFallacy {
  name: string;
  definition: string;
  example: string;
  category: 'relevance' | 'presumption' | 'weak_inference' | 'distraction';
}

export const logicalFallacies: LogicalFallacy[] = [
  // Relevance Fallacies
  {
    name: 'Ad Hominem',
    definition: 'This fallacy occurs when someone rejects or criticizes another person\'s view on the basis of personal characteristics, background, physical appearance, or other features irrelevant to the argument at hand.',
    example: '"You can\'t trust Dr. Smith\'s medical advice on dieting because she is overweight." This attacks Dr. Smith\'s personal appearance, which is irrelevant to the scientific validity of her medical recommendations.',
    category: 'relevance',
  },
  {
    name: 'Tu Quoque',
    definition: 'A specific type of ad hominem fallacy that dismisses an argument by pointing out hypocrisy in the arguer. It deflects criticism by turning it back on the accuser, but the arguer\'s hypocrisy doesn\'t invalidate their argument.',
    example: '"My father told me not to speed because it\'s dangerous, but I don\'t have to listen to him because he got a speeding ticket last year." The father\'s past actions don\'t change the fact that speeding is objectively dangerous.',
    category: 'relevance',
  },
  {
    name: 'Appeal to Authority',
    definition: 'This occurs when an argument relies on the testimony of an authority figure who is not an expert in the relevant field. While citing relevant experts is a valid part of an argument, citing an irrelevant authority is fallacious.',
    example: '"A famous actor said in an interview that this specific brand of vitamin C will prevent colds, so I\'m stocking up." The actor is an authority on acting, not on immunology or nutrition.',
    category: 'relevance',
  },
  {
    name: 'Appeal to Popularity (Bandwagon)',
    definition: 'This fallacy asserts that a proposition must be true because many or most people believe it. It appeals to the desire to fit in and be on the winning side, but the popularity of an idea has no bearing on its validity.',
    example: '"Millions of people have switched to this new smartphone, so it must be the best one on the market." The phone\'s popularity could be due to successful marketing rather than superior features or quality.',
    category: 'relevance',
  },
  {
    name: 'Appeal to Nature',
    definition: 'This is the argument that something is good because it is \'natural,\' or bad because it is \'unnatural.\' This is a fallacy because the naturalness of something is not inherently linked to its positive or negative qualities.',
    example: '"You shouldn\'t get vaccinated; it\'s unnatural. It\'s better to build immunity through natural infection." This ignores the fact that many natural things, like cyanide, arsenic, and deadly viruses, are extremely harmful.',
    category: 'relevance',
  },
  {
    name: 'Red Herring',
    definition: 'This is a tactic of distraction. An arguer commits a red herring fallacy by introducing an irrelevant topic into a discussion to divert attention from the original issue.',
    example: 'When asked about his voting record on environmental protection, a senator responds, "I\'m much more concerned about the threat of terrorism. We must keep our country safe." This avoids addressing the environmental question by introducing a different, emotionally charged issue.',
    category: 'relevance',
  },
  {
    name: 'Straw Man',
    definition: 'This fallacy occurs when someone distorts, misrepresents, or exaggerates an opponent\'s position to make it easier to attack. Instead of refuting the actual argument, they knock down a weaker, manufactured version.',
    example: 'Person A: "I think we should increase funding for public schools." Person B: "So you\'re saying we should just throw unlimited money at a broken system and ignore our national debt? That\'s fiscally irresponsible!"',
    category: 'relevance',
  },
  {
    name: 'Appeal to Emotion',
    definition: 'This is a broad category of fallacies that involves manipulating an audience\'s emotions—such as fear, pity, or joy—in order to win an argument, especially in the absence of factual evidence.',
    example: 'A commercial for a charity shows sad pictures of starving children with moving music, urging viewers to donate. While the cause may be worthy, the ad primarily appeals to pity rather than presenting a logical case with data about the charity\'s effectiveness.',
    category: 'relevance',
  },
  {
    name: 'Appeal to Fear',
    definition: 'A specific type of appeal to emotion where an arguer attempts to create support for an idea by instilling fear of an alternative. Instead of providing evidence, it relies on scare tactics and threats of dire consequences.',
    example: '"If we don\'t pass this surveillance bill, a major terrorist attack on our soil is inevitable." This argument doesn\'t provide evidence for the bill\'s effectiveness but instead uses the fear of terrorism to push for its passage.',
    category: 'relevance',
  },

  // Presumption Fallacies
  {
    name: 'Begging the Question',
    definition: 'This fallacy occurs when an argument\'s premises assume the truth of the conclusion, instead of supporting it. The arguer essentially restates their conclusion in their premise.',
    example: '"Reading is good for you because it\'s beneficial." This argument doesn\'t provide any evidence for why reading is good; it just restates the claim using different words.',
    category: 'presumption',
  },
  {
    name: 'False Dichotomy',
    definition: 'This fallacy involves presenting only two options when more exist. It artificially limits choices to make one option seem more reasonable by comparison.',
    example: '"Either we implement strict gun control laws, or we let criminals run wild in the streets." This ignores many other possible approaches to reducing crime.',
    category: 'presumption',
  },
  {
    name: 'Loaded Question',
    definition: 'A question that contains a controversial or unjustified assumption. The question is phrased in such a way that any direct answer appears to endorse the assumption.',
    example: '"When did you stop beating your wife?" This question assumes the person was beating their wife, regardless of whether that\'s true.',
    category: 'presumption',
  },

  // Weak Inference Fallacies
  {
    name: 'Hasty Generalization',
    definition: 'Drawing a broad conclusion from a small or unrepresentative sample. This fallacy involves making sweeping statements based on insufficient evidence.',
    example: '"I met two rude people from that country, so everyone from there must be rude." This makes a generalization about an entire population based on just two encounters.',
    category: 'weak_inference',
  },
  {
    name: 'Post Hoc Ergo Propter Hoc',
    definition: 'Assuming that because one event followed another, the first event caused the second. This confuses correlation with causation.',
    example: '"Every time I wash my car, it rains the next day. Therefore, washing my car causes rain." The temporal sequence doesn\'t establish a causal relationship.',
    category: 'weak_inference',
  },
  {
    name: 'Slippery Slope',
    definition: 'Arguing that a relatively small first step leads to a chain of related events culminating in some significant impact, without providing evidence for the inevitability of this chain.',
    example: '"If we allow students to redo one test, next they\'ll want to redo all their tests, then their entire semester, and eventually no one will fail any class ever again." This assumes an inevitable progression without justification.',
    category: 'weak_inference',
  }
];