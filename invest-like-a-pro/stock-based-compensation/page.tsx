'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { HandCoins, ArrowRight, Brain, Recycle, AlertTriangle, Wind, Info, ThumbsUp, ThumbsDown } from 'lucide-react';
import Link from 'next/link';

export default function StockBasedCompensationPage() {
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
        <h1 className="text-3xl font-bold font-headline">Understanding Stock-Based Compensation (SBC)</h1>
        <p className="text-muted-foreground mt-2">Learn to spot a critical red flag that can hide a business's true profitability.</p>
      </div>
      <div className="space-y-6">
        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle className="font-headline">A Real Expense in Disguise</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>Stock-Based Compensation (SBC) is a form of non-cash pay where companies give employees stock options or grants instead of salary. While it can align employee and shareholder interests, it is a very real expense that is often obscured by misleading "adjusted" earnings metrics.</p>
            <p className="font-semibold">SBC dilutes your ownership stake in the company. For every share given to an employee, your slice of the ownership pie gets smaller. As Warren Buffett says, "If options aren't a form of compensation, what are they? If compensation isn't an expense, what is it? And, if expenses shouldn't go into the calculation of earnings, where in the world should they go?"</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">Why Companies Use It: The Legitimate Case</CardTitle>
            <CardDescription>To be fair, SBC serves an important purpose, especially for certain types of companies.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p><strong>Aligning Incentives:</strong> Granting stock to employees gives them a direct ownership stake, which can motivate them to think like owners and work towards the company's long-term success.</p>
              <p><strong>Conserving Cash:</strong> For early-stage startups with limited cash but high growth potential, SBC is a crucial tool to attract and retain top talent that they couldn't otherwise afford to pay in cash salaries.</p>
               <p className="font-semibold pt-2">The problem arises when mature, profitable companies use excessive SBC and then encourage investors to ignore it as a real cost.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">The Problem with "Adjusted" Earnings</CardTitle>
            <CardDescription>Many companies, especially in the tech sector, encourage investors to focus on "Adjusted EBITDA" or "Non-GAAP Earnings," which conveniently add back the cost of SBC. This can paint a dangerously misleading picture of profitability.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            <div className="p-4 border rounded-lg bg-orange-50 dark:bg-orange-900/30 border-orange-200 dark:border-orange-800">
              <h3 className="font-semibold flex items-center mb-2 text-orange-800 dark:text-orange-200">
                <ThumbsDown className="mr-2 h-5 w-5" /> Scenario A: The Illusion of Profit
              </h3>
              <ul className="text-sm space-y-1">
                <li>Company reports "Adjusted Earnings" of <strong>$200 million</strong>.</li>
                <li>But they add back <strong>$800 million</strong> in SBC.</li>
                <li>The real earnings for shareholders are closer to negative $600 million.</li>
                <li>The business is actually burning huge amounts of owner value, but hides it with an adjusted metric.</li>
              </ul>
            </div>
            <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800">
              <h3 className="font-semibold flex items-center mb-2 text-green-800 dark:text-green-200">
                <ThumbsUp className="mr-2 h-5 w-5" /> Scenario B: The Cash-Generative Business
              </h3>
              <ul className="text-sm space-y-1">
                <li>Company reports Net Income of <strong>$200 million</strong>.</li>
                <li>SBC is a reasonable <strong>$20 million</strong> (10% of income).</li>
                <li>The real Free Cash Flow is strong and supports the valuation.</li>
                <li>The company is genuinely profitable and creating value for its owners.</li>
              </ul>
            </div>
          </CardContent>
           <CardFooter>
               <p className="text-sm text-muted-foreground">So how can you tell which type of business you’re dealing with? The cash flow statement will tell you the truth.</p>
           </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
              <Recycle className="mr-2 h-5 w-5 text-primary" />
              The Link to Dilution
            </CardTitle>
            <CardDescription>High SBC directly leads to shareholder dilution. Here's how to spot and quantify it.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
             <p className="text-sm text-muted-foreground">Go to the Income Statement and look for the "Diluted Weighted Average Shares Outstanding" line. Track this number over the past 5-10 years. If it is consistently increasing, your ownership is being diluted. A healthy, shareholder-friendly company will often have a flat or decreasing share count over time due to share buybacks.</p>
              <Alert variant="default">
                <Info className="h-4 w-4" />
                <AlertTitle className="font-semibold">The Math of Dilution</AlertTitle>
                <AlertDescription>
                 Imagine you own 1,000 shares of a company with 1 million total shares outstanding. You own 0.1% of the company. If the company issues 50,000 new shares to employees (a 5% increase), there are now 1,050,000 total shares. Your 1,000 shares now only represent 0.095% of the company. Your ownership stake has been diluted by about 5%, even if you did nothing.
                </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
              <Wind className="mr-2 h-5 w-5 text-primary" />
              How to Analyze SBC: The Cash Flow Statement is Your Truth Serum
            </CardTitle>
            <CardDescription>Since GAAP accounting requires SBC to be added back on the cash flow statement, it's the best place to find the real number.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ol className="list-decimal pl-5 space-y-2 text-sm">
                <li>Go to the company's <strong>Statement of Cash Flows</strong>.</li>
                <li>Under "Cash Flow from Operating Activities," find the line item for <strong>"Stock-Based Compensation."</strong> This is the total SBC expense for the period.</li>
                <li>Compare this number to <strong>Net Income</strong> and, more importantly, to <strong>Free Cash Flow (FCF)</strong>. FCF is Cash from Operations minus Capital Expenditures.</li>
            </ol>
             <Alert variant="destructive" className="mt-4">
                <Info className="h-4 w-4" />
                <AlertTitle className="font-semibold">A Critical Rule of Thumb</AlertTitle>
                <AlertDescription>
                 If a company's Stock-Based Compensation is consistently greater than its Free Cash Flow, it's a massive red flag. This means the company is paying its employees more in stock than it's generating in actual cash from the business. The business is not self-sustaining and relies on the rising value of its stock to pay its employees, creating a dangerous feedback loop.
                </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you understand this critical concept, return to the Invest Like a Pro roadmap to continue your analysis.
                </CardDescription>
            </CardHeader>
            <CardContent>
                 <Button asChild>
                    <Link href={`/roadmaps/invest-like-a-pro${fromStep ? `#${fromStep}` : ''}`}>
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
