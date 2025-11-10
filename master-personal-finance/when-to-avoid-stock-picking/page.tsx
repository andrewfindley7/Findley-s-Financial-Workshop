'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { BrainCircuit, BookCheck, ThumbsDown, PiggyBank, ArrowRight, Info } from 'lucide-react';
import Link from 'next/link';

export default function WhenToAvoidStockPickingPage() {
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
        <h1 className="text-3xl font-bold font-headline">When to Avoid Stock Picking</h1>
        <p className="text-muted-foreground mt-2">Understand the most important principle for individual investors to protect their capital.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <BrainCircuit className="h-4 w-4" />
          <AlertTitle className="font-headline">The Core Philosophy: Circle of Competence</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>One of the most crucial principles in investing, championed by legendary investors like Warren Buffett and Peter Lynch, is the concept of the "Circle of Competence." It's the idea that you should only invest in businesses you can genuinely understand.</p>
            <p className="font-bold">Know what you own. If you don't know it, don't own it.</p>
            <p className="font-semibold mt-2">Put simply: If you can't explain what a company does and how it makes money to a 10-year-old in a few sentences, you should not own its stock. Investing outside of your circle of competence is not investing; it's speculating.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">The Dangers of Investing in the Unknown</CardTitle>
            <CardDescription>Venturing outside your circle of competence exposes you to significant, unforced errors.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg bg-red-50 dark:bg-red-900/20 border-red-200">
              <h3 className="font-semibold flex items-center mb-1 text-red-700 dark:text-red-300">
                <ThumbsDown className="mr-2 h-5 w-5" /> Inability to Assess Risk
              </h3>
              <p className="text-sm text-muted-foreground">If you don't understand the industry, the competitive landscape, or the technology, you cannot possibly identify the key risks that could permanently impair the business.</p>
            </div>
            <div className="p-4 border rounded-lg bg-red-50 dark:bg-red-900/20 border-red-200">
              <h3 className="font-semibold flex items-center mb-1 text-red-700 dark:text-red-300">
                <ThumbsDown className="mr-2 h-5 w-5" /> Susceptibility to Hype
              </h3>
              <p className="text-sm text-muted-foreground">When you don't have a firm grasp of a business's fundamentals, you are more likely to be swayed by a compelling story or market euphoria. This often leads to buying at the worst possible time (at the peak of excitement) and panic-selling at the bottom of a downturn based on scary headlines and crowd behavior.</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
              <BookCheck className="mr-2 h-5 w-5 text-primary" />
              The Litmus Test: Could You Explain It?
            </CardTitle>
            <CardDescription>Before you buy any individual stock, ask yourself these simple questions:</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>How does this business make money? Be specific. Is it from advertising, subscriptions, selling widgets?</li>
                <li>Who are its main competitors? What makes this company better than them? Does it have a durable advantage?</li>
                <li>If this company disappeared tomorrow, who would miss it and why? This helps identify its value proposition.</li>
                <li>What are the biggest risks to this business in the next 10 years? Could technology, competition, or regulation disrupt it?</li>
            </ul>
            <p className="mt-4 text-sm text-muted-foreground font-semibold">If you can't answer these questions confidently and without using complex jargon, the company is outside your circle of competence.</p>
          </CardContent>
        </Card>
        
        <Alert variant="default" className="bg-green-50 dark:bg-green-900/20 border-green-300 dark:border-green-700">
          <PiggyBank className="h-4 w-4 text-green-600" />
          <AlertTitle className="font-headline text-green-800 dark:text-green-200">The Best Strategy for Most Investors: Index Funds</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none text-green-700 dark:text-green-300">
            <p>Recognizing the difficulty and time commitment required to properly research individual companies leads to a powerful conclusion for most people: do not try to stock pick at all.</p>
            <p>For the vast majority of investors, the most effective, efficient, and successful long-term strategy is to invest in low-cost, diversified index funds or ETFs. By buying an S&P 500 index fund, for example, you own a small piece of 500 of the largest, most successful companies in the country. You are betting on the long-term growth of the overall economy, not the performance of a single company.</p>
            <p>This approach requires no individual company research, minimizes fees, and has historically outperformed the majority of professional stock pickers over the long run.</p>
          </AlertDescription>
        </Alert>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you understand this key concept, return to the roadmap to continue building your financial knowledge.
                </CardDescription>
            </CardHeader>
            <CardContent>
                 <Button asChild>
                    <Link href={`/roadmaps/master-personal-finance${fromStep ? `#${fromStep}` : ''}`}>
                        Return to The Master Personal Finance Roadmap
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </CardContent>
        </Card>
      </div>
    </>
  );
}
