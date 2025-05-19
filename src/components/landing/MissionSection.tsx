"use client";

import { useEffect, useState } from 'react';

export default function MissionSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <section className="py-12 md:py-20 bg-background">
        <div className="h-8 w-1/3 bg-muted rounded mx-auto mb-6"></div>
        <div className="h-6 w-3/4 bg-muted rounded mx-auto mb-4"></div>
        <div className="h-6 w-2/3 bg-muted rounded mx-auto"></div>
      </section>
    );
  }
  
  return (
    <section className="py-12 md:py-20 bg-background text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary animate-fade-in-up-custom opacity-0" style={{ animationFillMode: 'forwards' }}>
          Our Mission & Vision
        </h2>
        <div className="space-y-6">
          <div className="animate-fade-in-up-custom opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <h3 className="text-2xl font-semibold mb-2 text-foreground">Mission</h3>
            <p className="text-lg text-muted-foreground">
              To empower businesses with cutting-edge technology solutions, fostering sustainable growth and driving innovation in an ever-evolving digital landscape. We are committed to delivering excellence and value to our clients.
            </p>
          </div>
          <div className="animate-fade-in-up-custom opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <h3 className="text-2xl font-semibold mb-2 text-foreground">Vision</h3>
            <p className="text-lg text-muted-foreground">
              To be a globally recognized leader in digital transformation, shaping the future of industries through synergistic partnerships and pioneering technological advancements. We aim to create a better, more connected world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
