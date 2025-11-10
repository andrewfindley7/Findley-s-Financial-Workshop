'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Scale, Castle, Users, Info, TrendingUp, Circle, BrainCircuit, ThumbsUp, ThumbsDown } from 'lucide-react';
import Link from 'next/link';

const investingPrinciples = [
  {
    icon: Castle,
    title: "1. The Business Must Be Wonderful",
    description: "This is the first and most important test. Rochon looks for companies with dominant market positions, strong brand names, and durable competitive advantages ('moats'). The business must be able to generate a high and sustainable Return on Invested Capital (ROIC), typically above 15%."
  },
  {
    icon: Users,
    title: "2. Management Must Be Excellent",
    description: "The leadership team must be both honest and highly competent. Rochon looks for managers who are passionate about their business, have a long-term vision, and act like owners. He reads years of shareholder letters to understand their character and strategic thinking."
  },
  {
    icon: Scale,
    title: "3. The Valuation Must Be Reasonable",
    description: "Even the best business can be a bad investment if you overpay. Rochon is a value-conscious investor who uses long-term free cash flow projections to determine a company's intrinsic value. He is willing to pay a fair price for an exceptional company, seeking a 'margin of safety' not just in price, but primarily in the quality of the business itself."
  },
];

export default function InvestorRochonPage() {
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
        <h1 className="text-3xl font-bold font-headline">Learn From The Best: François Rochon</h1>
        <p className="text-muted-foreground mt-2">Learn from the founder of Giverny Capital, a master of long-term, concentrated, quality-growth investing.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Brain className="h-4 w-4" />
          <AlertTitle className="font-headline">The Art Collector of Businesses</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>François Rochon is a French-Canadian investor and the founder of Giverny Capital, which he started in 1993. He is a devoted follower of the Warren Buffett and Charlie Munger school of thought, famously describing his approach as collecting great businesses like one would collect fine art with the intention of holding them forever. His shareholder letters are known not just for their investment insights, but for their emphasis on gratitude and emotional discipline.</p>
            <p className="font-semibold">His track record is exceptional. From 1993 through 2023, his firm's portfolio has generated a compound annual return of about 15.5%, significantly outperforming the S&P 500's return of around 10% over the same period.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">The Rochon Philosophy: The Three Circles</CardTitle>
            <CardDescription>Rochon's investment process is famously simple and rigorous. He believes that for an investment to be considered, it must pass through three successive circles of analysis.</CardDescription>
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
            <CardDescription>Rochon's long-term holdings provide excellent examples of his philosophy in action.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border bg-card">
                  <h4 className="font-semibold text-green-600 flex items-center"><ThumbsUp className="mr-2 h-4 w-4" />The Big Win: CarMax</h4>
                  <p className="text-sm text-muted-foreground mt-1">Rochon invested in CarMax in the early 2000s, recognizing its durable competitive advantage in the used car market. He saw a company with a strong brand, a superior customer experience, and a scalable business model that was disrupting a fragmented industry. Despite the cyclical nature of the auto industry, CarMax's superior business model allowed it to consistently gain market share. Holding this 'wonderful business' for nearly two decades generated enormous returns for Giverny Capital.</p>
              </div>
              <div className="p-4 rounded-lg border bg-card">
                  <h4 className="font-semibold text-destructive flex items-center"><ThumbsDown className="mr-2 h-4 w-4" />The Big Loss: American International Group (AIG)</h4>
                  <p className="text-sm text-muted-foreground mt-1">During the 2008 financial crisis, Rochon made a value-based investment in AIG, believing the insurance giant was trading far below its intrinsic value. However, he underestimated the complexity and opacity of the company's financial derivatives portfolio. AIG's collapse and subsequent government bailout led to a significant loss for his fund. He has cited this as a key lesson in staying within his circle of competence and avoiding businesses that are too complex to fully understand, no matter how cheap they appear.</p>
              </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
              <BrainCircuit className="mr-2 h-5 w-5 text-primary" />
              Core Tenets and Quotes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-3 bg-muted/40 rounded-lg">
                <h4 className="font-semibold">On Concentration:</h4>
                <blockquote className="border-l-4 border-primary pl-4 italic text-sm mt-1">"Diversification is a protection against ignorance. It makes very little sense for those who know what they're doing."</blockquote>
                <p className="text-xs text-muted-foreground mt-2">Rochon believes that owning 15-20 great businesses provides all the diversification one needs, and that your 50th best idea is unlikely to be as good as your 5th.</p>
            </div>
             <div className="p-3 bg-muted/40 rounded-lg">
                <h4 className="font-semibold">On Time Horizon:</h4>
                <blockquote className="border-l-4 border-primary pl-4 italic text-sm mt-1">"Our favorite holding period is forever."</blockquote>
                <p className="text-xs text-muted-foreground mt-2">He approaches investing with the mindset of a business owner, not a stock trader. This long-term perspective allows the power of compounding to work its magic and avoids the costs and taxes of frequent trading.</p>
            </div>
             <div className="p-3 bg-muted/40 rounded-lg">
                <h4 className="font-semibold">On Market Declines:</h4>
                <blockquote className="border-l-4 border-primary pl-4 italic text-sm mt-1">"We see stock market declines as a friend. They are an opportunity to add to our collection of great companies at lower prices."</blockquote>
                <p className="text-xs text-muted-foreground mt-2">Like Buffett, he views market volatility not as risk, but as opportunity for the prepared and rational investor.</p>
            </div>
          </CardContent>
           <CardFooter>
            <Alert variant="default" className="w-full bg-callout text-callout-foreground border-blue-200 dark:border-blue-800">
                <Info className="h-4 w-4" />
                <AlertTitle className="font-semibold">The Takeaway: Rationality, Patience, and Artistry</AlertTitle>
                <AlertDescription>
                 <p>Rochon's career is a powerful testament to the effectiveness of a simple, disciplined, and patient approach. His success demonstrates how a combination of rigorous business analysis (the science) and a long-term, owner's mindset (the art) forms a durable and effective investing edge.</p>
                </AlertDescription>
            </Alert>
           </CardFooter>
        </Card>
        
        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you've learned about François Rochon's quality-focused philosophy, continue exploring the wisdom of other great investors.
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
