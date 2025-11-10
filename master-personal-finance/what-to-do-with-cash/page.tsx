'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { DollarSign, ShieldCheck, TrendingUp, PiggyBank, Wind, ArrowRight, Brain, Info } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function WhatToDoWithCashPage() {
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
        <h1 className="text-3xl font-bold font-headline">What to Do With Your Cash: A Lesson About Safety and Yield</h1>
        <p className="text-muted-foreground mt-2">Learn where to park your cash to keep it safe, liquid, and earning the best possible return.</p>
      </div>
      <div className="space-y-6">
        <Alert className="bg-primary/5 border-primary/20">
          <DollarSign className="h-4 w-4" />
          <AlertTitle className="font-headline">The Purpose of Cash: Liquidity & Stability</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>In a world focused on investment growth, it's easy to overlook the importance of cash. Cash isn't meant to make you rich; it's meant to keep you safe. Its primary roles are:</p>
            <ul className="list-disc pl-5">
                <li>Liquidity: Providing immediate access to funds for daily expenses and emergencies without having to sell long-term investments.</li>
                <li>Stability: Acting as a stable foundation for your financial plan, unaffected by stock market volatility.</li>
            </ul>
          </AlertDescription>
        </Alert>

        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-xl flex items-center">
                    <Wind className="mr-2 h-5 w-5 text-red-600" />
                    The Enemy of Cash: Inflation
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">The biggest risk to holding cash is not that you will lose it, but that it will lose its purchasing power over time. Inflation is the rate at which the general level of prices for goods and services is rising. If your cash earns 0% interest and inflation is 3%, your money effectively becomes 3% less valuable each year. This is why it's crucial to invest your long-term savings in assets that have the potential to grow faster than inflation.</p>
            </CardContent>
        </Card>

        <Alert variant="default" className="bg-blue-50/50 dark:bg-blue-900/30 border-blue-300 dark:border-blue-700">
            <Brain className="h-4 w-4" />
            <AlertTitle className="font-headline">Objection: "But Cash Feels Like It's Wasting Away"</AlertTitle>
            <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
                <p>It’s true that cash won’t build wealth the way investments can. But its purpose isn’t growth, it’s protection. Just like you wouldn’t cancel your car insurance because you "didn't get in an accident last year," you shouldn’t neglect your cash savings because it isn't compounding at 10%. Its value is in what it prevents: going into high-interest debt, or being forced to sell your real investments at the worst possible time.</p>
            </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
              <PiggyBank className="mr-2 h-5 w-5 text-primary" />
              The Best Place for Your Cash: High-Yield Savings Accounts (HYSAs)
            </CardTitle>
            <CardDescription>To combat inflation, your cash needs to be working for you. The best tool for this is a High-Yield Savings Account.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="list-disc pl-5 text-sm space-y-2">
                <li>Higher Interest Rates: HYSAs offer significantly higher interest rates (APY) than traditional brick-and-mortar savings accounts, helping your cash keep pace with or even beat inflation.</li>
                <li>Safety: Like traditional savings accounts, HYSAs at reputable banks are FDIC-insured, meaning your money is protected up to $250,000.</li>
                <li>Liquidity: Your money remains liquid, meaning you can access it when you need it, typically within 1-3 business days.</li>
            </ul>
            <Alert variant="default">
                <TrendingUp className="h-4 w-4"/>
                <AlertTitle>What High Interest Rates Mean for Savers</AlertTitle>
                <AlertDescription>When central banks raise interest rates to fight inflation, it's bad news for borrowers but great news for savers. Higher rates mean the APY on HYSAs also goes up, allowing your cash to earn a meaningful, risk-free return. This makes it a very attractive time to build up your cash reserves.</AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
              <ShieldCheck className="mr-2 h-5 w-5 text-primary" />
              How Much Cash Should You Hold? A Multi-Bucket Strategy
            </CardTitle>
            <CardDescription>The right amount of cash depends on your stage of life and goals. Here’s how to think about it.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            <div className="p-4 border rounded-lg bg-card shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Bucket 1: During Your Working Years</h3>
                <p className="text-sm text-muted-foreground mb-3">The priority is your emergency fund. This should cover 3 to 6 months of essential living expenses. It's your safety net against job loss, medical emergencies, or unexpected repairs. This fund should be kept in a liquid HYSA, separate from your checking and investment accounts.</p>
            </div>
            <div className="p-4 border rounded-lg bg-card shadow-sm">
                 <h3 className="font-semibold text-lg mb-2">Bucket 2: Nearing or In Retirement</h3>
                <p className="text-sm text-muted-foreground mb-3">The priority shifts to a retirement cash buffer. Financial planners often recommend holding 1 to 3 years of planned living expenses in cash or cash-equivalents. This buffer allows you to pay your bills without being forced to sell your investments (like stocks) during a market downturn, giving your portfolio time to recover.</p>
            </div>
          </CardContent>
          <CardContent>
            <Alert className="mt-4">
              <AlertTitle className="font-semibold">Example: A 3-Year Retirement Cash Ladder</AlertTitle>
              <AlertDescription>
                <p className="mt-2">If you need $100,000 per year in retirement, you might structure your $300,000 cash buffer like this to maximize yield while ensuring liquidity:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                  <li>Year 1 ($100k): Keep in a highly liquid High-Yield Savings Account (HYSA) or Money Market Fund for immediate access.</li>
                  <li>Year 2 ($100k): Purchase a 12-month or 1-year CD, which typically offers a higher interest rate than an HYSA.</li>
                  <li>Year 3 ($100k): Purchase a 24-month or 2-year CD to capture an even higher yield.</li>
                </ul>
                <p className="mt-2 text-xs">Each year, as a CD matures, you use it for that year's living expenses and then purchase a new CD with funds from your investment portfolio to replenish the ladder. This strategy protects your short-term spending needs from stock market volatility.</p>
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
        
        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Cash isn’t dead money. It’s peace of mind, flexibility, and protection against life’s curveballs. With the right amount in the right place, you can face uncertainty with confidence and invest the rest without fear.
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
