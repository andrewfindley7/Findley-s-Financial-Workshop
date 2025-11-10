'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CircleDollarSign, CheckCircle, Info, TrendingUp, TrendingDown, Scale, ArrowRight, Brain, ThumbsUp, ThumbsDown } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const strategies: {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  example: string;
  pros: string[];
  cons: string[];
  extraInfo?: React.ReactNode;
}[] = [
  {
    id: "4-percent-rule",
    title: "The 4% Rule (Constant Inflation-Adjusted)",
    description: "Withdraw 4% of your initial portfolio value in the first year of retirement, then adjust that dollar amount for inflation each subsequent year.",
    icon: CircleDollarSign,
    example: "With a $1M portfolio, you withdraw $40,000 in Year 1. If inflation is 3%, you withdraw $41,200 in Year 2, regardless of market performance.",
    pros: ["Simple to calculate and understand.", "Provides a stable, predictable income that maintains purchasing power.", "Historically has a high probability of success over a 30-year retirement."],
    cons: ["Inflexible; doesn't adjust for market downturns.", "Vulnerable to 'Sequence of Returns Risk': A major crash early in retirement can significantly deplete the portfolio.", "May be too aggressive for very long retirements or conservative portfolios."],
    extraInfo: (
      <Alert variant="default" className="mt-3 text-xs bg-background/50">
        <Info className="h-4 w-4" />
        <AlertTitle className="font-semibold">The 25x Rule</AlertTitle>
        <AlertDescription>
          This rule provides a quick savings target: multiply your desired annual income by 25 to get your needed nest egg (e.g., $80,000/year requires a $2M portfolio).
        </AlertDescription>
      </Alert>
    ),
  },
  {
    id: "guyton-klinger",
    title: "Guardrails (Dynamic Adjustments)",
    description: "A dynamic method where you adjust your withdrawal percentage based on market performance, using 'guardrails' to prevent over-withdrawing in a down market or under-spending in a good one.",
    icon: Scale,
    example: "You might start with a 5% withdrawal rate. If a market crash causes your rate to rise above 6% (the upper guardrail), you reduce your next withdrawal by 10%. If a bull market causes your rate to fall below 4% (the lower guardrail), you increase your next withdrawal by 10%.",
    pros: ["More flexible and responsive to market conditions than the static 4% Rule.", "Helps mitigate Sequence of Returns Risk by forcing spending cuts in bad years.", "Allows for increased spending during good years."],
    cons: ["More complex to track and manage.", "Income is not stable; it will fluctuate from year to year.", "Requires emotional discipline to stick to the rules and cut spending when required."]
  },
  {
    id: "vpw",
    title: "Variable Percentage Withdrawal (VPW)",
    description: "You recalculate your withdrawal amount each year as a percentage of your portfolio's *current* balance, often using a percentage from an IRS table.",
    icon: TrendingUp,
    example: "With a $900k portfolio at age 67, the IRS RMD table might suggest a withdrawal factor of 27.4. You withdraw $900,000 / 27.4 = $32,847 for the year. Next year, you recalculate based on the new balance.",
    pros: ["Mathematically impossible to run out of money.", "Automatically adjusts spending to what the portfolio can support.", "Very simple calculation each year."],
    cons: ["Income can be highly volatile year-to-year, making budgeting difficult.", "Can lead to severe, undesirable spending cuts after a market downturn.", "May lead to underspending and leaving a very large inheritance, which may not be the primary goal."]
  },
  {
    id: 'rule-of-300',
    title: "The Rule of 300 (Monthly Income)",
    description: "A simple mental model for monthly income planning. It's essentially the 4% Rule (12 months / 0.04 = 300) framed for monthly expenses.",
    icon: Brain,
    example: "If you want $5,000 in monthly retirement income, you need a nest egg of approximately $5,000 x 300 = $1.5M. This gives you a quick target for your savings goal.",
    pros: ["Easy to understand and calculate a savings target based on monthly spending.", "Frames retirement needs in more familiar monthly terms."],
    cons: ["Shares all the same weaknesses as the 4% Rule (inflexibility, sequence risk).", "It's a planning tool, not a full withdrawal strategy on its own."]
  },
  {
    id: 'dividends-only',
    title: "Dividends & Interest Only",
    description: "A very conservative strategy where you only spend the income (dividends and interest) generated by your portfolio, never touching the original principal.",
    icon: TrendingDown,
    example: "Your $1.5M portfolio has an average dividend yield of 2.5%. You live off the $37,500 in annual dividends, preserving the $1.5M principal.",
    pros: ["Extremely safe; you will never deplete your principal.", "Simple to implement; just spend the income that hits your cash account.", "Maximizes wealth for heirs."],
    cons: ["Requires a very large portfolio to generate sufficient income.", "Income can be volatile as companies can cut dividends.", "Your spending power may not keep up with inflation if dividend growth is slow."]
  },
];

export default function PortfolioWithdrawalStrategiesPage() {
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
        <h1 className="text-3xl font-bold font-headline">Portfolio Withdrawal Strategies</h1>
        <p className="text-muted-foreground mt-2">Understanding strategies for drawing down your retirement savings, including the 4% Rule.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <CircleDollarSign className="h-4 w-4" />
          <AlertTitle className="font-headline">The Retirement Dilemma</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>You have spent decades saving for retirement. Now comes the hard part: how do you turn your nest egg into a reliable paycheck that lasts a lifetime? A withdrawal strategy is your plan for doing just that.</p>
            <p>It is a starting point for retirement planning, not a hard and fast law. The right strategy for you depends on your risk tolerance, desired income stability, and the size of your portfolio.</p>
          </AlertDescription>
        </Alert>

        <Card>
            <CardHeader>
                <CardTitle className="font-headline">Retirement Withdrawal Strategies</CardTitle>
                <CardDescription>Explore the most common strategies, each with its own benefits and drawbacks.</CardDescription>
            </CardHeader>
            <CardContent>
                <Accordion type="single" collapsible defaultValue="4-percent-rule" className="w-full">
                    {strategies.map(strategy => (
                        <AccordionItem value={strategy.id} key={strategy.id}>
                            <AccordionTrigger className="hover:no-underline">
                                <div className="flex items-center gap-3 text-left">
                                    <strategy.icon className="h-6 w-6 text-primary shrink-0" />
                                    <span className="text-lg font-semibold">{strategy.title}</span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="pt-2 pl-4 space-y-4">
                                <p className="text-sm text-muted-foreground">{strategy.description}</p>
                                <Alert variant="default" className="bg-muted/50">
                                    <AlertTitle className="font-semibold">Example</AlertTitle>
                                    <AlertDescription className="text-sm">{strategy.example}</AlertDescription>
                                </Alert>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="p-3 bg-green-500/10 rounded-md">
                                        <h4 className="font-semibold flex items-center text-green-700 dark:text-green-300"><ThumbsUp className="mr-2 h-4 w-4" /> Pros</h4>
                                        <ul className="list-disc pl-5 mt-1 text-sm space-y-1">{strategy.pros.map(pro => <li key={pro}>{pro}</li>)}</ul>
                                    </div>
                                    <div className="p-3 bg-red-500/10 rounded-md">
                                        <h4 className="font-semibold flex items-center text-red-700 dark:text-red-300"><ThumbsDown className="mr-2 h-4 w-4" /> Cons</h4>
                                        <ul className="list-disc pl-5 mt-1 text-sm space-y-1">{strategy.cons.map(con => <li key={con}>{con}</li>)}</ul>
                                    </div>
                                </div>
                                {strategy.extraInfo}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle className="font-headline">Strategy Comparison</CardTitle>
                <CardDescription>Use this table to quickly compare the trade-offs of each strategy.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Strategy</TableHead>
                                <TableHead>Income Stability</TableHead>
                                <TableHead>Flexibility</TableHead>
                                <TableHead>Simplicity</TableHead>
                                <TableHead>Portfolio Longevity</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-semibold">4% Rule</TableCell>
                                <TableCell>High</TableCell>
                                <TableCell>Low</TableCell>
                                <TableCell>High</TableCell>
                                <TableCell>Good</TableCell>
                            </TableRow>
                             <TableRow>
                                <TableCell className="font-semibold">Guardrails</TableCell>
                                <TableCell>Medium</TableCell>
                                <TableCell>High</TableCell>
                                <TableCell>Low</TableCell>
                                <TableCell>Very Good</TableCell>
                            </TableRow>
                             <TableRow>
                                <TableCell className="font-semibold">VPW</TableCell>
                                <TableCell>Low</TableCell>
                                <TableCell>High</TableCell>
                                <TableCell>Medium</TableCell>
                                <TableCell>Excellent (can't run out)</TableCell>
                            </TableRow>
                             <TableRow>
                                <TableCell className="font-semibold">Dividends Only</TableCell>
                                <TableCell>Medium</TableCell>
                                <TableCell>Low</TableCell>
                                <TableCell>Very High</TableCell>
                                <TableCell>Excellent (preserves principal)</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </CardContent>
        </Card>
        
        <Alert variant="default">
          <Info className="h-4 w-4" />
          <AlertTitle className="font-headline">The Final Word: A Guideline, Not a Gospel</AlertTitle>
          <AlertDescription>
            These rules are excellent starting points. Many retirees use a hybrid approach, perhaps relying on the 4% rule as a baseline but being willing to skip the inflation adjustment in a bad market year. The best strategy is one that aligns with your personal risk tolerance and provides you with peace of mind.
          </AlertDescription>
        </Alert>

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
