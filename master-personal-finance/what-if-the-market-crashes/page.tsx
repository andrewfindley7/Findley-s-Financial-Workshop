
'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Brain, TrendingDown, ArrowRight, Lightbulb, CheckCircle, PieChart, ShoppingCart, DollarSign, Repeat, Info, User, Users, Users2, Shield, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Separator } from '@/components/ui/separator';

const formatCurrency = (value: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);

const dcaScenario = [
  { month: 'Jan', price: 100, sharesBought: 10, cost: 1000 },
  { month: 'Feb', price: 110, sharesBought: 9.09, cost: 1000 },
  { month: 'Mar', price: 120, sharesBought: 8.33, cost: 1000 },
  { month: 'Apr', price: 80, sharesBought: 12.5, cost: 1000 }, 
  { month: 'May', price: 70, sharesBought: 14.29, cost: 1000 },
  { month: 'Jun', price: 90, sharesBought: 11.11, cost: 1000 },
];

const totalShares = dcaScenario.reduce((sum, item) => sum + item.sharesBought, 0);
const totalCost = dcaScenario.reduce((sum, item) => sum + item.cost, 0);
const averageCostPerShare = totalCost / totalShares;


export default function MarketCrashPage() {
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
        <h1 className="text-3xl font-bold font-headline">What If the Market Crashes?</h1>
        <p className="text-muted-foreground mt-2">Learn why market downturns are an opportunity, not a catastrophe, for long-term investors.</p>
      </div>
      <div className="space-y-6">
        <Alert variant="destructive">
          <Brain className="h-4 w-4" />
          <AlertTitle className="font-headline">Fear vs. Math: An Investor's Mindset</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>Market crashes are scary. Seeing the value of your portfolio drop is an emotional experience that triggers a 'fight or flight' response. Your brain tells you to sell everything to stop the pain. This is the #1 mistake investors make.</p>
            <p className="font-semibold">For a long-term investor who is still contributing money, a market crash is a gift. It's a sale on the world's greatest assets. When stocks fall, they become cheaper. Every dollar you invest buys you more shares of high-quality businesses than it did the month before. This is the mathematical reality that should override your emotional fear.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">The Power of Buying During a Dip</CardTitle>
            <CardDescription>This example shows how continuing to invest during a downturn can dramatically lower your average cost.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">Imagine you invest $1,000 every month into an S&P 500 index fund. Here's what happens to your investment during a volatile 6-month period:</p>
             <div className="overflow-x-auto rounded-lg border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Month</TableHead>
                            <TableHead>Share Price</TableHead>
                            <TableHead>Investment</TableHead>
                            <TableHead>Shares Purchased</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {dcaScenario.map(item => (
                            <TableRow key={item.month} className={item.price < 100 ? 'bg-green-50/50 dark:bg-green-900/20' : ''}>
                                <TableCell>{item.month}</TableCell>
                                <TableCell>{formatCurrency(item.price)} {item.price < 100 && <span className="text-green-600">(On Sale!)</span>}</TableCell>
                                <TableCell>{formatCurrency(item.cost)}</TableCell>
                                <TableCell>{item.sharesBought.toFixed(2)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
             </div>
             <div className="mt-4 grid md:grid-cols-3 gap-4 text-center">
                <div className="p-3 bg-muted rounded-md">
                    <p className="text-sm font-semibold">Total Invested</p>
                    <p className="text-lg font-bold">{formatCurrency(totalCost)}</p>
                </div>
                <div className="p-3 bg-muted rounded-md">
                    <p className="text-sm font-semibold">Total Shares Acquired</p>
                    <p className="text-lg font-bold">{totalShares.toFixed(2)}</p>
                </div>
                <div className="p-3 bg-primary/10 rounded-md">
                    <p className="text-sm font-semibold text-primary">Your Average Cost Per Share</p>
                    <p className="text-lg font-bold text-primary">{formatCurrency(averageCostPerShare)}</p>
                </div>
             </div>
             
             <Separator className="my-6" />

             <div>
                <h4 className="font-semibold text-md mb-2">Returns for Each Monthly Purchase</h4>
                <p className="text-sm text-muted-foreground mb-4">This table shows the performance of each individual monthly investment by the end of June, when the market price has recovered to $90. It highlights where the real returns came from.</p>
                <div className="overflow-x-auto rounded-lg border">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Purchase Month</TableHead>
                                <TableHead>Purchase Price</TableHead>
                                <TableHead>Final Price (June)</TableHead>
                                <TableHead className="text-right">Return on Investment (ROI)</TableHead>
                            </TableRow>
                        </TableHeader>
                         <TableBody>
                            {dcaScenario.map(item => {
                                const finalPrice = 90;
                                const roi = ((finalPrice - item.price) / item.price) * 100;
                                return (
                                    <TableRow key={`${item.month}-roi`}>
                                        <TableCell>{item.month}</TableCell>
                                        <TableCell>{formatCurrency(item.price)}</TableCell>
                                        <TableCell>{formatCurrency(finalPrice)}</TableCell>
                                        <TableCell className={`text-right font-semibold ${roi >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                            {roi.toFixed(1)}%
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </div>
                <p className="text-xs text-muted-foreground mt-2">Notice how the shares bought in April and May, when prices were lowest, delivered the highest returns. These gains help offset the temporary losses from the shares bought at higher prices.</p>
             </div>
          </CardContent>
          <CardFooter className="flex-col items-start gap-4">
            <Alert>
                <Lightbulb className="h-4 w-4"/>
                <AlertTitle className="font-semibold">The Key Takeaway</AlertTitle>
                <AlertDescription>
                    Even though the market price ended at {formatCurrency(dcaScenario[dcaScenario.length - 1].price)}, your average purchase price is only {formatCurrency(averageCostPerShare)}. By continuing to buy during the downturn, you acquired more shares when they were cheap, significantly lowering your overall cost basis. This is how long-term wealth is built.
                </AlertDescription>
            </Alert>
             <Alert variant="default" className="w-full border-primary/30 bg-primary/5">
                <Lightbulb className="h-4 w-4 text-primary" />
                <AlertTitle className="font-semibold text-primary">DCA vs. Buy-and-Hold in a Crash</AlertTitle>
                <AlertDescription>
                  An investor who bought all their shares in January at $100 would be looking at a 10% loss by June. However, by dollar-cost averaging, your average cost is only {formatCurrency(averageCostPerShare)}. At the final price of {formatCurrency(90)}, your position is only down about 2.0%. This is the mathematical advantage of buying during a sale.
                </AlertDescription>
            </Alert>
          </CardFooter>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-xl">The 2008 Crash: A Tale of Two Investors</CardTitle>
                <CardDescription>Let's look at the real-world impact of different strategies during the Global Financial Crisis.</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-6">
                 <div className="p-4 border rounded-lg bg-orange-50 dark:bg-orange-900/30 border-orange-200">
                  <h3 className="font-semibold flex items-center mb-2 text-orange-700 dark:text-orange-300">
                    <User className="mr-2 h-5 w-5"/> Scenario A: The Buy-and-Hold Investor
                  </h3>
                  <p className="text-sm text-muted-foreground">Imagine you invested $10,000 in an S&P 500 index fund in October 2007, right before the crisis. By March 2009, your investment would have been worth less than $5,000. It would have been terrifying.</p>
                  <p className="text-sm text-muted-foreground mt-2">However, if you had simply held on and done nothing, by 2020 your initial $10,000 would have grown to over $30,000. Those who panicked and sold at the bottom locked in their losses and never recovered.</p>
                </div>
                 <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/30 border-green-200">
                  <h3 className="font-semibold flex items-center mb-2 text-green-700 dark:text-green-300">
                    <Users2 className="mr-2 h-5 w-5"/> Scenario B: The Consistent Investor (DCA)
                  </h3>
                  <p className="text-sm text-muted-foreground">Now imagine you invested the same $10,000 in October 2007, but you also continued to invest just $200 every month through the crisis. Your total investment over the next two years would be about $14,800.</p>
                  <p className="text-sm text-muted-foreground mt-2">By consistently buying at lower and lower prices through 2008 and 2009, your portfolio would have recovered its initial value much faster. By 2020, your investment would have grown to approximately $60,000, nearly double the buy-and-hold investor, simply by continuing to invest during the sale.</p>
                </div>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-xl">Paper Losses vs. Real Losses</CardTitle>
            </CardHeader>
            <CardContent>
                 <p className="text-sm text-muted-foreground">This brings up a critical mental framework. A market crash only creates a real loss if you sell. Until you hit the sell button, it’s just a paper loss, a temporary dip in the quoted value of your assets.</p>
                 <p className="text-sm text-muted-foreground mt-2 font-semibold">Volatility is the normal, expected price of admission for earning the high long-term returns the stock market provides.</p>
            </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
              <AlertTriangle className="mr-2 h-5 w-5 text-amber-500" /> Sequence of Returns Risk: A Critical Caveat
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">The idea that crashes are opportunities applies mainly to those who are in the accumulation phase of their financial life (i.e., still working and contributing money). For those who are in the withdrawal phase (i.e., retirees living off their investments), a major crash at the beginning of retirement can be catastrophic. This is known as sequence-of-returns risk.</p>
            <p className="text-sm text-muted-foreground mt-2">Withdrawing money from a portfolio that has just fallen significantly means you are selling more shares to get the same amount of cash, permanently depleting your capital. This is why retirees often have a more conservative portfolio with a larger allocation to cash and bonds to weather these storms.</p>
          </CardContent>
        </Card>
        
        <Alert variant="default" className="bg-primary/5 border-primary/20">
            <Repeat className="h-4 w-4" />
            <AlertTitle className="font-headline text-primary">"But This Time Is Different!"</AlertTitle>
            <AlertDescription>
                <p>Every market crash feels like the end of the world. It's natural to think that 'this time is different' and the market will never recover. History tells a different story. Since 1928, the U.S. stock market has experienced 26 bear markets (a drop of 20% or more). Every single one has been followed by a recovery to new all-time highs. The average time to recover has been about two years. While the past doesn't guarantee the future, it's a powerful reminder that panic is rarely the right move.</p>
            </AlertDescription>
        </Alert>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Your Superpower as an Investor</CardTitle>
                <CardDescription>
                    In a crash, the average person panics. But you can't be above average by being average. The real test of wealth building isn’t how you behave when the market is up, it’s how you behave when it’s down. Staying calm, staying invested, and even continuing to buy during crashes is the quiet superpower that makes millionaires.
                </CardDescription>
            </CardHeader>
            <CardContent>
                 <Button asChild>
                    <Link href={`/roadmaps/master-personal-finance${fromStep ? `?from=${fromStep}` : ''}`}>
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

    