'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { ArrowRight, BrainCircuit, AlertTriangle, LineChart, Target, Info, ThumbsUp, ThumbsDown } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ResponsiveContainer, LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip } from 'recharts';
import { useEffect, useState } from 'react';


const generateSimData = () => {
    const data = [];
    const numYears = 30;
    const paths = 15;
    const initialValue = 1000000;
    const baseReturn = 0.05;
    const volatility = 0.15;

    for (let i = 0; i <= numYears; i++) {
        const dataPoint: any = { year: i };
        for (let j = 0; j < paths; j++) {
            if (i === 0) {
                dataPoint[`path${j}`] = initialValue;
            } else {
                const prevValue = data[i - 1][`path${j}`];
                const randomFactor = (Math.random() - 0.5) * 2; // -1 to 1
                const yearlyReturn = baseReturn + randomFactor * volatility;
                const newValue = prevValue * (1 + yearlyReturn);
                dataPoint[`path${j}`] = newValue > 0 ? newValue : 0;
            }
        }
        data.push(dataPoint);
    }
    return data;
};

const pathColors = ["#8884d8", "#82ca9d", "#ffc658", "#ff7300", "#e6194B", "#3cb44b", "#ffe119", "#4363d8", "#f58231", "#911eb4", "#46f0f0", "#f032e6", "#bcf60c", "#fabebe", "#008080"];

const formatCurrency = (value: number | null | undefined, showCents = false): string => {
  if (value === null || value === undefined || isNaN(value)) return showCents ? "$0.00" : "$0";
  return value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: showCents ? 2 : 0,
    maximumFractionDigits: showCents ? 2 : 0,
  });
};


const howItWorks = [
  {
    title: "1. Define Your Inputs",
    description: "You provide the model with your key financial data: your current portfolio value, your expected annual contributions or withdrawals, your time horizon, and, most importantly, the expected average annual return AND the expected volatility (standard deviation) of your portfolio."
  },
  {
    title: "2. Run Thousands of Simulations",
    description: "The computer then runs thousands (often 10,000 or more) of separate, randomized simulations of your financial life. In each trial, it uses the average return and volatility to generate a unique, random sequence of annual market returns. One trial might have a 'bad' sequence (a crash early on), while another might have a 'good' sequence (strong returns early on)."
  },
  {
    title: "3. Analyze the Range of Outcomes",
    description: "After running all the simulations, the model aggregates the results. Instead of a single final number, it shows you a range of possible outcomes. For example, if your target is to have $1M at retirement and 9,000 out of 10,000 simulations end with a balance over $1M, you have a 90% probability of success."
  }
];

export default function MonteCarloSimulationsPage() {
  const searchParams = useSearchParams();
  const fromStep = searchParams.get('from');

  const [simulationData, setSimulationData] = useState<any[]>([]);

  useEffect(() => {
    setSimulationData(generateSimData());
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
        <h1 className="text-3xl font-bold font-headline">Monte Carlo Simulations</h1>
        <p className="text-muted-foreground mt-2">An advanced lesson on using probabilistic modeling to understand portfolio success rates.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <BrainCircuit className="h-4 w-4" />
          <AlertTitle className="font-headline">Beyond Single Averages: Thinking in Probabilities</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>Simple retirement calculators are useful, but they have a major flaw: they typically assume a single, fixed average rate of return every year. The real world is volatile and unpredictable. Monte Carlo analysis is a sophisticated modeling technique that addresses this by running thousands of randomized simulations to account for market volatility.</p>
            <p className="font-semibold">It doesn't predict the future, but it helps answer a much more powerful question: "Given a range of potential market conditions, what is the probability that my financial plan will succeed?"</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">How a Monte Carlo Simulation Works</CardTitle>
            <CardDescription>It's like living your financial life thousands of times to see how often you come out ahead.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {howItWorks.map(item => (
              <div key={item.title} className="p-4 border rounded-lg bg-muted/30">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
              <LineChart className="mr-2 h-5 w-5 text-primary" />
              Interpreting the Results: The "Spaghetti Graph"
            </CardTitle>
            <CardDescription>The output of a Monte Carlo simulation is often a 'spaghetti graph' showing the portfolio value over time for many of the simulations.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">Each line represents one possible lifetime financial outcome. Some lines will end high (good market returns), some will end low (poor returns), and many will be in the middle. The goal is to see what percentage of these lines stay above zero for your entire planning horizon. A "90% probability of success" means that in 9 out of 10 simulations, the plan succeeded.</p>
              
               <div className="h-[350px] w-full bg-muted/30 p-4 rounded-md">
                    <ResponsiveContainer width="100%" height="100%">
                        <RechartsLineChart data={simulationData} margin={{ top: 5, right: 20, bottom: 5, left: 10 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="year" unit=" yr" fontSize={10} />
                            <YAxis tickFormatter={(val) => formatCurrency(val, false)} fontSize={10} width={80} domain={[0, 'dataMax']} />
                            <RechartsTooltip formatter={(value: number) => formatCurrency(value)} labelFormatter={(label) => `Year: ${label}`}/>
                             {simulationData[0] && Object.keys(simulationData[0]).filter(k => k.startsWith('path')).map((pathKey, index) => (
                                <Line key={pathKey} type="monotone" dataKey={pathKey} stroke={pathColors[index % pathColors.length]} strokeWidth={1} dot={false} strokeOpacity={0.6} activeDot={{ r: 4 }} />
                            ))}
                        </RechartsLineChart>
                    </ResponsiveContainer>
                </div>
              
              <Alert variant="default" className="bg-callout text-callout-foreground border-blue-200 dark:border-blue-800">
                <Info className="h-4 w-4" />
                <AlertTitle>Why This is Better Than a Single Average</AlertTitle>
                <AlertDescription>
                 A plan that looks successful with an average 7% return might have a very high failure rate if the first few years of retirement experience a severe market crash. This is known as Sequence of Returns Risk. Monte Carlo simulations are powerful because they capture this risk by modeling thousands of different sequences of returns, not just a steady average.
                </AlertDescription>
              </Alert>
          </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-xl">Practical Application</CardTitle>
                <CardDescription>Financial planners use Monte Carlo tools to stress-test a client's retirement plan. If a plan shows only a 60% probability of success, it’s a clear signal that adjustments are needed. The planner might recommend increasing the savings rate, lowering retirement spending expectations, or adjusting the portfolio's asset allocation to push the success probability into a more comfortable range, typically 85-95%.</CardDescription>
            </CardHeader>
            <CardContent>
                <Alert>
                    <Info className="h-4 w-4" />
                    <AlertTitle>You Don't Need a 100% Success Rate</AlertTitle>
                    <AlertDescription>
                        Aiming for a 100% success rate is often overly conservative and could lead you to unnecessarily over-save or under-spend in retirement. An 85% or 90% success rate is generally considered very strong. A financial plan is not set in stone; if a "bad" sequence of returns starts to happen in reality, you can adjust your plan by slightly reducing spending or working longer, which can significantly increase your probability of success.
                    </AlertDescription>
                </Alert>
            </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
              <ThumbsUp className="mr-2 h-5 w-5 text-primary" />
              The Pros and Cons of Using Monte Carlo
            </CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/30 border-green-200">
              <h3 className="font-semibold flex items-center mb-2 text-green-700 dark:text-green-300">
                <ThumbsUp className="mr-2 h-5 w-5" /> Strengths
              </h3>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>Accounts for market volatility and Sequence of Returns Risk.</li>
                <li>Provides a more realistic range of potential outcomes, not just a single number.</li>
                <li>Allows you to quantify the "probability of success" of your financial plan.</li>
                <li>Helps you stress-test your plan against worst-case scenarios.</li>
              </ul>
            </div>
            <div className="p-4 border rounded-lg bg-red-50 dark:bg-red-900/30 border-red-200">
              <h3 className="font-semibold flex items-center mb-2 text-red-700 dark:text-red-300">
                <ThumbsDown className="mr-2 h-5 w-5" /> Weaknesses
              </h3>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li><strong>Garbage In, Garbage Out:</strong> The results are highly sensitive to the inputs. Using an overly optimistic average return or an unrealistically low volatility will produce misleadingly positive results.</li>
                <li><strong>Assumes Normal Distribution:</strong> Most models assume market returns follow a normal bell curve, but real-life returns have "fat tails" (extreme events happen more often than a normal distribution would predict).</li>
                <li><strong>Doesn't Predict the Future:</strong> It's a tool for understanding probabilities, not a crystal ball. A 95% success rate still means there's a 1-in-20 chance of failure.</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you understand this advanced modeling technique, return to the main roadmap to continue your learning.
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
