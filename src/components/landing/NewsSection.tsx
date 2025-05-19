
"use client";

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Newspaper, CalendarDays, ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

interface NewsItem {
  id: string;
  type: 'article' | 'event';
  title: string;
  // description?: string; // Add if needed later
  // date?: string; // Add if needed later
  icon: LucideIcon;
  imageUrl?: string; // Optional image for the card
  aiHint?: string; // AI hint for placeholder if imageUrl is a placeholder
}

const newsItems: NewsItem[] = [
  {
    id: 'news-1',
    type: 'article',
    title: 'การใช้ AI ในธุรกิจ SMEs',
    icon: Newspaper,
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'ai business sme',
  },
  {
    id: 'news-2',
    type: 'article',
    title: '5 เทรนด์เทคโนโลยีในปี 2025',
    icon: Newspaper,
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'technology trends future',
  },
  {
    id: 'news-3',
    type: 'event',
    title: 'ร่วมงานสัมมนา TechTalk Thailand',
    icon: CalendarDays,
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'seminar tech event',
  },
];

export default function NewsSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <div className="h-10 w-3/4 sm:w-1/2 bg-muted rounded mx-auto mb-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-card rounded-lg shadow-md animate-pulse overflow-hidden">
                <div className="w-full h-40 bg-muted"></div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-muted rounded-full"></div>
                    <div className="h-6 w-3/4 bg-muted rounded"></div>
                  </div>
                  {/* Optional: Skeleton for description */}
                  {/* <div className="h-4 w-full bg-muted rounded mb-2"></div>
                  <div className="h-4 w-5/6 bg-muted rounded"></div> */}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <div className="h-10 w-40 bg-muted rounded mx-auto"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary animate-fade-in-up-custom opacity-0" style={{ animationFillMode: 'forwards' }}>
            ข่าวสารล่าสุด
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden animate-fade-in-up-custom opacity-0"
              style={{ animationDelay: `${0.2 + index * 0.2}s`, animationFillMode: 'forwards' }}
            >
              {item.imageUrl && (
                <div className="relative w-full h-40 sm:h-48">
                  <Image
                    src={item.imageUrl}
                    alt={`รูปภาพประกอบ ${item.title}`}
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint={item.aiHint}
                  />
                </div>
              )}
              <CardHeader className="pb-3 pt-5">
                <div className="flex items-center gap-3">
                  <item.icon className="w-7 h-7 text-accent flex-shrink-0" />
                  <CardTitle className="text-lg font-semibold text-foreground leading-tight">{item.title}</CardTitle>
                </div>
              </CardHeader>
              {/* Optional: CardContent for description or date
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground">
                  {item.description || 'อ่านเพิ่มเติม...'}
                </p>
              </CardContent>
              */}
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center animate-fade-in-up-custom opacity-0" style={{ animationDelay: `${0.2 + newsItems.length * 0.2}s`, animationFillMode: 'forwards' }}>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => console.log('View All News clicked')}
            aria-label="ดูข่าวสารทั้งหมด"
            className="border-primary text-primary hover:bg-primary/10"
          >
            ดูข่าวสารทั้งหมด
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}

