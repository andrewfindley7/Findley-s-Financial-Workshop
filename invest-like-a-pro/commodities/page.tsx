'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Droplets, Gem, Wheat, TrendingUp, TrendingDown, Info, ArrowRight, ShieldCheck, Layers, FileText, Repeat, Globe, Banknote } from 'lucide-react';
import Link from 'next/link';

const commodityTypes = [
  {
    icon: Droplets,
    title: "Hard Commodities",
    description: "Natural resources that must be mined or extracted.",
    examples: ["Crude Oil", "Natural Gas", "Gold", "Silver", "Copper"]
  },
  {
    icon: Wheat,
    title: "Soft Commodities",
    description: "Agricultural products or livestock that are grown.",
    examples: ["Corn", "Wheat", "Soybeans", "Coffee", "Sugar"]
  }
];

const howToInvest = [
    {
        title: "Direct Physical Investment",
        description: "Buying and storing the physical commodity, like gold bars or silver coins. This is practical for precious metals but not for barrels of oil or bushels of wheat.",
    },
    {
        title: "Futures Contracts",
        description: "This is the primary way commodities are traded. A futures contract is an agreement to buy or sell a specific quantity of a commodity at a predetermined price on a future date. This is a complex, high-leverage strategy not suitable for most individual investors.",
    },
     {
        title: "Commodity ETFs and Mutual Funds",
        description: "This is the most accessible way for individual investors. These funds track a specific commodity (like a gold ETF) or a broad basket of commodities. They provide exposure without the need to trade complex futures contracts. It's crucial to know that many of these ETFs use futures contracts to track the price, which can lead to underperformance versus the spot price due to a market condition called 'contango.'",
    },
     {
        title: "Stocks of Commodity Producers",
        description: "Investing in the stocks of companies that produce commodities (e.g., an oil company like ExxonMobil or a mining company like Barrick Gold). This gives you indirect exposure, but the stock's performance will also be influenced by company-specific factors like management quality and operational efficiency.",
    }
];

const risksToConsider = [
    {
        title: "No Intrinsic Yield",
        description: "Unlike stocks (which can have earnings) or bonds (which pay interest), commodities generate no income. Their entire return depends on price appreciation. As Warren Buffett has said about gold, \"it doesn't do anything but sit there and look at you.\""
    },
    {
        title: "High Volatility",
        description: "Commodity prices can be extremely volatile and are subject to unpredictable supply and demand shocks from weather, geopolitics, or industrial activity."
    },
    {
        title: "Currency Risk (U.S. Dollar)",
        description: "Most major commodities are priced in U.S. dollars. This means that if the dollar strengthens against other world currencies, it can put downward pressure on commodity prices, as it takes fewer dollars to buy the same amount of the commodity."
    },
    {
        title: "Speculative Nature",
        description: "Because they produce no cash flow, valuing commodities is impossible. Investing in them is largely a speculation on future price movements. For this reason, most financial advisors recommend that commodities make up only a very small portion (e.g., 0-5%) of a diversified portfolio."
    }
];


export default function CommoditiesPage() {
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
        <h1 className="text-3xl font-bold font-headline">Commodities</h1>
        <p className="text-muted-foreground mt-2">Learn about investing in raw materials like oil, gold, and agricultural products.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Gem className="h-4 w-4" />
          <AlertTitle className="font-headline">What are Commodities?</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>A commodity is a basic good or raw material, interchangeable with other commodities of the same type. Unlike stocks, which represent ownership in a business, commodities are physical goods. Their price is driven purely by supply and demand dynamics in the global market.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">The Two Main Types of Commodities</CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
            {commodityTypes.map(item => (
              <div key={item.title} className="p-4 border rounded-lg bg-card shadow-sm">
                <div className="flex items-center mb-2">
                  <item.icon className="mr-2 h-5 w-5 text-primary/80" />
                  <h3 className="font-semibold">{item.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                <div className="text-xs bg-blue-50 dark:bg-blue-900/30 p-2 rounded-md border border-blue-200 dark:border-blue-800">
                    <p className="font-semibold mb-1 text-blue-800 dark:text-blue-300">Examples:</p>
                    <ul className="list-disc pl-4 space-y-1 text-blue-700 dark:text-blue-400">
                        {item.examples.map(ex => <li key={ex}>{ex}</li>)}
                    </ul>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">Composition & Behavior</CardTitle>
            <CardDescription>Not all commodities are the same, and broad indices can be heavily concentrated.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold flex items-center mb-2">
                <Droplets className="mr-2 h-5 w-5"/> The Dominance of Energy
              </h3>
              <p className="text-sm text-muted-foreground">Be aware that many broad commodity indices, like the S&P GSCI, have a very heavy weighting towards energy commodities (crude oil and natural gas), often over 50%. This means their performance is largely a bet on global energy trends, not a truly diversified basket of raw materials.</p>
            </div>
            <div className="p-4 border rounded-lg">
               <h3 className="font-semibold flex items-center mb-2">
                <Banknote className="mr-2 h-5 w-5"/> Precious Metals as Safe Havens
              </h3>
              <p className="text-sm text-muted-foreground">Gold and, to a lesser extent, silver often behave differently from industrial commodities like copper or oil. During times of economic fear or currency devaluation, investors often flock to gold as a 'safe haven' store of value. This means its price can rise even when industrial demand is falling, making it a useful tool for diversification.</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">How to Invest in Commodities</CardTitle>
            <CardDescription>Direct investment in commodities is different from buying stocks or bonds.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
             {howToInvest.map(item => (
              <div key={item.title} className="p-3 border-b last:border-b-0">
                <h4 className="font-semibold">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">The Role of Commodities in a Portfolio</CardTitle>
            <CardDescription>Commodities are typically used for two main purposes: inflation hedging and diversification.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/20 border-green-200">
              <h3 className="font-semibold flex items-center mb-2 text-green-700 dark:text-green-300">
                <ShieldCheck className="mr-2 h-5 w-5"/> Inflation Hedge
              </h3>
              <p className="text-sm text-muted-foreground">{`The prices of raw materials (commodities) are a primary component of inflation. During periods of high inflation, commodity prices often rise, which can help protect the purchasing power of a portfolio when stocks and bonds may be struggling.`}</p>
            </div>
            <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/20 border-green-200">
               <h3 className="font-semibold flex items-center mb-2 text-green-700 dark:text-green-300">
                <Layers className="mr-2 h-5 w-5"/> Diversification
              </h3>
              <p className="text-sm text-muted-foreground">{`Commodity prices are often driven by different factors than stock and bond prices (e.g., weather, geopolitics, industrial demand). This means their returns may not be correlated with the returns of other assets, which can help smooth out overall portfolio volatility.`}</p>
            </div>
          </CardContent>
        </Card>
        
        <Alert variant="destructive" className="bg-amber-50 dark:bg-amber-900/20 border-amber-300 dark:border-amber-700">
          <Info className="h-4 w-4 text-amber-500" />
          <AlertTitle className="font-headline text-amber-900 dark:text-amber-200">Key Risks and Considerations</AlertTitle>
          <AlertDescription className="text-amber-800 dark:text-amber-300 prose prose-sm max-w-none dark:prose-invert">
            <ul className="list-disc pl-5 mt-2 space-y-2">
              {risksToConsider.map(risk => (
                <li key={risk.title}>
                  <strong>{risk.title}:</strong> {risk.description}
                </li>
              ))}
            </ul>
          </AlertDescription>
        </Alert>
        
        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you understand this key asset class, return to the main roadmap to continue building your financial knowledge.
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
