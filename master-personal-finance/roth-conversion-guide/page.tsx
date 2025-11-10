'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Repeat, TrendingUp, ThumbsUp, ThumbsDown, AlertTriangle, HelpCircle, ArrowRight, Info, Scale } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";


const pros = [
  {
    icon: TrendingUp,
    title: "Tax-Free Growth and Withdrawals",
    description: "This is the biggest advantage. Once the money is in a Roth account, all future growth and qualified withdrawals in retirement are completely tax-free, protecting you from future tax rate increases."
  },
  {
    icon: ThumbsUp,
    title: "No Required Minimum Distributions (RMDs)",
    description: "Roth IRAs do not have RMDs for the original owner. This gives you more flexibility in retirement and allows the money to continue growing tax-free for your entire life, making it a great estate planning tool."
  },
];

const cons = [
  {
    icon: ThumbsDown,
    title: "Upfront Tax Bill",
    description: "The biggest drawback is that you must pay ordinary income tax on the entire pre-tax amount you convert. A large conversion can easily push you into a higher tax bracket for that year."
  },
  {
    icon: AlertTriangle,
    title: "The 5-Year Rule",
    description: "There's a separate 5-year clock for each conversion. To withdraw the converted principal tax-free and penalty-free before age 59½, you must wait 5 years from the year of that specific conversion. Earnings always require you to be 59½ and have had your first Roth IRA open for 5 years."
  }
];

const comparisonData = [
  { feature: "Income Limits Apply?", contribution: "Yes", conversion: "No" },
  { feature: "Annual Dollar Limit?", contribution: "$7,000 (2024)", conversion: "Unlimited" },
  { feature: "Is it Taxable Now?", contribution: "No", conversion: "Yes (on pre-tax amount)" },
  { feature: "5-Year Rule Applies?", contribution: "Yes (for earnings)", conversion: "Yes (for each converted amount)" },
];


export default function RothConversionGuidePage() {
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
        <h1 className="text-3xl font-bold font-headline">Roth Conversions</h1>
        <p className="text-muted-foreground mt-2">Learn about the advanced strategy of converting pre-tax retirement funds to a Roth account.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Repeat className="h-4 w-4" />
          <AlertTitle className="font-headline">What is a Roth Conversion?</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>A Roth conversion is the process of moving money from a traditional, pre-tax retirement account (like a Traditional IRA, 401(k), or 403(b)) into an after-tax Roth IRA. The amount you convert is added to your ordinary income for that year and is taxed accordingly.</p>
            <p className="font-semibold">Essentially, you are choosing to pay the income taxes on your retirement savings now in exchange for tax-free growth and withdrawals in the future.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">The Pros and Cons of Converting</CardTitle>
            <CardDescription>A Roth conversion is a powerful tool, but it's not right for everyone.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pros.map(pro => (
                    <div key={pro.title} className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/20 border-green-200">
                        <div className="flex items-center mb-2">
                            <pro.icon className="h-5 w-5 mr-2 text-green-600"/>
                            <h3 className="font-semibold">{pro.title}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">{pro.description}</p>
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {cons.map(con => (
                    <div key={con.title} className="p-4 border rounded-lg bg-red-50 dark:bg-red-900/20 border-red-200">
                        <div className="flex items-center mb-2">
                            <con.icon className="h-5 w-5 mr-2 text-red-600"/>
                            <h3 className="font-semibold">{con.title}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">{con.description}</p>
                    </div>
                ))}
            </div>
          </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-xl flex items-center">
                    <Scale className="mr-2 h-5 w-5 text-primary" />
                    Conversion vs. Contribution: At a Glance
                </CardTitle>
                <CardDescription>It's crucial to understand that converting is not the same as contributing. This table highlights the key differences.</CardDescription>
            </CardHeader>
            <CardContent>
                 <div className="overflow-x-auto rounded-lg border">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Feature</TableHead>
                                <TableHead>Roth Contribution</TableHead>
                                <TableHead>Roth Conversion</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {comparisonData.map(row => (
                                <TableRow key={row.feature}>
                                    <TableCell className="font-medium">{row.feature}</TableCell>
                                    <TableCell>{row.contribution}</TableCell>
                                    <TableCell>{row.conversion}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                 </div>
                 <Alert variant="default" className="mt-4 bg-primary/5">
                    <Info className="h-4 w-4" />
                    <AlertTitle>A Practical Example</AlertTitle>
                    <AlertDescription>
                        In a single year, an individual could make a $7,000 annual contribution to their IRA AND convert an old $50,000 401(k) into a Roth IRA. The $50,000 conversion does not affect their ability to make the $7,000 contribution. They would, however, owe income tax on the $50,000 they converted.
                    </AlertDescription>
                </Alert>
            </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
                <HelpCircle className="mr-2 h-5 w-5 text-primary"/>Who Should Consider a Roth Conversion?
            </CardTitle>
            <CardDescription>A conversion makes the most sense in specific situations.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
              <p>Consider a Roth conversion if:</p>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>
                      You are in a temporarily low-income year. This could be due to a job change, starting a business, or early retirement. Converting when your tax bracket is lower minimizes the tax hit.
                  </li>
                  <li>
                      You expect your tax rate to be significantly higher in retirement. If you're early in your career and anticipate substantial income growth, paying taxes now at a lower rate can be a smart long-term move.
                  </li>
                  <li>
                      You want to leave a tax-free inheritance. Roth IRAs are excellent estate planning tools because your heirs can inherit them and enjoy tax-free withdrawals without being subject to RMDs.
                  </li>
                  <li>
                      You have cash outside of your retirement accounts to pay the tax bill. It's generally not advisable to use funds from the conversion itself to pay the taxes, as this reduces the amount of money that can grow tax-free.
                  </li>
                   <li>
                      You are a high-income earner. If your income is too high to contribute to a Roth IRA directly, the "Backdoor Roth IRA" strategy (a non-deductible contribution to a Traditional IRA followed immediately by a conversion) is your primary way to get money into a Roth account.
                  </li>
              </ul>
          </CardContent>
        </Card>

        <Alert variant="destructive" className="bg-amber-50 dark:bg-amber-900/20 border-amber-300 dark:border-amber-700">
          <AlertTriangle className="h-4 w-4 text-amber-500" />
          <AlertTitle className="font-headline text-amber-900 dark:text-amber-200">This is an Irreversible Decision</AlertTitle>
          <AlertDescription className="text-amber-800 dark:text-amber-300">
            <p>Once you convert funds from a traditional account to a Roth, you cannot undo it. This is why it's crucial to carefully consider the tax implications and consult with a qualified tax professional or financial advisor before making a large conversion.</p>
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
