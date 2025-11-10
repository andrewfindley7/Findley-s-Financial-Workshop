'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe, TrendingUp, TrendingDown, Info, ShieldCheck, Scale, FileText } from 'lucide-react';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

const formatCurrency = (value: number, currency = 'USD') => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

export default function ForeignCurrencyExposurePage() {
    const searchParams = useSearchParams();
    const fromStep = searchParams.get('from');

  const exampleData = {
    euroRevenue: 1000000,
    weakDollarRate: 1.20,
    strongDollarRate: 1.05,
    get weakDollarRevenue() { return this.euroRevenue * this.weakDollarRate; },
    get strongDollarRevenue() { return this.euroRevenue * this.strongDollarRate; },
  };

  return (
    <>
      <Alert variant="destructive" className="mb-6 bg-amber-50 dark:bg-amber-900/20 border-amber-300 dark:border-amber-700">
          <Info className="h-4 w-4 text-amber-500" />
          <AlertDescription className="text-amber-800 dark:text-amber-300 text-xs">
              For educational use only. Not financial or tax advice. Consult a licensed advisor before making major decisions.
          </AlertDescription>
      </Alert>
      <div className="mb-8">
        <h1 className="text-3xl font-bold font-headline">Foreign Currency Exposure</h1>
        <p className="text-muted-foreground mt-2">Understand how global exchange rates can impact the earnings of U.S. multinational companies.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Globe className="h-4 w-4" />
          <AlertTitle className="font-headline">The Global Impact on Local Earnings</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>When a U.S.-based company sells its products internationally, it earns revenue in foreign currencies (like Euros, Yen, or Pounds). However, because it's a U.S. company, it must report its financial results in U.S. Dollars (USD). This means it has to 'translate' its foreign revenue back into USD.</p>
            <p className="font-semibold">The exchange rate at the time of this translation can create a 'tailwind' that boosts reported earnings or a 'headwind' that hurts them, even if the underlying business performance in the foreign country hasn't changed at all.</p>
          </AlertDescription>
        </Alert>
        
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">Translation vs. Transaction Risk</CardTitle>
            <CardDescription>It's helpful to distinguish between the two main types of currency risk.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg bg-card shadow-sm">
                <h3 className="font-semibold mb-1">Translation Risk (Accounting Impact)</h3>
                <p className="text-sm text-muted-foreground">This is the risk that a company's reported financial statements will be affected by exchange rate fluctuations when consolidating foreign subsidiaries' results into the parent company's currency. Translation risk affects reported earnings, and this is what the main example below illustrates.</p>
            </div>
            <div className="p-4 border rounded-lg bg-card shadow-sm">
                <h3 className="font-semibold mb-1">Transaction Risk (Cash Flow Impact)</h3>
                <p className="text-sm text-muted-foreground">This is the risk that exchange rate fluctuations will change the actual cash flows from business transactions denominated in a foreign currency. For example, if a U.S. company agrees to sell goods to a German company for €1M in 90 days, a weakening Euro during that period means they will receive fewer U.S. dollars than expected.</p>
            </div>
          </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-xl">The Translation Effect: A Simple Example</CardTitle>
                <CardDescription>Imagine "U.S. Tech Co." earns exactly €1,000,000 in revenue from its European sales in two different years.</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-6">
                <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800">
                    <h3 className="font-semibold flex items-center mb-2 text-green-800 dark:text-green-200">
                        <TrendingDown className="mr-2 h-5 w-5" /> Scenario 1: A Weak U.S. Dollar (Tailwind)
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">The U.S. Dollar is 'weak'. The exchange rate is $1.20 = €1.00.</p>
                    <p className="text-sm">When U.S. Tech Co. translates its European revenue back to dollars, it reports:</p>
                    <p className="font-mono text-center my-3 p-2 bg-background/50 rounded">€1,000,000 × 1.20 = <span className="font-bold text-lg text-green-600">{formatCurrency(exampleData.weakDollarRevenue)}</span></p>
                </div>
                 <div className="p-4 border rounded-lg bg-red-50 dark:bg-red-900/30 border-red-200 dark:border-red-800">
                    <h3 className="font-semibold flex items-center mb-2 text-red-800 dark:text-red-200">
                        <TrendingUp className="mr-2 h-5 w-5" /> Scenario 2: A Strong U.S. Dollar (Headwind)
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">The U.S. Dollar is 'strong'. The exchange rate is $1.05 = €1.00.</p>
                    <p className="text-sm">Now, when U.S. Tech Co. translates the exact same European revenue, it reports:</p>
                    <p className="font-mono text-center my-3 p-2 bg-background/50 rounded">€1,000,000 × 1.05 = <span className="font-bold text-lg text-red-600">{formatCurrency(exampleData.strongDollarRevenue)}</span></p>
                </div>
            </CardContent>
            <CardFooter>
                 <Alert variant="default" className="w-full bg-callout text-callout-foreground border-blue-200 dark:border-blue-800">
                    <Info className="h-4 w-4" />
                    <AlertTitle className="font-headline">The Key Insight</AlertTitle>
                    <AlertDescription>
                       The business in Europe performed identically in both scenarios, earning €1M. However, due to currency fluctuations alone, the company's reported U.S. dollar revenue was {formatCurrency(exampleData.weakDollarRevenue - exampleData.strongDollarRevenue)} lower in the strong-dollar scenario. This is a currency headwind.
                    </AlertDescription>
                </Alert>
            </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">How Companies Manage This Risk (Hedging)</CardTitle>
            <CardDescription>Companies are not passive victims of currency swings. They use financial instruments to mitigate this risk.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">Large multinational corporations employ treasury departments that use derivatives like currency forwards and options to hedge their exposure. A currency forward contract allows a company to lock in a specific exchange rate for a future date, removing uncertainty from its future revenue or cost calculations.</p>
              <Alert variant="default" className="bg-callout text-callout-foreground border-blue-200 dark:border-blue-800">
                <ShieldCheck className="h-4 w-4" />
                <AlertTitle>Example of a Hedge</AlertTitle>
                <AlertDescription>
                  U.S. Tech Co. knows it will receive €1M in three months. Fearing the dollar will strengthen, it can enter into a forward contract to sell €1M for, say, $1.15 in three months. This locks in the exchange rate, removing uncertainty from its future revenue, regardless of where the actual exchange rate goes.
                </AlertDescription>
              </Alert>
          </CardContent>
        </Card>
        
         <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">Where to Find This Information</CardTitle>
            <CardDescription>Companies disclose their geographic exposure in their annual reports (10-K).</CardDescription>
          </CardHeader>
          <CardContent>
             <p className="text-sm text-muted-foreground">Look for a footnote in the 10-K often titled "Geographic Information" or "Segment Information," typically found in the later notes to the financial statements (e.g., Note 15, Note 16). This table will break down the company's revenue by geographic region (e.g., Americas, EMEA, Asia-Pacific). If a large percentage of revenue comes from outside the U.S., the company is significantly exposed to currency fluctuations.</p>
             <p className="text-sm text-muted-foreground mt-2">Management will also almost always discuss the impact of currency as a "headwind" or "tailwind" in their quarterly earnings reports and conference calls.</p>
          </CardContent>
        </Card>

        <Alert variant="default">
          <Info className="h-4 w-4" />
          <AlertTitle className="font-headline">Broader Economic Impact</AlertTitle>
          <AlertDescription>
            A strong U.S. dollar makes foreign goods cheaper for American consumers (good for importers like Walmart) but makes U.S. exports more expensive for foreign buyers (bad for exporters like Boeing). For a U.S. investor, a strong dollar also reduces the value of their foreign investments when converted back to dollars.
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
