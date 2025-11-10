'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, HeartPulse, ArrowRight, Blend, Info } from 'lucide-react';
import Link from 'next/link';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useSearchParams } from 'next/navigation';

const sampleDebts = [
  { name: 'Personal Loan', balance: 4000, apr: 15 },
  { name: 'Car Loan', balance: 12000, apr: 7 },
  { name: 'Student Loan', balance: 25000, apr: 6 },
];


export default function DebtPayoffStrategiesPage() {
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
        <h1 className="text-3xl font-bold font-headline">Debt Payoff Strategies: Avalanche vs. Snowball</h1>
        <p className="text-muted-foreground mt-2">Learn the two most effective methods for eliminating debt and choose the one that's right for you.</p>
      </div>
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>A Quick Example</CardTitle>
            <CardDescription>Let's see how each method works with a sample set of debts. Assume you have an extra $300/month to put towards your debt.</CardDescription>
          </CardHeader>
          <CardContent>
             <div className="overflow-x-auto rounded-lg border">
                 <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Debt</TableHead>
                            <TableHead className="text-right">Balance</TableHead>
                            <TableHead className="text-right">Interest Rate (APR)</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {sampleDebts.map(debt => (
                             <TableRow key={debt.name}>
                                <TableCell className="font-medium">{debt.name}</TableCell>
                                <TableCell className="text-right">${debt.balance.toLocaleString()}</TableCell>
                                <TableCell className="text-right">{debt.apr}%</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                 </Table>
             </div>
             <div className="grid md:grid-cols-2 gap-4 mt-4 text-sm">
                <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center"><TrendingUp className="mr-2 h-4 w-4 text-primary"/>Avalanche Approach:</h4>
                    <p>You would focus all extra payments on the Personal Loan first because it has the highest interest rate (15%), saving you the most money on interest.</p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center"><HeartPulse className="mr-2 h-4 w-4 text-primary"/>Snowball Approach:</h4>
                    <p>You would focus all extra payments on the Personal Loan first because it has the smallest balance ($4,000), giving you a quick, motivating win.</p>
                </div>
             </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">Choose Your Payoff Strategy</CardTitle>
            <CardDescription>The Avalanche method is mathematically optimal, but the Snowball method is often psychologically more powerful. The best plan is the one you can stick with.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold text-lg flex items-center mb-2">
                <TrendingUp className="mr-3 h-5 w-5 text-primary" /> The Debt Avalanche (Mathematically Optimal)
              </h3>
              <p className="text-sm text-muted-foreground mb-3">With the Avalanche method, you pay the minimum on all debts, and then you put every extra dollar you have towards the debt with the highest interest rate (APR), regardless of the balance. Once that debt is paid off, you roll its payment into the next highest interest debt. This is the best choice for people who are motivated by saving the most money possible and can stay disciplined without frequent 'wins'.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div className="p-3 bg-green-500/10 rounded-md">
                  <h4 className="font-semibold flex items-center text-green-700 dark:text-green-300">Pros</h4>
                  <ul className="list-disc pl-5 mt-1">
                    <li>Saves you the most money in interest over time.</li>
                    <li>Gets you out of debt the fastest.</li>
                  </ul>
                </div>
                <div className="p-3 bg-red-500/10 rounded-md">
                  <h4 className="font-semibold flex items-center text-red-700 dark:text-red-300">Cons</h4>
                  <ul className="list-disc pl-5 mt-1">
                    <li>Can feel slow at first if your highest interest debt also has a large balance.</li>
                    <li>Less psychological 'quick wins.'</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold text-lg flex items-center mb-2">
                <HeartPulse className="mr-3 h-5 w-5 text-primary" /> The Debt Snowball (Psychologically Powerful)
              </h3>
              <p className="text-sm text-muted-foreground mb-3">With the Snowball method, you pay the minimum on all debts, and then you put every extra dollar you have towards the debt with the smallest balance, regardless of the interest rate. Once that debt is paid off, you feel a victory and roll its payment into the next smallest balance. This is the best choice for people who need momentum and motivation from quick wins to stay on track.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div className="p-3 bg-green-500/10 rounded-md">
                            <h4 className="font-semibold flex items-center text-green-700 dark:text-green-300">Pros</h4>
                             <ul className="list-disc pl-5 mt-1">
                                <li>Provides quick wins and powerful motivation.</li>
                                <li>Simplifies focus onto one debt at a time.</li>
                            </ul>
                </div>
                <div className="p-3 bg-red-500/10 rounded-md">
                             <h4 className="font-semibold flex items-center text-red-700 dark:text-red-300">Cons</h4>
                             <ul className="list-disc pl-5 mt-1">
                                <li>You will pay more in total interest compared to the Avalanche method.</li>
                                <li>May take slightly longer to become completely debt free.</li>
                            </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-xl flex items-center">
                    <Blend className="mr-3 h-5 w-5 text-primary" /> The Hybrid Method: Best of Both Worlds?
                </CardTitle>
                <CardDescription>
                    You don't have to choose just one. A flexible approach can be very effective.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p>The Hybrid method involves starting with the Debt Snowball to get one or two quick, motivating wins by paying off your smallest debts first. Once you've built momentum and confidence, you switch to the Debt Avalanche method to attack the remaining higher interest debts, saving you the most money in the long run. This gives you both the psychological boost to get started and the mathematical efficiency to finish strong.</p>
            </CardContent>
        </Card>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you understand the strategies, return to the main roadmap to apply them to your specific debts.
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
