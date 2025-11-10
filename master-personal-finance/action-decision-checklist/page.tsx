'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Home, Car, Brain, CheckCircle, ArrowRight, Info } from 'lucide-react';
import Link from 'next/link';

const housingQuestions = [
    "Will this payment still be comfortable if my income drops by 20%?",
    "Am I choosing this home based on my genuine needs or because of social pressure and what others have?",
    "Does this housing cost allow me to comfortably continue saving for retirement and other major goals?"
];

const carQuestions = [
    "Do I truly need to finance this car, or could I save for a few more months and buy a reliable used car with cash?",
    "Will this car genuinely add value and joy to my life, or will it just add to my bills and stress?",
    "Does this decision support my bigger financial goals (like saving for a house or investing), or does it sabotage them?"
];

export default function ActionDecisionChecklistPage() {
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
        <h1 className="text-3xl font-bold font-headline">Action: The Major Purchase Decision Checklist</h1>
        <p className="text-muted-foreground mt-2">An exercise to gut-check your decisions on housing and transportation before you commit.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Brain className="h-4 w-4" />
          <AlertTitle className="font-headline">The Goal of This Exercise</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>The numbers and guidelines are important, but your mindset is what ultimately drives your decisions. This checklist is designed to force a pause and help you reflect on the 'why' behind a major purchase. Answering these questions honestly can be the difference between a decision that supports your life goals and one that derails them for years.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
                <Home className="mr-2 h-5 w-5 text-primary"/>
                The Housing Checklist
            </CardTitle>
            <CardDescription>Before you sign a lease or a mortgage, ask yourself:</CardDescription>
          </CardHeader>
          <CardContent>
             <ul className="list-disc pl-5 space-y-4 text-sm">
                {housingQuestions.map((question, i) => <li key={i}>{question}</li>)}
             </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
                <Car className="mr-2 h-5 w-5 text-primary"/>
                The Car Checklist
            </CardTitle>
            <CardDescription>Before you step into a dealership, ask yourself:</CardDescription>
          </CardHeader>
          <CardContent>
             <ul className="list-disc pl-5 space-y-4 text-sm">
                {carQuestions.map((question, i) => <li key={i}>{question}</li>)}
             </ul>
          </CardContent>
        </Card>
        
        <Alert variant="default" className="bg-green-500/10 border-green-500/20">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertTitle className="text-green-700 dark:text-green-300 font-semibold">The Takeaway</AlertTitle>
            <AlertDescription className="text-green-600 dark:text-green-400">
               If your answers to these questions make you feel confident and aligned with your long-term vision, you're likely making a sound decision. If they give you pause, it's a critical sign to reconsider, slow down, and explore other options.
            </AlertDescription>
        </Alert>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you've reflected on these crucial decisions, return to the main roadmap to continue building your financial knowledge.
                </CardDescription>
            </CardHeader>
            <CardContent>
                 <Button asChild>
                    <Link href={`/roadmaps/master-personal-finance${fromStep ? `#${fromStep}` : ''}`}>
                        Return to Master Personal Finance
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </CardContent>
        </Card>

      </div>
    </>
  );
}
