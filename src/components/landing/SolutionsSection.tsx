
"use client";

import SolutionCard from './SolutionCard';
import { TabletSmartphone, CloudCog, BrainCircuit, ShieldCheck } from 'lucide-react';
import { useEffect, useState } from 'react';

const solutions = [
  {
    icon: TabletSmartphone,
    title: "พัฒนาเว็บไซต์และแอป",
    content: "รับออกแบบและพัฒนา Web & Mobile App ครบวงจร เพื่อตอบโจทย์ธุรกิจของคุณในทุกแพลตฟอร์มด้วยเทคโนโลยีที่ทันสมัย",
    delay: "0.2s"
  },
  {
    icon: CloudCog,
    title: "ระบบคลาวด์และ DevOps",
    content: "บริการให้คำปรึกษา วางแผน และติดตั้งระบบคลาวด์ ผสานแนวทาง DevOps เพื่อการทำงานที่รวดเร็ว มีประสิทธิภาพ และคุ้มค่า",
    delay: "0.4s"
  },
  {
    icon: BrainCircuit,
    title: "วิเคราะห์ข้อมูล (BI/AI/ML)",
    content: "เปลี่ยนข้อมูลดิบให้เป็นข้อมูลเชิงลึกที่มีค่า ขับเคลื่อนการตัดสินใจทางธุรกิจด้วย Business Intelligence, AI, และ Machine Learning",
    delay: "0.6s"
  },
  {
    icon: ShieldCheck,
    title: "ระบบความปลอดภัยไซเบอร์",
    content: "ปกป้องข้อมูลและระบบสำคัญของธุรกิจคุณจากภัยคุกคามทางไซเบอร์รอบด้าน ด้วยโซลูชันที่ทันสมัยและทีมผู้เชี่ยวชาญ",
    delay: "0.8s"
  }
];

export default function SolutionsSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    // Basic skeleton loader for the section
    return (
      <section className="py-12 md:py-20 bg-secondary/30 rounded-lg">
        <div className="max-w-5xl mx-auto px-4">
          <div className="h-10 w-3/4 sm:w-1/2 bg-muted rounded mx-auto mb-12"></div> {/* Title Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-card p-6 rounded-lg shadow-md animate-pulse">
                <div className="flex items-start gap-4 mb-4"> {/* Header Skeleton */}
                  <div className="w-10 h-10 bg-muted rounded-full p-3 shrink-0"></div> {/* Icon Skeleton */}
                  <div className="flex-grow">
                    <div className="h-6 w-3/4 bg-muted rounded mb-1"></div> {/* Title Skeleton */}
                  </div>
                </div>
                <div className="space-y-2"> {/* Content Skeleton */}
                  <div className="h-4 w-full bg-muted rounded"></div>
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
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary animate-fade-in-up-custom opacity-0" style={{ animationFillMode: 'forwards' }}>
          บริการของเรา
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {solutions.map((solution) => (
            <SolutionCard
              key={solution.title}
              icon={solution.icon}
              title={solution.title}
              content={solution.content}
              animationDelay={solution.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
