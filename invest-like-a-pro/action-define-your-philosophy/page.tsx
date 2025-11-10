
'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Lightbulb, Pencil, Layers, BrainCircuit, Activity, Info } from 'lucide-react';
import Link from 'next/link';

const exerciseSteps = [
    {
        title: "Step 1: Choose Your Foundational Philosophy",
        description: "Your investment philosophy is your north star. Review the core strategies—Value, Growth, GARP, Passive Indexing, and Contrarian—to find the one that best fits your personality, risk tolerance, and how much time you're willing to commit to research.",
        link: "/education/invest-like-a-pro/types-of-investing",
        linkText: "Review the Investment Philosophies"
    },
    {
        title: "Step 2: Define Your Three Core Tenets",
        description: "Every philosophy has core principles. Based on your choice, what are the 3 non-negotiable rules that will guide your investment decisions? Be specific."
    },
    {
        title: "Step 3: Define Your Circle of Competence",
        description: "This is the most important part of risk management. Honestly assess the industries you understand deeply from your profession or personal passions."
    },
    {
        title: "Step 4: Define What You Will Avoid",
        description: "Equally important is knowing what you don't know. List specific industries or types of businesses you will consciously avoid because they are outside your circle of competence."
    },
    {
        title: "Step 5: Define Your Reaction to Market Psychology",
        description: "Your temperament is just as important as your intellect. How will you react when the market is in a panic or a frenzy? Pre-committing to a rational course of action is your best defense against emotional errors."
    }
];

export default function ActionDefineYourPhilosophyPage() {
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
        <h1 className="text-3xl font-bold font-headline">Action: Define Your Investment Philosophy</h1>
        <p className="text-muted-foreground mt-2">A capstone exercise to create your personal investing policy statement.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Brain className="h-4 w-4" />
          <AlertTitle className="font-headline">The Goal: Build Your Personal Constitution</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>This exercise is designed to be the capstone for the "Define Your Philosophy" section. Its purpose is to force you to synthesize what you've learned into a personal, written investment policy statement. This document will serve as your constitution—a set of principles you can turn to during times of market turmoil or euphoria to keep you disciplined and rational.</p>
            <p className="font-semibold">Take 30 minutes with a notebook or a new document to thoughtfully answer these prompts. The investment philosophy you create here will be a critical component for later capstone exercises, so be sure to save it somewhere accessible.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
                <Pencil className="mr-2 h-5 w-5 text-primary"/>
                Your 5-Step Investment Policy Statement
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {exerciseSteps.map((step) => (
              <div key={step.title} className="p-4 border rounded-lg bg-card shadow-sm">
                <h3 className="font-semibold text-lg">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
                 {step.link && (
                    <div className="mt-4">
                        <Button asChild variant="secondary">
                            <Link href={`${step.link}${fromStep ? `?from=${fromStep}` : ''}`}>
                               {step.linkText} <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                 )}
              </div>
            ))}
          </CardContent>
          <CardFooter>
             <Alert variant="default" className="w-full">
                <Lightbulb className="h-4 w-4" />
                <AlertTitle className="font-semibold">Keep It Accessible</AlertTitle>
                <AlertDescription>
                    Keep this document somewhere you can easily review it. Before making any new investment, run it by your stated principles. When the market is in a panic, read it to remind yourself of the plan you made when you were calm and rational.
                </AlertDescription>
            </Alert>
          </CardFooter>
        </Card>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you have defined your personal philosophy, you are ready to learn from the masters.
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

    
