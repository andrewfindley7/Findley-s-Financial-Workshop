'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { AlertTriangle, TrendingDown, Clock, HeartCrack, Hammer, Brain, ArrowRight, Wallet, Calculator, Info } from 'lucide-react';
import Link from 'next/link';

const hiddenCosts = [
  {
    icon: Hammer,
    title: "The Financial Cost: 'Buy It Nice or Buy It Twice'",
    description: "Choosing the cheapest option for important items like shoes, tools, or appliances often leads to higher costs over time. A $20 pair of boots might last one season, while a well-made $120 pair could last for five years, making them cheaper in the long run. Prioritize quality and durability for items you use frequently.",
    callout: {
        icon: Calculator,
        title: "The 'Value per Use' Framework",
        text: "To decide if something is worth paying more for, divide the price by the estimated number of uses. A $120 pair of boots you wear 300 times costs you $0.40 per use. A $20 pair that falls apart after 20 uses costs you $1.00 per use. In this case, higher quality is often cheaper."
    }
  },
  {
    icon: Clock,
    title: "The Time Cost: Your Most Valuable Asset",
    description: "Extreme frugality can be incredibly time-consuming. Driving 30 minutes across town to save $2 on groceries or spending hours trying to repair a broken cheap item is a poor trade-off. Your time has value; often, it's worth more than the small amount of money you save.",
    callout: null
  },
  {
    icon: HeartCrack,
    title: "The Quality of Life Cost: Missing Out on Life",
    description: "The purpose of money is to enable a better life. Extreme frugality can paradoxically limit life's richness. Consistently refusing to spend on social experiences, skimping on fundamentals like proper ergonomic shoes or a quality mattress, or refusing to run air conditioning during a heatwave can negatively impact your health, sleep, and productivity, creating costs far greater than the initial savings.",
    callout: null
  },
  {
    icon: TrendingDown,
    title: "The Health & Safety Cost",
    description: "Skimping on certain areas can be dangerous. This can include buying low-quality tires for your car, avoiding necessary medical or dental check-ups to save on co-pays, or using inadequate safety equipment for a job. The potential long-term cost to your health and well-being far outweighs the short-term savings.",
    callout: {
        icon: Wallet,
        title: "A Real-World Story",
        text: "John bought the cheapest car tires he could find. They wore out in a year and caused a blowout that cost him thousands in repairs and a higher insurance premium. Maria spent more upfront on quality tires. Hers lasted 5 years and kept her safe on the road. Maria's choice was both safer and cheaper in the long run."
    }
  }
];

export default function DangersOfOverFrugalityPage() {
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
        <h1 className="text-3xl font-bold font-headline">The Dangers of Extreme Frugality</h1>
        <p className="text-muted-foreground mt-2">Understanding when saving money can actually cost you more.</p>
      </div>
      <div className="space-y-6">
        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle className="font-headline">The Frugality Paradox</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
             <p>Frugality is a virtue, and living below your means is the cornerstone of building wealth. However, when taken to an extreme, often driven by a "scarcity mindset," frugality can become counterproductive. If you grew up with financial insecurity, it's natural to cling to every dollar. But clinging too tightly can backfire, you protect pennies while losing dollars, and you sacrifice today’s joy without truly securing tomorrow.</p>
             <p className="font-semibold">The goal isn’t to spend the least possible money, it’s to maximize your freedom. That comes from aligning spending with values, not from obsessing over every coupon.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">The Hidden Costs of Being Too Cheap</CardTitle>
            <CardDescription>Extreme frugality often ignores the second- and third-order consequences of your choices.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
            {hiddenCosts.map(item => (
              <div key={item.title} className="p-4 border rounded-lg bg-card shadow-sm space-y-4 flex flex-col">
                <div className="flex items-start gap-3">
                  <item.icon className="mr-1 h-5 w-5 text-destructive flex-shrink-0" />
                  <h3 className="font-semibold">{item.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground flex-grow">{item.description}</p>
                 {item.callout && (
                    <div className="p-3 bg-muted/50 rounded-md border">
                        <h4 className="font-semibold text-sm flex items-center mb-1">
                            <item.callout.icon className="mr-2 h-4 w-4 text-primary"/>
                            {item.callout.title}
                        </h4>
                        <p className="text-xs text-muted-foreground">{item.callout.text}</p>
                    </div>
                 )}
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you understand this key concept, return to the main roadmap to continue building your financial knowledge.
                </CardDescription>
            </CardHeader>
            <CardContent>
                 <Button asChild>
                    <Link href={`/roadmaps/master-personal-finance${fromStep ? `#${fromStep}` : ''}`}>
                        Return to The Master Personal Finance Roadmap
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </CardContent>
        </Card>

      </div>
    </>
  );
}
