
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Goal, ArrowRight, Briefcase, HandCoins, ShieldCheck, Shuffle, Flag, Sparkles, Info } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

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


export default function FinancialFreedomPage() {
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
      <div className="mb-8 space-y-2">
        <h1 className="text-3xl font-bold font-headline text-foreground/90">What is Financial Freedom?</h1>
        <p className="text-muted-foreground text-lg">Understanding the ultimate goal of your financial journey.</p>
        <div className="w-16 h-1 bg-accent rounded-full"></div>
      </div>
      <div className="space-y-8">
        <Alert>
          <Goal className="h-4 w-4" />
          <AlertTitle className="font-headline">The Ultimate Goal: Owning Your Time</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>What is financial freedom? It's not about being 'rich' in the sense of owning yachts and sports cars. It's about something far more valuable: the freedom to choose.</p>
            <p className="font-semibold">Financial freedom is reaching the point where your income from your assets is enough to cover your living expenses. It's the moment when going to work becomes a choice, not a necessity. It is the complete ownership of your time, your most valuable and finite resource.</p>
            <p>This lesson is a roadmap to achieving that freedom. Every step, from building a budget to investing for the long term, is designed to move you closer to this ultimate goal.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">The Two Paths: Active vs. Passive Income</CardTitle>
            <CardDescription>Understanding this fundamental difference is the key to unlocking financial freedom.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
              <div className="p-6 border rounded-lg bg-[#FFEAD1] dark:bg-orange-900/30 border-orange-200 dark:border-orange-800">
                <h3 className="font-semibold flex items-center mb-2 text-orange-800 dark:text-orange-200">
                    <Briefcase className="mr-2 h-5 w-5" /> Working for Money (Active)
                </h3>
                <p className="text-sm text-muted-foreground">This is where everyone starts. You trade your time and skills for a paycheck. While essential for generating initial capital, it is fundamentally limited by the number of hours you can work.</p>
              </div>
              <div className="p-6 border rounded-lg bg-[#DFF3E3] dark:bg-green-900/30 border-green-200 dark:border-green-800">
                <h3 className="font-semibold flex items-center mb-2 text-green-800 dark:text-green-200">
                    <HandCoins className="mr-2 h-5 w-5" /> Making Money Work for You (Passive)
                </h3>
                <p className="text-sm text-muted-foreground">This is the path to freedom. You use your active income to acquire assets (like stocks, bonds, or real estate) that generate more money for you, independent of your time. This income can grow exponentially through compounding.</p>
              </div>
          </CardContent>
        </Card>
        
         <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">The Four Stages of Financial Freedom</CardTitle>
            <CardDescription>Financial freedom isn't an all-or-nothing goal. It's a journey with clear milestones.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            {freedomStages.map(stage => (
              <div key={stage.title} className="p-6 border rounded-lg bg-card shadow-sm">
                <div className="flex items-center mb-2">
                  <stage.icon className="mr-2 h-5 w-5 text-primary/80" />
                  <h3 className="font-semibold">{stage.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{stage.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Begin Your Journey</CardTitle>
                <CardDescription>
                    Now that you understand the destination, you're ready to take the first step.
                </CardDescription>
            </CardHeader>
            <CardContent>
                 <Button asChild>
                    <Link href={`/roadmaps/master-personal-finance${fromStep ? `#${fromStep}`: ''}`}>
                        Return to Mastering Personal Finance
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </CardContent>
        </Card>

      </div>
    </>
  );
}

    