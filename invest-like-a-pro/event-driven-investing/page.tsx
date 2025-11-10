'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Shuffle, ArrowRight, TrendingUp, AlertTriangle, Info, ThumbsUp, ThumbsDown, GitMerge, Combine, Rocket, Building2, Brain, Search, Eye, History, Clock } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const eventStrategies = [
  {
    icon: GitMerge,
    title: "Merger Arbitrage",
    description: "Also known as 'risk arbitrage,' this strategy involves profiting from the small price discrepancy that exists after a merger or acquisition is announced.",
    caseStudy: {
        title: "Case Study: Microsoft's Acquisition of Activision Blizzard",
        text: "When Microsoft announced it would acquire Activision Blizzard for $95/share, the stock traded around $75. This 'spread' reflected the market's uncertainty about whether regulators would approve the deal. Activist investor Bill Ackman reportedly made a significant profit by buying shares at a discount and holding them until the deal closed at the higher price, betting correctly that it would be approved."
    },
    thesis: "The return is not based on the market's direction, but on the probability of the deal successfully closing. You buy the target company's stock at a discount to the deal price and capture the spread if and when the deal completes.",
    risks: "The primary risk is 'deal break risk'; the deal could fall through due to regulatory rejection or financing issues, causing the target company's stock to fall sharply."
  },
  {
    icon: Combine,
    title: "Spin-Offs",
    description: "A spin-off occurs when a large parent company separates one of its divisions into a new, independent, publicly-traded company. Shareholders of the parent company typically receive shares of the new company.",
    caseStudy: {
        title: "Case Study: The eBay and PayPal Split",
        text: "When PayPal was spun off from eBay in 2015, many institutional funds that owned eBay were forced to sell their new PayPal shares immediately because PayPal, as a financial company, didn't fit their investment mandate (e.g., 'e-commerce only'). This indiscriminate selling created a temporary undervaluation and a significant buying opportunity for investors like Joel Greenblatt who understood the quality of the independent PayPal business."
    },
    thesis: "Spin-offs are a classic special situation because the newly independent company is often healthy but neglected or misunderstood. This forced selling by large institutions can create a temporary bargain. Furthermore, the new, focused management team is now highly incentivized to improve operations, often leading to significant long-term returns.",
    risks: "The newly independent company may not be strong enough to stand on its own, or the market may continue to ignore it for a long time, leading to poor returns."
  },
  {
    icon: Rocket,
    title: "Initial Public Offerings (IPOs)",
    description: "An IPO is the process where a private company first sells its shares to the public, becoming a publicly-traded company.",
    caseStudy: {
        title: "Case Study: The Retail Investor vs. The Insider",
        text: "Warren Buffett has famously said, 'An IPO is like a negotiated transaction. The seller has picked the time to sell, and you can be sure that it is a time that is favorable to them.' In an IPO, the insiders (founders, venture capitalists) who know the business best are selling. The public, which knows the least, is buying. This information asymmetry is a huge disadvantage. The historically poor average performance of IPOs in the years following their debut is evidence of this. This is even more pronounced with Special Purpose Acquisition Companies (SPACs), which have an even worse track record for retail investors."
    },
    thesis: "The public thesis is to invest early in a high-growth company. However, the reality is that IPOs are marketing events where sellers with all the information are trying to get the highest possible price from buyers with the least information.",
    risks: "IPOs are notoriously risky for individuals. Valuations are often set at exuberant levels to maximize proceeds for the company and its early investors. This frequently leads to a 'pop and drop' scenario where the stock price falls significantly after the initial hype fades."
  },
  {
    icon: Building2,
    title: "Take-Private Transactions (LBOs)",
    description: "This is when a private equity firm buys all the shares of a public company, often using significant debt (a Leveraged Buyout or LBO), to take the company private.",
    caseStudy: {
        title: "Case Study: The Hilton Hotels Buyout",
        text: "In 2007, at the peak of the market, private equity firm Blackstone acquired Hilton Hotels for $26 billion in a massive LBO. When the 2008 financial crisis hit, the debt-laden company struggled. However, Blackstone held on, restructured the business, and navigated the downturn. When they took Hilton public again in 2013, it was one of the most profitable private equity deals in history, reportedly netting Blackstone a profit of around $14 billion. This highlights both the risks of leverage and the immense returns possible for patient, long-term operators."
    },
    thesis: "Similar to merger arbitrage, the investment thesis is to buy the stock after the deal is announced and capture the spread between the current price and the acquisition price.",
    risks: "The deal could fall apart if the PE firm is unable to secure the necessary financing, which is a significant risk, especially during periods of tight credit or rising interest rates."
  }
];

export default function EventDrivenInvestingPage() {
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
        <h1 className="text-3xl font-bold font-headline">Event-Driven Investing</h1>
        <p className="text-muted-foreground mt-2">Learn about 'special situation' strategies like merger arbitrage, spin-offs, and IPOs.</p>
      </div>
      <div className="space-y-6">
        <Alert variant="destructive">
          <Shuffle className="h-4 w-4" />
          <AlertTitle className="font-headline">A Professional's Game</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>Event-driven or 'special situation' investing is an advanced strategy that focuses on profiting from specific corporate events like mergers, acquisitions, spin-offs, or bankruptcies rather than on general market movements. These strategies are often complex and require significant legal and financial expertise.</p>
            <p className="font-semibold">This is an area where professional investors and hedge funds have a significant edge. This roadmap is for educational purposes to help you understand these market events when you see them in the news.</p>
          </AlertDescription>
        </Alert>
        
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">Why These Opportunities Exist</CardTitle>
            <CardDescription>Event-driven investing works because corporate events create temporary inefficiencies.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
                When a company merges, spins off, or restructures, information flow becomes uneven. Some investors sell due to index changes, mandates, or confusion. Others overreact to uncertainty. The event-driven investor profits from these short-term distortions by focusing on probabilities and fundamentals instead of emotion.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">Common Event-Driven Strategies</CardTitle>
            <CardDescription>These are some of the most well-known special situation strategies.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {eventStrategies.map(item => (
              <div key={item.title} className="p-4 border rounded-lg bg-card shadow-sm">
                <h3 className="font-semibold text-lg flex items-center mb-2">
                  <item.icon className="mr-3 h-5 w-5 text-primary" />
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                 {item.caseStudy && (
                    <Alert variant="default" className="text-xs mb-3 bg-background/50">
                        <History className="h-4 w-4"/>
                        <AlertTitle className="font-semibold">{item.caseStudy.title}</AlertTitle>
                        <AlertDescription>{item.caseStudy.text}</AlertDescription>
                    </Alert>
                 )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div className="p-3 bg-green-500/10 rounded-md">
                    <h4 className="font-semibold flex items-center text-foreground"><ThumbsUp className="mr-2 h-4 w-4 text-green-700 dark:text-green-300" /> The Thesis</h4>
                    <p className="text-foreground mt-1">{item.thesis}</p>
                  </div>
                  <div className="p-3 bg-red-500/10 rounded-md">
                    <h4 className="font-semibold flex items-center text-foreground"><ThumbsDown className="mr-2 h-4 w-4 text-red-700 dark:text-red-300" /> The Risk</h4>
                    <p className="text-foreground mt-1">{item.risks}</p>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">How Professionals Spot These Opportunities</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                <li>Follow Corporate Announcements: SEC Form 8-K filings, investor relations news, and earnings calls often hint at restructurings or acquisitions.</li>
                <li>Watch for Forced Selling: When spin-offs or restructurings cause index funds or institutions to sell for mandate reasons, short-term mispricings often emerge.</li>
                <li>Focus on Time Horizons: Event-driven trades are time-bound. Knowing when an event is expected to conclude (deal close, spin-off distribution date, lock-up expiration) is crucial.</li>
            </ul>
          </CardContent>
        </Card>
        
        <Alert>
            <Brain className="h-4 w-4"/>
            <AlertTitle className="font-headline">The Behavioral Edge</AlertTitle>
            <AlertDescription>
                Most investors avoid uncertainty. Event-driven situations often involve complex filings or temporary confusion, which scares away short-term traders. The opportunity lies in doing the patient, analytical work others will not.
            </AlertDescription>
        </Alert>

        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle className="font-headline">A Note of Caution</AlertTitle>
          <AlertDescription>
            Most event-driven opportunities are zero-sum games where one investor’s gain is another’s loss. When professionals with teams of lawyers and analysts are on the other side of the trade, the odds are rarely in favor of the small investor. It's often wiser to focus on learning from these situations rather than competing in them.
          </AlertDescription>
        </Alert>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you have been introduced to these advanced concepts, return to the main roadmap to continue building your financial knowledge.
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
