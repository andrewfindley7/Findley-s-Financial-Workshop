'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Brain, ArrowRight, Lightbulb, Search, Presentation, Globe, Info } from 'lucide-react';
import Link from 'next/link';

const steps = [
  {
    title: "Step 1: Navigate to Brookfield's Investor Relations Website",
    description: "Go to your favorite search engine and type 'Brookfield Corporation Investor Relations' or 'Brookfield BN IR'. The official IR website is the primary source for all investor materials.",
    icon: Globe,
  },
  {
    title: "Step 2: Find the 'Events & Presentations' Section",
    description: "On the IR website, look for a section or tab labeled 'Events & Presentations'. This is where companies house recordings and slide decks from important investor events.",
    icon: Search,
  },
  {
    title: "Step 3: Locate and Open the Most Recent 'Investor Day' Presentation",
    description: "Find the presentation slides for the most recent 'Investor Day'. This is a comprehensive, multi-hour presentation where management lays out its long-term strategy in detail. Download or open the PDF slide deck.",
    icon: Presentation,
  },
  {
    title: "Step 4: Skim, Don't Read. Look for the 'Why'.",
    description: "You do not need to read all 100+ slides. Your goal is to get a feel for how they communicate. Skim through the presentation and look for slides that explain their capital allocation strategy. Notice how they use data, charts, and logical arguments—not just hype—to demonstrate how they expect to generate future returns. This is what evidence-based management communication looks like.",
    icon: Brain,
  }
];

export default function ActionInvestorRelationsReviewPage() {
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
        <h1 className="text-3xl font-bold font-headline">Action: Review an Investor Day Presentation</h1>
        <p className="text-muted-foreground mt-2">A practical exercise to see how a high-quality management team communicates its strategy.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Brain className="h-4 w-4" />
          <AlertTitle className="font-headline">See Excellence in Action</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>In the previous lesson, we discussed the importance of management quality. This exercise makes that concept tangible. We will look at the Investor Day presentation from Brookfield Corporation, led by CEO Bruce Flatt, who is widely regarded as one of the world's most skilled capital allocators.</p>
            <p className="font-semibold">The goal is not to analyze Brookfield as an investment, but to observe *how* a great management team communicates. Notice how they back up their outlook with data, logic, and a clear framework for how they deploy capital to generate returns. This stands in stark contrast to the baseless, promotional claims often made by lower-quality management teams.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">Your Task: Find and Skim the Presentation</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
             {steps.map((step) => (
              <div key={step.title} className="p-4 border rounded-lg bg-card shadow-sm">
                <h3 className="font-semibold text-lg flex items-center mb-2">
                  <step.icon className="mr-3 h-5 w-5 text-primary" />
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </CardContent>
           <CardFooter>
             <Alert variant="default" className="w-full">
                <Lightbulb className="h-4 w-4" />
                <AlertTitle className="font-semibold">The Takeaway</AlertTitle>
                <AlertDescription>
                    After skimming the presentation, ask yourself: "Does this feel like a sales pitch, or a substantive business plan?" The difference between hype and evidence-based strategy should be clear. This is the quality of communication you should look for in your own investments.
                </AlertDescription>
            </Alert>
           </CardFooter>
        </Card>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you have seen a real-world example of quality management communication, return to the main guide to continue your learning.
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
