
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Target, ArrowRight, Lightbulb, Banknote, Landmark, GraduationCap, TrendingUp, Home, CheckCircle, HelpCircle, Brain, Wallet, Scale, HomeIcon, Percent, Zap, Info } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { SmartGoalForm, type GoalFormValues } from '@/app/(app)/goals/components/goal-form';
import { useToast } from '@/hooks/use-toast';
import type { Goal } from '@/lib/types';
import { SAVINGS_CATEGORIES_FOR_SUMMARY } from '@/lib/constants';
import { Separator } from '@/components/ui/separator';

const LOCAL_STORAGE_GOALS_KEY = 'finTrackPro_goals';

export default function HyperAccumulationPage() {
  const { toast } = useToast();
  const [isGoalFormOpen, setIsGoalFormOpen] = useState(false);
  const searchParams = useSearchParams();
  const fromStep = searchParams.get('from');

  const goalDefaults: Partial<GoalFormValues> = {
    name: "Invest in Taxable Brokerage Account",
    description: "Consistently invest in a taxable brokerage account for non-retirement goals and wealth accumulation.",
    linkedCategory: "Investments"
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
        <h1 className="text-3xl font-bold font-headline">Basics of Hyper-Accumulation</h1>
        <p className="text-muted-foreground mt-2">With tax-advantaged accounts maxed out, it's time to build your 'Freedom Account' for other major life goals.</p>
        <Button onClick={() => setIsGoalFormOpen(true)} className="mt-4">
            <Target className="mr-2 h-4 w-4" /> Set Goal
        </Button>
      </div>
      <div className="space-y-6">
        <Alert className="bg-primary/5 border-primary/20">
          <Target className="h-4 w-4" />
          <AlertTitle className="font-headline">What is Hyper-Accumulation?</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>Hyper-accumulation is the stage of your financial journey that begins after you've built a strong foundation: you have a full emergency fund, no high-interest debt, and you are maxing out your tax-advantaged retirement accounts (like your 401(k) and IRA).</p>
            <p>At this point, you have a surplus. The goal of this phase is to use that surplus to aggressively build wealth outside of traditional retirement accounts. The primary tool for this is a standard, taxable brokerage account, which can be thought of as your "Freedom Account", a fund you can use to finance major life goals long before you turn 59½.</p>
          </AlertDescription>
        </Alert>

        <Alert variant="default" className="bg-blue-50/50 dark:bg-blue-900/30">
            <Lightbulb className="h-4 w-4" />
            <AlertTitle className="font-semibold">A Real-World Example: Alex's Freedom Account</AlertTitle>
            <AlertDescription>
                Alex, an engineer, invested an extra $1,500/month into a taxable brokerage account from age 32 to 42. After 10 years of consistent investing at a 10% average return, that "Freedom Account" had grown to over $306,000. This fund became the bridge that allowed Alex to leave a stressful corporate job at age 45 to start a consulting business, giving them income security for the first two years without ever touching their dedicated retirement accounts.
            </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">The Taxable Brokerage Account: Your Wealth-Building Workhorse</CardTitle>
            <CardDescription>This is your primary tool for non-retirement wealth building.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>A taxable brokerage account is an investment account with no special tax status. You can buy and sell stocks, bonds, ETFs, and mutual funds within it. While it lacks the upfront tax breaks of an IRA or 401(k), it offers unmatched flexibility.</p>
            <Separator/>
            <div className="pt-4">
              <h4 className="font-semibold flex items-center mb-2"><Percent className="mr-2 h-4 w-4"/>Understanding the Taxes</h4>
              <ul className="list-disc pl-5 text-sm space-y-2">
                <li>Capital Gains Taxes: Unlike an IRA, you will pay taxes on your profits. If you sell an investment for more than you paid for it, the profit is a "capital gain."</li>
                <li>Dividends: You will also pay taxes on most dividends you receive in the year they are paid.</li>
              </ul>
            </div>
             <div className="pt-2">
                <h4 className="font-semibold flex items-center mb-2"><Zap className="mr-2 h-4 w-4"/>Actionable Tax-Efficiency Strategies</h4>
                <p className="text-sm text-muted-foreground mb-3">While you can't avoid taxes completely, you can minimize them:</p>
                 <ul className="list-disc pl-5 text-sm space-y-2">
                    <li>Use Index ETFs: Exchange-Traded Funds (ETFs) are generally more tax-efficient than mutual funds because their structure results in fewer taxable capital gains distributions.</li>
                    <li>Hold for the Long Term: Hold your investments for at least one year. This ensures any gains qualify for lower long-term capital gains tax rates instead of higher short-term rates.</li>
                    <li>Consider Tax-Loss Harvesting: This is a strategy where you sell an investment that has lost value to "harvest" the loss. This loss can then be used to offset gains from other investments, reducing your overall tax bill.</li>
                </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
              <Scale className="mr-2 h-5 w-5 text-primary" />
              Your Next-Dollar Decision: A Simple Framework
            </CardTitle>
            <CardDescription>After maxing retirement accounts, your choice boils down to a trade-off between flexibility and security.</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800">
                <h3 className="font-semibold flex items-center mb-2 text-green-800 dark:text-green-200">
                  <TrendingUp className="mr-2 h-5 w-5" /> Path 1: Invest in a Brokerage Account (Flexibility)
                </h3>
                <p className="text-sm font-semibold mb-2">Choose this path if your priority is maximizing long-term wealth and flexibility.</p>
                <ul className="list-disc pl-5 text-sm space-y-2">
                  <li>Higher Potential Returns: Historically, the stock market's average return (7-10% annually) has been higher than the interest rate on a typical mortgage (3-7%), making this the mathematically optimal choice for growing your net worth.</li>
                  <li>Liquidity: Money in a brokerage account is liquid. You can access it in a few days. Money in home equity is illiquid.</li>
                </ul>
            </div>
            <div className="p-4 border rounded-lg bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800">
              <h3 className="font-semibold flex items-center mb-2 text-blue-800 dark:text-blue-200">
                <HomeIcon className="mr-2 h-5 w-5" /> Path 2: Pay Down Low-Interest Debt (Peace of Mind)
              </h3>
              <p className="text-sm font-semibold mb-2">Choose this path if your priority is peace of mind and a guaranteed return.</p>
              <ul className="list-disc pl-5 text-sm space-y-2">
                <li>Guaranteed, Risk-Free Return: Paying off a 5% mortgage is equivalent to earning a risk-free, guaranteed 5% return on your money. The stock market offers no such guarantees. This can be very appealing, especially for more conservative individuals.</li>
                <li>Peace of Mind: Being completely debt-free provides immense psychological security and simplifies your financial life. Your largest monthly expense disappears.</li>
              </ul>
            </div>
          </CardContent>
           <CardFooter>
             <Alert variant="default" className="w-full">
                <Lightbulb className="h-4 w-4" />
                <AlertTitle>It's Not All or Nothing</AlertTitle>
                <AlertDescription>You can do both! A common strategy is to allocate a portion of your extra cash to each goal based on your priorities (e.g., 70% to brokerage, 30% to extra mortgage payments).</AlertDescription>
            </Alert>
           </CardFooter>
        </Card>
        
        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Your Future Self vs. Your Present Self</CardTitle>
                <CardDescription className="prose-sm max-w-lg mx-auto dark:prose-invert">
                  Tax-advantaged accounts protect your future. Your Freedom Account buys back your time. It’s the tool that lets you say yes to opportunities, whether that’s a career shift, a sabbatical, or retiring years earlier than planned.
                </CardDescription>
            </CardHeader>
            <CardContent>
                 <Button asChild>
                    <Link href={`/roadmaps/master-personal-finance${fromStep ? `?from=${fromStep}` : ''}`}>
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
