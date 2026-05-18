import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  metadataBase: new URL("https://miway.in"),
  title: {
    default: "MIWAY | Future of Education",
    template: "%s | MIWAY",
  },

  description:
    "Neuroscience-based, learner-centric educational publishing. Redefining the learning experience through Whole Brain Learning and Multiple Intelligences.",

  keywords: [
    "MIWAY",
    "Educational Publishing",
    "Neuroscience Education",
    "Whole Brain Learning",
    "Teaching Aids India",
  ],

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  openGraph: {
    title: "MIWAY Teaching Aids",
    description:
      "Redefining the future of learning through scientific pedagogy.",
    url: "https://miway.in",
    siteName: "MIWAY",

    images: [
      {
        url: "/favicon.png",
        width: 1200,
        height: 630,
        alt: "MIWAY Teaching Aids",
      },
    ],

    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body suppressHydrationWarning className="antialiased selection:bg-accent/30 selection:text-primary">
                {/* Global Noise Texture */}
                <div className="noise-overlay" />
                
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
