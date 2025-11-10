'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { TrendingUp, Gem, ArrowRight, Brain, Info, ThumbsUp, ThumbsDown, History } from 'lucide-react';
import Link from 'next/link';

const assetTypes = [
  {
    icon: TrendingUp,
    title: "Productive Assets: Engines of Wealth Creation",
    description: "These are assets that generate their own cash flow or earnings simply by owning them. Their value is tied to the income they produce. This is what true investing is about.",
    examples: [
      "<strong>Stocks:</strong> Represent partial ownership of a business that generates profits.",
      "<strong>Bonds:</strong> Lend capital and earn interest in return.",
      "<strong>Rental Real Estate:</strong> Produces steady rental income.",
      "<strong>Farmland:</strong> Grows crops that can be sold for cash flow."
    ],
    isPositive: true,
  },
  {
    icon: Gem,
    title: "Non-Productive Assets: Stores of Value, Not Generators",
    description: "These are assets that do not generate any income. Their entire return depends on selling them to someone else in the future for a higher price than you paid. This is speculation, not investing.",
    examples: [
      "<strong>Gold & Precious Metals:</strong> Valuable for scarcity and psychology, but they do not generate income.",
      "<strong>Cryptocurrencies:</strong> Most coins have no intrinsic cash flow; they rely on speculation or future utility.",
      "<strong>Art & Collectibles:</strong> Value comes from rarity and sentiment, not productivity."
    ],
    isPositive: false,
  }
];

export default function ProductiveVsNonProductiveAssetsPage() {
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
        <h1 className="text-3xl font-bold font-headline">Productive vs. Non-Productive Assets</h1>
        <p className="text-muted-foreground mt-2">Understand one of Warren Buffett’s most powerful mental models for identifying true investments.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Brain className="h-4 w-4" />
          <AlertTitle className="font-headline">The Core Principle</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>Warren Buffett simplifies the investing universe into two categories: <strong>Productive assets</strong>, those that create wealth by generating income or profits, and <strong>Non-productive assets</strong>, those that store value but produce nothing.</p>
            <p>Understanding this distinction separates investors, who seek growth through productivity, from speculators, who rely on someone else paying more in the future.</p>
             <blockquote className="mt-2 border-l-4 border-primary pl-4 italic">
                <p>The key to investing is not assessing how much an industry is going to affect society, or how much it will grow, but rather determining the competitive advantage of any given company and, above all, the durability of that advantage.</p>
            </blockquote>
          </AlertDescription>
        </Alert>

        <div className="grid md:grid-cols-2 gap-6">
            {assetTypes.map(item => (
              <Card key={item.title} className={`${item.isPositive ? 'border-green-500/50 bg-green-50/50 dark:bg-green-900/20' : 'border-orange-500/50 bg-orange-50/50 dark:bg-orange-900/20'}`}>
                <CardHeader>
                    <CardTitle className={`flex items-center ${item.isPositive ? 'text-green-700 dark:text-green-300' : 'text-orange-700 dark:text-orange-300'}`}>
                        <item.icon className="mr-2 h-5 w-5" /> {item.title}
                    </CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="p-3 bg-background/50 rounded-md">
                        <h4 className="font-semibold text-sm mb-2">Examples:</h4>
                        <ul className="list-disc pl-5 text-sm space-y-1">
                            {item.examples.map(ex => <li key={ex} dangerouslySetInnerHTML={{ __html: ex }}/>)}
                        </ul>
                    </div>
                </CardContent>
              </Card>
            ))}
        </div>
        
        <Card>
            <CardHeader>
                <CardTitle className="font-headline">Why Productive Assets Win Over Time</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">Because productive assets create value, they compound. Even if prices fluctuate, their underlying productivity drives long-term wealth.</p>
                <Alert variant="default" className="mt-4">
                    <History className="h-4 w-4" />
                    <AlertTitle className="font-semibold">Historical Note</AlertTitle>
                    <AlertDescription>
                        From 1926 to 2023, U.S. equities delivered a nominal average annual return of about 10%, while gold returned roughly 5%. The difference? Businesses reinvest and grow. Gold does not.
                    </AlertDescription>
                </Alert>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle className="font-headline">Why People Buy Non-Productive Assets</CardTitle>
                 <CardDescription>Humans do not act purely rationally; they seek safety, identity, and excitement.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div>
                    <h4 className="font-semibold">Inflation Hedge</h4>
                    <p className="text-sm text-muted-foreground">Gold and crypto often surge when people fear currency debasement.</p>
                </div>
                 <div>
                    <h4 className="font-semibold">Psychological Comfort</h4>
                    <p className="text-sm text-muted-foreground">Tangible assets feel “real” when markets are volatile.</p>
                </div>
                 <div>
                    <h4 className="font-semibold">Speculative Fever</h4>
                    <p className="text-sm text-muted-foreground">Quick profits and social trends attract attention.</p>
                </div>
                 <Alert variant="destructive" className="bg-amber-50 dark:bg-amber-900/30 border-amber-300">
                    <History className="h-4 w-4" />
                    <AlertTitle className="font-semibold">Historical Parallels</AlertTitle>
                    <AlertDescription>
                        <ul className="list-disc pl-5 mt-2 space-y-2">
                            <li><strong>Tulip Mania (1637):</strong> In Holland, rare tulip bulbs became status symbols. Speculation drove the price of a single bulb to more than the cost of a house. People traded their life savings for a non-productive flower bulb, believing someone else would pay even more. When sentiment turned, the market collapsed, leaving many in financial ruin.</li>
                            <li><strong>Gold Booms (1970s):</strong> Amid high inflation and economic uncertainty, people flocked to gold as a "safe haven." The price surged from $35/ounce to over $850/ounce by 1980. However, once inflation was tamed, gold entered a bear market that lasted for two decades. It did not reach its 1980 peak again until 2008, demonstrating its reliance on fear, not productivity.</li>
                            <li><strong>Crypto Bubbles (2017 & 2021):</strong> Driven by narratives of "digital gold" and a new financial system, Bitcoin's price surged to nearly $20,000 in 2017, then crashed over 80%. It surged again to over $68,000 in 2021, driven by new hype cycles, only to fall dramatically once more. These cycles mirror classic speculative manias fueled by fear of missing out (FOMO) rather than fundamental value.</li>
                        </ul>
                        <p className="mt-2">Speculative assets can skyrocket, but without underlying productivity, gravity always returns.</p>
                    </AlertDescription>
                </Alert>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle className="font-headline">Buffett’s Gold Cube Analogy</CardTitle>
                <CardDescription>At a Berkshire Hathaway annual meeting, Buffett illustrated the difference vividly:</CardDescription>
            </CardHeader>
            <CardContent>
                 <blockquote className="border-l-4 border-primary pl-4 italic text-sm">
                    <p>You could take all the gold that has ever been mined, and it would form a cube 67 feet in each direction. For what it is worth, you could buy all the farmland in the United States, 10 Exxon Mobils, and still have a trillion dollars left over. Which would you take? Which is going to produce more value?</p>
                </blockquote>
                <Alert variant="default" className="mt-4 bg-callout text-callout-foreground border-blue-200 dark:border-blue-800">
                    <Info className="h-4 w-4" />
                    <AlertTitle className="font-semibold">His Point: Bet on Human Ingenuity</AlertTitle>
                    <AlertDescription>
                        The farmland and the companies would produce food, energy, and profits; the gold cube would just sit there. Buffett’s philosophy is not anti-gold or anti-crypto; it is pro-productivity. Productive assets harness human creativity, innovation, and effort to generate value. Non-productive assets rely on hope that someone else will want them more later.
                        <p className="mt-2 font-semibold">Over time, the world moves forward because people build, invent, and produce. Bet on that.</p>
                    </AlertDescription>
                </Alert>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader><CardTitle className="font-headline">Key Takeaways</CardTitle></CardHeader>
            <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li>Productive assets earn money for you; that is investing.</li>
                    <li>Non-productive assets depend on resale; that is speculation.</li>
                    <li>Productivity compounds wealth; speculation recycles it.</li>
                    <li>The most reliable wealth builders in history—businesses, real estate, and farms—all produce value.</li>
                </ul>
            </CardContent>
        </Card>
        

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you understand this foundational distinction, explore asset allocation to balance productive and defensive holdings, learn valuation basics to identify when productive assets are cheap, and study risk management—even productive assets can underperform if overpaid.
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
