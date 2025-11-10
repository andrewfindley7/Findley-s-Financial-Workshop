
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { ShieldCheck, ArrowRight, Lightbulb, CheckCircle, Ban, Target, Landmark, Zap, BarChart3, TrendingUp, HeartPulse, User, Users, Info } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { SmartGoalForm, type GoalFormValues } from '@/app/(app)/goals/components/goal-form';
import { useToast } from '@/hooks/use-toast';
import type { Goal } from '@/lib/types';
import { SAVINGS_CATEGORIES_FOR_SUMMARY } from '@/lib/constants';
import { useSearchParams } from 'next/navigation';

const LOCAL_STORAGE_GOALS_KEY = 'finTrackPro_goals';

export default function FullEmergencyFundPage() {
  const { toast } = useToast();
  const [isGoalFormOpen, setIsGoalFormOpen] = useState(false);
  const searchParams = useSearchParams();
  const fromStep = searchParams.get('from');

  const goalDefaults: Partial<GoalFormValues> = {
    name: "Build Full Emergency Fund (3-6 Months)",
    description: "Save enough to cover 3-6 months of essential living expenses for financial security.",
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
        <h1 className="text-3xl font-bold font-headline">What is a Full Emergency Fund?</h1>
        <p className="text-muted-foreground mt-2">Create a robust financial safety net to protect you from life's major unexpected events.</p>
        <Button onClick={() => setIsGoalFormOpen(true)} className="mt-4">
            <Target className="mr-2 h-4 w-4" /> Set as a Goal
        </Button>
      </div>

      <div className="space-y-6">
        <Alert className="bg-primary/5 border-primary/20">
          <ShieldCheck className="h-4 w-4" />
          <AlertTitle className="font-headline">Your Financial Shock Absorber</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>Think of your emergency fund as the shock absorbers on your financial vehicle. On a smooth road, you don't notice them. But when you hit a major pothole like a job loss, a medical crisis, or an urgent home repair they prevent your entire financial life from breaking down.</p>
            <p>After building your starter fund, your next goal is to expand this safety net to cover 3 to 6 months of essential living expenses. This is your financial fortress, protecting you from having to sell long-term investments at a bad time or go into high-interest debt during a crisis.</p>
          </AlertDescription>
        </Alert>

         <Card>
            <CardHeader>
                <CardTitle className="font-headline text-xl">A Tale of Two Recessions</CardTitle>
                <CardDescription>This story illustrates the real-world power of an emergency fund.</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-6">
                <div className="p-4 border rounded-lg bg-orange-50 dark:bg-orange-900/30 border-orange-200 dark:border-orange-800">
                    <h3 className="font-semibold flex items-center mb-2 text-orange-800 dark:text-orange-200">
                       <User className="mr-2 h-5 w-5"/> Jake's Story: No Emergency Fund
                    </h3>
                    <p className="text-sm text-muted-foreground">During a recession, Jake lost his job. With only a small amount of cash, he was forced to sell stocks from his retirement account to cover his rent and living expenses. Because the market was down 30%, he had to sell his investments at a huge loss, permanently damaging his long-term financial future. He locked in his losses at the worst possible time.</p>
                </div>
                 <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800">
                    <h3 className="font-semibold flex items-center mb-2 text-green-800 dark:text-green-200">
                       <Users className="mr-2 h-5 w-5"/> Maya's Story: With a 6-Month Fund
                    </h3>
                    <p className="text-sm text-muted-foreground">Maya also lost her job in the same recession. However, she had a six-month emergency fund saved in a high-yield savings account. She lived off this fund for five months until she found a new job. She never had to touch her investments. By the time she was re-employed, the market had started to recover, and her portfolio was intact. The emergency fund allowed her to turn a potential catastrophe into a manageable inconvenience.</p>
                </div>
            </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
              <HeartPulse className="mr-2 h-5 w-5 text-primary"/>
              Why This Comes Before Maximizing Investments
            </CardTitle>
            <CardDescription>An emergency fund is not about getting rich; it's about not getting poor. It's the defense that allows you to play offense with your investments.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Imagine you've invested heavily in the stock market. A sudden recession hits, and two things happen at once: the market drops 30%, and you unexpectedly lose your job. Without an emergency fund, you are forced to sell your investments at a major loss just to pay your rent and buy groceries. You've locked in the losses and destroyed a huge portion of your wealth.</p>
            <p className="font-semibold">An emergency fund prevents this disastrous scenario. It's your "break glass in case of emergency" money that allows you to ride out market downturns without touching your long-term investments, giving them time to recover and grow.</p>
            <Alert>
              <Lightbulb className="h-4 w-4" />
              <AlertTitle className="font-semibold">A Balanced Funding Strategy</AlertTitle>
              <AlertDescription>
                <p className="mt-2">While building your full emergency fund is your primary savings goal at this stage, it doesn't mean you have to stop all investing. Here's a common, balanced approach:</p>
                <ol className="list-decimal list-inside mt-2 space-y-1">
                  <li>Always contribute enough to your 401(k) to get the full employer match. This is a 50-100% guaranteed return you should never pass up.</li>
                  <li>After securing the match, direct the majority of your remaining savings capacity (e.g., 60-80%) towards aggressively funding your emergency fund until it's complete.</li>
                  <li>Use the remaining portion (e.g., 20-40%) to continue investing, such as in a Roth IRA.</li>
                </ol>
                 <p className="mt-2 text-xs">This strategy ensures you don't miss out on "free money" from your employer while still prioritizing your financial safety net.</p>
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
             <CardTitle className="font-headline text-xl">How Many Months Do YOU Need?</CardTitle>
             <CardDescription>This is a personal decision based on your unique situation. Here’s how to think about it:</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800">
                  <h3 className="font-semibold flex items-center mb-2 text-green-800 dark:text-green-200">
                      Aim for 3 Months if...
                  </h3>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>You have a very stable job in a high-demand field (e.g. active-duty military, tenured professor).</li>
                    <li>You have multiple sources of income (e.g., a partner's salary, a reliable side hustle).</li>
                    <li>You have a low-cost lifestyle and minimal dependents.</li>
                    <li>You have excellent health and disability insurance coverage.</li>
                  </ul>
              </div>
              <div className="p-4 border rounded-lg bg-orange-50 dark:bg-orange-900/30 border-orange-200 dark:border-orange-800">
                  <h3 className="font-semibold flex items-center mb-2 text-orange-800 dark:text-orange-200">
                      Aim for 6+ Months if...
                  </h3>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>You are the sole provider for your household.</li>
                    <li>Your income is irregular or commission-based (e.g., self-employed).</li>
                    <li>You work in a volatile industry with a higher risk of layoffs.</li>
                    <li>You have dependents or family members with significant medical needs.</li>
                    <li>You have a higher-risk financial situation (e.g., a large mortgage).</li>
                  </ul>
              </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
             <CardTitle className="font-headline text-xl">How to Build and Maintain Your Fund</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
              <div className="flex items-start gap-4 p-4 border rounded-lg">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                    <BarChart3 className="h-6 w-6 text-muted-foreground" />
                </div>
                <div>
                    <h4 className="font-semibold">Step 1: Calculate Your Monthly "Bare-Bones" Expenses</h4>
                    <p className="text-sm text-muted-foreground">This is the absolute minimum you need to live on. Sum up your monthly costs for: housing (rent/mortgage), utilities, food (groceries only), transportation to work, insurance premiums, and minimum debt payments. Exclude all discretionary spending like dining out, entertainment, and subscriptions. Multiply this number by your target number of months (3-6) to get your final goal.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 border rounded-lg">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                    <Landmark className="h-6 w-6 text-muted-foreground" />
                </div>
                <div>
                    <h4 className="font-semibold">Step 2: Keep It Safe and Liquid</h4>
                    <p className="text-sm text-muted-foreground">This money must be kept in a separate, liquid account where it won't lose value and can be accessed quickly. A high-yield savings account (HYSA) is the perfect tool for this. It should not be invested in the stock market or tied up in long-term CDs.</p>
                </div>
              </div>

               <div className="flex items-start gap-4 p-4 border rounded-lg">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                    <TrendingUp className="h-6 w-6 text-muted-foreground" />
                </div>
                <div>
                    <h4 className="font-semibold">Step 3: Fund it Aggressively</h4>
                    <p className="text-sm text-muted-foreground">With high-interest debt gone, you can now redirect all the money you were using for extra debt payments towards your emergency fund. Continue to "pay yourself first" by automating transfers on payday until you reach your goal. This should be your primary savings focus before moving on to heavy investing.</p>
                </div>
              </div>
          </CardContent>
        </Card>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline flex items-center"><CheckCircle className="mr-2 h-5 w-5 text-green-600"/>When to Use Your Fund</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">This money is ONLY for true, major emergencies that would otherwise disrupt your life.</p>
              <ul className="list-disc pl-5 mt-2 text-sm space-y-1">
                <li>Job loss (to cover living expenses while you search).</li>
                <li>Major medical or dental emergency not covered by insurance.</li>
                <li>Urgent and critical home repair (e.g., roof replacement, furnace failure).</li>
                <li>Unexpected family crisis requiring significant travel or expense.</li>
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
        
        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Ready for the Next Step?</CardTitle>
                <CardDescription>
                    With your full emergency fund in place, you have a powerful financial shield. Now you can confidently move on to long-term wealth building.
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
