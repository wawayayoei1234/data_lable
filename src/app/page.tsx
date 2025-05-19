

import HeroSection from '@/components/landing/HeroSection';
import SolutionsSection from '@/components/landing/SolutionsSection';
import WhyChooseUsSection from '@/components/landing/WhyChooseUsSection';
import AboutUsSection from '@/components/landing/AboutUsSection';
import PortfolioSection from '@/components/landing/PortfolioSection';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen">
      <HeroSection />
      <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SolutionsSection />
        <Separator className="my-12 md:my-16" />
        <WhyChooseUsSection />
        <Separator className="my-12 md:my-16" />
        <AboutUsSection />
        <Separator className="my-12 md:my-16" />
        <PortfolioSection />
      </div>
      <footer className="w-full py-8 mt-16 text-center border-t">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} TechX. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
