'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Lightbulb, Castle, Brain, Handshake, ThumbsDown, Star, Zap, Repeat, Gem, Award, Microscope, Link as LinkIcon, BrainCircuit, ArrowRight, Info } from 'lucide-react';
import Link from 'next/link';

const qualityPoints = [
  {
    title: 'An Understandable Business (Circle of Competence)',
    icon: Brain,
    description: "Before analyzing any numbers, you must be able to simply and clearly explain what the business does, who its customers are, and how it makes money. If you can't, you can't properly assess its risks or future prospects. This is your 'Circle of Competence'.",
    seek: "Simple, understandable business models that have a clear value proposition.",
    avoid: "Complex, jargon-filled businesses that are difficult to explain. If it feels too complicated, it probably is.",
    investor: "Warren Buffett",
    quote: "Know your circle of competence, and stick within it. The size of that circle is not very important; knowing its boundaries, however, is vital."
  },
  {
    title: 'A Durable Competitive Advantage (The "Moat")',
    icon: Castle,
    description: "A great business is like an economic castle protected by a deep, sustainable 'moat' that keeps competitors at bay. This is what allows a company to maintain high profitability and fend off competition over the long term.",
    seek: "Businesses with one or more strong, identifiable moats.",
    avoid: "Commodity businesses with no pricing power and fierce competition.",
    investor: "Warren Buffett",
    quote: "The key to investing is not assessing how much an industry is going to affect society, or how much it will grow, but rather determining the competitive advantage of any given company and, above all, the durability of that advantage."
  },
  {
    title: 'Honest and Capable Management',
    icon: Handshake,
    description: "When you buy a stock, you are partnering with the management team. It's crucial that they are not only talented operators but also act with integrity and have the shareholders' best interests at heart.",
    seek: "Management teams with high insider ownership (skin in the game), a track record of rational capital allocation, and transparent communication with shareholders.",
    avoid: "Overly promotional management, teams with excessively high pay not tied to performance, or those who frequently dilute shareholders with stock options.",
    investor: "Warren Buffett",
    quote: "We look for three things: intelligence, energy, and integrity. If you don't have the last one, don't even bother with the first two."
  },
  {
    title: 'A Culture of Adaptability & Innovation',
    icon: BrainCircuit,
    description: "A company's culture determines how it responds to threats and opportunities. A culture that encourages experimentation, learns from failure, and adapts to change is a powerful, though intangible, asset.",
    seek: "Companies that consistently innovate, disrupt themselves, and adapt to changing customer needs. Look for evidence of a company that is not afraid to cannibalize its own successful products to stay ahead.",
    avoid: "Businesses that are complacent, bureaucratic, and resistant to change, especially in fast-moving industries. A history of ignoring new trends is a major red flag.",
    investor: "Charlie Munger",
    quote: "The world is not a static place. The ability to adapt to change is a huge advantage."
  },
  {
    title: 'Evidence of High Returns on Capital',
    icon: Award,
    description: "While the deep dive into metrics comes later, the qualitative goal is to find businesses that can reinvest their profits at high rates of return. This is the hallmark of a 'compounding machine' that creates immense long-term value.",
    seek: "Businesses that are capital-light, have high margins, and don't require massive, constant reinvestment just to stay competitive.",
    avoid: "Businesses in highly competitive, capital-intensive industries that earn low returns on their investments.",
    investor: "Charlie Munger",
    quote: "It’s obvious that if a company is going to be a great investment, it’s not going to be a business that requires tons of capital all the time. It will be a business that has a high return on capital."
  }
];

const moatTypes = [
  { title: 'Brand Power', icon: Star, description: "Customers are willing to pay a premium for the company's product due to its reputation and trust (e.g., Apple, Coca-Cola)." },
  { title: 'Network Effects', icon: Zap, description: "The product or service becomes more valuable as more people use it (e.g., Visa, Facebook)." },
  { title: 'High Switching Costs', icon: Repeat, description: "It is a significant pain (in time or money) for customers to switch to a competitor (e.g., your bank, your company's core software)." },
  { title: 'Cost Advantages', icon: Gem, description: "The company can produce its goods or services cheaper than anyone else due to scale, process, or location (e.g., Walmart, GEICO)." },
];

export default function QualitativeAnalysisPage() {
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
        <h1 className="text-3xl font-bold font-headline">Qualitative Analysis: Judging Business Quality</h1>
        <p className="text-muted-foreground mt-2">Learn to assess the non-numeric factors that separate great businesses from mediocre ones.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Lightbulb className="h-4 w-4" />
          <AlertTitle className="font-headline">Beyond the Numbers</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            Quantitative analysis tells you what has happened in a business's past, but qualitative analysis helps you judge its future. It's the art of evaluating a company's intangible qualities, such as the strength of its brand, the quality of its management, and the durability of its competitive position. Mastering this is what separates good investors from great ones.
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline">The Pillars of a High-Quality Business</CardTitle>
            <CardDescription>Great investors look for businesses that possess these core qualitative characteristics.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {qualityPoints.map(point => (
              <div key={point.title} className="p-4 border rounded-lg bg-card shadow-sm">
                <h3 className="font-semibold text-lg flex items-center mb-2">
                  <point.icon className="mr-3 h-6 w-6 text-primary" />
                  {point.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{point.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm mb-4">
                  <div className="p-3 bg-green-500/10 rounded-md">
                    <h4 className="font-semibold flex items-center text-green-700 dark:text-green-300">What to Seek</h4>
                    <p className="text-green-600 dark:text-green-400">{point.seek}</p>
                  </div>
                  <div className="p-3 bg-red-500/10 rounded-md">
                    <h4 className="font-semibold flex items-center text-red-700 dark:text-red-300">What to Avoid</h4>
                    <p className="text-red-600 dark:text-red-400">{point.avoid}</p>
                  </div>
                </div>
                 <div className="p-3 bg-muted/50 rounded-lg">
                    <blockquote className="border-l-4 border-primary pl-4 italic text-sm">
                        <p>"{point.quote}"</p>
                        <footer className="mt-2 text-xs not-italic text-right">- {point.investor}</footer>
                    </blockquote>
                  </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle className="font-headline flex items-center"><Castle className="mr-3 h-6 w-6 text-primary" />Deep Dive: Types of Competitive Moats</CardTitle>
                <CardDescription>A moat is the most critical qualitative factor. Most sustainable advantages fall into a few broad categories.</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {moatTypes.map(moat => (
                    <div key={moat.title} className="p-4 border rounded-lg">
                        <h4 className="font-semibold flex items-center"><moat.icon className="mr-2 h-5 w-5 text-primary/80"/>{moat.title}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{moat.description}</p>
                    </div>
                ))}
            </CardContent>
        </Card>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you understand how to assess a business's qualitative strengths, return to the Invest Like a Pro roadmap to continue your learning.
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