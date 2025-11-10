'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { BrainCircuit, BookCheck, ThumbsDown, PiggyBank, ArrowRight, Lightbulb, Search, CheckCircle, XCircle, Brain, Info } from 'lucide-react';
import Link from 'next/link';

export default function CircleOfCompetencePage() {
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
        <h1 className="text-3xl font-bold font-headline">Circle of Competence</h1>
        <p className="text-muted-foreground mt-2">Understand a foundational principle for protecting your capital: Know what you own, and know what you don't.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <BrainCircuit className="h-4 w-4" />
          <AlertTitle className="font-headline">A Foundational Investing Principle</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>The "Circle of Competence," a mental model championed by Warren Buffett and Charlie Munger, is the idea that every investor has specific, limited areas of knowledge. To be successful, you must define the perimeter of that circle and operate strictly within it. It's not about how large your circle is, but about how well you define its boundaries.</p>
            <p className="font-bold">Investing outside your circle is not investing; it's gambling.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">Why It's Your Greatest Protection</CardTitle>
            <CardDescription>Operating within your circle dramatically reduces the risk of making a catastrophic, unforced error.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/20 border-green-200">
              <h3 className="font-semibold flex items-center mb-1 text-green-700 dark:text-green-300">
                Inside Your Circle
              </h3>
              <p className="text-sm text-muted-foreground">When you understand a business, you can more accurately assess its long-term prospects, competitive advantages, and the quality of its management. You can confidently value the business and identify when the market is offering you a price that is too high or too low.</p>
            </div>
            <div className="p-4 border rounded-lg bg-red-50 dark:bg-red-900/20 border-red-200">
              <h3 className="font-semibold flex items-center mb-1 text-red-700 dark:text-red-300">
                <ThumbsDown className="mr-2 h-5 w-5" /> Outside Your Circle
              </h3>
              <p className="text-sm text-muted-foreground">When you invest in something you don't understand, you have no real basis for your decisions. You become susceptible to hype, narratives, and market sentiment. You won't know whether to buy, sell, or hold when faced with volatility, because you can't tell the difference between a temporary problem and a permanent one.</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
              <Search className="mr-2 h-5 w-5 text-primary" />
              How to Define Your Circle
            </CardTitle>
            <CardDescription>Your circle is built from your professional expertise, your deep personal interests, and your dedicated research.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2 text-sm">
                <li><strong>Your Profession:</strong> If you're a doctor, you have an edge in understanding healthcare companies. A software engineer has an edge in tech. A retail manager has an edge in understanding consumer brands. Start with the industries you know best.</li>
                <li><strong>Your Passions:</strong> Are you a passionate gamer? You might have a better understanding of gaming companies than a Wall Street analyst. Do you love cars? You might have an insight into the auto industry.</li>
                <li><strong>Your Research:</strong> You can expand your circle, but it takes serious work. It involves reading books, industry reports, and years of a company's financial statements. A circle cannot be built overnight.</li>
            </ul>
             <Alert variant="default" className="mt-4">
                <Lightbulb className="h-4 w-4" />
                <AlertTitle>The Litmus Test</AlertTitle>
                <AlertDescription>
                   Before you buy any individual stock, ask yourself: "Could I give a 15-minute presentation on this business, its competitors, and its primary risks to a room full of experts without embarrassing myself?" If the answer is no, you are outside your circle.
                </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-xl">A Visual Example: Buffett's Circle</CardTitle>
                <CardDescription>A simple diagram of an investor's potential circle of competence.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                <p className="text-sm text-muted-foreground mb-4">An investor like Warren Buffett, for example, has famously focused on industries he understands deeply.</p>
                <div className="relative w-full max-w-md">
                    <div className="w-full aspect-square rounded-full border-4 border-dashed border-primary/50 flex items-center justify-center p-8">
                        <div className="text-center">
                            <h4 className="font-bold text-primary">INSIDE THE CIRCLE</h4>
                            <p className="text-sm">Businesses I understand deeply.</p>
                            <ul className="mt-2 space-y-1 text-sm list-inside">
                                <li><CheckCircle className="inline h-4 w-4 mr-2 text-green-600"/>Insurance</li>
                                <li><CheckCircle className="inline h-4 w-4 mr-2 text-green-600"/>Banking & Financials</li>
                                <li><CheckCircle className="inline h-4 w-4 mr-2 text-green-600"/>Railroads & Energy</li>
                                <li><CheckCircle className="inline h-4 w-4 mr-2 text-green-600"/>Consumer Brands</li>
                            </ul>
                        </div>
                    </div>
                    <div className="absolute top-0 right-0 translate-x-1/2 w-48 text-right">
                        <h4 className="font-bold text-destructive">OUTSIDE THE CIRCLE</h4>
                        <ul className="mt-1 space-y-1 text-sm">
                            <li>Complex Biotech<XCircle className="inline h-4 w-4 ml-2 text-red-600"/></li>
                            <li>Most Technology<XCircle className="inline h-4 w-4 ml-2 text-red-600"/></li>
                            <li>Cryptocurrency<XCircle className="inline h-4 w-4 ml-2 text-red-600"/></li>
                        </ul>
                    </div>
                </div>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-xl">Real-World Examples</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-4">
                 <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/20 border-green-200">
                    <h3 className="font-semibold flex items-center mb-1 text-green-700 dark:text-green-300">
                        Success: Buffett Avoiding the Dot-Com Bubble
                    </h3>
                    <p className="text-sm text-muted-foreground">In the late 1990s, Warren Buffett was heavily criticized for not investing in the high-flying tech and internet stocks. His simple explanation was: "I don't understand them." He couldn't confidently predict their future earnings or durability. By staying within his circle (insurance, consumer goods), he preserved Berkshire Hathaway's capital while the tech bubble burst, wiping out trillions in speculative value.</p>
                </div>
                <div className="p-4 border rounded-lg bg-red-50 dark:bg-red-900/20 border-red-200">
                    <h3 className="font-semibold flex items-center mb-1 text-red-700 dark:text-red-300">
                        Failure: Retail Investors and Crypto Hype
                    </h3>
                    <p className="text-sm text-muted-foreground">During the crypto boom of 2021, many retail investors bought assets like Dogecoin or Shiba Inu based on social media hype and the fear of missing out (FOMO). Most did not understand the underlying technology, tokenomics, or the lack of intrinsic value. When the hype subsided, many of these assets lost over 90% of their value, resulting in massive losses for those who invested outside their circle.</p>
                </div>
            </CardContent>
        </Card>

        <Alert variant="default" className="bg-green-50 dark:bg-green-900/20 border-green-300 dark:border-green-700">
          <PiggyBank className="h-4 w-4 text-green-600" />
          <AlertTitle className="font-headline text-green-800 dark:text-green-200">The Best Strategy for What's Outside Your Circle: Index Funds</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none text-green-700 dark:text-green-300 dark:prose-invert">
            <p>For everything that falls outside your circle of competence—which for most people is the vast majority of the market—the best strategy is not to try and learn it all, but to simply buy a low-cost, diversified index fund. This allows you to benefit from the growth of the entire economy without needing to be an expert in every industry.</p>
          </AlertDescription>
        </Alert>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you understand this foundational concept, return to the Invest Like a Pro roadmap to continue your learning.
                </CardDescription>
            </CardHeader>
            <CardContent>
                 <Button asChild>
                    <Link href={`/roadmaps/invest-like-a-pro${fromStep ? `#${fromStep}` : ''}`}>
                        Return to the Invest Like a Pro roadmap
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </CardContent>
        </Card>

      </div>
    </>
  );
}
