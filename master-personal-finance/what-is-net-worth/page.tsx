'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Scale, TrendingUp, TrendingDown, Home, Wallet, ShieldCheck, ArrowRight, Lightbulb, PiggyBank, Briefcase, HelpCircle, User, Users, UserCheck as UserCheckIcon, Clock, Activity, BarChart3, CheckCircle, Info } from 'lucide-react';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const formatCurrency = (value: number | null | undefined) => {
    if (value === null || value === undefined) {
        return '$0';
    }
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 });
};

const sampleNetWorth = {
    assets: [
        { name: '401(k) / Retirement', value: 75000 },
        { name: 'Savings & Checking', value: 10000 },
        { name: 'Car Value', value: 8000 },
    ],
    liabilities: [
        { name: 'Student Loan', value: 25000 },
        { name: 'Credit Card Debt', value: 2000 },
    ],
    get totalAssets() { return this.assets.reduce((sum, a) => sum + a.value, 0) },
    get totalLiabilities() { return this.liabilities.reduce((sum, l) => sum + l.value, 0) },
    get netWorth() { return this.totalAssets - this.totalLiabilities },
};

const ageBenchmarks = [
  { icon: User, title: "In Your 20s", description: "The goal is to reduce high-interest rate debt and achieve a positive savings rate. A negative or low net worth is common and okay. The focus is on setting a positive trajectory, as the dollars invested in your 20s are the most valuable over the long run." },
  { icon: Users, title: "In Your 30s & 40s", description: "This is often the core wealth-building phase. Your net worth should be growing steadily as your retirement accounts compound and you pay down your mortgage, building home equity." },
  { icon: UserCheckIcon, title: "In Your 50s & 60s", description: "Your net worth should be at its highest point as you approach retirement. The focus may shift from pure growth to preserving capital and ensuring your assets can generate sustainable income." }
];

export default function WhatIsNetWorthPage() {
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
        <h1 className="text-3xl font-bold font-headline">What is Net Worth? Your Financial Report Card</h1>
        <p className="text-muted-foreground mt-2">Learn how to calculate and understand the single most important measure of your financial health.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Scale className="h-4 w-4" />
          <AlertTitle className="font-headline">The Ultimate Scoreboard</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>Your Net Worth is a snapshot of your financial position at a single point in time. It's the most honest and important number in your financial life because it represents your progress towards financial independence. A consistently growing net worth means you are building wealth.</p>
            <p className="font-semibold">The formula is simple, but powerful:</p>
            <div className="my-2 p-3 bg-muted rounded-md text-center">
              <code className="text-xl font-bold font-mono tracking-tight">
                <span className="text-green-600">Assets</span> - <span className="text-red-600">Liabilities</span> = <span className="text-primary">Net Worth</span>
              </code>
            </div>
          </AlertDescription>
        </Alert>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-green-500/50 bg-green-50/50 dark:bg-green-900/20">
            <CardHeader>
              <CardTitle className="font-headline text-xl flex items-center text-green-700 dark:text-green-300">
                <TrendingUp className="mr-2 h-5 w-5" />
                Assets: What You Own
              </CardTitle>
              <CardDescription>An asset is anything you own that has monetary value.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
                <p><strong>Cash & Equivalents:</strong> Checking, savings, money market accounts.</p>
                <p><strong>Investments:</strong> Value of stocks, bonds, mutual funds, 401(k)s, IRAs.</p>
                <p><strong>Real Estate:</strong> The current market value of your home or any rental properties.</p>
                <p><strong>Other Valuables:</strong> The resale value of a car, valuable collectibles.</p>
            </CardContent>
          </Card>

          <Card className="border-red-500/50 bg-red-50/50 dark:bg-red-900/20">
            <CardHeader>
              <CardTitle className="font-headline text-xl flex items-center text-red-700 dark:text-red-300">
                <TrendingDown className="mr-2 h-5 w-5" />
                Liabilities: What You Owe
              </CardTitle>
              <CardDescription>A liability is any debt you owe to someone else.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
                <p><strong>Mortgages:</strong> The remaining balance on your home loan.</p>
                <p><strong>Other Loans:</strong> Student loans, car loans, personal loans.</p>
                <p><strong>Credit Card Debt:</strong> The total outstanding balance on all your cards.</p>
                <p><strong>Other Debts:</strong> Medical bills, taxes owed, etc.</p>
            </CardContent>
          </Card>
        </div>
        
        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-xl flex items-center">
                    <BarChart3 className="mr-2 h-5 w-5 text-primary"/>
                    Visual Example: A Sample Net Worth Statement
                </CardTitle>
                <CardDescription>This simple example makes the abstract concept concrete.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                    <div>
                        <h3 className="font-semibold mb-2 text-green-600">Assets</h3>
                        <Table>
                            <TableHeader><TableRow><TableHead>Item</TableHead><TableHead className="text-right">Value</TableHead></TableRow></TableHeader>
                            <TableBody>
                                {sampleNetWorth.assets.map(a => <TableRow key={a.name}><TableCell>{a.name}</TableCell><TableCell className="text-right">{formatCurrency(a.value)}</TableCell></TableRow>)}
                                <TableRow className="bg-green-100/50 dark:bg-green-900/20"><TableCell className="font-bold">Total Assets</TableCell><TableCell className="text-right font-bold">{formatCurrency(sampleNetWorth.totalAssets)}</TableCell></TableRow>
                            </TableBody>
                        </Table>
                    </div>
                     <div>
                        <h3 className="font-semibold mb-2 text-red-600">Liabilities</h3>
                        <Table>
                            <TableHeader><TableRow><TableHead>Item</TableHead><TableHead className="text-right">Balance</TableHead></TableRow></TableHeader>
                            <TableBody>
                                {sampleNetWorth.liabilities.map(l => <TableRow key={l.name}><TableCell>{l.name}</TableCell><TableCell className="text-right">{formatCurrency(l.value)}</TableCell></TableRow>)}
                                 <TableRow className="bg-red-100/50 dark:bg-red-900/20"><TableCell className="font-bold">Total Liabilities</TableCell><TableCell className="text-right font-bold">{formatCurrency(sampleNetWorth.totalLiabilities)}</TableCell></TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </div>
                 <Separator className="my-6"/>
                 <div className="text-center">
                    <p className="text-muted-foreground">Total Assets - Total Liabilities = Net Worth</p>
                    <p className="text-xl font-bold">{formatCurrency(sampleNetWorth.totalAssets)} - {formatCurrency(sampleNetWorth.totalLiabilities)} = <span className="text-2xl text-primary">{formatCurrency(sampleNetWorth.netWorth)}</span></p>
                 </div>
            </CardContent>
        </Card>

        <Alert variant="destructive" className="bg-amber-50 dark:bg-amber-900/20 border-amber-300 dark:border-amber-700">
          <Lightbulb className="h-4 w-4 text-amber-500" />
          <AlertTitle className="font-headline text-amber-900 dark:text-amber-200">The Emotional Side of Net Worth</AlertTitle>
          <AlertDescription className="text-amber-800 dark:text-amber-300">
            <p>Don’t get discouraged if your net worth is low or even negative. Many people start there because of student loans or early debts. What matters is the direction of change, not the starting line.</p>
          </AlertDescription>
        </Alert>

        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-xl flex items-center">
                    <Clock className="mr-2 h-5 w-5 text-primary"/>
                    How to Track Net Worth Over Time
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">Your net worth's true power comes from tracking its trend. Update your net worth statement every 3-6 months. The goal isn’t to obsess over small, daily market fluctuations, but to see the long-term trend. If your net worth is consistently rising over time, you’re moving in the right direction. This transforms it from a one-time calculation into your personal financial progress scoreboard.</p>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-xl flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary"/>
                    General Benchmarks by Age (A Loose Guide)
                </CardTitle>
                <CardDescription>Every journey is unique, but these general benchmarks can provide some context. Use them as a tool, not a competition.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {ageBenchmarks.map(item => (
                    <div key={item.title} className="flex items-start gap-4 p-4 border rounded-lg bg-muted/40">
                        <item.icon className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                        <div>
                            <h4 className="font-semibold">{item.title}</h4>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
        
        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Return to the roadmap to continue building your financial knowledge.
                </CardDescription>
            </CardHeader>
            <CardContent>
                 <Button asChild>
                    <Link href={`/roadmaps/master-personal-finance${fromStep ? `#${fromStep}`: ''}`}>
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
