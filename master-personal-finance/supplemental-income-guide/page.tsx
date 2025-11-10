
'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Landmark, Layers, Briefcase, Handshake, BarChart, ArrowRight, Brain, UserCheck, ShieldCheck, TrendingUp, PiggyBank, Info } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { ResponsiveContainer, BarChart as RechartsBarChart, XAxis, YAxis, Tooltip, Legend, Bar, CartesianGrid } from 'recharts';
import type { LucideIcon } from 'lucide-react';

const incomeTypes = [
  { icon: Landmark, title: 'Pensions', description: 'Guaranteed monthly payments from a former employer, common in government and union jobs.' },
  { icon: Handshake, title: 'Social Security', description: 'A government-provided retirement benefit based on your lifetime earnings.' },
  { icon: Briefcase, title: 'Part-Time Work', description: 'Continuing to work in a reduced capacity for income and engagement.' },
  { icon: Layers, title: 'Annuities', description: "An insurance product providing guaranteed income. Immediate annuities start paying out right away, while deferred annuities start at a future date, often used to hedge against outliving one's savings." },
  { icon: Briefcase, title: 'Rental Income', description: 'Cash flow from investment properties.' },
];

const strategies = [
  {
    icon: Brain,
    title: "Covering the Gap: The 'Income Floor' Strategy",
    description: "Your portfolio's job is to cover the gap between your living expenses and your guaranteed income. Think of your guaranteed income (pension, Social Security) as your 'income floor'—it covers essential, non-negotiable needs like housing, food, and healthcare. Your investment portfolio can then be used more flexibly for discretionary spending like travel, hobbies, and lifestyle upgrades.",
    example: "If your target spending is $80,000/year and you have a pension of $36,000 and Social Security of $20,000, your 'income floor' is $56,000. Your portfolio only needs to generate the remaining $24,000. Using the 4% rule, this means you need a nest egg of approximately $600,000, not $2 million."
  },
  {
    icon: UserCheck,
    title: "Enabling Partial or Early Retirement",
    description: "Supplemental income can subsidize your needs, allowing you to retire earlier than planned by working part-time, or bridge the gap until your full retirement benefits (like Social Security or a pension) kick in at a later age.",
    example: "At age 62, you want to leave your stressful full-time job. A small pension combined with part-time income of $20,000/year might cover most of your essential needs. This allows your investment portfolio to continue compounding untouched for another five years until you start taking Social Security at 67, securing a much more stable full retirement."
  },
  {
    icon: TrendingUp,
    title: "Delaying Social Security",
    description: "Having another reliable income source like a pension may give you the financial stability to delay taking Social Security until age 70. This can increase your lifetime benefit by up to 8% for each year you delay past your full retirement age.",
    example: null
  },
  {
    icon: ShieldCheck,
    title: "Adjusting Portfolio Risk",
    description: "With a guaranteed floor of income covering your essential needs, you are less dependent on your portfolio for daily living expenses. This may allow you to maintain a higher allocation to growth assets (like stocks) for longer, as you can better withstand market volatility without being forced to sell at a loss.",
    example: null
  },
  {
    icon: PiggyBank,
    title: "Legacy & Long-Term Planning",
    description: "When your essential needs are covered by guaranteed income streams, it frees up your investment portfolio for other long-term goals. You can more comfortably earmark these funds for leaving an inheritance, funding grandchildren's education, or significant charitable giving.",
    example: null
  }
];

const formatCurrency = (value: number, showCents=false) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: showCents ? 2 : 0, maximumFractionDigits: showCents ? 2: 0 }).format(value);

const generateRetirementData = () => {
    const data = [];
    const initialTotalNeed = 80000;
    const initialPensionAmount = 30000;
    const initialSocialSecurityAmount = 25000;
    const inflationRate = 0.03; // 3% inflation

    for (let age = 65; age <= 95; age++) {
        const yearsInRetirement = age - 65;
        
        const totalNeed = initialTotalNeed * Math.pow(1 + inflationRate, yearsInRetirement);
        
        const pension = age >= 65 ? initialPensionAmount * Math.pow(1 + inflationRate, yearsInRetirement) : 0;
        const socialSecurity = age >= 67 ? initialSocialSecurityAmount * Math.pow(1 + inflationRate, yearsInRetirement) : 0;
        
        const totalFixedIncome = pension + socialSecurity;
        const portfolioWithdrawal = Math.max(0, totalNeed - totalFixedIncome);

        data.push({
            age: age,
            pension: parseFloat(pension.toFixed(2)),
            socialSecurity: parseFloat(socialSecurity.toFixed(2)),
            portfolioWithdrawal: parseFloat(portfolioWithdrawal.toFixed(2)),
        });
    }
    return data;
};


const retirementIncomeData = generateRetirementData();

const CHART_COLORS = {
  pension: "hsl(var(--chart-1))",
  socialSecurity: "hsl(var(--chart-2))",
  portfolio: "hsl(var(--chart-3))",
};


export default function SupplementalIncomeGuidePage() {
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
        <h1 className="text-3xl font-bold font-headline">The Role of Supplemental Income in Retirement</h1>
        <p className="text-muted-foreground mt-2">Learn how pensions, Social Security, and other income streams create a stable financial floor.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <BarChart className="h-4 w-4" />
          <AlertTitle className="font-headline">A Key Retirement Strategy</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>While building a large investment portfolio is a primary goal, supplemental income streams (like pensions or Social Security) are a powerful tool for a secure retirement. Their main strategic benefit is reducing the withdrawal pressure on your personal portfolio.</p>
            <p className="font-semibold">This allows you to either withdraw less, making your portfolio last much longer, or maintain your withdrawal rate for a higher quality of life. It provides a safety buffer, making your retirement plan more resilient to market downturns.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">What Counts as Supplemental Income?</CardTitle>
            <CardDescription>These are the most common sources of reliable income in retirement.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
            {incomeTypes.map(item => (
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
        
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">Visualizing Your Retirement Income Streams</CardTitle>
            <CardDescription>This chart shows how different income sources combine to meet a total spending need. It assumes an initial annual spending goal of {formatCurrency(80000)}, which then grows each year at an assumed 3% inflation rate. For this example, pension and Social Security are also assumed to have cost-of-living adjustments to keep pace with inflation.</CardDescription>
          </CardHeader>
          <CardContent className="h-[400px] w-full bg-muted/30 p-4 rounded-md">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsBarChart data={retirementIncomeData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="age" name="Age" unit=" " fontSize={12} />
                <YAxis tickFormatter={(value) => formatCurrency(value)} fontSize={12} />
                <Tooltip formatter={(value: number) => formatCurrency(value, false)} />
                <Legend />
                <Bar dataKey="pension" stackId="a" name="Pension" fill={CHART_COLORS.pension} />
                <Bar dataKey="socialSecurity" stackId="a" name="Social Security" fill={CHART_COLORS.socialSecurity} />
                <Bar dataKey="portfolioWithdrawal" stackId="a" name="Portfolio Withdrawal" fill={CHART_COLORS.portfolio} />
              </RechartsBarChart>
            </ResponsiveContainer>
          </CardContent>
          <CardFooter>
            <p className="text-xs text-muted-foreground pt-2">In this example, Social Security starts at age 67, which reduces the amount the retiree needs to withdraw from their investment portfolio, preserving their capital for longer.</p>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">Key Strategies & Benefits</CardTitle>
            <CardDescription>Integrating supplemental income into your plan unlocks powerful strategic advantages.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {strategies.map(item => (
              <div key={item.title} className="p-4 border rounded-lg bg-muted/40">
                <h3 className="font-semibold text-lg flex items-start mb-2">
                  <item.icon className="mr-3 h-6 w-6 text-primary flex-shrink-0" />
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
                {item.example && (
                    <Alert variant="default" className="mt-3 bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800">
                        <AlertTitle className="font-semibold text-blue-800 dark:text-blue-300">Example in Action</AlertTitle>
                        <AlertDescription className="text-sm text-blue-700 dark:text-blue-400">{item.example}</AlertDescription>
                    </Alert>
                )}
              </div>
            ))}
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
