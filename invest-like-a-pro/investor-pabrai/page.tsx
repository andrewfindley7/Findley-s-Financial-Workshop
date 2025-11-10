'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Scale, Copy, Info, Coins, ThumbsDown } from 'lucide-react';
import Link from 'next/link';

const investingPrinciples = [
  {
    icon: Coins,
    title: "1. The Dhandho Framework: 'Heads, I win; tails, I don't lose much.'",
    description: "This is Pabrai's central idea, taken from the entrepreneurial Patel community in India. Dhandho is a Gujarati word that roughly translates to 'endeavors that create wealth.' The focus is on finding opportunities with asymmetric payoffs if it works, you win big; if it fails, you lose very little."
  },
  {
    icon: Copy,
    title: "2. The Art of Cloning (Shameless Copying)",
    description: "Pabrai is a vocal advocate for 'cloning' shamelessly copying the best ideas of other proven, super-investors. He argues that it's far more efficient to analyze the high-conviction buys of investors like Buffett or Munger (found in their public 13F filings) than to generate hundreds of original ideas yourself. Pabrai views this as intellectual humility, recognizing that replicating what already works is smarter than reinventing it."
  },
  {
    icon: Scale,
    title: "3. Buy Simple Businesses, Not Complex Formulas",
    description: "Like Buffett, Pabrai focuses on simple, easy-to-understand businesses. He is famously skeptical of complex Excel models and DCF (Discounted Cash Flow) analysis, believing that if you need a spreadsheet to figure out if an investment is a good deal, it's not a good deal. The value should be obvious."
  },
  {
    icon: ThumbsDown,
    title: "4. Bet Infrequently, Bet Big",
    description: "Pabrai believes that truly great investment ideas are rare. When he finds an opportunity that meets the 'Dhandho' criteria (high upside, low downside), he is not afraid to make a very large, concentrated bet, sometimes putting a significant portion of his fund into a single idea."
  },
];

export default function InvestorPabraiPage() {
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
        <h1 className="text-3xl font-bold font-headline">Learn From The Best: Mohnish Pabrai</h1>
        <p className="text-muted-foreground mt-2">Learn from the master of 'Dhandho' investing and the art of cloning successful ideas.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Brain className="h-4 w-4" />
          <AlertTitle className="font-headline">The Dhandho Investor</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>Mohnish Pabrai is a renowned value investor, author, and philanthropist, best known for his book, "The Dhandho Investor." His approach is a powerful blend of classic value investing principles from Buffett and Graham, combined with a pragmatic focus on low-risk, high-uncertainty opportunities. He is also one of the most vocal advocates for 'cloning' the ideas of other great investors.</p>
            <p className="font-semibold">His early success came from applying this Dhandho framework in his own IT consulting company, which he started with very little capital and later sold for a significant profit, using the proceeds to launch Pabrai Investment Funds in 1999.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">The Pabrai Philosophy: Core Principles</CardTitle>
            <CardDescription>Pabrai's investment framework is elegantly simple and powerfully effective.</CardDescription>
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
            <CardDescription>Pabrai's public investments provide great case studies in Dhandho in action.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border bg-card">
                  <h4 className="font-semibold text-green-600">The Big Win: Fiat Chrysler (now Stellantis)</h4>
                  <p className="text-sm text-muted-foreground mt-1">In 2012, Pabrai made a massive, concentrated bet on Fiat Chrysler. The market hated the stock due to its high debt and the perceived weakness of the auto industry. Pabrai saw that under the leadership of CEO Sergio Marchionne, the company was generating enormous cash flow and had incredibly valuable but underappreciated assets like Jeep, Ram, and Ferrari. He believed the downside was limited (the assets provided a floor), while the upside from a market re-rating was enormous. The investment was a massive success, becoming a "10-bagger" and a classic Dhandho case study.</p>
              </div>
              <div className="p-4 rounded-lg border bg-card">
                  <h4 className="font-semibold text-destructive">The Big Loss: Horsehead Holding</h4>
                  <p className="text-sm text-muted-foreground mt-1">Pabrai invested in Horsehead, a zinc producer, believing it had a technologically advanced, low-cost production method that gave it a strong competitive advantage. However, the company faced operational issues with its new plant and was hit by a sharp, unexpected drop in zinc prices. The company's high debt load (leverage) left it with no room to survive the downturn, and it ultimately went bankrupt. Pabrai has openly discussed this as a painful lesson in underestimating operational risks and the dangers of leverage, even in a seemingly low-cost producer.</p>
              </div>
          </CardContent>
        </Card>

        <Card>
           <CardFooter>
             <Alert variant="default" className="w-full bg-callout text-callout-foreground border-blue-200 dark:border-blue-800">
                <Info className="h-4 w-4" />
                <AlertTitle className="font-semibold">Performance and Legacy</AlertTitle>
                <AlertDescription>
                 In its first decade, from 1999 to 2009, Pabrai Investment Funds delivered a cumulative return of over 1,000% net to investors. Though performance has varied in later years as assets and market conditions changed, his early track record cemented his reputation. Pabrai's willingness to openly share his framework has made him a key figure for individual investors seeking to apply deep value strategies in a practical way.
                </AlertDescription>
            </Alert>
           </CardFooter>
        </Card>
        
        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you've learned about Mohnish Pabrai's unique approach, continue exploring the wisdom of other great investors.
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
