'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Medal, ShieldCheck, TrendingUp, CircleDollarSign, Target, ArrowRight, Lightbulb, Scale, Info, CheckCircle, XCircle } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableCaption } from '@/components/ui/table';

const metrics = [
  {
    name: "Return on Invested Capital",
    acronym: "ROIC",
    icon: Medal,
    formula: "Net Operating Profit After Tax (NOPAT) / Invested Capital",
    description: "ROIC is arguably the most important profitability ratio as it measures how well a company is using all its capital (both debt and equity) to generate profits. It shows the true efficiency of a business's operations.",
    whatItTells: "A high and stable ROIC indicates a strong competitive advantage (a 'moat'). It means the company is a 'compounding machine'—any money it reinvests into the business generates high returns for its owners.",
    useWhen: "Excellent for comparing capital-intensive businesses (e.g., manufacturing, telecommunications) and for identifying truly elite companies in any sector. Less useful for banks or financial institutions.",
  },
  {
    name: "Return on Equity",
    acronym: "ROE",
    icon: TrendingUp,
    formula: "Net Income / Shareholder's Equity",
    description: "ROE measures how much profit a company generates for each dollar of shareholder's equity. It's a measure of profitability from the owner's perspective.",
    whatItTells: "A high ROE indicates that management is using the owners' money effectively to grow the business. It answers the question: 'How good is this company at making money with my money?'",
    useWhen: "Useful for comparing companies within the same industry. However, it can be misleadingly high for companies that use a lot of debt (leverage), as high debt reduces equity, artificially inflating the ratio. This makes it crucial to also check debt levels.",
  },
  {
    name: "Return on Assets",
    acronym: "ROA",
    icon: CircleDollarSign,
    formula: "Net Income / Total Assets",
    description: "ROA measures how efficiently a company is using its total assets to generate profit. It shows the profitability of a company relative to its total asset base.",
    whatItTells: "ROA provides insight into a company's operational efficiency. A rising ROA indicates the company is doing a better job of converting its investments in assets into profit.",
    useWhen: "Useful for comparing companies in asset-heavy industries like manufacturing or transportation. It is less affected by leverage than ROE, providing a different angle on efficiency.",
  },
  {
    name: "Return on Capital Employed",
    acronym: "ROCE",
    icon: Target,
    formula: "EBIT / (Total Assets - Current Liabilities)",
    description: "Similar to ROIC, ROCE measures a company's profitability in relation to all of its long-term capital. It uses pre-tax earnings (EBIT) to focus on operational performance before the effects of taxes and financing.",
    whatItTells: "ROCE is a good indicator of the long-term profitability of a company. It's particularly useful for comparing companies in capital-intensive sectors as it shows how effectively they are using their long-term financing to generate profit.",
    useWhen: "Good for comparing companies in industries like utilities, oil and gas, and industrials. It's often used alongside ROIC for a more complete picture of capital efficiency.",
  }
];

export default function ReturnOnCapitalAnalysisPage() {
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
        <h1 className="text-3xl font-bold font-headline">Return on Capital: ROIC, ROE, ROCE, & ROA</h1>
        <p className="text-muted-foreground mt-2">A deep dive into the most important profitability ratios for judging business quality and management effectiveness.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Lightbulb className="h-4 w-4" />
          <AlertTitle className="font-headline">Measuring Management's Skill</AlertTitle>
          <AlertDescription>
             <p>Return on capital metrics are like gauges on a dashboard, each showing how efficiently management is converting resources into results. They answer the most important question: <strong>"How good is this company at turning a dollar of capital into a dollar of profit?"</strong> A business that can consistently generate high returns on its capital is a high-quality business with a strong competitive advantage.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle>The Key Return Metrics</CardTitle>
            <CardDescription>Understanding the nuances of each metric allows you to build a more complete picture of a company's performance.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {metrics.map(metric => (
              <Card key={metric.name} className="p-4 bg-muted/30">
                <CardHeader className="p-0 mb-3">
                  <CardTitle className="flex items-center text-lg"><metric.icon className="mr-3 h-5 w-5 text-primary" />{metric.name} ({metric.acronym})</CardTitle>
                </CardHeader>
                <CardContent className="p-0 space-y-3 text-sm">
                  <p className="italic text-muted-foreground">{metric.description}</p>
                   <p className="font-mono text-xs bg-background/50 p-1.5 rounded-md"><strong>Formula:</strong> {metric.formula}</p>
                   {metric.acronym === 'ROIC' && (
                     <Alert variant="default" className="text-xs bg-background/60">
                        <Info className="h-4 w-4"/>
                        <AlertDescription>NOPAT is used because it shows profit from core operations as if the company had no debt, making it a pure measure of operating efficiency before financing decisions.</AlertDescription>
                     </Alert>
                   )}
                   <div>
                     <h4 className="font-semibold mb-1">What it tells you:</h4>
                     <p>{metric.whatItTells}</p>
                   </div>
                   <div>
                     <h4 className="font-semibold mb-1">When to use it & Limitations:</h4>
                     <p>{metric.useWhen}</p>
                   </div>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>

        <Alert variant="default" className="bg-green-500/10 border-green-500/20 text-foreground">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertTitle className="font-headline text-lg">The Ultimate Question: Reinvest or Return?</AlertTitle>
            <AlertDescription className="prose prose-sm max-w-none">
                <p>This analysis leads to a crucial insight for long-term investors. When a company generates cash, it has two main choices: reinvest it back into the business (for new projects, R&D, etc.) or return it to shareholders (through dividends or stock buybacks).</p>
                <p>The decision rule is simple:</p>
                <ul className="list-disc pl-5">
                    <li>If the company can reinvest that cash at a high rate of return (e.g., a 20% ROIC), which is likely higher than what you could earn by investing it yourself in an index fund (e.g., 10%), you should want the company to keep and reinvest every penny. This will compound your wealth faster.</li>
                    <li>If the company can only reinvest at a low rate of return (e.g., 5%), you would be better off if they returned that cash to you, so you could invest it elsewhere for a higher return.</li>
                </ul>
                <p className="font-semibold">This is why investors are often willing to pay a premium for businesses that consistently demonstrate a high Return on Invested Capital. They are proven, efficient wealth-creation machines.</p>
            </AlertDescription>
        </Alert>

         <Card>
            <CardHeader>
                <CardTitle className="font-headline text-xl flex items-center">
                    <Scale className="mr-3 h-5 w-5 text-primary"/>At-a-Glance Comparison
                </CardTitle>
                <CardDescription>Use this table for a quick comparison of what each metric is best for.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Metric</TableHead>
                                <TableHead>Measures</TableHead>
                                <TableHead>Best For</TableHead>
                                <TableHead>Key Limitation</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow><TableCell className="font-semibold">ROIC</TableCell><TableCell>Efficiency of all capital (debt & equity)</TableCell><TableCell>Identifying high-quality 'compounders'</TableCell><TableCell>Can be complex to calculate accurately</TableCell></TableRow>
                            <TableRow><TableCell className="font-semibold">ROE</TableCell><TableCell>Profitability from shareholders' money</TableCell><TableCell>Comparing similar companies in the same industry</TableCell><TableCell>Can be distorted by high debt (leverage)</TableCell></TableRow>
                            <TableRow><TableCell className="font-semibold">ROA</TableCell><TableCell>Efficiency of using all assets</TableCell><TableCell>Asset-heavy industries (e.g., manufacturing)</TableCell><TableCell>Can be affected by different depreciation methods</TableCell></TableRow>
                            <TableRow><TableCell className="font-semibold">ROCE</TableCell><TableCell>Efficiency of long-term capital (pre-tax)</TableCell><TableCell>Capital-intensive industries (e.g., utilities)</TableCell><TableCell>Ignores tax efficiency</TableCell></TableRow>
                        </TableBody>
                    </Table>
                </div>
            </CardContent>
        </Card>
        
        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you understand these key performance metrics, return to the main roadmap to see how they fit into a comprehensive business analysis.
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
