
'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { GitCompare, TrendingUp, Clock, Info, ArrowRight, Lightbulb } from 'lucide-react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Link from 'next/link';

// Helper Functions & Constants
const formatCurrency = (value: number | null | undefined): string => {
  if (value === null || value === undefined || isNaN(value)) return "$0";
  return value.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 });
};

const CHART_COLORS = {
  investorA: 'hsl(var(--chart-1))',
  investorB: 'hsl(var(--chart-2))',
};

const INITIAL_INVESTMENT = 10000;
const ANNUAL_RETURN_RATE = 0.10; // 10%
const START_AGE_A = 25;
const START_AGE_B = 35;
const END_AGE = 65;

// Main Component
export default function OpportunityCostPage() {
  const searchParams = useSearchParams();
  const fromStep = searchParams.get('from');
  
  const [chartData, setChartData] = useState<{ age: number; investorA: number | null; investorB: number | null; }[]>([]);
  const [finalValues, setFinalValues] = useState<{ a: number; b: number; }>({ a: 0, b: 0 });

  useEffect(() => {
    const data = [];
    let balanceA = INITIAL_INVESTMENT;
    let balanceB = INITIAL_INVESTMENT;

    for (let age = START_AGE_A; age <= END_AGE; age++) {
      const currentData: { age: number; investorA: number | null; investorB: number | null; } = {
        age,
        investorA: age >= START_AGE_A ? balanceA : null,
        investorB: age >= START_AGE_B ? balanceB : null,
      };
      
      data.push(currentData);
      
      if (age >= START_AGE_A) {
        balanceA *= (1 + ANNUAL_RETURN_RATE);
      }
      if (age >= START_AGE_B) {
        balanceB *= (1 + ANNUAL_RETURN_RATE);
      }
    }
    setChartData(data);
    setFinalValues({ a: balanceA, b: balanceB });
  }, []);

  return (
    <>
      <Alert variant="destructive" className="mb-6 bg-amber-50 dark:bg-amber-900/20 border-amber-300 dark:border-amber-700">
          <Info className="h-4 w-4 text-amber-500" />
          <AlertDescription className="text-amber-800 dark:text-amber-300 text-xs">
              For educational use only. Not financial or tax advice. Consult a licensed advisor before making major decisions.
          </AlertDescription>
      </Alert>
      <div className="mb-8">
        <h1 className="text-3xl font-bold font-headline">Opportunity Cost: The Unseen Price of Every Choice</h1>
        <p className="text-muted-foreground mt-2">Learn how to think about the true cost of your financial decisions.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <GitCompare className="h-4 w-4" />
          <AlertTitle className="font-headline">What Is Opportunity Cost?</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>Opportunity cost is the value of the next-best alternative you give up when you make a choice. It's the "road not taken." Every decision, especially every financial decision, has an opportunity cost.</p>
            <p className="font-semibold">A Common Fallacy:</p>
            <p>You often hear that the opportunity cost of waiting in line for 30 minutes is the money you could have earned. This is usually incorrect. For most people, that 30 minutes would have been non-productive leisure time, not income-generating work. The real opportunity cost is what you value most that you gave up, perhaps it was 30 minutes of reading a book or relaxing.</p>
            <p>However, when it comes to investing, the opportunity cost is very real, measurable, and massive.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">The True Cost of Waiting to Invest</CardTitle>
            <CardDescription>This example shows the staggering opportunity cost of delaying your investment journey by just 10 years, assuming a {ANNUAL_RETURN_RATE * 100}% average annual return.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6 mb-6 text-center">
              <div className="p-4 border rounded-lg bg-muted/50">
                <h3 className="font-semibold">Investor A (Starts Early)</h3>
                <p className="text-sm text-muted-foreground">Invests {formatCurrency(INITIAL_INVESTMENT)} at age {START_AGE_A}</p>
              </div>
              <div className="p-4 border rounded-lg bg-muted/50">
                <h3 className="font-semibold">Investor B (Waits 10 Years)</h3>
                <p className="text-sm text-muted-foreground">Invests the same {formatCurrency(INITIAL_INVESTMENT)} at age {START_AGE_B}</p>
              </div>
            </div>
            
            <div className="h-[400px] w-full bg-background p-4 rounded-md">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData} margin={{ top: 5, right: 20, bottom: 20, left: 20 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="age" name="Age" label={{ value: 'Age', position: 'insideBottom', offset: -15, style: { fontSize: '0.8rem' } }} style={{ fontSize: '0.75rem' }}/>
                        <YAxis tickFormatter={(val) => formatCurrency(val)} label={{ value: 'Portfolio Value ($)', angle: -90, position: 'insideLeft', style: {textAnchor: 'middle', fontSize: '0.8rem'}, dx: -15 }} style={{ fontSize: '0.75rem' }}/>
                        <Tooltip formatter={(value: number) => formatCurrency(value)} labelFormatter={(label) => `Age: ${label}`}/>
                        <Legend verticalAlign="top" height={36} />
                        <Line type="monotone" dataKey="investorA" name={`Investor A (Starts at ${START_AGE_A})`} stroke={CHART_COLORS.investorA} strokeWidth={2} dot={false} />
                        <Line type="monotone" dataKey="investorB" name={`Investor B (Starts at ${START_AGE_B})`} stroke={CHART_COLORS.investorB} strokeWidth={2} dot={false} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-xl">The Final Tally at Age {END_AGE}</CardTitle>
                <CardDescription>Both invested the same amount of money. The only difference was time.</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-6">
                <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800">
                    <h3 className="font-semibold text-lg text-green-800 dark:text-green-200">Investor A's Result</h3>
                    <p className="text-4xl font-bold text-green-600 dark:text-green-400">{formatCurrency(finalValues.a)}</p>
                </div>
                 <div className="p-4 rounded-lg bg-orange-50 dark:bg-orange-900/30 border-orange-200 dark:border-orange-800">
                    <h3 className="font-semibold text-lg text-orange-800 dark:text-orange-200">Investor B's Result</h3>
                    <p className="text-4xl font-bold text-orange-600 dark:text-orange-400">{formatCurrency(finalValues.b)}</p>
                </div>
            </CardContent>
            <CardFooter>
                 <Alert variant="default" className="w-full">
                    <Info className="h-4 w-4" />
                    <AlertTitle className="font-headline">The Opportunity Cost of Waiting</AlertTitle>
                    <AlertDescription>
                        By waiting 10 years, Investor B gave up the opportunity for their money to grow for an extra decade. The unseen price, the opportunity cost, of that delay was approximately <strong className="text-primary">{formatCurrency(finalValues.a - finalValues.b)}</strong> in lost growth.
                    </AlertDescription>
                </Alert>
            </CardFooter>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline flex items-center"><TrendingUp className="mr-2 h-5 w-5 text-primary" /> The Power of Compounding</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">This example powerfully illustrates compound interest. It's not just your money that earns a return; your returns start earning their own returns. This creates a snowball effect that becomes more powerful over longer periods.</p>
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle className="font-headline flex items-center"><Clock className="mr-2 h-5 w-5 text-primary" /> Time is Your Greatest Asset</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">For an investor, time is more valuable than money or skill. The earlier you start, the more time you give your money to work for you, and the less you have to save out of your own pocket to reach your goals.</p>
                </CardContent>
            </Card>
        </div>

        <Card className="bg-amber-50 dark:bg-amber-900/30 border-amber-300 dark:border-amber-800">
            <CardHeader>
                <CardTitle className="font-headline flex items-center text-amber-800 dark:text-amber-200">
                    <Lightbulb className="mr-2 h-5 w-5"/>A Final Thought
                </CardTitle>
            </CardHeader>
            <CardContent>
                <blockquote className="text-lg italic text-amber-900 dark:text-amber-300 text-center">
                    "The best time to start investing was yesterday. The next best time is today."
                    <footer className="mt-2 text-xs not-italic text-amber-800/80 dark:text-amber-300/80">A well-known investing proverb</footer>
                </blockquote>
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
