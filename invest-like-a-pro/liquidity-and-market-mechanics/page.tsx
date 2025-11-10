'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { ArrowRight, Waves, Droplets, Scale, HelpCircle, ArrowDownUp, AlertTriangle, GitCompare, ThumbsUp, ThumbsDown, Info } from 'lucide-react';
import Link from 'next/link';

const coreConcepts = [
  {
    icon: Droplets,
    title: "Market Liquidity",
    description: "The ease with which an asset can be bought or sold at a stable price. High liquidity means there are many buyers and sellers, so you can trade quickly without affecting the price. Low liquidity means the opposite."
  },
  {
    icon: ArrowDownUp,
    title: "Bid/Ask Spread",
    description: "The difference between the highest price a buyer is willing to pay (the 'bid') and the lowest price a seller is willing to accept (the 'ask'). This spread is a hidden cost of trading; you always buy at the higher 'ask' price and sell at the lower 'bid' price."
  },
   {
    icon: Scale,
    title: "Market Depth",
    description: "Refers to the market's ability to sustain relatively large market orders without impacting the price of the security. Depth considers the overall number of shares being bid for and offered at each price point."
  },
  {
    icon: Waves,
    title: "Slippage",
    description: "The difference between the price you expected to get on a trade and the price at which the trade was actually executed. This happens most often in illiquid assets when your large order 'moves the market' against you."
  }
];

const examples = [
    {
        title: "The Low-Float IPO (Market Liquidity Risk)",
        description: "A small tech company goes public but only makes 10% of its shares available for trading (a 'low float'). The company is hyped, and many investors rush to buy. Because there are very few shares available, this huge demand causes the price to skyrocket. Early insiders, seeing the absurd valuation, begin to sell their shares as soon as they are legally able. This flood of new supply overwhelms the initial demand, causing the price to crash back to a more reasonable level.",
        takeaway: "The initial price spike was not driven by business fundamentals but by a temporary supply-demand imbalance. Chasing low-float IPOs is a highly speculative and risky endeavor."
    },
    {
        title: "The Micro-Cap Stock Trap (Funding Stress & Slippage)",
        description: "You want to invest $20,000 in 'TinyCorp,' a small company whose stock only trades a few thousand shares per day. The current ask price is $1.05. You place a large market order to buy. Because there are not enough sellers at $1.05, your order starts filling at $1.06, then $1.07, and higher, as you consume all the available liquidity. Your average purchase price ends up being $1.09, which is significant slippage. A month later, you need to sell, but there are very few buyers (funding stress for sellers). You're forced to accept a bid of $0.95 to get out, far lower than the last traded price.",
        takeaway: "In illiquid stocks, getting in can be expensive, and getting out can be even more so. The quoted price is not always the price you can actually transact at."
    }
]

export default function LiquidityAndMarketMechanicsPage() {
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
        <h1 className="text-3xl font-bold font-headline">Liquidity and Market Mechanics</h1>
        <p className="text-muted-foreground mt-2">An advanced lesson to the mechanics of market microstructure and their impact on trading.</p>
      </div>
      <div className="space-y-6">
        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle className="font-headline">The Hidden Costs of Trading</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>While brokerage commissions are now often zero, trading is not free. The real costs are often invisible to the average investor. Understanding liquidity, bid/ask spreads, and slippage is crucial for anyone trading individual securities, as these factors can significantly impact your returns, especially in less-traded stocks. These concepts are at the heart of liquidity risk and can create funding stress (meaning you can’t sell quickly without taking a loss) when you need to sell.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">Core Market Concepts</CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
            {coreConcepts.map(item => (
              <div key={item.title} className="p-4 border rounded-lg bg-card shadow-sm">
                <div className="flex items-center mb-2">
                  <item.icon className="mr-2 h-5 w-5 text-primary/80" />
                  <h3 className="font-semibold">{item.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">How These Concepts Interrelate</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none dark:prose-invert">
            <p>These concepts are deeply connected:</p>
            <ul className="list-disc pl-5">
                <li>A stock with high market liquidity (like Apple or Microsoft) will have a very narrow bid/ask spread (often just a penny) because there are millions of buyers and sellers competing. This means you can trade large amounts with virtually no slippage.</li>
                <li>A stock with low market liquidity (like a small-cap or micro-cap stock) will have a wide bid/ask spread because there are few market participants. Trying to buy or sell a large number of shares will cause significant slippage and can create funding stress if you need to sell quickly to raise cash.</li>
            </ul>
             <Alert variant="default" className="mt-4 text-sm bg-callout text-callout-foreground border-blue-200 dark:border-blue-800">
                <Info className="h-4 w-4" />
                <AlertTitle className="font-semibold">The Institutional Perspective</AlertTitle>
                <AlertDescription>
                    Even professional investors and funds face liquidity stress, which is why they avoid owning too large a percentage of a small-cap company's stock. If a fund owns 15% of a small company, it becomes very difficult for them to sell their position without crashing the stock's price. This is why many large funds can only invest in large, highly liquid companies.
                </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
              <GitCompare className="mr-2 h-5 w-5 text-primary"/>Stock Splits & Reverse Splits
            </CardTitle>
            <CardDescription>Companies sometimes adjust their share price and count to influence liquidity and investor perception.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg border bg-card">
              <h4 className="font-semibold flex items-center mb-2"><ThumbsUp className="mr-2 h-4 w-4 text-green-600"/>Stock Splits (e.g., 2-for-1)</h4>
              <p className="text-sm text-muted-foreground mb-3">A company increases its number of shares outstanding while lowering the price of each share proportionally. This does not change the company's total value (market cap).</p>
              <p className="text-xs text-muted-foreground">Why do it? The primary reason is to make shares more affordable for retail investors, which can increase trading volume and liquidity. A stock trading at $1,000 might seem too expensive for a small investor, but after a 10-for-1 split, it trades at $100, making it more accessible.</p>
            </div>
             <div className="p-4 rounded-lg border bg-card">
              <h4 className="font-semibold flex items-center mb-2"><ThumbsDown className="mr-2 h-4 w-4 text-red-600"/>Reverse Stock Splits (e.g., 1-for-10)</h4>
              <p className="text-sm text-muted-foreground mb-3">A company reduces its number of shares outstanding, which proportionally increases the price of each share.</p>
              <p className="text-xs text-muted-foreground">Why do it? This is often a sign of distress. A company might do a reverse split to boost its stock price above a certain level (e.g., $1.00) to avoid being delisted from a major stock exchange. It's often seen as a cosmetic move that doesn't solve the underlying business problems.</p>
            </div>
             <div className="md:col-span-2">
                <Alert variant="default" className="bg-callout text-callout-foreground border-blue-200 dark:border-blue-800">
                    <Info className="h-4 w-4" />
                    <AlertTitle className="font-semibold">Real-World Example: Brookfield's Split</AlertTitle>
                    <AlertDescription>
                       <p className="text-xs">In late 2022, Brookfield Corporation (BN) completed a 3-for-2 stock split as part of a broader corporate restructuring and the spin-off of its asset management business (Brookfield Asset Management, BAM). While the headline reason cited was to improve trading liquidity, the technical rationale is deeper.</p>
                        <p className="text-xs mt-2">A stock split increases the number of shares outstanding while reducing the price per share proportionally. Though this doesn’t change the company’s total market capitalization, it can enhance market liquidity by:</p>
                        <ul className="list-disc pl-5 mt-2 text-xs">
                            <li>Increasing the share float (the number of shares available for public trading), improving order book depth and tightening bid-ask spreads.</li>
                            <li>Facilitating index eligibility or weighting adjustments, since some equity indices and institutional mandates prefer stocks trading within certain price bands or liquidity thresholds.</li>
                            <li>Aligning share prices with market norms of peer companies to make options and equity-linked compensation plans more practical (option strike prices and round lots often work better within specific price ranges).</li>
                            <li>Supporting capital market optics, where a “psychologically comfortable” trading range ($20–$60) attracts broader institutional and retail participation, even if fractional shares are available.</li>
                        </ul>
                        <p className="text-xs mt-2">In Brookfield’s case, the split also coincided with structural realignment following the spin-off, ensuring that both BN and BAM shares traded in accessible, liquid ranges that aligned with their distinct investor bases.</p>
                    </AlertDescription>
                </Alert>
             </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">Real-World Examples of Liquidity Risk</CardTitle>
            <CardDescription>These scenarios illustrate why understanding liquidity is so important.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
            {examples.map(item => (
              <div key={item.title} className="p-4 border rounded-lg bg-muted/40">
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                <Alert variant="default" className="bg-callout text-callout-foreground border-blue-200 dark:border-blue-800">
                    <AlertTitle className="font-semibold">The Takeaway</AlertTitle>
                    <AlertDescription className="text-sm">{item.takeaway}</AlertDescription>
                </Alert>
              </div>
            ))}
          </CardContent>
        </Card>
        
        <Alert className="bg-callout text-callout-foreground border-blue-200 dark:border-blue-800">
          <Info className="h-4 w-4" />
          <AlertTitle className="font-headline">The Takeaway for Long-Term Investors</AlertTitle>
          <AlertDescription>
            Liquidity risk matters not only for traders but also for long-term investors. Owning assets that are hard to sell can amplify losses in a market downturn when many investors are trying to exit at once. This is why focusing on high-quality, liquid assets (like large-cap stocks or major ETFs) is a core part of a resilient investment strategy.
          </AlertDescription>
        </Alert>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you understand these key market mechanics, return to the main roadmap to continue building your financial knowledge.
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