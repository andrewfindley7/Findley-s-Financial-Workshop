'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, AlertTriangle, Layers, Clock, Shield, TrendingUp, Info, RotateCw } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const timeBuckets = [
  {
    icon: Shield,
    title: "Short-Term Bucket (0-3 Years)",
    priority: "Capital Preservation & Liquidity",
    description: "This bucket is for money you know you will need in the near future. The absolute priority is that the money is safe and accessible.",
    examples: ["Emergency Fund", "Down payment for a house you plan to buy next year", "Saving for a wedding in 18 months."],
    assets: ["High-Yield Savings Accounts (HYSAs)", "Money Market Funds", "Short-Term Treasury Bills or CDs."],
    why: "Stocks are completely inappropriate for this bucket. A 30% market decline is a normal event, but it would be catastrophic if it happened right before you needed the cash for your down payment."
  },
  {
    icon: Layers,
    title: "Mid-Term Bucket (3-5 Years)",
    priority: "Balanced Growth & De-Risking",
    description: "This is for goals that are far enough away to benefit from some market growth, but close enough that you need to start thinking about preserving the capital as the goal approaches.",
    examples: ["A down payment for a house you plan to buy in 4 years", "A major home renovation planned for 5 years from now."],
    assets: ["A balanced portfolio (e.g., 60% stocks / 40% bonds)", "Target-date funds that automatically become more conservative over time."],
    why: "A purely stock-based portfolio can still be too risky if your timeline is less than 6 years. A balanced approach captures some upside while mitigating downside risk. As the goal gets closer (e.g., within the 3-year window), you should begin de-risking by moving funds from this bucket to your short-term bucket."
  },
  {
    icon: TrendingUp,
    title: "Long-Term Bucket (6+ Years)",
    priority: "Maximize Growth",
    description: "This is for goals that are far in the future, with retirement being the most common example. The priority is to maximize long-term compound growth.",
    examples: ["Retirement savings for someone in their 20s, 30s, or 40s", "Saving for a newborn's college education."],
    assets: ["A diversified portfolio heavily weighted towards equities (e.g., 80-100% in low-cost stock index funds)", "High-conviction individual stocks"],
    why: "With a time horizon of over six years, short-term market volatility is less of a concern. In fact, market downturns become opportunities to buy more assets at cheaper prices. Time is your greatest asset, allowing you to ride out volatility and capture the full power of compounding."
  }
];

export default function MatchingAssetsToTimeHorizonsPage() {
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
        <h1 className="text-3xl font-bold font-headline">Matching Assets to Time Horizons</h1>
        <p className="text-muted-foreground mt-2">The critical discipline of aligning investment choices with the timeline of your financial goals.</p>
      </div>
      <div className="space-y-6">
        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle className="font-headline">The #1 Rule: Avoid Becoming a Forced Seller</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>The single most important rule in portfolio construction is this: Never invest money you will need in the short term in assets that can be volatile in the short term. This principle, along with your personal risk tolerance, forms the twin pillars of a sound asset allocation strategy.</p>
            <p>Violating this rule turns you into a "forced seller", someone who has to sell their investments at the worst possible time (during a market downturn) to cover a planned expense. This is how paper losses become permanent, devastating losses. This entire lesson is about building a structure to prevent this from ever happening.</p>
          </AlertDescription>
        </Alert>
        
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
              <Brain className="mr-2 h-5 w-5 text-primary"/>
              The Three-Bucket Mental Model
            </CardTitle>
            <CardDescription>A simple framework for allocating your capital. Every dollar you have should fit into one of these three buckets based on when you need it.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {timeBuckets.map(bucket => (
              <div key={bucket.title} className="p-4 border rounded-lg bg-card shadow-sm">
                <h3 className="font-semibold text-lg flex items-center mb-2">
                  <bucket.icon className="mr-3 h-6 w-6 text-primary" />
                  {bucket.title}
                </h3>
                <p className="text-sm text-muted-foreground italic mb-3"><strong>Priority:</strong> {bucket.priority}</p>
                <p className="text-sm text-muted-foreground mb-3">{bucket.description}</p>
                <div className="space-y-3">
                    <div className="p-3 bg-muted/50 rounded-md">
                        <h4 className="font-semibold text-sm mb-1">Example Goals:</h4>
                        <ul className="list-disc pl-5 text-xs space-y-1">{bucket.examples.map(ex => <li key={ex}>{ex}</li>)}</ul>
                    </div>
                     <div className="p-3 bg-muted/50 rounded-md">
                        <h4 className="font-semibold text-sm mb-1">Appropriate Assets:</h4>
                        <ul className="list-disc pl-5 text-xs space-y-1">{bucket.assets.map(as => <li key={as}>{as}</li>)}</ul>
                    </div>
                     <div className="p-3 bg-primary/10 rounded-md">
                        <h4 className="font-semibold text-sm mb-1 text-primary">The "Why":</h4>
                        <p className="text-xs">{bucket.why}</p>
                    </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        
        <Alert>
          <Info className="h-4 w-4" />
          <AlertTitle className="font-headline">Putting It All Together: A Real-World Example</AlertTitle>
          <AlertDescription>
            <p>Imagine a 35-year-old investor. Their portfolio might look like this:</p>
            <ul className="list-disc pl-5 mt-2 text-sm space-y-1">
                <li>A $20,000 emergency fund in a high-yield savings account (HYSA) for the Short-Term Bucket.</li>
                <li>$50,000 in a 529 college savings plan for their 12-year-old child, invested in a target-date fund that will become more conservative over the next 6 years. This straddles the Mid-Term and Long-Term buckets.</li>
                <li>$150,000 in their 401(k) and Roth IRA, invested 90% in low-cost stock index funds and 10% in a bond fund. This is the Long-Term Bucket.</li>
            </ul>
            <p className="mt-2">Each dollar is in the right bucket for its job, protecting short-term needs while maximizing long-term growth.</p>
          </AlertDescription>
        </Alert>

        <Alert variant="default" className="bg-amber-50 dark:bg-amber-900/20 border-amber-300 dark:border-amber-700">
          <RotateCw className="h-4 w-4 text-amber-500" />
          <AlertTitle className="font-headline text-amber-900 dark:text-amber-200">The De-Risking Glide Path</AlertTitle>
          <AlertDescription className="text-amber-800 dark:text-amber-300">
            <p>Your financial plan is a living document, not a static snapshot. The most important rule is to protect your money as a goal approaches. When a mid-term goal (like a house down payment) enters the 3-year "safety zone," you must de-risk those funds. This means gradually selling your equities and moving the money into a safe, cash-equivalent vehicle like a CD ladder or HYSA. This protects you from being forced to sell your investments during a market downturn right when you need the cash.</p>
            <p className="mt-2">Remember that life changes, and a goal may move closer or further away. Re-evaluating your buckets annually ensures your asset allocation always aligns with your real-world timeline.</p>
          </AlertDescription>
        </Alert>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you understand how to align assets with time horizons, return to the main roadmap to continue building your financial knowledge.
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
