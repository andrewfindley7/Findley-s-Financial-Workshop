
'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Handshake, Brain, ArrowRight, Lightbulb, UsersRound, ThumbsUp, ThumbsDown, BookOpen, Presentation, Globe, Pill, User, Info } from 'lucide-react';
import Link from 'next/link';

const qualityPoints = [
  {
    title: 'Skin in the Game (High Insider Ownership)',
    description: "This is the clearest sign of alignment. When management owns a significant amount of the company's stock, their personal financial success is directly tied to the success of the shareholders. They think like owners because they *are* owners. They are more likely to be frugal, long-term oriented, and focused on creating shareholder value.",
    seek: "CEOs and key executives who own a substantial amount of stock (e.g., >1% of the company). Look for a history of open-market purchases by insiders, not just stock option grants.",
    avoid: "Management teams with tiny ownership stakes who get rich from their salaries and bonuses regardless of how the stock performs."
  },
  {
    title: 'Rational Capital Allocation',
    description: "A CEO's most important job is deciding what to do with the company's profits. They have five choices: 1) Reinvest in the existing business, 2) Acquire other businesses, 3) Pay down debt, 4) Pay a dividend, or 5) Buy back stock. A great manager has a clear, consistent, and rational framework for making these decisions based on which option will generate the best long-term return for shareholders.",
    seek: "A track record of making smart, value-accretive decisions. For example, they should only reinvest in the business if they can earn a high rate of return on that capital. They should buy back shares only when they believe the stock is trading below its intrinsic value. They should make acquisitions that are strategic and done at reasonable prices.",
    avoid: "Empire builders who make frequent, large, and expensive acquisitions, especially in unrelated fields. Be wary of companies that consistently buy back shares at high prices, take on excessive debt for questionable projects, or pay a dividend they can't afford, which may have to be cut later."
  },
  {
    title: 'Transparency and Candor',
    description: "Trustworthy managers are open and honest in their communications. They speak plainly, admit their mistakes, and clearly explain both their successes and failures. They treat shareholders like partners in the business.",
    seek: "Read the CEO's annual letter to shareholders for several years. Is it a generic marketing document, or does it provide genuine insight into the business and the manager's thought process? Warren Buffett's letters are the gold standard for this.",
    avoid: "Management that uses excessive jargon, constantly blames external factors for poor results, or over-promises and under-delivers."
  }
];

const governanceConcepts = [
  {
    icon: UsersRound,
    title: "Board of Directors: The Shareholder's Representatives",
    description: "The board of directors is elected by shareholders to oversee management and act in the shareholders' best interests. A key aspect of good governance is the board's independence.",
    goodSign: "A majority of independent directors (not affiliated with the company or CEO), a separate Chairman and CEO, and diverse expertise relevant to the business.",
    badSign: "A board stacked with the CEO's friends, family, or colleagues. The CEO also serving as Chairman can consolidate too much power. A lack of relevant industry experience."
  },
  {
    icon: User,
    title: "Founder Control & Dual-Class Shares",
    description: "Many modern tech companies (like Meta, Google, and Snap) go public with a dual-class share structure. This gives founders and insiders special shares with superior voting rights (e.g., 10 votes per share) compared to the common shares sold to the public (1 vote per share).",
    goodSign: "In the early days, this can protect a visionary founder from short-term market pressures, allowing them to focus on a long-term vision.",
    badSign: "It creates a corporate dictatorship where public shareholders have no real say. The founder cannot be removed, even if they perform poorly or act against shareholder interests. This lack of accountability is a significant risk."
  },
  {
    icon: Pill,
    title: "Poison Pills & Anti-Takeover Defenses",
    description: "A 'poison pill' is a defensive tactic used by a company's board to prevent or discourage a hostile takeover. If an unwanted acquirer buys a certain percentage of the company's stock, the 'pill' triggers, allowing all other shareholders to buy additional shares at a deep discount, massively diluting the acquirer's stake and making the takeover prohibitively expensive.",
    goodSign: "Management might argue it protects shareholders from a low-ball offer and gives the board time to find a better deal.",
    badSign: "It's often seen as a tool for an entrenched, underperforming management team to protect their jobs. It can prevent shareholders from receiving a fair premium for their shares in a potential acquisition."
  }
];


const investorRelationsTools = [
  {
    title: "The Investor Relations (IR) Website",
    icon: Globe,
    description: "This is the central hub for all official company information directed at investors. It's usually found in the footer of a company's main website. Here you will find SEC filings, press releases, event calendars, and investor presentations."
  },
  {
    title: "Annual Reports (10-K) and CEO Letters",
    icon: BookOpen,
    description: "The 10-K is a comprehensive, legally-required report on the company's business, risks, and financials. The CEO's letter to shareholders, found at the beginning of the annual report, is the most important piece of communication. It's where a good manager explains their strategy, admits mistakes, and lays out their vision. Reading several years of these letters is one of the best ways to judge management's character and strategic thinking."
  },
  {
    title: "Investor Day Presentations & Earnings Calls",
    icon: Presentation,
    description: "These are events where management presents their strategy to investors and analysts. Investor Day presentations provide a deep dive into the company's long-term vision. The Q&A portion of quarterly earnings calls is particularly valuable, as it shows how management responds to tough, unscripted questions from skeptical analysts. You can often find transcripts or recordings on the IR website."
  }
];

const exampleArchetypes = [
    {
        title: "The Good (Well-Known): Warren Buffett (Berkshire Hathaway)",
        icon: ThumbsUp,
        color: "green",
        description: "Buffett is the quintessential example of a master capital allocator. His annual letters are legendary for their clarity and honesty. He thinks in decades, not quarters, and has a massive personal investment in Berkshire Hathaway, perfectly aligning his interests with his shareholders."
    },
    {
        title: "The Bad (Well-Known): The Empire-Builder CEO",
        icon: ThumbsDown,
        color: "red",
        description: "This archetype is obsessed with growth for its own sake, often at the expense of shareholders. They use the company's cash and stock to make a string of ever-larger, headline-grabbing acquisitions. These deals are often overpriced, poorly integrated, and destroy shareholder value, but they satisfy the CEO's ego. The AOL-Time Warner merger is a classic historical example of this kind of value-destructive empire-building."
    },
     {
        title: "The Good (Obscure): Mark Leonard (Constellation Software)",
        icon: ThumbsUp,
        color: "green",
        description: "For years, Mark Leonard was one of the best and least-known CEOs. He built Constellation Software by making hundreds of small, disciplined acquisitions of niche software businesses. His annual letters are masterpieces of rational, long-term thinking, and he has always maintained a focus on generating high returns on invested capital, creating enormous wealth for shareholders."
    },
    {
        title: "The Bad (Obscure): The 'Adjusted EBITDA' Enthusiast",
        icon: ThumbsDown,
        color: "red",
        description: "This CEO runs a business that appears profitable on a 'pro forma' or 'adjusted' basis but consistently burns cash. They use stock-based compensation heavily (a real expense) and then add it back to their 'adjusted' earnings. They are skilled at financial engineering and telling a good story, but a look at the cash flow statement reveals a business that cannot sustain itself without constantly raising more money, diluting shareholders in the process."
    }
];

export default function JudgingManagementQualityPage() {
  const searchParams = useSearchParams();
  const fromStep = searchParams.get('from');

  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold font-headline">Judging Management Quality</h1>
        <p className="text-muted-foreground mt-2">Learn to evaluate the most critical factor in a long-term investment: the people running the business and the systems that hold them accountable.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Handshake className="h-4 w-4" />
          <AlertTitle className="font-headline">You're Hiring a Manager for Your Money</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            When you buy a stock, you become a part-owner of a business. The management team and its board of directors are the people you are hiring to be the stewards of your capital. Even the best business can be a poor investment if run by a dishonest or incompetent team. Great investors spend as much time evaluating the people and governance structure as they do the business itself.
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Key Indicators of a Quality Management Team</CardTitle>
            <CardDescription>These are the core principles to look for when assessing a company's leadership.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {qualityPoints.map(point => (
              <div key={point.title} className="p-4 border rounded-lg bg-card shadow-sm">
                <h3 className="font-semibold text-lg flex items-center mb-2">
                  <Lightbulb className="mr-3 h-5 w-5 text-primary" />
                  {point.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{point.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div className="p-3 bg-green-500/10 rounded-md">
                    <h4 className="font-semibold flex items-center text-green-700 dark:text-green-300">What to Seek</h4>
                    <p className="text-green-600 dark:text-green-400">{point.seek}</p>
                  </div>
                  <div className="p-3 bg-red-500/10 rounded-md">
                    <h4 className="font-semibold flex items-center text-red-700 dark:text-red-300">What to Avoid</h4>
                    <p className="text-red-600 dark:text-red-400">{point.avoid}</p>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Understanding Corporate Governance</CardTitle>
            <CardDescription>These are critical areas to examine when assessing a company's governance and accountability structure.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {governanceConcepts.map(item => (
              <div key={item.title} className="p-4 border rounded-lg bg-card shadow-sm">
                <h3 className="font-semibold text-lg flex items-center mb-2">
                  <item.icon className="mr-3 h-5 w-5 text-primary" />
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div className="p-3 bg-green-500/10 rounded-md">
                    <h4 className="font-semibold flex items-center text-green-700 dark:text-green-300"><ThumbsUp className="mr-2 h-4 w-4" /> Good Sign / The Argument For</h4>
                    <p className="text-green-600 dark:text-green-400 mt-1">{item.goodSign}</p>
                  </div>
                  <div className="p-3 bg-red-500/10 rounded-md">
                    <h4 className="font-semibold flex items-center text-red-700 dark:text-red-300"><ThumbsDown className="mr-2 h-4 w-4" /> Bad Sign / The Argument Against</h4>
                    <p className="text-red-600 dark:text-red-400 mt-1">{item.badSign}</p>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Where to Find This Information: Your Research Toolkit</CardTitle>
            <CardDescription>Evaluating management isn't just a gut feeling; it's a research process. Use these primary sources to gather the data you need.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {investorRelationsTools.map(tool => (
              <div key={tool.title} className="p-4 border rounded-lg bg-muted/40">
                <h3 className="font-semibold text-lg flex items-center mb-2">
                  <tool.icon className="mr-3 h-5 w-5 text-primary" />
                  {tool.title}
                </h3>
                <p className="text-sm text-muted-foreground">{tool.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle className="font-headline flex items-center"><UsersRound className="mr-3 h-6 w-6 text-primary" />Real-World Archetypes: Good vs. Bad Management</CardTitle>
                <CardDescription>These examples illustrate the difference between shareholder-friendly leaders and value-destroying managers.</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {exampleArchetypes.map(item => (
                    <div key={item.title} className={`p-4 border rounded-lg bg-card shadow-sm border-l-4 ${item.color === 'green' ? 'border-l-green-500' : 'border-l-red-500'}`}>
                        <h4 className={`font-semibold flex items-center mb-2 ${item.color === 'green' ? 'text-green-700 dark:text-green-300' : 'text-red-700 dark:text-red-300'}`}>
                            <item.icon className="mr-2 h-5 w-5"/>
                            {item.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                ))}
            </CardContent>
        </Card>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you understand how to assess management, you can proceed to analyze a business's financial statements.
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
