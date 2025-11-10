'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Flame, AlertTriangle, TrendingUp, TrendingDown, DollarSign, Percent, Info, Ban, CheckCircle, ArrowRight, ThumbsDown } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

const formatCurrency = (value: number) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 });
};

export default function WholeLifeInsurancePage() {
  const searchParams = useSearchParams();
  const fromStep = searchParams.get('from');

  const example = {
    premiumWholeLife: 500,
    premiumTerm: 50,
    years: 30,
    investmentReturn: 0.10,
    get premiumDifference() { return this.premiumWholeLife - this.premiumTerm; },
    get finalInvestmentValue() {
      let balance = 0;
      const monthlyContribution = this.premiumDifference;
      const monthlyRate = this.investmentReturn / 12;
      for (let i = 0; i < this.years * 12; i++) {
        balance = (balance + monthlyContribution) * (1 + monthlyRate);
      }
      return balance;
    },
    cashValueAt30Years: 225000, 
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
        <h1 className="text-3xl font-bold font-headline">Why Whole Life Insurance is a Bad Deal</h1>
        <p className="text-muted-foreground mt-2">Understanding the high costs and low returns of complex insurance products.</p>
      </div>
      <div className="space-y-6">
        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle className="font-headline">A Product That's Sold, Not Bought</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>Whole life insurance is one of the most profitable products for insurance companies and one of the most detrimental for the average consumer. It bundles a very expensive life insurance policy with a low-return, high-fee "savings" account called cash value.</p>
            <p className="font-semibold">For the vast majority of people, there is a much simpler, cheaper, and more effective way to secure both life insurance and long-term wealth: Buy Term and Invest the Difference. While whole life can have niche uses in complex estate planning for high-net-worth individuals, it is generally unsuitable for the average person's needs.</p>
          </AlertDescription>
        </Alert>

        <Card className="border-destructive/50 bg-destructive/5">
          <CardHeader>
            <CardTitle className="font-headline text-xl text-destructive flex items-center">
              <Ban className="mr-2 h-5 w-5"/> The Problems with Whole Life Insurance
            </CardTitle>
            <CardDescription>These policies are often intentionally complex and opaque. Here's what's happening behind the scenes.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            <div className="p-4 border border-destructive/20 rounded-lg bg-card shadow-sm">
              <h3 className="font-semibold flex items-center mb-2">
                <DollarSign className="mr-2 h-5 w-5" /> Extremely High Premiums
              </h3>
              <p className="text-sm text-muted-foreground">Whole life premiums are 10-20 times more expensive than term life insurance for the same death benefit. A large portion of these high premiums goes toward paying massive commissions to the agent and covering the insurance company's high overhead, not towards your "investment."</p>
            </div>
            <div className="p-4 border border-destructive/20 rounded-lg bg-card shadow-sm">
              <h3 className="font-semibold flex items-center mb-2">
                <TrendingDown className="mr-2 h-5 w-5" /> Terrible Investment Returns
              </h3>
              <p className="text-sm text-muted-foreground">The "cash value" component grows at a very low, often unguaranteed rate. After fees and expenses are deducted, the returns are typically far worse than what you could achieve by simply investing in a low-cost S&P 500 index fund over the long term.</p>
            </div>
            <div className="p-4 border border-destructive/20 rounded-lg bg-card shadow-sm">
              <h3 className="font-semibold flex items-center mb-2">
                <Percent className="mr-2 h-5 w-5" /> Surrender Charges & Lack of Liquidity
              </h3>
              <p className="text-sm text-muted-foreground">If you need to cancel your policy in the early years (often the first 10-15 years), you will face massive "surrender charges" and may walk away with little to none of your cash value. Accessing the money often requires you to take a loan against your own policy, which may come with interest charges.</p>
            </div>
             <div className="p-4 border border-destructive/20 rounded-lg bg-card shadow-sm">
              <h3 className="font-semibold flex items-center mb-2">
                <DollarSign className="mr-2 h-5 w-5" /> The Insurer Keeps Your Cash Value at Death
              </h3>
              <p className="text-sm text-muted-foreground">This is one of the most misunderstood aspects. Upon death, your beneficiary typically receives only the policy's death benefit. The separate cash value you've spent years building is often kept by the insurance company. You don't get both; the cash value is essentially absorbed by the insurer to pay out the death benefit.</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl text-green-700 dark:text-green-300 flex items-center">
                <CheckCircle className="mr-2 h-5 w-5" /> The Better Alternative: Buy Term and Invest the Difference
            </CardTitle>
            <CardDescription>This two-step strategy is simpler, cheaper, and vastly more effective for building wealth.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
                <h4 className="font-semibold">Step 1: Buy Term Life Insurance</h4>
                <p className="text-sm text-muted-foreground">Get an affordable term life insurance policy for the period you actually need it (e.g., while your kids are young and your mortgage is high). A healthy 30-year-old might get a $500,000 policy for 30 years for about $30-$50 per month. This handles your insurance need cheaply and efficiently.</p>
            </div>
            <Separator/>
            <div>
                <h4 className="font-semibold">Step 2: Invest the Difference</h4>
                <p className="text-sm text-muted-foreground">Take the significant amount of money you saved on premiums and invest it every month into a low-cost, diversified index fund or ETF inside a tax-advantaged account like a Roth IRA. This separates your insurance from your investments, allowing each to do its job properly.</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">The Math: A 30-Year Comparison</CardTitle>
            <CardDescription>Let's compare the outcomes for a hypothetical 30-year-old using some representative numbers.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            <div className="p-4 border rounded-lg bg-orange-50 dark:bg-orange-900/30 border-orange-200 dark:border-orange-800">
              <h3 className="font-semibold flex items-center mb-2 text-orange-800 dark:text-orange-200">
                <ThumbsDown className="mr-2 h-5 w-5" /> Scenario 1: A Whole Life Policy
              </h3>
              <p className="text-sm text-muted-foreground mb-2">A policy with a monthly premium of around {formatCurrency(example.premiumWholeLife)} is sold with the promise of building cash value.</p>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>Monthly Premium: <strong>{formatCurrency(example.premiumWholeLife)}</strong></li>
                <li>After {example.years} years, the policy's guaranteed "cash value" is around <strong>{formatCurrency(example.cashValueAt30Years)}</strong>.</li>
                <li className="font-bold">Result at age 60: {formatCurrency(example.cashValueAt30Years)}</li>
              </ul>
            </div>
            <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800">
              <h3 className="font-semibold flex items-center mb-2 text-green-800 dark:text-green-200">
                <TrendingUp className="mr-2 h-5 w-5" /> Scenario 2: Buy Term & Invest the Difference
              </h3>
              <p className="text-sm text-muted-foreground mb-2">The same person gets a term policy and invests the savings.</p>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>Term Life Premium: <strong>{formatCurrency(example.premiumTerm)}</strong>/month for the same death benefit.</li>
                <li>Invest the Difference: <strong>{formatCurrency(example.premiumDifference)}</strong> per month.</li>
                <li>Assuming a 10% average annual return in an S&P 500 index fund...</li>
                <li className="font-bold">Result at age 60: Your investment account grows to approximately {formatCurrency(example.finalInvestmentValue)}.</li>
              </ul>
            </div>
          </CardContent>
          <CardFooter>
             <Alert variant="default" className="w-full">
                <Info className="h-4 w-4" />
                <AlertTitle className="font-headline">The Clear Winner</AlertTitle>
                <AlertDescription>
                 By choosing the "Buy Term, Invest the Difference" strategy, you end up with over <strong>{formatCurrency(example.finalInvestmentValue - example.cashValueAt30Years)} more</strong> in wealth, while having the same death benefit protection all along.
                </AlertDescription>
            </Alert>
          </CardFooter>
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
                    <Link href={`/roadmaps/master-personal-finance${fromStep ? `?from=${fromStep}` : ''}`}>
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
