'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Timer, Brain, PiggyBank, TrendingUp, ShieldCheck, Target, ArrowRight, Activity, Zap, Info } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const whyItMatters = [
  {
    icon: PiggyBank,
    title: "Enables Meaningful Savings",
    description: "You cannot save for a major goal like a house down payment, a car, or retirement without choosing to not spend that money today. Delayed gratification is the engine of savings."
  },
  {
    icon: TrendingUp,
    title: "Unlocks the Power of Compounding",
    description: "Investing is the ultimate form of delayed gratification. By putting money into assets today, you allow it to grow and compound, creating much greater wealth for your future self."
  },
  {
    icon: ShieldCheck,
    title: "Prevents High-Interest Debt",
    description: "The desire for instant gratification often leads to credit card debt. Learning to wait for things you can't afford right now is the number one way to avoid costly interest payments."
  },
   {
    icon: Target,
    title: "Aligns Spending With Your True Values",
    description: "By pausing before you buy, you give yourself time to decide if a purchase truly aligns with your long-term happiness and goals, rather than just fulfilling a fleeting impulse."
  }
];

const howToPractice = [
  {
    title: "The 30-Day Rule for Major Purchases",
    description: "For any non-essential purchase over a certain amount (e.g., $100), write it down and wait 30 days before buying it. This practice defeats impulse buying. After a month, the initial emotional urge often fades, allowing you to make a more rational decision about whether you truly need or want the item. For smaller items, try a 48-hour rule."
  },
  {
    title: "Automate Your Savings & Investing",
    description: "The easiest way to delay gratification is to make it automatic. 'Pay yourself first' by setting up automatic transfers to your savings and investment accounts on payday. The money is gone before you have a chance to spend it, effortlessly prioritizing your future self."
  },
  {
    title: "Visualize Your Future Goal",
    description: "Make your long-term goal tangible. Put a picture of your dream vacation spot or debt-free thermometer on your fridge. When you're tempted to spend, look at the picture to remind yourself what you're really working towards."
  },
  {
    title: "Calculate the 'Real' Cost in Life Energy",
    description: "Instead of thinking of an item's price in dollars, think of it in hours of your life. If you make $25/hour after tax, that $100 gadget isn't just $100; it's 4 hours of your life you have to trade for it. Is it worth it?"
  },
];


export default function DelayedGratificationPage() {
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
        <h1 className="text-3xl font-bold font-headline">Delayed Gratification: Your Financial Superpower</h1>
        <p className="text-muted-foreground mt-2">Learn why the ability to wait is the single most important skill for building wealth.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Timer className="h-4 w-4" />
          <AlertTitle className="font-headline">What is Delayed Gratification?</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>Delayed gratification is the ability to resist the temptation for an immediate, smaller reward in order to receive a larger or more enduring reward later. It's not about joyless sacrifice; it's about empowerment.</p>
            <p className="font-semibold">Every 'no' to an impulse buy today is a bigger 'yes' to your future freedom: more choices, less stress, and achieving your most important goals.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
              <Brain className="mr-2 h-5 w-5 text-primary" />
              The Psychology: The Marshmallow Test & Your Money
            </CardTitle>
            <CardDescription>A famous psychology experiment perfectly illustrates this financial superpower.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="prose prose-sm max-w-none dark:prose-invert">
              <p>In the 1960s, a famous Stanford experiment offered children a choice: one marshmallow now, or two marshmallows if they could wait 15 minutes alone in a room without eating the first one. Decades later, researchers found that the children who were able to wait for the second marshmallow went on to have better life outcomes, including better academic performance, health, and financial success.</p>
              <p className="font-semibold">The same principle applies to your money: every dollar you resist spending today on a fleeting want has the potential to multiply into something much bigger for your future self through the power of compound interest.</p>
              <Alert className="mt-4" variant="default">
                <Zap className="h-4 w-4" />
                <AlertTitle>The Dopamine Hit vs. Lasting Fulfillment</AlertTitle>
                <AlertDescription>
                  Modern consumerism is designed to give you a quick, easy dopamine hit from a purchase. Delayed gratification helps you rewire your brain to find deeper satisfaction in the progress and achievement of meaningful goals, which provides a more lasting form of happiness than any impulse buy can offer.
                </AlertDescription>
              </Alert>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">Why It's the Key to Financial Success</CardTitle>
            <CardDescription>Nearly every positive financial outcome is a direct result of delaying gratification.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
            {whyItMatters.map(item => (
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
            <CardTitle className="font-headline text-xl flex items-center">
              <Activity className="mr-2 h-5 w-5 text-primary" />
              How to Practice & Strengthen This Skill
            </CardTitle>
            <CardDescription>Delayed gratification is a muscle. The more you use it, the stronger it gets. Here are some practical exercises.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
             {howToPractice.map(item => (
                 <div key={item.title} className="p-3 border-b last:border-b-0">
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                 </div>
             ))}
              <div className="p-3">
                  <h4 className="font-semibold">A Quick Case Study</h4>
                  <p className="text-sm text-muted-foreground italic">When Jasmine felt the urge to spend $1,500 on an impulse furniture upgrade, she paused. Instead, she put that money into a low-cost index fund. She realized that in 10 years, at an average market return, it could grow to nearly $4,000. That single decision bought her both peace of mind today and significant wealth for her future.</p>
              </div>
          </CardContent>
        </Card>
        
        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Mastering this Skill is about Vision</CardTitle>
                <CardDescription>
                  The clearer your picture of the life you want, the easier it becomes to wait today because you know you’re not giving something up, you’re trading up for a better future.
                </CardDescription>
            </CardHeader>
            <CardContent>
                 <Button asChild>
                    <Link href={`/roadmaps/master-personal-finance${fromStep ? `#${fromStep}` : ''}`}>
                        Return to the Master Personal Finance Roadmap
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </CardContent>
        </Card>

      </div>
    </>
  );
}
