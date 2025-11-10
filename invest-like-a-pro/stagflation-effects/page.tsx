'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { ArrowRight, CloudFog, TrendingDown, Info, ShoppingCart, Briefcase, ThumbsDown, DollarSign, Brain, History } from 'lucide-react';
import Link from 'next/link';

export default function StagflationEffectsPage() {
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
        <h1 className="text-3xl font-bold font-headline">Stagflation and Its Effects</h1>
        <p className="text-muted-foreground mt-2">Understanding the challenging economic environment of high inflation and stagnant growth.</p>
      </div>
      <div className="space-y-6">
        <Alert variant="destructive">
          <CloudFog className="h-4 w-4" />
          <AlertTitle className="font-headline">What is Stagflation?</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>While inflation is a rise in prices and deflation is a fall, stagflation is a uniquely painful combination of stagnant economic growth, high unemployment, and persistent high inflation, all occurring at the same time. It's a "worst of both worlds" scenario that poses a significant challenge for policymakers and investors.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">The Central Banker's Nightmare: The Policy Dilemma</CardTitle>
            <CardDescription>Stagflation is particularly difficult because the standard tools used by central banks work at cross-purposes.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">The typical response to high inflation is to raise interest rates to cool down the economy. However, in a stagflationary environment, this action worsens the 'stagnation' part by increasing unemployment and potentially triggering a deeper recession. Conversely, the typical response to a recession is to lower interest rates to stimulate spending. But this action would pour fuel on the fire of inflation. This creates a policy trap with no easy answers.</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl text-destructive flex items-center">
              <TrendingDown className="mr-2 h-5 w-5"/> The Damaging Effects of Stagflation
            </CardTitle>
            <CardDescription>Stagflation creates a "no-win" scenario for many traditional assets and for consumers.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            <div className="p-4 border border-destructive/20 rounded-lg bg-card shadow-sm">
              <h3 className="font-semibold flex items-center mb-2">
                <ShoppingCart className="mr-2 h-5 w-5" /> Impact on Consumers
              </h3>
              <p className="text-sm text-muted-foreground">Consumers are hit from both sides. Their purchasing power is eroded by rising prices for essentials like food and energy, while job insecurity and stagnant wage growth make it harder to keep up.</p>
            </div>
            <div className="p-4 border border-destructive/20 rounded-lg bg-card shadow-sm">
              <h3 className="font-semibold flex items-center mb-2">
                <Briefcase className="mr-2 h-5 w-5" /> Impact on Businesses
              </h3>
              <p className="text-sm text-muted-foreground">Businesses face a profit squeeze. Their input costs (materials, energy) are rising due to inflation, but weak consumer demand makes it difficult to pass those higher costs on to customers without losing sales. This leads to lower profit margins and reduced investment.</p>
            </div>
            <div className="p-4 border border-destructive/20 rounded-lg bg-card shadow-sm">
              <h3 className="font-semibold flex items-center mb-2">
                <ThumbsDown className="mr-2 h-5 w-5" /> Impact on Stocks & Bonds
              </h3>
              <p className="text-sm text-muted-foreground">Most traditional financial assets perform poorly. Corporate earnings decline, hurting stocks. At the same time, high inflation erodes the real (after-inflation) return of a bond's fixed interest payments. Rising rates to fight inflation also cause the price of existing bonds to fall.</p>
            </div>
            <div className="p-4 border border-destructive/20 rounded-lg bg-card shadow-sm">
                <h3 className="font-semibold flex items-center mb-2">
                    <Brain className="mr-2 h-5 w-5" /> Psychological Impact
                </h3>
                <p className="text-sm text-muted-foreground">The combination of rising prices and a weak job market creates widespread economic anxiety and pessimism, often referred to as a "misery index."</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center"><History className="mr-2 h-5 w-5 text-primary"/>Historical Case Study: The Great Inflation of the 1970s</CardTitle>
            <CardDescription>The most famous period of stagflation in the U.S. offers powerful lessons.</CardDescription>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <h4>The Setup: A Perfect Storm</h4>
              <ul className="list-disc pl-5">
                  <li><strong>The Nifty-Fifty Bubble:</strong> The late 1960s were marked by a bull market in high-quality growth stocks known as the "Nifty Fifty." Investors believed these companies were so good they could be bought at any price, leading to extreme valuations.</li>
                  <li><strong>Government Spending:</strong> Heavy spending on both the Vietnam War and domestic "Great Society" programs increased the money supply and fueled demand.</li>
                  <li><strong>The 1973 Oil Crisis:</strong> In response to U.S. support for Israel in the Yom Kippur War, OPEC nations declared an oil embargo. The price of oil quadrupled, creating a massive supply shock that drove up costs for everything, from gasoline to manufacturing.</li>
              </ul>
              <h4>The Result: A "Lost Decade"</h4>
              <p>The combination of these factors was toxic. Inflation soared into the double digits, while economic growth stalled and unemployment rose. The stock market went essentially nowhere for a decade. From 1973 to 1974, the S&P 500 fell by almost 50% in nominal terms. After accounting for inflation, the real losses were even more devastating. The "Nifty Fifty" stocks, once considered invincible, crashed, with many falling over 80% from their peaks.</p>
              <h4>The Resolution: The Volcker Shock</h4>
              <p>The cycle was finally broken when Federal Reserve Chairman Paul Volcker took drastic and painful action in the early 1980s. To crush inflation, he raised the federal funds rate to a peak of 20%. This plunged the economy into a deep recession but successfully broke the back of inflation. It demonstrated that sometimes, short-term economic pain is necessary to restore long-term stability.</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">Which Assets Might Perform Better During Stagflation?</CardTitle>
            <CardDescription>While no asset is completely immune, some have historically shown more resilience.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
             <p className="text-sm text-muted-foreground">This is not investment advice, but an overview of historical trends:</p>
             <ul className="list-disc pl-5 text-sm space-y-2">
                <li><strong>Commodities:</strong> Hard assets like gold and oil can perform well, as their prices are often a driver of the inflation component of stagflation.</li>
                <li><strong>Real Estate:</strong> While rising rates can be a headwind, physical real estate can provide an inflation hedge as rents and property values may rise with inflation.</li>
                <li><strong>Defensive Stocks with Pricing Power:</strong> Companies that sell essential goods and services (Consumer Staples, Healthcare) and have strong brands that allow them to pass on rising costs to consumers may be more resilient than cyclical or growth companies.</li>
             </ul>
          </CardContent>
        </Card>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you understand this challenging economic condition, return to the main roadmap to continue building your financial knowledge.
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