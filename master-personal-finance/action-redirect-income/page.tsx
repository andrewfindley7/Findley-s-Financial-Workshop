'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Send, Zap, Brain, ArrowRight, Lightbulb, RotateCw, Info } from 'lucide-react';
import Link from 'next/link';

const steps = [
  {
    title: "Step 1: Write Down Your 'Raise'",
    description: "Look up your old total monthly debt payments. This is the amount you were sending to your creditors every single month. Write this number down. This is your 'debt-free dividend', a raise you've given yourself.",
    example: "Example: $450 (credit card) + $300 (car loan) = $750/month."
  },
  {
    title: "Step 2: Give Your Money a New Job",
    description: "Decide where this money will go now. Don't let it get absorbed back into your lifestyle. The most powerful choices are building your emergency fund or supercharging your investments.",
    example: "Example: 'My $750/month will now be split: $350 to my emergency fund and $400 to my Roth IRA.'"
  },
  {
    title: "Step 3: Automate It, Immediately",
    description: "This is the most critical step. Log into your bank account right now. Set up a new automatic, recurring transfer for your 'debt-free dividend' to your savings or brokerage account. Schedule it for the day after your payday. Do not wait.",
    example: "Set up a recurring transfer of $750 from Checking to Savings on the 1st of every month."
  }
];

export default function ActionRedirectYourIncomePage() {
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
        <h1 className="text-3xl font-bold font-headline">Action: Redirect Your Income</h1>
        <p className="text-muted-foreground mt-2">An exercise to immediately put your old debt payments to work for your future.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Brain className="h-4 w-4" />
          <AlertTitle className="font-headline">The Goal: Lock in Your Gains</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>The moment you make your final debt payment is a moment of immense financial power. You have freed up a significant portion of your income. This exercise is designed to help you capture that power immediately, before it disappears into lifestyle creep. By giving your old debt payment a new job, you transition from defense (paying off debt) to offense (building wealth).</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
                <Zap className="mr-2 h-5 w-5 text-primary"/>
                The 3-Step Income Redirection Plan
            </CardTitle>
            <CardDescription>Complete these three steps before your final debt payment even clears.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {steps.map((step, index) => (
              <div key={step.title} className="p-4 border rounded-lg bg-card shadow-sm">
                <h3 className="font-semibold text-lg">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
                 {step.example && (
                    <div className="mt-3 p-2 bg-muted rounded-md text-center">
                        <code className="text-sm font-semibold">{step.example}</code>
                    </div>
                 )}
              </div>
            ))}
          </CardContent>
           <CardFooter>
            <Alert variant="default" className="bg-green-500/10 border-green-500/20">
                <Lightbulb className="h-4 w-4 text-green-600" />
                <AlertTitle className="text-green-700 dark:text-green-300 font-semibold">The Power of Automation</AlertTitle>
                <AlertDescription className="text-green-600 dark:text-green-400">
                   By automating this transfer, you make your most important financial decision once. You don't have to rely on willpower each month. You've created a system that builds wealth for you automatically.
                </AlertDescription>
            </Alert>
           </CardFooter>
        </Card>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you have a plan for your freed-up income, return to the main roadmap to continue your financial journey.
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
