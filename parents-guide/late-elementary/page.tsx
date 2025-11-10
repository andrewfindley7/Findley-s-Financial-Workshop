'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { GraduationCap, Lightbulb, TrendingUp, ArrowRight, ToyBrick, Eye, Brain, Scale, Target, Calculator, ShoppingCart, Percent, CheckCircle, Info } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const coreConcepts = [
  {
    icon: Scale,
    title: "Opportunity Cost",
    description: "Introduce the idea that every spending decision has a trade-off; choosing one thing means you can't choose another."
  },
  {
    icon: Target,
    title: "Longer-Term Goal Setting",
    description: "Move from one-week goals to saving for several weeks or months for a more significant item."
  },
  {
    icon: TrendingUp,
    title: "The Magic of Compound Interest",
    description: "Introduce the foundational concept that money can earn money, which then earns more money."
  },
  {
    icon: ShoppingCart,
    title: "Being a Smart Consumer",
    description: "Teach the basics of comparing prices, understanding value, and recognizing marketing influences."
  }
];

const activities = [
  {
    id: "activity1",
    title: "The 'Paycheck' & Budget Challenge",
    icon: Calculator,
    description: "Give them responsibility over a slice of the family budget they can control to teach trade-offs.",
    steps: [
      "Instead of a simple allowance, give them a 'paycheck' to manage a specific category, like their school lunches, some clothing, or after-school activities for a month.",
      "Work with them to create a simple written budget: Income (their 'paycheck') minus Planned Expenses.",
      "Help them track their spending. If they overspend in one week, they have to adjust for the next. If they underspend, they can choose to save or use the surplus for a want.",
    ],
    discussion: [
      "At the end of the month, review the budget together. Ask questions like:",
      "What did you find hardest about planning ahead?",
      "What surprised you about where your money went?",
      "If you ran out of money early, what choice could you make differently next month?"
    ],
    primaryLesson: "Budgeting is about making active choices with a limited amount of money. Planning ahead prevents running out of money for things you need. This is the core skill of personal financial management.",
    gaugeUnderstanding: "Your child starts to make trade-offs on their own ('If I don't buy snacks today, I'll have enough for the movie on Friday'). They can end the month without asking for a bailout for their managed category."
  },
  {
    id: "activity2",
    title: "The 'Comparison Shopping' Challenge",
    icon: ShoppingCart,
    description: "Turn a regular shopping trip into a lesson on value.",
    steps: [
      "Before going to the grocery store, give them a specific item to research, like cereal or yogurt.",
      "In the aisle, have them compare two or three different brands. Look at the price, the size (ounces or grams), and the unit price if available.",
      "Help them calculate which is the better value (e.g., 'This one is bigger but costs less per ounce.'). Discuss why one might be more expensive (brand name, packaging).",
      "Let them make the final decision on which one to buy based on your family's preference for value or brand."
    ],
    primaryLesson: "The first price you see isn't always the best price. Being a smart consumer means comparing options to get the most value for your money. Marketing and branding can affect price.",
    gaugeUnderstanding: "Your child starts to look at price tags and compare items without prompting. They might point out 'This one's a better deal!' or ask 'Why is this one more expensive?'"
  },
  {
    id: "activity3",
    title: "The Long-Term Goal Chart",
    icon: Target,
    description: "Move beyond immediate wants to planning for a significant purchase that takes multiple weeks or even months to save for.",
    steps: [
      "Work with your child to identify a bigger item they really want (e.g., a bike, a video game console). It should be expensive enough that it can't be bought with one or two weeks of commission/allowance.",
      "Help them research the total cost, including tax. This is the savings goal.",
      "Create a visual savings chart or thermometer. Divide it into manageable milestones (e.g., every $5 or $10).",
      "Every time they add money to their 'Save' jar, help them color in a new section of the chart. Celebrate reaching each milestone."
    ],
    primaryLesson: "Achieving big goals requires consistent effort over a longer period. Breaking a large goal into smaller, manageable steps makes it feel achievable and builds financial discipline.",
    gaugeUnderstanding: "Your child remains focused on their goal over several weeks. They might turn down a small, immediate purchase in favor of putting the money towards their long-term goal. They show pride in their progress on the chart."
  },
  {
    id: "activity4",
    title: "Illustrating Compound Interest",
    icon: Percent,
    description: "Use a simple, visual experiment to show how money can grow on its own.",
    steps: [
      "Get two clear jars. In Jar A, put 10 pennies. In Jar B, put 10 pennies.",
      "Explain that Jar A is a 'piggy bank' and Jar B is a 'magic growing account.'",
      "Each day for a week, add one penny to Jar A. For Jar B, add one penny, and then add an extra 'interest' penny for every 10 pennies that were already in the jar at the start of the day.",
      "At the end of the week, count the pennies in both jars. Jar B will have significantly more. Explain that the 'interest' pennies started earning their own 'interest' pennies. That's compounding.",
      "<strong>Digital Extension:</strong> After the jar experiment, show them a real high-yield savings account online. Demonstrate how the bank adds interest to your balance each month, connecting the penny game to a real-world financial tool."
    ],
    primaryLesson: "Money saved in the right place can earn more money all by itself. The sooner you start, the more time your money has to grow. This is the most powerful concept in long-term wealth building.",
    gaugeUnderstanding: "Your child can explain in simple terms why Jar B grew faster ('The money made new money!'). They show more interest in the idea of savings accounts or investments that 'grow'."
  }
];

export default function LateElementaryPage() {
    const searchParams = useSearchParams();
    const fromStep = searchParams.get('from');

  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold font-headline">Ages 9-11: Late Elementary</h1>
        <p className="text-muted-foreground mt-2">Building on the basics to understand trade-offs, longer-term goals, and the power of compound interest.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <GraduationCap className="h-4 w-4" />
          <AlertTitle className="font-headline">The Goal for this Age</AlertTitle>
          <AlertDescription>
            Children in this age group are capable of more abstract thought and longer-term planning. The goal is to shift from simple earning and spending to the concepts of budgeting, making trade-offs (opportunity cost), and understanding that money can be a tool that works for them through saving and investing.
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
                    <li key={index} dangerouslySetInnerHTML={{ __html: step }}></li>
                  ))}
                </ul>
                <div className="space-y-3 mt-4">
                    {activity.discussion && (
                        <div className="p-3 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 rounded-md">
                            <h4 className="font-semibold flex items-center text-sm mb-1 text-black dark:text-white"><Brain className="mr-2 h-4 w-4 text-primary/90"/>Family Conversation</h4>
                             <ul className="list-disc pl-5 mt-2 text-xs space-y-1 text-black dark:text-white/80">
                                {activity.discussion.map((q, i) => <li key={i}>{q}</li>)}
                            </ul>
                        </div>
                    )}
                    <div className="p-3 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 rounded-md">
                        <h4 className="font-semibold flex items-center text-sm mb-1 text-black dark:text-white"><Brain className="mr-2 h-4 w-4 text-primary/90"/>Primary Lesson</h4>
                        <p className="text-xs text-black dark:text-white/80">{activity.primaryLesson}</p>
                    </div>
                     <div className="p-3 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 rounded-md">
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
                    <li><strong>Connect choices to time:</strong> Broaden the "opportunity cost" concept. Explain that time is a resource just like money. "If you spend an hour playing video games, that's an hour you can't spend practicing guitar. Both are fun, but you have to choose."</li>
                    <li><strong>Be transparent about bigger goals:</strong> Talk about what the family is saving for. "We're putting money in our 'House Repair' fund this month, so we're going to order pizza just once instead of twice."</li>
                </ul>
            </AlertDescription>
        </Alert>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Ready for the Next Step?</CardTitle>
                <CardDescription>
                    As your child enters their teen years, the financial topics become more complex and directly relevant to their budding independence.
                </CardDescription>
            </CardHeader>
            <CardContent>
                 <Button asChild>
                    <Link href={`/roadmaps/finance-for-parents${fromStep ? `?from=${fromStep}`: ''}`}>
                        Return to the Finance For Parents Roadmap
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </CardContent>
        </Card>

      </div>
    </>
  );
}
