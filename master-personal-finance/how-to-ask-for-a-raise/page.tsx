'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { CircleDollarSign, Calendar, FileText, BarChart3, MessageSquare, ThumbsUp, ThumbsDown, Lightbulb, ArrowRight, Info } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const whenToAsk = [
  {
    icon: ThumbsUp,
    title: "After a Major Accomplishment",
    description: "Did you just lead a successful project, exceed your sales targets, or save the company a significant amount of money? This is a prime time to make your case, as your value is clearly visible."
  },
  {
    icon: Calendar,
    title: "During Your Performance Review",
    description: "This is a natural time for a salary discussion. Ensure you give your manager a heads-up that you'd like to discuss your compensation as part of the review, so they can come prepared."
  },
  {
    icon: Lightbulb,
    title: "When You've Taken on More Responsibility",
    description: "If your role has significantly expanded or you've started managing new projects or people without a title change, you have a strong case that your compensation should reflect this new level of work."
  }
];

const howToPrepare = [
  {
    title: "Document Your Accomplishments",
    description: "Don't rely on your manager's memory. Keep a 'brag file' throughout the year. Track your successes with specific metrics: 'Increased efficiency by 15%,' 'Managed a project that came in $10,000 under budget,' 'Grew my client accounts by 25%.'",
    icon: FileText
  },
  {
    title: "Research Market Rates",
    description: "Use websites like Glassdoor, Levels.fyi, and Payscale to find out the market rate for your role, experience level, and location. This grounds your request in data, not just what you want.",
    icon: BarChart3
  },
  {
    title: "Prepare Your 'Pitch'",
    description: "Structure your argument. Start with your enthusiasm for the company, then present your documented accomplishments, followed by your market research, and finally, make your specific request. Practice it out loud.",
    icon: MessageSquare
  },
];


export default function HowToAskForARaisePage() {
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
        <h1 className="text-3xl font-bold font-headline">How (and When) to Ask for a Raise</h1>
        <p className="text-muted-foreground mt-2">A practical lesson to preparing for and successfully navigating a salary negotiation.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <CircleDollarSign className="h-4 w-4" />
          <AlertTitle className="font-headline">A Powerful Financial Lever</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>Most people dread asking for a raise because it feels confrontational. But when done right, it’s not a conflict, it’s a business conversation about the value you create.</p>
            <p className="font-semibold">While compounding investments over time is the most powerful force for creating wealth, your income is the fuel for that engine. Consistently increasing your salary is one of the most impactful ways to accelerate your financial goals, as it allows you to acquire more income-producing assets, faster. This lesson is about preparing for that professional conversation.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">Part 1: The Right Timing</CardTitle>
            <CardDescription>Timing is crucial. Asking at the right moment can significantly increase your chances of success.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-3 gap-4">
            {whenToAsk.map(item => (
              <div key={item.title} className="p-4 border rounded-lg bg-card shadow-sm">
                <div className="flex items-center mb-2">
                  <item.icon className="mr-2 h-5 w-5 text-primary/80" />
                  <h3 className="font-semibold">{item.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">Part 2: The Preparation</CardTitle>
            <CardDescription>Success is born from preparation. Never go into a salary discussion unprepared.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
             {howToPrepare.map(item => (
                 <div key={item.title} className="flex items-start gap-4 p-4 border rounded-lg bg-muted/30">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-background">
                        <item.icon className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div>
                        <h4 className="font-semibold">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                </div>
             ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">Part 3: Making the Ask & Handling Outcomes</CardTitle>
            <CardDescription>How to approach the conversation and respond to the outcome, whatever it may be.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold">The Conversation:</h4>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-muted-foreground">
                <li>Schedule a dedicated meeting. Don't ambush your manager in the hallway.</li>
                <li>Start positively, expressing your enjoyment and commitment to your role and the company.</li>
                <li>Present your case calmly and confidently, using the accomplishments and data you prepared.</li>
                <li>State your desired salary or range clearly. For example: "Based on my contributions and the market data, I'm seeking a salary of $X."</li>
                <li>After you've made your case, stop talking. Give your manager time to process and respond.</li>
              </ul>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
               <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/20 border-green-200">
                  <h4 className="font-semibold flex items-center mb-2 text-green-700 dark:text-green-300">
                    If the answer is "Yes"
                  </h4>
                  <p className="text-sm text-muted-foreground">Thank them and ask for the new compensation details in writing. Clarify when the change will take effect.</p>
                </div>
                 <div className="p-4 border rounded-lg bg-orange-50 dark:bg-orange-900/20 border-orange-200">
                  <h4 className="font-semibold flex items-center mb-2 text-orange-700 dark:text-orange-300">
                    If the answer is "No" or "Maybe"
                  </h4>
                  <p className="text-sm text-muted-foreground">Stay professional. Ask, "What would I need to do to earn a raise in the future?" This shows you're proactive and creates a clear path forward. Request specific, measurable goals and a timeframe for a follow-up discussion (e.g., in 3 or 6 months).</p>
                </div>
            </div>
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
