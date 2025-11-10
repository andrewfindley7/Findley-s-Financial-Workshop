
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Brain, Route, Zap, Target, ArrowRight, TrendingDown, ShieldCheck, CheckCircle, BrainCircuit, Info } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const stepsToAgency = [
  {
    icon: Route,
    title: "Focus on What You Can Control",
    description: "You cannot control the stock market, interest rates, or the global economy. You *can* control your savings rate, your spending habits, and your efforts to increase your income. Focus your energy where it has a direct impact."
  },
  {
    icon: Zap,
    title: "Automate Good Decisions",
    description: "The easiest way to take control is to make good decisions automatic. Set up automatic transfers to your savings and investment accounts on payday. This builds wealth without requiring constant willpower."
  },
  {
    icon: Target,
    title: "Set One Small, Achievable Goal",
    description: "Momentum is powerful. Instead of being overwhelmed, set one small, concrete goal, like 'I will save $100 in a separate account this month.' Achieving it builds confidence and proves you are in charge."
  },
  {
    icon: ShieldCheck,
    title: "Embrace Failure as Feedback",
    description: "Agency doesn't mean everything will work out perfectly. A budget may break. An investment may go down. Agency is the resilience to learn from these events and adjust your plan, rather than giving up. Failure is not a verdict; it's data."
  },
  {
    icon: CheckCircle,
    title: "Track and Celebrate Small Wins",
    description: "Agency is a muscle built through repetition. Keep a journal of small financial victories: sticking to your budget, making an extra debt payment, or automating a new savings transfer. Celebrating these wins reinforces your belief in your own impact."
  }
];

export default function FinancialAgencyPage() {
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
        <h1 className="text-3xl font-bold font-headline">Financial Agency: Taking Control of Your Financial Future</h1>
        <p className="text-muted-foreground mt-2">Learn why the most important factor in your financial success is you.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Brain className="h-4 w-4" />
          <AlertTitle className="font-headline">The Mindset of Responsibility</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>Financial agency is the belief that you are the primary driver of your financial outcomes. While external factors like your background or the economy play a role, this mindset focuses on the actions and decisions that are within your control. It's about shifting from a passive state of 'things happen to me' to an active state of 'I make things happen'.</p>
            <p className="font-semibold">It's the understanding that while you cannot control where you started, you have immense power over where you are going.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">The Locus of Control</CardTitle>
            <CardDescription>In psychology, this refers to the degree to which people believe they have control over the outcomes of events in their lives.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            <div className="p-4 border rounded-lg bg-orange-50 dark:bg-orange-900/30 border-orange-200 dark:border-orange-800">
              <h3 className="font-semibold flex items-center mb-2 text-orange-800 dark:text-orange-200">
                External Locus of Control
              </h3>
              <p className="text-sm text-muted-foreground">This mindset blames outside forces for financial struggles. "The market is rigged," "I'll never get ahead," "It's impossible to save." This viewpoint leads to inaction and a feeling of powerlessness.</p>
            </div>
             <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800">
              <h3 className="font-semibold flex items-center mb-2 text-green-800 dark:text-green-200">
                Internal Locus of Control (Agency)
              </h3>
              <p className="text-sm text-muted-foreground">This mindset acknowledges external factors but focuses on personal action. "The market is volatile, so I will focus on my savings rate," "It's hard to save, so I will track my spending to find opportunities," "I will learn a new skill to increase my income." This viewpoint leads to action and empowerment.</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-destructive/50 bg-destructive/5">
            <CardHeader>
                <CardTitle className="font-headline text-xl text-destructive flex items-center">
                    <TrendingDown className="mr-2 h-5 w-5"/> The Cost of Inaction: Drifting Without Agency
                </CardTitle>
                <CardDescription>Without agency, you drift. You earn, but never build wealth. You blame bad luck, but never take action. The cost isn’t just money — it’s time, confidence, and freedom lost.</CardDescription>
            </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
              <BrainCircuit className="mr-2 h-5 w-5 text-primary" />
              A Practical lesson on Building Financial Agency
            </CardTitle>
            <CardDescription>Cultivating this mindset is a skill built through small, consistent actions.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {stepsToAgency.map(item => (
              <div key={item.title} className="p-4 border rounded-lg bg-card shadow-sm">
                <div className="flex items-center mb-2">
                  <item.icon className="mr-2 h-5 w-5 text-primary/80" />
                  <h3 className="font-semibold">{item.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
             <Alert variant="default" className="bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-700">
                <AlertTitle className="font-semibold text-blue-800 dark:text-blue-200">A Story of Agency: Alex's Shift</AlertTitle>
                <AlertDescription className="text-blue-700 dark:text-blue-300">
                    Alex blamed the economy for years, feeling stuck. After deciding to focus on what he could control, he started tracking his expenses and found $200 a month he could save by cutting back on subscriptions and dining out. Over 5 years, that simple action turned into nearly $15,000 in savings and investments—not because the market changed, but because he did.
                </AlertDescription>
            </Alert>
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
                    <Link href={`/roadmaps/master-personal-finance${fromStep ? `#${fromStep}`: ''}`}>
                        Return to Master Personal Finance
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </CardContent>
        </Card>

      </div>
    </>
  );
}
