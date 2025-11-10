
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Building, TrendingUp, HandCoins, Info, CheckCircle, Search, LogIn, ArrowRight, AlertTriangle, UserCheck, BarChart, DollarSign, Plus, Target } from 'lucide-react';
import Link from 'next/link';
import { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { SmartGoalForm, type GoalFormValues } from '@/app/(app)/goals/components/goal-form';
import { useToast } from '@/hooks/use-toast';
import type { Goal } from '@/lib/types';
import { SAVINGS_CATEGORIES_FOR_SUMMARY } from '@/lib/constants';
import { ResponsiveContainer, LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend } from 'recharts';

const LOCAL_STORAGE_GOALS_KEY = 'finTrackPro_goals';

const formatCurrency = (value: number | null | undefined): string => {
    if (value === null || value === undefined) return '$0';
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 });
};

// --- Chart Calculation ---
const generateChartData = () => {
    const years = 30;
    const annualReturnRate = 0.10;
    const salary = 60000;
    const employeeContributionRate = 0.06;
    const employerMatchRate = 0.03;

    const annualEmployeeContribution = salary * employeeContributionRate;
    const annualEmployerMatch = salary * employerMatchRate;
    
    let balanceWithMatch = 0;
    let balanceWithoutMatch = 0;
    const data = [{ year: 0, withMatch: 0, withoutMatch: 0 }];

    for (let i = 1; i <= years; i++) {
        balanceWithoutMatch = (balanceWithoutMatch + annualEmployeeContribution) * (1 + annualReturnRate);
        balanceWithMatch = (balanceWithMatch + annualEmployeeContribution + annualEmployerMatch) * (1 + annualReturnRate);
        data.push({
            year: i,
            withMatch: parseFloat(balanceWithMatch.toFixed(2)),
            withoutMatch: parseFloat(balanceWithoutMatch.toFixed(2)),
        });
    }
    return data;
};

const chartData = generateChartData();

const CHART_COLORS = {
  withMatch: "hsl(var(--chart-1))",
  withoutMatch: "hsl(var(--chart-2))",
};


export default function EmployerMatchPage() {
  const { toast } = useToast();
  const [isGoalFormOpen, setIsGoalFormOpen] = useState(false);
  const searchParams = useSearchParams();
  const fromStep = searchParams.get('from');

  const goalDefaults: Partial<GoalFormValues> = {
    name: "Contribute to 401(k) to get full employer match",
    description: "Set my 401(k) contribution percentage high enough to receive the maximum possible match from my employer.",
    linkedCategory: "Retirement"
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
            <h1 className="text-3xl font-bold font-headline">Action: Get Your Full 401(k) Employer Match</h1>
            <p className="text-muted-foreground mt-2">Understand why capturing your full employer 401(k) match is the most critical first step in investing for your future.</p>
        </div>
        <Button onClick={() => setIsGoalFormOpen(true)}><Target className="mr-2 h-4 w-4" /> Set as a Goal</Button>
      </div>

      <div className="space-y-6">
        <Alert className="bg-primary/5 border-primary/20">
          <Building className="h-4 w-4" />
          <AlertTitle className="font-headline">What is a 401(k) Employer Match?</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>An employer match is a benefit where your company contributes money to your 401(k) retirement account when you do. It's essentially part of your compensation package. It is a bonus for saving for your own future.</p>
            <p>The rules vary by company, but a common formula is a 50% match on the first 6% of your salary. This means if you contribute 6% of your salary to your 401(k), your employer will add an extra amount equal to 3% of your salary, for free.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
              <TrendingUp className="mr-2 h-5 w-5 text-green-600" />
              The Staggering Opportunity Cost of Missing Out
            </CardTitle>
            <CardDescription>Failing to get the full match is like turning down a raise. This chart shows the 30-year difference between getting the match and not, assuming a $60,000 salary and 10% annual returns.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="h-[300px] w-full bg-muted/30 p-4 rounded-md">
                <ResponsiveContainer width="100%" height="100%">
                    <RechartsLineChart data={chartData} margin={{ top: 5, right: 20, bottom: 5, left: 10 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" unit="yr" fontSize={12} />
                        <YAxis tickFormatter={(value) => formatCurrency(value)} fontSize={12} />
                        <RechartsTooltip formatter={(value: number) => [formatCurrency(value), undefined]}/>
                        <Legend wrapperStyle={{fontSize: '0.8rem'}} />
                        <Line type="monotone" dataKey="withMatch" name="Portfolio With Match" stroke={CHART_COLORS.withMatch} strokeWidth={2} dot={false} />
                        <Line type="monotone" dataKey="withoutMatch" name="Portfolio Without Match" stroke={CHART_COLORS.withoutMatch} strokeDasharray="5 5" strokeWidth={2} dot={false} />
                    </RechartsLineChart>
                </ResponsiveContainer>
            </div>
            <Alert className="mt-4 bg-amber-50 dark:bg-amber-900/30 border-amber-300 dark:border-amber-800">
              <BarChart className="h-4 w-4 text-amber-600" />
              <AlertTitle className="font-semibold">The Real-World Impact</AlertTitle>
              <AlertDescription>
                <p className="text-sm text-amber-800 dark:text-amber-300">If you make {formatCurrency(60000)} per year and your company offers a 50% match on the first 6% of your salary, that's {formatCurrency(1800)} of free money each year. As the chart shows, after 30 years at a 10% average annual return, that free money and its growth results in a portfolio that is significantly larger.</p>
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
        
         <Card className="border-destructive/50 bg-destructive/5">
            <CardHeader>
                <CardTitle className="font-headline text-xl text-destructive flex items-center">
                    <AlertTriangle className="mr-2 h-5 w-5"/> Common Mistakes to Avoid
                </CardTitle>
                <CardDescription>Many people think they're getting the full match but aren't. Avoid these costly errors.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
                <div className="p-3 border-b border-destructive/20 last:border-b-0">
                    <h4 className="font-semibold">Under-Contributing</h4>
                    <p className="text-sm text-muted-foreground">If the match is "50% up to 6%," you must contribute the full 6% to get the maximum match. Contributing only 3% means you're leaving free money on the table.</p>
                </div>
                 <div className="p-3 border-b border-destructive/20 last:border-b-0">
                    <h4 className="font-semibold">Not Updating After a Raise</h4>
                    <p className="text-sm text-muted-foreground">Your contribution is based on a percentage of your pay. When you get a raise, your salary goes up, but if you don't check, your 401(k) provider might still be using your old salary for the calculation, causing you to contribute less than the required percentage.</p>
                </div>
                 <div className="p-3 border-b border-destructive/20 last:border-b-0">
                    <h4 className="font-semibold">Confusing Contribution Types</h4>
                    <p className="text-sm text-muted-foreground">Ensure you're contributing to the correct plan type (e.g., Pre-tax 401(k) or Roth 401(k)) that is eligible for the match. Some rare plans may have different rules for different contribution types.</p>
                </div>
            </CardContent>
        </Card>

        <Card>
          <CardHeader>
             <CardTitle className="font-headline text-xl">How to Get Your Full Match: A 4-Step Method</CardTitle>
             <CardDescription>Follow these simple steps to make sure you're not leaving free money on the table.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-4 p-4 border rounded-lg">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                  <Search className="h-6 w-6 text-muted-foreground" />
              </div>
              <div>
                  <h4 className="font-semibold">Step 1: Find Your Company's Match Formula</h4>
                  <p className="text-sm text-muted-foreground">Look in your benefits documentation, employee handbook, or HR portal. Look for phrases like "We match 100% of the first 3% of your pay" or "50 cents for every dollar up to 6%." If you can't find it, ask HR directly.</p>
              </div>
            </div>

             <div className="flex items-start gap-4 p-4 border rounded-lg">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                  <LogIn className="h-6 w-6 text-muted-foreground" />
              </div>
              <div>
                  <h4 className="font-semibold">Step 2: Log Into Your Retirement Plan Provider</h4>
                  <p className="text-sm text-muted-foreground">This is usually done through your company's HR system or a direct link to a provider like Fidelity, Vanguard, or Charles Schwab. Find the section for managing your 401(k) contributions.</p>
              </div>
            </div>

             <div className="flex items-start gap-4 p-4 border rounded-lg">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                  <CheckCircle className="h-6 w-6 text-muted-foreground" />
              </div>
              <div>
                  <h4 className="font-semibold">Step 3: Set Your Contribution Percentage</h4>
                  <p className="text-sm text-muted-foreground">Set your contribution to at least the minimum required to get the full match. If the rule is "50% match up to 6%", you MUST contribute at least 6%.</p>
                  <Alert className="mt-2 text-sm bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800">
                    <UserCheck className="h-4 w-4" />
                    <AlertTitle className="font-semibold">What if you can't afford the full match?</AlertTitle>
                    <AlertDescription>
                      That's okay. Start with what you can afford, even if it's just 1-2%. Then, set a reminder to increase it by 1% every six months or every time you get a raise. Many providers have an "auto-increase" feature. A small, gradual increase is often unnoticeable in your paycheck but makes a huge difference over time.
                    </AlertDescription>
                  </Alert>
              </div>
            </div>

             <div className="flex items-start gap-4 p-4 border rounded-lg">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                  <TrendingUp className="h-6 w-6 text-muted-foreground" />
              </div>
              <div>
                  <h4 className="font-semibold">Step 4: Choose Your Investments</h4>
                  <p className="text-sm text-muted-foreground">Contributing money is only half the battle. You must ensure that money is invested so it can grow. If you don't choose an investment, the money will likely sit in a very low-return cash or money market account by default.</p>
                  <Alert className="mt-2 text-sm">
                    <Info className="h-4 w-4" />
                    <AlertTitle className="font-semibold">A Simple, Powerful Default</AlertTitle>
                    <AlertDescription>
                     <p>If you're unsure what to pick, look for a "Target-Date Fund" or "Lifecycle Fund". These are "all-in-one" funds that automatically adjust their risk level based on your expected retirement year. They are a fantastic, low-effort way to get a diversified portfolio.</p>
                     <p className="mt-2 text-xs italic">For those who want more control, you can also build a simple portfolio with a few low-cost index funds (e.g., a U.S. stock fund, an international stock fund, and a bond fund). Both approaches work. The key is to get invested.</p>
                    </AlertDescription>
                  </Alert>
              </div>
            </div>
          </CardContent>
        </Card>

        <Alert variant="default" className="bg-amber-50 dark:bg-amber-900/20 border-amber-300 dark:border-amber-700 text-amber-900 dark:text-amber-200 [&>svg]:text-amber-500 dark:[&>svg]:text-amber-400">
          <Info className="h-4 w-4" />
          <AlertTitle className="font-headline text-amber-900 dark:text-amber-200">A Note on Vesting Schedules</AlertTitle>
          <AlertDescription className="text-amber-800 dark:text-amber-300">
            <p>"Vesting" means ownership. While your contributions are always 100% yours, you may need to work for a certain period (e.g., 1-3 years) to become 100% vested in, or own, the money your employer contributes. This is a retention tool for companies. Even with a vesting schedule, you should still contribute to get the match, as you will eventually own it if you stay with the company.</p>
          </AlertDescription>
        </Alert>
        
        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">COMPLETE THIS OBJECTIVE BEFORE YOU MOVE ON</CardTitle>
                <CardDescription>
                    Log into your workplace retirement plan now and ensure your contribution is set high enough to capture the full employer match. This is the single most important first step.
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

