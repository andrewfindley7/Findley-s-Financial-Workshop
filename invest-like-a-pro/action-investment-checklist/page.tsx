
'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { ListChecks, Brain, Target, ArrowRight, Lightbulb, CheckCircle, ThumbsDown, BarChart3, TrendingUp, Cpu, Factory, Info } from 'lucide-react';
import Link from 'next/link';

const examples = {
    wants: [
        "A business with a strong, durable competitive moat (e.g., brand, network effects).",
        "Management that is honest, capable, and has significant skin in the game (insider ownership).",
        "A history of high and stable Return on Invested Capital (ROIC), ideally >15%.",
        "Consistent and growing free cash flow.",
        "A strong balance sheet with low to no debt.",
        "Net profit margins above 10%.",
        "A business I can understand (within my circle of competence)."
    ],
    dealBreakers: [
        "Consistent share dilution (the share count is always going up).",
        "Management that is overly promotional or uses confusing accounting.",
        "A history of making large, value-destructive acquisitions.",
        "The business is in a declining industry with no clear path to reinvention.",
        "Stock-based compensation is consistently higher than retained earnings."
    ]
};

const caseStudies = [
    {
        title: "Case 1: 'Future Vision Inc.' (A Story Stock)",
        icon: TrendingUp,
        description: "Future Vision is developing a revolutionary AI platform. It has no revenue but boasts a charismatic founder and significant media hype about its potential to disrupt a multi-trillion dollar industry. Its latest investor presentation focuses heavily on its Total Addressable Market (TAM). The company has $50 million in cash on its balance sheet and is currently burning through $5 million per month. It has no debt. To fund its operations, it has increased its share count by 30% over the past year through stock-based compensation for executives and by issuing new shares to venture capitalists.",
        question: "Would you buy this stock based on your checklist? Why or why not?"
    },
    {
        title: "Case 2: 'Boring But Rich Corp.' (A Cash Cow)",
        icon: Factory,
        description: "This company manufactures essential, unexciting components for industrial machinery. It has grown revenue at a steady 5% per year for two decades and has consistently held a 40% market share in its niche industry. Its operating margin has been stable at 25%, and its ROIC has averaged 18%. The company has minimal debt and uses half of its free cash flow to repurchase its shares, reducing the share count by an average of 3% per year. It also pays a 2% dividend yield. The CEO's annual letter is known for being straightforward and candid about challenges. The stock receives almost no media attention and currently trades at a P/E ratio of 12.",
        question: "Would you buy this stock based on your checklist? Why or why not?"
    }
]

export default function ActionInvestmentChecklistPage() {
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
        <h1 className="text-3xl font-bold font-headline">Action: Create Your Investment Checklist</h1>
        <p className="text-muted-foreground mt-2">A practical exercise to distill your investment philosophy into a powerful decision-making tool.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Brain className="h-4 w-4" />
          <AlertTitle className="font-headline">Systemize Your Thinking, Remove Emotion</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>Pilots use checklists before every flight, no matter how experienced they are. Why? Because it prevents catastrophic errors by ensuring critical steps are never missed. An investment checklist serves the same purpose. It's a personal, written document that forces you to be disciplined and rational, especially when faced with the market's emotional tides of fear and greed.</p>
            <p className="font-semibold">By committing your criteria to paper before you invest, you create a powerful filter against making impulsive, emotional decisions.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">Your 3-Step Checklist Exercise</CardTitle>
            <CardDescription>Grab a notebook or open a new document and work through these steps.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            
            <div className="p-4 border rounded-lg bg-card shadow-sm">
                <h3 className="font-semibold text-lg flex items-center mb-2">
                    <span className="font-bold text-primary mr-3">1.</span> List 10+ Things You Want to See in an Investment
                </h3>
                <p className="text-sm text-muted-foreground mb-4">Based on what you've learned about moats, management, and business quality, what are the key characteristics of your ideal business? Be specific and quantitative where possible.</p>
                 <Alert variant="default" className="bg-muted/50">
                    <Lightbulb className="h-4 w-4" />
                    <AlertTitle>Examples to Get You Started</AlertTitle>
                    <AlertDescription>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            {examples.wants.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                    </AlertDescription>
                </Alert>
            </div>
            
            <div className="p-4 border rounded-lg bg-card shadow-sm">
                <h3 className="font-semibold text-lg flex items-center mb-2">
                    <span className="font-bold text-primary mr-3">2.</span> Identify at Least 3 Non-Negotiable Deal-Breakers
                </h3>
                <p className="text-sm text-muted-foreground mb-4">This is the 'inversion' part of the exercise. What are the red flags that would make you immediately pass on an investment, no matter how good the story sounds?</p>
                 <Alert variant="destructive">
                    <ThumbsDown className="h-4 w-4" />
                    <AlertTitle>Example Deal-Breakers</AlertTitle>
                    <AlertDescription>
                         <ul className="list-disc pl-5 mt-2 space-y-1">
                            {examples.dealBreakers.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                    </AlertDescription>
                </Alert>
            </div>

            <div className="p-4 border rounded-lg bg-card shadow-sm">
                <h3 className="font-semibold text-lg flex items-center mb-2">
                    <span className="font-bold text-primary mr-3">3.</span> Put Your Checklist to the Test
                </h3>
                <p className="text-sm text-muted-foreground mb-4">Analyze these two hypothetical stocks using your newly created checklist to decide if you would buy, sell, or skip, and write down your rationale.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {caseStudies.map(study => (
                        <div key={study.title} className="p-4 border rounded-lg bg-muted/40">
                            <h4 className="font-semibold flex items-center mb-2">
                                <study.icon className="mr-2 h-5 w-5"/> {study.title}
                            </h4>
                            <p className="text-sm text-muted-foreground mb-3">{study.description}</p>
                            <p className="text-sm font-semibold italic">{study.question}</p>
                        </div>
                    ))}
                </div>
            </div>

          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground">You now have your own personal investment policy statement. The next time you're tempted to buy a stock, run it through this checklist first. If it doesn't pass, you move on. No exceptions.</p>
          </CardFooter>
        </Card>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you have your own guiding framework, you're ready to learn about the different types of investments you can analyze.
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
