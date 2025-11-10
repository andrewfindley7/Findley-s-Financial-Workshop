'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Scale, Layers, TrendingUp, TrendingDown, ArrowRight, Brain, ShieldCheck, Sigma, PieChart, Info } from 'lucide-react';
import Link from 'next/link';

const riskReturnConcepts = [
  {
    icon: TrendingUp,
    title: "The Risk-Return Trade-Off",
    description: "This is the fundamental principle that potential return rises with an increase in risk. There is no such thing as a high-return, no-risk investment. If an investment offers the potential for high returns, it inherently comes with a higher risk of loss. Conversely, very safe investments like government bonds offer lower potential returns."
  },
  {
    icon: Layers,
    title: "Diversification: Don't Put All Your Eggs in One Basket",
    description: "Diversification is the practice of spreading your investments across various financial instruments, industries, and other categories to reduce risk. The goal is to own a collection of assets that do not all move in the same direction at the same time, smoothing out the returns of your portfolio."
  }
];

const riskTypes = [
  {
    icon: ShieldCheck,
    title: "Unsystematic Risk (Diversifiable)",
    description: "This is the risk specific to a single company or industry (e.g., a CEO scandal, a failed product, or new regulations targeting that industry). This type of risk can be almost entirely eliminated through diversification. By owning a broad market index fund, the failure of any single company will have a negligible impact on your overall portfolio."
  },
  {
    icon: Sigma,
    title: "Systematic Risk (Market Risk)",
    description: "This is the risk inherent to the entire market or market segment. It is undiversifiable. Factors like recessions, changes in interest rates, wars, and political instability affect all stocks to some degree. Asset allocation (mixing stocks with less correlated assets like bonds) is the primary tool to manage this type of risk, but it cannot be eliminated."
  }
];

export default function RiskReturnAndDiversificationPage() {
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
        <h1 className="text-3xl font-bold font-headline">Risk, Return, and Diversification</h1>
        <p className="text-muted-foreground mt-2">Understanding the core principles of building a resilient investment portfolio.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Scale className="h-4 w-4" />
          <AlertTitle className="font-headline">The Building Blocks of Portfolio Theory</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>Every investment decision involves a trade-off between risk and potential reward. Understanding this relationship and how to manage it through diversification is the foundation of modern portfolio construction. This lesson introduces these critical concepts.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">Core Principles</CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
            {riskReturnConcepts.map(concept => (
              <div key={concept.title} className="p-4 border rounded-lg bg-card shadow-sm">
                <div className="flex items-center mb-2">
                  <concept.icon className="mr-2 h-5 w-5 text-primary/80" />
                  <h3 className="font-semibold">{concept.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{concept.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
              <Brain className="mr-2 h-5 w-5 text-primary" />
              Volatility vs. Risk: A Crucial Distinction
            </CardTitle>
            <CardDescription>
                Many people use "risk" and "volatility" interchangeably, but great investors know they are not the same thing. Understanding the difference is key to a rational investment mindset.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg bg-muted/40">
                <h4 className="font-semibold mb-2">Volatility is Price Fluctuation</h4>
                <p className="text-sm text-muted-foreground">Volatility is the up-and-down movement of a stock's price. A stock that swings wildly is volatile. While this can feel unsettling, volatility is a normal and expected part of owning stocks. For a long-term investor, it is not the same as risk.</p>
            </div>
            <div className="p-4 border rounded-lg bg-red-500/10">
                <h4 className="font-semibold text-destructive mb-2">Risk is Permanent Loss of Capital</h4>
                <p className="text-sm text-muted-foreground">True risk is the chance that you will permanently lose your money. This rarely comes from volatility itself, but from two main sources:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                    <li><strong>Business Risk:</strong> The underlying company fails, and your ownership stake (the stock) becomes worthless.</li>
                    <li><strong>Valuation Risk:</strong> You, the investor, create risk by overpaying for a business. If you buy a stock at a price far above its intrinsic value, it may take years to get your money back, even if the business itself does well.</li>
                </ul>
            </div>
          </CardContent>
          <CardFooter>
            <Alert>
                <AlertDescription>
                    The risk is not in the stock, it's in the price you pay. A volatile stock bought at a cheap price is far less risky than a stable stock bought at an expensive price. Your decisions as an investor are the primary source of risk.
                </AlertDescription>
            </Alert>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">Practical Application</CardTitle>
          </CardHeader>
          <CardContent>
             <Alert variant="default" className="bg-callout text-callout-foreground border-blue-200 dark:border-blue-800">
                <AlertTitle className="font-semibold">A Modern, Diversified Portfolio</AlertTitle>
                <AlertDescription>
                    <p className="mt-2">A balanced investor might hold 60% in a broad U.S. stock index, 20% in international equities, and 20% in high-quality bonds. For a younger investor with a long time horizon, this allocation should be more aggressive, with 80-90% or more in stocks. Sacrificing long-term growth for short-term comfort is often an emotional decision, not a logical one. If you find the volatility of a higher stock allocation difficult to handle, consider working with a financial advisor who can help you stay the course.</p>
                    <p className="mt-2">The goal of diversification is to smooth out returns. While the stock portions move with global growth cycles, bonds often move inversely, cushioning the portfolio during downturns. However, diversification cannot prevent losses in a broad market crash. In a crisis, even uncorrelated assets can fall together as investors sell everything for cash.</p>
                </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
                <Brain className="mr-2 h-5 w-5 text-primary"/>
                The Two Types of Risk
            </CardTitle>
            <CardDescription>It is crucial to understand that diversification protects you from one type of risk, but not the other. This distinction is the foundation for Modern Portfolio Theory.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
            {riskTypes.map(item => (
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
        
        <p className="text-sm text-muted-foreground italic text-center">Understanding these two types of risk provides the foundation for Modern Portfolio Theory, which seeks to maximize returns for a given level of risk.</p>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
                <PieChart className="mr-2 h-5 w-5 text-primary"/>
                Modern Portfolio Theory (MPT) and the Efficient Frontier
            </CardTitle>
            <CardDescription>
                A Nobel Prize-winning concept that formalizes the benefits of diversification.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">MPT shows that it's possible to construct an "optimal" portfolio that offers the maximum possible expected return for a given level of risk. This is known as achieving the best <strong>risk-adjusted return</strong>, which simply means getting the most 'bang for your buck' for the volatility you are accepting. The set of all such optimal portfolios is known as the <strong>"efficient frontier."</strong></p>
              <Alert variant="default" className="bg-primary/5">
                    <AlertTitle className="font-semibold">The Core Idea: Correlation</AlertTitle>
                    <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
                        <p>The power of diversification comes from owning assets that are less than perfectly correlated. If two assets move together perfectly (a correlation of +1), there’s no diversification benefit. If they move in opposite directions (a correlation of -1), combining them can sharply reduce portfolio volatility.</p>
                        <p className="mt-2">The goal of MPT is not to eliminate risk, but to ensure you are being adequately compensated for the level of risk you are taking.</p>
                        <p className="mt-2 font-semibold">Modern approaches like factor investing and risk parity evolved from MPT’s foundation. They use the same core idea balancing risk, not just returns but with more flexible tools and real-time data.</p>
                        <p className="mt-2 font-semibold">Even a perfectly diversified portfolio can fail if the investor cannot stay disciplined during drawdowns, emotional reactions are often the greatest source of real-world portfolio risk.</p>
                    </AlertDescription>
              </Alert>
          </CardContent>
        </Card>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you understand these key portfolio concepts, return to the main roadmap to continue building your financial knowledge.
                </CardDescription>
            </CardHeader>
            <CardContent>
                 <Button asChild>
                    <Link href={`/roadmaps/invest-like-a-pro${fromStep ? `#${fromStep}` : ''}`}>
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
