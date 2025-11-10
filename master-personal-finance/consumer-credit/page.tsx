'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { CreditCard, Repeat, Car, Home, ClipboardCheck, Wallet, DollarSign, ShieldCheck, FileText, TrendingUp, ThumbsUp, ThumbsDown, Info, Brain, ArrowRight, Lightbulb } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const creditTypes = [
  {
    icon: Repeat,
    title: "Revolving Credit",
    description: "This is a line of credit that you can borrow from, repay, and borrow from again. There isn't a fixed number of payments. Credit cards are the most common example.",
    example: "You have a credit card with a $5,000 limit. You spend $500, pay it back, and your full $5,000 limit is available again."
  },
  {
    icon: Car,
    title: "Installment Credit",
    description: "This is a loan for a specific amount of money that you repay in equal, regular payments (installments) over a set period of time. Once you pay it off, the account is closed.",
    example: "Mortgages, auto loans, and student loans are all types of installment credit."
  },
];

const fiveCs = [
    { title: "Character", description: "Your credit history and reputation. Do you pay your bills on time?" },
    { title: "Capacity", description: "Your ability to repay the loan. Lenders look at your income and debt-to-income ratio." },
    { title: "Capital", description: "The money you have personally invested, like a down payment. It shows you have skin in the game." },
    { title: "Collateral", description: "Assets you pledge to secure the loan (like a house or car), which the lender can take if you default." },
    { title: "Conditions", description: "The purpose of the loan, the amount, and prevailing interest rates or economic conditions." }
];

const scoreFactors = [
    { factor: "Payment History", weight: "35%", description: "The most important factor. Are your payments consistently on time?" },
    { factor: "Amounts Owed", weight: "30%", description: "How much of your available credit are you using (credit utilization)?" },
    { factor: "Length of Credit History", weight: "15%", description: "The average age of your accounts. A longer history is generally better." },
    { factor: "Credit Mix", weight: "10%", description: "Having a healthy mix of different types of credit (revolving and installment)." },
    { factor: "New Credit", weight: "10%", description: "Opening many new accounts in a short period can be a red flag." },
];

const proTips = [
    "Always pay your bills on time. No exceptions. Set up automatic payments for at least the minimum amount to avoid ever being late.",
    "Aim to keep your credit utilization below 10%.",
    "Don't close your oldest credit card accounts, even if you don't use them often. The age of your credit history is a significant factor.",
    "Only apply for new credit when you actually need it. Space out your applications to avoid looking like a risky borrower.",
    "keep up to date on your credit reports to ensure accuracy."
];


export default function ConsumerCreditPage() {
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
        <h1 className="text-3xl font-bold font-headline">Understanding Consumer Credit</h1>
        <p className="text-muted-foreground mt-2">Learn how credit works, how lenders evaluate you, and what makes up your credit score.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <CreditCard className="h-4 w-4" />
          <AlertTitle className="font-headline">What is Consumer Credit?</AlertTitle>
          <AlertDescription>
            Consumer credit is a financial tool that allows you to borrow money or access goods and services with the understanding that you'll pay later. It's an agreement between you (the borrower) and a lender. When used responsibly, credit can be a powerful tool for major purchases, but when misused, it can lead to financial trouble.
          </AlertDescription>
        </Alert>

        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-xl flex items-center">
                    <TrendingUp className="mr-2 h-5 w-5 text-primary" />
                    The 'Why': Connecting Credit to Wealth Building
                </CardTitle>
                <CardDescription>Responsible credit use is a cornerstone of accelerating your wealth-building journey.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">Good credit isn't just about getting approved for loans; it's about saving money that you can then use to invest. Lower borrowing costs directly translate to more free cash flow for your investments. A lower interest rate on a mortgage or car loan means you have more capital available to put to work in assets that grow your wealth, like stocks or real estate.</p>
                <Alert className="mt-4 bg-primary/10">
                    <AlertTitle className="font-semibold">The Wealth Acceleration Equation</AlertTitle>
                    <AlertDescription>
                        Good Credit → Lower Interest Rates → Smaller Loan Payments → More Free Cash Flow → More Capital for Investing → Faster Wealth Compounding.
                    </AlertDescription>
                </Alert>
            </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">The Two Main Types of Credit</CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
            {creditTypes.map(type => (
              <div key={type.title} className="p-4 border rounded-lg bg-card shadow-sm">
                <div className="flex items-center mb-2">
                  <type.icon className="mr-2 h-5 w-5 text-primary/80" />
                  <h3 className="font-semibold">{type.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{type.description}</p>
                <p className="text-xs italic text-muted-foreground/80"><strong>Example:</strong> {type.example}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
              <ClipboardCheck className="mr-2 h-5 w-5 text-primary" />
              The "5 C's of Credit": How Lenders See You
            </CardTitle>
            <CardDescription>When you apply for a loan, lenders often use this framework to assess your creditworthiness.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {fiveCs.map(c => (
              <div key={c.title} className="p-3 border-b last:border-b-0">
                <h4 className="font-semibold">{c.title}</h4>
                <p className="text-sm text-muted-foreground">{c.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>

         <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
              <FileText className="mr-2 h-5 w-5 text-primary" />
              How Your Credit Score Works
            </CardTitle>
             <CardDescription>Your credit score (like a FICO score) is a number between 300-850 that summarizes your credit risk. Here's what goes into it:</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {scoreFactors.map(factor => (
                <li key={factor.factor} className="flex items-start gap-4">
                  <div className="text-lg font-bold text-primary w-16 text-center">{factor.weight}</div>
                  <div className="flex-1">
                    <h4 className="font-semibold">{factor.factor}</h4>
                    <p className="text-sm text-muted-foreground">{factor.description}</p>
                  </div>
                </li>
              ))}
            </ul>
             <Alert variant="default" className="mt-6">
                <Info className="h-4 w-4" />
                <AlertTitle>Why Your Score Matters</AlertTitle>
                <AlertDescription>
                 A higher credit score signals to lenders that you are a lower risk, which can result in lower interest rates on mortgages, car loans, and credit cards, saving you thousands of dollars over your lifetime.
                </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
        
        <Card className="border-destructive/50 bg-destructive/5">
            <CardHeader>
                <CardTitle className="font-headline text-xl flex items-center text-destructive">
                    <Brain className="mr-2 h-5 w-5"/> Common Debt Traps & Behavioral Triggers
                </CardTitle>
                <CardDescription>Understanding why we fall into debt is the first step to avoiding it.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <p><strong>The Minimum Payment Trap:</strong> Credit card companies intentionally make minimum payments very low. This makes large balances seem manageable, but it's designed to maximize the interest you pay, keeping you in debt for decades.</p>
                <p><strong>Payday Loans:</strong> These are extremely high-interest, short-term loans designed to trap borrowers in a cycle of debt. They should be avoided at all costs. An emergency fund is the proper tool to avoid needing a payday loan.</p>
                <p><strong>0% APR Introductory Offers:</strong> These can be useful if you have a disciplined plan to pay off the balance before the promotional period ends. However, they often lead to a false sense of security, encouraging spending that you can't pay off before the high standard interest rate kicks in.</p>
                <Alert variant="default" className="bg-background/70">
                    <Info className="h-4 w-4" />
                    <AlertTitle>The Behavioral Angle: Why We Overuse Credit</AlertTitle>
                    <AlertDescription>
                        Our brains are wired for instant gratification. Using a credit card separates the pleasure of buying from the pain of paying, which makes it easy to overspend. This bias, combined with optimism about our future ability to pay, is a powerful recipe for accumulating debt.
                    </AlertDescription>
                </Alert>
            </CardContent>
        </Card>
        
         <Alert variant="default" className="bg-green-500/10 border-green-500/20">
            <Lightbulb className="h-4 w-4 text-green-600" />
            <AlertTitle className="text-green-700 dark:text-green-300 font-semibold">Pro Tips for Maintaining a High Score</AlertTitle>
            <AlertDescription className="text-green-600 dark:text-green-400">
                <ul className="list-disc pl-5 mt-2 space-y-2">
                    {proTips.map((tip, i) => <li key={i}>{tip}</li>)}
                </ul>
            </AlertDescription>
        </Alert>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you understand how credit works, return to the main roadmap to see how it fits into your overall financial plan.
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
