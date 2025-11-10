'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Building2, TrendingDown, Scale, Info, ThumbsUp, ThumbsDown } from 'lucide-react';
import Link from 'next/link';

const investingPrinciples = [
  {
    icon: TrendingDown,
    title: "1. Contrarian & Value-Based Approach",
    description: "Flatt's core philosophy is to 'go where the capital isn't.' He is a deep value investor who actively seeks out high-quality, essential assets that are out of favor or in distress. He buys when others are fearful, allowing Brookfield to acquire premier assets at a significant discount to their replacement cost."
  },
  {
    icon: Building2,
    title: "2. Focus on Real, Essential Assets",
    description: "Brookfield specializes in the backbone of the global economy: real estate, infrastructure (ports, pipelines, data centers), renewable power, and private equity. These assets are often long-lived, have high barriers to entry, and generate stable, predictable cash flows."
  },
  {
    icon: Scale,
    title: "3. Operator's Mindset (Not Just a Financier)",
    description: "Unlike many financial firms, Brookfield is not just a capital allocator; it's an operator. When they acquire an asset, they bring their deep operational expertise to improve it, increase its cash flow, and enhance its value over the long term. This hands-on approach is a key part of their strategy."
  },
  {
    icon: ThumbsDown,
    title: "4. Patience and a Perpetual Time Horizon",
    description: "Flatt thinks in terms of decades, not quarters. Much of Brookfield's capital is 'perpetual' or very long-term, sourced from its listed partnerships and long-duration private funds. This structure gives them immense flexibility, allowing them to hold assets through entire market cycles without being forced to sell at an inopportune time. This patience allows them to wait for the true value of their contrarian investments to be realized."
  },
];

export default function InvestorBruceFlattPage() {
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
        <h1 className="text-3xl font-bold font-headline">Learn From The Best: Bruce Flatt</h1>
        <p className="text-muted-foreground mt-2">Learn from the CEO of Brookfield Corporation, a master of contrarian, value-based investing in real assets.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Brain className="h-4 w-4" />
          <AlertTitle className="font-headline">The Quiet Giant of Real Assets</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>Bruce Flatt is the CEO of Brookfield Corporation (BN), one of the largest and most successful alternative asset managers in the world. Often called the 'Canadian Warren Buffett,' Flatt operates with a low public profile but has a stellar long-term track record. His investment philosophy is a masterclass in contrarian value investing, applied to the world of real assets—the essential infrastructure that underpins the global economy.</p>
            <p className="font-semibold">Under his leadership since 2002, Brookfield Corporation has grown from a niche Canadian firm into a global powerhouse by consistently applying a disciplined, value-oriented approach to buying high-quality assets when they are out of favor.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">The Flatt Philosophy: Core Principles</CardTitle>
            <CardDescription>Flatt's strategy is built on a foundation of contrarianism, operational expertise, and long-term thinking.</CardDescription>
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
            <CardDescription>Flatt's career is marked by bold, contrarian moves that have paid off over the long term.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border bg-card">
                  <h4 className="font-semibold text-green-600 flex items-center"><ThumbsUp className="mr-2 h-4 w-4" />The Big Win: Post-9/11 Real Estate</h4>
                  <p className="text-sm text-muted-foreground mt-1">In the aftermath of the 9/11 attacks, when fear about the future of major city downtowns was at its peak, Brookfield (which already owned the World Financial Center, adjacent to Ground Zero) made the contrarian decision to double down and reinvest heavily in prime office real estate in New York and London. Flatt believed that great cities are resilient and that the fear was temporary. They acquired high-quality assets at a deep discount, and as the cities recovered, these investments generated enormous returns.</p>
              </div>
               <div className="p-4 rounded-lg border bg-card">
                  <h4 className="font-semibold text-destructive flex items-center"><ThumbsDown className="mr-2 h-4 w-4" />The Big Loss: General Growth Properties (GGP)</h4>
                  <p className="text-sm text-muted-foreground mt-1">During the 2008 financial crisis, Brookfield made a huge investment in GGP, one of the largest mall owners in the U.S., which was in bankruptcy. While the investment ultimately proved to be very profitable after a long and complex restructuring, Flatt has admitted they misjudged the speed and severity of the credit market collapse. The initial investment lost a significant amount of value before the situation stabilized, serving as a powerful lesson on the dangers of leverage and the difficulty of timing a bottom perfectly, even when your long-term thesis on asset quality is correct.</p>
              </div>
          </CardContent>
           <CardFooter>
            <Alert variant="default" className="w-full bg-callout text-callout-foreground border-blue-200 dark:border-blue-800">
                <Info className="h-4 w-4" />
                <AlertTitle className="font-semibold">Performance and Legacy</AlertTitle>
                <AlertDescription>
                 Flatt's contrarian, value-driven strategy has delivered exceptional long-term results. From 2002, when he became CEO, through the end of 2023, Brookfield Corporation (BN) stock has delivered a compounded annual return of approximately 16%, significantly outperforming the S&P 500's return of around 10% over the same period. His success is a testament to the power of combining patient capital with operational expertise.
                </AlertDescription>
            </Alert>
           </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">Flatt's Guiding Wisdom</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 prose-sm max-w-none dark:prose-invert">
             <blockquote className="border-l-4 pl-4 italic">"The best opportunities are often found in situations where others are forced to sell."</blockquote>
             <blockquote className="border-l-4 pl-4 italic">"Our most important advantage is our long-term perspective. We don't have to sell assets at the bottom of a cycle."</blockquote>
          </CardContent>
        </Card>
        
        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you've learned about Bruce Flatt's real-asset focused approach, continue exploring the wisdom of other great investors.
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
