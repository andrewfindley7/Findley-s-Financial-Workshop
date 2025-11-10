'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Scale, Gem, ThumbsDown, Info, Brain, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ArbitrageInvestingPage() {
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
        <h1 className="text-3xl font-bold font-headline">Arbitrage & 'Net-Net' Investing</h1>
        <p className="text-muted-foreground mt-2">Learn about exploiting price discrepancies and finding deep value opportunities.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Scale className="h-4 w-4" />
          <AlertTitle className="font-headline">What is Arbitrage?</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p><strong>Classical Arbitrage</strong> is the simultaneous purchase and sale of the same asset in different markets to profit from a tiny difference in its price. For example, if a stock trades for $10.00 on the NYSE and $10.01 on the London Stock Exchange at the same moment, an arbitrageur could buy it in New York and sell it in London for a guaranteed one-cent profit per share. In theory, this is a risk-free transaction, although in practice, execution risks (like timing and fees) always exist.</p>
            <p className="font-semibold">While pure arbitrage opportunities are rare and exploited in milliseconds by high-speed trading algorithms, Benjamin Graham’s “net-net” approach represents a form of psychological or valuation arbitrage available to patient investors.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline flex items-center">
              <Gem className="mr-3 h-6 w-6 text-primary" />
              The "Net-Net" Concept: Buying $1 for 50 Cents
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-sm text-muted-foreground">A "net-net" is a company trading at a deep discount to its current assets alone, after subtracting all liabilities. The most extreme and compelling version of this is when a company's market capitalization is less than or equal to the cash on its balance sheet, after subtracting all liabilities.</p>
            <div className="p-4 bg-muted/50 rounded-lg">
                <h4 className="font-semibold mb-2 text-base">Your Example: The Business for Free</h4>
                <blockquote className="border-l-4 border-primary pl-4 italic text-sm">
                  <p>"If I invest in a company with a $1 billion market cap and $1 billion cash on the balance sheet, I'm essentially paying dollar-for-dollar for the cash and getting the business for free."</p>
                </blockquote>
                 <p className="text-sm mt-3">This is the perfect way to think about it. The market is valuing the entire ongoing business its brands, factories, employees, and future prospects at zero or less. This provides a <strong>substantial margin of safety</strong>.</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline flex items-center">
             <Brain className="mr-3 h-6 w-6 text-primary" />
              Why This Massively Limits Downside Risk
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">The investment thesis for a net-net is straightforward and powerful. If you buy the company for its cash value, one of two things is likely to happen:</p>
            <ul className="list-disc pl-5 text-sm space-y-2 text-muted-foreground">
                <li><strong>Scenario 1 (Best Case):</strong> The underlying business turns around, market sentiment improves, and the company is re-valued at a price that includes both its cash and a reasonable value for its operations. This can lead to substantial returns.</li>
                <li><strong>Scenario 2 (Worst Case):</strong> The business fails completely and liquidates. In this scenario, after paying off all debts, the remaining cash would be returned to shareholders. Since you bought the company for its cash value, your potential for loss is theoretically very low.</li>
            </ul>
             <p className="text-sm font-semibold text-muted-foreground mt-2">This asymmetry limited downside with significant upside potential is what makes this strategy so attractive to deep value investors.</p>
          </CardContent>
        </Card>
        
        <Card className="border-destructive/50 bg-destructive/5">
            <CardHeader>
                <CardTitle className="font-headline flex items-center text-destructive">
                    <ThumbsDown className="mr-3 h-6 w-6"/>
                    The Catch: Why Is It So Cheap?
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">Companies don't trade at such low valuations without reason. The market is often pessimistic because of very real problems. You must investigate why the stock is so cheap before investing.</p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    <li><strong>Cash Burn:</strong> Is the underlying business losing money so fast that the cash on the balance sheet will soon be gone? This is the biggest risk.</li>
                    <li><strong>Value Trap:</strong> Is there a fundamental, permanent problem with the industry or the company that means it will never be profitable again?</li>
                    <li><strong>Management Issues:</strong> Is management untrustworthy and likely to squander the cash on poor acquisitions or excessive salaries?</li>
                    <li><strong>Market Neglect:</strong> Sometimes, a company is simply too small or in an unloved industry to be noticed by analysts, leading to undervaluation despite a solid balance sheet. This is a more benign reason and a potential source of opportunity.</li>
                </ul>
                <p className="font-semibold mt-3 text-sm">Finding a true net-net where the business is stable or turning around is very rare and requires diligent research.</p>
            </CardContent>
        </Card>
         <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you understand arbitrage and deep value, return to the main roadmap to learn about other investment philosophies. Next, you’ll learn how to identify and verify genuine net-net opportunities in practice.
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
