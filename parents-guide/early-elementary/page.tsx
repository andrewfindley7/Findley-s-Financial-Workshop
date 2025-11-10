'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { GraduationCap, Lightbulb, ArrowRight, ToyBrick, Eye, Brain, Coins, Briefcase, ShoppingCart, Target, Timer, CheckCircle, Info } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const coreConcepts = [
  {
    icon: Coins,
    title: "Money Has Different Values",
    description: "Move beyond identification to understanding that different coins and bills are worth different amounts."
  },
  {
    icon: Briefcase,
    title: "Money is Earned",
    description: "Introduce the fundamental concept that money comes from work, not just from parents."
  },
  {
    icon: ShoppingCart,
    title: "We Have to Make Choices",
    description: "Build on the idea of 'spending' by introducing needs vs. wants and the concept of opportunity cost."
  },
  {
    icon: Target,
    title: "Saving for a Goal",
    description: "Make saving more concrete by setting and working towards short-term, tangible goals."
  }
];

const activities = [
  {
    id: "activity1",
    title: "The Coin Value Game",
    icon: Coins,
    description: "Transition from identifying coins to understanding their value.",
    steps: [
      "Start with one or two types of coins (like pennies and nickels) before adding more.",
      "Use real coins. Clearly explain: A penny is 1 cent, a nickel is 5, a dime is 10, and a quarter is 25.",
      "Play 'trading up.' Ask, 'How many pennies do you need to trade me for this nickel?' Use physical coins to make the exchange.",
      "Practice simple addition. Use price tags on toys like '15 cents' and have them figure out which coins to use (e.g., a dime and a nickel)."
    ],
    primaryLesson: "Different coins have different and specific values. We can combine smaller value coins to equal a larger value coin. This is the first step towards understanding how money is counted.",
    gaugeUnderstanding: "Your child can correctly trade you five pennies for a nickel. They can pick out the right combination of coins to pay for a small, pre-priced item without much help."
  },
  {
    id: "activity2",
    title: "First Commissions (An Allowance with a Purpose)",
    icon: Briefcase,
    description: "Connect work directly to earning money. Frame it as 'commission' for work, not an entitlement.",
    steps: [
      "Create a simple chore chart with 3-4 age-appropriate jobs (e.g., making their bed, feeding a pet, helping set the table).",
      "Assign a simple value to each chore (e.g., 25 or 50 cents).",
      "Pay them in physical cash immediately after the work is done to create a strong connection between the effort and the reward."
    ],
    primaryLesson: "Money is earned through work and effort. It doesn't just appear. This builds a foundational work ethic and respect for the value of money.",
    gaugeUnderstanding: "Your child starts to ask what they can do to earn money for something they want. They begin to understand that completing their chores leads to a tangible financial reward."
  },
  {
    id: "activity3",
    title: "The 'Needs vs. Wants' Sorting Game",
    icon: ShoppingCart,
    description: "Help your child differentiate between things we must have and things that are nice to have.",
    steps: [
      "Create flashcards with pictures or words (e.g., 'apple,' 'video game,' 'coat,' 'candy,' 'house,' 'toy').",
      "Create two boxes or piles labeled 'Need' and 'Want'. You can also reintroduce the 'Share' jar concept here as a third option for money.",
      "Go through the cards together and discuss why something is a need (we need it to live and be healthy) versus a want (it's for fun). It's okay for this to be a discussion, not a test."
    ],
    primaryLesson: "We need to spend money on our needs first. Wants are things we can choose to buy with the money we have left over. This introduces the concept of prioritizing expenses.",
    gaugeUnderstanding: "When at the store, your child can correctly identify items as a need ('We need milk for breakfast') or a want ('I want that new cereal'). They begin to understand why you might say 'no' to a want but will always buy a need."
  },
  {
    id: "activity4",
    title: "The One-Week Saving Goal",
    icon: Timer,
    description: "Teach delayed gratification with a goal that's achievable in a short timeframe.",
    steps: [
      "Help them pick a small toy or treat that costs a few dollars (e.g., $3-5).",
      "Calculate how many chores they need to do to earn that amount. Use the Chore Tracker tool on our Tools & Activities page to make this visual.",
      "When they earn the money, take them to the store to buy the item themselves. Let them hand the cash to the cashier.",
      "Talk about how they felt waiting and how it feels now that they've earned it themselves."
    ],
    primaryLesson: "By waiting and saving small amounts of money, we can buy bigger and better things than we could with just one day's earnings. Saving is a powerful tool for achieving goals.",
    gaugeUnderstanding: "Your child shows pride in having bought something 'with my own money.' They might start pointing out other things and saying, 'I'm going to save for that next!'"
  }
];

export default function EarlyElementaryPage() {
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
        <h1 className="text-3xl font-bold font-headline">Ages 6-8: Early Elementary</h1>
        <p className="text-muted-foreground mt-2">Laying the groundwork for smart financial choices by learning about earning, value, and goals.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <GraduationCap className="h-4 w-4" />
          <AlertTitle className="font-headline">The Goal for this Age</AlertTitle>
          <AlertDescription>
            At this stage, children are moving from abstract ideas to more concrete thinking. The goal is to connect money to its value and the effort required to earn it. We introduce the first real financial decision: choosing between a 'need' and a 'want,' and the concept that saving over time unlocks bigger goals.
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
              <Lightbulb className="mr-2 h-5 w-5 text-primary" />
              Core Concepts to Introduce
            </CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
            {coreConcepts.map(concept => (
              <div key={concept.title} className="p-4 border rounded-lg bg-card shadow-sm">
                <div className="flex items-center mb-2">
                  <concept.icon className="mr-2 h-5 w-5 text-primary/80" />
                  <h3 className="font-semibold">{concept.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{concept.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
              <ToyBrick className="mr-2 h-5 w-5 text-primary" />
              Simple Activities & Lessons
            </CardTitle>
            <CardDescription>Use these activities to make abstract concepts tangible and fun.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {activities.map(activity => (
              <div key={activity.id} className="p-4 border rounded-lg bg-muted/30">
                <h3 className="font-semibold text-lg flex items-center mb-2">
                  <activity.icon className="mr-3 h-5 w-5 text-primary" />
                  {activity.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">{activity.description}</p>
                <ul className="list-disc pl-5 text-sm space-y-1 mb-4">
                  {activity.steps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ul>
                <div className="space-y-3 mt-4">
                    <div className="p-3 bg-background/70 rounded-md">
                        <h4 className="font-semibold flex items-center text-sm mb-1"><Brain className="mr-2 h-4 w-4 text-primary/90"/>Primary Lesson</h4>
                        <p className="text-xs text-muted-foreground">{activity.primaryLesson}</p>
                    </div>
                     <div className="p-3 rounded-md bg-blue-50 dark:bg-blue-900/30 border border-blue-200">
                        <h4 className="font-semibold flex items-center text-sm mb-1 text-black dark:text-white"><Eye className="mr-2 h-4 w-4 text-primary/90"/>How to Gauge Understanding</h4>
                        <p className="text-xs text-black dark:text-white/80">{activity.gaugeUnderstanding}</p>
                    </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        
        <Alert variant="default" className="bg-blue-50 dark:bg-blue-900/30 border-blue-200">
            <CheckCircle className="h-4 w-4 text-black dark:text-white" />
            <AlertTitle className="font-headline text-black dark:text-white">Parent Tips for Success</AlertTitle>
            <AlertDescription className="text-black dark:text-white/80">
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>Model your thinking:</strong> When making a purchase, talk out loud. "We need milk for our cereal, so that's a need. The ice cream is a want, so we'll get that only if we have money left in our food budget."</li>
                    <li><strong>Connect to giving:</strong> You can reintroduce the "Share" jar here. If they receive gift money, encourage them to put a small portion aside for a cause they care about or a gift for a friend.</li>
                    <li><strong>Praise the process:</strong> Applaud them for saving or for making a thoughtful choice, even if it's small. You're rewarding the habit, not just the outcome.</li>
                    <li><strong>Use Visual Tools:</strong> Use our <Link href="/parents-guide/tools-and-activities" className="text-primary underline">interactive tools</Link> to help track chores and visualize budget goals.</li>
                </ul>
            </AlertDescription>
        </Alert>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    As your child's math skills and understanding of the world grow, you can introduce more complex topics.
                </CardDescription>
            </CardHeader>
            <CardContent>
                 <Button asChild>
                    <Link href={`/roadmaps/finance-for-parents${fromStep ? `?from=${fromStep}`: ''}`}>
                        Return to Finance For Parents Roadmap
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </CardContent>
        </Card>

      </div>
    </>
  );
}
