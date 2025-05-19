
import type {Metadata} from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import SiteHeader from '@/components/layout/SiteHeader'; // Import the new SiteHeader

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'TechX',
  description: 'บริษัทเทคโนโลยีเพื่ออนาคตธุรกิจของคุณ | โซลูชันซอฟต์แวร์, คลาวด์, และ AI',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // The lang attribute here is the initial server-rendered language.
    // The LanguageSwitcher component will update document.documentElement.lang on the client-side.
    <html lang="th">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>
        <SiteHeader /> {/* Add the SiteHeader here */}
        <main vaul-drawer-wrapper="" className="min-h-[calc(100vh-3.5rem-1px)] bg-background"> {/* Added main wrapper to ensure footer is pushed down if content is short */}
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}
