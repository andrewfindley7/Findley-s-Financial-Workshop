'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Scale, Info, TrendingUp, CheckCircle, XCircle, TrendingDown, RefreshCw, ArrowRight, Factory, Zap, HandCoins } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';

const multiples = [
  {
    name: "Price-to-Earnings (P/E)",
    formula: "Market Price per Share / Earnings per Share (EPS)",
    description: "The most famous multiple. It tells you how many dollars an investor is willing to pay for one dollar of a company's current earnings.",
    whenToUse: "Best for mature, established companies with a consistent track record of positive and stable earnings. It's a quick gauge of whether a stock is expensive or cheap relative to its own history or its peers.",
    primaryIndustries: "Most mature industries, including Consumer Staples, Healthcare (large pharma), Utilities, Industrials, established Technology companies, and some Financials (e.g., asset managers, insurance).",
    whenNotToUse: "Avoid using P/E for companies with negative earnings (it's meaningless), for cyclical companies at the bottom of a cycle (where low earnings make the P/E look deceptively high), or for early-stage growth companies that are reinvesting all profits.",
    greenFlag: "A P/E ratio that is in line with or lower than the company's historical average and its industry peers, especially if growth is stable or accelerating.",
    redFlag: "An extremely high P/E ratio (e.g., >40-50) can indicate excessive optimism baked into the price. A negative P/E (due to losses) makes the metric useless.",
    pitfall: "P/E can be misleading as 'Earnings' can be manipulated by accounting rules. Always cross-reference with cash flow metrics. Be aware of the difference between trailing P/E (past earnings) and forward P/E (future estimates)."
  },
  {
    name: "Price-to-Sales (P/S)",
    formula: "Market Capitalization / Total Annual Revenue",
    description: "Compares the company's total value to its total revenue. This is useful when a company is not yet profitable or is in a cyclical industry where earnings can be volatile.",
    whenToUse: "Excellent for young, high-growth companies that haven't reached profitability yet, especially helpful for pre-profit tech companies where earnings are negative but growth visibility is strong. Also useful for cyclical industries like airlines or automakers where earnings swing dramatically.",
    primaryIndustries: "High-growth sectors (especially pre-profit tech like SaaS and e-commerce), early-stage biotechnology, and highly cyclical industries like airlines, semiconductors, and automakers where earnings are volatile.",
    whenNotToUse: "Do not rely on P/S for businesses with structurally low profit margins (like distributors or basic grocery stores). A low P/S ratio in these industries does not mean the company is cheap; it's just a reflection of the business model.",
    greenFlag: "A low P/S ratio relative to peers can indicate undervaluation, especially if the company is on a clear path to improving its profit margins.",
    redFlag: "A very high P/S ratio means you are paying a lot for each dollar of sales, which requires massive future growth and margin expansion to justify.",
    pitfall: "This ratio completely ignores profitability and debt. A company can have a 'cheap' P/S ratio but be drowning in debt and burning cash. It is a tool for valuing growth, not a measure of business quality."
  },
  {
    name: "Price-to-Free-Cash-Flow (P/FCF)",
    formula: "Market Capitalization / Free Cash Flow",
    description: "Arguably one of the most powerful multiples. It compares the company's market value to the actual cash it generates after funding its operations and capital expenditures. FCF is the 'real' profit available to be returned to investors.",
    whenToUse: "Excellent for almost any business with positive cash flow, but especially for capital-intensive industries (like manufacturing or telecommunications) where accounting earnings can differ significantly from cash reality. It provides a crucial reality check on the quality of a company's earnings.",
    primaryIndustries: "Telecommunications, mature Technology, Industrials, Media, Healthcare, and any business with significant capital expenditures.",
    whenNotToUse: "Can be difficult to use for companies in a temporary high-growth phase where they are heavily investing in CapEx, which can suppress FCF. In these cases, look at the trend and management's projections for future FCF.",
    greenFlag: "A low and stable P/FCF ratio relative to peers indicates a cash-generative business that may be undervalued. This is a strong sign of a high-quality business.",
    redFlag: "Consistently negative free cash flow is a major red flag, indicating the business is a 'cash furnace' that constantly needs new capital to survive.",
    pitfall: "FCF can be lumpy year-to-year due to large, infrequent capital projects or changes in working capital. It's often better to look at an average FCF over several years to get a clearer picture."
  },
    {
    name: "Price-to-Book (P/B)",
    formula: "Market Price per Share / Book Value per Share",
    description: "Compares a company's market capitalization to its 'book value' (also called Net Asset Value). It's a measure of how much shareholders are paying for the net assets of a company.",
    whenToUse: "It's a useful metric for valuing asset-heavy businesses like banks, insurance companies, and industrial firms where assets have a clearer value.",
    primaryIndustries: "Financials (Banks, Insurance), Industrials, Materials, and Energy sectors.",
    whenNotToUse: "Largely irrelevant for asset-light businesses like software or consulting firms, where the true value lies in intangible assets like intellectual property and brand, which are not fully captured on the balance sheet.",
    greenFlag: "A P/B ratio below 1.0 means the company is trading for less than the stated value of its net assets, which could signal deep undervaluation.",
    redFlag: "A very low P/B ratio can be a 'value trap,' indicating the market believes the assets are overvalued on the books or have poor earning power.",
    pitfall: "Book value is an accounting figure and may not reflect the true market or economic value of the assets."
  },
  {
    name: "Price-to-Funds-From-Operations (P/FFO)",
    formula: "Market Price per Share / Funds From Operations per Share",
    description: "A specialized metric used almost exclusively for Real Estate Investment Trusts (REITs). FFO adds back depreciation (a large, non-cash expense for real estate) to net income, providing a better picture of the REIT's true cash-generating ability.",
    whenToUse: "This is the standard for valuing REITs, as traditional P/E is distorted by high depreciation charges on properties. In essence, FFO is to real estate what FCF is to operating companies.",
    primaryIndustries: "Real Estate (REITs).",
    whenNotToUse: "Not applicable to most non-real estate businesses.",
    greenFlag: "A low P/FFO multiple that is low relative to the REIT's historical average and its direct peers, especially if the REIT owns high-quality properties and has a strong balance sheet.",
    redFlag: "An unusually high P/FFO multiple may signal that the REIT is overvalued compared to the cash flow its properties are generating.",
    pitfall: "Not all FFO is created equal. Look for 'Adjusted Funds From Operations' (AFFO) or 'Cash Available for Distribution' (CAD), which further adjusts for recurring capital expenditures (e.g., replacing roofs, HVAC systems) to get an even more accurate picture of distributable cash."
  },
  {
    name: "Price-to-Distributable Earnings (P/DE)",
    formula: "Market Capitalization / Distributable Earnings",
    description: "A metric used for income-focused investments, especially Alternative Asset Managers and Master Limited Partnerships (MLPs). It measures the valuation relative to the cash flow that is actually available to be distributed to investors.",
    whenToUse: "Best for asset classes where the primary return comes from distributions or dividends, like MLPs in the energy pipeline sector or alternative asset managers like Blackstone and KKR.",
    primaryIndustries: "Alternative Asset Managers (Private Equity, Credit), Energy MLPs, some specialized REITs.",
    whenNotToUse: "Not useful for growth companies that reinvest all their cash flow and do not pay distributions.",
    greenFlag: "A low P/DE ratio suggests the company's high distribution yield is well-covered by its underlying cash flow and is likely sustainable.",
    redFlag: "A high P/DE ratio may indicate that the company is paying out more in distributions than it generates in sustainable cash flow, putting the distribution at risk of being cut.",
    pitfall: "The definition of 'Distributable Earnings' or 'Distributable Cash Flow' can vary by company. Always check the company's financial reports to understand exactly how they calculate this non-GAAP metric."
  }
];


export default function ValuationMultiplesPage() {
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
        <h1 className="text-3xl font-bold font-headline">Understanding Valuation Multiples</h1>
        <p className="text-muted-foreground mt-2">A deep dive into the art and science of valuing a business using relative metrics.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Scale className="h-4 w-4" />
          <AlertTitle className="font-headline">A Shorthand for Value</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>Valuation multiples are ratios that compare a company's market value to a key financial metric like earnings, sales, or cash flow. They are a form of <strong>relative valuation</strong>, a quick way to gauge if a company is cheap or expensive compared to its own history, its competitors, or the market as a whole.</p>
            <p className="font-semibold">However, a multiple is a starting point for analysis, not a conclusion. A stock is not automatically a 'buy' because its P/E ratio is low, nor is it a 'sell' just because its P/E is high. Context is everything.</p>
          </AlertDescription>
        </Alert>
        
        <Card>
            <CardHeader>
                <CardTitle>The Context: Growth and Quality</CardTitle>
                <CardDescription>
                    A high-quality company with fast, predictable growth deserves to trade at a higher multiple than a low-quality, slow-growing company. The central question for an investor is: <strong>"Are the company's growth prospects good enough to justify the multiple I'm paying?"</strong>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Alert variant="default" className="bg-primary/5">
                    <Info className="h-4 w-4"/>
                    <AlertDescription>
                        A Ferrari trades at a higher multiple than a farm tractor, not because it is overvalued, but because it is faster, rarer, and scales performance more efficiently. The same is true for businesses.
                    </AlertDescription>
                </Alert>
            </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">The Investor's Toolkit: Key Valuation Multiples</CardTitle>
            <CardDescription>Different multiples are useful for different types of businesses. Here are some of the most common ones.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {multiples.map(m => (
              <div key={m.name} className="p-4 border rounded-lg bg-card shadow-sm">
                <h3 className="font-semibold text-lg">{m.name}</h3>
                <p className="font-mono text-xs text-primary bg-muted/50 p-2 rounded-md my-2">{m.formula}</p>
                <p className="text-sm text-muted-foreground mb-4">{m.description}</p>
                
                <Separator className="my-4"/>
                <div className="grid md:grid-cols-2 gap-4 text-xs">
                    <div><p className="font-semibold mb-1">When to Use:</p><p>{m.whenToUse}</p></div>
                    <div><p className="font-semibold mb-1">Primary Industries:</p><p>{m.primaryIndustries}</p></div>
                </div>
                 <div className="mt-4 p-3 bg-red-500/10 rounded-lg border border-red-500/20">
                    <p className="text-xs font-semibold text-red-700 dark:text-red-200">When NOT to Use / Limitations:</p>
                    <p className="text-xs text-red-600 dark:text-red-300">{m.whenNotToUse}</p>
                 </div>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Conclusion: Weaving the Story Together</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Each multiple tells part of the story. Start with P/E to understand profitability, use P/S for growth visibility, confirm sustainability with P/FCF, and always view these multiples through the lens of growth, quality, and capital intensity. A good investor does not just compare numbers, they interpret what those numbers imply about the future of the business.
            </p>
          </CardContent>
        </Card>
         <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you have a deeper understanding of valuation multiples, you are ready to learn about specific business models.
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
