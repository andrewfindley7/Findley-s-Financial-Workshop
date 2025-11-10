"use client";

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { PlusCircle, Trash2, UserPlus, PiggyBank, ShoppingBasket, Wallet } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Separator } from '@/components/ui/separator';
import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';

// --- Types ---
interface KidBudget {
  id: string;
  name: string;
  income: number;
  incomeFrequency: 'weekly' | 'monthly';
  savingsPercent: number;
}

const LOCAL_STORAGE_KIDS_BUDGET_KEY = 'finTrackPro_parentsGuide_kidsBudget';

// --- Helper Functions ---
const formatCurrency = (value: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);

// --- Main Component ---
export function KidsBudgetTool() {
  const [isMounted, setIsMounted] = useState(false);
  const [kids, setKids] = useState<KidBudget[]>([]);
  const [isAddKidDialogOpen, setIsAddKidDialogOpen] = useState(false);
  const [newKidName, setNewKidName] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    try {
      const savedData = localStorage.getItem(LOCAL_STORAGE_KIDS_BUDGET_KEY);
      if (savedData) {
        setKids(JSON.parse(savedData));
      }
    } catch (error) {
      console.error("Failed to load kids' budget data:", error);
    }
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem(LOCAL_STORAGE_KIDS_BUDGET_KEY, JSON.stringify(kids));
    }
  }, [kids, isMounted]);

  const addKid = () => {
    if (!newKidName.trim()) {
      toast({ title: "Child's name cannot be empty.", variant: "destructive" });
      return;
    }
    setKids(prev => [...prev, {
      id: `kid-${Date.now()}`,
      name: newKidName,
      income: 10,
      incomeFrequency: 'weekly',
      savingsPercent: 50
    }]);
    setNewKidName('');
    setIsAddKidDialogOpen(false);
  };

  const removeKid = (kidId: string) => {
    setKids(prev => prev.filter(k => k.id !== kidId));
  };

  const updateKidField = <K extends keyof KidBudget>(kidId: string, field: K, value: KidBudget[K]) => {
    setKids(prev => prev.map(kid =>
      kid.id === kidId ? { ...kid, [field]: value } : kid
    ));
  };

  if (!isMounted) return null;

  return (
    <>
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div className="flex-1">
              <CardTitle className="font-headline text-xl flex items-center">
                <Wallet className="mr-2 h-5 w-5 text-primary" />
                Kid's First Budget Tool
              </CardTitle>
              <CardDescription className="font-body">
                A simple tool to help children visualize how to manage their allowance.
              </CardDescription>
            </div>
            <div className="flex gap-2">
              <Dialog open={isAddKidDialogOpen} onOpenChange={setIsAddKidDialogOpen}>
                  <DialogTrigger asChild>
                      <Button><UserPlus className="mr-2 h-4 w-4" /> Add Child</Button>
                  </DialogTrigger>
                  <DialogContent>
                      <DialogHeader><DialogTitle>Add a New Child</DialogTitle></DialogHeader>
                      <div className="py-4">
                          <Label htmlFor="new-child-name">Child's Name</Label>
                          <Input id="new-child-name" value={newKidName} onChange={e => setNewKidName(e.target.value)} />
                      </div>
                      <DialogFooter>
                          <Button onClick={addKid}>Add Child</Button>
                      </DialogFooter>
                  </DialogContent>
              </Dialog>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {kids.length === 0 ? (
            <div className="text-center text-sm text-muted-foreground py-10 border-2 border-dashed rounded-lg">
              <p>No children added yet.</p>
              <Button variant="link" onClick={() => setIsAddKidDialogOpen(true)}>Click here to add your first child.</Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {kids.map(kid => {
                const savingsAmount = kid.income * (kid.savingsPercent / 100);
                const spendingAmount = kid.income - savingsAmount;
                return (
                  <Card key={kid.id} className="bg-muted/30">
                    <CardHeader className="flex flex-row items-center justify-between py-3 px-4">
                      <h3 className="text-lg font-semibold">{kid.name}'s Budget</h3>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive" onClick={() => removeKid(kid.id)}><Trash2 className="h-4 w-4" /></Button>
                    </CardHeader>
                    <CardContent className="px-4 pb-4 space-y-4">
                      <div className="grid grid-cols-2 gap-2">
                          <div>
                              <Label className="text-xs">Income</Label>
                              <Input type="number" value={kid.income} onChange={e => updateKidField(kid.id, 'income', Number(e.target.value))} className="h-8"/>
                          </div>
                           <div>
                              <Label className="text-xs">Frequency</Label>
                              <Select value={kid.incomeFrequency} onValueChange={(v: 'weekly'|'monthly') => updateKidField(kid.id, 'incomeFrequency', v)}>
                                  <SelectTrigger className="h-8"><SelectValue /></SelectTrigger>
                                  <SelectContent>
                                      <SelectItem value="weekly">Weekly</SelectItem>
                                      <SelectItem value="monthly">Monthly</SelectItem>
                                  </SelectContent>
                              </Select>
                          </div>
                      </div>
                      <div className="text-center font-semibold">Total {kid.incomeFrequency} Income: {formatCurrency(kid.income)}</div>
                      <Separator />
                      <div>
                          <div className="flex justify-between items-center mb-2">
                              <Label>Save / Spend Allocation</Label>
                              <span className="text-xs font-mono">{kid.savingsPercent}% Save / {100 - kid.savingsPercent}% Spend</span>
                          </div>
                          <Slider
                              defaultValue={[kid.savingsPercent]}
                              value={[kid.savingsPercent]}
                              max={100}
                              step={5}
                              onValueChange={(value) => updateKidField(kid.id, 'savingsPercent', value[0])}
                          />
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-center">
                          <div className="p-3 bg-green-100/60 dark:bg-green-900/40 rounded-md">
                              <PiggyBank className="mx-auto h-6 w-6 text-green-700 dark:text-green-300"/>
                              <p className="text-sm font-semibold mt-1">Save</p>
                              <p className="text-lg font-bold text-green-600 dark:text-green-400">{formatCurrency(savingsAmount)}</p>
                          </div>
                          <div className="p-3 bg-blue-100/60 dark:bg-blue-900/40 rounded-md">
                              <ShoppingBasket className="mx-auto h-6 w-6 text-blue-700 dark:text-blue-300"/>
                              <p className="text-sm font-semibold mt-1">Spend</p>
                              <p className="text-lg font-bold text-blue-600 dark:text-blue-400">{formatCurrency(spendingAmount)}</p>
                          </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </CardContent>
      </Card>
    </>
  );
}
