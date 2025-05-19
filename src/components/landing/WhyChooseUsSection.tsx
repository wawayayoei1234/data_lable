
"use client";

import { CheckCircle, Award, Users, Briefcase, Star } from 'lucide-react';
import { useEffect, useState } from 'react';

const reasons = [
  {
    icon: Award,
    text: "ประสบการณ์มากกว่า 10 ปีในอุตสาหกรรม",
    delay: "0.2s"
  },
  {
    icon: Users,
    text: "ทีมวิศวกรมืออาชีพ",
    delay: "0.4s"
  },
  {
    icon: Briefcase,
    text: "รองรับธุรกิจขนาดเล็กถึงองค์กรขนาดใหญ่",
    delay: "0.6s"
  },
  {
    icon: Star,
    text: "ได้รับความไว้วางใจจากบริษัทชั้นนำ",
    delay: "0.8s"
  }
];

export default function WhyChooseUsSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="h-10 w-1/2 bg-muted rounded mx-auto mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-start space-x-3">
                <div className="h-6 w-6 bg-muted rounded-full"></div>
                <div className="h-6 w-3/4 bg-muted rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary animate-fade-in-up-custom opacity-0" style={{ animationFillMode: 'forwards' }}>
          ทำไมต้องเลือกเรา?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 text-left">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="flex items-start space-x-3 animate-fade-in-up-custom opacity-0"
              style={{ animationDelay: reason.delay, animationFillMode: 'forwards' }}
            >
              <reason.icon className="w-7 h-7 text-accent flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg text-foreground leading-relaxed">
                  {reason.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
