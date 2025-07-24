export interface CognitiveBias {
  name: string;
  definition: string;
  example: string;
  category: 'too_much_information' | 'not_enough_meaning' | 'need_to_act_fast' | 'what_should_we_remember';
}

export const cognitiveBiases: CognitiveBias[] = [
  // Too Much Information
  {
    name: 'Availability Heuristic',
    definition: 'We overestimate the importance of information that is easy to recall. We are biased by vivid, recent, or emotionally charged events.',
    example: 'After seeing several news reports about shark attacks, you start to believe they are much more common than they actually are, even though car accidents are statistically far more dangerous.',
    category: 'too_much_information',
  },
  {
    name: 'Attentional Bias',
    definition: 'Our perception is disproportionately affected by whatever is currently occupying our attention, leading us to neglect other relevant information.',
    example: 'A person trying to quit smoking will notice other people smoking everywhere, making it much harder to ignore the craving.',
    category: 'too_much_information',
  },
  {
    name: 'Illusory Truth Effect',
    definition: 'We are more likely to believe information we have been exposed to repeatedly, regardless of whether it is true or not.',
    example: 'A political lie, if repeated frequently by news outlets and politicians, can become accepted as truth by a segment of the population.',
    category: 'too_much_information',
  },
  {
    name: 'Mere Exposure Effect',
    definition: 'We tend to develop a preference for things simply because we are familiar with them.',
    example: 'You might dislike a new song the first time you hear it, but after hearing it on the radio several times, you start to enjoy it.',
    category: 'too_much_information',
  },
  {
    name: 'Context Effect',
    definition: 'Our cognition and memory are influenced by the context in which we receive information. The same stimulus can be interpreted differently depending on the surrounding cues.',
    example: 'A person might rate a wine as more enjoyable when served in a fancy restaurant with elegant music than if they drank the exact same wine from a plastic cup at a picnic.',
    category: 'too_much_information',
  },
  {
    name: 'Cue-Dependent Forgetting',
    definition: 'The inability to recall information without the specific cues that were present when the memory was formed.',
    example: 'You walk into a room to get something, but forget what it was. When you return to your original room, the context jogs your memory and you remember.',
    category: 'too_much_information',
  },
  {
    name: 'Frequency Illusion (Baader-Meinhof Phenomenon)',
    definition: 'After noticing something for the first time, there is a tendency to notice it more often, leading one to believe that it has an increased frequency of occurrence.',
    example: 'You learn a new word, and then you suddenly seem to see or hear that word everywhere.',
    category: 'too_much_information',
  },
  {
    name: 'Empathy Gap',
    definition: 'We underestimate the influence of visceral drives on our own attitudes, preferences, and behaviors. It\'s hard to imagine how we would feel in a different emotional or physiological state.',
    example: 'When you are not hungry, it\'s easy to decide you will eat a healthy salad for dinner. When dinner time arrives and you are ravenous, your craving for a greasy burger is much stronger than you anticipated.',
    category: 'too_much_information',
  },
  {
    name: 'Omission Bias',
    definition: 'The tendency to judge harmful actions as worse, or less moral, than equally harmful omissions (inactions).',
    example: 'A person who lets a patient die by not administering a life-saving drug is often judged less harshly than a person who administers a lethal drug, even if the outcome is the same.',
    category: 'too_much_information',
  },
  {
    name: 'Base Rate Fallacy',
    definition: 'We tend to ignore general statistical information (base rates) in favor of specific, descriptive information (anecdotes).',
    example: 'You read a vivid story about a person who won the lottery, so you buy a ticket, ignoring the astronomical odds against winning (the base rate).',
    category: 'too_much_information',
  },
  {
    name: 'Bizarreness Effect',
    definition: 'Bizarre, unusual, or surprising information is better remembered than common and expected information.',
    example: 'In a list of words, you are more likely to remember "platypus" and "zeppelin" than "chair" and "table".',
    category: 'too_much_information',
  },
  {
    name: 'Humor Effect',
    definition: 'Humorous items are more easily remembered than non-humorous ones.',
    example: 'You are more likely to remember the details of a funny commercial than a serious one, even for a similar product.',
    category: 'too_much_information',
  },
  {
    name: 'Von Restorff Effect',
    definition: 'An item that stands out is more likely to be remembered than other items. Also known as the isolation effect.',
    example: 'In the list: apple, banana, car, orange, grape; the word "car" is more likely to be remembered because it is distinct from the others.',
    category: 'too_much_information',
  },
  {
    name: 'Picture Superiority Effect',
    definition: 'We remember concepts and ideas better when they are presented as pictures rather than as text.',
    example: 'IKEA instructions are effective because they rely on simple diagrams rather than complex text descriptions.',
    category: 'too_much_information',
  },
  {
    name: 'Self-Relevance Effect',
    definition: 'We remember information better when we can relate it to ourselves in some way.',
    example: 'You are more likely to remember someone\'s birthday if it is close to your own.',
    category: 'too_much_information',
  },

  // Not Enough Meaning
  {
    name: 'Clustering Illusion',
    definition: 'The tendency to see patterns in random events. It is central to the gambler\'s fallacy.',
    example: 'Seeing a "hot streak" in a basketball player who has made several shots in a row, even though each shot is an independent event.',
    category: 'not_enough_meaning',
  },
  {
    name: 'Gambler\'s Fallacy',
    definition: 'The tendency to think that future probabilities are altered by past events, when in reality they are unchanged.',
    example: 'After a coin toss has landed on heads five times in a row, a person might believe that the next toss is "due" to be tails.',
    category: 'not_enough_meaning',
  },
  {
    name: 'Hot-Hand Fallacy',
    definition: 'The belief that a person who has experienced success with a random event has a greater chance of further success in additional attempts.',
    example: 'A basketball player who has made their last few shots is believed to have a "hot hand" and is more likely to make their next shot.',
    category: 'not_enough_meaning',
  },
  {
    name: 'Anecdotal Fallacy',
    definition: 'Using a personal experience or an isolated example instead of a sound argument or compelling evidence.',
    example: '"My grandfather smoked a pack a day and lived to be 90, so smoking isn\'t that bad for you."',
    category: 'not_enough_meaning',
  },

  // Need to Act Fast
  {
    name: 'Overconfidence Effect',
    definition: 'A bias in which someone\'s subjective confidence in their judgments is reliably greater than their objective accuracy.',
    example: 'A student believes they will score 90% on an exam but actually scores 70%, consistently overestimating their knowledge.',
    category: 'need_to_act_fast',
  },
  {
    name: 'Planning Fallacy',
    definition: 'The tendency to underestimate the time, costs, and risks of future actions while overestimating their benefits.',
    example: 'A software project estimated to take 3 months ends up taking 8 months due to unforeseen complications.',
    category: 'need_to_act_fast',
  },

  // What Should We Remember
  {
    name: 'Recency Effect',
    definition: 'The tendency to better remember the most recently presented items or experiences.',
    example: 'In a job interview, the interviewer is more likely to remember candidates they met later in the day.',
    category: 'what_should_we_remember',
  },
  {
    name: 'Peak-End Rule',
    definition: 'People judge an experience largely based on how they felt at its peak and how it ended, rather than on the total sum or average of every moment.',
    example: 'A vacation with mostly mediocre weather but a spectacular final day will be remembered more fondly than one with consistently good weather but a rainy last day.',
    category: 'what_should_we_remember',
  }
];