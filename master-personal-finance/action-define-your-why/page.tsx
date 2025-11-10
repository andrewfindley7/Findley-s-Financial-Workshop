'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Brain, Target, ArrowRight, Lightbulb, Pencil, Info } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function ActionDefineYourWhyPage() {
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
        <h1 className="text-3xl font-bold font-headline">Action: Define Your 'Why'</h1>
        <p className="text-muted-foreground mt-2">An exercise to connect your budget to your most important life goals.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Brain className="h-4 w-4" />
          <AlertTitle className="font-headline">The Goal of This Exercise</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>A budget without a motivating purpose is just a list of rules destined to be broken. This exercise is designed to give your financial plan a powerful 'why.' By clarifying what you're working towards, you turn budgeting from a chore into a tool for achieving your dreams. This is the fuel that will keep you going when you're tempted to overspend.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
                <Pencil className="mr-2 h-5 w-5 text-primary"/>
                The 5-Minute 'Why' Exercise
            </CardTitle>
            <CardDescription>Take 5 minutes with a notebook or a new document to answer these two questions. Be specific.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 border rounded-lg bg-card shadow-sm">
              <h3 className="font-semibold text-lg flex items-center mb-2">
                <span className="font-bold text-primary mr-3">1.</span> What are 2 of my SHORT-TERM goals (this year)?
              </h3>
              <p className="text-sm text-muted-foreground mb-4">These should be exciting things you can achieve in the near future. Having short-term wins is critical for staying motivated.</p>
              <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
                <li><strong>Example 1:</strong> "Save $1,200 for a weekend trip in 6 months."</li>
                <li><strong>Example 2:</strong> "Pay off my $800 credit card balance completely in the next 4 months."</li>
                <li><strong>Example 3:</strong> "Save $600 for a new phone or gadget I've been wanting."</li>
              </ul>
            </div>
            
            <div className="p-4 border rounded-lg bg-card shadow-sm">
              <h3 className="font-semibold text-lg flex items-center mb-2">
                <span className="font-bold text-primary mr-3">2.</span> What are 2 of my LONG-TERM goals (5+ years)?
              </h3>
              <p className="text-sm text-muted-foreground mb-4">These are the big 'rocks' that will shape your future. They are the reason you are building good financial habits today.</p>
               <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
                <li><strong>Example 1:</strong> "Save a $50,000 down payment for a house in 5 years."</li>
                <li><strong>Example 2:</strong> "Reach a retirement savings balance of $250,000 in the next 10 years."</li>
                <li><strong>Example 3:</strong> "Become completely debt-free, including my student loans, within 7 years."</li>
              </ul>
            </div>
          </CardContent>
          <CardFooter className="flex-col items-start gap-4">
            <Alert>
                <Lightbulb className="h-4 w-4" />
                <AlertTitle className="font-semibold">Put It Somewhere Visible</AlertTitle>
                <AlertDescription>
                    Write these 4 goals down on a sticky note and put it on your computer monitor, your bathroom mirror, or the front of your fridge. The next time you're tempted to make an impulse purchase, look at your list. Ask yourself: "Will this purchase move me closer to my goals, or further away?" This simple act makes your 'why' a part of your daily decision-making process.
                </AlertDescription>
            </Alert>
          </CardFooter>
        </Card>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you have a clear 'why,' you're better equipped to create a budget that serves your goals.
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
