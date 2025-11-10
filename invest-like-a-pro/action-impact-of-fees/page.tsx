'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Percent, ArrowRight, Info, Pencil, Lightbulb } from 'lucide-react';
import Link from 'next/link';
import { InvestmentManagementFeeCalculator } from '@/components/calculators/InvestmentManagementFeeCalculator';
import { useSearchParams } from 'next/navigation';

const exerciseSteps = [
    {
        step: 1,
        title: "Step 1: The Average Mutual Fund",
        fee: "1.0%",
        description: "This represents a common actively managed mutual fund. Enter 1.0 into the 'Annual Management Fee' field and observe the results."
    },
    {
        step: 2,
        title: "Step 2: The 'Affordable' Advisor",
        fee: "0.5%",
        description: "This fee seems low, but even a half-percent fee creates a significant drag on performance. Now, change the fee to 0.5 and see the difference."
    },
    {
        step: 3,
        title: "Step 3: The Low-Cost Index Fund",
        fee: "0.05%",
        description: "This represents a typical low-cost index fund ETF. Change the fee to 0.05 to see the dramatic impact of minimizing costs."
    }
];

export default function ActionImpactOfFeesPage() {
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
        <h1 className="text-3xl font-bold font-headline">Action: Analyze the Impact of Fees</h1>
        <p className="text-muted-foreground mt-2">Use the embedded calculator to visualize how management fees erode long-term returns.</p>
      </div>
      <div className="space-y-6">
        <Alert variant="destructive">
          <Percent className="h-4 w-4" />
          <AlertTitle className="font-headline">The Silent Wealth Killer</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>Investment fees, such as the expense ratios on mutual funds or the Assets Under Management (AUM) fees charged by financial advisors, might seem small. However, they are a powerful force working against you because of compounding. Fees are not just a one-time cost; they are a perpetual drag on your returns, and the money you pay in fees is money that is no longer compounding for your future.</p>
            <p className="font-semibold">Over an investing lifetime, even a small annual fee can consume a massive portion of your potential nest egg. The goal of a successful investor is to minimize these costs wherever possible.</p>
          </AlertDescription>
        </Alert>
        
        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-xl flex items-center">
                    <Pencil className="mr-2 h-5 w-5 text-primary"/>
                    Your 4-Step Fee Analysis Exercise
                </CardTitle>
                <CardDescription>Follow these steps using the calculator below. For this exercise, use the default values and only change the fee percentage for each step.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {exerciseSteps.map(s => (
                    <div key={s.step} className="p-4 border rounded-lg bg-muted/40">
                        <h4 className="font-semibold flex items-center text-lg">{s.title}</h4>
                        <p className="text-sm text-primary font-bold mt-1 mb-2">Set Fee to: {s.fee}</p>
                        <p className="text-sm text-muted-foreground">{s.description}</p>
                    </div>
                ))}
                 <div className="p-4 border rounded-lg bg-primary/10">
                    <h4 className="font-semibold flex items-center text-lg">Step 4: Reflect on the Results</h4>
                     <p className="text-sm text-muted-foreground mt-2">After running the scenarios, reflect on these questions:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                      <li>Which fee level surprised you the most in terms of its long-term impact?</li>
                      <li>How will this understanding change your own fund selection criteria going forward?</li>
                    </ul>
                </div>
            </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">The Fee Impact Calculator</CardTitle>
            <CardDescription>Adjust the numbers to see how different fee structures and return assumptions impact the long-term outcome.</CardDescription>
          </CardHeader>
          <CardContent>
            <InvestmentManagementFeeCalculator />
          </CardContent>
        </Card>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you understand the critical importance of minimizing costs, return to the Invest Like a Pro roadmap.
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
