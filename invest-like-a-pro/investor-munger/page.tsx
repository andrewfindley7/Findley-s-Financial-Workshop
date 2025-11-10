'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, BrainCircuit, Castle, ThumbsDown, Info, RotateCcw, Users, ThumbsUp } from 'lucide-react';
import Link from 'next/link';

const investingPrinciples = [
  {
    icon: BrainCircuit,
    title: "1. Build a Latticework of Mental Models",
    description: "This is Munger's most famous concept. Instead of relying on a single formula from finance, he advocated for learning the big, foundational ideas from many different disciplines (psychology, physics, biology, history) and using them as a 'latticework' to analyze problems from multiple perspectives. This provides a more robust and accurate view of reality."
  },
  {
    icon: ThumbsDown,
    title: "2. Invert, Always Invert",
    description: "Instead of asking 'How can I achieve X?', Munger believed it was often more useful to ask, 'What would cause X to fail?' By identifying and avoiding all the potential causes of failure (or 'stupidity'), you dramatically increase your chances of success. It's about avoiding disaster, not just seeking brilliance.",
    application: "Instead of asking, 'How can this stock go up?', ask, 'What are all the ways this investment could go to zero?' If you can't find many credible paths to failure (e.g., the company has no debt, a loyal customer base, and a strong competitive advantage), you've found a more robust investment."
  },
  {
    icon: Users,
    title: "3. Understand the Power of Incentives",
    description: "This is another core Munger model. It posits that people's behavior is overwhelmingly driven by the incentives they are given. To understand why people or companies do what they do, you must first understand how they are rewarded.",
    application: "When analyzing a company, look closely at how its management team is compensated. Are they rewarded for long-term, profitable growth (good for shareholders)? Or are they rewarded for short-term metrics like hitting quarterly earnings targets or simply growing the empire through acquisitions, even if those actions destroy shareholder value?",
    quote: "Show me the incentive and I will show you the outcome."
  },
  {
    icon: Castle,
    title: "4. Focus on Quality: What Some Call 'The Munger Flip'",
    description: "Munger is credited with pushing Buffett from a purely quantitative, 'cigar-butt' style of investing to buying wonderful businesses at fair prices. He understood that it's better to pay a fair price for a truly great business with a durable competitive moat than to buy a mediocre business for a statistically cheap price.",
  },
];

export default function InvestorMungerPage() {
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
        <h1 className="text-3xl font-bold font-headline">Learn From The Best: Charlie Munger</h1>
        <p className="text-muted-foreground mt-2">Learn from the architect of Berkshire Hathaway's modern philosophy and the master of mental models.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <BrainCircuit className="h-4 w-4" />
          <AlertTitle className="font-headline">The Master of Thinking</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>Charlie Munger, the longtime vice chairman of Berkshire Hathaway, was much more than Warren Buffett's business partner. He was an intellectual giant whose wisdom transformed Buffett's investment approach and provided the philosophical architecture for Berkshire's success. Trained as a lawyer at Harvard Law School, Munger brought a unique, multidisciplinary approach to investing, believing that a broad base of knowledge was the key to making rational decisions.</p>
            <p className="font-semibold">His philosophy wasn't about finding complex ways to win; it was about systematically finding simple ways to avoid losing. His talk "The Psychology of Human Misjudgment" remains one of the most insightful analyses of human error in decision-making.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">The Munger Philosophy: Core Principles</CardTitle>
            <CardDescription>Munger's wisdom can be distilled into a few powerful, interconnected ideas about how to think, not just what to buy.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {investingPrinciples.map(p => (
              <div key={p.title} className="p-4 border rounded-lg bg-muted/30">
                <h3 className="font-semibold flex items-center mb-2">
                  <p.icon className="mr-3 h-5 w-5 text-primary" />
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground">{p.description}</p>
                {p.application && (
                   <div className="mt-3 space-y-3">
                        <div className="p-3 bg-callout rounded-md">
                            <h4 className="font-semibold text-sm text-callout-foreground">Investing Application:</h4>
                            <p className="text-sm text-callout-foreground/90 mt-1">{p.application}</p>
                        </div>
                        {p.quote && (
                          <div className="p-3 bg-background/50 rounded-md">
                              <blockquote className="border-l-4 border-primary pl-4 italic text-sm">
                                  <p>"{p.quote}"</p>
                              </blockquote>
                          </div>
                        )}
                    </div>
                )}
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">Notable Investments: Wins and Losses</CardTitle>
            <CardDescription>Munger's philosophy is best understood through his actions and reflections.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border bg-card">
                  <h4 className="font-semibold text-green-600 flex items-center"><ThumbsUp className="mr-2 h-4 w-4" />The Big Win: BYD (Build Your Dreams)</h4>
                  <p className="text-sm text-muted-foreground mt-1">In 2008, Munger championed an investment in the Chinese battery and electric vehicle maker BYD, calling its founder, Wang Chuanfu, a combination of Thomas Edison and Jack Welch. It was an unconventional bet for Berkshire, far outside their usual circle of competence. Munger's conviction came not from analyzing the industry, but from his assessment of the founder's genius and engineering prowess. The bet was a spectacular success, with Berkshire's initial $232 million investment growing to be worth over $8 billion at its peak.</p>
              </div>
              <div className="p-4 rounded-lg border bg-card">
                  <h4 className="font-semibold text-amber-600 flex items-center"><Info className="mr-2 h-4 w-4" />The Big "Loss": Errors of Omission</h4>
                  <p className="text-sm text-muted-foreground mt-1">Munger frequently talked about their biggest mistakes being "errors of omission"—the great companies they understood but failed to invest in. He admitted they were smart enough to see the greatness of Google's business model early on but "sat there sucking their thumbs" and never bought the stock. He viewed this as a multi-billion dollar mistake. This reflects his belief that the opportunity cost of inaction can be just as damaging as a direct financial loss.</p>
              </div>
          </CardContent>
           <CardFooter>
            <Alert variant="default" className="w-full bg-callout text-callout-foreground border-blue-200 dark:border-blue-800">
                <Info className="h-4 w-4" />
                <AlertTitle className="font-semibold">Performance and Legacy</AlertTitle>
                <AlertDescription>
                 Before his time at Berkshire Hathaway, Munger ran his own investment partnership from 1962 to 1975. During that period, his fund generated a compounded annual return of 19.8%, compared to the Dow Jones Industrial Average's return of just 5.0%. This spectacular track record demonstrates that his wisdom was not just theoretical but also immensely practical and profitable.
                </AlertDescription>
            </Alert>
           </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">Munger's Most Famous Quotes</CardTitle>
            <CardDescription>These quotes capture the essence of his powerful and practical wisdom.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 prose-sm max-w-none dark:prose-invert">
             <blockquote className="border-l-4 pl-4 italic">"The big money is not in the buying and selling, but in the waiting."</blockquote>
             <blockquote className="border-l-4 pl-4 italic">"It is remarkable how much long-term advantage people like us have gotten by trying to be consistently not stupid, instead of trying to be very intelligent."</blockquote>
             <blockquote className="border-l-4 pl-4 italic">"The first rule of compounding: Never interrupt it unnecessarily."</blockquote>
             <blockquote className="border-l-4 pl-4 italic">"To get what you want, you have to deserve what you want. The world is not yet a crazy enough place to reward a whole bunch of undeserving people."</blockquote>
             <blockquote className="border-l-4 pl-4 italic">"Spend each day trying to be a little wiser than you were when you woke up."</blockquote>
          </CardContent>
        </Card>
        
        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you've learned from Charlie Munger, continue exploring the wisdom of other great investors.
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
