"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="relative w-full min-h-[70vh] md:min-h-[80vh] flex items-center justify-center bg-secondary">
        {/* Placeholder for SSR/initial load to prevent layout shift or show loading state */}
        <div className="animate-pulse flex flex-col items-center space-y-4">
          <div className="h-12 w-3/4 bg-muted rounded"></div>
          <div className="h-8 w-1/2 bg-muted rounded"></div>
          <div className="flex space-x-4">
            <div className="h-10 w-32 bg-muted rounded"></div>
            <div className="h-10 w-32 bg-muted rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="relative w-full min-h-[70vh] md:min-h-[80vh] flex items-center justify-center text-center text-white overflow-hidden">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Modern technology and teamwork"
        layout="fill"
        objectFit="cover"
        quality={90}
        priority
        className="z-0"
        data-ai-hint="technology teamwork abstract"
      />
      <div className="absolute inset-0 bg-black/60 z-10"></div> {/* Overlay for text readability */}
      
      <div className="relative z-20 p-6 sm:p-8 max-w-3xl animate-fade-in-up-custom opacity-0" style={{ animationDelay: '0.2s' }}>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-primary-foreground leading-tight">
          บริษัทเทคโนโลยีเพื่ออนาคตธุรกิจของคุณ
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-10 text-primary-foreground/90">
          เรานำเสนอโซลูชันด้านซอฟต์แวร์ คลาวด์ และ AI ที่ช่วยให้ธุรกิจเติบโตอย่างยั่งยืน
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground animate-fade-in-up-custom opacity-0" 
            style={{ animationDelay: '0.4s' }}
            onClick={() => console.log('Contact Us clicked')}
            aria-label="ติดต่อเรา"
          >
            <Phone className="mr-2 h-5 w-5" />
            ติดต่อเรา
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10 animate-fade-in-up-custom opacity-0" 
            style={{ animationDelay: '0.6s' }}
            onClick={() => console.log('See All Services clicked')}
            aria-label="ดูบริการทั้งหมด"
          >
            ดูบริการทั้งหมด
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
