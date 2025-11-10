'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Percent, Timer, TrendingUp, Clock, Brain, BarChart3, TrendingDown, Target, ArrowRight, Info } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const principles = [
  {
    icon: Clock,
    title: "Principle 1: Start As Soon As Possible",
    description: "The most powerful factor in compound growth is time. The earlier you start investing, the more doubling periods your money gets to experience. Someone who starts investing at age 25 has a massive advantage over someone who starts at 35, even if they invest less money overall. Time is your greatest ally.",
  },
  {
    icon: TrendingUp,
    title: "Principle 2: Rate of Return Matters Immensely",
    description: "A small difference in your annual rate of return makes a huge difference over time. As the examples show, doubling your money at 10% happens almost four times faster than at 2%. This highlights the importance of choosing investments that have the potential for solid long-term growth (like diversified stock market funds) over those with very low returns (like a standard savings account).",
  },
];

const formatCurrency = (value: number) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 });
};

const generateChartData = () => {
    const data = [];
    let highRateValue = 10000;
    let lowRateValue = 10000;
    for (let year = 0; year <= 36; year++) {
        data.push({
            year,
            '10% Return': parseFloat(highRateValue.toFixed(0)),
            '2% Return': parseFloat(lowRateValue.toFixed(0)),
        });
        highRateValue *= 1.10;
        lowRateValue *= 1.02;
    }
    return data;
};
const growthChartData = generateChartData();


export default function RuleOf72Page() {
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
        <h1 className="text-3xl font-bold font-headline">The Rule of 72</h1>
        <p className="text-muted-foreground mt-2">A simple mental shortcut to estimate how long it takes for an investment to double in value.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Percent className="h-4 w-4" />
          <AlertTitle className="font-headline">What is The Rule of 72?</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>The Rule of 72 is a quick, useful formula that is popularly used to estimate the number of years required to double the invested money at a given annual rate of return. It's a simple mental model that demonstrates the incredible power of compound interest.</p>
            <p className="font-semibold">The formula is straightforward:</p>
            <div className="my-2 p-3 bg-muted rounded-md text-center">
              <code className="text-lg font-bold font-mono">72 ÷ (Your Annual Rate of Return) = Years to Double</code>
            </div>
            <p>For example, if you expect an annual return of 8% on your investment, it will take approximately 9 years for your money to double (72 ÷ 8 = 9).</p>
          </AlertDescription>
        </Alert>
        
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Visualizing the Power: Two Examples</CardTitle>
            <CardDescription>Let's see how the Rule of 72 plays out with different rates of return for an initial $10,000 investment.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">The graph below vividly illustrates the difference. It is mathematically impossible to build significant wealth if your rate of return does not meaningfully outpace inflation. A low rate of return means your money's growth is stagnant, barely keeping up with the rising cost of living, while a higher rate of return allows your wealth to compound and grow in real terms.</p>
            <div className="h-[300px] w-full bg-muted/30 p-4 rounded-md mb-6">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={growthChartData} margin={{ top: 5, right: 20, bottom: 5, left: 10 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" unit="yr" fontSize={12} />
                        <YAxis tickFormatter={(value) => formatCurrency(value)} fontSize={12} />
                        <Tooltip formatter={(value: number) => formatCurrency(value)} />
                        <Legend wrapperStyle={{fontSize: '0.8rem'}}/>
                        <Line type="monotone" dataKey="10% Return" stroke="hsl(var(--chart-1))" strokeWidth={2} dot={false} />
                        <Line type="monotone" dataKey="2% Return" stroke="hsl(var(--destructive))" strokeWidth={2} dot={false} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 border rounded-lg bg-card shadow-sm">
                    <h3 className="font-semibold text-lg flex items-center mb-2">
                        Example 1: The Power of Higher Returns
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                        Let's assume a healthy 10% annual return, similar to the historical average of the stock market.
                    </p>
                    <p className="text-center font-mono font-bold text-primary text-xl mb-3">72 ÷ 10 = 7.2 years</p>
                    <div className="overflow-hidden rounded-md border">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Year</TableHead>
                                    <TableHead className="text-right">Approx. Value</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow><TableCell>Start (Year 0)</TableCell><TableCell className="text-right font-semibold">{formatCurrency(10000)}</TableCell></TableRow>
                                <TableRow><TableCell>Year 7</TableCell><TableCell className="text-right font-semibold">{formatCurrency(20000)}</TableCell></TableRow>
                                <TableRow><TableCell>Year 14</TableCell><TableCell className="text-right font-semibold">{formatCurrency(40000)}</TableCell></TableRow>
                                <TableRow><TableCell>Year 21</TableCell><TableCell className="text-right font-semibold">{formatCurrency(80000)}</TableCell></TableRow>
                                <TableRow><TableCell>Year 28</TableCell><TableCell className="text-right font-semibold">{formatCurrency(160000)}</TableCell></TableRow>
                                <TableRow><TableCell>Year 35</TableCell><TableCell className="text-right font-semibold">{formatCurrency(320000)}</TableCell></TableRow>
                            </TableBody>
                        </Table>
                    </div>
                    <p className="text-sm mt-3">With a 10% return, your money doubles approximately every 7.2 years, leading to exponential growth over time.</p>
                </div>
                <div className="p-4 border rounded-lg bg-card shadow-sm">
                    <h3 className="font-semibold text-lg flex items-center mb-2">
                        Example 2: The Cost of Low Returns
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                        Now, let's assume a low 2% annual return, which you might get in a high-yield savings account.
                    </p>
                    <p className="text-center font-mono font-bold text-destructive text-xl mb-3">72 ÷ 2 = 36 years</p>
                    <div className="overflow-hidden rounded-md border">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Year</TableHead>
                                    <TableHead className="text-right">Approx. Value</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow><TableCell>Start (Year 0)</TableCell><TableCell className="text-right font-semibold">{formatCurrency(10000)}</TableCell></TableRow>
                                <TableRow><TableCell>Year 36</TableCell><TableCell className="text-right font-semibold">{formatCurrency(20000)}</TableCell></TableRow>
                                <TableRow><TableCell>Year 72</TableCell><TableCell className="text-right font-semibold">{formatCurrency(40000)}</TableCell></TableRow>
                            </TableBody>
                        </Table>
                    </div>
                    <p className="text-sm mt-3">With a 2% return, your money doubles only every 36 years. The difference in outcomes is enormous.</p>
                </div>
            </div>
          </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-xl flex items-center">
                    <Target className="mr-3 h-6 w-6 text-primary"/> What is a "Good" Rate of Return?
                </CardTitle>
                <CardDescription>
                    The examples above show a clear mathematical winner, but "winning" in personal finance is about meeting your goals, not just chasing the highest number.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="prose prose-sm max-w-none dark:prose-invert">
                    <h4>Defining Your Own Success</h4>
                    <p>
                        You don't have to target a 10% annual return to be a successful investor. Success means defining what you want your money to do for you and then targeting the rate of return required to get there. For example, if your retirement plan requires you to save $200 per month and earn an average of 7.5% per year for 35 years to live comfortably, then 7.5% is your "winning" rate. If you outperform that by saving more or earning a higher return, that's fantastic, it simply means you might reach your goal sooner or have a larger surplus.
                    </p>
                    <Separator className="my-4"/>
                    <h4>Realism and Volatility</h4>
                    <p>
                        It's crucial to be realistic. These examples assume a smooth, consistent return each year, but the real market is volatile. A 10% average annual return from the stock market, for instance, doesn't mean you get 10% every year. Some years might be +25%, others might be -15%. This is normal. Your rate of return is an average over a long period.
                    </p>
                    <p>
                        A "realistic" expectation for long-term planning is often based on historical data. A diversified portfolio of stocks has historically returned around 7-10% annually over long periods, while safer assets like bonds have returned closer to 2-5%. Your personal rate of return will be an average based on your unique mix of these assets (your asset allocation). The key is to avoid basing your financial plan on unrealistic, speculative returns (e.g., assuming you can consistently get 30% per year).
                    </p>
                </div>
            </CardContent>
        </Card>


        <Card>
          <CardHeader>
            <CardTitle className="font-headline flex items-center">
              <Brain className="mr-2 h-5 w-5 text-primary" />
              Key Principles of Compound Growth
            </CardTitle>
            <CardDescription>The Rule of 72 teaches two of the most important lessons in personal finance.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
            {principles.map(p => (
              <div key={p.title} className="p-4 border rounded-lg bg-muted/30">
                 <div className="flex items-center mb-2">
                    <p.icon className="h-6 w-6 mr-3 text-primary" />
                    <h4 className="font-semibold text-lg">{p.title}</h4>
                 </div>
                 <p className="text-sm text-muted-foreground">{p.description}</p>
              </div>
            ))}
          </CardContent>
           <CardFooter>
            <p className="text-xs text-muted-foreground">
              Note: The Rule of 72 is an approximation and is most accurate for rates between 6% and 10%. It does not account for taxes or fees.
            </p>
          </CardFooter>
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
