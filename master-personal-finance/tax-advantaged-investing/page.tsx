
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


export default function TaxAdvantagedInvestingPage() {
  const { toast } = useToast();
  const [isGoalFormOpen, setIsGoalFormOpen] = useState(false);
  const searchParams = useSearchParams();
  const fromStep = searchParams.get('from');

  const goalDefaults: Partial<GoalFormValues> = {
    name: "Max out IRA / HSA Contributions",
    description: "Contribute the maximum annual amount to tax-advantaged accounts like an IRA and/or HSA.",
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
        <h1 className="text-3xl font-bold font-headline">Tax-Advantaged Accounts</h1>
        <p className="text-muted-foreground mt-2">Learn how to use powerful accounts like IRAs and HSAs to supercharge your retirement savings.</p>
      </div>

      <div className="space-y-6">
        <Alert className="bg-primary/5 border-primary/20">
          <HeartPulse className="h-4 w-4" />
          <AlertTitle className="font-headline">Your Financial Foundation is Set</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>You've already taken advantage of your employer's 401(k) match and built a full emergency fund. Now, the goal is to take advantage of other powerful retirement accounts. Tax-advantaged accounts like IRAs and HSAs allow your investments to grow either tax-deferred or completely tax-free, which can result in hundreds of thousands of dollars more over your lifetime compared to a standard taxable brokerage account.</p>
          </AlertDescription>
        </Alert>

        <Alert variant="default" className="bg-blue-50/50 dark:bg-blue-900/30">
            <Lightbulb className="h-4 w-4" />
            <AlertTitle className="font-semibold">The Investor's Cheat Code</AlertTitle>
            <AlertDescription>
                Think of tax-advantaged accounts as a legal cheat code for building wealth. They let you keep more of your own money working for you instead of handing it over to the IRS. This isn't a boring rule set; it's a powerful opportunity.
            </AlertDescription>
        </Alert>
        
        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-xl">Your Next-Dollar Roadmap</CardTitle>
                <CardDescription>After getting your 401(k) match, here is the clear priority order for where your next dollar of savings should go to maximize tax benefits.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
                {prioritySteps.map((step, index) => (
                    <div key={step.title} className="flex items-start gap-4 p-3 border-l-4 border-primary/50 bg-muted/40 rounded-r-md">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold flex-shrink-0">{index + 1}</div>
                        <div>
                            <h4 className="font-semibold">{step.title}</h4>
                            <p className="text-sm text-muted-foreground">{step.description}</p>
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-xl">The Power of Tax-Free Growth: A 30-Year Example</CardTitle>
                <CardDescription>This example illustrates the staggering difference between investing in a Roth IRA versus a standard taxable brokerage account, assuming a single {formatCurrency(taxableExample.initialInvestment)} investment growing at {taxableExample.rate*100}% annually.</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-6">
                <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/30 border border-green-200">
                    <h3 className="font-semibold text-green-700 dark:text-green-300">In a Roth IRA</h3>
                    <p className="text-4xl font-bold my-4">{formatCurrency(taxableExample.finalValue)}</p>
                    <p className="text-sm text-muted-foreground">Final Value (Tax-Free)</p>
                </div>
                 <div className="p-4 rounded-lg bg-orange-50 dark:bg-orange-900/30 border border-orange-200">
                    <h3 className="font-semibold text-orange-700 dark:text-orange-300">In a Taxable Account</h3>
                    <p className="text-4xl font-bold my-4">{formatCurrency(taxableExample.netProceeds())}</p>
                    <p className="text-sm text-muted-foreground">Net Value After 15% Capital Gains Tax</p>
                </div>
            </CardContent>
             <CardFooter>
                 <Alert>
                    <Zap className="h-4 w-4" />
                    <AlertTitle className="font-semibold">The Result</AlertTitle>
                    <AlertDescription>
                       Simply by using the tax-advantaged "wrapper" of a Roth IRA, you end up with over {formatCurrency(taxableExample.finalValue - taxableExample.netProceeds())} in additional wealth. That is the power of the cheat code.
                    </AlertDescription>
                </Alert>
            </CardFooter>
        </Card>


        <Card>
          <CardHeader>
             <CardTitle className="font-headline text-xl">Roth vs. Traditional IRA: A Strategic Choice</CardTitle>
             <CardDescription>Choosing between a Roth and Traditional IRA is about more than just predicting future tax rates, it's a strategic decision for your present and future self.</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800">
                  <h3 className="font-semibold flex items-center mb-2 text-green-800 dark:text-green-200">
                      Traditional IRA
                  </h3>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Tax Treatment: Contributions may be tax-deductible now, reducing your current taxable income.</li>
                    <li>Growth: Investments grow tax-deferred. This means you do not pay taxes on capital gains, dividends, or interest year after year.</li>
                    <li>Withdrawals: You pay ordinary income tax on all withdrawals in retirement (both contributions and growth).</li>
                     <li className="font-semibold mt-2">Best For:</li>
                     <ul className="list-disc pl-5 mt-1 space-y-1">
                        <li>Those who need to lower their Modified Adjusted Gross Income (MAGI) in the current year to qualify for other tax deductions or credits.</li>
                        <li>High-income earners looking for a way to reduce their current tax liability. For example, if you earn $160k and contribute $10k to a Traditional IRA, your taxable income is lowered to $150k, which might make you eligible for other benefits or tax credits.</li>
                     </ul>
                  </ul>
              </div>
              <div className="p-4 border rounded-lg bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800">
                  <h3 className="font-semibold flex items-center mb-2 text-blue-800 dark:text-blue-200">
                      Roth IRA
                  </h3>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Tax Treatment: Contributions are made with after-tax money (no upfront deduction).</li>
                    <li>Growth: Investments grow completely tax-free.</li>
                    <li>Withdrawals: Qualified withdrawals in retirement are completely tax-free.</li>
                    <li className="font-semibold mt-2">Best For:</li>
                     <ul className="list-disc pl-5 mt-1 space-y-1">
                        <li>Those who believe their tax rate will be higher in retirement than it is today.</li>
                        <li>Investors who want tax diversification in retirement, providing a source of income that won't be taxed.</li>
                        <li>High-income earners who are over the direct contribution limit may be able to contribute via a "Backdoor Roth IRA."</li>
                     </ul>
                  </ul>
              </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
             <CardTitle className="font-headline text-xl">The 'Secret Weapon': Health Savings Accounts (HSAs)</CardTitle>
             <CardDescription>If you are enrolled in a High-Deductible Health Plan (HDHP), an HSA is one of the most powerful savings tools available.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
              <p>An HSA offers a unique triple tax advantage, making it superior to even a 401(k) or IRA for retirement savings if used correctly:</p>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div className="p-3 bg-muted/50 rounded-lg">
                        <Banknote className="h-8 w-8 text-primary mx-auto mb-2"/>
                        <h4 className="font-semibold">1. Tax-Deductible Contributions</h4>
                        <p className="text-xs text-muted-foreground">Contributions reduce your taxable income for the year, similar to a Traditional IRA.</p>
                    </div>
                     <div className="p-3 bg-muted/50 rounded-lg">
                        <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2"/>
                        <h4 className="font-semibold">2. Tax-Free Growth</h4>
                        <p className="text-xs text-muted-foreground">Your money can be invested and grows completely tax-free, just like a Roth IRA.</p>
                    </div>
                     <div className="p-3 bg-muted/50 rounded-lg">
                        <GraduationCap className="h-8 w-8 text-primary mx-auto mb-2"/>
                        <h4 className="font-semibold">3. Tax-Free Withdrawals</h4>
                        <p className="text-xs text-muted-foreground">Withdrawals are completely tax-free at any age, as long as they are used for qualified medical expenses.</p>
                    </div>
               </div>
               <Alert>
                  <Lightbulb className="h-4 w-4" />
                  <AlertTitle>HSA as a Retirement Vehicle</AlertTitle>
                  <AlertDescription>
                    Many people use their HSA as a supplemental retirement account. By paying for current medical expenses out-of-pocket and letting the HSA funds grow, the account can become a significant tax-free resource. After age 65, you can withdraw money from an HSA for any reason, and it will be taxed as ordinary income, just like a Traditional IRA, but withdrawals for medical expenses remain tax-free.
                  </AlertDescription>
                </Alert>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
             <CardTitle className="font-headline text-xl">The Education Powerhouse: 529 Plans</CardTitle>
             <CardDescription>A 529 plan is a tax-advantaged savings plan designed to encourage saving for future education costs.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>While not a retirement account, 529 plans are a critical tool for families looking to save for educational expenses without derailing their own retirement.</p>
            <ul className="list-disc pl-5 text-sm space-y-2">
                <li>Tax-Free Growth & Withdrawals: Similar to a Roth IRA, investments in a 529 plan grow tax-free, and withdrawals are also tax-free when used for qualified education expenses (e.g., college tuition, K-12 private school tuition, room and board).</li>
                <li>State Tax Benefits: Many states offer a state income tax deduction or credit for contributions to their specific 529 plan.</li>
                <li>Flexibility: The beneficiary can be changed to another eligible family member (like a sibling or even yourself) if the funds aren't needed by the original beneficiary.</li>
                <li>Roth IRA Rollover: Recent legislation allows for a lifetime maximum of up to $35,000 to be rolled over from a 529 plan into a Roth IRA for the beneficiary, subject to certain conditions. This provides an excellent safety valve if the funds are not used for education.</li>
            </ul>
             <Alert variant="default" className="mt-4">
                <Lightbulb className="h-4 w-4" />
                <AlertTitle>Disclaimer</AlertTitle>
                <AlertDescription>
                   Rules for 529 plans, especially regarding rollovers, are subject to change based on federal and state legislation. Always consult the most current rules or a financial professional.
                </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-xl">Answering Common Questions</CardTitle>
                <CardDescription>Let's address some common concerns about using these accounts.</CardDescription>
            </CardHeader>
            <CardContent>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Isn't my money 'locked up' until retirement?</AccordionTrigger>
                        <AccordionContent>
                           <p className="text-sm">This is a valid concern, but it's important to frame these accounts correctly. These are retirement accounts, and their power comes from long-term, uninterrupted compounding. They should not be treated as a backup emergency fund.</p>
                           <ul className="list-disc pl-5 mt-2 space-y-2 text-sm">
                               <li>
                                  Roth IRA Contributions: The IRS allows you to withdraw your direct contributions (not earnings) at any time without tax or penalty. However, this should only be considered a last-resort option in a true emergency. To build wealth, you must let your investments compound. Using your Roth IRA as an emergency fund means you are stealing from your future self. A separate High-Yield Savings Account (HYSA) is the proper tool for emergencies.
                               </li>
                               <li>HSA Funds: You can withdraw money from your HSA tax-free and penalty-free at any age for qualified medical expenses, making it a powerful healthcare safety net that also doubles as a retirement account.</li>
                               <li>Hardship Withdrawals: While not ideal, 401(k) and IRA plans have provisions for hardship withdrawals for specific, dire circumstances, though these often come with taxes and penalties.</li>
                           </ul>
                        </AccordionContent>
                    </AccordionItem>
                     <AccordionItem value="item-2">
                        <AccordionTrigger>What if tax laws change in the future?</AccordionTrigger>
                        <AccordionContent>
                            <p className="text-sm">This is a possibility, as tax laws are never permanent. However, this uncertainty is precisely why using different types of accounts is so powerful. By having a mix of tax-free accounts (Roth IRA, Roth 401k), tax-deferred accounts (Traditional IRA, Traditional 401k), and taxable accounts, you create tax diversification. This gives you the flexibility to manage your withdrawals in retirement to minimize your overall tax burden, no matter what the future tax laws look like.</p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </CardContent>
        </Card>
        
        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Ready for the Next Step?</CardTitle>
                <CardDescription>
                    Now that you understand the power of IRAs and HSAs, you can build a robust, tax-efficient investment strategy.
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
