"use client";

import SolutionCard from './SolutionCard';
import { Cpu, Cloud, BrainCircuit, Zap } from 'lucide-react'; // Added Zap for AI & ML
import { useEffect, useState } from 'react';

const solutions = [
  {
    icon: Cpu,
    title: "Software Solutions",
    description: "Custom software development, robust mobile applications, and scalable web platforms tailored to your unique business needs.",
    features: ["Custom ERP Development", "Mobile App Solutions", "Web Platform Engineering"],
    delay: "0.2s"
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description: "Seamless cloud migration, secure infrastructure management, and efficient DevOps solutions to optimize your operations.",
    features: ["Cloud Migration Services", "Managed Cloud Infrastructure", "DevOps & Automation"],
    delay: "0.4s"
  },
  {
    icon: Zap, // Using Zap for a more dynamic AI icon
    title: "AI & Machine Learning",
    description: "AI-powered analytics, predictive machine learning models, and intelligent automation to unlock new possibilities.",
    features: ["AI-Powered Analytics", "Machine Learning Models", "Natural Language Processing"],
    delay: "0.6s"
  },
];

export default function SolutionsSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    // Basic skeleton loader for the section
    return (
      <section className="py-12 md:py-20 bg-secondary/50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="h-10 w-1/2 bg-muted rounded mx-auto mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
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
          Explore Our Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
