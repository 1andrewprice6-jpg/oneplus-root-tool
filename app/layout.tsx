import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { Smartphone } from "lucide-react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OnePlus 12 Root Tool",
  description: "The complete toolkit for rooting and customizing your OnePlus 12",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <div className="min-h-screen bg-background">
          <header className="border-b bg-card">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                  <Smartphone className="h-8 w-8 text-primary" />
                  <h1 className="text-2xl font-bold">OnePlus 12 Root Tool</h1>
                </Link>
                <div className="flex items-center space-x-4">
                  <Link className="text-sm font-medium hover:text-primary transition-colors" href="/guides">Guides</Link>
                  <Link className="text-sm font-medium hover:text-primary transition-colors" href="/downloads">Downloads</Link>
                  <Link className="text-sm font-medium hover:text-primary transition-colors" href="/support">Support</Link>
                  <Link className="text-sm font-medium hover:text-primary transition-colors" href="/about">About</Link>
                </div>
              </nav>
            </div>
          </header>

          <main className="container mx-auto px-4 py-8">
            {children}
          </main>

          <footer className="border-t bg-card mt-16">
            <div className="container mx-auto px-4 py-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="font-semibold mb-3">Resources</h3>
                  <div className="space-y-2 text-sm">
                    <Link className="block hover:text-primary transition-colors" href="/guides">Rooting Guides</Link>
                    <Link className="block hover:text-primary transition-colors" href="/downloads">Downloads</Link>
                    <Link className="block hover:text-primary transition-colors" href="/firmware">Stock Firmware</Link>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Support</h3>
                  <div className="space-y-2 text-sm">
                    <Link className="block hover:text-primary transition-colors" href="/faq">FAQ</Link>
                    <Link className="block hover:text-primary transition-colors" href="/troubleshooting">Troubleshooting</Link>
                    <Link className="block hover:text-primary transition-colors" href="/contact">Contact Us</Link>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Community</h3>
                  <div className="space-y-2 text-sm">
                    <Link className="block hover:text-primary transition-colors" href="/forum">Forum</Link>
                    <Link className="block hover:text-primary transition-colors" href="/discord">Discord</Link>
                    <Link className="block hover:text-primary transition-colors" href="/reddit">Reddit</Link>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Legal</h3>
                  <div className="space-y-2 text-sm">
                    <Link className="block hover:text-primary transition-colors" href="/disclaimer">Disclaimer</Link>
                    <Link className="block hover:text-primary transition-colors" href="/privacy">Privacy Policy</Link>
                    <Link className="block hover:text-primary transition-colors" href="/terms">Terms of Service</Link>
                  </div>
                </div>
              </div>
              <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
                <p>© 2024 OnePlus Root Tool. Not affiliated with OnePlus Technology Co., Ltd.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
