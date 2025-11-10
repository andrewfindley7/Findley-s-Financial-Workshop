'use client';

import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Home, Car, Scale, Percent, CalculatorIcon, ArrowRight, Lightbulb, TrendingUp, Brain, Info } from 'lucide-react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

const housingRules = [
  {
    icon: Percent,
    title: "The 35% Rule (Front-End Ratio)",
    description: "Your total monthly housing payment (whether it's a mortgage PITI payment or your monthly rent) should not exceed 35% of your gross monthly income. While this is a common upper limit for lenders, an ideal ratio for comfortable budgeting is closer to <strong>28%</strong>.",
    example: "If your gross monthly income is $6,000, your total housing payment (rent or mortgage) should ideally be under $1,680 (28%), but not exceed $2,100 (35%)."
  },
  {
    icon: Scale,
    title: "The 45% Rule (Back-End Ratio)",
    description: "Your total monthly debt payments (including your new housing payment, plus car loans, student loans, and credit card payments) should not exceed 45% of your gross monthly income. Lenders use this as a maximum, but an ideal ratio is closer to <strong>36%</strong> to maintain financial flexibility.",
    example: "With a $6,000 gross monthly income, your total debt payments should ideally be under $2,160 (36%), but not exceed $2,700 (45%)."
  }
];

const carRules = [
  {
    icon: Percent,
    title: "The 20/4/10 Rule",
    description: "A popular guideline for car buying to keep transportation costs from overwhelming your budget.",
    breakdown: [
        "<strong>20% Down Payment:</strong> Make a down payment of at least 20% of the purchase price to minimize your loan amount and avoid being 'underwater' on your loan.",
        "<strong>4-Year Loan Term:</strong> Finance the car for no more than four years (48 months). Longer loan terms can hide a car's true cost behind lower monthly payments.",
        "<strong>10% of Gross Income:</strong> Your total monthly car expenses (including loan payment and insurance) should not exceed 10% of your gross monthly income."
    ]
  }
];

export default function MajorPurchaseGuidePage() {
    const searchParams = useSearchParams();
    const fromStep = searchParams.get('from');

    const [monthlyRent, setMonthlyRent] = useState<number | string>('');
    const [grossIncome, setGrossIncome] = useState<number | string>('');
    const [rentRatio, setRentRatio] = useState<number | null>(null);

    useEffect(() => {
        const rent = Number(monthlyRent);
        const income = Number(grossIncome);
        if (rent > 0 && income > 0) {
            setRentRatio((rent / income) * 100);
        } else {
            setRentRatio(null);
        }
    }, [monthlyRent, grossIncome]);
    

  return (
    <>
      <Alert variant="destructive" className="mb-6 bg-amber-50 dark:bg-amber-900/20 border-amber-300 dark:border-amber-700">
          <Info className="h-4 w-4 text-amber-500" />
          <AlertDescription className="text-amber-800 dark:text-amber-300 text-xs">
              For educational use only. Not financial or tax advice. Consult a licensed advisor before making major decisions.
          </AlertDescription>
      </Alert>
      <div className="mb-8">
        <h1 className="text-3xl font-bold font-headline">How to Make Major Purchases</h1>
        <p className="text-muted-foreground mt-2">Learn how to determine what you can comfortably afford for the two biggest expenses: housing and transportation.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Lightbulb className="h-4 w-4" />
          <AlertTitle className="font-headline">Get the Big Decisions Right</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>Buying too much house or car isn’t just a financial slip, it can set you back a decade. A mortgage or car loan that’s too big doesn’t just drain your wallet, it crowds out your ability to save, invest, and live freely.</p>
            <p className="font-semibold">These guidelines are designed to prevent you from becoming 'house-poor' or 'car-poor,' where too much of your income is consumed by a single asset.</p>
          </AlertDescription>
        </Alert>

        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-xl flex items-center">
                    <Brain className="mr-2 h-5 w-5 text-primary" />
                    The Hidden Costs: Opportunity Cost & Psychology
                </CardTitle>
                <CardDescription>Why do people overspend on housing and cars? Understanding these traps is the first step to avoiding them.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div>
                    <h4 className="font-semibold flex items-center mb-2"><TrendingUp className="mr-2 h-4 w-4"/>The Real Cost is the Opportunity Cost</h4>
                    <p className="text-sm text-muted-foreground">The price of overspending isn't just the extra money spent each month; it's the future wealth you're sacrificing.</p>
                     <ul className="list-disc pl-5 mt-2 space-y-2 text-sm text-muted-foreground">
                        <li>Spending 40% of your income on housing instead of the recommended 28%? On a $6,000 monthly income, that extra $720/month could have become over <strong>$500,000</strong> if invested over 30 years.</li>
                        <li>Buying a car that eats 20% of your income instead of 10%? That difference could be a down payment on a house in just a few years.</li>
                    </ul>
                </div>
                 <Separator className="my-4" />
                <div>
                    <h4 className="font-semibold flex items-center mb-2"><Brain className="mr-2 h-4 w-4"/>Common Psychological Traps</h4>
                    <p className="text-sm text-muted-foreground">Be aware of these common mental shortcuts that lead to bad decisions.</p>
                     <ul className="list-disc pl-5 mt-2 space-y-2 text-sm text-muted-foreground">
                        <li><strong>Social Pressure:</strong> The desire to have a "dream house" or a flashy car to keep up with friends or family is a powerful and destructive force.</li>
                        <li><strong>Lender Approval ≠ Affordability:</strong> A bank will often approve you for the absolute maximum loan you can technically handle. Just because they say "yes" doesn't mean you should take it all. Their goal is to earn interest, not to ensure your financial comfort.</li>
                        <li><strong>Overestimating Stability:</strong> It's easy to assume your income will always rise smoothly and your job is secure. A conservative budget provides a buffer against life's inevitable uncertainties.</li>
                    </ul>
                </div>
            </CardContent>
        </Card>


        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
              <Home className="mr-2 h-5 w-5 text-primary" />
              How Much Housing Can I Afford?
            </CardTitle>
            <CardDescription>Use these two common lending and budgeting rules to gauge housing affordability, whether you rent or own.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {housingRules.map(rule => (
                <div key={rule.title} className="p-4 border rounded-lg bg-card shadow-sm">
                  <div className="flex items-center mb-2">
                    <rule.icon className="mr-2 h-5 w-5 text-primary/80" />
                    <h3 className="font-semibold">{rule.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2" dangerouslySetInnerHTML={{ __html: rule.description }} />
                  <p className="text-xs italic text-muted-foreground/80"><strong>Example:</strong> {rule.example}</p>
                </div>
              ))}
            </div>
             <Separator className="my-6" />
            <div>
              <h4 className="font-semibold text-lg text-center mb-4">Quick Calculator for Renters</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                 <div className="space-y-2">
                    <Label htmlFor="monthlyRent">Your Monthly Rent</Label>
                    <Input id="monthlyRent" type="number" placeholder="2000" value={monthlyRent} onChange={e => setMonthlyRent(e.target.value)} />
                 </div>
                  <div className="space-y-2">
                    <Label htmlFor="grossIncome">Your Gross Monthly Income</Label>
                    <Input id="grossIncome" type="number" placeholder="6000" value={grossIncome} onChange={e => setGrossIncome(e.target.value)} />
                 </div>
                 <div className="flex items-end">
                    <div className="w-full text-center p-2 rounded-md bg-muted">
                        {rentRatio !== null ? (
                            <>
                                <p className="text-sm text-muted-foreground">Rent-to-Income Ratio:</p>
                                <p className={`text-2xl font-bold ${rentRatio > 35 ? 'text-destructive' : 'text-primary'}`}>
                                    {rentRatio.toFixed(1)}%
                                </p>
                            </>
                        ) : (
                            <p className="text-sm text-muted-foreground p-2">Enter values to see ratio</p>
                        )}
                    </div>
                 </div>
              </div>
              {rentRatio !== null && (
                 <Alert className={`mt-4 max-w-2xl mx-auto ${rentRatio <= 35 ? 'border-green-500 bg-green-50/50' : 'border-destructive bg-destructive/5'}`}>
                    <AlertTitle className="font-semibold">Guideline Check</AlertTitle>
                    <AlertDescription>
                        {rentRatio <= 28 ? "Your housing cost is comfortably within the ideal 28% guideline." :
                         rentRatio <= 35 ? "Your housing cost is within the acceptable 35% guideline, but be mindful of your budget." :
                         "Your housing cost is above the recommended 35% guideline. This may strain your budget."}
                    </AlertDescription>
                 </Alert>
              )}
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild>
                <Link href="/calculators/mortgage">
                    <CalculatorIcon className="mr-2 h-4 w-4"/>
                    Use the Full Mortgage Calculator
                </Link>
            </Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
              <Car className="mr-2 h-5 w-5 text-primary" />
              How Much Car Can I Afford?
            </CardTitle>
            <CardDescription>Follow this guideline to ensure your vehicle doesn't drive your budget into the ground.</CardDescription>
          </CardHeader>
          <CardContent>
            {carRules.map(rule => (
              <div key={rule.title} className="p-4 border rounded-lg bg-card shadow-sm">
                <div className="flex items-center mb-2">
                  <rule.icon className="mr-2 h-5 w-5 text-primary/80" />
                  <h3 className="font-semibold">{rule.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{rule.description}</p>
                <ul className="list-disc pl-5 text-sm space-y-2">
                    {rule.breakdown.map((item, i) => <li key={i} dangerouslySetInnerHTML={{ __html: item }}/>)}
                </ul>
              </div>
            ))}
          </CardContent>
           <CardFooter>
            <Button asChild>
                <Link href="/calculators/auto-loan">
                    <CalculatorIcon className="mr-2 h-4 w-4"/>
                    Use the Full Auto Loan Calculator
                </Link>
            </Button>
          </CardFooter>
        </Card>
        
        <Alert>
          <Scale className="h-4 w-4" />
          <AlertTitle className="font-semibold">A Flexible Guideline: The 45-50% Rule</AlertTitle>
          <AlertDescription>
            These rules aren’t about perfection, they’re about balance. If you go a little high on housing because you live in an expensive city, try to balance it by keeping transportation costs very low (or vice versa). A good overarching goal is to keep your <strong>combined total housing + transportation costs under 45–50% of your gross income</strong>.
          </AlertDescription>
        </Alert>


        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you understand how to approach the big purchases, return to the main roadmap to continue building your financial knowledge.
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
