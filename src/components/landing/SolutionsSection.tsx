
"use client";

import SolutionCard from './SolutionCard';
import { TabletSmartphone, CloudCog, BrainCircuit, ShieldCheck } from 'lucide-react';
import { useEffect, useState } from 'react';

const solutions = [
  {
    icon: TabletSmartphone,
    title: "พัฒนาเว็บและแอปมือถือ",
    description: "สร้างสรรค์เว็บแอปพลิเคชันและแอปมือถือที่ตอบโจทย์ธุรกิจของคุณด้วยเทคโนโลยีล่าสุด",
    features: ["ออกแบบ UI/UX ทันสมัย", "พัฒนา Frontend และ Backend", "รองรับทุกแพลตฟอร์ม"],
    delay: "0.2s"
  },
  {
    icon: CloudCog,
    title: "ระบบคลาวด์และโครงสร้างพื้นฐาน",
    description: "บริการคลาวด์ครบวงจร ตั้งแต่การวางแผน จัดการ จนถึงการปรับปรุงประสิทธิภาพและความปลอดภัย",
    features: ["วางแผนและย้ายระบบขึ้นคลาวด์", "บริหารจัดการโครงสร้างพื้นฐาน", "DevOps และ Automation"],
    delay: "0.4s"
  },
  {
    icon: BrainCircuit,
    title: "การวิเคราะห์ข้อมูลและ AI",
    description: "เปลี่ยนข้อมูลดิบให้เป็นข้อมูลเชิงลึกที่มีค่า ขับเคลื่อนธุรกิจด้วย AI และ Machine Learning",
    features: ["วิเคราะห์ข้อมูลเชิงลึก", "สร้างโมเดล Machine Learning", "ระบบ AI อัจฉริยะ"],
    delay: "0.6s"
  },
  {
    icon: ShieldCheck,
    title: "ระบบความปลอดภัยทางไซเบอร์",
    description: "ปกป้องข้อมูลและระบบธุรกิจของคุณจากภัยคุกคามทางไซเบอร์ด้วยโซลูชันที่ทันสมัย",
    features: ["ประเมินความเสี่ยงความปลอดภัย", "ติดตั้งระบบป้องกันและตรวจจับ", "เฝ้าระวังและตอบสนองต่อเหตุการณ์"],
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
          <div className="h-10 w-1/2 bg-muted rounded mx-auto mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-card p-6 rounded-lg shadow-lg">
                <div className="h-8 w-8 bg-muted rounded-full mb-4"></div>
                <div className="h-6 w-3/4 bg-muted rounded mb-2"></div>
                <div className="h-4 w-full bg-muted rounded mb-1"></div>
                <div className="h-4 w-5/6 bg-muted rounded"></div>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"> {/* Changed lg:grid-cols-4 to lg:grid-cols-2 for better display with 4 items in max-w-5xl */}
          {solutions.map((solution) => (
            <SolutionCard
              key={solution.title}
              icon={solution.icon}
              title={solution.title}
              description={solution.description}
              features={solution.features}
              animationDelay={solution.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
