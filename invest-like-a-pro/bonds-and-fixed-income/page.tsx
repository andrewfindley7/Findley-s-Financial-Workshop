'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { FileText, ArrowRight, TrendingUp, TrendingDown, Scale, Info, Building, ShieldCheck, Banknote } from 'lucide-react';
import Link from 'next/link';

const bondTypes = [
  {
    icon: ShieldCheck,
    title: "Government Bonds (Treasuries)",
    description: "Issued by national governments, like U.S. Treasuries. They are considered the safest investments because they are backed by the full faith and credit of the government, meaning the risk of default is virtually zero.",
  },
  {
    icon: Building,
    title: "Corporate Bonds",
    description: "Issued by companies to raise capital for things like expansion or operations. They offer higher yields than government bonds to compensate for a higher level of credit risk (the risk the company can't repay its debt).",
  },
  {
    icon: Banknote,
    title: "Municipal Bonds ('Munis')",
    description: "Issued by states, cities, or other local governments to fund public projects like schools or highways. A key feature is that their interest income is often exempt from federal income tax, making them attractive to high-income investors.",
  }
];

const bondRisks = [
  {
    icon: TrendingUp,
    title: "Interest Rate Risk",
    description: "This is the most fundamental risk. If interest rates rise in the market, newly issued bonds will have higher yields, making your existing, lower-yield bond less attractive. As a result, the market price of your bond will fall."
  },
  {
    icon: TrendingDown,
    title: "Credit Risk (or Default Risk)",
    description: "This is the risk that the bond issuer will be unable to make its promised interest payments or repay the principal at maturity. Government bonds have very low credit risk, while corporate 'junk' bonds have very high credit risk."
  },
  {
    icon: Scale,
    title: "Inflation Risk",
    description: "This is the risk that the rate of inflation will be higher than the fixed interest rate of your bond. If your bond pays a 3% coupon but inflation is at 4%, your investment is losing purchasing power in 'real' terms."
  }
];


export default function BondsFixedIncomePage() {
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
        <h1 className="text-3xl font-bold font-headline">Bonds & Fixed Income</h1>
        <p className="text-muted-foreground mt-2">Learn what a bond is, its role in a portfolio, and the different types you can invest in.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <FileText className="h-4 w-4" />
          <AlertTitle className="font-headline">What is a Bond?</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>A bond is a loan made by an investor to a borrower. The borrower could be a corporation or a government. In return for the loan, the borrower promises to pay the investor periodic interest payments (called 'coupons') for a specified period of time. At the end of that period (the 'maturity date'), the borrower repays the original amount of the loan, known as the 'principal' or 'face value'.</p>
            <p className="font-semibold">Unlike stocks, which represent ownership, bonds represent debt. This makes them a fundamentally different type of investment.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">The Role of Bonds in a Portfolio</CardTitle>
            <CardDescription>Bonds are designed more for preserving wealth than rapidly growing it. Their main purposes are income generation and portfolio stability.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/20 border-green-200">
                <h3 className="font-semibold mb-1 text-green-700 dark:text-green-300">Income Generation</h3>
                <p className="text-sm text-muted-foreground">Bonds provide predictable interest payments, which can serve as a steady income stream. This is especially valuable for retirees who are living off their investments.</p>
            </div>
            <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/20 border-green-200">
                <h3 className="font-semibold mb-1 text-green-700 dark:text-green-300">Diversification & Stability</h3>
                <p className="text-sm text-muted-foreground">Bond prices often move independently or even opposite to stock prices. During stock market downturns, investors often seek the safety of high-quality bonds, which can help smooth out a portfolio's overall volatility.</p>
            </div>
          </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-xl">Anatomy of a Bond</CardTitle>
                 <CardDescription>A bond is defined by a few key characteristics.</CardDescription>
            </CardHeader>
            <CardContent>
                <ul className="list-disc pl-5 space-y-4 text-sm">
                    <li>
                        <strong>Face Value (Par Value):</strong> This is the amount the bond will be worth at maturity, and it's the reference amount the issuer uses when calculating interest payments. Think of it as the original loan amount, often $1,000 per bond.
                    </li>
                    <li>
                        <strong>Coupon Rate:</strong> The fixed annual interest rate the issuer pays the bondholder, expressed as a percentage of the face value. A 5% coupon on a $1,000 bond means you receive $50 in interest per year.
                    </li>
                    <li>
                        <strong>Maturity Date:</strong> This is the date on which the bond 'matures,' and the issuer repays the face value to the bondholder, concluding the loan. Maturities can be short-term (under 3 years), medium-term (3-10 years), or long-term (over 10 years).
                    </li>
                </ul>
                <Alert variant="default" className="mt-4 text-xs bg-callout text-callout-foreground border-blue-200 dark:border-blue-800">
                    <Info className="h-4 w-4" />
                    <AlertTitle>Example</AlertTitle>
                    <AlertDescription>
                        You buy a 5-year bond with a $1,000 face value and a 4% coupon rate. You will receive $40 in interest each year for five years. At the end of the five years, you get your original $1,000 principal back.
                    </AlertDescription>
                </Alert>
            </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">Main Types of Bonds</CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-3 gap-4">
            {bondTypes.map(item => (
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
            <CardTitle className="font-headline text-xl">Key Risks of Bond Investing</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
             {bondRisks.map(item => (
                 <div key={item.title} className="p-3 border-b last:border-b-0">
                    <h4 className="font-semibold flex items-center"><item.icon className="mr-2 h-4 w-4"/>{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                 </div>
             ))}
          </CardContent>
        </Card>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you understand the fundamentals of what a bond is, proceed to the next lesson to learn how professionals analyze the bond market to gauge the health of the economy.
                </CardDescription>
            </CardHeader>
            <CardContent>
                 <Button asChild>
                    <Link href={`/roadmaps/invest-like-a-pro${fromStep ? `?from=${fromStep}` : ''}`}>
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
