'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, ShoppingCart, TrendingUp, Info, Search, Target, ThumbsUp, ThumbsDown } from 'lucide-react';
import Link from 'next/link';

const investingPrinciples = [
  {
    icon: ShoppingCart,
    title: "1. Invest In What You Know",
    description: "This is Lynch's most famous principle. He believed that individual investors have a massive advantage over Wall Street professionals in their own fields of expertise. If you're a doctor, you understand healthcare trends better than most analysts. If you work in retail, you can spot the next hot store before it becomes a market darling. Use your local knowledge and professional edge."
  },
  {
    icon: Search,
    title: "2. Do Your Homework (The 'Two-Minute Drill')",
    description: "Before buying any stock, Lynch believed you should be able to explain what the company does and why you're buying it in a simple, two-minute summary. If you can't, you haven't done enough research. This forces clarity of thought and prevents you from buying based on a hot tip or a vague story."
  },
  {
    icon: Target,
    title: "3. Focus on Growth at a Reasonable Price (GARP)",
    description: "Lynch was a master of the GARP strategy. He looked for companies with strong growth prospects but refused to overpay for them. His key tool was the PEG ratio, which compares a company's P/E ratio to its earnings growth rate. A PEG ratio below 1.0 was a green light, indicating the growth was cheap.",
  },
  {
    icon: TrendingUp,
    title: "4. Look for 'Ten-Baggers'",
    description: "Lynch popularized the term 'ten-bagger' an investment that goes up 10 times its initial purchase price. He believed that the biggest returns come from finding and holding these exceptional growth companies over the long term, and that just one or two of these in a portfolio can make an entire investment career.",
  },
];

export default function InvestorLynchPage() {
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
        <h1 className="text-3xl font-bold font-headline">Learn From The Best: Peter Lynch</h1>
        <p className="text-muted-foreground mt-2">Learn from the legendary manager of the Fidelity Magellan Fund and his 'invest in what you know' philosophy.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Brain className="h-4 w-4" />
          <AlertTitle className="font-headline">The People's Investor</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>Peter Lynch is one of the most successful and celebrated fund managers of all time. From 1977 to 1990, he managed the Fidelity Magellan Fund, achieving an astonishing average annual return of 29.2% more than double the S&P 500's performance. During his tenure, $1,000 invested in his fund would have grown to over $28,000.</p>
            <p className="font-semibold">His core philosophy was empowering the individual investor, arguing that they could use their own unique knowledge of local companies and industries to outperform Wall Street experts. His books, "One Up on Wall Street" and "Beating the Street," remain some of the most accessible and practical guides to investing ever written.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">The Lynch Philosophy: Core Principles</CardTitle>
            <CardDescription>Lynch's approach was practical, common-sense, and highly effective.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {investingPrinciples.map(p => (
              <div key={p.title} className="p-4 border rounded-lg bg-muted/30">
                <h3 className="font-semibold flex items-center mb-2">
                  <p.icon className="mr-3 h-5 w-5 text-primary" />
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground">{p.description}</p>
                 {p.title.includes("Invest In What You Know") && (
                    <Alert variant="destructive" className="mt-3 text-xs bg-amber-50 dark:bg-amber-900/20 border-amber-300 dark:border-amber-700">
                        <Info className="h-4 w-4 text-amber-500"/>
                        <AlertTitle>A Critical Caveat</AlertTitle>
                        <AlertDescription className="text-amber-800 dark:text-amber-300">
                            Familiarity can create bias. Just because you like a company's product doesn't make its stock a good investment. "Investing in what you know" is the starting point for research, not the conclusion. It must be combined with rigorous financial analysis to confirm the business is high-quality and the stock is reasonably priced.
                        </AlertDescription>
                    </Alert>
                 )}
              </div>
            ))}
          </CardContent>
           <CardFooter>
             <Alert variant="default" className="w-full bg-callout text-callout-foreground border-blue-200 dark:border-blue-800">
                <Info className="h-4 w-4" />
                <AlertTitle className="font-semibold">The Six Categories of Stocks</AlertTitle>
                <AlertDescription>
                 Lynch categorized companies into six types: Slow Growers, Stalwarts, Fast Growers, Cyclicals, Turnarounds, and Asset Plays. He believed that understanding which category a stock falls into is crucial for setting the right expectations for its performance and knowing when to sell.
                </AlertDescription>
            </Alert>
           </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">Notable Investments: Wins and Losses</CardTitle>
            <CardDescription>Lynch's career provides excellent examples of his "invest in what you know" philosophy.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border bg-card">
                  <h4 className="font-semibold text-green-600 flex items-center"><ThumbsUp className="mr-2 h-4 w-4" />The Big Win: Dunkin' Donuts</h4>
                  <p className="text-sm text-muted-foreground mt-1">Lynch was a regular customer at Dunkin' Donuts and was impressed by the quality of the coffee and the consistent crowds. He investigated the company and found it was rapidly expanding and had strong financials. He realized its growth potential was being underestimated by Wall Street. This "local knowledge" led to an investment that became a massive multi-bagger for the Magellan Fund, a perfect example of turning everyday observations into investment success.</p>
              </div>
              <div className="p-4 rounded-lg border bg-card">
                  <h4 className="font-semibold text-destructive flex items-center"><ThumbsDown className="mr-2 h-4 w-4" />The Big Loss: Kmart</h4>
                  <p className="text-sm text-muted-foreground mt-1">Lynch's investment in Kmart is a powerful lesson. He initially invested because the company appeared statistically cheap and was a well-known retailer. However, he underestimated the fierce competitive threat from a more efficient, faster-growing rival: Walmart. While Kmart stagnated, Walmart was relentlessly focused on logistics and low prices, which allowed it to steal market share year after year. Lynch learned that a cheap stock is not a bargain if the underlying business is losing its competitive position. This mistake reinforced his focus on finding companies that not only had growth but a durable plan to defend it.</p>
              </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">Lynch's Most Famous Quotes</CardTitle>
            <CardDescription>These quotes capture his practical and often humorous investment wisdom.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 prose-sm max-w-none dark:prose-invert">
             <blockquote className="border-l-4 pl-4 italic">"Go for a business that any idiot can run because sooner or later, any idiot probably is going to run it."</blockquote>
             <blockquote className="border-l-4 pl-4 italic">"Know what you own, and know why you own it."</blockquote>
             <blockquote className="border-l-4 pl-4 italic">"The person that turns over the most rocks wins the game."</blockquote>
             <blockquote className="border-l-4 pl-4 italic">"In the stock market, the most important organ is the stomach, not the brain."</blockquote>
          </CardContent>
        </Card>
        
        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you've learned from Peter Lynch's practical approach, continue exploring the wisdom of other great investors.
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