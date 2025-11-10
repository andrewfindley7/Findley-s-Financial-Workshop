
'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { ArrowRight, Repeat, Info, TrendingUp, TrendingDown, Factory, Cpu, Home, Sun, ShoppingCart, HeartPulse, Utensils, Droplets, Flame, Phone, Landmark, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import { Table as UiTable, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';

const policies = [
  {
    icon: TrendingDown,
    title: "Quantitative Easing (QE)",
    description: "An unconventional monetary policy where a central bank buys long-term securities (like government bonds) from the open market. This process is equivalent to the central bank injecting cash directly into the financial system; by buying a bond, they are giving cash to the seller, effectively lending money to the market to increase the money supply and encourage lending and investment. This is typically used when short-term interest rates are already at or near zero.",
    effects: [
      "Lowers long-term interest rates, making borrowing cheaper for businesses and consumers.",
      "Increases the prices of the assets being purchased (e.g., bonds) and encourages investors to move into riskier assets like stocks (the 'portfolio rebalance' effect).",
      "Injects liquidity into the banking system, hoping to stimulate economic growth."
    ],
    analogy: "Think of it as the central bank pouring a huge amount of new money into the financial system to get it flowing again during a crisis.",
    example: "The massive expansion of the U.S. Federal Reserve's balance sheet from 2008 to 2014 in response to the Global Financial Crisis is a prime example of sustained QE."
  },
  {
    icon: TrendingUp,
    title: "Quantitative Tightening (QT)",
    description: "The reverse of QE. It is a contractionary monetary policy where a central bank reduces the size of its balance sheet by either selling securities or letting them mature without reinvesting the principal. This process removes cash from the financial system; when a bond matures and isn't replaced, the central bank is effectively recouping the money it had previously lent out, reducing the overall money supply.",
    effects: [
      "Increases the supply of bonds on the market, which can lead to higher long-term interest rates.",
      "Removes liquidity from the financial system, which can have a tightening or cooling effect on the economy.",
      "May put downward pressure on asset prices as the 'support' from central bank buying is removed."
    ],
    analogy: "Think of it as the central bank slowly draining the excess money out of the financial system to prevent the economy from overheating.",
    example: "In 2022, after a period of high inflation, the Federal Reserve began QT by allowing billions of dollars of bonds to 'roll off' its balance sheet each month."
  }
];

const sectorPerformance = [
    { name: "Technology", icon: Cpu, qe: "Outperforms", qt: "Underperforms", reason: "Growth stocks with long-duration earnings benefit from lower discount rates during QE. They are hurt by higher rates during QT." },
    { name: "Consumer Discretionary", icon: ShoppingCart, qe: "Outperforms", qt: "Underperforms", reason: "Lower borrowing costs and a 'wealth effect' from rising asset prices during QE boost consumer spending on non-essential items." },
    { name: "Real Estate (REITs)", icon: Home, qe: "Outperforms", qt: "Underperforms", reason: "Highly sensitive to interest rates. QE lowers borrowing costs and makes their dividend yields more attractive compared to safer bonds. QT does the opposite." },
    { name: "Financials", icon: Landmark, qe: "Underperforms", qt: "Outperforms", reason: "QT often accompanies rising rates, which can widen banks' Net Interest Margins. The flat yield curves during QE can compress their profits." },
    { name: "Energy", icon: Flame, qe: "Mixed", qt: "Outperforms", reason: "Performance is tied to commodity prices, which are often a driver of the inflation that QT is meant to fight. Energy can do well in an inflationary QT environment." },
    { name: "Materials", icon: Droplets, qe: "Mixed", qt: "Outperforms", reason: "Similar to energy, basic material prices are an inflationary input. These companies can perform well when central banks are tightening to combat inflation." },
    { name: "Consumer Staples", icon: Utensils, qe: "Underperforms", qt: "Mixed/Outperforms", reason: "A defensive sector. It may lag in a QE-fueled bull market but provides stability during the uncertainty of a QT cycle." },
    { name: "Healthcare", icon: HeartPulse, qe: "Underperforms", qt: "Mixed/Outperforms", reason: "A classic defensive sector. Its non-cyclical demand offers resilience when QT is tightening financial conditions." },
    { name: "Utilities", icon: Sun, qe: "Outperforms", qt: "Underperforms", reason: "Often treated as 'bond proxies' due to their high dividends. They become more attractive when rates are low (QE) and less attractive when safe bond yields rise (QT)." },
    { name: "Industrials", icon: Factory, qe: "Outperforms", qt: "Underperforms", reason: "This cyclical sector benefits from the lower borrowing costs and increased economic activity that QE aims to stimulate." },
    { name: "Communication Services", icon: Phone, qe: "Mixed", qt: "Mixed", reason: "A diverse sector. Growth-oriented media companies may benefit from QE, while traditional telecoms with high debt can be hurt by rising rates during QT." }
];

export default function QuantitativeEasingAndTighteningPage() {
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
        <h1 className="text-3xl font-bold font-headline">Quantitative Easing (QE) vs. Quantitative Tightening (QT)</h1>
        <p className="text-muted-foreground mt-2">Understanding the central bank's unconventional tools for influencing the economy.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Repeat className="h-4 w-4" />
          <AlertTitle className="font-headline">Beyond Traditional Interest Rates</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>While a central bank's main tool is adjusting short-term interest rates, sometimes that's not enough, especially in a major crisis. QE and QT are powerful, large-scale tools used to influence long-term interest rates and the overall supply of money in the economy by directly manipulating the central bank's balance sheet (its total asset holdings).</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">The Two Sides of the Balance Sheet</CardTitle>
            <CardDescription>QE and QT are opposite actions that a central bank takes with its balance sheet.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
            {policies.map(policy => (
              <div key={policy.title} className="p-4 border rounded-lg bg-card shadow-sm flex flex-col">
                <div className="flex items-center mb-2">
                  <policy.icon className="mr-3 h-6 w-6 text-primary" />
                  <h3 className="font-semibold text-lg">{policy.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground flex-grow mb-4">{policy.description}</p>
                <div className="text-xs space-y-3">
                    <div className="p-2 bg-muted/50 rounded-md">
                        <p className="font-semibold mb-1">Primary Effects:</p>
                        <ul className="list-disc pl-4 space-y-1">
                            {policy.effects.map(effect => <li key={effect}>{effect}</li>)}
                        </ul>
                    </div>
                     <div className="p-2 bg-muted/50 rounded-md">
                        <p className="font-semibold mb-1">Simple Analogy:</p>
                        <p>{policy.analogy}</p>
                    </div>
                     <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-md border border-blue-200 dark:border-blue-800">
                        <p className="font-semibold mb-1 text-blue-800 dark:text-blue-300">Historical Example:</p>
                        <p className="text-blue-700 dark:text-blue-400">{policy.example}</p>
                    </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">Market Impact Matrix</CardTitle>
            <CardDescription>A simplified view of how QE and QT typically affect major asset classes.</CardDescription>
          </CardHeader>
          <CardContent>
             <UiTable>
                <TableHeader>
                  <TableRow>
                    <TableHead>Policy</TableHead>
                    <TableHead>Effect on Bond Market</TableHead>
                    <TableHead>Effect on Stock Market</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-semibold">Quantitative Easing (QE)</TableCell>
                    <TableCell>Bond prices tend to rise; yields fall. The central bank is a large, price-insensitive buyer.</TableCell>
                    <TableCell>Generally positive. Lower yields make stocks more attractive and boost valuations ('TINA' - There Is No Alternative).</TableCell>
                  </TableRow>
                   <TableRow>
                    <TableCell className="font-semibold">Quantitative Tightening (QT)</TableCell>
                    <TableCell>Bond prices tend to fall; yields rise. There is more supply of bonds for the market to absorb.</TableCell>
                    <TableCell>Generally negative. Higher yields provide competition for stocks and can compress valuations.</TableCell>
                  </TableRow>
                </TableBody>
             </UiTable>
          </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-xl">Sector Performance Under QE vs. QT</CardTitle>
                <CardDescription>Different sectors react differently to changing liquidity conditions.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="overflow-x-auto">
                    <UiTable>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Sector</TableHead>
                                <TableHead>Performance in QE</TableHead>
                                <TableHead>Performance in QT</TableHead>
                                <TableHead>Reason</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {sectorPerformance.map(sector => (
                                <TableRow key={sector.name}>
                                    <TableCell className="font-semibold flex items-center gap-2"><sector.icon className="h-4 w-4"/>{sector.name}</TableCell>
                                    <TableCell className={sector.qe === 'Outperforms' ? 'text-green-600 font-semibold' : sector.qe === 'Underperforms' ? 'text-red-600' : ''}>{sector.qe}</TableCell>
                                    <TableCell className={sector.qt === 'Outperforms' ? 'text-green-600 font-semibold' : sector.qt === 'Underperforms' ? 'text-red-600' : ''}>{sector.qt}</TableCell>
                                    <TableCell className="text-xs text-muted-foreground">{sector.reason}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </UiTable>
                </div>
            </CardContent>
        </Card>
        
        <Alert variant="destructive" className="bg-amber-50 dark:bg-amber-900/20 border-amber-300 dark:border-amber-700">
            <Info className="h-4 w-4 text-amber-500" />
            <AlertTitle className="font-headline text-amber-900 dark:text-amber-200">The Takeaway for Investors</AlertTitle>
            <AlertDescription className="text-amber-800 dark:text-amber-300">
                <p>QE and QT are powerful forces that can have significant, though often delayed and unpredictable, effects on the market. QE generally acts as a tailwind for asset prices, especially growth-oriented assets, by increasing liquidity and suppressing long-term rates. QT, conversely, acts as a headwind by removing liquidity, which often benefits value stocks and companies with strong, stable cash flows.</p>
                <p className="font-semibold mt-2">However, these are complex mechanisms with many second-order effects. For long-term investors, trying to time the market based on QE or QT announcements is extremely difficult. The better approach is to understand these forces as part of the broader economic landscape and stick to a consistent investment plan based on your long-term goals.</p>
            </AlertDescription>
        </Alert>
        
        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you understand these unconventional tools, return to the main roadmap to continue building your financial knowledge.
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
