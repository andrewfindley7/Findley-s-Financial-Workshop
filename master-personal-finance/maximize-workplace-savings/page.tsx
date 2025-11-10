
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { HeartPulse, ArrowRight, Lightbulb, Banknote, Landmark, GraduationCap, TrendingUp, Home, CheckCircle, HelpCircle, Brain, Briefcase, Zap, Info, PiggyBank } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { SmartGoalForm, type GoalFormValues } from '@/app/(app)/goals/components/goal-form';
import { useToast } from '@/hooks/use-toast';
import type { Goal } from '@/lib/types';
import { SAVINGS_CATEGORIES_FOR_SUMMARY } from '@/lib/constants';
import { useSearchParams } from 'next/navigation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";


const LOCAL_STORAGE_GOALS_KEY = 'finTrackPro_goals';

const formatCurrency = (value: number) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 });
};

const prioritySteps = [
    { title: "Step 1: Get Your Full 401(k) Match", description: "This is a 50-100% risk-free return. Never leave this 'free money' on the table. It is your number one priority.", icon: Briefcase },
    { title: "Step 2: Max Out Your Roth IRA", description: "If you are eligible, a Roth IRA offers tax-free growth and withdrawals, providing immense flexibility and certainty in retirement.", icon: Landmark },
    { title: "Step 3: Max Out Your Health Savings Account (HSA)", description: "If eligible, this is the most powerful retirement account due to its triple tax advantage (tax-deductible, tax-free growth, tax-free medical withdrawals).", icon: HeartPulse },
    { title: "Step 4: Contribute More to Your 401(k) & Fund a 529 Plan", description: "After maxing your IRA & HSA, return to your workplace plan to contribute more. For parents, this is also the prime time to fund a 529 plan for children's education.", icon: GraduationCap },
    { title: "Step 5: Invest in a Taxable Brokerage Account", description: "Once all tax-advantaged space is used, use a standard brokerage account to continue building wealth for any long-term goal.", icon: TrendingUp },
];


export default function MaximizeWorkplaceSavingsPage() {
  const { toast } = useToast();
  const [isGoalFormOpen, setIsGoalFormOpen] = useState(false);
  const searchParams = useSearchParams();
  const fromStep = searchParams.get('from');

  const goalDefaults: Partial<GoalFormValues> = {
    name: "Max out 401(k) Contributions",
    description: "Contribute the maximum annual IRS limit to my workplace 401(k) plan.",
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

  const taxableExample = {
    initialInvestment: 10000,
    years: 30,
    rate: 0.10,
    get finalValue() { return this.initialInvestment * Math.pow(1 + this.rate, this.years); },
    capitalGain() { return this.finalValue - this.initialInvestment; },
    taxRate: 0.15,
    taxOwed() { return this.capitalGain() * this.taxRate },
    netProceeds() { return this.finalValue - this.taxOwed() },
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
        <h1 className="text-3xl font-bold font-headline">Maximize Employer Retirement Plans</h1>
        <p className="text-muted-foreground mt-2">After funding your IRA/HSA, circle back to your workplace plan to accelerate your savings.</p>
        <Button onClick={() => setIsGoalFormOpen(true)} className="mt-4">Set as a Goal</Button>
      </div>
      <div className="space-y-6">
        <Alert className="bg-primary/5 border-primary/20">
          <PiggyBank className="h-4 w-4" />
          <AlertTitle className="font-headline">Filling Your Largest Bucket</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>You've already taken advantage of your employer's 401(k) match and built a full emergency fund. Now, the goal is to take advantage of other powerful retirement accounts. Tax-advantaged accounts like IRAs and HSAs allow your investments to grow either tax-deferred or completely tax-free, which can result in hundreds of thousands of dollars more over your lifetime compared to a standard taxable brokerage account.</p>
          </AlertDescription>
        </Alert>
        
        <Card>
          <CardHeader>
             <CardTitle className="font-headline text-xl">Traditional vs. Roth 401(k): A Strategic Choice</CardTitle>
             <CardDescription>Many employers now offer both a Traditional and a Roth option for their workplace plan. The choice impacts when you pay taxes.</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800">
                  <h3 className="font-semibold flex items-center mb-2 text-green-800 dark:text-green-200">
                      Traditional 401(k) / 403(b)
                  </h3>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Tax Treatment: Contributions are tax-deductible, which lowers your taxable income today.</li>
                    <li>Growth: Investments grow tax-deferred.</li>
                    <li>Withdrawals: Both your contributions and all the growth are taxed as ordinary income in retirement.</li>
                  </ul>
              </div>
              <div className="p-4 border rounded-lg bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800">
                  <h3 className="font-semibold flex items-center mb-2 text-blue-800 dark:text-blue-200">
                      Roth 401(k) / 403(b)
                  </h3>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Tax Treatment: Contributions are made with after-tax money (no upfront tax break).</li>
                    <li>Growth: Investments grow completely tax-free.</li>
                    <li>Withdrawals: Both your contributions and all the growth are 100% tax-free in retirement.</li>
                  </ul>
              </div>
          </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-xl">Comparative Analysis: Which 401(k) Option is Right for You?</CardTitle>
                <CardDescription>The "best" choice is not about predicting the future; it's about making a strategic decision based on your current financial situation and goals.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4 border rounded-lg bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800">
                        <h3 className="font-semibold flex items-center mb-2 text-blue-800 dark:text-blue-200">
                          <CheckCircle className="mr-2 h-5 w-5"/> The Case for a Roth 401(k) (The Default for Most)
                        </h3>
                         <p className="text-xs text-muted-foreground mb-2">If you don't have a specific reason to lower your current tax bill, the Roth 401(k) is often the superior choice for long-term planning.</p>
                        <ul className="list-disc pl-5 text-sm space-y-2">
                          <li>
                            <strong>Simplicity and Certainty:</strong> With a Roth, the money is yours, free and clear. If you have $1 million in a Roth account at retirement, you have $1 million to spend. A Traditional account with $1 million is really $1 million minus your future, unknown tax bill.
                          </li>
                           <li>
                            <strong>Tax Diversification:</strong> Having a source of tax-free income in retirement is incredibly powerful. It gives you flexibility to manage your taxable income from other sources (like pensions or Traditional IRAs) and can help keep you in a lower tax bracket.
                           </li>
                           <li>
                            <strong>Hedging Against Future Tax Hikes:</strong> Most people agree that tax rates are more likely to go up than down in the future. By paying your taxes now, you lock in today's rates and protect yourself from any future increases.
                           </li>
                        </ul>
                    </div>
                    <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800">
                        <h3 className="font-semibold flex items-center mb-2 text-green-800 dark:text-green-200">
                           <HelpCircle className="mr-2 h-5 w-5"/> The Case for a Traditional 401(k) (A Strategic Tool)
                        </h3>
                         <p className="text-xs text-muted-foreground mb-2">A Traditional 401(k) is best used as a tool when you have a clear, specific reason to lower your taxable income this year.</p>
                        <ul className="list-disc pl-5 text-sm space-y-2">
                          <li>
                            <strong>You are in your absolute peak earning years.</strong> If your income is the highest it will ever be, the immediate tax deduction is most valuable now.
                          </li>
                          <li>
                            <strong>You need to lower your Modified Adjusted Gross Income (MAGI).</strong> This is a powerful strategy. For example, if you earn $160k, you might be ineligible for certain tax credits or the ability to contribute to a Roth IRA. Contributing $11k to a Traditional 401(k) could lower your MAGI to $149k, potentially making you eligible for those benefits.
                          </li>
                           <li>
                            <strong>You plan to do Roth conversions in retirement.</strong> Some sophisticated investors use a Traditional account to get the tax break now, with the plan to convert the funds to a Roth IRA during planned low-income years in retirement.
                          </li>
                        </ul>
                    </div>
                </div>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-xl">A Career-Long Strategy: Adjusting Your Contributions Over Time</CardTitle>
                <CardDescription>Your income and tax situation won’t stay the same, neither should your contribution strategy.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                    <TrendingUp className="h-5 w-5 text-primary mt-1" />
                    <div>
                        <h4 className="font-semibold">Early Career (Lower Tax Bracket)</h4>
                        <p className="text-sm text-muted-foreground">Favor Roth contributions. Paying taxes now while your income and tax rate are relatively low is highly efficient. You are paying taxes on the "seed," not the much larger "harvest" later on.</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <TrendingUp className="h-5 w-5 text-primary mt-1" />
                    <div>
                        <h4 className="font-semibold">Mid-Career (Moderate to High Bracket)</h4>
                        <p className="text-sm text-muted-foreground">Consider a blend of Roth and Traditional contributions (e.g., a 50/50 split). This provides "tax diversification," giving you both tax-free and taxable income streams in retirement, which offers flexibility to manage your future tax bills.</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <TrendingUp className="h-5 w-5 text-primary mt-1" />
                    <div>
                        <h4 className="font-semibold">Peak Earning Years (Highest Tax Bracket)</h4>
                        <p className="text-sm text-muted-foreground">Heavily favor Traditional contributions. The immediate tax deduction is most valuable when your income is at its highest, significantly reducing your current tax liability.</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <TrendingUp className="h-5 w-5 text-primary mt-1" />
                    <div>
                        <h4 className="font-semibold">Retirement / Transition Years</h4>
                        <p className="text-sm text-muted-foreground">This is the prime time to consider Roth conversions. In years with temporarily low income (e.g., after leaving a job but before taking Social Security), you can convert funds from your Traditional accounts to Roth accounts at a much lower tax rate than you would have paid during your peak years.</p>
                    </div>
                </div>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-xl">The Behavioral Edge: Automating Your Success</CardTitle>
                <CardDescription>It’s not just about knowing the math. Most workers underfund their plans for psychological reasons.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                 <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div className="p-3 bg-muted/50 rounded-lg">
                        <h4 className="font-semibold text-sm">Present Bias</h4>
                        <p className="text-xs text-muted-foreground">We naturally prioritize today’s paycheck over tomorrow’s security.</p>
                    </div>
                     <div className="p-3 bg-muted/50 rounded-lg">
                        <h4 className="font-semibold text-sm">Complexity Avoidance</h4>
                        <p className="text-xs text-muted-foreground">Too many choices in a 401(k) plan can paralyze us into inaction.</p>
                    </div>
                     <div className="p-3 bg-muted/50 rounded-lg">
                        <h4 className="font-semibold text-sm">Invisibility of Gains</h4>
                        <p className="text-xs text-muted-foreground">The future benefits feel abstract and less rewarding than immediate spending.</p>
                    </div>
               </div>
               <Alert variant="default" className="bg-green-500/10 border-green-500/20">
                    <Zap className="h-4 w-4 text-green-600" />
                    <AlertTitle className="text-green-700 dark:text-green-300 font-semibold">The Simple, Powerful Solution: Automatic Escalation</AlertTitle>
                    <AlertDescription className="text-green-600 dark:text-green-400">
                        <p>The best way to fight these biases is to remove yourself from the equation. Set up your workplace retirement plan to automatically increase your contribution by 1% every single year. Many plans have a feature called "Annual Increase" or "Auto-Escalate."</p>
                        <p className="mt-2">A 1% increase is so small you likely won't even notice it in your paycheck, but over a decade, it can dramatically increase your savings rate and total nest egg. This harnesses the power of inertia in your favor.</p>
                    </AlertDescription>
                </Alert>
            </CardContent>
        </Card>
        
        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Ready for the Final Step?</CardTitle>
                <CardDescription>
                    Once you are maximizing all available tax-advantaged accounts, you can move on to building wealth for other life goals.
                </CardDescription>
            </CardHeader>
            <CardContent>
                 <Button asChild>
                    <Link href={`/roadmaps/master-personal-finance${fromStep ? `?from=${fromStep}`: ''}`}>
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
