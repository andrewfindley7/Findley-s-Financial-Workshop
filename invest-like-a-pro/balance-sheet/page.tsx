'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { TrendingUp, FileText, Info, TrendingDown, ArrowDown, Landmark, ArrowRight, Activity, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';


const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

export default function BalanceSheetPage() {
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
        <h1 className="text-3xl font-bold font-headline">How to Read a Balance Sheet</h1>
        <p className="text-muted-foreground mt-2">Understand a company's financial position at a single point in time.</p>
      </div>
       <div className="space-y-6">
        <Alert>
          <FileText className="h-4 w-4" />
          <AlertTitle className="font-headline">Purpose & Big Picture: A Financial Snapshot</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>A balance sheet is a financial statement that provides a snapshot of what a company owns (assets) and what it owes (liabilities), as well as the amount invested by shareholders (equity), on a specific date. It's built on the fundamental accounting equation:</p>
            <div className="my-2 p-3 bg-muted rounded-md text-center">
              <code className="text-lg font-bold font-mono">Assets = Liabilities + Stockholders' Equity</code>
            </div>
            <p className="font-semibold">This equation must always balance. Think of it this way: everything the company owns (its assets) had to be paid for somehow—either with borrowed money (liabilities) or with money from its owners (equity).</p>
          </AlertDescription>
        </Alert>

        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-xl">The Flow of the Balance Sheet</CardTitle>
                <CardDescription>We'll analyze Example Corp.'s balance sheet by breaking it down.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                
                {/* Block 1: Assets */}
                <div className="p-4 border rounded-lg">
                    <h3 className="text-lg font-semibold flex items-center mb-2"><TrendingUp className="mr-2 h-5 w-5 text-primary"/>1. Assets (What the Company Owns)</h3>
                    <p className="text-sm text-muted-foreground mb-3">Assets are resources with economic value. They are broken down by liquidity into Current Assets (can be converted to cash within a year) and Non-Current Assets (long-term assets).</p>
                    <Table>
                        <TableHeader><TableRow><TableHead>Line Item</TableHead><TableHead className="text-right">2023</TableHead><TableHead className="text-right">2022</TableHead></TableRow></TableHeader>
                        <TableBody>
                            <TableRow><TableCell className="pl-4 font-semibold text-muted-foreground">Current Assets</TableCell><TableCell></TableCell><TableCell></TableCell></TableRow>
                            <TableRow><TableCell className="pl-8">Cash and cash equivalents</TableCell><TableCell className="text-right">${formatCurrency(75000)}</TableCell><TableCell className="text-right">${formatCurrency(43200)}</TableCell></TableRow>
                            <TableRow><TableCell className="pl-8">Accounts receivable</TableCell><TableCell className="text-right">${formatCurrency(50000)}</TableCell><TableCell className="text-right">${formatCurrency(45000)}</TableCell></TableRow>
                            <TableRow><TableCell className="pl-8">Inventory</TableCell><TableCell className="text-right">${formatCurrency(60000)}</TableCell><TableCell className="text-right">${formatCurrency(53000)}</TableCell></TableRow>
                            <TableRow className="bg-muted/50"><TableCell className="pl-8 font-semibold">Total current assets</TableCell><TableCell className="text-right font-semibold">${formatCurrency(185000)}</TableCell><TableCell className="text-right font-semibold">${formatCurrency(141200)}</TableCell></TableRow>
                            <TableRow><TableCell className="pl-4 font-semibold text-muted-foreground">Non-Current Assets</TableCell><TableCell></TableCell><TableCell></TableCell></TableRow>
                            <TableRow><TableCell className="pl-8">Property, plant, and equipment</TableCell><TableCell className="text-right">${formatCurrency(250000)}</TableCell><TableCell className="text-right">${formatCurrency(237000)}</TableCell></TableRow>
                            <TableRow><TableCell className="pl-8">Goodwill</TableCell><TableCell className="text-right">${formatCurrency(40000)}</TableCell><TableCell className="text-right">${formatCurrency(40000)}</TableCell></TableRow>
                             <TableRow className="bg-muted/50"><TableCell className="pl-8 font-semibold">Total non-current assets</TableCell><TableCell className="text-right font-semibold">${formatCurrency(290000)}</TableCell><TableCell className="text-right font-semibold">${formatCurrency(277000)}</TableCell></TableRow>
                             <TableRow className="bg-primary/10"><TableCell className="font-semibold">Total Assets</TableCell><TableCell className="text-right font-bold text-lg">${formatCurrency(475000)}</TableCell><TableCell className="text-right font-bold text-lg">${formatCurrency(418200)}</TableCell></TableRow>
                        </TableBody>
                    </Table>
                    <Alert className="mt-4 text-sm bg-blue-50 text-foreground dark:bg-blue-900/30 border-blue-200 dark:border-blue-800">
                        <Info className="h-4 w-4 text-blue-600"/>
                        <AlertTitle className="font-semibold">Investor's View: What kind of assets does the company have?</AlertTitle>
                        <AlertDescription>
                            <ul className="list-disc pl-5 space-y-1">
                                <li><strong>Current Assets:</strong> The company's cash position grew significantly, which is a strong positive. This matches the 'Ending Cash' on the cash flow statement. The rise in accounts receivable and inventory is normal for a growing company but should be monitored to ensure it's not growing much faster than sales.</li>
                                <li><strong>Non-Current Assets:</strong> The increase in PP&E shows the company is investing in its long-term productive capacity (this should correspond to 'CapEx' on the cash flow statement). Goodwill remaining stable indicates no new major acquisitions were made.</li>
                                <li>Overall, Total Assets grew by 13.6%, showing the company is expanding its resource base.</li>
                            </ul>
                        </AlertDescription>
                    </Alert>
                </div>
                
                <ArrowDown className="mx-auto h-6 w-6 text-muted-foreground" />

                {/* Block 2: Liabilities */}
                <div className="p-4 border rounded-lg">
                    <h3 className="text-lg font-semibold flex items-center mb-2"><TrendingDown className="mr-2 h-5 w-5 text-primary"/>2. Liabilities (What the Company Owes)</h3>
                    <p className="text-sm text-muted-foreground mb-3">Liabilities are a company's obligations to other parties. They are also broken down by maturity into Current Liabilities (due within a year) and Non-Current Liabilities (due after a year).</p>
                    <Table>
                        <TableHeader><TableRow><TableHead>Line Item</TableHead><TableHead className="text-right">2023</TableHead><TableHead className="text-right">2022</TableHead></TableRow></TableHeader>
                        <TableBody>
                            <TableRow><TableCell className="pl-4 font-semibold text-muted-foreground">Current Liabilities</TableCell><TableCell></TableCell><TableCell></TableCell></TableRow>
                            <TableRow><TableCell className="pl-8">Accounts payable</TableCell><TableCell className="text-right">${formatCurrency(45000)}</TableCell><TableCell className="text-right">${formatCurrency(41000)}</TableCell></TableRow>
                            <TableRow><TableCell className="pl-8">Short-term debt</TableCell><TableCell className="text-right">${formatCurrency(30000)}</TableCell><TableCell className="text-right">${formatCurrency(25000)}</TableCell></TableRow>
                             <TableRow className="bg-muted/50"><TableCell className="pl-8 font-semibold">Total current liabilities</TableCell><TableCell className="text-right font-semibold">${formatCurrency(75000)}</TableCell><TableCell className="text-right font-semibold">${formatCurrency(66000)}</TableCell></TableRow>
                             <TableRow><TableCell className="pl-4 font-semibold text-muted-foreground">Non-Current Liabilities</TableCell><TableCell></TableCell><TableCell></TableCell></TableRow>
                             <TableRow><TableCell className="pl-8">Long-term debt</TableCell><TableCell className="text-right">${formatCurrency(125000)}</TableCell><TableCell className="text-right">${formatCurrency(118000)}</TableCell></TableRow>
                             <TableRow className="bg-destructive/10"><TableCell className="font-semibold">Total Liabilities</TableCell><TableCell className="text-right font-bold text-lg">${formatCurrency(200000)}</TableCell><TableCell className="text-right font-bold text-lg">${formatCurrency(184000)}</TableCell></TableRow>
                        </TableBody>
                    </Table>
                     <Alert className="mt-4 text-sm bg-blue-50 text-foreground dark:bg-blue-900/30 border-blue-200 dark:border-blue-800">
                        <Info className="h-4 w-4 text-blue-600"/>
                        <AlertTitle className="font-semibold">Investor's View: How much debt does the company have?</AlertTitle>
                        <AlertDescription>
                            <ul className="list-disc pl-5 space-y-1">
                                <li><strong>Current Liabilities:</strong> The increase in accounts payable and short-term debt is consistent with a growing company. A key check is liquidity: Total Current Assets ($185k) are much larger than Total Current Liabilities ($75k), indicating a strong ability to cover short-term bills (a Current Ratio of 2.47).</li>
                                <li><strong>Non-Current Liabilities:</strong> Long-term debt increased by $7k. This aligns with the Cash Flow Statement, which shows the company issued $15k in new debt and repaid $8k.</li>
                                <li>Overall, Total Liabilities grew by 8.7%. Since this is growing slower than Total Assets (13.6%), it means the company is funding its growth more through earnings than debt, which is a positive sign.</li>
                            </ul>
                        </AlertDescription>
                    </Alert>
                </div>
                
                <ArrowDown className="mx-auto h-6 w-6 text-muted-foreground" />

                {/* Block 3: Stockholders' Equity */}
                <div className="p-4 border rounded-lg">
                    <h3 className="text-lg font-semibold flex items-center mb-2"><Landmark className="mr-2 h-5 w-5 text-primary"/>3. Stockholders' Equity (The Owners' Stake)</h3>
                    <p className="text-sm text-muted-foreground mb-3">This represents the owners' residual claim on assets after deducting liabilities. It's the 'book value' of the company.</p>
                    <Table>
                        <TableHeader><TableRow><TableHead>Line Item</TableHead><TableHead className="text-right">2023</TableHead><TableHead className="text-right">2022</TableHead></TableRow></TableHeader>
                        <TableBody>
                            <TableRow><TableCell>Common stock</TableCell><TableCell className="text-right">${formatCurrency(50000)}</TableCell><TableCell className="text-right">${formatCurrency(60200)}</TableCell></TableRow>
                            <TableRow><TableCell>Retained earnings</TableCell><TableCell className="text-right">${formatCurrency(225000)}</TableCell><TableCell className="text-right">${formatCurrency(174000)}</TableCell></TableRow>
                            <TableRow className="bg-primary/10"><TableCell className="font-semibold">Total stockholders' equity</TableCell><TableCell className="text-right font-bold text-lg">${formatCurrency(275000)}</TableCell><TableCell className="text-right font-bold text-lg">${formatCurrency(234200)}</TableCell></TableRow>
                        </TableBody>
                    </Table>
                     <Alert className="mt-4 text-sm bg-blue-50 text-foreground dark:bg-blue-900/30 border-blue-200 dark:border-blue-800">
                        <Info className="h-4 w-4 text-blue-600"/>
                        <AlertTitle className="font-semibold">Investor's View: Is the owners' stake growing?</AlertTitle>
                        <AlertDescription>
                          <ul className="list-disc pl-5 space-y-2">
                              <li>
                                  <strong>Common Stock:</strong> This is an accounting entry representing the stated 'par value' of stock plus any 'additional paid-in capital'. It reflects the historical cash raised when the company issued shares. A <strong>decrease</strong> (as seen here) often means the company is buying back its shares, which is great for shareholders as it increases their ownership stake. An increase means the company is issuing new shares, which dilutes ownership. This is different from 'Shares Outstanding', which is the *number* of shares.
                              </li>
                              <li>
                                  <strong>Retained Earnings:</strong> This is the crucial link between the financial statements. It represents the cumulative net income the business has "retained" or reinvested over its lifetime. The growth here of $51k ($225k - $174k) is driven by 2023 Net Income ($57.6k from Income Statement) minus cash returned to shareholders via Dividends ($10.6k from Cash Flow Statement), which demonstrates how profits fuel equity growth.
                              </li>
                              <li>The owners' stake (Total Equity) grew by a strong 17.4%, faster than the growth in assets or liabilities. This is a very positive sign of a healthy, value-creating business.</li>
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
                  Example Corp. is a growing company, with Total Assets increasing by 13.6%. It has strong short-term liquidity, with current assets easily covering current liabilities. The balance sheet shows the company is becoming less leveraged, with equity growing faster than debt. The decrease in common stock and increase in retained earnings confirm the company is using its profits to reinvest in the business and reward shareholders through buybacks, as seen on the other financial statements.
                </blockquote>
            </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle className="font-headline text-xl">Interpreting the Balance Sheet Over Time</CardTitle></CardHeader>
          <CardContent className="space-y-4">
                <Alert variant="default">
                    <Clock className="h-4 w-4" />
                    <AlertTitle className="font-semibold">Snapshots vs. Trends</AlertTitle>
                    <AlertDescription>
                        While a single balance sheet provides a valuable snapshot, its true power is unlocked when you compare it over several years. Look for trends: Is debt consistently rising faster than assets? Is cash flow dwindling while inventory piles up? These trends reveal the direction the business is heading far better than a single point in time.
                    </AlertDescription>
                </Alert>
                <Alert variant="destructive" className="bg-amber-50 dark:bg-amber-900/20 border-amber-300 dark:border-amber-700">
                    <Info className="h-4 w-4 text-amber-500" />
                    <AlertTitle className="font-headline text-amber-900 dark:text-amber-200">Book Value vs. Market Value</AlertTitle>
                    <AlertDescription className="text-amber-800 dark:text-amber-300">
                        A critical distinction: the balance sheet primarily uses historical cost accounting. An office building bought 20 years ago for $5 million is likely still carried on the books near that value, even if its market value today is $50 million. Conversely, 'Goodwill' from an overpriced acquisition might be on the books for billions but be worth nothing. Always be skeptical of book value and consider the real-world market value of a company's assets.
                    </AlertDescription>
                </Alert>
            </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle className="font-headline text-xl">Key Ratios & Takeaways</CardTitle></CardHeader>
          <CardContent className="space-y-4">
              <div className="p-3 border rounded-lg">
                <h4 className="font-semibold">Current Ratio (Liquidity)</h4>
                <p className="text-xs text-muted-foreground mb-2">Measures ability to pay short-term obligations. Higher is better.</p>
                <code className="text-sm p-2 bg-muted rounded-md block">Total Current Assets / Total Current Liabilities = $185,000 / $75,000 = 2.47</code>
              </div>
              <div className="p-3 border rounded-lg">
                <h4 className="font-semibold">Debt-to-Equity Ratio (Leverage)</h4>
                <p className="text-xs text-muted-foreground mb-2">Shows how much debt the company uses to finance its assets relative to equity. A rising ratio indicates increasing leverage.</p>
                <code className="text-sm p-2 bg-muted rounded-md block">Total Liabilities / Total Stockholders' Equity = $200,000 / $275,000 = 0.73</code>
              </div>
              <div className="p-3 border rounded-lg">
                <h4 className="font-semibold">Return on Equity (ROE)</h4>
                <p className="text-xs text-muted-foreground mb-2">Measures how efficiently management is using the owners' capital to generate profit. It connects the Income Statement (Net Income) to the Balance Sheet (Equity).</p>
                <code className="text-sm p-2 bg-muted rounded-md block">Net Income / Average Stockholders' Equity = $57,600 / (($275,000 + $234,200)/2) = 22.6%</code>
              </div>
          </CardContent>
        </Card>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you have a firm grasp on the Balance Sheet, you are ready to learn about the Cash Flow Statement.
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
