'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Scale, Castle, Users, Info, TrendingUp, Scissors, Gem, ThumbsDown } from 'lucide-react';
import Link from 'next/link';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend } from 'recharts';

const investingPrinciples = [
  {
    icon: Castle,
    title: "1. Invest in Wonderful Businesses (The Moat)",
    description: "Buffett's core philosophy, heavily influenced by Charlie Munger, is to buy truly great companies with durable competitive advantages, or 'moats.' A moat protects a company's profits from competitors, ensuring long-term profitability. He'd rather pay a fair price for a wonderful business than a wonderful price for a fair business."
  },
  {
    icon: Brain,
    title: "2. Understand What You Own (Circle of Competence)",
    description: "Buffett only invests in businesses he can understand. He doesn't need to be an expert in every industry, but he must know the boundaries of his own knowledge. This prevents him from making speculative bets in areas where he has no real edge."
  },
  {
    icon: Scale,
    title: "3. Demand a Margin of Safety",
    description: "A principle inherited from his mentor, Benjamin Graham. A margin of safety means buying a stock for significantly less than its calculated intrinsic value. This provides a buffer against bad luck, miscalculations, or unforeseen problems."
  },
  {
    icon: Users,
    title: "4. Bet on Great Management",
    description: "Buffett views buying a stock as entering into a partnership with its management team. He looks for leaders who are rational, honest, and have the shareholders' best interests at heart. He prefers managers who have 'skin in the game' through significant personal ownership of the stock."
  },
  {
    icon: Scissors,
    title: "5. Simplicity (Occam's Razor)",
    description: "This principle states that the simplest explanation or solution is often the correct one. Buffett applies this by investing in businesses with straightforward models he can easily understand, avoiding overly complex companies or investment theses.",
    application: "If an investment thesis requires ten complex, interconnected things to all go right, it's fragile. A better investment is one based on a simple, powerful idea, like 'This company sells a great product that people love, and it's getting cheaper for them to make it.' Be wary of businesses that are too complex to understand.",
    quote: "The business schools reward difficult, complex behavior more than simple behavior, but simple behavior is more effective."
  }
];

const formatCurrencyForChart = (value: number) => {
    if (value >= 1_000_000_000) return `$${(value / 1_000_000_000).toFixed(1)}B`;
    if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(1)}M`;
    if (value >= 1_000) return `$${(value / 1_000).toFixed(1)}K`;
    return `$${value.toFixed(0)}`;
};


export default function InvestorBuffettPage() {
  const searchParams = useSearchParams();
  const fromStep = searchParams.get('from');

  const [chartData, setChartData] = useState<any[]>([]);

  useEffect(() => {
    const generateData = () => {
        const data = [];
        let berkshireValue = 1000;
        let sp500Value = 1000;
        const startYear = 1965;
        const endYear = 2023;

        for (let year = startYear; year <= endYear; year++) {
            data.push({
                year: year,
                berkshire: berkshireValue,
                sp500: sp500Value,
            });
            berkshireValue *= 1.198;
            sp500Value *= 1.102;
        }
        setChartData(data);
    };
    generateData();
  }, []);

  return (
    <>
      <Alert variant="destructive" className="mb-6 bg-amber-50 dark:bg-amber-900/20 border-amber-300 dark:border-amber-700">
          <Info className="h-4 w-4 text-amber-500" />
          <AlertDescription className="text-amber-800 dark:text-amber-300 text-xs">
              For educational use only. Not financial or tax advice. Consult a licensed advisor before making major decisions.
          </AlertDescription>
      </Alert>
      <div className="mb-8">
        <h1 className="text-3xl font-bold font-headline">Learn From The Best: Warren Buffett</h1>
        <p className="text-muted-foreground mt-2">Learn from the 'Oracle of Omaha' and his evolution from a quantitative 'cigar-butt' investor to a qualitative business analyst.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Brain className="h-4 w-4" />
          <AlertTitle className="font-headline">A Living Legend</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>Warren Buffett is widely regarded as one of the most successful investors of all time. As the chairman and CEO of Berkshire Hathaway, he has amassed a personal fortune and delivered staggering returns to his shareholders by following a disciplined, long-term investment philosophy.</p>
            <p className="font-semibold">Studying Buffett is not just about learning a stock-picking formula; it's about adopting a rational, business-like mindset toward investing.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">The Early Days: The 'Cigar-Butt' Approach</CardTitle>
            <CardDescription>Buffett's initial strategy was a direct inheritance from his mentor, Benjamin Graham, the father of value investing.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              This approach, which Buffett famously called 'cigar-butt' investing, involved searching for companies trading at extreme discounts to their net asset value. The idea was to find a proverbial cigar butt on the ground with one free puff left in it. These were often terrible businesses, but they were so cheap that there was still some value to be extracted. His first major investment, a textile mill called Berkshire Hathaway, was a classic example of a struggling business bought for a statistically cheap price.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">The Evolution: The Munger Influence</CardTitle>
            <CardDescription>The most important shift in Buffett's career came from his lifelong business partner, Charlie Munger.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Munger convinced Buffett that it was far better to buy a wonderful business at a fair price than a fair business at a wonderful price. This shifted Buffett's focus from purely quantitative measures (how cheap is it?) to qualitative ones (how good is the business?). This new philosophy led Berkshire to acquire iconic brands like See's Candies and Coca-Cola businesses with durable 'moats' that could compound wealth for decades.
            </p>
            <Alert variant="default" className="bg-callout text-callout-foreground border-blue-200 dark:border-blue-800">
                <Info className="h-4 w-4" />
                <AlertTitle className="font-semibold">The Key Takeaway</AlertTitle>
                <AlertDescription>
                 This is the journey almost every great investor makes: moving from a focus on what a stock is worth if liquidated today, to what a business is worth if held for the next 20 years.
                </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">Notable Investments: Wins, Losses, and Lessons</CardTitle>
            <CardDescription>Buffett's career provides powerful case studies in both success and failure.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border bg-card">
                  <h4 className="font-semibold text-green-600 flex items-center"><Gem className="mr-2 h-4 w-4" />The Big Win: See's Candies</h4>
                  <p className="text-sm text-muted-foreground mt-1">In 1972, Buffett and Munger purchased See's Candies. It wasn't statistically cheap, but it was a 'wonderful business.' It had a powerful brand, customer loyalty, and the ability to raise its prices year after year without losing business (pricing power). This allowed See's to generate enormous amounts of cash relative to the capital invested. The purchase of See's marked a pivotal shift in Buffett's strategy and has generated billions for Berkshire Hathaway shareholders.</p>
              </div>
              <div className="p-4 rounded-lg border bg-card">
                  <h4 className="font-semibold text-destructive flex items-center"><ThumbsDown className="mr-2 h-4 w-4" />The Big Loss: Dexter Shoe</h4>
                  <p className="text-sm text-muted-foreground mt-1">In 1993, Buffett acquired Dexter Shoe Company, paying for it with Berkshire Hathaway stock. He judged Dexter to have a durable competitive advantage, but it was quickly eroded by cheap foreign competition. The business eventually went to zero. Buffett considers this his worst mistake, not just because the business failed, but because he paid with Berkshire stock. The stock he gave away is now worth billions, making the opportunity cost of the mistake immense.</p>
              </div>
          </CardContent>
           <CardFooter>
            <Alert variant="default" className="w-full bg-callout text-callout-foreground border-blue-200 dark:border-blue-800">
                <Info className="h-4 w-4" />
                <AlertTitle className="font-semibold">The Lesson</AlertTitle>
                <AlertDescription>
                 A durable competitive advantage is critical. See's Candies' brand was a true moat; Dexter Shoe's was not. The Dexter mistake also highlights the extreme cost of using an appreciating asset (like Berkshire stock) to buy a depreciating one.
                </AlertDescription>
            </Alert>
           </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">The Buffett-Munger Philosophy: Core Principles</CardTitle>
            <CardDescription>Buffett's modern philosophy can be distilled into a few powerful, interconnected ideas.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {investingPrinciples.map(p => (
              <div key={p.title} className="p-4 border rounded-lg bg-muted/30">
                <h3 className="font-semibold flex items-center mb-2">
                  <p.icon className="mr-3 h-5 w-5 text-primary" />
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground">{p.description}</p>
                 {p.application && (
                   <div className="mt-3 space-y-3">
                        <div className="p-3 bg-callout rounded-md">
                            <h4 className="font-semibold text-sm text-callout-foreground">Investing Application:</h4>
                            <p className="text-sm text-callout-foreground/90 mt-1">{p.application}</p>
                        </div>
                        {p.quote && (
                          <div className="p-3 bg-background/50 rounded-md">
                              <blockquote className="border-l-4 border-primary pl-4 italic text-sm">
                                  <p>"{p.quote}"</p>
                              </blockquote>
                          </div>
                        )}
                    </div>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
        
         <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
              <TrendingUp className="mr-2 h-5 w-5 text-primary" />
              Unparalleled Performance
            </CardTitle>
            <CardDescription>From 1965 to 2023, Berkshire Hathaway's stock delivered a compounded annual gain of 19.8%, nearly double the S&P 500's 10.2% return over the same period. This chart illustrates the staggering power of that difference over time.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[400px] w-full bg-muted/30 p-4 rounded-md">
                 <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" fontSize={12} />
                        <YAxis tickFormatter={formatCurrencyForChart} fontSize={12} />
                        <RechartsTooltip formatter={(value: number) => `$${value.toLocaleString(undefined, { maximumFractionDigits: 0 })}`} />
                        <Legend />
                        <Line type="monotone" name="Berkshire Hathaway (19.8%)" dataKey="berkshire" stroke="hsl(var(--primary))" strokeWidth={2} dot={false} />
                        <Line type="monotone" name="S&P 500 (10.2%)" dataKey="sp500" stroke="hsl(var(--secondary))" strokeWidth={2} dot={false} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <p className="text-xs text-muted-foreground mt-2">This is a hypothetical illustration of a $1,000 investment compounding at the stated rates and does not include dividends for the S&P 500, which would narrow the gap but not change the overall conclusion.</p>
          </CardContent>
        </Card>
        
        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you've learned from the Oracle of Omaha, continue exploring the wisdom of other great investors.
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
