'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Star, TrendingUp, ThumbsUp, DollarSign, Lock, HelpCircle, Lightbulb, Scale, ArrowRight, ShieldCheck, Brain, Info } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableCaption } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const formatCurrency = (value: number) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 });
};

const formatCurrencyWithCents = (value: number) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};

// Data for the 40-year comparison table
const longTermExample = Array.from({ length: 41 }, (_, i) => i).map(year => {
    const principal = 7500; 
    const rate = 0.10; // 10% average nominal annual return
    let rothBalance = 0;
    let taxableBalance = 0;
    let totalContributions = 0;
    let taxableCostBasis = 0;

    for (let y = 0; y < year; y++) {
        rothBalance = (rothBalance + principal) * (1 + rate);
        taxableBalance = (taxableBalance + principal) * (1 + rate);
        totalContributions += principal;
    }
     // Simplified cost basis for this example
    taxableCostBasis = totalContributions;

    const taxableGains = taxableBalance - taxableCostBasis;
    const taxRate = 0.15; // Assumed 15% long-term capital gains tax rate
    const taxOwed = taxableGains > 0 ? taxableGains * taxRate : 0;
    const taxableNetProceeds = taxableBalance - taxOwed;

    return {
        year: 25 + year, // Starting age 25
        totalContributions,
        rothBalance,
        taxableBalance,
        taxOwed,
        taxableNetProceeds,
    };
});


export default function RothIraGuidePage() {
  const searchParams = useSearchParams();
  const fromStep = searchParams.get('from');

  const taxableExample = {
    initialInvestment: 10000,
    years: 30,
    rate: 0.10, 
    get finalValue() { return this.initialInvestment * Math.pow(1 + this.rate, this.years); },
    capitalGain() { return this.finalValue - this.initialInvestment; },
    taxRate: 0.15, // Assumed long-term capital gains rate
    taxOwed() { return this.capitalGain() * this.taxRate },
    netProceeds() { return this.finalValue - this.taxOwed() },
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
        <h1 className="text-3xl font-bold font-headline">The Roth IRA: A Lesson on Tax-Free Growth</h1>
        <p className="text-muted-foreground mt-2">Discover why the Roth IRA is one of the most powerful retirement savings tools available.</p>
      </div>
      <div className="space-y-6">
        <Alert className="bg-primary/5 border-primary/20">
          <Star className="h-4 w-4 text-primary" />
          <AlertTitle className="font-headline">What is a Roth IRA?</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>A Roth IRA is an Individual Retirement Account that offers a powerful tax advantage: while your contributions are made with after-tax money, your investments grow completely tax-free, and all qualified withdrawals in retirement are also 100% tax-free.</p>
            <p className="font-semibold">Put simply: You pay taxes on the "seed" (your contribution) but not on the "harvest" (your decades of investment growth).</p>
          </AlertDescription>
        </Alert>
        
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
              <Scale className="mr-2 h-5 w-5 text-primary" />
              Roth IRA vs. Taxable Brokerage: A Comparison
            </CardTitle>
            <CardDescription>
              This example illustrates the power of tax-free growth. Let's assume you invest a single lump sum of {formatCurrency(taxableExample.initialInvestment)} and let it grow for {taxableExample.years} years, earning an average nominal return of 10% per year.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800">
              <h3 className="font-semibold flex items-center mb-2 text-green-800 dark:text-green-200">
                <Star className="mr-2 h-5 w-5" /> Scenario 1: In a Roth IRA
              </h3>
              <div className="text-sm space-y-1">
                <div className="flex justify-between"><span>Initial Investment:</span> <span>{formatCurrency(taxableExample.initialInvestment)}</span></div>
                <div className="flex justify-between"><span>Grows to:</span> <span>{formatCurrency(taxableExample.finalValue)}</span></div>
                <div className="flex justify-between"><span>Taxes Owed at Withdrawal:</span> <span className="font-bold text-green-600">{formatCurrency(0)}</span></div>
                <div className="flex justify-between font-bold text-base mt-2 pt-2 border-t"><span>Your Net Proceeds:</span> <span>{formatCurrency(taxableExample.finalValue)}</span></div>
              </div>
            </div>
            <div className="p-4 border rounded-lg bg-orange-50 dark:bg-orange-900/30 border-orange-200 dark:border-orange-800">
              <h3 className="font-semibold flex items-center mb-2 text-orange-800 dark:text-orange-200">
                <TrendingUp className="mr-2 h-5 w-5" /> Scenario 2: In a Taxable Account
              </h3>
              <div className="text-sm space-y-1">
                <div className="flex justify-between"><span>Initial Investment:</span> <span>{formatCurrency(taxableExample.initialInvestment)}</span></div>
                <div className="flex justify-between"><span>Grows to:</span> <span>{formatCurrency(taxableExample.finalValue)}</span></div>
                <div className="flex justify-between"><span>Taxes Owed at Withdrawal:</span> <span className="font-bold text-red-600">-{formatCurrency(taxableExample.taxOwed())}</span></div>
                <div className="flex justify-between font-bold text-base mt-2 pt-2 border-t"><span>Your Net Proceeds:</span> <span>{formatCurrency(taxableExample.netProceeds())}</span></div>
              </div>
            </div>
          </CardContent>
           <CardFooter>
            <p className="text-xs text-muted-foreground">This simplified example assumes a 10% nominal annual return and a 15% long-term capital gains tax rate. It does not account for taxes on dividends that would also be due annually in the taxable account, further enhancing the Roth IRA's advantage.</p>
          </CardFooter>
        </Card>


        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">Long-Term Comparison: Roth IRA vs. Taxable Account</CardTitle>
            <CardDescription>This example shows how consistent annual contributions can create dramatically different outcomes over a 40-year investing lifetime due to the power of tax-free growth.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
                <TableCaption>Assuming a hypothetical $7,500 annual contribution starting at age 25, a 10% average nominal annual return, and a 15% long-term capital gains tax rate.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Age</TableHead>
                        <TableHead className="text-right">Total Contributions</TableHead>
                        <TableHead className="text-right">Roth IRA Final Value</TableHead>
                        <TableHead className="text-right">Taxable Account Net Value</TableHead>
                        <TableHead className="text-right">Tax Savings</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {longTermExample.filter(d => d.year % 10 === 5 && d.year > 25).map(item => (
                        <TableRow key={item.year}>
                            <TableCell>{item.year}</TableCell>
                            <TableCell className="text-right">{formatCurrency(item.totalContributions)}</TableCell>
                            <TableCell className="text-right font-bold text-primary">{formatCurrency(item.rothBalance)}</TableCell>
                            <TableCell className="text-right">{formatCurrencyWithCents(item.taxableNetProceeds)}</TableCell>
                            <TableCell className="text-right font-bold text-green-600">{formatCurrencyWithCents(item.rothBalance - item.taxableNetProceeds)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <p className="text-sm text-muted-foreground mt-4 text-center">In this scenario, after 40 years, the Roth IRA provides over {formatCurrencyWithCents(longTermExample[40].rothBalance - longTermExample[40].taxableNetProceeds)} in additional wealth compared to the taxable account, purely due to tax savings.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
                <HelpCircle className="mr-2 h-5 w-5 text-primary"/>Who Can Contribute?
            </CardTitle>
            <CardDescription>Eligibility for direct contributions depends on your income.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
              <p>To contribute to a Roth IRA, you must have earned income. Additionally, there are income limitations set by the IRS that change annually. If your Modified Adjusted Gross Income (MAGI) is above a certain threshold, your ability to contribute directly may be reduced or eliminated.</p>
              <Alert variant="default" className="bg-blue-50 dark:bg-blue-900/30">
                  <Lightbulb className="h-4 w-4" />
                  <AlertTitle className="font-semibold">The "Backdoor" Roth IRA</AlertTitle>
                  <AlertDescription>
                    For high-income earners who cannot contribute directly, a "Backdoor Roth IRA" is a common strategy. It involves making a non-deductible contribution to a Traditional IRA and then immediately converting it to a Roth IRA. This is a complex strategy and it's best to consult a financial professional.
                  </AlertDescription>
              </Alert>
          </CardContent>
        </Card>
        
        <div className="grid md:grid-cols-2 gap-6">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-lg flex items-center">
                        <ThumbsUp className="mr-2 h-5 w-5 text-green-600"/> Key Benefits
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                        <DollarSign className="h-5 w-5 text-green-600 mt-1"/>
                        <div>
                            <h4 className="font-semibold">Tax-Free Withdrawals</h4>
                            <p className="text-sm text-muted-foreground">This is the main event. Your withdrawals in retirement are not taxed, giving you certainty about your income.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <Lock className="h-5 w-5 text-green-600 mt-1"/>
                        <div>
                            <h4 className="font-semibold">No RMDs</h4>
                            <p className="text-sm text-muted-foreground">Unlike Traditional IRAs or 401(k)s, you are not required to take Required Minimum Distributions (RMDs) during your lifetime, allowing your money to grow for longer.
                            </p>
                        </div>
                    </div>
                     <div className="flex items-start gap-3">
                        <ShieldCheck className="h-5 w-5 text-green-600 mt-1"/>
                        <div>
                            <h4 className="font-semibold">Flexibility (Use with Extreme Caution)</h4>
                            <p className="text-sm text-muted-foreground">Your contributions (not earnings) can be withdrawn at any time without tax or penalty. While this provides a safety net, it should only be used as a last resort. Removing money from a Roth IRA permanently reduces your tax-free compounding space and should be avoided at all costs.
                            </p>
                        </div>
                    </div>
                     <div className="flex items-start gap-3">
                        <Brain className="h-5 w-5 text-green-600 mt-1"/>
                        <div>
                            <h4 className="font-semibold">Tax Certainty & Peace of Mind</h4>
                            <p className="text-sm text-muted-foreground">With a Roth, your tax bill in retirement is already known: it's zero. This provides immense peace of mind and acts as "tax insurance" against the possibility of higher tax rates in the future.
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-lg">Contribution Limits</CardTitle>
                    <CardDescription>The IRS sets annual limits on how much you can contribute to an IRA.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">The total amount you can contribute to all of your IRAs (both Traditional and Roth) cannot exceed a specific annual limit. As of 2025, the limit is $7,500 for individuals under 50. These limits are subject to change with legislation, so it's always wise to check the current year's rules.</p>
                     <Alert variant="default" className="mt-4 bg-primary/5 border-primary/20">
                        <Lightbulb className="h-4 w-4" />
                        <AlertTitle className="font-semibold text-primary">Advanced Strategy: Roth Conversion Ladder</AlertTitle>
                        <AlertDescription>
                            For those pursuing early retirement, a Roth Conversion Ladder is a strategy to access retirement funds before age 59½. It involves converting pre-tax money from a Traditional IRA/401(k) to a Roth IRA annually. After a 5-year waiting period for each conversion, that converted principal can be withdrawn tax and penalty-free.
                        </AlertDescription>
                    </Alert>
                </CardContent>
            </Card>
        </div>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you have a firm grasp on this powerful account, return to the main roadmap to continue building your financial knowledge.
                </CardDescription>
            </CardHeader>
            <CardContent>
                 <Button asChild>
                    <Link href={`/roadmaps/master-personal-finance${fromStep ? `#${fromStep}` : ''}`}>
                        Return to The Master Personal Finance Roadmap
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </CardContent>
        </Card>
      </div>
    </>
  );
}
