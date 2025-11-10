"use client";

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { PlusCircle, Trash2, Coins, UserPlus, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

// --- Types ---
interface Chore {
  id: string;
  description: string;
  value: number;
  frequency: 'daily' | 'weekly';
  isComplete: boolean;
}

interface Child {
  id: string;
  name: string;
  chores: Chore[];
}

const LOCAL_STORAGE_CHORES_KEY = 'finTrackPro_parentsGuide_choreTracker';

// --- Helper Functions ---
const formatCurrency = (value: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);

// --- Sub-components ---
const AddChoreDialog = ({ onAddChore }: { onAddChore: (chore: Omit<Chore, 'id' | 'isComplete'>) => void }) => {
  const [description, setDescription] = useState('');
  const [value, setValue] = useState<number | string>('');
  const [frequency, setFrequency] = useState<'daily' | 'weekly'>('daily');
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = () => {
    if (!description.trim()) return;
    onAddChore({ description, value: Number(value), frequency });
    setDescription('');
    setValue('');
    setFrequency('daily');
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="h-8"><PlusCircle className="mr-2 h-4 w-4" /> Add Chore</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add a New Chore</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-2">
          <div>
            <Label htmlFor="chore-description">Chore Description</Label>
            <Input id="chore-description" placeholder="e.g., Make bed" value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="chore-value">Earning Value</Label>
              <Input id="chore-value" type="number" placeholder="$0.50" value={value} onChange={(e) => setValue(e.target.value)} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="chore-frequency">Frequency</Label>
              <Select value={frequency} onValueChange={(val: 'daily' | 'weekly') => setFrequency(val)}>
                <SelectTrigger id="chore-frequency" className="w-full"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSubmit}>Add Chore</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

// --- Main Component ---
export function ChoreTracker() {
  const [isMounted, setIsMounted] = useState(false);
  const [children, setChildren] = useState<Child[]>([]);
  const [newChildName, setNewChildName] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    try {
      const savedData = localStorage.getItem(LOCAL_STORAGE_CHORES_KEY);
      if (savedData) {
        setChildren(JSON.parse(savedData));
      }
    } catch (error) {
      console.error("Failed to load chore data:", error);
    }
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem(LOCAL_STORAGE_CHORES_KEY, JSON.stringify(children));
    }
  }, [children, isMounted]);

  const addChild = () => {
    if (!newChildName.trim()) {
      toast({ title: "Child's name cannot be empty.", variant: "destructive" });
      return;
    }
    setChildren(prev => [...prev, { id: `child-${Date.now()}`, name: newChildName, chores: [] }]);
    setNewChildName('');
  };

  const removeChild = (childId: string) => {
    setChildren(prev => prev.filter(c => c.id !== childId));
  };

  const addChore = (childId: string, chore: Omit<Chore, 'id' | 'isComplete'>) => {
    setChildren(prev => prev.map(child =>
      child.id === childId
        ? { ...child, chores: [...child.chores, { ...chore, id: `chore-${Date.now()}`, isComplete: false }] }
        : child
    ));
  };
  
  const removeChore = (childId: string, choreId: string) => {
     setChildren(prev => prev.map(child =>
      child.id === childId
        ? { ...child, chores: child.chores.filter(c => c.id !== choreId) }
        : child
    ));
  };

  const toggleChoreCompletion = (childId: string, choreId: string) => {
    setChildren(prev => prev.map(child =>
      child.id === childId
        ? { ...child, chores: child.chores.map(chore => chore.id === choreId ? { ...chore, isComplete: !chore.isComplete } : chore) }
        : child
    ));
  };
  
  const resetCompletion = () => {
      setChildren(prev => prev.map(child => ({
          ...child,
          chores: child.chores.map(chore => ({ ...chore, isComplete: false }))
      })));
      toast({ title: "Chore Lists Reset", description: "All chores have been marked as incomplete for the new week." });
  };

  const calculateEarnings = (child: Child) => {
    const dailyEarnings = child.chores.filter(c => c.frequency === 'daily' && c.isComplete).reduce((sum, c) => sum + c.value, 0);
    const weeklyEarnings = child.chores.filter(c => c.frequency === 'weekly' && c.isComplete).reduce((sum, c) => sum + c.value, 0);
    return dailyEarnings + weeklyEarnings;
  };
  
  const calculatePotentialEarnings = (child: Child) => {
    const dailyPotential = child.chores.filter(c => c.frequency === 'daily').reduce((sum, c) => sum + c.value, 0);
    const weeklyPotential = child.chores.filter(c => c.frequency === 'weekly').reduce((sum, c) => sum + c.value, 0);
    return (dailyPotential * 7) + weeklyPotential;
  };

  if (!isMounted) return null;

  return (
    <>
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div className="flex-1">
              <CardTitle className="font-headline text-xl flex items-center">
                <Coins className="mr-2 h-5 w-5 text-primary" />
                Allowance & Chore Tracker
              </CardTitle>
              <CardDescription className="font-body">
                A tool to manage chores and teach your children the value of earning.
              </CardDescription>
            </div>
            <div className="flex gap-2">
                 <Button variant="outline" onClick={resetCompletion}>Reset Week</Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {children.map(child => (
              <Card key={child.id} className="bg-muted/30">
                <CardHeader className="flex flex-row items-center justify-between py-3 px-4">
                  <h3 className="text-lg font-semibold">{child.name}</h3>
                  <div className="flex items-center gap-2">
                    <AddChoreDialog onAddChore={(chore) => addChore(child.id, chore)} />
                     <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive" onClick={() => removeChild(child.id)}><Trash2 className="h-4 w-4" /></Button>
                  </div>
                </CardHeader>
                <CardContent className="px-4 pb-4">
                  {child.chores.length === 0 ? (
                    <p className="text-center text-sm text-muted-foreground py-4">No chores assigned yet.</p>
                  ) : (
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Daily Chores</h4>
                        <div className="space-y-2">
                        {child.chores.filter(c => c.frequency === 'daily').map(chore => (
                           <div key={chore.id} className="flex items-center justify-between p-2 rounded-md bg-background">
                            <div className="flex items-center">
                              <Checkbox id={`${child.id}-${chore.id}`} checked={chore.isComplete} onCheckedChange={() => toggleChoreCompletion(child.id, chore.id)} className="mr-3" />
                              <Label htmlFor={`${child.id}-${chore.id}`} className={cn("text-sm", chore.isComplete && "line-through text-muted-foreground")}>{chore.description}</Label>
                            </div>
                             <div className="flex items-center gap-2">
                                <span className="text-sm font-medium">{formatCurrency(chore.value)}</span>
                                <Button variant="ghost" size="icon" className="h-6 w-6 text-destructive/70" onClick={() => removeChore(child.id, chore.id)}><X className="h-3 w-3" /></Button>
                             </div>
                           </div>
                        ))}
                        {child.chores.filter(c => c.frequency === 'daily').length === 0 && <p className="text-xs text-muted-foreground">No daily chores.</p>}
                        </div>
                      </div>
                      <Separator />
                       <div>
                        <h4 className="font-semibold text-sm mb-2">Weekly Chores</h4>
                        <div className="space-y-2">
                        {child.chores.filter(c => c.frequency === 'weekly').map(chore => (
                           <div key={chore.id} className="flex items-center justify-between p-2 rounded-md bg-background">
                            <div className="flex items-center">
                              <Checkbox id={`${child.id}-${chore.id}`} checked={chore.isComplete} onCheckedChange={() => toggleChoreCompletion(child.id, chore.id)} className="mr-3" />
                              <Label htmlFor={`${child.id}-${chore.id}`} className={cn("text-sm", chore.isComplete && "line-through text-muted-foreground")}>{chore.description}</Label>
                            </div>
                             <div className="flex items-center gap-2">
                                <span className="text-sm font-medium">{formatCurrency(chore.value)}</span>
                                <Button variant="ghost" size="icon" className="h-6 w-6 text-destructive/70" onClick={() => removeChore(child.id, chore.id)}><X className="h-3 w-3" /></Button>
                             </div>
                           </div>
                        ))}
                         {child.chores.filter(c => c.frequency === 'weekly').length === 0 && <p className="text-xs text-muted-foreground">No weekly chores.</p>}
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
                <CardFooter className="bg-muted py-2 px-4 flex justify-between">
                     <p className="text-sm font-semibold">Weekly Total Earned: <span className="text-green-600">{formatCurrency(calculateEarnings(child))}</span></p>
                     <p className="text-xs text-muted-foreground">Potential Weekly: {formatCurrency(calculatePotentialEarnings(child))}</p>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="mt-6">
            <h4 className="font-semibold mb-2">Add a Child</h4>
            <div className="flex items-center gap-2">
              <Input placeholder="Child's name" value={newChildName} onChange={e => setNewChildName(e.target.value)} />
              <Button onClick={addChild}><UserPlus className="mr-2 h-4 w-4" /> Add Child</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}