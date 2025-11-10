'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Globe, ArrowRight, TrendingUp, Layers, Info, AlertTriangle, ShieldCheck, PieChart, History, CheckCircle, Clock } from 'lucide-react';
import Link from 'next/link';

const whyInvestInternationally = [
  {
    icon: Layers,
    title: "Diversification",
    description: "The US stock market represents only about half of the world's total stock market value. Different economies perform differently at different times. By investing internationally, you reduce the risk of having all your assets tied to the fate of a single country's economy."
  },
  {
    icon: TrendingUp,
    title: "Growth Opportunities",
    description: "Many of the world's fastest-growing economies and most innovative companies are outside the United States. International investing gives you access to this growth potential, from emerging markets in Asia to established leaders in Europe."
  },
  {
    icon: ShieldCheck,
    title: "Reduced Home Country Bias",
    description: "Investors naturally tend to overweight their home country's stocks because they are more familiar. Actively investing internationally is a disciplined way to overcome this bias and build a more globally balanced and resilient portfolio."
  }
];

const howToInvest = [
    {
        title: "International Mutual Funds & ETFs",
        description: "This is the easiest and most effective method. Funds like Vanguard Total International Stock ETF (VXUS) or iShares CORE MSCI Total International Stock ETF (IXUS) provide instant, diversified exposure to thousands of companies across both developed and emerging markets, all in a single, low-cost investment."
    },
    {
        title: "American Depositary Receipts (ADRs)",
        description: "An ADR is a certificate issued by a U.S. bank that represents a specified number of shares in a foreign company's stock. It trades on U.S. exchanges like a regular stock, making it easy to invest in specific foreign companies (e.g., Toyota, Shell, Sony) without dealing with foreign exchanges."
    },
    {
        title: "Direct Investing on Foreign Exchanges",
        description: "This is an advanced method that involves opening an account with a broker that provides access to international stock exchanges. It requires dealing with currency conversions and different regulatory environments, and is not recommended for most individual investors."
    },
];

const risksToConsider = [
    {
        title: "Currency Risk (Exchange Rate Risk)",
        description: "This is a key risk. If the U.S. dollar strengthens against the foreign currency your investment is in, the value of your investment will decrease when converted back to dollars, even if the stock price in its local currency hasn't changed. The opposite is also true: a weakening dollar can boost your returns.",
    },
    {
        title: "Political & Economic Risk",
        description: "Investments in foreign countries, especially emerging markets, are subject to political instability, changes in government policy, and economic downturns that can be more severe than in the U.S.",
    },
    {
        title: "Regulatory & Accounting Differences",
        description: "Companies in other countries operate under different accounting standards and regulations, which can sometimes be less transparent than in the U.S., making analysis more difficult.",
    }
]

export default function InternationalInvestingPage() {
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
        <h1 className="text-3xl font-bold font-headline">International Investing</h1>
        <p className="text-muted-foreground mt-2">A lesson on diversifying your portfolio beyond your home country to capture global growth and reduce risk.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Globe className="h-4 w-4" />
          <AlertTitle className="font-headline">Why Look Beyond Your Borders?</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>While the U.S. stock market is the largest and most dynamic in the world, it is not the only market. Investing solely in your home country exposes you to concentration risk and causes you to miss out on growth opportunities in other parts of the world. International investing is a core component of building a truly diversified, resilient, long-term portfolio.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">The Core Benefits of International Diversification</CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-3 gap-4">
            {whyInvestInternationally.map(item => (
              <div key={item.title} className="p-4 border rounded-lg bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800">
                <div className="flex items-center mb-2">
                  <item.icon className="mr-2 h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <h3 className="font-semibold text-blue-800 dark:text-blue-300">{item.title}</h3>
                </div>
                <p className="text-sm text-blue-700 dark:text-blue-400/90">{item.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center"><History className="mr-2 h-5 w-5 text-primary"/>Historical Perspective & Cycles</CardTitle>
            <CardDescription>Global diversification is a tested principle, not just a theory.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold">The "Lost Decade" for U.S. Stocks</h4>
              <p className="text-sm text-muted-foreground">In the 1980s and 1990s, international investing became a mainstream concept as investors realized that different markets do not move in perfect sync. For example, while the U.S. market led global returns in the 2010s, the 2000–2010 period was the "lost decade" for U.S. stocks, yet international markets, especially emerging Asia, performed far better. This cycle shows that leadership rotates, and global exposure ensures you always have some stake in the winners.</p>
            </div>
             <div>
              <h4 className="font-semibold">Patience Pays</h4>
              <p className="text-sm text-muted-foreground">There are decades when U.S. stocks outperform and decades when international markets lead. Global diversification is not about predicting which region will win, it is about ensuring you are never completely wrong.</p>
            </div>
             <div>
              <h4 className="font-semibold">Correlation Is Not Constant</h4>
              <p className="text-sm text-muted-foreground">In calm markets, global markets often move together. But in times of crisis or inflationary shocks, regional differences can become powerful stabilizers. For instance, commodities-heavy markets like Canada or Australia can perform well when U.S. tech stocks lag. True diversification shows its strength over full market cycles, not months.</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">Real-World Examples of Global Opportunity</CardTitle>
            <CardDescription>Global investing means owning pieces of recognizable companies and economies shaping the world.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
             <p><strong>Europe:</strong> Nestlé, ASML, LVMH — global consumer and technology leaders.</p>
             <p><strong>Asia:</strong> Samsung, TSMC, Toyota — innovation-driven manufacturers and exporters.</p>
             <p><strong>Emerging Markets:</strong> India’s IT sector, Brazil’s resource firms, and Southeast Asia’s growing digital economy.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">How to Invest Internationally</CardTitle>
            <CardDescription>For most investors, accessing global markets is simple and low-cost.</CardDescription>
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
            <CardTitle className="font-headline text-xl flex items-center"><CheckCircle className="mr-2 h-5 w-5 text-primary"/>Practical Application: A Quick Checklist</CardTitle>
            <CardDescription>Use this checklist to translate knowledge into action.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 text-sm space-y-2">
                <li>For simplicity, use a broad international ETF (like VXUS) or a total world fund (like VT) for effortless global exposure.</li>
                <li>Recognize that many large-cap "domestic" companies (like Coca-Cola or Apple) derive a huge portion of their revenue from abroad, providing you with inherent international exposure. The goal is to be globally diversified, not just to own "international" funds.</li>
                <li>Rebalance your allocations annually to maintain your target mix.</li>
                <li>Avoid reacting to short-term currency or geopolitical headlines.</li>
                <li>Stay focused on long-term growth, not quarterly news cycles.</li>
            </ul>
          </CardContent>
        </Card>
        
        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle className="font-headline">Key Risks of International Investing</AlertTitle>
          <AlertDescription>
            <div className="mt-2 space-y-3">
                {risksToConsider.map(item => (
                    <div key={item.title}>
                        <h4 className="font-semibold">{item.title}</h4>
                        <p className="text-sm">{item.description}</p>
                    </div>
                ))}
            </div>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
              <PieChart className="mr-2 h-5 w-5 text-primary"/>
              How Much Should I Allocate?
            </CardTitle>
            <CardDescription>A common guideline for portfolio construction.</CardDescription>
          </CardHeader>
          <CardContent>
             <p className="text-sm text-muted-foreground">There is no single 'right' answer, but many financial advisors and model portfolios (like those from Vanguard or Fidelity) recommend a significant allocation to international stocks for diversification. A common starting point is to allocate <strong>20% to 40%</strong> of your total stock portfolio to international equities.</p>
             <p className="text-sm text-muted-foreground mt-2">For example, a simple "80/20" portfolio might be 60% US Stocks, 20% International Stocks, and 20% Bonds.</p>
              <Alert variant="default" className="mt-4 bg-callout text-callout-foreground border-blue-200 dark:border-blue-800">
                <Info className="h-4 w-4"/>
                <AlertTitle className="font-semibold">A Note on Conviction vs. Diversification</AlertTitle>
                <AlertDescription>
                    <p>It is important to note that many successful active investors view broad diversification as a protective measure for those who do not wish to perform deep individual business analysis. For an investor who has high conviction in a specific thesis or company, whether domestic or international, their focus is on the quality of that specific investment, not on adhering to a rigid geographic portfolio weighting. As Warren Buffett has said, "Diversification is protection against ignorance. It makes very little sense for those who know what they are doing."</p>
                </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you understand the importance of global investing, return to the main roadmap to continue building your portfolio knowledge.
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
