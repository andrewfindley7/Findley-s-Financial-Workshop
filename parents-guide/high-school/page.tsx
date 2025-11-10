'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { GraduationCap, Lightbulb, TrendingUp, ArrowRight, ToyBrick, Eye, Brain, Scale, Target, Calculator, ShoppingCart, Percent, Wallet, Banknote, Briefcase, CreditCard, Rocket, Search, PiggyBank, FileText, CheckCircle, HandCoins, User, MessageSquare, Info } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const coreConcepts = [
  {
    icon: Wallet,
    title: "Independent Budgeting & Banking",
    description: "Transitioning from a parent-managed allowance to independently managing income from a job, a real checking account, and a debit card."
  },
  {
    icon: CreditCard,
    title: "Building & Understanding Credit",
    description: "Learning what a credit score is, how it's calculated, the responsible use of credit cards, and the long-term impact of debt."
  },
  {
    icon: TrendingUp,
    title: "Introduction to Real Investing",
    description: "Moving from theory to practice by understanding different investment accounts (like a Roth IRA) and simple investment choices (like index funds)."
  },
  {
    icon: GraduationCap,
    title: "Financing Higher Education & Major Goals",
    description: "Understanding the cost of college, the FAFSA, different types of student loans, and how to evaluate the return on investment of a degree."
  },
  {
    icon: Percent,
    title: "Understanding Basic Taxes",
    description: "Learning about income tax, withholdings (W-4), and how a paycheck is calculated."
  },
  {
    icon: FileText,
    title: "Contract Literacy",
    description: "Recognizing the importance of reading the fine print for cell phone plans, apartment leases, or car loans."
  },
];

const activities = [
  {
    id: "activity1",
    title: "The First Paycheck Breakdown",
    icon: FileText,
    description: "Demystify their first real paycheck and explain the difference between what they earn and what they take home.",
    steps: [
        "When they get their first pay stub, sit down with them and look at it together.",
        "Explain 'Gross Pay' (the total amount earned) vs. 'Net Pay' (the take-home amount after deductions).",
        "Point out the key deductions: Federal and State income tax (money for government services), and especially FICA (Social Security & Medicare), explaining it's a tax for their future retirement and health benefits.",
        "Show them a W-4 form and explain its purpose: to tell their employer how much tax to 'withhold' from each check. Explain that getting a huge refund isn't a bonus; it's an interest-free loan you gave the government."
    ],
    primaryLesson: "The amount on your job offer is not the amount that hits your bank account. Understanding taxes and deductions is a fundamental part of managing your income and creating a realistic budget.",
    gaugeUnderstanding: "Your teen can explain why their net pay is lower than their gross pay. They use the net pay figure when thinking about their budget, not the gross hourly wage. They might even complain about taxes, which is a sure sign of understanding!"
  },
  {
    id: "activity2",
    title: "The First Job Budget",
    icon: Calculator,
    description: "Create a real-world budget based on their first part-time job income.",
    steps: [
      "Help them create a zero-based budget using their Net Pay. List their income, then allocate money to categories: savings for a car/college, gas, car insurance, cell phone bill, and personal spending money.",
      "Open a student checking account with them. Teach them how to use a debit card responsibly and check their balance online.",
      "Review the budget monthly. Are they staying on track? Do they need to adjust their spending or savings goals?"
    ],
    primaryLesson: "Real-world income has deductions. A budget is the #1 tool for managing your own money and ensuring you are saving for future goals, not just spending what you earn. This is the core skill of financial independence.",
    gaugeUnderstanding: "Your teen can check their own bank balance and make spending decisions based on what's available in their budget categories. They can have a conversation with you about adjusting the budget rather than just asking for more money when they overspend."
  },
  {
    id: "activity3",
    title: "The Credit Responsibility Talk",
    icon: CreditCard,
    description: "Prepare them for the world of credit before they get their first offer.",
    steps: [
      "Add them as an authorized user on one of your credit cards with a low limit. Let them make a few small, planned purchases and have them pay you back immediately from their checking account.",
      "Explain that this builds their credit history. Use an online simulator to show how a credit score is impacted by on-time payments (good) and carrying a high balance (bad).",
      "Emphasize the golden rule: Treat a credit card like a debit card. Only use it for budgeted purchases you can pay off in full every month.",
      "Show them your credit card statement, pointing out the interest charges for not paying the full balance. Contrast the APR (e.g., 22%) with a savings account APY (e.g., 4%)."
    ],
    primaryLesson: "A credit card is a powerful tool for building a good credit score, which is essential for future loans (car, mortgage). However, it is a dangerous form of debt if not paid off in full every month. Understanding interest is key to avoiding debt traps.",
    gaugeUnderstanding: "Your teen can explain why paying the full credit card balance is important. They use the authorized user card responsibly for pre-approved purchases and pay you back on time without prompting. They start asking questions about their credit score."
  },
  {
    id: "activity4",
    title: "Opening and Funding a Roth IRA",
    icon: PiggyBank,
    description: "Take the first step into real, long-term investing with a powerful retirement account.",
    steps: [
      "Explain that a Roth IRA is a special retirement account where money grows completely tax-free. (They must have earned income to contribute).",
      "Help them open a Custodial Roth IRA at a major brokerage firm (like Fidelity, Vanguard, or Schwab).",
      "Have them contribute a small amount from their job earnings, even just $50 or $100.",
      "Help them invest that money in a simple, low-cost S&P 500 or Total Stock Market index fund. Explain that they now own tiny pieces of hundreds of the biggest companies.",
      "Show them a compound interest calculator to visualize how that small amount could grow into a huge sum by the time they retire. Stress that stocks are for long-term growth and their value will go up and down; this money should be left alone for many years."
    ],
    primaryLesson: "Investing is the most powerful way to build long-term wealth. Starting early, even with small amounts, is a massive advantage due to compound interest. A Roth IRA is one of the best tools for young people to save for retirement.",
    gaugeUnderstanding: "Your teen shows excitement about their investment, even if it's small. They can explain that the money is for 'future me' and understands it will go up and down but is meant for long-term growth. They might ask about contributing more from their next paycheck."
  },
  {
    id: "activity5",
    title: "The College & Career ROI Analysis",
    icon: GraduationCap,
    description: "Analyze the real costs of higher education and alternative paths, treating it like a major financial decision.",
    steps: [
        "Together, look up the 'all-in' cost (tuition, fees, room & board) for a few colleges they are interested in.",
        "Introduce the FAFSA and explain its role in determining aid. Discuss scholarships and grants as 'free money' for education.",
        "Use a student loan calculator to show the potential monthly payment after graduation for different loan amounts. Compare this to the average starting salary for a field they are interested in.",
        "Crucially, research alternative paths. Look up the average salary and training costs for in-demand skilled trades (electrician, plumber, welder) or tech certifications (e.g., cybersecurity, cloud computing). Discuss entrepreneurship as another valid path.",
        "Discuss the concept of 'Return on Investment' (ROI). Is taking on $100,000 in debt for a degree with a $40,000 average starting salary a good financial decision compared to a two-year trade school program that costs $20,000 and leads to a $60,000 starting salary?"
    ],
    primaryLesson: "Post-high school education is an investment in your future earning power. The goal is to choose a path with a positive financial ROI, whether that's a traditional university, trade school, or another skilled profession. Minimize debt to maximize your freedom after graduation.",
    gaugeUnderstanding: "Your teen starts asking more specific questions about costs, scholarships, and potential career earnings for various paths. They can weigh the pros and cons of different educational and career tracks, not just a single, default path."
  },
  {
    id: "activity6",
    title: "First Contract Awareness",
    icon: FileText,
    description: "Teach them to read the fine print before they sign on the dotted line for a cell phone, apartment, or car.",
    steps: [
        "Use a real-world example, like your own cell phone bill or a sample apartment lease online.",
        "Show them the key sections: the monthly cost, the length of the contract (the 'term'), and, most importantly, the penalties for early termination.",
        "Discuss auto-renewal clauses. Explain how services can automatically renew if not cancelled, and how to set a calendar reminder to re-evaluate before the renewal date.",
        "Role-play a scenario: 'What happens if you sign this 12-month lease but get a job offer in another city after six months? What would it cost you?'"
    ],
    primaryLesson: "A contract is a legally binding agreement. Understanding the terms, especially penalties and renewal policies, is a critical consumer skill that protects you from unexpected costs and commitments. 'Reading the fine print' is not optional.",
    gaugeUnderstanding: "When presented with a new contract or agreement (like for a new app or service), your teen shows an interest in understanding the key terms before agreeing. They might ask, 'What happens if I want to cancel?'"
  }
];

export default function HighSchoolPage() {
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
            <h1 className="text-3xl font-bold font-headline">Ages 15-18: High School</h1>
            <p className="text-muted-foreground mt-2">Bridging the gap to financial independence with practical skills in budgeting, credit, investing, and planning for the future.</p>
        </div>
      <div className="space-y-6">
        <Alert>
          <GraduationCap className="h-4 w-4" />
          <AlertTitle className="font-headline">The Goal for this Age</AlertTitle>
          <AlertDescription>
            This is the final and most critical phase of financial education before adulthood. The goal is to provide teens with direct, hands-on experience with the real financial tools they will be using in a few short years. These lessons should focus on building responsible habits and a framework for making major life decisions.
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
              <Lightbulb className="mr-2 h-5 w-5 text-primary" />
              Core Concepts to Introduce
            </CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
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
              Practical Activities & Real-World Discussions
            </CardTitle>
            <CardDescription>Use these activities to simulate and prepare for real financial responsibilities.</CardDescription>
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
        
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
              <MessageSquare className="mr-2 h-5 w-5 text-primary" />
              Reflective Discussion: Money & Identity
            </CardTitle>
             <CardDescription>Use these questions to connect financial habits to life goals.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Ask your teen: "What kind of financial life do you want to have in your 20s? Do you want the freedom to travel, to start a business, or to not stress about rent? The habits you build with your first paycheck today are the habits that will make that future possible." This strengthens their internal motivation by linking boring tasks like budgeting to exciting future possibilities.</p>
          </CardContent>
        </Card>
        
        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Graduation</CardTitle>
                <CardDescription>
                    You've given them the foundation. The rest of their financial journey is up to them, but they are now prepared.
                </CardDescription>
            </CardHeader>
            <CardContent>
                 <Button asChild>
                    <Link href={`/roadmaps/finance-for-parents${fromStep ? `?from=${fromStep}`: ''}`}>
                        Return to the Finance For Parents Roadmap
                    </Link>
                </Button>
            </CardContent>
        </Card>

      </div>
    </>
  );
}
    