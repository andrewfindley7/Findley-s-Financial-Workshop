'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Activity, Brain, ArrowRight, Lightbulb, TrendingDown, TrendingUp, ThumbsUp, ThumbsDown, Info } from 'lucide-react';
import Link from 'next/link';

const emotions = [
    {
        icon: TrendingDown,
        title: "Fear",
        description: "In the market, fear manifests as panic selling. When headlines are negative, prices are falling, and a recession seems imminent, the herd instinct is to sell everything to avoid further losses. This is the point of maximum pessimism.",
        investorAction: "For a prepared investor, widespread fear is a signal of opportunity. It's when high-quality businesses can often be purchased at a significant discount to their intrinsic value. This is the time to be 'greedy when others are fearful.'",
        isPositive: false,
    },
    {
        icon: TrendingUp,
        title: "Greed",
        description: "Greed manifests as FOMO (Fear Of Missing Out). When a stock or asset is skyrocketing and everyone is boasting about their profits, the herd instinct is to pile in and chase the 'easy money', often without regard for the underlying value of the asset.",
        investorAction: "For a disciplined investor, widespread greed is a signal of high risk and a time for caution. When valuations become detached from reality and everyone is euphoric, it's often a good time to trim positions or avoid buying altogether. This is being 'fearful when others are greedy.'",
        isPositive: true,
    }
];

export default function FearAndGreedPage() {
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
        <h1 className="text-3xl font-bold font-headline">Fear & Greed: The Two Forces That Move Markets</h1>
        <p className="text-muted-foreground mt-2">Understanding the two primary emotions that drive market cycles and how to use them to your advantage.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Brain className="h-4 w-4" />
          <AlertTitle className="font-headline">The Investor's Chief Problem: The Battle Within</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>Successful investing is less about complex formulas and more about mastering the psychological battlefield in your own mind. The market is driven by human emotions, and the two most powerful are Fear and Greed. These primal forces cause investors to act as a herd, buying high in a panic of FOMO and selling low in a panic of fear.</p>
            <p>As investor Benjamin Graham famously said, "The investor’s chief problem—and even his worst enemy—is likely to be himself." This lesson is about recognizing these forces and building the discipline to act against them.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">The Two Extremes of Market Sentiment</CardTitle>
             <CardDescription>A disciplined investor understands both extremes and knows how to react to each.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
            {emotions.map(item => (
              <div key={item.title} className={`p-4 border rounded-lg ${item.isPositive ? 'bg-red-50 dark:bg-red-900/30 border-red-200' : 'bg-green-50 dark:bg-green-900/30 border-green-200'}`}>
                <div className="flex items-center mb-2">
                  <item.icon className={`mr-2 h-5 w-5 ${item.isPositive ? 'text-red-600' : 'text-green-600'}`} />
                  <h3 className={`font-semibold ${item.isPositive ? 'text-red-700 dark:text-red-200' : 'text-green-700 dark:text-green-200'}`}>{item.title}: The Herd's Instinct</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                 <Alert variant="default" className="bg-background/50">
                    <AlertTitle className="font-semibold text-sm">The Disciplined Investor's Response:</AlertTitle>
                    <AlertDescription className="text-xs">{item.investorAction}</AlertDescription>
                 </Alert>
              </div>
            ))}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="font-headline flex items-center">
              <Activity className="mr-2 h-5 w-5 text-primary" />
              A Practical Tool: The Fear & Greed Index
            </CardTitle>
            <CardDescription>This popular tool attempts to measure current market sentiment by analyzing several market factors—such as momentum, volatility, and put/call option ratios—to generate a score from 0 (Extreme Fear) to 100 (Extreme Greed). Here’s how a contrarian investor interprets it:</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 border rounded-lg bg-muted/40">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg bg-card shadow-sm">
                        <h4 className="font-semibold flex items-center mb-2"><ThumbsDown className="mr-2 h-4 w-4"/>What 'Extreme Fear' (0-25) Signals</h4>
                        <p className="text-sm text-muted-foreground mb-3">A low score indicates panic selling and a flight to safety. For a contrarian, this is a potential buy signal. It suggests the market may be oversold, presenting opportunities to buy quality assets at a discount.</p>
                        <p className="text-sm text-muted-foreground"><strong>Example:</strong> During the market panic on April 7th, 2025, the index plunged to a reading of 4, signaling extreme fear. This was the point of maximum pessimism. Investors who had cash and the discipline to buy quality stocks on that day were handsomely rewarded over the following year as the market recovered.</p>
                    </div>
                    <div className="p-4 border rounded-lg bg-card shadow-sm">
                        <h4 className="font-semibold flex items-center mb-2"><ThumbsUp className="mr-2 h-4 w-4"/>What 'Extreme Greed' (75-100) Signals</h4>
                        <p className="text-sm text-muted-foreground mb-3">A high score indicates euphoria and excessive risk-taking. For a contrarian, this is a signal of high risk and a time for caution. It suggests the market may be overbought and due for a correction.</p>
                        <p className="text-sm text-muted-foreground"><strong>Example:</strong> In late 2021, after a massive market run-up, "meme stocks" were trading at absurd valuations and unprofitable tech companies were reaching all-time highs. The index would have registered "Extreme Greed" (often above 90), signaling that market sentiment had become disconnected from fundamentals. This euphoria was a warning sign just before the significant market downturn in 2022.</p>
                    </div>
                </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">How to Overcome Fear and Greed: A Checklist</CardTitle>
          </CardHeader>
          <CardContent>
             <ul className="list-disc pl-5 space-y-2 text-sm">
                 <li><strong>Have a Written Investment Plan:</strong> Knowing why you own what you own provides the conviction to hold on during downturns and avoid chasing hot stocks.</li>
                 <li><strong>Focus on the Long Term:</strong> The daily noise of the market is a distraction. Focus on the 5-10 year prospects of the businesses you own, not their 5-10 day stock price movements.</li>
                 <li><strong>Automate Your Investing:</strong> Consistently investing the same amount of money every month (dollar-cost averaging) is a powerful way to remove emotion and automatically buy more shares when prices are low.</li>
                 <li><strong>Turn Off the News:</strong> Financial media is often designed to provoke an emotional reaction. Reduce your exposure to it.</li>
             </ul>
          </CardContent>
        </Card>

         <Alert variant="default" className="bg-primary/5 border-primary/20">
            <Lightbulb className="h-4 w-4" />
            <AlertTitle className="font-headline text-primary">The Final Takeaway: Think Before You Act</AlertTitle>
            <AlertDescription className="text-lg italic text-center py-2">
              "The crowd feels before it thinks. The disciplined investor thinks before they act."
            </AlertDescription>
        </Alert>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you understand these powerful market emotions, return to the main roadmap to continue building your financial knowledge.
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

    
