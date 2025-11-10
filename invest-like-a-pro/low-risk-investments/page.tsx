'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Scale, Layers, TrendingUp, TrendingDown, ArrowRight, Brain, ShieldCheck, Sigma, PieChart, Home, Landmark, AlertTriangle, Coins, Diamond, VenetianMask, LineChart, Target, Flame, Bot, Info } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';


const riskDimensions = [
    { type: 'Market Risk', icon: TrendingDown, description: 'The risk that the entire market or a broad market segment declines, affecting all investments within it.', example: 'A recession causes a broad sell-off in the stock market.' },
    { type: 'Credit Risk', icon: ShieldCheck, description: 'The risk that a borrower will default on their debt obligations, failing to make interest payments or repay the principal.', example: 'A corporate bond issuer goes bankrupt.' },
    { type: 'Liquidity Risk', icon: Layers, description: 'The risk that an asset cannot be sold quickly without a significant loss in price.', example: 'Trying to sell a house quickly in a buyer\'s market might require a large price cut.' },
    { type: 'Inflation Risk', icon: TrendingUp, description: 'The risk that your investment returns will not keep pace with the rate of inflation, causing you to lose purchasing power.', example: 'Cash held in a 0% checking account loses value every year due to inflation.' },
    { type: 'Behavioral Risk', icon: Brain, description: 'The risk that you become your own worst enemy by making emotional decisions.', example: 'Panic-selling all of your investments during a market crash.' },
];

const lowRiskInvestments: { icon: LucideIcon; title: string; description: string; }[] = [
  {
    icon: Landmark,
    title: "Government Bonds",
    description: "These are loans to a stable government (like U.S. Treasuries). They are considered very safe because the risk of default is virtually zero. They provide a predictable stream of income and stability during stock market downturns."
  },
];

const moderateRiskInvestments: { icon: LucideIcon; title: string; description: string; }[] = [
  {
    icon: PieChart,
    title: "Broad Market Index Funds (e.g., S&P 500)",
    description: "The foundation of most long-term portfolios. By owning a small piece of hundreds or thousands of companies, you diversify away the risk of any single company failing. Your return is tied to the growth of the overall economy."
  },
  {
    icon: Home,
    title: "Real Estate Investment Trusts (REITs)",
    description: "REITs are companies that own and operate a portfolio of income-producing real estate. They provide diversification and income, but are more sensitive to interest rates and economic cycles than bonds."
  },
];

const highRiskInvestments: { icon: LucideIcon; title: string; description: string; }[] = [
  {
    icon: LineChart,
    title: "Individual Stocks",
    description: "Owning a single stock carries concentration risk. While the upside can be immense if you pick a winner, the downside is a 100% loss if the company fails. Requires deep research and a strong stomach for volatility."
  },
  {
    icon: Target,
    title: "Sector-Specific ETFs",
    description: "These funds concentrate on a narrow segment of the market (e.g., clean energy, genomics). They lack broad diversification and are a bet on a specific trend, which can be very volatile as sectors fall in and out of favor."
  },
  {
    icon: Flame,
    title: "Venture Capital / Angel Investing",
    description: "Investing in private, early-stage startups. This offers the highest potential reward but also the highest risk, as the vast majority of startups fail. This is typically reserved for accredited investors."
  }
];

const speculativeAssets: { icon: LucideIcon; title: string; description: string; }[] = [
    {
        icon: Coins,
        title: "Cryptocurrency",
        description: "Digital assets like Bitcoin are non-productive. They don't generate earnings or cash flow. Their value is driven by supply, demand, and market sentiment, making them a speculative bet on future price appreciation."
    },
    {
        icon: Diamond,
        title: "Gold & Precious Metals",
        description: "Like crypto, gold is a non-productive asset. It has a long history as a store of value and a hedge against inflation, but it doesn't produce anything. Its return depends entirely on someone else paying more for it later."
    },
    {
        icon: VenetianMask,
        title: "Collectibles & Art",
        description: "Items like rare art, wine, or classic cars can be valuable, but they are illiquid, costly to store and insure, and generate no income. Their value is subjective and dependent on finding a willing buyer."
    }
]

export default function InvestmentRiskSpectrumPage() {
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
        <h1 className="text-3xl font-bold font-headline">Understanding the Investment Risk Spectrum</h1>
        <p className="text-muted-foreground mt-2">From low-risk bonds to high-risk speculative assets, understand where different investments fall on the risk-return spectrum.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Scale className="h-4 w-4" />
          <AlertTitle className="font-headline">The Spectrum That Shapes Everything</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
             <p>Every investment you’ll ever make—whether a government bond, an index fund, or Bitcoin—sits somewhere on the risk-return spectrum. This spectrum reflects a universal truth: the higher the potential return, the greater the uncertainty about achieving it. Understanding this relationship helps you make rational choices and resist emotional decisions when markets fluctuate.</p>
          </AlertDescription>
        </Alert>

         <Card>
            <CardHeader>
                <CardTitle className="font-headline text-lg">The Risk-Return Trade-Off</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex items-center justify-center p-4 bg-muted/40 rounded-lg text-xs sm:text-sm font-semibold">
                    <span>Low Risk (Bonds, Cash)</span>
                    <ArrowRight className="h-4 w-4 mx-2 sm:mx-4 shrink-0" />
                    <span>Moderate (Index Funds, REITs)</span>
                    <ArrowRight className="h-4 w-4 mx-2 sm:mx-4 shrink-0" />
                    <span>High (Stocks, VC)</span>
                    <ArrowRight className="h-4 w-4 mx-2 sm:mx-4 shrink-0" />
                    <span>Speculative (Crypto)</span>
                </div>
                <p className="text-sm text-muted-foreground">The fundamental principle is that potential return rises with an increase in risk. There is no such thing as a high-return, no-risk investment. If an investment offers the potential for high returns, it inherently comes with a higher risk of loss. Conversely, very safe investments like government bonds offer lower potential returns.</p>
                <Alert variant="default" className="bg-primary/5">
                    <Brain className="h-4 w-4"/>
                    <AlertTitle className="text-primary">Why It Matters:</AlertTitle>
                    <AlertDescription>
                       <p>Investors who misunderstand this principle chase performance, buy high, and sell low. Those who respect it build portfolios that match their goals, time horizons, and emotional tolerance for volatility.</p>
                       <p className="mt-2 font-semibold">Key insight: Risk is not just volatility, it’s the probability of permanent loss. A great investor seeks opportunities where risk is mispriced—for example, by using a 'margin of safety' to buy a productive asset for far less than its intrinsic value. This lowers risk while increasing the potential for high returns, breaking the simplistic 'more risk for more return' assumption.</p>
                    </AlertDescription>
                </Alert>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-xl">The Dimensions of Risk</CardTitle>
                <CardDescription>Not all risk is the same. Understanding these different types is crucial for building a resilient portfolio.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Type of Risk</TableHead>
                            <TableHead>Description</TableHead>
                            <TableHead>Example</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {riskDimensions.map(risk => (
                            <TableRow key={risk.type}>
                                <TableCell className="font-semibold flex items-center"><risk.icon className="h-4 w-4 mr-2 text-primary/80"/>{risk.type}</TableCell>
                                <TableCell>{risk.description}</TableCell>
                                <TableCell>{risk.example}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>

        <Card className="border-green-500/50 bg-green-50/50 dark:bg-green-900/20">
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center text-green-700 dark:text-green-300">
              <ShieldCheck className="mr-2 h-5 w-5" />
              Lower-Risk Investments: Preservation and Predictability
            </CardTitle>
            <CardDescription>These assets protect capital and smooth out volatility. They rarely produce exciting returns, but they buy you peace of mind and time to let higher-risk assets grow.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-3 gap-4 pt-4">
            {lowRiskInvestments.map(item => (
              <div key={item.title} className="p-4 border rounded-lg bg-card shadow-sm">
                <div className="flex items-center mb-2">
                  <item.icon className="mr-2 h-5 w-5 text-primary/80" />
                  <h3 className="font-semibold">{item.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
            {moderateRiskInvestments.map(item => (
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

         <Card className="border-orange-500/50 bg-orange-50/50 dark:bg-orange-900/20">
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center text-orange-700 dark:text-orange-300">
              <TrendingUp className="mr-2 h-5 w-5" />
              Medium-to-High Risk Investments: Growth and Volatility
            </CardTitle>
            <CardDescription>These assets drive long-term growth, but they also test your discipline. The challenge isn’t just enduring volatility, it’s staying invested when volatility strikes.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-3 gap-4 pt-4">
            {highRiskInvestments.map(item => (
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
        
        <Card className="border-destructive/50 bg-destructive/5">
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center text-destructive">
              <AlertTriangle className="mr-2 h-5 w-5" />
              Speculative Assets: The Greater Fool Dynamic
            </CardTitle>
            <CardDescription>Speculative assets have no intrinsic value drivers like earnings or dividends. Their price depends entirely on what the next buyer will pay. They can play a role in a portfolio, but only as a tiny satellite position, never the foundation.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-3 gap-4 pt-4">
            {speculativeAssets.map(item => (
              <div key={item.title} className="p-4 border border-destructive/20 rounded-lg bg-card shadow-sm">
                <div className="flex items-center mb-2">
                  <item.icon className="mr-2 h-5 w-5 text-destructive/80" />
                  <h3 className="font-semibold">{item.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you understand where different assets fall on the risk spectrum, you can start exploring them in more detail.
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
