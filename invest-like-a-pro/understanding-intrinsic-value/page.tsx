'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Scale, TrendingUp, Factory, Info, ThumbsUp, ThumbsDown, Sigma, Building2 } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function IntrinsicValuePage() {
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
        <h1 className="text-3xl font-bold font-headline">Understanding Intrinsic Value</h1>
        <p className="text-muted-foreground mt-2">Learn the concept that forms the bedrock of all value-based investing decisions.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Brain className="h-4 w-4" />
          <AlertTitle className="font-headline">What is Intrinsic Value?</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>Intrinsic value is the 'true' underlying value of a business, based on its ability to generate cash for its owners over its lifetime. It is a fundamental concept that separates investing from speculation.</p>
            <p><strong>Price</strong> is what you pay for a stock on any given day, driven by market sentiment, supply, and demand. <strong>Value</strong> is what the underlying business is actually worth. A successful investor understands that these two can be very different.</p>
            <blockquote className="border-l-4 border-primary pl-4 italic">
                <p>Price is what you pay; value is what you get.</p>
                <footer className="mt-1 text-xs not-italic">- Warren Buffett</footer>
            </blockquote>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">Why It's the Most Important Concept</CardTitle>
            <CardDescription>Understanding intrinsic value changes your entire approach to the stock market.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
              <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/20 border-green-200">
                <h3 className="font-semibold flex items-center mb-1 text-green-700 dark:text-green-300">
                  It Anchors Your Decisions in Reality
                </h3>
                <p className="text-sm text-muted-foreground">Without an estimate of a business's value, you have no logical basis for your decisions. You become susceptible to market narratives, hype, and fear. An estimate of intrinsic value acts as your anchor, helping you determine if a stock's current price is rational or emotional.</p>
              </div>
              <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/20 border-green-200">
                <h3 className="font-semibold flex items-center mb-1 text-green-700 dark:text-green-300">
                  It Creates Opportunity
                </h3>
                <p className="text-sm text-muted-foreground">The market is not always efficient. It can, and does, misprice businesses. The gap between the fluctuating market price and the more stable intrinsic value is where opportunity is found. Your job as an investor is to identify and exploit these gaps.</p>
              </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
              <TrendingUp className="mr-2 h-5 w-5 text-destructive" />
              The Danger of Buying Above Intrinsic Value
            </CardTitle>
            <CardDescription>Overpaying is the surest path to poor returns, even with a great company.</CardDescription>
          </CardHeader>
          <CardContent>
             <p className="text-sm text-muted-foreground">During the dot-com bubble of 1999-2000, Cisco was a fantastic, high-growth company that dominated its industry. Investors, caught in the euphoria, bid the stock up to a price that was far above any reasonable estimate of its intrinsic value. </p>
             <p className="text-sm text-muted-foreground mt-2">When the bubble burst, the stock price collapsed. The business itself remained excellent, but it took over 20 years for the stock price to get back to its 2000 peak. Investors who bought at the top, ignoring valuation, suffered a decade or more of zero returns from one of the best businesses of its era.</p>
              <Alert variant="destructive" className="mt-4">
                <Info className="h-4 w-4"/>
                <AlertTitle className="font-semibold">The Takeaway</AlertTitle>
                <AlertDescription>
                    A great business does not automatically make a great investment. The price you pay is a critical component of your future return. Overpaying, even for quality, is a speculation on future growth that may never materialize, and it removes any margin of safety.
                </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        <Alert variant="default" className="bg-amber-50 dark:bg-amber-900/20 border-amber-300 dark:border-amber-700">
            <Info className="h-4 w-4 text-amber-500"/>
            <AlertTitle className="font-headline text-amber-900 dark:text-amber-200">A Range, Not a Precise Number</AlertTitle>
            <AlertDescription className="text-amber-800 dark:text-amber-300">
                Because all valuation methods rely on assumptions about the future, the output of any calculation is not a single, precise number, but a range of probable values. The goal is to be "approximately right rather than precisely wrong." Later lessons will cover specific metrics and models (like DCF, P/E, P/S) used to estimate this range of value.
            </AlertDescription>
        </Alert>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you understand the concept of intrinsic value, return to the main roadmap to continue your learning.
                </CardDescription>
            </CardHeader>
            <CardContent>
                 <Button asChild>
                    <Link href={`/roadmaps/invest-like-a-pro${fromStep ? `#${fromStep}` : ''}`}>
                        Return to The Invest Like a Pro Roadmap
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </CardContent>
        </Card>

      </div>
    </>
  );
}
