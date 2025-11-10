'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Flame, AlertTriangle, TrendingUp, TrendingDown, Scale, Info, ArrowRight, Brain, Lightbulb } from 'lucide-react';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useSearchParams } from 'next/navigation';


const formatCurrency = (value: number) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 });
};

const scenario = {
    balance: 5000,
    apr: 0.21,
    minPaymentPercent: 0.03,
    get minPayment() {
        return Math.max(this.balance * this.minPaymentPercent, 25);
    },
    get totalInterestMinPayment() {
        return 7300; // Pre-calculated approximation for a typical scenario
    },
    get fixedPayment() {
        return 250;
    },
    get payoffTimeFixedPayment() {
       const monthlyRate = this.apr / 12;
       const n = -Math.log(1 - (this.balance * monthlyRate) / this.fixedPayment) / Math.log(1 + monthlyRate);
       return Math.ceil(n); // in months
    },
    get totalInterestFixedPayment() {
        return (this.fixedPayment * this.payoffTimeFixedPayment) - this.balance;
    }
};

const chartData = [
  {
    name: 'Minimum Payments',
    "Principal Paid": scenario.balance,
    "Interest Paid": scenario.totalInterestMinPayment,
  },
  {
    name: 'Fixed Plan',
    "Principal Paid": scenario.balance,
    "Interest Paid": scenario.totalInterestFixedPayment,
  },
];

const BAR_CHART_COLORS = {
  principal: "hsl(var(--chart-1))",
  interest: "hsl(var(--destructive))",
};


export default function CreditCardDebtDangersPage() {
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
        <h1 className="text-3xl font-bold font-headline">The Dangers of Credit Card Debt</h1>
        <p className="text-muted-foreground mt-2">Understanding why high-interest debt is a financial emergency and how to avoid common traps.</p>
      </div>
      <div className="space-y-6">
        <Alert variant="destructive">
          <Flame className="h-4 w-4" />
          <AlertTitle className="font-headline">A Financial Emergency</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>Credit card debt is one of the most destructive forces in personal finance. The high, compounding interest works aggressively against you, making it incredibly difficult to get ahead. Paying off this debt should be treated as a top priority, second only to securing an employer match and having a starter emergency fund.</p>
            <p className="font-semibold">Every dollar you pay towards a 21% APR credit card is equivalent to getting a guaranteed, tax-free, 21% return on your money. No other investment can safely offer that kind of return.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">The Math: A Tale of Two Payoffs</CardTitle>
            <CardDescription>This example shows the staggering difference between just paying the minimum and having a dedicated payoff plan for a {formatCurrency(scenario.balance)} balance at {scenario.apr * 100}% APR.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="p-4 border rounded-lg bg-orange-50 dark:bg-orange-900/30 border-orange-200 dark:border-orange-800">
                <h3 className="font-semibold flex items-center mb-2 text-orange-800 dark:text-orange-200">
                    <TrendingDown className="mr-2 h-5 w-5" /> Scenario 1: Minimum Payments Only
                </h3>
                <p className="text-sm text-muted-foreground mb-3">Samantha has a {formatCurrency(scenario.balance)} balance and only pays the minimum required each month, starting at ~{formatCurrency(scenario.minPayment)}.</p>
                <ul className="list-disc pl-5 text-sm space-y-2">
                    <li className="font-bold">Time to Pay Off: Over 15 years</li>
                    <li className="font-bold text-destructive">Total Interest Paid: ~{formatCurrency(scenario.totalInterestMinPayment)}</li>
                </ul>
                <p className="text-xs text-muted-foreground mt-3">She pays almost 1.5x the original balance in interest and remains in debt for over a decade.</p>
                </div>
                <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800">
                <h3 className="font-semibold flex items-center mb-2 text-green-800 dark:text-green-200">
                    <TrendingUp className="mr-2 h-5 w-5" /> Scenario 2: With a Fixed Plan
                </h3>
                <p className="text-sm text-muted-foreground mb-3">Her friend Alex has the same balance but commits to a fixed {formatCurrency(scenario.fixedPayment)} monthly payment.</p>
                <ul className="list-disc pl-5 text-sm space-y-2">
                    <li className="font-bold">Time to Pay Off: ~{(scenario.payoffTimeFixedPayment/12).toFixed(1)} years</li>
                    <li className="font-bold text-green-700">Total Interest Paid: ~{formatCurrency(scenario.totalInterestFixedPayment)}</li>
                </ul>
                <p className="text-xs text-muted-foreground mt-3">By committing to a plan, Alex saves over {formatCurrency(scenario.totalInterestMinPayment - scenario.totalInterestFixedPayment)} and is free from the debt years sooner.</p>
                </div>
            </div>
             <div className="h-[300px] w-full bg-muted/30 p-4 rounded-md">
                <h4 className="text-sm font-semibold text-center mb-2">Visual Comparison: Total Cost of Debt</h4>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData} layout="vertical" margin={{ top: 5, right: 20, bottom: 5, left: 10 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" tickFormatter={(value) => formatCurrency(value, false)} />
                        <YAxis dataKey="name" type="category" width={80} interval={0} />
                        <Tooltip formatter={(value: number) => formatCurrency(value)} />
                        <Legend />
                        <Bar dataKey="Principal Paid" stackId="a" fill={BAR_CHART_COLORS.principal} />
                        <Bar dataKey="Interest Paid" stackId="a" fill={BAR_CHART_COLORS.interest} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-xl flex items-center">
                    <Brain className="mr-2 h-5 w-5 text-primary" /> Common Psychological Traps
                </CardTitle>
                <CardDescription>Credit card companies are experts at using psychology to encourage spending.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                 <div className="p-4 border rounded-lg bg-muted/40">
                    <h4 className="font-semibold mb-1">The Minimum Payment Illusion</h4>
                    <p className="text-sm text-muted-foreground">The minimum payment is intentionally designed to be very low. This makes a large purchase seem affordable, but it's a trap designed to maximize the amount of interest you pay over the longest possible time. As the example above shows, it's a recipe for staying in debt for decades.</p>
                </div>
                 <div className="p-4 border rounded-lg bg-muted/40">
                    <h4 className="font-semibold mb-1">The Rewards Points Treadmill</h4>
                    <p className="text-sm text-muted-foreground">Earning 1-2% cash back or travel points can feel like you're winning. However, if you carry a balance, the interest you pay (at 20%+) will always wipe out any rewards you earn, many times over. Rewards are only a benefit if you pay your balance in full, every single month, without exception.</p>
                </div>
            </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
              <AlertTriangle className="mr-2 h-5 w-5 text-amber-500"/> The Balance Transfer Trap
            </CardTitle>
            <CardDescription>Using a 0% APR balance transfer offer can be a useful tool, but it's filled with pitfalls if you're not careful.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-1">The High Transfer Fee</h4>
                <p className="text-sm text-muted-foreground">Most offers come with an immediate "balance transfer fee," typically 3-5% of the amount transferred. If you transfer $5,000, you could instantly owe an extra $150-$250 before you've even started.</p>
              </div>
              <Separator/>
              <div>
                <h4 className="font-semibold mb-1">The Teaser Rate Cliff</h4>
                <p className="text-sm text-muted-foreground">The 0% rate is only for a promotional period (e.g., 12-18 months). If you haven't paid off the entire balance by the time the period ends, the remaining balance is often hit with a very high standard interest rate, sometimes even retroactively.</p>
              </div>
              <Separator/>
              <div>
                <h4 className="font-semibold mb-1">The False Sense of Security</h4>
                <p className="text-sm text-muted-foreground">The biggest danger is that a balance transfer can feel like you've solved the problem. If you don't address the spending habits that created the debt in the first place, you may just run up the old card again, leaving you with two high-balance credit cards instead of one.</p>
              </div>
          </CardContent>
           <CardFooter>
            <Alert variant="default" className="bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800">
                <Lightbulb className="h-4 w-4" />
                <AlertTitle className="font-headline text-green-800 dark:text-green-200">How to Use Balance Transfers Wisely</AlertTitle>
                <AlertDescription className="text-green-700 dark:text-green-300">
                   A balance transfer is only a good idea if you have a concrete, aggressive plan to pay off the entire balance before the promotional period ends, and you commit to not adding new debt. You must treat it as a temporary relief tool, not a solution.
                </AlertDescription>
            </Alert>
           </CardFooter>
        </Card>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you understand the dangers, learn about the best strategies to eliminate this debt for good.
                </CardDescription>
            </CardHeader>
            <CardContent>
                 <Button asChild>
                    <Link href={`/roadmaps/master-personal-finance${fromStep ? `#${fromStep}` : ''}`}>
                        Return to The Master personal Finance Roadmap
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </CardContent>
        </Card>

      </div>
    </>
  );
}
