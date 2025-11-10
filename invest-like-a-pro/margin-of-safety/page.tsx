'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Scale, ThumbsUp, Info, TrendingUp, ThumbsDown, Sigma, PercentSquare, Activity, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function MarginOfSafetyPage() {
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
        <h1 className="text-3xl font-bold font-headline">Margin of Safety: The Cornerstone of Value Investing</h1>
        <p className="text-muted-foreground mt-2">Understanding the single most important principle for protecting your capital and ensuring long-term success.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <ShieldCheck className="h-4 w-4" />
          <AlertTitle className="font-headline">What is Margin of Safety?</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>The margin of safety is the principle of buying a security at a significant discount to its underlying intrinsic value. It is the difference between what a business is worth and the price you pay for it.</p>
            <blockquote className="border-l-4 border-primary pl-4 italic">
              <p>Confronted with a challenge to distill the secret of sound investment into three words, we venture the motto, MARGIN OF SAFETY.</p>
              <footer className="mt-1 text-xs not-italic">- Benjamin Graham</footer>
            </blockquote>
            <p className="font-semibold mt-2">Think of it like building a bridge. If you calculate that a bridge needs to support a 10,000-pound truck, you don't build it to hold exactly 10,000 pounds. You build it to hold 15,000 or 20,000 pounds. That extra capacity is your margin of safety. It protects you from unforeseen events, errors in calculation, or bad luck.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">The Dual Purpose of a Margin of Safety</CardTitle>
            <CardDescription>It serves two critical functions: protecting your downside and amplifying your upside.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            <div className="p-4 border rounded-lg bg-orange-50 dark:bg-orange-900/30 border-orange-200 dark:border-orange-800">
              <h3 className="font-semibold flex items-center mb-2 text-orange-800 dark:text-orange-200">
                <ThumbsDown className="mr-2 h-5 w-5" /> 1. Protection from Permanent Loss
              </h3>
              <p className="text-sm text-muted-foreground">This is its primary role. The future is uncertain. Your analysis of a business might be wrong, an unexpected competitor could emerge, or a recession could hit. By buying at a significant discount, you create a buffer. If you estimate a business is worth $100 and buy it for $60, it can fall by 40% before you've even lost a dollar of your estimated intrinsic value.</p>
            </div>
            <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800">
              <h3 className="font-semibold flex items-center mb-2 text-green-800 dark:text-green-200">
                <TrendingUp className="mr-2 h-5 w-5" /> 2. Source of Higher Returns
              </h3>
              <p className="text-sm text-muted-foreground">This is the happy byproduct. When you buy at a discount, you don't need extraordinary growth for a good return. The return to fair value alone can provide excellent results. If the market eventually recognizes the business's true worth and the price moves from $60 back to $100, you've earned a 67% return, even if the underlying business value didn't grow at all during that time.</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="font-headline flex items-center">
              <Scale className="mr-2 h-5 w-5 text-primary" />
              How to Apply It: Intrinsic Value vs. Price
            </CardTitle>
            <CardDescription>The practice of margin of safety relies on the distinction between a company's price and its value.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                <strong>Price</strong> is what you pay for a stock on any given day. It is set by the market and can be volatile and emotional.
                <br/>
                <strong>Value</strong> (or <Link href="/education/invest-like-a-pro/understanding-intrinsic-value" className="text-primary hover:underline font-semibold">Intrinsic Value</Link>) is what the business is actually worth, based on its ability to generate cash for its owners over its lifetime.
              </p>
              <p className="text-sm text-muted-foreground">A value investor's job is to calculate a conservative estimate of intrinsic value and then wait patiently for the market, in one of its pessimistic moods, to offer a price that is significantly below that value.</p>
              <Alert variant="default" className="bg-primary/5">
                <Info className="h-4 w-4" />
                <AlertTitle>Example</AlertTitle>
                <AlertDescription>
                 You analyze a stable company and estimate its intrinsic value is around $80 per share. The stock is currently trading at $75. A value investor would not buy it. They would wait. Months later, due to a general market panic, the price drops to $48. Now, there is a large margin of safety ($80 value vs. $48 price). This is the time to buy.
                </AlertDescription>
              </Alert>

              <div className="pt-4 space-y-2">
                 <h4 className="font-semibold text-lg flex items-center"><PercentSquare className="mr-2 h-5 w-5 text-primary"/>The Formula for Margin of Safety</h4>
                 <p className="text-sm text-muted-foreground">You can express the margin of safety as a percentage to quantify your discount.</p>
                 <code className="text-sm p-3 bg-muted rounded-md block w-full text-center font-mono">((Intrinsic Value - Market Price) / Intrinsic Value) * 100%</code>
                  <p className="text-xs text-muted-foreground pt-2">Using our example: (($80 - $48) / $80) * 100% = <strong>40%</strong>. Your purchase price offers a 40% discount to your estimated intrinsic value. Many value investors seek a margin of safety of 30-50%.</p>
              </div>

               <div className="pt-4 space-y-2">
                 <h4 className="font-semibold text-lg flex items-center"><Sigma className="mr-2 h-5 w-5 text-primary"/>Connection to DCF and Discount Rates</h4>
                 <p className="text-sm text-muted-foreground">The "Intrinsic Value" in the formula is often the output of a <Link href="/education/dcf-analysis" className="text-primary hover:underline font-semibold">Discounted Cash Flow (DCF) analysis</Link>. A key input in a DCF is the <strong>discount rate</strong>, which is the rate you use to translate future cash flows into today's dollars. The discount rate itself is a powerful way to build in a margin of safety.</p>
                 <ul className="list-disc pl-5 text-sm space-y-2 text-muted-foreground">
                    <li>Using a <strong>higher discount rate</strong> for a business that is riskier or less predictable will result in a <strong>lower, more conservative</strong> intrinsic value estimate.</li>
                    <li>This forces you to demand a lower purchase price, automatically creating a larger margin of safety to compensate for the higher uncertainty.</li>
                 </ul>
              </div>
          </CardContent>
        </Card>
        
        <Alert variant="default" className="bg-amber-50 dark:bg-amber-900/20 border-amber-300 dark:border-amber-700">
            <Brain className="h-4 w-4 text-amber-500"/>
            <AlertTitle className="font-headline text-amber-900 dark:text-amber-200">A Word from the Masters</AlertTitle>
            <AlertDescription className="text-amber-800 dark:text-amber-300">
                 <blockquote className="mt-2 border-l-4 border-amber-500 pl-4 italic">
                    <p>"You don't have to be brilliant, only a little bit wiser than the other guys, on average, for a long, long time."</p>
                    <footer className="mt-1 text-xs not-italic">- Charlie Munger</footer>
                </blockquote>
                 <blockquote className="mt-4 border-l-4 border-amber-500 pl-4 italic">
                    <p>"The best thing that happens to us is when a great company gets into temporary trouble...We want to buy them when they're on the operating table."</p>
                    <footer className="mt-1 text-xs not-italic">- Warren Buffett</footer>
                </blockquote>
            </AlertDescription>
        </Alert>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you understand this key concept, return to the main roadmap to continue building your financial knowledge.
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
