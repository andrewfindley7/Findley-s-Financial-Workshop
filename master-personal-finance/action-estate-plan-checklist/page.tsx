'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Brain, CheckCircle, ArrowRight, UserCheck, FileSearch, Info } from 'lucide-react';
import Link from 'next/link';

export default function ActionEstatePlanChecklistPage() {
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
        <h1 className="text-3xl font-bold font-headline">Action: Your Estate Plan Checklist</h1>
        <p className="text-muted-foreground mt-2">Take the first organizational steps toward creating a comprehensive estate plan.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Brain className="h-4 w-4" />
          <AlertTitle className="font-headline">From Abstract to Action</AlertTitle>
          <AlertDescription className="prose prose-sm max-w-none dark:prose-invert">
            <p>Estate planning can feel overwhelming, which leads many people to put it off. This exercise is designed to break that inertia. By completing these two simple organizational tasks, you are not creating a legal document, but you are doing 90% of the foundational work required. This makes the process of working with an attorney far more efficient and less stressful.</p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
                <FileSearch className="mr-2 h-5 w-5 text-primary"/>
                Action 1: Create a Master Document
            </CardTitle>
            <CardDescription>In a secure digital document or physical notebook, list the following:</CardDescription>
          </CardHeader>
          <CardContent>
             <ul className="list-disc pl-5 space-y-3 text-sm">
                <li><strong>Key Assets:</strong> List every major financial account you own (checking, savings, 401(k)s, IRAs, brokerage accounts, HSAs). Include the institution name (e.g., "Fidelity," "Chase Bank").</li>
                <li><strong>Key Liabilities:</strong> List all major debts (mortgage, car loans, student loans).</li>
                <li><strong>Digital Life:</strong> List important online accounts (e.g., email, cloud storage, social media). For security, do not write down passwords.</li>
                <li><strong>Intended Beneficiaries:</strong> For each major asset, write down who you would want to inherit it.</li>
             </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center">
                <UserCheck className="mr-2 h-5 w-5 text-primary"/>
                Action 2: Locate Existing Documents & Check Beneficiaries
            </CardTitle>
            <CardDescription>Gather what you already have and ensure it is up to date.</CardDescription>
          </CardHeader>
          <CardContent>
             <ul className="list-disc pl-5 space-y-3 text-sm">
                <li><strong>Physical Documents:</strong> Find any existing will, trust, or power of attorney documents you may have. Note their date and location. If they are more than 5 years old or predate a major life event (marriage, divorce, birth of a child), they need to be reviewed.</li>
                <li><strong>Beneficiary Designations:</strong> This is critically important. Log into each of your retirement accounts (401(k), IRA) and life insurance policies. Check who is listed as the primary and contingent beneficiaries. These designations override your will. Ensure they reflect your current wishes.</li>
             </ul>
          </CardContent>
        </Card>
        
        <Alert variant="default" className="bg-green-500/10 border-green-500/20">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertTitle className="text-green-700 dark:text-green-300 font-semibold">You've Done the Hard Part!</AlertTitle>
            <AlertDescription className="text-green-600 dark:text-green-400">
               With these documents and lists organized, you are now fully prepared to meet with an estate planning attorney. You have transformed an abstract, daunting task into a simple, manageable project.
            </AlertDescription>
        </Alert>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you have organized your financial life, return to the main roadmap to continue your journey.
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
