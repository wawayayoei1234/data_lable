
"use client";

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Eye } from 'lucide-react';
import { useEffect, useState } from 'react';

const teamMembers = [
  {
    name: 'คุณวิสัย ทัศนดี',
    position: 'CEO & Co-Founder',
    imageUrl: 'https://placehold.co/200x200.png',
    aiHint: 'man portrait ceo',
  },
  {
    name: 'คุณนวัต กรรมใหม่',
    position: 'CTO & Co-Founder',
    imageUrl: 'https://placehold.co/200x200.png',
    aiHint: 'woman portrait tech',
  },
  {
    name: 'คุณสร้างสรรค์ ผลิตผล',
    position: 'Lead Developer',
    imageUrl: 'https://placehold.co/200x200.png',
    aiHint: 'person developer',
  },
];

export default function AboutUsSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Skeleton for Title and Description */}
          <div className="text-center mb-12 md:mb-16">
            <div className="h-10 w-3/4 sm:w-1/2 bg-muted rounded mx-auto mb-4"></div>
            <div className="h-6 w-full sm:w-3/4 bg-muted rounded mx-auto"></div>
          </div>

          {/* Skeleton for Mission and Vision Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 md:mb-16">
            {[1, 2].map(i => (
              <div key={i} className="bg-card p-6 rounded-lg shadow-md animate-pulse">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-muted rounded-full"></div>
                  <div className="h-7 w-1/2 bg-muted rounded"></div>
                </div>
                <div className="h-4 w-full bg-muted rounded mb-2"></div>
                <div className="h-4 w-5/6 bg-muted rounded"></div>
              </div>
            ))}
          </div>

          {/* Skeleton for Team Title */}
          <div className="text-center mb-10 md:mb-12">
            <div className="h-8 w-1/3 bg-muted rounded mx-auto"></div>
          </div>

          {/* Skeleton for Team Member Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map((_, index) => (
              <div key={index} className="bg-card text-center p-6 rounded-lg shadow-md animate-pulse">
                <div className="w-24 h-24 sm:w-32 sm:h-32 bg-muted rounded-full mx-auto mb-4"></div>
                <div className="h-6 w-3/4 bg-muted rounded mx-auto mb-2"></div>
                <div className="h-4 w-1/2 bg-muted rounded mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 animate-fade-in-up-custom opacity-0" style={{ animationFillMode: 'forwards' }}>
            รู้จักกับบริษัทของเรา
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in-up-custom opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            บริษัท TechX ก่อตั้งขึ้นในปี 20xx มุ่งมั่นในการนำเสนอเทคโนโลยีที่ช่วยเปลี่ยนแปลงธุรกิจของลูกค้าให้ทันยุคสมัย
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12 md:mb-16">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up-custom opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <CardHeader className="flex flex-row items-center gap-3">
              <div className="p-3 bg-primary/10 rounded-full">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <CardTitle className="text-2xl text-foreground">พันธกิจ</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground">
                นำเทคโนโลยีมาพัฒนาองค์กรให้เติบโต
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up-custom opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            <CardHeader className="flex flex-row items-center gap-3">
               <div className="p-3 bg-primary/10 rounded-full">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <CardTitle className="text-2xl text-foreground">วิสัยทัศน์</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground">
                เป็นผู้นำด้านโซลูชันดิจิทัลในเอเชีย
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mb-10 md:mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-8 animate-fade-in-up-custom opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            <Users className="inline-block w-8 h-8 mr-2 align-bottom" />
            ทีมงานของเรา
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center animate-fade-in-up-custom opacity-0"
              style={{ animationDelay: `${1 + index * 0.2}s`, animationFillMode: 'forwards' }}
            >
              <Image
                src={member.imageUrl}
                alt={`รูปภาพของ ${member.name}`}
                width={120}
                height={120}
                className="rounded-full mx-auto mb-4 border-4 border-secondary shadow-md"
                data-ai-hint={member.aiHint}
              />
              <h4 className="text-xl font-semibold text-foreground mb-1">{member.name}</h4>
              <p className="text-base text-accent">{member.position}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

