
'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Sigma, TrendingUp, Waves, Target, Info, ArrowRight, BarChart3, LineChart } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const metrics: { icon: LucideIcon; title: string; question: string; description: string; example: string }[] = [
  {
    icon: TrendingUp,
    title: "Alpha",
    question: "Did I beat the market?",
    description: "Alpha measures the excess return of an investment relative to the return of a suitable benchmark index. It represents the value that a portfolio manager adds or subtracts from a fund's return. A positive alpha means the investment outperformed its benchmark after adjusting for risk.",
    example: "If a fund returned 12% and its benchmark index returned 10%, its alpha is +2%. This suggests the manager's stock selection was effective."
  },
  {
    icon: Waves,
    title: "Beta",
    question: "How volatile is my investment compared to the market?",
    description: "Beta measures a stock's or portfolio's volatility in relation to the overall market (which has a beta of 1.0). A beta greater than 1 indicates the asset is more volatile than the market, while a beta less than 1 indicates it's less volatile.",
    example: "A stock with a beta of 1.2 is expected to be 20% more volatile than the market. A stock with a beta of 0.8 is expected to be 20% less volatile."
  },
  {
    icon: Sigma,
    title: "Sharpe Ratio",
    question: "Am I being paid for the risk I'm taking?",
    description: "The Sharpe Ratio measures an investment's risk-adjusted return. It calculates the average return earned in excess of the risk-free rate per unit of volatility (standard deviation). A higher Sharpe Ratio indicates a better return for the amount of risk taken.",
    example: "Fund A returns 10% with high volatility, while Fund B returns 8% with very low volatility. Fund B might have a higher Sharpe Ratio, making it the better risk-adjusted investment. The 'risk-free rate' is typically the yield on short-term U.S. Treasury bills."
  },
  {
    icon: Target,
    title: "R-Squared (Goodness of Fit)",
    question: "How much of my fund's movement is explained by the market?",
    description: "R-squared measures the percentage of a portfolio's movements that can be explained by movements in its benchmark index. It ranges from 0 to 100.",
    example: "An S&P 500 index fund will have an R-squared very close to 100, meaning its performance is almost perfectly correlated with the index. An actively managed fund with an R-squared of 75 means 75% of its movement is due to the market, and 25% is due to factors unique to the fund."
  }
];

export default function PerformanceMeasurementPage() {
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
        <h1 className="text-3xl font-bold font-headline">Performance Measurement</h1>
        <p className="text-muted-foreground mt-2">Learn how to evaluate the performance of an investment or portfolio using key statistical measures like Alpha, Beta, & the Sharpe Ratio.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Info className="h-4 w-4" />
          <AlertTitle className="font-headline">Beyond Just Returns</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>Simply looking at an investment's return is not enough to judge its performance. Did it produce high returns by taking on excessive risk? Did it outperform its peers or just get lifted by a rising market? Performance measurement metrics help you answer these questions, providing a more sophisticated way to assess the skill of a fund manager or the effectiveness of a strategy.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">Key Performance Metrics</CardTitle>
            <CardDescription>These are four of the most common metrics used in portfolio analysis.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
            {metrics.map(metric => (
              <div key={metric.title} className="p-4 border rounded-lg bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800 text-black dark:text-white">
                <div className="flex items-center mb-2">
                  <metric.icon className="mr-2 h-5 w-5 text-primary/80" />
                  <h3 className="font-semibold">{metric.title}</h3>
                </div>
                <p className="text-sm italic text-muted-foreground mb-2">"{metric.question}"</p>
                <p className="text-sm text-muted-foreground mb-3">{metric.description}</p>
                 <Alert variant="default" className="bg-background/50 text-xs">
                    <AlertTitle className="font-semibold">Example</AlertTitle>
                    <AlertDescription>
                        {metric.example}
                    </AlertDescription>
                 </Alert>
              </div>
            ))}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center"><LineChart className="mr-2 h-5 w-5 text-primary"/>Visualizing Risk-Adjusted Returns</CardTitle>
            <CardDescription>This chart illustrates how different funds can offer different risk-vs-return profiles. The best investments are in the top-left quadrant: higher return for lower risk.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative border-2 border-dashed rounded-lg p-4 h-80 flex items-center justify-center">
              {/* Axis lines */}
              <div className="absolute top-1/2 left-0 w-full h-px bg-border"></div>
              <div className="absolute left-1/2 top-0 h-full w-px bg-border"></div>
              
              {/* Axis Labels */}
              <div className="absolute top-1 left-1/2 -translate-x-1/2 text-sm font-semibold">Higher Return</div>
              <div className="absolute bottom-1 left-1/2 -translate-x-1/2 text-sm font-semibold">Lower Return</div>
              <div className="absolute left-1 top-1/2 -translate-y-1/2 -rotate-90 text-sm font-semibold">Lower Risk</div>
              <div className="absolute right-1 top-1/2 -translate-y-1/2 -rotate-90 text-sm font-semibold">Higher Risk</div>

              {/* Quadrant Labels */}
              <div className="absolute top-4 left-4 p-2 bg-green-500/10 text-green-700 rounded-md text-center">
                <h4 className="font-bold text-xs">IDEAL</h4>
                <p className="text-xs">High Return, Low Risk</p>
              </div>
              <div className="absolute top-4 right-4 p-2 bg-yellow-500/10 text-yellow-700 rounded-md text-center">
                <h4 className="font-bold text-xs">AGGRESSIVE</h4>
                 <p className="text-xs">High Return, High Risk</p>
              </div>
              <div className="absolute bottom-4 left-4 p-2 bg-blue-500/10 text-blue-700 rounded-md text-center">
                <h4 className="font-bold text-xs">CONSERVATIVE</h4>
                 <p className="text-xs">Low Return, Low Risk</p>
              </div>
              <div className="absolute bottom-4 right-4 p-2 bg-red-500/10 text-red-700 rounded-md text-center">
                <h4 className="font-bold text-xs">POOR</h4>
                 <p className="text-xs">Low Return, High Risk</p>
              </div>

               {/* Fund Markers */}
              <div className="absolute top-[30%] right-[30%] flex items-center justify-center h-8 w-8 rounded-full bg-yellow-500 text-white font-bold text-sm" title="Fund A">A</div>
              <div className="absolute bottom-[35%] left-[35%] flex items-center justify-center h-8 w-8 rounded-full bg-blue-500 text-white font-bold text-sm" title="Fund B">B</div>

            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">How These Metrics Work Together</CardTitle>
            <CardDescription>No single metric tells the whole story. They are best used in combination to build a complete picture of an active manager's performance.</CardDescription>
          </CardHeader>
          <CardContent>
             <p className="text-sm text-muted-foreground">Imagine a fund manager claims to be a great stock picker. You can use these tools to verify their claim:</p>
             <ul className="list-disc pl-5 mt-4 space-y-2 text-sm">
                <li>First, you look at their Alpha. Is it consistently positive? This tells you if they are actually beating their benchmark.</li>
                <li>Next, you look at their R-Squared. If it's very high (like 98), it means the fund's returns are almost entirely explained by the market, suggesting their 'alpha' might just be luck. A lower R-squared (e.g., 85) means the manager's specific bets are having a real impact on returns, making the alpha more meaningful.</li>
                <li>Then, you check the Beta. A beta close to 1.0 with a positive alpha might suggest skill. A very high beta might suggest they are just taking on more market risk than the benchmark.</li>
                <li>Finally, you examine the Sharpe Ratio. This tells you if the returns they generated were worth the risk they took. A high-alpha fund with a low Sharpe Ratio might be achieving its returns through excessive, stomach-churning volatility.</li>
             </ul>
          </CardContent>
        </Card>
        
        <Alert className="bg-callout text-callout-foreground border-blue-200 dark:border-blue-800">
          <BarChart3 className="h-4 w-4" />
          <AlertTitle className="font-headline">Practical Application</AlertTitle>
          <AlertDescription>
            These metrics are especially useful when comparing two actively managed mutual funds or when evaluating if your financial advisor's active management is adding value beyond what you could achieve with a simple, low-cost index fund. For most people, a well-diversified, low-cost portfolio is the most effective long-term strategy, as consistently generating positive alpha is extremely difficult. You can usually find these metrics published on financial data platforms like Morningstar or on a fund's official fact sheet.
          </AlertDescription>
        </Alert>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you understand these key metrics, return to the main roadmap to continue building your financial knowledge.
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
