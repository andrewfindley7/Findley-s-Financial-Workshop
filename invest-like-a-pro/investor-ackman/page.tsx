'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Megaphone, Target, Info, Scale, ThumbsDown, ThumbsUp } from 'lucide-react';
import Link from 'next/link';

const investingPrinciples = [
  {
    icon: Megaphone,
    title: "1. Activist Investing: Driving Change from Within",
    description: "This is Ackman's signature strategy. Instead of passively holding stocks, Pershing Square takes large, concentrated stakes in a handful of public companies and then uses its influence as a major shareholder to push for changes it believes will unlock value. This can include replacing management, spinning off divisions, or changing the company's entire strategy."
  },
  {
    icon: Target,
    title: "2. Deeply Concentrated, High-Conviction Bets",
    description: "Ackman runs an extremely focused portfolio, often holding only 8-12 stocks. This means each investment is a high-conviction bet that has been subjected to months or even years of intense research. When he invests, he bets big."
  },
  {
    icon: Scale,
    title: "3. Focus on Simple, Predictable, Cash-Flow-Generative Businesses",
    description: "Despite his aggressive activist tactics, Ackman's target companies are often what he calls 'simple, predictable, free-cash-flow-generative, dominant companies.' He looks for high-quality businesses with strong moats that he believes are underperforming due to poor management or strategy, not because the underlying business is bad."
  },
  {
    icon: ThumbsDown,
    title: "4. The Famous Short-Seller",
    description: "While most of his fame comes from his long investments, Ackman has also made several high-profile, multi-billion dollar short bets against companies he believes are fraudulent or fundamentally flawed. His multi-year public battle against Herbalife was ultimately unsuccessful, but his successful bet against the bond market in 2020 demonstrated his skill in this area."
  },
];

export default function InvestorAckmanPage() {
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
        <h1 className="text-3xl font-bold font-headline">Learn From The Best: Bill Ackman</h1>
        <p className="text-muted-foreground mt-2">Learn from the high-profile activist investor and founder of Pershing Square Capital Management.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Brain className="h-4 w-4" />
          <AlertTitle className="font-headline">The Activist Investor</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>Bill Ackman is one of the most well-known and often controversial investors of his generation. Through his hedge fund, Pershing Square, he practices a form of activist investing. Unlike investors who buy and hold, Ackman takes large positions in companies and then publicly and privately pressures their boards and management teams to make significant changes to "unlock" what he sees as hidden shareholder value. His polarizing communication style often draws significant media attention to his campaigns.</p>
            <p className="font-semibold">His career is a study in high-stakes, high-conviction investing, with both spectacular successes and dramatic public failures.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">The Ackman Philosophy: Core Principles</CardTitle>
            <CardDescription>Ackman's strategy is a unique blend of deep value analysis and aggressive corporate activism.</CardDescription>
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
            <CardDescription>Ackman's public campaigns provide powerful case studies in both success and failure.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border bg-card">
                  <h4 className="font-semibold text-green-600 flex items-center"><ThumbsUp className="mr-2 h-4 w-4" />The Big Win: Canadian Pacific Railway</h4>
                  <p className="text-sm text-muted-foreground mt-1">Ackman saw a sleepy, underperforming railroad company and launched a proxy battle to replace its CEO with a legendary railroad executive, Hunter Harrison. The subsequent turnaround was enormously successful, leading to a more than 1,000% return for Pershing Square.</p>
              </div>
              <div className="p-4 rounded-lg border bg-card">
                  <h4 className="font-semibold text-destructive flex items-center"><ThumbsDown className="mr-2 h-4 w-4" />The Big Loss: Valeant Pharmaceuticals</h4>
                  <p className="text-sm text-muted-foreground mt-1">Ackman made a huge bet on Valeant, a company that grew through debt-fueled acquisitions and massive price hikes on its drugs. When the business model came under regulatory scrutiny and was exposed as unsustainable, the stock collapsed, costing Pershing Square billions.</p>
              </div>
               <div className="p-4 rounded-lg border bg-card md:col-span-2">
                  <h4 className="font-semibold text-primary flex items-center"><ThumbsUp className="mr-2 h-4 w-4" />The Great Short: COVID-19 Hedges</h4>
                  <p className="text-sm text-muted-foreground mt-1">In early 2020, Ackman became convinced the market was underestimating the economic impact of the pandemic. He purchased credit default swaps a form of insurance against corporate debt defaults for just $27 million. As the market crashed, these hedges became worth $2.6 billion, a 100-to-1 return that protected his fund from the downturn.</p>
              </div>
          </CardContent>
           <CardFooter>
            <Alert variant="default" className="w-full bg-callout text-callout-foreground border-blue-200 dark:border-blue-800">
                <Info className="h-4 w-4" />
                <AlertTitle className="font-semibold">The Lesson & Performance</AlertTitle>
                <AlertDescription>
                  <p>Ackman's career shows that a concentrated, activist strategy can produce incredible returns when the analysis is right (Canadian Pacific) but can lead to catastrophic losses when the thesis is flawed (Valeant). This high-stakes approach has led to a volatile but, over the long term, successful track record. From its inception in 2004 through 2023, Pershing Square Holdings has delivered an annualized net return of approximately 16%, significantly outperforming the S&P 500's return over the same period. His public resilience and transparency in analyzing his own mistakes offer a valuable lesson in conviction and humility.</p>
                </AlertDescription>
            </Alert>
           </CardFooter>
        </Card>
        
        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you've learned about Bill Ackman's activist approach, continue exploring the wisdom of other great investors.
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
