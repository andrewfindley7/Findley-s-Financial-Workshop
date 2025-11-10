'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Building2, TrendingUp, Scale, ShieldCheck, Info, ThumbsUp, ThumbsDown, ArrowRight, Lightbulb, Rocket, Wrench } from 'lucide-react';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

const peStrategies = [
  {
    title: "Leveraged Buyouts (LBOs)",
    icon: Building2,
    description: "This is the classic PE strategy. The firm uses a significant amount of borrowed money (leverage) to acquire a mature, cash-flow-positive company. The goal is to use the acquired company's own cash flow to pay down the debt over several years, while simultaneously improving operations. The PE firm then sells the now less-indebted and more efficient company for a substantial profit.",
    example: {
        title: "LBO in Action: KKR and RJR Nabisco",
        text: "The 1988 acquisition of RJR Nabisco by KKR is the most famous LBO in history. KKR acquired the food and tobacco giant for about $25 billion, using a fraction of its own capital and financing the rest with high-yield debt. While the deal became a symbol of 1980s excess and did not produce the spectacular returns hoped for due to market timing and high interest costs, it cemented the LBO as a powerful financial tool and ultimately netted KKR a profit, proving the model could work at an enormous scale."
    }
  },
  {
    title: "Venture Capital (VC)",
    icon: Rocket,
    description: "VC is a subset of private equity that focuses on providing capital to startups and small, emerging companies with high growth potential, but often no profits or revenue. VC firms make many small bets, expecting that the massive success of one or two companies (the 'home runs') will outweigh the losses from the many that fail.",
     example: {
        title: "VC in Action: Sequoia Capital and Google",
        text: "In 1999, venture capital firm Sequoia Capital invested about $12.5 million into a small search engine startup called Google. They saw the potential in the company's superior technology and visionary founders. When Google went public in 2004, that stake was worth approximately $4.3 billion, representing a return of over 300 times their initial investment. This is a classic example of a VC 'home run' that paid for many other failed investments."
    }
  },
  {
    title: "Growth Equity",
    icon: TrendingUp,
    description: "This strategy sits between VC and LBOs. It involves investing in relatively mature companies that are already profitable but need capital to expand into new markets, finance a major acquisition, or scale up production. Unlike an LBO, the PE firm usually takes a minority stake, providing capital without taking full control of the company.",
     example: {
        title: "Growth Equity in Action: General Atlantic and Airbnb",
        text: "In 2011, Airbnb was a fast-growing, established business but needed capital to fuel its global expansion. Growth equity firm General Atlantic invested, providing both capital and strategic expertise to help the company scale its international operations and professionalize its business. The investment helped Airbnb become the global hospitality giant it is today, and General Atlantic's stake was worth billions at the time of Airbnb's IPO, showcasing the success of providing growth capital to a proven winner."
    }
  }
];

const valueCreationLevers = [
    "Operational Turnaround: Replacing management, cutting costs, or streamlining supply chains.",
    "Strategic Expansion: Entering new markets or acquiring complementary companies.",
    "Financial Engineering: Using leverage to amplify returns and optimizing the capital structure.",
    "Incentive Alignment: Offering management equity stakes so their success aligns with the firm’s success.",
];

export default function PrivateEquityPage() {
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
        <h1 className="text-3xl font-bold font-headline">Private Equity</h1>
        <p className="text-muted-foreground mt-2">Learn about investing in companies that are not publicly traded on a stock exchange.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Building2 className="h-4 w-4" />
          <AlertTitle className="font-headline">What is Private Equity?</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>Private equity plays a powerful but largely unseen role in the global economy. While public markets get most of the attention, private equity firms quietly own and transform thousands of companies from retail brands and energy producers to healthcare and tech startups. Understanding how this market operates helps you see where innovation, efficiency, and wealth creation often begin, long before a company goes public.</p>
            <p className="mt-2">Private Equity (PE) is an asset class consisting of equity securities and debt in operating companies that are not publicly traded on a stock exchange. A private equity firm raises capital from institutional investors (like pension funds) and accredited investors (high-net-worth individuals) to create a fund. This fund is then used to acquire ownership stakes in private companies.</p>
            <p className="font-semibold">The primary goal of a PE firm is to increase the value of the companies it buys over a 4-7 year period and then sell them (either to another company or through an IPO) for a significant return.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">Core Private Equity Strategies</CardTitle>
            <CardDescription>PE firms employ several strategies to generate returns. These are the three most common.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {peStrategies.map(item => (
              <div key={item.title} className="p-4 border rounded-lg bg-card shadow-sm">
                <h3 className="font-semibold text-lg flex items-center mb-2"><item.icon className="mr-3 h-5 w-5 text-primary"/>{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
                 {item.example && (
                    <Alert variant="default" className="mt-3 bg-blue-50 dark:bg-blue-900/30 border-blue-200">
                        <Lightbulb className="h-4 w-4" />
                        <AlertTitle className="font-semibold">{item.example.title}</AlertTitle>
                        <AlertDescription className="text-xs">{item.example.text}</AlertDescription>
                    </Alert>
                 )}
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-xl flex items-center">
                    <Wrench className="mr-2 h-5 w-5 text-primary"/>
                    How Private Equity Creates Value
                </CardTitle>
                <CardDescription>Private equity firms do not just hold assets; they actively reshape them. Their goal is to accelerate growth, improve margins, and make operations more efficient.</CardDescription>
            </CardHeader>
            <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                    {valueCreationLevers.map(lever => <li key={lever}>{lever}</li>)}
                </ul>
                <p className="text-xs italic mt-3">The best PE firms do not rely only on leverage. They build stronger, more competitive businesses.</p>
            </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline flex items-center">
              <Scale className="mr-2 h-5 w-5 text-primary" />
              Pros and Cons for the Investor
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800">
              <h3 className="font-semibold flex items-center mb-2 text-green-800 dark:text-green-200">
                <ThumbsUp className="mr-2 h-5 w-5" /> The Upside (Pros)
              </h3>
              <ul className="list-disc pl-5 text-sm space-y-2">
                <li><strong>High Potential Returns:</strong> PE can offer higher returns than public markets. <span className="text-muted-foreground italic">(Investor Takeaway: Historical averages often overstate returns because poor-performing funds are rarely reported. Understand survivorship bias before assuming PE beats public markets.)</span></li>
                <li><strong>Access to Unique Opportunities:</strong> PE provides access to private companies not available to the general public.</li>
                <li><strong>Active Management:</strong> PE firms take an active role in their portfolio companies, often bringing in new management and operational expertise to drive growth and efficiency.</li>
              </ul>
            </div>
            <div className="p-4 border rounded-lg bg-red-50 dark:bg-red-900/30 border-red-200 dark:border-red-800">
              <h3 className="font-semibold flex items-center mb-2 text-red-800 dark:text-red-200">
                <ThumbsDown className="mr-2 h-5 w-5" /> The Downside (Cons)
              </h3>
              <ul className="list-disc pl-5 text-sm space-y-2">
                <li><strong>Illiquidity:</strong> Investments are typically locked up for 7-10 years. <span className="text-muted-foreground italic">(Investor Takeaway: This is the price of patience. Illiquidity allows PE firms to think long-term, free from quarterly earnings pressure, but it also means your money is locked up.)</span></li>
                <li><strong>High Minimum Investments & Fees:</strong> PE funds usually require a very large initial investment and charge high management fees (often "2 and 20"; a 2% annual management fee and 20% of the profits). <span className="text-muted-foreground italic">(Investor Takeaway: The '2 and 20' model aligns interests, but only partially. Always check whether the PE firm’s past performance justifies the cost.)</span></li>
                <li><strong>High Risk & Exclusivity:</strong> Due to high risk and complexity, PE investments are generally restricted to accredited investors.</li>
              </ul>
            </div>
          </CardContent>
        </Card>
        
        <Alert variant="default" className="bg-callout text-callout-foreground border-blue-200 dark:border-blue-800">
          <Info className="h-4 w-4"/>
          <AlertTitle className="font-headline">How Does This Apply to Me?</AlertTitle>
          <AlertDescription>
            <p>For most individual investors, private equity will never be a direct investment. But understanding it still matters. The innovations and efficiency gains driven by PE often shape the public companies you can invest in later. Knowing how value is created in the private markets helps you evaluate IPOs, ETFs, and even your employer’s growth trajectory with sharper insight.</p>
            <p className="mt-2">You can get indirect exposure by investing in publicly traded private equity firms (like Blackstone, KKR, or Apollo Global Management) or Business Development Companies (BDCs).</p>
          </AlertDescription>
        </Alert>
        
        <Alert variant="default" className="bg-callout text-callout-foreground border-blue-200 dark:border-blue-800">
            <Lightbulb className="h-4 w-4" />
            <AlertTitle className="font-headline">A Final Insight</AlertTitle>
            <AlertDescription>
                 Private equity reminds us that value is not created in the stock ticker. It is built in the real economy, one business at a time. Whether you are investing in public markets or just learning, understanding private equity gives you a clearer view of how capital, leadership, and strategy come together to drive long term wealth creation.
            </AlertDescription>
        </Alert>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you understand this advanced asset class, return to the main roadmap to continue building your financial knowledge.
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
