
'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Scale, Info, Layers, BarChart, Activity, ThumbsUp, ThumbsDown } from 'lucide-react';
import Link from 'next/link';

const investingPrinciples = [
  {
    icon: Layers,
    title: "1. Second-Level Thinking",
    description: "This is Marks' most famous concept. First-level thinking is simplistic and superficial (e.g., 'The company's outlook is good, let's buy the stock.'). Second-level thinking is deep, complex, and contrarian. It asks, 'The outlook is good, but everyone thinks that. Is it already priced into the stock? Is the optimism excessive?' To achieve superior results, you have to think differently and better than the consensus."
  },
  {
    icon: Activity,
    title: "2. Understand Where We Are in a Cycle",
    description: "Marks emphasizes that while you can't predict the future, you must have a good sense of where you are in the present. This awareness is not for market timing, but for positioning: knowing when to be aggressive (when fear is high and prices are low) and when to be defensive (when greed is rampant and prices are high).",
  },
  {
    icon: Scale,
    title: "3. The Relationship Between Price and Value",
    description: "A core tenet of value investing. Marks stresses that no asset is so good that it can't become a bad investment if you pay too much for it. The price you pay is the ultimate determinant of your return. The goal is to buy assets for less than their intrinsic value."
  },
  {
    icon: Brain,
    title: "4. The Primacy of Risk Control",
    description: "For Marks, superior investing is not about picking more winners; it's about having fewer losers. The best investors are those who can achieve good returns while taking on less risk. His primary focus is on avoiding permanent loss of capital."
  },
];

export default function InvestorMarksPage() {
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
        <h1 className="text-3xl font-bold font-headline">Learn From The Best: Howard Marks</h1>
        <p className="text-muted-foreground mt-2">Learn from the co-founder of Oaktree Capital Management and his philosophy of second-level thinking and risk control.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Brain className="h-4 w-4" />
          <AlertTitle className="font-headline">The Master of Cycles and Risk</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>Howard Marks is an investor and writer renowned for his insightful and widely read investment memos. As the co-founder of Oaktree Capital Management, a global leader in alternative investments specializing in credit and distressed debt, his philosophy is rooted in a deep understanding of market cycles, credit, and, most importantly, risk.</p>
            <p className="font-semibold">His book, "The Most Important Thing," is considered essential reading. The title is intentionally ironic, as each chapter argues that a different concept is "the most important thing," emphasizing that there is no single secret to success, only a web of interconnected disciplines.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">The Howard Marks Philosophy: Core Principles</CardTitle>
            <CardDescription>Marks' approach is a masterclass in risk management, contrarian thinking, and understanding market psychology.</CardDescription>
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
            <CardDescription>Marks' philosophy is defined by disciplined risk-taking in times of crisis.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border bg-card">
                  <h4 className="font-semibold text-green-600 flex items-center"><ThumbsUp className="mr-2 h-4 w-4" />The Big Win: Distressed Debt in 2008</h4>
                  <p className="text-sm text-muted-foreground mt-1">During the Global Financial Crisis, when fear was at its peak, Oaktree raised one of its largest-ever distressed debt funds. While others were panic-selling, Marks and his team were buying the debt of fundamentally sound companies that the market had priced for bankruptcy. They understood that while the system was in crisis, not every company would fail. This contrarian approach aggressively deploying capital at the moment of maximum pessimism generated billions in profits for Oaktree's clients as the economy and credit markets recovered.</p>
              </div>
              <div className="p-4 rounded-lg border bg-card">
                  <h4 className="font-semibold text-amber-600 flex items-center"><Info className="mr-2 h-4 w-4" />The 'Loss': Errors of Omission</h4>
                  <p className="text-sm text-muted-foreground mt-1">Marks has often stated that Oaktree's biggest investment mistakes have not been the deals they did that went bad, but the great investments they missed because they were too conservative. His disciplined focus on risk control means that he and his firm have passed on many opportunities that went on to be spectacularly successful. This is the inherent trade-off of a "defense-first" investment strategy: you avoid the big losses, but you also miss some of the home runs. It's a lesson in the opportunity cost of being too cautious.</p>
              </div>
          </CardContent>
           <CardFooter className="flex-col items-start gap-4">
            <p className="text-xs text-muted-foreground">In 2019, Brookfield Asset Management acquired a majority stake in Oaktree, aligning two of the world’s most respected value-driven investment firms.</p>
            <Alert variant="default" className="w-full bg-callout text-callout-foreground border-blue-200 dark:border-blue-800">
                <Info className="h-4 w-4" />
                <AlertTitle className="font-semibold">Performance and Legacy</AlertTitle>
                <AlertDescription>
                    As a private asset manager, Oaktree's overall performance isn't as easily tracked as a public mutual fund. However, since inception in 1988, their flagship distressed debt funds have generated an aggregate internal rate of return (IRR) of around 19% net of fees, significantly outperforming market averages and demonstrating the power of their disciplined, risk-controlled approach.
                </AlertDescription>
            </Alert>
           </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">Marks' Most Famous Quotes</CardTitle>
            <CardDescription>These quotes capture his nuanced and risk-aware approach to the market.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 prose-sm max-w-none dark:prose-invert">
             <blockquote className="border-l-4 pl-4 italic">"The most important thing is to know what you don't know."</blockquote>
             <blockquote className="border-l-4 pl-4 italic">"You can't predict. You can prepare."</blockquote>
             <blockquote className="border-l-4 pl-4 italic">"Being too far ahead of your time is indistinguishable from being wrong."</blockquote>
             <blockquote className="border-l-4 pl-4 italic">"Experience is what you got when you didn't get what you wanted."</blockquote>
          </CardContent>
        </Card>
        
        <Alert variant="default" className="w-full bg-callout text-callout-foreground border-blue-200 dark:border-blue-800">
          <Info className="h-4 w-4" />
          <AlertTitle className="font-headline">Practical Takeaway for Individual Investors</AlertTitle>
          <AlertDescription>
            Marks' core lesson is to think independently, manage your risk aggressively, and always consider what could go wrong. Instead of asking 'What's the upside?', a Marks-influenced investor first asks, 'What's the downside, and can I live with it?'
          </AlertDescription>
        </Alert>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you've learned from Howard Marks' risk-focused philosophy, continue exploring the wisdom of other great investors.
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
