
'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, TrendingDown, Repeat, Brain, Info, Calendar, Percent, Landmark, Cpu, BarChart3, Droplets, Factory, Flame, HeartPulse, Home, Phone, ShoppingCart, Sun, Utensils } from 'lucide-react';
import Link from 'next/link';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';


const cyclePhases = [
  {
    icon: TrendingUp,
    title: "Tightening Cycle (Rising Interest Rates)",
    description: "When the economy is growing strongly and inflation is rising, central banks will raise interest rates to 'cool down' the economy. This makes borrowing more expensive, which is intended to reduce spending and bring inflation under control.",
    historicalExample: "The aggressive series of rate hikes by the U.S. Federal Reserve throughout 2022 and 2023 to combat post-pandemic inflation is a classic example of a tightening cycle.",
    marketImpact: [
        "Bad for Stocks (Generally): Higher rates make 'safe' investments like bonds more attractive, providing competition for stocks. Higher rates also reduce the present value of future corporate earnings, which can compress valuation multiples (P/E ratios).",
        "Bad for Bonds: When rates rise, newly issued bonds have higher yields, making existing bonds with lower yields less attractive. This causes the price of existing bonds to fall.",
        "Hurts Growth Stocks: High-growth stocks, whose valuations are based on earnings far in the future, are particularly sensitive to rising rates as those future earnings are discounted more heavily."
    ],
    businessImpact: [
        "Increases the cost of borrowing for companies, making it more expensive to expand, hire, or refinance debt.",
        "Can slow down consumer spending on big-ticket items that are often financed, like cars and homes."
    ],
    sectorImpact: "Often benefits banks and financials, which can earn more on their lending (wider net interest margins). Often hurts rate-sensitive sectors like real estate and technology. Market rotation strategies often anticipate this shift, moving into defensive sectors.",
  },
  {
    icon: TrendingDown,
    title: "Easing Cycle (Falling Interest Rates)",
    description: "During a recession or period of slow growth, central banks will lower interest rates to stimulate the economy. This makes borrowing cheaper, which is intended to encourage business investment and consumer spending.",
    historicalExample: "In response to the COVID-19 pandemic in March 2020, the Federal Reserve executed an emergency rate cut to near-zero to support the economy, kicking off a major easing cycle.",
    marketImpact: [
        "Good for Stocks (Generally): Lower rates make bonds less attractive, pushing investors towards stocks in search of higher returns. Lower rates also increase the present value of future earnings, which can expand valuation multiples.",
        "Good for Bonds: When rates fall, existing bonds with higher yields become more valuable, causing their prices to rise.",
        "Helps Growth Stocks: The value of distant future earnings is discounted less, providing a significant tailwind for growth-oriented companies."
    ],
    businessImpact: [
        "Reduces borrowing costs, making it cheaper for companies to invest in growth.",
        "Can stimulate consumer demand for houses, cars, and other financed purchases."
    ],
    sectorImpact: "Often benefits high-growth sectors like technology and consumer discretionary, as well as capital-intensive sectors like industrials and utilities. Can sometimes compress margins for banks. Market rotation strategies often anticipate this shift by moving into cyclical and growth-oriented sectors before a recovery is obvious.",
  }
];

const sectors = [
    { name: 'Technology', icon: Cpu, sensitivity: 'Negative', environment: 'Low Rates', reason: 'Growth stocks are valued on future earnings. Higher rates increase the discount rate, making future earnings less valuable today. Lower rates have the opposite effect.' },
    { name: 'Real Estate', icon: Home, sensitivity: 'Negative', environment: 'Low Rates', reason: 'Higher rates increase mortgage costs, cooling housing demand. For REITs, higher rates increase borrowing costs and make their dividend yields less attractive compared to safer bonds.' },
    { name: 'Utilities', icon: Sun, sensitivity: 'Negative', environment: 'Low Rates', reason: 'Utilities benefit from low-rate environments, as they are often treated as "bond proxies" for their high dividends. However, deep rate cuts driven by recessions can cap returns due to weaker power demand.' },
    { name: 'Consumer Discretionary', icon: ShoppingCart, sensitivity: 'Negative', environment: 'Low Rates', reason: 'Higher rates make financing for big-ticket items like cars and appliances more expensive, reducing consumer demand.' },
    { name: 'Financials', icon: Landmark, sensitivity: 'Positive', environment: 'High Rates', reason: 'Banks often profit from a wider spread between the interest they earn on loans and what they pay on deposits (Net Interest Margin or NIM) in a rising rate environment.' },
    { name: 'Energy', icon: Flame, sensitivity: 'Neutral (Inflation Driven)', environment: 'High Rates', reason: 'Performance is primarily driven by commodity prices. Energy can do well in inflationary periods which often coincide with high rates, but the link is indirect.' },
    { name: 'Materials', icon: Droplets, sensitivity: 'Neutral (Inflation Driven)', environment: 'High Rates', reason: 'Similar to energy, basic material prices are an inflationary input. These companies can perform well when central banks are tightening to combat inflation, but demand is the ultimate driver.' },
    { name: 'Consumer Staples', icon: Utensils, sensitivity: 'Neutral (Defensive)', environment: 'Either', reason: 'These companies sell essential goods people buy regardless of the economic cycle. Their performance is less tied to interest rates.' },
    { name: 'Healthcare', icon: HeartPulse, sensitivity: 'Neutral (Defensive)', environment: 'Either', reason: 'Demand for healthcare is non-discretionary. Like staples, this sector tends to be resilient in all economic environments, making it a classic defensive play.' },
    { name: 'Industrials', icon: Factory, sensitivity: 'Mixed', environment: 'Varies', reason: 'Performance is mixed. Cyclical industrials benefit from a strong economy (often low-rate). Defense and infrastructure industrials are driven more by government spending cycles.' },
    { name: 'Communication Services', icon: Phone, sensitivity: 'Mixed', environment: 'Varies', reason: 'A mix of old-economy telecom (like utilities) and new-economy growth (like social media). Performance depends on the sub-sector.' },
];

export default function InterestRateCyclesPage() {
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
        <h1 className="text-3xl font-bold font-headline">Interest Rate Cycles &amp; Their Market Impact</h1>
        <p className="text-muted-foreground mt-2">Understand how central bank interest rate policy influences the economy, business performance, and stock market valuations.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Landmark className="h-4 w-4" />
          <AlertTitle className="font-headline">The Central Bank's Levers</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>Central banks, like the U.S. Federal Reserve, have a dual mandate: to maintain price stability (control inflation) and maximize employment. Their primary tool for achieving this is manipulating short-term interest rates (like the Federal Funds Rate).</p>
            <p>This creates a ripple effect: it influences the cost of borrowing for commercial banks, which in turn affects the interest rates consumers and businesses pay for mortgages, car loans, and business loans. This change in borrowing costs then influences spending and investment decisions across the entire economy, ultimately impacting corporate profits and stock prices.</p>
            <p className="font-semibold">The interest rate cycle is the deliberate process of raising or lowering rates to either slow down an overheating economy or stimulate a weak one.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">The Two Phases of the Interest Rate Cycle</CardTitle>
            <CardDescription>An economy typically moves between these two opposing policy stances.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {cyclePhases.map(phase => (
              <div key={phase.title} className="p-4 border rounded-lg bg-card shadow-sm flex flex-col">
                <div className="flex items-center mb-2">
                  <phase.icon className="mr-3 h-6 w-6 text-primary/80" />
                  <h3 className="font-semibold text-lg">{phase.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground flex-grow mb-4">{phase.description}</p>
                <div className="space-y-4 text-xs">
                    <div className="p-3 bg-muted/50 rounded-md">
                        <h4 className="font-semibold mb-1 flex items-center"><BarChart3 className="mr-2 h-4 w-4"/>Market Impact</h4>
                        <ul className="list-disc pl-4 space-y-1">{phase.marketImpact.map((item, i) => <li key={i} dangerouslySetInnerHTML={{ __html: item }} />)}</ul>
                    </div>
                    <div className="p-3 bg-muted/50 rounded-md">
                        <h4 className="font-semibold mb-1 flex items-center"><Cpu className="mr-2 h-4 w-4"/>Business Impact</h4>
                        <ul className="list-disc pl-4 space-y-1">{phase.businessImpact.map((item, i) => <li key={i}>{item}</li>)}</ul>
                    </div>
                    <div className="p-3 bg-muted/50 rounded-md">
                        <h4 className="font-semibold mb-1 flex items-center"><Info className="mr-2 h-4 w-4"/>Sector Impact</h4>
                        <p>{phase.sectorImpact}</p>
                    </div>
                </div>
                 <Alert variant="default" className="mt-4 text-xs bg-blue-50 dark:bg-blue-900/30 text-foreground border-blue-200 dark:border-blue-800">
                    <AlertTitle className="font-semibold">Historical Example</AlertTitle>
                    <AlertDescription>{phase.historicalExample}</AlertDescription>
                 </Alert>
              </div>
            ))}
          </CardContent>
        </Card>
        
        <Alert>
          <Info className="h-4 w-4" />
          <AlertTitle className="font-headline">The Lag Effect</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>Changes in interest rates don’t affect the economy immediately. It can take many months (often 6-18 months) before businesses and consumers fully feel the impact of higher or lower borrowing costs. This is known as the lag effect of monetary policy. However, the stock market is forward-looking and will often react instantly to the expectation of future rate changes, which is why markets can move well ahead of the real economy.</p>
          </AlertDescription>
        </Alert>

        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-xl">Sector Performance by Interest Rate Environment</CardTitle>
                <CardDescription>Different sectors react differently to changing interest rates due to their business models and sensitivity to economic growth.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Sector</TableHead>
                                <TableHead>Favored Environment</TableHead>
                                <TableHead>Reason</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {sectors.map(sector => (
                                <TableRow key={sector.name}>
                                    <TableCell className="font-semibold flex items-center gap-2"><sector.icon className="h-4 w-4"/>{sector.name}</TableCell>
                                    <TableCell>
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                            sector.environment === 'Low Rates' ? 'bg-green-100 text-green-800' :
                                            sector.environment === 'High Rates' ? 'bg-red-100 text-red-800' :
                                            'bg-gray-100 text-gray-800'
                                        }`}>
                                            {sector.environment}
                                        </span>
                                    </TableCell>
                                    <TableCell className="text-xs text-muted-foreground">{sector.reason}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
                 <Alert variant="default" className="mt-4">
                  <Info className="h-4 w-4" />
                  <AlertTitle className="font-semibold">A Note on Timing</AlertTitle>
                  <AlertDescription>
                    Sector performance often leads or lags rate changes. For example, Financials tend to outperform early in tightening cycles, while Consumer Discretionary and Tech stocks may be among the first to recover in an easing cycle as the market anticipates future economic improvement.
                  </AlertDescription>
                </Alert>
            </CardContent>
        </Card>

        <Alert variant="destructive" className="bg-amber-50 dark:bg-amber-900/20 border-amber-300 dark:border-amber-700">
            <Info className="h-4 w-4 text-amber-500" />
            <AlertTitle className="font-headline text-amber-900 dark:text-amber-200">The Takeaway for Investors</AlertTitle>
            <AlertDescription className="text-amber-800 dark:text-amber-300">
                <p>Understanding the interest rate cycle provides crucial context for market behavior. It helps explain why certain sectors might outperform others and why market valuations might be expanding or contracting. However, trying to time the market based on predictions of central bank policy is extremely difficult. The market is forward-looking and often prices in expected rate changes months in advance.</p>
                <p className="font-semibold mt-2">For most long-term investors, the best strategy is to own a diversified portfolio of high-quality businesses that can thrive in various rate environments, rather than trying to dance in and out of the market.</p>
            </AlertDescription>
        </Alert>
        
        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you understand this key economic concept, return to the main roadmap to continue building your financial knowledge.
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
