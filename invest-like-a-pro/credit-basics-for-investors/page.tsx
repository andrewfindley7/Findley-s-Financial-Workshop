
'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { BarChart, ArrowRight, TrendingUp, TrendingDown, Scale, ShieldCheck, Info, ThumbsUp, ThumbsDown, AlertTriangle, Brain } from 'lucide-react';
import Link from 'next/link';

const creditConcepts = [
  {
    title: "Credit Spreads",
    description: "A credit spread is the difference in yield between a corporate bond and a government bond of the same maturity. It represents the extra return investors demand for taking on the additional risk that the corporation might default.",
    whatItSignals: "When credit spreads widen, it usually means investors are becoming more cautious and demanding higher compensation for risk. This often happens during periods of economic uncertainty or stress. When spreads narrow, it means investors feel confident about the economy and are more willing to take on risk.",
    analogy: "Think of it like a risk premium on a loan. If you lend money to a friend you don’t fully trust to pay you back, you would charge a higher interest rate. That’s a wider spread."
  },
  {
    title: "Duration",
    description: "Duration measures how sensitive a bond’s price is to changes in interest rates. A bond with higher duration will fall more in price when interest rates rise and rise more when interest rates fall.",
    whatItSignals: "It’s a direct indicator of interest rate risk. Long-term bonds have higher duration, so they move more dramatically with rate changes. Shorter-term bonds move less.",
    analogy: "Imagine a seesaw. A longer seesaw (higher duration) moves more dramatically with a small push, while a shorter one moves less."
  },
  {
    title: "Convexity",
    description: "Convexity is a more refined measure that captures how a bond’s price changes as yields move up or down. It builds on the concept of duration to describe the shape of the bond’s price curve.",
    whatItSignals: "Positive convexity means that when interest rates fall, a bond’s price rises at an accelerating rate, and when rates rise, it falls at a slower rate. It’s a favorable characteristic because it provides a little extra protection against large rate swings.",
    analogy: "If duration tells you how much the seesaw moves, convexity tells you whether the motion speeds up or slows down as it moves."
  }
];

const bondRatings = [
    {
        category: 'Investment Grade (IG)',
        ratings: 'AAA to BBB',
        description: "Issued by companies with strong balance sheets and a low risk of default. They offer lower yields but are considered safer and more stable.",
        riskReward: 'Lower risk, lower yield.',
        isPositive: true
    },
    {
        category: 'High-Yield (HY) / "Junk"',
        ratings: 'BB and below',
        description: "Issued by companies with weaker financial positions or higher default risk. They must offer higher yields to attract investors willing to take on that risk.",
        riskReward: 'Higher risk, higher potential yield.',
        isPositive: false
    }
]

export default function CreditBasicsForInvestorsPage() {
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
        <h1 className="text-3xl font-bold font-headline">Credit Basics for Investors</h1>
        <p className="text-muted-foreground mt-2">Understanding credit spreads, duration, and the difference between high-yield and investment-grade bonds.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <BarChart className="h-4 w-4" />
          <AlertTitle className="font-headline">The Pulse of the Economy</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>The bond market is often called the “smart money” of finance. While the stock market can be driven by emotion and narrative, the bond market is guided by math, risk, and probability. Understanding a few core credit concepts can give you insight into the health of the economy and the confidence level of investors across the market.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">Key Credit Market Concepts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {creditConcepts.map(item => (
              <div key={item.title} className="p-4 border rounded-lg bg-card shadow-sm">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-1 mb-3">{item.description}</p>
                <div className="grid md:grid-cols-2 gap-4 text-xs">
                    <div className="p-2 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 rounded-md">
                        <p className="font-semibold mb-1 text-blue-800 dark:text-blue-300">What it signals:</p>
                        <p className="text-blue-700 dark:text-blue-400">{item.whatItSignals}</p>
                    </div>
                     <div className="p-2 bg-green-50 dark:bg-green-900/30 border border-green-200 rounded-md">
                        <p className="font-semibold mb-1 text-green-800 dark:text-green-300">Simple analogy:</p>
                        <p className="text-green-700 dark:text-green-400">{item.analogy}</p>
                    </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">Investment Grade vs. High-Yield Bonds</CardTitle>
            <CardDescription>Bond ratings from agencies like Moody’s or S&P help investors gauge credit quality and the risk of default.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            {bondRatings.map(item => (
              <div key={item.category} className={`p-4 border rounded-lg ${item.isPositive ? 'bg-blue-50 dark:bg-blue-900/30 border-blue-200' : 'bg-amber-50 dark:bg-amber-900/30 border-amber-200'}`}>
                <h3 className={`font-semibold text-lg ${item.isPositive ? 'text-blue-800 dark:text-blue-200' : 'text-amber-800 dark:text-amber-200'}`}>
                  {item.category} ({item.ratings})
                </h3>
                <p className="text-sm text-muted-foreground my-2">{item.description}</p>
                <p className="text-sm font-semibold">{item.riskReward}</p>
              </div>
            ))}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center"><Brain className="mr-2 h-5 w-5"/>What the Bond Market is Telling You</CardTitle>
            <CardDescription>How to interpret bond market signals to understand the health of the economy.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
              <div>
                  <h4 className="font-semibold">How the Market Reads Bond Yields</h4>
                  <p className="text-sm text-muted-foreground mt-1">When bond prices fall, yields rise. Rising yields can signal several things: expectations of stronger economic growth, higher inflation, or an increased supply of bonds (e.g., from government borrowing). Conversely, falling yields typically indicate slowing growth or a 'flight to safety' where investors sell riskier assets like stocks and buy safer government bonds.</p>
              </div>
              <div className="border-t pt-4">
                  <h4 className="font-semibold">The Yield Curve: A Recession Indicator</h4>
                  <p className="text-sm text-muted-foreground mt-1">The yield curve plots the interest rates of bonds having equal credit quality but differing maturity dates. A normal, upward-sloping curve (where long-term bonds have a higher yield than short-term ones) signals a healthy economy. An inverted curve, where short-term rates are higher than long-term rates, is a historically reliable leading indicator of a recession. This happens because the central bank is often raising short-term rates to fight current inflation, while bond traders are betting that this action will slow future growth and inflation, thus pushing long-term rates down. It is a probabilistic signal, not a deterministic guarantee.</p>
              </div>
               <div className="border-t pt-4">
                  <h4 className="font-semibold">How Equity Investors Use Bond Signals</h4>
                  <p className="text-sm text-muted-foreground mt-1">Equity investors watch the bond market closely because it often leads the stock market in reacting to economic changes. Rising yields can reduce stock valuations, as higher rates make future corporate earnings less valuable in today's dollars and make the 'risk-free' return from bonds more attractive by comparison. An inverted yield curve or widening credit spreads can be a warning sign of an impending economic slowdown that will hurt corporate profits, prompting stock investors to become more defensive.</p>
              </div>
          </CardContent>
           <CardFooter>
                <Alert variant="default" className="bg-callout text-callout-foreground border-blue-200 dark:border-blue-800">
                    <Info className="h-4 w-4"/>
                    <AlertTitle className="font-semibold">Why is the Bond Market "Smarter"?</AlertTitle>
                    <AlertDescription>
                        While stock investors might focus on a company's story or growth narrative, bond investors are singularly focused on one thing: getting their money back, with interest. This makes them intensely focused on the downside risk and the underlying financial health of a company or economy. They analyze inflation expectations, Federal Reserve policy, and economic growth indicators with forensic detail. Because of this risk-averse nature, the bond market often leads equity markets in reacting to subtle economic shifts.
                    </AlertDescription>
                </Alert>
           </CardFooter>
        </Card>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you have a better understanding of the credit markets, return to the main roadmap to continue your learning.
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
