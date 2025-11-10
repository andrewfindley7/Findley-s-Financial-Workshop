'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { ArrowRight, AlertTriangle, HelpCircle, ThumbsUp, ThumbsDown, Globe, Repeat, TrendingUp, TrendingDown, Scale, DollarSign, Banknote, Info } from 'lucide-react';
import Link from 'next/link';

const participants = [
  {
    title: "Commercial & Investment Banks",
    description: "These are the main players, trading currencies for their clients (e.g., multinational corporations) and for their own accounts (proprietary trading). They provide the bulk of the market's liquidity.",
  },
  {
    title: "Central Banks",
    description: "Central banks (like the U.S. Federal Reserve) intervene in the Forex market to influence the value of their own currency, manage foreign exchange reserves, and stabilize the economy.",
  },
  {
    title: "Corporations",
    description: "Multinational companies use the Forex market to conduct business. They must convert currencies to pay for goods, services, and labor in foreign countries and to repatriate profits.",
  },
  {
    title: "Retail Speculators",
    description: "This includes individual traders who attempt to profit from short-term fluctuations in currency exchange rates, typically through online brokerage platforms. This group makes up a tiny fraction (less than 5%) of the total market volume.",
  }
];

const risks = [
    {
        title: "Extreme Leverage",
        description: "Forex brokers often offer enormous leverage (e.g., 50:1 or even 200:1). This means a tiny price movement can lead to massive losses that can exceed your initial deposit, making it one of the riskiest forms of trading.",
    },
    {
        title: "Zero-Sum Game",
        description: "Unlike stock investing where a growing economy can create value for all, Forex trading is a zero-sum game. For every trader who profits from a currency move, another trader on the other side of that trade must lose.",
    },
    {
        title: "Complexity",
        description: "Currency prices are influenced by a complex web of factors, including interest rate differentials, inflation, geopolitical events, economic data releases, and central bank policy. This makes it incredibly difficult to predict short-term movements consistently.",
    },
    {
        title: "24-Hour Market",
        description: "The Forex market operates 24 hours a day, 5 days a week. Significant price movements can occur while you are asleep, and positions can move against you rapidly without your ability to react.",
    }
]

export default function CurrencyAsAssetClassPage() {
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
        <h1 className="text-3xl font-bold font-headline">Currency as an Asset Class (Forex)</h1>
        <p className="text-muted-foreground mt-2">An introduction to the foreign exchange market and the high-risk nature of currency trading.</p>
      </div>
      <div className="space-y-6">
        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle className="font-headline">Warning: A Highly Speculative Arena</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>The foreign exchange (Forex or FX) market is the largest and most liquid financial market in the world, with over $7 trillion in daily trading volume. However, for individual investors, trading currencies directly is generally considered a highly speculative and risky endeavor, not a form of long-term investing. The vast majority of retail traders lose money. This lesson is for educational purposes to understand the market, not a recommendation to participate in it.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">What is the Forex Market?</CardTitle>
            <CardDescription>The Forex market is a global, decentralized marketplace where the world's currencies are traded. It dwarfs all other financial markets.</CardDescription>
          </CardHeader>
          <CardContent>
            <h4 className="font-semibold mb-2">How it Works: Currency Pairs</h4>
            <p className="text-sm text-muted-foreground">Currencies are always traded in pairs. When you trade the EUR/USD pair, for example, you are simultaneously buying one currency and selling the other. If you believe the Euro will strengthen against the U.S. Dollar, you would 'buy' the EUR/USD pair. If you think the Euro will weaken, you would 'sell' the pair.</p>
            <p className="text-sm text-muted-foreground mt-2">The most liquid pairs, known as the 'majors' (e.g., EUR/USD, USD/JPY, GBP/USD), have very tight spreads and lower volatility. Emerging market pairs are less liquid and carry significantly higher risk.</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">Who Participates in the Forex Market?</CardTitle>
            <CardDescription>The market is dominated by large institutions. Retail speculators make up less than 5% of the volume.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
            {participants.map(item => (
              <div key={item.title} className="p-4 border rounded-lg bg-card shadow-sm">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>
        
         <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">How Professionals Profit: The Carry Trade</CardTitle>
            <CardDescription>One of the core strategies for professional Forex investors is the 'carry trade,' which is based on interest rate differentials.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">The strategy involves borrowing a currency with a very low interest rate (like the Japanese Yen historically) and using those funds to buy a currency with a high interest rate (like the Australian Dollar). The investor aims to profit from the 'carry'—the difference between the high interest they receive and the low interest they pay. This strategy can be very profitable but is vulnerable to sudden changes in exchange rates that can wipe out the interest rate gains.</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">Case Study: Currency Effects on Meta's Earnings</CardTitle>
            <CardDescription>Here's how currency fluctuations impact the real-world earnings of a global company like Meta (Facebook).</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">Meta generates over half of its revenue from outside North America. This revenue comes in foreign currencies (Euros, Yen, etc.), but Meta reports its earnings in U.S. Dollars. This creates a "translation" effect.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 bg-red-500/10 rounded-md">
                <h4 className="font-semibold flex items-center text-red-700 dark:text-red-300"><TrendingUp className="mr-2 h-4 w-4" /> Strong Dollar (A Headwind)</h4>
                <p className="text-sm text-red-600 dark:text-red-400 mt-1">If the U.S. Dollar strengthens, it takes more Euros to equal one dollar. When Meta converts its European revenue back to dollars, each Euro translates into fewer dollars. This reduces their reported revenue, even if their business in Europe is growing. In their earnings reports, they will call this a "currency headwind."</p>
              </div>
              <div className="p-3 bg-green-500/10 rounded-md">
                <h4 className="font-semibold flex items-center text-green-700 dark:text-green-300"><TrendingDown className="mr-2 h-4 w-4" /> Weak Dollar (A Tailwind)</h4>
                <p className="text-sm text-green-600 dark:text-green-400 mt-1">If the U.S. Dollar weakens, each Euro converts into more dollars. This increases Meta's reported revenue, providing a "currency tailwind" that can boost their growth rate.</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">As an investor, it's important to look at a company's "constant currency" growth rate, which they often provide, to see the true underlying performance of the business without the noise of currency fluctuations.</p>
          </CardContent>
        </Card>


        <Card className="border-destructive/50 bg-destructive/5">
          <CardHeader>
            <CardTitle className="font-headline text-xl text-destructive flex items-center">
              <AlertTriangle className="mr-2 h-5 w-5"/> The Significant Risks for Retail Investors
            </CardTitle>
            <CardDescription>Direct Forex trading is fundamentally different from long-term stock investing.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {risks.map((item) => (
              <div key={item.title} className="p-3 border-b border-destructive/20 last:border-b-0">
                <h4 className="font-semibold">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>
        
        <Alert>
          <HelpCircle className="h-4 w-4" />
          <AlertTitle className="font-headline">How Should a Long-Term Investor Think About Currency?</AlertTitle>
          <AlertDescription>
             <p className="prose prose-sm max-w-none dark:prose-invert">For most investors, the best way to approach currency is not by trading it directly, but by understanding its impact on the multinational companies you own and by using safer, regulated products for limited exposure.</p>
             <ul className="list-disc pl-5 mt-2 space-y-2 text-sm">
                <li><strong>Understand Corporate Exposure:</strong> A globally diversified portfolio of stocks already has inherent exposure to many different currencies. Understanding how a strong or weak dollar affects your companies' earnings is a more practical and less risky application of currency knowledge.</li>
                <li><strong>Use Currency ETFs:</strong> For those who want more direct exposure, currency ETFs (like Invesco's UUP for the US Dollar or FXE for the Euro) offer a way to invest in a currency through a regulated stock exchange, without the extreme leverage of the Forex market.</li>
             </ul>
          </AlertDescription>
        </Alert>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you understand this advanced topic, return to the main roadmap to continue building your financial knowledge.
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
