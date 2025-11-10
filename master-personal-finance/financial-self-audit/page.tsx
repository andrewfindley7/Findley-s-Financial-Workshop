'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Search, Brain, Target, ArrowRight, TrendingUp, TrendingDown, ShieldCheck, Home, Info } from 'lucide-react';
import Link from 'next/link';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const goals = [
    "To create an honest, unfiltered picture of your current financial reality.",
    "To understand the difference between items that build wealth and items that drain it.",
    "To identify the biggest opportunities for shrinking your liabilities and growing your assets."
];

const steps = [
    {
        title: "Step 1: List Your Top 10",
        description: "Open a notebook or a new document. Without overthinking it, list the top 10 most significant financial items in your life. This isn't a full net worth statement; it's a gut check. Include your main bank accounts, investments, debts, and major physical possessions.",
    },
    {
        title: "Step 2: Label Each Item",
        description: "Go down your list and assign one of three labels to each item based on its primary function in your financial life:",
    },
    {
        title: "Step 3: Analyze and Strategize",
        description: "Look at your completed list. The picture should be clear. Now, ask yourself two simple but powerful questions: 1. Which liabilities on this list can I shrink or eliminate? 2. Which assets on this list can I grow?",
    }
];

const example = {
    items: [
        { item: "Paycheck/Checking Account", label: "Neutral", reason: "This is cash flow, but not a wealth-building asset itself. It's the engine." },
        { item: "Emergency Fund (HYSA)", label: "Protective Asset", reason: "Its job is to prevent me from taking on bad debt." },
        { item: "401(k) Investments", label: "Asset", reason: "It grows in value and puts money in my pocket in the future." },
        { item: "My House (Home Value)", label: "Asset", reason: "It has market value, but it's illiquid and a place to live." },
        { item: "Robinhood/Taxable Account", label: "Asset", reason: "Grows in value and can generate dividends." },
        { item: "Mortgage on Primary Home", label: "Liability", reason: "It takes money out of my pocket every month." },
        { item: "Student Loan Debt", label: "Liability", reason: "It takes money out of my pocket every month." },
        { item: "Car Loan", label: "Liability", reason: "It's a loan for a non-appreciating item." },
        { item: "Credit Card Debt", label: "Liability", reason: "High-interest debt that drains wealth aggressively." },
        { item: "My Car (Car Value)", label: "Liability", reason: "A non-appreciating item that requires ongoing costs for fuel, insurance, and maintenance." },
    ],
    analysis: {
        shrink: "My number one priority is the Credit Card Debt. It has the highest interest rate and is my most destructive liability. My next focus will be the Car Loan.",
        grow: "My main focus is growing my 401(k) by consistently contributing. My secondary focus is adding to my Taxable Account each month."
    }
};

export default function FinancialSelfAuditPage() {
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
        <h1 className="text-3xl font-bold font-headline">Action: Perform a Financial Self-Audit</h1>
        <p className="text-muted-foreground mt-2">An exercise to honestly assess your financial position and identify your biggest opportunities.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Brain className="h-4 w-4" />
          <AlertTitle className="font-headline">The Lesson: Honesty Before Math</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>Before you calculate your net worth, it's crucial to be honest about the function of each part of your financial life. Too often, people inflate their sense of wealth by treating depreciating items (like cars) or necessary tools (like a primary home) as pure wealth-building assets. This exercise is designed to cut through the emotion and create a clear, strategic picture of what's helping you and what's hurting you.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
                <Target className="mr-2 h-5 w-5 text-primary"/>
                Goals for This Lesson
            </CardTitle>
          </CardHeader>
          <CardContent>
             <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                {goals.map((goal, i) => <li key={i}>{goal}</li>)}
             </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">The 3-Step Self-Audit</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
             {steps.map((step, index) => (
              <div key={step.title}>
                <h3 className="font-semibold text-lg">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
                {index === 1 && ( 
                  <div className="mt-4 grid md:grid-cols-3 gap-4">
                    <div className="p-3 border rounded-lg bg-green-50/50 dark:bg-green-900/20 border-green-300">
                      <h4 className="font-semibold flex items-center text-green-700 dark:text-green-300"><TrendingUp className="mr-2 h-4 w-4" /> Asset</h4>
                      <p className="text-xs text-muted-foreground">Puts money in your pocket (now or in the future) or reliably grows in value.</p>
                    </div>
                    <div className="p-3 border rounded-lg bg-red-50/50 dark:bg-red-900/20 border-red-300">
                      <h4 className="font-semibold flex items-center text-red-700 dark:text-red-300"><TrendingDown className="mr-2 h-4 w-4" /> Liability</h4>
                      <p className="text-xs text-muted-foreground">Takes money out of your pocket or reliably loses value.</p>
                    </div>
                    <div className="p-3 border rounded-lg bg-blue-50/50 dark:bg-blue-900/20 border-blue-300">
                      <h4 className="font-semibold flex items-center text-blue-700 dark:text-blue-300"><ShieldCheck className="mr-2 h-4 w-4" /> Protective Asset / Neutral</h4>
                      <p className="text-xs text-muted-foreground">Doesn't build wealth, but protects it (e.g., emergency fund) or is a necessary tool (e.g., primary car).</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-primary/50 bg-primary/5">
          <CardHeader>
            <CardTitle className="font-headline text-xl">An Example in Practice</CardTitle>
            <CardDescription>Here's how a typical list might look.</CardDescription>
          </CardHeader>
          <CardContent>
             <div className="overflow-x-auto rounded-lg border">
                <table className="w-full text-sm">
                    <thead className="bg-muted/50">
                        <tr>
                            <th className="p-3 text-left font-semibold">Item</th>
                            <th className="p-3 text-left font-semibold">Label</th>
                            <th className="p-3 text-left font-semibold">Reasoning</th>
                        </tr>
                    </thead>
                    <tbody>
                        {example.items.map((item, i) => (
                            <tr key={i} className="border-b last:border-b-0">
                                <td className="p-3 font-medium">{item.item}</td>
                                <td className="p-3"><span className={`px-2 py-1 text-xs rounded-full ${item.label === 'Asset' ? 'bg-green-100 text-green-800' : item.label === 'Liability' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'}`}>{item.label}</span></td>
                                <td className="p-3 text-muted-foreground">{item.reason}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
             </div>
             <div className="mt-4 space-y-3">
                 <div>
                    <h4 className="font-semibold">Analysis: Where to focus?</h4>
                    <p className="text-sm text-muted-foreground"><strong>Shrink:</strong> {example.analysis.shrink}</p>
                    <p className="text-sm text-muted-foreground"><strong>Grow:</strong> {example.analysis.grow}</p>
                 </div>
                 <p className="text-xs italic text-muted-foreground">This simple analysis instantly creates a clear financial strategy: aggressively attack the credit card debt while consistently funding the 401(k) and taxable accounts.</p>
             </div>
          </CardContent>
        </Card>
        
        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    With this honest audit complete, you are now ready to calculate your net worth with a clear, strategic perspective.
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
