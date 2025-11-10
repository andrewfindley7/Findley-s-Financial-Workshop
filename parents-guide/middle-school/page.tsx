'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { GraduationCap, Lightbulb, TrendingUp, ArrowRight, Eye, Brain, Scale, Target, Calculator, ShoppingCart, Percent, Wallet, Banknote, Briefcase, CreditCard, Rocket, Search, PiggyBank, FileText, CheckCircle, Info, ToyBrick } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const coreConcepts = [
  {
    icon: Wallet,
    title: "Managing Real Money (Budgeting)",
    description: "Move from a simple allowance to managing a budget for actual expenses like lunches, outings, or hobbies."
  },
  {
    icon: TrendingUp,
    title: "Introduction to Investing",
    description: "Introduce the concepts of stocks, mutual funds, and how investing helps money grow significantly faster than saving."
  },
  {
    icon: CreditCard,
    title: "Understanding Credit and Debt",
    description: "Explain what credit is, the difference between good and bad debt, and the dangers of high interest rates."
  },
  {
    icon: Rocket,
    title: "Thinking About Future Goals",
    description: "Start discussing long-term financial goals like saving for a car, college, or future independence."
  }
];

const activities = [
  {
    id: "activity1",
    title: "The First Job Budget",
    icon: Calculator,
    description: "If your teen has a part-time job, this is the perfect opportunity to create a real-world budget.",
    steps: [
      "Review their first pay stub together. Explain gross vs. net pay and show them where taxes go.",
      "Help them create a zero-based budget with their take-home pay. Allocate funds for gas money, car insurance, cell phone bill, savings goals, and spending money.",
      "Open a student checking account so they can manage their own funds with a debit card.",
      "Review the budget monthly. This isn't about control; it's a coaching opportunity to help them learn to manage their own cash flow."
    ],
    discussion: [
      "At the end of the month, review the budget together. Ask questions like:",
      "What did you find hardest about planning ahead?",
      "What surprised you about where your money went?",
      "If you ran out of money early, what choice could you make differently next month?"
    ],
    primaryLesson: "Budgeting is the #1 tool for managing your own money. It's about creating a plan to ensure you are saving for your future goals, not just spending what you earn. This is the core skill of financial independence.",
    gaugeUnderstanding: "Your teen can check their own bank balance and make spending decisions based on what's available in their budget categories. They can have a conversation with you about adjusting the budget rather than just asking for more money when they overspend."
  },
  {
    id: "activity2",
    title: "Entrepreneurship 101: Creating Value",
    icon: Lightbulb,
    description: "Teach them that money is earned by solving problems for others, not just by doing chores.",
    steps: [
      "Brainstorm simple business ideas together: walking a neighbor's dog, offering a tech-help service for older relatives, a car washing service, or a bake sale for a cause they care about.",
      "Help them think through the basics: What problem are they solving? What would they charge? What supplies do they need?",
      "Encourage them to try one small venture. This teaches them about marketing (making a flyer), customer service, and managing income and expenses.",
      "Let them keep the profits. This creates a powerful link between their own initiative, creating value, and earning money."
    ],
    primaryLesson: "Income isn't just something you receive from a job or chores; it's something you can create by providing value to others. This fosters an entrepreneurial mindset.",
    gaugeUnderstanding: "Your child starts identifying problems or needs around them and thinking about how they could solve them. They might come to you with a business idea, no matter how small, showing they're thinking proactively about creating value."
  },
  {
    id: "activity3",
    title: "The 'First Stock' Research Project",
    icon: Search,
    description: "Introduce the concept of stock ownership in a fun, no-risk way.",
    steps: [
      "Ask them to pick a public company they know and like (e.g., Apple, Nike, McDonald's, Roblox).",
      "Help them look up the company's stock ticker (e.g., AAPL, NKE). Explain that this is how the company is identified on the stock market.",
      "Together, find simple answers to these questions: What does the company sell to make money? Who are its main competitors? Is the stock price up or down over the last year?",
      "Create a 'fantasy portfolio' with a tool like Google Finance or Yahoo Finance. Let them 'buy' one share and track its performance over a few weeks. Discuss why the price might be moving."
    ],
    primaryLesson: "Buying a stock means you own a tiny piece of that company. A stock's price changes based on how well people think the company is doing and will do in the future. Investing can grow your money faster, but it also comes with risk, meaning sometimes values go down.",
    gaugeUnderstanding: "Your child can explain in their own words that a stock represents ownership. They start to connect real-world news about a company (e.g., a new product launch) to how its stock price might change."
  },
  {
    id: "activity4",
    title: "The Credit Card 'What-If' Scenario",
    icon: CreditCard,
    description: "Illustrate the high cost of credit card debt using a real-world example.",
    steps: [
      "Find a real credit card offer online or in the mail. Point out the Annual Percentage Rate (APR), which is often 20% or higher.",
      "Create a scenario: 'Imagine you want a new $500 game console and you put it on this credit card. If you only make the minimum payment (usually around $15-25), how long do you think it would take to pay off?'",
      "Use an online credit card calculator to show them the answer. It will often be many years and hundreds of dollars in interest.",
      "Compare this to saving up the $500 beforehand, which costs them nothing extra."
    ],
    primaryLesson: "Using a credit card is borrowing money at a very high interest rate. If you don't pay it off immediately, the interest cost can make things much more expensive and trap you in debt. This is 'bad debt.'",
    gaugeUnderstanding: "Your child expresses surprise or concern at how much extra the item costs when paid for over time with a credit card. They can articulate that paying in full is better than carrying a balance."
  },
  {
    id: "activity5",
    title: "The Future Goal Calculator",
    icon: Rocket,
    description: "Connect today's saving habits to major future goals.",
    steps: [
        "Discuss a major future goal, like buying a first car or contributing to college.",
        "Use an online investment or compound interest calculator. Show them: 'If you save and invest $50 a month starting now, how much could it be worth by the time you're 18 or 22?'",
        "Adjust the variables. Show them the powerful difference between starting at age 14 versus starting at age 24. Emphasize the role of time.",
        "Talk about 'good debt' in this context. Explain that a student loan for a valuable degree can be a worthwhile investment in their future earning power, unlike high-interest credit card debt."
    ],
    primaryLesson: "Small, consistent savings habits started early can grow into very large amounts over time due to compound interest. Making smart choices about 'good debt' (for things that can increase your future income) versus 'bad debt' is a critical life skill.",
    gaugeUnderstanding: "Your child shows more interest in the idea of long-term savings. They might ask questions about how much they need to save for a specific future goal and start to differentiate between debt for consumption and debt for investment."
  }
];

export default function MiddleSchoolPage() {
    const searchParams = useSearchParams();
    const fromStep = searchParams.get('from');
    
  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold font-headline">Ages 12-14: Middle School</h1>
        <p className="text-muted-foreground mt-2">Transitioning from concrete concepts to the more abstract and powerful drivers of long-term financial health.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <GraduationCap className="h-4 w-4" />
          <AlertTitle className="font-headline">The Goal for this Age</AlertTitle>
          <AlertDescription>
            At this stage, pre-teens are ready to grasp more complex and abstract financial topics. The goal is to move beyond simple saving and spending to understanding the mechanics of building wealth and the dangers of debt. These lessons form the foundation for making smart financial decisions as they approach independence.
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
        
        <Alert variant="default" className="bg-blue-50 dark:bg-blue-900/30 border-blue-200">
            <CheckCircle className="h-4 w-4 text-black dark:text-white" />
            <AlertTitle className="font-headline text-black dark:text-white">Parent Tip: Share Your Stories</AlertTitle>
            <AlertDescription className="text-black dark:text-white/80">
                This is a great age to normalize financial mistakes by sharing one of your own. Talk about a time you took on a bad loan or made an impulse purchase you regretted. Discussing what you learned from the experience teaches them resilience and shows that everyone is on a learning journey.
            </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
              <ToyBrick className="mr-2 h-5 w-5 text-primary" />
              Hands-On Activities & Discussions
            </CardTitle>
            <CardDescription>Use these activities to make complex topics relatable and impactful.</CardDescription>
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
        
        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Ready for the Next Step?</CardTitle>
                <CardDescription>
                    As your child enters high school, the financial decisions become immediately relevant to their near-future independence.
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
