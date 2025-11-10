
'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Wind, TrendingUp, TrendingDown, DollarSign, Banknote, AlertTriangle, ArrowRight, ShoppingCart, Briefcase, CheckCircle, Info, Brain, Layers, Cpu } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { ResponsiveContainer, LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const formatCurrency = (value: number) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 });
};

const inflationData = [
    { year: 'Year 1', inflationRate: 9.0 },
    { year: 'Year 2', inflationRate: 6.0 },
    { year: 'Year 3', inflationRate: 3.0 },
    { year: 'Year 4', inflationRate: 0.0 },
    { year: 'Year 5', inflationRate: -2.0 },
];

const priceLevelData = inflationData.reduce((acc, curr, index) => {
    const previousPrice = acc.length > 0 ? acc[acc.length - 1].priceLevel : 100;
    const newPrice = previousPrice * (1 + curr.inflationRate / 100);
    acc.push({ year: curr.year, priceLevel: newPrice });
    return acc;
}, [] as { year: string, priceLevel: number }[]);
priceLevelData.unshift({ year: "Start", priceLevel: 100});

const mortgageExample = {
    income: 60000,
    mortgagePayment: 1500,
    get mortgageAsPercentInitial() { return (this.mortgagePayment / (this.income / 12)) * 100; },
    get futureIncomeInflation() { return this.income * 1.03; },
    get futureMortgageAsPercentInflation() { return (this.mortgagePayment / (this.futureIncomeInflation / 12)) * 100; },
};

const purchasingPowerData = Array.from({ length: 31 }, (_, i) => {
    const initialAmount = 100000;
    const inflationRate = 0.025;
    const purchasingPower = initialAmount / Math.pow(1 + inflationRate, i);
    return { year: i, value: purchasingPower };
});

const inflationDrivers = [
    { title: "Strong Consumer Demand (Demand-Pull)", description: "When the economy is strong, unemployment is low, and consumers are confident, their high demand for goods and services can outstrip supply, allowing businesses to raise prices." },
    { title: "Increased Money Supply & Government Policy", description: "When central banks print money (Quantitative Easing) or governments issue stimulus checks and subsidies, it puts more money into the economy chasing the same amount of goods, pushing prices higher." },
    { title: "Supply Chain Shocks (Cost-Push)", description: "Events like geopolitical conflicts (e.g., rising oil prices) or natural disasters that disrupt the production and transport of goods increase costs for businesses, who then pass these costs on to consumers." },
    { title: "Rising Wages", description: "In a tight labor market, companies must pay higher wages to attract and retain workers. This increased labor cost is often passed on in the form of higher prices." },
    { title: "Devaluation of Currency", description: "If a country's currency weakens on the global stage, it costs more to import foreign goods, leading to higher prices for consumers." }
];

const deflationDrivers = [
    { title: "Decreased Money Supply & Tightening Policy", description: "The opposite of stimulus. When central banks raise interest rates significantly or reduce the money supply (Quantitative Tightening), it reduces borrowing and spending, putting downward pressure on prices." },
    { title: "Technological Advancement", description: "Innovation, especially in technology, dramatically lowers the cost of production for many goods and services. Think of how the price of computers or televisions has fallen over the decades in real terms. This is a form of 'good' deflation." },
    { title: "Collapse in Consumer Demand", description: "In a severe recession or depression, high unemployment and fear about the future cause consumers to stop spending. Businesses are forced to slash prices to attract any sales at all." },
    { title: "Increased Productivity", description: "When companies become more efficient and can produce more goods with fewer resources, the lower costs can be passed on to consumers as lower prices." },
    { title: "Globalization and Cheap Labor", description: "The ability to produce goods in countries with lower labor costs can lead to lower prices for consumers in importing countries." }
];

const disinflationDrivers = [
    { title: "Effective Central Bank Policy", description: "This is the most common cause. When a central bank raises interest rates to fight inflation, it doesn't cause prices to fall (deflation), but it successfully slows down the rate at which they are rising." },
    { title: "Resolution of Supply Shocks", description: "As temporary supply chain issues (like those seen during the pandemic) are resolved, the upward pressure on costs eases, and the rate of price increases naturally cools down." },
    { title: "Moderating Consumer Demand", description: "As an economy cools from an overheating phase, consumer demand softens. Businesses lose their ability to push through aggressive price hikes, leading to a slower rate of inflation." }
];


export default function InflationConceptsPage() {
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
        <h1 className="text-3xl font-bold font-headline">Inflation, Disinflation, & Deflation</h1>
        <p className="text-muted-foreground mt-2">Understanding how changing price levels affect your money, your debts, and the economy.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Wind className="h-4 w-4" />
          <AlertTitle className="font-headline">Defining the Concepts</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>These three terms describe the direction and speed of price changes in an economy.</p>
            <ul className="list-disc pl-5 mt-2">
                <li>Inflation: A general rise in the prices of goods and services, causing a decrease in the purchasing power of money.</li>
                <li>Disinflation: A slowdown in the rate of inflation. Prices are still rising, but not as quickly as before.</li>
                <li>Deflation: A general decline in the prices of goods and services. Money becomes more valuable.</li>
            </ul>
          </AlertDescription>
        </Alert>
        
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">A Visual Example</CardTitle>
            <CardDescription>This chart shows how the inflation rate and the price of a $100 basket of goods change in different scenarios.</CardDescription>
          </CardHeader>
          <CardContent className="grid lg:grid-cols-2 gap-8">
            <div className="h-[300px] w-full bg-muted/30 p-4 rounded-md">
                <h4 className="text-sm font-semibold text-center mb-2">Inflation Rate (%)</h4>
                <ResponsiveContainer width="100%" height="100%">
                    <RechartsLineChart data={inflationData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" fontSize={12} />
                        <YAxis unit="%" fontSize={12} domain={[-2, 10]} />
                        <Tooltip />
                        <Line type="monotone" dataKey="inflationRate" name="Inflation Rate" stroke="hsl(var(--primary))" strokeWidth={2} />
                    </RechartsLineChart>
                </ResponsiveContainer>
            </div>
            <div className="h-[300px] w-full bg-muted/30 p-4 rounded-md">
                <h4 className="text-sm font-semibold text-center mb-2">Price of a $100 Basket of Goods</h4>
                <ResponsiveContainer width="100%" height="100%">
                    <RechartsLineChart data={priceLevelData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" fontSize={12} />
                        <YAxis unit="$" domain={['dataMin - 5', 'dataMax + 5']} fontSize={12} tickFormatter={(value) => formatCurrency(value)}/><Tooltip formatter={(value: number) => value.toFixed(2)} />
                        <Line type="monotone" dataKey="priceLevel" name="Price Level" stroke="hsl(var(--destructive))" strokeWidth={2} />
                    </RechartsLineChart>
                </ResponsiveContainer>
            </div>
          </CardContent>
           <CardFooter><p className="text-xs text-muted-foreground">Notice in Year 2 and 3 (Disinflation), the inflation rate is lower, but the price of goods continues to rise. Only in Year 5 (Deflation) do prices actually fall.</p></CardFooter>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-xl flex items-center">
                    <Brain className="mr-2 h-5 w-5 text-primary"/>
                    The Psychology: Why Modest Inflation is Desirable
                </CardTitle>
                <CardDescription>Central banks aim for about 2% inflation, not 0%. This is because of its powerful effect on human behavior.</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-6">
                <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/30 border-green-200">
                    <h3 className="font-semibold flex items-center mb-2 text-green-800 dark:text-green-300">
                        <TrendingUp className="mr-2 h-5 w-5"/>
                        Inflation Encourages Action
                    </h3>
                    <p className="text-sm text-muted-foreground">When you know your cash will be worth slightly less next year, it creates an incentive to put that money to work. You are more likely to spend it on goods and services (fueling the economy) or invest it in productive assets (stocks, real estate) to outpace inflation. This keeps the economic engine running.</p>
                </div>
                 <div className="p-4 border rounded-lg bg-red-50 dark:bg-red-900/30 border-red-200">
                    <h3 className="font-semibold flex items-center mb-2 text-red-800 dark:text-red-300">
                        <TrendingDown className="mr-2 h-5 w-5"/>
                        Deflation Encourages Hoarding
                    </h3>
                    <p className="text-sm text-muted-foreground">If you know your cash will be worth more next year, the most rational action is to do nothing. You delay purchases because they'll be cheaper later. You hesitate to invest because the guaranteed return from holding cash is positive. This behavior grinds an economy to a halt.</p>
                </div>
            </CardContent>
        </Card>
        
         <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">Key Drivers of Price Changes</CardTitle>
            <CardDescription>These are some of the primary factors that cause inflation, deflation, and disinflation.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Drivers of Inflation</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {inflationDrivers.map(item => (
                  <div key={item.title} className="p-3 border rounded-lg bg-card shadow-sm">
                    <h4 className="font-semibold text-sm">{item.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
             <div>
              <h3 className="text-lg font-semibold mb-2">Drivers of Deflation</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {deflationDrivers.map(item => (
                  <div key={item.title} className="p-3 border rounded-lg bg-card shadow-sm">
                    <h4 className="font-semibold text-sm">{item.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Drivers of Disinflation</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {disinflationDrivers.map(item => (
                  <div key={item.title} className="p-3 border rounded-lg bg-card shadow-sm">
                    <h4 className="font-semibold text-sm">{item.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Separator className="my-8" />
        
        <section className="space-y-4">
            <h2 className="text-2xl font-bold font-headline">Inflation: The Double-Edged Sword</h2>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 border rounded-lg bg-red-50 dark:bg-red-900/30 border-red-200 dark:border-red-800">
                    <h3 className="font-semibold flex items-center mb-2 text-red-800 dark:text-red-300"><TrendingDown className="mr-2 h-5 w-5" /> The Negative: It Erodes Your Savings</h3>
                    <p className="text-sm text-muted-foreground">Cash loses purchasing power every year. If your savings earn 1% interest but inflation is 3%, you are losing 2% of your real wealth annually. This is why long-term savings must be invested.</p>
                </div>
                <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800">
                    <h3 className="font-semibold flex items-center mb-2 text-green-800 dark:text-green-300"><TrendingUp className="mr-2 h-5 w-5" /> The Positive: It Reduces Your Debt</h3>
                    <p className="text-sm text-muted-foreground">For fixed-rate debt like a mortgage, inflation is a borrower's friend. Your fixed payment becomes a smaller percentage of your rising income over time, making it easier to pay off.</p>
                </div>
            </div>
            <Card>
                 <CardHeader><CardTitle className="font-headline text-xl">Inflation and Household Debt</CardTitle></CardHeader>
                 <CardContent className="grid md:grid-cols-2 gap-6 text-center">
                    <div className="p-4 border rounded-lg"><h4 className="font-semibold">Today</h4><p className="text-xs text-muted-foreground">Annual Income: {formatCurrency(mortgageExample.income)}</p><p className="text-xs text-muted-foreground">Monthly Mortgage: {formatCurrency(mortgageExample.mortgagePayment)}</p><Separator className="my-2"/><p className="text-lg font-bold text-primary">{mortgageExample.mortgageAsPercentInitial.toFixed(1)}%</p><p className="text-sm text-muted-foreground">of your monthly pay goes to your mortgage.</p></div>
                    <div className="p-4 border rounded-lg"><h4 className="font-semibold">Next Year (with 3% inflation/raise)</h4><p className="text-xs text-muted-foreground">New Annual Income: {formatCurrency(mortgageExample.futureIncomeInflation)}</p><p className="text-xs text-muted-foreground">Monthly Mortgage: <span className="font-bold">{formatCurrency(mortgageExample.mortgagePayment)} (Fixed!)</span></p><Separator className="my-2"/><p className="text-lg font-bold text-green-600">{mortgageExample.futureMortgageAsPercentInflation.toFixed(1)}%</p><p className="text-sm text-muted-foreground">of your new, higher pay goes to your mortgage.</p></div>
                 </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-xl">The Slow Erosion of Cash</CardTitle>
                    <CardDescription>This chart shows the declining purchasing power of {formatCurrency(100000)} over 30 years with 2.5% annual inflation.</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px] w-full bg-muted/30 p-4 rounded-md">
                    <ResponsiveContainer width="100%" height="100%">
                        <RechartsLineChart data={purchasingPowerData} margin={{ top: 5, right: 20, bottom: 5, left: 10 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="year" name="Year" unit=" yrs" fontSize={12} />
                            <YAxis tickFormatter={(value) => formatCurrency(value)} fontSize={12} domain={[0, 100000]} />
                            <Tooltip formatter={(value: number) => [formatCurrency(value), 'Purchasing Power']} />
                            <Line type="monotone" dataKey="value" name="Purchasing Power" stroke="hsl(var(--destructive))" strokeWidth={2} dot={false} />
                        </RechartsLineChart>
                    </ResponsiveContainer>
                </CardContent>
                <CardFooter>
                    <p className="text-xs text-muted-foreground">After 30 years, the original $100,000 has the buying power of less than $48,000. This illustrates why cash must be invested for long-term goals.</p>
                </CardFooter>
            </Card>
        </section>

        <Separator className="my-8" />
        
        <section className="space-y-4">
            <h2 className="text-2xl font-bold font-headline">Deflation: The Hidden Danger</h2>
             <Card className="border-destructive/50 bg-destructive/5">
                <CardHeader><CardTitle className="font-headline text-xl text-destructive flex items-center"><AlertTriangle className="mr-2 h-5 w-5"/> The Dangers of Deflation</CardTitle></CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 border border-destructive/20 rounded-lg bg-card shadow-sm"><h3 className="font-semibold flex items-center mb-2"><ShoppingCart className="mr-2 h-5 w-5" /> Delayed Spending</h3><p className="text-sm text-muted-foreground">If consumers expect prices to be lower tomorrow, they delay purchases, causing a drop in demand that hurts businesses.</p></div>
                    <div className="p-4 border border-destructive/20 rounded-lg bg-card shadow-sm"><h3 className="font-semibold flex items-center mb-2"><TrendingUp className="mr-2 h-5 w-5" /> Increased Debt Burden</h3><p className="text-sm text-muted-foreground">Deflation increases the real value of debt. Your fixed loan payment stays the same, but falling wages make it harder to repay.</p></div>
                    <div className="p-4 border border-destructive/20 rounded-lg bg-card shadow-sm"><h3 className="font-semibold flex items-center mb-2"><Briefcase className="mr-2 h-5 w-5" /> Reduced Business Profit</h3><p className="text-sm text-muted-foreground">Falling prices mean lower profits. Companies respond by cutting investment and hiring, further weakening the economy.</p></div>
                    <div className="p-4 border border-destructive/20 rounded-lg bg-card shadow-sm"><h3 className="font-semibold flex items-center mb-2"><TrendingDown className="mr-2 h-5 w-5" /> The Deflationary Spiral</h3><p className="text-sm text-muted-foreground">These effects can feed on each other: falling prices lead to lower production, which leads to lower wages, leading to even lower prices.</p></div>
                </CardContent>
             </Card>
        </section>

        <Separator className="my-8" />
        
        <section className="space-y-4">
            <h2 className="text-2xl font-bold font-headline">Disinflation: The 'Goldilocks' Scenario</h2>
             <Card>
                <CardHeader><CardTitle className="font-headline text-xl">Why Disinflation is Generally a Good Sign</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                    <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/30 border-green-200"><h3 className="font-semibold flex items-center mb-2 text-green-800 dark:text-green-300"><CheckCircle className="mr-2 h-5 w-5" /> Controlled Growth</h3><p className="text-sm text-muted-foreground">Disinflation signifies an economy successfully cooling down from overheating without tipping into a recession, suggesting central bank policies are working.</p></div>
                    <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/30 border-green-200"><h3 className="font-semibold flex items-center mb-2 text-green-800 dark:text-green-300"><CheckCircle className="mr-2 h-5 w-5" /> Increased Consumer Confidence</h3><p className="text-sm text-muted-foreground">When rapid price hikes slow, it can restore confidence and lead to more stable spending patterns as wages start to catch up with or exceed the cost of living.</p></div>
                </CardContent>
            </Card>
        </section>

        <Card>
            <CardHeader><CardTitle className="font-headline text-xl">Historical Context & Investor Takeaway</CardTitle></CardHeader>
            <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">The U.S. experienced severe inflation and stagnation (stagflation) in the 1970s, fears of deflation after the 2008 financial crisis, and a period of sharp disinflation in 2022-2023 as inflation cooled from post-pandemic highs. Each environment favored different assets.</p>
                <Alert variant="default" className="bg-primary/5">
                    <Info className="h-4 w-4"/>
                    <AlertTitle>The Investor's Takeaway</AlertTitle>
                    <AlertDescription>
                        As a general rule, moderate inflation favors real assets like stocks and real estate, as their value can rise with prices. Deflation, however, rewards holding cash (as it becomes more valuable) and owning high-quality, safe government bonds.
                    </AlertDescription>
                </Alert>
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

