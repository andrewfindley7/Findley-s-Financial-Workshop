'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tooltip, TooltipProvider, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Info, Variable, FlaskConical, CircleDollarSign, Coins, TrendingUp, TrendingDown, ArrowDown, Zap, FileText, CheckCircle, XCircle, Brain, ArrowRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';


const formatCurrencyParentheses = (value: number) => {
  if (value < 0) {
    return `(${new Intl.NumberFormat('en-US').format(Math.abs(value))})`;
  }
  return new Intl.NumberFormat('en-US').format(value);
};

const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'decimal',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };
  

const cashFlowData = {
  companyName: 'Example Corp.',
  period: 'For the Year Ended December 31',
  currency: 'In Thousands',
  years: ['2023', '2022'],
  cfo: {
    items: [
      { label: 'Net income', values: [57600, 50400], id: 'cfo-net-income' },
      { label: 'Depreciation and amortization', values: [12000, 11000], id: 'cfo-da' },
      { label: 'Stock-based compensation', values: [4800, 4100], id: 'cfo-sbc' },
      { label: 'Increase in accounts receivable', values: [-5000, -4000], id: 'cfo-ar' },
      { label: 'Increase in inventory', values: [-7000, -6000], id: 'cfo-inventory' },
      { label: 'Increase in accounts payable', values: [4000, 3500], id: 'cfo-ap' },
      { label: 'Other non-cash items', values: [5000, 3900], id: 'cfo-other' },
    ],
    total: { label: 'Net cash provided by operating activities', values: [71400, 62900], isBold: true, id: 'cfo' }
  },
  cfi: {
    items: [
      { label: 'Purchase of property, plant, and equipment', values: [-25000, -20000], id: 'cfi-purchase' },
      { label: 'Sale of equipment', values: [3000, 2000], id: 'cfi-sale' },
      { label: 'Other investing activities', values: [-9400, -7000], id: 'cfi-other' },
    ],
    total: { label: 'Net cash used in investing activities', values: [-31400, -25000], isBold: true, id: 'cfi' }
  },
  cff: {
    items: [
      { label: 'Net common stock repurchased', values: [-10200, -12800], id: 'cff-stock-repurchase' },
      { label: 'Proceeds from issuance of long-term debt', values: [15000, 10000], id: 'cff-debt-issue' },
      { label: 'Repayment of long-term debt', values: [-8000, -7500], id: 'cff-debt-repay' },
      { label: 'Payment of dividends', values: [-10600, -9000], id: 'cff-dividends' },
    ],
    total: { label: 'Net cash used in financing activities', values: [-13800, -19300], isBold: true, id: 'cff' }
  },
  summary: {
    netChange: { label: 'Net increase in cash', values: [26200, 18600], isBold: true, id: 'summary-net-change' },
    beginCash: { label: 'Cash and cash equivalents at beginning of year', values: [43200, 24600], id: 'summary-begin-cash' },
    endCash: { label: 'Cash and cash equivalents at end of year', values: [69400, 43200], isBold: true, isDoubleUnderlined: true, id: 'summary-end-cash' }
  }
};

const explanations: Record<string, { title: string; content: string, formula?: string, example?: string }> = {
    'cfo-net-income': { title: 'Net Income', content: "The starting point. It's the 'bottom line' from the Income Statement, but it's an accounting profit, not a cash profit." },
    'cfo-da': { title: 'Depreciation & Amortization', content: "A non-cash expense that was subtracted on the income statement. Since no actual cash was spent, it's added back to reconcile to cash flow." },
    'cfo-sbc': { title: 'Stock-Based Compensation', content: "Paying employees with stock is an expense on the income statement, but it doesn't use cash, so it's added back here." },
    'cfo-ar': { title: 'Change in Accounts Receivable', content: "If AR increases, it means the company sold products but hasn't received the cash yet. It's a use of cash (cash not yet collected), so it's subtracted." },
    'cfo-inventory': { title: 'Change in Inventory', content: "If inventory increases, the company spent cash to build up its stock of goods. It's a use of cash, so it's subtracted." },
    'cfo-ap': { title: 'Change in Accounts Payable', content: "If AP increases, the company received goods/services but hasn't paid its suppliers yet. It's a source of cash (like a short-term loan from suppliers), so it's added back." },
    'cfo-other': { title: 'Other Non-Cash Items', content: "A catch-all for other adjustments needed to reconcile net income to cash flow." },
    'cfo': { title: 'Net Cash from Operating Activities', content: "The most important line on the statement. It's the cash generated by the company's core business.", formula: "Net Income + Non-Cash Charges +/- Changes in Working Capital", example: "For 2023: $57,600 + $12,000 + $4,800 - $5,000 - $7,000 + $4,000 + $5,000 = $71,400." },
    'cfi-purchase': { title: 'Purchase of Property, Plant, & Equipment (CapEx)', content: "Cash spent on buying long-term assets. This is a primary way companies invest in future growth. It's a cash outflow." },
    'cfi-sale': { title: 'Sale of Equipment', content: "If a company sells old assets, it generates cash. This is a cash inflow." },
    'cfi-other': { title: 'Other Investing Activities', content: "Can include acquiring other companies or buying/selling other investments. Outflows are negative, inflows are positive." },
    'cfi': { title: 'Net Cash from Investing Activities', content: "Total cash used in or generated from investment activities. A negative number often means healthy reinvestment in the business.", formula: "Sum of all investing cash inflows and outflows", example: "For 2023: -$25,000 + $3,000 - $9,400 = -$31,400." },
    'cff-stock-repurchase': { title: 'Net Common Stock Repurchased', content: "A negative number means the company used cash to buy back its own shares, returning capital to shareholders. A positive number means new stock was issued, raising cash but diluting ownership." },
    'cff-debt-issue': { title: 'Proceeds from Issuance of Long-Term Debt', content: "Cash received from borrowing money via loans or bonds. A cash inflow." },
    'cff-debt-repay': { title: 'Repayment of Long-Term Debt', content: "Cash used to pay back loans or bonds. A cash outflow." },
    'cff-dividends': { title: 'Payment of Dividends', content: "Cash paid out to shareholders as dividends. A cash outflow and a direct return of capital to owners." },
    'cff': { title: 'Net Cash from Financing Activities', content: "Total cash flow between a company and its owners/creditors. For a mature, profitable company, this number is often negative, which is a good sign—it means the company is returning more cash to shareholders than it is raising from them.", formula: "Sum of all financing cash inflows and outflows", example: "For 2023: -$10,200 + $15,000 - $8,000 - $10,600 = -$13,800." },
    'summary-net-change': { title: 'Net Increase in Cash', content: "The sum of the cash flows from operating, investing, and financing activities. It shows the total change in the company's cash balance for the period.", formula: "CFO + CFI + CFF", example: "For 2023: $71,400 - $31,400 - $13,800 = $26,200." },
    'summary-begin-cash': { title: 'Cash at Beginning of Year', content: "The company's cash balance at the start of the accounting period. This figure must match the cash balance from the previous period's balance sheet." },
    'summary-end-cash': { title: 'Cash at End of Year', content: "The company's cash balance at the end of the accounting period. This figure must match the cash amount on the current period's balance sheet.", formula: "Beginning Cash + Net Increase in Cash", example: "For 2023: $43,200 + $26,200 = $69,400. This is an intentional mismatch for the example." },
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
        {explanation.formula && (<><Separator className="my-2" /><div className="space-y-1"><p className="font-semibold text-xs flex items-center"><Variable className="h-3 w-3 mr-1.5"/> Formula</p><code className="text-xs p-1.5 bg-muted rounded-sm block">{explanation.formula}</code></div></>)}
        {explanation.example && (<div className="space-y-1 mt-2"><p className="font-semibold text-xs flex items-center"><FlaskConical className="h-3 w-3 mr-1.5"/> Example</p><p className="text-xs italic text-muted-foreground">{explanation.example}</p></div>)}
      </TooltipContent>
    </Tooltip></TooltipProvider>
  );
};


export default function CashFlowStatementPage() {
  const searchParams = useSearchParams();
  const fromStep = searchParams.get('from');
  const { cfo, cfi, cff, summary } = cashFlowData;

  const fcf = {
      '2023': cfo.total.values[0] + cfi.items.find(i => i.id === 'cfi-purchase')!.values[0],
      '2022': cfo.total.values[1] + cfi.items.find(i => i.id === 'cfi-purchase')!.values[1]
  }
  
  const fcfYield = {
      marketCap: 1200000,
      '2023': fcf['2023'] > 0 ? (fcf['2023'] / 1200000) * 100 : 0,
  };


  return (
    <>
      <Alert variant="destructive" className="mb-6 bg-amber-50 dark:bg-amber-900/20 border-amber-300 dark:border-amber-700">
          <Info className="h-4 w-4 text-amber-500" />
          <AlertDescription className="text-amber-800 dark:text-amber-300 text-xs">
              For educational use only. Not financial or tax advice. Consult a licensed advisor before making major decisions.
          </AlertDescription>
      </Alert>
      <div className="mb-8">
        <h1 className="text-3xl font-bold font-headline">How to Read a Cash Flow Statement</h1>
        <p className="text-muted-foreground mt-2">Follow the money to see how a company generates and uses cash.</p>
      </div>
       <div className="space-y-6">
        <Alert>
          <FileText className="h-4 w-4" />
          <AlertTitle className="font-headline">Purpose & Big Picture: Cash is King</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>While the income statement shows a company's profit, the cash flow statement shows how the company is actually generating and spending cash. Profit on paper doesn't pay the bills—cash does. This statement reconciles the accounting-based net income with the real cash movements, breaking them down into three key activities.</p>
            <p className="font-semibold mt-2">For many investors, this is the most important financial statement because it's the hardest to manipulate with accounting tricks. It provides a 'truth serum' for assessing a company's real financial health and management quality.</p>
          </AlertDescription>
        </Alert>

         <Card className="bg-muted/30">
            <CardHeader><CardTitle className="font-headline text-lg">The Reconciliation from Profit to Cash</CardTitle></CardHeader>
            <CardContent className="space-y-4 text-center">
                 <div className="p-3 bg-background rounded-md"><h3 className="text-lg font-semibold">Net Income (from Income Statement)</h3></div>
                 <ArrowDown className="mx-auto h-6 w-6 text-muted-foreground"/>
                 <div className="p-2 border border-dashed rounded-md"><p className="text-sm font-medium">+ Add back non-cash expenses (e.g., Depreciation)</p></div>
                 <ArrowDown className="mx-auto h-6 w-6 text-muted-foreground"/>
                 <div className="p-2 border border-dashed rounded-md"><p className="text-sm font-medium">+/- Adjust for changes in working capital (e.g., Inventory, Receivables)</p></div>
                 <ArrowDown className="mx-auto h-6 w-6 text-muted-foreground"/>
                 <div className="p-3 bg-primary/10 rounded-md border border-primary/20"><h3 className="text-lg font-semibold text-primary">Cash From Operations (CFO)</h3></div>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-xl">The Flow of the Cash Flow Statement</CardTitle>
                <CardDescription>We'll analyze Example Corp.'s statement by breaking it into sections.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                
                {/* Block 1: Operating Activities */}
                <div className="p-4 border rounded-lg">
                    <h3 className="text-lg font-semibold flex items-center mb-2"><TrendingUp className="mr-2 h-5 w-5 text-primary"/>1. Cash Flow from Operating Activities (CFO)</h3>
                    <p className="text-sm text-muted-foreground mb-3">This is the most important section, showing cash generated by the company's core business.</p>
                    <Table>
                        <TableHeader><TableRow><TableHead>Line Item</TableHead><TableHead className="text-right">2023</TableHead><TableHead className="text-right">2022</TableHead></TableRow></TableHeader>
                        <TableBody>
                            {cfo.items.map(item => <TableRow key={item.id}><TableCell className="flex items-center">{item.label} <InfoTooltip itemId={item.id} /></TableCell><TableCell className="text-right">{formatCurrencyParentheses(item.values[0])}</TableCell><TableCell className="text-right">{formatCurrencyParentheses(item.values[1])}</TableCell></TableRow>)}
                            <TableRow className="bg-muted/50"><TableCell className="font-semibold flex items-center">{cfo.total.label} <InfoTooltip itemId={cfo.total.id} /></TableCell><TableCell className="text-right font-semibold">${formatCurrency(cfo.total.values[0])}</TableCell><TableCell className="text-right font-semibold">${formatCurrency(cfo.total.values[1])}</TableCell></TableRow>
                        </TableBody>
                    </Table>
                    <Alert className="mt-4 text-sm bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800">
                        <Info className="h-4 w-4"/>
                        <AlertTitle className="font-semibold">Investor's View: Is the core business generating cash?</AlertTitle>
                        <AlertDescription>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>The company starts with <strong>Net Income</strong> and adds back non-cash expenses like <strong>Depreciation</strong> and <strong>Stock-Based Comp.</strong> to get closer to a true cash figure.</li>
                                <li>The changes in working capital (<strong>AR, Inventory, AP</strong>) show how cash is being used in day-to-day operations. Here, cash was used to fund more inventory and receivables, which is normal for a growing company.</li>
                                <li>The final <strong>Net Cash from Operations</strong> is strong and growing (up 13.5% YoY), confirming that the profits shown on the income statement are backed by real cash.</li>
                            </ul>
                        </AlertDescription>
                    </Alert>
                </div>
                
                <ArrowDown className="mx-auto h-6 w-6 text-muted-foreground" />

                {/* Block 2: Investing Activities */}
                <div className="p-4 border rounded-lg">
                    <h3 className="text-lg font-semibold flex items-center mb-2"><TrendingDown className="mr-2 h-5 w-5 text-primary"/>2. Cash Flow from Investing Activities (CFI)</h3>
                    <p className="text-sm text-muted-foreground mb-3">This section shows where the company is investing its cash for future growth.</p>
                    <Table>
                        <TableHeader><TableRow><TableHead>Line Item</TableHead><TableHead className="text-right">2023</TableHead><TableHead className="text-right">2022</TableHead></TableRow></TableHeader>
                        <TableBody>
                            {cfi.items.map(item => <TableRow key={item.id}><TableCell className="flex items-center">{item.label} <InfoTooltip itemId={item.id} /></TableCell><TableCell className="text-right">{formatCurrencyParentheses(item.values[0])}</TableCell><TableCell className="text-right">{formatCurrencyParentheses(item.values[1])}</TableCell></TableRow>)}
                            <TableRow className="bg-muted/50"><TableCell className="font-semibold flex items-center">{cfi.total.label} <InfoTooltip itemId={cfi.total.id} /></TableCell><TableCell className="text-right font-semibold">{formatCurrencyParentheses(cfi.total.values[0])}</TableCell><TableCell className="text-right font-semibold">{formatCurrencyParentheses(cfi.total.values[1])}</TableCell></TableRow>
                        </TableBody>
                    </Table>
                     <Alert className="mt-4 text-sm bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800">
                        <Info className="h-4 w-4"/>
                        <AlertTitle className="font-semibold">Investor's View: Is the company investing for the future?</AlertTitle>
                        <AlertDescription>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>The company spent $25k on <strong>Purchase of PP&E</strong> (also known as Capital Expenditures or CapEx), which is a good sign of investment in its productive assets.</li>
                                <li>The negative overall <strong>Net Cash Used in Investing</strong> is healthy, as it shows the company is deploying capital for growth rather than just hoarding it or selling off assets.</li>
                            </ul>
                        </AlertDescription>
                    </Alert>
                </div>
                
                <ArrowDown className="mx-auto h-6 w-6 text-muted-foreground" />

                {/* Block 3: Financing Activities */}
                <div className="p-4 border rounded-lg">
                    <h3 className="text-lg font-semibold flex items-center mb-2"><Zap className="mr-2 h-5 w-5 text-primary"/>3. Cash Flow from Financing Activities (CFF)</h3>
                    <p className="text-sm text-muted-foreground mb-3">This shows how the company returns cash to shareholders or raises it from lenders.</p>
                    <Table>
                        <TableHeader><TableRow><TableHead>Line Item</TableHead><TableHead className="text-right">2023</TableHead><TableHead className="text-right">2022</TableHead></TableRow></TableHeader>
                        <TableBody>
                            {cff.items.map(item => <TableRow key={item.id}><TableCell className="flex items-center">{item.label} <InfoTooltip itemId={item.id} /></TableCell><TableCell className="text-right">{formatCurrencyParentheses(item.values[0])}</TableCell><TableCell className="text-right">{formatCurrencyParentheses(item.values[1])}</TableCell></TableRow>)}
                            <TableRow className="bg-muted/50"><TableCell className="font-semibold flex items-center">{cff.total.label} <InfoTooltip itemId={cff.total.id} /></TableCell><TableCell className="text-right font-semibold">{formatCurrencyParentheses(cff.total.values[0])}</TableCell><TableCell className="text-right font-semibold">{formatCurrencyParentheses(cff.total.values[1])}</TableCell></TableRow>
                        </TableBody>
                    </Table>
                     <Alert className="mt-4 text-sm bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800">
                        <Info className="h-4 w-4"/>
                        <AlertTitle className="font-semibold">Investor's View: Is capital being returned to owners?</AlertTitle>
                        <AlertDescription>
                          <ul className="list-disc pl-5 space-y-1">
                                <li>The company bought back $10.2k of its own stock (<strong>Net Common Stock Repurchased</strong>) and paid $10.6k in <strong>dividends</strong>. These are two ways of returning cash directly to shareholders, a positive sign.</li>
                                <li>It also took on new debt while repaying some old debt, with a net cash inflow from debt activities of $7k. This aligns with the change in Long-Term Debt on the Balance Sheet.</li>
                                <li>The negative overall CFF is a good sign for this mature, profitable company. It shows that, on balance, it returned more cash to its owners/lenders than it took in, signaling financial strength.</li>
                            </ul>
                        </AlertDescription>
                    </Alert>
                </div>
            </CardContent>
        </Card>

        <Card className="bg-primary/5 border-primary/20">
            <CardHeader><CardTitle className="font-headline text-xl">Statement Summary: The Story in Cash</CardTitle></CardHeader>
            <CardContent>
                <blockquote className="border-l-4 border-primary pl-4 italic">
                  Example Corp. shows strong financial health. Its core business generated a growing $71.4k in cash (CFO). It used a portion of this cash ($31.4k) to reinvest in its future growth (CFI), a positive sign. It then used the remaining cash to return capital to shareholders through $10.2k in stock buybacks and $10.6k in dividends (CFF). After all activities, the company's cash pile grew by $26.2k for the year, which we can verify against the change in cash on the balance sheet. This is the profile of a healthy, shareholder-friendly company.
                </blockquote>
            </CardContent>
        </Card>

        <Card>
          <CardHeader>
              <CardTitle className="font-headline text-xl">Key Ratios & Advanced Concepts</CardTitle>
              <CardDescription>Use these metrics to dig deeper into the cash flow statement.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
              <div className="p-3 border rounded-lg">
                <h4 className="font-semibold">Free Cash Flow (FCF)</h4>
                <p className="text-xs text-muted-foreground mb-2">The cash left over after a company pays for its operating expenses and capital expenditures. This is the 'real' profit available to be returned to investors.</p>
                <code className="text-sm p-2 bg-muted rounded-md block">Simple FCF = Cash from Operations - Capital Expenditures = $71,400 - $25,000 = $46,400</code>
                <Separator className="my-3"/>
                <Accordion type="single" collapsible className="w-full text-sm">
                    <AccordionItem value="fcf-variants">
                        <AccordionTrigger className="text-sm hover:no-underline">FCF Variants (Advanced)</AccordionTrigger>
                        <AccordionContent className="space-y-2 text-xs">
                             <p><strong>FCF to Equity (FCFE):</strong> This is the cash flow available to equity holders after all expenses and debt obligations are paid. Formula: <code className="p-1 bg-background rounded-sm">CFO - CapEx + Net Debt Issued</code>.</p>
                             <p><strong>FCF to the Firm (FCFF):</strong> This is the cash flow available to all capital providers (both debt and equity holders). Formula: <code className="p-1 bg-background rounded-sm">CFO - CapEx + Interest Expense * (1 - Tax Rate)</code>.</p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
              </div>
              <div className="p-3 border rounded-lg">
                <h4 className="font-semibold">Free Cash Flow Yield</h4>
                <p className="text-xs text-muted-foreground mb-2">Compares the Free Cash Flow per share a company produces to its market price per share. It's an excellent way to gauge valuation based on real cash generation.</p>
                <code className="text-sm p-2 bg-muted rounded-md block">FCF Yield = Free Cash Flow / Market Capitalization = $46,400 / $1,200,000 = 3.9%</code>
                <Alert variant="default" className="mt-2 text-xs">
                    <Info className="h-4 w-4"/>
                    <AlertTitle>Investor Insight</AlertTitle>
                    <AlertDescription>You can think of FCF Yield like an 'owner's yield.' In this case, for every dollar of the company's market value, it generated about 3.9 cents in real cash profit. Comparing this to the yield on a safe government bond gives you a sense of the risk premium you're getting.</AlertDescription>
                </Alert>
              </div>
              <div className="p-3 border rounded-lg">
                <h4 className="font-semibold">Quality of Earnings (Cash Flow to Net Income)</h4>
                <p className="text-xs text-muted-foreground mb-2">Compares Cash From Operations (CFO) to Net Income. A ratio consistently above 1 indicates high-quality earnings backed by real cash.</p>
                <code className="text-sm p-2 bg-muted rounded-md block">CFO / Net Income = $71,400 / $57,600 = 1.24x</code>
                <Alert variant="default" className="mt-2 text-xs bg-green-50/50 border-green-200">
                    <CheckCircle className="h-4 w-4 text-green-600"/>
                    <AlertTitle>Good Sign</AlertTitle>
                    <AlertDescription>Example Corp. is generating $1.24 in cash for every $1.00 of reported profit, a sign of very high-quality earnings.</AlertDescription>
                </Alert>
              </div>
              <div className="p-3 border rounded-lg">
                <h4 className="font-semibold">EBITDA vs. Cash Flow</h4>
                <p className="text-xs text-muted-foreground mb-2">EBITDA (Earnings Before Interest, Taxes, Depreciation, and Amortization) is often used as a lazy proxy for cash flow, but it's dangerously incomplete.</p>
                 <Alert variant="destructive" className="mt-2 text-xs">
                    <XCircle className="h-4 w-4"/>
                    <AlertTitle>Warning</AlertTitle>
                    <AlertDescription>EBITDA ignores changes in working capital and, most importantly, it ignores Capital Expenditures (CapEx). A company can have positive EBITDA but be burning cash if its CapEx is very high. Always trust CFO and FCF over EBITDA.</AlertDescription>
                </Alert>
              </div>
              <div className="p-3 border rounded-lg">
                <h4 className="font-semibold">Maintenance vs. Growth CapEx</h4>
                <p className="text-xs text-muted-foreground mb-2">Capital Expenditures (CapEx) can be for maintenance (replacing old equipment) or for growth (building a new factory). The cash flow statement doesn't separate them, but it's a critical distinction for an analyst.</p>
                <Alert variant="default" className="mt-2 text-xs">
                    <Info className="h-4 w-4"/>
                    <AlertTitle>Investor Insight</AlertTitle>
                    <AlertDescription>A business with high maintenance CapEx just to stay in business is less attractive than one spending on growth, as growth CapEx is often discretionary and a sign of a scalable business. Warren Buffett suggests using depreciation as a rough proxy for maintenance CapEx to calculate an "Owner's Earnings" version of FCF: <code className="p-1 bg-background rounded-sm">Net Income + Depreciation - CapEx</code>.</AlertDescription>
                </Alert>
              </div>
          </CardContent>
        </Card>
        
        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you've learned how to read all three financial statements, you're ready to put it all together.
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
