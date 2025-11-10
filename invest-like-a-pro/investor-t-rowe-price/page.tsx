'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, TrendingUp, Info, Scale, Clock, ThumbsUp, ThumbsDown } from 'lucide-react';
import Link from 'next/link';

const investingPrinciples = [
  {
    icon: TrendingUp,
    title: "1. Focus on Superior Growth",
    description: "This is the core of Price's philosophy. He looked for companies in 'fertile fields for future growth' industries with strong tailwinds that could grow their earnings and revenues much faster than the overall economy. He was less concerned with the current price and more focused on the long-term earnings power."
  },
  {
    icon: Clock,
    title: "2. Long-Term Time Horizon",
    description: "Price was a patient, long-term investor. He believed that the best way to profit from a great growth company was to buy it and hold it for many years, allowing the power of compounding to work. He wasn't interested in short-term market fluctuations."
  },
  {
    icon: Scale,
    title: "3. Growth at a Reasonable Price (GARP)",
    description: "While growth was his primary focus, Price was not a 'growth at any price' investor. He believed in paying a reasonable price for a growth company, avoiding the most speculative, high-flying stocks with no earnings. This philosophy would later be termed 'GARP' by investors he influenced, like Peter Lynch."
  },
  {
    icon: Brain,
    title: "4. Invest in Good Management in Good Industries",
    description: "Price believed that a company's success was tied to the quality of its management and the tailwinds of its industry. He looked for well-managed companies operating in industries with strong growth prospects."
  },
];

export default function InvestorTRowePricePage() {
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
        <h1 className="text-3xl font-bold font-headline">Learn From The Best: T. Rowe Price</h1>
        <p className="text-muted-foreground mt-2">Learn from the 'Father of Growth Investing' and his revolutionary focus on long-term earnings power.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Brain className="h-4 w-4" />
          <AlertTitle className="font-headline">The Father of Growth Investing</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>Thomas Rowe Price Jr. was an American investment manager who pioneered the philosophy of growth investing. In an era dominated by the traditional value investing approach of buying statistically cheap stocks, Price had a revolutionary idea: the best way to make money was to invest in well-managed companies in "fertile fields for future growth" that could grow their earnings for many years to come.</p>
            <p className="font-semibold">He founded his firm, T. Rowe Price & Associates, in 1937. His decision to charge fees based on assets under management rather than sales commissions was a revolutionary innovation that aligned the firm's interests with its clients' success and became a cornerstone of the modern mutual fund industry.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">The T. Rowe Price Philosophy: Core Principles</CardTitle>
            <CardDescription>Price's approach was a departure from the "buy cheap" mentality of his time, focusing instead on future potential.</CardDescription>
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
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">Notable Investments: Wins and Losses</CardTitle>
            <CardDescription>Price's career provides excellent examples of his philosophy in action.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border bg-card">
                  <h4 className="font-semibold text-green-600 flex items-center"><ThumbsUp className="mr-2 h-4 w-4" />The Big Win: IBM</h4>
                  <p className="text-sm text-muted-foreground mt-1">One of Price's most famous and successful investments was in IBM. In the 1950s, while other investors were focused on industrial and railroad stocks, Price saw the transformative potential of the computing industry. He recognized IBM as a well-managed company with a dominant position in a rapidly growing "fertile field." While others saw IBM as "expensive" on traditional metrics, Price focused on its potential for decades of earnings growth. He invested heavily for his clients and held the stock for years, generating massive returns as IBM grew to become a global technology giant.</p>
              </div>
              <div className="p-4 rounded-lg border bg-card">
                  <h4 className="font-semibold text-destructive flex items-center"><ThumbsDown className="mr-2 h-4 w-4" />The Cautionary Tale: The 'Nifty Fifty' Bubble</h4>
                  <p className="text-sm text-muted-foreground mt-1">Towards the end of his career in the late 1960s, Price became increasingly wary of the "Nifty Fifty" a group of premier growth stocks like Xerox, Avon, and Polaroid that were considered so good you could buy them at any price. As a GARP-style investor, he saw that their valuations had become extreme and disconnected from reality. He famously grew cautious and sold many of these stocks too early, missing the final leg of the bubble. When the bubble burst in the early 1970s, these same stocks crashed 80-90%. While his caution cost him some upside, it also protected his clients from the catastrophic losses that followed, demonstrating the tension between growth and valuation.</p>
              </div>
          </CardContent>
           <CardFooter>
            <Alert variant="default" className="w-full bg-callout text-callout-foreground border-blue-200 dark:border-blue-800">
                <Info className="h-4 w-4" />
                <AlertTitle className="font-semibold">The Lesson</AlertTitle>
                <AlertDescription>
                 Price's success teaches that true value often lies in a company's future growth. His caution with the Nifty Fifty teaches a second, equally important lesson: even the best companies can become terrible investments if you overpay.
                </AlertDescription>
            </Alert>
           </CardFooter>
        </Card>
        
        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you've learned about T. Rowe Price's growth-focused approach, continue exploring the wisdom of other great investors.
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