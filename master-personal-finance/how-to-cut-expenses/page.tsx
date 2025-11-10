'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Scissors, Phone, Shield, Repeat, Zap, CookingPot, Wrench, Brain, ArrowRight, Lightbulb, Wallet, ShoppingBasket, Timer, ThumbsDown, CheckCircle, Info } from 'lucide-react';
import Link from 'next/link';

const bigWins = [
  {
    icon: Phone,
    title: "Negotiate Your Monthly Bills",
    description: "Service providers for things like cable, internet, and cell phones often have retention offers to keep you as a customer. Call them annually, state that you are considering switching due to cost, and politely ask if there are any available promotions or better plans for a loyal customer. A 10-minute phone call can save you hundreds per year."
  },
  {
    icon: Shield,
    title: "Shop Your Insurance Rates",
    description: "Insurance (auto, home, renters) is a major expense, and rates can vary significantly between providers for the same coverage. Every 1-2 years, get quotes from at least 3-4 different companies. Loyalty doesn't always pay; a new customer discount from a competitor might be substantial."
  }
];

const lifestyleHabits = [
    {
        icon: CookingPot,
        title: "Cook at Home More Often",
        description: "This is one of the most impactful changes you can make. Dining out or ordering takeout frequently is incredibly expensive compared to cooking. Plan your meals for the week, cook in batches, and make going out a deliberate treat rather than a daily habit."
    },
    {
        icon: Zap,
        title: "Reduce Utility Consumption",
        description: "Focus on simple, consistent habits. Turning off lights when you leave a room, running the dishwasher only when it's full, and setting your thermostat to a reasonable, consistent temperature are easy ways to eliminate waste without drastically changing your lifestyle."
    },
    {
        icon: Wrench,
        title: "Learn a Skill to Replace a Service",
        description: "Identify a service you regularly pay for and learn to do it yourself. This could be basic car maintenance (changing oil, air filters), simple home repairs, brewing your own coffee instead of buying it daily, or growing your own vegetables. The time invested in learning pays dividends for life."
    }
];

const silentKillers = [
  {
    icon: Repeat,
    title: "Audit Your Subscriptions",
    description: "Go through your bank and credit card statements and list every single recurring charge (streaming services, apps, gym memberships, etc.). Be ruthless. If you haven't used a service in the last month, cancel it. You can always re-subscribe if you truly miss it."
  },
  {
    icon: ShoppingBasket,
    title: "Don't Overpay on Commodities",
    description: "For many products, the quality difference between the store brand and the premium brand is negligible. For items like cleaning supplies, pantry staples (flour, sugar), and over-the-counter medications, opting for the generic or store brand can lead to significant savings over a year."
  }
];

const emotionalTraps = [
  {
    icon: ThumbsDown,
    title: "Fear of Losing Status or Comfort",
    problem: "We associate certain brands or habits (like buying a new car or using premium products) with our identity and status. Giving them up feels like a step down, even if the financial benefit is huge.",
    solution: "Reframe the goal. You're not 'giving up' a luxury; you are 'trading up' for financial freedom. A paid-off mortgage provides more peace of mind than a luxury car payment."
  },
  {
    icon: Brain,
    title: "Habit Blindness",
    problem: "Many expenses, like daily coffees or unused subscriptions, are so ingrained in our routine that we don't even 'see' them as decisions anymore. They become invisible drains on our finances.",
    solution: "Perform a 'spending audit' for one week. Write down every single thing you buy. The act of writing it down breaks the habit loop and forces you to confront the choice, making the invisible visible again."
  },
  {
    icon: Timer,
    title: "The 'I Deserve It' Trap",
    problem: "After a stressful day or week, we feel we 'deserve' a reward, which often takes the form of an unplanned, expensive meal or an impulse purchase. This provides a temporary emotional lift but is often followed by guilt.",
    solution: "Plan your rewards. Instead of impulsive splurges, build specific, guilt-free rewards into your budget. This allows you to celebrate your hard work without derailing your progress."
  }
];

const quickWins = [
    "Call your internet or cable provider and ask for a lower rate.",
    "Cancel one unused subscription service right now.",
    "Switch one recurring purchase (like coffee or cleaning supplies) to a more affordable alternative for a month.",
    "Pack your lunch for tomorrow instead of buying it.",
    "Set up an automatic transfer of $20 to your savings account."
];

export default function HowToCutExpensesPage() {
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
        <h1 className="text-3xl font-bold font-headline">How to Cut Your Expenses: A Practical Methodology</h1>
        <p className="text-muted-foreground mt-2">Actionable strategies to reduce spending and free up money for what truly matters to you.</p>
      </div>
      <div className="space-y-6">
        <Alert className="bg-primary/5 border-primary/20">
          <Scissors className="h-4 w-4" />
          <AlertTitle className="font-headline">The Double Win of Smart Spending</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>Every dollar you cut from your recurring expenses is a double win: you free up that money for your goals today, and you permanently lower the amount of savings you need to achieve financial freedom tomorrow.</p>
            <p className="font-semibold">Consider this: cutting just <strong>$100/month</strong> in expenses not only saves you <strong>$1,200 a year</strong>, it also reduces the total nest egg you need for retirement by <strong>$30,000</strong> (based on a 4% withdrawal rate). Small, smart cuts have a massive long-term impact.</p>
            <p className="mt-2">This lesson is not about penny-pinching. It's about making conscious choices to redirect your money from things that don't matter to things that do.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center"><Wallet className="mr-2 h-5 w-5 text-primary" />The Big Levers: High-Impact, Low-Effort Wins</CardTitle>
            <CardDescription>Start here. Optimizing your largest expenses has a disproportionate effect on your savings rate.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
            {bigWins.map(item => (
              <div key={item.title} className="p-4 border rounded-lg bg-card shadow-sm">
                <div className="flex items-center mb-2">
                  <item.icon className="mr-2 h-5 w-5 text-primary/80" />
                  <h3 className="font-semibold">{item.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center"><Lightbulb className="mr-2 h-5 w-5 text-primary" />Medium Levers: Lifestyle & Habit Adjustments</CardTitle>
            <CardDescription>These changes require more consistent effort but build powerful, long-term saving habits.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-3 gap-4">
            {lifestyleHabits.map(item => (
              <div key={item.title} className="p-4 border rounded-lg bg-card shadow-sm">
                <div className="flex items-center mb-2">
                  <item.icon className="mr-2 h-5 w-5 text-primary/80" />
                  <h3 className="font-semibold">{item.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>
        
         <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center"><ShoppingBasket className="mr-2 h-5 w-5 text-primary" />Small Levers: The "Silent Killers"</CardTitle>
             <CardDescription>These small, recurring expenses can add up significantly over time. Auditing them regularly is key.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
            {silentKillers.map(item => (
              <div key={item.title} className="p-4 border rounded-lg bg-card shadow-sm">
                <div className="flex items-center mb-2">
                  <item.icon className="mr-2 h-5 w-5 text-primary/80" />
                  <h3 className="font-semibold">{item.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">The Psychology of Spending: Why It's Hard to Cut</CardTitle>
            <CardDescription>Understanding the emotional side of spending is key to overcoming it.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {emotionalTraps.map(item => (
              <div key={item.title} className="p-4 border rounded-lg bg-muted/40">
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
              <CheckCircle className="mr-2 h-5 w-5 text-primary" />
              Quick Wins: 5 Things You Can Do in 30 Minutes
            </CardTitle>
            <CardDescription>Small victories create powerful momentum. Try one of these today.</CardDescription>
          </CardHeader>
          <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                {quickWins.map((win, i) => <li key={i}>{win}</li>)}
              </ul>
          </CardContent>
        </Card>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Cutting expenses isn’t about living smaller — it’s about living smarter. Every dollar you reclaim is a soldier redeployed to fight for your freedom. Redirect wisely, and you’ll discover you can live better with less stress, not less joy.
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
