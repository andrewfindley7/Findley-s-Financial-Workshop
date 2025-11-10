'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, LineChart, PiggyBank, Shuffle, Target, Info, Lightbulb, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const philosophies = [
  {
    approach: 'Passive',
    timeIntensity: 'Minimal',
    coreBelief: 'Markets are efficient',
    commonMetrics: 'Expense Ratio, Tracking Error',
    exampleInvestors: 'John Bogle',
  },
  {
    approach: 'Value',
    timeIntensity: 'Moderate',
    coreBelief: 'Price < Intrinsic Value',
    commonMetrics: 'P/E, P/B, Margin of Safety',
    exampleInvestors: 'Warren Buffett',
  },
  {
    approach: 'GARP',
    timeIntensity: 'High',
    coreBelief: 'Balance of value and growth',
    commonMetrics: 'PEG < 1, ROE',
    exampleInvestors: 'Peter Lynch',
  },
  {
    approach: 'Growth',
    timeIntensity: 'High',
    coreBelief: 'Earnings will grow rapidly',
    commonMetrics: 'P/S, Revenue Growth %',
    exampleInvestors: 'T. Rowe Price',
  },
  {
    approach: 'Contrarian',
    timeIntensity: 'Very High',
    coreBelief: 'Crowd is often wrong',
    commonMetrics: 'Valuation + Sentiment',
    exampleInvestors: 'Howard Marks',
  },
];


export default function TypesOfInvestingPage() {
  const searchParams = useSearchParams();
  const fromStep = searchParams.get('from');

  return (
    <div className="space-y-8">
       <Alert variant="destructive" className="mb-6 bg-amber-50 dark:bg-amber-900/20 border-amber-300 dark:border-amber-700">
          <Info className="h-4 w-4 text-amber-500" />
          <AlertDescription className="text-amber-800 dark:text-amber-300 text-xs">
              For educational use only. Not financial or tax advice. Consult a licensed advisor before making major decisions.
          </AlertDescription>
      </Alert>
      <div className="mb-8">
        <h1 className="text-3xl font-bold font-headline">Types of Investing</h1>
        <p className="text-muted-foreground mt-2">Learn the core tenets of the most common and effective investment philosophies.</p>
      </div>
      <div className="space-y-6">
        <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle className="font-headline">Find Your Framework: Your Most Important Weapon</AlertTitle>
             <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
                <p>Every great investor succeeds not by finding a secret formula, but by developing a philosophy that fits their temperament, timeline, and tolerance for risk. An investment philosophy is your personal constitution. A set of principles that guides your investment decisions, it is your primary defense against your worst enemy: yourself.</p>
                <p>Without a clear framework, an investor is prone to emotional decision-making, chasing hot trends during bubbles and panic-selling during crashes. This is the primary reason most people underperform the market. Having a well-defined philosophy and the discipline to stick with it improves returns by forcing rational, consistent behavior. In the short term, it helps you filter out market 'noise' and make clear 'buy' or 'sell' decisions based on your criteria, not emotion. In the long term, it prevents catastrophic errors that can permanently impair your capital and derail decades of compounding.</p>
                <p className="font-semibold">The goal of this lesson is not to tell you which philosophy is best, but to help you find the one that best fits your personality, risk tolerance, and the amount of time you are willing to dedicate to research.</p>
            </AlertDescription>
        </Alert>

        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-xl">The Spectrum of Investing Philosophies</CardTitle>
                <CardDescription>Before diving into each style, it helps to understand how they relate in terms of effort and core beliefs.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Approach</TableHead>
                            <TableHead>Time Intensity</TableHead>
                            <TableHead>Core Belief</TableHead>
                            <TableHead>Common Metrics</TableHead>
                            <TableHead>Example Investors</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {philosophies.map((p) => (
                            <TableRow key={p.approach}>
                                <TableCell className="font-semibold">{p.approach}</TableCell>
                                <TableCell>{p.timeIntensity}</TableCell>
                                <TableCell>{p.coreBelief}</TableCell>
                                <TableCell>{p.commonMetrics}</TableCell>
                                <TableCell>{p.exampleInvestors}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-xl">Core Philosophies</CardTitle>
                 <CardDescription>A look at the analytical patterns of each major investment style.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                 <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold text-lg flex items-center mb-2"><Search className="mr-2 h-5 w-5 text-primary"/>Value Investing</h3>
                    <div className="space-y-3">
                        <div>
                            <h4 className="font-semibold text-sm">Core Philosophy:</h4>
                            <p className="text-sm text-muted-foreground mt-1">Value investing is the discipline of buying securities for less than their calculated intrinsic worth. It views stocks not as flickering prices on a screen, but as fractional ownership in real businesses. A value investor acts like a business owner, analyzing a company's long-term earnings power, financial health, and competitive position. The goal is to find durable businesses and then wait with discipline until the market, in a fit of pessimism, offers a price that provides a significant 'margin of safety' a discount to the business's real value.</p>
                        </div>
                        <p className="text-sm"><strong className="font-semibold">Investor Lens:</strong> Business owner, not a stock trader.</p>
                        <div>
                          <h4 className="font-semibold text-sm">Checklist for a Prospect:</h4>
                          <ul className="list-disc pl-5 text-sm space-y-1 mt-1">
                              <li>Does the business have a durable competitive advantage (a "moat")?</li>
                              <li>Does it have stable, predictable earnings and free cash flow?</li>
                              <li>Is management honest, capable, and shareholder-oriented?</li>
                              <li>Is the balance sheet strong, with low levels of debt?</li>
                              <li>Is the stock price at a significant discount to your conservative estimate of its intrinsic value?</li>
                          </ul>
                        </div>
                        <Alert variant="default" className="bg-blue-100 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
                            <Lightbulb className="h-4 w-4" />
                            <AlertTitle className="font-bold">Mental Model & Case Study</AlertTitle>
                            <AlertDescription>
                            <p>"Price is what you pay; value is what you get."</p>
                            <p className="mt-2 text-xs">Warren Buffett’s purchase of See’s Candies in 1972 is a masterclass in this philosophy. While it wasn't statistically "cheap" at 3 times its book value, Buffett recognized that its powerful brand recognition and customer loyalty formed an unbreachable competitive moat. This moat gave See's the power to consistently raise prices without losing customers, turning it into a cash-generating machine that required very little additional capital. The initial $25 million investment has since produced over $2 billion in cash for Berkshire Hathaway, proving that paying a fair price for a truly wonderful business is far more profitable than getting a bargain price on a mediocre one.</p>
                            </AlertDescription>
                        </Alert>
                    </div>
                </div>

                 <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold text-lg flex items-center mb-2"><LineChart className="mr-2 h-5 w-5 text-primary"/>Growth Investing</h3>
                     <div className="space-y-3">
                        <div>
                            <h4 className="font-semibold text-sm">Core Philosophy:</h4>
                            <p className="text-sm text-muted-foreground mt-1">Growth investing focuses on identifying companies poised to grow their sales and earnings at a rate substantially faster than the overall market. The core belief is that the market will eventually reward this superior growth with a much higher stock price. A growth investor is more concerned with the size of the future opportunity and the company's ability to execute than with its current valuation. The goal is to find innovative leaders in expanding industries and hold on for the long term.</p>
                        </div>
                        <p className="text-sm"><strong className="font-semibold">Investor Lens:</strong> Venture capitalist, focused on future potential.</p>
                        <div>
                            <h4 className="font-semibold text-sm">Checklist for a Prospect:</h4>
                            <ul className="list-disc pl-5 text-sm space-y-1 mt-1">
                                <li>Is the company's revenue growing at an accelerated rate (ideally &gt; 15-20% annually)?</li>
                                <li>Is the company operating in a large and rapidly expanding Total Addressable Market (TAM)?</li>
                                <li>Does the company have a strong 'reinvestment moat' is it investing heavily in R&D or sales to widen its lead and capture market share?</li>
                                <li>Are gross margins high and, ideally, expanding, which demonstrates scalability?</li>
                                <li>Is there evidence of a strong, visionary management team with a clear long-term strategy?</li>
                            </ul>
                        </div>
                        <Alert variant="default" className="bg-blue-100 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
                            <Lightbulb className="h-4 w-4" />
                            <AlertTitle className="font-bold">Mental Model & Case Study</AlertTitle>
                            <AlertDescription>
                                <p>"Earnings today matter less than dominance tomorrow."</p>
                                <p className="mt-2 text-xs">Amazon's "reinvestment flywheel" is a prime case study. From its IPO in 1997 through the late 2010s, Jeff Bezos famously prioritized growth and market share over short-term profits. The company poured every dollar of cash flow into building out its fulfillment network, expanding into new categories, and creating AWS. This relentless focus on reinvestment, while making the stock look perennially "expensive" on P/E ratios, resulted in a more than 30% compound annual growth rate in earnings per share over the long run, creating life-changing wealth for early, patient investors.</p>
                            </AlertDescription>
                        </Alert>
                    </div>
                </div>
                 <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold text-lg flex items-center mb-2"><Target className="mr-2 h-5 w-5 text-primary"/>GARP (Growth at a Reasonable Price)</h3>
                    <div className="space-y-3">
                        <div>
                            <h4 className="font-semibold text-sm">Core Philosophy:</h4>
                            <p className="text-sm text-muted-foreground mt-1">GARP is a pragmatic hybrid, seeking to capture the upside of growth without paying the speculative prices. A GARP investor filters for companies with a consistent track record of above-average growth but applies a value-based discipline, only buying when the valuation is reasonable. The goal is to avoid both "value traps" (cheap but dying businesses) and "growth traps" (great businesses at bubble prices).</p>
                        </div>
                        <p className="text-sm"><strong className="font-semibold">Investor Lens:</strong> Pragmatist, seeking a balance of quality and price.</p>
                        <div>
                            <h4 className="font-semibold text-sm">Checklist for a Prospect:</h4>
                            <ul className="list-disc pl-5 text-sm space-y-1 mt-1">
                                <li>Is the company's historical and projected EPS growth consistently between 10% and 25%?</li>
                                <li>Is the PEG ratio (P/E ÷ Growth Rate) less than 1.0, suggesting the growth is not overpriced?</li>
                                <li>Does the company generate consistent positive free cash flow?</li>
                                <li>Is the Return on Equity (ROE) consistently above the industry average, indicating quality?</li>
                                <li>Does the company have a strong balance sheet with manageable debt?</li>
                            </ul>
                        </div>
                        <Alert variant="default" className="bg-blue-100 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
                            <Lightbulb className="h-4 w-4" />
                            <AlertTitle className="font-bold">Mental Model & Case Study</AlertTitle>
                            <AlertDescription>
                            <p>"Buy good companies at good prices."</p>
                            <p className="mt-2 text-xs">Peter Lynch's management of the Magellan Fund is the gold standard for GARP. He achieved a legendary 29% annualized return by finding growth stories in plain sight what he called "investing in what you know." He noticed the success of The Gap because his wife liked their apparel and the quality of L'eggs pantyhose from Hanesbrands. He would then perform rigorous financial analysis to confirm these were fast-growing companies trading at a reasonable valuation (often using the PEG ratio as a key tool), a strategy that allowed him to capture numerous "ten-bagger" investments and deliver historic returns.</p>
                            </AlertDescription>
                        </Alert>
                    </div>
                </div>
                 <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold text-lg flex items-center mb-2"><PiggyBank className="mr-2 h-5 w-5 text-primary"/>Passive Index Investing</h3>
                    <div className="space-y-3">
                        <div>
                            <h4 className="font-semibold text-sm">Core Philosophy:</h4>
                            <p className="text-sm text-muted-foreground mt-1">Passive investing is built on the evidence-based acknowledgment that the vast majority of active investors fail to beat the market averages over time, especially after fees. Therefore, the most rational approach for most people is to stop trying to find the winning 'needle' and instead just 'buy the haystack.' By owning a low-cost fund that tracks a broad market index, an investor can guarantee they capture the market's return with minimal cost and effort.</p>
                        </div>
                        <p className="text-sm"><strong className="font-semibold">Investor Lens:</strong> Economist, focused on systemic returns.</p>
                        <div>
                            <h4 className="font-semibold text-sm">Checklist for a Prospect:</h4>
                            <ul className="list-disc pl-5 text-sm space-y-1 mt-1">
                                <li>Does the fund offer broad, global diversification across hundreds of companies?</li>
                                <li>Is the expense ratio extremely low (ideally &lt; 0.10%)?</li>
                                <li>Is my contribution plan automated and consistent (Dollar-Cost Averaging)?</li>
                                <li>Am I prepared to hold this investment through market downturns without selling?</li>
                                <li>Does this fund align with my long-term time horizon (10+ years)?</li>
                            </ul>
                        </div>
                        <Alert variant="default" className="bg-blue-100 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
                            <Lightbulb className="h-4 w-4" />
                            <AlertTitle className="font-bold">Mental Model & Case Study</AlertTitle>
                            <AlertDescription>
                            <p>"Don’t look for the needle; own the haystack."</p>
                            <p className="mt-2 text-xs">The entire history of the Vanguard 500 Index Fund, launched by John Bogle in 1976, is a testament to this philosophy. It was initially derided as "Bogle's Folly." However, an initial investment of $10,000 at its inception would have grown to approximately $4 million by 2025 (with dividends reinvested). This staggering return was achieved not through brilliant stock picking, but by simply owning a piece of America's greatest businesses, letting them compound over a lifetime, and, most importantly, keeping investment costs at an absolute minimum.</p>
                            </AlertDescription>
                        </Alert>
                    </div>
                </div>
                 <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold text-lg flex items-center mb-2"><Shuffle className="mr-2 h-5 w-5 text-primary"/>Contrarian Investing</h3>
                    <div className="space-y-3">
                        <div>
                            <h4 className="font-semibold text-sm">Core Philosophy:</h4>
                            <p className="text-sm text-muted-foreground mt-1">Contrarian investing is the discipline of betting against prevailing market sentiment. It is rooted in the psychological observation that herd behavior pushes asset prices to irrational extremes euphoric bubbles and panicked busts. A contrarian believes the greatest returns are found not in what is popular, but in what is hated, ignored, or misunderstood. This requires the emotional fortitude to buy when everyone else is selling and the analytical rigor to distinguish a cheap stock from a value trap.</p>
                        </div>
                        <p className="text-sm"><strong className="font-semibold">Investor Lens:</strong> Psychologist, betting on human nature.</p>
                        <div>
                            <h4 className="font-semibold text-sm">Checklist for a Prospect:</h4>
                            <ul className="list-disc pl-5 text-sm space-y-1 mt-1">
                                <li>Is the stock or sector down 30-50%+ from its highs due to widespread pessimism?</li>
                                <li>Does the company still have a durable business model and strong balance sheet despite the bad news?</li>
                                <li>Is there evidence of insider buying, suggesting management believes the stock is undervalued?</li>
                                <li>Is the valuation extremely low on metrics like P/B or P/FCF compared to its historical average?</li>
                                <li>Do I have the patience to potentially wait years for the market sentiment to turn?</li>
                            </ul>
                        </div>
                        <Alert variant="default" className="bg-blue-100 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
                            <Lightbulb className="h-4 w-4" />
                            <AlertTitle className="font-bold">Mental Model & Case Study</AlertTitle>
                            <AlertDescription>
                            <p>"The crowd is your opportunity, not your guide."</p>
                            <p className="mt-2 text-xs">During the depths of the 2008 financial crisis, when fear was at its absolute maximum, contrarian hedge funds like Oaktree Capital (led by Howard Marks) and Baupost Group (led by Seth Klarman) were deploying massive amounts of capital. They aggressively bought the distressed corporate debt of companies that the market had priced for bankruptcy, understanding that while some would fail, many others had fundamentally sound businesses that would survive the panic. When the economy stabilized, these debt instruments, purchased for pennies on the dollar, recovered and generated spectacular, multi-billion dollar returns for those who had the courage to buy when there was "blood in the streets."</p>
                            </AlertDescription>
                        </Alert>
                    </div>
                </div>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-xl">Synthesis: Building Your Investor Identity</CardTitle>
                <CardDescription>Your temperament is more important than your intellect. Use these questions to find the philosophy that best fits you.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
                <p><strong>Do I enjoy deep analysis and reading 10-Ks?</strong> Consider Value or GARP.</p>
                <p><strong>Am I energized by innovation and trends?</strong> Consider Growth.</p>
                <p><strong>Do I want simplicity and peace of mind?</strong> Default to Passive Indexing.</p>
                <p><strong>Can I stay calm when others panic?</strong> Contrarian strategies might fit your temperament.</p>
            </CardContent>
        </Card>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you have been introduced to these core philosophies, return to the main roadmap to continue building your financial knowledge.
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
    </div>
  );
}
