'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Home, AlertTriangle, TrendingUp, TrendingDown, DollarSign, Ban, CheckCircle, ArrowRight, Lightbulb, ThumbsUp, ThumbsDown, User, Users, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const dangers = [
  {
    icon: TrendingUp,
    title: "Variable Interest Rates",
    description: "Unlike a fixed-rate mortgage, most HELOCs have variable interest rates tied to a benchmark like the Prime Rate. If interest rates rise in the economy, your HELOC payment can increase significantly and unexpectedly, straining your budget."
  },
  {
    icon: TrendingDown,
    title: "The 'Draw Period' and Payment Shock",
    description: "HELOCs typically have an initial 'draw period' (e.g., 10 years) where you can borrow money and may only be required to pay the interest. When this period ends, you enter the 'repayment period.' Your payment can skyrocket because you must now pay back both principal and interest over the remaining term."
  },
  {
    icon: DollarSign,
    title: "Temptation to Fund Consumption",
    description: "Because it’s tied to your home, a HELOC doesn’t feel like 'real debt' such as a credit card. But every swipe is a lien against your house. This 'easy money' feeling creates a strong temptation to use a HELOC to pay for things that lose value, like vacations, cars, or other consumer goods. This is a dangerous way to turn your home equity a valuable asset into bad debt."
  }
];

export default function HelocDangersPage() {
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
        <h1 className="text-3xl font-bold font-headline">The Dangers of HELOCs</h1>
        <p className="text-muted-foreground mt-2">Understanding the risks of a Home Equity Line of Credit before you borrow.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Home className="h-4 w-4" />
          <AlertTitle className="font-headline">What is a HELOC?</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>A Home Equity Line of Credit (HELOC) is a revolving line of credit, similar to a credit card, that is secured by your house. It allows you to borrow money against the equity you've built in your home. While this can provide access to a large amount of cash at a seemingly low interest rate, it comes with significant and often misunderstood risks.</p>
          </AlertDescription>
        </Alert>
        
        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle className="font-headline">The Single Biggest Risk: Your Home is the Collateral</AlertTitle>
          <AlertDescription>
            This is the most important thing to understand. A HELOC is not an unsecured personal loan. If you are unable to make the payments for any reason a job loss, a medical emergency, or rising interest rates the lender can foreclose on your home. You risk losing your house.
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">Key Dangers of Using a HELOC</CardTitle>
            <CardDescription>Beyond the risk of foreclosure, HELOCs have other features that can be financially hazardous.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-1 lg:grid-cols-3 gap-4">
            {dangers.map((item, index) => (
              <div key={item.title} className="p-4 border rounded-lg bg-card shadow-sm flex flex-col">
                <div className="flex items-start mb-2">
                  <item.icon className="mr-3 h-5 w-5 text-destructive flex-shrink-0" />
                  <h3 className="font-semibold">{item.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground flex-grow">{item.description}</p>
                {index === 1 && (
                  <div className="mt-3 pt-3 border-t">
                    <h4 className="text-xs font-semibold text-muted-foreground mb-1">Example: Payment Shock</h4>
                    <p className="text-xs text-muted-foreground">Borrow $50,000 at 6%. Your interest-only payment might be ~$250/month. When repayment begins (e.g., over 20 years), the payment could jump to ~$550/month. If rates rise to 8%, that payment could climb to ~$610/month.</p>
                  </div>
                )}
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-xl">A Tale of Two Homeowners: HELOC Stories</CardTitle>
                <CardDescription>How a HELOC is used is more important than the tool itself.</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-6">
                <div className="p-4 border rounded-lg bg-orange-50 dark:bg-orange-900/30 border-orange-200 dark:border-orange-800">
                    <h3 className="font-semibold flex items-center mb-2 text-orange-800 dark:text-orange-200">
                       <User className="mr-2 h-5 w-5"/> The Bad Outcome: Mike
                    </h3>
                    <p className="text-sm text-muted-foreground">Mike used a HELOC for vacations and a car. The low monthly payments felt manageable. When he lost his job, the payments kept coming. He couldn't afford them, and with his home equity now tied up in debt, he faced the threat of foreclosure.</p>
                </div>
                 <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800">
                    <h3 className="font-semibold flex items-center mb-2 text-green-800 dark:text-green-200">
                       <Users className="mr-2 h-5 w-5"/> The Better Outcome: Sarah
                    </h3>
                    <p className="text-sm text-muted-foreground">Sarah used a HELOC for a modest kitchen remodel that boosted her home's value and her quality of life. She created a strict repayment plan in her budget to pay off the HELOC aggressively in 3 years. She treated it like a project loan, not a piggy bank.</p>
                </div>
            </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">When to Consider vs. When to Avoid a HELOC</CardTitle>
            <CardDescription>A HELOC should be treated as a tool for strategic financial moves, not as a piggy bank.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800">
              <h3 className="font-semibold flex items-center mb-2 text-green-800 dark:text-green-200">
                <CheckCircle className="mr-2 h-5 w-5" /> Potentially Sensible Uses
              </h3>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li><strong>Value-Adding Home Improvements:</strong> Using the funds for a significant home renovation (like a new kitchen or addition) that can increase the value of your home.</li>
                <li><strong>Debt Consolidation (With Caution):</strong> Using a lower-rate HELOC to pay off high-interest credit card debt. This is only a good idea if you have addressed the spending habits that led to the debt in the first place.</li>
              </ul>
            </div>
            <div className="p-4 border rounded-lg bg-red-50 dark:bg-red-900/30 border-red-200 dark:border-red-800">
              <h3 className="font-semibold flex items-center mb-2 text-red-800 dark:text-red-200">
                <Ban className="mr-2 h-5 w-5" /> Uses to Avoid
              </h3>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li><strong>Funding Lifestyle or Consumption:</strong> Paying for vacations, cars, furniture, or daily expenses.</li>
                <li><strong>Speculative Investments:</strong> Using the funds for high-risk investments in the stock market or cryptocurrency.</li>
                <li><strong>Covering a Budget Shortfall:</strong> Using a HELOC to pay regular bills is a sign of a deeper financial issue that needs to be addressed.</li>
              </ul>
            </div>
          </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-xl flex items-center">
                    <Lightbulb className="mr-2 h-5 w-5 text-primary" />
                    The Home Improvement ROI Myth
                </CardTitle>
                <CardDescription>
                    A common reason for using a HELOC is for home improvements, assuming the cost will be recovered in increased home value. This is often not the case.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                    The "Return on Investment" (ROI) for a home improvement project refers to how much of the project's cost you are likely to recoup in the form of a higher sale price. Very few projects have a 100% or greater ROI. You're typically spending money to improve your current quality of life, not as a pure financial investment.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800">
                        <h3 className="font-semibold flex items-center mb-2 text-green-800 dark:text-green-200">
                            <ThumbsUp className="mr-2 h-5 w-5" /> High-ROI Improvements (Often 70-95% ROI)
                        </h3>
                        <p className="text-xs text-muted-foreground mb-2">These projects are functional, appeal to most buyers, and don't involve radical changes to the home's footprint.</p>
                        <ul className="list-disc pl-5 text-sm space-y-1">
                            <li>Minor Kitchen Remodel (e.g., new countertops, refinished cabinets, new appliances)</li>
                            <li>Bathroom Remodel</li>
                            <li>Exterior Improvements (e.g., new siding, paint, garage door)</li>
                            <li>Deck or Patio Addition</li>
                            <li>Basement Finishing</li>
                        </ul>
                    </div>
                    <div className="p-4 border rounded-lg bg-red-50 dark:bg-red-900/30 border-red-200 dark:border-red-800">
                        <h3 className="font-semibold flex items-center mb-2 text-red-800 dark:text-red-200">
                            <ThumbsDown className="mr-2 h-5 w-5" /> Low-ROI Improvements (Often 25-50% ROI)
                        </h3>
                        <p className="text-xs text-muted-foreground mb-2">These projects are often highly personalized, expensive, or have high maintenance costs that don't appeal to all buyers.</p>
                         <ul className="list-disc pl-5 text-sm space-y-1">
                            <li>Swimming Pool Installation</li>
                            <li>Major High-End Kitchen Remodel (e.g., commercial-grade appliances)</li>
                            <li>Sunroom Addition</li>
                            <li>Primary Suite or Major Addition</li>
                            <li>Ornate Landscaping</li>
                        </ul>
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                 <p className="text-xs text-muted-foreground">
                    This doesn't mean you shouldn't do a project you love. It simply means you should view it primarily as a consumption expense for your enjoyment, not a guaranteed financial investment that will pay for itself.
                </p>
            </CardFooter>
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

    