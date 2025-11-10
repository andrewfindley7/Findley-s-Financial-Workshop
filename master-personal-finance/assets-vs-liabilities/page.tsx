'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Wallet, TrendingUp, TrendingDown, Home, HelpCircle, ArrowRight, ShieldCheck, PiggyBank, Briefcase, HandCoins, Zap, Gem, Info } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const CashFlowDiagram = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline text-xl">The Three Cash Flow Patterns</CardTitle>
        <CardDescription>Understanding how different groups handle their money is the key to building wealth. Your goal is to move from the first pattern to the third.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-12">
        
        {/* Pattern 1: Paycheck-to-Paycheck */}
        <div>
          <h3 className="font-headline text-lg text-center mb-4 text-destructive">Pattern 1: The Paycheck-to-Paycheck Cycle</h3>
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-x-4 max-w-lg mx-auto">
              <div className="p-4 border rounded-lg h-full text-center">
                  <Briefcase className="mx-auto h-6 w-6 mb-2"/>
                  <h4 className="font-semibold text-sm">Job</h4>
                  <p className="text-xs text-muted-foreground">Produces Income</p>
              </div>
              <ArrowRight className="h-6 w-6 text-muted-foreground"/>
              <div className="p-4 border rounded-lg h-full text-center">
                  <HandCoins className="mx-auto h-6 w-6 mb-2"/>
                  <h4 className="font-semibold text-sm">Expenses</h4>
                   <p className="text-xs text-muted-foreground">Taxes, Rent, Food, Transport, Clothes</p>
              </div>
          </div>
           <p className="text-xs text-muted-foreground text-center mt-3">Income from a job flows directly out to cover expenses, creating a dependency on the next paycheck.</p>
        </div>
        
        <Separator/>

        {/* Pattern 2: The Middle Class Cycle */}
         <div>
          <h3 className="font-headline text-lg text-center mb-4 text-orange-600">Pattern 2: The Middle Class Cycle</h3>
          <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-x-4 max-w-2xl mx-auto">
              <div className="p-4 border rounded-lg h-full text-center">
                  <Briefcase className="mx-auto h-6 w-6 mb-2"/>
                  <h4 className="font-semibold text-sm">Job</h4>
                  <p className="text-xs text-muted-foreground">Produces Income</p>
              </div>
              <ArrowRight className="h-6 w-6 text-muted-foreground"/>
              <div className="p-4 border rounded-lg h-full text-center border-destructive border-2">
                  <Wallet className="mx-auto h-6 w-6 mb-2 text-destructive"/>
                  <h4 className="font-semibold text-sm">Liabilities</h4>
                  <p className="text-xs text-muted-foreground">Mortgage, Car Loan, Credit Cards, Student Loans</p>
              </div>
              <ArrowRight className="h-6 w-6 text-muted-foreground"/>
               <div className="p-4 border rounded-lg h-full text-center">
                  <HandCoins className="mx-auto h-6 w-6 mb-2"/>
                  <h4 className="font-semibold text-sm">Expenses</h4>
                   <p className="text-xs text-muted-foreground">Increased Taxes, Mortgage Payments, Loan Payments</p>
              </div>
          </div>
           <p className="text-xs text-muted-foreground text-center mt-3">Income is used to acquire liabilities (like car loans and credit card debt), which in turn create more expenses, trapping individuals in the "Rat Race."</p>
        </div>

        <Separator/>

        {/* Pattern 3: The Wealth-Building Cycle */}
        <div>
           <h3 className="font-headline text-lg text-center mb-4 text-green-600">Pattern 3: The Wealth-Building Cycle</h3>
            <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-center gap-x-2 max-w-4xl mx-auto">
                <div className="p-3 border rounded-lg h-full text-center">
                    <Briefcase className="mx-auto h-5 w-5 mb-1"/>
                    <h4 className="font-semibold text-xs">Job</h4>
                    <p className="text-xs text-muted-foreground">Produces Income</p>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground"/>
                <div className="p-3 border rounded-lg h-full text-center border-green-600 border-2">
                    <Gem className="mx-auto h-5 w-5 mb-1 text-green-600"/>
                    <h4 className="font-semibold text-xs">Assets</h4>
                    <p className="text-xs text-muted-foreground">e.g., Stocks, Bonds, Real Estate</p>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground"/>
                <div className="p-3 border rounded-lg h-full text-center">
                    <Zap className="mx-auto h-5 w-5 mb-1 text-primary"/>
                    <h4 className="font-semibold text-xs">Additional Income</h4>
                    <p className="text-xs text-muted-foreground">Dividends, Interest, Rent</p>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground"/>
                <div className="p-3 border rounded-lg h-full text-center border-green-600 border-dashed border-2">
                    <TrendingUp className="mx-auto h-5 w-5 mb-1 text-green-600"/>
                    <h4 className="font-semibold text-xs">More Assets</h4>
                    <p className="text-xs text-muted-foreground">Reinvest income to grow the cycle</p>
                </div>
            </div>
           <p className="text-xs text-muted-foreground text-center mt-3">Active income is used to acquire assets. Those assets then generate their own passive income, which is used to acquire even more assets, creating a powerful, self-sustaining cycle of wealth.</p>
        </div>

      </CardContent>
    </Card>
  );
};


export default function AssetsVsLiabilitiesPage() {
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
        <h1 className="text-3xl font-bold font-headline">Assets vs. Liabilities: The Wealth-Building Perspective</h1>
        <p className="text-muted-foreground mt-2">A simple, powerful way to understand what builds wealth and what drains it.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Wallet className="h-4 w-4" />
          <AlertTitle className="font-headline">The Simple Definition That Changes Everything</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>Forget complex accounting definitions for a moment. From a practical, cash-flow perspective, the difference is simple:</p>
            <ul className="list-disc pl-5 font-semibold">
                <li>An <span className="text-green-600">asset</span> is something you own that <span className="underline">puts money into your pocket</span>.</li>
                <li>A <span className="text-red-600">liability</span> is something you own that <span className="underline">takes money out of your pocket</span>.</li>
            </ul>
             <p className="mt-2">If you want to build wealth, your goal is to use your income to acquire assets that generate more income, while minimizing liabilities that drain your resources.</p>
          </AlertDescription>
        </Alert>

        <CashFlowDiagram />

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-green-500/50 bg-green-50/50 dark:bg-green-900/20">
            <CardHeader>
              <CardTitle className="font-headline text-xl flex items-center text-green-700 dark:text-green-300">
                <TrendingUp className="mr-2 h-5 w-5" />
                Examples of Wealth-Building Assets
              </CardTitle>
              <CardDescription>These items put money in your pocket or have the potential to do so without ongoing costs.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
                <p><strong>Stocks & Index Funds:</strong> They can pay dividends (income) or appreciate in value. Critically, they don't send you a bill every month to keep owning them.</p>
                <p><strong>Rental Property:</strong> A tenant pays you rent, and after expenses, the remaining cash flow goes into your pocket.</p>
                <p><strong>A Profitable Business:</strong> A business you own that generates profit for you without requiring your constant labor.</p>
                <p><strong>High-Yield Savings & Bonds:</strong> They pay you interest, increasing your cash holdings.</p>
            </CardContent>
          </Card>

          <Card className="border-red-500/50 bg-red-50/50 dark:bg-red-900/20">
            <CardHeader>
              <CardTitle className="font-headline text-xl flex items-center text-red-700 dark:text-red-300">
                <TrendingDown className="mr-2 h-5 w-5" />
                Examples of Liabilities
              </CardTitle>
              <CardDescription>These items cost you money and decrease your financial freedom.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
                <p><strong>Car Loan:</strong> A loan for a non-appreciating item that requires ongoing costs. It takes money out of your pocket every month.</p>
                <p><strong>Credit Card Debt:</strong> High-interest debt on past consumption that drains your cash.</p>
                <p><strong>Mortgage on Your Primary Residence:</strong> You must pay the mortgage, taxes, insurance, and upkeep every month.</p>
                <p><strong>A Boat or RV:</strong> These often come with payments, insurance, storage, and maintenance costs, and they typically depreciate in value.</p>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
              <HelpCircle className="mr-2 h-5 w-5 text-primary"/>
              The Big Debate: Is Your House an Asset or a Liability?
            </CardTitle>
            <CardDescription>Using our cash-flow definition, we can clear this up.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 border rounded-lg bg-orange-50 dark:bg-orange-900/30 border-orange-200 dark:border-orange-800">
              <h3 className="font-semibold flex items-center mb-2 text-orange-800 dark:text-orange-200">
                From a Cash Flow Perspective, Your Primary Home is a Liability
              </h3>
              <p className="text-sm text-muted-foreground">The house you live in takes money out of your pocket every single month through mortgage payments, property taxes, insurance, and maintenance. It does not generate income. While it may appreciate in value, it consumes your cash rather than producing it.</p>
            </div>
            <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800">
              <h3 className="font-semibold flex items-center mb-2 text-green-800 dark:text-green-200">
                For Net Worth Calculation, Your Home is an Asset
              </h3>
              <p className="text-sm text-muted-foreground">It's important to know that for the technical purpose of calculating your net worth (a 'balance sheet' view of what you own vs. what you owe), the market value of your home is a major asset.</p>
            </div>
          </CardContent>
          <CardFooter>
            <p className="text-xs text-muted-foreground">This distinction is crucial. Many people feel wealthy because they own an expensive home, but they may be "house rich and cash poor" because their home is their biggest expense. The goal is to acquire true, income-producing assets that can pay for your liabilities.</p>
          </CardFooter>
        </Card>

        <Card className="border-blue-500/50 bg-blue-50/50 dark:bg-blue-900/20">
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center text-blue-700 dark:text-blue-300">
              <ShieldCheck className="mr-2 h-5 w-5" />
              The "Gray Zone": Protective Assets
            </CardTitle>
            <CardDescription>Some items don't significantly build wealth, but they are critical because they protect your wealth.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-4 border rounded-lg bg-background/50">
              <h4 className="font-semibold mb-2 flex items-center"><PiggyBank className="mr-2 h-4 w-4"/>Your Emergency Fund</h4>
              <p className="text-sm text-muted-foreground">Cash in a high-yield savings account is a perfect example. It doesn't generate large returns, so it doesn't build wealth in a meaningful way. However, its job is to prevent you from taking on high-interest credit card debt (a major liability) or selling your real assets (like stocks) at a bad time when an emergency strikes. It's a defensive tool that protects your financial progress.</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-primary/50 bg-primary/5">
            <CardHeader>
                <CardTitle className="font-headline text-xl flex items-center">
                    <TrendingUp className="mr-2 h-5 w-5 text-primary"/>
                    Using Liabilities as Tools: The Asset-Liability Cycle
                </CardTitle>
                <CardDescription>
                    This cash-flow perspective helps you see liabilities not just as traps, but as potential tools. The key is to use "good debt" to acquire assets.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="p-4 border rounded-lg bg-background">
                    <h4 className="font-semibold mb-2">The Rental Property Cycle</h4>
                    <p className="text-sm text-muted-foreground">You take out a mortgage (a liability) to buy a rental house. A tenant pays you rent. If the rent covers the mortgage, taxes, insurance, and repairs, the property is now a cash-flowing <strong>asset</strong> that is paying for its own liability.</p>
                </div>
                 <div className="p-4 border rounded-lg bg-background">
                    <h4 className="font-semibold mb-2">The Education Cycle</h4>
                    <p className="text-sm text-muted-foreground">You take out a student loan (a liability) to get a degree that significantly increases your earning potential. Your higher income (your career is your biggest asset) then allows you to acquire more income-producing assets like stocks and bonds.</p>
                </div>
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
