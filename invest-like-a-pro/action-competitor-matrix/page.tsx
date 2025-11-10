'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Lightbulb, Microscope, Scale, TrendingUp, FileText, Info } from 'lucide-react';
import Link from 'next/link';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const exerciseSteps = [
    {
        title: "Step 1: Choose Your Arena",
        description: "Select an industry you understand or want to learn more about. The best analysis comes from a place of genuine interest. Good starting points include Software-as-a-Service (SaaS), Consumer Staples (e.g., beverage companies), or Semiconductors."
    },
    {
        title: "Step 2: Identify Five Key Competitors",
        description: "Find five publicly traded companies that are direct competitors in your chosen industry. For example, if you choose athletic apparel, you might pick Nike, Adidas, Lululemon, Under Armour, and Puma."
    },
    {
        title: "Step 3: Build Your Competitor Matrix",
        description: "Create a table or spreadsheet. For each of the five companies, gather the following key metrics. You can find this data on financial websites like Yahoo Finance, Seeking Alpha, or from the companies' investor relations websites."
    },
    {
        title: "Step 4: Analyze and Conclude",
        description: "Now, analyze your matrix. Look for outliers and trends. Which company has the best combination of growth, profitability, and reasonable valuation? Which one looks weakest? Based on your analysis, write a one-paragraph conclusion."
    }
];

const matrixMetrics = [
    "Market Cap",
    "Revenue Growth (YoY %)",
    "Gross Margin (%)",
    "Operating Margin (%)",
    "Return on Invested Capital (ROIC %)",
    "Net Debt",
    "P/E Ratio",
    "P/S Ratio",
];

const graderHints = [
    "Did you choose a 'best-in-class' company that is outgrowing its peers with superior margins and a high ROIC?",
    "Is your 'buy' recommendation trading at a valuation that is reasonable relative to its quality and growth prospects?",
    "Is your 'sell' recommendation for a company that is losing market share, has deteriorating margins, or a weak balance sheet, even if it looks 'cheap'?",
    "Does your conclusion successfully connect the quantitative data (the metrics) with the qualitative aspects (like brand strength or competitive moat)?"
];

export default function ActionCompetitorMatrixPage() {
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
        <h1 className="text-3xl font-bold font-headline">Action: Build Your Industry Competitor Matrix</h1>
        <p className="text-muted-foreground mt-2">Part 1 of your capstone project. Gather data and analyze your chosen company against its key rivals.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Brain className="h-4 w-4" />
          <AlertTitle className="font-headline">From Analyst to Decision-Maker</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>Individual company analysis is useful, but great investment decisions are made with context. This exercise challenges you to move from analyzing a single company to mapping an entire industry. By comparing key competitors side-by-side, you'll learn to spot the true leaders, identify the laggards, and determine which company offers the best combination of quality, growth, and value.</p>
             <p className="font-semibold mt-2">The table you create in this exercise will be a required component of the 'Investment Memo Capstone' that follows, and your analysis will also support the final 'Portfolio Construction' capstone. Choose one of the companies from your analysis to be the subject of your memo, and be sure to save your work.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
                <FileText className="mr-2 h-5 w-5 text-primary"/>
                Your 4-Step Exercise
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {exerciseSteps.map((step, index) => (
              <div key={step.title} className="p-4 border rounded-lg bg-card shadow-sm">
                <h3 className="font-semibold text-lg">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
                 {index === 2 && (
                    <>
                        <Alert variant="default" className="mt-4 text-sm bg-blue-50 dark:bg-blue-900/30 text-foreground border-blue-200 dark:border-blue-800">
                          <Info className="h-4 w-4"/>
                          <AlertTitle className="font-semibold">Note on Data Consistency</AlertTitle>
                          <AlertDescription>
                              Ensure you are using data from the same period (e.g., the most recent fiscal year or trailing twelve months) for all companies to make a fair, apples-to-apples comparison.
                          </AlertDescription>
                        </Alert>
                        <div className="mt-4 overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Metric</TableHead>
                                        <TableHead>Company A</TableHead>
                                        <TableHead>Company B</TableHead>
                                        <TableHead>Company C</TableHead>
                                        <TableHead>Company D</TableHead>
                                        <TableHead>Company E</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {matrixMetrics.map(metric => (
                                        <TableRow key={metric}><TableCell className="font-semibold">{metric}</TableCell><TableCell></TableCell><TableCell></TableCell><TableCell></TableCell><TableCell></TableCell><TableCell></TableCell></TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </>
                 )}
                 {index === 3 && (
                   <>
                      <Alert variant="default" className="mt-4 text-sm bg-blue-50 dark:bg-blue-900/30 text-foreground border-blue-200 dark:border-blue-800">
                          <Info className="h-4 w-4"/>
                          <AlertTitle className="font-semibold">Analytical Tip</AlertTitle>
                          <AlertDescription>
                              As you fill out your matrix, visually highlight the best and worst performer for each metric (e.g., color the cell green for best, red for worst). This will make it easier to spot which companies are consistently leading or lagging across multiple dimensions.
                          </AlertDescription>
                        </Alert>
                      <Alert variant="default" className="mt-4 text-sm bg-muted/50">
                          <AlertTitle>Your Conclusion Should Answer:</AlertTitle>
                          <AlertDescription>
                              <ul className="list-disc pl-5 mt-2 space-y-1">
                                  <li>Which company would you buy today and why?</li>
                                  <li>Which company would you avoid or sell, and why?</li>
                              </ul>
                          </AlertDescription>
                      </Alert>
                    </>
                 )}
              </div>
            ))}
          </CardContent>
           <CardFooter>
             <Alert variant="default" className="w-full">
                <Lightbulb className="h-4 w-4" />
                <AlertTitle className="font-semibold">What Makes a Good Analysis?</AlertTitle>
                <AlertDescription>
                    Review your conclusion against these questions. A strong analysis justifies its choice by aligning a company's qualitative strengths with its quantitative performance and valuation.
                    <ul className="list-disc pl-5 space-y-2 text-sm mt-2">
                        {graderHints.map((hint, i) => <li key={i}>{hint}</li>)}
                    </ul>
                </AlertDescription>
            </Alert>
           </CardFooter>
        </Card>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Part 1 Complete. Proceed to the Capstone.</CardTitle>
                <CardDescription>
                    With your competitive matrix complete, you are now ready to build your full investment memo.
                </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-4">
                 <Button asChild>
                    <Link href={`/education/invest-like-a-pro/action-investment-memo${fromStep ? `#${fromStep}` : ''}`}>
                        Go to the Investment Memo Capstone
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
                <Button asChild variant="outline">
                    <Link href={`/roadmaps/invest-like-a-pro${fromStep ? `#${fromStep}` : ''}`}>
                        Return to the Invest Like a Pro Roadmap
                    </Link>
                </Button>
            </CardContent>
        </Card>

      </div>
    </>
  );
}
