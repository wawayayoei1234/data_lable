import HeroSection from '@/components/landing/HeroSection';
import MissionSection from '@/components/landing/MissionSection';
import SolutionsSection from '@/components/landing/SolutionsSection';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen">
      <HeroSection />
      <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <MissionSection />
        <Separator className="my-12 md:my-16" />
        <SolutionsSection />
      </div>
      <footer className="w-full py-8 mt-16 text-center border-t">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} SynergyTech Solutions. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
