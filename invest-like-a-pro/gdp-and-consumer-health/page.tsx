
'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { BarChart3, TrendingDown, Info, ShoppingCart, Briefcase, ThumbsDown, DollarSign, Brain, History, ArrowRight, Building, Package, Ship, Sigma } from 'lucide-react';
import Link from 'next/link';

const gdpComponents = [
    {
        letter: 'C',
        title: 'Consumption',
        description: 'This is the largest component, representing all spending by households on goods (like cars and groceries) and services (like haircuts and software subscriptions).',
        icon: ShoppingCart,
    },
    {
        letter: 'I',
        title: 'Investment',
        description: 'This includes business spending on equipment, intellectual property, and new construction, as well as household spending on new housing.',
        icon: Building,
    },
    {
        letter: 'G',
        title: 'Government Spending',
        description: 'This covers all spending by federal, state, and local governments on goods and services, such as defense, infrastructure, and salaries for government employees.',
        icon: Briefcase,
    },
    {
        letter: 'X-M',
        title: 'Net Exports',
        description: "This is the value of a country's exports (goods sold to other countries) minus the value of its imports (goods bought from other countries). When a country imports more than it exports, this creates a trade deficit and acts as a negative drag on GDP, putting more pressure on the consumer (C) to spend enough to offset this deficit. Conversely, exporting more goods than are imported is a sign of external growth, similar to how an individual diversifies their income streams, so too shall a healthy country.",
        icon: Ship,
    }
];

const assetPerformance = [
    {
        phase: 'GDP Growth (Expansion)',
        impact: 'Positive for cyclical stocks (Consumer Discretionary, Industrials, Technology), as corporate profits rise with a strong economy. Defensive sectors (Utilities, Consumer Staples) may underperform. Bond prices may fall if growth leads to inflation and higher interest rates.',
    },
    {
        phase: 'GDP Stagnation/Decline (Recession)',
        impact: 'Negative for cyclical stocks. Investors flee to "safe haven" assets. Defensive stocks, which sell essential goods, tend to outperform. Government bonds often do well as investors seek safety and central banks lower interest rates.',
    }
];


export default function GdpAndConsumerHealthPage() {
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
        <h1 className="text-3xl font-bold font-headline">GDP and Consumer Health</h1>
        <p className="text-muted-foreground mt-2">Learn how GDP is calculated, why the consumer is so important, and the risks of a debt-fueled economy.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <BarChart3 className="h-4 w-4" />
          <AlertTitle className="font-headline">What is GDP?</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>Gross Domestic Product (GDP) is the most common measure of a country's economic health. It represents the total monetary value of all the finished goods and services produced within a country's borders in a specific time period. A growing GDP indicates an expanding economy, while a shrinking GDP indicates a contraction or recession.</p>
            <p className="font-semibold">The formula is:</p>
            <div className="my-2 p-3 bg-muted rounded-md text-center">
              <code className="text-lg font-bold font-mono">GDP = C + I + G + (X - M)</code>
            </div>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">The Components of GDP</CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
            {gdpComponents.map(item => (
              <div key={item.title} className="p-4 border rounded-lg bg-card shadow-sm">
                <div className="flex items-center mb-2">
                  <item.icon className="mr-2 h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-lg">{item.title} ({item.letter})</h3>
                </div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>
        
        <Card className="border-amber-500/50 bg-amber-50/50 dark:bg-amber-900/20">
          <CardHeader>
            <CardTitle className="font-headline text-xl text-amber-800 dark:text-amber-200 flex items-center">
              <ShoppingCart className="mr-2 h-5 w-5" /> The U.S. Consumer: The 70% Engine
            </CardTitle>
            <CardDescription>In the United States, the economy is overwhelmingly driven by one component: Consumer Spending (C).</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Consumer spending typically accounts for roughly 70% of U.S. GDP. This means the financial health and spending habits of the average household are the single most important drivers of economic growth. When the consumer is confident and spending, the economy expands. When the consumer pulls back, the economy contracts. This makes understanding consumer health a critical task for any investor.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
              <TrendingDown className="mr-2 h-5 w-5 text-destructive" />
              Warning Signs: An Unhealthy Consumer
            </CardTitle>
            <CardDescription>How can you tell if consumer-led growth is sustainable? Look for these warning signs in economic data.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 border rounded-lg bg-card shadow-sm">
              <h3 className="font-semibold text-base mb-1">Decreasing Savings Rate</h3>
              <p className="text-sm text-muted-foreground">The personal savings rate measures the percentage of disposable income that people are saving. A falling savings rate suggests that consumers are spending more of what they earn and saving less, often dipping into past savings to fund current consumption. This is not sustainable.</p>
            </div>
             <div className="p-4 border rounded-lg bg-card shadow-sm">
              <h3 className="font-semibold text-base mb-1">Increasing Household Debt</h3>
              <p className="text-sm text-muted-foreground">Rising levels of credit card debt and other consumer loans indicate that spending is being funded by borrowing, not by rising income. This is pulling future consumption forward and creates financial fragility for households.</p>
            </div>
             <div className="p-4 border rounded-lg bg-card shadow-sm">
              <h3 className="font-semibold text-base mb-1">Rising Delinquency Rates</h3>
              <p className="text-sm text-muted-foreground">An increase in the percentage of consumers who are late on their credit card or auto loan payments is a clear sign of financial distress. It means households are struggling to manage their existing debt, let alone take on more.</p>
            </div>
            <Alert variant="destructive">
                <Info className="h-4 w-4" />
                <AlertTitle>The Unsustainable Cycle</AlertTitle>
                <AlertDescription>
                    When these signs appear together, it signals that economic growth is being subsidized by decreasing savings and increasing debt. This is not real growth; it is a financial illusion that eventually ends when the consumer has nothing left to spend and is forced to pull back, often leading to a sharp recession.
                </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
        
        <Card className="border-green-500/50 bg-green-50/50 dark:bg-green-900/20">
          <CardHeader>
            <CardTitle className="font-headline text-xl text-green-700 dark:text-green-300">
              The Paradox of Thrift: A Healthier Future
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">What if everyone suddenly became financially responsible, saved more, and paid down debt? In the short term, this would likely cause GDP to decrease. Consumer spending (C) would fall, leading to what economists call the paradox of thrift where individually rational decisions lead to a collectively negative outcome.</p>
            <p className="text-sm text-muted-foreground mt-2 font-semibold">However, over the long term, this is exactly what creates a healthy, sustainable economy. A consumer who builds wealth and lives within their means becomes more resilient. Their future spending is funded by a strong financial position, not by precarious debt. While the transition might be painful, the resulting economy would be far more stable and prosperous than one built on a mountain of consumer debt.</p>
          </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle className="font-headline">How GDP Cycles Affect Asset Classes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {assetPerformance.map(phase => (
                    <div key={phase.phase} className="p-3 border-b last:border-b-0">
                        <h4 className="font-semibold">{phase.phase}</h4>
                        <p className="text-sm text-muted-foreground">{phase.impact}</p>
                    </div>
                ))}
            </CardContent>
        </Card>
        
        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you understand the drivers of GDP, return to the roadmap to continue your learning.
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

    