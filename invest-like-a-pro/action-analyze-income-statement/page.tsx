'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Eye, FileText, XCircle, ArrowRight, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Tooltip, TooltipProvider, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

const formatCurrency = (value: number) => {
  const isNegative = value < 0;
  const formatted = new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(Math.abs(value));
  return isNegative ? `(${formatted})` : formatted;
};

const incomeStatementData = {
  years: ['2023', '2022'],
  lineItems: [
    { label: 'Total net sales', id: 'net-sales', values: [550000, 500000] },
    { label: 'Cost of sales', id: 'cogs', values: [350000, 280000] },
    { label: 'Gross profit', id: 'gross-profit', values: [200000, 220000], isBold: true, isSubtotal: true },
    { label: 'Research and development', id: 'rd', values: [70000, 60000] },
    { label: 'Selling, general and administrative', id: 'sga', values: [85000, 80000] },
    { label: 'Operating income', id: 'operating-income', values: [45000, 80000], isBold: true, isSubtotal: true },
    { label: 'Gain on sale of asset', id: 'gain-on-sale', values: [50000, 0], isHighlighted: true },
    { label: 'Interest expense', id: 'interest-expense', values: [10000, 8000] },
    { label: 'Income before income taxes', id: 'pretax-income', values: [85000, 72000], isSubtotal: true },
    { label: 'Provision for income taxes', id: 'taxes', values: [17000, 14400] },
    { label: 'Net income', id: 'net-income', values: [68000, 57600], isBold: true, isDoubleUnderlined: true },
  ],
};

const explanations: Record<string, { title: string; content: string }> = {
    'net-sales': { title: 'Total Net Sales (Revenue)', content: "The total amount of money generated from a company's sales of goods or services, minus any returns or allowances." },
    'cogs': { title: 'Cost of Sales (COGS)', content: 'The direct costs attributable to the production of the goods or services sold by a company. It includes material costs and direct labor costs.' },
    'gross-profit': { title: 'Gross Profit', content: 'The profit a company makes after deducting the costs associated with making and selling its products. Formula: Revenue - COGS.' },
    'rd': { title: 'Research & Development (R&D)', content: 'Expenses directed toward the development of new products or procedures.' },
    'sga': { title: 'Selling, General & Administrative (SG&A)', content: 'The sum of all direct and indirect selling expenses and all general and administrative expenses of a company. Includes salaries, marketing, and rent.' },
    'operating-income': { title: 'Operating Income', content: "A company's profit after subtracting operating expenses like wages and depreciation. It's a measure of core business profitability before interest and taxes." },
    'gain-on-sale': { title: 'Gain on Sale of Asset', content: 'A one-time gain from selling an asset (like a building or a business division) for more than its book value. This is a non-recurring item.' },
    'interest-expense': { title: 'Interest Expense', content: 'The cost of borrowed funds. A non-operating expense.' },
    'pretax-income': { title: 'Income Before Income Taxes', content: "Also known as earnings before tax (EBT), it's a measure of a company's profit before it has to pay corporate income tax." },
    'taxes': { title: 'Provision for Income Taxes', content: 'The estimated amount of income tax a company will have to pay for the period.' },
    'net-income': { title: 'Net Income (The "Bottom Line")', content: "The company's total profit after all expenses, including taxes, have been deducted from revenues." },
};

const InfoTooltip = ({ itemId }: { itemId: string }) => {
  const explanation = explanations[itemId];
  if (!explanation) return null;
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Info className="h-3.5 w-3.5 text-muted-foreground ml-2 cursor-help" />
        </TooltipTrigger>
        <TooltipContent className="max-w-xs p-3">
          <p className="font-bold mb-1">{explanation.title}</p>
          <p className="text-sm">{explanation.content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};


const redFlags = [
    {
        title: "Red Flag 1: Declining Profitability Despite Growing Sales",
        icon: XCircle,
        description: "Although revenue grew by 10% (from $500k to $550k), the company's Gross Profit actually decreased from $220k to $200k. This is a major warning sign. It means the Cost of Sales grew much faster than revenue, causing the Gross Margin to shrink from 44% to 36%. Furthermore, Operating Income (profit from the core business) fell sharply from $80k to $45k. This indicates the company may be losing its pricing power or facing rapidly increasing production costs, and its core business is becoming less profitable."
    },
    {
        title: "Red Flag 2: Net Income is Propped Up by a One-Time Gain",
        icon: XCircle,
        description: "The final Net Income appears to have grown from $57.6k to $68k, which looks good on the surface. However, this growth is entirely due to a one-time '$50,000 Gain on sale of asset'. This is not part of the company's recurring business operations. Without this one-time event, the company's pre-tax income would have been only $35,000, a significant drop from the previous year. This masks the deteriorating performance of the core business."
    }
]

export default function AnalyzeIncomeStatementExercisePage() {
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
        <h1 className="text-3xl font-bold font-headline">Exercise: Analyze an Income Statement</h1>
        <p className="text-muted-foreground mt-2">Apply your knowledge by spotting the red flags in this income statement.</p>
      </div>
       <div className="space-y-6">
        <Alert>
          <FileText className="h-4 w-4" />
          <AlertTitle className="font-headline">Your Task</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>You are an analyst reviewing the latest annual income statement for 'Example Corp.' At first glance, it seems like revenue and net income are both growing. However, there are at least two significant red flags hidden in the numbers that suggest the business may be weaker than it appears.</p>
            <p className="font-semibold">Your job is to identify these two red flags. Write them down on a piece of paper or in a document, explaining why they are concerning. When you think you have the answers, check them against the answer key below.</p>
          </AlertDescription>
        </Alert>

        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-xl">Example Corp. - Income Statement</CardTitle>
                <CardDescription>All figures are in thousands ($)</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Line Item</TableHead>
                            <TableHead className="text-right">2023</TableHead>
                            <TableHead className="text-right">2022</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {incomeStatementData.lineItems.map((item, index) => (
                        <TableRow key={index} className={item.isSubtotal ? "bg-muted/50" : ""}>
                            <TableCell className={`font-medium ${item.isBold ? 'font-bold' : ''} flex items-center`}>
                              {item.label}
                              <InfoTooltip itemId={item.id} />
                            </TableCell>
                            <TableCell className={`text-right ${item.isBold ? 'font-bold' : ''}`}>
                            {formatCurrency(item.values[0])}
                            </TableCell>
                            <TableCell className={`text-right ${item.isBold ? 'font-bold' : ''}`}>
                            {formatCurrency(item.values[1])}
                            </TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
        
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle>Reveal the Answer Key</CardTitle>
            <CardDescription>Once you've completed the exercise, click below to check your answers.</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="answers">
                <AccordionTrigger>
                    <div className="flex items-center">
                        <Eye className="mr-2 h-4 w-4"/>
                        Click to Reveal Answer Key
                    </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 space-y-4">
                  {redFlags.map(flag => (
                    <Alert key={flag.title} variant="destructive">
                        <flag.icon className="h-4 w-4" />
                        <AlertTitle className="font-semibold">{flag.title}</AlertTitle>
                        <AlertDescription>
                            {flag.description}
                        </AlertDescription>
                    </Alert>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you have applied your knowledge, return to the Invest Like a Pro roadmap to continue your analysis.
                </CardDescription>
            </CardHeader>
            <CardContent>
                 <Button asChild>
                    <Link href={`/roadmaps/invest-like-a-pro${fromStep ? `?from=${fromStep}` : ''}`}>
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
