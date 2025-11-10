'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Lightbulb, Eye, Cpu, Landmark, HeartPulse, ShoppingCart, Utensils, Factory, Flame, BarChart, Clock, Activity, Sunrise, Sun, CloudRain, Info, TrendingUp, Search, Layers, Scale, Sparkles, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';


const sectorAnalysis = [
  {
    sector: "Technology (XLK)",
    icon: Cpu,
    interestRateSensitivity: "High (Negative)",
    inflationImpact: "Mixed to Negative",
    description: "High-growth tech companies are valued on long-duration future earnings. Higher interest rates increase the discount rate applied to these future earnings, making them worth less today. This compresses their valuation multiples (P/E ratios).",
    bestWhen: "Falling interest rates and low inflation (disinflationary growth). This environment boosts the present value of future growth.",
    worstWhen: "Rising interest rates and high inflation. This environment punishes long-duration assets and can signal a shift to 'value' over 'growth'."
  },
  {
    sector: "Financials (XLF)",
    icon: Landmark,
    interestRateSensitivity: "High (Positive)",
    inflationImpact: "Positive (Moderate Inflation)",
    description: "Banks' core business is borrowing short-term (deposits) and lending long-term (loans). In a rising rate environment with a steep yield curve, their Net Interest Margin (NIM) the spread between what they earn on loans and pay on deposits typically widens, increasing profitability.",
    bestWhen: "Rising interest rates with a strong economy (moderate inflation).",
    worstWhen: "Rapidly falling interest rates (which compress NIMs) or a deep recession (which leads to loan defaults)."
  },
  {
    sector: "Healthcare (XLV)",
    icon: HeartPulse,
    interestRateSensitivity: "Low",
    inflationImpact: "Neutral to Positive",
    description: "Healthcare is a defensive sector. Demand for medical services and pharmaceuticals is relatively inelastic to the economic cycle. People need healthcare regardless of the economy's strength.",
    bestWhen: "Recessions or periods of economic uncertainty. Its non-cyclical demand provides stability when other sectors are struggling.",
    worstWhen: "It typically underperforms in strong, speculative bull markets. Also faces headline risk from government regulation on drug pricing."
  },
  {
    sector: "Consumer Discretionary (XLY)",
    icon: ShoppingCart,
    interestRateSensitivity: "High (Negative)",
    inflationImpact: "Negative",
    description: "This sector includes non-essential goods and services like cars, luxury goods, and travel. Consumer spending on these items is highly dependent on economic confidence and borrowing costs.",
    bestWhen: "A strong economy with low unemployment and falling interest rates, which encourages consumer spending and borrowing.",
    worstWhen: "Recessions and periods of high inflation, when consumers cut back on non-essential spending."
  },
  {
    sector: "Consumer Staples (XLP)",
    icon: Utensils,
    interestRateSensitivity: "Low",
    inflationImpact: "Mixed",
    description: "This is a classic defensive sector, including companies that sell essential goods like food, beverages, and household products. Demand is stable regardless of the economic cycle.",
    bestWhen: "Recessions and periods of high volatility. Like healthcare, it offers stability. Strong brands can also pass on inflationary costs to consumers.",
    worstWhen: "Strong bull markets, where it will likely lag more cyclical sectors. Can be squeezed if input cost inflation rises faster than they can raise prices."
  },
  {
    sector: "Industrials (XLI)",
    icon: Factory,
    interestRateSensitivity: "Medium",
    inflationImpact: "Positive (Initially)",
    description: "This cyclical sector includes machinery, aerospace, and transportation companies. Their performance is tied to broad economic activity and capital investment.",
    bestWhen: "The early stages of an economic recovery, when companies are confident and investing in new equipment and infrastructure.",
    worstWhen: "Late in the cycle or during a recession, when capital spending freezes up."
  },
  {
    sector: "Energy (XLE)",
    icon: Flame,
    interestRateSensitivity: "Low",
    inflationImpact: "Very High (Positive)",
    description: "Includes oil, gas, and energy services companies. Their profits are directly tied to the price of the underlying commodities.",
    bestWhen: "Periods of high and rising inflation, especially when driven by supply shocks in the energy markets (geopolitical events).",
    worstWhen: "Recessions (which crush energy demand) and periods of low inflation or deflation."
  }
];

const businessCycleSectors = [
  { phase: 'Early Recovery', icon: Sunrise, characteristics: 'Low rates, stimulus, improving growth', leading: 'Industrials, Financials, Consumer Discretionary', lagging: 'Staples, Utilities' },
  { phase: 'Mid-Cycle', icon: Sun, characteristics: 'Stable growth, moderate inflation', leading: 'Technology, Communication Services', lagging: 'Energy (sometimes)' },
  { phase: 'Late-Cycle', icon: Clock, characteristics: 'Rising inflation, tightening policy', leading: 'Energy, Materials', lagging: 'Tech, Discretionary' },
  { phase: 'Recession', icon: CloudRain, characteristics: 'Contracting growth, falling rates', leading: 'Healthcare, Staples, Utilities', lagging: 'Industrials, Financials' },
];

export default function ActionSectorRotationExercisePage() {
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
        <h1 className="text-3xl font-bold font-headline">Action: Sector Rotation Strategy Exercise</h1>
        <p className="text-muted-foreground mt-2">Apply your knowledge of market cycles to formulate a sector-based investment strategy for the current economic environment.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Brain className="h-4 w-4" />
          <AlertTitle className="font-headline">The Goal: Connect Macro to Strategy</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>This is a thought exercise. The goal is not to become a market timer, but to develop a deeper understanding of how the broader economic environment affects different parts of the stock market. By thinking through these relationships, you can better interpret market news and make more informed portfolio decisions.</p>
          </AlertDescription>
        </Alert>
        
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">Your Task</CardTitle>
            <CardDescription>Follow these steps to develop and test your own sector allocation thesis.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
              <div className="p-4 border rounded-lg bg-card shadow-sm">
                 <h3 className="font-semibold text-lg flex items-center mb-2"><Search className="mr-2 h-5 w-5"/>Step 1: Gather Your Data Inputs</h3>
                 <p className="text-sm text-muted-foreground mb-3">Before forming an opinion, look at the real data. Pull the current numbers for these key economic indicators:</p>
                 <ul className="list-disc pl-5 text-sm space-y-1">
                    <li><strong>Inflation Rate (CPI):</strong> Is it above or below the central bank's target (usually ~2%)? Is the trend rising or falling?</li>
                    <li><strong>Central Bank Policy Rate (e.g., Fed Funds Rate):</strong> Is the central bank in a tightening (raising rates) or easing (cutting rates) cycle?</li>
                    <li><strong>Yield Curve Slope (e.g., 10-year minus 2-year Treasury yield):</strong> Is it steep (normal), flat, or inverted (a classic recession indicator)?</li>
                    <li><strong>Economic Growth (e.g., ISM Manufacturing PMI):</strong> Is the index above 50 (indicating expansion) or below 50 (indicating contraction)?</li>
                 </ul>
              </div>
              <div className="p-4 border rounded-lg bg-card shadow-sm">
                 <h3 className="font-semibold text-lg flex items-center mb-2"><Layers className="mr-2 h-5 w-5"/>Step 2: Formulate Your Thesis</h3>
                 <p className="text-sm text-muted-foreground mb-3">Based on the data, where do you think we are in the business cycle? Write down your answers to the following:</p>
                 <ul className="list-disc pl-5 text-sm space-y-3">
                    <li>Which 1–2 sectors would you choose to overweight (prefer) in your portfolio right now, and why? Refer to the historical sector map below.</li>
                    <li>Which 1–2 sectors would you choose to underweight (avoid) right now, and why?</li>
                    <li>What is the biggest risk to your chosen strategy? (e.g., "The Fed pivots and starts cutting rates sooner than expected," or "Inflation proves stickier than anticipated.")</li>
                    <li><strong>(Quantitative Reasoning)</strong> How would you allocate a hypothetical 100% portfolio across 3–4 sectors based on your thesis? (e.g., 30% Financials, 20% Healthcare, 15% Energy, 35% Broad Market/Other).</li>
                 </ul>
              </div>
              <div className="p-4 border rounded-lg bg-card shadow-sm">
                 <h3 className="font-semibold text-lg flex items-center mb-2"><Scale className="mr-2 h-5 w-5"/>Step 3: Scenario Analysis</h3>
                 <p className="text-sm text-muted-foreground mb-3">Test your adaptability. How would your thesis change in these hypothetical scenarios?</p>
                  <ul className="list-disc pl-5 text-sm space-y-2">
                    <li><strong>Scenario A:</strong> The central bank unexpectedly cuts interest rates due to rapidly slowing growth.</li>
                    <li><strong>Scenario B:</strong> Oil prices surge over 30% due to a new geopolitical conflict.</li>
                  </ul>
              </div>
          </CardContent>
          <CardFooter>
             <Alert variant="default" className="w-full bg-callout text-callout-foreground border-blue-200 dark:border-blue-800">
                <Sparkles className="h-4 w-4" />
                <AlertTitle className="font-semibold">Optional Enrichment: Check Your Work</AlertTitle>
                <AlertDescription>
                    Compare your predicted outperformers to the actual performance of sector ETFs (e.g., XLF for Financials, XLK for Tech, XLE for Energy) over the last 3-6 months. Were your expectations aligned with reality? This is a great way to build a feedback loop for your analysis.
                </AlertDescription>
            </Alert>
          </CardFooter>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-xl">Reference: Historical Sector Rotation Map</CardTitle>
                <CardDescription>This table shows which sectors have historically performed well in each phase of the business cycle. Use it to check your reasoning.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Cycle Phase</TableHead>
                            <TableHead>Characteristics</TableHead>
                            <TableHead>Leading Sectors</TableHead>
                            <TableHead>Lagging Sectors</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {businessCycleSectors.map(cycle => (
                            <TableRow key={cycle.phase}>
                                <TableCell className="font-semibold flex items-center"><cycle.icon className="mr-2 h-4 w-4"/>{cycle.phase}</TableCell>
                                <TableCell>{cycle.characteristics}</TableCell>
                                <TableCell className="text-green-600 font-medium">{cycle.leading}</TableCell>
                                <TableCell className="text-red-600">{cycle.lagging}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>

        <Card className="bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center"><Eye className="mr-2 h-5 w-5"/>Reveal the Answer Key</CardTitle>
            <CardDescription>There are no perfect answers, only reasoned probabilities. Use this as a benchmark to test your thought process, not as an investment recommendation.</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="answers">
                <AccordionTrigger>
                    <div className="flex items-center font-semibold">
                        <Lightbulb className="mr-2 h-4 w-4"/>
                        Sector Analysis Framework
                    </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 space-y-4">
                  {sectorAnalysis.map(sector => (
                    <div key={sector.sector} className="p-4 border rounded-lg bg-background">
                      <h4 className="font-semibold text-base flex items-center mb-2">
                        <sector.icon className="mr-2 h-5 w-5 text-primary"/>{sector.sector}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3"><strong>Description:</strong> {sector.description}</p>
                      <div className="grid md:grid-cols-2 gap-4 text-xs">
                          <p><strong>Interest Rate Sensitivity:</strong> <span className={`font-semibold ${sector.interestRateSensitivity.includes("Positive") ? 'text-green-600' : sector.interestRateSensitivity.includes("Negative") ? 'text-red-600' : ''}`}>{sector.interestRateSensitivity}</span></p>
                          <p><strong>Inflation Impact:</strong> <span className={`font-semibold ${sector.inflationImpact.includes("Positive") ? 'text-green-600' : sector.inflationImpact.includes("Negative") ? 'text-red-600' : ''}`}>{sector.inflationImpact}</span></p>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2"><strong>Best environment:</strong> {sector.bestWhen}</p>
                      <p className="text-xs text-muted-foreground mt-1"><strong>Worst environment:</strong> {sector.worstWhen}</p>
                    </div>
                  ))}
                   <Alert variant="default" className="mt-4">
                      <AlertTriangle className="h-4 w-4"/>
                      <AlertTitle className="font-semibold">Market Sentiment Overlay</AlertTitle>
                      <AlertDescription>
                          Even in a fundamentally strong sector, if overall market sentiment turns sharply risk-off (e.g., due to a major geopolitical event), correlations can rise and all sectors may fall together in the short term. Always consider the broader market mood.
                      </AlertDescription>
                  </Alert>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you have learned to connect macro trends to strategy, you are ready for the next step.
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
