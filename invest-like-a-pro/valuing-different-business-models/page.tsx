'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Scale, TrendingUp, Factory, Zap, Info, ThumbsUp, ThumbsDown } from 'lucide-react';
import Link from 'next/link';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const formatCurrency = (value: number, showCents = false): string => {
  if (value === null || value === undefined || isNaN(value)) return showCents ? "$0.00" : "$0";
  return value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: showCents ? 2 : 0,
    maximumFractionDigits: showCents ? 2 : 0,
  });
};

const financialData = {
  saas: { revenue: 100, cogs: 15, opex: 60, fcf: 25, marketCap: 1000, growthRate: 30 },
  manu: { revenue: 100, cogs: 70, opex: 15, fcf: 10, marketCap: 150, growthRate: 5 },
};

const calculateMetrics = (data: typeof financialData.saas) => {
  const grossProfit = data.revenue - data.cogs;
  const netIncome = grossProfit - data.opex;
  const peRatio = netIncome > 0 ? data.marketCap / netIncome : Infinity;
  return {
    grossMargin: (grossProfit / data.revenue) * 100,
    netMargin: (netIncome / data.revenue) * 100,
    psRatio: data.marketCap / data.revenue,
    peRatio: peRatio,
    pegRatio: (peRatio !== Infinity && data.growthRate > 0) ? peRatio / data.growthRate : Infinity,
    pfcfRatio: data.fcf > 0 ? data.marketCap / data.fcf : Infinity,
  };
};

const saasMetrics = calculateMetrics(financialData.saas);
const manuMetrics = calculateMetrics(financialData.manu);

const saasValuation = [
    { metric: "Price-to-Sales (P/S)", importance: "Very important, especially for pre-profit companies. A high P/S is justified by high gross margins and recurring revenue.", why: "Each dollar of sales is highly profitable and likely to repeat." },
    { metric: "The Rule of 40", importance: "A key benchmark for balancing growth and profitability. (Revenue Growth % + FCF Margin %) should be > 40%.", why: "Ensures that high growth is not coming at the expense of excessive cash burn." },
    { metric: "Price-to-FCF (P/FCF)", importance: "Crucial for mature SaaS companies. Shows the valuation relative to actual cash generation.", why: "Cash flow is harder to manipulate than accounting earnings." },
];

const manuValuation = [
     { metric: "Price-to-Earnings (P/E)", importance: "A standard metric, but must be viewed over a full economic cycle, not just a single peak or trough year.", why: "Earnings can be highly volatile due to economic conditions." },
     { metric: "Price-to-Book (P/B)", importance: "Useful because the business's value is tied to its physical assets (factories, equipment). A P/B below 1.0 could signal deep value.", why: "Provides a valuation based on tangible asset value, offering a floor of sorts." },
     { metric: "Enterprise Value to EBITDA (EV/EBITDA)", importance: "Often preferred over P/E because it's capital structure-neutral, making it better for comparing companies with different debt levels.", why: "Accounts for debt, which is critical in capital-intensive businesses." },
];

export default function ValuingBusinessModelsPage() {
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
        <h1 className="text-3xl font-bold font-headline">Valuing Different Business Models: SaaS vs. Manufacturing</h1>
        <p className="text-muted-foreground mt-2">A practical lesson on why different business models command different valuations.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Brain className="h-4 w-4" />
          <AlertTitle className="font-headline">Valuation is an Art, Not a Science</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>Why would a software company with $100M in revenue be worth 10 times more than a manufacturing company with the same $100M in revenue? The answer lies in the quality of their earnings and the scalability of their business models.</p>
            <p className="font-semibold">This lesson uses a simplified example to illustrate why a high Price-to-Sales (P/S) or Price-to-Earnings (P/E) ratio is not automatically 'expensive'; it is the price you pay for quality and future growth.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">The Two Archetypes: A Financial Snapshot</CardTitle>
            <CardDescription>To see this in action, let’s look at a simple example comparing a recurring-revenue software company and a traditional manufacturer, both with $100M in revenue.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Metric</TableHead>
                        <TableHead className="text-right">SaaS Co. (Recurring Revenue)</TableHead>
                        <TableHead className="text-right">Manu Co. (Cyclical Manufacturing)</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow><TableCell>Revenue</TableCell><TableCell className="text-right">{formatCurrency(financialData.saas.revenue, false)}M</TableCell><TableCell className="text-right">{formatCurrency(financialData.manu.revenue, false)}M</TableCell></TableRow>
                    <TableRow><TableCell>Cost of Goods Sold (COGS)</TableCell><TableCell className="text-right">-{formatCurrency(financialData.saas.cogs, false)}M</TableCell><TableCell className="text-right">-{formatCurrency(financialData.manu.cogs, false)}M</TableCell></TableRow>
                    <TableRow className="bg-muted/30"><TableCell className="font-semibold">Gross Profit</TableCell><TableCell className="text-right font-semibold">{formatCurrency(financialData.saas.revenue - financialData.saas.cogs, false)}M</TableCell><TableCell className="text-right font-semibold">{formatCurrency(financialData.manu.revenue - financialData.manu.cogs, false)}M</TableCell></TableRow>
                    <TableRow className="font-bold"><TableCell>Gross Margin %</TableCell><TableCell className="text-right text-green-600">{saasMetrics.grossMargin.toFixed(0)}%</TableCell><TableCell className="text-right text-red-600">{manuMetrics.grossMargin.toFixed(0)}%</TableCell></TableRow>
                    <TableRow><TableCell>Operating Expenses (OPEX)</TableCell><TableCell className="text-right">-{formatCurrency(financialData.saas.opex, false)}M</TableCell><TableCell className="text-right">-{formatCurrency(financialData.manu.opex, false)}M</TableCell></TableRow>
                    <TableRow className="bg-muted/30"><TableCell className="font-semibold">Net Income</TableCell><TableCell className="text-right font-semibold">{formatCurrency(saasMetrics.peRatio === Infinity ? 0 : financialData.saas.marketCap / saasMetrics.peRatio, false)}M</TableCell><TableCell className="text-right font-semibold">{formatCurrency(manuMetrics.peRatio === Infinity ? 0 : financialData.manu.marketCap / manuMetrics.peRatio, false)}M</TableCell></TableRow>
                    <TableRow><TableCell>Free Cash Flow (FCF)</TableCell><TableCell className="text-right">{formatCurrency(financialData.saas.fcf, false)}M</TableCell><TableCell className="text-right">{formatCurrency(financialData.manu.fcf, false)}M</TableCell></TableRow>
                    <TableRow><TableCell>Projected EPS Growth</TableCell><TableCell className="text-right font-bold">{financialData.saas.growthRate}%</TableCell><TableCell className="text-right font-bold">{financialData.manu.growthRate}%</TableCell></TableRow>
                    <TableRow className="bg-primary/10"><TableCell className="font-bold">Market Cap (Assigned Value)</TableCell><TableCell className="text-right font-bold">{formatCurrency(financialData.saas.marketCap, false)}M</TableCell><TableCell className="text-right font-bold">{formatCurrency(financialData.manu.marketCap, false)}M</TableCell></TableRow>
                    <TableRow className="font-bold"><TableCell>P/S Ratio</TableCell><TableCell className="text-right text-red-600">{saasMetrics.psRatio.toFixed(1)}x</TableCell><TableCell className="text-right text-green-600">{manuMetrics.psRatio.toFixed(1)}x</TableCell></TableRow>
                    <TableRow className="font-bold"><TableCell>P/E Ratio</TableCell><TableCell className="text-right text-red-600">{saasMetrics.peRatio.toFixed(1)}x</TableCell><TableCell className="text-right text-green-600">{manuMetrics.peRatio.toFixed(1)}x</TableCell></TableRow>
                    <TableRow className="font-bold"><TableCell>PEG Ratio</TableCell><TableCell className="text-right text-green-600">{saasMetrics.pegRatio.toFixed(2)}</TableCell><TableCell className="text-right text-red-600">{manuMetrics.pegRatio.toFixed(2)}</TableCell></TableRow>
                    <TableRow className="font-bold"><TableCell>P/FCF Ratio</TableCell><TableCell className="text-right text-red-600">{saasMetrics.pfcfRatio.toFixed(1)}x</TableCell><TableCell className="text-right text-green-600">{manuMetrics.pfcfRatio.toFixed(1)}x</TableCell></TableRow>
                </TableBody>
            </Table>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">Why the Huge Difference in Valuation?</CardTitle>
            <CardDescription>On the surface, SaaS Co. looks far more "expensive." But its business model justifies the premium.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 border rounded-lg bg-card shadow-sm">
                <h3 className="font-semibold flex items-center mb-1 text-lg"><Zap className="mr-2 h-5 w-5 text-primary"/>The Power of High Gross Margins & Scalability</h3>
                <p className="text-sm text-muted-foreground">SaaS Co. has an **85% gross margin**. This means for every new dollar of sales, 85 cents drops down to gross profit. The cost to serve one more customer is near zero. This is a highly **scalable** business model. SaaS Co.'s high operating expenses reflect aggressive reinvestment in sales and marketing to capture market share, a common strategy in growth phases.</p>
                <p className="text-sm text-muted-foreground mt-2">Manu Co. has a **30% gross margin**. To generate another dollar of sales, it must spend 70 cents on raw materials and labor. Its growth requires significant capital. This is not as scalable.</p>
            </div>
             <div className="p-4 border rounded-lg bg-card shadow-sm">
                <h3 className="font-semibold flex items-center mb-1 text-lg"><TrendingUp className="mr-2 h-5 w-5 text-primary"/>Revenue Quality: Recurring vs. Cyclical</h3>
                <p className="text-sm text-muted-foreground">SaaS Co.'s revenue is **recurring**. Its customers pay every month or year. This revenue is highly predictable and stable. Investors pay a premium for this certainty.</p>
                <p className="text-sm text-muted-foreground mt-2">Manu Co.'s revenue is **cyclical**. Its sales depend on the health of the economy. In a recession, its customers may stop ordering new equipment, causing revenue and profits to plummet. This uncertainty demands a lower valuation multiple.</p>
            </div>
             <div className="p-4 border rounded-lg bg-card shadow-sm">
                <h3 className="font-semibold flex items-center mb-1 text-lg"><Factory className="mr-2 h-5 w-5 text-primary"/>Reinvestment Needs</h3>
                <p className="text-sm text-muted-foreground">Manu Co. must continuously reinvest in physical assets like factories and machinery to grow. This is capital-intensive. SaaS Co. scales mainly through code and cloud infrastructure, which expands far more cheaply, allowing it to generate higher free cash flow relative to its revenue.</p>
            </div>
          </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-xl">The PEG Ratio: Pricing the Growth</CardTitle>
                <CardDescription>The Price/Earnings-to-Growth (PEG) ratio gives us a more nuanced view by accounting for growth.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground mb-4">A common rule of thumb is that a PEG ratio around 1.0 suggests a company is reasonably valued relative to its growth prospects. A ratio significantly above 1.0 may be overvalued, and below 1.0 may be undervalued.</p>
                <div className="grid md:grid-cols-2 gap-4">
                    <Alert className="bg-callout text-callout-foreground border-blue-200 dark:border-blue-800">
                        <AlertTitle className="font-semibold">SaaS Co. Analysis</AlertTitle>
                        <AlertDescription>
                            With a P/E of 40 and growth of 30%, its PEG ratio is 1.33 (40 / 30). This is a reasonable valuation for a high-quality, high-growth software business.
                        </AlertDescription>
                    </Alert>
                    <Alert className="bg-callout text-callout-foreground border-blue-200 dark:border-blue-800">
                        <AlertTitle className="font-semibold">Manu Co. Analysis</AlertTitle>
                        <AlertDescription>
                            With a P/E of 10 and growth of just 5%, its PEG ratio is 2.0 (10 / 5). Despite its low P/E, this suggests the stock might actually be expensive relative to its slow growth prospects.
                        </AlertDescription>
                    </Alert>
                </div>
            </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">Using the Right Metrics for the Right Business</CardTitle>
            <CardDescription>You would not use a thermometer to measure weight. Similarly, different business models require different valuation tools.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            <div className="p-4 border rounded-lg bg-muted/40">
              <h3 className="font-semibold flex items-center mb-2"><Zap className="mr-2 h-4 w-4" />For a SaaS Business, Focus On:</h3>
              <div className="space-y-3">
                {saasValuation.map(item => (
                    <div key={item.metric}>
                        <h4 className="font-semibold text-sm">{item.metric}</h4>
                        <p className="text-xs text-muted-foreground mt-1" dangerouslySetInnerHTML={{ __html: item.importance }}></p>
                    </div>
                ))}
              </div>
            </div>
             <div className="p-4 border rounded-lg bg-muted/40">
              <h3 className="font-semibold flex items-center mb-2"><Factory className="mr-2 h-4 w-4" />For a Manufacturing Business, Focus On:</h3>
               <div className="space-y-3">
                {manuValuation.map(item => (
                    <div key={item.metric}>
                        <h4 className="font-semibold text-sm">{item.metric}</h4>
                        <p className="text-xs text-muted-foreground mt-1" dangerouslySetInnerHTML={{ __html: item.importance }}></p>
                    </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Alert variant="default" className="bg-primary/5">
            <Info className="h-4 w-4"/>
            <AlertTitle className="font-headline">The Takeaway</AlertTitle>
            <AlertDescription>A high valuation multiple is not irrational optimism; it is often the market's recognition of a superior business model with durable, predictable, and scalable profits.</AlertDescription>
        </Alert>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you have a better understanding of how to value different business models, return to the main roadmap to continue your learning.
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
