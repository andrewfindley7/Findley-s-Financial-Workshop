'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { ListChecks, Brain, Scale, TrendingUp, TrendingDown, ShieldCheck, ArrowRight, FileText, Info } from 'lucide-react';
import Link from 'next/link';

const steps = [
    {
        title: "Step 1: List All Your Debts",
        description: "Open a notebook or a new document and create a list of every single debt you have. Don't leave anything out. For each debt, write down the Name, current Balance, Interest Rate (APR), and Minimum Monthly Payment.",
        exampleTable: true,
    },
    {
        title: "Step 2: Classify Each Debt",
        description: "Go down your list and assign one of three labels to each debt based on its purpose and cost:",
        labels: [
            { type: 'Good Debt', icon: TrendingUp, color: 'text-green-700 dark:text-green-300', explanation: "Used to acquire an asset that can grow in value or increase your income (e.g., a sensible mortgage, a student loan for a high-earning degree)." },
            { type: 'Neutral Debt', icon: ShieldCheck, color: 'text-blue-700 dark:text-blue-300', explanation: "Low-interest debt for a necessary, depreciating asset (e.g., a modest car loan with a low rate). Neutral debt can become 'bad' if the balance is too high or the loan term is too long." },
            { type: 'Bad Debt', icon: TrendingDown, color: 'text-red-700 dark:text-red-300', explanation: "High-interest debt used for consumption or on assets that lose value (e.g., credit card debt, personal loans)." },
        ]
    },
    {
        title: "Step 3: Identify Your Target",
        description: "Look at your list of 'Bad Debts'. Identify the one with the highest interest rate. This is your primary target. This is the most destructive debt you have, and eliminating it will provide the biggest and fastest boost to your financial health.",
    }
];

export default function ActionDebtInventoryPage() {
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
        <h1 className="text-3xl font-bold font-headline">Action: Complete a Debt Inventory</h1>
        <p className="text-muted-foreground mt-2">An exercise to get a clear, honest picture of what you owe and create a strategic plan.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Brain className="h-4 w-4" />
          <AlertTitle className="font-headline">The Goal of This Exercise</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>You can't fight an enemy you don't understand. This exercise is about taking a complete and honest inventory of your debts to move from a state of anxiety to a state of control. By listing everything out, you transform a vague sense of being 'in debt' into a clear, actionable list that you can strategically attack, one item at a time.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
                <ListChecks className="mr-2 h-5 w-5 text-primary"/>
                Your 3-Step Debt Inventory
            </CardTitle>
            <CardDescription>Follow these steps to create your personal debt strategy.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {steps.map((step, index) => (
              <div key={step.title} className="p-4 border rounded-lg bg-card shadow-sm">
                <h3 className="font-semibold text-lg">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
                 {index === 2 && (
                    <p className="text-sm font-semibold text-primary mt-3">Most people feel a weight lift off their shoulders simply by seeing their debt clearly for the first time. This is your turning point.</p>
                 )}
                {step.exampleTable && (
                    <div className="mt-4 overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead className="bg-muted/50">
                                <tr className="text-left">
                                    <th className="p-2 font-semibold">Name</th>
                                    <th className="p-2 font-semibold">Balance</th>
                                    <th className="p-2 font-semibold">Interest Rate (APR)</th>
                                    <th className="p-2 font-semibold">Min. Payment</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b"><td className="p-2">Visa Card</td><td className="p-2">$4,500</td><td className="p-2">22.9%</td><td className="p-2">$150</td></tr>
                                <tr className="border-b"><td className="p-2">Student Loan</td><td className="p-2">$28,000</td><td className="p-2">5.8%</td><td className="p-2">$310</td></tr>
                                <tr className="border-b"><td className="p-2">Car Loan</td><td className="p-2">$12,000</td><td className="p-2">7.2%</td><td className="p-2">$250</td></tr>
                            </tbody>
                        </table>
                    </div>
                )}
                 {step.labels && (
                    <div className="mt-4 grid md:grid-cols-3 gap-4">
                        {step.labels.map(label => {
                            const Icon = label.icon;
                            return (
                                <div key={label.type} className="p-3 border rounded-lg">
                                    <h4 className={`font-semibold flex items-center ${label.color}`}><Icon className="mr-2 h-4 w-4"/>{label.type}</h4>
                                    <p className="text-xs text-muted-foreground mt-1">{label.explanation}</p>
                                </div>
                            );
                        })}
                    </div>
                 )}
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you have your strategic plan, return to the main roadmap to continue building your financial knowledge.
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
