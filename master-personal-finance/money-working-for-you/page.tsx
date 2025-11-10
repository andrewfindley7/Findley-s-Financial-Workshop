
'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Brain, Briefcase, HandCoins, TrendingUp, TrendingDown, Home, BookOpen, ArrowRight, ShieldCheck, Flag, Sparkles, Scale, Puzzle, Wind, Gem, ThumbsDown, CheckCircle, Info, Shuffle } from 'lucide-react';
import Link from 'next/link';

const freedomStages = [
  {
    icon: ShieldCheck,
    title: "Stage 1: Stability",
    description: "You can cover all of your essential bills without stress. You have a small emergency fund and are no longer living paycheck-to-paycheck."
  },
  {
    icon: Shuffle,
    title: "Stage 2: Flexibility",
    description: "Some of your expenses are now covered by passive income from your investments, or you've saved enough to take a sabbatical. You have the flexibility to change careers or take calculated risks."
  },
  {
    icon: Flag,
    title: "Stage 3: Independence",
    description: "All of your basic living expenses are now covered by income from your assets. Working a traditional job becomes optional. You have achieved full financial independence."
  },
  {
    icon: Sparkles,
    title: "Stage 4: Abundance",
    description: "Your passive income now exceeds your living expenses, providing surplus funds for legacy planning, significant charitable giving, or funding large passion projects."
  },
];

const assetBuckets = [
    {
        title: "Paper Assets",
        icon: Puzzle,
        examples: ["Dividend-paying stocks", "Low-cost index funds & ETFs", "Bonds providing interest income", "High-yield savings accounts", "REITs (Real Estate Investment Trusts)"]
    },
     {
        title: "Business Assets",
        icon: Gem,
        examples: ["Owning a business that can run without your constant presence", "A side hustle that scales (e.g., an e-commerce store)", "A franchise"]
    },
    {
        title: "Real & Creative Assets",
        icon: Home,
        examples: ["Rental properties providing cash flow", "Intellectual property (books, courses, music, patents) that generates royalties", "Farmland"]
    },
];

const pitfalls = [
    {
        title: "High Leverage Risk",
        description: "Using too much debt, especially in real estate, can be dangerous. A vacancy or unexpected repair can quickly turn a cash-flowing asset into a liability that sinks you if you don't have adequate cash reserves."
    },
     {
        title: "Underestimating the 'Passive' Part",
        description: "Few income streams are truly 100% passive. A rental property requires management, a side business needs oversight, and even an investment portfolio needs occasional rebalancing. Be realistic about the time commitment."
    },
     {
        title: "Chasing Get-Rich-Quick Traps",
        description: "The allure of 'easy' passive income leads many to speculative schemes (e.g., high-risk crypto projects, dubious online courses). True wealth is built by focusing on proven, compounding strategies over the long term, not by chasing shiny objects."
    }
];

export default function MoneyWorkingForYouPage() {
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
        <h1 className="text-3xl font-bold font-headline">Make Money Work For You (Not the Other Way Around)</h1>
        <p className="text-muted-foreground mt-2">Understanding the fundamental mindset shift that separates the wealthy from everyone else.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Brain className="h-4 w-4" />
          <AlertTitle className="font-headline">The 'Money as an Employee' Philosophy</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>Most people are taught to go to school, get a good job, and trade their time for a paycheck. This is 'working for money.' The wealthy, on the other hand, focus on acquiring assets that generate money for them. Every dollar you save and invest is like putting a tiny financial 'employee' to work for your future. At first, your workforce is small. But over time, by consistently investing and reinvesting the earnings, your workforce grows into a powerful engine that works for you 24/7. It doesn't need sick days, vacations, or complain.</p>
            <p className="font-semibold">The goal is to use your active income from your job to build a wealth-generating engine large enough to win your freedom.</p>
          </AlertDescription>
        </Alert>

        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-xl">The Path to Freedom: A Continuum</CardTitle>
                <CardDescription>Financial freedom isn't a binary switch; it's a journey through distinct stages. Understanding these stages makes the goal less overwhelming and more motivating.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                 {freedomStages.map((stage, index) => (
                  <div key={stage.title} className="p-4 border rounded-lg bg-card shadow-sm">
                    <h3 className="font-semibold text-lg flex items-center mb-2">
                      <stage.icon className="mr-3 h-6 w-6 text-primary" />
                      {stage.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{stage.description}</p>
                  </div>
                ))}
            </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
                <TrendingUp className="mr-2 h-5 w-5 text-primary"/>
                Types of Income-Producing Assets
            </CardTitle>
            <CardDescription>These are the types of 'employees' you can put to work in your wealth-building engine, categorized by type.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-3 gap-4">
             {assetBuckets.map(bucket => (
              <div key={bucket.title} className="p-4 border rounded-lg bg-card shadow-sm">
                <div className="flex items-center mb-2">
                  <bucket.icon className="mr-2 h-5 w-5 text-primary/80" />
                  <h3 className="font-semibold">{bucket.title}</h3>
                </div>
                <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
                    {bucket.examples.map(ex => <li key={ex}>{ex}</li>)}
                </ul>
              </div>
            ))}
          </CardContent>
        </Card>
        
        <Card className="border-amber-500/50 bg-amber-50/50 dark:bg-amber-900/20">
            <CardHeader>
                <CardTitle className="font-headline text-xl flex items-center text-amber-700 dark:text-amber-300">
                    <ThumbsDown className="mr-2 h-5 w-5" />
                    Risks and Realities of Passive Income
                </CardTitle>
                <CardDescription>Balancing optimism with realism is key to staying on the right path.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
                 {pitfalls.map(pitfall => (
                  <div key={pitfall.title} className="p-3 border-t border-amber-500/20 first:border-t-0">
                    <h4 className="font-semibold">{pitfall.title}</h4>
                    <p className="text-sm text-muted-foreground">{pitfall.description}</p>
                  </div>
                ))}
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-xl flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary"/>
                    Your First Actionable Step: Put Your First Dollar to Work
                </CardTitle>
                 <CardDescription>Making this concept real, even on a small scale, is the most important step.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="mb-4">Theory is good, but action is better. This week, take a small, manageable amount of money. Even just $25 or $50 from your paycheck and use it to buy an asset. Open a brokerage account and buy a share of a low-cost, total market index fund ETF. You've officially started putting your money to work. Now, your job is to keep investing regularly and reinvesting the returns to grow your wealth-generating engine.</p>
            </CardContent>
        </Card>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you understand this key concept, return to the roadmap to continue building your financial knowledge.
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
