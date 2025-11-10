"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, BookOpen, Pencil } from "lucide-react";
import Link from "next/link";
import React from "react";
import { DynamicIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";

const toolsData = {
    id: "parents-guide-tools-main",
    title: "Parent's Guide: Tools & Activities",
    description: "A collection of interactive tools and activities to help you teach your children essential money skills in a fun and engaging way.",
    icon: 'Wrench',
    tools: [
        {
            id: 'kids-budget-tool',
            title: "Kid's First Budget Tool",
            icon: 'Wallet',
            description: "A simple, visual tool to help children understand how to allocate their allowance or earnings between saving and spending.",
            link: '/education/parents-guide/tools-and-activities/kids-budget-tool',
        },
        {
            id: 'chore-tracker-tool',
            title: "Allowance & Chore Tracker",
            icon: 'Coins',
            description: "A tool to manage chores and teach your children the value of earning money through work.",
            link: '/education/parents-guide/tools-and-activities/chore-tracker',
        }
    ]
};

export default function ToolsAndActivitiesPage() {
  const searchParams = useSearchParams();
  const fromStep = searchParams.get('from');

  return (
    <div className="space-y-8">
      <div className="text-center">
        <DynamicIcon
          name={toolsData.icon}
          className="w-10 h-10 text-secondary mx-auto mb-2"
        />
        <h1 className="text-3xl font-bold font-headline">
          {toolsData.title}
        </h1>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          {toolsData.description}
        </p>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {toolsData.tools.map((tool) => (
              <Link key={tool.id} href={`${tool.link}${fromStep ? `?from=${fromStep}`: ''}`} className="group block">
                <Card className="flex flex-col h-full transition-all group-hover:border-primary/50 group-hover:shadow-md">
                  <CardHeader>
                     <div className="flex items-start gap-4">
                        <DynamicIcon name={tool.icon} className="w-8 h-8 text-secondary" />
                        <div>
                            <CardTitle className="font-headline text-xl">{tool.title}</CardTitle>
                            <CardDescription className="mt-1">{tool.description}</CardDescription>
                        </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow flex items-end">
                     <div className="text-sm font-medium text-primary flex items-center">
                        Open Tool <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                     </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Return to the main roadmap to continue learning how to teach your children about finance.
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
  );
}
