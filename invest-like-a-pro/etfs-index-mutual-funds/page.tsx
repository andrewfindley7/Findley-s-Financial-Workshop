'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Layers, Percent, AlertTriangle, ArrowRight, Info, CalculatorIcon } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const comparisonData = [
  {
    fundType: 'Mutual Fund',
    whatItIs: 'A professionally managed fund that pools investor money. Usually actively managed.',
    bestFor: 'Hands off investors who prefer a professional to make decisions.',
  },
  {
    fundType: 'Index Fund',
    whatItIs: 'A passive fund that tracks a market index (e.g., S&P 500). Low cost and long term focused.',
    bestFor: 'Investors seeking simplicity and the lowest possible fees.',
  },
  {
    fundType: 'ETF',
    whatItIs: 'A flexible version of a mutual fund that trades like a stock during market hours.',
    bestFor: 'Cost conscious investors who want intraday liquidity and tax efficiency.',
  }
];

const etfTypes: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Layers,
    title: "Market Cap Weighted Index ETFs",
    description: "Tracks well known indexes like the S&P 500. This is the most common, low cost option for broad market exposure and is ideal for long term investors.",
  },
  {
    icon: Layers, 
    title: "Smart Beta (Factor) ETFs",
    description: "A hybrid of active and passive. These track custom indexes based on factors like 'value' or 'momentum' and often have slightly higher fees.",
  },
  {
    icon: Layers, 
    title: "Leveraged ETFs",
    description: "Use derivatives to amplify daily returns (e.g., 2x or 3x). These are high risk, short term trading tools.",
  },
  {
    icon: Layers, 
    title: "Inverse ETFs",
    description: "Use derivatives to deliver the opposite of daily returns, allowing traders to bet against an index.",
  },
];

const generateFeeChartData = () => {
    const data = [];
    let highFeeValue = 10000;
    let lowFeeValue = 10000;
    const annualReturn = 0.10;
    const highFeeRate = 0.0075;
    const lowFeeRate = 0.0003;

    for (let year = 0; year <= 40; year++) {
        data.push({
            year,
            highFeeValue: parseFloat(highFeeValue.toFixed(0)),
            lowFeeValue: parseFloat(lowFeeValue.toFixed(0)),
        });
        highFeeValue = highFeeValue * (1 + annualReturn - highFeeRate);
        lowFeeValue = lowFeeValue * (1 + annualReturn - lowFeeRate);
    }
    return data;
};
const feeImpactData = generateFeeChartData();

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};


export default function EtfIndexMutualFundsPage() {
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
        <h1 className="text-3xl font-bold font-headline">ETFs, Index Funds, &amp; Mutual Funds</h1>
        <p className="text-muted-foreground mt-2">Understanding the building blocks of a modern, diversified portfolio.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Layers className="h-4 w-4" />
          <AlertTitle className="font-headline">The Path to Easy Diversification</AlertTitle>
          <AlertDescription>
            <p className="prose prose-sm max-w-none dark:prose-invert">
                For investors who do not have the time or inclination to do deep research on individual businesses, pooled funds are the most logical and effective building blocks for long term wealth creation. They allow you to buy entire markets or strategies in one click.
            </p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">The Core Concepts</CardTitle>
            <CardDescription>There are three main ways to access pooled investments: mutual funds, index funds, and ETFs. They often overlap, but each has unique strengths and tradeoffs. Here is how they compare at a glance.</CardDescription>
          </CardHeader>
          <CardContent>
             <div className="overflow-x-auto rounded-lg border">
                <Table>
                    <TableHeader>
                        <TableRow>
                        <TableHead>Fund Type</TableHead>
                        <TableHead>What It Is</TableHead>
                        <TableHead>Best For</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {comparisonData.map(row => (
                        <TableRow key={row.fundType}>
                            <TableCell className="font-semibold">{row.fundType}</TableCell>
                            <TableCell>{row.whatItIs}</TableCell>
                            <TableCell>{row.bestFor}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
             </div>
             <p className="text-sm text-muted-foreground mt-3">Most index funds today exist as ETFs, but the underlying concept, which is broad, low cost diversification, is the same.</p>
          </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-xl">How They Trade and Why It Matters</CardTitle>
                <CardDescription>The way a fund is structured determines how it is priced, traded, and taxed, and what surprises you might face in a crisis.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold">Open End Funds (Most Mutual Funds)</h4>
                    <p className="text-sm text-muted-foreground mt-1">With open end funds, you always trade at the Net Asset Value (NAV) calculated at the end of each trading day. This means the price you pay is always the exact underlying value of the assets. However, in a crisis, if too many investors try to sell at once, the fund may be forced to 'gate' or suspend redemptions to avoid a fire sale of its assets.</p>
                </div>
                 <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold">Closed End Funds (CEFs)</h4>
                    <p className="text-sm text-muted-foreground mt-1">A closed end fund is a type of mutual fund that issues a fixed number of shares in a one time initial public offering (IPO). These shares then trade on a stock exchange like a stock. Because the number of shares is fixed, the fund's market price is determined by supply and demand from investors, which means it can trade at a price that is different from its Net Asset Value (NAV). A price higher than NAV is a 'premium,' and a price lower than NAV is a 'discount.' This creates both opportunities (buying at a discount) and risks (buying at a premium that later vanishes).</p>
                </div>
                 <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold">Exchange Traded Funds (ETFs)</h4>
                    <p className="text-sm text-muted-foreground mt-1">ETFs combine the best of both worlds, trading like a stock but staying very close to their NAV thanks to an institutional arbitrage mechanism. This structure provides high liquidity and pricing integrity.</p>
                </div>
            </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">A Quick Lesson on ETF Types</CardTitle>
            <CardDescription>The ETF universe has expanded far beyond simple index funds.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
            {etfTypes.map(item => (
              <div key={item.title} className="p-4 border rounded-lg bg-card shadow-sm">
                <div className="flex items-center mb-2">
                  <item.icon className="mr-2 h-5 w-5 text-primary/80" />
                  <h3 className="font-semibold">{item.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
              </div>
            ))}
          </CardContent>
          <CardFooter>
            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle className="font-headline">Why Holding Leveraged & Inverse ETFs Long Term Backfires</AlertTitle>
              <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
                 <p>These products are designed to deliver a multiple of the daily return, not the long term return. Due to a mathematical effect called 'volatility decay,' their performance can, and will, diverge dramatically from the underlying index over time. They are high risk trading tools, not long term investments.</p>
              </AlertDescription>
            </Alert>
          </CardFooter>
        </Card>
        
        <Card>
           <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
              <Percent className="mr-2 h-5 w-5 text-amber-500"/>
              The Most Important Factor: Costs
            </CardTitle>
            <CardDescription>The single most critical factor for long-term success is keeping costs low.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">The chart below visualizes the impact of fees on a $10,000 investment over 40 years, assuming a 10% average annual return.</p>
              <div className="h-[300px] bg-muted/30 p-4 rounded-md">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={feeImpactData} margin={{ top: 5, right: 20, bottom: 5, left: 10 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" unit="yr" fontSize={12} />
                        <YAxis tickFormatter={(value) => formatCurrency(value)} fontSize={12} />
                        <Tooltip formatter={(value: number) => formatCurrency(value)} />
                        <Legend wrapperStyle={{fontSize: '0.8rem'}}/>
                        <Line type="monotone" dataKey="lowFeeValue" name="Low-Fee Fund (0.03%)" stroke="hsl(var(--chart-1))" strokeWidth={2} dot={false} />
                        <Line type="monotone" dataKey="highFeeValue" name="High-Fee Fund (0.75%)" stroke="hsl(var(--destructive))" strokeDasharray="5 5" strokeWidth={2} dot={false} />
                    </LineChart>
                </ResponsiveContainer>
              </div>
              <Alert variant="default" className="bg-amber-50 dark:bg-amber-900/20 border-amber-300 dark:border-amber-700">
                <AlertTitle className="font-headline text-amber-900 dark:text-amber-200">The Takeaway</AlertTitle>
                <AlertDescription className="prose prose-sm max-w-none text-amber-800 dark:text-amber-300 dark:prose-invert">
                  <p>With a 0.75% expense ratio, the investment grows to about {formatCurrency(feeImpactData[40].highFeeValue)}. With a 0.03% expense ratio, it grows to over {formatCurrency(feeImpactData[40].lowFeeValue)}.</p>
                  <p className="font-semibold">That's a difference of over {formatCurrency(feeImpactData[40].lowFeeValue - feeImpactData[40].highFeeValue)} just from choosing a low-cost fund. Costs compound just like returns, only in reverse.</p>
                </AlertDescription>
              </Alert>
          </CardContent>
           <CardFooter>
            <Button asChild>
                <Link href="/calculators/fee-analyzer">
                    <CalculatorIcon className="mr-2 h-4 w-4" />
                    Use the Fee Analyzer Calculator
                </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you understand these foundational investment vehicles, return to the main roadmap to continue building your portfolio knowledge.
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
