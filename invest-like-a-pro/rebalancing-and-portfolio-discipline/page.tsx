'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { ArrowRight, Repeat, Calendar, Percent, ThumbsUp, ThumbsDown, Brain, AlertTriangle, Scale, Target, Info } from 'lucide-react';
import Link from 'next/link';

const positionSizingFrameworks = [
  {
    icon: Scale,
    title: "The Kelly Criterion (Kelly Fraction)",
    description: "A mathematical formula used to determine the optimal size of a series of bets to maximize long-term wealth. It suggests betting a fraction of your capital equal to your 'edge' divided by the 'odds'.",
    simplified: "In investing, a simplified takeaway is: the higher your conviction and the greater your perceived edge (the gap between price and value), the larger your position size should be, but never so large that a single bad outcome can wipe you out.",
    formula: "Kelly % = W - [(1 - W) / R]",
    formulaDescription: "Where W is the probability of winning, and R is the ratio of the average win to the average loss.",
    example: "If you estimate a 55% chance of winning (W=0.55) and your average win is twice your average loss (R=2), the formula suggests betting 32.5% of your capital: 0.55 - [(1 - 0.55) / 2] = 0.325.",
    pros: "Provides a mathematical framework for thinking about bet sizing based on your analytical confidence.",
    cons: "The true probabilities and payoffs in investing are unknown, making the formal formula impractical. It can also suggest extremely aggressive position sizes that are psychologically difficult to handle."
  },
  {
    icon: Target,
    title: "Volatility-Based Sizing",
    description: "This strategy sizes positions inversely to their volatility. More volatile assets get a smaller position size, and less volatile assets get a larger one, with the goal of having each position contribute equally to the portfolio's overall risk.",
    simplified: "Instead of a 5% position in every stock, you might have a 3% position in a volatile small-cap tech stock and a 7% position in a stable consumer staples company. This helps prevent one volatile stock from dominating your portfolio's returns (both positive and negative).",
    pros: "Creates a more risk-balanced portfolio and helps manage volatility.",
    cons: "Can be complex to implement, requiring calculations of historical or expected volatility for each asset."
  },
  {
    icon: ThumbsDown,
    title: "Maximum Drawdown Rules",
    description: "A simple risk-management overlay. You set a hard rule that you will never allocate more than a certain percentage of your portfolio to a single position, regardless of your conviction, to limit the damage from any one investment going to zero.",
    simplified: "A common rule is the '5% rule': never let a single stock become more than 5% of your total portfolio. If a winning stock grows to become 8% of your portfolio, you are forced to trim it back to 5%, thereby taking some profits and managing concentration risk.",
    pros: "Very simple to understand and implement. Provides a crucial backstop against over-concentration and catastrophic loss from a single bad bet.",
    cons: "Can force you to trim your best-performing stocks, potentially limiting some upside. However, this is a trade-off for enhanced safety."
  }
];


export default function PortfolioAllocationAndRebalancingPage() {
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
        <h1 className="text-3xl font-bold font-headline">Portfolio Allocation and Rebalancing</h1>
        <p className="text-muted-foreground mt-2">The art of maintaining your asset allocation and staying the course through market cycles.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Repeat className="h-4 w-4" />
          <AlertTitle className="font-headline">What is Rebalancing?</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>Rebalancing is the process of realigning the weightings of a portfolio of assets. It involves periodically buying or selling assets in your portfolio to maintain your original desired level of asset allocation. For example, if your target is a 60% stock / 40% bond mix, and a strong stock market rally shifts your portfolio to 70% stocks, rebalancing means you would sell some stocks and buy some bonds to return to your 60/40 target.</p>
            <p className="font-semibold">It is a simple but powerful tool for risk management and disciplined investing.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
              <Brain className="mr-2 h-5 w-5 text-primary" />
              The Importance of Portfolio Discipline
            </CardTitle>
            <CardDescription>Rebalancing is the practical application of portfolio discipline. Here’s why it's so critical.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800">
              <h3 className="font-semibold flex items-center mb-2 text-green-800 dark:text-green-200">
                <ThumbsUp className="mr-2 h-5 w-5" /> It Enforces "Buy Low, Sell High"
              </h3>
              <p className="text-sm text-muted-foreground">Rebalancing forces you to do what is psychologically difficult: sell a portion of your assets that have performed well (selling high) and reinvest the proceeds into assets that have underperformed (buying low). This systematic process removes emotion from the equation.</p>
            </div>
            <div className="p-4 border rounded-lg bg-orange-50 dark:bg-orange-900/30 border-orange-200 dark:border-orange-800">
              <h3 className="font-semibold flex items-center mb-2 text-orange-800 dark:text-orange-200">
                <Scale className="mr-2 h-5 w-5" /> It Manages Risk Creep
              </h3>
              <p className="text-sm text-muted-foreground">Without rebalancing, a portfolio's risk profile can change dramatically. If stocks outperform for several years, your portfolio could drift from a balanced 60/40 mix to an aggressive 80/20 mix without you realizing it. Rebalancing ensures your portfolio stays aligned with your intended risk tolerance.</p>
            </div>
             <div className="p-4 border rounded-lg bg-red-50 dark:bg-red-900/30 border-red-200 dark:border-red-800">
              <h3 className="font-semibold flex items-center mb-2 text-red-800 dark:text-red-200">
                <ThumbsDown className="mr-2 h-5 w-5" /> The Risk: Selling Your Winners
              </h3>
              <p className="text-sm text-muted-foreground">The primary trade-off of rebalancing is that it can dampen long-term returns. It forces you to sell your best-performing assets to buy underperforming ones. This feels safe, but it can be detrimental if your goal requires a higher rate of return. A risk-averse investor might feel comfortable, but it's mathematically impossible to build significant wealth at a low rate of return. Ultimately, your asset allocation should be determined by the return required to meet your goals. If your plan requires an 80/20 portfolio to succeed, rebalancing to a 60/40 mix out of fear is a losing strategy.</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Common Rebalancing Strategies</CardTitle>
            <CardDescription>There are two main approaches to rebalancing. Many investors use a combination of both.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
             <div className="p-4 border rounded-lg bg-card shadow-sm">
                <h3 className="font-semibold flex items-center mb-2"><Calendar className="mr-3 h-5 w-5 text-primary" />Calendar-Based</h3>
                <p className="text-sm text-muted-foreground mb-3">Rebalancing on a fixed schedule. This is the simplest approach.</p>
                <Alert variant="default" className="text-xs mb-3 bg-muted/50">
                    <AlertTitle>Example</AlertTitle>
                    <AlertDescription>Every year on your birthday, you review your portfolio and make the trades necessary to get back to your target.</AlertDescription>
                </Alert>
                 <p className="text-xs"><strong className="text-green-600">Pros:</strong> Simple, disciplined. <strong className="text-red-600">Cons:</strong> Can miss major moves between dates.</p>
            </div>
             <div className="p-4 border rounded-lg bg-card shadow-sm">
                <h3 className="font-semibold flex items-center mb-2"><Percent className="mr-3 h-5 w-5 text-primary" />Threshold-Based</h3>
                <p className="text-sm text-muted-foreground mb-3">Rebalancing only when an asset class deviates by a set percentage.</p>
                 <Alert variant="default" className="text-xs mb-3 bg-muted/50">
                    <AlertTitle>Example</AlertTitle>
                    <AlertDescription>Your target for US Stocks is 40%. If it grows to 45%, you rebalance. If it only drifts to 42%, you do nothing.</AlertDescription>
                </Alert>
                 <p className="text-xs"><strong className="text-green-600">Pros:</strong> More opportunistic. <strong className="text-red-600">Cons:</strong> Requires more monitoring.</p>
            </div>
          </CardContent>
          <CardFooter className="flex-col items-start gap-4">
            <div>
              <h4 className="font-semibold">Practical Application: How Often?</h4>
              <p className="text-sm text-muted-foreground">For most long-term investors, rebalancing annually or semi-annually is sufficient. This provides a good balance between maintaining your allocation and avoiding excessive trading. Another easy way to rebalance is to direct new contributions toward your under-allocated assets, bringing the portfolio back in line without having to sell anything.</p>
            </div>
             <Alert variant="destructive" className="bg-amber-50 dark:bg-amber-900/20 border-amber-300 dark:border-amber-700 w-full">
                <AlertTriangle className="h-4 w-4 text-amber-500" />
                <AlertTitle className="font-headline text-amber-900 dark:text-amber-200">A Note on Taxes</AlertTitle>
                <AlertDescription className="text-amber-800 dark:text-amber-300">
                    In a taxable brokerage account, selling appreciated assets to rebalance will trigger capital gains taxes. This is an important real-world cost to consider. In tax-advantaged accounts like an IRA or 401(k), you can rebalance without any tax consequences.
                </AlertDescription>
            </Alert>
          </CardFooter>
        </Card>
        
        <p className="text-sm text-muted-foreground">Once you master maintaining your strategic allocation, the next challenge for an active investor is optimizing how much to invest in each individual idea.</p>
        
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Advanced Topic: Position Sizing Frameworks</CardTitle>
            <CardDescription>For active investors, deciding how much capital to allocate to a single idea is a critical risk management decision. These frameworks provide a mental model for thinking about position sizing.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {positionSizingFrameworks.map(strat => (
              <div key={strat.title} className="p-4 border rounded-lg bg-card shadow-sm">
                <h3 className="font-semibold flex items-center mb-2">
                  <strat.icon className="mr-3 h-5 w-5 text-primary" />
                  {strat.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">{strat.description}</p>
                 <Alert variant="default" className="text-xs mb-3 bg-muted/50">
                    <AlertTitle>Simplified Application</AlertTitle>
                    <AlertDescription>{strat.simplified}</AlertDescription>
                </Alert>
                {strat.formula && (
                  <div className="my-3">
                    <p className="font-mono text-xs bg-muted p-2 rounded-md"><strong>Formula:</strong> {strat.formula}</p>
                    {strat.formulaDescription && <p className="text-xs text-muted-foreground mt-1 italic">{strat.formulaDescription}</p>}
                  </div>
                )}
                {strat.example && (
                  <Alert variant="default" className="text-xs mb-3 bg-muted/50">
                    <AlertTitle>Example Calculation</AlertTitle>
                    <AlertDescription>{strat.example}</AlertDescription>
                  </Alert>
                )}
                <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="p-2 bg-green-500/10 rounded-md">
                        <h4 className="font-semibold flex items-center text-green-700 dark:text-green-300">Pros</h4>
                        <p className="text-green-600 dark:text-green-400 mt-1">{strat.pros}</p>
                    </div>
                     <div className="p-2 bg-red-500/10 rounded-md">
                        <h4 className="font-semibold flex items-center text-red-700 dark:text-red-300">Cons</h4>
                        <p className="text-red-600 dark:text-red-400 mt-1">{strat.cons}</p>
                    </div>
                </div>
              </div>
            ))}
             <Alert variant="destructive" className="bg-amber-50 dark:bg-amber-900/20 border-amber-300 dark:border-amber-700">
              <AlertTriangle className="h-4 w-4 text-amber-500"/>
              <AlertTitle className="font-headline text-amber-900 dark:text-amber-200">For Advanced Investors Only</AlertTitle>
              <AlertDescription className="text-amber-800 dark:text-amber-300">These position sizing concepts are advanced tools for active portfolio management and are not necessary for passive index fund investors. For most people, a simple, consistent strategic allocation is the most effective approach.</AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you understand this key concept, return to the main roadmap to continue building your financial knowledge.
                </CardDescription>
            </CardHeader>
            <CardContent>
                 <Button asChild>
                    <Link href={`/roadmaps/invest-like-a-pro${fromStep ? `?from=${fromStep}` : ''}`}>
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
