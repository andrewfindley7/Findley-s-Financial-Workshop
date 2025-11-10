'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowDownUp, Compass, Shuffle, ThumbsUp, ThumbsDown, Brain, Layers, Info } from 'lucide-react';
import Link from 'next/link';

export default function StrategicVsTacticalAllocationPage() {
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
        <h1 className="text-3xl font-bold font-headline">Strategic vs. Tactical Asset Allocation</h1>
        <p className="text-muted-foreground mt-2">Understanding the two primary philosophies for managing your portfolio's asset mix.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <ArrowDownUp className="h-4 w-4" />
          <AlertTitle className="font-headline">Your Portfolio's Blueprint</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>Asset allocation how you divide your portfolio among major categories like stocks, bonds, and cash is the most significant driver of your long-term returns. There are two main schools of thought on how to manage this mix: strategic and tactical.</p>
            <p className="font-semibold">Understanding this distinction is key to defining your own investment approach and maintaining discipline through market cycles.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">The Core Concepts</CardTitle>
            <CardDescription>A simple analogy: a diet plan.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg bg-card shadow-sm">
                <h3 className="font-semibold flex items-center mb-1"><Compass className="mr-2 h-5 w-5 text-primary"/>Strategic Allocation</h3>
                <p className="text-sm text-muted-foreground">Strategic asset allocation is a long-term investment strategy focusing on an optimal asset mix based on risk tolerance, time horizon, and goals. This is your baseline portfolio structure, designed to be held for years and rebalanced periodically. Like a balanced diet, it's the foundation for long-term health.</p>
            </div>
            <div className="p-4 border rounded-lg bg-card shadow-sm">
                <h3 className="font-semibold flex items-center mb-1"><Shuffle className="mr-2 h-5 w-5 text-primary"/>Tactical Allocation</h3>
                <p className="text-sm text-muted-foreground mb-3">Tactical asset allocation involves making short-term, active adjustments to your strategic mix to capitalize on perceived market opportunities. It's like adding more carbs to your diet before a marathon; these are temporary shifts from your baseline in an attempt to capture gains from market volatility or other specific conditions.</p>
                <Alert variant="default" className="text-xs bg-callout text-callout-foreground border-blue-200 dark:border-blue-800">
                    <AlertTitle>Example</AlertTitle>
                    <AlertDescription>
                        A tactical investor might reduce their stock exposure from 60% to 50% if they believe a recession is imminent, then reinvest that 10% back into stocks once market conditions stabilize.
                    </AlertDescription>
                </Alert>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Pros and Cons of Each Approach</CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800">
              <h3 className="font-semibold flex items-center mb-2 text-green-800 dark:text-green-200">
                <ThumbsUp className="mr-2 h-5 w-5" /> The Case for a Purely Strategic Approach
              </h3>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>Simplicity and Discipline: It's easy to implement and maintain through periodic rebalancing.</li>
                <li>Reduces Emotional Errors: By sticking to a pre-defined plan, you avoid the temptation to time the market based on fear or greed.</li>
                <li>Low Cost & Effort: This philosophy aligns perfectly with a low-cost, passive index fund strategy.</li>
                <li>Proven Effectiveness: For the vast majority of investors, a consistent, strategic allocation is the most reliable path to long-term success.</li>
              </ul>
            </div>
            <div className="p-4 border rounded-lg bg-orange-50 dark:bg-orange-900/30 border-orange-200 dark:border-orange-800">
              <h3 className="font-semibold flex items-center mb-2 text-orange-800 dark:text-orange-200">
                <ThumbsDown className="mr-2 h-5 w-5" /> The Challenges of a Tactical Approach
              </h3>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>Requires Market Timing: Successfully implementing tactical shifts requires you to be right twice: when to get out of an asset and when to get back in. This is notoriously difficult.</li>
                <li>Behavioral Biases: Tactical shifts are often driven by emotion disguised as logic. Overconfidence after a winning streak or recency bias from a bear market can lead to poorly timed, value-destroying decisions.</li>
                <li>Increased Risk and Costs: Active trading incurs more transaction costs and potential taxes, which can be a drag on returns.</li>
                <li>High Degree of Difficulty: It requires deep market knowledge, skill, and emotional detachment. Many who try to be tactical end up underperforming a simple strategic approach because they buy high and sell low.</li>
              </ul>
            </div>
          </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-xl flex items-center">
                    <Layers className="mr-2 h-5 w-5 text-primary"/>A Hybrid Solution: The Core-Satellite Model
                </CardTitle>
                <CardDescription>For advanced investors seeking a balance, this approach combines the discipline of strategic allocation with the flexibility of tactical bets.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">In a core-satellite model, the majority of your portfolio (e.g., 80-90%) forms the 'core' and is managed with a long-term, strategic allocation of low-cost index funds. The smaller 'satellite' portion (10-20%) is then used to make active, tactical bets on specific stocks, sectors, or themes you have high conviction in. This structure ensures that even if your tactical bets go wrong, the core of your portfolio remains stable and on track to meet your long-term goals.</p>
            </CardContent>
        </Card>
        
        <Alert className="bg-callout text-callout-foreground border-blue-200 dark:border-blue-800">
          <Compass className="h-4 w-4" />
          <AlertTitle className="font-headline">The Bottom Line for Most Investors</AlertTitle>
          <AlertDescription>
            While professional fund managers may use tactical allocation, most individual investors are best served by focusing primarily on a sound Strategic Asset Allocation. Define your long-term targets, implement them with low-cost index funds, and rebalance periodically. This simple, disciplined approach is the most proven path to achieving your financial goals. For those with deep knowledge and strong discipline, a small, tactical 'satellite' allocation can be a reasonable way to express specific views without jeopardizing the entire portfolio.
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