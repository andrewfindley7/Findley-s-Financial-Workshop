
'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardTitle, CardHeader, CardDescription, CardFooter } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ZapOff, ShieldOff, TrendingDown, CircleDollarSign, Users, Castle, Wind, Banknote, Scale, Activity, Brain, UsersRound, ThumbsDown, Recycle, Bot, Puzzle, Frown, Users2, Layers, AlertTriangle, ArrowRight, Info, CheckCircle } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import type { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';


const indicators = [
  // --- Valuation & Narrative Risks ---
  {
    id: 'valuation-bad',
    title: 'Extreme Valuation',
    icon: Scale,
    category: "Valuation & Narrative Risks",
    whatItIs: "An extreme valuation occurs when a company's stock price is vastly higher than its underlying fundamentals (like earnings, cash flow, or sales) would suggest. The price is often fueled by hype and speculation rather than business performance.",
    whyItMatters: "Paying too much for a stock, even for a great company, is a common way to lose money. An extreme valuation leaves no room for error. If growth slows even slightly, the stock price can plummet as it has no fundamental support.",
    whatToLookFor: "Exceptionally high P/E, P/S, or P/FCF ratios compared to the company's own history and its peers. Be wary of stocks that are popular in the news and have seen a parabolic price increase without a corresponding increase in business performance.",
    investorTake: {
      investor: "Peter Lynch",
      quote: "If I could avoid a single stock, it would be the hottest stock in the hottest industry, the one that gets the most favorable publicity, the one that every investor scrambles to buy."
    }
  },
  {
    id: 'story-over-substance',
    title: 'A Compelling Story with No Numbers',
    icon: Bot,
    category: "Valuation & Narrative Risks",
    whatItIs: "This refers to an investment thesis based almost entirely on a grand, futuristic vision (e.g., 'disrupting a trillion-dollar market') with little to no current revenue, cash flow, or a clear path to profitability to back it up.",
    whyItMatters: "A good story is easy to sell, but it's not a business model. Without a solid financial foundation and a realistic plan to achieve profitability, a great story is just a work of fiction. Investing requires numbers, not just narratives.",
    whatToLookFor: "Company presentations that focus heavily on Total Addressable Market (TAM) and buzzwords, but are light on details about current unit economics, gross margins, or cash burn. If you can't find the numbers, the story is likely all there is.",
    investorTake: {
      investor: "Peter Lynch",
      quote: "Often, there is no correlation between the success of a company's operations and the success of its stock over a few months or even a few years. In the long term, there is a 100% correlation between the success of the company and the success of its stock."
    }
  },
  // --- Operational & Competitive Risks ---
  {
    id: 'moat-bad',
    title: 'No Durable Competitive Advantage (Moat)',
    icon: Castle,
    category: "Operational & Competitive Risks",
    whatItIs: "A business with no moat operates in a highly competitive industry with low barriers to entry. Competitors can easily enter the market, offer similar products, and compete on price, driving down profits for everyone.",
    whyItMatters: "Without a moat, a company's profitability is always at risk. Any success it has will quickly attract competition, eroding its market share and margins. It's like an economic castle with no walls, vulnerable to constant attack.",
    whatToLookFor: "Industries where products are undifferentiated commodities (e.g., basic materials, some airlines). Look for companies with low and inconsistent profit margins and low returns on capital. Ask: 'What stops someone else from doing this exact same thing?'",
    investorTake: {
      investor: "Warren Buffett",
      quote: "The key to investing is not assessing how much an industry is going to affect society, or how much it will grow, but rather determining the competitive advantage of any given company and, above all, the durability of that advantage."
    }
  },
  {
    id: 'revenue-decline',
    title: 'Declining Revenue Growth',
    icon: TrendingDown,
    category: "Operational & Competitive Risks",
    whatItIs: "A consistent slowdown or outright decline in a company's top-line sales over several quarters or years. This indicates that the company is selling less of its products or services.",
    whyItMatters: "Declining revenue is a major red flag. It suggests the company's products are losing relevance, competitors are winning, or its market is shrinking. A company that isn't growing its sales cannot grow its profits long-term without drastic (and often unsustainable) cost-cutting.",
    whatToLookFor: "Look at the year-over-year revenue growth rate in the company's income statements. Is the growth rate slowing down, turning flat, or becoming negative? Compare this to competitors in the same industry.",
    investorTake: {
      investor: "Peter Lynch",
      quote: "I'd be suspicious of a company with a lot of hype and a lot of record earnings, but with no growth in revenues."
    }
  },
  {
    id: 'margins-bad',
    title: 'Consistently Low or Worsening Profit Margins',
    icon: CircleDollarSign,
    category: "Operational & Competitive Risks",
    whatItIs: "A company that consistently fails to convert a reasonable portion of its sales into profit, or whose profit margins are consistently shrinking over time. This indicates a lack of pricing power or poor cost control.",
    whyItMatters: "Low or declining margins are a sign of a weak business. It suggests intense competition is forcing the company to cut prices, or that its costs are rising faster than its sales. Either way, it's a direct threat to profitability and long-term viability.",
    whatToLookFor: "Compare the company's Gross, Operating, and Net margins to its competitors. If they are consistently lower, it's a red flag. Look at the trend over 5-10 years. Are margins stable, improving, or getting worse?",
    investorTake: {
      investor: "Charlie Munger",
      quote: "A great business at a fair price is superior to a fair business at a great price."
    }
  },
  {
    id: 'fcf-bad',
    title: 'Weak or Negative Free Cash Flow (FCF)',
    icon: Wind,
    category: "Operational & Competitive Risks",
    whatItIs: "This is a business that consumes more cash than it generates from its core operations after accounting for capital expenditures. It constantly needs external funding (debt or equity) to survive and grow.",
    whyItMatters: "A business that doesn't generate cash is like a person who spends more than they earn. It's unsustainable. These companies are at the mercy of capital markets and are unable to pay their bills or interest payments without external help. Earnings can be misleading, but cash is reality.",
    whatToLookFor: "Look at the Statement of Cash Flows. Is Cash Flow from Operations consistently positive? How large is Capital Expenditures relative to it? If FCF (CFO minus CapEx) is consistently negative, it's a major warning sign.",
    investorTake: {
      investor: "Warren Buffett",
      quote: "The first rule of investing is don't lose money. The second rule is don't forget the first rule. A business that burns cash is a great way to lose money."
    }
  },
  // --- Financial Risks ---
  {
    id: 'balance-sheet-bad',
    title: 'A Weak Balance Sheet (Excessive Leverage)',
    icon: ShieldOff,
    category: "Financial Risks",
    whatItIs: "A company with a high level of debt relative to its equity and earnings power. Its liabilities are substantial compared to its assets, creating financial fragility.",
    whyItMatters: "High debt makes a company fragile. A small business downturn can become a crisis if the company can't make its interest payments. Debt holders get paid before equity holders in a bankruptcy, so high debt puts shareholders at greater risk. It also restricts management's flexibility to invest for the future.",
    whatToLookFor: "A high Debt-to-Equity ratio or Debt-to-EBITDA ratio compared to industry peers. Check if the company could pay off its total debt with a few years of its net income. If not, the debt load may be too high. Watch for a company that uses debt to buy back its own stock, which can be a sign of financial engineering.",
    investorTake: {
      investor: "Mohnish Pabrai",
      quote: "You can’t get to the promised land, if you die on the way there. Avoid leverage."
    }
  },
  {
    id: 'share-dilution-bad',
    title: 'Excessive Share Dilution',
    icon: Recycle,
    category: "Financial Risks",
    whatItIs: "This happens when a company repeatedly issues new shares, often for executive stock-based compensation or to fund acquisitions. Each new share issued 'dilutes' or reduces the ownership stake of existing shareholders.",
    whyItMatters: "As a shareholder, you own a slice of the company pie. If the company keeps cutting more and more slices, your slice gets smaller and smaller. A company issuing 5% new shares annually means your ownership shrinks by that amount. It is a hidden tax on shareholders.",
    whatToLookFor: "Check the 'diluted weighted average shares outstanding' on the income statement over the past 5-10 years. If this number is consistently increasing by more than 1-2% per year, management is likely not shareholder-friendly. This is especially bad if it's not accompanied by a massive increase in per-share profits.",
    investorTake: {
      investor: "Charlie Munger",
      quote: "If you're going to buy a stock, you're buying a piece of a business. If the management is just giving away the business through stock options, you're not going to make a lot of money."
    }
  },
  {
    id: 'earnings-manipulation',
    title: 'Aggressive or Manipulative Accounting',
    icon: Activity,
    category: "Financial Risks",
    whatItIs: "The use of accounting rules to make financial performance appear better than it really is. This does not mean it's illegal, but it indicates management is trying to obscure the true health of the business.",
    whyItMatters: "It's a sign of a low-quality management team that is more focused on managing the stock price than managing the business. Where there's smoke, there's often fire.",
    whatToLookFor: "Look for ballooning accounts receivable (customers aren't paying), a heavy reliance on one-time gains to meet earnings, or a pattern of capitalizing expenses (recording them as an asset) instead of expensing them immediately. Consistently low cash flow relative to net income is the ultimate red flag.",
    investorTake: {
      investor: "Warren Buffett",
      quote: "It’s been my experience that in the end, there is nothing that is concealed that will not be revealed, and he who sows the wind will reap the whirlwind."
    }
  },
  // --- Management & Governance ---
  {
    id: 'management-misaligned',
    title: 'Misaligned Management (High Pay, Low Ownership)',
    icon: ThumbsDown,
    category: "Management & Governance",
    whatItIs: "A leadership team that is awarded excessively high compensation that isn't tied to long-term performance, while personally owning very little of the company's stock. Their interests are not aligned with those of the shareholders.",
    whyItMatters: "If management gets rich from their salary and bonuses regardless of how the stock performs, they have little incentive to think like owners. This can lead to poor capital allocation, empire-building, and a focus on short-term metrics that look good but destroy long-term value. You want to partner with people who have skin in the game.",
    whatToLookFor: "Read the company's proxy statement. Compare the CEO's total compensation to the company's net income. Is it excessive? Check the insider ownership tables. Do the top executives and board members own a meaningful amount of stock?",
    investorTake: {
      investor: "Warren Buffett",
      quote: "We look for three things: intelligence, energy, and integrity. If you don't have the last one, don't even bother with the first two."
    }
  },
  {
    id: 'diworsification',
    title: '"Diworsification"',
    icon: Puzzle,
    category: "Management & Governance",
    whatItIs: "A term coined by Peter Lynch to describe when a company diversifies into businesses it doesn't understand, often through costly acquisitions. This typically destroys shareholder value instead of creating it.",
    whyItMatters: "Growth for the sake of growth is often a trap. When a great company strays too far from its core competence, it often overpays for mediocre businesses it can't run effectively, diverting resources and management attention from its crown jewels.",
    whatToLookFor: "A history of multiple, unrelated acquisitions. Look for write-downs or impairment charges related to past acquisitions on the financial statements. Be skeptical when management talks about 'synergies' from combining vastly different businesses.",
    investorTake: {
      investor: "Peter Lynch",
      quote: "In business, diversification is often a sign of desperation. When a company runs out of ideas for its own business, it starts buying other businesses."
    }
  },
  {
    id: 'accounting-games',
    title: 'Serial Acquirer & Accounting Games',
    icon: Users2,
    category: "Management & Governance",
    whatItIs: "A company whose primary growth strategy is to grow primarily through acquisitions. While some acquirers are skilled, many destroy value by overpaying or failing to integrate the new businesses effectively, often using complex, non-GAAP accounting to obscure the true performance.",
    whyItMatters: "This can be a treadmill of value destruction. The company must keep acquiring just to show top-line growth, often masking underlying problems in its core business. Be wary of metrics like 'Adjusted EBITDA,' which can be used to hide real costs. It can become a house of cards that collapses if the acquisitions stop or a large one fails.",
    whatToLookFor: "A long history of acquisitions. Heavy use of 'Adjusted EBITDA' and other non-GAAP metrics in their financial reports. Consistently negative free cash flow despite reporting 'profits'. Complex financial statements that are hard to understand.",
    investorTake: {
      investor: "Warren Buffett",
      quote: "Too often, the stated purpose of a deal is 'synergy.' This is a term that has failed the test of time. A CEO who is uncertain about the price to be paid for a potential acquisition will frequently mutter the word 'synergy.'"
    }
  },
  // --- Qualitative Red Flags ---
  {
    id: 'customer-employee-bad',
    title: 'Deteriorating Customer & Employee Satisfaction',
    icon: Frown,
    category: "Qualitative Red Flags",
    whatItIs: "A noticeable decline in how customers perceive the company's products or services, coupled with high employee turnover, low morale, or high-profile executive departures. These are qualitative signs of a business in distress.",
    whyItMatters: "Happy customers create repeat business and brand loyalty. Unhappy customers leave, and a company that can't retain its talent can't innovate or operate effectively. These issues often precede financial decline.",
    whatToLookFor: "Consistently poor reviews on sites like Yelp or Trustpilot. Check employee review sites like Glassdoor for trends in low morale or high turnover rates. Pay attention to news of key executives leaving the company.",
    investorTake: {
      investor: "Warren Buffett",
      quote: "It takes 20 years to build a reputation and five minutes to ruin it. If you think about that, you'll do things differently."
    }
  },
  {
    id: 'complexity',
    title: 'Business is Too Complex to Understand',
    icon: Brain,
    category: "Qualitative Red Flags",
    whatItIs: "This refers to a business model that is so convoluted or dependent on opaque factors (e.g., complex financial derivatives, black-box algorithms) that it's nearly impossible for an outsider to figure out how it makes money or what its real risks are.",
    whyItMatters: "If you can't understand the business, you can't value it or identify the key risks. Investing in something you don't understand is not investing, it's speculating. Complexity often hides problems.",
    whatToLookFor: "Financial statements with an excessive number of footnotes. Business descriptions that are filled with jargon but don't clearly state the value proposition. If after reading the annual report you're more confused than when you started, it's best to stay away.",
    investorTake: {
      investor: "Warren Buffett",
      quote: "We don't invest in things we don't understand. We're not smart enough to figure out the businesses that are really tough. So we have a very simple rule: if it's too hard, we go on to the next one."
    }
  },
];

const categories = [
    "Valuation & Narrative Risks",
    "Operational & Competitive Risks",
    "Financial Risks",
    "Management & Governance",
    "Qualitative Red Flags",
];

export default function RedFlagsForInvestingPage() {
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
        <h1 className="text-3xl font-bold font-headline">Red Flags for Investing</h1>
        <p className="text-muted-foreground mt-2">Learn about the common red flags and pitfalls that great investors strive to avoid.</p>
      </div>
      <div className="space-y-6">
        <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle className="font-headline">Why Red Flags Matter</AlertTitle>
            <AlertDescription>
                <p className="prose prose-sm max-w-none dark:prose-invert">Great investing is not just about finding winners; it's about systematically avoiding losers. Protecting your capital from permanent loss allows it to compound more effectively than recovering from major setbacks. Charlie Munger called this 'inversion': instead of asking 'what makes a great investment?', first ask, 'what makes a terrible investment?'. By learning to identify and avoid these common red flags, you build a powerful filter for investment success.</p>
            </AlertDescription>
        </Alert>
        <Accordion type="multiple" defaultValue={categories} className="w-full space-y-4">
          {categories.map(category => (
            <div key={category}>
                <h2 className="text-xl font-bold font-headline mb-3">{category}</h2>
                {indicators.filter(i => i.category === category).map(indicator => (
                  <AccordionItem value={indicator.id} key={indicator.id} className="border-b-0 mb-2">
                     <Card className="shadow-md">
                        <AccordionTrigger className="text-left p-6 hover:no-underline">
                          <h3 className="font-headline text-lg flex items-center">
                              <indicator.icon className="mr-3 h-6 w-6 text-destructive" />
                              {indicator.title}
                          </h3>
                        </AccordionTrigger>
                        <AccordionContent>
                           <CardContent className="space-y-4 pt-0">
                              <div>
                                <h4 className="font-semibold mb-1">What It Is</h4>
                                <p className="text-muted-foreground text-sm">{indicator.whatItIs}</p>
                              </div>
                              <Separator />
                              <div>
                                <h4 className="font-semibold mb-1">Why It Matters</h4>
                                <p className="text-muted-foreground text-sm">{indicator.whyItMatters}</p>
                              </div>
                              <Separator />
                              <div>
                                <h4 className="font-semibold mb-1">What to Look For</h4>
                                <p className="text-muted-foreground text-sm">{indicator.whatToLookFor}</p>
                              </div>
                              <Separator />
                              <div className="p-4 bg-muted/50 rounded-lg">
                                <h4 className="font-semibold mb-2 text-base">A Great Investor's Take</h4>
                                <blockquote className="border-l-4 border-destructive pl-4 italic text-sm">
                                  <p>"{indicator.investorTake.quote}"</p>
                                  <footer className="mt-2 text-xs not-italic text-right">- {indicator.investorTake.investor}</footer>
                                </blockquote>
                              </div>
                            </CardContent>
                        </AccordionContent>
                     </Card>
                  </AccordionItem>
                ))}
            </div>
          ))}
        </Accordion>
        <Alert>
            <CheckCircle className="h-4 w-4" />
            <AlertTitle className="font-headline">The Investor’s Safety Margin</AlertTitle>
            <AlertDescription>
                <p className="prose prose-sm max-w-none dark:prose-invert">No single red flag is necessarily fatal on its own. A great company might have a period of declining margins, or a visionary founder might use an aggressive accounting practice. The danger lies in a pattern. When you see multiple red flags across different categories, for example, poor margins, high debt, and a misaligned management team, the risk compounds. The best investments are not just those with the most green flags, but those with the fewest red ones.</p>
            </AlertDescription>
        </Alert>
        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you've learned what to avoid, return to the main roadmap to continue your learning.
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
