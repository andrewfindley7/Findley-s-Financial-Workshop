'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Brain, ArrowRight, Lightbulb, Target, Scissors, CheckCircle, Wallet, Info } from 'lucide-react';
import Link from 'next/link';

export default function ActionConsciousSpendingPage() {
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
        <h1 className="text-3xl font-bold font-headline">Action: The Conscious Spending Exercise</h1>
        <p className="text-muted-foreground mt-2">A practical exercise to align your spending with your values and build your personal spending blueprint.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Brain className="h-4 w-4" />
          <AlertTitle className="font-headline">The Goal: Spend Better, Not Less</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>This exercise is not about cutting every expense. It's about making deliberate choices. The goal is to identify what you truly value so you can spend generously on those things while ruthlessly cutting what you don't. This is the core of conscious spending.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">Your 3-Step Spending Blueprint</CardTitle>
            <CardDescription>Take 15 minutes with a notebook or a new document to work through these steps.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            
            <div className="p-4 border rounded-lg bg-card shadow-sm">
                <h3 className="font-semibold text-lg flex items-center mb-2">
                    <span className="font-bold text-primary mr-3">1.</span> Review Your Recent Spending
                </h3>
                <p className="text-sm text-muted-foreground mb-4">List your last 5 non-essential purchases over $50. For each one, honestly ask yourself:</p>
                <ul className="list-disc pl-5 text-sm space-y-2 text-muted-foreground">
                    <li>Did this purchase bring me lasting joy, security, or value?</li>
                    <li>Would I make this purchase again without hesitation?</li>
                    <li className="font-semibold">If the answer is no, it's a candidate to cut from your future spending.</li>
                </ul>
            </div>
            
            <div className="p-4 border rounded-lg bg-card shadow-sm">
                <h3 className="font-semibold text-lg flex items-center mb-2">
                    <span className="font-bold text-primary mr-3">2.</span> Define Your "Joy Categories"
                </h3>
                <p className="text-sm text-muted-foreground mb-4">Now, list 2-3 categories where you would be happy to spend *more* money. These are the things that genuinely add to your quality of life. This is where your spending should be focused.</p>
                <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
                    <li><strong>Example Joy Categories:</strong> Travel, high-quality groceries, your favorite hobby, books, or social experiences with friends.</li>
                </ul>
            </div>

            <div className="p-4 border rounded-lg bg-card shadow-sm">
              <h3 className="font-semibold text-lg flex items-center mb-2">
                <span className="font-bold text-primary mr-3">3.</span> Identify Your "Cut Categories"
              </h3>
              <p className="text-sm text-muted-foreground mb-4">Based on your review, what are the top 2-3 categories where you consistently spend money but get little real value or joy? These are your primary targets for reduction.</p>
               <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
                    <li><strong>Example Cut Categories:</strong> Unused subscriptions, daily coffees, frequent takeout, fast fashion, or expensive tech gadgets you don't really need.</li>
              </ul>
            </div>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground">You now have a blueprint. The goal is simple: redirect money from the 'Cut' list to the 'Joy' list, while ensuring your future is secured.</p>
          </CardFooter>
        </Card>

        <Alert variant="default" className="bg-green-500/10 border-green-500/20">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertTitle className="text-green-700 dark:text-green-300 font-semibold">The Final Step: Automate Your Future</AlertTitle>
            <AlertDescription className="text-green-600 dark:text-green-400">
               The easiest way to ensure you're not sacrificing your future for today's wants is to automate your savings and investments. "Pay yourself first" by having money automatically transferred to your retirement and savings accounts on payday. This handles your most important goals without requiring daily willpower.
            </AlertDescription>
        </Alert>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you have a clear blueprint for your spending, return to the main roadmap to continue building your financial knowledge.
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
