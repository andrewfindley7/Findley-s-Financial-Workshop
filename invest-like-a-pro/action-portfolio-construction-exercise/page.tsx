'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Wrench, Microscope, BarChart3, Scale, Layers, Info, BrainCircuit } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const exerciseSteps = [
  {
    title: "Step 1: Revisit Your Core Philosophy & Goals",
    icon: Brain,
    description: "Reconfirm your guiding principles. Your philosophy may have evolved after learning more; use what best fits your strategy now.",
    tasks: [
      "<strong>Investment Philosophy:</strong> Refer to the philosophy you chose in the 'Define Your Philosophy' capstone. Is it still Value, Growth, GARP, or something else? Note any changes.",
      "<strong>Portfolio Goal:</strong> What is the primary objective of this portfolio? (e.g., Maximize long-term growth, Generate steady income, Capital preservation with moderate growth)."
    ]
  },
  {
    title: "Step 2: Select Your Securities (The 'What')",
    icon: Microscope,
    description: "Revisit your 'Define Your Asset Classes' exercise. This is where you select the specific investments that fit into your chosen asset class buckets. Every choice must be justified.",
    tasks: [
      "<strong>List Your Securities:</strong> Based on the asset classes you decided to include, list the specific securities or assets you will use to represent them (e.g., 'Apple Inc. (AAPL)', 'Vanguard S&P 500 ETF (VOO)', 'iShares 20+ Year Treasury Bond ETF (TLT)', 'Bitcoin').",
      "<strong>Justify Each Choice:</strong> For each chosen security or asset, write one sentence explaining why it's the right choice for that asset class and how it aligns with your philosophy.",
      "<strong>A Note on Speculation:</strong> If you included non-productive assets like cryptocurrency or commodities, you must be explicit about your thesis. Since these assets have no intrinsic value or cash flow, your reasoning must be logical and strategic (e.g., 'I am allocating 2% to Bitcoin as a hedge against currency debasement'), not based on emotion or hype."
    ]
  },
  {
    title: "Step 3: Determine Your Allocation (The 'How Much')",
    icon: Scale,
    description: "Decide how to allocate your hypothetical $250,000 across your chosen securities and assets. This is where you manage concentration and risk.",
    tasks: [
      "<strong>Assign Percentages:</strong> Assign a percentage of the portfolio to each chosen security or asset. The total must equal 100%.",
      "<strong>Write Your Rationale:</strong> For your top 3 holdings (by portfolio weight), write one sentence explaining why they get a larger allocation. (e.g., 'AAPL gets a 10% allocation due to its strong moat and my high conviction in its future cash flows.').",
    ]
  },
  {
    title: "Step 4: Define Your Risk Metrics (Or Justify Their Absence)",
    icon: BarChart3,
    description: "Acknowledge the potential risks and how you plan to measure them, or explain why you believe a specific metric is not necessary for your strategy.",
    tasks: [
        "<strong>Primary Risk Metric:</strong> Define the main number you'll look at to gauge risk (e.g., 'I will monitor the Beta of my portfolio') or explain why a metric isn't necessary for your approach.",
        "<strong>Scenario Analysis:</strong> What is the biggest external threat to your portfolio? Write down one scenario (e.g., 'A prolonged recession would hurt my cyclical stocks') and how you would react ('I would not sell, but would look to add to my highest-quality holdings')."
    ]
  },
  {
    title: "Step 5: Create a Rebalancing Plan (Or Justify Its Absence)",
    icon: Layers,
    description: "A portfolio is not a 'set it and forget it' machine. A rebalancing plan imposes discipline, but a conscious decision not to rebalance is also a strategy.",
    tasks: [
        "<strong>State Your Rebalancing Strategy:</strong> Clearly state whether you will use a Calendar-Based (e.g., 'annually'), Threshold-Based (e.g., 'when any position drifts by more than 5%') rebalancing strategy, or if you will not rebalance at all.",
        "<strong>Justify Your Choice:</strong> Explain the 'why' behind your decision. (e.g., 'I will rebalance annually to maintain my target risk profile.' OR 'I will not have a maximum weighting rule because I believe there's no reason to sell my biggest winners if their valuation remains reasonable.')."
    ]
  },
  {
    title: "Step 6: Define Performance Metrics",
    icon: BarChart3,
    description: "How will you know if your portfolio is performing well? This connects your strategy to measurable outcomes.",
    tasks: [
      "<strong>Select Your Metrics:</strong> List 1–2 key metrics you will use to judge your portfolio's success over time.",
      "<strong>Justify Your Choices:</strong> Explain why these metrics are appropriate for your chosen investment philosophy. (e.g., 'As a value investor, my primary metric is absolute return over a rolling 3-year period, as I am less concerned with short-term tracking error against an index. I will also monitor Alpha to see if my active choices are adding value.')"
    ]
  },
  {
    title: "Step 7: Reflection",
    icon: BrainCircuit,
    description: "This final step encourages meta-cognition, helping you learn from your own thought process.",
    tasks: [
      "<strong>What was the most difficult decision in this process and why?</strong> (e.g., deciding on the allocation for a high-conviction but volatile stock).",
      "<strong>Which of my own biases (e.g., overconfidence, familiarity) did I have to be most careful of while constructing this portfolio?</strong>",
      "<strong>What would I do differently if I had to manage this portfolio with real money, and what does that tell me about my true risk tolerance?</strong>"
    ]
  }
];

export default function ActionPortfolioConstructionExercisePage() {
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
        <h1 className="text-3xl font-bold font-headline">Action: Portfolio Construction Exercise</h1>
        <p className="text-muted-foreground mt-2">A practical exercise to apply your knowledge by building a sample portfolio.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Wrench className="h-4 w-4" />
          <AlertTitle className="font-headline">The Goal: From Theory to Practice</AlertTitle>
          <AlertDescription>
            You've learned about investment philosophies, financial analysis, and portfolio management. This exercise is designed to bridge the gap between theory and practice. By creating a hypothetical portfolio with a clear rationale, you will solidify your own investment framework and build the confidence to manage a real portfolio. Grab a notebook or open a new document and work through these steps.
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">The Scenario: Build a $250,000 Portfolio</CardTitle>
            <CardDescription>You have $250,000 to invest. Your task is to construct a portfolio based on your chosen asset classes and define the strategy behind it.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {exerciseSteps.map(step => (
              <div key={step.title} className="p-4 border rounded-lg bg-card shadow-sm">
                <h3 className="font-semibold text-lg flex items-center mb-2">
                  <step.icon className="mr-3 h-5 w-5 text-primary" />
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{step.description}</p>
                <div className="p-3 bg-muted/50 rounded-md">
                    <h4 className="font-semibold text-sm mb-2">Your Tasks:</h4>
                    <ul className="list-disc pl-5 space-y-2 text-sm">
                        {step.tasks.map((task, i) => <li key={i} dangerouslySetInnerHTML={{ __html: task }} />)}
                    </ul>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">You've Completed the Curriculum!</CardTitle>
                <CardDescription>
                    By completing this exercise, you have demonstrated a comprehensive understanding of investment analysis and portfolio management. You have the tools to be a disciplined, intelligent, and successful long-term investor.
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
