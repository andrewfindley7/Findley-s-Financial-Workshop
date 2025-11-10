'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Puzzle, Layers, Brain, ArrowRight, ThumbsDown, ThumbsUp, Scale, UsersRound, Info } from 'lucide-react';
import Link from 'next/link';

export default function ArtOfConcentrationPage() {
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
        <h1 className="text-3xl font-bold font-headline">The Art of Concentration</h1>
        <p>Understanding the philosophy of focused investing and the dangers of diversifying for its own sake.</p>
      </div>
      <div className="space-y-6">
        <Alert variant="destructive">
          <Puzzle className="h-4 w-4" />
          <AlertTitle className="font-headline">What is "Diworsification"?</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>The term "diworsification" was coined by legendary investor Peter Lynch to describe the process of adding investments to a portfolio in such a way that the risk/reward profile worsens. It's diversification without knowledge buying a wide variety of assets simply for the sake of owning more things. This often leads to owning a collection of mediocre businesses you don't understand, which dilutes the impact of your best ideas and provides a false sense of security.</p>
          </AlertDescription>
        </Alert>
        
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
              <Brain className="mr-2 h-5 w-5 text-primary" />
              The Alternative: A Concentrated, High-Conviction Portfolio
            </CardTitle>
            <CardDescription>The opposite of diworsification is purposeful concentration. This is an advanced strategy built on deep knowledge and conviction.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm">This philosophy posits that the best way to achieve superior returns is to invest heavily in your very best ideas the handful of businesses you know inside and out and believe have exceptional long-term prospects. Instead of owning 50 different stocks, a concentrated investor might own only a few.</p>
            <blockquote className="border-l-4 border-primary pl-4 italic text-sm">
              "The whole secret of investment is to find places where it's safe and wise to non-diversify. It's just that simple." - Charlie Munger
            </blockquote>
             <Alert className="mt-4 bg-callout text-callout-foreground border-blue-200 dark:border-blue-800">
                <AlertTitle className="font-semibold">When Concentration is a Good Thing</AlertTitle>
                <AlertDescription>
                    <p>Concentration becomes a powerful and rational strategy when you have done the rigorous work of business analysis and have identified an exceptional company trading at a fair price. If you have deep knowledge of an industry and find a business with a durable competitive advantage and great management, Munger and Buffett would argue that it is riskier to diversify your capital into your 20th-best idea than it is to allocate more capital to your absolute best idea.</p>
                    <p className="mt-2 font-semibold">In this view, true risk comes from not knowing what you're doing. If you have a high degree of certainty about an investment, concentration is the logical course of action to maximize your returns.</p>
                </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
              <UsersRound className="mr-2 h-5 w-5 text-primary" />
              Concentration in Action: Real-World Examples
            </CardTitle>
            <CardDescription>The world's greatest investors built their records not by diversifying, but by making a few large, high-conviction bets.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
              <div className="p-4 border rounded-lg bg-muted/40">
                  <h4 className="font-semibold text-lg">Charlie Munger's Early Partnership</h4>
                  <p className="text-sm mt-1">Before joining Berkshire Hathaway, Munger ran his own investment partnership from 1962 to 1975, achieving a 19.8% annualized return (vs. 5% for the Dow). His strategy was extreme concentration. He often held just 3-5 stocks. One year, a single position in a company that manufactured electrical transformers represented over 40% of the portfolio's assets. He believed that when you found a truly great opportunity, it was a mistake not to bet heavily.</p>
              </div>
               <div className="p-4 border rounded-lg bg-muted/40">
                  <h4 className="font-semibold text-lg">Warren Buffett and American Express</h4>
                  <p className="text-sm mt-1">In 1963, American Express was embroiled in the "Salad Oil Scandal" when a major client defaulted on loans secured by nonexistent salad oil. The market panicked, fearing AmEx would be liable and go bankrupt. Buffett did his own research, observing that customers and merchants were still using AmEx cards and traveler's checks, indicating the brand was undamaged. Convinced the fear was an overreaction, he invested 40% of his partnership's entire capital into American Express stock. The bet paid off handsomely as the company's stock more than tripled in two years.</p>
              </div>
               <div className="p-4 border rounded-lg bg-muted/40">
                  <h4 className="font-semibold text-lg">Bill Ackman and Canadian Pacific Railway</h4>
                  <p className="text-sm mt-1">In 2011, activist investor Bill Ackman's fund, Pershing Square, invested over $1.4 billion to become the largest shareholder in Canadian Pacific, making it over 20% of his portfolio. He believed the railroad was a fantastic business that was being terribly mismanaged. He launched a proxy battle, replaced the CEO with a legendary rail executive, and oversaw a massive operational turnaround. The stock subsequently soared over 1,000%, a classic example of how a concentrated, activist bet can create enormous returns.</p>
              </div>
          </CardContent>
           <CardFooter>
            <Alert className="w-full bg-callout text-callout-foreground border-blue-200 dark:border-blue-800">
                <Info className="h-4 w-4" />
                <AlertTitle className="font-semibold">The Common Thread</AlertTitle>
                <AlertDescription>
                 In each case, the investor had done extensive research, had deep conviction in their thesis, and was willing to bet big when they believed they had a significant edge. This is the opposite of casual diversification.
                </AlertDescription>
            </Alert>
           </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline flex items-center">
              <Scale className="mr-2 h-5 w-5 text-primary" />
              The Trade-Offs: Higher Returns vs. Higher Specific Risk
            </CardTitle>
            <CardDescription>Concentration is a double-edged sword. Understanding the risks is as important as understanding the potential rewards.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800">
              <h3 className="font-semibold flex items-center mb-2 text-green-800 dark:text-green-200">
                <ThumbsUp className="mr-2 h-5 w-5" /> The Upside of Concentration
              </h3>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>Magnified Returns: When one of your high-conviction ideas performs exceptionally well, it has a significant positive impact on your overall portfolio.</li>
                <li>Deeper Knowledge: By focusing on only a few companies, you can develop a much deeper understanding of their businesses, competitive advantages, and risks.</li>
                <li>Incentive for Diligence: Knowing that a large portion of your capital is in a single name forces a higher standard of research and due diligence.</li>
              </ul>
            </div>
            <div className="p-4 border rounded-lg bg-red-50 dark:bg-red-900/30 border-red-200 dark:border-red-800">
              <h3 className="font-semibold flex items-center mb-2 text-red-800 dark:text-red-200">
                <ThumbsDown className="mr-2 h-5 w-5" /> The Downside of Concentration
              </h3>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>Magnified Losses: If you are wrong about one of your core holdings, it will have a significant negative impact on your portfolio.</li>
                <li>Higher Volatility: A concentrated portfolio will be more volatile than a diversified one, as its performance is tied to the fate of just a few companies.</li>
                <li>Unsystematic Risk: You are fully exposed to company-specific risks (e.g., a product failure, a key executive leaving) that broad diversification would mitigate.</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Alert>
          <Layers className="h-4 w-4" />
          <AlertTitle className="font-headline">Concentration vs. Diversification: Which is Right for You?</AlertTitle>
          <AlertDescription>
            <p className="mt-2">There is no single right answer. The choice depends on your knowledge, skill, temperament, and commitment to research.</p>
             <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Broad Diversification (e.g., index funds) is the most proven and effective path for the vast majority of investors. Its goal is to eliminate unsystematic risk and capture the overall market's return with minimal effort.</li>
                <li>Concentration is a path for the active, business-like investor who is willing to do the extensive work required to develop a deep understanding of a few select companies. It is a strategy for trying to beat the market, not just match it.</li>
            </ul>
          </AlertDescription>
        </Alert>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you understand this key concept, return to the main roadmap to continue building your financial knowledge.
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
