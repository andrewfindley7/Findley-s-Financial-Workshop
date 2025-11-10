'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { HandCoins, PauseCircle, Users, PiggyBank, Flame, ShieldCheck, TrendingUp, Home, Brain, HelpCircle, AlertTriangle, ArrowRight, User, UserCheck, Percent, PieChart, Sparkles, Gem, Info } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';


const immediateSteps = [
  {
    icon: PauseCircle,
    title: "Pause and Breathe",
    description: "The most important first step is to do nothing. Resist the urge to make any major purchases, quit your job, or make large investments immediately. The pause is crucial to devise a thoughtful plan with a clear head, preventing irreversible mistakes, regardless of the windfall's size."
  },
  {
    icon: Users,
    title: "Assemble Your Team",
    description: "For any significant windfall, you should consult with professionals. This typically includes a fee-only Certified Financial Planner (CFP®), a Certified Public Accountant (CPA) for tax advice, and potentially an estate planning attorney."
  },
  {
    icon: PiggyBank,
    title: "Park the Cash Safely",
    description: "While you're making a plan, put the money in a safe, liquid, and insured account, such as a high-yield savings account (HYSA). This keeps the money secure and earning some interest while you decide on its long-term purpose."
  }
];

const prioritySteps = [
    { title: "Pay Off High-Interest Debt", description: "Use the windfall to immediately eliminate any debt with an interest rate above 7-8% (e.g., credit cards, personal loans). This provides an instant, guaranteed, risk-free return on your money equal to the interest rate." },
    { title: "Build a Full Emergency Fund", description: "Fully fund a 3-6 month emergency fund in a high-yield savings account. This is your ultimate safety net against future financial shocks and ensures you'll never have to go into debt for an emergency again." },
    { title: "Max Out All Tax-Advantaged Accounts", description: "For the current year, contribute the maximum amount allowed to your 401(k), Roth IRA, and HSA if eligible. This is the most efficient way to invest for retirement." },
    { title: "Pay Off Lower-Interest Debt", description: "Consider paying off debts with lower interest rates, such as mortgages or student loans. While not always the most mathematically optimal choice, being completely debt-free provides immense psychological freedom and security." },
    { title: "Invest for the Future", description: "With all debts gone and tax-advantaged accounts maxed out, invest the remainder in a diversified, low-cost taxable brokerage account to build wealth for other major life goals (e.g., early retirement, starting a business, or a house down payment)." },
    { title: "Plan for Thoughtful Enjoyment", description: "After securing your financial foundation, consider setting aside a small portion (e.g., up to 10%) for a meaningful and memorable experience. This isn't a license for impulsive spending, but a deliberate reward for responsible planning, like a special family vacation or a home renovation you can now pay for in cash." },
];

export default function FinancialWindfallPage() {
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
        <h1 className="text-3xl font-bold font-headline">How to Handle a Financial Windfall</h1>
        <p className="text-muted-foreground mt-2">A step-by-step lesson to managing a large, unexpected sum of money wisely.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <HandCoins className="h-4 w-4" />
          <AlertTitle className="font-headline">What is a Financial Windfall?</AlertTitle>
          <AlertDescription>
            A windfall is any large, unexpected influx of cash, such as from an inheritance, lottery win, sale of a business, or a large bonus. While exciting, managing it poorly can lead to stress and squandered opportunity. A thoughtful plan is your most valuable tool.
          </AlertDescription>
        </Alert>
        
        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-xl">A Tale of Two Windfalls</CardTitle>
                <CardDescription>This story shows why the "pause" is the most important step.</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-6">
                <div className="p-4 border rounded-lg bg-orange-50 dark:bg-orange-900/30 border-orange-200 dark:border-orange-800">
                    <h3 className="font-semibold flex items-center mb-2 text-orange-800 dark:text-orange-200">
                       <User className="mr-2 h-5 w-5"/> James's Story
                    </h3>
                    <p className="text-sm text-muted-foreground">James inherited $200,000. Excited, he immediately bought a luxury car and put a large down payment on a bigger house. Within three years, the money was gone, but the higher mortgage and car payments remained. The windfall had become a source of new financial stress.</p>
                </div>
                 <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800">
                    <h3 className="font-semibold flex items-center mb-2 text-green-800 dark:text-green-200">
                       <UserCheck className="mr-2 h-5 w-5"/> Sarah's Story
                    </h3>
                    <p className="text-sm text-muted-foreground">Sarah received a similar inheritance. She paused and put the money in a high-yield savings account. After working with a financial planner, she used the funds to pay off her student loans and invest the rest in a diversified portfolio. Ten years later, her inheritance had grown to over $350,000 and gave her the freedom to change careers.</p>
                </div>
            </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">Immediate First Steps: The Crucial Pause</CardTitle>
            <CardDescription>Before you make any major decisions, take these crucial preliminary steps.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-3 gap-4">
            {immediateSteps.map(item => (
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
            <CardTitle className="font-headline text-xl flex items-center">
              <Flame className="mr-2 h-5 w-5 text-primary" />
              A Prioritized Plan for Your Windfall
            </CardTitle>
            <CardDescription>Work through this checklist with your financial team to build a strong foundation. Address each step in order.</CardDescription>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-4">
                {prioritySteps.map(step => <li key={step.title}><strong>{step.title}:</strong> {step.description}</li>)}
            </ol>
          </CardContent>
        </Card>
        
        <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-xl flex items-center">
                    <AlertTriangle className="mr-2 h-5 w-5 text-amber-500"/> Tax Implications
                </CardTitle>
                <CardDescription>A windfall often comes with a tax bill.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                  <p><strong>Inheritance:</strong> In the U.S., inheritances are generally not taxed at the federal level for the recipient, but some states have an inheritance tax. The estate itself may have to pay an estate tax before distribution.</p>
                  <p><strong>Lottery/Gambling:</strong> These winnings are taxed as ordinary income at both federal and state levels.</p>
                  <p><strong>Sale of a Business:</strong> This typically results in a capital gains tax on the profit from the sale.</p>
                  <p className="font-bold mt-2">Disclaimer: Tax laws are complex and change over time. Consulting a CPA is essential.</p>
              </CardContent>
            </Card>
             <Card>
              <CardHeader>
                <CardTitle className="font-headline text-xl flex items-center">
                    <Brain className="mr-2 h-5 w-5 text-primary"/> Lifestyle & Psychological Considerations
                </CardTitle>
                 <CardDescription>Money can solve money problems, but it doesn't solve people problems.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                 <p><strong>Avoid Drastic Lifestyle Changes:</strong> Give yourself at least a year before making major life changes like buying a new house or quitting your job. This allows you to adjust and plan thoughtfully.</p>
                 <p><strong>Be Discreet:</strong> Be careful who you tell. Sudden wealth can cause stress, guilt, isolation, and even depression. A financial advisor can act as a helpful buffer in these situations.</p>
                 <p><strong>Sudden Wealth Syndrome:</strong> This is a real condition. Acknowledging that these feelings are normal is the first step to managing them. Your identity can be shaken by a windfall, and it's okay to seek support.</p>
              </CardContent>
            </Card>
        </div>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you understand how to approach a financial windfall, return to the main roadmap to continue building your financial knowledge.
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
