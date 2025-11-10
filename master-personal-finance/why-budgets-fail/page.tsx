'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { ThumbsDown, Lightbulb, CheckCircle, ArrowRight, Brain, Target, RotateCw, CalendarOff, Home, ShieldCheck, Wallet, HandCoins, Zap, Info, ArrowDown } from 'lucide-react';
import Link from 'next/link';

const pitfalls = [
  {
    icon: Brain,
    title: "The Perfectionist's Prison: Your Budget Is Too Restrictive",
    problem: "This is the #1 reason budgets fail. You create a 'perfect' budget with zero room for error, cutting all fun spending. After a week of feeling deprived, you break the budget on one small purchase, feel like a failure, and abandon the whole thing.",
    solution: "A budget is a plan, not a prison. The goal is not to spend nothing; it's to spend consciously. Allocate a specific, reasonable amount for 'guilt-free' spending on hobbies, dining out, or fun. Giving yourself permission to spend makes the plan sustainable."
  },
  {
    icon: Target,
    title: "The 'Why' Void: You Have No Clear Goals",
    problem: "Without a motivating reason to save, a budget just feels like a chore. 'Saving more money' is a vague idea, but 'Saving $500 for a weekend trip next month' is a powerful, tangible goal that makes the daily trade-offs feel worthwhile.",
    solution: "Define your 'why'. Use a goal-setting tool to create specific, exciting goals (e.g., a vacation, a down payment, concert tickets). When you're tempted to overspend, you can remind yourself what you're truly working towards."
  },
  {
    icon: Home,
    title: "Majoring in the Minors: Focusing on the Small Stuff",
    problem: "You meticulously track every $5 coffee but ignore the big decisions that truly sink your financial plan. You feel guilty about small pleasures while your oversized car payment or rent/mortgage is the real issue.",
    solution: "Get the big decisions right first—typically housing, transportation, and food. Optimizing these three categories has an exponentially larger impact than cutting out small joys. If you’re paying $2,000/month in rent on a $50,000 salary, no amount of latte-cutting will fix that. But if you reduce housing to $1,500, you instantly free up $6,000/year, the equivalent of skipping 1,200 coffees."
  },
  {
    icon: CalendarOff,
    title: "The Irregular Expense Ambush: Forgetting Non-Monthly Bills",
    problem: "Your monthly budget works great until you're hit with a big, non-monthly expense like annual car registration, insurance premiums, back-to-school costs, holiday gifts, or a wedding. These predictable-but-infrequent costs can wreck your plan if you don't prepare for them.",
    solution: "Create 'sinking funds.' If you know you'll spend around $600 on holiday gifts in December, set aside $50 every month into a separate savings account for that specific purpose. When the holidays arrive, the money is already there waiting, and it doesn't disrupt your monthly cash flow."
  }
];

export default function WhyBudgetsFailPage() {
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
        <h1 className="text-3xl font-bold font-headline">Why Most Budgets Fail (And How to Make Yours Succeed)</h1>
        <p className="text-muted-foreground mt-2">Understand the common pitfalls of budgeting and how to build a plan that actually works.</p>
      </div>
      <div className="space-y-6">
        <Alert variant="destructive">
          <ThumbsDown className="h-4 w-4" />
          <AlertTitle className="font-headline">The Budgeting Myth</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>A budget isn’t about spending less, it’s about spending better. If you love travel, your budget should help you travel more, not less. The magic is in cutting what doesn’t matter so you can double down on what does.</p>
            <p className="font-semibold">Most budgets fail because they create guilt. A good budget does the opposite: it gives you freedom. You stop worrying about whether you can afford things, because you already know what’s covered. This reframes budgeting as peace of mind, not a source of stress.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">The 4 Common Budget-Wreckers</CardTitle>
            <CardDescription>Understanding these common failure points is the first step to overcoming them.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {pitfalls.map(item => (
              <div key={item.title} className="p-4 border rounded-lg bg-card shadow-sm">
                <h3 className="font-semibold text-lg flex items-center mb-2">
                  <item.icon className="mr-3 h-6 w-6 text-destructive" />
                  {item.title}
                </h3>
                <p className="text-sm italic text-muted-foreground mb-3"><strong>The Problem:</strong> {item.problem}</p>
                <div className="p-3 bg-green-500/10 rounded-lg text-sm">
                  <h4 className="font-semibold flex items-center text-green-700 dark:text-green-300">
                    <Lightbulb className="mr-2 h-4 w-4" /> The Solution
                  </h4>
                  <p className="text-green-600 dark:text-green-400 mt-1">{item.solution}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        
         <Card className="border-primary/50 bg-primary/5">
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
              <ShieldCheck className="mr-2 h-5 w-5 text-primary" />
              A Powerful Alternative: The "Pay Yourself First" Plan
            </CardTitle>
            <CardDescription>Also known as the "anti-budget," this is a simple yet incredibly effective system for people who hate tracking every penny but are serious about their goals.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <p>Instead of focusing on what you're spending, this method focuses on what you're <strong>saving</strong>. It automates your success upfront.</p>
            
            <div className="my-6 flex flex-col items-center gap-2">
                <div className="p-3 bg-background rounded-lg border shadow-sm w-44 text-center">
                    <Wallet className="mx-auto h-6 w-6 text-primary" />
                    <h4 className="font-semibold text-sm mt-1">Income</h4>
                    <p className="text-xs text-muted-foreground">Your Paycheck</p>
                </div>
                <ArrowDown className="h-6 w-6 text-muted-foreground" />
                <div className="p-3 bg-background rounded-lg border shadow-sm w-44 text-center">
                    <Zap className="mx-auto h-6 w-6 text-green-600" />
                    <h4 className="font-semibold text-sm mt-1">Savings First</h4>
                    <p className="text-xs text-muted-foreground">Automate savings</p>
                </div>
                <ArrowDown className="h-6 w-6 text-muted-foreground" />
                <div className="p-3 bg-background rounded-lg border shadow-sm w-44 text-center">
                    <HandCoins className="mx-auto h-6 w-6 text-orange-600" />
                    <h4 className="font-semibold text-sm mt-1">Bills Second</h4>
                    <p className="text-xs text-muted-foreground">Automate expenses</p>
                </div>
                <ArrowDown className="h-6 w-6 text-muted-foreground" />
                <div className="p-3 bg-background rounded-lg border shadow-sm w-44 text-center">
                    <Lightbulb className="mx-auto h-6 w-6 text-blue-600" />
                    <h4 className="font-semibold text-sm mt-1">Spend the Rest</h4>
                    <p className="text-xs text-muted-foreground">Guilt-free money</p>
                </div>
            </div>

            <ol className="list-decimal list-inside space-y-4">
                <li>
                    <h4 className="font-semibold">Automate Your Goals</h4>
                    <p className="text-sm text-muted-foreground">This is the most important step. Decide how much you need to save each month for your big goals (retirement, down payment, etc.). Set up automatic transfers from your checking account to your savings and investment accounts for the day after you get paid. This money is now non-negotiable and invisible.</p>
                </li>
                 <li>
                    <h4 className="font-semibold">Automate Your Bills</h4>
                    <p className="text-sm text-muted-foreground">Set up automatic payments for all your fixed bills like rent/mortgage, utilities, and insurance. These are your essential expenses.</p>
                </li>
                 <li>
                    <h4 className="font-semibold">Spend the Rest, Guilt-Free</h4>
                    <p className="text-sm text-muted-foreground">The money left in your checking account after your savings and bills are paid is yours to spend on whatever you want, completely guilt-free. You don't need to track every coffee or meal because you know you've already taken care of what's most important.</p>
                </li>
            </ol>
             <Alert className="mt-4">
                <Lightbulb className="h-4 w-4" />
                <AlertTitle>Why It Works</AlertTitle>
                <AlertDescription>
                   A successful budget isn’t about perfection, it’s about consistency. When you automate your savings and free yourself from guilt, you turn budgeting from a source of stress into a tool for freedom. That’s when money starts working for you.
                </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
        
        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you understand the common reasons budgets fail, you're ready to define your "why" and build a plan that lasts.
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
