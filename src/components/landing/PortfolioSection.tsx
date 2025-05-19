
"use client";

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect, useState } from 'react';

const portfolioItems = [
  {
    title: 'Project A: ระบบ ERP สำหรับธุรกิจโลจิสติกส์',
    description: 'พัฒนาระบบ Enterprise Resource Planning (ERP) ครบวงจร ช่วยเพิ่มประสิทธิภาพการจัดการและลดต้นทุนให้กับธุรกิจโลจิสติกส์ชั้นนำ',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'logistics software',
  },
  {
    title: 'Project B: แอปสั่งอาหารออนไลน์',
    description: 'สร้างสรรค์แอปพลิเคชันสั่งอาหารใช้งานง่าย ตอบโจทย์ไลฟ์สไตล์ยุคใหม่ พร้อมระบบจัดการร้านค้าและโปรโมชันครบครัน',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'food app mobile',
  },
  {
    title: 'Project C: Dashboard วิเคราะห์ข้อมูลสำหรับองค์กร',
    description: 'ออกแบบและพัฒนา Dashboard แสดงผลข้อมูลเชิงลึก ช่วยให้ผู้บริหารตัดสินใจทางธุรกิจได้อย่างแม่นยำและรวดเร็ว',
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'dashboard analytics',
  },
];

export default function PortfolioSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <section className="py-12 md:py-20 bg-secondary/30 rounded-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <div className="h-10 w-3/4 sm:w-1/2 bg-muted rounded mx-auto mb-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-card rounded-lg shadow-md animate-pulse overflow-hidden">
                <div className="w-full h-48 bg-muted"></div>
                <div className="p-6">
                  <div className="h-6 w-3/4 bg-muted rounded mb-3"></div>
                  <div className="h-4 w-full bg-muted rounded mb-2"></div>
                  <div className="h-4 w-5/6 bg-muted rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-20 bg-secondary/30 rounded-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary animate-fade-in-up-custom opacity-0" style={{ animationFillMode: 'forwards' }}>
            ตัวอย่างผลงาน
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Card 
              key={index} 
              className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden animate-fade-in-up-custom opacity-0"
              style={{ animationDelay: `${0.2 + index * 0.2}s`, animationFillMode: 'forwards' }}
            >
              <div className="relative w-full h-48 sm:h-56">
                <Image
                  src={item.imageUrl}
                  alt={`รูปภาพของ ${item.title}`}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={item.aiHint}
                />
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-semibold text-foreground leading-tight">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
