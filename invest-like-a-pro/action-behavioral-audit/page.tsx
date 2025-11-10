'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Brain, ArrowRight, Lightbulb, Pencil, Search, ListChecks, Info } from 'lucide-react';
import Link from 'next/link';

const biasesList = [
    "Confirmation Bias",
    "Narrative Fallacy",
    "Loss Aversion",
    "FOMO (Fear Of Missing Out)",
    "Overconfidence Bias",
    "Action Bias",
    "Anchoring Bias",
    "Recency Bias",
    "Survivorship Bias"
];

const exerciseSteps = [
    "Review the list of common biases below.",
    "Think about your past investment decisions, both good and bad. Identify at least three separate instances where one of these biases influenced your actions.",
    "For each instance, write down: 1) The name of the bias, 2) A brief summary of what happened (e.g., 'I bought a hot tech stock after seeing it discussed everywhere online'), and 3) The outcome and how you could have overcome it (or how you will in the future).",
    "Reflect on your life right now. Are you currently being affected by any of these biases in real-time? Identify it, and write down one concrete action you can take this week to snap out of it and realign with your long-term plan."
];

export default function ActionBehavioralAuditPage() {
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
        <h1 className="text-3xl font-bold font-headline">Action: Your Behavioral Audit</h1>
        <p className="text-muted-foreground mt-2">A reflective exercise to identify and neutralize your own worst investment enemy: yourself.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Brain className="h-4 w-4" />
          <AlertTitle className="font-headline">The Goal: From Knowledge to Self-Awareness</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>It's easy to spot behavioral biases in others, but incredibly difficult to see them in ourselves. This exercise is designed to bridge that gap. By honestly reflecting on your past decisions and current feelings, you can identify your personal psychological patterns and build a defense against them.</p>
            <p className="font-semibold">This isn't about judging past mistakes; it's about learning from them to make better decisions tomorrow.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
                <Pencil className="mr-2 h-5 w-5 text-primary"/>
                Your 4-Step Behavioral Audit
            </CardTitle>
            <CardDescription>Take 15-20 minutes with a notebook or a new document to work through these steps. Honesty is crucial.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {exerciseSteps.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold shrink-0">{index + 1}</div>
                <p className="pt-1">{step}</p>
              </div>
            ))}
          </CardContent>
          <CardFooter>
            <Alert variant="default" className="w-full">
                <Lightbulb className="h-4 w-4" />
                <AlertTitle className="font-semibold">Example Entry:</AlertTitle>
                <AlertDescription>
                    <p><strong>Bias:</strong> FOMO (Fear Of Missing Out)</p>
                    <p><strong>What Happened:</strong> "During the 2021 crypto bull run, I saw friends making huge profits. I didn't understand the technology but felt I was missing out, so I bought into a popular 'meme coin' near its peak without any real research."</p>
                    <p><strong>Outcome/Solution:</strong> "The coin crashed over 90%. In the future, I will stick to my 'Circle of Competence.' I will not invest in anything I can't explain to a 10-year-old, no matter how much hype surrounds it."</p>
                </AlertDescription>
            </Alert>
          </CardFooter>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle className="font-headline flex items-center">
                    <ListChecks className="mr-2 h-5 w-5 text-primary"/>
                    Reference: The 9 Common Biases
                </CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="list-disc pl-5 grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-2">
                    {biasesList.map(bias => <li key={bias}>{bias}</li>)}
                </ul>
            </CardContent>
        </Card>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    By completing this audit, you've taken a crucial step towards becoming a more rational, disciplined investor.
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
