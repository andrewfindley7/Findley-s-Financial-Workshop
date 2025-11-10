'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Lightbulb, Pencil, User, Users, Info } from 'lucide-react';
import Link from 'next/link';

const exerciseSteps = [
    {
        title: "Step 1: Choose Your Top 1-3 Mentors",
        description: "From the investors you've just studied, select the one to three who resonated with you the most. You don't have to agree with everything they've said, but their core philosophy should align with your own temperament and goals."
    },
    {
        title: "Step 2: Explain Your 'Why'",
        description: "For each investor you chose, write one or two paragraphs explaining *why* their approach appeals to you. Is it their emphasis on risk control? Their focus on quality? Their contrarian nature? Be specific."
    },
    {
        title: "Step 3: Identify Your Borrowed Principles",
        description: "List at least three specific, actionable principles you will borrow from your chosen mentors. These will become pillars of your own investment philosophy."
    },
    {
        title: "Step 4: Define How You Will Apply Them",
        description: "For each principle, write down how you will apply it. For example, if you chose Buffett's 'Circle of Competence,' you might write, 'I will only invest in software and consumer goods companies because my professional experience gives me an edge in understanding them.'"
    }
];

export default function ActionSynthesizeMentorsPage() {
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
        <h1 className="text-3xl font-bold font-headline">Action: Synthesize Your Mentors</h1>
        <p className="text-muted-foreground mt-2">A capstone exercise to reflect on the great investors and define your own path.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Brain className="h-4 w-4" />
          <AlertTitle className="font-headline">Standing on the Shoulders of Giants</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>You don't need to reinvent the wheel to be a successful investor. The most effective approach is to learn from the masters who came before you, understand their core principles, and then assemble a philosophy that fits your own personality. As Isaac Newton said, "If I have seen further, it is by standing on the shoulders of giants."</p>
            <p className="font-semibold">This exercise is designed to help you identify which giants' shoulders you want to stand on. Take 30 minutes with a notebook or a new document to thoughtfully work through these steps. The investment philosophy you create here will be a critical component for later capstone exercises, so be sure to save it somewhere accessible.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
                <Pencil className="mr-2 h-5 w-5 text-primary"/>
                Your 4-Step Mentorship Synthesis
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {exerciseSteps.map((step, index) => (
              <div key={step.title} className="p-4 border rounded-lg bg-card shadow-sm">
                <h3 className="font-semibold text-lg">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
                 {index === 2 && (
                    <Alert variant="default" className="mt-4 text-sm bg-callout text-callout-foreground border-blue-200 dark:border-blue-800">
                        <AlertTitle>Example Principles:</AlertTitle>
                        <AlertDescription>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li>"From Buffett: Only buy businesses with a durable competitive moat."</li>
                                <li>"From Munger: Invert, always invert. I will always write down the bear case for a stock before I buy it."</li>
                                <li>"From Bogle: Minimize costs at all costs. My core portfolio will be built on low-cost index funds."</li>
                            </ul>
                        </AlertDescription>
                    </Alert>
                 )}
              </div>
            ))}
          </CardContent>
        </Card>

        <Alert variant="default" className="w-full bg-callout text-callout-foreground border-blue-200 dark:border-blue-800">
            <Lightbulb className="h-4 w-4" />
            <AlertTitle className="font-semibold">The Takeaway</AlertTitle>
            <AlertDescription>
                By completing this exercise, you're not just copying others; you are actively constructing your own investment identity. This personal framework will be your most valuable asset in navigating the markets with discipline and confidence.
            </AlertDescription>
        </Alert>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    With your personal philosophy taking shape, you are now ready to start building your analytical toolkit.
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
