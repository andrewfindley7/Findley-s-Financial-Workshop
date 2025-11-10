'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { FileText, Users, Shield, Stethoscope, Briefcase, Info, ArrowRight, CheckCircle, Target, UserCheck, Umbrella, Landmark } from 'lucide-react';
import Link from 'next/link';

const coreComponents = [
  {
    icon: FileText,
    title: "Last Will and Testament",
    description: "A legal document that outlines your wishes for how your property and assets should be distributed after your death. It also allows you to name guardians for any minor children. Without a will, the state decides how to distribute your assets.",
  },
  {
    icon: Users,
    title: "Trust",
    description: "A legal arrangement where one party (the trustee) holds assets on behalf of a beneficiary. A key benefit of a trust is that it can bypass the lengthy and public probate court process, allowing for a faster and more private transfer of assets.",
  },
  {
    icon: Briefcase,
    title: "Durable Power of Attorney for Finances",
    description: "This document designates a person (your 'agent' or 'attorney-in-fact') to manage your financial affairs if you become incapacitated and unable to make decisions for yourself.",
  },
  {
    icon: Stethoscope,
    title: "Advance Healthcare Directive (Living Will)",
    description: "This outlines your wishes for medical treatment in end-of-life situations if you are unable to communicate them yourself. It often includes a 'Durable Power of Attorney for Healthcare,' which names a person to make medical decisions for you.",
  },
];

export default function EstatePlanningGuidePage() {
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
        <h1 className="text-3xl font-bold font-headline">Estate Planning Basics</h1>
        <p className="text-muted-foreground mt-2">Learn the basics of ensuring your assets are managed and distributed according to your wishes.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Umbrella className="h-4 w-4" />
          <AlertTitle className="font-headline">Writing the Instruction Manual for Your Financial Legacy</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>Estate planning is not just for the wealthy; it is for everyone. It is the process of arranging for the management and disposal of your assets during your life and after your death, while minimizing potential taxes and legal complications.</p>
            <p className="font-semibold">A good estate plan ensures that your wishes are carried out, your loved ones are provided for, and the transfer of your assets is as smooth and efficient as possible.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">The Core Components of an Estate Plan</CardTitle>
            <CardDescription>A comprehensive plan is an overarching strategy that typically includes these four key documents.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
            {coreComponents.map(item => (
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
        
        <Alert variant="default" className="bg-primary/5 border-primary/20">
            <UserCheck className="h-4 w-4" />
            <AlertTitle className="font-headline text-primary">Pro Tip: Check Your Beneficiary Designations</AlertTitle>
            <AlertDescription>
                <p>One of the most powerful and overlooked parts of estate planning is naming beneficiaries directly on your financial accounts. For accounts like 401(k)s, IRAs, life insurance policies, and annuities, the beneficiary designation overrides whatever is written in your will or trust.</p>
                <p className="mt-2">This means the funds pass directly to your named beneficiary, bypassing the probate process entirely. It is crucial to review and update these designations after major life events like marriage, divorce, or the birth of a child to ensure your assets go where you intend.</p>
            </AlertDescription>
        </Alert>

        <Alert variant="destructive" className="bg-amber-50 dark:bg-amber-900/20 border-amber-300 dark:border-amber-700">
          <Info className="h-4 w-4 text-amber-500" />
          <AlertTitle className="font-headline text-amber-900 dark:text-amber-200">Important Disclaimer</AlertTitle>
          <AlertDescription className="text-amber-800 dark:text-amber-300">
            <p>Estate planning laws are complex and vary by state. This lesson is for informational purposes only. It is crucial to consult with a qualified estate planning attorney to create a plan that is legally sound and tailored to your specific situation and wishes.</p>
          </AlertDescription>
        </Alert>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you understand this key concept, return to the main roadmap to continue building your financial knowledge.
                </CardDescription>
            </CardHeader>
            <CardContent>
                 <Button asChild>
                    <Link href={`/roadmaps/master-personal-finance${fromStep ? `?from=${fromStep}` : ''}`}>
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
