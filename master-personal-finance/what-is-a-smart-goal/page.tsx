'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Target, ArrowRight, Lightbulb, CheckCircle, HelpCircle, Info } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const smartPrinciples = [
  {
    letter: 'S',
    name: 'Specific',
    question: 'What exactly do I want to accomplish?',
    description: "Your goal should be clear and specific. Vague goals like 'save more money' are hard to act on. A specific goal would be 'Save for a 20% down payment on a house.'",
  },
  {
    letter: 'M',
    name: 'Measurable',
    question: 'How will I know when I’ve reached it?',
    description: "Incorporate numbers into your goal so you can track your progress. Instead of 'save for a down payment,' a measurable goal is 'Save $60,000 for a down payment.'",
  },
  {
    letter: 'A',
    name: 'Achievable',
    question: 'Is this goal realistic with my current resources?',
    description: "Your goal should challenge you but still be possible. Setting a goal to save $60,000 in one year on a $70,000 salary isn't achievable. However, saving that amount over five years might be.",
  },
  {
    letter: 'R',
    name: 'Relevant',
    question: 'Does this goal matter to me and align with my other objectives?',
    description: "Ensure your goal is important to you and fits into your broader life plans. If you're not passionate about homeownership, a goal to save for a down payment isn't relevant and will be hard to stick with.",
  },
  {
    letter: 'T',
    name: 'Time-bound',
    question: 'What is my deadline?',
    description: "Every goal needs a target date. A deadline creates urgency and helps you break the goal down into smaller, monthly or weekly milestones. For example, 'Save $60,000 for a down payment by December 2028.'",
  },
];

export default function WhatIsASmartGoalPage() {
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
        <h1 className="text-3xl font-bold font-headline">What is a SMART Goal?</h1>
        <p className="text-muted-foreground mt-2">Learn the powerful framework for setting clear, actionable, and achievable financial goals.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Lightbulb className="h-4 w-4" />
          <AlertTitle className="font-headline">From Vague Wish to Actionable Plan</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>The SMART framework is a tool that turns vague aspirations into concrete plans. Instead of having a fuzzy idea of what you want, SMART goals force you to define exactly what you're working towards, how you'll get there, and when you expect to arrive. This clarity is the key to motivation and success.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">The 5 Principles of SMART Goals</CardTitle>
            <CardDescription>Each letter in the acronym represents a crucial component of an effective goal.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {smartPrinciples.map(p => (
              <div key={p.name} className="flex items-start gap-4 p-4 border rounded-lg bg-muted/40">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-2xl flex-shrink-0">
                  {p.letter}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{p.name}</h3>
                  <p className="italic text-sm text-muted-foreground mb-2">"{p.question}"</p>
                  <p className="text-sm">{p.description}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        
        <Card className="border-green-500/50 bg-green-50/50 dark:bg-green-900/20">
            <CardHeader>
                <CardTitle className="font-headline text-xl flex items-center text-green-700 dark:text-green-300">
                    <CheckCircle className="mr-2 h-5 w-5"/>Putting It All Together: A SMART Goal Example
                </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                <p><strong>Vague Goal:</strong> "I want to save for retirement."</p>
                <p className="my-4 text-center text-2xl font-bold">&darr;</p>
                <p><strong>SMART Goal:</strong> "I will save <strong>(Specific)</strong> an additional <strong>$5,000 (Measurable)</strong> for retirement by contributing an extra $417 per month to my Roth IRA. This is <strong>(Achievable)</strong> with my current budget. This is <strong>(Relevant)</strong> because I want to retire comfortably. I will achieve this by <strong>December 31st of this year (Time-bound)</strong>."</p>
            </CardContent>
        </Card>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you understand the framework, return to the roadmap to apply this knowledge.
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
