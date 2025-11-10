'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Zap, Brain, PiggyBank, ShieldCheck, Target, ArrowRight, Lightbulb, Footprints, ListPlus, Timer, Info } from 'lucide-react';
import Link from 'next/link';

const stepsToAction = [
  {
    icon: Lightbulb,
    title: "1. Know Your Payday",
    description: "Identify the exact day your paycheck hits your bank account. This is your trigger day for all financial actions."
  },
  {
    icon: PiggyBank,
    title: "2. Open a Separate Savings Account",
    description: "Your savings and investments should live in an account separate from your daily checking account. This creates a psychological barrier and reduces the temptation to spend it."
  },
  {
    icon: Zap,
    title: "3. Set Up Automatic Transfers",
    description: "This is the most critical step. Schedule an automatic, recurring transfer from your checking account to your savings/investment account for the day after your payday. Treat this transfer like a bill that must be paid."
  }
];

const stressSubstitutes = [
  {
    icon: Footprints,
    title: "Go for a Walk (or Any Physical Activity)",
    description: "Physical movement is a powerful pattern interrupt. Before making an emotional purchase, commit to a 10-minute walk. This creates space between the trigger (stress) and the action (spending), often allowing the impulse to fade."
  },
  {
    icon: ListPlus,
    title: "Add it to a 'Wish List'",
    description: "Instead of clicking 'Buy Now,' add the item to a dedicated wish list in a notes app. This acknowledges the desire without fulfilling it immediately, giving you time to evaluate if you truly want or need it later when you're in a calmer state of mind."
  },
  {
    icon: Timer,
    title: "The 24-Hour Rule",
    description: "For any unplanned, non-essential purchase, enforce a mandatory 24-hour waiting period. If you still feel the purchase is necessary and it fits your budget after a full day has passed, you can reconsider. More often than not, the urge will have passed."
  },
];

export default function StopStressSpendingPage() {
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
        <h1 className="text-3xl font-bold font-headline">Stop Stress Spending: A Proactive Lesson</h1>
        <p className="text-muted-foreground mt-2">Learn how to build wealth automatically and remove the temptation of emotional spending.</p>
      </div>
      <div className="space-y-6">
        <Alert variant="destructive">
          <Brain className="h-4 w-4" />
          <AlertTitle className="font-headline">The Cycle of Stress Spending</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>It starts with a bad day. You’re anxious, tired, or bored, and suddenly that online order or late-night DoorDash feels like the answer. Ten minutes later, you might feel worse, and your bank account does too. This is the cycle of stress spending: making unplanned purchases to cope with negative feelings, which often leads to guilt and more financial strain.</p>
            <p className="font-semibold">The solution isn't about having more willpower; it's about creating a system where willpower isn't needed.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
              <ShieldCheck className="mr-2 h-5 w-5 text-primary" />
              The Structural Fix: Pay Yourself First
            </CardTitle>
            <CardDescription>This simple shift in mindset is the most powerful way to break the stress spending cycle and build wealth consistently.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">"Paying yourself first" means you treat your savings and investment contributions as the <strong>most important bill you have</strong>. Instead of saving what's left after spending, you spend what's left after saving. The money for your future goals is taken off the top, right after you get paid. The rest of the money in your checking account is then available for you to spend guilt-free on your needs and wants, because you know your future is already taken care of.</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">How to Make It Effortless: The Power of Automation</CardTitle>
            <CardDescription>The key to paying yourself first is to make it automatic. This removes emotion and decision fatigue from the process.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {stepsToAction.map(item => (
              <div key={item.title} className="p-4 border rounded-lg bg-muted/40 flex items-start gap-4">
                 <div className="flex h-10 w-10 items-center justify-center rounded-full bg-background mt-1">
                    <item.icon className="h-6 w-6 text-muted-foreground" />
                </div>
                <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">In-the-Moment Tools: Your Stress Spending First-Aid Kit</CardTitle>
            <CardDescription>Paying yourself first is the long-term solution, but what do you do when the urge to spend hits right now? Use these techniques to create space and break the cycle.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
             {stressSubstitutes.map(item => (
              <div key={item.title} className="p-4 border rounded-lg bg-muted/40 flex items-start gap-4">
                 <div className="flex h-10 w-10 items-center justify-center rounded-full bg-background mt-1 flex-shrink-0">
                    <item.icon className="h-6 w-6 text-muted-foreground" />
                </div>
                <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        
        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you understand how to automate your savings, return to the roadmap to continue building your financial foundation.
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