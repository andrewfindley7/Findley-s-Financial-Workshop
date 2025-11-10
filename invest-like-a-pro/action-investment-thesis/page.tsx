'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Brain, ArrowRight, Lightbulb, FileText, CheckCircle, Target, Info } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const exerciseSteps = [
    {
        title: "Step 1: Review Your Company Dossier",
        description: "Review all the notes you've taken on your chosen company from the previous exercises: growth metrics, balance sheet health, and cash flow analysis."
    },
    {
        title: "Step 2: Revisit Your Investment Philosophy",
        description: "Open the personal investment policy statement you created in the 'Define Your Philosophy' exercise. Remind yourself of your core tenets, your circle of competence, and what you want to avoid."
    },
    {
        title: "Step 3: Connect the Dots",
        description: "Now, synthesize these two streams of thought by answering the following questions in your notes:",
        questions: [
            "Does this business's quality (e.g., margins, returns on capital, debt levels) align with the principles of your chosen philosophy?",
            "Based on the financial statements, what is the single biggest strength of this business?",
            "What is its single biggest weakness or risk?",
            "Does this company fit comfortably within your defined Circle of Competence?"
        ]
    },
    {
        title: "Step 4: Formulate a Working Thesis",
        description: "Based on your analysis, write a single paragraph that summarizes your initial investment thesis. This is not your final decision, but a preliminary conclusion based on your understanding of the business's quality. Try to support each claim with a data point from your analysis.",
    }
];

export default function ActionInvestmentThesisPage() {
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
        <h1 className="text-3xl font-bold font-headline">Action: Form Your Initial Investment Thesis</h1>
        <p className="text-muted-foreground mt-2">A capstone exercise to synthesize your research and assess if a company aligns with your philosophy.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Brain className="h-4 w-4" />
          <AlertTitle className="font-headline">The Goal: From Analyst to Thinker</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>You have analyzed the numbers. Now it's time to connect those numbers to your own investment framework. This exercise is designed to force you to step back and ask: "Does this business actually fit the criteria for what I'm looking for?"</p>
            <p className="font-semibold">This step bridges the gap between mechanical analysis and true investment judgment, and the paragraph you create will be a required component of the final 'Investment Memo' capstone. Be sure to save your work.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
                <FileText className="mr-2 h-5 w-5 text-primary"/>
                Your 4-Step Thesis Formulation
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {exerciseSteps.map((step) => (
              <div key={step.title} className="p-4 border rounded-lg bg-card shadow-sm">
                <h3 className="font-semibold text-lg">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
                 {step.questions && (
                    <div className="mt-4 text-sm">
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                            {step.questions.map((q, i) => <li key={i}>{q}</li>)}
                        </ul>
                    </div>
                )}
                 {step.title.includes("Thesis") && (
                    <Alert variant="default" className="mt-4 text-sm bg-callout text-callout-foreground border-blue-200 dark:border-blue-800">
                        <AlertTitle>Example Thesis:</AlertTitle>
                        <AlertDescription>
                            "My thesis is that Example Corp. is a high-quality business with a durable competitive advantage, evidenced by its expanding operating margins (from 12% to 16%). While its debt has increased, it appears manageable relative to its strong operating cash flow. The business aligns with my GARP philosophy, provided I can purchase it at a reasonable valuation. The biggest risk is a slowdown in its core market."
                        </AlertDescription>
                    </Alert>
                 )}
              </div>
            ))}
          </CardContent>
          <CardFooter>
             <Alert variant="default" className="w-full">
                <CheckCircle className="h-4 w-4" />
                <AlertTitle className="font-semibold">Your Takeaway</AlertTitle>
                <AlertDescription>
                    You should now have a clear, concise paragraph stating your preliminary view on the company's quality and its fit with your investment style. This sets the stage for the final analysis: valuation.
                </AlertDescription>
            </Alert>
          </CardFooter>
        </Card>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    With your initial thesis formed, you are ready to proceed. Next, you'll learn how to test your thesis through valuation techniques.
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
