
import LanguageSwitcher from '@/components/layout/LanguageSwitcher';

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-end px-4 md:px-6">
        {/* Placeholder for Logo or Site Title on the left if needed in future */}
        {/* <div>
          <a href="/" className="font-bold text-lg">TechX</a>
        </div> */}
        <LanguageSwitcher />
      </div>
    </header>
  );
}
