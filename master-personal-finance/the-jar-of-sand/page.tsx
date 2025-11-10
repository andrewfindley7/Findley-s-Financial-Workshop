
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Layers, Gem, Puzzle, Wind, ArrowRight, Target, Info } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const concepts = [
  {
    icon: Gem,
    title: "The Rocks: Your Big Goals",
    description: "These are your most important, non-negotiable life and financial goals. They are the things that, if you achieve them, will make the biggest positive impact on your life.",
    examples: ["Becoming debt-free", "Saving for a house down payment", "Funding your retirement", "Starting a business"]
  },
  {
    icon: Puzzle,
    title: "The Pebbles: Your Responsibilities",
    description: "These are the necessary, day-to-day tasks and smaller goals. They are important, but they are more flexible than the rocks.",
    examples: ["Paying monthly bills", "Grocery shopping", "Routine work tasks", "Saving for a new phone"]
  },
  {
    icon: Wind,
    title: "The Sand: The Trivial Details",
    description: "This represents all the small stuff, the distractions, and the mindless activities that can fill up all of your time and money if you're not careful.",
    examples: ["Mindless social media scrolling", "Impulse purchases", "Excessive streaming subscriptions", "Worrying about daily stock market fluctuations"]
  }
];

export default function JarOfSandPage() {
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
        <h1 className="text-3xl font-bold font-headline">The Jar of Sand: Prioritizing What Truly Matters</h1>
        <p className="text-muted-foreground mt-2">A powerful metaphor for managing your time, energy, and finances.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Layers className="h-4 w-4" />
          <AlertTitle className="font-headline">The 'Jar of Life' Metaphor</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>Imagine you have an empty jar representing your life, your time, energy, and financial resources. Next to it are big rocks, small pebbles, and sand.</p>
            <p>Most people fill their jar with sand first, but then there’s no room for the big rocks. Opportunity is lost not from one big mistake, but from thousands of tiny grains of sand that leave no room for what matters.</p>
            <p className="font-semibold">The lesson: You must identify and prioritize your 'big rocks' first, or you will never fit them in. This applies directly to how you manage your money.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">Identifying Your Rocks, Pebbles, and Sand</CardTitle>
            <CardDescription>Understanding the components is the first step to applying the lesson.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-3 gap-4">
            {concepts.map(item => (
              <div key={item.title} className="p-4 border rounded-lg bg-card shadow-sm">
                <div className="flex items-center mb-2">
                  <item.icon className="mr-2 h-6 w-6 text-primary/80" />
                  <h3 className="font-semibold">{item.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                <div className="text-xs bg-muted/50 p-2 rounded-md">
                    <p className="font-semibold mb-1">Examples:</p>
                    <ul className="list-disc pl-4 space-y-1">
                        {item.examples.map(ex => <li key={ex}>{ex}</li>)}
                    </ul>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
              <Target className="mr-2 h-5 w-5 text-primary" />
              How to Apply This to Your Finances
            </CardTitle>
            <CardDescription>This isn't just a story; it's an actionable financial strategy.</CardDescription>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-4 text-sm">
                <li>
                    <h4 className="font-semibold inline">Identify Your "Rocks"</h4>
                    <p className="text-muted-foreground">List your top 1-3 financial goals. If everything feels like a rock, nothing is. Be ruthless in your prioritization.</p>
                </li>
                 <li>
                    <h4 className="font-semibold inline">Automate Your Rocks: "Pay Yourself First"</h4>
                    <p className="text-muted-foreground">Set up automatic transfers to your savings and investment accounts for your top goals. This money should move on payday, before you have a chance to spend it.</p>
                </li>
                 <li>
                    <h4 className="font-semibold inline">Budget for the "Pebbles"</h4>
                    <p className="text-muted-foreground">With the rest of your income, cover your necessary expenses and responsibilities.</p>
                </li>
                <li>
                    <h4 className="font-semibold inline">Spend the "Sand" Guilt-Free</h4>
                    <p className="text-muted-foreground">The money left after your rocks and pebbles are handled is yours to enjoy without guilt, stress, or regret.</p>
                </li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Ready to Take Action?</CardTitle>
                <CardDescription>
                    You've learned the 'why'. Now it's time to do the 'what'. Proceed to the next step to complete a short exercise and identify your financial rocks.
                </CardDescription>
            </CardHeader>
            <CardContent>
                 <Button asChild>
                    <Link href="/education/action-jar-of-sand">
                        Go to Action Plan
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </CardContent>
        </Card>

         <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Return to the roadmap to continue building your financial knowledge.
                </CardDescription>
            </CardHeader>
            <CardContent>
                 <Button asChild>
                    <Link href={`/roadmaps/master-personal-finance${fromStep ? `#${fromStep}` : ''}`}>
                        Return to Master Personal Finance
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </CardContent>
        </Card>

      </div>
    </>
  );
}

    