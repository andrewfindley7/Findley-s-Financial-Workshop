'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Brain, Briefcase, HandCoins, TrendingUp, Home, BookOpen, ArrowRight, Scale, History, BarChart, Clock, Info, Landmark } from 'lucide-react';
import Link from 'next/link';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function StocksEquitiesGuidePage() {
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
        <h1 className="text-3xl font-bold font-headline">Stocks & Equities</h1>
        <p className="text-muted-foreground mt-2">Understand what stocks are, how they build wealth, and the mindset of a true owner.</p>
      </div>
      <div className="space-y-6">
        
        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-xl">1. What Is a Stock?</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                <p>A <strong>stock</strong>, also known as an <strong>equity</strong>, represents fractional ownership in a public company.
                When you buy a share, you are not just purchasing a ticker symbol, you are becoming a <strong>part-owner</strong> of that business.
                You gain a claim on its <strong>assets</strong> and a share of its <strong>future profits</strong>.</p>
            </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">2. A Brief History of the Stock Market</CardTitle>
            <CardDescription>The story of stocks is the story of capitalism itself.</CardDescription>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none dark:prose-invert">
            <ul className="list-disc pl-5">
                <li><strong>1602 – Amsterdam Stock Exchange:</strong> The Dutch East India Company issued the first public shares, allowing investors to trade ownership for the first time in history.</li>
                <li><strong>18th–19th Centuries – Industrial Revolution:</strong> Stocks funded railroads, steel mills, and manufacturing empires, transforming economies.</li>
                <li><strong>20th Century – Democratization of Investing:</strong> Pension funds, mutual funds, and 401(k)s opened the market to everyday workers.</li>
                <li><strong>21st Century – The Digital Age:</strong> Zero-commission trading, ETFs, and AI-driven analytics gave retail investors unprecedented access.</li>
            </ul>
             <Alert variant="default" className="mt-4 bg-callout text-callout-foreground border-blue-200 dark:border-blue-800">
                <Info className="h-4 w-4" />
                <AlertDescription>
                    From tall ships to smartphones, stocks have financed progress for over 400 years.
                </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">3. How Stocks Exist and Trade</CardTitle>
            <CardDescription>To understand stocks, you need to know how they enter and move through the market.</CardDescription>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none dark:prose-invert">
             <ul className="list-disc pl-5">
                <li><strong>Initial Public Offering (IPO):</strong> When a private company sells shares to the public to raise capital.</li>
                <li><strong>Primary vs. Secondary Markets:</strong> After the IPO, most trading occurs between investors, not between investors and the company itself.</li>
                <li><strong>Stock Exchanges:</strong> Centralized venues (like NYSE and NASDAQ) match buyers and sellers in milliseconds.</li>
                <li><strong>Regulation:</strong> The <strong>Securities and Exchange Commission (SEC)</strong> ensures transparency, fairness, and accountability.</li>
            </ul>
            <Alert variant="default" className="mt-4 bg-callout text-callout-foreground border-blue-200 dark:border-blue-800">
                <Info className="h-4 w-4" />
                <AlertDescription>
                    Behind every share traded lies a complex but reliable system designed to move capital efficiently.
                </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">4. How Stocks Build Wealth</CardTitle>
            <CardDescription>There are <strong>two primary ways</strong> a stock investment generates returns:</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800">
                <div className="flex items-center mb-2 text-green-800 dark:text-green-300">
                  <TrendingUp className="mr-2 h-5 w-5" />
                  <h3 className="font-semibold">1. Capital Appreciation</h3>
                </div>
                <p className="text-sm text-muted-foreground">When a company grows its earnings, its stock price usually rises. Buy at $100, sell at $150, that $50 gain is <strong>capital appreciation</strong>.</p>
            </div>
            <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800">
                <div className="flex items-center mb-2 text-green-800 dark:text-green-300">
                  <HandCoins className="mr-2 h-5 w-5" />
                  <h3 className="font-semibold">2. Dividends</h3>
                </div>
                <p className="text-sm text-muted-foreground">Many established companies share part of their profits as <strong>dividends</strong>, typically every quarter. Dividends provide a steady cash income even when prices fluctuate.</p>
            </div>
          </CardContent>
           <CardFooter>
                 <Alert variant="default" className="w-full bg-callout text-callout-foreground border-blue-200 dark:border-blue-800">
                    <Info className="h-4 w-4" />
                    <AlertDescription>
                        Combine these over time and you get compounding, the quiet force behind long-term wealth.
                    </AlertDescription>
                </Alert>
           </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">5. Why Stocks Outperform Over Time</CardTitle>
            <CardDescription>History shows that equities outperform all other major asset classes.</CardDescription>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none dark:prose-invert">
            <ul className="list-disc pl-5">
                <li>Over the past 100 years, U.S. stocks have delivered an average nominal return of around <strong>10% per year</strong> (including reinvested dividends).</li>
                <li><strong>Reinvested dividends</strong> account for a significant portion of total returns over the long run.</li>
                <li>Compared to bonds or savings, stocks compensate investors for taking on greater risk through higher potential for long-term growth.</li>
            </ul>
             <Alert variant="default" className="mt-4 bg-callout text-callout-foreground border-blue-200 dark:border-blue-800">
                <Info className="h-4 w-4" />
                <AlertDescription>
                    The longer you stay invested, the more time compounding works in your favor.
                </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline flex items-center">
              <Brain className="mr-2 h-5 w-5 text-primary" />
              6. The Investor’s Mindset: Business Owner vs. Speculator
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-1/2 font-semibold text-green-700 dark:text-green-300">Business Owner (Investor)</TableHead>
                        <TableHead className="w-1/2 font-semibold text-red-700 dark:text-red-300">Stock Renter (Speculator)</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>Views a stock as part of a business</TableCell>
                        <TableCell>Treats a stock as a price to bet on</TableCell>
                    </TableRow>
                     <TableRow>
                        <TableCell>Focuses on earnings power, leadership, and strategy</TableCell>
                        <TableCell>Focuses on news, rumors, and momentum</TableCell>
                    </TableRow>
                     <TableRow>
                        <TableCell>Buys during pessimism and holds patiently</TableCell>
                        <TableCell>Panics during declines, chases hype</TableCell>
                    </TableRow>
                     <TableRow>
                        <TableCell>Thinks in years and decades</TableCell>
                        <TableCell>Thinks in hours and days</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <Alert variant="default" className="mt-4 bg-callout text-callout-foreground border-blue-200 dark:border-blue-800">
                <Info className="h-4 w-4" />
                <AlertDescription>
                    Your mindset determines your results, not market luck.
                </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
              <History className="mr-2 h-5 w-5 text-primary" />
              7. Lessons from Market History
            </CardTitle>
            <CardDescription>Market crashes are not failures, they are tuition in investor psychology.</CardDescription>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none dark:prose-invert">
            <ul className="list-disc pl-5 space-y-4">
                <li><strong>1929 – The Great Depression:</strong> Caused by a bubble of speculation fueled by excessive leverage ("buying on margin"). The Dow Jones Industrial Average fell 89% from its peak and took 25 years to recover.</li>
                <li><strong>1987 – Black Monday:</strong> Programmatic trading and portfolio insurance strategies created a feedback loop that caused a 22% drop in the Dow in a single day. The market, however, recovered to its pre-crash high in just over a year.</li>
                <li><strong>2000 – Dot-Com Bubble:</strong> Euphoria around internet stocks with no earnings led to a crash where the tech-heavy NASDAQ index fell over 75%. It was a stark lesson that narratives must be backed by profits.</li>
                <li><strong>2008 – Financial Crisis:</strong> A housing bubble fueled by subprime mortgage lending and complex derivatives caused a global credit freeze. The S&P 500 fell over 50%, but a determined long-term investor who bought at the bottom would have more than quadrupled their money in the following decade.</li>
                <li><strong>2020 – Pandemic Shock:</strong> The fastest bear market in history, with the S&P 500 falling over 30% in just a month due to global lockdowns. It was also one of the fastest recoveries, with the market reaching new highs just five months later.</li>
                <li><strong>2022 – The Inflation Shock:</strong> After a decade of near-zero interest rates, central banks aggressively raised rates to combat the highest inflation in 40 years. This caused both stocks and bonds to fall simultaneously, with the S&P 500 dropping over 25% from its peak.</li>
            </ul>
            <Alert variant="default" className="mt-4 bg-callout text-callout-foreground border-blue-200 dark:border-blue-800">
              <Info className="h-4 w-4" />
              <AlertDescription>Every “unprecedented” crash has happened before, just with different headlines.</AlertDescription>
            </Alert>
          </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-xl flex items-center">
                    <Clock className="mr-2 h-5 w-5 text-primary" />
                    8. The Price of Ownership
                </CardTitle>
                 <CardDescription>Owning stocks comes with an emotional cost.</CardDescription>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                <ul className="list-disc pl-5">
                    <li>Expect <strong>volatility</strong>, 30–50% drawdowns can and do happen.</li>
                    <li>Emotional reactions destroy more wealth than bad companies ever do.</li>
                    <li>The real advantage isn’t IQ, it’s <strong>emotional discipline</strong>.</li>
                </ul>
                 <Alert variant="default" className="mt-4 bg-callout text-callout-foreground border-blue-200 dark:border-blue-800">
                    <Info className="h-4 w-4" />
                    <AlertDescription>
                        If you can stay calm while others panic, you already have an edge.
                    </AlertDescription>
                </Alert>
            </CardContent>
        </Card>

        <Alert variant="default" className="bg-primary/5 border-primary/20">
            <Scale className="h-4 w-4 text-primary"/>
            <AlertTitle className="font-headline text-primary">9. The Market as a Weighing Machine</AlertTitle>
            <AlertDescription>
                <p>Benjamin Graham said it best:</p>
                <blockquote className="border-l-4 border-primary pl-4 italic mt-2">
                    “In the short run, the market is a voting machine, but in the long run, it is a weighing machine.”
                </blockquote>
                <p className="mt-2">Short-term prices reflect emotion and popularity.
                Long-term value reflects <strong>business performance</strong>, earnings, innovation, and cash flow.
                Focus on what a business <strong>weighs</strong>, not how loudly it’s being voted on.</p>
            </AlertDescription>
        </Alert>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">10. Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you understand what stocks represent and how they build wealth, you can learn how to analyze business health and build a resilient portfolio.
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
