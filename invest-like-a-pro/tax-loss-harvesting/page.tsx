
'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { ShieldCheck, AlertTriangle, ArrowRight, TrendingUp, TrendingDown, Brain, Info } from 'lucide-react';
import Link from 'next/link';

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits = 0,
    maximumFractionDigits = 0,
  }).format(value);
};

export default function TaxLossHarvestingPage() {
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
        <h1 className="text-3xl font-bold font-headline">Tax-Loss Harvesting</h1>
        <p className="text-muted-foreground mt-2">Learn an advanced strategy to lower your investment tax bill.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <ShieldCheck className="h-4 w-4" />
          <AlertTitle className="font-headline">What is Tax-Loss Harvesting?</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>Tax-loss harvesting is the practice of selling an investment in a taxable brokerage account at a loss. By realizing, or 'harvesting,' a loss, you can offset taxes on both capital gains and, to a limited extent, ordinary income. This strategy is only applicable to taxable accounts, as there are no capital gains taxes in retirement accounts like IRAs or 401(k)s.</p>
            <p className="font-semibold">The goal is not to get rid of a good investment, but to capture a temporary loss for its tax benefits, often by immediately reinvesting the proceeds into a similar but not identical investment.</p>
            <p className="mt-2">Harvested losses first offset capital gains. If you have more losses than gains, you can use up to $3,000 of the excess loss to offset your ordinary income for the year. Any remaining loss beyond that is not lost; it can be carried forward indefinitely to offset future gains or income in subsequent years. For example, if you have $5,000 in harvested losses and no gains, you can use $3,000 to reduce your taxable income this year and carry forward the remaining $2,000 loss to use next year.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">A Practical Example: How It Works</CardTitle>
            <CardDescription>Let's compare two scenarios to see the direct financial impact.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            <div className="p-4 border rounded-lg bg-orange-50 dark:bg-orange-900/30 border-orange-200 dark:border-orange-800">
              <h3 className="font-semibold flex items-center mb-2 text-orange-800 dark:text-orange-200">
                <TrendingDown className="mr-2 h-5 w-5" /> Scenario 1: Without Tax-Loss Harvesting
              </h3>
              <ul className="list-decimal pl-5 text-sm space-y-1 text-muted-foreground">
                <li>You invest $10,000 in 'Fund A'.</li>
                <li>You also invest $10,000 in 'Stock Z'. Later in the year, you sell Stock Z for $15,000, creating a $5,000 capital gain.</li>
                <li>During a market downturn, your 'Fund A' investment is now worth $7,000, creating a $3,000 unrealized loss. You do nothing and hold on.</li>
                <li>At the end of the year, you must pay capital gains tax on your $5,000 gain from Stock Z. Assuming a 15% rate, your tax bill is {formatCurrency(750)}.</li>
              </ul>
            </div>
            <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800">
              <h3 className="font-semibold flex items-center mb-2 text-green-800 dark:text-green-200">
                <TrendingUp className="mr-2 h-5 w-5" /> Scenario 2: With Tax-Loss Harvesting
              </h3>
               <ul className="list-decimal pl-5 text-sm space-y-1 text-muted-foreground">
                <li>You have the same $5,000 capital gain from selling 'Stock Z'.</li>
                <li>You see 'Fund A' is down to $7,000. You sell it, realizing the $3,000 loss.</li>
                <li>You immediately use the $7,000 proceeds to buy 'Fund B,' a similar but not identical index fund, keeping you invested in the market.</li>
                <li>You use the $3,000 loss to offset your gain. Your new taxable gain is $5,000 (gain) - $3,000 (loss) = $2,000.</li>
                <li>Your new tax bill is now 15% of $2,000, which is only {formatCurrency(300)}. You just saved {formatCurrency(450)} in taxes.</li>
              </ul>
            </div>
          </CardContent>
           <CardFooter>
                <p className="text-xs text-muted-foreground">In Scenario 2, you are still invested in the market through Fund B, ready for the recovery, but you've generated a 'tax asset' that directly reduced your tax bill.</p>
           </CardFooter>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle className="font-headline">Who Benefits Most from This Strategy?</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">Tax-loss harvesting is most effective for:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                    <li>Investors with large taxable brokerage accounts (it's not applicable to IRAs or 401(k)s).</li>
                    <li>Investors in higher tax brackets, where the tax savings are more significant.</li>
                    <li>Those who hold volatile assets that are more likely to experience temporary dips, creating harvesting opportunities.</li>
                    <li>Investors who rebalance their portfolio regularly, as the rebalancing process itself can be a natural time to harvest losses.</li>
                </ul>
            </CardContent>
        </Card>

        <Alert variant="destructive" className="bg-amber-50 dark:bg-amber-900/20 border-amber-300 dark:border-amber-700">
          <AlertTriangle className="h-4 w-4 text-amber-500" />
          <AlertTitle className="font-headline text-amber-900 dark:text-amber-200">Crucial Rule: The Wash-Sale Rule</AlertTitle>
          <AlertDescription className="text-amber-800 dark:text-amber-300">
            <p>The IRS does not allow you to claim a loss for tax purposes if you buy the same or a "substantially identical" security within 30 days before or after the sale. This 61-day window is known as the wash-sale period.</p>
            <p className="mt-2">This is why in the example, the proceeds from selling 'Fund A' were invested in 'Fund B.' If you had sold an S&P 500 ETF, you might buy a Total Stock Market ETF to stay invested without violating the rule. Violating the wash-sale rule disallows the tax loss, defeating the purpose of the strategy.</p>
          </AlertDescription>
        </Alert>
        
        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle className="font-headline">A Word of Warning</AlertTitle>
          <AlertDescription>
            Tax-loss harvesting should not be the primary driver of your investment decisions. The goal of investing is to own great assets for the long term. Selling a high-quality business you want to own just to capture a small tax loss is a classic example of the 'tax tail wagging the investment dog.' The strategy should be a secondary optimization, not the core strategy itself.
          </AlertDescription>
        </Alert>
        
        <Card>
            <CardHeader>
                <CardTitle className="font-headline flex items-center"><Brain className="mr-2 h-5 w-5 text-primary"/>The Long-Term Perspective</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">Tax-loss harvesting does not necessarily increase your long-term, pre-tax returns. Instead, its primary benefit is improving your after-tax returns. By deferring taxes, you keep more of your money invested and compounding for longer. It is a tool for tax efficiency, helping your portfolio grow more effectively over time.</p>
            </CardContent>
        </Card>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you understand this advanced tax strategy, return to the Invest Like a Pro roadmap.
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

    