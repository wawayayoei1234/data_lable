
"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const [currentLang, setCurrentLang] = useState('th'); // Default to Thai
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // In a real application, you might load the preferred language from localStorage here
    // e.g., const savedLang = localStorage.getItem('preferredLang');
    // if (savedLang === 'en' || savedLang === 'th') setCurrentLang(savedLang);
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.lang = currentLang;
      // In a real application, you might save the preferred language to localStorage here
      // e.g., localStorage.setItem('preferredLang', currentLang);
    }
  }, [currentLang, mounted]);

  const toggleLanguage = () => {
    const newLang = currentLang === 'th' ? 'en' : 'th';
    setCurrentLang(newLang);
    // This is where you would typically trigger your i18n library to change content
    console.log(`Language switched to: ${newLang}`);
  };

  if (!mounted) {
    // Render a placeholder or disabled button to avoid hydration mismatch and layout shifts
    return (
      <Button variant="outline" size="sm" aria-label="Loading language options" disabled className="w-[80px]">
        <Globe className="h-4 w-4 mr-2 flex-shrink-0" />
        <span className="flex-grow text-center">...</span>
      </Button>
    );
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      aria-label={`Switch to ${currentLang === 'th' ? 'English' : 'ภาษาไทย'}`}
      className="w-[80px]" // Fixed width to prevent layout shift
    >
      <Globe className="h-4 w-4 mr-2 flex-shrink-0" />
      <span className="flex-grow text-center">
        {currentLang === 'th' ? 'ENG' : 'ไทย'}
      </span>
    </Button>
  );
}
