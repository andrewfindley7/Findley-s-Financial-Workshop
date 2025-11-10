'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Brain, ArrowRight, Lightbulb, Gem, Puzzle, Wind, Target, Info } from 'lucide-react';
import Link from 'next/link';

export default function ActionJarOfSandPage() {
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
        <h1 className="text-3xl font-bold font-headline">Action: Define Your Financial Rocks</h1>
        <p className="text-muted-foreground mt-2">An exercise to translate the 'Jar of Sand' metaphor into a clear, personal financial strategy.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Brain className="h-4 w-4" />
          <AlertTitle className="font-headline">The Goal of This Exercise</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>This exercise is designed to help you move from a vague sense of what's important to a concrete, prioritized list. By clearly defining your "rocks," you can align your financial decisions with your true values and build a plan that's both effective and motivating.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">The 3-Step "Rock" Identification Process</CardTitle>
            <CardDescription>Take 15 minutes with a notebook or a new document to work through these steps.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 border rounded-lg bg-card shadow-sm">
              <h3 className="font-semibold text-lg flex items-center mb-2">
                <span className="font-bold text-primary mr-3">1.</span> Brain Dump: Get It All Out
              </h3>
              <p className="text-sm text-muted-foreground mb-4">Without filtering or judging, list everything that takes up your time, energy, and money. Think about your goals, wants, and regular expenses.</p>
              <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
                <li>Goals: "Save for a house," "Retire early," "Travel to Japan"</li>
                <li>Wants: "New phone," "Dining out with friends," "Go to concerts"</li>
                <li>Responsibilities: "Pay rent," "Groceries," "Car insurance," "Student loan payment"</li>
              </ul>
            </div>
            
            <div className="p-4 border rounded-lg bg-card shadow-sm">
              <h3 className="font-semibold text-lg flex items-center mb-2">
                <span className="font-bold text-primary mr-3">2.</span> Identify Your Rocks
              </h3>
              <p className="text-sm text-muted-foreground mb-4">Review your entire list. Now, you must choose only 3 to 5 items that represent your "rocks." These are your absolute top priorities. If you could only accomplish these things, would you feel like you were on the right track?</p>
              <Alert>
                <Gem className="h-4 w-4" />
                <AlertTitle>Example Rocks</AlertTitle>
                <AlertDescription>
                  <ul className="list-disc pl-5">
                    <li>Becoming debt-free (paying off all high-interest debt).</li>
                    <li>Building a 6-month emergency fund.</li>
                    <li>Saving 15% of my income for retirement.</li>
                  </ul>
                </AlertDescription>
              </Alert>
            </div>

            <div className="p-4 border rounded-lg bg-card shadow-sm">
              <h3 className="font-semibold text-lg flex items-center mb-2">
                <span className="font-bold text-primary mr-3">3.</span> Categorize the Rest
              </h3>
              <p className="text-sm text-muted-foreground mb-4">Everything that isn't a rock is either a pebble or sand. This isn't about eliminating them, but about recognizing their place in the hierarchy.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3 bg-muted/40 rounded-md">
                     <h4 className="font-semibold flex items-center mb-1"><Puzzle className="mr-2 h-4 w-4 text-primary/80"/>Pebbles</h4>
                     <p className="text-xs text-muted-foreground">Necessary responsibilities and important-but-not-critical goals (e.g., monthly bills, groceries, saving for a smaller planned purchase).</p>
                  </div>
                  <div className="p-3 bg-muted/40 rounded-md">
                     <h4 className="font-semibold flex items-center mb-1"><Wind className="mr-2 h-4 w-4 text-primary/80"/>Sand</h4>
                     <p className="text-xs text-muted-foreground">The small, discretionary spending and distractions (e.g., impulse buys, daily coffees, unused subscriptions).</p>
                  </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground">With this prioritized list, you now have the foundation for a financial plan that works. Your "rocks" are what you automate. The "pebbles" are what you budget for. The "sand" is what's left over to enjoy without guilt.</p>
          </CardFooter>
        </Card>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you've identified your top priorities, you're ready for the next step.
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
