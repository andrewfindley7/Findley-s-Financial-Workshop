'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardTitle, CardHeader, CardDescription, CardFooter } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Brain, Search, Frown, Sparkles, Anchor, ShieldCheck, ThumbsUp, ThumbsDown, BookOpen, Repeat, Puzzle, MousePointerClick, ShieldOff, BrainCircuit, Activity, Info, ArrowRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import type { LucideIcon } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const biases = [
  {
    id: 'confirmation-bias',
    category: 'Belief Biases',
    title: 'Confirmation Bias: The Echo Chamber',
    icon: Search,
    whatItIs: "The tendency to seek out, interpret, and favor information that confirms your pre-existing beliefs, while simultaneously ignoring or devaluing information that contradicts them.",
    investingExample: "You believe a particular tech stock is 'the next big thing.' You actively read positive news articles and analyst reports that support your view. When the company reports weak earnings, you dismiss it as 'short-term noise' or 'market overreaction' instead of re-evaluating your thesis.",
    antidoteTitle: "Seek Disconfirming Evidence",
    antidote: "For every reason you have to buy a stock, force yourself to find and write down a valid reason someone might be selling it. Actively read the 'bear case' for your investments to ensure you have a balanced perspective.",
    antidoteIcon: ThumbsDown,
  },
  {
    id: 'narrative-fallacy',
    category: 'Belief Biases',
    title: 'Narrative Fallacy: Falling for a Good Story',
    icon: Puzzle,
    whatItIs: "Our innate tendency to create and believe simple, coherent stories to explain complex or random events. We are more easily persuaded by a good story than by raw data.",
    investingExample: "An investor buys stock in a company with a visionary founder and a world-changing mission. The story feels compelling, even though the company is unprofitable, has high debt, and its financials don't support the valuation. The good narrative masks the poor fundamentals.",
    antidoteTitle: "Be a Story Skeptic, Trust the Numbers",
    antidote: "Always test the narrative against the financial statements. Does the company have a strong balance sheet? Is it profitable? Does it generate free cash flow? A great story is wonderful, but it's not a substitute for a great business.",
    antidoteIcon: ThumbsDown,
  },
  {
    id: 'loss-aversion',
    category: 'Emotional Biases',
    title: 'Loss Aversion: The Pain of Losing',
    icon: Frown,
    whatItIs: "The psychological finding that the pain of a loss is roughly twice as powerful as the pleasure of an equivalent gain. This makes people go to irrational lengths to avoid realizing a loss.",
    investingExample: "You bought a stock at $100, and it has fallen to $40. The company's fundamentals have worsened, but you refuse to sell, thinking, 'I'll just wait for it to get back to even.' You're avoiding the emotional pain of locking in the loss, even if selling and reinvesting the remaining $40 elsewhere is the smarter financial move.",
    antidoteTitle: "Focus on Future Opportunity Cost",
    antidote: "Regularly ask yourself this critical question about every stock you own: 'If I had the cash in hand today, would I buy this stock at its current price?' If the answer is no, it's a strong signal that your loss aversion is holding you back from making a better decision.",
    antidoteIcon: Brain,
  },
  {
    id: 'fomo',
    category: 'Emotional Biases',
    title: 'FOMO (Fear Of Missing Out): Herd Mentality',
    icon: Sparkles,
    whatItIs: "The anxiety that an exciting or interesting event is happening elsewhere, often amplified by social media and news. In investing, it leads to chasing 'hot' stocks without proper research.",
    investingExample: "A 'meme stock' is skyrocketing in price. Everyone online is boasting about their profits. You feel an intense pressure to buy in, not because you understand the business, but because you're afraid of being the only one not getting rich quick. You buy at the peak, just as early investors are selling.",
    antidoteTitle: "Stick to Your Process",
    antidote: "Have a pre-defined investment philosophy and a checklist for what makes a good investment for you. By the time an investment is popular enough to cause widespread FOMO, the best risk/reward opportunity has often already passed. Trust your process, not the crowd.",
    antidoteIcon: ShieldCheck,
  },
  {
    id: 'overconfidence-bias',
    category: 'Emotional Biases',
    title: 'Overconfidence Bias: The Illusion of Skill',
    icon: ThumbsUp,
    whatItIs: "The tendency for people to be more confident in their own abilities—including their ability to predict outcomes—than is objectively reasonable. This is particularly dangerous after a period of success.",
    investingExample: "After a few successful stock picks in a bull market, an investor starts to believe they have a special 'knack' for finding winners. They start making larger, more concentrated bets with less research, attributing their success to skill rather than a rising market that lifted all boats. In a downturn, this leads to catastrophic losses.",
    antidoteTitle: "Keep an Investment Journal",
    antidote: "Document why you bought each investment at the time of purchase. What was your thesis? What were the key metrics? When you review your decisions later (both good and bad), you can be more objective about whether your success was due to a sound process or just luck. This forces humility and keeps your ego in check. Also, ask yourself 'What if I'm wrong?' and list potential negative outcomes to prepare yourself for them.",
    antidoteIcon: BookOpen,
  },
  {
    id: 'action-bias',
    category: 'Emotional Biases',
    title: 'Action Bias: The Need to Do Something',
    icon: MousePointerClick,
    whatItIs: "The impulse to act, even when inaction is the better strategy. In investing, this manifests as a compulsion to constantly tweak, trade, and react to market news, often to our detriment.",
    investingExample: "During a volatile week, an investor feels they must do something. They sell a good long-term holding to buy another 'hot' stock, incurring fees and potential taxes, simply to feel in control. Most of the time, the best action is no action at all.",
    antidoteTitle: "Practice Strategic Patience",
    antidote: "Have a solid plan and trust it. Schedule portfolio check-ins quarterly, not daily, to reduce the temptation to tinker. Think of trading as a rare event, not a daily activity. Often, the most successful investors are the least active.",
    antidoteIcon: ShieldCheck,
  },
  {
    id: 'anchoring-bias',
    category: 'Cognitive Shortcuts',
    title: 'Anchoring Bias: The First Piece of Information',
    icon: Anchor,
    whatItIs: "The tendency to rely too heavily on the first piece of information offered (the 'anchor') when making decisions. In investing, this is often a stock's past high price.",
    investingExample: "A stock once traded at $200 per share, but due to fundamental business problems, it has fallen to $50. An investor sees the current price and thinks, 'Wow, it's 75% off its high! It's a bargain!' They are 'anchored' to the old $200 price, which is no longer relevant, instead of evaluating the business's current worth.",
    antidoteTitle: "Value the Business, Not the Stock Chart",
    antidote: "Base your valuation on the company's current and future fundamentals (earnings, cash flow, debt, competitive advantages), not its past stock prices. A stock's price history is not a reliable indicator of its true intrinsic value today.",
    antidoteIcon: Brain,
  },
  {
    id: 'recency-bias',
    category: 'Cognitive Shortcuts',
    title: 'Recency Bias: Overvaluing the Present',
    icon: Repeat,
    whatItIs: "The tendency to place too much importance on recent events, causing us to extrapolate recent trends indefinitely into the future, ignoring long-term data.",
    investingExample: "After a strong bull market year, an investor goes 'all-in' on stocks, assuming high returns will continue forever. Conversely, after a market crash, they sell everything and go to cash, fearing the market will keep dropping.",
    antidoteTitle: "Zoom Out and Trust Your Plan",
    antidote: "Look at long-term market charts (10, 20, 50+ years) to see that market cycles are normal and recent performance is a poor predictor of future results. A consistent, long-term plan is your best defense against short-term noise.",
    antidoteIcon: BookOpen,
  },
  {
    id: 'survivorship-bias',
    category: 'Cognitive Shortcuts',
    title: 'Survivorship Bias: The Unseen Graveyard',
    icon: ShieldOff,
    whatItIs: "The logical error of concentrating on the people or things that 'survived' some process and inadvertently overlooking those that did not because of their lack of visibility.",
    investingExample: "An investor looks at the long-term chart of the S&P 500 and sees a steady upward trend, concluding that investing is easy. They don't see the hundreds of companies that were once in the index but have since gone bankrupt or been acquired (e.g., Enron, Pan Am, Sears), creating an overly optimistic view of the true risks.",
    antidoteTitle: "Acknowledge the Silent Evidence",
    antidote: "When you see a list of successful funds or companies, ask yourself: 'How many started and failed that I'm not seeing?' This encourages a more realistic assessment of risk and reinforces the importance of diversification, rather than trying to find the 'next Amazon.'",
    antidoteIcon: Brain,
  }
];

const categories = [
  { name: 'Belief Biases', description: "These biases affect how we interpret information and form our beliefs about the world, often leading us to see what we want to see.", icon: Brain },
  { name: 'Emotional Biases', description: "Driven by feelings rather than facts, these biases cause us to make impulsive decisions based on fear, greed, or ego.", icon: Frown },
  { name: 'Cognitive Shortcuts', description: "Our brains use mental shortcuts (heuristics) to make quick decisions. While often useful, they can lead to systematic errors in investing.", icon: Activity },
];


export default function BehavioralFinancePage() {
  const searchParams = useSearchParams();
  const fromStep = searchParams.get('from');

  return (
    <>
      <Alert variant="destructive" className="mb-6 bg-amber-50 dark:bg-amber-900/20 border-amber-300 dark:border-amber-700">
          <Info className="h-4 w-4 text-amber-500" />
          <AlertDescription className="text-amber-800 dark:text-amber-300 text-xs">
              For educational use only. Not financial or tax advice. Consult a licensed advisor before making major decisions.
          </AlertDescription>
      </Alert>
      <div className="mb-8">
        <h1 className="text-3xl font-bold font-headline">Behavioral Investing</h1>
        <p className="text-muted-foreground mt-2">Your mind is your biggest asset and your greatest liability. Master it.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <BrainCircuit className="h-4 w-4" />
          <AlertTitle className="font-headline">The Battlefield of the Mind</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>Successful investing is not just about understanding numbers; it's about understanding yourself. Behavioral Investing is the practical application of psychology to financial decisions. The greatest investors know that their edge isn't just better information—it's better behavior. This lesson will teach you to recognize and combat the common mental errors that sabotage most investors.</p>
          </AlertDescription>
        </Alert>
        
        {categories.map(category => (
           <Card key={category.name}>
             <CardHeader>
               <CardTitle className="font-headline text-xl flex items-center">
                  <category.icon className="mr-2 h-5 w-5 text-primary" />
                  {category.name}
               </CardTitle>
               <CardDescription>{category.description}</CardDescription>
             </CardHeader>
             <CardContent>
                <Accordion type="multiple" className="w-full space-y-2">
                    {biases.filter(b => b.category === category.name).map(bias => (
                        <AccordionItem value={bias.id} key={bias.id} className="border-b-0">
                            <Card className="shadow-none border bg-background/50">
                                <AccordionTrigger className="text-left p-4 hover:no-underline font-semibold">
                                    <h3 className="text-base flex items-center">
                                        <bias.icon className="mr-3 h-5 w-5 text-primary/80" />
                                        {bias.title}
                                    </h3>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className="px-4 pb-4 space-y-4">
                                        <div>
                                            <h4 className="font-semibold text-sm mb-1">The Trap</h4>
                                            <p className="text-muted-foreground text-sm">{bias.whatItIs}</p>
                                        </div>
                                        <Separator />
                                        <div>
                                            <h4 className="font-semibold text-sm mb-1">The Cost</h4>
                                            <p className="text-muted-foreground text-sm italic">{bias.investingExample}</p>
                                        </div>
                                        <Separator />
                                        <Alert variant="default" className="bg-blue-100 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
                                            <h4 className="font-semibold text-base flex items-center mb-2">
                                                <bias.antidoteIcon className="mr-2 h-5 w-5" />
                                                The Fix: {bias.antidoteTitle}
                                            </h4>
                                            <p className="text-sm">{bias.antidote}</p>
                                        </Alert>
                                    </div>
                                </AccordionContent>
                            </Card>
                        </AccordionItem>
                    ))}
                </Accordion>
             </CardContent>
           </Card>
        ))}

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Your Edge Isn’t Information—It’s Discipline</CardTitle>
                <CardDescription>
                    You will never have perfect information. But by understanding your own psychological weaknesses, you can build a process that defends you from your own worst impulses. That discipline is the ultimate competitive advantage.
                </CardDescription>
            </CardHeader>
            <CardContent>
                 <Button asChild>
                    <Link href={`/roadmaps/invest-like-a-pro${fromStep ? `#${fromStep}` : ''}`}>
                        Return to the Invest Like a Pro Roadmap
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </CardContent>
        </Card>
      </div>
    </>
  );
}
