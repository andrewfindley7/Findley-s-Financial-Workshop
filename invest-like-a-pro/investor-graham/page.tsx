'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Scale, ShieldCheck, Users, Info, ThumbsUp, ThumbsDown } from 'lucide-react';
import Link from 'next/link';

const investingPrinciples = [
  {
    icon: Users,
    title: "1. Mr. Market: Your Manic-Depressive Business Partner",
    description: "Graham's most famous allegory. Imagine you own a share in a business and have a partner named Mr. Market. Every day, he offers to either buy your share or sell you his at a certain price. Some days he's euphoric and quotes a ridiculously high price. Other days he's despondent and offers a very low price. Graham's key insight was that you are free to ignore him. The market is there to serve you with opportunities, not to instruct you on the value of your business."
  },
  {
    icon: ShieldCheck,
    title: "2. Margin of Safety: The Cornerstone of Investment",
    description: "This is Graham's central principle. A margin of safety is the difference between the intrinsic value of a business and the price you pay for its stock. By demanding a significant discount, you build in a buffer that protects you from bad luck, miscalculations, or unforeseen problems. It's the three most important words in investing."
  },
  {
    icon: Scale,
    title: "3. The Defensive vs. The Enterprising Investor",
    description: "Graham understood that there are two types of investors. The 'Defensive' investor seeks freedom from serious error and effort, and should stick to a diversified portfolio of index funds. The 'Enterprising' investor is willing to devote the time and effort to rigorous analysis to achieve better-than-average results, but must be careful their analysis is correct to avoid taking on uncompensated risk if that analysis is flawed.",
  },
];

export default function InvestorGrahamPage() {
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
        <h1 className="text-3xl font-bold font-headline">Learn From The Best: Benjamin Graham</h1>
        <p className="text-muted-foreground mt-2">Learn from the 'Father of Value Investing' and the author of the investment bible, 'The Intelligent Investor'.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Brain className="h-4 w-4" />
          <AlertTitle className="font-headline">The Dean of Wall Street</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>Benjamin Graham was an investor, economist, and professor who is widely considered to be the first to develop and teach the core principles of value investing. His books, "Security Analysis" and "The Intelligent Investor," laid the intellectual foundation for an entire school of investment thought that focuses on risk management, fundamental analysis (e.g., analyzing a company's financial statements, assets, and earnings to determine its true value), and treating a stock as an ownership stake in a business.</p>
            <p className="font-semibold">His most famous student, Warren Buffett, described "The Intelligent Investor" as "by far the best book about investing ever written."</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">The Graham Philosophy: Core Principles</CardTitle>
            <CardDescription>Graham's philosophy was built on a few timeless, powerful ideas designed to protect an investor from themselves and the market's whims.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {investingPrinciples.map(p => (
              <div key={p.title} className="p-4 border rounded-lg bg-muted/30">
                <h3 className="font-semibold flex items-center mb-2">
                  <p.icon className="mr-3 h-5 w-5 text-primary" />
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground">{p.description}</p>
              </div>
            ))}
          </CardContent>
           <CardFooter>
             <Alert variant="default" className="w-full bg-callout text-callout-foreground border-blue-200 dark:border-blue-800">
                <Info className="h-4 w-4" />
                <AlertTitle className="font-semibold">His Legacy: From Cigar Butts to Moats</AlertTitle>
                <AlertDescription>
                 Graham's early approach focused on finding "cigar-butt" stocks mediocre businesses trading for less than their liquidation value. While his student, Warren Buffett, later evolved this idea to focus on buying wonderful businesses at fair prices, Graham's foundational principles of Mr. Market and the Margin of Safety remain the bedrock of all forms of value investing today.
                </AlertDescription>
            </Alert>
           </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">Notable Investments: Wins and Lessons</CardTitle>
            <CardDescription>Graham's investments demonstrate his principles in action.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border bg-card">
                  <h4 className="font-semibold text-green-600 flex items-center"><ThumbsUp className="mr-2 h-4 w-4" />The Big Win: GEICO</h4>
                  <p className="text-sm text-muted-foreground mt-1">In 1948, Graham's partnership made a massive investment in GEICO, putting 25% of its capital into the insurance company. He understood its business model deeply and recognized its significant cost advantage, a durable 'moat.' The market undervalued it, providing a margin of safety. While Graham's fund made a spectacular return, he later sold the shares. It was his student, Warren Buffett, who later bought a controlling stake in GEICO for Berkshire Hathaway, turning it into a multi-billion dollar juggernaut. Buffett has often cited Graham's early sale as an "error of omission" a lesson in the immense opportunity cost of selling a truly wonderful business, even after a good return.</p>
              </div>
              <div className="p-4 rounded-lg border bg-card">
                  <h4 className="font-semibold text-blue-600 flex items-center"><Info className="mr-2 h-4 w-4" />The Classic Case: Northern Pipeline Co.</h4>
                  <p className="text-sm text-muted-foreground mt-1">This was a classic Graham 'net-net' investment. Graham discovered that the pipeline company was trading for just $65 per share, but it held high-quality bonds in its portfolio that were worth $95 per share. He was essentially buying a dollar for 68 cents. The underlying pipeline business itself was a worthless 'cigar-butt,' but the value of the assets on its books provided an enormous margin of safety. He bought a large stake, pushed management to distribute the bonds, and made a quick, safe profit. This demonstrates his methodical, risk-averse approach.</p>
              </div>
          </CardContent>
           <CardFooter>
            <Alert variant="default" className="w-full bg-callout text-callout-foreground border-blue-200 dark:border-blue-800">
                <Info className="h-4 w-4" />
                <AlertTitle className="font-semibold">Performance and Legacy</AlertTitle>
                <AlertDescription>
                 From 1936 to 1956, the Graham-Newman Corporation partnership generated an estimated annualized return of at least 14.7%, significantly outperforming the market's return of 12.2% over the same period. More importantly, he did so with significantly less risk and volatility, proving the power of his margin of safety principle in protecting capital and generating reliable returns.
                </AlertDescription>
            </Alert>
           </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">Graham's Most Famous Quotes</CardTitle>
            <CardDescription>These quotes encapsulate his enduring wisdom.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 prose prose-sm max-w-none dark:prose-invert">
             <blockquote className="border-l-4 pl-4 italic">"The investor’s chief problem and even his worst enemy is likely to be himself."</blockquote>
             <blockquote className="border-l-4 pl-4 italic">"In the short run, the market is a voting machine but in the long run, it is a weighing machine."</blockquote>
             <blockquote className="border-l-4 pl-4 italic">"An investment operation is one which, upon thorough analysis, promises safety of principal and an adequate return. Operations not meeting these requirements are speculative."</blockquote>
          </CardContent>
        </Card>
        
        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you've learned from the father of value investing, continue exploring the wisdom of other great investors.
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
