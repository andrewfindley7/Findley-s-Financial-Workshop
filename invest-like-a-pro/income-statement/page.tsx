'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { TrendingUp, CircleDollarSign, FileText, CheckCircle, Info, TrendingDown, ArrowDown, User, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

const formatDecimal = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};


export default function IncomeStatementPage() {
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
        <h1 className="text-3xl font-bold font-headline">How to Read an Income Statement</h1>
        <p className="text-muted-foreground mt-2">Learn to analyze a company's profitability and performance by understanding its annual earnings report.</p>
      </div>
       <div className="space-y-6">
        <Alert>
          <FileText className="h-4 w-4" />
          <AlertTitle className="font-headline">Purpose & Big Picture</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>An income statement shows how much money a business made (revenue) and spent (expenses) over a period of time, like a quarter or a year. The example data used here is simplified for clarity but reflects what you'd find in a company's official 10-K or annual report.</p>
            <p className="font-semibold">This statement is about a company's performance, not its assets/liabilities (that’s the Balance Sheet) or its cash movements (that’s the Cash Flow Statement).</p>
          </AlertDescription>
        </Alert>

        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-xl">The Flow of the Income Statement: From Top to Bottom</CardTitle>
                <CardDescription>We'll analyze Example Corp.'s income statement by breaking it into sections.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-center">
             <div className="p-3 bg-muted rounded-md"><h3 className="text-lg font-semibold">Total Revenue (The Top Line)</h3></div>
             <ArrowDown className="mx-auto h-6 w-6 text-muted-foreground"/>
             <div className="p-2 border border-dashed rounded-md"><p className="text-sm font-medium">- Cost of Goods Sold (COGS)</p></div>
             <ArrowDown className="mx-auto h-6 w-6 text-muted-foreground"/>
             <div className="p-3 bg-muted rounded-md"><h3 className="text-lg font-semibold">Gross Profit</h3></div>
             <ArrowDown className="mx-auto h-6 w-6 text-muted-foreground"/>
             <div className="p-2 border border-dashed rounded-md"><p className="text-sm font-medium">- Operating Expenses (SG&A, R&D)</p></div>
             <ArrowDown className="mx-auto h-6 w-6 text-muted-foreground"/>
             <div className="p-3 bg-muted rounded-md"><h3 className="text-lg font-semibold">Operating Profit (EBIT)</h3></div>
              <ArrowDown className="mx-auto h-6 w-6 text-muted-foreground"/>
             <div className="p-2 border border-dashed rounded-md"><p className="text-sm font-medium">- Interest & Taxes</p></div>
             <ArrowDown className="mx-auto h-6 w-6 text-muted-foreground"/>
             <div className="p-3 bg-primary/10 rounded-md border border-primary/20"><h3 className="text-lg font-semibold text-primary">Net Income (The Bottom Line)</h3></div>
             <ArrowDown className="mx-auto h-6 w-6 text-muted-foreground"/>
             <div className="p-2 border border-dashed rounded-md"><p className="text-sm font-medium">÷ Shares Outstanding</p></div>
             <ArrowDown className="mx-auto h-6 w-6 text-muted-foreground"/>
             <div className="p-3 bg-primary/10 rounded-md border border-primary/20"><h3 className="text-lg font-semibold text-primary">Earnings Per Share (EPS)</h3></div>
          </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-xl">Analysis of Example Corp.'s Income Statement</CardTitle>
                 <CardDescription>Let's walk through the statement section by section.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                
                {/* Block 1: Revenue */}
                <div className="p-4 border rounded-lg">
                    <h3 className="text-lg font-semibold flex items-center mb-2"><TrendingUp className="mr-2 h-5 w-5 text-primary"/>1. Revenue (The Top Line)</h3>
                    <p className="text-sm text-muted-foreground mb-3">This is the total money earned from sales. It's the starting point for everything.</p>
                    <Table>
                        <TableHeader><TableRow><TableHead>Line Item</TableHead><TableHead className="text-right">2023</TableHead><TableHead className="text-right">2022</TableHead></TableRow></TableHeader>
                        <TableBody>
                            <TableRow><TableCell className="font-semibold">Total net sales</TableCell><TableCell className="text-right">${formatCurrency(500000)}</TableCell><TableCell className="text-right">${formatCurrency(450000)}</TableCell></TableRow>
                        </TableBody>
                    </Table>
                    <Alert className="mt-4 text-sm bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800">
                        <Info className="h-4 w-4"/>
                        <AlertTitle className="font-semibold">Investor's View: Is revenue growing consistently?</AlertTitle>
                        <AlertDescription>
                            Yes. Revenue grew from $450k to $500k, a healthy <strong>11.1% increase</strong> year-over-year. This is the first sign of a healthy, in-demand business.
                        </AlertDescription>
                    </Alert>
                </div>
                
                <ArrowDown className="mx-auto h-6 w-6 text-muted-foreground" />

                {/* Block 2: Expenses & Operating Income */}
                <div className="p-4 border rounded-lg">
                    <h3 className="text-lg font-semibold flex items-center mb-2"><TrendingDown className="mr-2 h-5 w-5 text-primary"/>2. Expenses & Operating Income</h3>
                    <p className="text-sm text-muted-foreground mb-3">This section subtracts the costs of doing business to see how profitable the company's core operations are.</p>
                    <Table>
                        <TableHeader><TableRow><TableHead>Line Item</TableHead><TableHead className="text-right">2023</TableHead><TableHead className="text-right">2022</TableHead></TableRow></TableHeader>
                        <TableBody>
                            <TableRow><TableCell>Cost of sales</TableCell><TableCell className="text-right">-${formatCurrency(280000)}</TableCell><TableCell className="text-right">-${formatCurrency(250000)}</TableCell></TableRow>
                            <TableRow className="bg-muted/50"><TableCell className="font-semibold">Gross profit</TableCell><TableCell className="text-right font-semibold">${formatCurrency(220000)}</TableCell><TableCell className="text-right font-semibold">${formatCurrency(200000)}</TableCell></TableRow>
                            <TableRow><TableCell>Research and development</TableCell><TableCell className="text-right">-${formatCurrency(60000)}</TableCell><TableCell className="text-right">-${formatCurrency(55000)}</TableCell></TableRow>
                            <TableRow><TableCell>Selling, general and administrative</TableCell><TableCell className="text-right">-${formatCurrency(80000)}</TableCell><TableCell className="text-right">-${formatCurrency(75000)}</TableCell></TableRow>
                             <TableRow className="bg-muted/50"><TableCell className="font-semibold">Operating income</TableCell><TableCell className="text-right font-semibold">${formatCurrency(80000)}</TableCell><TableCell className="text-right font-semibold">${formatCurrency(70000)}</TableCell></TableRow>
                        </TableBody>
                    </Table>
                     <Alert className="mt-4 text-sm bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800">
                        <Info className="h-4 w-4"/>
                        <AlertTitle className="font-semibold">Investor's View: Is the business efficient?</AlertTitle>
                        <AlertDescription>
                            <ul className="list-disc pl-5 space-y-1">
                                <li><strong>Cost of sales</strong> (or COGS) are the direct costs of production. Since this grew slower than revenue, the company's <strong>Gross Profit</strong> grew, and its Gross Margin remained stable at 44%. This indicates strong pricing power.</li>
                                <li><strong>Operating expenses</strong> (R&D and SG&A) cover costs like marketing and salaries. These also grew slower than revenue, which is a positive sign of operational leverage.</li>
                                <li>As a result, <strong>Operating Income</strong> grew by a strong 14.3%, and the Operating Margin improved slightly from 15.6% to 16.0%. This shows the core business is healthy and well-managed.</li>
                            </ul>
                        </AlertDescription>
                    </Alert>
                </div>
                
                <ArrowDown className="mx-auto h-6 w-6 text-muted-foreground" />

                {/* Block 3: Net Income */}
                <div className="p-4 border rounded-lg">
                    <h3 className="text-lg font-semibold flex items-center mb-2"><CircleDollarSign className="mr-2 h-5 w-5 text-primary"/>3. Below the Line & Net Income</h3>
                    <p className="text-sm text-muted-foreground mb-3">This section subtracts non-operating items like interest and taxes to arrive at the final profit.</p>
                    <Table>
                        <TableHeader><TableRow><TableHead>Line Item</TableHead><TableHead className="text-right">2023</TableHead><TableHead className="text-right">2022</TableHead></TableRow></TableHeader>
                        <TableBody>
                            <TableRow><TableCell>Interest expense</TableCell><TableCell className="text-right">-${formatCurrency(8000)}</TableCell><TableCell className="text-right">-${formatCurrency(7000)}</TableCell></TableRow>
                             <TableRow className="bg-muted/50"><TableCell>Income before taxes</TableCell><TableCell className="text-right">${formatCurrency(72000)}</TableCell><TableCell className="text-right">${formatCurrency(63000)}</TableCell></TableRow>
                            <TableRow><TableCell>Provision for income taxes</TableCell><TableCell className="text-right">-${formatCurrency(14400)}</TableCell><TableCell className="text-right">-${formatCurrency(12600)}</TableCell></TableRow>
                            <TableRow className="bg-primary/10"><TableCell className="font-semibold">Net income (Bottom Line)</TableCell><TableCell className="text-right font-bold">${formatCurrency(57600)}</TableCell><TableCell className="text-right font-bold">${formatCurrency(50400)}</TableCell></TableRow>
                        </TableBody>
                    </Table>
                     <Alert className="mt-4 text-sm bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800">
                        <Info className="h-4 w-4"/>
                        <AlertTitle className="font-semibold">Investor's View: How much profit per $1 of sales?</AlertTitle>
                        <AlertDescription>
                          <ul className="list-disc pl-5 space-y-1">
                                <li>The company paid a small amount in <strong>interest expense</strong>, which is normal for a company with debt. An investor should check the balance sheet to ensure the debt load is manageable.</li>
                                <li>After interest, we have <strong>Income before taxes</strong>. This is the company's total profit before paying taxes.</li>
                                <li>The <strong>provision for income taxes</strong> was about 20% of pre-tax income ($14.4k / $72k), which is a normal corporate tax rate.</li>
                                <li>After all expenses, the final <strong>Net Income</strong> ("bottom line") rose a healthy 14.3% to $57.6k. This gives a <strong>Net Profit Margin</strong> of 11.5% for 2023, a slight improvement from 11.2% in 2022, confirming the company's profitability and efficiency.</li>
                            </ul>
                        </AlertDescription>
                    </Alert>
                </div>

                <ArrowDown className="mx-auto h-6 w-6 text-muted-foreground" />

                {/* Block 4: Per Share Data */}
                 <div className="p-4 border rounded-lg">
                    <h3 className="text-lg font-semibold flex items-center mb-2"><Users className="mr-2 h-5 w-5 text-primary"/>4. Earnings Per Share (EPS)</h3>
                    <p className="text-sm text-muted-foreground mb-3">This section translates the company's total profit into profit per share, which is a critical metric for individual investors.</p>
                    <Table>
                        <TableHeader><TableRow><TableHead>Line Item</TableHead><TableHead className="text-right">2023</TableHead><TableHead className="text-right">2022</TableHead></TableRow></TableHeader>
                        <TableBody>
                            <TableRow><TableCell>Weighted-average shares outstanding, basic</TableCell><TableCell className="text-right">{formatCurrency(9800)}</TableCell><TableCell className="text-right">{formatCurrency(10000)}</TableCell></TableRow>
                            <TableRow><TableCell>Weighted-average shares outstanding, diluted</TableCell><TableCell className="text-right">{formatCurrency(10000)}</TableCell><TableCell className="text-right">{formatCurrency(10200)}</TableCell></TableRow>
                             <TableRow className="bg-primary/10"><TableCell className="font-semibold">Earnings per share, diluted</TableCell><TableCell className="text-right font-bold">${formatDecimal(5.76)}</TableCell><TableCell className="text-right font-bold">${formatDecimal(4.94)}</TableCell></TableRow>
                        </TableBody>
                    </Table>
                     <Alert className="mt-4 text-sm bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800">
                        <Info className="h-4 w-4"/>
                        <AlertTitle className="font-semibold">Investor's View: Is my ownership stake growing in value?</AlertTitle>
                        <AlertDescription>
                          <ul className="list-disc pl-5 space-y-1">
                                <li>The <strong>Weighted-average shares outstanding</strong> tells you how many slices the company 'pie' is cut into. A falling share count (like from 2022 to 2023 basic shares) is a great sign, often due to share buybacks, which increases your ownership percentage.</li>
                                <li>'Diluted' shares includes potential shares from stock options. This is a more conservative number and is used for the main EPS calculation.</li>
                                <li><strong>Earnings per share (EPS)</strong> is the bottom line for shareholders. Here, diluted EPS grew by a very strong <strong>16.6%</strong>. This is faster than Net Income growth (14.3%), showing that share buybacks are helping to boost per-share value. This is what you want to see as an owner.</li>
                            </ul>
                        </AlertDescription>
                    </Alert>
                </div>
            </CardContent>
        </Card>

        <Card className="bg-primary/5 border-primary/20">
            <CardHeader><CardTitle className="font-headline text-xl">Statement Summary</CardTitle></CardHeader>
            <CardContent>
                <blockquote className="border-l-4 border-primary pl-4 italic">
                  Example Corp. demonstrates a healthy growth profile. The 11.1% increase in revenue shows sustained customer demand. More importantly, the company's ability to grow its Net Income (14.3%) faster than its revenue indicates strong operational efficiency and pricing power. This efficiency is confirmed by the stable Gross and Operating Margins. The company is also shareholder-friendly, using its cash to buy back shares, which helped boost Diluted EPS by an impressive 16.6%. From an investment perspective, this income statement tells the story of a well-run, profitable business that is effectively scaling its operations and rewarding its owners.
                </blockquote>
            </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle className="font-headline text-xl">Key Ratios & Takeaways</CardTitle></CardHeader>
          <CardContent className="space-y-4">
              <div className="p-3 border rounded-lg">
                <h4 className="font-semibold">Revenue Growth Rate: (Current Revenue / Previous Revenue) - 1</h4>
                <p className="text-xs text-muted-foreground mb-2">Measures how quickly the company's sales are increasing.</p>
                <code className="text-sm p-2 bg-muted rounded-md block">(($500,000 / $450,000) - 1) * 100 = 11.1%</code>
              </div>
              <div className="p-3 border rounded-lg">
                <h4 className="font-semibold">Operating Margin: (Operating Income / Revenue) * 100</h4>
                <p className="text-xs text-muted-foreground mb-2">Measures core business profitability before interest and tax.</p>
                <code className="text-sm p-2 bg-muted rounded-md block">($80,000 / $500,000) * 100 = 16.0%</code>
              </div>
               <div className="p-3 border rounded-lg">
                <h4 className="font-semibold">Net Margin: (Net Income / Revenue) * 100</h4>
                <p className="text-xs text-muted-foreground mb-2">Measures the final profit generated for every dollar of sales.</p>
                <code className="text-sm p-2 bg-muted rounded-md block">($57,600 / $500,000) * 100 = 11.5%</code>
              </div>
               <div className="p-3 border rounded-lg">
                <h4 className="font-semibold">EPS Growth Rate: ((Current EPS / Previous EPS) - 1) * 100</h4>
                <p className="text-xs text-muted-foreground mb-2">Measures how quickly profit per share is growing.</p>
                <code className="text-sm p-2 bg-muted rounded-md block">(($5.76 / $4.94) - 1) * 100 = 16.6%</code>
              </div>
          </CardContent>
        </Card>

        <Card>
           <CardHeader><CardTitle className="font-headline text-xl">Common Pitfalls & Red Flags</CardTitle></CardHeader>
           <CardContent>
               <ul className="list-disc pl-5 space-y-2 text-sm">
                   <li><strong>One-time gains or losses</strong> can distort net income. Always check for large, non-recurring items that aren't part of the core business.</li>
                   <li><strong>Aggressive Revenue Recognition:</strong> Be cautious if a company books revenue for long-term contracts all at once, before the service is fully delivered.</li>
                   <li>Be wary if <strong>revenue is growing but profits are shrinking</strong>. This could mean the company is "buying" growth at an unprofitable price or facing intense competition.</li>
                   <li><strong>Declining margins</strong> year after year is a major red flag that suggests a weakening competitive position or poor cost control.</li>
                   <li>If <strong>EPS growth is only from share buybacks</strong> (shrinking the denominator) while net income is flat or falling, it can mask underlying business problems.</li>
               </ul>
           </CardContent>
        </Card>

        <Card>
            <CardHeader><CardTitle className="font-headline text-xl">Investor Checklist</CardTitle></CardHeader>
            <CardContent>
                <ul className="space-y-2">
                    <li className="flex items-center text-sm"><CheckCircle className="mr-2 h-4 w-4 text-green-600"/>Is revenue growing?</li>
                    <li className="flex items-center text-sm"><CheckCircle className="mr-2 h-4 w-4 text-green-600"/>Are margins stable or improving?</li>
                    <li className="flex items-center text-sm"><CheckCircle className="mr-2 h-4 w-4 text-green-600"/>Is net income rising?</li>
                    <li className="flex items-center text-sm"><CheckCircle className="mr-2 h-4 w-4 text-green-600"/>Is EPS growing (ideally faster than net income)?</li>
                </ul>
            </CardContent>
        </Card>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>Now that you can analyze an income statement, you're ready to tackle the balance sheet.</CardDescription>
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
