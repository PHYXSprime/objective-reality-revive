export interface CognitiveBias {
  name: string;
  definition: string;
  example: string;
  category: 'too_much_information' | 'not_enough_meaning' | 'need_to_act_fast' | 'what_to_remember';
}

export const cognitiveBiases: CognitiveBias[] = [
  {
    name: "Agenticity",
    definition: "The tendency to believe that the world is controlled by powerful, invisible agents.",
    example: "Believing that a string of bad luck is the work of a curse or a malevolent entity, rather than random chance.",
    category: "not_enough_meaning"
  },
  {
    name: "Ambiguity Effect",
    definition: "The tendency to avoid options for which missing information makes the probability seem 'unknown.'",
    example: "When choosing an investment, preferring a stock with a known, stable history over a new stock with unknown potential, even if the new stock could have a higher return.",
    category: "not_enough_meaning"
  },
  {
    name: "Anchoring Bias",
    definition: "The tendency to rely too heavily on the first piece of information offered (the 'anchor') when making decisions.",
    example: "A used car salesman offers a high price to start negotiations; the final price seems more reasonable by comparison, even if it's still higher than the car's actual value.",
    category: "too_much_information"
  },
  {
    name: "Anecdotal Fallacy",
    definition: "Using a personal experience or an isolated example instead of a sound argument or compelling evidence.",
    example: "'My grandfather smoked a pack a day and lived to be 90, so smoking isn't that bad for you.'",
    category: "not_enough_meaning"
  },
  {
    name: "Anthropomorphism",
    definition: "The tendency to attribute human traits, emotions, or intentions to non-human entities.",
    example: "Believing your car is 'angry' at you when it won't start, or thinking your pet dog feels 'guilty' after misbehaving.",
    category: "not_enough_meaning"
  },
  {
    name: "Attentional Bias",
    definition: "Our perception is disproportionately affected by whatever is currently occupying our attention, leading us to neglect other relevant information.",
    example: "A person trying to quit smoking will notice other people smoking everywhere, making it much harder to ignore the craving.",
    category: "too_much_information"
  },
  {
    name: "Authority Bias",
    definition: "The tendency to attribute greater accuracy to the opinion of an authority figure and be more influenced by that opinion.",
    example: "Believing a celebrity's endorsement of a medical product, even if they have no medical expertise.",
    category: "not_enough_meaning"
  },
  {
    name: "Automation Bias",
    definition: "The tendency to depend excessively on automated systems which can lead to erroneous automated information overriding correct decisions.",
    example: "Following a GPS navigation system into a dangerous or incorrect location, trusting it over one's own common sense.",
    category: "not_enough_meaning"
  },
  {
    name: "Availability Cascade",
    definition: "A self-reinforcing process in which a collective belief gains more and more plausibility through its increasing repetition in public discourse.",
    example: "A minor news story about a rare disease can snowball into widespread panic as more and more people talk about it, making the threat seem more significant than it is.",
    category: "too_much_information"
  },
  {
    name: "Availability Heuristic",
    definition: "We overestimate the importance of information that is easy to recall. We are biased by vivid, recent, or emotionally charged events.",
    example: "After seeing several news reports about shark attacks, you start to believe they are much more common than they actually are, even though car accidents are statistically far more dangerous.",
    category: "too_much_information"
  },
  {
    name: "Backfire Effect",
    definition: "The reaction to disconfirming evidence by strengthening one's previous beliefs.",
    example: "When presented with scientific evidence that contradicts their political beliefs, a person might become even more convinced that their original belief is correct.",
    category: "need_to_act_fast"
  },
  {
    name: "Bandwagon Effect",
    definition: "The tendency to do or believe things because many other people do or believe the same.",
    example: "Investing in a 'meme stock' simply because it is popular and many others are doing so, without researching its fundamental value.",
    category: "not_enough_meaning"
  },
  {
    name: "Base Rate Fallacy",
    definition: "We tend to ignore general statistical information (base rates) in favor of specific, descriptive information (anecdotes).",
    example: "You read a vivid story about a person who won the lottery, so you buy a ticket, ignoring the astronomical odds against winning (the base rate).",
    category: "too_much_information"
  },
  {
    name: "Belief Bias",
    definition: "The tendency to judge the strength of arguments based on the plausibility of their conclusion, rather than how strongly they support that conclusion.",
    example: "Accepting a poorly reasoned argument that 'All flowers need light, and roses need light, so roses are flowers' because the conclusion is obviously true, even though the logic is flawed.",
    category: "not_enough_meaning"
  },
  {
    name: "Ben Franklin Effect",
    definition: "A person who has performed a favor for someone is more likely to do another favor for that person than they would be if they had received a favor from that person.",
    example: "If you want someone to like you, ask them to do a small favor for you. Their brain will rationalize that they must like you, otherwise they wouldn't have helped.",
    category: "need_to_act_fast"
  },
  {
    name: "Berkson's Paradox",
    definition: "The tendency to misinterpret statistical experiments involving conditional probabilities.",
    example: "A false observation that two desirable traits are negatively correlated. For example, in a hospital population, you might observe that patients with disease A are less likely to have disease B, leading to a false conclusion about the diseases' relationship in the general population.",
    category: "not_enough_meaning"
  },
  {
    name: "Bias Blind Spot",
    definition: "The tendency to see oneself as less biased than other people, or to be able to identify more cognitive biases in others than in oneself.",
    example: "Believing that you are objective and rational in your political views, while seeing supporters of the opposing party as being completely biased and illogical.",
    category: "not_enough_meaning"
  },
  {
    name: "Bizarreness Effect",
    definition: "Bizarre, unusual, or surprising information is better remembered than common and expected information.",
    example: "In a list of words, you are more likely to remember 'platypus' and 'zeppelin' than 'chair' and 'table'.",
    category: "too_much_information"
  },
  {
    name: "Choice-Supportive Bias",
    definition: "The tendency to remember one's choices as better than they actually were.",
    example: "When recalling a past decision, like choosing a university, you are more likely to remember the positive aspects of your choice and the negative aspects of the alternatives.",
    category: "too_much_information"
  },
  {
    name: "Clustering Illusion",
    definition: "The tendency to see patterns in random events. It is central to the gambler's fallacy.",
    example: "Seeing a 'hot streak' in a basketball player who has made several shots in a row, even though each shot is an independent event.",
    category: "not_enough_meaning"
  },
  {
    name: "Compassion Fade",
    definition: "The tendency to be less moved by a large number of people suffering than by a single identifiable person.",
    example: "Donating a large sum to help a single child whose story you saw on the news, but being less willing to donate to a fund that would help thousands of anonymous children.",
    category: "too_much_information"
  },
  {
    name: "Confirmation Bias",
    definition: "The tendency to search for, interpret, favor, and recall information in a way that confirms or supports one's prior beliefs or values.",
    example: "A person who believes a certain political party is corrupt will primarily consume news from sources that report on that party's scandals, while ignoring positive news.",
    category: "too_much_information"
  },
  {
    name: "Congruence Bias",
    definition: "The tendency to test hypotheses exclusively through direct testing, instead of testing possible alternative hypotheses.",
    example: "If you believe a certain type of pen is the best, you might only test it on paper where you know it performs well, rather than trying it on different surfaces where it might fail.",
    category: "too_much_information"
  },
  {
    name: "Conjunction Fallacy",
    definition: "The tendency to assume that specific conditions are more probable than a single general one.",
    example: "Believing it's more likely that a woman is a 'feminist bank teller' than just a 'bank teller,' even though the first category is a subset of the second.",
    category: "not_enough_meaning"
  },
  {
    name: "Conservatism Bias",
    definition: "The tendency to revise one's belief insufficiently when presented with new evidence.",
    example: "An investor holds on to a stock that is performing poorly, believing their initial positive assessment is still valid despite mounting negative news.",
    category: "too_much_information"
  },
  {
    name: "Context Effect",
    definition: "Our cognition and memory are influenced by the context in which we receive information. The same stimulus can be interpreted differently depending on the surrounding cues.",
    example: "A person might rate a wine as more enjoyable when served in a fancy restaurant with elegant music than if they drank the exact same wine from a plastic cup at a picnic.",
    category: "too_much_information"
  },
  {
    name: "Contrast Effect",
    definition: "The enhancement or diminishment of a perception, cognition or related performance as a result of successive or simultaneous exposure to a stimulus of lesser or greater value in the same dimension.",
    example: "A mediocre presentation will seem much better if it follows a terrible one, and much worse if it follows an excellent one.",
    category: "too_much_information"
  },
  {
    name: "Courtesy Bias",
    definition: "The tendency to give an opinion that is more socially correct than one's true opinion, so as to avoid offending anyone.",
    example: "Telling a friend you love their new haircut, even if you secretly think it's unflattering.",
    category: "need_to_act_fast"
  },
  {
    name: "Cryptomnesia",
    definition: "A memory bias whereby a person may falsely recall generating a thought, idea, song, or joke, not deliberately engaging in plagiarism but rather experiencing a memory as if it were a new inspiration.",
    example: "A musician might compose a melody that they believe is original, only to discover later that it is very similar to a song they heard years ago.",
    category: "what_to_remember"
  },
  {
    name: "Cue-Dependent Forgetting",
    definition: "The inability to recall information without the specific cues that were present when the memory was formed.",
    example: "You walk into a room to get something, but forget what it was. When you return to your original room, the context jogs your memory and you remember.",
    category: "too_much_information"
  },
  {
    name: "Curse of Knowledge",
    definition: "When better-informed people find it extremely difficult to think about problems from the perspective of lesser-informed people.",
    example: "An expert engineer using technical jargon when explaining a concept to a beginner, assuming they have the same background knowledge.",
    category: "not_enough_meaning"
  },
  {
    name: "Declinism",
    definition: "The belief that a society or institution is tending towards decline. Predominantly, it is the tendency to view the past in a more favorable light and the future in a more negative light.",
    example: "Insisting that music and movies were 'so much better' in the past and that contemporary culture is a sign of societal decay.",
    category: "what_to_remember"
  },
  {
    name: "Decoy Effect",
    definition: "The phenomenon whereby consumers will tend to have a specific change in preference between two options when also presented with a third option that is asymmetrically dominated.",
    example: "A movie theater offers a small popcorn for $3 and a large for $7. Most people buy the small. When a medium option is introduced for $6.50, most people now buy the large because it seems like a much better deal.",
    category: "need_to_act_fast"
  },
  {
    name: "Default Effect",
    definition: "When given a choice between several options, the tendency to favor the default one.",
    example: "Most people stick with the default settings on their phone, even if customizing them would be beneficial.",
    category: "need_to_act_fast"
  },
  {
    name: "Denomination Effect",
    definition: "The tendency to spend more money when it is denominated in small amounts rather than large amounts.",
    example: "You are more likely to spend four $5 bills than a single $20 bill.",
    category: "need_to_act_fast"
  },
  {
    name: "Disposition Effect",
    definition: "The tendency to sell assets that have increased in value, while keeping assets that have dropped in value.",
    example: "An investor sells a stock that has made a 20% gain to 'lock in profits' but holds onto a stock that has lost 30%, hoping it will 'come back.'",
    category: "need_to_act_fast"
  },
  {
    name: "Distinction Bias",
    definition: "The tendency to view two options as more dissimilar when evaluating them simultaneously than when evaluating them separately.",
    example: "When choosing between two TVs in a store, you might focus on tiny, insignificant differences in specs. At home, you would likely not notice any difference between them.",
    category: "too_much_information"
  },
  {
    name: "Dunning–Kruger Effect",
    definition: "The tendency for unskilled individuals to overestimate their own ability and the tendency for experts to underestimate their own ability.",
    example: "A person who has just started learning a new language might believe they are nearly fluent, while a true expert is acutely aware of their own limitations.",
    category: "need_to_act_fast"
  },
  {
    name: "Duration Neglect",
    definition: "The neglect of the duration of an event in determining its value.",
    example: "Remembering a long, pleasant vacation based on its peak moments and how it ended, rather than its overall length.",
    category: "what_to_remember"
  },
  {
    name: "Egocentric Bias",
    definition: "The tendency to rely too heavily on one's own perspective and/or have a higher opinion of oneself than reality.",
    example: "Overestimating how much your friends agree with your political opinions, or taking more credit for a group project's success than is objectively warranted.",
    category: "what_to_remember"
  },
  {
    name: "Empathy Gap",
    definition: "We underestimate the influence of visceral drives on our own attitudes, preferences, and behaviors. It's hard to imagine how we would feel in a different emotional or physiological state.",
    example: "When you are not hungry, it's easy to decide you will eat a healthy salad for dinner. When dinner time arrives and you are ravenous, your craving for a greasy burger is much stronger than you anticipated.",
    category: "too_much_information"
  },
  {
    name: "Endowment Effect",
    definition: "The tendency for people to demand much more to give up an object than they would be willing to pay to acquire it.",
    example: "Valuing a simple coffee mug you received for free at $10, but being unwilling to pay more than $3 for the exact same mug in a store.",
    category: "need_to_act_fast"
  },
  {
    name: "Essentialism",
    definition: "The belief that things have a set of characteristics which make them what they are, and that the task of science and philosophy is their discovery and expression.",
    example: "The belief that there is an 'essence' of being male or female that is fixed and cannot be changed.",
    category: "not_enough_meaning"
  },
  {
    name: "Exaggerated Expectation",
    definition: "The tendency to believe that a future event will be more extreme than it actually turns out to be.",
    example: "Believing that winning the lottery will solve all of life's problems and bring eternal happiness.",
    category: "not_enough_meaning"
  },
  {
    name: "Experimenter's Bias (Observer-Expectancy Effect)",
    definition: "A form of reactivity in which a researcher's cognitive bias causes them to subconsciously influence the participants of an experiment.",
    example: "A teacher who expects a student to perform well may unintentionally give them more encouragement and better feedback, leading to better performance.",
    category: "too_much_information"
  },
  {
    name: "Extrinsic Incentives Bias",
    definition: "The tendency to attribute other people's motivations more to extrinsic factors (like job rewards) and our own motivations more to intrinsic factors (like learning and enjoyment).",
    example: "Believing your colleague only works hard for the paycheck, while you believe you work hard because you are passionate about the job.",
    category: "not_enough_meaning"
  },
  {
    name: "False Consensus Effect",
    definition: "The tendency for people to overestimate the degree to which others agree with them.",
    example: "Being shocked to find out that a political candidate you support has lost the election, because it felt like 'everyone' you knew was voting for them.",
    category: "not_enough_meaning"
  },
  {
    name: "False Memory",
    definition: "A psychological phenomenon where a person recalls something that did not happen or recalls it differently from the way it actually happened.",
    example: "Many people have a false memory of seeing Bugs Bunny at Disneyland, even though Bugs Bunny is a Warner Bros. character.",
    category: "what_to_remember"
  },
  {
    name: "Focusing Effect",
    definition: "The tendency to place too much importance on one aspect of an event, causing an error in accurately predicting the utility of a future outcome.",
    example: "People often believe that living in California would make them much happier, focusing on the good weather while ignoring other factors like traffic and cost of living.",
    category: "too_much_information"
  },
  {
    name: "Forer Effect (Barnum Effect)",
    definition: "The observation that individuals will give high accuracy ratings to descriptions of their personality that supposedly are tailored specifically for them, but are in fact vague and general enough to apply to a wide range of people.",
    example: "People readily believe in vague horoscope predictions because they can easily find examples from their own lives that seem to confirm the statements.",
    category: "not_enough_meaning"
  },
  {
    name: "Framing Effect",
    definition: "Drawing different conclusions from the same information, depending on how that information is presented.",
    example: "A product advertised as '90% fat-free' is more appealing than one described as '10% fat,' even though they are the same.",
    category: "need_to_act_fast"
  },
  {
    name: "Frequency Illusion (Baader-Meinhof Phenomenon)",
    definition: "After noticing something for the first time, there is a tendency to notice it more often, leading one to believe that it has an increased frequency of occurrence.",
    example: "You learn a new word, and then you suddenly seem to see or hear that word everywhere.",
    category: "too_much_information"
  },
  {
    name: "Functional Fixedness",
    definition: "A cognitive bias that limits a person to using an object only in the way it is traditionally used.",
    example: "Needing a hammer but not realizing you could use a heavy wrench to drive in a nail.",
    category: "not_enough_meaning"
  },
  {
    name: "Fundamental Attribution Error",
    definition: "The tendency for people to under-emphasize situational explanations for an individual's observed behavior while over-emphasizing dispositional and personality-based explanations.",
    example: "Assuming a person who cuts you off in traffic is a selfish jerk, rather than considering they might be in an emergency.",
    category: "not_enough_meaning"
  },
  {
    name: "Gambler's Fallacy",
    definition: "The tendency to think that future probabilities are altered by past events, when in reality they are unchanged.",
    example: "After a coin toss has landed on heads five times in a row, a person might believe that the next toss is 'due' to be tails.",
    category: "not_enough_meaning"
  },
  {
    name: "Google Effect (Digital Amnesia)",
    definition: "The tendency to forget information that can be found readily online by using Internet search engines.",
    example: "You are less likely to remember a specific fact, like an actor's birthday, because you know you can easily look it up on your phone.",
    category: "what_to_remember"
  },
  {
    name: "Group Attribution Error",
    definition: "The tendency to believe that the characteristics of an individual group member are reflective of the group as a whole.",
    example: "After a negative interaction with a single tourist from a particular country, concluding that everyone from that country is rude.",
    category: "not_enough_meaning"
  },
  {
    name: "Groupthink",
    definition: "The psychological phenomenon that occurs within a group of people in which the desire for harmony or conformity in the group results in an irrational or dysfunctional decision-making outcome.",
    example: "In a business meeting, all the senior managers agree on a risky plan. Junior members are hesitant to speak out against it for fear of disrupting the harmony and being seen as not part of the team.",
    category: "need_to_act_fast"
  },
  {
    name: "Halo Effect",
    definition: "The tendency for a person's positive or negative traits to 'spill over' from one area of their personality to another in others' perceptions of them.",
    example: "Assuming a physically attractive person is also intelligent, kind, and funny.",
    category: "not_enough_meaning"
  },
  {
    name: "Hard–Easy Effect",
    definition: "The tendency to overestimate one's ability to perform a difficult task and to underestimate one's ability to perform an easy task.",
    example: "A student might be overconfident about their ability to write a complex research paper but underconfident about their ability to pass a simple multiple-choice quiz.",
    category: "need_to_act_fast"
  },
  {
    name: "Hindsight Bias",
    definition: "The tendency to see past events as being predictable at the time those events happened.",
    example: "After a stock market crash, people might say they 'knew it was coming all along,' even if they didn't.",
    category: "what_to_remember"
  },
  {
    name: "Hostile Attribution Bias",
    definition: "The tendency to interpret others' behaviors as having hostile intent, even when the behavior is ambiguous or benign.",
    example: "If someone bumps into you in a crowded room, you immediately assume they did it on purpose to be aggressive.",
    category: "not_enough_meaning"
  },
  {
    name: "Hot-Hand Fallacy",
    definition: "The belief that a person who has experienced success with a random event has a greater chance of further success in additional attempts.",
    example: "A basketball player who has made their last few shots is believed to have a 'hot hand' and is more likely to make their next shot.",
    category: "not_enough_meaning"
  },
  {
    name: "Humor Effect",
    definition: "Humorous items are more easily remembered than non-humorous ones.",
    example: "You are more likely to remember the details of a funny commercial than a serious one, even for a similar product.",
    category: "too_much_information"
  },
  {
    name: "Hyperbolic Discounting",
    definition: "The tendency for people to increasingly choose a smaller-sooner reward over a larger-later reward as the delay occurs sooner rather than later in time.",
    example: "Preferring to receive $50 today rather than $100 in six months, even though the latter is a better financial choice.",
    category: "need_to_act_fast"
  },
  {
    name: "IKEA Effect",
    definition: "The tendency for people to place a disproportionately high value on products they partially created.",
    example: "Feeling that the bookshelf you struggled to assemble yourself is more valuable than an identical, pre-assembled one from the store.",
    category: "need_to_act_fast"
  },
  {
    name: "Illusion of Control",
    definition: "The tendency to overestimate one's ability to control events.",
    example: "People often believe they can influence the outcome of a dice roll by throwing it harder for a high number and softer for a low number.",
    category: "not_enough_meaning"
  },
  {
    name: "Illusion of Explanatory Depth",
    definition: "The illusion that you understand a topic in far greater detail than you actually do.",
    example: "Confidently believing you know how a zipper works, but being unable to explain the mechanism when asked.",
    category: "not_enough_meaning"
  },
  {
    name: "Illusion of Transparency",
    definition: "The tendency for people to overestimate the degree to which their personal mental state is known by others.",
    example: "Believing that your nervousness is obvious to the audience when you are giving a presentation, even though they don't notice it.",
    category: "not_enough_meaning"
  },
  {
    name: "Illusion of Validity",
    definition: "We overestimate our ability to interpret and predict accurately the outcome when analyzing a set of data, in particular when the data analyzed show a very consistent pattern.",
    example: "A job interviewer might feel confident in their ability to pick the best candidate based on a short interview, despite studies showing that unstructured interviews are poor predictors of job performance.",
    category: "not_enough_meaning"
  },
  {
    name: "Illusory Correlation",
    definition: "The phenomenon of perceiving a relationship between variables even when no such relationship exists.",
    example: "Believing that it always rains after you wash your car.",
    category: "not_enough_meaning"
  },
  {
    name: "Illusory Superiority (Lake Wobegon Effect)",
    definition: "The human tendency to overestimate one's achievements and capabilities in relation to others.",
    example: "In a survey, 90% of drivers might rate their own driving skills as 'above average'.",
    category: "need_to_act_fast"
  },
  {
    name: "Illusory Truth Effect",
    definition: "We are more likely to believe information we have been exposed to repeatedly, regardless of whether it is true or not.",
    example: "A political lie, if repeated frequently by news outlets and politicians, can become accepted as truth by a segment of the population.",
    category: "too_much_information"
  },
  {
    name: "Impact Bias",
    definition: "The tendency to overestimate the length or the intensity of future feeling states.",
    example: "Believing that breaking up with a partner will leave you devastated for years, when in reality the emotional pain subsides much more quickly.",
    category: "need_to_act_fast"
  },
  {
    name: "Information Bias",
    definition: "The tendency to seek information when it does not affect action.",
    example: "Continuing to research different car models even after you've already made a decision and purchased one.",
    category: "too_much_information"
  },
  {
    name: "Ingroup Bias",
    definition: "The tendency for people to give preferential treatment to others they perceive to be members of their own groups.",
    example: "Hiring a candidate from your own alma mater over a more qualified candidate from another school.",
    category: "not_enough_meaning"
  },
  {
    name: "Insensitivity to Sample Size",
    definition: "The tendency to under-expect variation in small samples. We often draw conclusions from small amounts of data without considering the role of chance.",
    example: "A hospital reports that on a particular day, 60% of the babies born were boys. People are more surprised by this if the hospital is large (many births) than if it is small (few births), even though small samples are more likely to show extreme results.",
    category: "not_enough_meaning"
  },
  {
    name: "Irrational Escalation (Sunk Cost Fallacy)",
    definition: "The phenomenon where people justify increased investment in a decision, based on the cumulative prior investment, despite new evidence suggesting that the decision was probably wrong.",
    example: "Continuing to pour money into a failing business project because 'we've already invested too much to stop now.'",
    category: "need_to_act_fast"
  },
  {
    name: "Just-World Hypothesis",
    definition: "The tendency to believe that the world is just and that people get what they deserve.",
    example: "Blaming the victim of a crime or accident by assuming they must have done something to deserve their fate.",
    category: "not_enough_meaning"
  },
  {
    name: "Law of the Instrument (Maslow's Hammer)",
    definition: "An over-reliance on a familiar tool; if all you have is a hammer, everything looks like a nail.",
    example: "A person who is very good with spreadsheets might try to solve every business problem with a spreadsheet, even when other tools would be more appropriate.",
    category: "not_enough_meaning"
  },
  {
    name: "Less-is-better Effect",
    definition: "A cognitive bias that causes people to prefer a smaller set of items over a larger set, even if the larger set contains all the items in the smaller set plus more.",
    example: "Preferring to receive a high-end scarf as a gift over a gift set that includes the same scarf plus a less desirable, cheaper item.",
    category: "need_to_act_fast"
  },
  {
    name: "Levelling and Sharpening",
    definition: "Two opposing memory distortions that occur over time. Levelling is the loss of details, while sharpening is the emphasis of certain details.",
    example: "In retelling a story, a person might forget minor details (levelling) but exaggerate the most exciting part (sharpening).",
    category: "what_to_remember"
  },
  {
    name: "Looking-glass Self",
    definition: "A social psychological concept stating that a person's self grows out of society's interpersonal interactions and the perceptions of others.",
    example: "If people consistently treat you as a leader, you may begin to see yourself as one and act accordingly.",
    category: "not_enough_meaning"
  },
  {
    name: "Loss Aversion",
    definition: "The tendency to prefer avoiding losses to acquiring equivalent gains. It's better to not lose $5 than to find $5.",
    example: "Feeling more pain from losing $100 than pleasure from winning $100.",
    category: "need_to_act_fast"
  },
  {
    name: "Mere Exposure Effect",
    definition: "We tend to develop a preference for things simply because we are familiar with them.",
    example: "You might dislike a new song the first time you hear it, but after hearing it on the radio several times, you start to enjoy it.",
    category: "too_much_information"
  },
  {
    name: "Misinformation Effect",
    definition: "Memory becoming less accurate because of post-event information.",
    example: "A witness who is asked 'How fast were the cars going when they smashed into each other?' might later remember the cars going faster than they actually were.",
    category: "what_to_remember"
  },
  {
    name: "Moral Credential Effect",
    definition: "The tendency of a track record of non-prejudice to increase subsequent prejudice. A person who has engaged in a moral act may feel they have a 'license' to engage in an immoral one.",
    example: "After donating to a charity, a person might feel justified in being rude to a service worker later that day.",
    category: "not_enough_meaning"
  },
  {
    name: "Moral Luck",
    definition: "The phenomenon whereby a moral agent is assigned moral blame or praise for an action or its consequences even if it is clear that said agent did not have full control over either the action or its consequences.",
    example: "A drunk driver who gets home safely is judged less harshly than one who hits a pedestrian, even though their decision to drive drunk was equally reckless.",
    category: "not_enough_meaning"
  },
  {
    name: "Naïve Cynicism",
    definition: "The cognitive bias that occurs when people expect more egocentric bias in others than is actually the case.",
    example: "Believing that a person who performs a kind act must have a selfish ulterior motive.",
    category: "not_enough_meaning"
  },
  {
    name: "Naïve Realism",
    definition: "The human tendency to believe that we see the world around us objectively, and that people who disagree with us must be uninformed, irrational, or biased.",
    example: "Believing that your political opinions are based on pure facts and logic, and that anyone who disagrees is simply misinformed.",
    category: "not_enough_meaning"
  },
  {
    name: "Negativity Bias",
    definition: "Negative events and emotions have a greater impact on our psychological state and processes than neutral or positive ones.",
    example: "You receive ten positive comments and one negative comment on a presentation. You will likely dwell on the single piece of negative feedback.",
    category: "too_much_information"
  },
  {
    name: "Neglect of Probability",
    definition: "The tendency to completely disregard probability when making a decision under uncertainty.",
    example: "Choosing to drive instead of fly because of a fear of plane crashes, despite the statistical probability of a car crash being vastly higher.",
    category: "not_enough_meaning"
  },
  {
    name: "Normalcy Bias",
    definition: "The refusal to plan for, or react to, a disaster which has never happened before.",
    example: "Residents of a coastal town ignoring hurricane evacuation warnings because they've 'never had a bad storm here before.'",
    category: "need_to_act_fast"
  },
  {
    name: "Not Invented Here",
    definition: "Aversion to contact with or use of products, research, standards, or knowledge developed outside a group.",
    example: "A company's engineering team insisting on building a new software tool from scratch, even though a perfectly good and cheaper third-party tool already exists.",
    category: "not_enough_meaning"
  },
  {
    name: "Omission Bias",
    definition: "The tendency to judge harmful actions as worse, or less moral, than equally harmful omissions (inactions).",
    example: "A person who lets a patient die by not administering a life-saving drug is often judged less harshly than a person who administers a lethal drug, even if the outcome is the same.",
    category: "too_much_information"
  },
  {
    name: "Optimism Bias",
    definition: "The tendency to be overly optimistic, overestimating favorable and pleasing outcomes.",
    example: "A person might believe they are less likely to experience a negative event, like a car accident or a serious illness, than other people.",
    category: "need_to_act_fast"
  },
  {
    name: "Ostrich Effect",
    definition: "The decision to ignore dangerous or negative information by 'burying' one's head in the sand, like an ostrich.",
    example: "An investor avoiding checking their portfolio during a market downturn, hoping the problem will go away on its own.",
    category: "too_much_information"
  },
  {
    name: "Outgroup Homogeneity Bias",
    definition: "The perception of out-group members as more similar to one another than are in-group members.",
    example: "Believing that 'all fans of that rival sports team are the same,' while seeing great diversity among fans of your own team.",
    category: "not_enough_meaning"
  },
  {
    name: "Overconfidence Effect",
    definition: "The tendency for a person's subjective confidence in their judgments to be reliably greater than their objective accuracy.",
    example: "A student who is certain they aced an exam is surprised to find they only received a mediocre grade.",
    category: "need_to_act_fast"
  },
  {
    name: "Pareidolia",
    definition: "A type of apophenia, it is the tendency to perceive a specific, often meaningful image in a random or ambiguous visual pattern.",
    example: "Seeing the 'Man in the Moon' or a face in a piece of toast.",
    category: "not_enough_meaning"
  },
  {
    name: "Parkinson's Law of Triviality",
    definition: "The tendency to give disproportionate weight to trivial issues.",
    example: "A committee might spend 45 minutes debating the color of the bike shed and only 15 minutes on a multi-million dollar nuclear reactor proposal.",
    category: "too_much_information"
  },
  {
    name: "Peak–End Rule",
    definition: "That people judge an experience largely based on how they felt at its peak and at its end, rather than based on the total sum or average of every moment.",
    example: "A vacation might be remembered as great if it had a fantastic final day, even if most of the trip was mediocre.",
    category: "what_to_remember"
  },
  {
    name: "Pessimism Bias",
    definition: "The tendency for some people, especially those suffering from depression, to overestimate the likelihood of negative things happening to them.",
    example: "A person might believe they are certain to fail an exam, even if they have studied thoroughly and are well-prepared.",
    category: "need_to_act_fast"
  },
  {
    name: "Picture Superiority Effect",
    definition: "We remember concepts and ideas better when they are presented as pictures rather than as text.",
    example: "IKEA instructions are effective because they rely on simple diagrams rather than complex text descriptions.",
    category: "too_much_information"
  },
  {
    name: "Placebo Effect",
    definition: "The tendency for a person's physical or mental health to appear to improve after taking a placebo or inert treatment.",
    example: "A patient's headache disappears after taking a sugar pill that they believe is a powerful painkiller.",
    category: "not_enough_meaning"
  },
  {
    name: "Planning Fallacy",
    definition: "The tendency to underestimate the time, costs, and risks of future actions, while simultaneously overestimating the benefits.",
    example: "Confidently predicting a home renovation will take two weeks and cost $5,000, only for it to take two months and cost $10,000.",
    category: "need_to_act_fast"
  },
  {
    name: "Post-Purchase Rationalization (Buyer's Stockholm Syndrome)",
    definition: "The tendency to persuade oneself through rational argument that a purchase was a good value.",
    example: "After buying an expensive smartphone, you focus on its positive features and ignore its flaws to convince yourself you made the right decision.",
    category: "too_much_information"
  },
  {
    name: "Pro-innovation Bias",
    definition: "The tendency to have an excessive optimism towards an invention or innovation's usefulness and to downplay its limitations and weaknesses.",
    example: "Believing that a new technology will solve all of a company's problems, without considering the costs of implementation, training, and potential downsides.",
    category: "need_to_act_fast"
  },
  {
    name: "Projection Bias",
    definition: "The tendency to unconsciously assume that others share the same or similar thoughts, beliefs, values, or positions.",
    example: "Assuming your friends will love the same spicy food you do, and ordering it for the whole table without asking.",
    category: "not_enough_meaning"
  },
  {
    name: "Pseudocertainty Effect",
    definition: "The tendency to make risk-averse choices if the expected outcome is positive, but make risk-seeking choices to avoid negative outcomes.",
    example: "Choosing a 'guaranteed' 10% discount over a '50% chance' of a 20% discount, even though they have the same expected value.",
    category: "need_to_act_fast"
  },
  {
    name: "Reactance",
    definition: "The urge to do the opposite of what someone wants you to do out of a need to resist a perceived attempt to constrain your freedom of choice.",
    example: "A teenager might start smoking specifically because their parents have forbidden it.",
    category: "need_to_act_fast"
  },
  {
    name: "Reactive Devaluation",
    definition: "Devaluing a proposal or offer simply because it is perceived to have originated from an adversary.",
    example: "Automatically rejecting a political policy proposal simply because it came from the opposing party, without considering its merits.",
    category: "not_enough_meaning"
  },
  {
    name: "Recency Bias",
    definition: "The tendency to weigh recent information or events more heavily than earlier information.",
    example: "A manager giving an employee a performance review based heavily on their work in the last month, ignoring their performance over the entire year.",
    category: "too_much_information"
  },
  {
    name: "Reciprocity",
    definition: "The social norm of responding to a positive action with another positive action, and a negative action with another negative one.",
    example: "Feeling obligated to buy a product from a salesperson who gave you a free sample.",
    category: "need_to_act_fast"
  },
  {
    name: "Restraint Bias",
    definition: "The tendency to overestimate one's ability to show restraint in the face of temptation.",
    example: "Buying a large bag of chips and believing you'll only eat a small handful, but ending up finishing the whole bag.",
    category: "need_to_act_fast"
  },
  {
    name: "Rhyme as Reason Effect",
    definition: "The tendency to perceive rhyming statements as more truthful.",
    example: "Believing the saying 'An apple a day keeps the doctor away' more readily because it rhymes.",
    category: "not_enough_meaning"
  },
  {
    name: "Risk Compensation (Peltzman Effect)",
    definition: "The tendency to take greater risks when perceived safety increases.",
    example: "Driving faster and more aggressively in a car with advanced safety features like anti-lock brakes and airbags.",
    category: "need_to_act_fast"
  },
  {
    name: "Rosy Retrospection",
    definition: "The tendency to rate past events more positively than they had actually rated them when the event occurred.",
    example: "Remembering a difficult camping trip from your childhood as a fun adventure, while forgetting the rain, mosquitoes, and uncomfortable nights.",
    category: "what_to_remember"
  },
  {
    name: "Salience Bias",
    definition: "The tendency to focus on the most easily recognizable features of a person or concept.",
    example: "When thinking about dying, you might worry more about a dramatic shark attack than the more probable, but less salient, risk of heart disease.",
    category: "too_much_information"
  },
  {
    name: "Selective Perception",
    definition: "The tendency for expectations to affect perception. We see what we expect to see.",
    example: "Fans of a sports team are more likely to see fouls committed by the opposing team and miss fouls committed by their own.",
    category: "too_much_information"
  },
  {
    name: "Self-Deception",
    definition: "A process of denying or rationalizing away the significance, relevance, or importance of opposing evidence and logical argument.",
    example: "A smoker who continues to smoke despite knowing the health risks, telling themselves 'the statistics don't apply to me.'",
    category: "not_enough_meaning"
  },
  {
    name: "Self-Relevance Effect",
    definition: "We remember information better when we can relate it to ourselves in some way.",
    example: "You are more likely to remember someone's birthday if it is close to your own.",
    category: "too_much_information"
  },
  {
    name: "Self-Serving Bias",
    definition: "The tendency to attribute success to our own abilities and efforts, but attribute failure to external factors.",
    example: "Getting an 'A' on a test and saying 'I'm smart,' but getting an 'F' and saying 'the teacher was unfair.'",
    category: "not_enough_meaning"
  },
  {
    name: "Shared Information Bias",
    definition: "The tendency for group members to spend more time and energy discussing information that all members are already familiar with.",
    example: "In a meeting to decide on a new hire, the team spends most of the time discussing the candidate's university, which everyone knows, rather than their unique job experiences.",
    category: "too_much_information"
  },
  {
    name: "Social Comparison Bias",
    definition: "The tendency, when making decisions, to favour potential candidates who don't compete with one's own particular strengths.",
    example: "A manager might be hesitant to hire a candidate who is more skilled in a particular area than they are.",
    category: "not_enough_meaning"
  },
  {
    name: "Social Desirability Bias",
    definition: "The tendency of survey respondents to answer questions in a manner that will be viewed favorably by others.",
    example: "In a survey, more people might claim to vote or donate to charity than actually do, because those are socially desirable actions.",
    category: "need_to_act_fast"
  },
  {
    name: "Source Amnesia",
    definition: "The inability to remember where, when, or how one has learned knowledge that has been acquired and retained.",
    example: "Remembering a fact but being unable to recall if you read it in a textbook, heard it on the news, or were told by a friend.",
    category: "what_to_remember"
  },
  {
    name: "Spacing Effect",
    definition: "The phenomenon whereby learning is greater when studying is spread out over time, as opposed to studying the same amount of time in a single session.",
    example: "Studying a subject for one hour every day for a week is more effective for long-term retention than cramming for seven hours in one night.",
    category: "what_to_remember"
  },
  {
    name: "Spotlight Effect",
    definition: "The tendency to overestimate how much other people notice your appearance or behavior.",
    example: "Feeling extremely self-conscious about a small stain on your shirt, assuming everyone is staring at it, when in reality no one has noticed.",
    category: "not_enough_meaning"
  },
  {
    name: "Status Quo Bias",
    definition: "The tendency to like things to stay relatively the same.",
    example: "Preferring to keep a long-held, underperforming investment rather than switching to a new one with better prospects.",
    category: "need_to_act_fast"
  },
  {
    name: "Stereotyping",
    definition: "Expecting a group or person to have certain qualities without having real information about the person.",
    example: "Assuming all librarians are quiet and shy, or that all construction workers are strong and tough.",
    category: "not_enough_meaning"
  },
  {
    name: "Subadditivity Effect",
    definition: "The tendency to judge probability of the whole to be less than the probabilities of the parts.",
    example: "Estimating the probability of a team winning a championship as lower than the sum of the probabilities you would assign to them winning each individual playoff game.",
    category: "not_enough_meaning"
  },
  {
    name: "Subjective Validation",
    definition: "The tendency to accept a statement or piece of information as correct if it has any personal meaning or significance to us.",
    example: "People readily believe in vague horoscope predictions because they can easily find examples from their own lives that seem to confirm the statements.",
    category: "too_much_information"
  },
  {
    name: "Suggestibility",
    definition: "The quality of being inclined to accept and act on the suggestions of others.",
    example: "Leading questions from an interrogator can cause a witness to incorporate false details into their memory of an event.",
    category: "what_to_remember"
  },
  {
    name: "Survivorship Bias",
    definition: "Concentrating on the people or things that 'survived' some process and inadvertently overlooking those that did not because of their lack of visibility.",
    example: "Studying the habits of successful college dropouts like Bill Gates and Mark Zuckerberg, and concluding that dropping out of college leads to success, while ignoring the vast majority of dropouts who did not succeed.",
    category: "not_enough_meaning"
  },
  {
    name: "System Justification",
    definition: "The tendency to defend and bolster the status quo. Existing social, economic, and political arrangements tend to be preferred, and alternatives disparaged sometimes even at the expense of individual and collective self-interest.",
    example: "People in lower socioeconomic classes might defend a system that is economically disadvantageous to them because it is the system they are familiar with.",
    category: "need_to_act_fast"
  },
  {
    name: "Telescoping Effect",
    definition: "The tendency to displace recent events backward in time and remote events forward in time, so that recent events appear more remote, and remote events, more recent.",
    example: "You might think an event that happened two years ago occurred only one year ago (forward telescoping), or that an event from last month happened three months ago (backward telescoping).",
    category: "what_to_remember"
  },
  {
    name: "Testing Effect",
    definition: "The finding that long-term memory is often increased when some of the learning period is devoted to retrieving the to-be-remembered information.",
    example: "Actively quizzing yourself on material is a more effective way to study than simply re-reading it.",
    category: "what_to_remember"
  },
  {
    name: "Third-Person Effect",
    definition: "The hypothesis that people tend to perceive that mass media messages have a greater effect on others than on themselves.",
    example: "Believing that violent video games make other people more aggressive, but that you are personally immune to their effects.",
    category: "not_enough_meaning"
  },
  {
    name: "Time-Saving Bias",
    definition: "The tendency to misestimate the time that could be saved (or lost) when increasing or decreasing speed.",
    example: "Believing that increasing your speed from 60 mph to 80 mph will save more time on a short trip than it actually does.",
    category: "need_to_act_fast"
  },
  {
    name: "Trait Ascription Bias",
    definition: "The tendency for people to view themselves as relatively variable in terms of personality, behavior, and mood while viewing others as much more predictable.",
    example: "Seeing your own actions as being dependent on the situation, but seeing a colleague's actions as a reflection of their fixed personality.",
    category: "not_enough_meaning"
  },
  {
    name: "Ultimate Attribution Error",
    definition: "A group-level attribution error that offers an explanation for how one person views different causes of negative and positive behavior in ingroup and outgroup members.",
    example: "If a member of our own group does something good, we see it as a reflection of their character. If a member of an outgroup does something good, we see it as a result of luck or circumstance.",
    category: "not_enough_meaning"
  },
  {
    name: "Unit Bias",
    definition: "The tendency to want to finish a given unit of a task or item. Strong effect on the consumption of food in particular.",
    example: "Feeling compelled to eat the entire sandwich on your plate, even if you are already full.",
    category: "need_to_act_fast"
  },
  {
    name: "Von Restorff Effect",
    definition: "An item that stands out is more likely to be remembered than other items. Also known as the isolation effect.",
    example: "In the list: apple, banana, car, orange, grape; the word 'car' is more likely to be remembered because it is distinct from the others.",
    category: "too_much_information"
  },
  {
    name: "Weber–Fechner Law",
    definition: "The principle that the just-noticeable difference of a stimulus is a constant proportion of the original stimulus.",
    example: "You would notice the difference between a 1kg and 2kg weight, but not between a 50kg and 51kg weight.",
    category: "too_much_information"
  },
  {
    name: "Well-Travelled Road Effect",
    definition: "The tendency to overestimate the time it takes to travel a familiar route and underestimate the time it takes to travel a new route.",
    example: "Your daily commute feels longer than a new, equally long drive to a vacation spot.",
    category: "need_to_act_fast"
  },
  {
    name: "Women are Wonderful Effect",
    definition: "A phenomenon in which women are associated with more positive attributes than men.",
    example: "Holding a general belief that women are more nurturing, kind, and compassionate than men.",
    category: "not_enough_meaning"
  },
  {
    name: "Zero-Risk Bias",
    definition: "The preference for reducing a small risk to zero over a greater reduction in a larger risk.",
    example: "Choosing a policy that completely eliminates a 0.1% risk of a certain type of accident over a policy that halves a 5% risk of a different type of accident.",
    category: "need_to_act_fast"
  },
  {
    name: "Zero-Sum Bias",
    definition: "A bias whereby a person tends to see situations as zero-sum (i.e., one person's gain is another's loss).",
    example: "Believing that if another country's economy grows, it must be at the expense of your own country's economy.",
    category: "not_enough_meaning"
  },
  {
    name: "Zeigarnik Effect",
    definition: "The tendency to remember uncompleted or interrupted tasks better than completed tasks.",
    example: "A waiter is more likely to remember the orders of a table that has not yet paid than a table that has already settled their bill.",
    category: "what_to_remember"
  }
];