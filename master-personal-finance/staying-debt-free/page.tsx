'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { ShieldCheck, ArrowRight, Brain, PiggyBank, Eye, ThumbsDown, User, Users, Info } from 'lucide-react';
import Link from 'next/link';

const commonTraps = [
  {
    icon: ThumbsDown,
    title: "The 'I Deserve It' Syndrome",
    problem: "After months or years of intense focus on debt repayment, it's natural to feel like you deserve a reward. This often leads to large, impulsive purchases financed with a credit card, instantly undoing much of your hard work.",
    solution: "Plan your reward! Instead of an impulse buy, make your first debt-free purchase a specific, meaningful goal. Save up for it over a few months. This turns a potential pitfall into a healthy financial habit: saving for what you want."
  },
  {
    icon: Brain,
    title: "The 'Paycheck-to-Paycheck' Habit",
    problem: "You've been so focused on sending every extra dollar to debt that you haven't developed a plan for your newfound cash flow. Without a new job for your money, it's easy to fall back into old spending patterns and see your surplus disappear.",
    solution: "Before you make your final debt payment, decide where that money will go next. Will it go towards your emergency fund? Your retirement accounts? A new savings goal? Give every dollar a new job immediately."
  },
  {
    icon: Eye,
    title: "Lifestyle Creep",
    problem: "The money you were using for debt payments now feels like a permanent raise. You slowly start upgrading your lifestyle, more dining out, more subscriptions, a nicer car, until you find yourself living on the edge again, with no buffer for unexpected costs.",
    solution: "The best defense is a strong offense. The moment you're debt-free, automate a significant portion of your old debt payment amount directly into your savings or investment accounts. This way, you never get used to having that 'extra' money to spend."
  }
];

export default function StayingDebtFreePage() {
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
        <h1 className="text-3xl font-bold font-headline">Staying Debt-Free: How to Avoid the Traps</h1>
        <p className="text-muted-foreground mt-2">You've won the battle against high-interest debt. Here's how you win the war.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <ShieldCheck className="h-4 w-4" />
          <AlertTitle className="font-headline">You've Been Promoted</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>You're no longer a debt-fighter; you're the CFO of your life. Your new job is to manage your surplus money to create freedom.</p>
            <p>But many people find themselves falling back into the same traps because they haven't addressed the underlying habits or built a plan for their newfound financial freedom. This lesson is about solidifying your new role.</p>
          </AlertDescription>
        </Alert>

        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-xl">A Tale of Two Paths</CardTitle>
                <CardDescription>Being debt-free is a crossroads. Here's how two people handled it.</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-6">
                <div className="p-4 border rounded-lg bg-orange-50 dark:bg-orange-900/30 border-orange-200 dark:border-orange-800">
                    <h3 className="font-semibold flex items-center mb-2 text-orange-800 dark:text-orange-200">
                       <User className="mr-2 h-5 w-5"/> Mark's Story
                    </h3>
                    <p className="text-sm text-muted-foreground">Mark paid off $20,000 of debt, then celebrated with a financed car, telling himself he could "handle the payments." Within a year, the "I deserve it" mentality led to new credit card balances, and he was right back where he started, trapped by payments.</p>
                </div>
                 <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800">
                    <h3 className="font-semibold flex items-center mb-2 text-green-800 dark:text-green-200">
                       <Users className="mr-2 h-5 w-5"/> Sarah's Story
                    </h3>
                    <p className="text-sm text-muted-foreground">Sarah paid off her debt and immediately automated her old debt payments into a high-yield savings account. She built a $10,000 emergency fund in 18 months, giving her a powerful safety net. The feeling of security was her reward, and it motivated her to start investing next.</p>
                </div>
            </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">Common Traps After Becoming Debt-Free</CardTitle>
            <CardDescription>Recognizing these psychological pitfalls is the key to avoiding them.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {commonTraps.map(item => (
              <div key={item.title} className="p-4 border rounded-lg bg-card shadow-sm">
                <h3 className="font-semibold text-lg flex items-center mb-2">
                  <item.icon className="mr-3 h-6 w-6 text-destructive" />
                  {item.title}
                </h3>
                <p className="text-sm italic text-muted-foreground mb-3"><strong>The Problem:</strong> {item.problem}</p>
                <div className="p-3 bg-green-500/10 rounded-lg text-sm">
                  <h4 className="font-semibold flex items-center text-green-700 dark:text-green-300">The Solution</h4>
                  <p className="text-green-600 dark:text-green-400 mt-1">{item.solution}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-primary/50 bg-primary/5">
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
              <PiggyBank className="mr-2 h-5 w-5 text-primary" />
              The Golden Rule: Save For It First
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
                Staying debt-free isn’t about depriving yourself, it’s about building a life where every purchase is intentional, every dollar has a purpose, and debt never controls you again. The only way to truly break the cycle is to stop buying things you don't have the cash for.
            </p>
            <p className="mt-2 text-muted-foreground">
              If you want a new TV, a vacation, or a new car, the answer is not to look for financing. The answer is to open a new savings account, name it "Vacation Fund," and set up automatic transfers until you have the money to pay for it in full. This forces you to practice delayed gratification and ensures that your purchases are intentional.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you understand this key concept, return to the main roadmap to continue building your financial knowledge.
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
