'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Search, FileText, Info, Globe, Lightbulb } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const steps = [
  {
    title: "Step 1: Choose Your Company",
    description: "Pick a large, well-known public company from the S&P 500 that you are familiar with as a consumer. This makes the process more interesting. Good examples include Apple (AAPL), Nike (NKE), Coca-Cola (KO), or McDonald's (MCD)."
  },
  {
    title: "Step 2, Method A: Use the SEC EDGAR Database (Primary Source)",
    description: "Go directly to the primary source: The SEC's EDGAR (Electronic Data Gathering, Analysis, and Retrieval) system. This is the official database for all public company filings and the method professionals use.",
    icon: Globe,
    substeps: [
        "Go to the SEC's company search page: <a href='https://www.sec.gov/edgar/searchedgar/companysearch' target='_blank' rel='noopener noreferrer' class='text-primary underline'>www.sec.gov/edgar/searchedgar/companysearch</a>.",
        "In the search box, type the company's name or stock ticker (e.g., 'Apple' or 'AAPL') and click 'Search'.",
        "First, ensure the 'Investor Toolkit' button in the top right is set to 'On'.",
        "On the results page, look for the 'Selected Filings' section on the right. Click on '[+] 10-K (annual reports) and 10-Q (quarterly reports)' to expand it.",
        "Click 'Filing' next to the most recent 10-K report to open the annual report. This is the document you will use for this exercise.",
        "Important: Do not use 8-K reports for this exercise. Those are for unscheduled material events and are not the comprehensive financial statements you need."
    ]
  },
    {
    title: "Step 2, Method B: Use the Investor Relations Website (User-Friendly Alternative)",
    description: "Most public companies have a dedicated 'Investor Relations' section on their own website. These pages are designed to be more user-friendly than SEC filings and often contain helpful presentations and summaries.",
    icon: Search,
    substeps: [
        "Go to a search engine and type '[Company Name] Investor Relations' (e.g., 'Apple Investor Relations').",
        "Navigate to the company's IR page. It's often linked in the footer of the main website.",
        "Look for a section titled 'Financials,' 'SEC Filings,' or 'Quarterly/Annual Reports.'",
        "Download the latest Annual Report (10-K) or the latest Quarterly Report (10-Q). These are often provided as user-friendly PDFs."
    ]
  },
  {
    title: "Step 3: Understand 10-K vs. 10-Q",
    description: "It's important to know the difference between the two main types of reports you'll use.",
    icon: FileText,
    substeps: [
        "A 10-K (Annual Report) is a comprehensive, audited report covering the company's full fiscal year. It contains detailed information on the business, risk factors, legal proceedings, and full financial statements. This is the most important document for deep analysis.",
        "A 10-Q (Quarterly Report) is a less-detailed, unaudited report covering the company's most recent three-month period. It provides a timely update on performance between annual reports."
    ]
  },
  {
    title: "Step 4: Navigate the Document",
    description: "A 10-K is a large document, but the modern SEC filing viewer makes it easy to navigate. Look for a 'Sections' or menu icon which will open a table of contents.",
    icon: Search,
    substeps: [
        "Open the sections menu (often a list icon in the top left or right corner).",
        "Navigate to 'Consolidated Statements of Income'.",
        "Navigate to 'Consolidated Balance Sheets'.",
        "Navigate to 'Consolidated Statements of Cash Flows'.",
        "Keep this document open, as you will refer to it while working through the next lessons in this roadmap."
    ]
  }
];

export default function ActionFindFinancialStatementsPage() {
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
        <h1 className="text-3xl font-bold font-headline">Action: Locate a Company's Financial Statements</h1>
        <p className="text-muted-foreground mt-2">Your first step into real-world analysis: locating and navigating an official annual report (10-K).</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Brain className="h-4 w-4" />
          <AlertTitle className="font-headline">From Theory to Practice</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>You can't analyze what you can't find. The next few lessons will teach you how to read financial statements, but first, you need to know how to locate these critical documents for any public company. This exercise will walk you through the exact steps professional analysts use to get primary source financial data.</p>
            <p className="font-semibold">Before you begin, open a notebook or a new document on your computer. Title it with your chosen company's name. You will use this document to record your findings over the next several exercises, building a complete research dossier.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">Your Guide to Locating Financials</CardTitle>
            <CardDescription>Follow these steps to find the three core financial statements for a company of your choice.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {steps.map(step => (
              <div key={step.title} className="p-4 border rounded-lg bg-card shadow-sm">
                <h3 className="font-semibold text-lg flex items-center mb-2">
                  {step.icon ? <step.icon className="mr-3 h-5 w-5 text-primary" /> : null}
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
                 {step.substeps && (
                    <div className="mt-3">
                         <ul className="list-disc pl-5 space-y-2 text-sm">
                            {step.substeps.map((sub, i) => <li key={i} dangerouslySetInnerHTML={{ __html: sub }}></li>)}
                         </ul>
                    </div>
                 )}
              </div>
            ))}
          </CardContent>
          <CardFooter>
             <Alert variant="default" className="w-full">
                <Lightbulb className="h-4 w-4" />
                <AlertTitle>You've Done It!</AlertTitle>
                <AlertDescription>
                   <p>Congratulations! You now have the three core financial statements in front of you. Don't worry about understanding them yet. The goal of this exercise was simply to demystify the process of locating them. This document will be your reference as you proceed through the next lessons on how to read each statement.</p>
                   <p className="mt-2 font-semibold">Were you able to find the 10-K and identify all three core statements? If not, note where you got stuck—troubleshooting this step is part of becoming a better analyst.</p>
                </AlertDescription>
            </Alert>
          </CardFooter>
        </Card>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you know where to find the data, you are ready to learn how to analyze it.
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
