export interface LogicalFallacy {
  id: number;
  name: string;
  definition: string;
  example: string;
  category: string;
}

export const logicalFallacies: LogicalFallacy[] = [
  {
    id: 1,
    name: "Expert Status Argument",
    definition: "The fallacy of asserting a claim is true or must be accepted because the person making it holds a position of authority, expertise, or high status, demanding belief based on their title rather than the evidence provided. This includes appeals to 'scientific consensus' when used to shut down questioning rather than present evidence.",
    example: "'As the head of the department, I can tell you this project will succeed, and you don't need to see the data. My position is proof enough.' or 'You have to accept that this theory is correct because 97% of scientists agree on it; questioning the consensus is illegitimate.'",
    category: "relevance"
  },
  {
    id: 2,
    name: "Ad Hominem",
    definition: "This fallacy occurs when someone rejects or criticizes another person's view on the basis of personal characteristics, background, physical appearance, or other features irrelevant to the argument at hand.",
    example: "You can't trust Dr. Smith's medical advice on dieting because she is overweight. This attacks Dr. Smith's personal appearance, which is irrelevant to the scientific validity of her medical recommendations.",
    category: "relevance"
  },
  {
    id: 3,
    name: "Tu Quoque (Appeal to Hypocrisy)",
    definition: "A specific type of ad hominem fallacy that dismisses an argument by pointing out hypocrisy in the arguer. It deflects criticism by turning it back on the accuser, but the arguer's hypocrisy doesn't invalidate their argument.",
    example: "My father told me not to speed because it's dangerous, but I don't have to listen to him because he got a speeding ticket last year. The father's past actions don't change the fact that speeding is objectively dangerous.",
    category: "relevance"
  },
  {
    id: 4,
    name: "Genetic Fallacy",
    definition: "This fallacy involves accepting or rejecting a claim based on its origin, source, or history, rather than evaluating its current merit or evidence. The source of an idea is independent of its truth or falsehood.",
    example: "That car can't possibly be any good; it was made in a country known for cheap products. This judges the car based on its place of manufacture, not on its actual performance, safety ratings, or build quality.",
    category: "relevance"
  },
  {
    id: 5,
    name: "Ad Populum (Bandwagon)",
    definition: "This fallacy asserts that a proposition must be true because many or most people believe it. It appeals to the desire to fit in and be on the winning side, but the popularity of an idea has no bearing on its validity.",
    example: "Millions of people have switched to this new smartphone, so it must be the best one on the market. The phone's popularity could be due to successful marketing rather than superior features or quality.",
    category: "relevance"
  },
  {
    id: 6,
    name: "Appeal to Authority (Irrelevant)",
    definition: "This occurs when an argument relies on the testimony of an authority figure who is not an expert in the relevant field. While citing relevant experts is a valid part of an argument, citing an irrelevant authority is fallacious.",
    example: "A famous actor said in an interview that this specific brand of vitamin C will prevent colds, so I'm stocking up. The actor is an authority on acting, not on immunology or nutrition.",
    category: "relevance"
  },
  {
    id: 7,
    name: "Appeal to Nature",
    definition: "This is the argument that something is good because it is 'natural,' or bad because it is 'unnatural.' This is a fallacy because the naturalness of something is not inherently linked to its positive or negative qualities.",
    example: "You shouldn't get vaccinated; it's unnatural. It's better to build immunity through natural infection. This ignores the fact that many natural things, like cyanide, arsenic, and deadly viruses, are extremely harmful.",
    category: "relevance"
  },
  {
    id: 8,
    name: "Appeal to Tradition",
    definition: "This fallacy argues that a thesis must be correct because it has a long-standing tradition behind it. The fact that an idea has been around for a long time does not automatically make it true or better than newer ideas.",
    example: "Our company has used this management structure for fifty years and has been successful, so there is no need to change it. This ignores the possibility that market conditions have changed and a new structure might be even more effective.",
    category: "relevance"
  },
  {
    id: 9,
    name: "Appeal to Poverty (Argumentum ad Lazarum)",
    definition: "This fallacy is the assumption that a conclusion is correct because the speaker is poor, or that it is incorrect because the speaker is rich. It is the opposite of the Appeal to Wealth.",
    example: "The monks have renounced all material wealth. They must have achieved true enlightenment. Their poverty doesn't prove their wisdom.",
    category: "relevance"
  },
  {
    id: 10,
    name: "Appeal to Wealth (Argumentum ad Crumenam)",
    definition: "This fallacy assumes that an argument is correct because the speaker is wealthy or, conversely, that an argument is incorrect because the speaker is poor. Financial success is not a measure of an argument's truthfulness.",
    example: "If you're so smart, why aren't you rich? That billionaire says this investment is a sure thing, and he should know. This equates financial success with expertise in all areas.",
    category: "relevance"
  },
  {
    id: 11,
    name: "Moralistic Fallacy",
    definition: "This fallacy moves from a statement about how things *ought* to be to a factual claim about how things *are*. It assumes the world will adapt to our moral beliefs, which is a form of wishful thinking.",
    example: "Everyone should be treated equally, therefore there are no innate genetic differences in abilities between people. The moral imperative for equal treatment does not logically entail a factual conclusion about biological uniformity.",
    category: "relevance"
  },
  {
    id: 12,
    name: "Naturalistic Fallacy (Is-Ought Fallacy)",
    definition: "This occurs when someone argues from a statement of fact (what 'is') to a statement of value (what 'ought' to be). It assumes that the way things are is the way they should be.",
    example: "Because animals in nature eat meat, it is morally acceptable for humans to eat meat. This argument takes a descriptive fact about the natural world and tries to derive a moral prescription from it.",
    category: "relevance"
  },
  {
    id: 13,
    name: "Red Herring",
    definition: "This is a tactic of distraction. An arguer commits a red herring fallacy by introducing an irrelevant topic into a discussion to divert attention from the original issue.",
    example: "When asked about his voting record on environmental protection, a senator responds, 'I'm much more concerned about the threat of terrorism.' This avoids the question by introducing a different issue.",
    category: "relevance"
  },
  {
    id: 14,
    name: "Straw Man",
    definition: "This fallacy occurs when someone distorts, misrepresents, or exaggerates an opponent's position to make it easier to attack. Instead of refuting the actual argument, they knock down a weaker, manufactured version.",
    example: "Person A: 'I think we should increase funding for public schools.' Person B: 'So you're saying we should just throw unlimited money at a broken system and ignore our national debt? That's irresponsible!'",
    category: "relevance"
  },
  {
    id: 15,
    name: "Appeal to Emotion",
    definition: "This is a broad category of fallacies that involves manipulating an audience's emotions—such as fear, pity, or joy—in order to win an argument, especially in the absence of factual evidence.",
    example: "A commercial for a charity shows sad pictures of starving children with moving music, urging viewers to donate. The ad primarily appeals to pity rather than presenting a logical case.",
    category: "relevance"
  },
  {
    id: 16,
    name: "Appeal to Fear (Argumentum ad Baculum)",
    definition: "A specific type of appeal to emotion where an arguer attempts to create support for an idea by instilling fear of an alternative. It relies on scare tactics instead of evidence.",
    example: "If we don't pass this surveillance bill, a major terrorist attack on our soil is inevitable. This argument uses fear, not evidence of the bill's effectiveness.",
    category: "relevance"
  },
  {
    id: 17,
    name: "Appeal to Flattery",
    definition: "This fallacy involves using flattery and compliments to persuade an audience to accept a conclusion, rather than providing evidence. The appeal is to the listener's vanity, not their intellect.",
    example: "A person of your refined taste can surely see the superior quality of this expensive artwork. The compliment is intended to make the potential buyer more agreeable.",
    category: "relevance"
  },
  {
    id: 18,
    name: "Appeal to Pity (Argumentum ad Misericordiam)",
    definition: "This fallacy attempts to win support for an argument or idea by exploiting the opponent's feelings of pity or guilt. The emotional appeal is used as a substitute for a reasoned argument.",
    example: "Professor, I know I failed the exam, but I've had a really tough semester. If I don't pass this class, I'll lose my scholarship. You have to give me a passing grade.",
    category: "relevance"
  },
  {
    id: 19,
    name: "Appeal to Ridicule",
    definition: "This fallacy involves presenting an opponent's argument as absurd, ridiculous, or humorous, and therefore not worthy of serious consideration. Mockery is used in place of actual counter-argumentation.",
    example: "You actually believe in the theory of evolution? So you think your grandfather was a monkey? That's hilarious! This caricature is meant to mock the position rather than engage with the evidence.",
    category: "relevance"
  },
  {
    id: 20,
    name: "Appeal to Spite",
    definition: "This fallacy attempts to sway an audience by exploiting their existing feelings of bitterness, spite, or resentment towards the opposing side. The argument is based on animosity rather than logic.",
    example: "Why would you support a policy proposed by that party? Remember how they blocked the bill we all wanted last year? Let's vote against this just to pay them back.",
    category: "relevance"
  },
  {
    id: 21,
    name: "Wishful Thinking",
    definition: "This fallacy occurs when a person concludes that a proposition must be true because they want it to be true. The desire for something to be true is used as evidence for its truthfulness.",
    example: "I'm sure I'll get the job because it would be perfect for me and I really need it. The speaker's desire has no bearing on the employer's decision.",
    category: "relevance"
  },
  {
    id: 22,
    name: "Appeal to Novelty (Argumentum ad Novitatem)",
    definition: "This fallacy claims that an idea or proposal is correct or superior solely because it is new and modern. Novelty is not evidence of quality or truth.",
    example: "Our company needs to switch to this new management software. It's the latest version, so it must be much more efficient than our old system.",
    category: "relevance"
  },
  {
    id: 23,
    name: "Argument from Incredulity",
    definition: "This fallacy asserts that a proposition must be false because it contradicts one's personal expectations or beliefs, or because it is difficult to imagine. A person's inability to comprehend something does not make it untrue.",
    example: "I find it impossible to believe that the vastness of the universe could have emerged from a single point in the Big Bang. Therefore, the theory must be wrong.",
    category: "relevance"
  },
  {
    id: 24,
    name: "Appeal to Ignorance (Argumentum ad Ignorantiam)",
    definition: "This fallacy asserts that a proposition is true because there is no evidence to prove it false, or that it is false because there is no evidence to prove it true. A lack of evidence is not evidence.",
    example: "No one has ever been able to prove that ghosts don't exist, so it is reasonable to believe that they do. The burden of proof lies with the person making the claim.",
    category: "relevance"
  },
  {
    id: 25,
    name: "Appeal to Self-Evident Truth",
    definition: "This fallacy involves presenting a claim as 'self-evident' or 'obvious' and therefore needing no supporting evidence. This tactic attempts to shut down debate.",
    example: "It's self-evident that raising taxes on corporations hurts the economy. This is presented as an undeniable fact, but it is a complex economic claim that requires evidence.",
    category: "relevance"
  },
  {
    id: 26,
    name: "Appeal to Stone (Argumentum ad Lapidem)",
    definition: "This fallacy consists of dismissing a statement as absurd without giving any proof of its absurdity. It is a refusal to engage with the argument itself.",
    example: "Person A lays out a detailed argument for a policy change. Person B responds by simply saying, 'That is the most absurd proposition I have ever heard,' and offers no counter-argument.",
    category: "relevance"
  },
  {
    id: 27,
    name: "Burden of Proof Fallacy",
    definition: "This fallacy occurs when someone makes a claim but puts the burden of proof on the other party to disprove it, rather than providing evidence for their own claim. He who asserts must prove.",
    example: "I claim that a teapot is orbiting the sun between Earth and Mars. Since you cannot prove that it isn't there, you must accept my claim as true.",
    category: "relevance"
  },
  {
    id: 28,
    name: "Fallacy of Composition",
    definition: "This is the error of assuming that what is true of a part is also true of the whole. The properties of the parts do not necessarily transfer to the properties of the complete entity.",
    example: "Every player on this basketball team is a superstar. Therefore, the team itself must be the best in the league. This ignores that a team of superstars may not have good chemistry.",
    category: "relevance"
  },
  {
    id: 29,
    name: "Fallacy of Division",
    definition: "The inverse of the fallacy of composition, this is the error of assuming that what is true of the whole is also true of its parts.",
    example: "Our company is very profitable. Therefore, every single employee in our company must be profitable. This ignores that success is a collective outcome.",
    category: "relevance"
  },
  {
    id: 30,
    name: "Fallacy of the Single Cause (Causal Oversimplification)",
    definition: "This fallacy occurs when it is assumed that there is a single, simple cause for an outcome when in reality it may have been caused by a number of jointly sufficient causes.",
    example: "The school shooting happened because of violent video games. This oversimplifies a complex event, ignoring other potential contributing factors.",
    category: "relevance"
  },
  {
    id: 31,
    name: "Intentionality Fallacy",
    definition: "This is the bias of assuming that the outcomes of a person's actions were what they intended. It often involves attributing malicious intent to accidents or unintended consequences.",
    example: "My colleague didn't reply to my important email, so he must be intentionally ignoring me. This assumes a malicious motive, whereas he might have simply missed the email.",
    category: "relevance"
  },
  {
    id: 32,
    name: "Inflation of Conflict",
    definition: "This fallacy occurs when someone exaggerates a minor or internal disagreement among experts in a field to dismiss the field's consensus entirely.",
    example: "Scientists disagree about the exact rate of climate change, so the whole concept of global warming is probably not true. This ignores the overwhelming consensus that it is happening.",
    category: "relevance"
  },
  {
    id: 33,
    name: "Ludic Fallacy",
    definition: "This is the misuse of games and statistical models of chance to represent complex, real-world situations, ignoring the impact of unknown 'black swan' events.",
    example: "Based on my financial models, the market has a 0.1% chance of crashing, so my investments are perfectly safe. This treats the economy like a casino game with known odds.",
    category: "relevance"
  },
  {
    id: 34,
    name: "Moving the Goalposts",
    definition: "This fallacy occurs when the criteria for proof or acceptance of an argument are changed after the initial criteria have been met. It is an unfair tactic to avoid conceding a point.",
    example: "Person A: 'Prove your policy will reduce costs.' Person B provides a report showing cost reductions. Person A replies, 'Okay, but now prove it won't hurt employee morale.'",
    category: "relevance"
  },
  {
    id: 35,
    name: "Outcome Bias",
    definition: "This is the error of evaluating the quality of a decision based on its outcome rather than on the quality of the decision-making process at the time it was made.",
    example: "A surgeon performs a high-risk operation perfectly, but the patient dies from a rare complication. Judging the surgeon as incompetent is an outcome bias.",
    category: "relevance"
  },
  {
    id: 36,
    name: "Slippery Slope",
    definition: "This fallacy asserts that a relatively small first step will inevitably lead to a chain of related events culminating in some significant negative effect, without sufficient evidence for the inevitability.",
    example: "If we allow the city to ban plastic straws, the next thing you know, they'll be banning all plastic bags, and eventually we won't be able to buy anything in plastic!",
    category: "relevance"
  },
  {
    id: 37,
    name: "Texas Sharpshooter Fallacy",
    definition: "This fallacy is committed when differences in data are ignored, but similarities are stressed. It involves cherry-picking data clusters to suit an argument.",
    example: "A soda company points out that in the five states where their sales are highest, three are also in the top ten healthiest states. They conclude their soda is part of a healthy lifestyle.",
    category: "relevance"
  },
  {
    id: 38,
    name: "Appeal to Probability",
    definition: "This is a fallacy of assuming that because something could happen, it will inevitably happen. This confuses possibility with certainty.",
    example: "There are so many cars on the road, it's inevitable that I will get into a major accident someday, so I might as well drive recklessly.",
    category: "relevance"
  },
  {
    id: 39,
    name: "Wrong Direction (Causal Reversal)",
    definition: "This fallacy occurs when cause and effect are reversed. The arguer claims that X causes Y, when in fact it is Y that causes X.",
    example: "Observing that people who are very ill are often in hospitals, someone concludes that hospitals make people ill. In reality, people go to hospitals because they are already ill.",
    category: "causal"
  },
  {
    id: 40,
    name: "Correlation Implies Causation (Cum Hoc Ergo Propter Hoc)",
    definition: "This fallacy is the error of concluding that because two events occur together, one must be the cause of the other. It overlooks the possibility of a third factor causing both.",
    example: "As ice cream sales increase, so do the number of shark attacks. Therefore, buying ice cream causes shark attacks. In reality, hot weather is the cause of both.",
    category: "causal"
  },
  {
    id: 41,
    name: "Post Hoc Ergo Propter Hoc",
    definition: "Literally 'after this, therefore because of this,' this fallacy occurs when it is assumed that because one event followed another, the first event must have caused the second.",
    example: "I wore my lucky jersey and my team won the game. Therefore, my jersey caused the team to win. The temporal succession of events is not sufficient to establish causality.",
    category: "causal"
  },
  {
    id: 42,
    name: "Regression Fallacy",
    definition: "This fallacy fails to account for natural fluctuations and regression to the mean. It attributes a return to normal to an action taken when an outcome was exceptional.",
    example: "A patient with extreme back pain tries a new remedy and feels better a week later. They attribute recovery to the remedy, but it's likely the extreme pain naturally regressed to a less painful average state.",
    category: "causal"
  },
  {
    id: 43,
    name: "Third-Cause Fallacy",
    definition: "A variation of the 'correlation implies causation' fallacy, this error occurs when a third, unacknowledged factor (a confounding variable) is the cause of two correlated events.",
    example: "The number of storks in a region correlates with the human birth rate. Therefore, storks deliver babies. The third cause is the size of the region; larger regions have more storks and more people.",
    category: "causal"
  },
  {
    id: 44,
    name: "Gambler's Fallacy",
    definition: "The mistaken belief that if a particular random event occurs more frequently than normal in the past, it is less likely to happen in the future (or vice versa).",
    example: "At a roulette wheel, after ten red numbers, a gambler believes a black number is 'due'. In reality, the probability is the same on every spin.",
    category: "causal"
  },
  {
    id: 45,
    name: "Hot Hand Fallacy",
    definition: "The inverse of the Gambler's Fallacy, this is the belief that a person who has experienced success with a random event has a greater chance of further success.",
    example: "A basketball player makes several shots in a row, and fans believe they have a 'hot hand' and are more likely to make their next shot. Statistically, each shot is an independent event.",
    category: "causal"
  },
  {
    id: 46,
    name: "Survivorship Bias",
    definition: "A logical error of concentrating on the people or things that 'survived' some process and inadvertently overlooking those that did not because of their lack of visibility.",
    example: "Analyzing returning bombers in WWII to see where they were hit, suggesting armor be added to those areas. The fallacy is not armoring the areas that were *not* hit, as planes hit there likely didn't survive to return.",
    category: "causal"
  },
  {
    id: 47,
    name: "Magic Thinking",
    definition: "The belief that one's thoughts, words, or actions can influence events in the physical world in a way not supported by the laws of physics.",
    example: "An athlete believes that wearing a specific pair of 'lucky' socks was the reason they won a championship. This attributes causal power to an object with no actual influence.",
    category: "causal"
  },
  {
    id: 48,
    name: "Joint Effect",
    definition: "This fallacy occurs when one concludes that one event caused another when both events are actually the result of a third event.",
    example: "A study finds that people who carry matches are more likely to get lung cancer. Someone concludes that matches cause cancer, when in fact smoking is the common cause of both carrying matches and lung cancer.",
    category: "causal"
  },
  {
    id: 49,
    name: "Base Rate Fallacy (Prosecutor's Fallacy)",
    definition: "This fallacy occurs when the base rate (or background frequency) of an event is ignored when updating beliefs after observing evidence.",
    example: "A DNA test is 99% accurate. If someone tests positive for having committed a crime, many assume they're 99% likely to be guilty. But if the actual crime rate is very low, most positive tests could be false positives.",
    category: "weak_inference"
  },
  {
    id: 50,
    name: "Confirmation Bias (Argumentum ad Consequentiam)",
    definition: "The fallacy of judging the truth of an argument based on the positive or negative consequences that would follow if it were true, rather than its logical validity.",
    example: "We can't allow people to believe in determinism because that would undermine personal responsibility and morality. This focuses on consequences rather than whether determinism is actually true.",
    category: "weak_inference"
  },
  {
    id: 51,
    name: "Conjunction Fallacy",
    definition: "The fallacy that occurs when it is assumed that specific conditions are more probable than general ones. People often think that two events occurring together is more likely than one of them occurring alone.",
    example: "Linda is described as outspoken and concerned with social justice. People judge 'Linda is a bank teller and a feminist' as more probable than 'Linda is a bank teller,' violating basic probability rules.",
    category: "weak_inference"
  },
  {
    id: 52,
    name: "Hasty Generalization",
    definition: "This fallacy occurs when a conclusion is drawn about a large group based on a small, unrepresentative sample.",
    example: "I met three rude people from that city today, so everyone from there must be unfriendly. This draws a broad conclusion from very limited experience.",
    category: "weak_inference"
  },
  {
    id: 53,
    name: "Overwhelming Exception",
    definition: "This fallacy proposes a generalization with a number of exceptions so large that the generalization is rendered essentially meaningless.",
    example: "All birds can fly, except for penguins, ostriches, emus, kiwis, chickens, and many others. The exceptions are so numerous that the original generalization becomes nearly useless.",
    category: "weak_inference"
  },
  {
    id: 54,
    name: "Unrepresentative Sample",
    definition: "This fallacy occurs when a sample used to support a generalization is not representative of the population in question.",
    example: "A survey about political opinions conducted only on a college campus is used to predict national election results. College students don't represent the broader voting population.",
    category: "weak_inference"
  },
  {
    id: 55,
    name: "False Analogy",
    definition: "This fallacy occurs when an analogy is used to prove or disprove an argument, but the analogy is too dissimilar to the original situation to be useful.",
    example: "Employees are like nails. Just as nails must be hit on the head to be useful, employees must be criticized to work effectively. This analogy fails because employees are thinking humans, not inanimate objects.",
    category: "weak_inference"
  },
  {
    id: 56,
    name: "Weak Analogy",
    definition: "An analogy is used as evidence in an argument when the analogy is not strong enough to support the conclusion.",
    example: "The brain is like a computer, so we should be able to upgrade our minds like we upgrade our computers. While brains and computers process information, they work in fundamentally different ways.",
    category: "weak_inference"
  },
  {
    id: 57,
    name: "Arguing from Consequences",
    definition: "This fallacy concludes that a premise is true or false based on whether the consequences are desirable or undesirable.",
    example: "Capital punishment must be wrong because it has been used to execute innocent people. This judges the morality of capital punishment by its negative consequences rather than its inherent rightness or wrongness.",
    category: "weak_inference"
  },
  {
    id: 58,
    name: "Appeal to Consequences",
    definition: "This fallacy asserts that a premise is true or false based on the positive or negative outcomes that would result if it were true or false.",
    example: "Evolution can't be true because if it were, it would mean human life has no special meaning. This rejects evolution based on its perceived implications rather than evidence.",
    category: "weak_inference"
  },
  {
    id: 59,
    name: "Package Deal Fallacy",
    definition: "This fallacy assumes that things often grouped together by tradition or culture must be grouped together of necessity.",
    example: "If you support free markets, you must also oppose environmental regulations. This assumes that economic and environmental positions must come as an inseparable package.",
    category: "weak_inference"
  },
  {
    id: 60,
    name: "Fallacy of Suppressed Evidence",
    definition: "This fallacy occurs when an arguer ignores evidence that would undermine their position.",
    example: "This diet pill is amazing! Studies show people lost an average of 10 pounds in a month. (Failing to mention that participants also followed a strict diet and exercise regimen.)",
    category: "weak_inference"
  },
  {
    id: 61,
    name: "Biased Sample",
    definition: "This fallacy occurs when the sample used in an argument is not representative because it has been selected in a biased way.",
    example: "A survey about customer satisfaction conducted only among customers who volunteered to participate will likely show overly positive results, as dissatisfied customers are less likely to volunteer.",
    category: "weak_inference"
  },
  {
    id: 62,
    name: "Misleading Vividness",
    definition: "This fallacy involves describing an occurrence in vivid detail, even if it is a rare occurrence, to convince someone that it is a typical example.",
    example: "Air travel is dangerous because I saw a graphic news report about a plane crash. The vivid imagery makes aviation seem dangerous despite it being statistically one of the safest forms of travel.",
    category: "weak_inference"
  },
  {
    id: 63,
    name: "Anecdotal Evidence",
    definition: "This fallacy uses personal experience or isolated examples instead of valid evidence to support a claim.",
    example: "Vaccines are dangerous because my friend's child developed autism after being vaccinated. Personal anecdotes cannot establish causation and don't outweigh large-scale scientific studies.",
    category: "weak_inference"
  },
  {
    id: 64,
    name: "Availability Heuristic",
    definition: "This error occurs when someone estimates the likelihood of an event based on how easily they can remember examples of it happening.",
    example: "I think shark attacks are more common than they are because I just watched a documentary about them. Recent exposure makes the risk seem greater than it statistically is.",
    category: "weak_inference"
  },
  {
    id: 65,
    name: "Cherry Picking (Selection Bias)",
    definition: "This fallacy involves selecting only the evidence that supports one's position while ignoring evidence that contradicts it.",
    example: "This vitamin supplement works great! Just look at these five positive testimonials. (Ignoring the 50 negative reviews and the scientific studies showing no benefit.)",
    category: "weak_inference"
  },
  {
    id: 66,
    name: "False Precision",
    definition: "This fallacy gives a number or measurement with greater precision than is justified by the evidence or methodology used.",
    example: "Our new sales strategy will increase profits by exactly 23.7%. Such precision is likely unwarranted given the complexity and uncertainty of business projections.",
    category: "weak_inference"
  },
  {
    id: 67,
    name: "Prosecutor's Fallacy",
    definition: "This fallacy confuses the probability that evidence would exist if someone were innocent with the probability that someone is innocent given the evidence.",
    example: "The probability of this DNA match occurring by chance is one in a million, so there's only a one in a million chance the defendant is innocent. This ignores the base rate of the crime and other factors.",
    category: "weak_inference"
  },
  {
    id: 68,
    name: "Ecological Fallacy",
    definition: "This fallacy makes inferences about individuals based on aggregate data for the group they belong to.",
    example: "Since this neighborhood has a high average income, everyone who lives there must be wealthy. Group statistics don't necessarily apply to all individuals within the group.",
    category: "weak_inference"
  },
  {
    id: 69,
    name: "Exception that Proves the Rule",
    definition: "This fallacy concludes that an exception to a rule proves the rule itself, when in fact an exception suggests the rule may be wrong or incomplete.",
    example: "The sign says 'No parking on Sundays.' This proves that parking is allowed on all other days. The exception doesn't prove the rule; it may just be an incomplete list of restrictions.",
    category: "weak_inference"
  },
  {
    id: 70,
    name: "Incomplete Comparison",
    definition: "This fallacy presents a comparison that sounds meaningful but lacks essential information to evaluate it properly.",
    example: "Our product gives you 50% more value! (Compared to what? Their previous product? Competitors? The claim is meaningless without a point of comparison.)",
    category: "weak_inference"
  },
  {
    id: 71,
    name: "False Cause",
    definition: "This fallacy assumes that because two events are related, one must be the cause of the other.",
    example: "Crime rates are higher in areas with more ice cream shops, so ice cream shops cause crime. This ignores that both might be related to a third factor like population density.",
    category: "weak_inference"
  },
  {
    id: 72,
    name: "Begging the Question (Circular Reasoning)",
    definition: "This fallacy occurs when the conclusion of an argument is used as a premise of that same argument. The argument goes in a circle.",
    example: "The Bible is true because it says so in the Bible, and we know the Bible is true. This uses the conclusion (Bible's truth) as evidence for itself.",
    category: "presumption"
  },
  {
    id: 73,
    name: "Loaded Question",
    definition: "This fallacy presents a question that contains a controversial or unjustified assumption, forcing the respondent to accept the assumption to answer.",
    example: "Have you stopped beating your wife? This question assumes the person was beating their wife, which may not be true. Either yes or no answer implicitly accepts this assumption.",
    category: "presumption"
  },
  {
    id: 74,
    name: "Complex Question (Fallacy of Many Questions)",
    definition: "This fallacy occurs when someone asks a question that presupposes the answer to a prior question that has not been answered.",
    example: "What should we do about the epidemic of violence caused by video games? This presupposes that video games cause an epidemic of violence, which hasn't been established.",
    category: "presumption"
  },
  {
    id: 75,
    name: "False Dilemma (False Dichotomy)",
    definition: "This fallacy presents only two alternatives when more possibilities exist. It forces a choice between two options while ignoring other potential solutions.",
    example: "Either we build this nuclear power plant, or we'll have rolling blackouts all summer. This ignores alternatives like renewable energy, conservation, or other power sources.",
    category: "presumption"
  },
  {
    id: 76,
    name: "Excluded Middle",
    definition: "This fallacy assumes that there are only two sides to an issue and that if one side is wrong, the other must be right.",
    example: "If you're not part of the solution, you're part of the problem. This ignores neutral parties, people working on different solutions, or those who see the issue differently.",
    category: "presumption"
  },
  {
    id: 77,
    name: "False Choice",
    definition: "Similar to false dilemma, this fallacy limits consideration to fewer options than actually exist.",
    example: "We can either cut education funding or raise taxes. There's no other choice. This ignores options like reallocating existing funds, finding efficiencies, or alternative revenue sources.",
    category: "presumption"
  },
  {
    id: 78,
    name: "Bifurcation",
    definition: "This fallacy presents a situation as having only two mutually exclusive possibilities when other possibilities exist.",
    example: "You're either with us or against us. This ignores neutrality, partial agreement, or alternative approaches to the same goal.",
    category: "presumption"
  },
  {
    id: 79,
    name: "Assumption of the Opposite",
    definition: "This fallacy assumes that the opposite of a false statement must be true, when in fact there may be multiple alternatives.",
    example: "Since this diet doesn't work, eating whatever you want must be the right approach. This ignores that there might be other effective diets or moderate approaches.",
    category: "presumption"
  },
  {
    id: 80,
    name: "False Premise",
    definition: "This fallacy bases an argument on a premise that is factually incorrect.",
    example: "Since the sun revolves around the Earth, we should adjust our agriculture to account for the sun's orbit. The premise (sun revolving around Earth) is factually wrong.",
    category: "presumption"
  },
  {
    id: 81,
    name: "Suppressed Correlative",
    definition: "This fallacy attempts to redefine a correlative term so that one alternative is made impossible.",
    example: "A pessimist says: 'What you call happiness is really just brief moments of less misery.' This redefines happiness out of existence.",
    category: "presumption"
  },
  {
    id: 82,
    name: "Accident Fallacy (Hasty Application)",
    definition: "This fallacy applies a general rule to a particular situation when the situation is actually an exception to the rule.",
    example: "Since birds can fly, penguins should be able to fly. This applies the general rule about birds to penguins, which are an exception.",
    category: "presumption"
  },
  {
    id: 83,
    name: "Converse Accident (Reverse Accident)",
    definition: "This fallacy argues from a special case to a general rule. It takes an exception and treats it as if it were the rule.",
    example: "My grandmother smoked her whole life and lived to 95, so smoking must not be harmful. This takes an exceptional case and treats it as representative.",
    category: "presumption"
  },
  {
    id: 84,
    name: "No True Scotsman",
    definition: "This fallacy occurs when someone redefines a group after being presented with a counterexample, in order to exclude the counterexample.",
    example: "No true Christian would commit murder. When shown a Christian who committed murder: Well, no *true* Christian would do that. This changes the definition to exclude counterevidence.",
    category: "presumption"
  },
  {
    id: 85,
    name: "Begging the Question (Petitio Principii)",
    definition: "A more formal version of circular reasoning where the premise assumes the truth of the conclusion.",
    example: "Paranormal activity is real because I've experienced supernatural events. The premise (supernatural events) assumes the conclusion (paranormal activity exists).",
    category: "presumption"
  },
  {
    id: 86,
    name: "Questionable Premise",
    definition: "This fallacy bases an argument on a premise that is questionable or controversial without justifying why that premise should be accepted.",
    example: "Since all politicians are corrupt, we should eliminate government entirely. The premise that all politicians are corrupt is highly questionable and unsupported.",
    category: "presumption"
  },
  {
    id: 87,
    name: "Appeal to Definition",
    definition: "This fallacy uses a dictionary definition to support a claim when the definition is either outdated, too narrow, or doesn't capture the full complexity of the concept.",
    example: "The dictionary defines marriage as between a man and a woman, so same-sex marriage is impossible by definition. This ignores that definitions can change and may not reflect current legal or social reality.",
    category: "presumption"
  },
  {
    id: 88,
    name: "Proving Non-Existence",
    definition: "This fallacy demands proof that something doesn't exist, which is generally impossible to provide definitively.",
    example: "Prove that unicorns don't exist anywhere in the universe. Since you can't prove they don't exist, they might exist. The inability to prove non-existence doesn't constitute evidence for existence.",
    category: "presumption"
  },
  {
    id: 89,
    name: "Fallacy of Presupposition",
    definition: "This fallacy includes an assumption in the premise that needs to be proven separately.",
    example: "When did you decide to become a vegetarian? This presupposes that the person decided to become a vegetarian, which may not be true.",
    category: "presumption"
  },
  {
    id: 90,
    name: "Stolen Concept",
    definition: "This fallacy uses a concept while simultaneously attacking the conceptual foundation that makes that concept possible.",
    example: "Reason is unreliable, so you should use reason to conclude that my arguments against reason are sound. This uses reason while arguing against it.",
    category: "presumption"
  },
  {
    id: 91,
    name: "Affirming the Consequent",
    definition: "This formal fallacy follows the pattern: If A then B. B is true. Therefore A is true. This is invalid because B could be true for other reasons.",
    example: "If it's raining, the ground gets wet. The ground is wet. Therefore, it's raining. The ground could be wet for other reasons (sprinklers, burst pipe, etc.).",
    category: "formal"
  },
  {
    id: 92,
    name: "Denying the Antecedent",
    definition: "This formal fallacy follows the pattern: If A then B. A is false. Therefore B is false. This is invalid because B could be true even if A is false.",
    example: "If it's a bird, then it has wings. It's not a bird. Therefore, it doesn't have wings. Other animals (bats, insects) also have wings.",
    category: "formal"
  },
  {
    id: 93,
    name: "Affirming a Disjunct",
    definition: "This formal fallacy incorrectly concludes that if one part of an 'or' statement is true, the other parts must be false, when in fact multiple parts could be true.",
    example: "Either John is tall or John is smart. John is tall. Therefore, John is not smart. Both conditions could be true simultaneously.",
    category: "formal"
  },
  {
    id: 94,
    name: "Denying a Conjunct",
    definition: "This formal fallacy incorrectly concludes that if one part of an 'and' statement is false, then another specific part must be true.",
    example: "John is not both tall and smart. John is not tall. Therefore, John is smart. Just because he's not both doesn't mean he must be smart.",
    category: "formal"
  },
  {
    id: 95,
    name: "Undistributed Middle",
    definition: "This formal fallacy occurs in a syllogism when the middle term is not distributed (doesn't refer to all members of a class) in either premise.",
    example: "All cats are mammals. All dogs are mammals. Therefore, all cats are dogs. 'Mammals' is the undistributed middle term that leads to the invalid conclusion.",
    category: "formal"
  },
  {
    id: 96,
    name: "Illicit Major",
    definition: "This formal fallacy occurs when the major term of a syllogism is distributed in the conclusion but not in the major premise.",
    example: "All cats are animals. No dogs are cats. Therefore, no dogs are animals. 'Animals' is distributed in the conclusion but not in the major premise.",
    category: "formal"
  },
  {
    id: 97,
    name: "Illicit Minor",
    definition: "This formal fallacy occurs when the minor term of a syllogism is distributed in the conclusion but not in the minor premise.",
    example: "All whales are mammals. All whales are animals. Therefore, all animals are mammals. 'Animals' is distributed in the conclusion but not properly in the premises.",
    category: "formal"
  },
  {
    id: 98,
    name: "Exclusive Premises",
    definition: "This formal fallacy occurs when both premises of a syllogism are negative, making it impossible to draw a positive conclusion.",
    example: "No cats are dogs. No dogs are birds. Therefore... (no valid conclusion can be drawn from two negative premises about the relationship between cats and birds).",
    category: "formal"
  },
  {
    id: 99,
    name: "Existential Fallacy",
    definition: "This formal fallacy draws a particular conclusion from universal premises when the existence of the subject is not established.",
    example: "All unicorns are magical. All magical beings are powerful. Therefore, some unicorns are powerful. This assumes unicorns exist, which hasn't been established.",
    category: "formal"
  },
  {
    id: 100,
    name: "Four Terms",
    definition: "This formal fallacy occurs when a syllogism appears to have three terms but actually has four due to ambiguous language.",
    example: "Nothing is better than eternal happiness. A sandwich is better than nothing. Therefore, a sandwich is better than eternal happiness. 'Nothing' means different things in each premise.",
    category: "formal"
  },
  {
    id: 101,
    name: "Modal Fallacy",
    definition: "This fallacy confuses what is necessarily true with what is possibly true, or vice versa.",
    example: "It's possible that everyone could be wealthy. Therefore, it's possible that everyone is wealthy. This confuses a potential future state with a current possibility.",
    category: "formal"
  },
  {
    id: 102,
    name: "Quantifier Shift",
    definition: "This fallacy improperly switches the order of quantifiers (all, some, every) in logical statements, changing their meaning.",
    example: "Every person has a mother becomes Some mother has every person. The shift in quantifier order creates a logical error.",
    category: "formal"
  },
  {
    id: 103,
    name: "Masked Man Fallacy",
    definition: "This fallacy substitutes identical objects where identical names are not identical (identity vs. description confusion).",
    example: "I know who my father is. The masked man is my father. Therefore, I know who the masked man is. Knowing someone's identity doesn't mean recognizing them in all contexts.",
    category: "formal"
  },
  {
    id: 104,
    name: "Scope Fallacy",
    definition: "This fallacy occurs when the scope of a quantifier or logical operator is misinterpreted.",
    example: "Everyone believes something becomes Something everyone believes. The scope of 'everyone' and 'something' changes the meaning significantly.",
    category: "formal"
  },
  {
    id: 105,
    name: "Commutation of Conditionals",
    definition: "This fallacy incorrectly assumes that 'if A then B' is the same as 'if B then A.'",
    example: "If someone is a bachelor, then they are unmarried becomes If someone is unmarried, then they are a bachelor. The second doesn't follow from the first (unmarried women aren't bachelors).",
    category: "formal"
  },
  {
    id: 106,
    name: "If-by-Whiskey",
    definition: "This fallacy gives an evasive answer that appears to address the question but actually depends on the unstated assumptions of the questioner.",
    example: "If by whiskey you mean the devil's brew that destroys families, then I'm against it. If you mean the drink that brings people together, then I'm for it. This avoids taking a clear position.",
    category: "conditional"
  },
  {
    id: 107,
    name: "Slothful Induction",
    definition: "This fallacy occurs when someone ignores evidence and continues to believe their original conclusion despite overwhelming evidence against it.",
    example: "Despite 99 studies showing smoking causes cancer, the person insists the 100th study might prove it doesn't. This unreasonably resists strong evidence.",
    category: "conditional"
  },
  {
    id: 108,
    name: "Argument from Silence",
    definition: "This fallacy concludes that because there is no mention of something in available records, it didn't happen or doesn't exist.",
    example: "There's no mention of Jesus in contemporary Roman records, so he didn't exist. Absence of evidence isn't necessarily evidence of absence, especially in incomplete historical records.",
    category: "conditional"
  },
  {
    id: 109,
    name: "Argument from Incredulity (Personal Incredulity)",
    definition: "This fallacy rejects a proposition because it seems unbelievable or difficult to understand.",
    example: "I can't understand how evolution could produce something as complex as the human eye, therefore evolution must be false. Personal inability to understand doesn't make something untrue.",
    category: "conditional"
  },
  {
    id: 110,
    name: "Divine Fallacy (Argument from Incredulity)",
    definition: "This fallacy attributes phenomena that are not fully understood to supernatural causes.",
    example: "Scientists can't fully explain consciousness, therefore it must be evidence of a soul or divine intervention. Lack of complete understanding doesn't justify supernatural explanations.",
    category: "conditional"
  },
  {
    id: 111,
    name: "Moral Fallacy",
    definition: "This fallacy concludes that because something is moral or immoral, it must be true or false respectively.",
    example: "Believing in free will makes people more moral, therefore free will must exist. The moral utility of a belief doesn't determine its truth value.",
    category: "conditional"
  },
  {
    id: 112,
    name: "Retrospective Determinism",
    definition: "This fallacy assumes that because something happened, it was inevitable or bound to happen.",
    example: "Of course that company failed; it was obvious from the beginning. This applies hindsight bias to conclude the outcome was predetermined.",
    category: "conditional"
  },
  {
    id: 113,
    name: "Historian's Fallacy",
    definition: "This fallacy occurs when someone assumes that decision-makers in the past had access to information that wasn't available to them at the time.",
    example: "The captain should have known the Titanic would hit an iceberg and changed course. This assumes knowledge of future events that wasn't available at the time.",
    category: "conditional"
  },
  {
    id: 114,
    name: "Fallacy of the Predetermined Outcome",
    definition: "This fallacy assumes that because we know the outcome of historical events, those outcomes were inevitable.",
    example: "World War II was bound to happen because of the Treaty of Versailles. This assumes historical inevitability when many factors contributed to the outcome.",
    category: "conditional"
  },
  {
    id: 115,
    name: "Ought-Is Fallacy",
    definition: "This fallacy concludes that because something ought to be a certain way, it actually is that way.",
    example: "People should be rational, therefore people are rational. This confuses normative statements (how things should be) with descriptive ones (how things are).",
    category: "conditional"
  },
  {
    id: 116,
    name: "Perfect Solution Fallacy",
    definition: "This fallacy rejects a solution because it doesn't solve all aspects of a problem, even though it would provide some improvement.",
    example: "This new safety system won't prevent all accidents, so we shouldn't implement it. This rejects partial improvement in favor of an unattainable perfect solution.",
    category: "conditional"
  },
  {
    id: 117,
    name: "Relative Privation (Appeal to Worse Problems)",
    definition: "This fallacy dismisses a problem because there are worse problems elsewhere.",
    example: "You can't complain about workplace harassment when people in other countries face war and famine. The existence of worse problems doesn't invalidate current concerns.",
    category: "conditional"
  },
  {
    id: 118,
    name: "Contextomy (Quote Mining)",
    definition: "This fallacy involves quoting someone out of context to misrepresent their position.",
    example: "The critic said the movie was 'amazing' when the full quote was 'It's amazing how bad this movie is.' Selective quoting changes the meaning completely.",
    category: "conditional"
  },
  {
    id: 119,
    name: "False Attribution",
    definition: "This fallacy involves incorrectly attributing a quote, idea, or action to someone.",
    example: "As Einstein said, 'Everyone is a genius,' when actually Einstein never said this. Misattribution undermines the credibility of the argument.",
    category: "conditional"
  },
  {
    id: 120,
    name: "Kettle Logic",
    definition: "This fallacy uses multiple inconsistent arguments to defend a single point, where the arguments contradict each other.",
    example: "I never borrowed your kettle, and when I returned it, it already had that dent, and besides, you can't prove the dent wasn't there originally. The defenses are mutually contradictory.",
    category: "conditional"
  },
  {
    id: 121,
    name: "Moving the Goalposts (Raising the Bar)",
    definition: "This fallacy changes the criteria for accepting evidence after evidence has been provided that meets the original criteria.",
    example: "Show me proof of climate change. (After evidence is provided) Well, that's not enough proof. Show me more. The standard for proof keeps changing to avoid accepting the evidence.",
    category: "conditional"
  },
  {
    id: 122,
    name: "Special Pleading",
    definition: "This fallacy applies different standards to similar situations without justification, often to support one's own position.",
    example: "My late arrival was due to unexpected traffic, but when you're late, it's because you're irresponsible. This applies different standards to similar situations without justification.",
    category: "conditional"
  },
  {
    id: 123,
    name: "Continuum Fallacy (Fallacy of the Beard)",
    definition: "This fallacy rejects a claim because it's difficult to define exact boundaries between concepts.",
    example: "At what point does a person become tall? Since there's no exact height, the concept of tallness is meaningless. Difficulty in drawing precise lines doesn't negate useful categories.",
    category: "conditional"
  },
  {
    id: 124,
    name: "Fallacy of Misplaced Concreteness",
    definition: "This fallacy treats abstract concepts as if they were concrete physical things.",
    example: "Where exactly is the mind located in the brain? This treats the mind as if it were a physical object that must have a specific location rather than a process or pattern.",
    category: "conditional"
  },
  {
    id: 125,
    name: "Reification Fallacy",
    definition: "This fallacy treats an abstract concept as if it were a concrete thing.",
    example: "Justice demands that we punish criminals, as if justice were a person making demands rather than an abstract principle humans apply.",
    category: "conditional"
  },
  {
    id: 126,
    name: "Anthropomorphic Fallacy",
    definition: "This fallacy attributes human characteristics to non-human entities.",
    example: "Nature abhors a vacuum, attributing human emotions (abhorrence) to natural processes that simply follow physical laws.",
    category: "conditional"
  },
  {
    id: 127,
    name: "Pathetic Fallacy",
    definition: "This fallacy attributes human emotions to inanimate objects or natural phenomena.",
    example: "The angry storm destroyed the town, as if storms could feel anger rather than being the result of atmospheric pressure differences.",
    category: "conditional"
  },
  {
    id: 128,
    name: "Intentional Fallacy",
    definition: "This fallacy assumes that the intended meaning of a text or action is the only valid interpretation.",
    example: "The author intended this poem to mean X, so any other interpretation is wrong. This ignores that texts can have meaning beyond authorial intent.",
    category: "conditional"
  },
  {
    id: 129,
    name: "Affective Fallacy",
    definition: "This fallacy judges the value or meaning of something based solely on its emotional effect on the observer.",
    example: "This poem made me cry, so it must be great literature. Emotional response, while important, isn't the only measure of artistic merit.",
    category: "conditional"
  },
  {
    id: 130,
    name: "Genetic Fallacy (Origin Fallacy)",
    definition: "This fallacy evaluates something based on its origins rather than its current merit or validity.",
    example: "That theory was developed by the Nazis, so it must be wrong. Even if the origins are problematic, the theory should be evaluated on its own merits.",
    category: "conditional"
  },
  {
    id: 131,
    name: "Chronological Snobbery",
    definition: "This fallacy assumes that newer ideas are automatically better than older ones, or vice versa.",
    example: "That philosopher lived 2000 years ago, so his ideas must be outdated and wrong. Age alone doesn't determine the validity of ideas.",
    category: "conditional"
  },
  {
    id: 132,
    name: "Appeal to Antiquity",
    definition: "This fallacy assumes that older ideas are automatically better than newer ones.",
    example: "Traditional medicine has been used for thousands of years, so it must be better than modern medicine. Longevity of use doesn't guarantee effectiveness.",
    category: "conditional"
  },
  {
    id: 133,
    name: "Bandwagon Effect",
    definition: "This fallacy assumes something is true or good because it's popular or widely accepted.",
    example: "Everyone's buying this stock, so it must be a good investment. Popularity doesn't guarantee quality or correctness.",
    category: "conditional"
  },
  {
    id: 134,
    name: "Argument from Repetition",
    definition: "This fallacy assumes that repeating a claim multiple times makes it more likely to be true.",
    example: "As I said before, and I'll say again, this product is the best on the market. Repetition doesn't constitute evidence.",
    category: "conditional"
  },
  {
    id: 135,
    name: "Big Lie Technique",
    definition: "This fallacy involves repeating a falsehood so often and confidently that people begin to believe it.",
    example: "Constantly claiming that a clearly lost election was stolen, with no evidence, until some people believe it. Repetition and confidence don't create truth.",
    category: "conditional"
  },
  {
    id: 136,
    name: "Proof by Assertion",
    definition: "This fallacy treats an assertion as evidence of its own truth without providing actual evidence.",
    example: "Global warming is a hoax because I'm telling you it's a hoax. The assertion itself is treated as sufficient proof.",
    category: "conditional"
  },
  {
    id: 137,
    name: "Thought-Terminating Cliché",
    definition: "This fallacy uses a cliché or common saying to end discussion rather than engage with the argument.",
    example: "Boys will be boys when dismissing problematic behavior instead of addressing it. The cliché stops further analysis or discussion.",
    category: "conditional"
  },
  {
    id: 138,
    name: "Cliché Thinking",
    definition: "This fallacy relies on overused expressions or conventional wisdom instead of critical thinking.",
    example: "Money can't buy happiness, so wealthy people must be miserable. This relies on a cliché rather than examining the complex relationship between wealth and well-being.",
    category: "conditional"
  },
  {
    id: 139,
    name: "Wisdom of Repugnance",
    definition: "This fallacy assumes that if something provokes disgust or revulsion, it must be morally wrong.",
    example: "Genetic engineering feels unnatural and disgusting, so it must be immoral. Emotional reactions like disgust don't determine moral rightness.",
    category: "conditional"
  },
  {
    id: 140,
    name: "Appeal to Disgust",
    definition: "This fallacy uses disgust or revulsion as evidence against a position.",
    example: "The idea of eating insects is disgusting, so entomophagy is wrong. Cultural disgust reactions don't determine the objective value of practices.",
    category: "conditional"
  },
  {
    id: 141,
    name: "Moralistic Bias",
    definition: "This fallacy lets moral judgments interfere with factual analysis.",
    example: "Drug use is immoral, therefore studies showing medical benefits of certain drugs must be wrong. Moral views shouldn't override empirical evidence.",
    category: "conditional"
  },
  {
    id: 142,
    name: "Just-World Fallacy",
    definition: "This fallacy assumes that people get what they deserve and deserve what they get.",
    example: "If she's poor, she must have made bad choices. If he's successful, he must have worked hard. This ignores luck, systemic factors, and other variables.",
    category: "conditional"
  },
  {
    id: 143,
    name: "Fundamental Attribution Error",
    definition: "This fallacy attributes others' actions to their character while attributing one's own actions to circumstances.",
    example: "When I'm late, it's because of traffic. When you're late, it's because you're irresponsible. This applies different explanatory standards to self versus others.",
    category: "conditional"
  },
  {
    id: 144,
    name: "Self-Serving Bias",
    definition: "This fallacy interprets information in a way that serves one's own interests or self-image.",
    example: "My success is due to my hard work, but my failures are due to bad luck or unfair circumstances. This applies different standards to positive versus negative outcomes.",
    category: "conditional"
  },
  {
    id: 145,
    name: "Optimism Bias",
    definition: "This fallacy overestimates the likelihood of positive outcomes while underestimating negative ones.",
    example: "I probably won't get into an accident, so I don't need to wear a seatbelt. This underestimates personal risk based on overoptimistic thinking.",
    category: "conditional"
  },
  {
    id: 146,
    name: "Planning Fallacy",
    definition: "This fallacy underestimates the time, costs, and risks of future actions while overestimating their benefits.",
    example: "This project will definitely be finished on time and under budget, despite a history of projects running over. This ignores past patterns and potential obstacles.",
    category: "conditional"
  },
  {
    id: 147,
    name: "Overconfidence Effect",
    definition: "This fallacy involves being more confident in one's judgments than accuracy warrants.",
    example: "I'm 95% certain this investment will pay off, when historical data shows such confidence is rarely justified. This overestimates one's predictive abilities.",
    category: "conditional"
  },
  {
    id: 148,
    name: "Dunning-Kruger Effect",
    definition: "This fallacy involves people with limited knowledge overestimating their expertise while experts underestimate theirs.",
    example: "After reading one article about climate science, someone feels qualified to debate climate experts. Limited knowledge leads to overconfidence.",
    category: "conditional"
  },
  {
    id: 149,
    name: "Impostor Syndrome Fallacy",
    definition: "This fallacy involves qualified people underestimating their abilities and attributing success to luck.",
    example: "I only got this job because I was lucky, despite having excellent qualifications. This underestimates genuine competence and achievement.",
    category: "conditional"
  },
  {
    id: 150,
    name: "Hindsight Bias (I-Knew-It-All-Along)",
    definition: "This fallacy involves believing that past events were more predictable than they actually were.",
    example: "I knew that company would fail all along, when in fact the failure was surprising and unpredictable at the time.",
    category: "conditional"
  },
  {
    id: 151,
    name: "Anchoring Bias",
    definition: "This fallacy involves relying too heavily on the first piece of information encountered when making decisions.",
    example: "The first house I looked at cost $500,000, so this $400,000 house seems like a great deal, even though comparable homes cost $350,000.",
    category: "conditional"
  },
  {
    id: 152,
    name: "Availability Cascade",
    definition: "This fallacy occurs when a belief becomes more plausible through repetition in public discourse.",
    example: "The more we hear about stranger danger, the more we overestimate the risk, even though children are statistically safer with strangers than with family members.",
    category: "conditional"
  },
  {
    id: 153,
    name: "Bandwagon Cascade",
    definition: "This fallacy involves beliefs becoming stronger as more people adopt them, regardless of evidence.",
    example: "As more people believe in a conspiracy theory, each new believer feels more confident that it must be true, creating a self-reinforcing cycle.",
    category: "conditional"
  },
  {
    id: 154,
    name: "Groupthink",
    definition: "This fallacy occurs when desire for harmony results in irrational or dysfunctional decision-making within a group.",
    example: "The team unanimously agreed to the plan because no one wanted to be the dissenter, even though several members had private doubts about its viability.",
    category: "conditional"
  },
  {
    id: 155,
    name: "Abilene Paradox",
    definition: "This fallacy occurs when a group collectively decides on a course of action that none of the individuals actually want.",
    example: "The family drives to Abilene for dinner even though no one actually wants to go, because each person thinks the others want to go.",
    category: "conditional"
  },
  {
    id: 156,
    name: "False Consensus Effect",
    definition: "This fallacy involves overestimating how much others agree with you.",
    example: "Most people probably think like I do about this political issue, when in fact public opinion is much more divided than the person realizes.",
    category: "conditional"
  },
  {
    id: 157,
    name: "Projection Bias",
    definition: "This fallacy involves assuming others share your current thoughts, feelings, or behaviors.",
    example: "Since I'm hungry now, I assume the grocery store will be crowded with other hungry people, when actually shopping patterns depend on many other factors.",
    category: "conditional"
  },
  {
    id: 158,
    name: "Mind Projection Fallacy",
    definition: "This fallacy involves assuming that the way you perceive the world is the way the world actually is.",
    example: "This music sounds beautiful to me, so it must be objectively beautiful, rather than recognizing that beauty is subjective and culturally influenced.",
    category: "conditional"
  },
  {
    id: 159,
    name: "Typical Mind Fallacy",
    definition: "This fallacy assumes that others experience thoughts and emotions in the same way you do.",
    example: "Everyone must have an internal monologue like I do, when in fact people's internal experiences vary significantly (some people think primarily in images, not words).",
    category: "conditional"
  },
  {
    id: 160,
    name: "Curse of Knowledge",
    definition: "This fallacy occurs when someone who knows something finds it difficult to imagine not knowing it.",
    example: "A teacher assumes students understand a concept because it seems obvious to the teacher, forgetting how difficult it was when they first learned it.",
    category: "conditional"
  },
  {
    id: 161,
    name: "Expert Blind Spot",
    definition: "This fallacy occurs when experts forget what it's like to be a beginner and struggle to teach novices effectively.",
    example: "A programming expert explains coding concepts using advanced jargon, forgetting that beginners don't know the basic terminology yet.",
    category: "conditional"
  },
  {
    id: 162,
    name: "Illusion of Transparency",
    definition: "This fallacy involves overestimating how well others can understand your thoughts and feelings.",
    example: "I thought my disappointment was obvious, but no one noticed, demonstrating that internal states are less transparent to others than we think.",
    category: "conditional"
  },
  {
    id: 163,
    name: "Spotlight Effect",
    definition: "This fallacy involves overestimating how much others notice your appearance or behavior.",
    example: "I was so embarrassed about my stained shirt, thinking everyone was staring at it, when most people probably didn't even notice.",
    category: "conditional"
  },
  {
    id: 164,
    name: "Illusion of Asymmetric Insight",
    definition: "This fallacy involves believing you understand others better than they understand you.",
    example: "I can see through their motives, but they can't see through mine, when in reality both parties likely have limited insight into each other.",
    category: "conditional"
  },
  {
    id: 165,
    name: "Naive Realism",
    definition: "This fallacy assumes that you see reality objectively while others who disagree are uninformed, irrational, or biased.",
    example: "Anyone who disagrees with my political views must be misinformed or stupid, rather than recognizing that reasonable people can interpret the same information differently.",
    category: "conditional"
  },
  {
    id: 166,
    name: "False Uniqueness Effect",
    definition: "This fallacy involves underestimating how common your positive qualities or achievements are.",
    example: "I'm probably the only one who works this hard, when in fact many people are equally dedicated but less vocal about it.",
    category: "conditional"
  },
  {
    id: 167,
    name: "Lake Wobegon Effect",
    definition: "This fallacy involves everyone thinking they're above average, which is statistically impossible.",
    example: "Most drivers think they're better than average drivers, but by definition, only half can be above average.",
    category: "conditional"
  },
  {
    id: 168,
    name: "Better-than-Average Effect",
    definition: "This fallacy involves overestimating your own abilities relative to others.",
    example: "I'm a better-than-average leader, when statistical reality shows that most people can't actually be above average.",
    category: "conditional"
  },
  {
    id: 169,
    name: "Egocentric Bias",
    definition: "This fallacy involves overweighting your own contributions to group efforts while undervaluing others' contributions.",
    example: "I did most of the work on this project, when in fact each team member probably feels they contributed the most.",
    category: "conditional"
  },
  {
    id: 170,
    name: "Self-Enhancement Bias",
    definition: "This fallacy involves viewing yourself more positively than evidence warrants.",
    example: "I'm funnier than most people, based more on self-perception than on others' actual reactions to attempts at humor.",
    category: "conditional"
  },
  {
    id: 171,
    name: "Illusory Superiority",
    definition: "This fallacy involves overestimating your positive qualities while underestimating your negative ones.",
    example: "I'm more honest than most people and less prejudiced than average, which statistically cannot be true for most people who think this.",
    category: "conditional"
  },
  {
    id: 172,
    name: "Worse-than-Average Effect",
    definition: "This fallacy involves underestimating your abilities in areas where you have limited knowledge.",
    example: "I'm probably worse at juggling than most people, when actually most people can't juggle at all, making even basic ability above average.",
    category: "conditional"
  },
  {
    id: 173,
    name: "Imposter Phenomenon",
    definition: "This fallacy involves attributing success to luck or external factors rather than acknowledging genuine competence.",
    example: "I only got promoted because I was lucky, not because I'm qualified, despite clear evidence of strong performance and relevant skills.",
    category: "conditional"
  },
  {
    id: 174,
    name: "Defensive Attribution",
    definition: "This fallacy involves attributing negative outcomes to external factors to protect self-esteem.",
    example: "I failed the test because the questions were unfair, not because I didn't study enough, even when the questions were standard and predictable.",
    category: "conditional"
  },
  {
    id: 175,
    name: "Ultimate Attribution Error",
    definition: "This fallacy involves attributing negative behaviors by out-group members to their character while attributing positive behaviors to situational factors.",
    example: "When they succeed, it's due to luck or unfair advantages. When they fail, it's because of their personal flaws. This applies different standards based on group membership.",
    category: "conditional"
  },
  {
    id: 176,
    name: "System Justification",
    definition: "This fallacy involves defending and justifying the status quo even when it works against your own interests.",
    example: "The economic system must be fair because it exists, even when you're personally disadvantaged by it. This preserves cognitive comfort by avoiding challenging systemic critique.",
    category: "conditional"
  }
];

// Translation interfaces
export interface FallacyTranslation {
  name: string;
  definition: string;
  example: string;
}

export interface FallacyTranslations {
  [key: string]: FallacyTranslation;
}

export interface FallacyLanguageTranslations {
  [language: string]: FallacyTranslations;
}

// Import translations
import { logicalFallaciesDE } from './logicalFallacies.de';
import { logicalFallaciesES } from './logicalFallacies.es';
import { logicalFallaciesFR } from './logicalFallacies.fr';

export const logicalFallaciesTranslations: FallacyLanguageTranslations = {
  de: logicalFallaciesDE,
  es: logicalFallaciesES,
  fr: logicalFallaciesFR
};