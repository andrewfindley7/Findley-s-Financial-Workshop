'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Wallet, TrendingUp, TrendingDown, HeartPulse, Scale, Goal, ArrowRight, Lightbulb, CheckCircle, Eye, Pencil, RotateCw, Info } from 'lucide-react';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { SmartGoalForm, type GoalFormValues } from '@/app/(app)/goals/components/goal-form';
import { useToast } from '@/hooks/use-toast';
import type { Goal } from '@/lib/types';
import { SAVINGS_CATEGORIES_FOR_SUMMARY } from '@/lib/constants';

const LOCAL_STORAGE_GOALS_KEY = 'finTrackPro_goals';

export default function CreateSpendingPlanPage() {
  const searchParams = useSearchParams();
  const fromStep = searchParams.get('from');
  const { toast } = useToast();
  const [isGoalFormOpen, setIsGoalFormOpen] = useState(false);
  
  const goalDefaults: Partial<GoalFormValues> = {
    name: "Create and Follow a Monthly Budget",
    description: "Goal to consistently track income and expenses to understand my cash flow and identify savings opportunities.",
  };

  const handleAddGoal = (data: GoalFormValues) => {
    try {
        const savedGoals = localStorage.getItem(LOCAL_STORAGE_GOALS_KEY);
        const goals: Goal[] = savedGoals ? JSON.parse(savedGoals) : [];
        const newGoal: Goal = { id: (Date.now() + Math.random()).toString(), ...data, isComplete: false };
        const updatedGoals = [newGoal, ...goals];
        localStorage.setItem(LOCAL_STORAGE_GOALS_KEY, JSON.stringify(updatedGoals));
        
        toast({
          title: "Goal Created!",
          description: `Your goal "${data.name}" has been added.`,
          action: ( <Button variant="outline" size="sm" asChild>
              <Link href="/goals">
                <span>View Goals</span>
              </Link>
            </Button>
          ),
        });
        setIsGoalFormOpen(false);
    } catch (e) {
      console.error("Failed to save goal to localStorage", e);
      toast({ title: "Error", description: "Could not save your new goal.", variant: "destructive" });
    }
  };


  return (
    <>
      <Alert variant="destructive" className="mb-6 bg-amber-50 dark:bg-amber-900/20 border-amber-300 dark:border-amber-700">
          <Info className="h-4 w-4 text-amber-500" />
          <AlertDescription className="text-amber-800 dark:text-amber-300 text-xs">
              For educational use only. Not financial or tax advice. Consult a licensed advisor before making major decisions.
          </AlertDescription>
      </Alert>
      <Dialog open={isGoalFormOpen} onOpenChange={setIsGoalFormOpen}>
        <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader><DialogTitle className="font-headline">Set New SMART Goal</DialogTitle></DialogHeader>
            <div className="py-4">
                <SmartGoalForm onSubmit={handleAddGoal} defaultValues={goalDefaults} availableSavingsCategories={SAVINGS_CATEGORIES_FOR_SUMMARY}/>
            </div>
        </DialogContent>
      </Dialog>
      
      <div className="mb-8">
        <h1 className="text-3xl font-bold font-headline">Capstone: Master Your Cash Flow</h1>
        <p className="text-muted-foreground mt-2">Understand the fundamental principles of budgeting to take control of your money and build a secure future.</p>
      </div>

      <div className="space-y-6">
        <Alert className="bg-primary/5 border-primary/20">
          <Wallet className="h-4 w-4" />
          <AlertTitle className="font-headline">What is a Budget? (And What It Isn't)</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>At its core, a budget is simply a plan for your money. It's a conscious decision-making tool that helps you direct your income towards what matters most to you.</p>
            <p className="font-semibold">A budget is NOT about:</p>
            <ul className="list-disc pl-5">
              <li>Restricting yourself from ever having fun.</li>
              <li>Judging your past spending habits.</li>
              <li>Creating a rigid, unchangeable set of rules.</li>
            </ul>
             <p className="font-semibold">A budget IS about:</p>
             <ul className="list-disc pl-5">
                <li>Giving you control and freedom over your financial life.</li>
                <li>Aligning your spending with your values and goals.</li>
                <li>Reducing financial stress by creating a clear path forward.</li>
             </ul>
          </AlertDescription>
        </Alert>

        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-xl">The Two Golden Rules of Budgeting</CardTitle>
                <CardDescription>Internalize these two principles to ensure your success.</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg bg-amber-50 dark:bg-amber-900/30 border-amber-200">
                    <h3 className="font-semibold flex items-center mb-2 text-amber-800 dark:text-amber-200">
                        1. The Most Sustainable Budget Wins
                    </h3>
                    <p className="text-sm text-muted-foreground">Your budget doesn't have to be perfect or mathematically optimal. A budget you can stick to for a year is infinitely better than a "perfect" budget you abandon after a week. Prioritize sustainability and realism over extreme restriction.</p>
                </div>
                <div className="p-4 border rounded-lg bg-amber-50 dark:bg-amber-900/30 border-amber-200">
                    <h3 className="font-semibold flex items-center mb-2 text-amber-800 dark:text-amber-200">
                        2. Don't Save What's Left Over
                    </h3>
                    <p className="text-sm text-muted-foreground">The most common budgeting mistake is to spend first and then try to save whatever is left at the end of the month. This almost always leads to saving less than you're capable of. The correct approach is to "Pay Yourself First."</p>
                </div>
            </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
             <CardTitle className="font-headline text-xl">How to Create a Budget You Can Stick To</CardTitle>
             <CardDescription>For many, the hardest part of budgeting isn't creating the plan, but following it. This step-by-step lesson is designed to build a sustainable habit.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
              <div className="flex items-start gap-4 p-4 border rounded-lg">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                    <Eye className="h-6 w-6 text-muted-foreground" />
                </div>
                <div>
                    <h4 className="font-semibold">Step 1: Track Everything (The 'No-Judgment' Phase)</h4>
                    <p className="text-sm text-muted-foreground">For one full month, track every single dollar you spend. Don't try to change your habits yet—the goal is to get an honest, clear picture of where your money currently goes. Use our <Link href="/budgeting" className="text-primary hover:underline font-semibold">Budgeting & Expenses</Link> tool, a notes app, or a simple notebook. Be brutally honest with yourself, but not judgmental.</p>
                </div>
              </div>

               <div className="flex items-start gap-4 p-4 border rounded-lg">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                    <Pencil className="h-6 w-6 text-muted-foreground" />
                </div>
                <div>
                    <h4 className="font-semibold">Step 2: Categorize and Analyze</h4>
                    <p className="text-sm text-muted-foreground">At the end of the month, group your expenses into categories (e.g., Groceries, Rent, Dining Out, Subscriptions). Our tool helps with this. Now, look at the totals. Does anything surprise you? Are you spending more than you thought in certain areas? This is where you gain powerful insights into your financial habits.</p>
                </div>
              </div>

               <div className="flex items-start gap-4 p-4 border rounded-lg">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                    <CheckCircle className="h-6 w-6 text-muted-foreground" />
                </div>
                <div>
                    <h4 className="font-semibold">Step 3: Create a Plan (Not a Prison)</h4>
                    <p className="text-sm text-muted-foreground">Based on your analysis, create your first budget. A great starting point is the <strong>50/30/20 Rule</strong>: 50% of your after-tax income for Needs (rent, groceries, utilities), 30% for Wants (dining out, hobbies, entertainment), and 20% for Savings & Debt Repayment. This is a guideline, not a strict rule. Adjust the percentages to fit your life and goals. The important part is that every dollar has a job.</p>
                </div>
              </div>

               <div className="flex items-start gap-4 p-4 border rounded-lg">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                    <RotateCw className="h-6 w-6 text-muted-foreground" />
                </div>
                <div>
                    <h4 className="font-semibold">Step 4: Review and Refine</h4>
                    <p className="text-sm text-muted-foreground">A budget is a living document, not a one-time setup. Review your spending against your budget weekly or bi-weekly. Did you overspend in one area? That's okay. See if you can pull from another category to cover it. If you consistently overspend in an area, your budget might be unrealistic. Adjust it! The goal is progress, not perfection.</p>
                </div>
              </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline flex items-center">
              <Scale className="mr-3 h-6 w-6 text-primary" />
              The Core Equation: Understanding Your Cash Flow
            </CardTitle>
            <CardDescription>
              All of personal finance boils down to a simple formula. Mastering this is the key.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center bg-muted/50 p-6 rounded-lg">
            <p className="text-xl md:text-2xl font-semibold font-mono tracking-tight">
              <span className="text-green-600">Income</span> - <span className="text-red-600">Expenses</span> = <span className="text-blue-600">Net Cash Flow (Savings/Investment Potential)</span>
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              This is the money you have left over to build wealth, pay down debt faster, and achieve your financial goals. Your primary objective is to make this number as large as possible.
            </p>
          </CardContent>
        </Card>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline flex items-center"><TrendingUp className="mr-2 h-5 w-5 text-green-600"/>The First Lever: Increasing Your Income</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">While often harder to change, increasing your income is the most powerful way to accelerate your financial progress. Even small increases can have a huge impact over time.</p>
              <ul className="list-disc pl-5 mt-2 text-sm space-y-1">
                <li>Negotiating a raise in your current role.</li>
                <li>Developing new skills to qualify for a higher-paying job.</li>
                <li>Starting a side hustle or freelance business.</li>
                <li>Selling items you no longer need.</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="font-headline flex items-center"><TrendingDown className="mr-2 h-5 w-5 text-red-600"/>The Second Lever: Optimizing Your Expenses</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">This is the lever you have the most immediate control over. It's not about deprivation, but about mindful, intentional spending.</p>
              <ul className="list-disc pl-5 mt-2 text-sm space-y-1">
                <li><strong>Track your spending:</strong> Use our <Link href="/budgeting" className="text-primary hover:underline font-semibold">Budgeting & Expenses</Link> tool to see where your money really goes.</li>
                <li><strong>Identify the 'Big 3':</strong> Housing, transportation, and food are typically the largest expense categories. Small improvements here can have a huge impact.</li>
                <li><strong>Cut wasteful subscriptions:</strong> Review recurring charges and cancel services you don't use or value.</li>
                <li><strong>Plan major purchases:</strong> Avoid impulse buys by planning for large expenses in advance.</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="border-destructive/50 bg-destructive/5">
            <CardHeader>
                <CardTitle className="font-headline text-xl text-destructive flex items-center">
                    <TrendingDown className="mr-2 h-5 w-5"/>Beware of Lifestyle Creep
                </CardTitle>
                <CardDescription>Lifestyle creep is the tendency to increase your spending as your income grows. It's a silent wealth killer because you end up no better off financially, despite earning more money.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">You get a 5% raise, and suddenly you're spending more on dining out, subscriptions, and shopping. At the end of the month, you find you have the same amount of money left over as before. This is lifestyle creep in action.</p>
                <Alert variant="default" className="bg-green-500/10 border-green-500/20">
                    <Lightbulb className="h-4 w-4 text-green-600" />
                    <AlertTitle className="text-green-700 dark:text-green-300 font-semibold">The Antidote: Automate Your Raise</AlertTitle>
                    <AlertDescription className="text-green-600 dark:text-green-400">
                        <p>The moment you find out you're getting a raise or a new, higher-paying job, log into your 401(k) and payroll system. Before you even receive the first bigger paycheck, **automatically increase your savings and investment contributions.**</p>
                        <p className="mt-2">For example, if you get a $400/month raise, immediately increase your 401(k) contribution by $200/month and your savings transfer by $100/month. You still get to enjoy an extra $100 in spending money, but you've allocated most of your raise to your future self before you ever got used to spending it.</p>
                    </AlertDescription>
                </Alert>
            </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Key Principles of Effective Budgeting</CardTitle>
             <CardDescription>Internalize these concepts to make budgeting a natural part of your financial life.</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg bg-card shadow-sm">
                <h3 className="font-semibold flex items-center mb-1">
                  <Goal className="mr-2 h-5 w-5 text-primary/80" />
                  Give Every Dollar a Job
                </h3>
                <p className="text-sm text-muted-foreground">This is the essence of zero-based budgeting. Before the month begins, plan where every dollar of your income will go. This intentionality prevents "mystery spending" and ensures your money is working towards your goals.</p>
              </div>
               <div className="p-4 border rounded-lg bg-card shadow-sm">
                <h3 className="font-semibold flex items-center mb-1">
                  <HeartPulse className="mr-2 h-5 w-5 text-primary/80" />
                  Be Realistic and Flexible
                </h3>
                <p className="text-sm text-muted-foreground">A budget that's too strict is destined to fail. Life is unpredictable. Build in some buffer for unexpected costs and discretionary spending. The goal is consistency, not perfection. If you overspend, adjust and move on.</p>
              </div>
               <div className="p-4 border rounded-lg bg-card shadow-sm">
                <h3 className="font-semibold flex items-center mb-1">
                  <Lightbulb className="mr-2 h-5 w-5 text-primary/80" />
                  Automate Your Savings
                </h3>
                <p className="text-sm text-muted-foreground">"Pay yourself first" is the golden rule. Set up automatic transfers from your checking account to your savings and investment accounts on payday. This removes the temptation to spend the money and makes saving effortless.</p>
              </div>
              <div className="p-4 border rounded-lg bg-card shadow-sm">
                <h3 className="font-semibold flex items-center mb-1">
                  <TrendingUp className="mr-2 h-5 w-5 text-primary/80" />
                  Focus on Your Savings Rate
                </h3>
                <p className="text-sm text-muted-foreground">Your savings rate (the percentage of your income you save) is the most powerful engine for wealth creation. Focus on widening the gap between income and expenses to increase this rate over time.</p>
              </div>
          </CardContent>
        </Card>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Ready for the Next Step?</CardTitle>
                <CardDescription>
                    The best way to learn is by doing. Use our budget tool to apply these principles and start building your financial foundation today.
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
    