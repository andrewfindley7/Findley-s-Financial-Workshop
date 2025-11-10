'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Recycle, AlertTriangle, ThumbsUp, ThumbsDown, ArrowRightLeft, Landmark, Briefcase, ArrowRight, Info, CheckCircle } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const rolloverReasons = [
  {
    title: "More Investment Choices",
    description: "Your old 401(k) likely has a limited menu of 10-20 mutual funds. An IRA gives you access to a nearly unlimited universe of stocks, bonds, and low-cost ETFs.",
    isPro: true,
  },
  {
    title: "Potentially Lower Fees",
    description: "401(k) plans can have administrative fees, record-keeping fees, and higher-cost investment options. A low-cost brokerage IRA can often reduce these expenses significantly.",
    isPro: true,
  },
  {
    title: "Consolidation and Simplicity",
    description: "Combining old 401(k)s from previous jobs into a single account (either your new 401(k) or an IRA) makes your portfolio easier to manage, track, and rebalance.",
    isPro: true,
  },
  {
    title: "Access to Roth Conversions",
    description: "Rolling a pre-tax 401(k) to a Traditional IRA gives you the option to later convert those funds to a Roth IRA, paying taxes now for tax-free growth and withdrawals in the future.",
    isPro: true,
  }
];

const rolloverTypes = [
  {
    title: "Direct Rollover (Recommended)",
    description: "This is the safest and easiest method. The money is transferred directly from your old 401(k) provider to your new account provider (e.g., your IRA brokerage). You never touch the money, so there are no tax implications.",
    isRecommended: true,
  },
  {
    title: "Indirect Rollover (Use with Caution)",
    description: "Your old provider sends you a check for the balance, withholding 20% for taxes. You then have 60 days to deposit the FULL amount (including the 20% you didn't receive) into a new retirement account. If you fail to do so, the withdrawal is treated as a taxable distribution and may incur a penalty.",
    isRecommended: false,
  },
];

export default function Rollover401kGuidePage() {
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
        <h1 className="text-3xl font-bold font-headline">Basics of 401(k) Rollovers</h1>
        <p className="text-muted-foreground mt-2">Learn what to do with your old 401(k) when you leave a job.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Recycle className="h-4 w-4" />
          <AlertTitle className="font-headline">What is a 401(k) Rollover?</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>A rollover is the process of moving your retirement savings from a former employer's 401(k) plan into another retirement account, such as an Individual Retirement Account (IRA) or your new employer's 401(k). The main goal of a rollover is to maintain the tax-deferred status of your retirement savings, avoiding taxes and penalties that would occur if you simply cashed out the account.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">Why Roll Over a 401(k)?</CardTitle>
            <CardDescription>Consolidating old retirement accounts gives you more control and can save you money.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {rolloverReasons.map(reason => (
              <div key={reason.title} className="flex items-start gap-3">
                <div className="flex-shrink-0 pt-1">
                  {reason.isPro ? <ThumbsUp className="h-5 w-5 text-green-600"/> : <ThumbsDown className="h-5 w-5 text-red-600"/>}
                </div>
                <div>
                  <h4 className="font-semibold">{reason.title}</h4>
                  <p className="text-sm text-muted-foreground">{reason.description}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
                <ArrowRightLeft className="mr-2 h-5 w-5 text-primary"/>
                Types of Rollovers
            </CardTitle>
            <CardDescription>Understanding the two main methods is crucial to avoid costly mistakes.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {rolloverTypes.map(type => (
              <div key={type.title} className={`p-4 border rounded-lg ${type.isRecommended ? 'bg-green-50 dark:bg-green-900/20 border-green-200' : 'bg-amber-50 dark:bg-amber-900/20 border-amber-300'}`}>
                <h3 className="font-semibold text-lg flex items-center mb-1">
                  {type.title}
                </h3>
                <p className="text-sm text-muted-foreground">{type.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">Where Can You Roll the Money?</CardTitle>
            <CardDescription>You have two primary options for your old 401(k) funds. Choosing the right one depends on your financial goals.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
            <Card className="shadow-sm">
                <CardHeader className="pb-2">
                    <div className="flex items-center mb-2">
                        <Landmark className="mr-3 h-6 w-6 text-primary" />
                        <CardTitle className="font-semibold text-base">Rollover to a Traditional IRA</CardTitle>
                    </div>
                </CardHeader>
                <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">This is the most common choice. It preserves the tax-deferred status of your money and generally gives you maximum flexibility and investment choice.</p>
                     <div className="text-xs space-y-2">
                        <p className="flex items-start"><ThumbsUp className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5"/> <strong>Pro:</strong> Gives you access to a virtually unlimited selection of low-cost stocks, bonds, and ETFs.</p>
                        <p className="flex items-start"><ThumbsDown className="h-4 w-4 text-red-600 mr-2 flex-shrink-0 mt-0.5"/> <strong>Con:</strong> Can complicate "Backdoor Roth IRA" contributions for high-income earners due to the pro-rata rule. This rule aggregates all your Traditional IRAs, and if you have pre-tax money in any of them, a Roth conversion becomes partially taxable.</p>
                     </div>
                </CardContent>
            </Card>
            <Card className="shadow-sm">
                <CardHeader className="pb-2">
                    <div className="flex items-center mb-2">
                        <Briefcase className="mr-3 h-6 w-6 text-primary" />
                        <CardTitle className="font-semibold text-base">Rollover to Your New 401(k)</CardTitle>
                    </div>
                </CardHeader>
                <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">If your new job's 401(k) plan allows it, you can move your old plan's balance into the new one. This keeps all your workplace retirement funds in one place.</p>
                     <div className="text-xs space-y-2">
                        <p className="flex items-start"><ThumbsUp className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5"/> <strong>Pro:</strong> Keeps your Traditional IRA balance at $0, preserving the ability to do clean "Backdoor Roth IRA" contributions without triggering the pro-rata rule.</p>
                         <p className="flex items-start"><ThumbsUp className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5"/> <strong>Pro:</strong> 401(k) plans have stronger federal creditor protection (ERISA) than IRAs, whose protections can vary by state.</p>
                        <p className="flex items-start"><ThumbsDown className="h-4 w-4 text-red-600 mr-2 flex-shrink-0 mt-0.5"/> <strong>Con:</strong> You are limited to the investment options and fees of your new employer's plan.</p>
                     </div>
                </CardContent>
            </Card>
          </CardContent>
        </Card>
        
         <Card>
            <CardHeader>
                <CardTitle className="font-headline flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary"/>
                    Your 4-Step Rollover Checklist
                </CardTitle>
                <CardDescription>
                    Follow these steps to ensure a smooth rollover process.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
                <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold shrink-0">1</div>
                    <div>
                        <h4 className="font-semibold">Open Your New Account</h4>
                        <p className="text-sm text-muted-foreground">Decide where you want the money to go. Open a Rollover IRA at a low-cost brokerage (like Vanguard, Fidelity, or Schwab) or confirm with your new employer that their 401(k) accepts rollovers.</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold shrink-0">2</div>
                    <div>
                        <h4 className="font-semibold">Contact Your Old 401(k) Provider</h4>
                        <p className="text-sm text-muted-foreground">Log into your old account or call their customer service. Inform them you want to initiate a direct rollover.</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold shrink-0">3</div>
                    <div>
                        <h4 className="font-semibold">Complete the Rollover Paperwork</h4>
                        <p className="text-sm text-muted-foreground">You will need to provide the details of your new account (account number, receiving institution's name, etc.). The old provider will then either send the funds electronically or mail a check made out to the new institution for your benefit (e.g., "Fidelity FBO [Your Name]").</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold shrink-0">4</div>
                    <div>
                        <h4 className="font-semibold">Confirm and Reinvest Immediately</h4>
                        <p className="text-sm text-muted-foreground">Once the funds arrive in the new account, they may land as cash. It is critical that you immediately reinvest this cash into your chosen funds (like a target-date or index fund) to get your money back to work in the market. Direct rollovers are typically fast, minimizing the time you are out of the market.</p>
                    </div>
                </div>
            </CardContent>
        </Card>

        <Alert variant="destructive" className="bg-red-50 dark:bg-red-900/20 border-red-300 dark:border-red-700">
          <AlertTriangle className="h-4 w-4 text-red-500" />
          <AlertTitle className="font-headline text-red-900 dark:text-red-200">The One Thing to Avoid: Cashing Out</AlertTitle>
          <AlertDescription className="text-red-800 dark:text-red-300">
            <p>It can be tempting to simply cash out an old 401(k), but this is almost always a bad financial decision. The entire amount will be treated as taxable income for the year, and if you are under age 59½, you will likely face an additional 10% early withdrawal penalty. This can erase a huge portion of your hard-earned retirement savings.</p>
          </AlertDescription>
        </Alert>

         <Alert variant="default" className="bg-amber-50 dark:bg-amber-900/20 border-amber-300 dark:border-amber-700">
          <Info className="h-4 w-4 text-amber-500" />
          <AlertTitle className="font-headline text-amber-900 dark:text-amber-200">Disclaimer</AlertTitle>
          <AlertDescription className="text-amber-800 dark:text-amber-300">
            <p>Retirement account rules and tax laws are subject to change. This lesson is for informational purposes only. It is highly recommended to consult with a qualified financial advisor or tax professional to make decisions based on your specific circumstances.</p>
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
