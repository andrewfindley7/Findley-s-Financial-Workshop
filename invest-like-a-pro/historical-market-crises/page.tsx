'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Info, TrendingDown, Server, Landmark, CloudFog, Shield, BarChart, Scale, Activity, Repeat, Waves, PiggyBank, Zap } from 'lucide-react';
import Link from 'next/link';

const caseStudies = [
  {
    title: "The Great Depression (1929-1932)",
    icon: Landmark,
    setup: "The 'Roaring Twenties' was a decade of economic prosperity and cultural dynamism. This optimism fueled a massive stock market bubble, where ordinary people began speculating with borrowed money ('buying on margin') for the first time on a large scale, believing stocks could only go up.",
    signal: "Extreme leverage in the system. By 1929, investors had borrowed more money than the total amount of currency in circulation. The Shiller CAPE (Cyclically-Adjusted P/E) ratio exceeded 30, a level not seen before. Weak banking regulation created a fragile system where bank failures could cascade.",
    crash: "The crash began in October 1929. The Dow Jones Industrial Average fell 89% from its peak and did not regain its nominal high until 1954. The stock market crash triggered a banking crisis, which in turn led to a severe economic depression with unemployment reaching 25%.",
    opportunity: "The lesson from the Depression was less about immediate buying opportunities and more about the devastating consequences of systemic leverage and speculative fervor. It led to the creation of the SEC and modern securities regulation. For investors, it was a brutal education on the reality that prices can become disconnected from value for a very long time."
  },
  {
    title: "The 1970s Stagflation",
    icon: CloudFog,
    setup: "A 'perfect storm' of the Nifty Fifty bull market, rising oil prices from the OPEC embargo, and high government spending led to a toxic economic environment of high inflation and low economic growth.",
    signal: "Persistently high inflation that monetary policy failed to curb. The 'Nifty Fifty' stocks, considered 'one-decision' buy-and-hold forever stocks, reached extreme P/E ratios (often over 50), similar to the Dot-com bubble.",
    crash: "The market went essentially nowhere for a decade. From 1973 to 1974, the S&P 500 fell by almost 50% in nominal terms. After accounting for inflation, the real losses were even more devastating.",
    opportunity: "This period proved that even great companies can become terrible investments if you overpay. However, the deep pessimism of the late 1970s set the stage for one of the greatest bull markets in history, starting in 1982. Those who bought high-quality but beaten-down businesses during the inflationary panic were rewarded handsomely."
  },
  {
    title: "The Dot-Com Bubble (1999-2001)",
    icon: Server,
    setup: "Massive euphoria around the 'New Economy' of the internet. Companies with '.com' in their name and little to no revenue were reaching billion-dollar valuations. The narrative was that old metrics like profits didn't matter anymore.",
    signal: "Valuations became completely detached from reality. The average NASDAQ stock had a Price-to-Sales (P/S) ratio exceeding 25x. Pre-revenue companies were going public and seeing their stock prices double or triple in a day.",
    crash: "The bubble burst in March 2000. The NASDAQ fell nearly 80% over the next two years. Hundreds of dot-com companies went bankrupt, wiping out investors.",
    opportunity: "While the 'story stocks' with no fundamentals were wiped out, the crash also dragged down high-quality, profitable tech businesses like Amazon, Apple, and Microsoft. Buying these durable businesses when they were 'on sale' during the panic generated immense wealth for investors over the following decades."
  },
  {
    title: "The Global Financial Crisis (2008-2009)",
    icon: Landmark,
    setup: "A housing bubble fueled by subprime mortgages, complex financial derivatives (CDOs), and excessive leverage in the banking system. The belief was that 'housing prices never go down.'",
    signal: "Soaring home prices that far outpaced income growth. An explosion in risky, subprime lending. Banks taking on massive leverage. Credit spreads on corporate debt were extremely tight, signaling a lack of fear in the system.",
    crash: "The subprime mortgage market collapsed, leading to a cascade of failures throughout the global banking system. The S&P 500 fell over 57% from its peak between October 2007 and March 2009.",
    opportunity: "The crisis created a once-in-a-generation opportunity to buy premier businesses at bargain prices. The government's TARP program stabilized the banking system. Investors who had cash and the courage to buy when there was 'blood in the streets' when it felt like the entire financial system was collapsing saw spectacular returns over the next decade."
  },
  {
    title: "The COVID-19 Panic (March 2020)",
    icon: Shield,
    setup: "The market was in a long bull run, and a novel coronavirus began to spread globally, leading to unprecedented economic shutdowns.",
    signal: "The signal was the virus itself. The market's initial reaction was slow, but it quickly priced in a worst-case scenario as lockdowns were implemented worldwide.",
    crash: "The fastest bear market in history. The S&P 500 plunged over 34% in just over a month. Fear was at an absolute maximum as the world faced a once-in-a-century pandemic.",
    opportunity: "The panic was short-lived. Massive government stimulus and central bank intervention provided a powerful backstop. Investors who bought during the March 2020 lows when uncertainty was at its peak experienced a V-shaped recovery and one of the fastest market rebounds in history. It was a stark lesson in how quickly the market can recover."
  }
];

const mechanics = [
    { title: "Margin Debt and Leverage", description: "This is financial gasoline. Borrowed money multiplies both gains and losses. In a bull market, rising stock prices increase investors' ability to borrow more against their portfolio, creating a feedback loop of more buying. In a crash, falling prices trigger 'margin calls,' forcing investors to sell assets to cover their loans, which pushes prices down even further." },
    { title: "Liquidity Spirals", description: "When investors all rush to sell at once, there aren't enough buyers to absorb the selling pressure. This forces sellers to accept lower and lower prices, creating a 'liquidity spiral' where prices fall far faster than the underlying business fundamentals justify." },
    { title: "Feedback Loops", description: "Human psychology creates powerful feedback loops. In a bubble, rising prices attract momentum buyers, which drives prices even higher, confirming the initial buyers' 'wisdom' and attracting even more people. In a crash, the opposite occurs. Falling prices create fear, which leads to panic selling, causing prices to fall further." },
    { title: "Monetary Policy Effects", description: "Central bank policy often sets the stage. Long periods of low interest rates and loose credit (like the years before 2008 or 2021) can fuel speculative bubbles by making money cheap. Conversely, a sudden or aggressive tightening of policy to fight inflation often exposes the fragility and 'pops' the bubble." },
]

export default function HistoricalMarketCrisesPage() {
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
        <h1 className="text-3xl font-bold font-headline">Historical Market Crises</h1>
        <p className="text-muted-foreground mt-2">Learn from the great bubbles and panics of the past to build resilience for the future.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Brain className="h-4 w-4" />
          <AlertTitle className="font-headline">History as a Guide, Not a Map</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>History never repeats itself exactly, but it often rhymes. By studying past market manias and crashes, we can learn to recognize the patterns of human psychology, the euphoria of a bubble and the terror of a panic. This knowledge is not a crystal ball, but a mental toolkit for navigating future volatility with discipline and courage.</p>
          </AlertDescription>
        </Alert>
        
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center"><Activity className="mr-2 h-5 w-5"/>The Mechanics Behind the Mania</CardTitle>
            <CardDescription>Bubbles and crashes aren't random; they are amplified by specific financial and psychological drivers.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
            {mechanics.map(item => (
              <div key={item.title} className="p-4 border rounded-lg">
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">Historical Case Studies</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {caseStudies.map(study => (
              <div key={study.title} className="p-4 border rounded-lg bg-card shadow-sm">
                <h3 className="font-semibold text-lg flex items-center mb-2">
                  <study.icon className="mr-3 h-5 w-5 text-primary" />
                  {study.title}
                </h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                    <p><strong>The Setup:</strong> {study.setup}</p>
                    <p><strong>The Signal:</strong> {study.signal}</p>
                    <p><strong>The Crash:</strong> {study.crash}</p>
                    <p className="p-3 bg-green-500/10 rounded-md text-green-700 dark:text-green-300"><strong>The Opportunity:</strong> {study.opportunity}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center"><TrendingDown className="mr-2 h-5 w-5 text-destructive"/>A Note on 'False Recoveries' (Bear Market Rallies)</CardTitle>
            <CardDescription>During a major bear market, it's common to see sharp, short-lived rallies that give investors false hope that the worst is over.</CardDescription>
          </CardHeader>
          <CardContent>
             <p className="text-sm text-muted-foreground">These "bear market rallies" can be very convincing, but they often fail and lead to new lows. For example, in April 2008, the S&P 500 rallied 12% from its lows, leading some to believe the crisis was contained. It then went on to fall another 40% before bottoming in 2009. This is why it is so difficult to perfectly "call the bottom." A more resilient strategy is to have a plan and deploy capital incrementally into high-quality assets as prices become more attractive, rather than trying to time the exact turning point.</p>
          </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-xl">Mini Case Study: The 2021-2022 Tech Correction</CardTitle>
                <CardDescription>A modern example connecting recent memory to historical patterns.</CardDescription>
            </CardHeader>
            <CardContent>
                 <p className="text-sm text-muted-foreground">The post-COVID stimulus and low interest rates created a liquidity boom, leading to a speculative frenzy in 2021. Unprofitable tech companies, SPACs (Special Purpose Acquisition Companies), and cryptocurrencies reached extreme valuations. Funds like the ARK Innovation ETF, which concentrated on these speculative assets, became market darlings. When the Federal Reserve began aggressively raising interest rates in 2022 to fight inflation, the bubble burst. Many of these assets fell 70-90% from their peaks, echoing the dot-com crash. This period reinforced that even with new technologies, the old rules of valuation and the psychology of fear and greed remain constant.</p>
            </CardContent>
        </Card>


        <Card className="border-primary/50 bg-primary/5">
            <CardHeader>
                <CardTitle className="font-headline text-xl">Common Themes & Lessons Learned</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li><strong>Valuation Matters:</strong> Every major bubble is characterized by valuations that become detached from underlying business fundamentals.</li>
                    <li><strong>Fear is a Buy Signal:</strong> The moment of maximum pessimism is often the moment of maximum financial opportunity.</li>
                    <li><strong>Durability is Key:</strong> During crashes, weak, unprofitable, and heavily indebted companies are often wiped out. Durable, high-quality businesses survive and thrive.</li>
                     <li><strong>Leverage Amplifies Everything:</strong> Debt-fueled speculation accelerates both booms and busts.</li>
                    <li><strong>Policy and Perception Interact:</strong> Crises rarely end until confidence is restored through credible action from policymakers.</li>
                    <li><strong>History Punishes Complacency:</strong> The next crisis will always have a new story, but the underlying psychology of fear and greed remains the same.</li>
                    <li><strong>The Market Always Recovers:</strong> Every single bear market in U.S. history has been followed by a new bull market that reaches new all-time highs. Patience and a long-term perspective are your greatest assets.</li>
                </ul>
            </CardContent>
        </Card>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you have learned from the past, return to the Invest Like a Pro roadmap to continue preparing for the future.
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
