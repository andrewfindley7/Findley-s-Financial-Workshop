
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { ShieldCheck, PiggyBank, CircleDollarSign, ArrowRight, Lightbulb, CheckCircle, Eye, Pencil, RotateCw, Ban, Target, Landmark, Zap, Brain, PlusCircle, Info } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { SmartGoalForm, type GoalFormValues } from '@/app/(app)/goals/components/goal-form';
import { useToast } from '@/hooks/use-toast';
import type { Goal } from '@/lib/types';
import { SAVINGS_CATEGORIES_FOR_SUMMARY } from '@/lib/constants';
import { useSearchParams } from 'next/navigation';


const LOCAL_STORAGE_GOALS_KEY = 'finTrackPro_goals';

export default function TakeActionStarterEmergencyFundPage() {
  const { toast } = useToast();
  const [isGoalFormOpen, setIsGoalFormOpen] = useState(false);
  const searchParams = useSearchParams();
  const fromStep = searchParams.get('from');

  const goalDefaults: Partial<GoalFormValues> = {
    name: "Build Starter Emergency Fund",
    targetAmount: 1000,
    description: "Save a small cash buffer to cover minor unexpected expenses without going into debt.",
    linkedCategory: "Emergency Fund Contributions"
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
          description: `Your goal "${data.name}" has been added to the SMART Goals hub.`,
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
      
      <div className="mb-8 flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold font-headline">Action: Build Your Starter Emergency Fund</h1>
          <p className="text-muted-foreground mt-2">Turn knowledge into action by creating your plan and setting your first goal.</p>
        </div>
        <Button onClick={() => setIsGoalFormOpen(true)}>
            <Target className="mr-2 h-4 w-4" /> Set Goal
        </Button>
      </div>

      <div className="space-y-6">
        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-xl flex items-center">
                    <Brain className="mr-2 h-5 w-5 text-primary" />
                    Make It Real: Your Personal Risk Assessment
                </CardTitle>
                <CardDescription>This simple exercise can make the need for this fund personal and urgent.</CardDescription>
            </CardHeader>
            <CardContent>
                <ol className="list-decimal pl-5 text-sm space-y-2">
                    <li>Write down your top 3 most likely minor emergencies (e.g., car trouble, a pet getting sick, a family hardship).</li>
                    <li>Estimate the average cost for each. Be honest.</li>
                    <li>Ask yourself: "If this happened tomorrow, how would I pay for it?"</li>
                </ol>
                <p className="mt-4 font-semibold">If the answer for any of them is "a credit card," then building this starter fund is your most important next step.</p>
            </CardContent>
        </Card>
      
        <Card>
          <CardHeader>
             <CardTitle className="font-headline text-xl">How to Build Your Fund: A Step-by-Step Action Plan</CardTitle>
             <CardDescription>Follow these practical steps to save your first $1,000.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
              <div className="flex items-start gap-4 p-4 border rounded-lg">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                    <Landmark className="h-6 w-6 text-muted-foreground" />
                </div>
                <div>
                    <h4 className="font-semibold">Step 1: Open a Separate, High-Yield Savings Account</h4>
                    <p className="text-sm text-muted-foreground">Do not keep this money in your primary checking account. It must be separate to avoid accidentally spending it. Look for an online high-yield savings account (HYSA) that is FDIC-insured, has no fees, and offers a competitive interest rate. The separation is a crucial psychological barrier.</p>
                </div>
              </div>

               <div className="flex items-start gap-4 p-4 border rounded-lg">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                    <Zap className="h-6 w-6 text-muted-foreground" />
                </div>
                <div>
                    <h4 className="font-semibold">Step 2: Automate Your Savings</h4>
                    <p className="text-sm text-muted-foreground">The easiest way to save is to make it automatic. Set up a recurring transfer from your checking account to your new emergency savings account for every payday. Even if it's just $25 or $50 per paycheck, consistency is key. Treat this transfer like any other bill.</p>
                </div>
              </div>

               <div className="flex items-start gap-4 p-4 border rounded-lg">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                    <CircleDollarSign className="h-6 w-6 text-muted-foreground" />
                </div>
                <div>
                    <h4 className="font-semibold">Step 3: Fund it with "Gazelle Intensity"</h4>
                    <p className="text-sm text-muted-foreground">To speed things up, temporarily get intense. Pause all other extra debt payments (besides minimums) and investing. Sell items you don't need. Pick up a temporary side job or extra shifts. Cut discretionary spending (like dining out or subscriptions) for a month or two. The goal is to fill this bucket as fast as possible so you can move on.</p>
                </div>
              </div>
               <div className="flex items-start gap-4 p-4 border rounded-lg bg-primary/10">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                    <Target className="h-6 w-6 text-muted-foreground" />
                </div>
                <div>
                    <h4 className="font-semibold">Step 4: Set a SMART Goal</h4>
                    <p className="text-sm text-muted-foreground">Use the button below to create a SMART Goal for your starter emergency fund. This will help you track your progress and stay motivated.</p>
                     <Button className="mt-2" onClick={() => setIsGoalFormOpen(true)}>
                        <PlusCircle className="mr-2 h-4 w-4" /> Create Emergency Fund Goal
                    </Button>
                </div>
              </div>
          </CardContent>
        </Card>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">You've Completed This Action!</CardTitle>
                <CardDescription>
                    Once your starter emergency fund is in place, you're ready to start attacking high-interest debt with full force.
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
