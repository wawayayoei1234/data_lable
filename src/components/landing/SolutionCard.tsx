"use client";

import type { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

interface SolutionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  animationDelay?: string;
}

export default function SolutionCard({ icon: Icon, title, description, features, animationDelay = '0s' }: SolutionCardProps) {
  return (
    <Card 
      className="h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up-custom opacity-0"
      style={{ animationDelay, animationFillMode: 'forwards' }}
    >
      <CardHeader className="flex flex-row items-start gap-4 pb-4">
        <div className="p-3 bg-primary/10 rounded-full">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <div>
          <CardTitle className="text-xl font-semibold text-foreground">{title}</CardTitle>
          <CardDescription className="text-sm text-muted-foreground mt-1">{description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex-grow pt-0">
        <ul className="space-y-2 mt-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-foreground">
              <CheckCircle className="w-4 h-4 mr-2 text-accent flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
