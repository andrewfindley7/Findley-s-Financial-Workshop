'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { HandCoins, TrendingUp, DollarSign, PiggyBank, Gift, ArrowRight, Lightbulb, ShieldCheck, Info } from 'lucide-react';
import Link from 'next/link';

const strategies = [
  {
    icon: TrendingUp,
    title: "Donating Appreciated Stock",
    description: "Instead of selling a stock that has grown in value and then donating the cash, you can donate the stock directly to a charity. This is one of the most tax-efficient ways to give.",
    benefit: "You (generally) can deduct the full fair market value of the stock, and neither you nor the charity has to pay capital gains taxes on the appreciation. For example, if you donate $10,000 of stock that you originally bought for $2,000, you get a $10,000 tax deduction, and no one pays tax on the $8,000 gain. If you sold the stock first, you'd have to pay capital gains tax (e.g., $1,200 at a 15% rate) and could only donate the remaining $8,800.",
    bestFor: "Long-term investors sitting on significant capital gains in their taxable brokerage accounts."
  },
  {
    icon: PiggyBank,
    title: "Donor-Advised Funds (DAFs)",
    description: "A DAF is like a charitable investment account. You make a contribution to the DAF, receive an immediate tax deduction, and the funds can be invested and grow tax-free. You can then recommend grants to your favorite charities from the fund over time.",
    benefit: "Allows you to 'bundle' several years of charitable giving into one year to maximize tax deductions (especially useful for itemizing). You can donate cash, stock, or other assets.",
    bestFor: "High earners who want to 'bunch' several years of deductions into a single high-income year, for example, after receiving a large bonus or company stock."
  },
  {
    icon: Gift,
    title: "Qualified Charitable Distributions (QCDs)",
    description: "If you are age 70½ or older, you can donate up to a certain amount per year (in 2025, up to $113,000) directly from your Traditional IRA to a qualified charity.",
    benefit: "A QCD counts towards your Required Minimum Distribution (RMD) for the year but is excluded from your taxable income. This can be more beneficial than taking the RMD, paying tax on it, and then taking a standard deduction.",
    bestFor: "Retirees over 70½ who are subject to RMDs but do not need the income for their living expenses and want to reduce their taxable income."
  }
];

export default function CharitableGivingStrategiesPage() {
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
        <h1 className="text-3xl font-bold font-headline">Strategic Charitable Giving</h1>
        <p className="text-muted-foreground mt-2">Learn tax-efficient ways to give, maximizing your impact and minimizing your tax burden.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <HandCoins className="h-4 w-4" />
          <AlertTitle className="font-headline">Giving Smarter, Not Just More</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>Charitable giving is a powerful way to support causes you care about. By being strategic, you can often give more and reduce your own tax liability at the same time. The goal is to align your generosity with smart financial planning.</p>
            <p className="font-semibold">This lesson is for informational purposes and is not tax advice. Always consult with a qualified tax professional to understand the best strategy for your specific situation.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">The "Why" and "When" of Giving</CardTitle>
            <CardDescription>Before exploring *how* to give, it's important to consider your personal philosophy on *why* and *when* to give.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">Giving back can be an incredibly fulfilling part of a financial plan. It connects your wealth to your values and allows you to support causes that are meaningful to you. However, it's crucial to approach giving from a position of financial strength.</p>
            <Alert variant="default" className="bg-primary/5">
                <ShieldCheck className="h-4 w-4 text-primary" />
                <AlertTitle className="font-semibold text-primary">Rule of Thumb: Put On Your Own Oxygen Mask First</AlertTitle>
                <AlertDescription>
                    <p>You cannot effectively help others if your own financial house is not in order. Before making significant charitable contributions, ensure you have a strong financial foundation:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>You have a fully funded emergency fund (3-6 months of expenses).</li>
                        <li>You have no high-interest debt (like credit card balances).</li>
                        <li>You are consistently saving and investing for your own retirement (e.g., at least 15% of your income).</li>
                    </ul>
                    <p className="mt-2">Once your own future is secure, you can give generously and confidently. As a guideline, the amount you give to charity should not exceed the amount you are saving and investing for your own future.</p>
                </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">The Problem with Donating Cash</CardTitle>
            <CardDescription>Writing a check is simple, but it's often the least tax-efficient way to give for an investor.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">When you donate cash, you may be able to take a tax deduction if you itemize. However, if you sell an appreciated asset (like a stock) to generate that cash, you must first pay capital gains tax on the profit. This reduces the amount of money available for you to donate and provides no extra tax benefit. The strategies below help avoid this inefficiency.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">Tax-Efficient Giving Strategies</CardTitle>
            <CardDescription>Explore these powerful methods for maximizing your charitable impact.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {strategies.map(item => (
              <div key={item.title} className="p-4 border rounded-lg bg-card shadow-sm">
                <div className="flex items-start mb-2">
                  <item.icon className="mr-3 h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                  </div>
                </div>
                <Alert variant="default" className="bg-primary/5">
                    <AlertTitle className="font-semibold text-primary">The Benefit:</AlertTitle>
                    <AlertDescription className="text-sm">{item.benefit}</AlertDescription>
                </Alert>
                 <p className="text-xs font-semibold text-muted-foreground mt-3"><strong>Best For:</strong> {item.bestFor}</p>
              </div>
            ))}
          </CardContent>
        </Card>
        
        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you understand these advanced giving strategies, return to the main roadmap to continue building your financial knowledge.
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
