'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Lightbulb, FileText, CheckCircle, Search, Target, TrendingUp, AlertTriangle, Microscope, Scale, UsersRound, Info } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const requiredMaterials = [
    "The company's most recent Annual Report (10-K).",
    "The most recent Investor Presentation or Earnings Slides.",
    "The transcript of the most recent quarterly earnings call.",
    "Two articles about the business published within the last 6 months (from a reputable source).",
    "Your completed 'Industry Competitor Matrix' from the previous exercise."
];

const memoSections = [
    {
        title: "I. Company Overview (1 page)",
        description: "What does this business do? Explain its products/services, its customers, and how it makes money in simple terms. This should demonstrate your clear understanding of the business model.",
    },
    {
        title: "II. Industry & Competitive Landscape (1 page)",
        description: "Provide context for the thesis. Include your competitive analysis table from the prior exercise, and summarize your company’s main rivals, their relative advantages, and current industry dynamics.",
    },
    {
        title: "III. Investment Thesis (1–2 pages)",
        description: "This is the core of your memo. Clearly articulate why this is a good investment. What is your edge? What do you believe the market is mispricing or misunderstanding? Your thesis should be built around the company's competitive advantages (its 'moat').",
    },
    {
        title: "IV. Quantitative & Valuation Analysis (1–2 pages)",
        description: "Transform your qualitative insights into measurable conviction. Include at least one valuation framework (e.g., a simple DCF, multiples comparison). Provide a table/chart of key historical metrics (revenue, margins, ROIC) and commentary on the company's balance sheet health and capital allocation (buybacks, dividends). Conclude with whether the current valuation is justified.",
    },
    {
        title: "V. Risk Factors (1 page)",
        description: "What could go wrong? Invert the problem and list the key risks that would invalidate your thesis. For each risk, try to weigh its probability (is it likely or a black swan event?) and its potential impact (is it a minor setback or an existential threat?). This helps prioritize the most important risks.",
    },
     {
        title: "VI. Catalysts & Timeline (½ page)",
        description: "Make the thesis actionable. Identify near-term catalysts (e.g., a new product launch, cost restructuring, regulatory approval) and an estimated timeline of key events that could validate or disprove the thesis within 12–24 months.",
    },
     {
        title: "VII. Management & Governance (½–1 page)",
        description: "Assess the qualitative edge. Evaluate management's credibility, insider ownership, past capital allocation decisions, and whether the company's incentive structure aligns with shareholder interests.",
    },
    {
        title: "VIII. Exit Plan (½ page)",
        description: "Even a great long-term investment needs a contingency plan. Under what conditions would you sell this stock? This is not about a target price. It's about fundamental changes to the business. Examples: the competitive moat is breached, management's strategy changes for the worse, or the capital allocation becomes irrational.",
    }
];

export default function ActionInvestmentMemoPage() {
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
        <h1 className="text-3xl font-bold font-headline">Action: The Investment Memo Capstone</h1>
        <p className="text-muted-foreground mt-2">The ultimate capstone exercise: Synthesize your skills into a professional-grade investment thesis.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Brain className="h-4 w-4" />
          <AlertTitle className="font-headline">Think, Decide, and Commit</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>Great investors don't make decisions based on gut feelings; they make them based on deep research and a clear, written thesis. The process of writing forces clarity of thought. This exercise challenges you to produce a comprehensive investment memo, just as a professional analyst would.</p>
            <p className="font-semibold">Your job is to present a data-backed investment decision that is convincing enough to make you, the decision-maker, willing to allocate a significant amount of capital to this one idea. Don't try to sell a weak thesis—your portfolio is on the line. Be sure to save your work, as you will use this memo to inform your final 'Portfolio Construction' capstone.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">Your Task</CardTitle>
            <CardDescription>Choose one publicly traded company from your 'Industry Competitor Matrix' exercise. Your objective is to create a 6-8 page investment memo that makes a clear "buy" or "pass" decision.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
                <h4 className="font-semibold mb-2">Required Materials:</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    {requiredMaterials.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
                <p className="text-xs italic mt-2">Hint: You can find most of these on the company's Investor Relations website.</p>
            </div>
             <div className="mb-6">
                <h4 className="font-semibold mb-2">Memo Structure:</h4>
                <p className="text-sm text-muted-foreground mb-3">Your memo must be clearly structured with the following eight sections:</p>
                <div className="space-y-4">
                    {memoSections.map(item => (
                        <div key={item.title} className="p-3 border rounded-lg bg-muted/40">
                            <h5 className="font-semibold">{item.title}</h5>
                            <p className="text-xs text-muted-foreground">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
          </CardContent>
          <CardFooter>
            <Alert>
                <CheckCircle className="h-4 w-4 text-green-600"/>
                <AlertTitle className="font-semibold">The Final Output</AlertTitle>
                <AlertDescription>
                    Your memo should conclude with a clear recommendation: based on your analysis of the business quality, risks, and valuation, is this a company you would be willing to invest a significant portion of your capital in for the long term?
                </AlertDescription>
            </Alert>
          </CardFooter>
        </Card>

        <Alert variant="default" className="bg-amber-50 dark:bg-amber-900/20 border-amber-300 dark:border-amber-700">
            <Lightbulb className="h-4 w-4 text-amber-500" />
            <AlertTitle className="font-headline text-amber-900 dark:text-amber-200">The Feedback Loop: Create Your Learning Journal</AlertTitle>
            <AlertDescription className="text-amber-800 dark:text-amber-300">
                After completing your memo, save it. Set a calendar reminder to revisit it in 6 to 12 months. When you review it, ask yourself: What did I get right? What did I get wrong? Which of my key assumptions held true, and which didn't? This process of creating a feedback loop is the single most powerful way to improve as an investor.
            </AlertDescription>
        </Alert>


        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    This exercise represents the culmination of the business analysis framework. Completing it demonstrates a deep level of understanding.
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
