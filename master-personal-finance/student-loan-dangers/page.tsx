
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { GraduationCap, AlertTriangle, TrendingDown, Home, Wallet, Brain, ArrowRight, Info } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useSearchParams } from 'next/navigation';

const formatCurrency = (value: number) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 });
};

const impacts = [
  {
    icon: Wallet,
    title: "Delayed Wealth Building (Opportunity Cost)",
    description: "Every dollar sent to a loan payment is a dollar that cannot be invested. Due to compound interest, this has a massive long-term impact on your ability to build wealth for retirement or other goals."
  },
  {
    icon: TrendingDown,
    title: "Reduced Monthly Cash Flow",
    description: "A large student loan payment acts like a second rent or mortgage payment, significantly reducing your disposable income each month and making it harder to save, invest, or handle unexpected expenses."
  },
  {
    icon: Home,
    title: "Impact on Major Life Decisions",
    description: "High debt-to-income ratios can make it difficult to qualify for a mortgage. The financial strain can also lead to delays in other major life events like getting married, starting a family, or changing careers."
  },
  {
    icon: Brain,
    title: "Mental and Emotional Toll",
    description: "The stress of carrying a large debt burden for decades can have a significant negative impact on mental health and overall well-being."
  },
];

export default function StudentLoanDangersPage() {
  const searchParams = useSearchParams();
  const fromStep = searchParams.get('from');

  const scenario10Year = {
    loanPayment: 500, // per month
    investmentAmount: 500, // per month
    years: 10,
    rate: 0.10, 
    get finalInvestmentValue() {
      let total = 0;
      // Using a simplified future value of annuity formula for approximation
      const monthlyRate = this.rate / 12;
      const numberOfMonths = this.years * 12;
      total = this.investmentAmount * ((Math.pow(1 + monthlyRate, numberOfMonths) - 1) / monthlyRate);
      return total;
    },
    get totalLoanPayments() {
      return this.loanPayment * 12 * this.years;
    }
  };

  const scenario30Year = {
      yearsToInvest: 30,
      monthlyContribution: 500,
      rate: 0.10,
      get debtFreeFutureValue() {
          let balance = 0;
          const monthlyRate = this.rate / 12;
          const numberOfMonths = this.yearsToInvest * 12;
          for (let i = 0; i < numberOfMonths; i++) {
              balance = (balance + this.monthlyContribution) * (1 + monthlyRate);
          }
          return balance;
      },
       get withDebtFutureValue() {
          let balance = 0;
          const monthlyRate = this.rate / 12;
          // Invest for only 20 years because first 10 were spent paying debt
          const numberOfMonths = (this.yearsToInvest - 10) * 12;
          for (let i = 0; i < numberOfMonths; i++) {
              balance = (balance + this.monthlyContribution) * (1 + monthlyRate);
          }
          return balance;
      }
  };


  return (
    <>
      <Alert variant="destructive" className="mb-6 bg-amber-50 dark:bg-amber-900/20 border-amber-300 dark:border-amber-700">
          <Info className="h-4 w-4 text-amber-500" />
          <AlertDescription className="text-amber-800 dark:text-amber-300 text-xs">
              For educational use only. Not financial or tax advice. Consult a licensed advisor before making major decisions.
          </AlertDescription>
      </Alert>
      <div className="mb-8">
        <h1 className="text-3xl font-bold font-headline">The Dangers of Student Loan Debt</h1>
        <p className="text-muted-foreground mt-2">Understanding how student debt can impact your long-term financial health and life choices.</p>
      </div>
      <div className="space-y-6">
        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle className="font-headline">Education is an Investment, Not a Blank Check</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>While a valuable degree can significantly increase your lifetime earning potential, it's crucial to view education as a major financial decision with a clear return on investment (ROI). Taking on an excessive amount of student loan debt, especially for a degree with limited earning potential, can cripple your financial future for decades.</p>
          </AlertDescription>
        </Alert>

        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-xl">The Most Important Rule of Thumb</CardTitle>
            </CardHeader>
            <CardContent>
                <blockquote className="text-center text-lg md:text-xl font-semibold italic border-l-4 border-primary pl-4 my-4">
                    Do not borrow more for your entire degree than your expected first-year starting salary.
                </blockquote>
                <p className="text-sm text-muted-foreground">This simple rule helps ensure your future loan payments will be a manageable portion of your income, allowing you to save, invest, and live without being crushed by debt. If a history degree from a private university costs $200,000 but the average starting salary for a graduate is $45,000, the ROI is negative. This is a losing financial decision.</p>
            </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">The Long-Term Consequences of High Debt</CardTitle>
            <CardDescription>Student loan debt impacts far more than just your monthly budget.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
            {impacts.map(item => (
              <div key={item.title} className="p-4 border rounded-lg bg-card shadow-sm">
                <div className="flex items-center mb-2">
                  <item.icon className="mr-2 h-5 w-5 text-destructive" />
                  <h3 className="font-semibold">{item.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-xl">The Psychology of "Easy Money"</CardTitle>
                 <CardDescription>Student loans feel abstract and painless when you sign for them. This is a psychological trap.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">Signing a promissory note doesn't feel like spending real money. But that abstract number on the page becomes a very real bill that arrives every single month for a decade or more. A helpful mental trick is to translate the loan amount into its future reality:</p>
                <Alert className="mt-4">
                    <AlertTitle className="font-semibold">A Simple Translation:</AlertTitle>
                    <AlertDescription>
                        Every {formatCurrency(10000)} you borrow is approximately a {formatCurrency(100)} to {formatCurrency(120)} bill you will have to pay every month, for 10 years, after you graduate.
                    </AlertDescription>
                </Alert>
                <p className="text-sm text-muted-foreground mt-2">When considering a $40,000 loan, don't think "$40,000." Think, "Am I willing to have a bill of over $400, every single month, for the first decade of my working life?" This makes the trade-off tangible.</p>
            </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">A Tale of Two Futures: The 30-Year Impact</CardTitle>
            <CardDescription>Let's compare two 22-year-olds starting their careers. Both have the capacity to save/invest {formatCurrency(scenario10Year.investmentAmount)} per month. The only difference is one is debt-free, and one must first pay off loans for 10 years.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800">
              <h3 className="font-semibold flex items-center mb-2 text-green-800 dark:text-green-200">
                The Debt-Free Graduate
              </h3>
              <p className="text-sm text-muted-foreground">Starts investing {formatCurrency(scenario10Year.investmentAmount)}/month from day one.</p>
              <Separator className="my-3"/>
              <ul className="text-sm space-y-2">
                <li>After 10 years: Their portfolio is already worth approximately {formatCurrency(scenario10Year.finalInvestmentValue)}.</li>
                <li>After 30 years: Continuing to invest, their portfolio grows to roughly {formatCurrency(scenario30Year.debtFreeFutureValue)} by age 52.</li>
              </ul>
            </div>
            <div className="p-4 border rounded-lg bg-orange-50 dark:bg-orange-900/30 border-orange-200 dark:border-orange-800">
              <h3 className="font-semibold flex items-center mb-2 text-orange-800 dark:text-orange-200">
                The Graduate With Debt
              </h3>
              <p className="text-sm text-muted-foreground">Spends the first 10 years paying off loans before they can start investing.</p>
              <Separator className="my-3"/>
               <ul className="text-sm space-y-2">
                <li>After 10 years: Their investment portfolio is worth {formatCurrency(0)}. They are just getting back to zero.</li>
                <li>After 30 years: They invest for the next 20 years, and their portfolio grows to roughly {formatCurrency(scenario30Year.withDebtFutureValue)} by age 52.</li>
              </ul>
            </div>
          </CardContent>
           <CardFooter>
                 <Alert variant="destructive" className="w-full">
                    <Info className="h-4 w-4" />
                    <AlertTitle className="font-headline">The Staggering Difference: The Opportunity Cost</AlertTitle>
                    <AlertDescription>
                       Even though both individuals invested the exact same amount of money out-of-pocket, the debt-free person ends up with {formatCurrency(scenario30Year.debtFreeFutureValue - scenario30Year.withDebtFutureValue)} more wealth. That lost decade of compounding growth can never be recovered. This is the true, lifelong cost of starting your financial life with significant debt.
                    </AlertDescription>
                </Alert>
            </CardFooter>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-xl">How to Approach Student Loans Wisely</CardTitle>
                <CardDescription>Minimize debt to maximize your future.</CardDescription>
            </CardHeader>
            <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li>Maximize Financial Aid: Fill out the FAFSA every year and actively apply for scholarships and grants.</li>
                    <li>Consider Return on Investment: Research the average starting salary for your desired major. A general rule of thumb is to not borrow more than your expected first-year salary.</li>
                    <li>Choose an Affordable School: Consider community college for the first two years or choose an in-state public university over a more expensive private or out-of-state school.</li>
                    <li>Work Part-Time: Earning money during college can significantly reduce the amount you need to borrow.</li>
                </ul>
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
