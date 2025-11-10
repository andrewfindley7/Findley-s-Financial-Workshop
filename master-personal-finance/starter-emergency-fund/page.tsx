
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { ShieldCheck, PiggyBank, CircleDollarSign, ArrowRight, Lightbulb, CheckCircle, Eye, Pencil, RotateCw, Ban, Target, Landmark, Zap, Brain, Info } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { SmartGoalForm, type GoalFormValues } from '@/app/(app)/goals/components/goal-form';
import { useToast } from '@/hooks/use-toast';
import type { Goal } from '@/lib/types';
import { SAVINGS_CATEGORIES_FOR_SUMMARY } from '@/lib/constants';
import { useSearchParams } from 'next/navigation';


const LOCAL_STORAGE_GOALS_KEY = 'finTrackPro_goals';

export default function StarterEmergencyFundPage() {
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
      
      <div className="mb-8">
        <h1 className="text-3xl font-bold font-headline">What is a Starter Emergency Fund?</h1>
        <p className="text-muted-foreground mt-2">Create a small financial buffer to protect yourself from life's minor, unexpected expenses.</p>
        <Button onClick={() => setIsGoalFormOpen(true)} className="mt-4">
            <Target className="mr-2 h-4 w-4" /> Set a Goal to Build Your Fund
        </Button>
      </div>

      <div className="space-y-6">
        <Alert className="bg-primary/5 border-primary/20">
          <ShieldCheck className="h-4 w-4" />
          <AlertTitle className="font-headline">Your Financial Foundation</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>A starter emergency fund is a small pool of cash, typically $1,000 or one month of essential living expenses, set aside in an easily accessible savings account. Its single purpose is to act as a financial buffer between you and unexpected costs.</p>
            <p>This fund doesn't just protect your wallet; it protects your mental health. When you know you can handle a $600 car repair without panic, you sleep better, stress less, and feel more in control.</p>
            <p className="font-semibold">It's not for investing or vacations. It's your first line of defense against going into debt when a small emergency strikes, and it is the first domino that must fall to enable all future financial progress.</p>
          </AlertDescription>
        </Alert>
        
        <Card>
          <CardHeader>
             <CardTitle className="font-headline text-xl">The Emergency Fund Shield</CardTitle>
             <CardDescription>Without this fund, every unexpected event becomes a crisis that pushes you backward. With it, you have a shield.</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg bg-red-50/50 dark:bg-red-900/20">
                <h3 className="font-semibold flex items-center mb-2 text-red-700 dark:text-red-300">
                  <Ban className="mr-2 h-5 w-5" />
                  Without a Fund: Direct Hit
                </h3>
                <p className="text-sm text-muted-foreground">A $600 car repair bill goes straight to a high-interest credit card, adding to your debt and stress. Your financial progress is reversed.</p>
            </div>
            <div className="p-4 border rounded-lg bg-green-50/50 dark:bg-green-900/20">
                <h3 className="font-semibold flex items-center mb-2 text-green-700 dark:text-green-300">
                  <ShieldCheck className="mr-2 h-5 w-5" />
                  With a Fund: Shield Activated
                </h3>
                <p className="text-sm text-muted-foreground">The car repair is an inconvenience, not a crisis. You pay for it with cash from your emergency fund, and your only job is to pause other goals to replenish the fund. No new debt, no stress.</p>
            </div>
          </CardContent>
        </Card>

        <Alert variant="default">
            <Lightbulb className="h-4 w-4" />
            <AlertTitle className="font-semibold">Starter Fund vs. Full Fund</AlertTitle>
            <AlertDescription>
                A full emergency fund should eventually cover 3 to 6 months of expenses, which is a later milestone in this roadmap. The starter fund is different. Its goal is about speed, momentum, and breaking the debt cycle. Saving the first $1,000 quickly proves you can save and gives you the confidence to tackle bigger goals like high-interest debt.
            </AlertDescription>
        </Alert>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline flex items-center"><CheckCircle className="mr-2 h-5 w-5 text-green-600"/>When to Use Your Fund</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">This money is ONLY for true, unexpected emergencies. Ask yourself: Is it urgent? Is it unexpected? Is it necessary?</p>
              <ul className="list-disc pl-5 mt-2 text-sm space-y-1">
                <li>Urgent car repair needed to get to work.</li>
                <li>Emergency medical or dental expense.</li>
                <li>Essential home repair (e.g., a burst pipe).</li>
                <li>Immediate travel for a family emergency.</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="font-headline flex items-center"><Ban className="mr-2 h-5 w-5 text-red-600"/>When NOT to Use Your Fund</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">It is NOT for predictable expenses or discretionary wants.</p>
              <ul className="list-disc pl-5 mt-2 text-sm space-y-1">
                <li>Routine car maintenance (oil changes, tires).</li>
                <li>Annual insurance premiums.</li>
                <li>Vacations or concert tickets.</li>
                <li>Holiday or birthday gifts.</li>
                <li>A sale on something you want.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <Alert variant="default" className="bg-amber-50 dark:bg-amber-900/20 border-amber-300 dark:border-amber-700 text-amber-900 dark:text-amber-200 [&>svg]:text-amber-500 dark:[&>svg]:text-amber-400">
            <Lightbulb className="h-4 w-4" />
            <AlertTitle className="font-headline text-amber-900 dark:text-amber-200">What to Do After You Use It</AlertTitle>
            <AlertDescription className="text-amber-800 dark:text-amber-300">
                <p>If you have to use your emergency fund, that's okay, that's what it's for! Your immediate priority should be to pause any extra debt payments (beyond minimums) or extra investing and rebuild the fund back to its target level as quickly as possible.</p>
            </AlertDescription>
        </Alert>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Return to the roadmap to continue building your financial knowledge.
                </CardDescription>
            </CardHeader>
            <CardContent>
                 <Button asChild>
                    <Link href={`/roadmaps/master-personal-finance${fromStep ? `#${fromStep}`: ''}`}>
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
    