
'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, TrendingUp, Info, Scale, ThumbsDown, Repeat, DollarSign, Gem, ShieldCheck, ThumbsUp } from 'lucide-react';
import Link from 'next/link';

const investingPrinciples = [
  {
    icon: TrendingUp,
    title: "1. Home Run Mentality: Bet Big on High Conviction Ideas",
    description: "Druckenmiller is famous for his philosophy of making huge, concentrated bets when he has strong conviction. He believes that diversification can lead to mediocrity and that the way to achieve truly spectacular returns is to bet aggressively when you see a clear opportunity. This requires immense confidence in your analysis."
  },
  {
    icon: Repeat,
    title: "2. Flexibility & Global Macro Thinking",
    description: "Unlike investors who stick to one style (like 'value' or 'growth'), Druckenmiller is a global macro investor. He is completely flexible, willing to trade stocks, bonds, currencies, and commodities, both long and short, based on his top-down view of the global economy, interest rates, and central bank policies."
  },
  {
    icon: Scale,
    title: "3. The Asymmetric Payoff: 'Heads, I win; tails, I don't lose much.'",
    description: "This concept, shared with his mentor George Soros, is central to his approach. He actively seeks out investments where the potential upside is many times greater than the potential downside. This focus on asymmetric risk/reward is a key risk management tool.",
  },
  {
    icon: ShieldCheck,
    title: "4. Capital Preservation is Job Number One",
    description: "Despite his reputation for aggressive bets, Druckenmiller's primary focus is on protecting capital. His mantra is to 'focus on the downside, and the upside will take care of itself.' He believes that if you can avoid large losses, the winning investments will compound to produce great long-term results."
  },
  {
    icon: DollarSign,
    title: "5. Respect the Market ('Don't Fight the Tape')",
    description: "He emphasizes that the market is a discounting mechanism, always looking ahead. By the time an economic trend is obvious, it's often priced in. He believes in respecting the market's momentum, stating you shouldn't bet against a strong trend without a very compelling reason. This humility prevents him from fighting strong bull or bear markets unnecessarily."
  },
];

export default function InvestorDruckenmillerPage() {
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
        <h1 className="text-3xl font-bold font-headline">Learn From The Best: Stanley Druckenmiller</h1>
        <p className="text-muted-foreground mt-2">Learn from the legendary macro investor known for his aggressive, high-conviction bets and incredible track record.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Brain className="h-4 w-4" />
          <AlertTitle className="font-headline">The Macro Trader</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>Stanley Druckenmiller is an investing legend, famous for his incredible track record as the lead portfolio manager for George Soros's Quantum Fund and later at his own fund, Duquesne Capital. Over a 30-year career from 1981-2010, he reportedly never had a single down year and achieved a compounded average annual return of approximately 30%. He now manages his wealth through a family office.</p>
            <p className="font-semibold">His style is a masterclass in global macro investing: making large, decisive bets on his view of the world economy, from currencies and bonds to stocks and commodities.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">The Druckenmiller Philosophy: Core Principles</CardTitle>
            <CardDescription>Druckenmiller's approach is defined by flexibility, conviction, and a relentless focus on risk management.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {investingPrinciples.map(p => (
              <div key={p.title} className="p-4 border rounded-lg bg-muted/30">
                <h3 className="font-semibold flex items-center mb-2">
                  <p.icon className="mr-3 h-5 w-5 text-primary" />
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground">{p.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">Notable Investments: Wins and Losses</CardTitle>
            <CardDescription>Druckenmiller's career is marked by several historic trades.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border bg-card">
                  <h4 className="font-semibold text-green-600 flex items-center"><ThumbsUp className="mr-2 h-4 w-4" />The Big Win: 'Breaking the Bank of England' (1992)</h4>
                  <p className="text-sm text-muted-foreground mt-1">Working with George Soros, Druckenmiller was the architect of the famous bet against the British Pound. He recognized that the UK's economic position made it impossible to maintain the pound's peg to the German Deutsche Mark. They made a massive, multi-billion dollar short bet against the pound, which ultimately forced the UK to devalue its currency, netting the Quantum Fund a profit of over $1 billion.</p>
              </div>
              <div className="p-4 rounded-lg border bg-card">
                  <h4 className="font-semibold text-destructive flex items-center"><ThumbsDown className="mr-2 h-4 w-4" />The Big Loss: The Dot-Com Bubble (2000)</h4>
                  <p className="text-sm text-muted-foreground mt-1">Druckenmiller has openly called his actions during the dot-com bubble his greatest mistake. After successfully riding the tech boom, he sold too early in 1999, then shorted the market and lost heavily as the bubble continued to inflate. In a moment of capitulation driven by FOMO, he famously bought back into tech stocks in early 2000, just before the crash, losing billions in a single day. It's a powerful lesson that even the greatest investors are susceptible to emotional errors.</p>
              </div>
          </CardContent>
           <CardFooter>
            <Alert variant="default" className="w-full bg-callout text-callout-foreground border-blue-200 dark:border-blue-800">
                <Info className="h-4 w-4" />
                <AlertTitle className="font-semibold">The Lesson</AlertTitle>
                <AlertDescription>
                 Druckenmiller's career demonstrates that spectacular returns often come from having the courage to make a few large, well-researched bets. It also shows the importance of intellectual flexibility and being willing to change your mind quickly. His biggest mistake serves as a critical reminder that even legends can get caught up in market euphoria, reinforcing the need for emotional discipline.
                </AlertDescription>
            </Alert>
           </CardFooter>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>Key Quotes</CardTitle>
                 <CardDescription>Druckenmiller's wisdom on risk and conviction.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 prose-sm max-w-none dark:prose-invert">
                 <blockquote className="border-l-4 pl-4 italic">
                    "It’s not whether you’re right or wrong that’s important, but how much money you make when you’re right and how much you lose when you’re wrong."
                 </blockquote>
                 <blockquote className="border-l-4 pl-4 italic">
                    "The best economist I know is the market."
                 </blockquote>
            </CardContent>
        </Card>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you've learned about Stan Druckenmiller's macro approach, continue exploring the wisdom of other great investors.
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
