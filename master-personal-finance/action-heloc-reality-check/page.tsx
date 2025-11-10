'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Home, Brain, CheckCircle, ArrowRight, ShieldAlert, Lightbulb, Info } from 'lucide-react';
import Link from 'next/link';

const exerciseSteps = [
    {
        title: "Step 1: Calculate Your Available Equity",
        description: "This is the simple math. Look up your home's estimated value on a site like Zillow or Redfin, and then find the remaining balance on your mortgage statement.",
        formula: "Current Home Value - Mortgage Balance = Available Equity"
    },
    {
        title: "Step 2: The Job Loss Test",
        description: "This is the most important step. A HELOC adds a new, often variable, monthly payment to your budget. Now, imagine your primary source of income disappears. Ask yourself honestly:",
        question: "If I lost my job tomorrow, could I still comfortably make this new monthly HELOC payment for at least 6 months using only my emergency fund?"
    },
    {
        title: "Step 3: The Asset vs. Consumption Test",
        description: "Finally, be honest about what the debt is for. Is it for a strategic, value-adding home improvement, or is it funding a temporary experience or a depreciating item?",
        question: "Am I using this equity to build a long-term asset (like a strategic home renovation) or for consumption (like a vacation, car, or paying off other spending)?"
    }
];

export default function ActionHelocRealityCheckPage() {
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
        <h1 className="text-3xl font-bold font-headline">Action: The Home Equity Reality Check</h1>
        <p className="text-muted-foreground mt-2">An exercise to honestly assess the risk of using a HELOC before you sign the papers.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Brain className="h-4 w-4" />
          <AlertTitle className="font-headline">The Goal: From "Easy Money" to Real Risk</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>It's easy to view home equity as a pile of cash just sitting there. This exercise is designed to reframe that thinking. Your home equity is a safety buffer, and turning it into debt is a significant decision that transfers risk from your lender back to you. Answering these questions can help you see the real trade-off you're making.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">The 3-Step Reality Check</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {exerciseSteps.map((step) => (
              <div key={step.title} className="p-4 border rounded-lg bg-card shadow-sm">
                <h3 className="font-semibold text-lg">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
                 {step.formula && (
                    <div className="mt-3 p-2 bg-muted rounded-md text-center">
                        <code className="text-sm font-semibold">{step.formula}</code>
                    </div>
                 )}
                 {step.question && (
                    <Alert variant="default" className="mt-4 bg-primary/10 border-primary/30">
                        <ShieldAlert className="h-4 w-4 text-primary" />
                        <AlertTitle className="font-semibold text-primary">Critical Question:</AlertTitle>
                        <AlertDescription className="italic text-primary/90">
                           {step.question}
                        </AlertDescription>
                    </Alert>
                 )}
              </div>
            ))}
          </CardContent>
        </Card>

        <Alert variant="default" className="bg-green-500/10 border-green-500/20">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertTitle className="text-green-700 dark:text-green-300 font-semibold">Making a Sound Decision</AlertTitle>
            <AlertDescription className="text-green-600 dark:text-green-400">
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>If the answer to the job loss test is a confident "yes," and you are using the funds for a strategic, value-adding home improvement, a HELOC might be a reasonable tool for your specific situation.</li>
                    <li>If the answer is "no" or "maybe," it's a major red flag. The risk is likely too high. You are better off saving for your goal in a dedicated savings account rather than putting your home on the line.</li>
                </ul>
            </AlertDescription>
        </Alert>

        <Alert variant="destructive">
            <Lightbulb className="h-4 w-4" />
            <AlertTitle className="font-headline">A Final, Crucial Caution</AlertTitle>
            <AlertDescription>
                <p>Even if you pass this reality check, remember that taking on debt is almost always less optimal than saving for an expense. This exercise is a risk-assessment tool, not an endorsement of borrowing.</p>
                <p className="mt-2 font-semibold">Using a HELOC for a non-essential purpose like a vacation, a car, or other consumer goods is a dangerous financial decision that turns your most valuable asset into a liability for a depreciating or temporary experience.</p>
                <p className="mt-2">The only time to strongly consider a HELOC is for an urgent, necessary repair that prevents further damage (e.g., a leaking roof) when you do not have the cash available. For all other home improvements, the most financially sound path is to save up the cash first.</p>
            </AlertDescription>
        </Alert>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you have a clear understanding of the risks, return to the main roadmap to continue building your financial knowledge.
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
