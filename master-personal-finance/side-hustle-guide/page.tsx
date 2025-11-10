
'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Briefcase, Lightbulb, User, Clock, Package, DollarSign, Percent, FileText, Brain, ThumbsUp, ThumbsDown, Info, Calculator, Palette, Shirt, ArrowRight, ShieldOff, Zap } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const hustleTypes = [
  {
    icon: Brain,
    title: "Leverage Your Skills",
    description: "Monetize what you already know. This is often the fastest path to meaningful income because you're selling your expertise.",
    examples: "Freelance writing, graphic design, web development, tutoring, consulting, virtual assistance, bookkeeping.",
    pros: ["High potential hourly rates", "Often remote and flexible", "Builds a professional portfolio"],
    cons: ["Requires finding clients (marketing)", "Income can be inconsistent at first"]
  },
  {
    icon: Clock,
    title: "The Gig Economy",
    description: "Use apps to find on-demand work. This is the most flexible option for fitting work into small pockets of time.",
    examples: "Ridesharing (Uber, Lyft), food delivery (DoorDash), tasks (TaskRabbit), pet sitting (Rover).",
    pros: ["Extremely flexible hours", "Low barrier to entry (easy to start)", "Immediate payment"],
    cons: ["Generally lower hourly rates", "Can involve wear and tear on your vehicle"]
  },
  {
    icon: Package,
    title: "Sell a Product",
    description: "Create or curate physical or digital products to sell online or locally.",
    examples: "Etsy shop (crafts, printables), reselling items on eBay, creating digital templates, writing an eBook.",
    pros: ["Can be scaled (sell many while you sleep)", "Builds a brand"],
    cons: ["Requires upfront time or money to create products", "Inventory management can be tricky", "Marketing is essential"]
  }
];

const formatCurrency = (value: number) => {
  return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};

export default function SideHustleGuidePage() {
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
        <h1 className="text-3xl font-bold font-headline">Side Hustle Basics</h1>
        <p className="text-muted-foreground mt-2">A practical lesson to starting a side business to accelerate your financial goals.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Briefcase className="h-4 w-4" />
          <AlertTitle className="font-headline">Why Start a Side Hustle?</AlertTitle>
          <AlertDescription>
            <div className="prose prose-sm max-w-none dark:prose-invert">
                <p>A side hustle is a way to make money outside of your main job. It's not just about earning extra cash; it's about taking control of your income and creating new opportunities. A side hustle can help you:</p>
                <ul className="list-disc pl-5">
                <li>Pay off debt faster.</li>
                <li>Reach a major savings goal (like a down payment) sooner.</li>
                <li>Diversify your income streams, making you less reliant on a single employer.</li>
                <li>Develop new skills and potentially pivot to a new career.</li>
                </ul>
            </div>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
              <Lightbulb className="mr-2 h-5 w-5 text-primary" />
              Finding Your Idea: A Decision Framework
            </CardTitle>
            <CardDescription>The best side hustle for you aligns with your goals, skills, and available time. Ask yourself these questions to find your path.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
              <div className="p-4 border rounded-lg bg-muted/40">
                  <h4 className="font-semibold text-base mb-2">Step 1: What is your primary goal?</h4>
                  <p className="text-sm text-muted-foreground"><strong>Fast, flexible cash:</strong> If you need money now and have small pockets of time, the <strong>Gig Economy</strong> is your best bet.</p>
                  <p className="text-sm text-muted-foreground"><strong>High income potential:</strong> If you want to earn a high hourly rate, <strong>Leveraging Your Skills</strong> is the most direct path.</p>
                  <p className="text-sm text-muted-foreground"><strong>Long-term scalable growth:</strong> If you want to build an asset that can make money while you sleep, focus on <strong>Selling a Product</strong> (especially digital products).</p>
              </div>
              <div className="p-4 border rounded-lg bg-muted/40">
                  <h4 className="font-semibold text-base mb-2">Step 2: What is your most valuable asset?</h4>
                   <p className="text-sm text-muted-foreground"><strong>Your Skills:</strong> Are you a great writer, designer, or coder? Are you extremely organized? Turn your professional skills into a freelance business.</p>
                   <p className="text-sm text-muted-foreground"><strong>Your Time:</strong> Do you have free evenings or weekends? Use that time for gig work like delivery or pet sitting.</p>
                   <p className="text-sm text-muted-foreground"><strong>Your Creativity:</strong> Do you have a knack for crafts, design, or writing? Create and sell a product on a platform like Etsy.</p>
              </div>
          </CardContent>
          <CardFooter>
             <p className="text-xs text-muted-foreground">Use these answers to explore the three main types of side hustles below.</p>
          </CardFooter>
        </Card>
        
         <div className="grid md:grid-cols-3 gap-4">
            {hustleTypes.map(type => (
              <Card key={type.title} className="flex flex-col">
                <CardHeader>
                    <div className="flex items-center mb-2">
                        <type.icon className="mr-2 h-5 w-5 text-primary/80" />
                        <CardTitle className="font-headline">{type.title}</CardTitle>
                    </div>
                    <CardDescription>{type.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow space-y-3">
                    <p className="text-xs font-semibold text-muted-foreground">Examples:</p>
                    <p className="text-xs italic">{type.examples}</p>
                    <Separator className="my-3"/>
                    <div className="text-xs space-y-2">
                        <p className="flex items-start font-semibold text-green-700 dark:text-green-300"><ThumbsUp className="h-3 w-3 mr-1.5 flex-shrink-0 mt-0.5"/>{type.pros.join(', ')}</p>
                        <p className="flex items-start font-semibold text-red-700 dark:text-red-300"><ThumbsDown className="h-3 w-3 mr-1.5 flex-shrink-0 mt-0.5"/>{type.cons.join(', ')}</p>
                    </div>
                </CardContent>
              </Card>
            ))}
          </div>

        <Card className="border-destructive/50 bg-destructive/5">
            <CardHeader>
                <CardTitle className="font-headline text-xl text-destructive flex items-center">
                    <ShieldOff className="mr-2 h-5 w-5"/> Pitfalls & Red Flags to Avoid
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="p-3 border-b border-destructive/20 last:border-b-0">
                    <h4 className="font-semibold">Get-Rich-Quick Schemes & MLMs</h4>
                    <p className="text-sm text-muted-foreground">Be wary of any "opportunity" that requires you to pay a large upfront fee for training or inventory, or one that focuses heavily on recruiting others rather than selling a product. Real businesses create value; they don't charge you to participate.</p>
                </div>
                <div className="p-3 border-b border-destructive/20 last:border-b-0">
                    <h4 className="font-semibold">Overspending Before You Validate</h4>
                    <p className="text-sm text-muted-foreground">Don't spend hundreds on a fancy website, logo, or bulk inventory before you've made your first sale. Start with a Minimum Viable Product (MVP)—the simplest version of your idea—to see if people will actually pay for it.</p>
                </div>
                <div className="p-3 border-b border-destructive/20 last:border-b-0">
                    <h4 className="font-semibold">Ignoring Burnout</h4>
                    <p className="text-sm text-muted-foreground">A side hustle shouldn't destroy your mental health or primary job performance. If you're consistently working over 15-20 hours a week on your side hustle without a clear financial return or enjoyment, it may be time to reassess if the hustle is right for you.</p>
                </div>
            </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
              <Calculator className="mr-2 h-5 w-5 text-primary" />
              The Math Behind a Side Hustle: Three Examples
            </CardTitle>
            <CardDescription>
              Understanding the potential profit is key. Here's how to break down the numbers for a few common side hustles. Remember to set aside money for taxes from your net profit!
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 border rounded-lg bg-muted/30">
              <h3 className="font-semibold text-lg flex items-center mb-2">
                <Palette className="mr-3 h-5 w-5 text-primary"/> Example 1: The Candlemaker
              </h3>
              <div className="grid md:grid-cols-2 gap-x-6 gap-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Unit Economics (Cost per Candle):</h4>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Wax (1 lb makes ~20oz): $10/lb -&gt; $0.50/oz -&gt; <strong>$4.00</strong> for an 8oz candle</li>
                    <li>Jar & Lid: <strong>$2.50</strong></li>
                    <li>Wick: <strong>$0.25</strong></li>
                    <li>Fragrance Oil: <strong>$0.75</strong></li>
                    <li>Label: <strong>$0.50</strong></li>
                    <li className="font-bold border-t mt-1 pt-1">Total Cost per Candle: ~{formatCurrency(8.00)}</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Profit & Monthly Goal:</h4>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Sale Price per Candle: <strong>{formatCurrency(24.00)}</strong></li>
                    <li className="font-bold">Gross Profit per Candle: {formatCurrency(24.00 - 8.00)} = {formatCurrency(16.00)}</li>
                    <Separator className="my-2"/>
                    <li>Monthly Sales Goal: 50 Candles</li>
                    <li>Monthly Gross Revenue: 50 x $24 = {formatCurrency(1200)}</li>
                    <li>Monthly Cost of Goods: 50 x $8 = {formatCurrency(400)}</li>
                    <li className="font-bold border-t mt-1 pt-1">Estimated Monthly Profit: {formatCurrency(1200 - 400)}</li>
                  </ul>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-3"><strong>Key Takeaway:</strong> For product-based businesses, understanding your cost per unit is the most critical step. This doesn't include one-time startup costs for tools like a pouring pot or thermometer.</p>
            </div>

            <div className="p-4 border rounded-lg bg-muted/30">
              <h3 className="font-semibold text-lg flex items-center mb-2">
                <Shirt className="mr-3 h-5 w-5 text-primary"/> Example 2: The T-Shirt Designer (Print-on-Demand)
              </h3>
              <div className="grid md:grid-cols-2 gap-x-6 gap-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Unit Economics (per T-Shirt):</h4>
                   <p className="text-sm text-muted-foreground mb-2">Using a service like Printful or Printify means no upfront inventory costs.</p>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Base Cost of T-Shirt (from provider): <strong>{formatCurrency(13.00)}</strong></li>
                    <li>Shipping Cost (charged to you, passed to customer): ~$5.00</li>
                    <li>Marketplace Fee (e.g., Etsy): ~6.5% of total sale price</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Profit & Monthly Goal:</h4>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>You set the Sale Price: <strong>{formatCurrency(28.00)}</strong> (+ shipping)</li>
                    <li>Marketplace Fee: $28.00 * 0.065 = ~{formatCurrency(1.82)}</li>
                    <li className="font-bold">Profit per Shirt: $28.00 - $13.00 - $1.82 = {formatCurrency(13.18)}</li>
                    <Separator className="my-2"/>
                     <li>Monthly Sales Goal: 40 Shirts</li>
                    <li className="font-bold border-t mt-1 pt-1">Estimated Monthly Profit: 40 x {formatCurrency(13.18)} = {formatCurrency(527.20)}</li>
                  </ul>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-3"><strong>Key Takeaway:</strong> Print-on-demand has lower risk and no inventory, but also lower profit margins. Success depends heavily on good design and marketing to drive sales volume.</p>
            </div>
            
            <div className="p-4 border rounded-lg bg-muted/30">
              <h3 className="font-semibold text-lg flex items-center mb-2">
                <Brain className="mr-3 h-5 w-5 text-primary"/> Example 3: The Freelance Content Creator
              </h3>
              <div className="grid md:grid-cols-2 gap-x-6 gap-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Economics (Service-Based):</h4>
                   <p className="text-sm text-muted-foreground mb-2">Here, you're selling your time and skill, so costs are minimal.</p>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Monthly Software Costs (e.g., writing tools, Adobe): <strong>{formatCurrency(30)}</strong></li>
                    <li>One-time Laptop/Computer Cost (already owned): <strong>$0</strong></li>
                    <li className="font-bold border-t mt-1 pt-1">Total Recurring Cost: {formatCurrency(30)}/month</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Profit & Monthly Goal:</h4>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>You land one client needing 4 blog posts per month.</li>
                    <li>You charge <strong>{formatCurrency(150)} per blog post</strong>.</li>
                    <Separator className="my-2"/>
                    <li>Monthly Gross Revenue: 4 x $150 = {formatCurrency(600)}</li>
                    <li>Monthly Costs: {formatCurrency(30)}</li>
                    <li className="font-bold border-t mt-1 pt-1">Estimated Monthly Profit: {formatCurrency(600 - 30)}</li>
                  </ul>
                </div>
              </div>
               <p className="text-xs text-muted-foreground mt-3"><strong>Key Takeaway:</strong> Skill-based services have very high profit margins but are limited by the number of hours you can work. The key to growth is increasing your hourly rate or efficiency.</p>
            </div>
          </CardContent>
        </Card>


        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
              <Clock className="mr-2 h-5 w-5 text-primary" />
              Managing Your Time
            </CardTitle>
            <CardDescription>Balancing a full-time job with a side hustle requires discipline and a plan.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 prose prose-sm max-w-none dark:prose-invert">
             <p><strong>Start Small:</strong> Don't commit to 20 hours a week from the start. Begin with a manageable 3-5 hours per week to build momentum and avoid burnout.</p>
             <p><strong>Schedule It:</strong> Treat your side hustle time like a real appointment. Block it out on your calendar so it doesn't get pushed aside by other things.</p>
             <p><strong>Find Your 'Time Pockets':</strong> Can you wake up an hour earlier? Use your lunch break? Dedicate two hours on a Saturday morning? Identify underutilized pockets of time.</p>
             <p><strong>Focus on High-Value Tasks:</strong> When you do work, focus on the activities that actually make you money (e.g., client work, creating the product) rather than administrative tasks (like designing a logo for the tenth time).</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
              <FileText className="mr-2 h-5 w-5 text-primary" />
              The Money Part: Taxes and Pricing
            </CardTitle>
            <CardDescription>Understanding the financial side is critical to making your side hustle profitable.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
                <h4 className="font-semibold text-lg flex items-center mb-2"><Percent className="mr-2 h-4 w-4"/>Understanding Your Taxes</h4>
                <p className="text-sm text-muted-foreground mb-3">When you have a side hustle, you're considered self-employed. This means taxes aren't automatically withheld from your earnings.</p>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li><strong>Set Aside Money for Taxes:</strong> A good rule of thumb is to set aside **25-35%** of every payment you receive into a separate savings account specifically for taxes.</li>
                    <li><strong>Quarterly Estimated Taxes:</strong> If you expect to owe more than $1,000 in tax for the year, you're generally required to pay estimated taxes to the IRS each quarter.</li>
                    <li><strong>Track Your Expenses:</strong> Keep records of all your business-related expenses (e.g., software, supplies, mileage). These can often be deducted from your income to lower your tax bill.</li>
                </ul>
                <Alert variant="destructive" className="mt-4">
                    <Info className="h-4 w-4" />
                    <AlertTitle>Important</AlertTitle>
                    <AlertDescription>Tax laws are complex. It is highly recommended to consult with a Certified Public Accountant (CPA) to understand your specific obligations.</AlertDescription>
                </Alert>
            </div>
            <Separator />
            <div>
                 <h4 className="font-semibold text-lg flex items-center mb-2"><DollarSign className="mr-2 h-4 w-4"/>How to Price Your Service</h4>
                <p className="text-sm text-muted-foreground mb-3">Pricing can be difficult. Here are a few ways to think about it.</p>
                 <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li><strong>Look at the Market:</strong> What are other freelancers or businesses charging for a similar service? This gives you a baseline.</li>
                    <li><strong>Value-Based Pricing:</strong> Instead of your time, think about the value you're providing. A logo you design in 2 hours might be worth thousands of dollars to a new business.</li>
                    <li><strong>Calculate Your Hourly Rate:</strong> As a starting point, decide on a desired hourly rate (e.g., $50/hour). If a project will take you 10 hours, your price is $500. Remember to factor in time for administrative tasks, not just the creative work.</li>
                </ul>
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
