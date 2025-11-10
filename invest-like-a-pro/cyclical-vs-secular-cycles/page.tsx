
'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { ArrowRight, Activity, TrendingUp, Sun, CloudRain, Sunrise, Waves, Calendar, Brain, Info, BarChart3, UsersRound, ThumbsUp, ThumbsDown } from 'lucide-react';
import Link from 'next/link';

const cyclicalPhases = [
  {
    icon: TrendingUp,
    title: "Expansion",
    description: "The economy is growing. GDP is rising, unemployment is low, and corporate profits are strong.",
    bestSectors: ["Technology", "Consumer Discretionary", "Industrials"],
    emotion: "Optimism grows into Euphoria.",
    emotionIcon: ThumbsUp,
  },
  {
    icon: Sun,
    title: "Peak",
    description: "The expansion matures. Growth slows, inflation may rise, and valuations become stretched.",
    bestSectors: ["Materials", "Energy"],
    emotion: "Greed and Complacency take hold.",
    emotionIcon: ThumbsUp,
  },
  {
    icon: CloudRain,
    title: "Contraction (Recession)",
    description: "The economy shrinks. GDP falls, unemployment rises, and profits decline, leading to a bear market.",
    bestSectors: ["Consumer Staples", "Healthcare", "Utilities"],
    emotion: "Anxiety turns into Fear and Panic.",
    emotionIcon: ThumbsDown,
  },
  {
    icon: Sunrise,
    title: "Trough",
    description: "The economy bottoms out. The decline stops, and signs of recovery begin to appear.",
    bestSectors: ["Financials", "Technology (in anticipation of next cycle)"],
    emotion: "Despair gives way to Hope.",
    emotionIcon: ThumbsUp,
  }
];


const secularCycles = [
  {
    icon: Calendar,
    title: "Secular (Long-Term) Bull Market",
    description: "A multi-decade period of generally rising asset prices and investor optimism. Valuations (P/E ratios) tend to expand. There will be shorter cyclical recessions within it, but the overarching trend is upward.",
    characteristics: ["15-25 year duration", "P/E ratios expand", "Strong long-term returns", "Often driven by falling interest rates, productivity gains, and innovation"],
    example: "The period from 1982 to 2000, driven by falling interest rates, globalization, and the tech boom."
  },
  {
    icon: Waves,
    title: "Secular (Long-Term) Bear Market",
    description: "A multi-decade period where the market essentially goes sideways or provides flat-to-low returns. There will be powerful cyclical bull markets within it, but the market often fails to make significant new highs over the long term. Valuations (P/E ratios) tend to contract.",
    characteristics: ["15-25 year duration", "P/E ratios contract", "Flat or poor long-term returns", "Often marked by high inflation, economic shocks, or deleveraging"],
    example: "The period from 1966 to 1982 (stagflation) or 2000 to 2012 (tech bust and financial crisis)."
  }
];

const leadingIndicators = ["Building Permits", "Stock Market Prices (S&P 500)", "Inverted Yield Curve", "Credit Spreads", "ISM Manufacturing PMI"];
const laggingIndicators = ["Unemployment Rate", "Corporate Profits (reported)", "Consumer Price Index (CPI)", "Changes in Labor Cost"];


const cyclicalPositioning = [
    { title: "Expansion", description: "Gradually favor cyclical stocks (Tech, Discretionary). Reduce defensives as risk appetite grows." },
    { title: "Peak", description: "Trim overvalued 'hot' stocks. Increase allocation to defensives (Healthcare, Staples) and raise some cash." },
    { title: "Contraction", description: "Focus on balance sheet strength. Deploy cash into high-quality bonds or dividend stocks for income." },
    { title: "Trough", description: "Begin accumulating high-quality cyclical and growth stocks at discounted prices, anticipating the recovery." },
];

const secularPositioning = [
    { title: "Secular Bull", description: "Favor a higher allocation to equities, especially growth-oriented companies. Buy-and-hold strategies work very well. The main risk is overpaying at cyclical peaks.", isBull: true },
    { title: "Secular Bear", description: "Strategy becomes more important than asset class. Returns are harder to come by. Value investing, dividend income, and tactical bets on commodities or specific sectors become more critical. The main risk is 'buying the dip' on cyclical rallies that ultimately fail to make new highs.", isBull: false },
]


export default function CyclicalVsSecularCyclesPage() {
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
        <h1 className="text-3xl font-bold font-headline">Cyclical vs. Secular Market Cycles</h1>
        <p className="text-muted-foreground mt-2">Learn about the short-term 'waves' and long-term 'tides' that shape investment returns.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Activity className="h-4 w-4" />
          <AlertTitle className="font-headline">The Rhythm of the Economy</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>Economies do not grow in a straight line; they move in cycles. Understanding the difference between short-term cyclical trends and long-term secular trends is crucial for setting realistic expectations and maintaining investment discipline.</p>
            <ul className="list-disc pl-5 mt-2">
                <li>Cyclical Cycles (Waves): These are short-to-medium term business cycles, typically lasting 3-5 years, driven by fluctuations in corporate profits and credit.</li>
                <li>Secular Cycles (Tides): These are multi-decade 'super-cycles', often lasting 15-25 years, where the overall market trend is either strongly positive (a secular bull) or largely flat (a secular bear).</li>
            </ul>
          </AlertDescription>
        </Alert>

        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-xl">Visualizing the Cycles: Waves on a Tide</CardTitle>
                <CardDescription>This diagram shows how shorter cyclical bull and bear markets (the waves) can occur within a larger, long-term secular bull market (the tide).</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="relative h-48 w-full bg-muted/20 p-4 rounded-lg overflow-hidden">
                    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 800 200">
                        {/* Secular Trend Line (The Tide) */}
                        <path d="M0,150 C150,120 350,100 800,40" stroke="hsl(var(--primary))" strokeWidth="2.5" fill="none" strokeDasharray="8 8" />
                        
                        {/* Cyclical Wave */}
                        <path d="M0,150 Q100,100 200,130 T400,100 Q500,60 600,90 T800,60" stroke="hsl(var(--foreground))" strokeWidth="2" fill="none" />
                        
                        {/* Labels */}
                        <text x="350" y="80" fill="hsl(var(--primary))" textAnchor="middle" className="text-xs font-semibold">Secular Bull Market (The Tide)</text>
                        <text x="250" y="150" fill="hsl(var(--foreground))" textAnchor="middle" className="text-xs font-semibold">Cyclical Moves (The Waves)</text>
                    </svg>
                </div>
            </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">The Four Phases of a Cyclical Business Cycle</CardTitle>
            <CardDescription>A normal economy typically moves through these four stages, each with its own emotional character.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
            {cyclicalPhases.map(phase => (
              <div key={phase.title} className="p-4 border rounded-lg bg-card shadow-sm flex flex-col">
                <div className="flex items-start mb-2">
                  <phase.icon className="mr-3 h-6 w-6 text-primary/80 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">{phase.title}</h3>
                    <p className="text-xs font-semibold flex items-center gap-1.5 mt-1">
                        <phase.emotionIcon className={`h-4 w-4 ${phase.emotionIcon === ThumbsUp ? 'text-green-600' : 'text-red-600'}`}/>
                        Investor Emotion: {phase.emotion}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground flex-grow">{phase.description}</p>
                 <div className="text-xs mt-3 pt-3 border-t">
                    <p className="font-semibold mb-1">Typically performs well:</p>
                    <p className="text-muted-foreground">{phase.bestSectors.join(', ')}</p>
                 </div>
              </div>
            ))}
          </CardContent>
          <CardFooter>
             <p className="text-xs text-muted-foreground">Historically, the best buying opportunities emerge during the Trough phase, when pessimism is at its peak but the market is beginning to price in a future recovery. Buying during a panic is difficult but often highly rewarding.</p>
          </CardFooter>
        </Card>
        
         <Card>
          <CardHeader>
            <CardTitle className="font-headline">Strategic Positioning Through a Cyclical Cycle</CardTitle>
            <CardDescription>While market timing is a fool's errand, understanding the cycle can inform how you might tilt your portfolio's risk exposure.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
            {cyclicalPositioning.map((item) => (
              <div key={item.title} className="p-3 border rounded-lg bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800 text-black dark:text-white">
                <h4 className="font-semibold">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">Key Economic Indicators to Watch</CardTitle>
            <CardDescription>Investors watch these data points to get a sense of where we are in the cycle. No single indicator is perfect.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg bg-muted/40">
                <h3 className="font-semibold mb-2">Leading Indicators (Look Forward)</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">{leadingIndicators.map(i => <li key={i}>{i}</li>)}</ul>
            </div>
            <div className="p-4 border rounded-lg bg-muted/40">
                <h3 className="font-semibold mb-2">Lagging Indicators (Confirm the Past)</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">{laggingIndicators.map(i => <li key={i}>{i}</li>)}</ul>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">The Two Secular 'Super-Cycles'</CardTitle>
            <CardDescription>A secular cycle is defined by its long-term trend in returns and valuations.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
            {secularCycles.map(cycle => (
              <div key={cycle.title} className="p-4 border rounded-lg bg-card shadow-sm flex flex-col">
                <div className="flex items-center mb-2">
                  <cycle.icon className="mr-2 h-6 w-6 text-primary/80" />
                  <h3 className="font-semibold text-lg">{cycle.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground flex-grow mb-3">{cycle.description}</p>
                 <div className="text-xs mt-3 pt-3 border-t">
                    <p className="font-semibold mb-2">Characteristics:</p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        {cycle.characteristics.map(c => <li key={c}>{c}</li>)}
                    </ul>
                    <p className="font-semibold mt-3 mb-1">Historical Example:</p>
                    <p className="text-muted-foreground">{cycle.example}</p>
                 </div>
              </div>
            ))}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Strategic Positioning for Secular Cycles</CardTitle>
            <CardDescription>Adjusting your long-term expectations and strategy based on the prevailing secular 'tide'.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
            {secularPositioning.map((item) => (
              <div key={item.title} className={`p-4 border rounded-lg ${item.isBull ? 'bg-green-50/50 dark:bg-green-900/20' : 'bg-orange-50/50 dark:bg-orange-900/20'}`}>
                <h4 className={`font-semibold ${item.isBull ? 'text-green-700 dark:text-green-300' : 'text-orange-700 dark:text-orange-300'}`}>{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Alert variant="default" className="bg-primary/5">
            <Info className="h-4 w-4 text-primary" />
            <AlertTitle className="font-headline">Mini Case Study: The 2020 Rebound</AlertTitle>
            <AlertDescription>
                <p>During the March 2020 COVID-19 panic, the market was clearly in the 'Contraction' phase, with fear at an absolute maximum. However, astute investors noted that leading indicators like massive government stimulus and central bank intervention were already in place. They understood that while the current situation was dire (a lagging indicator), the market would begin to price in a future recovery. Those who bought during this 'Trough' phase, when the news was at its worst, were handsomely rewarded in the subsequent 'Expansion'.</p>
            </AlertDescription>
        </Alert>

        <Alert variant="destructive" className="bg-amber-50 dark:bg-amber-900/20 border-amber-300 dark:border-amber-700">
            <Brain className="h-4 w-4 text-amber-500" />
            <AlertTitle className="font-headline text-amber-900 dark:text-amber-200">The Difficulty of Market Timing</AlertTitle>
            <AlertDescription className="text-amber-800 dark:text-amber-300">
                <p>While understanding cycles is useful for analysis, trying to perfectly time your investments based on them is extremely difficult and often counterproductive. The market is forward-looking and often prices in a recovery or recession months before it's officially declared. It's impossible to know with certainty when a secular cycle will turn.</p>
                <p className="mt-2 font-semibold">For most long-term investors, the best strategy is to stay invested through all cycles rather than trying to time the market. Consistent investment (dollar-cost averaging) is your best tool, as it automatically ensures you buy more when prices are low (during contractions) and less when prices are high (during peaks).</p>
            </AlertDescription>
        </Alert>
        
        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you understand this key economic concept, return to the main roadmap to continue building your financial knowledge.
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

    