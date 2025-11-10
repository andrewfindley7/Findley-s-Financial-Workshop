'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Lightbulb, Pencil, Layers, CheckCircle, XCircle, Info } from 'lucide-react';
import Link from 'next/link';

const exerciseSteps = [
    {
        title: "Step 1: Choose Your Core Asset Classes",
        description: "These are the foundational building blocks of your portfolio that will make up the vast majority (e.g., 80-100%) of your holdings. For most long-term investors, this list is very short.",
        examples: [
            "Domestic Stocks (e.g., via a U.S. Total Stock Market index fund)",
            "International Stocks (e.g., via an international index fund)",
            "Bonds (e.g., via a total bond market fund)",
            "Cash & Cash Equivalents (for your emergency fund and short-term goals)"
        ]
    },
    {
        title: "Step 2: Choose Your 'Satellite' Asset Classes (Optional)",
        description: "These are non-core, often higher-risk or non-productive assets that you might include as a small, speculative portion of your portfolio (e.g., 0-5%). The goal of this allocation is not to fund your retirement, but for learning or to potentially capture asymmetric upside. Many great investors, including Warren Buffett and John Bogle, would argue this allocation should be 0%.",
        examples: [
            "Real Estate (e.g., via REITs)",
            "Commodities (e.g., Gold)",
            "Cryptocurrency",
            "Individual Stocks (if your core is index funds)"
        ]
    },
    {
        title: "Step 3: Justify Your Choices",
        description: "For each asset class you chose in steps 1 and 2, write one or two sentences explaining why it belongs in your portfolio and how it aligns with your investment philosophy. Be honest with yourself.",
        examples: [
            "Example (Value Investor): 'I am choosing to allocate 10% to individual stocks that meet my criteria because my philosophy is based on buying wonderful businesses at fair prices, and this allows me to act on high-conviction ideas.'",
            "Example (Passive Investor): 'My core will be 100% in low-cost index funds because my philosophy is to capture market returns at the lowest possible cost. I will not have any satellite assets because I do not believe in speculation.'"
        ]
    },
    {
        title: "Step 4: Define What You Will Not Own",
        description: "This is a critical step in defining your discipline. Based on your philosophy and circle of competence, explicitly list the asset classes or specific investments you will consciously avoid. This prevents 'style drift' and protects you from making emotional decisions based on hype.",
        examples: [
            "Example: 'I will not own cryptocurrency because it is a non-productive asset and I cannot value it.'",
            "Example: 'I will not own individual biotech stocks because they are outside my circle of competence.'"
        ]
    }
];

export default function ActionAssetClassSelectionPage() {
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
        <h1 className="text-3xl font-bold font-headline">Action: Define Your Asset Classes</h1>
        <p className="text-muted-foreground mt-2">A capstone exercise to define the building blocks of your portfolio based on your investment philosophy.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Brain className="h-4 w-4" />
          <AlertTitle className="font-headline">The Goal: From Theory to a Personal Blueprint</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>You've learned about different investment philosophies and the wide array of asset classes available. This exercise is designed to bridge the gap between theory and your actual portfolio. Its purpose is to force you to make conscious, deliberate choices about what you will and will not own, and to ensure those choices are in perfect alignment with the investment philosophy you've been developing.</p>
            <p className="font-semibold">Take 20-30 minutes with a notebook or a new document to thoughtfully work through these steps. The asset allocation blueprint you create here will be a critical component for later capstone exercises, so be sure to save it somewhere accessible.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
                <Pencil className="mr-2 h-5 w-5 text-primary"/>
                Your 4-Step Asset Allocation Blueprint
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {exerciseSteps.map((step, index) => (
              <div key={step.title} className="p-4 border rounded-lg bg-card shadow-sm">
                <h3 className="font-semibold text-lg">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
                 {step.examples && (
                    <div className="mt-4 text-sm">
                        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                            {step.examples.map((ex, i) => <li key={i}>"{ex}"</li>)}
                        </ul>
                    </div>
                )}
              </div>
            ))}
          </CardContent>
          <CardFooter>
             <Alert variant="default" className="w-full bg-callout text-callout-foreground border-blue-200 dark:border-blue-800">
                <Lightbulb className="h-4 w-4" />
                <AlertTitle className="font-semibold">The Takeaway: Discipline Through Definition</AlertTitle>
                <AlertDescription>
                    By writing this down, you create a clear set of rules for yourself. When the next 'hot' investment comes along that isn't on your list of approved assets, you'll have the discipline to say 'no,' because it violates your pre-committed plan. This is how you protect yourself from your own worst impulses.
                </AlertDescription>
            </Alert>
          </CardFooter>
        </Card>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you have defined your asset allocation strategy, you are ready to learn about the specifics of reading financial statements.
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
