'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Scale, ThumbsUp, ThumbsDown, TrendingUp, Home, GraduationCap, CreditCard, ShoppingCart, Info, ArrowRight, ShieldCheck, PiggyBank } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const goodDebtExamples = [
  {
    icon: Home,
    title: "A Sensible Mortgage",
    description: "Debt used to purchase a home that you can afford. While the house you live in is a liability from a cash-flow perspective, the underlying loan is often considered 'good debt' because it finances a significant asset that can appreciate in value, and the interest rates are typically low and tax-deductible."
  },
  {
    icon: GraduationCap,
    title: "Student Loans (for a valuable degree)",
    description: "Investing in an education that significantly increases your future earning potential can be a very wise use of debt. The key is ensuring the cost of the loan is reasonable compared to the expected salary for that field."
  },
  {
    icon: TrendingUp,
    title: "A Business Loan",
    description: "Borrowing money to start or expand a business that has a solid plan to generate more income than the cost of the debt. This is using leverage to create a cash-flowing asset."
  }
];

const badDebtExamples = [
  {
    icon: CreditCard,
    title: "High-Interest Credit Card Debt",
    description: "This is the most common form of bad debt. When you carry a balance on a credit card (often at 20%+ APR) for consumable goods or services, the interest costs can spiral out of control, trapping you in a debt cycle."
  },
  {
    icon: ShoppingCart,
    title: "Financing for Depreciating Assets",
    description: "Taking out a high-interest loan for something that rapidly loses value, like a brand new car, furniture, or electronics. You end up owing more than the item is worth."
  },
  {
    icon: GraduationCap,
    title: "Excessive Student Loans",
    description: "Taking on a large amount of student loan debt for a degree with low earning potential. If the debt payment will consume a huge portion of your future income, it's bad debt."
  },
  {
    icon: CreditCard,
    title: "Payday Loans",
    description: "Extremely high-interest, short-term loans that are designed to be very difficult to pay back, often leading to a cycle of re-borrowing with exorbitant fees and interest rates."
  }
];

export default function GoodVsBadDebtPage() {
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
        <h1 className="text-3xl font-bold font-headline">Good Debt vs. Bad Debt</h1>
        <p className="text-muted-foreground mt-2">Learn to distinguish between debt that can help you build wealth and debt that destroys it.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Scale className="h-4 w-4" />
          <AlertTitle className="font-headline">The Core Principle</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>Not all debt is created equal. The simplest way to differentiate is by asking one question: <strong>"Does this debt help me acquire an asset that will grow in value or increase my income?"</strong></p>
            <p>If the answer is <strong>yes</strong>, it's likely <strong>good debt</strong>.</p>
            <p>If the answer is <strong>no</strong> (i.e., it's for something you consume or that loses value), it's likely <strong>bad debt</strong>.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
                <ThumbsUp className="mr-2 h-5 w-5 text-green-600"/> Examples of Good Debt
            </CardTitle>
            <CardDescription>This is debt used to purchase assets that can increase your net worth over time. It should be used cautiously and strategically.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-3 gap-4">
            {goodDebtExamples.map(item => (
              <div key={item.title} className="p-4 border rounded-lg bg-card shadow-sm">
                <div className="flex items-center mb-2">
                  <item.icon className="mr-2 h-5 w-5 text-green-500/80" />
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
              <ThumbsDown className="mr-2 h-5 w-5 text-red-600"/> Examples of Bad Debt
            </CardTitle>
             <CardDescription>This is debt used for consumption or for assets that quickly lose value. It decreases your net worth and financial freedom.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {badDebtExamples.map(item => (
              <div key={item.title} className="p-4 border rounded-lg bg-card shadow-sm">
                <div className="flex items-center mb-2">
                  <item.icon className="mr-2 h-5 w-5 text-red-500/80" />
                  <h3 className="font-semibold">{item.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>
        
        <Alert variant="destructive" className="bg-amber-50 dark:bg-amber-900/20 border-amber-300 dark:border-amber-700">
          <Info className="h-4 w-4 text-amber-500" />
          <AlertTitle className="font-headline text-amber-900 dark:text-amber-200">A Critical Warning</AlertTitle>
          <AlertDescription className="text-amber-800 dark:text-amber-300">
            <p>Even "good debt" can become bad if taken on irresponsibly. A mortgage on a house you can't afford or student loans for a degree with poor job prospects can be just as financially damaging as credit card debt. The amount of debt and the terms of the loan matter just as much as its purpose.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
              <ShieldCheck className="mr-2 h-5 w-5 text-primary" />
              The Proactive Way to Avoid Bad Debt
            </CardTitle>
            <CardDescription>The best way to handle bad debt is to never get into it in the first place. Here are some strategies.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
              <div className="p-4 border rounded-lg bg-muted/30">
                <h4 className="font-semibold mb-2">For Major Purchases (Cars, Electronics): Save, Don't Finance</h4>
                <p className="text-sm text-muted-foreground">Instead of taking out a high-interest loan for a depreciating asset, create a dedicated savings goal. By saving up and paying with cash, you avoid interest payments entirely, which means the item is ultimately cheaper. This requires patience and delayed gratification but is a cornerstone of financial health.</p>
              </div>
               <div className="p-4 border rounded-lg bg-muted/30">
                <h4 className="font-semibold mb-2">For Emergencies (Medical, Car Repair): Build an Emergency Fund</h4>
                <p className="text-sm text-muted-foreground">Payday loans and high-interest personal loans are often a last resort when unexpected expenses arise. A well-funded emergency fund (starting with just $1,000) is your shield against this type of toxic debt. It provides you with the cash to handle emergencies without derailing your financial plan.</p>
              </div>
              <div className="p-4 border rounded-lg bg-muted/30">
                <h4 className="font-semibold mb-2">For Education: Consider the ROI and Alternatives</h4>
                <div className="text-sm text-muted-foreground">Not all paths to a good career require a four-year degree and the associated debt. Consider all options:
                <p className="mt-2"><strong>Trade Schools & Certifications:</strong> Many skilled trades (electrician, plumber, welder) offer high earning potential with a fraction of the cost and time commitment of a university degree.</p>
                <p className="mt-2"><strong>Work While You Learn:</strong> Working part-time during college can significantly reduce the amount of student loans needed.</p>
                <p className="mt-2"><strong>Community College First:</strong> Starting at a community college for two years and then transferring to a university can dramatically lower the total cost of your degree.</p>
                </div>
              </div>
          </CardContent>
        </Card>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Ready to Take Action?</CardTitle>
                <CardDescription>
                    Now that you understand the different types of debt, it's time to take stock of your own.
                </CardDescription>
            </CardHeader>
            <CardContent>
                 <Button asChild>
                    <Link href={`/roadmaps/master-personal-finance${fromStep ? `#${fromStep}` : ''}`}>
                      Return To The Master Personal Finance Roadmap
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </CardContent>
        </Card>

      </div>
    </>
  );
}
