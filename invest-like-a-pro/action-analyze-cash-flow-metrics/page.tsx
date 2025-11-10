
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Brain, ArrowRight, Lightbulb, FileText, Wind, ShoppingBag, Send, TrendingDown, Info } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const exerciseSteps = [
    {
        title: "Step 1: Reopen Your Company's Filing",
        description: "Reopen the most recent Annual Report (10-K) or Quarterly Report (10-Q) that you have been using."
    },
    {
        title: "Step 2: Navigate to the Statement of Cash Flows",
        description: "Using the document's navigation menu, find the 'Consolidated Statements of Cash Flows'. You will need to look at the two most recent periods reported (e.g., 2023 and 2022)."
    },
    {
        title: "Step 3: Analyze Cash from Operations (CFO)",
        description: "Find the 'Net cash provided by operating activities' line. What is the year-over-year percentage change? Is the company's core business generating more or less cash?",
        icon: Wind
    },
    {
        title: "Step 4: Analyze Cash from Investing (CFI)",
        description: "Find the 'Net cash used in investing activities' line. Is it positive or negative? A negative number is often good, showing the company is investing in its future (e.g., 'Purchase of property, plant, and equipment'). A positive number can be a red flag, indicating the company is selling assets to raise cash.",
        icon: ShoppingBag
    },
    {
        title: "Step 5: Analyze Cash from Financing (CFF) & Capital Returns",
        description: "Find the 'Net cash used in financing activities' line. This section includes cash flows between the company and its owners/lenders, such as issuing or repaying debt. Within this, look for two key numbers: 'Payment of dividends' and 'Repurchases of common stock'. Add these two together to see how much cash was returned directly to shareholders.",
        icon: Send
    },
    {
        title: "Step 6: Calculate Net Shareholder Return",
        description: "A company that is reducing its share count while returning cash is ideal. A company that issues more in stock-based compensation than it repurchases in buybacks is diluting your ownership. For example, if the company returned $100M via buybacks but also issued $50M in new shares (a common practice for employee compensation), the true return to shareholders is much lower than it appears. Reducing the share count increases each owner's claim on future earnings.",
        icon: TrendingDown
    }
];

export default function ActionAnalyzeCashFlowMetricsPage() {
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
        <h1 className="text-3xl font-bold font-headline">Action: Analyze Key Cash Flow Metrics</h1>
        <p className="text-muted-foreground mt-2">A practical exercise to analyze a company's cash generation, reinvestment, and capital return policies.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Brain className="h-4 w-4" />
          <AlertTitle className="font-headline">The Goal: Follow the Money</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>The cash flow statement tells the true story of a business. It shows where cash is coming from and, just as importantly, where it's going. This exercise will help you understand a company's priorities: Is it investing for growth? Is it shareholder-friendly? Or is it struggling to survive?</p>
            <p className="font-semibold">Grab the same notebook or document you've been using to analyze your chosen company. By tracking the flow of cash, you can gain a much deeper insight into a business's health and management's strategy.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
                <FileText className="mr-2 h-5 w-5 text-primary"/>
                Your 6-Step Analysis Task
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
                    After this analysis, what story emerges? An ideal business generates strong and growing cash from operations, uses a portion of that cash to reinvest wisely for the future, and returns the rest to shareholders through dividends and meaningful share buybacks (not just offsetting dilution from stock options). How does your company measure up?
                </AlertDescription>
            </Alert>
          </CardFooter>
        </Card>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you have hands-on experience with all three financial statements, return to the roadmap to learn more.
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
