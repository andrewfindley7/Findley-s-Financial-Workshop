
'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { FileText, Calendar, Wallet, Percent, AlertTriangle, Info, CheckCircle, Ban, ArrowRight, Brain, TrendingUp, Repeat } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const rmdConcepts: { icon: LucideIcon; title: string; description: string; example?: string }[] = [
  {
    icon: Calendar,
    title: "Starting Age",
    description: "The SECURE 2.0 Act raised the RMD age. Generally, you must start taking RMDs in the year you turn 73 if you turned 72 after Dec 31, 2022. This age is scheduled to increase to 75 for those who turn 74 after Dec 31, 2032. Always check current IRS rules for your specific birth year.",
  },
  {
    icon: Percent,
    title: "Calculation",
    description: "The RMD amount is calculated by dividing your account balance as of December 31st of the previous year by a 'Life Expectancy Factor' from the IRS's Uniform Lifetime Table. This table provides a divisor based on your age.",
    example: "If your IRA balance is $500,000 at the end of last year and the life expectancy factor for your age (e.g., 73) is 26.5, your RMD would be: $500,000 ÷ 26.5 = $18,867.92 for the year."
  },
  {
    icon: Wallet,
    title: "Affected Accounts",
    description: "RMDs apply to most tax-deferred retirement accounts, including Traditional IRAs, SEP IRAs, SIMPLE IRAs, and pre-tax 401(k)s, 403(b)s, and 457(b) plans."
  },
  {
    icon: AlertTriangle,
    title: "The Penalty",
    description: "Failing to take your full RMD results in a significant penalty. The penalty is an excise tax of 25% on the amount not withdrawn, which can be reduced to 10% if the mistake is corrected in a timely manner.",
  }
];

export default function RmdGuidePage() {
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
        <h1 className="text-3xl font-bold font-headline">A Lesson on Required Minimum Distributions (RMDs)</h1>
        <p className="text-muted-foreground mt-2">Understand the IRS rules for mandatory withdrawals from your retirement accounts.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <FileText className="h-4 w-4" />
          <AlertTitle className="font-headline">What are RMDs?</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>A Required Minimum Distribution (RMD) is the minimum amount you must withdraw from your tax-deferred retirement accounts each year once you reach a certain age. The Internal Revenue Service (IRS) mandates these withdrawals so that it can eventually collect taxes on your savings.</p>
            <p className="font-semibold">Essentially, the government has allowed your money to grow tax-deferred for decades, and RMDs are the mechanism for that tax deferral to come to an end.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">Key Concepts of RMDs</CardTitle>
            <CardDescription>Understanding the basics of how RMDs work is crucial for retirement tax planning.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
            {rmdConcepts.map(concept => (
              <div key={concept.title} className="p-4 border rounded-lg bg-blue-50/50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
                <div className="flex items-center mb-2">
                  <concept.icon className="mr-2 h-5 w-5 text-primary/80" />
                  <h3 className="font-semibold">{concept.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{concept.description}</p>
                {concept.example && (
                  <div className="text-xs italic text-muted-foreground/80 mt-2 bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800 p-2 rounded-md border">
                    <strong>Example:</strong> {concept.example}
                  </div>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
                <Brain className="mr-2 h-5 w-5 text-primary"/>
                Strategic Considerations
            </CardTitle>
            <CardDescription>RMDs are not just a withdrawal; they are a taxable event that should be managed strategically.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
              <div>
                  <h4 className="font-semibold">Coordinate with Your Tax Strategy</h4>
                  <p className="text-sm text-muted-foreground">Your RMD is taxed as ordinary income. A large RMD can push you into a higher tax bracket and potentially increase your Medicare premiums due to IRMAA (Income-Related Monthly Adjustment Amount) surcharges.</p>
                  <Alert variant="default" className="mt-2 text-xs bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800">
                    <AlertTitle>Example:</AlertTitle>
                    <AlertDescription>In 2025, the 24% tax bracket for single filers starts at $105,101. If your other income is $80,000, a $40,000 RMD would push $14,899 of your income into that higher bracket. This income jump might also trigger higher Medicare Part B premiums.</AlertDescription>
                  </Alert>
              </div>
              <div className="border-t pt-4">
                  <h4 className="font-semibold">Proactive Strategy: Roth Conversions</h4>
                  <p className="text-sm text-muted-foreground">One of the most powerful ways to reduce future RMDs is to perform Roth conversions during your low-income years before RMDs begin (e.g., between retirement and age 73). By systematically converting funds from your Traditional IRA/401(k) to a Roth IRA, you pay taxes on that money at a potentially lower rate. The converted funds then grow tax-free in the Roth account and are not subject to RMDs, giving you greater control.</p>
              </div>
              <div className="border-t pt-4">
                  <h4 className="font-semibold">Charitable Giving: The QCD</h4>
                  <p className="text-sm text-muted-foreground">If you are charitably inclined and age 70½ or older, a Qualified Charitable Distribution (QCD) is a highly effective strategy. For 2025, you can donate up to $113,000 (indexed for inflation) directly from your IRA to a qualified charity. This amount counts towards your RMD for the year but is excluded from your taxable income, which can also help you avoid higher Medicare premiums.</p>
              </div>
              <div className="border-t pt-4">
                  <h4 className="font-semibold">Practical Tip: Timing Your Withdrawals</h4>
                  <p className="text-sm text-muted-foreground">Many retirees wait until December to take their RMD. While this maximizes tax-deferred growth for the year, it can create a cash flow crunch. Consider setting up automatic monthly or quarterly withdrawals from your IRA to your bank account. This provides a steady, predictable income stream throughout the year and ensures you do not forget to take the RMD by the deadline.</p>
              </div>
              <div className="border-t pt-4">
                  <h4 className="font-semibold flex items-center"><TrendingUp className="mr-2 h-4 w-4"/>Strategic Uses of RMD Funds</h4>
                  <p className="text-sm text-muted-foreground">If you do not need your RMD for living expenses, think of it as a strategic opportunity, not just a tax bill. You can use the withdrawn funds to:</p>
                   <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                      <li><strong>Rebalance Your Portfolio:</strong> Use the RMD to rebalance by selling shares from an over-allocated asset class within your IRA. Then, use the cash to buy under-allocated assets in your taxable brokerage account.</li>
                      <li><strong>Fund a Roth IRA for a Spouse or Child:</strong> If you have excess cash from an RMD, you can use it to help a spouse or child with earned income fund their own Roth IRA.</li>
                      <li><strong>Invest for Heirs:</strong> Reinvest the RMD into a taxable brokerage account or a 529 plan for grandchildren to continue compounding wealth for the next generation.</li>
                  </ul>
              </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">Which Accounts Have RMDs?</CardTitle>
            <CardDescription>It is important to know which of your accounts are subject to these rules.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 border rounded-lg bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800">
                <h3 className="font-semibold flex items-center mb-2 text-blue-800 dark:text-blue-200">
                    <CheckCircle className="mr-2 h-5 w-5" /> Accounts Subject to RMDs
                </h3>
                <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Traditional IRAs</li>
                    <li>SEP IRAs</li>
                    <li>SIMPLE IRAs</li>
                    <li>Traditional 401(k) plans</li>
                    <li>403(b) plans</li>
                    <li>457(b) plans</li>
                    <li>Profit-sharing plans</li>
                </ul>
                </div>
                <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800">
                <h3 className="font-semibold flex items-center mb-2 text-green-800 dark:text-green-200">
                    <Ban className="mr-2 h-5 w-5" /> Accounts NOT Subject to RMDs (for the original owner)
                </h3>
                <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Roth IRAs</li>
                    <li>Roth 401(k) plans (starting in 2024)</li>
                    <li>Taxable brokerage accounts</li>
                    <li>Bank accounts (checking, savings)</li>
                </ul>
                </div>
            </div>
          </CardContent>
          <CardFooter>
            <p className="text-xs text-muted-foreground">Note: While you do not have to take RMDs from your own Roth accounts, your beneficiaries who inherit them will be subject to different withdrawal rules.</p>
          </CardFooter>
        </Card>

        <Alert variant="destructive" className="bg-amber-50 dark:bg-amber-900/20 border-amber-300 dark:border-amber-700 text-amber-900 dark:text-amber-200 [&>svg]:text-amber-500 dark:[&>svg]:text-amber-400">
          <Info className="h-4 w-4" />
          <AlertTitle className="font-headline text-amber-900 dark:text-amber-200">Important Disclaimer</AlertTitle>
          <AlertDescription className="text-amber-800 dark:text-amber-300">
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>RMD rules are complex and subject to change by law.</strong> Ages, amounts, and affected accounts mentioned are based on rules as of 2024/2025 and may change. It is highly recommended to consult with a qualified financial advisor or tax professional to ensure you are complying with the current regulations for your specific situation.</li>
              <li>You can always withdraw more than the RMD, but the amount you withdraw from pre-tax accounts will be taxed as ordinary income.</li>
            </ul>
          </AlertDescription>
        </Alert>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you understand this key concept, return to the roadmap to continue building your financial knowledge.
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
