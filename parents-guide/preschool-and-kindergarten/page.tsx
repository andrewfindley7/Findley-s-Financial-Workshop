'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { GraduationCap, Lightbulb, Coins, ShoppingCart, PiggyBank, Timer, ArrowRight, ToyBrick, Eye, CheckCircle, Brain, BookOpen, Info } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const coreConcepts = [
  {
    icon: Coins,
    title: "Money is a Tool",
    description: "Introduce money as a physical thing we use to buy things we need and want, like food or toys."
  },
  {
    icon: ShoppingCart,
    title: "Making Choices",
    description: "Introduce the idea that money is finite; we have to choose what we buy because we can't have everything."
  },
  {
    icon: PiggyBank,
    title: "Waiting is Okay (Saving)",
    description: "Plant the first seeds of delayed gratification by introducing the concept of saving for something special later."
  }
];

const activities = [
  {
    id: "activity1",
    title: "Money Identification & Sorting",
    icon: Coins,
    description: "The first step is making money tangible and recognizable. Focus on physical cash, not abstract numbers.",
    steps: [
      "Start with one or two types of coins (like pennies and nickels) before adding more.",
      "Let them touch and feel real coins and bills (under supervision). Talk about their names: penny, nickel, dime, quarter, dollar.",
      "Sort coins by size and color. You don't need to focus heavily on value yet, just identification.",
      "Play 'Coin Rubbing': Place a coin under a piece of paper and rub over it with a crayon to reveal the image."
    ],
    primaryLesson: "Money is a real, physical object with different shapes and names. This builds familiarity and demystifies what money is.",
    gaugeUnderstanding: "Your child starts to correctly name some of the coins (e.g., 'penny,' 'quarter') or can sort them by a specific attribute you ask for, like size or color."
  },
  {
    id: "activity2",
    title: "The Store Game",
    icon: ShoppingCart,
    description: "Simulate the experience of buying something to connect money to its purpose.",
    steps: [
      "Set up a 'store' at home with some of their toys or snacks.",
      "Put simple price tags on them (e.g., 1 penny, 2 nickels). The goal is the transaction, not complex math.",
      "Give them a few coins and let them 'buy' an item from you. This teaches the concept of exchange."
    ],
    primaryLesson: "Money is exchanged for things we want. You give money to someone, and they give you an item in return. This is the foundational concept of a transaction.",
    gaugeUnderstanding: "Your child understands they need to hand you a coin (or coins) to get the toy. They aren't just taking it. They start to understand the 'give and get' nature of buying."
  },
  {
    id: "activity3",
    title: "The Jar System: Save, Spend, Share",
    icon: PiggyBank,
    description: "Visually introduce the three primary uses of money.",
    steps: [
      "Get three clear jars and label them 'Save', 'Spend', and 'Share'.",
      "When your child receives a small amount of money (e.g., from a chore or gift), help them divide it among the three jars.",
      "The 'Spend' jar is for small, immediate wants. The 'Save' jar is for a bigger toy they're waiting for. The 'Share' jar can be for a charity or a gift for someone else."
    ],
    primaryLesson: "Money isn't just for buying things right now. We can make different plans for our money: some for now (spend), some for later (save), and some for others (share).",
    gaugeUnderstanding: "When they receive money, they start to talk about which jar it should go into. They might say, 'This one is for my piggy bank!' (Save) or 'I want to buy a candy with this one!' (Spend)."
  },
  {
    id: "activity4",
    title: "Practice Waiting (Delayed Gratification)",
    icon: Timer,
    description: "Connect the 'Save' jar to a real goal to teach the power of waiting.",
    steps: [
      "Help them pick a small, achievable toy they want to save for.",
      "When they see the toy at the store, instead of saying 'no,' say 'Let's check your Save jar when we get home to see how close you are.'",
      "Celebrate with them when they finally have enough to buy the toy. This creates a powerful positive memory associated with saving."
    ],
    primaryLesson: "Waiting to buy something can lead to getting something even better than what we can get right now. Saving has a reward.",
    gaugeUnderstanding: "Your child shows pride in having bought something 'with my own money.' They might start pointing out other things and saying, 'I'm going to save for that next!'"
  }
];

export default function PreschoolAndKindergartenPage() {
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
        <h1 className="text-3xl font-bold font-headline">Ages 3-5: Preschool & Kindergarten</h1>
        <p className="text-muted-foreground mt-2">Introducing the basic concepts of money: what it is, what it's for, and the idea of choice.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <GraduationCap className="h-4 w-4" />
          <AlertTitle className="font-headline">The Goal for this Age</AlertTitle>
          <AlertDescription>
            For preschoolers, the goal is not to teach complex financial concepts, but to make money a tangible and positive part of their world. Focus on hands-on activities that introduce money as a tool for getting things we need and want. The key is to build a foundation of curiosity and familiarity, not mastery.
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
              <Lightbulb className="mr-2 h-5 w-5 text-primary" />
              Core Concepts to Introduce
            </CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-3 gap-4">
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
            <CardDescription>Use these playful activities to bring the core concepts to life. Preschoolers thrive on routine, so repeat each activity weekly or integrate them into daily play.</CardDescription>
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

        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-xl flex items-center">
                    <BookOpen className="mr-2 h-5 w-5 text-primary" />
                    Storytime Connection
                </CardTitle>
                <CardDescription>Use picture books to reinforce concepts in a fun, engaging way.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">A great book for this age group is "Curious George Saves His Pennies." It perfectly illustrates the concept of saving up for something you really want. Read it together and talk about how George had to wait to get his special red train.</p>
            </CardContent>
        </Card>

        <Alert variant="default" className="bg-blue-50 dark:bg-blue-900/30 border-blue-200">
            <CheckCircle className="h-4 w-4 text-black dark:text-white" />
            <AlertTitle className="font-headline text-black dark:text-white">Parent Tips for Success</AlertTitle>
            <AlertDescription className="text-black dark:text-white/80">
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>Keep it short and fun:</strong> Attention spans are short at this age. Aim for 5-10 minute lessons or activities.</li>
                    <li><strong>Model good behavior:</strong> Let your child see you making conscious spending choices. Talk out loud at the grocery store: "We need apples, but we'll wait on the cookies for a treat later."</li>
                    <li><strong>Praise effort, not accuracy:</strong> The goal is participation and understanding the general idea, not perfect coin counting. Positive reinforcement is key!</li>
                </ul>
            </AlertDescription>
        </Alert>
        
        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    As your child grows, their understanding will too. Return to the main roadmap to explore the next age group.
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
