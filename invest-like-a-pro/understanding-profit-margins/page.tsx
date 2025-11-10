'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PercentSquare, BarChart, ArrowDown, TrendingUp, TrendingDown, Target, CheckCircle, XCircle, Info, ArrowRight, Wind } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const marginTypes: {
  icon: LucideIcon;
  title: string;
  formula: string;
  description: string;
  whatItTells: string;
  goodSign: string;
  badSign: string;
}[] = [
  {
    icon: BarChart,
    title: "Gross Profit Margin",
    formula: "(Gross Profit / Revenue) * 100",
    description: "Gross Profit is the profit a company makes after deducting the direct costs associated with making and selling its products, or providing its services (Cost of Goods Sold - COGS). The Gross Margin is this profit as a percentage of revenue.",
    whatItTells: "This is the purest measure of a company's production efficiency and pricing power. A high gross margin means the company has a strong ability to mark up its products over their direct costs.",
    goodSign: "High and stable or increasing gross margins relative to competitors, indicating a strong brand or cost advantage.",
    badSign: "Low or declining gross margins, suggesting intense price competition or rising input costs that can't be passed on to customers."
  },
  {
    icon: Target,
    title: "Operating Profit Margin",
    formula: "(Operating Income / Revenue) * 100",
    description: "Operating Income (or EBIT) is what's left after subtracting both COGS and operating expenses (like marketing, R&D, and administrative salaries) from revenue. The Operating Margin shows this as a percentage.",
    whatItTells: "This measures the profitability of the company's core business operations, before accounting for interest and taxes. It reveals how well the company is managed overall.",
    goodSign: "A healthy and stable operating margin shows the company is not only producing its goods efficiently but also managing its day-to-day business costs effectively.",
    badSign: "A margin that is shrinking faster than the gross margin indicates that operating costs are growing out of control, even if production is efficient."
  },
  {
    icon: PercentSquare,
    title: "Net Profit Margin",
    formula: "(Net Income / Revenue) * 100",
    description: "Net Income (the 'bottom line') is the company's profit after all expenses, including interest and taxes, have been deducted from revenue. The Net Margin is the percentage of revenue left as profit.",
    whatItTells: "This is the ultimate measure of profitability. It shows how much of each dollar of sales the company actually keeps as profit for its shareholders.",
    goodSign: "A consistently positive and ideally growing net margin. A very high net margin (e.g., 20%+) is often a sign of a very high-quality business.",
    badSign: "Negative or very thin margins. A company that consistently fails to turn a profit or makes very little profit on its sales is a risky investment."
  }
];

export default function UnderstandingProfitMarginsPage() {
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
        <h1 className="text-3xl font-bold font-headline">Understanding Profit Margins</h1>
        <p className="text-muted-foreground mt-2">From Gross to Net: Learn how to analyze a company's profitability and operational efficiency.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <PercentSquare className="h-4 w-4" />
          <AlertTitle className="font-headline">The Profit Journey</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>Profit margins are the best way to understand a company's financial health. They tell you how much of each dollar in sales a company is able to keep as profit at different stages of its operations. Thinking of it as a journey with toll booths can make it intuitive: revenue starts as a large sum, and shrinks at each stage as costs (tolls) are paid.</p>
          </AlertDescription>
        </Alert>

        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-xl">The Flow of the Income Statement: A Toll Road</CardTitle>
                <CardDescription>This flow shows how each type of cost is paid along the way, reducing the initial revenue to the final net profit.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-center">
             <div className="p-3 bg-muted rounded-md"><h3 className="text-lg font-semibold">Total Revenue (Starting Cash)</h3></div>
             <ArrowDown className="mx-auto h-6 w-6 text-muted-foreground"/>
             <div className="p-2 border border-dashed rounded-md"><p className="text-sm font-medium">- Pay Toll 1: Cost of Goods Sold (COGS)</p></div>
             <ArrowDown className="mx-auto h-6 w-6 text-muted-foreground"/>
             <div className="p-3 bg-muted rounded-md"><h3 className="text-lg font-semibold">Gross Profit</h3></div>
             <ArrowDown className="mx-auto h-6 w-6 text-muted-foreground"/>
             <div className="p-2 border border-dashed rounded-md"><p className="text-sm font-medium">- Pay Toll 2: Operating Expenses (SG&A, R&D)</p></div>
             <ArrowDown className="mx-auto h-6 w-6 text-muted-foreground"/>
             <div className="p-3 bg-muted rounded-md"><h3 className="text-lg font-semibold">Operating Profit (EBIT)</h3></div>
              <ArrowDown className="mx-auto h-6 w-6 text-muted-foreground"/>
             <div className="p-2 border border-dashed rounded-md"><p className="text-sm font-medium">- Pay Toll 3: Interest & Taxes</p></div>
             <ArrowDown className="mx-auto h-6 w-6 text-muted-foreground"/>
             <div className="p-3 bg-primary/10 rounded-md border border-primary/20"><h3 className="text-lg font-semibold text-primary">Net Profit (Cash at Destination)</h3></div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">The Three Key Margin Ratios</CardTitle>
            <CardDescription>Each margin tells a different part of the company's story. Analyzing them together provides a complete picture.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {marginTypes.map(metric => (
              <div key={metric.title} className="p-4 border rounded-lg bg-card shadow-sm">
                <h3 className="font-semibold text-lg flex items-center mb-2">
                  <metric.icon className="mr-3 h-5 w-5 text-primary" />
                  {metric.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">{metric.description}</p>
                <p className="font-mono text-xs bg-muted/50 p-2 rounded-md my-2"><strong>Formula:</strong> {metric.formula}</p>
                
                <h4 className="font-semibold text-sm mt-3">What It Tells You:</h4>
                <p className="text-sm text-muted-foreground">{metric.whatItTells}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-sm">
                  <div className="p-3 bg-green-500/10 rounded-md">
                    <h4 className="font-semibold flex items-center text-green-700 dark:text-green-300"><CheckCircle className="mr-2 h-4 w-4" /> Good Sign</h4>
                    <p className="text-green-600 dark:text-green-400 mt-1">{metric.goodSign}</p>
                  </div>
                  <div className="p-3 bg-red-500/10 rounded-md">
                    <h4 className="font-semibold flex items-center text-red-700 dark:text-red-300"><XCircle className="mr-2 h-4 w-4" /> Bad Sign</h4>
                    <p className="text-red-600 dark:text-red-400 mt-1">{metric.badSign}</p>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        
        <Alert>
          <Info className="h-4 w-4" />
          <AlertTitle className="font-headline">Putting It All Together: A Numerical Example</AlertTitle>
          <AlertDescription>
             <p>Let's say Example Corp. starts with $100 in revenue. After paying the 'COGS toll,' it has $44 left (a 44% Gross Margin). After the 'Operating Expenses toll,' it has $16 left (a 16% Operating Margin). Finally, after paying the 'Interest & Tax toll,' it arrives with $12 (a 12% Net Margin). This clearly illustrates the subtraction at each stage of the profit journey.</p>
          </AlertDescription>
        </Alert>

        <Alert variant="destructive" className="bg-amber-50 dark:bg-amber-900/20 border-amber-300 dark:border-amber-700">
          <Info className="h-4 w-4 text-amber-500" />
          <AlertTitle className="font-headline text-amber-900 dark:text-amber-200">Critical Context: Industry & Trends</AlertTitle>
          <AlertDescription className="text-amber-800 dark:text-amber-300">
            <ul className="list-disc pl-5 mt-2 space-y-2">
                <li><strong>Margins Vary by Industry:</strong> A "good" margin is highly dependent on the industry. A grocery chain might have a 2% net margin, while a software company could have a 30% margin. Always compare a company to its direct competitors.</li>
                <li><strong>Trends are More Important than Snapshots:</strong> A single margin number is less important than its trend over the past 5-10 years. Are margins consistently improving, stable, or deteriorating? Deteriorating margins are a major red flag.</li>
            </ul>
          </AlertDescription>
        </Alert>

        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-xl">Connecting Profit to Cash: The Final Check</CardTitle>
                <CardDescription>A high net profit margin is great, but it's only meaningful if the business is also generating real cash.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground mb-3">Accounting profit (Net Income) can be misleading. A company's Free Cash Flow (FCF) Margin tells you what percentage of revenue is converted into actual cash after all expenses and necessary capital investments are paid for.</p>
                <Alert variant="default" className="bg-primary/5 border-primary/20">
                    <Wind className="h-4 w-4 text-primary"/>
                    <AlertTitle>The Sanity Check:</AlertTitle>
                    <AlertDescription>
                        Look for companies where the FCF Margin is close to or even higher than the Net Profit Margin. This indicates high-quality earnings backed by real cash generation, a hallmark of a durable and well-managed business. If the Net Margin is high but the FCF Margin is low or negative, it's a major warning sign that the reported profits may not be sustainable.
                    </AlertDescription>
                </Alert>
            </CardContent>
        </Card>
        
        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you understand profit margins, return to the main roadmap to continue building your financial knowledge.
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