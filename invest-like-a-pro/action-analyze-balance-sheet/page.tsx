'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Eye, FileText, XCircle, ArrowRight, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
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

const balanceSheetData = {
  years: ['2023', '2022'],
  assets: {
    current: [
      { id: 'cash', label: 'Cash', values: [50000, 100000] },
      { id: 'ar', label: 'Accounts Receivable', values: [60000, 40000] },
      { id: 'inventory', label: 'Inventory', values: [50000, 30000] },
    ],
    nonCurrent: [
      { id: 'ppe', label: 'Property, Plant & Equipment', values: [300000, 250000] },
    ],
  },
  liabilities: {
    current: [
      { id: 'ap', label: 'Accounts Payable', values: [70000, 40000] },
      { id: 'short-debt', label: 'Short-term Debt', values: [80000, 20000] },
    ],
    nonCurrent: [
      { id: 'long-debt', label: 'Long-term Debt', values: [200000, 150000] },
    ],
  },
  equity: {
    items: [
      { id: 'common-stock', label: 'Common Stock', values: [10000, 10000] },
      { id: 'retained-earnings', label: 'Retained Earnings', values: [50000, 100000] },
    ],
  },
};

const calculateTotals = (data: typeof balanceSheetData) => {
    const totalCurrentAssets2023 = data.assets.current.reduce((sum, item) => sum + item.values[0], 0);
    const totalCurrentAssets2022 = data.assets.current.reduce((sum, item) => sum + item.values[1], 0);
    const totalNonCurrentAssets2023 = data.assets.nonCurrent.reduce((sum, item) => sum + item.values[0], 0);
    const totalNonCurrentAssets2022 = data.assets.nonCurrent.reduce((sum, item) => sum + item.values[1], 0);
    const totalAssets2023 = totalCurrentAssets2023 + totalNonCurrentAssets2023;
    const totalAssets2022 = totalCurrentAssets2022 + totalNonCurrentAssets2022;

    const totalCurrentLiabilities2023 = data.liabilities.current.reduce((sum, item) => sum + item.values[0], 0);
    const totalCurrentLiabilities2022 = data.liabilities.current.reduce((sum, item) => sum + item.values[1], 0);
    const totalNonCurrentLiabilities2023 = data.liabilities.nonCurrent.reduce((sum, item) => sum + item.values[0], 0);
    const totalNonCurrentLiabilities2022 = data.liabilities.nonCurrent.reduce((sum, item) => sum + item.values[1], 0);
    const totalLiabilities2023 = totalCurrentLiabilities2023 + totalNonCurrentLiabilities2023;
    const totalLiabilities2022 = totalCurrentLiabilities2022 + totalNonCurrentLiabilities2022;

    const totalEquity2023 = data.equity.items.reduce((sum, item) => sum + item.values[0], 0);
    const totalEquity2022 = data.equity.items.reduce((sum, item) => sum + item.values[1], 0);

    return {
        totalCurrentAssets2023, totalCurrentAssets2022, totalAssets2023, totalAssets2022,
        totalCurrentLiabilities2023, totalCurrentLiabilities2022, totalLiabilities2023, totalLiabilities2022,
        totalEquity2023, totalEquity2022,
    };
};

const totals = calculateTotals(balanceSheetData);


const redFlags = [
    {
        title: "Red Flag 1: Worsening Liquidity (Danger of a Cash Crunch)",
        icon: XCircle,
        description: `The company's short-term financial health is deteriorating rapidly. The Current Ratio (Current Assets / Current Liabilities) has fallen from a healthy 2.27 in 2022 (${formatCurrency(totals.totalCurrentAssets2022)} / ${formatCurrency(totals.totalCurrentLiabilities2022)}) to a dangerous 1.07 in 2023 (${formatCurrency(totals.totalCurrentAssets2023)} / ${formatCurrency(totals.totalCurrentLiabilities2023)}). This means the company now has only $1.07 in liquid assets for every $1 of bills due within the next year. This is a very thin margin of safety and puts the company at risk of not being able to pay its short-term bills if there's any disruption to its business.`
    },
    {
        title: "Red Flag 2: Rising Leverage and Shrinking Equity",
        icon: XCircle,
        description: `The company is funding its growth by taking on a lot of debt, while its equity base is shrinking. Total Liabilities grew from ${formatCurrency(totals.totalLiabilities2022)} to ${formatCurrency(totals.totalLiabilities2023)}, while Stockholders' Equity fell from ${formatCurrency(totals.totalEquity2022)} to ${formatCurrency(totals.totalEquity2023)}. This has caused the Debt-to-Equity ratio to explode from a reasonable 1.91 in 2022 to a very high 5.83 in 2023. The company is becoming much riskier and more fragile, with debt holders having a much larger claim on the company's assets than the owners (shareholders).`
    }
]

const explanations: Record<string, { title: string; content: string }> = {
    'cash': { title: 'Cash', content: 'The most liquid asset, representing cash on hand and in bank accounts.' },
    'ar': { title: 'Accounts Receivable', content: "Money owed to the company by its customers for goods or services already delivered. It's an IOU from customers." },
    'inventory': { title: 'Inventory', content: 'Raw materials, work-in-progress, and finished goods that the company plans to sell.' },
    'ppe': { title: 'Property, Plant & Equipment', content: 'Long-term physical assets used in the business, like factories, machinery, and land.' },
    'ap': { title: 'Accounts Payable', content: "Money the company owes to its suppliers for goods or services it has received but not yet paid for. It's an IOU to suppliers." },
    'short-debt': { title: 'Short-term Debt', content: 'Loans and other debt obligations that are due within one year.' },
    'long-debt': { title: 'Long-term Debt', content: 'Loans and other debt obligations that are due after one year.' },
    'common-stock': { title: 'Common Stock', content: "Represents the original capital paid into the company by investors when it issued shares. It's an accounting value, not the market value of the stock." },
    'retained-earnings': { title: 'Retained Earnings', content: "The cumulative net income the company has earned over its lifetime, minus any dividends it has paid out to shareholders. It's the profit that has been reinvested back into the business." },
};

const InfoTooltip = ({ itemId }: { itemId: string }) => {
  const explanation = explanations[itemId];
  if (!explanation) return null;
  return (
    <TooltipProvider><Tooltip>
      <TooltipTrigger asChild><Info className="h-3.5 w-3.5 text-muted-foreground ml-2 cursor-help" /></TooltipTrigger>
      <TooltipContent className="max-w-xs p-3">
        <p className="font-bold mb-1">{explanation.title}</p>
        <p className="text-sm">{explanation.content}</p>
      </TooltipContent>
    </Tooltip></TooltipProvider>
  );
};


export default function AnalyzeBalanceSheetExercisePage() {
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
        <h1 className="text-3xl font-bold font-headline">Exercise: Analyze a Balance Sheet</h1>
        <p className="text-muted-foreground mt-2">Apply your knowledge by spotting the red flags in this balance sheet.</p>
      </div>
       <div className="space-y-6">
        <Alert>
          <FileText className="h-4 w-4" />
          <AlertTitle className="font-headline">Your Task</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>You are an analyst reviewing the balance sheet for 'Example Corp.' At first glance, it seems like Total Assets are growing. However, there are at least two significant red flags hidden in the numbers that suggest the company's financial health is deteriorating.</p>
            <p className="font-semibold">Your job is to identify these two red flags. Write them down on a piece of paper or in a document, explaining why they are concerning. When you think you have the answers, check them against the answer key below.</p>
          </AlertDescription>
        </Alert>

        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-xl">Example Corp. - Balance Sheet</CardTitle>
                <CardDescription>As of December 31 | All figures are in thousands ($)</CardDescription>
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
                        <TableRow className="bg-muted/30"><TableCell className="font-bold">Assets</TableCell><TableCell></TableCell><TableCell></TableCell></TableRow>
                        <TableRow><TableCell className="pl-4 font-semibold text-muted-foreground">Current Assets</TableCell><TableCell></TableCell><TableCell></TableCell></TableRow>
                        {balanceSheetData.assets.current.map(item => (<TableRow key={item.label}><TableCell className="pl-8 flex items-center">{item.label} <InfoTooltip itemId={item.id} /></TableCell><TableCell className="text-right">{formatCurrency(item.values[0])}</TableCell><TableCell className="text-right">{formatCurrency(item.values[1])}</TableCell></TableRow>))}
                        <TableRow><TableCell className="pl-8 font-semibold">Total current assets</TableCell><TableCell className="text-right font-semibold">{formatCurrency(totals.totalCurrentAssets2023)}</TableCell><TableCell className="text-right font-semibold">{formatCurrency(totals.totalCurrentAssets2022)}</TableCell></TableRow>
                        
                        <TableRow><TableCell className="pl-4 font-semibold text-muted-foreground">Non-Current Assets</TableCell><TableCell></TableCell><TableCell></TableCell></TableRow>
                        {balanceSheetData.assets.nonCurrent.map(item => (<TableRow key={item.label}><TableCell className="pl-8 flex items-center">{item.label} <InfoTooltip itemId={item.id} /></TableCell><TableCell className="text-right">{formatCurrency(item.values[0])}</TableCell><TableCell className="text-right">{formatCurrency(item.values[1])}</TableCell></TableRow>))}
                        <TableRow className="bg-primary/10"><TableCell className="font-bold">Total Assets</TableCell><TableCell className="text-right font-bold text-lg">{formatCurrency(totals.totalAssets2023)}</TableCell><TableCell className="text-right font-bold text-lg">{formatCurrency(totals.totalAssets2022)}</TableCell></TableRow>

                        <TableRow className="bg-muted/30"><TableCell className="font-bold">Liabilities & Stockholders' Equity</TableCell><TableCell></TableCell><TableCell></TableCell></TableRow>
                        <TableRow><TableCell className="pl-4 font-semibold text-muted-foreground">Current Liabilities</TableCell><TableCell></TableCell><TableCell></TableCell></TableRow>
                        {balanceSheetData.liabilities.current.map(item => (<TableRow key={item.label}><TableCell className="pl-8 flex items-center">{item.label} <InfoTooltip itemId={item.id} /></TableCell><TableCell className="text-right">{formatCurrency(item.values[0])}</TableCell><TableCell className="text-right">{formatCurrency(item.values[1])}</TableCell></TableRow>))}
                        <TableRow><TableCell className="pl-8 font-semibold">Total current liabilities</TableCell><TableCell className="text-right font-semibold">{formatCurrency(totals.totalCurrentLiabilities2023)}</TableCell><TableCell className="text-right font-semibold">{formatCurrency(totals.totalCurrentLiabilities2022)}</TableCell></TableRow>

                        <TableRow><TableCell className="pl-4 font-semibold text-muted-foreground">Non-Current Liabilities</TableCell><TableCell></TableCell><TableCell></TableCell></TableRow>
                        {balanceSheetData.liabilities.nonCurrent.map(item => (<TableRow key={item.label}><TableCell className="pl-8 flex items-center">{item.label} <InfoTooltip itemId={item.id} /></TableCell><TableCell className="text-right">{formatCurrency(item.values[0])}</TableCell><TableCell className="text-right">{formatCurrency(item.values[1])}</TableCell></TableRow>))}
                        <TableRow className="bg-destructive/10"><TableCell className="font-semibold">Total Liabilities</TableCell><TableCell className="text-right font-bold text-lg">{formatCurrency(totals.totalLiabilities2023)}</TableCell><TableCell className="text-right font-bold text-lg">{formatCurrency(totals.totalLiabilities2022)}</TableCell></TableRow>
                        
                         <TableRow><TableCell className="pl-4 font-semibold text-muted-foreground">Stockholders' Equity</TableCell><TableCell></TableCell><TableCell></TableCell></TableRow>
                        {balanceSheetData.equity.items.map(item => (<TableRow key={item.label}><TableCell className="pl-8 flex items-center">{item.label} <InfoTooltip itemId={item.id} /></TableCell><TableCell className="text-right">{formatCurrency(item.values[0])}</TableCell><TableCell className="text-right">{formatCurrency(item.values[1])}</TableCell></TableRow>))}
                        <TableRow><TableCell className="font-semibold">Total stockholders' equity</TableCell><TableCell className="text-right font-bold">{formatCurrency(totals.totalEquity2023)}</TableCell><TableCell className="text-right font-bold">{formatCurrency(totals.totalEquity2022)}</TableCell></TableRow>
                        
                        <TableRow className="bg-primary/10"><TableCell className="font-bold">Total Liabilities and Equity</TableCell><TableCell className="text-right font-bold text-lg">{formatCurrency(totals.totalLiabilities2023 + totals.totalEquity2023)}</TableCell><TableCell className="text-right font-bold text-lg">{formatCurrency(totals.totalLiabilities2022 + totals.totalEquity2022)}</TableCell></TableRow>
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
