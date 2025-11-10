'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Brain, ArrowRight, Lightbulb, PiggyBank, Briefcase, Landmark, ShieldCheck, PieChart, Route, RotateCw, Activity, TrendingUp, Wallet, Info } from 'lucide-react';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

const bucketDefinitions = [
  {
    icon: ShieldCheck,
    title: "Short-Term Bucket (The Safety Zone)",
    timeframe: "Immediate → ~3 years",
    purpose: "Liquidity and capital preservation for near-term predictable goals. The priority is 100% safety and immediate access, not market returns.",
    tools: ["High-Yield Savings Account (HYSA)", "Money Market Funds", "Certificates of Deposit (CDs)", "Short-Term T-bills"]
  },
  {
    icon: TrendingUp,
    title: "Mid-Term Bucket (The Growth Zone)",
    timeframe: "~3 years → until your goal's 'safety zone'",
    purpose: "Goals that are far enough away to benefit from market growth. The priority is maximizing compound growth using broad, diversified equity investments.",
    tools: ["Taxable Brokerage Account", "Low-Cost, Broad-Market ETFs (e.g., VTI, S&P 500)", "Index Funds"]
  },
  {
    icon: Landmark,
    title: "Retirement Bucket",
    timeframe: "Retirement",
    purpose: "Long-term wealth to fund your retirement years. The priority is maximizing tax advantages and long-term growth.",
    tools: ["401(k) / 403(b)", "Roth & Traditional IRAs", "Health Savings Account (HSA)"]
  }
];

const bucketMapExercise = [
    "List each financial goal and its target year (e.g., Down Payment - 4 years; Kid's College - 15 years; Retirement - 25 years).",
    "Apply the decision rule: If Target ≤ 3 years → Short-Term Bucket. If Target > 3 years AND < Retirement Date → Mid-Term Bucket. If Purpose = Retirement → Retirement Bucket.",
    "Assign a primary tool for each goal based on the allocation guidance (e.g., Down Payment in 4 years → Mid-Term Bucket, using a low-cost ETF; Car in 2 years → Short-Term Bucket, using an HYSA).",
    "Decide where your next $1,000 of savings will go, and set up an automatic transfer to make it happen."
];

const decisionRules = [
    "If you need the money within ~3 years → Short-term Bucket (Safety Zone).",
    "If you’ll need it later than ~3 years BUT before your planned retirement date → Mid-term Bucket (Growth Zone).",
    "If the money's purpose is to fund your income in retirement → Retirement Bucket."
];

const allocationGuidance = [
    { bucket: 'Short-Term (0-3 years)', allocation: 'Cash equivalents only. HYSA, Money Market, CDs, T-bills. Stocks should be avoided due to short-term volatility.', icon: Wallet },
    { bucket: 'Mid-Term (3+ years)', allocation: 'Full equity exposure. A 100% equity allocation in a low-cost, broad-market index fund or ETF is the most effective strategy for maximizing growth over this time horizon.', icon: PieChart },
    { bucket: 'Retirement Bucket', allocation: 'Use tax-advantaged accounts first (IRAs, 401(k), HSA). Aim for a long-term, high-equity allocation (e.g., 80-100% stocks) that aligns with your risk tolerance and time to retirement.', icon: Landmark }
];


export default function ActionBucketMapPage() {
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
        <h1 className="text-3xl font-bold font-headline">Action: Build Your Bucket Map</h1>
        <p className="text-muted-foreground mt-2">An exercise to translate the 'multi-bucket' strategy into a clear, personal financial plan.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Brain className="h-4 w-4" />
          <AlertTitle className="font-headline">The Goal: From Theory to Action</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
             <p>Buckets are about WHAT the money must do, not just arbitrary years. This exercise will help you create a personalized map for your money, assigning every savings dollar to a specific job and choosing the right tool for that job.</p>
          </AlertDescription>
        </Alert>
        
        <Card className="shadow-lg border-primary/50">
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
                <Activity className="mr-2 h-5 w-5 text-primary"/>
                The Bucket Map Exercise
            </CardTitle>
            <CardDescription>Grab a notebook or open a new document and work through these 4 steps.</CardDescription>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal pl-5 space-y-4">
                {bucketMapExercise.map((step, i) => <li key={i} className="text-sm pl-2">{step}</li>)}
            </ol>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">The 3 Financial Buckets (Reference)</CardTitle>
            <CardDescription>Forget fixed timelines; think about purpose.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-3 gap-4">
            {bucketDefinitions.map(bucket => (
              <div key={bucket.title} className="p-4 border rounded-lg bg-card shadow-sm flex flex-col">
                <div className="flex items-center mb-2">
                  <bucket.icon className="mr-2 h-5 w-5 text-primary/80" />
                  <h3 className="font-semibold">{bucket.title}</h3>
                </div>
                 <p className="text-xs font-bold text-muted-foreground mb-2">{bucket.timeframe}</p>
                <p className="text-sm text-muted-foreground mb-3 flex-grow">{bucket.purpose}</p>
                <div className="text-xs bg-secondary text-secondary-foreground p-2 rounded-md border border-secondary/30">
                    <p className="font-semibold mb-1">Primary Tools:</p>
                    <ul className="list-disc pl-4 space-y-1">
                        {bucket.tools.map(tool => <li key={tool}>{tool}</li>)}
                    </ul>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-xl flex items-center">
                    <Route className="mr-2 h-5 w-5 text-primary"/>
                    Guidelines & Rules (Reference)
                </CardTitle>
                 <CardDescription>Use these rules to help you categorize goals and choose the right accounts.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Your Decision Rule: How to Categorize Any Goal</h4>
                   <ul className="list-disc pl-5 space-y-3 text-sm font-medium">
                      {decisionRules.map(rule => <li key={rule}>{rule}</li>)}
                  </ul>
                   <Separator className="my-4" />
                   <h4 className="font-semibold mb-2">Practical Examples:</h4>
                   <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div className="p-3 bg-muted/40 rounded-md">
                          <p className="font-semibold">Scenario A: Retiring in 10 years, buying a house in 4.</p>
                          <ul className="list-disc pl-5 mt-1 space-y-1">
                              <li>House Goal (4 years): Mid-Term Bucket. Use a taxable brokerage with a broad-market ETF.</li>
                              <li>Retirement Goal (10 years): Retirement Bucket. Use 401(k)/IRA with a moderate equity allocation.</li>
                          </ul>
                      </div>
                      <div className="p-3 bg-muted/40 rounded-md">
                          <p className="font-semibold">Scenario B: Retiring in 40 years, buying a house in 4.</p>
                          <ul className="list-disc pl-5 mt-1 space-y-1">
                              <li>House Goal (4 years): Mid-Term Bucket. Same tools as Scenario A.</li>
                              <li>Retirement Goal (40 years): Retirement Bucket. Use 401(k)/IRA with a heavy equity allocation.</li>
                          </ul>
                      </div>
                  </div>
                </div>

                <Separator />

                <div>
                    <h4 className="font-semibold mb-2">Asset Allocation & Account Routing Rules</h4>
                    <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2 text-sm">Suggested Asset Allocation by Horizon:</h4>
                          <div className="space-y-3">
                          {allocationGuidance.map(item => (
                              <div key={item.bucket} className="p-3 border-l-4 rounded-r-md flex items-start gap-3 bg-muted/50">
                                  <item.icon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                  <div>
                                      <p className="font-semibold text-sm">{item.bucket}</p>
                                      <p className="text-xs text-muted-foreground">{item.allocation}</p>
                                  </div>
                              </div>
                          ))}
                          </div>
                      </div>
                      <div className="space-y-3">
                           <Alert variant="destructive" className="bg-amber-50/50 border-amber-300 dark:bg-amber-900/30">
                              <Info className="h-4 w-4 text-amber-500"/>
                              <AlertTitle className="font-semibold text-amber-800 dark:text-amber-200">The Penalty Risk Rule</AlertTitle>
                              <AlertDescription className="text-amber-700 dark:text-amber-300">
                                 Short-term and mid-term goal funds should not live in retirement accounts (like a 401(k) or IRA). Accessing this money before retirement age can result in significant taxes and penalties. Use HYSAs, CDs, and taxable brokerage accounts for these goals.
                              </AlertDescription>
                           </Alert>
                            <Alert className="mt-3">
                              <Landmark className="h-4 w-4"/>
                              <AlertTitle className="font-semibold">The Tax-Advantaged Rule</AlertTitle>
                              <AlertDescription>
                                 Money intended for retirement should always be prioritized into tax-advantaged accounts (401(k), IRA, HSA) first, up to the annual contribution limits. Only use a taxable account for retirement savings after all tax-advantaged options are maxed out.
                              </AlertDescription>
                           </Alert>
                      </div>
                    </div>
                </div>
                
                 <Separator />
                 
                  <div>
                    <h4 className="font-semibold mb-2 text-primary flex items-center">
                        <RotateCw className="mr-2 h-5 w-5"/>
                        Guardrail: The De-Risking Transition
                    </h4>
                    <p className="text-sm text-muted-foreground">Your financial plan is a living document. The most important rule is to protect your money as a goal approaches. When a mid-term goal (like a house down payment) gets into the 3-year "safety zone," you must de-risk those funds. This means gradually selling your equities from the taxable account and moving the money into a safe, cash-equivalent vehicle like a CD ladder or HYSA. This protects you from being forced to sell your investments during a market downturn right when you need the cash.</p>
                    <p className="text-sm text-muted-foreground mt-2">If the market is down when you hit the 3-year mark, you may choose to delay this de-risking, but that adds significant risk to your plan.</p>
                  </div>
            </CardContent>
        </Card>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    You now have a personalized map for your money. Return to the main roadmap to continue your journey.
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
