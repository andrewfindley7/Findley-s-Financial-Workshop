'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Brain, ArrowRight, Lightbulb, FileText, Wallet, Package, ShieldCheck, Info } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const exerciseSteps = [
    {
        title: "Step 1: Reopen Your Company's Filing",
        description: "Reopen the most recent Annual Report (10-K) or Quarterly Report (10-Q) that you have been using."
    },
    {
        title: "Step 2: Navigate to the Balance Sheet",
        description: "Using the document's navigation menu, find the 'Consolidated Balance Sheets'. You will need to look at the two most recent periods reported (e.g., 2023 and 2022)."
    },
    {
        title: "Step 3: Analyze Cash & Liquidity",
        description: "Find the 'Cash and cash equivalents' line. This line item often includes short-term investments. Calculate the percentage change year-over-year. Is the company's cash position growing or shrinking?",
        icon: Wallet
    },
    {
        title: "Step 4: Analyze Inventory",
        description: "Find the 'Inventories' line. Calculate its percentage change year-over-year. Is inventory growing much faster than sales? (Refer back to the sales growth you calculated previously). A rapid rise in inventory can be a red flag for slowing demand.",
        icon: Package
    },
    {
        title: "Step 5: Analyze Debt Levels",
        description: "Find the 'Short-term debt' and 'Long-term debt' lines. Add them together to get Total Debt. How has this figure changed year-over-year? Is the debt growing faster than the company's assets or profits? (Hint: compare the debt's percentage growth to the percentage growth of revenue or net income).",
        icon: ShieldCheck
    }
];

export default function ActionAnalyzeBalanceSheetMetricsPage() {
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
        <h1 className="text-3xl font-bold font-headline">Action: Analyze Key Balance Sheet Metrics</h1>
        <p className="text-muted-foreground mt-2">A practical exercise to analyze a company's financial health and stability.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Brain className="h-4 w-4" />
          <AlertTitle className="font-headline">The Goal: From Snapshot to Story</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>You've learned how to read a balance sheet. Now, let's put that knowledge to work. This exercise will guide you through calculating key changes in a company's assets and liabilities to tell a story about its financial direction.</p>
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
                <h3 className="font-semibold text-lg flex items-center">
                   {step.icon && <step.icon className="mr-3 h-5 w-5 text-primary shrink-0" />}
                    {step.title}
                </h3>
                <p className="text-muted-foreground text-sm mt-1">{step.description}</p>
              </div>
            ))}
          </CardContent>
           <CardFooter>
             <Alert variant="default" className="w-full">
                <Lightbulb className="h-4 w-4" />
                <AlertTitle className="font-semibold">Synthesize Your Findings</AlertTitle>
                <AlertDescription>
                    After calculating these changes, what story do they tell? Is the company building up cash, or is it burning through it? Is inventory piling up, signaling a potential sales problem? Is the company becoming more or less leveraged? Write a one-sentence conclusion based on your findings.
                </AlertDescription>
            </Alert>
          </CardFooter>
        </Card>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you’ve analyzed a balance sheet, you’re ready for the next lesson.
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
