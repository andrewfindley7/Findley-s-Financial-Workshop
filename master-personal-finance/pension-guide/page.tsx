'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Landmark, Scale, Calculator, Calendar, Users, ShieldCheck, Info, ArrowRight, ThumbsDown, ThumbsUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import type { LucideIcon } from 'lucide-react';

const pensionConcepts: { icon: LucideIcon; title: string; description: string; example?: string }[] = [
  {
    icon: Calendar,
    title: "Vesting",
    description: "You must work for a certain period (e.g., 5 years) to become 'vested,' meaning you have a non-forfeitable right to your pension benefits, even if you leave the company before retirement."
  },
  {
    icon: Calculator,
    title: "Benefit Formula",
    description: "The amount you receive is typically calculated with a formula, often: (Years of Service) x (Final Average Salary) x (Multiplier %).",
    example: "If you worked 30 years, had a final average salary of $80,000, and your plan uses a 1.5% multiplier, your annual benefit would be: 30 × $80,000 × 0.015 = $36,000 per year for life."
  },
  {
    icon: Users,
    title: "Payout Options",
    description: "Upon retirement, you can usually choose between a 'single-life annuity' (a monthly payment for your life) or a 'joint-and-survivor annuity' (a smaller payment that continues to your spouse after you pass).",
    example: "A single-life option might pay you $3,000/month. A joint-and-survivor option might pay $2,600/month, but your spouse would continue to receive some portion of it (e.g., 50% or 100%, depending on the plan) after you pass away."
  },
  {
    icon: ShieldCheck,
    title: "PBGC Insurance",
    description: "Many private-sector pensions are insured by the Pension Benefit Guaranty Corporation (PBGC), a federal agency that guarantees a portion of your benefits if your former employer's plan fails."
  }
];

export default function PensionGuidePage() {
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
        <h1 className="text-3xl font-bold font-headline">A Lesson on Pensions (Defined-Benefit Plans)</h1>
        <p className="text-muted-foreground mt-2">Learn about traditional retirement plans where the employer guarantees a specific retirement benefit.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Landmark className="h-4 w-4" />
          <AlertTitle className="font-headline">What is a Pension?</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>A pension, also known as a defined-benefit plan, is a retirement plan where an employer promises to pay a specified monthly amount to an employee upon retirement. The benefit is predetermined based on factors like salary history, years of service, and age, rather than on individual investment returns.</p>
            <p>Pensions are now rare in the private sector but remain common in public sector jobs like government, military, and union positions. With a pension, the employer bears the investment risk, unlike a 401(k) where you manage your own investments.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">Key Concepts</CardTitle>
            <CardDescription>Pensions have unique features that are important to understand.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
            {pensionConcepts.map(concept => (
              <div key={concept.title} className="p-4 border rounded-lg bg-card shadow-sm">
                <div className="flex items-center mb-2">
                  <concept.icon className="mr-2 h-5 w-5 text-primary/80" />
                  <h3 className="font-semibold">{concept.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{concept.description}</p>
                {concept.example && <p className="text-xs italic text-muted-foreground/80 mt-2 bg-muted/50 p-2 rounded-md"><strong>Example:</strong> {concept.example}</p>}
              </div>
            ))}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="font-headline flex items-center">
              <Scale className="mr-2 h-5 w-5 text-primary" />
              Pensions vs. 401(k)s
            </CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            <div className="p-4 border rounded-lg bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800">
              <h3 className="font-semibold flex items-center mb-2 text-blue-800 dark:text-blue-200">
                Pensions (Defined-Benefit)
              </h3>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>Employer funded and managed.</li>
                <li>Provides a predictable, guaranteed income stream in retirement.</li>
                <li>Employer bears all the investment risk.</li>
              </ul>
            </div>
            <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800">
              <h3 className="font-semibold flex items-center mb-2 text-green-800 dark:text-green-200">
                401(k)s (Defined-Contribution)
              </h3>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>Primarily funded by the employee, often with an employer match.</li>
                <li>Retirement income depends on contributions and investment performance.</li>
                <li>Employee bears the investment risk.</li>
              </ul>
            </div>
          </CardContent>
        </Card>
        
         <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">Important Considerations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-base">Taxation of Pension Income</h4>
                <p className="text-sm text-muted-foreground">Pension payouts are taxed as ordinary income at the federal level and, in most cases, at the state level as well. This is similar to how withdrawals from a Traditional IRA or 401(k) are taxed.</p>
              </div>
              <div className="border-t pt-4">
                <h4 className="font-semibold text-base">Lump Sum vs. Monthly Annuity</h4>
                <p className="text-sm text-muted-foreground">Some employers may offer a one-time lump-sum payout instead of monthly payments for life. Choosing between the two is a major financial decision that depends on factors like your health, family longevity, other sources of retirement income, and your comfort level with managing a large investment portfolio yourself.</p>
                <div className="mt-4 grid md:grid-cols-2 gap-4">
                    <div className="p-3 border rounded-lg bg-muted/30">
                        <h5 className="font-semibold mb-2">Monthly Annuity</h5>
                        <div className="space-y-2">
                           <p className="text-sm flex items-start"><ThumbsUp className="h-4 w-4 mr-2 text-green-600 shrink-0 mt-0.5"/> <strong>Pros:</strong> Guaranteed income for life, protection against outliving your money, no investment management required.</p>
                           <p className="text-sm flex items-start"><ThumbsDown className="h-4 w-4 mr-2 text-red-600 shrink-0 mt-0.5"/> <strong>Cons:</strong> Inflexible payments, inflation can erode purchasing power, usually provides less inheritance for heirs.</p>
                        </div>
                    </div>
                    <div className="p-3 border rounded-lg bg-muted/30">
                        <h5 className="font-semibold mb-2">Lump-Sum Payout</h5>
                        <div className="space-y-2">
                           <p className="text-sm flex items-start"><ThumbsUp className="h-4 w-4 mr-2 text-green-600 shrink-0 mt-0.5"/> <strong>Pros:</strong> Flexibility and control, potential for higher investment returns, full amount can be left to heirs.</p>
                           <p className="text-sm flex items-start"><ThumbsDown className="h-4 w-4 mr-2 text-red-600 shrink-0 mt-0.5"/> <strong>Cons:</strong> You bear all investment risk, requires disciplined management, risk of running out of money if mismanaged or due to a market downturn.</p>
                        </div>
                    </div>
                </div>
              </div>
               <div className="border-t pt-4">
                <h4 className="font-semibold text-base">Pension Portability</h4>
                <p className="text-sm text-muted-foreground">Unlike a 401(k), which is your account and goes with you when you change jobs, a traditional pension is tied to your employer. If you leave your job before you are fully vested, you could lose some or all of your future pension benefits. This lack of portability is a key reason why pensions have become less common and 401(k)s more popular in the private sector.</p>
              </div>
          </CardContent>
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
