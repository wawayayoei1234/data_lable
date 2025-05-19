
"use client";

import type { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface SolutionCardProps {
  icon: LucideIcon;
  title: string;
  content: string; // Main content/description for the service
  animationDelay?: string;
}

export default function SolutionCard({ icon: Icon, title, content, animationDelay = '0s' }: SolutionCardProps) {
  return (
    <Card 
      className="h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up-custom opacity-0"
      style={{ animationDelay, animationFillMode: 'forwards' }}
    >
      <CardHeader className="flex flex-row items-start gap-4 pb-4">
        <div className="p-3 bg-primary/10 rounded-full shrink-0">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <div className="flex-grow">
          <CardTitle className="text-xl font-semibold text-foreground">{title}</CardTitle>
          {/* CardDescription removed from here, content will be in CardContent */}
        </div>
      </CardHeader>
      <CardContent className="flex-grow pt-0">
        <p className="text-sm text-muted-foreground">
          {content}
        </p>
      </CardContent>
    </Card>
  );
}
