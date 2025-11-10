'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Info, PieChart, ThumbsDown, Layers, ThumbsUp } from 'lucide-react';
import Link from 'next/link';

const investingPrinciples = [
  {
    icon: PieChart,
    title: "1. Buy the Haystack, Not the Needle",
    description: "Bogle argued that trying to find the one winning stock (the 'needle') is a loser's game. Instead of searching for the needle, he advocated for simply 'buying the whole haystack' by owning a fund that tracks a broad market index like the S&P 500. This provides instant diversification and guarantees you capture the market's overall return."
  },
  {
    icon: ThumbsDown,
    title: "2. Costs Matter: The Tyranny of Compounding Costs",
    description: "This was Bogle's most passionate and revolutionary idea. He demonstrated that investment fees, even ones that seem small, have a devastating effect on long-term returns due to the power of compounding. Minimizing costs (like expense ratios and trading fees) is the most important and controllable factor in investment success."
  },
  {
    icon: Layers,
    title: "3. Stay the Course",
    description: "Bogle believed in 'reversion to the mean' the idea that over time, asset class returns and investment strategies tend to revert to their long-term averages. Chasing yesterday's winning fund is a fool's errand. The key is to create a sensible asset allocation plan and stick with it through good times and bad, letting the power of compounding work for you without interruption."
  },
];

export default function InvestorBoglePage() {
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
        <h1 className="text-3xl font-bold font-headline">Learn From The Best: John C. Bogle</h1>
        <p className="text-muted-foreground mt-2">Learn from the founder of Vanguard and the revolutionary champion of the individual investor.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Brain className="h-4 w-4" />
          <AlertTitle className="font-headline">The Common Sense Revolutionary</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>John C. "Jack" Bogle was the founder of The Vanguard Group and the creator of the first index fund available to the public. His career was a crusade to democratize investing, driven by a simple, powerful idea: that the average investor could achieve better results not by trying to beat the market, but by simply buying the market at the lowest possible cost.</p>
            <p className="font-semibold">His philosophy has saved American investors hundreds of billions of dollars in fees and fundamentally changed the way millions of people save for retirement. Today, index funds account for over half of all U.S. equity fund assets, a testament to the power of his idea.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">The Bogle Philosophy: Core Principles</CardTitle>
            <CardDescription>Bogle's approach was built on a foundation of math, common sense, and an unwavering focus on the end investor.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {investingPrinciples.map(p => (
              <div key={p.title} className="p-4 border rounded-lg bg-muted/30">
                <h3 className="font-semibold flex items-center mb-2">
                  <p.icon className="mr-3 h-5 w-5 text-primary" />
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground">{p.description}</p>
                 {p.title === "3. Stay the Course" && (
                    <Alert variant="default" className="mt-3 text-xs bg-callout text-callout-foreground border-blue-200 dark:border-blue-800">
                        <Brain className="h-4 w-4"/>
                        <AlertTitle>The Behavioral Benefit</AlertTitle>
                        <AlertDescription>This principle is also a powerful defense against emotional mistakes. By committing to a passive, long-term strategy, investors are less tempted to engage in destructive market-timing or panic-selling during downturns.</AlertDescription>
                    </Alert>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
        
         <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">Notable Wins & Losses</CardTitle>
            <CardDescription>For Bogle, his 'investment' was the idea of indexing itself.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border bg-card">
                  <h4 className="font-semibold text-green-600 flex items-center"><ThumbsUp className="mr-2 h-4 w-4" />The Big Win: The Index Fund</h4>
                  <p className="text-sm text-muted-foreground mt-1">In 1976, Bogle launched the First Index Investment Trust (now the Vanguard 500 Index Fund), the first publicly available index fund. It was mocked by the Wall Street establishment as "Bogle's Folly" and "a guaranteed ticket to mediocrity." It raised a fraction of its initial goal. Today, it is one of the largest mutual funds in the world with over $900 billion in assets, proving that owning great American businesses at a minimal cost is a powerful formula for wealth creation.</p>
              </div>
              <div className="p-4 rounded-lg border bg-card">
                  <h4 className="font-semibold text-amber-600 flex items-center"><Info className="mr-2 h-4 w-4" />The 'Loss' of Control: The Rise of ETFs</h4>
                  <p className="text-sm text-muted-foreground mt-1">Ironically, Bogle was a fierce critic of Exchange-Traded Funds (ETFs), even as Vanguard itself became a dominant player in the ETF market. He worried that because ETFs could be traded like stocks all day long, they would encourage the very short-term speculation and market-timing that his 'buy and hold' philosophy was designed to prevent. He saw them as a dangerous tool that could tempt investors away from the simple, patient path of long-term compounding.</p>
              </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">Bogle's Most Famous Quotes</CardTitle>
            <CardDescription>These quotes capture his straightforward and investor-centric wisdom.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 prose-sm max-w-none dark:prose-invert">
             <blockquote className="border-l-4 pl-4 italic">"Don't look for the needle in the haystack. Just buy the haystack."</blockquote>
             <blockquote className="border-l-4 pl-4 italic">"The miracle of compounding returns is overwhelmed by the tyranny of compounding costs."</blockquote>
             <blockquote className="border-l-4 pl-4 italic">"The stock market is a giant distraction from the business of investing."</blockquote>
             <blockquote className="border-l-4 pl-4 italic">"Your portfolio is like a bar of soap. The more you handle it, the smaller it gets."</blockquote>
          </CardContent>
        </Card>
        
        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you've learned from the champion of passive investing, continue exploring the wisdom of other great investors.
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
