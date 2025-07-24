export interface LogicalFallacy {
  name: string;
  definition: string;
  example: string;
  category: 'relevance' | 'presumption' | 'weak_inference' | 'causal' | 'formal' | 'conditional';
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
    name: 'Genetic Fallacy',
    definition: 'This fallacy involves accepting or rejecting a claim based on its origin, source, or history, rather than evaluating its current merit or evidence. The source of an idea is independent of its truth or falsehood.',
    example: '"That car can\'t possibly be any good; it was made in a country known for cheap products." This judges the car based on its place of manufacture, not on its actual performance, safety ratings, or build quality.',
    category: 'relevance',
  },
  {
    name: 'Appeal to Popularity (Bandwagon)',
    definition: 'This fallacy asserts that a proposition must be true because many or most people believe it. It appeals to the desire to fit in and be on the winning side, but the popularity of an idea has no bearing on its validity.',
    example: '"Millions of people have switched to this new smartphone, so it must be the best one on the market." The phone\'s popularity could be due to successful marketing rather than superior features or quality.',
    category: 'relevance',
  },
  {
    name: 'Appeal to Authority',
    definition: 'This occurs when an argument relies on the testimony of an authority figure who is not an expert in the relevant field. While citing relevant experts is a valid part of an argument, citing an irrelevant authority is fallacious.',
    example: '"A famous actor said in an interview that this specific brand of vitamin C will prevent colds, so I\'m stocking up." The actor is an authority on acting, not on immunology or nutrition.',
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
  {
    name: 'Appeal to Pity',
    definition: 'An appeal to pity attempts to win support for an argument by exploiting the audience\'s feelings of pity or compassion.',
    example: '"You should give me a good grade on this paper because I worked really hard and I need to pass this class to graduate." The effort and need, while admirable, don\'t determine the quality of the work.',
    category: 'relevance',
  },
  {
    name: 'Appeal to Force',
    definition: 'This fallacy occurs when someone uses threats, intimidation, or coercion to support their argument rather than providing evidence.',
    example: '"You should agree with my political position, or you might find yourself looking for a new job." The threat doesn\'t make the position correct.',
    category: 'relevance',
  },
  {
    name: 'Appeal to Ignorance',
    definition: 'This fallacy assumes that a lack of evidence against a claim means the claim is true, or that a lack of evidence for a claim means it\'s false.',
    example: '"No one has ever proven that aliens don\'t exist, so they must be real." Absence of evidence is not evidence of presence.',
    category: 'relevance',
  },
  {
    name: 'Appeal to Tradition',
    definition: 'This fallacy argues that something is true or good because it\'s the way things have always been done.',
    example: '"We\'ve always done business this way, so it must be the right approach." Tradition alone doesn\'t justify a practice.',
    category: 'relevance',
  },
  {
    name: 'Appeal to Novelty',
    definition: 'This fallacy argues that something is true or better simply because it is new or modern.',
    example: '"This new teaching method must be better because it\'s the latest educational trend." Newness alone doesn\'t guarantee improvement.',
    category: 'relevance',
  },
  {
    name: 'Guilt by Association',
    definition: 'This fallacy rejects an argument because of the people or groups associated with it, rather than examining the argument\'s merit.',
    example: '"That policy proposal can\'t be any good because it was supported by that controversial politician." The association doesn\'t invalidate the policy itself.',
    category: 'relevance',
  },
  {
    name: 'Poisoning the Well',
    definition: 'This fallacy involves discrediting an opponent before they have a chance to present their argument.',
    example: '"Before you listen to Dr. Jones, you should know that she\'s been criticized by her colleagues and has controversial views." This attempts to bias the audience against her arguments before they\'re presented.',
    category: 'relevance',
  },
  {
    name: 'Tone Policing',
    definition: 'This fallacy dismisses an argument based on its tone or emotional expression rather than its content.',
    example: '"I can\'t take your argument seriously because you\'re being too emotional about it." The emotional tone doesn\'t invalidate the logical content.',
    category: 'relevance',
  },
  {
    name: 'Whataboutism',
    definition: 'This fallacy deflects criticism by pointing to similar problems elsewhere rather than addressing the criticism directly.',
    example: 'When confronted about corruption in their government, responding: "What about the corruption in other countries?" This doesn\'t address the original criticism.',
    category: 'relevance',
  },
  {
    name: 'Appeal to Consequences',
    definition: 'This fallacy argues that a belief is true or false based on whether its consequences are desirable or undesirable.',
    example: '"If evolution is true, then life has no meaning, which would be terrible. Therefore, evolution must be false." The undesirable consequences don\'t affect the truth of evolution.',
    category: 'relevance',
  },

  // Causal Fallacies
  {
    name: 'Post Hoc Ergo Propter Hoc',
    definition: 'Assuming that because one event followed another, the first event caused the second. This confuses correlation with causation.',
    example: '"Every time I wash my car, it rains the next day. Therefore, washing my car causes rain." The temporal sequence doesn\'t establish a causal relationship.',
    category: 'causal',
  },
  {
    name: 'Cum Hoc Ergo Propter Hoc',
    definition: 'Assuming that because two events occur together, one must cause the other.',
    example: '"Ice cream sales and drowning deaths both increase in summer, so ice cream must cause drowning." Both are actually caused by hot weather encouraging swimming and ice cream consumption.',
    category: 'causal',
  },
  {
    name: 'Single Cause Fallacy',
    definition: 'The assumption that there is one, simple cause of an outcome when in reality it may have been caused by a number of only jointly sufficient causes.',
    example: '"The only reason our team lost the game was because of that bad call by the referee." This ignores poor plays, missed opportunities, and other factors that contributed to the loss.',
    category: 'causal',
  },
  {
    name: 'Wrong Direction',
    definition: 'This fallacy occurs when the cause and effect relationship is reversed.',
    example: '"Successful people are confident, so if I act confident, I\'ll become successful." The confidence might be a result of success, not the cause of it.',
    category: 'causal',
  },
  {
    name: 'Complex Cause',
    definition: 'This fallacy assumes that if one thing caused another, then the first thing must be the primary or only cause.',
    example: '"Since studying helped me pass the test, studying must be the only thing that matters for academic success." This ignores factors like sleep, nutrition, stress management, and natural ability.',
    category: 'causal',
  },
  {
    name: 'Regression Fallacy',
    definition: 'Assuming that an extreme result will be followed by a more moderate result due to intervention, when it\'s actually due to natural statistical regression.',
    example: '"After I started taking vitamins, my headaches decreased. The vitamins must work!" The headaches may have naturally decreased after an unusually bad period.',
    category: 'causal',
  },

  // Formal Fallacies
  {
    name: 'Affirming the Consequent',
    definition: 'A formal logical fallacy that occurs when the consequent of a conditional statement is affirmed, and from this, the antecedent is inferred.',
    example: '"If it rains, the ground gets wet. The ground is wet, so it must have rained." The wet ground could be from a sprinkler system, not rain.',
    category: 'formal',
  },
  {
    name: 'Denying the Antecedent',
    definition: 'A formal logical fallacy that occurs when the antecedent of a conditional statement is denied, and from this, the negation of the consequent is inferred.',
    example: '"If it rains, the ground gets wet. It\'s not raining, so the ground is not wet." The ground could still be wet from other sources.',
    category: 'formal',
  },
  {
    name: 'Undistributed Middle',
    definition: 'A formal fallacy that occurs when the middle term in a syllogism is not distributed in at least one of the premises.',
    example: '"All birds have wings. All bats have wings. Therefore, all bats are birds." The middle term "have wings" is not properly distributed.',
    category: 'formal',
  },
  {
    name: 'Illicit Major',
    definition: 'A formal fallacy in which the major term is distributed in the conclusion but not in the major premise.',
    example: '"All cats are mammals. No dogs are cats. Therefore, no dogs are mammals." The conclusion incorrectly distributes "mammals."',
    category: 'formal',
  },
  {
    name: 'Illicit Minor',
    definition: 'A formal fallacy in which the minor term is distributed in the conclusion but not in the minor premise.',
    example: '"All roses are flowers. All roses are red. Therefore, all flowers are red." The conclusion incorrectly distributes "flowers."',
    category: 'formal',
  },
  {
    name: 'Exclusive Premises',
    definition: 'A formal fallacy that occurs when both premises of a syllogism are negative.',
    example: '"No cats are dogs. No dogs are birds. Therefore, no cats are birds." You cannot draw a valid conclusion from two negative premises.',
    category: 'formal',
  },

  // Conditional Fallacies
  {
    name: 'Slippery Slope',
    definition: 'Arguing that a relatively small first step leads to a chain of related events culminating in some significant impact, without providing evidence for the inevitability of this chain.',
    example: '"If we allow students to redo one test, next they\'ll want to redo all their tests, then their entire semester, and eventually no one will fail any class ever again." This assumes an inevitable progression without justification.',
    category: 'conditional',
  },
  {
    name: 'False Dilemma',
    definition: 'This fallacy involves presenting only two options when more exist. It artificially limits choices to make one option seem more reasonable by comparison.',
    example: '"Either we implement strict gun control laws, or we let criminals run wild in the streets." This ignores many other possible approaches to reducing crime.',
    category: 'conditional',
  },
  {
    name: 'Perfect Solution Fallacy',
    definition: 'This fallacy assumes that a solution should be rejected because it\'s not perfect, even though it would still provide significant improvement.',
    example: '"We shouldn\'t install security cameras because they won\'t prevent all crimes." The cameras don\'t need to be 100% effective to be worthwhile.',
    category: 'conditional',
  },
  {
    name: 'Nirvana Fallacy',
    definition: 'Comparing actual things with unrealistic, idealized alternatives.',
    example: '"Democracy is flawed because it doesn\'t always represent everyone\'s interests perfectly." This compares democracy to an impossible perfect system rather than to other realistic alternatives.',
    category: 'conditional',
  },
  {
    name: 'False Compromise',
    definition: 'Assuming that the compromise between two positions is always correct.',
    example: '"One side says the Earth is round, the other says it\'s flat, so the truth must be that it\'s slightly curved." Sometimes one side is simply correct and the other is wrong.',
    category: 'conditional',
  },
  {
    name: 'Continuum Fallacy',
    definition: 'The assumption that because there is no clear dividing line between two concepts, no distinction can be made between them.',
    example: '"There\'s no exact moment when someone becomes \'tall,\' so height distinctions are meaningless." The lack of a precise boundary doesn\'t eliminate the validity of the general categories.',
    category: 'conditional',
  },

  // Presumption Fallacies
  {
    name: 'Begging the Question',
    definition: 'This fallacy occurs when an argument\'s premises assume the truth of the conclusion, instead of supporting it. The arguer essentially restates their conclusion in their premise.',
    example: '"Reading is good for you because it\'s beneficial." This argument doesn\'t provide any evidence for why reading is good; it just restates the claim using different words.',
    category: 'presumption',
  },
  {
    name: 'Loaded Question',
    definition: 'A question that contains a controversial or unjustified assumption. The question is phrased in such a way that any direct answer appears to endorse the assumption.',
    example: '"When did you stop beating your wife?" This question assumes the person was beating their wife, regardless of whether that\'s true.',
    category: 'presumption',
  },
  {
    name: 'Complex Question',
    definition: 'A fallacy in which a question is asked that presupposes something that has not been proven or accepted by all the people involved.',
    example: '"Why is the defendant such a dangerous criminal?" This assumes the defendant is dangerous and criminal without establishing these facts.',
    category: 'presumption',
  },
  {
    name: 'Assumption of Hidden Facts',
    definition: 'Assuming that certain unstated facts exist to support your argument.',
    example: '"The witness must be lying because they seem nervous." This assumes nervousness always indicates deception, ignoring other reasons for anxiety.',
    category: 'presumption',
  },
  {
    name: 'False Premise',
    definition: 'An argument based on a premise that is factually incorrect.',
    example: '"Since all swans are white, any bird that isn\'t white can\'t be a swan." The premise is false—black swans exist.',
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
    name: 'Unrepresentative Sample',
    definition: 'Drawing conclusions from a sample that is not representative of the population being studied.',
    example: '"I surveyed people at the gym about exercise habits and found that 95% exercise regularly, so most people must exercise regularly." Gym-goers are not representative of the general population.',
    category: 'weak_inference',
  },
  {
    name: 'False Analogy',
    definition: 'An analogy in which the two objects or events being compared are relevantly dissimilar.',
    example: '"Employees are like nails. Just as nails must be hit on the head to get them to work, employees must be constantly pressured to be productive." The analogy breaks down because employees are thinking beings, not inanimate objects.',
    category: 'weak_inference',
  },
  {
    name: 'Composition Fallacy',
    definition: 'Assuming that what is true of the parts of something is also true of the whole.',
    example: '"Each player on this team is excellent, so this must be an excellent team." Individual talent doesn\'t guarantee good teamwork.',
    category: 'weak_inference',
  },
  {
    name: 'Division Fallacy',
    definition: 'Assuming that what is true of a group is also true of its individual members.',
    example: '"This university has an excellent reputation, so every professor here must be excellent." The institution\'s overall quality doesn\'t guarantee every individual\'s quality.',
    category: 'weak_inference',
  },
  {
    name: 'Texas Sharpshooter Fallacy',
    definition: 'Cherry-picking data clusters to suit an argument, or finding a pattern to fit a presumption.',
    example: 'A researcher notices that a particular town has an unusually high cancer rate and concludes it must be due to a nearby factory, ignoring that other similar towns near factories don\'t show this pattern.',
    category: 'weak_inference',
  },
  {
    name: 'Survivorship Bias',
    definition: 'Concentrating on entities that survived a selection process while overlooking those that did not.',
    example: '"Look at all these successful college dropouts like Bill Gates! College must not be important for success." This ignores the many unsuccessful dropouts who aren\'t famous.',
    category: 'weak_inference',
  },
  {
    name: 'Cherry Picking',
    definition: 'Selecting individual cases or data that seem to confirm a particular position while ignoring significant contrary data.',
    example: 'Citing only studies that support your position on climate change while ignoring the overwhelming scientific consensus pointing in the opposite direction.',
    category: 'weak_inference',
  },
  {
    name: 'Anecdotal Evidence',
    definition: 'Using personal experience or isolated examples instead of valid evidence to support a general claim.',
    example: '"My friend smoked for 40 years and never got cancer, so smoking can\'t be that dangerous." Personal anecdotes don\'t override statistical evidence.',
    category: 'weak_inference',
  }
];