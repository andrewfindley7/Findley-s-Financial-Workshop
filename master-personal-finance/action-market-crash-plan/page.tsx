'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Brain, ArrowRight, Lightbulb, Pencil, Repeat, TrendingDown, CheckCircle, Info } from 'lucide-react';
import Link from 'next/link';

const steps = [
  {
    title: "Step 1: Reflect on the Past",
    description: "Think about the last major market downturn you remember (e.g., the 2020 COVID crash, the 2008 financial crisis). On a piece of paper or in a document, answer these questions honestly:",
    questions: [
      "How did I feel when I saw my portfolio value drop?",
      "What actions did I take? (Did I sell, buy more, or do nothing?)",
      "What was the financial outcome of those actions?",
      "What do I wish I had done differently?"
    ]
  },
  {
    title: "Step 2: Create a Plan for the Future",
    description: "Now, create your 'In Case of Market Crash' personal action plan. Write down your answers to the following:",
    questions: [
        "My financial plan is built for a timeframe of ______ years. I understand that volatility is a normal part of the journey.",
        "When the market falls by more than 20%, my primary action will be to __________ (e.g., 'do nothing and stick to my plan,' 'look for opportunities to buy more').",
        "The one action I will not take is __________ (e.g., 'panic-sell my long-term investments').",
        "I will remind myself of the historical data: Every bear market in U.S. history has been followed by a recovery to new all-time highs."
    ]
  }
];

export default function ActionMarketCrashPlanPage() {
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
        <h1 className="text-3xl font-bold font-headline">Action: The Market Crash Plan</h1>
        <p className="text-muted-foreground mt-2">A reflective exercise to prepare your mindset for the next inevitable market downturn.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Brain className="h-4 w-4" />
          <AlertTitle className="font-headline">The Goal: From Reactive Fear to Proactive Strategy</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>It's easy to say you'll be greedy when others are fearful, but it's incredibly hard to do when your life savings are on the line. This exercise is designed to bridge that gap. By confronting your past emotional reactions and creating a written plan before the next crash, you are pre-committing to a rational course of action. This document becomes your anchor in a storm.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
                <Pencil className="mr-2 h-5 w-5 text-primary"/>
                The 2-Step Behavioral Action Plan
            </CardTitle>
            <CardDescription>Take 15 minutes to write down your honest answers to these prompts.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {steps.map((step) => (
              <div key={step.title} className="p-4 border rounded-lg bg-card shadow-sm">
                <h3 className="font-semibold text-lg">{step.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{step.description}</p>
                <ul className="list-disc pl-5 space-y-2 text-sm font-medium">
                  {step.questions.map((q, i) => <li key={i}>{q}</li>)}
                </ul>
              </div>
            ))}
          </CardContent>
           <CardFooter>
            <Alert variant="default" className="bg-green-500/10 border-green-500/20">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertTitle className="text-green-700 dark:text-green-300 font-semibold">Keep Your Plan Accessible</AlertTitle>
                <AlertDescription className="text-green-600 dark:text-green-400">
                   Save this document somewhere you can easily find it. The next time the market is in a panic, your job is simple: take a deep breath, and read your own plan.
                </AlertDescription>
            </Alert>
           </CardFooter>
        </Card>
        
        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">You've Completed This Action!</CardTitle>
                <CardDescription>
                    By preparing for the storm, you've taken a massive step towards ensuring your long-term success as an investor.
                </CardDescription>
            </CardHeader>
            <CardContent>
                 <Button asChild>
                    <Link href={`/roadmaps/master-personal-finance${fromStep ? `?from=${fromStep}` : ''}`}>
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
