'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Sigma, ArrowRight, Brain, ThumbsUp, ThumbsDown, Info, Calculator, Wind, Percent, InfinityIcon, Lightbulb, AlertTriangle, FileText, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const dcfComponents = [
  {
    icon: Wind,
    title: "1. Forecast Future Free Cash Flows (FCF)",
    description: "This is the most critical and difficult part. You must project the company's free cash flow (the cash left over after all operating expenses and capital expenditures) for a specific period, typically 5-10 years. This requires a deep understanding of the business, its industry, and its growth prospects.",
    extraContent: (
      <Alert variant="default" className="mt-4 text-sm bg-blue-50 dark:bg-blue-900/30 border-blue-200">
        <Lightbulb className="h-4 w-4" />
        <AlertTitle className="font-semibold">A Sign of Quality Management</AlertTitle>
        <AlertDescription>
          While you often have to create your own forecasts, some superior management teams lay out their plans and expectations clearly. For example, Bruce Flatt of Brookfield Corporation is known for providing detailed 5-year growth plans in investor day presentations, complete with graphs and reasoning. When a management team with a strong track record provides such forecasts, it can be a valuable starting point for your own analysis.
        </AlertDescription>
      </Alert>
    ),
  },
  {
    icon: Percent,
    title: "2. Determine a Discount Rate",
    description: "Since a dollar in the future is worth less than a dollar today, you need a 'discount rate' to calculate the present value of those future cash flows. This rate reflects the risk of the investment and represents the return investors demand to compensate for that risk. A common choice is the Weighted Average Cost of Capital (WACC), which is the blended cost of a company's debt and equity.",
    extra: "A higher discount rate (for a riskier business) will result in a lower present value."
  },
  {
    icon: InfinityIcon,
    title: "3. Calculate the Terminal Value",
    description: "A business is expected to operate beyond the 5-10 year forecast period. The Terminal Value is an estimate of the company's value at the end of the forecast period, representing the present value of all its cash flows from that point into perpetuity. For example, if a company’s cash flow is expected to grow at a steady 3% per year after year 10, the terminal value reflects the worth of that steady growth forever.",
    extra: "Terminal Value often accounts for a very large portion (sometimes over 70%) of the total DCF valuation, making it a very sensitive input."
  },
  {
    icon: Calculator,
    title: "4. Discount and Sum Everything Up",
    description: "Each projected future cash flow, along with the terminal value, is discounted back to what it would be worth in today's money. Summing up all these present values gives you the total estimated intrinsic value of the business (Enterprise Value). After subtracting net debt, you get the Equity Value, which you can divide by the number of shares to get an intrinsic value per share."
  }
];


export default function DcfAnalysisPage() {
    const searchParams = useSearchParams();
    const fromStep = searchParams?.get('from');
  return (
    <>
      <Alert variant="destructive" className="mb-6 bg-amber-50 dark:bg-amber-900/20 border-amber-300 dark:border-amber-700">
          <Info className="h-4 w-4 text-amber-500" />
          <AlertDescription className="text-amber-800 dark:text-amber-300 text-xs">
              For educational use only. Not financial or tax advice. Consult a licensed advisor before making major decisions.
          </AlertDescription>
      </Alert>
      <div className="mb-8">
        <h1 className="text-3xl font-bold font-headline">Discounted Cash Flow (DCF) Analysis</h1>
        <p className="text-muted-foreground mt-2">An introduction to one of the most fundamental methods for determining a company's intrinsic value.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Sigma className="h-4 w-4" />
          <AlertTitle className="font-headline">What is DCF Analysis?</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>A Discounted Cash Flow (DCF) analysis is a valuation method used to estimate the value of an investment based on its expected future cash flows. The core idea behind DCF is that the value of any asset is the sum of all the cash it will generate for its owners over its lifetime, with each of those future cash flows being 'discounted' back to what they are worth in today's dollars.</p>
            <p className="font-semibold">In essence, it answers the question: "What is a fair price to pay today for a stream of cash I expect to receive in the future?"</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">The Core Components of a DCF Model</CardTitle>
            <CardDescription>A DCF analysis involves four key steps.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {dcfComponents.map(item => (
              <div key={item.title} className="p-4 border rounded-lg bg-card shadow-sm">
                <div className="flex items-center mb-2">
                  <item.icon className="mr-3 h-5 w-5 text-primary" />
                  <h3 className="font-semibold">{item.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
                {item.extra && <p className="text-xs italic text-muted-foreground mt-2">{item.extra}</p>}
                 {item.extraContent}
              </div>
            ))}
             <Alert variant="default" className="mt-4 bg-blue-50 dark:bg-blue-900/30 border-blue-200">
                <Info className="h-4 w-4" />
                <AlertTitle className="font-semibold">The Formula in Plain English</AlertTitle>
                <AlertDescription>
                    <p className="mb-2">Though it looks complex, the formula simply adds up all future cash flows, adjusted for time and risk.</p>
                    <p className="font-mono text-xs md:text-sm bg-muted p-2 rounded-md">Intrinsic Value = (FCF Year 1 / (1+r)^1) + (FCF Year 2 / (1+r)^2) + ... + (FCF Year N + Terminal Value) / (1+r)^N</p>
                    <p className="text-xs mt-2">Where 'FCF' is the free cash flow for that year and 'r' is the discount rate.</p>
                </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-xl flex items-center"><Calculator className="mr-2 h-5 w-5 text-primary"/>A Simple DCF in Action: Step-by-Step</CardTitle>
                <CardDescription>In practice, analysts might use more complex models or variable growth rates, but this simple case illustrates the core logic.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div>
                    <h4 className="font-semibold text-lg">The Setup: Gathering Inputs</h4>
                    <p className="text-sm text-muted-foreground mb-3">After reviewing financial statements, management's guidance, and future prospects, we determine that a 10% growth rate for the next 5 years is a reasonable assumption, moderating from past growth but still strong. We then assume a conservative 3% perpetual growth rate, in line with long-term economic growth.</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                        <div className="p-2 border rounded-md bg-muted/50"><span className="font-semibold">Current Market Price:</span> $30.00</div>
                        <div className="p-2 border rounded-md bg-muted/50"><span className="font-semibold">TTM FCF:</span> $100M</div>
                        <div className="p-2 border rounded-md bg-muted/50"><span className="font-semibold">Growth (Y1-5):</span> 10%</div>
                        <div className="p-2 border rounded-md bg-muted/50"><span className="font-semibold">Perpetual Growth:</span> 3%</div>
                        <div className="p-2 border rounded-md bg-muted/50"><span className="font-semibold">Discount Rate:</span> 9%</div>
                        <div className="p-2 border rounded-md bg-muted/50"><span className="font-semibold">Shares Outstanding:</span> 50M</div>
                        <div className="p-2 border rounded-md bg-muted/50"><span className="font-semibold">Net Debt:</span> $200M</div>
                    </div>
                     <Alert variant="default" className="mt-3 text-xs bg-blue-50 dark:bg-blue-900/30 border-blue-200">
                        <Info className="h-4 w-4"/>
                        <AlertDescription>
                           For simplicity, this model assumes the number of shares outstanding remains constant. A more detailed analysis would project future share count changes based on the company's history of buybacks or issuances.
                        </AlertDescription>
                    </Alert>
                </div>

                <div className="space-y-3">
                    <h4 className="font-semibold text-lg">Step 1: Project Free Cash Flows (Years 1-5)</h4>
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader><TableRow><TableHead>Year</TableHead><TableHead className="text-right">FCF</TableHead></TableRow></TableHeader>
                            <TableBody>
                                <TableRow><TableCell>1</TableCell><TableCell className="text-right">$110.0M</TableCell></TableRow>
                                <TableRow><TableCell>2</TableCell><TableCell className="text-right">$121.0M</TableCell></TableRow>
                                <TableRow><TableCell>3</TableCell><TableCell className="text-right">$133.1M</TableCell></TableRow>
                                <TableRow><TableCell>4</TableCell><TableCell className="text-right">$146.4M</TableCell></TableRow>
                                <TableRow><TableCell>5</TableCell><TableCell className="text-right">$161.1M</TableCell></TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </div>

                <div className="space-y-3">
                    <h4 className="font-semibold text-lg">Step 2: Calculate Terminal Value</h4>
                    <p className="text-sm text-muted-foreground">We use the Gordon Growth Model (Perpetuity Growth Method) to estimate the value of all cash flows after Year 5, assuming a perpetual 3% growth rate.</p>
                    <p className="font-mono text-xs bg-muted p-2 rounded-md">Terminal Value = (Year 5 FCF * (1 + Perpetual Growth)) / (Discount Rate - Perpetual Growth)</p>
                    <p className="font-mono text-xs bg-muted p-2 rounded-md">= ($161.1M * 1.03) / (0.09 - 0.03) = $165.9M / 0.06 = <span className="font-bold">$2,765M</span></p>
                    <Alert variant="default" className="text-sm bg-blue-50 dark:bg-blue-900/30 border-blue-200">
                        <Lightbulb className="h-4 w-4" />
                        <AlertTitle className="font-semibold">Alternative: The Exit Multiple Method</AlertTitle>
                        <AlertDescription>
                            Another common way to calculate Terminal Value is to apply a reasonable valuation multiple (like P/FCF or EV/EBITDA) to the final year's cash flow. For example, if you assume the business will be worth 15x its FCF in Year 5, the Terminal Value would be $161.1M * 15 = $2,416.5M. Analysts often use both methods as a cross-check.
                        </AlertDescription>
                    </Alert>
                </div>

                <div className="space-y-3">
                    <h4 className="font-semibold text-lg">Step 3: Discount All Future Cash Flows to Present Value</h4>
                    <p className="text-sm text-muted-foreground">Each future cash flow is converted into today's dollars using our 9% discount rate. This adjustment ensures that long-term value isn’t overstated simply because it occurs far in the future.</p>
                     <div className="overflow-x-auto">
                        <Table>
                            <TableHeader><TableRow><TableHead>Year</TableHead><TableHead className="text-right">Future Value</TableHead><TableHead className="text-right">Discount Factor (1/(1+0.09)^n)</TableHead><TableHead className="text-right">Present Value</TableHead></TableRow></TableHeader>
                            <TableBody>
                                <TableRow><TableCell>1</TableCell><TableCell className="text-right">$110.0M</TableCell><TableCell className="text-right">0.917</TableCell><TableCell className="text-right">$100.9M</TableCell></TableRow>
                                <TableRow><TableCell>2</TableCell><TableCell className="text-right">$121.0M</TableCell><TableCell className="text-right">0.842</TableCell><TableCell className="text-right">$101.9M</TableCell></TableRow>
                                <TableRow><TableCell>3</TableCell><TableCell className="text-right">$133.1M</TableCell><TableCell className="text-right">0.772</TableCell><TableCell className="text-right">$102.8M</TableCell></TableRow>
                                <TableRow><TableCell>4</TableCell><TableCell className="text-right">$146.4M</TableCell><TableCell className="text-right">0.708</TableCell><TableCell className="text-right">$103.6M</TableCell></TableRow>
                                <TableRow><TableCell>5</TableCell><TableCell className="text-right">$161.1M</TableCell><TableCell className="text-right">0.650</TableCell><TableCell className="text-right">$104.7M</TableCell></TableRow>
                                <TableRow><TableCell className="italic">Terminal Value (at end of Y5)</TableCell><TableCell className="text-right italic">$2,765M</TableCell><TableCell className="text-right italic">0.650</TableCell><TableCell className="text-right italic">$1,797.3M</TableCell></TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </div>

                 <div className="space-y-3">
                    <h4 className="font-semibold text-lg">Step 4: Calculate Intrinsic Value Per Share</h4>
                    <p className="text-sm text-muted-foreground">Sum up the present values to find the company's total value, then adjust for debt and shares to find the per-share value.</p>
                    <div className="p-3 border rounded-lg bg-muted/40 space-y-2 text-sm">
                        <div className="flex justify-between"><span>Sum of Present Values of FCF (Y1-5):</span><span>$513.9M</span></div>
                        <div className="flex justify-between"><span>Present Value of Terminal Value:</span><span>$1,797.3M</span></div>
                        <div className="flex justify-between font-bold border-t pt-2"><span className="text-primary">Enterprise Value (Total Business Value):</span><span className="text-primary">$2,311.2M</span></div>
                        <div className="flex justify-between"><span>- Net Debt:</span><span>($200.0M)</span></div>
                        <div className="flex justify-between font-bold"><span className="text-primary">Equity Value (Value to Shareholders):</span><span className="text-primary">$2,111.2M</span></div>
                        <div className="flex justify-between"><span>÷ Shares Outstanding:</span><span>50.0M</span></div>
                        <div className="flex justify-between font-bold text-lg border-t pt-2 text-green-600"><span>Intrinsic Value Per Share:</span><span>$42.22</span></div>
                    </div>
                    <Alert variant="default" className="mt-4 bg-blue-50 dark:bg-blue-900/30 border-blue-200">
                        <Info className="h-4 w-4" />
                        <AlertTitle className="font-bold">Conclusion: Is It a Good Buy?</AlertTitle>
                        <AlertDescription>
                            <p>Our analysis suggests an intrinsic value of <strong>$42.22 per share</strong>. Compared to the current market price of <strong>$30.00</strong>, this indicates the stock is potentially undervalued by about <strong>41%</strong>.</p>
                            <p className="mt-2">This significant gap between price and value represents a strong <strong>margin of safety</strong>, making SteadyCo an attractive investment opportunity based on this analysis.</p>
                        </AlertDescription>
                    </Alert>
                </div>
            </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
              <Brain className="mr-2 h-5 w-5 text-primary" />
              The Art and Science of DCF: Strengths and Weaknesses
            </CardTitle>
            <CardDescription>A DCF is a powerful tool, but it's important to understand its limitations.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/30 border-green-200">
              <h3 className="font-semibold flex items-center mb-2 text-green-700 dark:text-green-300">
                <ThumbsUp className="mr-2 h-5 w-5" /> Strengths
              </h3>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li><strong>Based on Fundamentals:</strong> It focuses on a company's ability to generate cash, which is the ultimate driver of value.</li>
                <li><strong>Independent of Market Mood:</strong> Unlike valuation multiples, a DCF is not based on current market sentiment or what other companies are trading at. It's a measure of intrinsic value.</li>
                <li><strong>Forces Detailed Analysis:</strong> Building a DCF forces you to think critically about all aspects of a business, from its growth drivers to its risk factors.</li>
              </ul>
            </div>
            <div className="p-4 border rounded-lg bg-red-50 dark:bg-red-900/30 border-red-200">
              <h3 className="font-semibold flex items-center mb-2 text-red-700 dark:text-red-300">
                <ThumbsDown className="mr-2 h-5 w-5" /> Weaknesses
              </h3>
              <ul className="list-disc pl-5 text-sm space-y-2">
                <li>
                  <strong>Highly Sensitive to Assumptions:</strong> Small changes in the discount rate or growth rate assumptions can lead to vastly different valuations. Smart analysts run multiple DCF scenarios—base, bull, and bear—to test how sensitive the value is to these assumptions.
                  <Alert variant="destructive" className="mt-2 text-xs">
                     <AlertTriangle className="h-4 w-4" />
                     <AlertTitle>Warning: The Danger of Optimism</AlertTitle>
                     <AlertDescription>
                        A DCF is a tool for rational analysis, not a machine for confirming your own biases. Using overly optimistic growth rates grounded in euphoria instead of logic will produce a high valuation, but it creates an illusion of precision that often leads to poor investment outcomes.
                     </AlertDescription>
                  </Alert>
                </li>
                <li><strong>Terminal Value Dominance:</strong> The terminal value often represents a huge portion of the total value, making the valuation heavily dependent on this single, long-term estimate.</li>
                <li><strong>Difficult for Unpredictable Businesses:</strong> DCF works best for stable, predictable companies. It's very difficult to use for startups, cyclical companies, or businesses without a clear history of cash flow.</li>
                 <li><strong>Multiple Compression Risk:</strong> A key risk is assuming a company's future exit multiple will be the same as today's. A high-growth company trading at 30x FCF today may mature into a slower-growth company that only warrants a 15x FCF multiple in ten years. This "multiple compression" can significantly reduce returns, even if the business performs well.</li>
              </ul>
            </div>
          </CardContent>
          <CardFooter>
            <Alert variant="default" className="w-full">
                <Info className="h-4 w-4" />
                <AlertTitle>How Professionals Use It</AlertTitle>
                <AlertDescription>
                    Analysts often cross-check a DCF result against valuation multiples to ensure it aligns with market reality. A DCF is a tool to build conviction, not a magic number generator.
                </AlertDescription>
            </Alert>
          </CardFooter>
        </Card>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">A Tool for Thinking</CardTitle>
                <CardDescription>
                   Mastering DCF is not about perfect prediction, it is about disciplined thinking. It teaches you to view companies as streams of cash, not just tickers on a screen.
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
