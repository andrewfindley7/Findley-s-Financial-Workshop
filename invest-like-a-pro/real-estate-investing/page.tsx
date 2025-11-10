'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Home, Building, TrendingUp, TrendingDown, Scale, User, Users, Info, ThumbsUp, ThumbsDown, ArrowRight, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

export default function RealEstateInvestingPage() {
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
        <h1 className="text-3xl font-bold font-headline">Real Estate Investing & REITs</h1>
        <p className="text-muted-foreground mt-2">Explore the fundamentals of investing in property, from direct ownership to publicly traded funds.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Home className="h-4 w-4" />
          <AlertTitle className="font-headline">A Tangible Asset Class</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>Real estate investing involves the purchase of property with the goal of generating income, appreciation, or both. Unlike stocks or bonds, real estate is a tangible, physical asset. The primary ways to profit are through rental income (cash flow) and appreciation (the property's value increasing over time).</p>
            <p className="font-semibold">It's a diverse asset class with two main paths for the average investor: active direct ownership or passive investment through REITs.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">Two Primary Ways to Invest</CardTitle>
            <CardDescription>You can invest in real estate directly (actively) or indirectly (passively).</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg bg-card shadow-sm">
                <h3 className="font-semibold flex items-center mb-1"><User className="mr-2 h-5 w-5 text-primary"/>Direct Ownership (Active)</h3>
                <p className="text-sm text-muted-foreground">This is what most people think of: buying a physical property like a single-family home, a condo, or a multi-unit building to rent out to tenants. This approach offers high control but also requires significant capital, time, and management effort.</p>
            </div>
            <div className="p-4 border rounded-lg bg-card shadow-sm">
                <h3 className="font-semibold flex items-center mb-1"><Users className="mr-2 h-5 w-5 text-primary"/>REITs (Passive)</h3>
                <p className="text-sm text-muted-foreground">A Real Estate Investment Trust (REIT) is a company that owns and often operates income-producing real estate. You can buy shares of a publicly-traded REIT on the stock market, just like any other stock. This offers instant diversification across many properties with very low capital and no management effort required from you.</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
              <Scale className="mr-2 h-5 w-5 text-primary" />
              The Pros and Cons: A Detailed Comparison
            </CardTitle>
             <CardDescription>Each approach has significant trade-offs to consider.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            <div className="p-4 border rounded-lg bg-card">
              <h3 className="font-semibold flex items-center mb-2">Direct Ownership</h3>
              <Separator />
               <div className="mt-3 space-y-3">
                    <div className="p-3 bg-green-50/50 dark:bg-green-900/20 rounded-md">
                        <h4 className="font-semibold flex items-center text-sm text-green-700 dark:text-green-300"><ThumbsUp className="mr-2 h-4 w-4" /> Pros</h4>
                        <ul className="list-disc pl-5 mt-1 text-xs space-y-1">
                            <li><strong>Leverage:</strong> You can use a mortgage (borrowed money) to control a large, valuable asset, which can amplify your returns if the property appreciates.</li>
                            <li><strong>Control:</strong> You have full control over the property, from tenant selection to renovations.</li>
                            <li><strong>Tax Benefits:</strong> You can often deduct expenses like mortgage interest, property taxes, and depreciation.</li>
                        </ul>
                    </div>
                    <div className="p-3 bg-red-50/50 dark:bg-red-900/20 rounded-md">
                        <h4 className="font-semibold flex items-center text-sm text-red-700 dark:text-red-300"><ThumbsDown className="mr-2 h-4 w-4" /> Cons</h4>
                        <ul className="list-disc pl-5 mt-1 text-xs space-y-1">
                            <li><strong>Magnified Losses:</strong> Leverage is a double-edged sword. If the property's value falls, your losses are also amplified, and you can end up owing more than the property is worth.</li>
                            <li><strong>Illiquid:</strong> You can't sell a property instantly. It can take months to find a buyer.</li>
                            <li><strong>High Transaction Costs:</strong> Buying and selling involve significant costs (closing costs, realtor fees).</li>
                            <li><strong>Management Intensive:</strong> Requires dealing with tenants, repairs, and vacancies (the "3 T's": Tenants, Toilets, & Termites).</li>
                            <li><strong>Concentration Risk:</strong> Owning one or two properties concentrates your risk in a single location and asset.</li>
                        </ul>
                    </div>
               </div>
            </div>
            <div className="p-4 border rounded-lg bg-card">
              <h3 className="font-semibold flex items-center mb-2">REITs (Real Estate Investment Trusts)</h3>
              <Separator />
              <div className="mt-3 space-y-3">
                    <div className="p-3 bg-green-50/50 dark:bg-green-900/20 rounded-md">
                        <h4 className="font-semibold flex items-center text-sm text-green-700 dark:text-green-300"><ThumbsUp className="mr-2 h-4 w-4" /> Pros</h4>
                        <ul className="list-disc pl-5 mt-1 text-xs space-y-1">
                            <li><strong>Liquidity:</strong> You can buy and sell shares instantly on the stock market.</li>
                            <li><strong>Diversification:</strong> A single REIT share gives you ownership in a diversified portfolio of properties, often across many geographic locations and property types (e.g., residential, office, industrial, data centers, retail).</li>
                            <li><strong>Passive:</strong> Requires no management effort from you.</li>
                            <li><strong>High Dividends:</strong> REITs are legally required to pay out at least 90% of their taxable income to shareholders as dividends.</li>
                        </ul>
                    </div>
                    <div className="p-3 bg-red-50/50 dark:bg-red-900/20 rounded-md">
                        <h4 className="font-semibold flex items-center text-sm text-red-700 dark:text-red-300"><ThumbsDown className="mr-2 h-4 w-4" /> Cons</h4>
                        <ul className="list-disc pl-5 mt-1 text-xs space-y-1">
                            <li><strong>No Leverage for You:</strong> You don't get the personal benefit of leverage that comes with a mortgage (though the REIT itself uses debt).</li>
                            <li><strong>Less Control:</strong> You are a shareholder, not a manager. You have no say in property decisions.</li>
                            <li><strong>Tax Inefficiency:</strong> REIT dividends are typically taxed as ordinary income, which is a higher rate than qualified stock dividends.</li>
                            <li><strong>Interest Rate Sensitivity:</strong> REITs often carry significant debt. When interest rates rise, their borrowing costs increase, which can hurt profits. Higher rates also make the fixed yields on bonds more attractive, providing competition for REIT dividends and potentially causing their stock prices to fall.</li>
                        </ul>
                    </div>
               </div>
            </div>
          </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-xl">Key Metrics for Direct Ownership</CardTitle>
                <CardDescription>If you're considering buying a rental property, these are two essential calculations.</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg bg-muted/30">
                    <h4 className="font-semibold">Capitalization Rate (Cap Rate)</h4>
                    <p className="text-xs text-muted-foreground mt-1">Measures the potential rate of return on a property based on its income. It's like a dividend yield for a property.</p>
                    <p className="font-mono text-xs bg-background p-2 rounded-md my-2">Cap Rate = (Net Operating Income / Property Value) * 100</p>
                    <p className="text-xs text-muted-foreground"><strong>Net Operating Income (NOI)</strong> is your annual rental income minus all operating expenses (property taxes, insurance, maintenance) *except* for your mortgage payment.</p>
                </div>
                 <div className="p-4 border rounded-lg bg-muted/30">
                    <h4 className="font-semibold">Cash-on-Cash Return</h4>
                    <p className="text-xs text-muted-foreground mt-1">Measures the cash income earned on the cash you actually invested. This is a crucial measure of performance when using leverage.</p>
                    <p className="font-mono text-xs bg-background p-2 rounded-md my-2">CoC Return = (Annual Pre-Tax Cash Flow / Total Cash Invested) * 100</p>
                    <p className="text-xs text-muted-foreground"><strong>Annual Pre-Tax Cash Flow</strong> is your Net Operating Income minus your annual mortgage payments. <strong>Total Cash Invested</strong> is your down payment plus closing costs.</p>
                </div>
            </CardContent>
        </Card>
        
        <Alert variant="default" className="bg-callout text-callout-foreground border-blue-200 dark:border-blue-800">
            <Info className="h-4 w-4"/>
            <AlertTitle className="font-headline">Your Primary Home: An Asset or Not?</AlertTitle>
            <AlertDescription className="prose-sm max-w-none dark:prose-invert">
                <p className="mt-2">For net worth calculation, your home is an asset. However, from a cash flow perspective, the house you live in is a liability. It takes money out of your pocket every month (mortgage, taxes, insurance, maintenance) and does not generate income.</p>
                <p className="mt-2 font-semibold">An investment property, on the other hand, is an asset because it is designed to put money *into* your pocket through rental income. This is a crucial distinction. Don't confuse the roof over your head with a cash-flowing investment.</p>
            </AlertDescription>
        </Alert>

        <Alert variant="destructive" className="bg-amber-50 dark:bg-amber-900/20 border-amber-300 dark:border-amber-700">
          <AlertTriangle className="h-4 w-4 text-amber-500" />
          <AlertTitle className="font-headline text-amber-900 dark:text-amber-200">A Note on Non-Traded REITs</AlertTitle>
          <AlertDescription className="text-amber-800 dark:text-amber-300 prose prose-sm max-w-none dark:prose-invert">
            <p>Be aware of private or non-traded REITs, which are not listed on public stock exchanges. While they may promise high returns, they are generally illiquid (you cannot easily sell your shares), have very high fees, and lack the transparency of publicly traded REITs. For most individual investors, publicly traded REITs or REIT ETFs are the far superior and safer choice.</p>
          </AlertDescription>
        </Alert>
        
        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you understand this key asset class, return to the main roadmap to continue building your financial knowledge.
                </CardDescription>
            </CardHeader>
            <CardContent>
                 <Button asChild>
                    <Link href={`/roadmaps/invest-like-a-pro${fromStep ? `?from=${fromStep}` : ''}`}>
                        Return to the Invest Like a Pro Roadmap
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </CardContent>
        </Card>

      </div>
    </>
  );
}
