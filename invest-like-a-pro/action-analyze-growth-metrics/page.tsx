'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Brain, ArrowRight, Lightbulb, FileText, TrendingUp, Users, Info } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const exerciseSteps = [
    {
        title: "Step 1: Open Your Chosen Company's Filing",
        description: "Reopen the most recent Annual Report (10-K) or Quarterly Report (10-Q) that you located in the previous 'Locate Financial Statements' exercise."
    },
    {
        title: "Step 2: Navigate to the Income Statement",
        description: "Using the document's navigation menu, find the 'Consolidated Statements of Income'. You will need to look at the two most recent periods reported (e.g., 2023 and 2022)."
    },
    {
        title: "Step 3: Calculate Top-Line Growth",
        description: "Find the 'Total Revenue' or 'Total Net Sales' line. Calculate the year-over-year percentage growth.",
        formula: "((Current Year Revenue / Previous Year Revenue) - 1) * 100%"
    },
    {
        title: "Step 4: Calculate Bottom-Line Growth",
        description: "Find the 'Net Income' line. Calculate the year-over-year percentage growth of the company's final profit.",
        formula: "((Current Year Net Income / Previous Year Net Income) - 1) * 100%"
    },
    {
        title: "Step 5: Analyze Share Dilution",
        description: "Find the 'Diluted Weighted Average Shares Outstanding' line. Calculate the percentage change. A negative number is good (buybacks), while a positive number means your ownership was diluted.",
        formula: "((Current Year Shares / Previous Year Shares) - 1) * 100%"
    }
];

export default function ActionAnalyzeGrowthMetricsPage() {
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
        <h1 className="text-3xl font-bold font-headline">Action: Analyze Key Growth Metrics</h1>
        <p className="text-muted-foreground mt-2">A practical exercise to apply what you've learned by calculating key metrics from a real income statement.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Brain className="h-4 w-4" />
          <AlertTitle className="font-headline">The Goal: From Reading to Analyzing</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>You've learned how to read an income statement. Now, it's time to become an analyst. This exercise will guide you through calculating three of the most important metrics that tell the story of a company's growth and shareholder-friendliness.</p>
            <p className="font-semibold">Grab the same notebook or document you've been using to analyze your chosen company. We are building a complete dossier on this business, and you will use these notes later to form a more informed thesis.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
                <FileText className="mr-2 h-5 w-5 text-primary"/>
                Your 5-Step Analysis Task
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {exerciseSteps.map((step) => (
              <div key={step.title} className="p-4 border rounded-lg bg-card shadow-sm">
                <h3 className="font-semibold text-lg">{step.title}</h3>
                <p className="text-muted-foreground text-sm mt-1">{step.description}</p>
                 {step.formula && (
                    <div className="mt-3 p-2 bg-muted rounded-md text-center">
                        <code className="text-sm font-semibold">{step.formula}</code>
                    </div>
                 )}
              </div>
            ))}
          </CardContent>
           <CardFooter>
             <Alert variant="default" className="w-full">
                <Lightbulb className="h-4 w-4" />
                <AlertTitle className="font-semibold">Synthesize Your Findings</AlertTitle>
                <AlertDescription>
                    After calculating these three numbers, what story do they tell? Is the company growing its sales and profits? Is it doing so while also reducing the number of shares (a great sign) or by diluting existing shareholders (a red flag)? Write a one-sentence conclusion based on your findings.
                </AlertDescription>
            </Alert>
           </CardFooter>
        </Card>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you have hands-on experience analyzing an income statement, you're ready for the next lesson.
                </CardDescription>
            </CardHeader>
            <CardContent>
                 <Button asChild>
                    <Link href={`/roadmaps/invest-like-a-pro${fromStep ? `?from=${fromStep}` : ''}`}>
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
