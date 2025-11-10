'use client';

import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { CheckCircle, HelpCircle, Scale, TrendingUp, Home, ArrowRight, Lightbulb, Info } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, ResponsiveContainer } from 'recharts';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Link from 'next/link';


const formatCurrency = (value: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(value);

const CHART_COLORS = {
  investor: "hsl(var(--chart-2))",
  homeowner: "hsl(var(--chart-1))",
  hybrid: "hsl(var(--chart-4))",
};


const scenario = {
  homePrice: 400000,
  downPayment: 80000,
  loanAmount: 320000,
  interestRate: 0.06,
  loanTermYears: 30,
  extraMonthlyCash: 500,
  investmentReturnRate: 0.10,
  homeAppreciationRate: 0.03,
};

interface YearData {
  year: number;
  investorNetWorth: number;
  investorInvestmentValue: number;
  investorHomeEquity: number;
  homeownerNetWorth: number;
  homeownerInvestmentValue: number;
  homeownerHomeEquity: number;
  hybridNetWorth: number;
  hybridInvestmentValue: number;
  hybridHomeEquity: number;
}

interface SummaryOutput extends YearData {
    investorPayoffYears: number;
    homeownerPayoffYears: number;
    hybridPayoffYears: number;
}



export default function InvestVsPayOffMortgagePage() {
    const searchParams = useSearchParams();
    const fromStep = searchParams.get('from');
    const [chartData, setChartData] = useState<YearData[]>([]);
    const [finalData, setFinalData] = useState<SummaryOutput | null>(null);

    const memoizedCalculation = useMemo(() => {
        const data: YearData[] = [];
        const monthlyMortgageRate = scenario.interestRate / 12;
        const totalPayments = scenario.loanTermYears * 12;
        const regularMonthlyPI = scenario.loanAmount * (monthlyMortgageRate * Math.pow(1 + monthlyMortgageRate, totalPayments)) / (Math.pow(1 + monthlyMortgageRate, totalPayments) - 1);

        let investorLoanBalance = scenario.loanAmount;
        let investorInvestmentValue = 0;
        
        let homeownerLoanBalance = scenario.loanAmount;
        let homeownerInvestmentValue = 0;
        
        let hybridLoanBalance = scenario.loanAmount;
        let hybridInvestmentValue = 0;
        const hybridExtraToMortgage = scenario.extraMonthlyCash / 2;
        const hybridExtraToInvestment = scenario.extraMonthlyCash / 2;
        
        let homeownerPayoffYear: number | null = null;
        let hybridPayoffYear: number | null = null;


        for (let year = 0; year <= scenario.loanTermYears; year++) {
            const currentHomeValue = scenario.homePrice * Math.pow(1 + scenario.homeAppreciationRate, year);

            data.push({
                year,
                investorNetWorth: (currentHomeValue - investorLoanBalance) + investorInvestmentValue,
                investorInvestmentValue,
                investorHomeEquity: currentHomeValue - investorLoanBalance,
                
                homeownerNetWorth: (currentHomeValue - homeownerLoanBalance) + homeownerInvestmentValue,
                homeownerInvestmentValue,
                homeownerHomeEquity: currentHomeValue - homeownerLoanBalance,

                hybridNetWorth: (currentHomeValue - hybridLoanBalance) + hybridInvestmentValue,
                hybridInvestmentValue,
                hybridHomeEquity: currentHomeValue - hybridLoanBalance,
            });

            if (year === scenario.loanTermYears) break;

            for (let month = 1; month <= 12; month++) {
                if (investorLoanBalance > 0) {
                    investorLoanBalance -= (regularMonthlyPI - (investorLoanBalance * monthlyMortgageRate));
                }
                investorInvestmentValue = (investorInvestmentValue + scenario.extraMonthlyCash) * Math.pow(1 + scenario.investmentReturnRate, 1/12);

                if (homeownerLoanBalance > 0) {
                    const homeownerInterest = homeownerLoanBalance * monthlyMortgageRate;
                    const homeownerPrincipal = regularMonthlyPI + scenario.extraMonthlyCash - homeownerInterest;
                    homeownerLoanBalance -= homeownerPrincipal;
                     if (homeownerLoanBalance <= 0 && homeownerPayoffYear === null) {
                        homeownerPayoffYear = year + (month / 12);
                    }
                } else {
                    homeownerInvestmentValue = (homeownerInvestmentValue + regularMonthlyPI + scenario.extraMonthlyCash) * Math.pow(1 + scenario.investmentReturnRate, 1/12);
                }
                
                if (hybridLoanBalance > 0) {
                    const hybridInterest = hybridLoanBalance * monthlyMortgageRate;
                    const hybridPrincipal = regularMonthlyPI + hybridExtraToMortgage - hybridInterest;
                    hybridLoanBalance -= hybridPrincipal;
                    if (hybridLoanBalance <= 0 && hybridPayoffYear === null) {
                        hybridPayoffYear = year + (month / 12);
                    }
                } else {
                    hybridInvestmentValue += (regularMonthlyPI + hybridExtraToMortgage); 
                }
                 hybridInvestmentValue = (hybridInvestmentValue + hybridExtraToInvestment) * Math.pow(1 + scenario.investmentReturnRate, 1/12);
            }
             if (investorLoanBalance < 0) investorLoanBalance = 0;
             if (homeownerLoanBalance < 0) homeownerLoanBalance = 0;
             if (hybridLoanBalance < 0) hybridLoanBalance = 0;
        }
        
        const finalYearData = data[data.length - 1];

        return {
            chartData: data,
            finalData: {
                ...finalYearData,
                investorPayoffYears: scenario.loanTermYears,
                homeownerPayoffYears: Math.ceil(homeownerPayoffYear || scenario.loanTermYears),
                hybridPayoffYears: Math.ceil(hybridPayoffYear || scenario.loanTermYears),
            }
        };
    }, []);

    useEffect(() => {
        setChartData(memoizedCalculation.chartData);
        setFinalData(memoizedCalculation.finalData);
    }, [memoizedCalculation]);

  return (
    <>
      <Alert variant="destructive" className="mb-6 bg-amber-50 dark:bg-amber-900/20 border-amber-300 dark:border-amber-700">
          <Info className="h-4 w-4 text-amber-500" />
          <AlertDescription className="text-amber-800 dark:text-amber-300 text-xs">
              For educational use only. Not financial or tax advice. Consult a licensed advisor before making major decisions.
          </AlertDescription>
      </Alert>
      <div className="mb-8">
        <h1 className="text-3xl font-bold font-headline">Invest vs. Pay Off Mortgage</h1>
        <p className="text-muted-foreground mt-2">Analyzing the financial and psychological arguments for where to put your extra cash.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Scale className="h-4 w-4" />
          <AlertTitle className="font-headline">The Wealth-Builder's Dilemma</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>Once you are maxing out your tax-advantaged retirement accounts, a common and excellent question arises: "Should I use my extra cash to pay down my low-interest mortgage faster, or should I invest it in a taxable brokerage account?"</p>
            <p className="font-semibold">There is no single 'right' answer. The best path depends on your personal risk tolerance, financial goals, and what helps you sleep at night. This lesson explores the two sides of the debate.</p>
          </AlertDescription>
        </Alert>
        
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">A Tale of Three Homeowners: A {scenario.loanTermYears}-Year Simulation</CardTitle>
            <CardDescription>
              All three homeowners buy a {formatCurrency(scenario.homePrice)} house with a {formatCurrency(scenario.downPayment)} down payment and a 30-year mortgage at 6%. All have an extra {formatCurrency(scenario.extraMonthlyCash)} per month. This chart compares their net worth over time.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="p-4 rounded-lg bg-violet-50 dark:bg-violet-900/30 border-violet-200 dark:border-violet-800">
                <h3 className="font-semibold flex items-center mb-2 text-violet-800 dark:text-violet-200">
                  Path 1: The Investor
                </h3>
                <p className="text-sm text-muted-foreground">Makes the standard mortgage payment and invests the extra {formatCurrency(scenario.extraMonthlyCash)} every month into a brokerage account, assumed to earn 10% annually.</p>
              </div>
              <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800">
                <h3 className="font-semibold flex items-center mb-2 text-blue-800 dark:text-blue-200">
                  Path 2: The Mortgage Pay-Off
                </h3>
                <p className="text-sm text-muted-foreground">Adds the extra {formatCurrency(scenario.extraMonthlyCash)} directly to their mortgage payment each month, paying the loan off much faster. Once paid off, they begin investing the entire original mortgage payment plus the extra cash.</p>
              </div>
              <div className="p-4 rounded-lg bg-teal-50 dark:bg-teal-900/30 border-teal-200 dark:border-teal-800">
                <h3 className="font-semibold flex items-center mb-2 text-teal-800 dark:text-teal-200">
                  Path 3: The Hybrid
                </h3>
                <p className="text-sm text-muted-foreground">Splits the extra {formatCurrency(scenario.extraMonthlyCash)} 50/50: half goes to extra mortgage payments, and half goes into the brokerage account each month.</p>
              </div>
            </div>
            <div className="h-[400px] w-full bg-muted/30 p-4 rounded-md">
              <ResponsiveContainer width="100%" height="100%">
                 <LineChart data={chartData} margin={{ top: 5, right: 20, bottom: 20, left: 30 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" name="Year" fontSize={12} label={{ value: 'Year of Loan', position: 'insideBottom', offset: -15, style: { fontSize: '0.8rem' } }} />
                    <YAxis tickFormatter={(val) => formatCurrency(val)} fontSize={12} label={{ value: 'Net Worth ($)', angle: -90, position: 'insideLeft', style: {textAnchor: 'middle', fontSize: '0.8rem'}, dx: -25 }} />
                    <RechartsTooltip 
                        formatter={(value: number, name: string) => [formatCurrency(value), name.replace(/([A-Z])/g, ' $1').replace('Net Worth', ' Path')]}
                        labelFormatter={(label) => `Year: ${label}`}
                    />
                    <Legend verticalAlign="top" height={36} wrapperStyle={{fontSize: '0.8rem'}}/>
                    <Line type="monotone" name="Investor" dataKey="investorNetWorth" stroke={CHART_COLORS.investor} strokeWidth={2} dot={false} />
                    <Line type="monotone" name="Pay-Off" dataKey="homeownerNetWorth" stroke={CHART_COLORS.homeowner} strokeWidth={2} dot={false} />
                    <Line type="monotone" name="Hybrid" dataKey="hybridNetWorth" stroke={CHART_COLORS.hybrid} strokeWidth={2} dot={false} />
                 </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

         <Card>
            <CardHeader>
                <CardTitle className="font-headline">The Results After {scenario.loanTermYears} Years</CardTitle>
                <CardDescription>A breakdown of the financial position for each homeowner at the end of the term.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Metric</TableHead>
                            <TableHead className="text-right">Path 1: Investor</TableHead>
                            <TableHead className="text-right">Path 2: Pay Down Mortgage</TableHead>
                            <TableHead className="text-right">Path 3: Hybrid</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-semibold">Final Net Worth</TableCell>
                            <TableCell className="text-right font-bold text-lg">{finalData ? formatCurrency(finalData.investorNetWorth) : '...'}</TableCell>
                            <TableCell className="text-right font-bold text-lg">{finalData ? formatCurrency(finalData.homeownerNetWorth) : '...'}</TableCell>
                            <TableCell className="text-right font-bold text-lg">{finalData ? formatCurrency(finalData.hybridNetWorth) : '...'}</TableCell>
                        </TableRow>
                         <TableRow>
                            <TableCell>Liquid Investments</TableCell>
                            <TableCell className="text-right">{finalData ? formatCurrency(finalData.investorInvestmentValue) : '...'}</TableCell>
                            <TableCell className="text-right">{finalData ? formatCurrency(finalData.homeownerInvestmentValue) : '...'}</TableCell>
                             <TableCell className="text-right">{finalData ? formatCurrency(finalData.hybridInvestmentValue) : '...'}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Home Equity</TableCell>
                            <TableCell className="text-right">{finalData ? formatCurrency(finalData.investorHomeEquity) : '...'}</TableCell>
                            <TableCell className="text-right">{finalData ? formatCurrency(finalData.homeownerHomeEquity) : '...'}</TableCell>
                             <TableCell className="text-right">{finalData ? formatCurrency(finalData.hybridHomeEquity) : '...'}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-semibold">Years to Payoff Mortgage</TableCell>
                            <TableCell className="text-right">{finalData ? `${finalData.investorPayoffYears} yrs` : '...'}</TableCell>
                            <TableCell className="text-right">{finalData ? `${finalData.homeownerPayoffYears} yrs` : '...'}</TableCell>
                             <TableCell className="text-right">{finalData ? `${finalData.hybridPayoffYears} yrs` : '...'}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
            <CardFooter>
                <p className="text-xs text-muted-foreground">This simulation assumes a {scenario.investmentReturnRate * 100}% annual return for investments and a {scenario.homeAppreciationRate * 100}% annual home value appreciation. These are not guaranteed. This model does not include taxes or transaction costs.</p>
            </CardFooter>
        </Card>


        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">Which Strategy is Better?</CardTitle>
            <CardDescription>The "best" strategy depends on both math and psychology.</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800">
              <h3 className="font-semibold flex items-center mb-2 text-green-800 dark:text-green-200">
                <TrendingUp className="mr-2 h-5 w-5" /> The Case for Investing (Mathematical)
              </h3>
              <p className="text-sm font-semibold mb-2">The argument to invest is based on long-term historical data and mathematical probability.</p>
              <ul className="list-disc pl-5 text-sm space-y-2">
                <li>
                  <strong>Potential for Higher Returns:</strong> As the chart shows, if your investments return more (e.g., 7-10% annually in stocks) than your mortgage costs you (e.g., 3-6%), you are likely to build significantly more wealth over the long term by investing the difference.
                </li>
                <li>
                  <strong>Liquidity and Flexibility:</strong> Money in a brokerage account is liquid. You can sell your investments and access the cash in a few days. Money paid into your mortgage becomes illiquid home equity, which is much harder to access without selling or refinancing.
                </li>
                <li>
                  <strong>Inflation Hedge:</strong> Your investments have the potential to grow faster than inflation. Meanwhile, your fixed-rate mortgage payment becomes effectively cheaper over time due to inflation eroding the real value of that debt.
                </li>
              </ul>
            </div>
            <div className="p-4 border rounded-lg bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800">
              <h3 className="font-semibold flex items-center mb-2 text-blue-800 dark:text-blue-200">
                <Home className="mr-2 h-5 w-5" /> The Case for Paying Off the Mortgage (Psychological)
              </h3>
              <p className="text-sm font-semibold mb-2">The argument to pay off the mortgage is based on risk reduction and emotional well-being.</p>
              <ul className="list-disc pl-5 text-sm space-y-2">
                <li>
                  <strong>Guaranteed, Risk-Free Return:</strong> Paying off a 6% mortgage is equivalent to earning a guaranteed, risk-free 6% return on your money. The stock market offers no such guarantees. This can be very appealing, especially for more conservative individuals.
                </li>
                <li>
                  <strong>Immense Peace of Mind:</strong> Owning your home outright provides a powerful sense of security and simplifies your financial life, especially in retirement. Your largest monthly expense disappears.
                </li>
                <li>
                  <strong>Frees Up Future Cash Flow:</strong> Once the mortgage is gone, the significant amount of money you were paying each month is freed up for other purposes—travel, hobbies, or increased investment.
                </li>
                <li>
                  <strong>Reduces "Sequence of Returns" Risk in Retirement:</strong> Having no mortgage payment in retirement means you need to withdraw less from your portfolio each year. This is a powerful defense against a market downturn early in your retirement, as you won't be forced to sell as many assets when they are down.
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-xl">The Hybrid Approach & A Mental Shortcut</CardTitle>
                <CardDescription>It doesn't have to be all or nothing. A balanced strategy can offer the best of both worlds.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div>
                    <h4 className="font-semibold mb-2">Finding a Middle Ground</h4>
                    <p className="text-sm text-muted-foreground">Many people opt for a hybrid approach, as shown in the simulation. By splitting your extra cash 50/50 between extra mortgage payments and your brokerage account, you accelerate your mortgage payoff while still benefiting from market growth. This provides a balance between mathematical optimization and psychological peace of mind.</p>
                </div>
                 <Alert>
                    <Lightbulb className="h-4 w-4" />
                    <AlertTitle className="font-semibold">The Break-Even Mental Model</AlertTitle>
                    <AlertDescription>
                        A simple way to frame the decision is this: if you believe your long-term, after-tax investment returns will be higher than your after-tax mortgage interest rate, then investing is mathematically optimal. If you value the guaranteed return and peace of mind more than that potential extra return, paying down the mortgage is the "life-optimal" move for you.
                    </AlertDescription>
                </Alert>
            </CardContent>
        </Card>

         <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Building the Life You Want</CardTitle>
                <CardDescription>
                    This isn’t about beating a spreadsheet. It’s about building the life you want: more wealth on paper, or more peace of mind sooner. The right answer is the one that lets you sleep best while still moving toward financial independence.
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
