'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Briefcase, TrendingUp, Info, Scale, PieChart, Castle, UsersRound, ThumbsUp, ThumbsDown } from 'lucide-react';
import Link from 'next/link';

const investingPrinciples = [
  {
    icon: PieChart,
    title: "1. Extreme Concentration",
    description: "Hohn operates one of the most concentrated portfolios in the world, often holding fewer than 10 stocks. His philosophy is that if you have done the work and have high conviction, it is riskier to diversify into your 20th best idea than to put more capital into your best idea."
  },
  {
    icon: Castle,
    title: "2. Focus on High-Quality 'Monopolies'",
    description: "TCI exclusively targets businesses with formidable and durable competitive advantages ('moats'). These are often companies that operate in oligopolies or have near-monopolistic power, providing them with strong pricing power and predictable, long-term cash flows."
  },
  {
    icon: Scale,
    title: "3. Long-Term Time Horizon",
    description: "Hohn is not a trader. When TCI invests in a company, they intend to hold it for a very long time, often a decade or more. This long-term perspective allows the quality of the underlying business to compound shareholder wealth, and it aligns TCI's interests with the long-term health of the company."
  },
  {
    icon: Briefcase,
    title: "4. Aggressive ESG-Focused Activism",
    description: "Hohn is a pioneer in using shareholder activism to drive Environmental, Social, and Governance (ESG) changes. He believes that companies that do not take their climate impact seriously, for example, are exposing shareholders to significant long-term risk. His campaigns are known for their intensity and directness, often targeting boards of directors he deems to be failing on their corporate responsibilities.",
  },
];

export default function InvestorHohnPage() {
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
        <h1 className="text-3xl font-bold font-headline">Learn From The Best: Chris Hohn</h1>
        <p className="text-muted-foreground mt-2">Learn from the founder of The Children's Investment Fund (TCI), known for his concentrated, long-term, and aggressive activist approach.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Brain className="h-4 w-4" />
          <AlertTitle className="font-headline">The Activist Philanthropist</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>Sir Christopher Hohn is a British billionaire hedge fund manager who founded The Children's Investment Fund (TCI) in 2003. He is known for his intense, research-driven, and highly concentrated investment style, as well as his aggressive shareholder activism, which often carries a strong ethical component. His approach is marked by analytical rigor and emotional detachment in shareholder battles.</p>
            <p className="font-semibold">Uniquely, TCI was initially set up with a contractual obligation to donate a portion of its profits to The Children's Investment Fund Foundation (CIFF), run by his then-wife. While a 2014 court ruling severed the formal link, Hohn has continued to be one of the world's largest philanthropists, making TCI a unique case study in high-finance capitalism and large-scale charitable giving.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">The Hohn Philosophy: Core Principles</CardTitle>
            <CardDescription>Hohn's strategy is a potent combination of deep value analysis, long-term conviction, and forceful activism.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {investingPrinciples.map(p => (
              <div key={p.title} className="p-4 border rounded-lg bg-muted/30">
                <h3 className="font-semibold flex items-center mb-2">
                  <p.icon className="mr-3 h-5 w-5 text-primary" />
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground">{p.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">Notable Investments & Campaigns</CardTitle>
            <CardDescription>Hohn's public campaigns demonstrate his long-term, high-conviction approach.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border bg-card">
                  <h4 className="font-semibold text-green-600 flex items-center"><ThumbsUp className="mr-2 h-4 w-4" />The Big Win: Canadian National Railway (CNR)</h4>
                  <p className="text-sm text-muted-foreground mt-1">TCI has been a long-term shareholder in CNR, a wide-moat business due to the irreplaceable nature of rail networks. In 2021, when CNR attempted to acquire Kansas City Southern in a bidding war against a rival, Hohn launched a fierce activist campaign. He argued that CNR was overpaying and that the deal posed significant regulatory risk. He sought to replace board members and the CEO. While the merger ultimately didn't go CNR's way, Hohn's campaign was seen as a victory for shareholder discipline, preventing the company from making a potentially value-destructive acquisition.</p>
              </div>
              <div className="p-4 rounded-lg border bg-card">
                  <h4 className="font-semibold text-destructive flex items-center"><ThumbsDown className="mr-2 h-4 w-4" />The Lost Battle: London Stock Exchange (LSE)</h4>
                  <p className="text-sm text-muted-foreground mt-1">In 2019, Hohn launched an activist campaign to block the London Stock Exchange's $27 billion acquisition of data provider Refinitiv. He argued the price was too high and that LSE should instead focus on its core business. Despite a vocal campaign, he failed to gather enough shareholder support to block the deal, demonstrating that even the most powerful activist investors do not always win. It's a key lesson in the realities of shareholder democracy.</p>
              </div>
          </CardContent>
           <CardFooter>
             <Alert variant="default" className="w-full bg-callout text-callout-foreground border-blue-200 dark:border-blue-800">
                <Info className="h-4 w-4" />
                <AlertTitle className="font-semibold">Performance and Impact</AlertTitle>
                <AlertDescription>
                 <p>Since its inception in 2004, TCI has been one of the top-performing hedge funds in the world, generating a reported annualized net return of approximately 18%. His activism has also had a tangible impact; for example, his firm has successfully pressured companies like Moody's and Alphabet to improve their carbon disclosure and adopt more aggressive climate plans by threatening to vote against their boards of directors.</p>
                </AlertDescription>
            </Alert>
           </CardFooter>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>Key Takeaway</CardTitle>
            </CardHeader>
            <CardContent>
                 <p className="text-sm">Chris Hohn's career is a powerful case study demonstrating how a highly concentrated, long-term investment strategy, combined with aggressive shareholder activism, can produce exceptional returns. He uniquely uses his position as a major shareholder to force changes he believes will unlock long-term value, including those related to corporate governance and climate risk management.</p>
            </CardContent>
        </Card>
        
        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you've learned about Chris Hohn's powerful approach, continue exploring the wisdom of other great investors.
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