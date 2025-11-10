'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Brain, Target, ArrowRight, Lightbulb, Pencil, Send, Info } from 'lucide-react';
import Link from 'next/link';

export default function ActionFreedomGoalMappingPage() {
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
        <h1 className="text-3xl font-bold font-headline">Capstone: Map Your Freedom Goals</h1>
        <p className="text-muted-foreground mt-2">An exercise to make your 'Freedom Account' tangible by connecting it to your real-life goals.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Brain className="h-4 w-4" />
          <AlertTitle className="font-headline">The Goal of This Exercise</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>The term 'hyper-accumulation' can feel abstract. This exercise is designed to give your taxable brokerage account a clear and powerful purpose. By mapping specific, exciting life goals to this account, you transform it from a simple investment vehicle into a tangible 'Freedom Account'—a tool to design the life you want, long before traditional retirement age.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
                <Pencil className="mr-2 h-5 w-5 text-primary"/>
                The 3-Step Freedom Goal Map
            </CardTitle>
            <CardDescription>Take 10 minutes with a notebook or a new document to work through these steps.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 border rounded-lg bg-card shadow-sm">
              <h3 className="font-semibold text-lg flex items-center mb-2">
                <span className="font-bold text-primary mr-3">1.</span> List Your Pre-Retirement Life Goals
              </h3>
              <p className="text-sm text-muted-foreground mb-4">Write down 1-3 major life goals you'd like to fund or achieve before age 59½. Be specific and dream big. These are the things your Freedom Account can make possible.</p>
              <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
                <li><strong>Example 1:</strong> "Take a 6-month sabbatical to travel in 10 years."</li>
                <li><strong>Example 2:</strong> "Save enough to have a 'bridge fund' to cover 2 years of expenses, allowing me to retire early at 55."</li>
                <li><strong>Example 3:</strong> "Build a $100,000 down payment for a dream home in 7 years."</li>
                <li><strong>Example 4:</strong> "Start my own business and have enough saved to cover personal living expenses for the first 18 months."</li>
              </ul>
            </div>
            
            <div className="p-4 border rounded-lg bg-card shadow-sm">
              <h3 className="font-semibold text-lg flex items-center mb-2">
                <span className="font-bold text-primary mr-3">2.</span> Estimate Their Costs
              </h3>
              <p className="text-sm text-muted-foreground mb-4">Put a rough number to each goal in today's dollars. This doesn't need to be perfect; a ballpark estimate is fine.</p>
               <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
                    <li><strong>Sabbatical:</strong> "6 months of living expenses = $30,000"</li>
                    <li><strong>Early Retirement Bridge:</strong> "2 years of expenses = $100,000"</li>
                    <li><strong>Down Payment:</strong> "$100,000"</li>
              </ul>
            </div>

             <div className="p-4 border rounded-lg bg-card shadow-sm">
              <h3 className="font-semibold text-lg flex items-center mb-2">
                <span className="font-bold text-primary mr-3">3.</span> Earmark Your Contributions
              </h3>
              <p className="text-sm text-muted-foreground mb-4">Decide how much of your monthly contribution to your taxable brokerage account should be mentally earmarked for each goal. This gives every dollar a specific job.</p>
               <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
                    <li><strong>Example:</strong> "Of my $1,000 monthly investment, $500 is for the 'Retirement Bridge Fund,' $300 is for the 'House Down Payment,' and $200 is for the 'Sabbatical Fund.'"</li>
              </ul>
            </div>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground">By doing this, your investment isn't just a number on a screen; it's a direct reflection of the life you are actively building for yourself.</p>
          </CardFooter>
        </Card>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">You've Completed This Action!</CardTitle>
                <CardDescription>
                    Now that you have given your Freedom Account a clear purpose, you're ready for the next step in your financial journey.
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
