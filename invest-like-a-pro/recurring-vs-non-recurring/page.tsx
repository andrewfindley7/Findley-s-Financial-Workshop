'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Eye, FileText, CheckCircle, XCircle, ArrowRight, Zap, Info, Repeat } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const formatCurrency = (value: number) => {
  const isNegative = value < 0;
  const formatted = new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(Math.abs(value));
  return isNegative ? `(${formatted})` : formatted;
};

const incomeStatementData = {
  years: ['2023', '2022'],
  lineItems: [
    { label: 'Total net sales', values: [550000, 500000] },
    { label: 'Cost of sales', values: [350000, 280000] },
    { label: 'Gross profit', values: [200000, 220000], isBold: true, isSubtotal: true },
    { label: 'Operating expenses', values: [155000, 140000] },
    { label: 'Operating income', values: [45000, 80000], isBold: true, isSubtotal: true },
    { label: 'Gain on sale of asset', values: [50000, 0], isHighlighted: true },
    { label: 'Interest expense', values: [10000, 8000] },
    { label: 'Income before income taxes', values: [85000, 72000], isSubtotal: true },
    { label: 'Provision for income taxes', values: [17000, 14400] },
    { label: 'Net income', values: [68000, 57600], isBold: true, isDoubleUnderlined: true },
  ],
};

const normalizedData = {
    reportedPreTaxIncome2023: 85000,
    oneTimeGain: 50000,
    get normalizedPreTaxIncome2023() {
        return this.reportedPreTaxIncome2023 - this.oneTimeGain;
    },
    preTaxIncome2022: 72000,
    get normalizedGrowth() {
        return (this.normalizedPreTaxIncome2023 / this.preTaxIncome2022 - 1) * 100;
    }
}

export default function RecurringVsNonRecurringPage() {
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
        <h1 className="text-3xl font-bold font-headline">Recurring vs. Non-Recurring Items</h1>
        <p className="text-muted-foreground mt-2">Learn to identify and adjust for one-off events to see a company's true earnings power.</p>
      </div>
       <div className="space-y-6">
        <Alert>
          <Repeat className="h-4 w-4" />
          <AlertTitle className="font-headline">The Goal: Finding Sustainable Profit</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>An income statement can be misleading. Sometimes, reported profits (Net Income) are inflated by one-time gains or artificially suppressed by one-time losses that have nothing to do with the company's core, repeatable business operations.</p>
            <p className="font-semibold">A key skill for an investor is to mentally (or literally) "normalize" earnings by identifying and excluding these non-recurring items. This allows you to see the true, sustainable earnings power of the business, which is a much better predictor of its future performance.</p>
          </AlertDescription>
        </Alert>

        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-xl">Common One-Time Items</CardTitle>
                <CardDescription>Keep an eye out for these items in the "non-operating" section of the income statement, between Operating Income and Net Income.</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/20 border-green-200">
                    <h3 className="font-semibold flex items-center mb-1 text-green-700 dark:text-green-300">
                        <CheckCircle className="mr-2 h-5 w-5"/> One-Time Gains (That Inflate Profit)
                    </h3>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                        <li>Gain on sale of asset: The company sold a factory, a business division, or an investment for more than its book value.</li>
                        <li>Favorable legal settlement: The company received a large, one-time payment from winning a lawsuit.</li>
                        <li>Tax benefits from prior losses (NOL carryforwards).</li>
                    </ul>
                     <Alert variant="default" className="mt-4 text-xs bg-background/50">
                        <AlertTitle className="font-semibold">Case Study: Google's Tax Rate</AlertTitle>
                        <AlertDescription>
                            In recent years, Alphabet (GOOGL) has repeatedly reported inflated net income due to large one-time tax benefits from deferred tax adjustments that push liabilities into future periods. These accounting gains, tied to revaluations of foreign intangible assets and cost allocations, made reported earnings appear much higher even though cash flow from operations showed no real improvement. In both 2023 and 2024, Alphabet’s effective tax rate dropped to roughly 8–10%, well below its normalized 15–17% range, creating the illusion of stronger profitability. An analyst adjusting for these temporary benefits would find that Alphabet’s true, sustainable earnings are meaningfully lower than the headline GAAP results suggest.
                        </AlertDescription>
                    </Alert>
                </div>
                 <div className="p-4 border rounded-lg bg-red-50 dark:bg-red-900/20 border-red-200">
                    <h3 className="font-semibold flex items-center mb-1 text-red-700 dark:text-red-300">
                        <XCircle className="mr-2 h-5 w-5"/> One-Time Losses (That Suppress Profit)
                    </h3>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                        <li>Restructuring charges: Costs associated with a major corporate reorganization, like layoffs or closing facilities.</li>
                        <li>Asset write-downs/impairments: An accounting charge to reduce the value of an asset (like Goodwill from a bad acquisition) that has lost value.</li>
                        <li>Loss from litigation: A large, one-time payment for losing a lawsuit.</li>
                    </ul>
                    <Alert variant="default" className="mt-4 text-xs bg-background/50">
                        <AlertTitle className="font-semibold">Case Study: Crocs & HEYDUDE</AlertTitle>
                        <AlertDescription>
                          In Q2 2025, Crocs, Inc. (NASDAQ: CROX) recorded a massive non-cash impairment of approximately $737 million to write down the value of its HEYDUDE brand—$430 million in trademarks and $307 million in goodwill. This caused reported GAAP operating income to turn sharply negative. However, after excluding this one-time charge, Crocs’ adjusted operating income was about $309 million, with a healthy 26.9% margin. Analysts note that while GAAP earnings appeared weak (and the stock briefly traded at what looked like a P/E of 20×), the normalized valuation adjusted for the impairment was closer to 6× earnings, revealing that the core Crocs brand remains highly profitable
                        </AlertDescription>
                    </Alert>
                </div>
            </CardContent>
            <CardFooter>
                 <p className="text-xs text-muted-foreground">Note: A non-recurring item might appear for several consecutive years (e.g., a multi-year restructuring plan). Always check the financial statement footnotes and the Management's Discussion & Analysis (MD&A) section for context.</p>
            </CardFooter>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-xl">Example: Normalizing Example Corp.'s Earnings</CardTitle>
                <CardDescription>Let's re-examine Example Corp.'s income statement. The reported Net Income grew from $57.6k to $68k, which looks great. But is it real?</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Line Item</TableHead>
                            <TableHead className="text-right">2023</TableHead>
                            <TableHead className="text-right">2022</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {incomeStatementData.lineItems.map((item, index) => (
                        <TableRow key={index} className={item.isHighlighted ? "bg-amber-100/50 dark:bg-amber-900/30" : ""}>
                            <TableCell className={`font-medium ${item.isBold ? 'font-bold' : ''}`}>
                            {item.label}
                            </TableCell>
                            <TableCell className={`text-right ${item.isBold ? 'font-bold' : ''}`}>
                            {formatCurrency(item.values[0])}
                            </TableCell>
                            <TableCell className={`text-right ${item.isBold ? 'font-bold' : ''}`}>
                            {formatCurrency(item.values[1])}
                            </TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
            <CardFooter className="flex-col items-start gap-4">
                 <Alert>
                    <Eye className="h-4 w-4"/>
                    <AlertTitle className="font-semibold">The Analyst's View</AlertTitle>
                    <AlertDescription>
                        An investor would immediately spot the $50,000 "Gain on sale of asset" in 2023. This is not a part of the core, recurring business. To see the real performance, you must mentally remove it.
                    </AlertDescription>
                </Alert>
                
                <Card className="w-full bg-muted/40">
                    <CardHeader><CardTitle className="text-lg">Normalized Pre-Tax Income (2023)</CardTitle></CardHeader>
                    <CardContent>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between"><span>Reported Pre-Tax Income:</span> <span className="font-mono">{formatCurrency(normalizedData.reportedPreTaxIncome2023)}</span></div>
                            <div className="flex justify-between"><span>Subtract One-Time Gain:</span> <span className="font-mono text-red-600">-{formatCurrency(normalizedData.oneTimeGain)}</span></div>
                            <div className="flex justify-between border-t pt-2 mt-2 font-bold"><span>Normalized Pre-Tax Income:</span> <span className="font-mono">{formatCurrency(normalizedData.normalizedPreTaxIncome2023)}</span></div>
                        </div>
                    </CardContent>
                </Card>
                
                 <Alert variant="destructive">
                    <Zap className="h-4 w-4"/>
                    <AlertTitle className="font-semibold">The Investment Implication</AlertTitle>
                    <AlertDescription>
                       After removing the one-time gain, Example Corp.'s normalized pre-tax income for 2023 was only {formatCurrency(normalizedData.normalizedPreTaxIncome2023)}. Compared to 2022's pre-tax income of {formatCurrency(normalizedData.preTaxIncome2022)}, the company's core earnings actually declined by {Math.abs(normalizedData.normalizedGrowth).toFixed(1)}%. The reported growth was an illusion created by a non-recurring event. This is a critical insight that changes the entire investment thesis.
                    </AlertDescription>
                </Alert>
            </CardFooter>
        </Card>
        
        <Alert variant="default" className="bg-primary/5 border-primary/20">
            <Info className="h-4 w-4" />
            <AlertTitle className="font-semibold">For Your Reflection</AlertTitle>
            <AlertDescription>
                If you were valuing this company using a price-to-earnings (P/E) ratio, would you use the reported earnings or the normalized earnings? Why is one a better predictor of future performance than the other?
            </AlertDescription>
        </Alert>
        
        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you have applied your knowledge, return to the Invest Like a Pro roadmap to continue your analysis.
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
